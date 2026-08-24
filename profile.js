(function () {
  "use strict";
  const keys = {
    profile: "student-radar-profile-v1", eventFavorites: "fzu-radar-favorites-v1", paperFavorites: "student-radar-paper-favorites-v1",
    orders: "student-radar-paper-orders-v1", cet: "student-radar-cet-history-v1", progressPrefix: "student-radar-focus-progress-v1:", reminderPrefix: "student-radar-focus-reminders-v1:"
  };
  const events = Array.isArray(window.COMPETITION_EVENTS) ? window.COMPETITION_EVENTS : [];
  const form = document.querySelector("#profile-form");
  const fields = { nickname: document.querySelector("#profile-nickname"), school: document.querySelector("#profile-school"), major: document.querySelector("#profile-major"), grade: document.querySelector("#profile-grade"), language: document.querySelector("#profile-language") };
  const name = document.querySelector("#preview-name");
  const greeting = document.querySelector("#profile-greeting");
  const school = document.querySelector("#preview-school");
  const status = document.querySelector("#profile-status");
  const workspaceStatus = document.querySelector("#workspace-status");

  function read(key, fallback) { try { const value = JSON.parse(localStorage.getItem(key) || "null"); return value ?? fallback; } catch (_) { return fallback; } }
  function asArray(key) { const value = read(key, []); return Array.isArray(value) ? value : []; }
  function formatDate(value) { try { return new Intl.DateTimeFormat("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date(value)); } catch (_) { return "—"; } }

  function preview() {
    const nickname = fields.nickname.value.trim() || "同学";
    name.textContent = nickname; greeting.textContent = nickname;
    school.textContent = `${fields.school.value} · ${fields.major.value.trim() || "未填写专业"} · ${fields.grade.value}`;
  }

  function focusRecords() {
    return events.flatMap((event) => {
      const progress = asArray(`${keys.progressPrefix}${event.id}`);
      const reminder = read(`${keys.reminderPrefix}${event.id}`, null);
      if (!progress.length && !reminder) return [];
      return [{ id: event.id, title: event.title, completed: progress.length, total: 6, reminder: reminder?.channel || "未设置提醒" }];
    });
  }

  function listItem(title, meta, href, label) {
    const row = document.createElement("div"); const info = document.createElement("div"); const strong = document.createElement("strong"); const span = document.createElement("span"); const link = document.createElement("a");
    strong.textContent = title; span.textContent = meta; link.href = href; link.textContent = label; info.append(strong, span); row.append(info, link); return row;
  }

  function renderWorkspace() {
    const focuses = focusRecords(); const orders = asArray(keys.orders); const estimates = asArray(keys.cet);
    const eventFavorites = asArray(keys.eventFavorites); const paperFavorites = asArray(keys.paperFavorites);
    document.querySelector("#stat-focus").textContent = String(focuses.length);
    document.querySelector("#stat-paper-orders").textContent = String(orders.length);
    document.querySelector("#stat-cet").textContent = String(estimates.length);
    document.querySelector("#stat-favorites").textContent = String(eventFavorites.length + paperFavorites.length);
    document.querySelector("#competition-favorite-count").textContent = String(eventFavorites.length);
    document.querySelector("#paper-favorite-count").textContent = String(paperFavorites.length);

    const focusList = document.querySelector("#profile-focus-list");
    focusList.replaceChildren(...focuses.slice(0, 3).map((item) => listItem(item.title, `任务 ${item.completed}/${item.total} · ${item.reminder}`, `focus.html?id=${encodeURIComponent(item.id)}`, "继续 →")));
    document.querySelector("#profile-focus-empty").hidden = focuses.length > 0;
    const paperList = document.querySelector("#profile-paper-list");
    paperList.replaceChildren(...orders.slice(0, 3).map((item) => listItem(item.paperTitle, `${item.productName} · ${formatDate(item.createdAt)}`, `paper-analysis.html?id=${encodeURIComponent(item.paperId)}#analysis-result`, "打开 →")));
    document.querySelector("#profile-paper-empty").hidden = orders.length > 0;
    const cetList = document.querySelector("#profile-cet-list");
    cetList.replaceChildren(...estimates.slice(0, 3).map((item) => listItem(`${item.level} ${item.low}—${item.high}分`, `中心参考 ${item.center}分 · ${formatDate(item.createdAt)}`, "cet.html", "再估 →")));
    document.querySelector("#profile-cet-empty").hidden = estimates.length > 0;
  }

  const saved = read(keys.profile, null);
  if (saved) {
    Object.entries(fields).forEach(([field, node]) => { if (saved[field]) node.value = saved[field]; });
    status.textContent = "已从当前设备读取本地档案";
  }
  preview(); renderWorkspace();
  Object.values(fields).forEach((field) => field.addEventListener("input", preview));
  form.addEventListener("submit", (event) => {
    event.preventDefault(); const profile = Object.fromEntries(Object.entries(fields).map(([field, node]) => [field, node.value.trim()])); profile.savedAt = new Date().toISOString();
    localStorage.setItem(keys.profile, JSON.stringify(profile)); preview(); status.textContent = "已保存到当前设备；院校状态仍为未认证";
  });
  document.querySelector("#clear-profile").addEventListener("click", () => {
    if (!window.confirm("确定清除这台设备上的院校档案吗？")) return;
    localStorage.removeItem(keys.profile); form.reset(); preview(); status.textContent = "本地档案已清除";
  });
  document.querySelector("#clear-activity").addEventListener("click", () => {
    if (!window.confirm("确定清除论文精读、估分和竞赛专注记录吗？收藏与院校档案会保留。")) return;
    localStorage.removeItem(keys.orders); localStorage.removeItem(keys.cet);
    [...Array(localStorage.length)].map((_, index) => localStorage.key(index)).filter((key) => key?.startsWith(keys.progressPrefix) || key?.startsWith(keys.reminderPrefix)).forEach((key) => localStorage.removeItem(key));
    renderWorkspace(); workspaceStatus.textContent = "活动记录已清除；收藏和院校档案仍保留";
  });
})();

