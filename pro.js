(function () {
  "use strict";

  const interestKey = "student-radar-pro-interest-v1";
  const profileKey = "student-radar-profile-v1";
  const result = document.querySelector("#interest-result");
  const choice = document.querySelector("#interest-choice");
  const email = document.querySelector("#interest-email");
  const fit = document.querySelector("#personal-fit");

  try {
    const profile = JSON.parse(localStorage.getItem(profileKey) || "null");
    if (profile?.major) fit.textContent = `${profile.major} · 高匹配`;
    const saved = JSON.parse(localStorage.getItem(interestKey) || "null");
    if (saved?.price) showResult(saved.price);
  } catch (_) {}

  function showResult(price) {
    choice.textContent = `你的选择：${price}`;
    const body = `竞赛Pro内测意愿\n样例：全国大学生数字媒体科技作品及创意竞赛\n选择：${price}\n备注：这不是付款或订单。`;
    email.href = `mailto:792629666@qq.com?subject=${encodeURIComponent("学生雷达Pro内测意愿")}&body=${encodeURIComponent(body)}`;
    result.hidden = false;
    document.querySelectorAll("[data-price]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.price === price)));
  }

  document.querySelectorAll("[data-price]").forEach((button) => {
    button.addEventListener("click", () => {
      const price = button.dataset.price;
      localStorage.setItem(interestKey, JSON.stringify({ price, recordedAt: new Date().toISOString() }));
      showResult(price);
    });
  });
})();
