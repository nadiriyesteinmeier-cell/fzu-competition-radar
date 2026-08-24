(function () {
  "use strict";
  const key = "student-radar-profile-v1";
  const form = document.querySelector("#profile-form");
  const fields = {
    nickname: document.querySelector("#profile-nickname"),
    school: document.querySelector("#profile-school"),
    major: document.querySelector("#profile-major"),
    grade: document.querySelector("#profile-grade"),
    language: document.querySelector("#profile-language")
  };
  const name = document.querySelector("#preview-name");
  const school = document.querySelector("#preview-school");
  const status = document.querySelector("#profile-status");

  function preview() {
    name.textContent = fields.nickname.value.trim() || "同学";
    school.textContent = `${fields.school.value} · ${fields.major.value.trim() || "未填写专业"} · ${fields.grade.value}`;
  }

  try {
    const saved = JSON.parse(localStorage.getItem(key) || "null");
    if (saved) {
      Object.entries(fields).forEach(([field, node]) => { if (saved[field]) node.value = saved[field]; });
      status.textContent = "已从当前设备读取本地档案";
    }
  } catch (_) {}
  preview();

  Object.values(fields).forEach((field) => field.addEventListener("input", preview));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const profile = Object.fromEntries(Object.entries(fields).map(([field, node]) => [field, node.value.trim()]));
    profile.savedAt = new Date().toISOString();
    localStorage.setItem(key, JSON.stringify(profile));
    preview();
    status.textContent = "已保存到当前设备；院校状态仍为未认证";
  });

  document.querySelector("#clear-profile").addEventListener("click", () => {
    if (!window.confirm("确定清除这台设备上的院校档案吗？")) return;
    localStorage.removeItem(key);
    form.reset();
    preview();
    status.textContent = "本地档案已清除";
  });
})();
