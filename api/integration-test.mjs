import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";

const port = 8899;
const base = `http://127.0.0.1:${port}`;
const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), "student-radar-api-test-"));
const child = spawn(process.execPath, ["server.mjs"], { cwd: new URL(".", import.meta.url), env: { ...process.env, API_PORT: "", PORT: String(port), DATA_DIR: dataDir, OPENAI_API_KEY: "", SKIP_LOCAL_ENV: "true", AI_MOCK_MODE: "true", ENABLE_MOCK_PAYMENT: "true" }, stdio: ["ignore", "pipe", "pipe"] });
let stderr = ""; child.stderr.on("data", (chunk) => { stderr += chunk; });

function assert(condition, message) { if (!condition) throw new Error(message); }
async function request(pathname, options) { const response = await fetch(`${base}${pathname}`, options); const value = await response.json(); return { response, value }; }
async function waitForServer() {
  for (let attempt = 0; attempt < 30; attempt += 1) { try { const result = await request("/health"); if (result.response.ok) return result.value; } catch {} await new Promise((resolve) => setTimeout(resolve, 100)); }
  throw new Error("Server did not start");
}

try {
  const health = await waitForServer(); assert(health.aiMode === "mock" && health.aiReady === true && health.keyConfigured === false && health.paymentMode === "mock", "Unexpected test modes");
  const productResult = await request("/api/products"); assert(productResult.value.products.length === 4, "Expected four products");
  const invalid = await request("/api/orders", { method: "POST", headers: { "content-type": "application/json" }, body: "{}" }); assert(invalid.response.status === 400, "Invalid order guard failed");
  const clientId = crypto.randomUUID();
  const paper = { paperId: "2608.21360", title: "Test Paper", authors: ["Test Author"], abstract: "We introduce a test method and report a test result." };
  const contracts = {
    quick: ["evidence_notice", "key_results", "method", "reading_value", "research_question", "summary"],
    innovation: ["comparison_questions", "evidence_checks", "evidence_notice", "innovations", "summary"],
    deep: ["evidence_notice", "innovations", "key_results", "limitations", "method", "reading_value", "reproduction_steps", "research_question", "summary"],
    translate: ["evidence_notice", "glossary", "hard_sentences", "summary", "translation"]
  };
  let firstOrderId = "";
  for (const product of productResult.value.products) {
    const orderInput = { clientId, paperId: paper.paperId, paperTitle: paper.title, productId: product.id };
    const created = await request("/api/orders", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(orderInput) });
    assert(created.response.status === 201 && created.value.order.status === "pending_payment" && created.value.order.priceFen === product.priceFen, `${product.id}: order creation failed`);
    const orderId = created.value.order.id;
    if (!firstOrderId) {
      firstOrderId = orderId;
      const unpaid = await request(`/api/orders/${orderId}/generate`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ clientId, paper }) });
      assert(unpaid.response.status === 402, "Unpaid generation was not blocked");
    }
    const paid = await request(`/api/orders/${orderId}/mock-pay`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ clientId }) });
    assert(paid.value.order.status === "paid", `${product.id}: mock payment failed`);
    const generated = await request(`/api/orders/${orderId}/generate`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ clientId, paper }) });
    const keys = Object.keys(generated.value.order.analysis || {}).sort();
    assert(generated.value.order.status === "completed", `${product.id}: generation failed`);
    assert(JSON.stringify(keys) === JSON.stringify(contracts[product.id]), `${product.id}: product contract leaked or omitted fields (${keys.join(",")})`);
  }
  const repeated = await request(`/api/orders/${firstOrderId}/generate`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ clientId, paper }) }); assert(repeated.value.order.status === "completed", "Idempotent repeat failed");
  const history = await request(`/api/orders?clientId=${clientId}`);
  assert(history.response.ok && history.value.orders.length === 4 && history.value.orders.every((order) => order.status === "completed" && order.analysis), "Device order history failed");
  const emptyHistory = await request(`/api/orders?clientId=${crypto.randomUUID()}`);
  assert(emptyHistory.response.ok && emptyHistory.value.orders.length === 0, "Order history ownership isolation failed");
  const invalidHistory = await request("/api/orders"); assert(invalidHistory.response.status === 400, "Invalid history client guard failed");
  const wrongClient = await request(`/api/orders/${firstOrderId}?clientId=${crypto.randomUUID()}`); assert(wrongClient.response.status === 404, "Order ownership guard failed");
  console.log(JSON.stringify({ health: "ok", products: 4, productContracts: "isolated", unpaidGuard: "ok", mockPayment: "ok", entitlement: "ok", generation: "ok", orderHistory: "isolated", ownership: "ok" }));
} finally {
  child.kill();
  await new Promise((resolve) => child.once("exit", resolve));
  fs.rmSync(dataDir, { recursive: true, force: true });
  if (stderr && !/status.*400|status.*402|status.*404/.test(stderr)) process.stderr.write(stderr);
}

