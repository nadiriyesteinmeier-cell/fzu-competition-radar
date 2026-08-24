import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const workspace = path.resolve(here, "..");
loadEnv(path.join(workspace, ".env.local"));

const config = {
  port: integerEnv("API_PORT", 8787, 1, 65535),
  model: process.env.OPENAI_MODEL || "gpt-5-mini",
  dailyLimit: integerEnv("DAILY_REQUEST_LIMIT", 20, 1, 500),
  maxInputChars: integerEnv("MAX_INPUT_CHARS", 12000, 1000, 50000),
  origins: new Set((process.env.ALLOWED_ORIGINS || "http://127.0.0.1:8765,http://localhost:8765").split(",").map((item) => item.trim()).filter(Boolean))
};
const services = new Set(["quick", "innovation", "deep", "translate"]);
const cacheDir = path.join(here, "data", "cache");
const ledgerPath = path.join(here, "data", "usage-ledger.json");
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

function integerEnv(name, fallback, min, max) {
  const value = Number(process.env[name] || fallback);
  return Number.isInteger(value) && value >= min && value <= max ? value : fallback;
}

function json(res, status, value, origin) {
  const headers = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", "x-content-type-options": "nosniff" };
  if (origin && config.origins.has(origin)) { headers["access-control-allow-origin"] = origin; headers.vary = "Origin"; }
  res.writeHead(status, headers); res.end(JSON.stringify(value));
}

async function body(req) {
  let text = "";
  for await (const chunk of req) {
    text += chunk;
    if (text.length > config.maxInputChars + 5000) throw new HttpError(413, "请求内容过长");
  }
  try { return JSON.parse(text || "{}"); } catch { throw new HttpError(400, "JSON 格式无效"); }
}

class HttpError extends Error { constructor(status, message) { super(message); this.status = status; } }

function validate(input) {
  const clean = {
    paperId: String(input.paperId || "").trim(), title: String(input.title || "").trim(),
    authors: Array.isArray(input.authors) ? input.authors.slice(0, 30).map(String) : [],
    abstract: String(input.abstract || "").trim(), service: String(input.service || "quick")
  };
  if (!/^\d{4}\.\d{4,5}$/.test(clean.paperId)) throw new HttpError(400, "论文编号无效");
  if (!clean.title || clean.title.length > 500) throw new HttpError(400, "论文标题无效");
  if (!clean.abstract || clean.abstract.length > config.maxInputChars) throw new HttpError(400, "摘要为空或超过长度限制");
  if (!services.has(clean.service)) throw new HttpError(400, "精读服务类型无效");
  return clean;
}

function today() { return new Date().toISOString().slice(0, 10); }
function readLedger() { try { return JSON.parse(fs.readFileSync(ledgerPath, "utf8")); } catch { return { date: today(), requests: 0, inputTokens: 0, outputTokens: 0 }; } }
function checkBudget() { const value = readLedger(); if (value.date === today() && value.requests >= config.dailyLimit) throw new HttpError(429, "今日AI体验额度已用完，请明天再试"); }
function recordUsage(usage = {}) {
  const current = readLedger(); const value = current.date === today() ? current : { date: today(), requests: 0, inputTokens: 0, outputTokens: 0 };
  value.requests += 1; value.inputTokens += Number(usage.input_tokens || 0); value.outputTokens += Number(usage.output_tokens || 0);
  fs.mkdirSync(path.dirname(ledgerPath), { recursive: true }); fs.writeFileSync(ledgerPath, JSON.stringify(value, null, 2));
}

const schema = {
  type: "object", additionalProperties: false,
  properties: {
    summary: { type: "string" }, research_question: { type: "string" }, method: { type: "string" },
    key_results: { type: "array", items: { type: "string" } }, innovations: { type: "array", items: { type: "string" } },
    limitations: { type: "array", items: { type: "string" } }, reading_value: { type: "string" }, translation_excerpt: { type: "string" },
    evidence_notice: { type: "string" }
  },
  required: ["summary", "research_question", "method", "key_results", "innovations", "limitations", "reading_value", "translation_excerpt", "evidence_notice"]
};

function prompt(input) {
  const serviceNames = { quick: "快速简析", innovation: "创新点提取", deep: "深度解读", translate: "中文阅读版预览" };
  return `你是面向中国本科生的严谨论文阅读助手。只依据下面的作者摘要分析，不得假装读过全文，不得把作者主张写成已被独立验证的事实。服务类型：${serviceNames[input.service]}。创新点必须写成候选并指出需要相关工作对比；摘要未披露的信息明确写“摘要未披露”。所有字段使用简洁中文。\n\n论文：${input.title}\n作者：${input.authors.join(", ")}\narXiv：${input.paperId}\n作者摘要：${input.abstract}`;
}

async function analyze(input) {
  if (!process.env.OPENAI_API_KEY) throw new HttpError(503, "服务端尚未配置AI密钥");
  const key = crypto.createHash("sha256").update(JSON.stringify([input.paperId, input.service, input.abstract])).digest("hex");
  const file = path.join(cacheDir, `${key}.json`);
  if (fs.existsSync(file)) return { ...JSON.parse(fs.readFileSync(file, "utf8")), cached: true };
  checkBudget();
  let response;
  try {
    response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST", headers: { authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({ model: config.model, input: prompt(input), max_output_tokens: 1800, text: { format: { type: "json_schema", name: "paper_analysis", strict: true, schema } } })
    });
  } catch (_) { throw new HttpError(503, "服务器暂时无法连接AI服务"); }
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const code = payload?.error?.code;
    const safeMessage = code === "billing_not_active" ? "AI账户尚未开通API计费" : response.status === 429 ? "AI账户额度不足或请求过于频繁" : "AI服务暂时不可用";
    throw new HttpError(response.status === 429 ? 429 : 502, safeMessage);
  }
  let result;
  try { result = JSON.parse(payload.output_text); } catch { throw new HttpError(502, "AI返回结果无法解析"); }
  const stored = { paperId: input.paperId, service: input.service, model: config.model, generatedAt: new Date().toISOString(), analysis: result };
  fs.writeFileSync(file, JSON.stringify(stored, null, 2)); recordUsage(payload.usage);
  return { ...stored, cached: false };
}

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin || "";
  if (origin && !config.origins.has(origin)) return json(res, 403, { error: "来源未获允许" });
  if (req.method === "OPTIONS") {
    res.writeHead(204, { "access-control-allow-origin": origin, "access-control-allow-methods": "GET,POST,OPTIONS", "access-control-allow-headers": "content-type", vary: "Origin" }); return res.end();
  }
  try {
    if (req.method === "GET" && req.url === "/health") return json(res, 200, { ok: true, model: config.model, dailyLimit: config.dailyLimit, keyConfigured: Boolean(process.env.OPENAI_API_KEY) }, origin);
    if (req.method === "POST" && req.url === "/api/paper-analysis") return json(res, 200, await analyze(validate(await body(req))), origin);
    return json(res, 404, { error: "接口不存在" }, origin);
  } catch (error) {
    const status = error instanceof HttpError ? error.status : 500;
    console.error(JSON.stringify({ at: new Date().toISOString(), status, message: error.message }));
    return json(res, status, { error: status === 500 ? "服务器内部错误" : error.message }, origin);
  }
});

server.listen(config.port, "127.0.0.1", () => console.log(`Student Radar API listening on http://127.0.0.1:${config.port}`));

