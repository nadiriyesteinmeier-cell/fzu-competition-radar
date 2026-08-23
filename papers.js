(function () {
  "use strict";

  const papers = Array.isArray(window.PAPER_ITEMS) ? window.PAPER_ITEMS : [];
  const labels = { "cs.CV": "计算机视觉", "cs.AI": "人工智能", "cs.HC": "人机交互" };
  const favoriteKey = "student-radar-paper-favorites-v1";
  const state = { category: "全部", query: "", favoritesOnly: false, favorites: loadFavorites(), limit: 12 };
  const elements = {
    list: document.querySelector("#paper-list"),
    template: document.querySelector("#paper-template"),
    empty: document.querySelector("#paper-empty"),
    count: document.querySelector("#paper-result-count"),
    categories: document.querySelector("#paper-categories"),
    search: document.querySelector("#paper-search"),
    favoritesOnly: document.querySelector("#paper-favorites-only"),
    total: document.querySelector("#paper-count"),
    categoryCount: document.querySelector("#paper-category-count"),
    updatedAt: document.querySelector("#paper-updated-at"),
    loadMore: document.querySelector("#paper-load-more")
  };

  function loadFavorites() {
    try { return new Set(JSON.parse(localStorage.getItem(favoriteKey) || "[]")); }
    catch (_) { return new Set(); }
  }

  function saveFavorites() {
    localStorage.setItem(favoriteKey, JSON.stringify([...state.favorites]));
  }

  function formatDate(value) {
    return new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(value));
  }

  function displayCategories(paper) {
    const focused = paper.categories.filter((category) => labels[category]);
    return focused.length ? focused : paper.categories.slice(0, 2);
  }

  function renderFilters() {
    ["全部", ...Object.keys(labels)].forEach((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chip";
      button.textContent = category === "全部" ? category : labels[category];
      button.setAttribute("aria-pressed", String(category === state.category));
      button.addEventListener("click", () => {
        state.category = category;
        state.limit = 12;
        elements.categories.querySelectorAll(".chip").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        render();
      });
      elements.categories.append(button);
    });
  }

  function filteredPapers() {
    const query = state.query.trim().toLocaleLowerCase();
    return papers.filter((paper) => {
      const haystack = [paper.title, paper.abstract, ...paper.authors].join(" ").toLocaleLowerCase();
      return (state.category === "全部" || paper.categories.includes(state.category))
        && (!query || haystack.includes(query))
        && (!state.favoritesOnly || state.favorites.has(paper.id));
    });
  }

  function citationFor(paper) {
    const authorText = paper.authors.length > 3 ? `${paper.authors.slice(0, 3).join(", ")}, et al.` : paper.authors.join(", ");
    return `${authorText}. ${paper.title}. arXiv:${paper.id} (${new Date(paper.published).getFullYear()}). ${paper.url}`;
  }

  function renderCard(paper) {
    const card = elements.template.content.firstElementChild.cloneNode(true);
    const badges = card.querySelector(".badges");
    displayCategories(paper).forEach((category) => {
      const badge = document.createElement("span");
      badge.className = "badge badge-category";
      badge.textContent = labels[category] || category;
      badges.append(badge);
    });
    const status = document.createElement("span");
    status.className = "badge badge-verified";
    status.textContent = "免费元数据";
    badges.append(status);

    card.querySelector("h3").textContent = paper.title;
    card.querySelector(".paper-authors").textContent = paper.authors.join(" · ");
    card.querySelector(".paper-date").textContent = `提交于 ${formatDate(paper.published)} · arXiv:${paper.id}`;
    card.querySelector(".paper-abstract").textContent = paper.abstract;
    const source = card.querySelector(".paper-source");
    source.href = paper.url;

    const favorite = card.querySelector(".favorite-button");
    const updateFavorite = () => {
      const active = state.favorites.has(paper.id);
      favorite.textContent = active ? "★" : "☆";
      favorite.classList.toggle("is-active", active);
      favorite.setAttribute("aria-pressed", String(active));
      favorite.setAttribute("aria-label", active ? "取消收藏" : "收藏论文");
    };
    updateFavorite();
    favorite.addEventListener("click", () => {
      state.favorites.has(paper.id) ? state.favorites.delete(paper.id) : state.favorites.add(paper.id);
      saveFavorites();
      if (state.favoritesOnly) render(); else updateFavorite();
    });

    const copyStatus = card.querySelector(".copy-status");
    card.querySelector(".citation-button").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(citationFor(paper));
        copyStatus.textContent = "引用信息已复制";
      } catch (_) {
        copyStatus.textContent = "复制失败，请打开原文后复制引用";
      }
    });
    return card;
  }

  function render() {
    const visible = filteredPapers();
    const displayed = visible.slice(0, state.limit);
    elements.list.replaceChildren(...displayed.map(renderCard));
    elements.count.textContent = `显示 ${displayed.length} / ${visible.length} 篇`;
    elements.empty.hidden = visible.length !== 0;
    elements.loadMore.hidden = displayed.length >= visible.length;
  }

  elements.search.addEventListener("input", (event) => { state.query = event.target.value; state.limit = 12; render(); });
  elements.favoritesOnly.addEventListener("change", (event) => { state.favoritesOnly = event.target.checked; state.limit = 12; render(); });
  elements.loadMore.addEventListener("click", () => { state.limit += 12; render(); });
  elements.total.textContent = String(papers.length);
  elements.categoryCount.textContent = String(Object.keys(labels).length);
  const updated = window.PAPER_DATA_UPDATED_AT;
  elements.updatedAt.textContent = updated ? updated.slice(5, 10).replace("-", ".") : "—";
  renderFilters();
  render();

  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register("./sw.js");
})();
