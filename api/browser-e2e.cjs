const { createRequire } = require("node:module");
const path = require("node:path");

const runtimeModules = process.env.PLAYWRIGHT_MODULE_PATH;
if (!runtimeModules) throw new Error("PLAYWRIGHT_MODULE_PATH is required");
const runtimeRequire = createRequire(path.join(runtimeModules, "package.json"));
const { chromium, devices } = runtimeRequire("playwright");
const siteBase = String(process.env.E2E_SITE_BASE || "http://127.0.0.1:8765").replace(/\/$/, "");
const apiBase = String(process.env.E2E_API_BASE || "http://127.0.0.1:8787").replace(/\/$/, "");

async function routeLocalConfig(page) {
  if (process.env.E2E_LIVE === "true") return;
  await page.route("**/config.js", (route) => route.fulfill({ contentType: "application/javascript", body: `window.STUDENT_RADAR_CONFIG=Object.freeze({apiBase:${JSON.stringify(apiBase)}});` }));
}

async function run(name, contextOptions, productName, expectedHeading, forbiddenHeading, screenshotPath) {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const context = await browser.newContext({ ...contextOptions, serviceWorkers: "block" });
  const page = await context.newPage();
  await routeLocalConfig(page);
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  await page.goto(`${siteBase}/paper-analysis.html?id=2608.21360`, { waitUntil: "networkidle" });
  await page.getByText(/(?:本地|云端)AI已连接/).waitFor();
  await page.getByRole("button", { name: new RegExp(productName) }).click();
  await page.locator("#mock-unlock").click();
  await page.getByRole("heading", { name: "AI精读已生成" }).waitFor();
  await page.getByText(/订单完成/).waitFor();
  const count = await page.locator("#reading-count").textContent();
  const stepsDone = await page.locator(".checkout-steps .is-done").count();
  const headings = await page.locator("#analysis-result-grid h3").allTextContents();
  if (!count || !count.includes("1 条")) throw new Error(`${name}: reading list was not saved (${count})`);
  if (stepsDone !== 3) throw new Error(`${name}: expected 3 completed checkout steps, got ${stepsDone}`);
  if (!headings.includes(expectedHeading)) throw new Error(`${name}: missing contracted heading ${expectedHeading}`);
  if (forbiddenHeading && headings.includes(forbiddenHeading)) throw new Error(`${name}: leaked heading ${forbiddenHeading}`);
  if (errors.length) throw new Error(`${name}: browser errors: ${errors.join(" | ")}`);
  if (screenshotPath) await page.screenshot({ path: screenshotPath, fullPage: true });
  await page.evaluate(() => localStorage.removeItem("student-radar-paper-orders-v1"));
  await page.reload({ waitUntil: "networkidle" });
  await page.getByText(/(?:本地|云端)AI已连接/).waitFor();
  const restoredCount = await page.locator("#reading-count").textContent();
  if (!restoredCount || !restoredCount.includes("1 条")) throw new Error(`${name}: server history did not restore local reading list (${restoredCount})`);
  await browser.close();
  return { name, productName, readingCount: count.trim(), restored: restoredCount.trim(), checkoutSteps: stepsDone, headings: headings.length };
}

async function runAccount() {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 1000 }, serviceWorkers: "block" });
  const page = await context.newPage(); const errors = [];
  await routeLocalConfig(page);
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  const email = `e2e-${Date.now()}@example.com`;
  await page.goto(`${siteBase}/profile.html`, { waitUntil: "networkidle" });
  await page.locator("#account-email").fill(email); await page.locator("#account-password").fill("test-account-2026"); await page.locator("#account-nickname").fill("跨设备同学");
  const registrationResponse = page.waitForResponse((response) => response.url().endsWith("/api/auth/register")); await page.locator("#account-register").click(); const registration = await (await registrationResponse).json(); await page.locator("#account-session").waitFor();
  if (!registration.emailPreviewUrl) throw new Error("account: verification preview URL missing");
  await page.goto(registration.emailPreviewUrl, { waitUntil: "networkidle" }); await page.getByText("邮箱验证成功").waitFor(); if (await page.locator("#email-verification-label").textContent() !== "邮箱已验证") throw new Error("account: verified email state was not rendered");
  await page.locator("#profile-major").fill("数字媒体技术"); await page.locator("#profile-form").getByRole("button", { name: "保存并同步档案" }).click();
  await page.getByText("档案已安全同步").waitFor(); await page.reload({ waitUntil: "networkidle" });
  await page.locator("#account-email-label").getByText(email).waitFor();
  if (await page.locator("#profile-major").inputValue() !== "数字媒体技术") throw new Error("account: synchronized profile was not restored");
  if (errors.length) throw new Error(`account: browser errors: ${errors.join(" | ")}`);
  await page.screenshot({ path: path.join(process.env.E2E_OUTPUT_DIR || process.cwd(), "profile-account-desktop.png"), fullPage: true });
  await page.locator("#account-logout").click(); await page.locator("#forgot-password").click(); await page.locator("#forgot-email").fill(email); const forgotResponse = page.waitForResponse((response) => response.url().endsWith("/api/auth/password/forgot")); await page.locator("#forgot-password-form").getByRole("button", { name: "发送重置邮件" }).click(); const forgot = await (await forgotResponse).json();
  if (!forgot.previewUrl) throw new Error("account: password reset preview URL missing");
  await page.goto(forgot.previewUrl, { waitUntil: "networkidle" }); await page.locator("#reset-new-password").fill("test-account-reset-2026"); await page.locator("#reset-password-form").getByRole("button", { name: "确认重置密码" }).click(); await page.getByText("密码已重置").waitFor();
  await page.locator("#account-email").fill(email); await page.locator("#account-password").fill("test-account-reset-2026"); await page.locator("#account-login").click(); await page.locator("#account-session").waitFor();
  await page.getByText("修改密码", { exact: true }).click(); await page.locator("#current-password").fill("test-account-reset-2026"); await page.locator("#new-password").fill("test-account-updated-2026"); await page.locator("#password-form").getByRole("button").click();
  await page.waitForTimeout(1200); const passwordStatus = await page.locator("#account-status").textContent(); if (!passwordStatus?.includes("密码已更新")) throw new Error(`account: password update failed (${passwordStatus})`);
  await page.getByText("删除账号与云端数据", { exact: true }).click(); await page.locator("#delete-password").fill("test-account-updated-2026"); await page.locator("#delete-confirm").check();
  page.once("dialog", (dialog) => dialog.accept()); await page.locator("#delete-account-form").getByRole("button", { name: "永久删除账号" }).click(); await page.getByText("账号与云端数据已永久删除").waitFor();
  if (!(await page.locator("#account-form").isVisible())) throw new Error("account: registration form did not return after deletion");
  await browser.close(); return { name: "account-profile", registered: true, emailVerified: true, profileRestored: true, passwordReset: true, passwordChanged: true, accountDeleted: true };
}

(async () => {
  const outputDir = process.env.E2E_OUTPUT_DIR || process.cwd();
  const results = [];
  const desktop = { viewport: { width: 1440, height: 1000 } };
  if (process.env.E2E_LIVE === "true") {
    results.push(await run("live-mobile-innovation", { ...devices["iPhone 13"] }, "创新点提取", "必须核验的问题", "方法路线", path.join(outputDir, "paper-analysis-live-mobile.png")));
    process.stdout.write(`${JSON.stringify(results)}\n`);
    return;
  }
  results.push(await run("desktop-quick", desktop, "快速简析", "阅读价值", "创新点候选"));
  results.push(await run("desktop-innovation", desktop, "创新点提取", "必须核验的问题", "方法路线", path.join(outputDir, "paper-analysis-desktop.png")));
  results.push(await run("desktop-deep", desktop, "深度解读", "复现准备", "作者摘要中文阅读版"));
  results.push(await run("desktop-translate", desktop, "中文阅读版", "作者摘要中文阅读版", "关键结果"));
  results.push(await run("mobile-innovation", { ...devices["iPhone 13"] }, "创新点提取", "必须核验的问题", "方法路线", path.join(outputDir, "paper-analysis-mobile.png")));
  results.push(await runAccount());
  process.stdout.write(`${JSON.stringify(results)}\n`);
})().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
