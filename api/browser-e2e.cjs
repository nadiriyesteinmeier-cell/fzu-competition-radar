const { createRequire } = require("node:module");
const path = require("node:path");

const runtimeModules = process.env.PLAYWRIGHT_MODULE_PATH;
if (!runtimeModules) throw new Error("PLAYWRIGHT_MODULE_PATH is required");
const runtimeRequire = createRequire(path.join(runtimeModules, "package.json"));
const { chromium, devices } = runtimeRequire("playwright");
const siteBase = String(process.env.E2E_SITE_BASE || "http://127.0.0.1:8765").replace(/\/$/, "");

async function run(name, contextOptions, productName, expectedHeading, forbiddenHeading, screenshotPath) {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const context = await browser.newContext(contextOptions);
  const page = await context.newPage();
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
  process.stdout.write(`${JSON.stringify(results)}\n`);
})().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});

