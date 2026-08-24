(function () {
  "use strict";
  const events = Array.isArray(window.COMPETITION_EVENTS) ? window.COMPETITION_EVENTS : [];
  const briefs = Array.isArray(window.PRO_BRIEFS) ? window.PRO_BRIEFS : [];
  const requestedId = new URLSearchParams(location.search).get("id") || "cumcm-2026";
  const event = events.find((item) => item.id === requestedId) || events.find((item) => item.id === "cumcm-2026") || events[0];
  const special = event?.id === "cumcm-2026" ? window.CUMCM_FOCUS : null;
  const brief = briefs.find((item) => item.id === event?.id);
  const genericTasks = ["读完官方通知并记录资格、队伍与作品要求", "确认学校或学院的审核和校内截止", "把所有正式节点加入日历", "建立作品、源文件、版权与过程证据清单", "完成可检查的最小作品或方案", "提交前核对格式、原文规则与备份"];
  const data = special || {
    id: event.id, title: event.title,
    startsAt: (event.milestones.find((item) => Date.parse(item.at) >= Date.now()) || event.milestones[0]).at,
    endsAt: event.milestones.at(-1).at, officialUrl: event.sourceUrl, rulesUrl: event.sourceUrl, archiveUrl: event.sourceUrl,
    paperYears: [], featuredPapers: [],
    milestones: event.milestones.map((item) => ({ at: item.at, title: item.label, note: event.warning || "具体安排以官方原文和校内通知为准。" })),
    trainingTasks: genericTasks
  };
  const settingsKey = `student-radar-focus-reminders-v1:${data.id}`;
  const progressKey = `student-radar-focus-progress-v1:${data.id}`;
  const $ = (selector) => document.querySelector(selector);
  const formatShort = (value) => new Intl.DateTimeFormat("zh-CN", { month: "2-digit", day: "2-digit" }).format(new Date(value));

  function renderIdentity() {
    document.title = `${data.title}专注模式｜学生雷达`;
    $("#focus-eyebrow").textContent = `FOCUS MODE · ${event.category}`;
    $("#focus-intro").textContent = data.title;
    $("#focus-range").textContent = `${formatShort(data.startsAt)}—${formatShort(data.endsAt)}`;
    $("#focus-footer").textContent = `林小八制作 · ${event.category}专注模式`;
  }
  function updateCountdown() {
    const upcoming = data.milestones.find((item) => Date.parse(item.at) >= Date.now());
    if (!upcoming) { $("#countdown-value").textContent = "已结束"; $("#countdown-label").textContent = "等待结果与复盘"; return; }
    const days = Math.max(0, Math.ceil((Date.parse(upcoming.at) - Date.now()) / 86400000));
    $("#countdown-value").textContent = days === 0 ? "今天" : `${days}天`;
    $("#countdown-label").textContent = `距离${upcoming.title}`;
  }
  function renderToday() {
    const next = data.milestones.find((item) => Date.parse(item.at) >= Date.now()) || data.milestones.at(-1);
    $("#today-title").textContent = next.title;
    $("#today-note").textContent = `${new Intl.DateTimeFormat("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date(next.at))} · ${next.note}`;
    $("#today-source").href = data.officialUrl;
  }
  function savedProgress() { try { return JSON.parse(localStorage.getItem(progressKey) || "[]"); } catch (_) { return []; } }
  function renderTasks() {
    const done = new Set(savedProgress());
    $("#training-tasks").replaceChildren(...data.trainingTasks.map((task, index) => {
      const label = document.createElement("label"); const input = document.createElement("input");
      input.type = "checkbox"; input.checked = done.has(index); input.addEventListener("change", saveProgress);
      label.append(input, document.createTextNode(task)); return label;
    })); updateProgress();
  }
  function saveProgress() {
    const completed = [...document.querySelectorAll("#training-tasks input")].flatMap((input, index) => input.checked ? [index] : []);
    localStorage.setItem(progressKey, JSON.stringify(completed)); updateProgress();
  }
  function updateProgress() { $("#progress-text").textContent = `${document.querySelectorAll("#training-tasks input:checked").length}/${data.trainingTasks.length} · 仅本机`; }
  function yearCard(item) {
    const article = document.createElement("article"); article.className = "paper-year-card";
    article.innerHTML = `<span></span><h3></h3><p></p><a target="_blank" rel="noopener noreferrer">打开资料 →</a>`;
    article.querySelector("span").textContent = item.status; article.querySelector("h3").textContent = item.label;
    article.querySelector("p").textContent = item.summary; article.querySelector("a").href = item.url; return article;
  }
  function renderResources() {
    if (special) {
      $("#resource-eyebrow").textContent = "OFFICIAL PAPER LIBRARY"; $("#resource-heading").textContent = "往届优秀论文入口";
      $("#resource-intro").textContent = "论文仍在组委会指定展示网站阅读；本站只做索引、阅读顺序和原创笔记，不重新托管或售卖全文。";
      $("#archive-link").href = data.archiveUrl; $("#archive-link").textContent = "2012—2025官方归档 →";
      $("#paper-years").replaceChildren(...data.paperYears.map(yearCard));
      $("#featured-papers").replaceChildren(...data.featuredPapers.map((item) => {
        const article = document.createElement("article"); article.className = "featured-paper-card";
        article.innerHTML = `<div><span></span><b></b></div><p></p><a target="_blank" rel="noopener noreferrer">阅读官方展示 →</a>`;
        article.querySelector("span").textContent = item.code; article.querySelector("b").textContent = item.type;
        article.querySelector("p").textContent = item.readFor; article.querySelector("a").href = item.url; return article;
      })); return;
    }
    $("#resource-heading").textContent = "官方资料与准备索引";
    $("#resource-intro").textContent = "先读官方原文，再按行动清单制作作品；没有可靠往届资料时不会用网络搬运内容填充。";
    $("#archive-link").href = event.sourceUrl;
    const cards = [{ status: "已核验", label: event.sourceLabel, summary: event.summary, url: event.sourceUrl }];
    (brief?.premium || []).forEach(([title, text]) => cards.push({ status: "PRO预览", label: title, summary: text, url: `pro.html?id=${encodeURIComponent(event.id)}` }));
    $("#paper-years").replaceChildren(...cards.map(yearCard)); $("#featured-papers").replaceChildren();
    $("#deep-read").hidden = true; $("#deep-read-jump").hidden = true;
  }
  function loadSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(settingsKey) || "null"); if (!saved) return;
      const form = $("#reminder-form"); form.elements.daily.checked = Boolean(saved.daily); form.elements.milestone.checked = Boolean(saved.milestone);
      form.elements.official.checked = Boolean(saved.official); form.elements.channel.value = saved.channel || "仅导入系统日历";
      $("#reminder-status").textContent = `已恢复本机设置 · ${form.elements.channel.value}（微信通道尚未接通）`;
    } catch (_) {}
  }
  function saveSettings(evt) {
    evt.preventDefault(); const form = evt.currentTarget;
    const value = { daily: form.elements.daily.checked, milestone: form.elements.milestone.checked, official: form.elements.official.checked, channel: form.elements.channel.value };
    localStorage.setItem(settingsKey, JSON.stringify(value));
    $("#reminder-status").textContent = `已保存到当前设备 · ${value.channel}${value.channel.includes("微信") ? "（等待接入，不代表已经订阅）" : ""}`;
    const body = `${data.title}提醒内测\n渠道：${value.channel}\n每日训练：${value.daily ? "开" : "关"}\n关键节点：${value.milestone ? "开" : "关"}\n官方变更：${value.official ? "开" : "关"}`;
    $("#wechat-waitlist").href = `mailto:792629666@qq.com?subject=${encodeURIComponent("竞赛提醒内测")}&body=${encodeURIComponent(body)}`;
  }
  function escapeIcs(value) { return String(value).replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n"); }
  function toIcsDate(value) { return new Date(value).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z"); }
  function downloadCalendar() {
    const items = data.milestones.map((item, index) => ["BEGIN:VEVENT", `UID:${data.id}-${index}@student-radar`, `DTSTAMP:${toIcsDate(new Date())}`, `DTSTART:${toIcsDate(item.at)}`, `DTEND:${toIcsDate(new Date(Date.parse(item.at) + 3600000))}`, `SUMMARY:${escapeIcs(`${event.category}专注 · ${item.title}`)}`, `DESCRIPTION:${escapeIcs(item.note)}`, "BEGIN:VALARM", "TRIGGER:-PT2H", "ACTION:DISPLAY", `DESCRIPTION:${escapeIcs(item.title)}`, "END:VALARM", "END:VEVENT"].join("\r\n")).join("\r\n");
    const blob = new Blob([`BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Student Radar//Focus//CN\r\n${items}\r\nEND:VCALENDAR\r\n`], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = `${event.title}专注日历.ics`; link.click(); setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }
  renderIdentity(); updateCountdown(); renderToday(); renderTasks(); renderResources(); loadSettings();
  $("#reminder-form").addEventListener("submit", saveSettings); $("#download-focus-calendar").addEventListener("click", downloadCalendar);
  $("#reset-progress").addEventListener("click", () => { localStorage.removeItem(progressKey); renderTasks(); });
  $("#wechat-waitlist").href = `mailto:792629666@qq.com?subject=${encodeURIComponent(`${event.title}提醒内测`)}`;
})();

