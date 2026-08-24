import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";

const port = 8899;
const base = `http://127.0.0.1:${port}`;
const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), "student-radar-api-test-"));
const child = spawn(process.execPath, ["server.mjs"], { cwd: new URL(".", import.meta.url), env: { ...process.env, API_PORT: String(port), DATA_DIR: dataDir, OPENAI_API_KEY: "test-only", AI_MOCK_MODE: "true", ENABLE_MOCK_PAYMENT: "true" }, stdio: ["ignore", "pipe", "pipe"] });
let stderr = ""; child.stderr.on("data", (chunk) => { stderr += chunk; });

function assert(condition, message) { if (!condition) throw new Error(message); }
async function request(pathname, options) { const response = await fetch(`${base}${pathname}`, options); const value = await response.json(); return { response, value }; }
async function waitForServer() {
  for (let attempt = 0; attempt < 30; attempt += 1) { try { const result = await request("/health"); if (result.response.ok) return result.value; } catch {} await new Promise((resolve) => setTimeout(resolve, 100)); }
  throw new Error("Server did not start");
}

try {
  const health = await waitForServer(); assert(health.aiMode === "mock" && health.paymentMode === "mock", "Unexpected test modes");
  const productResult = await request("/api/products"); assert(productResult.value.products.length === 4, "Expected four products");
  const invalid = await request("/api/orders", { method: "POST", headers: { "content-type": "application/json" }, body: "{}" }); assert(invalid.response.status === 400, "Invalid order guard failed");
  const clientId = crypto.randomUUID();
  const orderInput = { clientId, paperId: "2608.21360", paperTitle: "Test Paper", productId: "quick" };
  const created = await request("/api/orders", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(orderInput) });
  assert(created.response.status === 201 && created.value.order.status === "pending_payment" && created.value.order.priceFen === 190, "Order creation failed");
  const orderId = created.value.order.id;
  const paper = { paperId: orderInput.paperId, title: orderInput.paperTitle, authors: ["Test Author"], abstract: "We introduce a test method and report a test result." };
  const unpaid = await request(`/api/orders/${orderId}/generate`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ clientId, paper }) }); assert(unpaid.response.status === 402, "Unpaid generation was not blocked");
  const paid = await request(`/api/orders/${orderId}/mock-pay`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ clientId }) }); assert(paid.value.order.status === "paid", "Mock payment failed");
  const generated = await request(`/api/orders/${orderId}/generate`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ clientId, paper }) }); assert(generated.value.order.status === "completed" && generated.value.order.analysis.summary, "Generation failed");
  const repeated = await request(`/api/orders/${orderId}/generate`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ clientId, paper }) }); assert(repeated.value.order.status === "completed", "Idempotent repeat failed");
  const wrongClient = await request(`/api/orders/${orderId}?clientId=${crypto.randomUUID()}`); assert(wrongClient.response.status === 404, "Order ownership guard failed");
  console.log(JSON.stringify({ health: "ok", products: 4, unpaidGuard: "ok", mockPayment: "ok", entitlement: "ok", generation: "ok", ownership: "ok" }));
} finally {
  child.kill();
  await new Promise((resolve) => child.once("exit", resolve));
  fs.rmSync(dataDir, { recursive: true, force: true });
  if (stderr && !/status.*400|status.*402|status.*404/.test(stderr)) process.stderr.write(stderr);
}

