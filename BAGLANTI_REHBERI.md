# 🚀 AutoNEX — Canlıya Alma ve Bağlantı Kontrol Listesi

Bu dosya, Sinan Dağ oturumu kapattıktan sonra geri döndüğünde ("Barlas, web siteyi bağlayalım, GitHub'a da bağlayalım" dediğinde) anında kaldığı yerden devam edebilmek için hazırlandı.

---

## 📌 Mevcut Durum (Tamamlananlar)
- [x] **Domain Satın Alındı:** `autonex.net.tr` (Turhost üzerinden 1 yıllık tescil edildi, Sipariş ID: `#2026102175287`).
- [x] **Çok Sayfalı Web Sitesi Kodlandı:**
  - `index.html` — Ana Sayfa (Hero, Metrikler, Önizlemeler)
  - `cozumler.html` — Çözümlerimiz (3 Çekirdek Modül Detayı)
  - `demo.html` — Canlı Asistan Simülatörü (İnteraktif test merkezi)
  - `neden-autonex.html` — Neden AutoNEX? (Kıyaslama tablosu, metodoloji, güvenlik)
  - `iletisim.html` — İletişim & SSS (E-posta teklif formu + 7/24 WhatsApp AI Danışma Hattı)
  - `style.css` — Ultra modern koyu tema, cam efekti, neon gradientler
  - `app.js` — Çoklu sektör senaryoları, typing indicator, mailto tetikleyici
- [x] **Yerel Git Reposu Kuruldu:** İlk commit atıldı (`d79f39d`).
- [x] **E-posta & İletişim Eşleşmesi:** Sitedeki tüm resmi e-posta referansları `info@autonex.net.tr` olarak bağlandı.

---

## ⚡ Sinan Geri Döndüğünde Yapılacak 2 Hızlı Adım:

### 1. Adım: GitHub Reposunu Açıp Push Etmek
- GitHub üzerinde `AutoNEX_Web_Sitesi` adıyla boş bir repository açılacak (veya API ile oluşturulacak).
- `git remote add origin https://github.com/.../AutoNEX_Web_Sitesi.git`
- `git push -u origin master`

### 2. Adım: Turhost DNS Kayıtlarını Girmek
- Netlify / Vercel üzerinde `autonex.net.tr` eklenecek.
- Turhost panelinde (`panel.turhost.com/domain/autonex.net.tr`):
  - **A Kaydı:** `@` ➔ Hosting IP Adresi
  - **CNAME Kaydı:** `www` ➔ Hosting Alt Alan Adı
- SSL (Let's Encrypt) 5 dakikada otomatik yeşil kilit olarak aktifleşecek.

---
*Hazırlayan: Barlas (Antigravity) | Tarih: 26 Ekim 2026*
