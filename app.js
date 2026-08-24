(function () {
  "use strict";

  const events = Array.isArray(window.COMPETITION_EVENTS) ? window.COMPETITION_EVENTS : [];
  const now = new Date();
  const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
  const favoriteKey = "fzu-radar-favorites-v1";
  const state = {
    category: "全部",
    query: "",
    soonOnly: false,
    recognizedOnly: false,
    favoritesOnly: false,
    favorites: loadFavorites()
  };

  const elements = {
    list: document.querySelector("#event-list"),
    template: document.querySelector("#event-template"),
    empty: document.querySelector("#empty-state"),
    count: document.querySelector("#result-count"),
    categories: document.querySelector("#category-filters"),
    search: document.querySelector("#search-input"),
    soonOnly: document.querySelector("#soon-only"),
    recognizedOnly: document.querySelector("#recognized-only"),
    favoritesOnly: document.querySelector("#favorites-only"),
    verifiedCount: document.querySelector("#verified-count"),
    upcomingCount: document.querySelector("#upcoming-count"),
    latestDate: document.querySelector("#latest-date"),
    install: document.querySelector("#install-button")
  };

  function loadFavorites() {
    try {
      return new Set(JSON.parse(localStorage.getItem(favoriteKey) || "[]"));
    } catch (_) {
      return new Set();
    }
  }

  function saveFavorites() {
    localStorage.setItem(favoriteKey, JSON.stringify([...state.favorites]));
  }

  function dateOf(milestone) {
    return new Date(milestone.at);
  }

  function formatDate(value, withTime = true) {
    const options = withTime
      ? { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false }
      : { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Intl.DateTimeFormat("zh-CN", options).format(new Date(value));
  }

  function futureMilestones(event) {
    return event.milestones.filter((milestone) => dateOf(milestone) >= now);
  }

  function hasMilestoneSoon(event) {
    return event.milestones.some((milestone) => {
      const delta = dateOf(milestone) - now;
      return delta >= 0 && delta <= THIRTY_DAYS;
    });
  }

  function countdown(value) {
    const delta = new Date(value) - now;
    if (delta < 0) return "已结束";
    const days = Math.floor(delta / (24 * 60 * 60 * 1000));
    const hours = Math.floor((delta % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    if (days === 0) return hours === 0 ? "不到1小时" : `${hours}小时后`;
    return `${days}天后`;
  }

  function verificationLabel(value) {
    return {
      "school-official": "福大官方",
      "organizer-official": "组委会官方",
      "government-official": "政府官方"
    }[value] || "来源已核验";
  }

  function renderCategories() {
    const categories = ["全部", ...new Set(events.map((event) => event.category))];
    categories.forEach((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chip";
      button.textContent = category;
      button.setAttribute("aria-pressed", String(category === state.category));
      button.addEventListener("click", () => {
        state.category = category;
        elements.categories.querySelectorAll(".chip").forEach((chip) => {
          chip.setAttribute("aria-pressed", String(chip === button));
        });
        render();
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
        && (!state.soonOnly || hasMilestoneSoon(event))
        && (!state.recognizedOnly || Boolean(event.recognition))
        && (!state.favoritesOnly || state.favorites.has(event.id));
    }).sort((a, b) => {
      const aNext = futureMilestones(a)[0];
      const bNext = futureMilestones(b)[0];
      return (aNext ? dateOf(aNext) : Infinity) - (bNext ? dateOf(bNext) : Infinity);
    });
  }

  function addText(parent, className, text) {
    const node = document.createElement("span");
    node.className = className;
    node.textContent = text;
    parent.append(node);
  }

  function renderCard(event) {
    const card = elements.template.content.firstElementChild.cloneNode(true);
    const badges = card.querySelector(".badges");
    addText(badges, "badge badge-category", event.category);
    addText(badges, "badge", event.level);
    addText(badges, "badge badge-verified", verificationLabel(event.verification));
    if (event.recognition) {
      const recognitionText = event.recognition.status === "direct"
        ? `福大直接认定 · ${event.recognition.level}`
        : `福大目录赛事 · ${event.recognition.level}`;
      addText(badges, "badge badge-recognized", recognitionText);
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
      const label = document.createElement("span");
      label.textContent = `下一节点 · ${next.label}`;
      const strong = document.createElement("strong");
      strong.textContent = `${formatDate(next.at)} · ${countdown(next.at)}`;
      callout.append(label, strong);
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
    if (event.warning) {
      warning.hidden = false;
      warning.textContent = `注意：${event.warning}`;
    }

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
      if (state.favoritesOnly) render(); else updateFavorite();
    });

    const source = card.querySelector(".source-link");
    source.href = event.sourceUrl;
    source.textContent = event.sourceLabel;
    card.querySelector(".calendar-button").addEventListener("click", () => downloadCalendar(event));
    card.querySelector(".verified-at").textContent = `核验于 ${event.verifiedAt} · 日期有变请以官方原文为准`;
    return card;
  }

  function render() {
    const visible = filteredEvents();
    elements.list.replaceChildren(...visible.map(renderCard));
    elements.count.textContent = `${visible.length} 个结果`;
    elements.empty.hidden = visible.length !== 0;
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
      "BEGIN:VEVENT",
      `UID:${event.id}-${index}@fzu-radar.local`,
      `DTSTAMP:${stamp}`,
      `DTSTART:${toUtcIcs(milestone.at)}`,
      `DTEND:${toUtcIcs(new Date(dateOf(milestone).getTime() + 30 * 60 * 1000))}`,
      `SUMMARY:${escapeIcs(`${event.title}｜${milestone.label}`)}`,
      `DESCRIPTION:${escapeIcs(`来源：${event.sourceLabel}\n${event.warning || "请以官方通知为准"}`)}`,
      `URL:${event.sourceUrl}`,
      "END:VEVENT"
    ].join("\r\n")).join("\r\n");
    const content = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//LinXiaoBa//FZU Competition Radar//ZH-CN\r\nCALSCALE:GREGORIAN\r\nMETHOD:PUBLISH\r\n${entries}\r\nEND:VCALENDAR\r\n`;
    const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${event.id}.ics`;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function renderStats() {
    const soonCount = events.flatMap((event) => event.milestones).filter((milestone) => {
      const delta = dateOf(milestone) - now;
      return delta >= 0 && delta <= THIRTY_DAYS;
    }).length;
    const latest = events.map((event) => event.verifiedAt).sort().at(-1);
    elements.verifiedCount.textContent = String(events.length);
    elements.upcomingCount.textContent = String(soonCount);
    elements.latestDate.textContent = latest ? latest.slice(5).replace("-", ".") : "—";
  }

  elements.search.addEventListener("input", (event) => { state.query = event.target.value; render(); });
  elements.soonOnly.addEventListener("change", (event) => { state.soonOnly = event.target.checked; render(); });
  elements.recognizedOnly.addEventListener("change", (event) => { state.recognizedOnly = event.target.checked; render(); });
  elements.favoritesOnly.addEventListener("change", (event) => { state.favoritesOnly = event.target.checked; render(); });

  let installPrompt;
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    elements.install.hidden = false;
  });
  elements.install.addEventListener("click", async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    elements.install.hidden = true;
  });

  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register("./sw.js");
  }

  renderCategories();
  renderStats();
  render();
})();
