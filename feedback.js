(() => {
  const form = document.querySelector("#feedback-form");
  const comment = document.querySelector("#feedback-comment");
  const count = document.querySelector("#comment-count");
  const placeholder = document.querySelector("#feedback-placeholder");
  const content = document.querySelector("#feedback-content");
  const output = document.querySelector("#feedback-text");
  const copyButton = document.querySelector("#copy-feedback");
  const emailLink = document.querySelector("#email-feedback");
  const status = document.querySelector("#feedback-status");

  comment.addEventListener("input", () => {
    count.textContent = String(comment.value.length);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const note = String(data.get("comment") || "").trim() || "未填写";
    const text = [
      "【学生雷达匿名反馈】",
      `试用功能：${data.get("module")}`,
      `完成动作：${data.get("action")}`,
      `是否有用：${data.get("useful")}`,
      `是否再用：${data.get("return")}`,
      `付费意愿：${data.get("willingness")}`,
      `改进建议：${note}`
    ].join("\n");

    output.textContent = text;
    emailLink.href = `mailto:792629666@qq.com?subject=${encodeURIComponent("学生雷达匿名反馈")}&body=${encodeURIComponent(text)}`;
    placeholder.hidden = true;
    content.hidden = false;
    status.textContent = "尚未发送";
    content.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(output.textContent);
      status.textContent = "已复制，可以粘贴给林小八";
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(output);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = "无法自动复制，已选中文字，请手动复制";
    }
  });
})();
