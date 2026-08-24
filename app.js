(function () {
  "use strict";

  const confirmedEvents = Array.isArray(window.COMPETITION_EVENTS) ? window.COMPETITION_EVENTS : [];
  const forecasts = Array.isArray(window.COMPETITION_FORECASTS) ? window.COMPETITION_FORECASTS : [];
  const events = [...confirmedEvents, ...forecasts];
  const longRangeWatch = window.LONG_RANGE_WATCH || null;
  const recognitionData = window.FZU_RECOGNITION_DATA || { items: [] };
  const recognitions = Array.isArray(recognitionData.items) ? recognitionData.items : [];
  const now = new Date();
  const DAY = 24 * 60 * 60 * 1000;
  const favoriteKey = "fzu-radar-favorites-v1";
  const state = {
    category: "全部",
    query: "",
    soonOnly: false,
    recognizedOnly: false,
    includeForecasts: true,
    popularity: "全部",
    favoritesOnly: false,
    favorites: loadFavorites(),
    selectedId: events[0]?.id || null,
    directoryQuery: "",
    directoryLevel: "全部",
    directoryType: "全部",
    directoryLimit: 18
  };

  const elements = {
    track: document.querySelector("#timeline-track"),
    scroll: document.querySelector("#timeline-scroll"),
    detail: document.querySelector("#event-detail"),
    template: document.querySelector("#event-detail-template"),
    empty: document.querySelector("#empty-state"),
    count: document.querySelector("#result-count"),
    categories: document.querySelector("#category-filters"),
    search: document.querySelector("#search-input"),
    soonOnly: document.querySelector("#soon-only"),
    recognizedOnly: document.querySelector("#recognized-only"),
    forecastToggle: document.querySelector("#forecast-toggle"),
    popularityFilter: document.querySelector("#popularity-filter"),
    favoritesOnly: document.querySelector("#favorites-only"),
    previous: document.querySelector("#timeline-prev"),
    next: document.querySelector("#timeline-next"),
    verifiedCount: document.querySelector("#verified-count"),
    upcomingCount: document.querySelector("#upcoming-count"),
    recognitionCount: document.querySelector("#recognition-count"),
    latestDate: document.querySelector("#latest-date"),
    directorySearch: document.querySelector("#directory-search"),
    directoryLevel: document.querySelector("#directory-level"),
    directoryType: document.querySelector("#directory-type"),
    directoryCount: document.querySelector("#directory-count"),
    directoryList: document.querySelector("#directory-list"),
    directoryMore: document.querySelector("#directory-more"),
    directoryEmpty: document.querySelector("#directory-empty"),
    longRangeWatch: document.querySelector("#long-range-watch"),
    install: document.querySelector("#install-button")
  };

  function loadFavorites() {
    try { return new Set(JSON.parse(localStorage.getItem(favoriteKey) || "[]")); }
    catch (_) { return new Set(); }
  }

  function saveFavorites() {
    localStorage.setItem(favoriteKey, JSON.stringify([...state.favorites]));
  }

  function dateOf(milestone) { return new Date(milestone.at); }

  function formatDate(value, withTime = true) {
    const options = withTime
      ? { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false }
      : { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Intl.DateTimeFormat("zh-CN", options).format(new Date(value));
  }

  function futureMilestones(event) {
    return event.milestones.filter((milestone) => dateOf(milestone) >= now);
  }

  function nextMilestone(event) {
    return futureMilestones(event)[0] || event.milestones.at(-1);
  }

  function hasMilestoneSoon(event) {
    return event.milestones.some((milestone) => {
      const delta = dateOf(milestone) - now;
      return delta >= 0 && delta <= 30 * DAY;
    });
  }

  function countdown(value) {
    const delta = new Date(value) - now;
    if (delta < 0) return "已结束";
    const days = Math.floor(delta / DAY);
    const hours = Math.floor((delta % DAY) / (60 * 60 * 1000));
    return days ? `${days}天后` : (hours ? `${hours}小时后` : "不到1小时");
  }

  function verificationLabel(value) {
    return { "school-official": "福大官方", "organizer-official": "组委会官方", "government-official": "政府官方", "historical-official": "往届官方依据" }[value] || "来源已核验";
  }

  function popularityOf(event) {
    return event.popularity || ({
      "cumcm-2026": "A",
      "china-international-college-innovation-2026": "A",
      "ncda-watsons-aigc-2026": "B",
      "ccf-cacc-entrepreneurship-2026": "B"
    }[event.id] || "");
  }

  function addText(parent, className, text) {
    const node = document.createElement("span");
    node.className = className;
    node.textContent = text;
    parent.append(node);
  }

  function renderCategories() {
    ["全部", ...new Set(events.map((event) => event.category))].forEach((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chip";
      button.textContent = category;
      button.setAttribute("aria-pressed", String(category === state.category));
      button.addEventListener("click", () => {
        state.category = category;
        elements.categories.querySelectorAll(".chip").forEach((chip) => chip.setAttribute("aria-pressed", String(chip === button)));
        renderTimeline();
      });
      elements.categories.append(button);
    });
  }

  function filteredEvents() {
    const query = state.query.trim().toLocaleLowerCase("zh-CN");
    return events.filter((event) => {
      const haystack = [event.title, event.category, event.organizer, event.audience, event.summary].join(" ").toLocaleLowerCase("zh-CN");
      return (state.category === "全部" || event.category === state.category)
        && (!query || haystack.includes(query))
        && (state.includeForecasts || !event.isForecast)
        && (state.popularity === "全部" || popularityOf(event) === state.popularity)
        && (!state.soonOnly || hasMilestoneSoon(event))
        && (!state.recognizedOnly || Boolean(event.recognition))
        && (!state.favoritesOnly || state.favorites.has(event.id));
    }).sort((a, b) => dateOf(nextMilestone(a)) - dateOf(nextMilestone(b)));
  }

  function renderPoint(event) {
    const milestone = nextMilestone(event);
    const point = document.createElement("button");
    point.type = "button";
    point.className = "timeline-point";
    point.dataset.eventId = event.id;
    point.setAttribute("aria-pressed", String(event.id === state.selectedId));
    point.innerHTML = `<time></time><span class="timeline-dot"></span><strong></strong><small></small>`;
    point.querySelector("time").textContent = formatDate(milestone.at, false).slice(5);
    point.querySelector("strong").textContent = event.title;
    point.querySelector("small").textContent = milestone.label;
    if (event.id === state.selectedId) point.classList.add("is-selected");
    if (state.favorites.has(event.id)) point.classList.add("is-favorite");
    if (event.isForecast) point.classList.add("is-forecast");
    point.addEventListener("click", () => selectEvent(event.id));
    return point;
  }

  function renderDetail(event) {
    if (!event) { elements.detail.replaceChildren(); return; }
    const card = elements.template.content.firstElementChild.cloneNode(true);
    if (event.isForecast) card.classList.add("is-forecast");
    const badges = card.querySelector(".badges");
    addText(badges, "badge badge-category", event.category);
    addText(badges, "badge", event.level);
    addText(badges, "badge badge-verified", verificationLabel(event.verification));
    const popularity = popularityOf(event);
    if (popularity) addText(badges, `badge popularity-${popularity.toLowerCase()}`, `${popularity}档热门 · 平台参考`);
    if (event.isForecast) addText(badges, "badge badge-forecast", `${event.forecastWindow} · 非官方日期`);
    if (event.recognition) {
      addText(badges, "badge badge-recognized", event.recognition.status === "direct" ? `福大直接认定 · ${event.recognition.level}` : `福大目录赛事 · ${event.recognition.level}`);
    } else {
      addText(badges, "badge badge-unmatched", "福大2026表未匹配");
    }

    card.querySelector("h3").textContent = event.title;
    card.querySelector(".summary").textContent = event.summary;
    const meta = card.querySelector(".meta");
    [event.organizer, event.audience, event.team].forEach((value) => addText(meta, "meta-item", value));

    const next = futureMilestones(event)[0];
    const callout = card.querySelector(".deadline-callout");
    if (next) {
      addText(callout, "", `${event.isForecast ? "预计节点" : "下一节点"} · ${next.label}`);
      const strong = document.createElement("strong");
      strong.textContent = `${formatDate(next.at)} · ${countdown(next.at)}`;
      callout.append(strong);
    } else {
      callout.classList.add("is-past");
      callout.textContent = "当前收录节点均已结束";
    }

    const timeline = card.querySelector(".timeline");
    event.milestones.forEach((milestone) => {
      const item = document.createElement("li");
      if (dateOf(milestone) < now) item.classList.add("is-past");
      const time = document.createElement("time");
      time.dateTime = milestone.at;
      time.textContent = formatDate(milestone.at);
      const label = document.createElement("span");
      label.textContent = milestone.label;
      item.append(time, label);
      timeline.append(item);
    });

    const warning = card.querySelector(".warning");
    if (event.warning) { warning.hidden = false; warning.textContent = `注意：${event.warning}`; }

    const favorite = card.querySelector(".favorite-button");
    const updateFavorite = () => {
      const active = state.favorites.has(event.id);
      favorite.textContent = active ? "★" : "☆";
      favorite.classList.toggle("is-active", active);
      favorite.setAttribute("aria-label", active ? "取消收藏" : "收藏竞赛");
      favorite.setAttribute("aria-pressed", String(active));
    };
    updateFavorite();
    favorite.addEventListener("click", () => {
      state.favorites.has(event.id) ? state.favorites.delete(event.id) : state.favorites.add(event.id);
      saveFavorites();
      state.favoritesOnly ? renderTimeline() : (updateFavorite(), renderPointsOnly());
    });

    const source = card.querySelector(".source-link");
    source.href = event.sourceUrl;
    source.textContent = event.sourceLabel;
    const calendarButton = card.querySelector(".calendar-button");
    if (event.isForecast) {
      calendarButton.textContent = "预测日期不可导入";
      calendarButton.disabled = true;
    } else {
      calendarButton.addEventListener("click", () => downloadCalendar(event));
    }
    card.querySelector(".verified-at").textContent = `核验于 ${event.verifiedAt} · 日期有变请以官方原文为准`;
    elements.detail.replaceChildren(card);
  }

  function renderPointsOnly() {
    const visible = filteredEvents();
    elements.track.replaceChildren(...visible.map(renderPoint));
  }

  function renderTimeline() {
    const visible = filteredEvents();
    if (!visible.some((event) => event.id === state.selectedId)) state.selectedId = visible[0]?.id || null;
    elements.track.replaceChildren(...visible.map(renderPoint));
    const confirmedCount = visible.filter((event) => !event.isForecast).length;
    const forecastCount = visible.length - confirmedCount;
    elements.count.textContent = forecastCount ? `${confirmedCount} 个官方赛事 + ${forecastCount} 个预测窗口` : `${confirmedCount} 个官方赛事`;
    elements.empty.hidden = visible.length !== 0;
    elements.scroll.parentElement.hidden = visible.length === 0;
    renderDetail(visible.find((event) => event.id === state.selectedId));
    const index = visible.findIndex((event) => event.id === state.selectedId);
    elements.previous.disabled = index <= 0;
    elements.next.disabled = index < 0 || index >= visible.length - 1;
  }

  function selectEvent(id) {
    state.selectedId = id;
    renderTimeline();
    const selected = [...elements.track.children].find((node) => node.dataset.eventId === id);
    selected?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  function moveSelection(offset) {
    const visible = filteredEvents();
    const index = visible.findIndex((event) => event.id === state.selectedId);
    const target = visible[Math.max(0, Math.min(visible.length - 1, index + offset))];
    if (target) selectEvent(target.id);
  }

  function escapeIcs(value) {
    return String(value).replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
  }

  function toUtcIcs(value) {
    return new Date(value).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  }

  function downloadCalendar(event) {
    const stamp = toUtcIcs(new Date());
    const entries = event.milestones.map((milestone, index) => [
      "BEGIN:VEVENT", `UID:${event.id}-${index}@fzu-radar.local`, `DTSTAMP:${stamp}`,
      `DTSTART:${toUtcIcs(milestone.at)}`, `DTEND:${toUtcIcs(new Date(dateOf(milestone).getTime() + 30 * 60 * 1000))}`,
      `SUMMARY:${escapeIcs(`${event.title}｜${milestone.label}`)}`,
      `DESCRIPTION:${escapeIcs(`来源：${event.sourceLabel}\n${event.warning || "请以官方通知为准"}`)}`,
      `URL:${event.sourceUrl}`, "END:VEVENT"
    ].join("\r\n")).join("\r\n");
    const content = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//LinXiaoBa//FZU Competition Radar//ZH-CN\r\nCALSCALE:GREGORIAN\r\nMETHOD:PUBLISH\r\n${entries}\r\nEND:VCALENDAR\r\n`;
    const url = URL.createObjectURL(new Blob([content], { type: "text/calendar;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `${event.id}.ics`;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function directoryMatches() {
    const query = state.directoryQuery.trim().toLocaleLowerCase("zh-CN");
    return recognitions.filter((item) => {
      const haystack = [item.name, item.organizer, item.level].join(" ").toLocaleLowerCase("zh-CN");
      return (!query || haystack.includes(query))
        && (state.directoryLevel === "全部" || item.level === state.directoryLevel)
        && (state.directoryType === "全部" || item.recognitionType === state.directoryType);
    });
  }

  function renderDirectory() {
    const matches = directoryMatches();
    const shown = matches.slice(0, state.directoryLimit);
    const fragment = document.createDocumentFragment();
    shown.forEach((item) => {
      const article = document.createElement("article");
      article.className = "directory-item";
      const type = item.recognitionType === "direct" ? "直接认定" : "分级认定";
      article.innerHTML = `<div><span></span><span></span></div><h3></h3><p></p>`;
      const labels = article.querySelectorAll("span");
      labels[0].textContent = item.level;
      labels[1].textContent = type;
      article.querySelector("h3").textContent = item.name;
      article.querySelector("p").textContent = item.organizer || "主办方见学校认定表";
      fragment.append(article);
    });
    elements.directoryList.replaceChildren(fragment);
    elements.directoryCount.textContent = `找到 ${matches.length} 项，已显示 ${shown.length} 项`;
    elements.directoryMore.hidden = shown.length >= matches.length;
    elements.directoryEmpty.hidden = matches.length !== 0;
  }

  function renderStats() {
    const soonCount = confirmedEvents.flatMap((event) => event.milestones).filter((milestone) => {
      const delta = dateOf(milestone) - now;
      return delta >= 0 && delta <= 30 * DAY;
    }).length;
    const latest = confirmedEvents.map((event) => event.verifiedAt).sort().at(-1);
    elements.verifiedCount.textContent = String(confirmedEvents.length);
    elements.upcomingCount.textContent = String(soonCount);
    elements.recognitionCount.textContent = String(recognitions.length);
    elements.latestDate.textContent = latest ? latest.slice(5).replace("-", ".") : "—";
  }

  [...new Set(recognitions.map((item) => item.level).filter(Boolean))].sort().forEach((level) => {
    const option = document.createElement("option");
    option.value = level;
    option.textContent = level;
    elements.directoryLevel.append(option);
  });

  elements.search.addEventListener("input", (event) => { state.query = event.target.value; renderTimeline(); });
  elements.soonOnly.addEventListener("change", (event) => { state.soonOnly = event.target.checked; renderTimeline(); });
  elements.recognizedOnly.addEventListener("change", (event) => { state.recognizedOnly = event.target.checked; renderTimeline(); });
  elements.forecastToggle.addEventListener("change", (event) => { state.includeForecasts = event.target.checked; renderTimeline(); });
  elements.popularityFilter.addEventListener("change", (event) => { state.popularity = event.target.value; renderTimeline(); });
  elements.favoritesOnly.addEventListener("change", (event) => { state.favoritesOnly = event.target.checked; renderTimeline(); });
  elements.previous.addEventListener("click", () => moveSelection(-1));
  elements.next.addEventListener("click", () => moveSelection(1));
  elements.directorySearch.addEventListener("input", (event) => { state.directoryQuery = event.target.value; state.directoryLimit = 18; renderDirectory(); });
  elements.directoryLevel.addEventListener("change", (event) => { state.directoryLevel = event.target.value; state.directoryLimit = 18; renderDirectory(); });
  elements.directoryType.addEventListener("change", (event) => { state.directoryType = event.target.value; state.directoryLimit = 18; renderDirectory(); });
  elements.directoryMore.addEventListener("click", () => { state.directoryLimit += 18; renderDirectory(); });

  let installPrompt;
  window.addEventListener("beforeinstallprompt", (event) => { event.preventDefault(); installPrompt = event; elements.install.hidden = false; });
  elements.install.addEventListener("click", async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    elements.install.hidden = true;
  });

  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register("./sw.js");

  renderCategories();
  renderStats();
  renderTimeline();
  renderDirectory();
  if (longRangeWatch) {
    const start = new Date(longRangeWatch.startsAt);
    const end = new Date(longRangeWatch.endsAt);
    elements.longRangeWatch.innerHTML = `<div><span class="badge popularity-a">A档热门 · 平台参考</span><span class="badge badge-recognized"></span><p class="eyebrow">LONG-RANGE WATCH · 三个月以外</p><h2></h2><p></p></div><div class="watch-actions"><a class="source-link" target="_blank" rel="noopener noreferrer"></a><a class="calendar-button" href="pro.html?id=cumcm-2026">查看备赛简读</a></div>`;
    elements.longRangeWatch.querySelector(".badge-recognized").textContent = longRangeWatch.recognition;
    elements.longRangeWatch.querySelector("h2").textContent = longRangeWatch.title;
    elements.longRangeWatch.querySelector("div > p:last-child").textContent = `${longRangeWatch.status}。比赛窗口：${formatDate(start, false)}—${formatDate(end, false)}（按官方美东时间换算可能跨北京时间日期）。`;
    const source = elements.longRangeWatch.querySelector(".source-link");
    source.href = longRangeWatch.sourceUrl;
    source.textContent = longRangeWatch.sourceLabel;
  }
})();

