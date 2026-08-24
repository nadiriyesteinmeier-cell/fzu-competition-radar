import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const workspace = path.resolve(here, "..");
if (!booleanEnv("SKIP_LOCAL_ENV", false)) loadEnv(path.join(workspace, ".env.local"));
const apiHost = /^(?:127\.0\.0\.1|0\.0\.0\.0|localhost)$/.test(process.env.API_HOST || "") ? process.env.API_HOST : "127.0.0.1";

const config = {
  port: process.env.API_PORT ? integerEnv("API_PORT", 8787, 1, 65535) : integerEnv("PORT", 8787, 1, 65535),
  host: apiHost,
  model: process.env.OPENAI_MODEL || "gpt-5-mini",
  dailyLimit: integerEnv("DAILY_REQUEST_LIMIT", 20, 1, 500),
  maxInputChars: integerEnv("MAX_INPUT_CHARS", 12000, 1000, 50000),
  mockAi: booleanEnv("AI_MOCK_MODE", false),
  mockPayment: booleanEnv("ENABLE_MOCK_PAYMENT", apiHost !== "0.0.0.0"),
  dataDir: process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(here, "data"),
  origins: new Set((process.env.ALLOWED_ORIGINS || "http://127.0.0.1:8765,http://localhost:8765").split(",").map((item) => item.trim()).filter(Boolean))
};

const products = Object.freeze([
  { id: "quick", name: "快速简析", priceFen: 190, delivery: "研究问题、方法、结果与阅读价值", maxOutputTokens: 1400 },
  { id: "innovation", name: "创新点提取", priceFen: 290, delivery: "贡献候选、证据强弱与待核验问题", maxOutputTokens: 1600 },
  { id: "deep", name: "深度解读", priceFen: 390, delivery: "问题、方法、实验、局限与复现建议", maxOutputTokens: 2200 },
  { id: "translate", name: "中文阅读版", priceFen: 490, delivery: "摘要中文阅读版与术语说明", maxOutputTokens: 2200 }
]);
const productMap = new Map(products.map((item) => [item.id, item]));
const cacheDir = path.join(config.dataDir, "cache");
const ledgerPath = path.join(config.dataDir, "usage-ledger.json");
const ordersPath = path.join(config.dataDir, "orders.json");
fs.mkdirSync(cacheDir, { recursive: true });

function loadEnv(file) {
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match || process.env[match[1]]) continue;
    let value = match[2];
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    process.env[match[1]] = value;
  }
}
function integerEnv(name, fallback, min, max) { const value = Number(process.env[name] || fallback); return Number.isInteger(value) && value >= min && value <= max ? value : fallback; }
function booleanEnv(name, fallback) { const value = process.env[name]; return value == null ? fallback : /^(?:1|true|yes)$/i.test(value); }
class HttpError extends Error { constructor(status, message, code = "request_error") { super(message); this.status = status; this.code = code; } }

function json(res, status, value, origin) {
  const headers = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", "x-content-type-options": "nosniff" };
  if (origin && config.origins.has(origin)) { headers["access-control-allow-origin"] = origin; headers.vary = "Origin"; }
  res.writeHead(status, headers); res.end(JSON.stringify(value));
}
async function body(req) {
  let text = "";
  for await (const chunk of req) { text += chunk; if (text.length > config.maxInputChars + 8000) throw new HttpError(413, "请求内容过长", "payload_too_large"); }
  try { return JSON.parse(text || "{}"); } catch { throw new HttpError(400, "JSON 格式无效", "invalid_json"); }
}
function atomicWrite(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const temporary = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, JSON.stringify(value, null, 2)); fs.renameSync(temporary, file);
}
function readJson(file, fallback) { try { return JSON.parse(fs.readFileSync(file, "utf8")); } catch { return fallback; } }
function readOrders() { const value = readJson(ordersPath, []); return Array.isArray(value) ? value : []; }
function saveOrders(value) { atomicWrite(ordersPath, value.slice(-500)); }
function validClientId(value) { return typeof value === "string" && /^[A-Za-z0-9-]{16,80}$/.test(value); }
function validPaperId(value) { return /^\d{4}\.\d{4,5}$/.test(String(value || "")); }
function publicOrder(order) {
  return { id: order.id, paperId: order.paperId, paperTitle: order.paperTitle, productId: order.productId, productName: order.productName, priceFen: order.priceFen, status: order.status, createdAt: order.createdAt, paidAt: order.paidAt || null, completedAt: order.completedAt || null, analysis: order.status === "completed" ? order.analysis : null, cached: Boolean(order.cached) };
}
function findOrder(id, clientId) {
  if (!validClientId(clientId)) throw new HttpError(400, "客户端标识无效", "invalid_client");
  const orders = readOrders(); const index = orders.findIndex((item) => item.id === id && item.clientId === clientId);
  if (index < 0) throw new HttpError(404, "订单不存在", "order_not_found");
  return { orders, index, order: orders[index] };
}
function listOrders(clientId) {
  if (!validClientId(clientId)) throw new HttpError(400, "客户端标识无效", "invalid_client");
  return readOrders().filter((item) => item.clientId === clientId).sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt))).slice(0, 30).map(publicOrder);
}
function createOrder(input) {
  if (!validClientId(input.clientId)) throw new HttpError(400, "客户端标识无效", "invalid_client");
  if (!validPaperId(input.paperId)) throw new HttpError(400, "论文编号无效", "invalid_paper");
  const product = productMap.get(String(input.productId || ""));
  if (!product) throw new HttpError(400, "商品不存在", "invalid_product");
  const title = String(input.paperTitle || "").trim(); if (!title || title.length > 500) throw new HttpError(400, "论文标题无效", "invalid_title");
  const order = { id: crypto.randomUUID(), clientId: input.clientId, paperId: String(input.paperId), paperTitle: title, productId: product.id, productName: product.name, priceFen: product.priceFen, status: "pending_payment", createdAt: new Date().toISOString(), expiresAt: new Date(Date.now() + 30 * 60 * 1000).toISOString() };
  const orders = readOrders(); orders.push(order); saveOrders(orders); return order;
}
function payMock(id, clientId) {
  if (!config.mockPayment) throw new HttpError(403, "模拟支付已关闭", "mock_payment_disabled");
  const found = findOrder(id, clientId); const { order } = found;
  if (order.status === "pending_payment") { order.status = "paid"; order.paidAt = new Date().toISOString(); found.orders[found.index] = order; saveOrders(found.orders); }
  if (!["paid", "processing", "completed"].includes(order.status)) throw new HttpError(409, "订单当前状态无法支付", "invalid_order_state");
  return order;
}

function validatePaper(input, order) {
  const clean = { paperId: String(input.paperId || "").trim(), title: String(input.title || "").trim(), authors: Array.isArray(input.authors) ? input.authors.slice(0, 30).map(String) : [], abstract: String(input.abstract || "").trim(), service: order.productId };
  if (clean.paperId !== order.paperId || !validPaperId(clean.paperId)) throw new HttpError(400, "论文编号与订单不一致", "paper_mismatch");
  if (!clean.title || clean.title.length > 500) throw new HttpError(400, "论文标题无效", "invalid_title");
  if (!clean.abstract || clean.abstract.length > config.maxInputChars) throw new HttpError(400, "摘要为空或超过长度限制", "invalid_abstract");
  return clean;
}
function today() { return new Date().toISOString().slice(0, 10); }
function readLedger() { return readJson(ledgerPath, { date: today(), requests: 0, inputTokens: 0, outputTokens: 0 }); }
function checkBudget() { const value = readLedger(); if (value.date === today() && value.requests >= config.dailyLimit) throw new HttpError(429, "今日AI体验额度已用完，请明天再试", "daily_limit"); }
function recordUsage(usage = {}) { const current = readLedger(); const value = current.date === today() ? current : { date: today(), requests: 0, inputTokens: 0, outputTokens: 0 }; value.requests += 1; value.inputTokens += Number(usage.input_tokens || 0); value.outputTokens += Number(usage.output_tokens || 0); atomicWrite(ledgerPath, value); }

const stringField = { type: "string" };
const stringList = { type: "array", items: { type: "string" } };
function strictSchema(properties) { return { type: "object", additionalProperties: false, properties, required: Object.keys(properties) }; }
const productContracts = Object.freeze({
  quick: {
    schema: strictSchema({ summary: stringField, research_question: stringField, method: stringField, key_results: stringList, reading_value: stringField, evidence_notice: stringField }),
    instruction: "用最短路径回答论文在做什么。结果不超过3条，只写摘要明确披露的信息。"
  },
  innovation: {
    schema: strictSchema({ summary: stringField, innovations: stringList, evidence_checks: stringList, comparison_questions: stringList, evidence_notice: stringField }),
    instruction: "只提取作者声称的创新候选。每个候选都给出摘要内证据线索，并列出必须通过相关工作或全文核验的问题。"
  },
  deep: {
    schema: strictSchema({ summary: stringField, research_question: stringField, method: stringField, key_results: stringList, innovations: stringList, limitations: stringList, reproduction_steps: stringList, reading_value: stringField, evidence_notice: stringField }),
    instruction: "按问题、方法、结果、创新候选、局限、复现准备完整展开；不能从摘要推断实验配置。"
  },
  translate: {
    schema: strictSchema({ summary: stringField, translation: stringField, glossary: stringList, hard_sentences: stringList, evidence_notice: stringField }),
    instruction: "完整翻译作者摘要，保持术语一致；列出核心术语中英对照和最难理解的原句释义。不得声称翻译了全文。"
  }
});
function prompt(input) {
  const serviceNames = { quick: "快速简析", innovation: "创新点提取", deep: "深度解读", translate: "中文阅读版预览" };
  return `你是面向中国本科生的严谨论文阅读助手。只依据下面的作者摘要分析，不得假装读过全文，不得把作者主张写成已被独立验证的事实。服务类型：${serviceNames[input.service]}。${productContracts[input.service].instruction} 摘要未披露的信息明确写“摘要未披露”。evidence_notice 必须说明“仅基于作者摘要，未经全文与独立来源核验”。所有字段使用简洁中文。\n\n论文：${input.title}\n作者：${input.authors.join(", ")}\narXiv：${input.paperId}\n作者摘要：${input.abstract}`;
}
function mockAnalysis(input) {
  const summary = `这是一份用于测试${productMap.get(input.service).name}权益的模拟结果。`;
  const evidence_notice = "仅基于作者摘要，未经全文与独立来源核验；当前内容为开发测试。";
  if (input.service === "quick") return { summary, research_question: "识别摘要中明确提出的核心问题。", method: "测试模式仅验证快速简析交付。", key_results: ["快速简析字段与其他商品隔离"], reading_value: "适合判断是否值得阅读全文。", evidence_notice };
  if (input.service === "innovation") return { summary, innovations: ["作者声称的创新候选，尚未独立验证"], evidence_checks: ["摘要中的方法描述可作为初步证据线索"], comparison_questions: ["与最近相关工作相比是否真正新增能力？"], evidence_notice };
  if (input.service === "deep") return { summary, research_question: "摘要披露的研究问题。", method: "摘要披露的方法路线。", key_results: ["摘要披露的结果线索"], innovations: ["需要相关工作对比的创新候选"], limitations: ["摘要无法提供完整实验细节"], reproduction_steps: ["阅读全文并确认数据、代码和指标"], reading_value: "适合进入全文精读。", evidence_notice };
  return { summary, translation: "测试模式未执行真实翻译；此字段用于验证中文阅读版交付。", glossary: ["benchmark：基准测试"], hard_sentences: ["需结合英文原句确认语义。"], evidence_notice };
}
async function analyze(input) {
  const key = crypto.createHash("sha256").update(JSON.stringify(["contract-v2", input.paperId, input.service, input.abstract])).digest("hex");
  const file = path.join(cacheDir, `${key}.json`);
  if (fs.existsSync(file)) return { ...readJson(file, {}), cached: true };
  if (config.mockAi) { const stored = { paperId: input.paperId, service: input.service, model: "mock", generatedAt: new Date().toISOString(), analysis: mockAnalysis(input) }; atomicWrite(file, stored); return { ...stored, cached: false }; }
  if (!process.env.OPENAI_API_KEY) throw new HttpError(503, "服务端尚未配置AI密钥", "key_missing");
  checkBudget(); const product = productMap.get(input.service); const contract = productContracts[input.service];
  let response;
  try { response = await fetch("https://api.openai.com/v1/responses", { method: "POST", headers: { authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "content-type": "application/json" }, body: JSON.stringify({ model: config.model, input: prompt(input), max_output_tokens: product.maxOutputTokens, store: false, text: { format: { type: "json_schema", name: `paper_${input.service}`, strict: true, schema: contract.schema } } }) }); }
  catch { throw new HttpError(503, "服务器暂时无法连接AI服务", "upstream_unreachable"); }
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) { const code = payload?.error?.code; const message = code === "billing_not_active" ? "AI账户尚未开通API计费" : response.status === 429 ? "AI账户额度不足或请求过于频繁" : "AI服务暂时不可用"; throw new HttpError(response.status === 429 ? 429 : 502, message, code || "upstream_error"); }
  let result; try { result = JSON.parse(payload.output_text); } catch { throw new HttpError(502, "AI返回结果无法解析", "invalid_ai_output"); }
  const stored = { paperId: input.paperId, service: input.service, model: config.model, generatedAt: new Date().toISOString(), analysis: result }; atomicWrite(file, stored); recordUsage(payload.usage); return { ...stored, cached: false };
}
async function generateOrder(id, clientId, input) {
  let found = findOrder(id, clientId); let order = found.order;
  if (order.status === "completed") return order;
  if (order.status !== "paid") throw new HttpError(402, "订单尚未获得生成权益", "payment_required");
  const clean = validatePaper(input, order); order.status = "processing"; found.orders[found.index] = order; saveOrders(found.orders);
  try {
    const result = await analyze(clean); found = findOrder(id, clientId); order = found.order; order.status = "completed"; order.completedAt = new Date().toISOString(); order.analysis = result.analysis; order.cached = result.cached; found.orders[found.index] = order; saveOrders(found.orders); return order;
  } catch (error) {
    found = findOrder(id, clientId); order = found.order; order.status = "paid"; order.lastErrorCode = error.code || "generation_failed"; found.orders[found.index] = order; saveOrders(found.orders); throw error;
  }
}

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin || ""; const url = new URL(req.url, "http://localhost");
  if (origin && !config.origins.has(origin)) return json(res, 403, { error: "来源未获允许", code: "origin_denied" });
  if (req.method === "OPTIONS") { res.writeHead(204, { "access-control-allow-origin": origin, "access-control-allow-methods": "GET,POST,OPTIONS", "access-control-allow-headers": "content-type", vary: "Origin" }); return res.end(); }
  try {
    if (req.method === "GET" && url.pathname === "/health") return json(res, 200, { ok: true, model: config.model, dailyLimit: config.dailyLimit, keyConfigured: Boolean(process.env.OPENAI_API_KEY), aiReady: config.mockAi || Boolean(process.env.OPENAI_API_KEY), paymentMode: config.mockPayment ? "mock" : "external", aiMode: config.mockAi ? "mock" : "openai", identityMode: "device", storageMode: "file", volumeAttached: Boolean(process.env.RAILWAY_VOLUME_MOUNT_PATH), revision: String(process.env.RAILWAY_GIT_COMMIT_SHA || "local").slice(0, 12) }, origin);
    if (req.method === "GET" && url.pathname === "/api/products") return json(res, 200, { products: products.map(({ maxOutputTokens, ...item }) => item), currency: "CNY" }, origin);
    if (req.method === "GET" && url.pathname === "/api/orders") return json(res, 200, { orders: listOrders(url.searchParams.get("clientId")), identityMode: "device" }, origin);
    if (req.method === "POST" && url.pathname === "/api/orders") return json(res, 201, { order: publicOrder(createOrder(await body(req))) }, origin);
    const match = url.pathname.match(/^\/api\/orders\/([0-9a-f-]+)(?:\/(mock-pay|generate))?$/i);
    if (match && req.method === "GET" && !match[2]) return json(res, 200, { order: publicOrder(findOrder(match[1], url.searchParams.get("clientId")).order) }, origin);
    if (match && req.method === "POST" && match[2] === "mock-pay") { const input = await body(req); return json(res, 200, { order: publicOrder(payMock(match[1], input.clientId)) }, origin); }
    if (match && req.method === "POST" && match[2] === "generate") { const input = await body(req); return json(res, 200, { order: publicOrder(await generateOrder(match[1], input.clientId, input.paper || {})) }, origin); }
    return json(res, 404, { error: "接口不存在", code: "not_found" }, origin);
  } catch (error) {
    const status = error instanceof HttpError ? error.status : 500; console.error(JSON.stringify({ at: new Date().toISOString(), status, code: error.code || "internal", message: error.message }));
    return json(res, status, { error: status === 500 ? "服务器内部错误" : error.message, code: status === 500 ? "internal" : error.code }, origin);
  }
});

server.listen(config.port, config.host, () => console.log(`Student Radar API listening on http://${config.host}:${config.port}`));

