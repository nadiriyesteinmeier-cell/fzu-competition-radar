const { createRequire } = require("node:module");
const path = require("node:path");

const runtimeModules = process.env.PLAYWRIGHT_MODULE_PATH;
if (!runtimeModules) throw new Error("PLAYWRIGHT_MODULE_PATH is required");
const runtimeRequire = createRequire(path.join(runtimeModules, "package.json"));
const { chromium, devices } = runtimeRequire("playwright");

async function run(name, contextOptions, screenshotPath) {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const context = await browser.newContext(contextOptions);
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  await page.goto("http://127.0.0.1:8765/paper-analysis.html?id=2608.21360", { waitUntil: "networkidle" });
  await page.getByText("本地AI已连接").waitFor();
  await page.getByRole("button", { name: /创新点提取/ }).click();
  await page.locator("#mock-unlock").click();
  await page.getByRole("heading", { name: "AI精读已生成" }).waitFor();
  await page.getByText(/订单完成/).waitFor();
  const count = await page.locator("#reading-count").textContent();
  const stepsDone = await page.locator(".checkout-steps .is-done").count();
  if (!count || !count.includes("1 条")) throw new Error(`${name}: reading list was not saved (${count})`);
  if (stepsDone !== 3) throw new Error(`${name}: expected 3 completed checkout steps, got ${stepsDone}`);
  if (errors.length) throw new Error(`${name}: browser errors: ${errors.join(" | ")}`);
  await page.screenshot({ path: screenshotPath, fullPage: true });
  await browser.close();
  return { name, readingCount: count.trim(), checkoutSteps: stepsDone };
}

(async () => {
  const outputDir = process.env.E2E_OUTPUT_DIR || process.cwd();
  const results = [];
  results.push(await run("desktop", { viewport: { width: 1440, height: 1000 } }, path.join(outputDir, "paper-analysis-desktop.png")));
  results.push(await run("mobile", { ...devices["iPhone 13"] }, path.join(outputDir, "paper-analysis-mobile.png")));
  process.stdout.write(`${JSON.stringify(results)}\n`);
})().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});

