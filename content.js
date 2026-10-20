(() => {
  const KEY = "__hassasSes";
  let target = null; // 0..1, null = müdahale yok

  const saved = sessionStorage.getItem(KEY);
  if (saved !== null && !isNaN(parseFloat(saved))) target = parseFloat(saved);

  function apply() {
    if (target === null) return;
    document.querySelectorAll("video, audio").forEach((m) => {
      if (Math.abs(m.volume - target) > 0.0005) m.volume = target;
    });
  }

  // YouTube sesi kendisi değiştirirse (yeni video vb.) tekrar uygula
  document.addEventListener("volumechange", apply, true);
  document.addEventListener("loadedmetadata", apply, true);
  setInterval(apply, 500);
  apply();

  chrome.runtime.onMessage.addListener((msg, _s, sendResponse) => {
    if (msg.type === "set") {
      target = Math.min(1, Math.max(0, msg.value / 100));
      sessionStorage.setItem(KEY, String(target));
      apply();
      sendResponse({ ok: true });
    } else if (msg.type === "reset") {
      target = null;
      sessionStorage.removeItem(KEY);
      sendResponse({ ok: true });
    } else if (msg.type === "get") {
      const v = document.querySelector("video");
      const cur = target !== null ? target : v ? v.volume : 1;
      sendResponse({ value: Math.round(cur * 1000) / 10, active: target !== null });
    }
    return true;
  });
})();
