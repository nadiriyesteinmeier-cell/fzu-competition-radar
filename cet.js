(function () {
  "use strict";

  const form = document.querySelector("#cet-form");
  const placeholder = document.querySelector("#result-placeholder");
  const content = document.querySelector("#result-content");
  const ratios = { 1: 0.2, 2: 0.4, 3: 0.6, 4: 0.78, 5: 0.9 };
  let lastResult;

  function boundedNumber(id, min, max) {
    const input = document.querySelector(id);
    const value = Number(input.value);
    if (!Number.isFinite(value) || value < min || value > max) {
      input.focus();
      throw new Error(`请输入 ${min}—${max} 之间的数字`);
    }
    return value;
  }

  function sectionScore(correct, total, weight) {
    return correct / total * weight;
  }

  function render(result) {
    placeholder.hidden = true;
    content.hidden = false;
    document.querySelector("#result-level").textContent = result.level;
    document.querySelector("#result-range").textContent = `${result.low}—${result.high} 分`;
    document.querySelector("#result-center").textContent = `中心参考约 ${result.center} 分；请优先看区间，不要只看中心值。`;
    document.querySelector("#score-listening").textContent = Math.round(result.listening);
    document.querySelector("#score-reading").textContent = Math.round(result.reading);
    document.querySelector("#score-writing").textContent = Math.round(result.writing);
    document.querySelector("#score-translation").textContent = Math.round(result.translation);
    content.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      const level = document.querySelector("#cet-level").value;
      const listeningCorrect = boundedNumber("#listening-correct", 0, 25);
      const readingCorrect = boundedNumber("#reading-correct", 0, 30);
      const writingLevel = boundedNumber("#writing-level", 1, 5);
      const translationLevel = boundedNumber("#translation-level", 1, 5);
      const listening = sectionScore(listeningCorrect, 25, 248.5);
      const reading = sectionScore(readingCorrect, 30, 248.5);
      const writing = ratios[writingLevel] * 106.5;
      const translation = ratios[translationLevel] * 106.5;
      const center = Math.round(listening + reading + writing + translation);
      const memoryUncertainty = 18 + (listeningCorrect > 0 ? 8 : 0) + (readingCorrect > 0 ? 8 : 0);
      const subjectiveUncertainty = writingLevel === 3 || translationLevel === 3 ? 12 : 8;
      const margin = memoryUncertainty + subjectiveUncertainty;
      lastResult = {
        level, listening, reading, writing, translation, center,
        low: Math.max(0, center - margin),
        high: Math.min(710, center + margin)
      };
      render(lastResult);
    } catch (error) {
      document.querySelector("#share-status").textContent = error.message;
    }
  });

  document.querySelector("#share-estimate").addEventListener("click", async () => {
    if (!lastResult) return;
    const shareText = `${lastResult.level} 非官方估分区间：${lastResult.low}—${lastResult.high}分。结果来自“学生雷达”本地估算，不是官方成绩。`;
    try {
      await navigator.clipboard.writeText(shareText);
      document.querySelector("#share-status").textContent = "结果已复制，未包含各题输入数据";
    } catch (_) {
      document.querySelector("#share-status").textContent = "复制失败，请手动记录估分区间";
    }
  });

  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register("./sw.js");
})();
