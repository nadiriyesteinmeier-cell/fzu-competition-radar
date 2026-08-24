(function () {
  "use strict";
  const papers = Array.isArray(window.PAPER_ITEMS) ? window.PAPER_ITEMS : [];
  const orderKey = "student-radar-paper-orders-v1";
  const labels = { "cs.CV": "计算机视觉", "cs.AI": "人工智能", "cs.HC": "人机交互" };
  const products = [
    { id: "quick", name: "快速简析", price: "1.9", note: "3分钟掌握论文在做什么", features: ["中文一句话结论", "研究问题与方法", "关键结果", "阅读价值判断"] },
    { id: "innovation", name: "创新点提取", price: "2.9", note: "拆分作者声称的贡献与证据", features: ["创新点候选", "相比已有工作的变化", "证据强弱提示", "仍需核验的问题"] },
    { id: "deep", name: "深度解读", price: "3.9", note: "按问题、方法、实验和局限展开", features: ["结构化全文路线", "方法流程", "实验与数据集", "局限和复现建议"] },
    { id: "translate", name: "中文阅读版", price: "4.9起", note: "生成便于阅读的中文版本", features: ["术语一致性", "摘要双语对照", "概念通俗解释", "按篇幅确认价格"] }
  ];
  const requestedId = new URLSearchParams(location.search).get("id");
  const paper = papers.find((item) => item.id === requestedId) || papers[0];
  const apiBase = ["127.0.0.1", "localhost"].includes(location.hostname) ? "http://127.0.0.1:8787" : "";
  let apiAvailable = false;
  let currentProduct = products[0];
  let currentMarkdown = "";
  const elements = {
    category: $("#analysis-category"), title: $("#analysis-paper-title"), authors: $("#analysis-authors"), source: $("#analysis-source"),
    productList: $("#analysis-product-list"), checkoutName: $("#checkout-name"), checkoutDescription: $("#checkout-description"),
    checkoutPrice: $("#checkout-price"), checkoutFeatures: $("#checkout-features"), unlock: $("#mock-unlock"), checkoutStatus: $("#checkout-status"), runtime: $("#ai-runtime-status"),
    question: $("#sample-question"), method: $("#sample-method"), result: $("#sample-result"), resultSection: $("#analysis-result"), resultGrid: $("#analysis-result-grid"),
    resultHeading: $("#result-heading"), resultNotice: $("#result-notice"), copy: $("#copy-analysis"), copyStatus: $("#analysis-copy-status"),
    readingList: $("#reading-list"), readingCount: $("#reading-count"), readingEmpty: $("#reading-empty")
  };

  function $(selector) { return document.querySelector(selector); }
  function sentences(text) { return (text.match(/[^.!?]+[.!?]+/g) || [text]).map((item) => item.trim()).filter(Boolean); }
  function findSentence(pattern, fallbackIndex) { const list = sentences(paper?.abstract || ""); return list.find((item) => pattern.test(item)) || list[Math.max(0, Math.min(fallbackIndex, list.length - 1))] || "作者摘要未提供足够信息。"; }
  function demoParts() {
    return [["研究问题", findSentence(/challenge|problem|bottleneck|difficult|scarce|limited/i, 0)], ["方法线索", findSentence(/we (?:propose|introduce|develop|present)|our method|framework/i, 1)], ["结果线索", findSentence(/result|show|achiev|improv|outperform|reach/i, 2)], ["创新点候选", "需要与相关工作逐篇对比后才能确认。演示版只标记作者在摘要中主动强调的方法变化。"], ["局限与核验", findSentence(/however|limitation|fail|struggle|future work|not yet/i, sentences(paper?.abstract || "").length - 1)]];
  }
  function apiParts(value) {
    return [["一句话总结", value.summary], ["研究问题", value.research_question], ["方法路线", value.method], ["关键结果", value.key_results.join("；")], ["创新点候选", value.innovations.join("；")], ["局限与核验", value.limitations.join("；")], ["阅读价值", value.reading_value], ["中文阅读预览", value.translation_excerpt]];
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
  function readOrders() { try { const value = JSON.parse(localStorage.getItem(orderKey) || "[]"); return Array.isArray(value) ? value : []; } catch (_) { return []; } }
  function saveOrder(status, analysis) {
    const orders = readOrders(); orders.unshift({ id: `${status === "AI已生成" ? "AI" : "DEMO"}-${Date.now()}`, paperId: paper.id, paperTitle: paper.title, productId: currentProduct.id, productName: currentProduct.name, price: currentProduct.price, createdAt: new Date().toISOString(), status, analysis: analysis || null });
    localStorage.setItem(orderKey, JSON.stringify(orders.slice(0, 30)));
  }
  function renderResult(parts, mode, scroll, notice) {
    elements.resultGrid.replaceChildren(...parts.map(([title, text]) => { const article = document.createElement("article"); const heading = document.createElement("h3"); const paragraph = document.createElement("p"); heading.textContent = title; paragraph.textContent = text || "摘要未披露"; article.append(heading, paragraph); return article; }));
    elements.resultHeading.textContent = mode === "AI" ? "AI精读已生成" : "已生成演示阅读卡";
    elements.resultNotice.textContent = notice;
    currentMarkdown = `# ${paper.title}\n\n- arXiv: ${paper.id}\n- 服务：${currentProduct.name}（${mode === "AI" ? "AI摘要分析" : "交互演示"}）\n\n${parts.map(([title, text]) => `## ${title}\n\n${text || "摘要未披露"}`).join("\n\n")}\n\n> 结果仅基于作者摘要，需结合论文全文核验。`;
    elements.resultSection.hidden = false; if (scroll) elements.resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function showDemo(scroll) { renderResult(demoParts(), "DEMO", scroll, "演示结果只定位作者摘要中的英文原句，没有调用AI，也不会产生API费用。"); }
  function showApiResult(analysis, scroll, cached) { renderResult(apiParts(analysis), "AI", scroll, `${cached ? "已复用缓存，未产生新的模型请求。" : "已由AI生成。"} 结果只依据作者摘要，不代表平台核验了论文全文。`); }
  function renderReading() {
    const orders = readOrders(); elements.readingCount.textContent = `${orders.length} 条本机记录`; elements.readingEmpty.hidden = orders.length > 0;
    elements.readingList.replaceChildren(...orders.map((order) => { const article = document.createElement("article"); const info = document.createElement("div"); const title = document.createElement("strong"); const meta = document.createElement("span"); const link = document.createElement("a"); title.textContent = order.paperTitle; meta.textContent = `${order.productName} · ¥${order.price} · ${order.status}`; link.href = `paper-analysis.html?id=${encodeURIComponent(order.paperId)}#analysis-result`; link.textContent = "重新打开 →"; info.append(title, meta); article.append(info, link); return article; }));
  }
  async function checkApi() {
    if (!apiBase) { elements.checkoutStatus.textContent = "线上后端尚未部署；当前使用演示模式。"; return; }
    try {
      const response = await fetch(`${apiBase}/health`, { signal: AbortSignal.timeout(1800) }); const value = await response.json(); apiAvailable = response.ok && value.keyConfigured;
      if (!apiAvailable) throw new Error();
      elements.runtime.textContent = "本地AI已连接"; elements.runtime.classList.add("is-live"); elements.unlock.textContent = "生成AI精读 · 模拟支付"; elements.checkoutStatus.textContent = `模型 ${value.model} · 未命中缓存时计入每日额度`;
    } catch (_) { elements.checkoutStatus.textContent = "本地AI服务未启动；当前使用演示模式。"; }
  }
  async function unlock() {
    if (!paper || elements.unlock.disabled) return;
    if (!apiAvailable) { saveOrder("演示解锁", null); showDemo(true); renderReading(); return; }
    const original = elements.unlock.textContent; elements.unlock.disabled = true; elements.unlock.textContent = "AI生成中……"; elements.checkoutStatus.textContent = "请稍候，不要重复提交";
    try {
      const response = await fetch(`${apiBase}/api/paper-analysis`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ paperId: paper.id, title: paper.title, authors: paper.authors, abstract: paper.abstract, service: currentProduct.id }) });
      const value = await response.json(); if (!response.ok) throw new Error(value.error || "AI服务请求失败");
      saveOrder("AI已生成", value.analysis); showApiResult(value.analysis, true, value.cached); renderReading(); elements.checkoutStatus.textContent = value.cached ? "已复用本地缓存" : "AI精读生成成功";
    } catch (error) { elements.checkoutStatus.textContent = `${error.message}；你仍可关闭后端后使用演示模式。`; }
    finally { elements.unlock.disabled = false; elements.unlock.textContent = original; }
  }

  elements.unlock.addEventListener("click", unlock);
  elements.copy.addEventListener("click", async () => { try { await navigator.clipboard.writeText(currentMarkdown); elements.copyStatus.textContent = "Markdown 阅读卡已复制"; } catch (_) { elements.copyStatus.textContent = "复制失败，请手动选择内容"; } });
  renderPaper(); renderProducts(); renderCheckout(); renderReading(); checkApi();
  if (location.hash === "#analysis-result" && paper) { const saved = readOrders().find((item) => item.paperId === paper.id && item.analysis); saved ? showApiResult(saved.analysis, false, true) : showDemo(false); }
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register("./sw.js");
})();

