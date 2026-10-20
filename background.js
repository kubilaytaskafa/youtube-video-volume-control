// Kısayolun etkileyeceği sekmeyi bul: önce işaretlenen "hedef" sekme, yoksa aktif sekme
async function hedefSekme() {
  const { musicTabId } = await chrome.storage.session.get("musicTabId");
  if (musicTabId) {
    try { return (await chrome.tabs.get(musicTabId)).id; } catch { /* sekme kapanmış */ }
  }
  const [aktif] = await chrome.tabs.query({ active: true, currentWindow: true });
  return aktif ? aktif.id : null;
}

chrome.commands.onCommand.addListener(async (komut) => {
  const tabId = await hedefSekme();
  if (tabId == null) return;
  try {
    const { value } = await chrome.tabs.sendMessage(tabId, { type: "get" });
    const adim = komut === "ses-artir" ? 1 : -1;
    const yeni = Math.min(100, Math.max(0, Math.round(value) + adim));
    await chrome.tabs.sendMessage(tabId, { type: "set", value: yeni });
    chrome.action.setBadgeBackgroundColor({ color: "#3b82f6" });
    chrome.action.setBadgeText({ text: String(yeni) });
  } catch (e) {
    // hedef sekme YouTube değil ya da yenilenmemiş
  }
});
