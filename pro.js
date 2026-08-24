(function () {
  "use strict";

  const briefs = Array.isArray(window.PRO_BRIEFS) ? window.PRO_BRIEFS : [];
  const interestKey = "student-radar-pro-interest-v1";
  const profileKey = "student-radar-profile-v1";
  let profile = null;
  let current = null;
  try { profile = JSON.parse(localStorage.getItem(profileKey) || "null"); } catch (_) {}

  const elements = {
    library: document.querySelector("#brief-library"),
    libraryProfile: document.querySelector("#library-profile"),
    badges: document.querySelector("#brief-badges"),
    title: document.querySelector("#brief-title"),
    summary: document.querySelector("#brief-summary"),
    fit: document.querySelector("#personal-fit"),
    actions: document.querySelector("#brief-actions"),
    directions: document.querySelector("#brief-directions"),
    sprint: document.querySelector("#brief-sprint"),
    checklist: document.querySelector("#brief-checklist"),
    warning: document.querySelector("#brief-warning"),
    premiumItems: document.querySelector("#premium-items"),
    premiumEmail: document.querySelector("#premium-email"),
    source: document.querySelector("#brief-source"),
    sourceNote: document.querySelector("#brief-source-note"),
    interest: document.querySelector("#interest-result"),
    choice: document.querySelector("#interest-choice"),
    email: document.querySelector("#interest-email")
  };

  function fitScore(brief) {
    const major = profile?.major || "";
    const matches = brief.matchKeywords.some((keyword) => major.includes(keyword));
    return Math.min(10, brief.baseFit + (matches ? 1 : 0));
  }

  function fitText(brief) {
    const score = fitScore(brief);
    const label = score >= 9 ? "高匹配" : score >= 7 ? "较匹配" : "可尝试";
    return `${profile?.major || "未填写专业"} · ${label} ${score}/10`;
  }

  function addBadge(text, className) {
    const badge = document.createElement("span");
    badge.className = `badge ${className}`;
    badge.textContent = text;
    elements.badges.append(badge);
  }

  function renderLibrary() {
    const sorted = [...briefs].sort((a, b) => fitScore(b) - fitScore(a));
    elements.libraryProfile.textContent = profile?.major ? `已按“${profile.major}”匹配排序` : "完善档案后按专业排序";
    const cards = sorted.map((brief, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "brief-library-card";
      if (brief.id === current?.id) button.classList.add("is-selected");
      button.setAttribute("aria-pressed", String(brief.id === current?.id));
      button.innerHTML = `<span class="library-rank"></span><small></small><strong></strong><b></b><em></em>`;
      button.querySelector(".library-rank").textContent = index === 0 ? "最适合你" : `匹配 ${fitScore(brief)}/10`;
      button.querySelector("small").textContent = brief.category;
      button.querySelector("strong").textContent = brief.title;
      button.querySelector("b").textContent = brief.dateStatus;
      button.querySelector("em").textContent = "打开简读 →";
      button.addEventListener("click", () => selectBrief(brief.id, true));
      return button;
    });
    elements.library.replaceChildren(...cards);
  }

  function makeList(container, items, builder) {
    container.replaceChildren(...items.map(builder));
  }

  function renderBrief(brief) {
    current = brief;
    elements.badges.replaceChildren();
    addBadge(brief.recognition, "badge-recognized");
    addBadge(brief.category, "badge-category");
    addBadge(brief.dateStatus, brief.dateTone === "open" ? "badge-verified" : "badge-unmatched");
    elements.title.textContent = brief.title;
    elements.summary.textContent = brief.summary;
    elements.fit.textContent = fitText(brief);

    makeList(elements.actions, brief.actions, ([title, text]) => {
      const item = document.createElement("li");
      const bold = document.createElement("b");
      const span = document.createElement("span");
      bold.textContent = title;
      span.textContent = text;
      item.append(bold, span);
      return item;
    });
    makeList(elements.directions, brief.directions, ([title, text, score]) => {
      const item = document.createElement("div");
      const strong = document.createElement("strong");
      const paragraph = document.createElement("p");
      const span = document.createElement("span");
      strong.textContent = title;
      paragraph.textContent = text;
      span.textContent = score;
      item.append(strong, paragraph, span);
      return item;
    });
    makeList(elements.sprint, brief.sprint, ([title, text]) => {
      const item = document.createElement("div");
      const bold = document.createElement("b");
      const span = document.createElement("span");
      bold.textContent = title;
      span.textContent = text;
      item.append(bold, span);
      return item;
    });
    makeList(elements.checklist, brief.checklist, (text) => {
      const item = document.createElement("li");
      item.textContent = text;
      return item;
    });
    elements.warning.textContent = brief.warning;
    makeList(elements.premiumItems, brief.premium || [], ([title, text]) => {
      const item = document.createElement("div");
      item.innerHTML = `<span>PRO</span><strong></strong><p></p><b>预览锁定</b>`;
      item.querySelector("strong").textContent = title;
      item.querySelector("p").textContent = text;
      return item;
    });
    const premiumBody = `申请学生雷达Pro免费内测\n竞赛：${brief.title}\n希望体验：优秀作品拆解 / 经验复盘 / 原创模板\n备注：当前不产生付款。`;
    elements.premiumEmail.href = `mailto:792629666@qq.com?subject=${encodeURIComponent("申请学生雷达Pro免费内测")}&body=${encodeURIComponent(premiumBody)}`;
    elements.source.href = brief.sourceUrl;
    elements.source.textContent = `${brief.sourceLabel} →`;
    elements.sourceNote.textContent = `核验于 ${brief.verifiedAt}。简读只基于公开规则整理，校内安排仍以福州大学最新通知为准。`;
    restoreInterest();
    renderLibrary();
  }

  function selectBrief(id, scroll) {
    const brief = briefs.find((item) => item.id === id) || briefs[0];
    if (!brief) return;
    history.replaceState(null, "", `${location.pathname}?id=${encodeURIComponent(brief.id)}`);
    renderBrief(brief);
    if (scroll) document.querySelector(".pro-title-card").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function showResult(price) {
    elements.choice.textContent = `你的选择：${price}`;
    const body = `竞赛Pro内测意愿\n样例：${current.title}\n选择：${price}\n备注：这不是付款或订单。`;
    elements.email.href = `mailto:792629666@qq.com?subject=${encodeURIComponent("学生雷达Pro内测意愿")}&body=${encodeURIComponent(body)}`;
    elements.interest.hidden = false;
    document.querySelectorAll("[data-price]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.price === price)));
  }

  function restoreInterest() {
    elements.interest.hidden = true;
    document.querySelectorAll("[data-price]").forEach((button) => button.setAttribute("aria-pressed", "false"));
    try {
      const saved = JSON.parse(localStorage.getItem(interestKey) || "null");
      if (saved?.briefId === current.id && saved?.price) showResult(saved.price);
    } catch (_) {}
  }

  document.querySelectorAll("[data-price]").forEach((button) => {
    button.addEventListener("click", () => {
      const price = button.dataset.price;
      localStorage.setItem(interestKey, JSON.stringify({ briefId: current.id, price, recordedAt: new Date().toISOString() }));
      showResult(price);
    });
  });

  const requested = new URLSearchParams(location.search).get("id");
  const defaultBrief = briefs.find((item) => item.id === requested) || [...briefs].sort((a, b) => fitScore(b) - fitScore(a))[0];
  if (defaultBrief) renderBrief(defaultBrief);
})();

