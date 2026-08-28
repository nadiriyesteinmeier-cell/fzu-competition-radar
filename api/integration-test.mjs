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
  const health = await waitForServer(); assert(health.aiMode === "mock" && health.aiReady === true && health.keyConfigured === false && health.paymentMode === "mock" && health.identityMode === "account_or_device" && health.volumeAttached === false && health.revision === "local", "Unexpected test modes");
  const productResult = await request("/api/products"); assert(productResult.value.products.length === 4, "Expected four products");
  const weakRegistration = await request("/api/auth/register", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "student@example.com", password: "short", nickname: "测试同学" }) });
  assert(weakRegistration.response.status === 400, "Weak password guard failed");
  const registered = await request("/api/auth/register", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "student@example.com", password: "correct-horse-2026", nickname: "测试同学" }) });
  assert(registered.response.status === 201 && registered.value.account.verification.status === "unverified" && registered.value.token, "Account registration failed");
  const token = registered.value.token; const authHeaders = { "content-type": "application/json", authorization: `Bearer ${token}` };
  const duplicate = await request("/api/auth/register", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "student@example.com", password: "correct-horse-2026", nickname: "测试同学" }) });
  assert(duplicate.response.status === 409, "Duplicate account guard failed");
  const anonymousMe = await request("/api/auth/me"); assert(anonymousMe.response.status === 401, "Anonymous account guard failed");
  const me = await request("/api/auth/me", { headers: authHeaders }); assert(me.response.ok && me.value.account.email === "student@example.com", "Account session failed");
  const profile = await request("/api/me/profile", { method: "PUT", headers: authHeaders, body: JSON.stringify({ nickname: "测试同学", school: "福州大学", major: "数字媒体技术", grade: "大三", language: "可以进行英文沟通" }) });
  assert(profile.response.ok && profile.value.account.profile.school === "福州大学" && profile.value.account.verification.status === "unverified", "Account profile save failed");
  const badLogin = await request("/api/auth/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "student@example.com", password: "wrong-password" }) });
  assert(badLogin.response.status === 401, "Invalid login guard failed");
  const loggedIn = await request("/api/auth/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "student@example.com", password: "correct-horse-2026" }) });
  assert(loggedIn.response.ok && loggedIn.value.token, "Account login failed");
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
  const accountOrder = await request("/api/orders", { method: "POST", headers: authHeaders, body: JSON.stringify({ paperId: paper.paperId, paperTitle: paper.title, productId: "quick" }) });
  assert(accountOrder.response.status === 201, "Account order creation failed");
  const accountHistory = await request("/api/orders", { headers: authHeaders });
  assert(accountHistory.response.ok && accountHistory.value.identityMode === "account" && accountHistory.value.orders.length === 1, "Cross-device account history failed");
  const deviceCannotReadAccountOrder = await request(`/api/orders/${accountOrder.value.order.id}?clientId=${clientId}`);
  assert(deviceCannotReadAccountOrder.response.status === 404, "Account order leaked to device identity");
  const loggedOut = await request("/api/auth/logout", { method: "POST", headers: authHeaders, body: "{}" }); assert(loggedOut.response.ok, "Logout failed");
  const expiredMe = await request("/api/auth/me", { headers: authHeaders }); assert(expiredMe.response.status === 401, "Logout session remained active");
  console.log(JSON.stringify({ health: "ok", products: 4, accounts: "session-backed", profiles: "server-backed", productContracts: "isolated", unpaidGuard: "ok", mockPayment: "ok", entitlement: "ok", generation: "ok", orderHistory: "account-and-device-isolated", ownership: "ok" }));
} finally {
  child.kill();
  await new Promise((resolve) => child.once("exit", resolve));
  fs.rmSync(dataDir, { recursive: true, force: true });
  if (stderr && !/status.*400|status.*402|status.*404/.test(stderr)) process.stderr.write(stderr);
}

