import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const port = 8900;
const base = `http://127.0.0.1:${port}`;
const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), "student-radar-order-gate-"));
const child = spawn(process.execPath, ["server.mjs"], {
  cwd: new URL(".", import.meta.url),
  env: { ...process.env, API_PORT: "", PORT: String(port), DATA_DIR: dataDir, OPENAI_API_KEY: "", SKIP_LOCAL_ENV: "true", AI_MOCK_MODE: "true", ENABLE_MOCK_PAYMENT: "true", EMAIL_DELIVERY_MODE: "preview", EMAIL_EXPOSE_PREVIEW: "true", APP_BASE_URL: "http://127.0.0.1:8765", REQUIRE_ACCOUNT_FOR_ORDERS: "true", REQUIRE_VERIFIED_EMAIL_FOR_ORDERS: "true" },
  stdio: ["ignore", "pipe", "pipe"]
});

function assert(condition, message) { if (!condition) throw new Error(message); }
async function request(pathname, options) { const response = await fetch(`${base}${pathname}`, options); return { response, value: await response.json() }; }
async function waitForServer() {
  for (let attempt = 0; attempt < 30; attempt += 1) { try { const result = await request("/health"); if (result.response.ok) return result.value; } catch {} await new Promise((resolve) => setTimeout(resolve, 100)); }
  throw new Error("Server did not start");
}

try {
  const health = await waitForServer();
  assert(health.identityMode === "account_required" && health.orderAccountRequired && health.orderEmailVerifiedRequired, "Order gate health flags missing");
  const paper = { paperId: "2608.21360", paperTitle: "Order Gate Test", productId: "quick" };
  const anonymous = await request("/api/orders", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(paper) });
  assert(anonymous.response.status === 401 && anonymous.value.code === "authentication_required", "Anonymous order was accepted");
  const registered = await request("/api/auth/register", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "gate@example.com", password: "correct-horse-2026", nickname: "门槛测试" }) });
  const headers = { "content-type": "application/json", authorization: `Bearer ${registered.value.token}` };
  const unverified = await request("/api/orders", { method: "POST", headers, body: JSON.stringify(paper) });
  assert(unverified.response.status === 403 && unverified.value.code === "email_verification_required", "Unverified account order was accepted");
  const verifyToken = new URL(registered.value.emailPreviewUrl).searchParams.get("verify");
  await request("/api/auth/email/confirm", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ token: verifyToken }) });
  const verified = await request("/api/orders", { method: "POST", headers, body: JSON.stringify(paper) });
  assert(verified.response.status === 201 && verified.value.order.status === "pending_payment", "Verified account could not create order");
  console.log(JSON.stringify({ orderGate: "account-and-verified-email-required" }));
} finally {
  if (child.exitCode === null) { child.kill(); await new Promise((resolve) => child.once("exit", resolve)); }
  fs.rmSync(dataDir, { recursive: true, force: true });
}
