(function () {
  "use strict";
  const keys = {
    profile: "student-radar-profile-v1", auth: "student-radar-auth-v1", eventFavorites: "fzu-radar-favorites-v1", paperFavorites: "student-radar-paper-favorites-v1",
    orders: "student-radar-paper-orders-v1", cet: "student-radar-cet-history-v1", progressPrefix: "student-radar-focus-progress-v1:", reminderPrefix: "student-radar-focus-reminders-v1:"
  };
  const events = Array.isArray(window.COMPETITION_EVENTS) ? window.COMPETITION_EVENTS : [];
  const apiBase = resolveApiBase();
  const form = document.querySelector("#profile-form");
  const fields = { nickname: document.querySelector("#profile-nickname"), school: document.querySelector("#profile-school"), major: document.querySelector("#profile-major"), grade: document.querySelector("#profile-grade"), language: document.querySelector("#profile-language") };
  const name = document.querySelector("#preview-name"); const greeting = document.querySelector("#profile-greeting"); const school = document.querySelector("#preview-school");
  const status = document.querySelector("#profile-status"); const workspaceStatus = document.querySelector("#workspace-status"); const accountStatus = document.querySelector("#account-status");
  const accountForm = document.querySelector("#account-form"); const accountSession = document.querySelector("#account-session"); const accountSecurity = document.querySelector("#account-security");
  const forgotForm = document.querySelector("#forgot-password-form"); const resetForm = document.querySelector("#reset-password-form");
  let auth = read(keys.auth, null); let serverOrders = [];

  function read(key, fallback) { try { const value = JSON.parse(localStorage.getItem(key) || "null"); return value ?? fallback; } catch (_) { return fallback; } }
  function asArray(key) { const value = read(key, []); return Array.isArray(value) ? value : []; }
  function formatDate(value) { try { return new Intl.DateTimeFormat("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date(value)); } catch (_) { return "—"; } }
  function resolveApiBase() {
    const local = ["127.0.0.1", "localhost"].includes(location.hostname); const candidate = String(window.STUDENT_RADAR_CONFIG?.apiBase || (local ? "http://127.0.0.1:8787" : "")).trim().replace(/\/$/, "");
    if (!candidate) return ""; try { const url = new URL(candidate); if (url.protocol === "https:" || (local && url.protocol === "http:")) return url.origin + url.pathname.replace(/\/$/, ""); } catch (_) {} return "";
  }
  async function api(path, options = {}) {
    if (!apiBase) throw new Error("账号服务尚未连接");
    const headers = { ...(options.body ? { "content-type": "application/json" } : {}), ...(auth?.token ? { authorization: `Bearer ${auth.token}` } : {}), ...(options.headers || {}) };
    const response = await fetch(`${apiBase}${path}`, { ...options, headers, signal: AbortSignal.timeout(12000) }); const value = await response.json().catch(() => ({}));
    if (!response.ok) { const error = new Error(value.error || "请求失败"); error.status = response.status; throw error; } return value;
  }
  function saveAuth(value) { auth = value; if (value) localStorage.setItem(keys.auth, JSON.stringify(value)); else localStorage.removeItem(keys.auth); renderAccount(); }
  function applyProfile(profile) { if (!profile) return; Object.entries(fields).forEach(([field, node]) => { if (profile[field]) node.value = profile[field]; }); preview(); }
  function currentProfile() { return Object.fromEntries(Object.entries(fields).map(([field, node]) => [field, node.value.trim()])); }
  function preview() { const nickname = fields.nickname.value.trim() || "同学"; name.textContent = nickname; greeting.textContent = nickname; school.textContent = `${fields.school.value} · ${fields.major.value.trim() || "未填写专业"} · ${fields.grade.value}`; }
  function renderAccount() {
    const account = auth?.account; const loggedIn = Boolean(auth?.token && account);
    accountForm.hidden = loggedIn; accountSession.hidden = !loggedIn; accountSecurity.hidden = !loggedIn;
    document.querySelector("#save-profile").textContent = loggedIn ? "保存并同步档案" : "保存到当前设备";
    document.querySelector("#profile-storage-label").textContent = loggedIn ? "档案已启用账号同步" : "游客状态仅保存在本机";
    document.querySelector("#verification-badge").textContent = account?.verification?.label || "平台未认证";
    document.querySelector("#verification-title").textContent = account?.verification?.status === "verified" ? "平台已核验院校身份" : "院校身份未认证";
    document.querySelector("#verification-copy").textContent = account?.verification?.status === "verified" ? "仅表示平台完成核验，不代表学校官方认证。" : "当前只是你填写的资料，不代表福州大学官方确认。";
    if (loggedIn) {
      document.querySelector("#account-name").textContent = account.nickname; document.querySelector("#account-email-label").textContent = account.email;
      const emailVerified = account.emailVerification?.status === "verified"; document.querySelector("#email-verification-label").textContent = account.emailVerification?.label || "邮箱未验证"; document.querySelector("#resend-verification").hidden = emailVerified;
      document.querySelector("#account-avatar").textContent = (account.nickname || "同").slice(0, 1); accountStatus.textContent = "已登录；论文精读与院校档案可跨设备恢复";
    } else accountStatus.textContent = "未登录，当前仍可作为游客使用";
  }
  function focusRecords() {
    return events.flatMap((event) => { const progress = asArray(`${keys.progressPrefix}${event.id}`); const reminder = read(`${keys.reminderPrefix}${event.id}`, null); if (!progress.length && !reminder) return []; return [{ id: event.id, title: event.title, completed: progress.length, total: 6, reminder: reminder?.channel || "未设置提醒" }]; });
  }
  function listItem(title, meta, href,label) {
    const row = document.createElement("div"); const info = document.createElement("div"); const strong = document.createElement("strong"); const span = document.createElement("span"); const link = document.createElement("a");
    strong.textContent = title; span.textContent = meta; link.href = href; link.textContent = label; info.append(strong, span); row.append(info, link); return row;
  }
  function combinedOrders() { const merged = new Map(asArray(keys.orders).map((item) => [item.id, item])); serverOrders.forEach((item) => merged.set(item.id, { ...item, price: String(item.priceFen / 100) })); return [...merged.values()].sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt))); }
  function renderWorkspace() {
    const focuses = focusRecords(); const orders = combinedOrders(); const estimates = asArray(keys.cet); const eventFavorites = asArray(keys.eventFavorites); const paperFavorites = asArray(keys.paperFavorites);
    document.querySelector("#stat-focus").textContent = String(focuses.length); document.querySelector("#stat-paper-orders").textContent = String(orders.length); document.querySelector("#stat-cet").textContent = String(estimates.length); document.querySelector("#stat-favorites").textContent = String(eventFavorites.length + paperFavorites.length);
    document.querySelector("#competition-favorite-count").textContent = String(eventFavorites.length); document.querySelector("#paper-favorite-count").textContent = String(paperFavorites.length);
    const focusList = document.querySelector("#profile-focus-list"); focusList.replaceChildren(...focuses.slice(0, 3).map((item) => listItem(item.title, `任务 ${item.completed}/${item.total} · ${item.reminder}`, `focus.html?id=${encodeURIComponent(item.id)}`, "继续 →"))); document.querySelector("#profile-focus-empty").hidden = focuses.length > 0;
    const paperList = document.querySelector("#profile-paper-list"); paperList.replaceChildren(...orders.slice(0, 3).map((item) => listItem(item.paperTitle, `${item.productName} · ${formatDate(item.createdAt)}`, `paper-analysis.html?id=${encodeURIComponent(item.paperId)}#analysis-result`, "打开 →"))); document.querySelector("#profile-paper-empty").hidden = orders.length > 0;
    const cetList = document.querySelector("#profile-cet-list"); cetList.replaceChildren(...estimates.slice(0, 3).map((item) => listItem(`${item.level} ${item.low}—${item.high}分`, `中心参考 ${item.center}分 · ${formatDate(item.createdAt)}`, "cet.html", "再估 →"))); document.querySelector("#profile-cet-empty").hidden = estimates.length > 0;
  }
  async function syncAccount() {
    if (!auth?.token) return;
    try {
      const me = await api("/api/auth/me"); auth.account = me.account; localStorage.setItem(keys.auth, JSON.stringify(auth)); applyProfile(me.account.profile); renderAccount();
      const history = await api("/api/orders"); serverOrders = Array.isArray(history.orders) ? history.orders : []; renderWorkspace(); workspaceStatus.textContent = `已从账号恢复 ${serverOrders.length} 条论文订单`;
    } catch (error) { if (error.status === 401) { saveAuth(null); serverOrders = []; accountStatus.textContent = "登录状态已失效，请重新登录"; } }
  }
  async function authenticate(mode) {
    const email = document.querySelector("#account-email").value.trim(); const password = document.querySelector("#account-password").value; const nickname = document.querySelector("#account-nickname").value.trim();
    accountStatus.textContent = mode === "register" ? "正在创建账号……" : "正在登录……";
    try { const value = await api(`/api/auth/${mode}`, { method: "POST", body: JSON.stringify(mode === "register" ? { email, password, nickname } : { email, password }) }); saveAuth({ token: value.token, account: value.account }); applyProfile(value.account.profile); document.querySelector("#account-password").value = ""; await syncAccount(); if (mode === "register") accountStatus.textContent = value.emailDelivery === "sent" ? "账号已创建，请查收验证邮件" : "账号已创建；邮件验证将在发送服务启用后开放"; }
    catch (error) { accountStatus.textContent = error.message; }
  }
  function clearAuthQuery() { history.replaceState({}, "", `${location.pathname}${location.hash || ""}`); }
  async function handleAuthLink() {
    const params = new URLSearchParams(location.search); const verifyToken = params.get("verify"); const resetToken = params.get("reset");
    if (resetToken) { accountForm.hidden = true; accountSession.hidden = true; accountSecurity.hidden = true; forgotForm.hidden = true; resetForm.hidden = false; resetForm.dataset.token = resetToken; accountStatus.textContent = "重置链接已读取，请设置新密码"; return "reset"; }
    if (!verifyToken) return;
    accountStatus.textContent = "正在验证邮箱……";
    try { const value = await api("/api/auth/email/confirm", { method: "POST", body: JSON.stringify({ token: verifyToken }) }); if (auth?.account?.id === value.account.id) { auth.account = value.account; localStorage.setItem(keys.auth, JSON.stringify(auth)); renderAccount(); } accountStatus.textContent = "邮箱验证成功；院校身份仍需单独认证"; }
    catch (error) { accountStatus.textContent = error.message; }
    clearAuthQuery(); return "verify";
  }

  const saved = read(keys.profile, null); if (saved) { applyProfile(saved); status.textContent = "已从当前设备读取本地档案"; }
  preview(); renderAccount(); renderWorkspace(); Object.values(fields).forEach((field) => field.addEventListener("input", preview));
  accountForm.addEventListener("submit", (event) => { event.preventDefault(); authenticate("register"); });
  document.querySelector("#account-login").addEventListener("click", () => authenticate("login"));
  document.querySelector("#forgot-password").addEventListener("click", () => { forgotForm.hidden = false; accountForm.hidden = true; document.querySelector("#forgot-email").value = document.querySelector("#account-email").value.trim(); accountStatus.textContent = "输入注册邮箱以找回密码"; });
  document.querySelector("#cancel-forgot-password").addEventListener("click", () => { forgotForm.hidden = true; accountForm.hidden = false; accountStatus.textContent = "未登录，当前仍可作为游客使用"; });
  forgotForm.addEventListener("submit", async (event) => { event.preventDefault(); const email = document.querySelector("#forgot-email").value.trim(); accountStatus.textContent = "正在提交……"; try { const value = await api("/api/auth/password/forgot", { method: "POST", body: JSON.stringify({ email }) }); forgotForm.reset(); accountStatus.textContent = value.deliveryReady ? "如果该邮箱已注册，重置邮件已发送" : "申请已受理；邮件发送服务尚未启用，账号信息不会被泄露"; } catch (error) { accountStatus.textContent = error.message; } });
  resetForm.addEventListener("submit", async (event) => { event.preventDefault(); const newPassword = document.querySelector("#reset-new-password").value; accountStatus.textContent = "正在重置密码……"; try { await api("/api/auth/password/reset", { method: "POST", body: JSON.stringify({ token: resetForm.dataset.token, newPassword }) }); saveAuth(null); resetForm.reset(); resetForm.hidden = true; accountForm.hidden = false; clearAuthQuery(); accountStatus.textContent = "密码已重置，所有旧会话已退出，请使用新密码登录"; } catch (error) { accountStatus.textContent = error.message; } });
  document.querySelector("#account-logout").addEventListener("click", async () => { try { await api("/api/auth/logout", { method: "POST", body: "{}" }); } catch (_) {} saveAuth(null); serverOrders = []; renderWorkspace(); status.textContent = "已退出；本机档案仍保留"; });
  document.querySelector("#resend-verification").addEventListener("click", async () => { accountStatus.textContent = "正在申请验证邮件……"; try { const value = await api("/api/me/email/resend", { method: "POST", body: "{}" }); accountStatus.textContent = value.delivery === "sent" ? "验证邮件已发送，请检查收件箱" : value.delivery === "already_verified" ? "邮箱已经验证" : "验证流程已准备，邮件发送服务尚未启用"; } catch (error) { accountStatus.textContent = error.message; } });
  document.querySelector("#password-form").addEventListener("submit", async (event) => {
    event.preventDefault(); const passwordForm = event.currentTarget; const currentPassword = document.querySelector("#current-password").value; const newPassword = document.querySelector("#new-password").value; accountStatus.textContent = "正在更新密码……";
    try { const value = await api("/api/me/password", { method: "PUT", body: JSON.stringify({ currentPassword, newPassword }) }); saveAuth({ token: value.token, account: value.account }); passwordForm.reset(); accountStatus.textContent = "密码已更新，其他设备上的旧会话已退出"; } catch (error) { accountStatus.textContent = error.message; }
  });
  document.querySelector("#delete-account-form").addEventListener("submit", async (event) => {
    event.preventDefault(); const deleteForm = event.currentTarget; if (!document.querySelector("#delete-confirm").checked || !window.confirm("最后确认：永久删除账号、同步档案和账号论文订单？")) return;
    const password = document.querySelector("#delete-password").value; accountStatus.textContent = "正在删除账号数据……";
    try { await api("/api/me", { method: "DELETE", body: JSON.stringify({ password }) }); saveAuth(null); serverOrders = []; deleteForm.reset(); renderWorkspace(); accountStatus.textContent = "账号与云端数据已永久删除；本机游客数据仍保留"; } catch (error) { accountStatus.textContent = error.message; }
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); const profile = { ...currentProfile(), savedAt: new Date().toISOString() }; localStorage.setItem(keys.profile, JSON.stringify(profile)); preview();
    if (!auth?.token) { status.textContent = "已保存到当前设备；院校状态仍为未认证"; return; }
    status.textContent = "正在同步档案……"; try { const value = await api("/api/me/profile", { method: "PUT", body: JSON.stringify(profile) }); auth.account = value.account; localStorage.setItem(keys.auth, JSON.stringify(auth)); renderAccount(); status.textContent = "档案已安全同步；院校状态仍为平台未认证"; } catch (error) { status.textContent = `${error.message}；本机副本已保存`; }
  });
  document.querySelector("#clear-profile").addEventListener("click", () => { if (!window.confirm("确定清除这台设备上的院校档案吗？登录账号中的同步副本不会删除。")) return; localStorage.removeItem(keys.profile); form.reset(); preview(); status.textContent = "本地档案已清除"; });
  document.querySelector("#clear-activity").addEventListener("click", () => {
    if (!window.confirm("确定清除本机论文精读、估分和竞赛专注记录吗？账号订单、收藏与院校档案会保留。")) return;
    localStorage.removeItem(keys.orders); localStorage.removeItem(keys.cet); [...Array(localStorage.length)].map((_, index) => localStorage.key(index)).filter((key) => key?.startsWith(keys.progressPrefix) || key?.startsWith(keys.reminderPrefix)).forEach((key) => localStorage.removeItem(key)); renderWorkspace(); workspaceStatus.textContent = "本机活动记录已清除；账号订单、收藏和院校档案仍保留";
  });
  handleAuthLink().then((mode) => { if (!mode) syncAccount(); });
})();
