const slider = document.getElementById("slider");
const num = document.getElementById("num");
const status = document.getElementById("status");

async function aktifSekme() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

async function send(msg) {
  const tab = await aktifSekme();
  if (!tab) return null;
  try { return await chrome.tabs.sendMessage(tab.id, msg); }
  catch { status.textContent = "Bu sekme bir YouTube sekmesi değil (ya da sayfayı yenile)."; return null; }
}

function show(v) { slider.value = v; num.value = v; }

async function setVol(v) {
  v = Math.min(100, Math.max(0, parseFloat(v) || 0));
  show(v);
  const r = await send({ type: "set", value: v });
  if (r) {
    status.textContent = `Ses %${v} olarak sabitlendi.`;
    chrome.action.setBadgeBackgroundColor({ color: "#3b82f6" });
    chrome.action.setBadgeText({ text: String(Math.round(v)) });
  }
}

slider.addEventListener("input", () => setVol(slider.value));
num.addEventListener("change", () => setVol(num.value));

[1, 2, 3, 5, 10, 25, 50, 100].forEach((p) => {
  const b = document.createElement("button");
  b.textContent = "%" + p;
  b.onclick = () => setVol(p);
  document.getElementById("presets").appendChild(b);
});

document.getElementById("pin").onclick = async () => {
  const tab = await aktifSekme();
  if (!tab) return;
  await chrome.storage.session.set({ musicTabId: tab.id });
  status.textContent = "Bu sekme kısayol hedefi oldu. Artık başka sekmedeyken de kısayolla ayarlayabilirsin.";
};

document.getElementById("reset").onclick = async () => {
  const r = await send({ type: "reset" });
  if (r) {
    chrome.action.setBadgeText({ text: "" });
    status.textContent = "Sıfırlandı. Ses kontrolü YouTube'da.";
  }
};

(async () => {
  const r = await send({ type: "get" });
  if (r) show(r.value);
})();
