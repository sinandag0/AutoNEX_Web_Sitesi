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
- [x] **GitHub Reposu Açıldı ve Push Edildi:** `https://github.com/sinandag0/AutoNEX_Web_Sitesi` (Branch: `main`).
- [x] **E-posta & İletişim Eşleşmesi:** Sitedeki tüm resmi e-posta referansları `info@autonex.net.tr` olarak bağlandı.
- [x] **WhatsApp İletişim Hattı Bağlandı:** `+90 541 875 02 88` numarası ana sayfa ve iletişim sayfasına bağlandı.
- [x] **Vercel Canlı Dağıtımı:** `https://autonex-web-sitesi.vercel.app` adresinde yayında.
- [x] **Turhost DNS & NS Yönlendirmesi:** `dns1.turhost.com` / `dns2.turhost.com` ve Vercel IP/CNAME kayıtları tamamlandı.

---

## ⚡ Canlıya Alma ve Bağlantı Durumu:

### 1. Adım: GitHub Reposu (TAMAMLANDI ✅)
- GitHub üzerinde `AutoNEX_Web_Sitesi` reposu oluşturuldu ve kodların tamamı `main` branch'ine başarıyla push edildi.
- Repo Adresi: `https://github.com/sinandag0/AutoNEX_Web_Sitesi`

### 2. Adım: WhatsApp & İletişim Bağlantısı (TAMAMLANDI ✅)
- Sitedeki "7/24 WhatsApp AI Danışma Hattı" ve telefon bağlantıları `+90 (541) 875 02 88` olarak bağlandı.

### 3. Adım: Turhost DNS Kayıtları (TAMAMLANDI ✅)
- Turhost İsim Sunucuları `dns1.turhost.com` ve `dns2.turhost.com` olarak güncellendi.
- A Kaydı (`216.198.79.1`) ve CNAME Kaydı (`6cc504a56949ed3f.vercel-dns-017.com`) Vercel'in özel havuzuna göre tanımlandı.
- TRABIS yayılımı tamamlandığında `https://autonex.net.tr` otomatik SSL ile yayında olacak.
- **Seçenek 1 (En Kolay & Otomatik SSL - Vercel / Netlify):**
  1. Vercel veya Netlify'da GitHub ile giriş yapıp `AutoNEX_Web_Sitesi` reposunu seçin ("Deploy").
  2. Domain ayarlarına `autonex.net.tr` yazın.
  3. Turhost Müşteri Paneline (`panel.turhost.com`) girin -> Alan Adları -> `autonex.net.tr` -> DNS Yönetimi:
     - **A Kaydı:** `@` ➔ `216.198.79.1` (Vercel güncel IP)
     - **CNAME Kaydı:** `www` ➔ `6cc504a56949ed3f.vercel-dns-017.com` (Vercel özel CNAME)
  4. 5-10 dakika içinde `https://autonex.net.tr` otomatik SSL sertifikasıyla dünya çapında yayına girer.

- **Seçenek 2 (Turhost Doğrudan cPanel Hosting):**
  Eğer Turhost'tan Linux Web Hosting paketi aldıysanız:
  - cPanel -> Dosya Yöneticisi (File Manager) -> `public_html` klasörüne projedeki tüm dosyaları yükleyin.

---
*Hazırlayan: Barlas (Antigravity) | Güncelleme: 26 Ekim 2026*
