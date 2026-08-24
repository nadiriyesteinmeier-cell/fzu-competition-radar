(function () {
  "use strict";
  const data = window.CUMCM_FOCUS;
  const settingsKey = "student-radar-cumcm-reminders-v1";
  const progressKey = "student-radar-cumcm-progress-v1";
  const $ = (selector) => document.querySelector(selector);

  function updateCountdown() {
    const now = Date.now();
    const start = Date.parse(data.startsAt);
    const end = Date.parse(data.endsAt);
    if (now < start) {
      const days = Math.max(0, Math.ceil((start - now) / 86400000));
      $("#countdown-value").textContent = `${days}天`;
      $("#countdown-label").textContent = "距离比赛开始";
    } else if (now <= end) {
      $("#countdown-value").textContent = "进行中";
      $("#countdown-label").textContent = "遵守竞赛纪律，独立完成";
    } else {
      $("#countdown-value").textContent = "已结束";
      $("#countdown-label").textContent = "等待结果与复盘";
    }
  }

  function renderToday() {
    const now = Date.now();
    const next = data.milestones.find((item) => Date.parse(item.at) >= now) || data.milestones.at(-1);
    $("#today-title").textContent = next.title;
    $("#today-note").textContent = `${new Intl.DateTimeFormat("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date(next.at))} · ${next.note}`;
    $("#today-source").href = next.title.includes("竞赛") ? data.officialUrl : data.rulesUrl;
  }

  function savedProgress() {
    try { return JSON.parse(localStorage.getItem(progressKey) || "[]"); } catch (_) { return []; }
  }
  function renderTasks() {
    const done = new Set(savedProgress());
    const nodes = data.trainingTasks.map((task, index) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = done.has(index);
      input.addEventListener("change", saveProgress);
      label.append(input, document.createTextNode(task));
      return label;
    });
    $("#training-tasks").replaceChildren(...nodes);
    updateProgress();
  }
  function saveProgress() {
    const completed = [...document.querySelectorAll("#training-tasks input")].flatMap((input, index) => input.checked ? [index] : []);
    localStorage.setItem(progressKey, JSON.stringify(completed));
    updateProgress();
  }
  function updateProgress() {
    const count = document.querySelectorAll("#training-tasks input:checked").length;
    $("#progress-text").textContent = `${count}/${data.trainingTasks.length} · 仅本机`;
  }

  function renderPapers() {
    $("#archive-link").href = data.archiveUrl;
    $("#paper-years").replaceChildren(...data.paperYears.map((item) => {
      const article = document.createElement("article");
      article.className = "paper-year-card";
      article.innerHTML = `<span></span><h3></h3><p></p><a target="_blank" rel="noopener noreferrer">进入官方论文页 →</a>`;
      article.querySelector("span").textContent = item.status;
      article.querySelector("h3").textContent = item.label;
      article.querySelector("p").textContent = item.summary;
      article.querySelector("a").href = item.url;
      return article;
    }));
    $("#featured-papers").replaceChildren(...data.featuredPapers.map((item) => {
      const article = document.createElement("article");
      article.className = "featured-paper-card";
      article.innerHTML = `<div><span></span><b></b></div><p></p><a target="_blank" rel="noopener noreferrer">阅读官方展示 →</a>`;
      article.querySelector("span").textContent = item.code;
      article.querySelector("b").textContent = item.type;
      article.querySelector("p").textContent = item.readFor;
      article.querySelector("a").href = item.url;
      return article;
    }));
  }

  function loadSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(settingsKey) || "null");
      if (!saved) return;
      const form = $("#reminder-form");
      form.elements.daily.checked = Boolean(saved.daily);
      form.elements.milestone.checked = Boolean(saved.milestone);
      form.elements.official.checked = Boolean(saved.official);
      form.elements.channel.value = saved.channel || "仅导入系统日历";
      $("#reminder-status").textContent = `已恢复本机设置 · ${form.elements.channel.value}（微信通道尚未接通）`;
    } catch (_) {}
  }
  function saveSettings(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const value = { daily: form.elements.daily.checked, milestone: form.elements.milestone.checked, official: form.elements.official.checked, channel: form.elements.channel.value };
    localStorage.setItem(settingsKey, JSON.stringify(value));
    $("#reminder-status").textContent = `已保存到当前设备 · ${value.channel}${value.channel.includes("微信") ? "（等待接入，不代表已经订阅）" : ""}`;
    const body = `数模国赛提醒内测\n渠道：${value.channel}\n每日训练：${value.daily ? "开" : "关"}\n关键节点：${value.milestone ? "开" : "关"}\n官方变更：${value.official ? "开" : "关"}\n备注：这不是付款或已开通证明。`;
    $("#wechat-waitlist").href = `mailto:792629666@qq.com?subject=${encodeURIComponent("数模国赛提醒内测")}&body=${encodeURIComponent(body)}`;
  }

  function escapeIcs(value) { return String(value).replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n"); }
  function toIcsDate(value) { return new Date(value).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z"); }
  function downloadCalendar() {
    const events = data.milestones.map((item, index) => ["BEGIN:VEVENT", `UID:cumcm-2026-${index}@student-radar`, `DTSTAMP:${toIcsDate(new Date())}`, `DTSTART:${toIcsDate(item.at)}`, `DTEND:${toIcsDate(new Date(Date.parse(item.at) + 3600000))}`, `SUMMARY:${escapeIcs(`数模国赛专注 · ${item.title}`)}`, `DESCRIPTION:${escapeIcs(item.note)}`, "BEGIN:VALARM", "TRIGGER:-PT2H", "ACTION:DISPLAY", `DESCRIPTION:${escapeIcs(item.title)}`, "END:VALARM", "END:VEVENT"].join("\r\n")).join("\r\n");
    const blob = new Blob([`BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Student Radar//CUMCM Focus//CN\r\nCALSCALE:GREGORIAN\r\n${events}\r\nEND:VCALENDAR\r\n`], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "2026数模国赛专注日历.ics";
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }

  updateCountdown(); renderToday(); renderTasks(); renderPapers(); loadSettings();
  $("#reminder-form").addEventListener("submit", saveSettings);
  $("#download-focus-calendar").addEventListener("click", downloadCalendar);
  $("#reset-progress").addEventListener("click", () => { localStorage.removeItem(progressKey); renderTasks(); });
  $("#wechat-waitlist").href = "mailto:792629666@qq.com?subject=%E6%95%B0%E6%A8%A1%E5%9B%BD%E8%B5%9B%E6%8F%90%E9%86%92%E5%86%85%E6%B5%8B";
})();

