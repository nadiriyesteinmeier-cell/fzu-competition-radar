(function () {
  "use strict";
  const papers = Array.isArray(window.PAPER_ITEMS) ? window.PAPER_ITEMS : [];
  const orderKey = "student-radar-paper-orders-v1";
  const clientKey = "student-radar-client-id-v1";
  const authKey = "student-radar-auth-v1";
  const labels = { "cs.CV": "计算机视觉", "cs.AI": "人工智能", "cs.HC": "人机交互" };
  const products = [
    { id: "quick", name: "快速简析", price: "1.9", note: "3分钟掌握论文在做什么", features: ["中文一句话结论", "研究问题与方法", "关键结果", "阅读价值判断"] },
    { id: "innovation", name: "创新点提取", price: "2.9", note: "拆分作者声称的贡献与证据", features: ["创新点候选", "相比已有工作的变化", "证据强弱提示", "仍需核验的问题"] },
    { id: "deep", name: "深度解读", price: "3.9", note: "按问题、方法、实验和局限展开", features: ["结构化全文路线", "方法流程", "实验与数据集", "局限和复现建议"] },
    { id: "translate", name: "中文阅读版", price: "4.9起", note: "生成便于阅读的中文版本", features: ["术语一致性", "摘要双语对照", "概念通俗解释", "按篇幅确认价格"] }
  ];
  const requestedId = new URLSearchParams(location.search).get("id");
  const paper = papers.find((item) => item.id === requestedId) || papers[0];
  const apiBase = resolveApiBase();
  let apiAvailable = false;
  let currentProduct = products[0];
  let currentMarkdown = "";
  const elements = {
    category: $("#analysis-category"), title: $("#analysis-paper-title"), authors: $("#analysis-authors"), source: $("#analysis-source"),
    productList: $("#analysis-product-list"), checkoutName: $("#checkout-name"), checkoutDescription: $("#checkout-description"),
    checkoutPrice: $("#checkout-price"), checkoutFeatures: $("#checkout-features"), unlock: $("#mock-unlock"), checkoutStatus: $("#checkout-status"), runtime: $("#ai-runtime-status"),
    question: $("#sample-question"), method: $("#sample-method"), result: $("#sample-result"), resultSection: $("#analysis-result"), resultGrid: $("#analysis-result-grid"),
    resultHeading: $("#result-heading"), resultNotice: $("#result-notice"), copy: $("#copy-analysis"), copyStatus: $("#analysis-copy-status"),
    readingList: $("#reading-list"), readingCount: $("#reading-count"), readingEmpty: $("#reading-empty"),
    checkoutSteps: [...document.querySelectorAll("[data-order-step]")]
  };

  function $(selector) { return document.querySelector(selector); }
  function resolveApiBase() {
    const local = ["127.0.0.1", "localhost"].includes(location.hostname);
    const candidate = String(window.STUDENT_RADAR_CONFIG?.apiBase || (local ? "http://127.0.0.1:8787" : "")).trim().replace(/\/$/, "");
    if (!candidate) return "";
    try { const url = new URL(candidate); if (url.protocol === "https:" || (local && url.protocol === "http:")) return url.origin + url.pathname.replace(/\/$/, ""); } catch (_) {}
    return "";
  }
  function sentences(text) { return (text.match(/[^.!?]+[.!?]+/g) || [text]).map((item) => item.trim()).filter(Boolean); }
  function findSentence(pattern, fallbackIndex) { const list = sentences(paper?.abstract || ""); return list.find((item) => pattern.test(item)) || list[Math.max(0, Math.min(fallbackIndex, list.length - 1))] || "作者摘要未提供足够信息。"; }
  function demoParts() {
    return [["研究问题", findSentence(/challenge|problem|bottleneck|difficult|scarce|limited/i, 0)], ["方法线索", findSentence(/we (?:propose|introduce|develop|present)|our method|framework/i, 1)], ["结果线索", findSentence(/result|show|achiev|improv|outperform|reach/i, 2)], ["创新点候选", "需要与相关工作逐篇对比后才能确认。演示版只标记作者在摘要中主动强调的方法变化。"], ["局限与核验", findSentence(/however|limitation|fail|struggle|future work|not yet/i, sentences(paper?.abstract || "").length - 1)]];
  }
  function list(value) { return Array.isArray(value) && value.length ? value.join("；") : "摘要未披露"; }
  function apiParts(value, productId) {
    if (productId === "quick") return [["一句话总结", value.summary], ["研究问题", value.research_question], ["方法路线", value.method], ["关键结果", list(value.key_results)], ["阅读价值", value.reading_value], ["证据边界", value.evidence_notice]];
    if (productId === "innovation") return [["内容概览", value.summary], ["创新点候选", list(value.innovations)], ["摘要内证据", list(value.evidence_checks)], ["必须核验的问题", list(value.comparison_questions)], ["证据边界", value.evidence_notice]];
    if (productId === "translate") return [["内容概览", value.summary], ["作者摘要中文阅读版", value.translation || value.translation_excerpt], ["核心术语", list(value.glossary)], ["难句说明", list(value.hard_sentences)], ["翻译边界", value.evidence_notice]];
    return [["一句话总结", value.summary], ["研究问题", value.research_question], ["方法路线", value.method], ["关键结果", list(value.key_results)], ["创新点候选", list(value.innovations)], ["局限与核验", list(value.limitations)], ["复现准备", list(value.reproduction_steps)], ["阅读价值", value.reading_value], ["证据边界", value.evidence_notice]];
  }
  function renderPaper() {
    if (!paper) { elements.title.textContent = "暂时没有可分析的论文"; elements.unlock.disabled = true; return; }
    elements.category.textContent = labels[paper.categories.find((item) => labels[item])] || paper.categories[0] || "论文";
    elements.title.textContent = paper.title; elements.authors.textContent = `${paper.authors.join(" · ")} · arXiv:${paper.id}`; elements.source.href = paper.url;
    const parts = demoParts(); elements.question.textContent = parts[0][1]; elements.method.textContent = parts[1][1]; elements.result.textContent = parts[2][1];
  }
  function renderProducts() {
    elements.productList.replaceChildren(...products.map((product) => {
      const button = document.createElement("button"); button.type = "button"; button.className = "analysis-product"; button.setAttribute("aria-pressed", String(product.id === currentProduct.id));
      const top = document.createElement("span"); const name = document.createElement("strong"); const price = document.createElement("b"); const note = document.createElement("small");
      name.textContent = product.name; price.textContent = `¥${product.price}`; note.textContent = product.note; top.append(name, price); button.append(top, note);
      button.addEventListener("click", () => { currentProduct = product; renderProducts(); renderCheckout(); }); return button;
    }));
  }
  function renderCheckout() {
    elements.checkoutName.textContent = currentProduct.name; elements.checkoutDescription.textContent = currentProduct.note; elements.checkoutPrice.textContent = `¥${currentProduct.price}`;
    elements.checkoutFeatures.replaceChildren(...currentProduct.features.map((text) => { const item = document.createElement("li"); item.textContent = text; return item; }));
  }
  function setCheckoutStep(activeIndex, failed) {
    elements.checkoutSteps.forEach((step, index) => {
      step.classList.toggle("is-done", !failed && activeIndex > index);
      step.classList.toggle("is-active", !failed && activeIndex === index);
      step.classList.toggle("is-error", Boolean(failed) && activeIndex === index);
    });
  }
  function readOrders() { try { const value = JSON.parse(localStorage.getItem(orderKey) || "[]"); return Array.isArray(value) ? value : []; } catch (_) { return []; } }
  function writeOrders(orders) { localStorage.setItem(orderKey, JSON.stringify(orders.slice(0, 30))); }
  function clientId() {
    let value = localStorage.getItem(clientKey);
    if (!/^[A-Za-z0-9-]{16,80}$/.test(value || "")) { value = crypto.randomUUID(); localStorage.setItem(clientKey, value); }
    return value;
  }
  function authToken() { try { const value = JSON.parse(localStorage.getItem(authKey) || "null"); return typeof value?.token === "string" ? value.token : ""; } catch (_) { return ""; } }
  function apiHeaders(json = false) { return { ...(json ? { "content-type": "application/json" } : {}), ...(authToken() ? { authorization: `Bearer ${authToken()}` } : {}) }; }
  function saveOrder(status, analysis, backendOrder) {
    const orders = readOrders(); const item = { id: backendOrder?.id || `${status === "AI已生成" ? "AI" : "DEMO"}-${Date.now()}`, paperId: paper.id, paperTitle: paper.title, productId: currentProduct.id, productName: currentProduct.name, price: backendOrder ? String(backendOrder.priceFen / 100) : currentProduct.price, createdAt: backendOrder?.createdAt || new Date().toISOString(), status, analysis: analysis || null };
    writeOrders([item, ...orders.filter((order) => order.id !== item.id)]);
  }
  function mergeRemoteOrders(remoteOrders) {
    const labels = { pending_payment: "待确认权益", paid: "待生成", processing: "生成中", completed: "AI已生成" };
    const merged = new Map(readOrders().map((order) => [order.id, order]));
    remoteOrders.forEach((order) => merged.set(order.id, { id: order.id, paperId: order.paperId, paperTitle: order.paperTitle, productId: order.productId, productName: order.productName, price: String(order.priceFen / 100), createdAt: order.createdAt, status: labels[order.status] || order.status, analysis: order.analysis || null }));
    const orders = [...merged.values()].sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt))).slice(0, 30); writeOrders(orders); renderReading(); return remoteOrders.length;
  }
  async function syncOrderHistory(retried = false) {
    const token = authToken(); const query = token ? "" : `?clientId=${encodeURIComponent(clientId())}`;
    const response = await fetch(`${apiBase}/api/orders${query}`, { headers: apiHeaders(), signal: AbortSignal.timeout(2500) });
    if (response.status === 401 && token && !retried) { localStorage.removeItem(authKey); return syncOrderHistory(true); }
    const value = await response.json(); if (!response.ok || !Array.isArray(value.orders)) throw new Error(value.error || "订单同步失败");
    return mergeRemoteOrders(value.orders);
  }
  function renderResult(parts, mode, scroll, notice) {
    elements.resultGrid.replaceChildren(...parts.map(([title, text]) => { const article = document.createElement("article"); const heading = document.createElement("h3"); const paragraph = document.createElement("p"); heading.textContent = title; paragraph.textContent = text || "摘要未披露"; article.append(heading, paragraph); return article; }));
    elements.resultHeading.textContent = mode === "AI" ? "AI精读已生成" : "已生成演示阅读卡";
    elements.resultNotice.textContent = notice;
    currentMarkdown = `# ${paper.title}\n\n- arXiv: ${paper.id}\n- 服务：${currentProduct.name}（${mode === "AI" ? "AI摘要分析" : "交互演示"}）\n\n${parts.map(([title, text]) => `## ${title}\n\n${text || "摘要未披露"}`).join("\n\n")}\n\n> 结果仅基于作者摘要，需结合论文全文核验。`;
    elements.resultSection.hidden = false; if (scroll) elements.resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function showDemo(scroll) { renderResult(demoParts(), "DEMO", scroll, "演示结果只定位作者摘要中的英文原句，没有调用AI，也不会产生API费用。"); }
  function showApiResult(analysis, scroll, cached, productId) {
    const selectedId = productId || currentProduct.id; const selected = products.find((item) => item.id === selectedId);
    if (selected) currentProduct = selected;
    renderResult(apiParts(analysis, selectedId), "AI", scroll, `${cached ? "已复用缓存，未产生新的模型请求。" : "已由AI生成。"} 你购买的是“${currentProduct.name}”，页面只展示该商品包含的交付物。`);
  }
  function renderReading() {
    const orders = readOrders(); elements.readingCount.textContent = `${orders.length} 条本机与账号记录`; elements.readingEmpty.hidden = orders.length > 0;
    elements.readingList.replaceChildren(...orders.map((order) => { const article = document.createElement("article"); const info = document.createElement("div"); const title = document.createElement("strong"); const meta = document.createElement("span"); const link = document.createElement("a"); title.textContent = order.paperTitle; meta.textContent = `${order.productName} · ¥${order.price} · ${order.status}`; link.href = `paper-analysis.html?id=${encodeURIComponent(order.paperId)}#analysis-result`; link.textContent = "重新打开 →"; info.append(title, meta); article.append(info, link); return article; }));
  }
  async function checkApi() {
    if (!apiBase) { elements.checkoutStatus.textContent = "线上后端尚未部署；当前使用演示模式。"; return; }
    try {
      const response = await fetch(`${apiBase}/health`, { signal: AbortSignal.timeout(1800) }); const value = await response.json(); apiAvailable = response.ok && value.aiReady;
      if (!apiAvailable) throw new Error();
      const productResponse = await fetch(`${apiBase}/api/products`); const catalog = await productResponse.json();
      if (productResponse.ok) catalog.products.forEach((serverProduct) => { const local = products.find((item) => item.id === serverProduct.id); if (local) { local.price = String(serverProduct.priceFen / 100); local.name = serverProduct.name; } });
      renderProducts(); renderCheckout(); const synced = await syncOrderHistory();
      elements.runtime.textContent = apiBase.includes("127.0.0.1") || apiBase.includes("localhost") ? "本地AI已连接" : "云端AI已连接"; elements.runtime.classList.add("is-live"); elements.unlock.textContent = "创建订单并生成 · 模拟支付"; elements.checkoutStatus.textContent = `${value.aiMode === "mock" ? "无费用模拟AI" : `模型 ${value.model}`} · ${value.paymentMode === "mock" ? "模拟支付" : "等待支付回调"} · 已同步 ${synced} 个${authToken() ? "账号" : "设备"}订单`;
    } catch (_) { elements.checkoutStatus.textContent = "本地AI服务未启动；当前使用演示模式。"; }
  }
  async function unlock() {
    if (!paper || elements.unlock.disabled) return;
    if (!apiAvailable) { saveOrder("演示解锁", null); showDemo(true); renderReading(); return; }
    const original = elements.unlock.textContent; const deviceId = clientId(); elements.unlock.disabled = true; elements.unlock.textContent = "创建订单……"; elements.checkoutStatus.textContent = "正在创建一次性精读订单"; setCheckoutStep(0);
    try {
      const createdResponse = await fetch(`${apiBase}/api/orders`, { method: "POST", headers: apiHeaders(true), body: JSON.stringify({ clientId: deviceId, paperId: paper.id, paperTitle: paper.title, productId: currentProduct.id }) });
      const created = await createdResponse.json(); if (!createdResponse.ok) throw new Error(created.error || "订单创建失败");
      elements.unlock.textContent = "模拟支付确认……"; setCheckoutStep(1);
      const paidResponse = await fetch(`${apiBase}/api/orders/${created.order.id}/mock-pay`, { method: "POST", headers: apiHeaders(true), body: JSON.stringify({ clientId: deviceId }) });
      const paid = await paidResponse.json(); if (!paidResponse.ok) throw new Error(paid.error || "支付状态确认失败");
      elements.unlock.textContent = "AI生成中……"; elements.checkoutStatus.textContent = "订单已获得权益，正在生成，请勿重复提交"; setCheckoutStep(2);
      const generatedResponse = await fetch(`${apiBase}/api/orders/${created.order.id}/generate`, { method: "POST", headers: apiHeaders(true), body: JSON.stringify({ clientId: deviceId, paper: { paperId: paper.id, title: paper.title, authors: paper.authors, abstract: paper.abstract } }) });
      const generated = await generatedResponse.json(); if (!generatedResponse.ok) throw new Error(generated.error || "AI服务请求失败");
      saveOrder("AI已生成", generated.order.analysis, generated.order); showApiResult(generated.order.analysis, true, generated.order.cached, generated.order.productId); renderReading(); elements.checkoutStatus.textContent = generated.order.cached ? "订单完成 · 已复用缓存" : "订单完成 · AI精读生成成功"; setCheckoutStep(3);
    } catch (error) { elements.checkoutStatus.textContent = `${error.message}；你仍可关闭后端后使用演示模式。`; setCheckoutStep(Math.max(0, elements.checkoutSteps.findIndex((step) => step.classList.contains("is-active"))), true); }
    finally { elements.unlock.disabled = false; elements.unlock.textContent = original; }
  }

  elements.unlock.addEventListener("click", unlock);
  elements.copy.addEventListener("click", async () => { try { await navigator.clipboard.writeText(currentMarkdown); elements.copyStatus.textContent = "Markdown 阅读卡已复制"; } catch (_) { elements.copyStatus.textContent = "复制失败，请手动选择内容"; } });
  renderPaper(); renderProducts(); renderCheckout(); renderReading(); setCheckoutStep(-1); checkApi();
  if (location.hash === "#analysis-result" && paper) { const saved = readOrders().find((item) => item.paperId === paper.id && item.analysis); if (saved) { const savedProduct = products.find((item) => item.id === saved.productId); if (savedProduct) { currentProduct = savedProduct; renderProducts(); renderCheckout(); } showApiResult(saved.analysis, false, true, saved.productId); } else showDemo(false); }
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register("./sw.js");
})();

