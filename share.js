(function () {
  "use strict";

  document.querySelectorAll("[data-share]").forEach((button) => {
    button.addEventListener("click", async () => {
      const payload = {
        title: button.dataset.shareTitle || document.title,
        text: button.dataset.shareText || "",
        url: location.href
      };
      const status = button.nextElementSibling;
      try {
        if (navigator.share) {
          await navigator.share(payload);
          status.textContent = "已打开分享面板";
        } else {
          await navigator.clipboard.writeText(`${payload.title}\n${payload.text}\n${payload.url}`);
          status.textContent = "链接已复制";
        }
      } catch (error) {
        if (error.name !== "AbortError") status.textContent = "分享失败，请复制浏览器地址";
      }
    });
  });
})();
