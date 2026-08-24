(function () {
  "use strict";
  const papers = Array.isArray(window.PAPER_ITEMS) ? window.PAPER_ITEMS : [];
  const orderKey = "student-radar-paper-orders-v1";
  const labels = { "cs.CV": "计算机视觉", "cs.AI": "人工智能", "cs.HC": "人机交互" };
  const products = [
    { id: "quick", name: "快速简析", price: "1.9", note: "3分钟掌握论文在做什么", features: ["中文一句话结论", "研究问题与方法", "关键结果", "阅读价值判断"] },
    { id: "innovation", name: "创新点提取", price: "2.9", note: "拆分作者声称的贡献与证据", features: ["创新点候选", "相比已有工作的变化", "证据强弱提示", "仍需核验的问题"] },
    { id: "deep", name: "深度解读", price: "3.9", note: "按问题、方法、实验和局限展开", features: ["结构化全文路线", "方法流程", "实验与数据集", "局限和复现建议"] },
    { id: "translate", name: "中文阅读版", price: "4.9起", note: "生成便于阅读的中文版本", features: ["术语一致性", "公式与图表引用保留", "分段双语对照", "按篇幅确认价格"] }
  ];
  const requestedId = new URLSearchParams(location.search).get("id");
  const paper = papers.find((item) => item.id === requestedId) || papers[0];
  let currentProduct = products[0];
  let currentMarkdown = "";
  const elements = {
    category: document.querySelector("#analysis-category"), title: document.querySelector("#analysis-paper-title"), authors: document.querySelector("#analysis-authors"), source: document.querySelector("#analysis-source"), productList: document.querySelector("#analysis-product-list"), checkoutName: document.querySelector("#checkout-name"), checkoutDescription: document.querySelector("#checkout-description"), checkoutPrice: document.querySelector("#checkout-price"), checkoutFeatures: document.querySelector("#checkout-features"), unlock: document.querySelector("#mock-unlock"), question: document.querySelector("#sample-question"), method: document.querySelector("#sample-method"), result: document.querySelector("#sample-result"), resultSection: document.querySelector("#analysis-result"), resultGrid: document.querySelector("#analysis-result-grid"), copy: document.querySelector("#copy-analysis"), copyStatus: document.querySelector("#analysis-copy-status"), readingList: document.querySelector("#reading-list"), readingCount: document.querySelector("#reading-count"), readingEmpty: document.querySelector("#reading-empty")
  };
  function sentences(text) { return (text.match(/[^.!?]+[.!?]+/g) || [text]).map((item) => item.trim()).filter(Boolean); }
  function findSentence(pattern, fallbackIndex) { const list = sentences(paper?.abstract || ""); return list.find((item) => pattern.test(item)) || list[Math.max(0, Math.min(fallbackIndex, list.length - 1))] || "作者摘要未提供足够信息。"; }
  function analysisParts() { return [["研究问题", findSentence(/challenge|problem|bottleneck|difficult|scarce|limited/i, 0)], ["方法线索", findSentence(/we (?:propose|introduce|develop|present)|our method|framework/i, 1)], ["结果线索", findSentence(/result|show|achiev|improv|outperform|reach/i, 2)], ["创新点候选", "需要与相关工作逐篇对比后才能确认。演示版只标记作者在摘要中主动强调的方法变化，不直接判定为真实创新。"], ["局限与核验", findSentence(/however|limitation|fail|struggle|future work|not yet/i, sentences(paper?.abstract || "").length - 1)]]; }
  function renderPaper() {
    if (!paper) { elements.title.textContent = "暂时没有可分析的论文"; elements.unlock.disabled = true; return; }
    elements.category.textContent = labels[paper.categories.find((item) => labels[item])] || paper.categories[0] || "论文";
    elements.title.textContent = paper.title; elements.authors.textContent = `${paper.authors.join(" · ")} · arXiv:${paper.id}`; elements.source.href = paper.url;
    const parts = analysisParts(); elements.question.textContent = parts[0][1]; elements.method.textContent = parts[1][1]; elements.result.textContent = parts[2][1];
  }
  function renderProducts() {
    elements.productList.replaceChildren(...products.map((product) => {
      const button = document.createElement("button"); button.type = "button"; button.className = "analysis-product"; button.setAttribute("aria-pressed", String(product.id === currentProduct.id));
      const top = document.createElement("span"); const name = document.createElement("strong"); const price = document.createElement("b"); const note = document.createElement("small");
      name.textContent = product.name; price.textContent = `¥${product.price}`; note.textContent = product.note; top.append(name, price); button.append(top, note);
      button.addEventListener("click", () => { currentProduct = product; renderProducts(); renderCheckout(); }); return button;
    }));
  }
  function renderCheckout() { elements.checkoutName.textContent = currentProduct.name; elements.checkoutDescription.textContent = currentProduct.note; elements.checkoutPrice.textContent = `¥${currentProduct.price}`; elements.checkoutFeatures.replaceChildren(...currentProduct.features.map((text) => { const item = document.createElement("li"); item.textContent = text; return item; })); }
  function readOrders() { try { const value = JSON.parse(localStorage.getItem(orderKey) || "[]"); return Array.isArray(value) ? value : []; } catch (_) { return []; } }
  function saveOrder() { const orders = readOrders(); orders.unshift({ id: `DEMO-${Date.now()}`, paperId: paper.id, paperTitle: paper.title, productId: currentProduct.id, productName: currentProduct.name, price: currentProduct.price, createdAt: new Date().toISOString(), status: "演示解锁" }); localStorage.setItem(orderKey, JSON.stringify(orders.slice(0, 30))); }
  function showResult(scroll) {
    const parts = analysisParts(); elements.resultGrid.replaceChildren(...parts.map(([title, text]) => { const article = document.createElement("article"); const heading = document.createElement("h3"); const paragraph = document.createElement("p"); heading.textContent = title; paragraph.textContent = text; article.append(heading, paragraph); return article; }));
    currentMarkdown = `# ${paper.title}\n\n- arXiv: ${paper.id}\n- 服务：${currentProduct.name}（交互演示）\n\n${parts.map(([title, text]) => `## ${title}\n\n${text}`).join("\n\n")}\n\n> 结果仅基于作者摘要自动定位，需结合论文全文核验。`;
    elements.resultSection.hidden = false; if (scroll) elements.resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function renderReading() {
    const orders = readOrders(); elements.readingCount.textContent = `${orders.length} 条本机记录`; elements.readingEmpty.hidden = orders.length > 0;
    elements.readingList.replaceChildren(...orders.map((order) => { const article = document.createElement("article"); const info = document.createElement("div"); const title = document.createElement("strong"); const meta = document.createElement("span"); const link = document.createElement("a"); title.textContent = order.paperTitle; meta.textContent = `${order.productName} · ¥${order.price} · ${order.status}`; link.href = `paper-analysis.html?id=${encodeURIComponent(order.paperId)}#analysis-result`; link.textContent = "重新打开 →"; info.append(title, meta); article.append(info, link); return article; }));
  }
  elements.unlock.addEventListener("click", () => { if (!paper) return; saveOrder(); showResult(true); renderReading(); });
  elements.copy.addEventListener("click", async () => { try { await navigator.clipboard.writeText(currentMarkdown); elements.copyStatus.textContent = "Markdown 阅读卡已复制"; } catch (_) { elements.copyStatus.textContent = "复制失败，请手动选择内容"; } });
  renderPaper(); renderProducts(); renderCheckout(); renderReading(); if (location.hash === "#analysis-result" && paper) showResult(false);
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register("./sw.js");
})();
