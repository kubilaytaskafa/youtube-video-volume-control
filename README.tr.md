# 🎧 YouTube Hassas Ses (YouTube Fine Volume)

> YouTube sekmesinin sesini **%1 hassasiyetle** (hatta %0,5) ayarla; sekme bazlı çalışır, klavye kısayolları vardır.
> Çalışırken, okurken ya da konu anlatımı dinlerken arkada kısık müzik dinleyenler için.

🇬🇧 [English README](README.md)

## Neden?
YouTube'un kendi ses çubuğu düşük seviyelerde çok kaba kalır. Arkada rahatlatıcı müzik açıkken, başka bir sekmede ders dinlerken müziği **%1–%2** seviyesine getirmek zahmetlidir. Bu eklenti bunu çözer.

## Özellikler
- 🎚️ %0–%100 arası, %0,5'lik adımlarla ses (kaydırıcı, sayı kutusu ve hazır düğmeler: 1, 2, 3, 5, 10, 25, 50, 100)
- 🗂️ **Sekme bazlı**: müzik sekmesi %2, ders sekmesi %100 olabilir
- ⌨️ **Klavye kısayolları**: `Ctrl+Shift+↑` / `Ctrl+Shift+↓` sesi %1 artırır / azaltır (macOS'ta `Command+Shift+↑/↓`)
- 📌 **Hedef sekme**: müzik sekmesini başka bir sekmedeyken de ayarla
- 🔁 Yeni videoya geçince ayar korunur (YouTube sesi sıfırlayamaz)
- 🔢 Araç çubuğundaki rozet güncel ses seviyesini gösterir
- 🔒 Veri toplamaz, ağ isteği yapmaz, bağımlılığı yoktur
- `youtube.com` ve `music.youtube.com` üzerinde çalışır

## Kurulum
### Kaynaktan (şimdilik önerilen)
1. Bu depoyu indir ya da klonla.
2. Chrome'da (veya Edge, Brave, Opera, Vivaldi gibi Chromium tabanlı tarayıcıda) `chrome://extensions` adresini aç.
3. Sağ üstten **Geliştirici modu**'nu aç.
4. **Paketlenmemiş öğe yükle**'ye tıkla ve proje klasörünü seç.
5. Eklentiyi araç çubuğuna sabitle.
6. Açık olan YouTube sekmelerini bir kez yenile.

## Kullanım
1. YouTube'da müzik sekmesini aç ve eklenti simgesine tıkla.
2. Kaydırıcıyı oynat, değer yaz ya da hazır düğmeye bas (ör. **%2**).
3. **📌 Bu sekmeyi kısayol hedefi yap** düğmesine bir kez bas.
4. Herhangi bir sekmedeyken `Ctrl+Shift+↑` / `Ctrl+Shift+↓` ile hedef sekmenin sesini %1'lik adımlarla değiştir.
5. **Sıfırla** ses kontrolünü YouTube'a geri verir.

Kısayolları `chrome://extensions/shortcuts` sayfasından değiştirebilirsin.

## Nasıl çalışır?
- İçerik betiği (`content.js`) sayfadaki medya öğelerinin `volume` değerini ayarlar, YouTube değiştirirse yeniden uygular.
- Değer sekmenin `sessionStorage` alanında tutulur; yani sekme bazlıdır ve sekme kapanınca silinir.
- Servis çalışanı (`background.js`) klavye komutlarını yönetir, hedef sekmeyi `chrome.storage.session` içinde tutar.
- Popup (`popup.html`, `popup.js`) arayüzdür.

## Gizlilik
Bu eklenti **hiçbir** veri toplamaz, **hiçbir** ağ isteği yapmaz, analitik kullanmaz. Tek izin `storage`'dır (hedef sekmeyi tarayıcı oturumu boyunca hatırlamak için). Yalnızca YouTube sayfalarında çalışır.

## Katkı
Issue ve pull request'ler memnuniyetle karşılanır. Bkz. [CONTRIBUTING.md](CONTRIBUTING.md).

## Lisans
[MIT](LICENSE) © 2026 Kubilay Taşkafa

## Yazar
**[Kubilay Taşkafa](https://www.linkedin.com/in/KULLANICI-ADIN)** tarafından geliştirildi. Eklenti odaklanmana yardımcı olduysa LinkedIn'de bağlantı kurabilir ya da depoya ⭐ verebilirsin.

---
*Bu proje YouTube veya Google ile bağlantılı değildir, onlar tarafından onaylanmamıştır.*
