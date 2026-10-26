/**
 * AutoNEX — Autonomous Growth & Operations
 * Interactive UI Logic & Real-Time AI Chat Simulator
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Scroll Blur Effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isDisplayed = navMenu.style.display === 'flex';
      navMenu.style.display = isDisplayed ? 'none' : 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '100%';
      navMenu.style.left = '0';
      navMenu.style.width = '100%';
      navMenu.style.background = 'rgba(7, 9, 14, 0.95)';
      navMenu.style.padding = '1.5rem';
      navMenu.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
      navMenu.style.backdropFilter = 'blur(16px)';
    });
  }

  // 3. Interactive Asistan Simulator Data & Intelligent Logic
  const scenarios = {
    clinic: {
      name: 'AutoNEX Sağlık, Klinik & Estetik',
      avatar: '✨',
      sector: 'Sağlık, Klinik, Diş & Medikal Estetik',
      summary: 'lazer epilasyon, medikal cilt bakımı, estetik diş hekimliği, hekim muayeneleri ve ücretsiz analiz randevuları',
      welcome: 'Merhaba! Kliniğimize hoş geldiniz. 🌸 Lazer epilasyon, medikal cilt bakımı, estetik diş hekimliği (gülüş tasarımı, zirkonyum) ve hekim muayene randevularımız hakkında 7/24 bilgi alabilir veya ücretsiz uzman analiz randevunuzu hemen oluşturabilirsiniz. Size nasıl yardımcı olabilirim?',
      prompts: [
        'Cilt bakımı ne kadar sürüyor?',
        'Fiyatlar ve seanslar nasıl belirleniyor?',
        'Diş beyazlatma ve zirkonyum kaplama var mı?',
        'Doktor muayenesi randevusu alabilir miyim?',
        'Ağrısız mı, acı hisseder miyim?'
      ],
      topics: {
        price: 'Lazer epilasyon ve medikal bakım fiyatlarımız; uygulama yapılacak bölgeye, seans sayısına ve danışanımızın cilt/kıl yapısına göre tamamen kişiye özel olarak belirlenmektedir 🌸 Merkezimizde seans başı ödeme kolaylığı ve dönemsel çok avantajlı paket seçeneklerimiz bulunmaktadır. Cilt ve kıl yapınızı yakından inceleyip size en uygun seans planını çıkarabilmemiz için merkezimizde tamamen ÜCRETSİZ profesyonel cilt ve kıl analizi yapıyoruz. Dilerseniz siz kahvemizi yudumlarken uzmanımızla cildinize birlikte bakalım ☕ Size uygun bir gün için ön görüşme randevusu oluşturalım mı?',
        appointment: 'Cumartesi günü saat 14:00 seansımız şu an müsait görünüyor! 📅 Adınız Soyadınız ve telefon numaranızı iletirseniz randevunuzu hemen takvime işleyip onay bildiriminizi iletiyorum.',
        skin: 'Medikal Hydrafacial cilt bakımı protokolümüz ortalama 50-60 dakika sürmektedir 🌸 Vakumlu derin gözenek arındırma, siyah nokta temizliği, peeling ve cildin ihtiyacına özel hyaluronik asit/vitamin serum yüklemesi içerir. Seans sonunda cildiniz anında neme doymuş, taze ve ışıl ışıl bir görünüm kazanır ✨ Cilt tipinize en uygun protokolü belirlemek için merkezimizde ücretsiz cilt analizi yapmaktayız. Size uygun bir gün için uzmanımızla analiz randevusu planlayalım mı?',
        skin_price: 'Medikal cilt bakımı protokollerimizde fiyatlandırma; cildin analiz sonucundaki ihtiyacına (derin gözenek temizliği, leke protokolü veya yoğun nem takviyesi) ve seans planına göre kişiye özel belirlenmektedir 🌸 Merkezimizde seans başı ödeme kolaylığı ve avantajlı kür seçeneklerimiz mevcuttur. Cildinizin neye ihtiyacı olduğunu netleştirmek için merkezimizde ücretsiz profesyonel cilt analizi yapmaktayız. Uzmanımızla cildinize birlikte bakmamız için randevu oluşturalım mı? ☕',
        laser_duration: 'Tüm vücut buz lazer seansımız ortalama 35-45 dakika sürmektedir 🌸 Kıl yapısına bağlı olarak ortalama 6-8 seansta %85-90 kalıcı pürüzsüzlük sağlanır. Kıl yapınızı inceleyip 1 dakikalık ücretsiz deneme atışı yapmak için randevu oluşturalım mı?',
        pain: 'Kullandığımız yeni nesil -10°C safir temaslı soğutmalı buz başlık teknolojisi sayesinde atışlar masaj konforunda ve sıfıra yakın bir hisle gerçekleşir 🌸 Cildinizin konforunu görmeniz için işlem öncesinde ücretsiz 1 dakikalık deneme atışı yapabiliyoruz.',
        dental: 'Kliniğimiz bünyesinde estetik diş hekimliği, gülüş tasarımı, zirkonyum ve porselen kaplama, diş beyazlatma (bleaching) ve şeffaf plak (telsiz ortodonti) tedavileri uzman hekimlerimiz tarafından yürütülmektedir 🦷 Panoramik röntgen ve detaylı hekim muayenesi sonrasında kişiye özel tedavi planı ve bütçesi oluşturulur. Muayene randevusu planlamak ister misiniz?',
        doctor: 'Kliniğimizde alanında uzman hekimlerimiz ile poliklinik muayene ve danışmanlık hizmeti sunulmaktadır 🩺 İlgilendiğiniz branş veya şikayetiniz hakkında ön bilgi verirseniz, ilgili doktorumuzun en erken müsait randevu saatini sizin için sorgulayabilirim.',
        location: 'Kliniğimiz merkezi lokasyonda, ana cadde üzerinde ve metro/metrobüs durağına yalnızca 3 dakika yürüme mesafesindedir 📍 Otoparkımız mevcuttur. Dilerseniz WhatsApp üzerinden canlı konum gönderebilirim.',
        hours: 'Kliniğimiz Pazartesi - Cumartesi günleri 09:30 - 19:30 saatleri arasında açıktır. Ben ise 7/24 aktif olduğum için randevunuzu dilediğiniz an takvime işleyebilirim.'
      }
    },
    service: {
      name: 'AutoNEX Yerel Hizmet & Profesyonel Temizlik',
      avatar: '🧼',
      sector: 'Yerel Hizmet, Temizlik & Koltuk Yıkama',
      summary: 'ev/ofis temizliği, yerinde buharlı koltuk/yatak yıkama, sabit fiyatlar ve mobil servis rezervasyonu',
      welcome: 'Merhabalar efendim! Profesyonel Temizlik & Yerel Hizmet hattına hoş geldiniz. 🧼 Detaylı ev/ofis temizliği, Karcher buharlı koltuk ve yatak yıkama hizmetlerimiz için net sabit fiyat teklifi alabilir ve randevunuzu hemen oluşturabilirsiniz. Size nasıl yardımcı olabilirim?',
      prompts: [
        '3+1 ev temizliği ne kadar?',
        'Koltuk yıkama fiyatları nedir?',
        'L koltuk yıkama ne kadar?',
        'Koltuk kaç saatte kurur?',
        'Deterjanları siz mi getiriyorsunuz?',
        'Yatak yıkama yapıyor musunuz?'
      ],
      topics: {
        price: '3+1 detaylı boş veya dolu ev temizliği hizmetimiz (1 tam gün, 2 kişilik profesyonel kadın personel, Karcher buharlı dezenfeksiyon makinesi ve tüm kimyasallar dahil) sabit 2.400 TL\'dir efendim. Yol, malzeme ve yemek dahil olup kesinlikle ekstra sürpriz ücret talep edilmez.',
        sofa_price: 'Merhabalar efendim.. Yıkama hizmetimizin içine buharlı uygulama ücretsizdir. Standart koltuk takımı (2 adet 3\'lü çekyat + 2 tekli berjer) komple yıkama fiyatımız sabit 1.500 TL, tek çekyat ise 500 TL\'dir 🧼 Sizin yıkanacak koltuğunuz hangi model efendim?',
        sofa_l: 'L koltuklarda ölçü ve minder yapısı farklılık gösterdiği için net fiyat verebilmemiz adına dilerseniz bize bir fotoğrafını iletebilir misiniz efendim? 📸 Sırt veya oturma minderleri sabit mi yoksa fermuarlı çıkıyor mu? Küçük/standart L koltuklar 1.000 TL, geniş köşe takımları 1.500 TL bandındadır.',
        sofa_drying: 'Çift motorlu sanayi tipi yüksek vakumlu makinelerimiz sayesinde kumaşa verilen suyun %90\'ından fazlası anında geri çekilir efendim. Kesinlikle vıcık vıcık ıslak kalmaz; 4-6 saat içinde tamamen kurur ve aynı gün koltuklarınızı güvenle kullanabilirsiniz. Parke ve zeminleriniz titizlikle korunur.',
        sofa_stain: 'Kumaşın dokusuna zarar vermeyen özel enzim ve leke çıkarıcı solüsyonlar kullanıyoruz efendim (tay tüyü, keten, nubuk, kadife hepsi güvenle yıkanır). Kiri bezle silip süngere hapsetmek yerine, dipten vakumlayarak dışarı alıyoruz. Çay, kahve, yağ ve çocuk lekelerini %90-95 oranında tamamen arındırıyoruz.',
        mattress: 'Yatak yıkama hizmetimizde çift taraflı derin vakum ve anti-bakteriyel buharlı mayt temizliği yapıyoruz efendim 🛏️ Tek kişilik yatak: tek yüz 400 TL / çift yüz 800 TL. Çift kişilik yatak: tek yüz 800 TL / çift yüz 1.500 TL\'dir. Alerjiye karşı organik şampuanlar kullanılır.',
        construction: 'İnşaat ve tadilat sonrası temizlikte harç, boya, alçı ve silikon kalıntılarını yüzeyleri çizmeden özel profesyonel kazıyıcılar ve çözücülerle arındırıyoruz efendim. Dairenin metrekaresi ve oda sayısına göre ekip sayısını organize ediyoruz.',
        material: 'Kesinlikle evet efendim! Karcher profesyonel buhar makineleri, sanayi tipi vakumlar, tek kullanımlık renk kodlu mikrofiber bezler ve çevre dostu kimyasallar tarafımızdan eksiksiz getirilmektedir. Sizin hiçbir malzeme almanıza gerek kalmaz.',
        region: 'Şehrin tüm ilçe ve çevre mahallelerine mobil servis aracımızla adrese yerinde hizmet veriyoruz efendim. Yol, ulaşım veya servis için ekstra hiçbir ücret talep etmiyoruz.',
        appointment: 'Yarın sabah saat 09:00 başlangıçlı profesyonel servis ekibimiz şu an müsait görünüyor efendim! Randevunuzu hemen sabitleyebilmemiz için açık adresinizi ve bir iletişim numarası rica edebilir miyim?',
        duration: '3+1 standart detaylı ev temizliği hizmetimiz 2 kişilik uzman ekibimizle ortalama 6-7 saat, koltuk yıkama ise ortalama 1-1.5 saat sürmektedir efendim. Çift motorlu vakum sayesinde yıkanan koltuklar 4-6 saatte tamamen kurur ve aynı gün kullanıma hazır hale gelir.',
        hours: 'Saha temizlik ekiplerimiz haftanın 7 günü 08:30 - 18:30 saatleri arasında çalışmaktadır. Ben ise 7/24 rezervasyon ve acil talepleri kaydetmekteyim.'
      }
    },
    ecom: {
      name: 'AutoNEX E-Ticaret & Satış Asistanı',
      avatar: '🛍️',
      sector: 'E-Ticaret & Perakende Satış',
      summary: 'sipariş takibi, kargolama, ürün beden seçimi, kapıda ödeme ve 14 gün ücretsiz iade/değişim',
      welcome: 'Selam! Mağazamıza hoş geldiniz. ⚡ Yeni sezon koleksiyonumuzda bugüne özel sepette %20 anında indirim tanımlandı! Beden rehberi, sipariş takibi veya kargo süreçleri hakkında ne sormak istersiniz?',
      prompts: [
        'Siparişim ne zaman kargolanır?',
        'Kargom nerede?',
        'Kapıda ödeme imkanı var mı?',
        'İade ve değişim şartları nedir?',
        'Beden seçimi nasıl yapılmalı?',
        'Kargo ücreti ne kadar?'
      ],
      topics: {
        shipping: 'Hafta içi saat 16:00\'ya kadar verilen tüm siparişler aynı gün depomuzdan Yurtiçi Kargo güvencesiyle yola çıkar! 📦 İl ve ilçenize bağlı olarak 1-3 iş günü içinde adresinize teslim edilir. Kargo yola çıktığında SMS ile canlı takip linkiniz otomatik iletilir.',
        shipping_cost: '500 TL ve üzeri tüm siparişlerinizde kargo tamamen ÜCRETSİZDİR! 🚚 500 TL altındaki siparişlerde ise anlaşmalı indirimli kargo ücretimiz sabit 49 TL\'dir.',
        payment: 'Evet! Kapıda nakit veya kapıda kredi kartı ile güvenli ödeme seçeneğimiz mevcuttur 💳 Ayrıca web sitemizde tüm banka kartlarına peşin fiyatına 3-6 taksit fırsatı ve 3D Secure güvencesiyle siparişinizi hemen oluşturabilirsiniz.',
        return: 'Siparişinizi teslim aldığınız tarihten itibaren 14 gün boyunca koşulsuz ve ücretsiz iade veya beden değişimi hakkınız bulunmaktadır 🔄 Size hemen anlaşmalı iade kargo kodumuzu iletiyoruz; paketi kargoya ücretsiz teslim ettiğinizde 2 iş günü içinde ücret iadeniz kartınıza eksiksiz yansıtılır.',
        size: 'Kalıplarımız tam standart kalıptır (True-to-Size). Dilerseniz boy ve kilo bilginizi iletin, sizin için en ideal bedeni (S, M, L, XL) saniyeler içinde önerelim! Rahat veya salaş (oversize) durmasını isterseniz 1 beden büyük tercih edebilirsiniz.',
        order: 'Siparişinizin anlık kargo durumunu sorgulamak için 6 haneli sipariş numaranızı veya sipariş verirken kullandığınız telefon numaranızı yazabilir misiniz? Canlı kargo hareket dökümünü hemen getireyim 🔍',
        price: 'Sezon ürünlerimizde bugüne özel sepette %20 anında indirim tanımlıdır! Ayrıca 2. ürüne %50 indirim kampanyamız devam ediyor. İndirim kuponunuzu sepetinize otomatik uygulayabilirim 🎁',
        authenticity: 'Tüm ürünlerimiz %100 orijinal, adınıza e-fatura kesilerek faturalı, etiketli ve kalite kontrolünden geçirilerek ambalajında gönderilmektedir. Güvenle alışveriş yapabilirsiniz.',
        hours: 'Online mağazamız ve akıllı sipariş asistanımız 7/24 kesintisiz çalışmaktadır. Depomuzdan kargo çıkışları hafta içi her gün ve Cumartesi öğleye kadar düzenli yapılmaktadır.'
      }
    },
    restaurant: {
      name: 'AutoNEX Restoran & Gastronomi Asistanı',
      avatar: '🍽️',
      sector: 'Restoran, Kafe & Gastronomi',
      summary: 'masa rezervasyonu, gurme menü, doğum günü kutlamaları, vale ve akustik canlı müzik',
      welcome: 'Hoş geldiniz! 🍷 Odun ateşinde Napoli pizzalarımız, dry-aged et seçeneklerimiz, özel kutlamalar veya akşam masası rezervasyonu için 7/24 hizmetinizdeyim. Size nasıl yardımcı olabilirim?',
      prompts: [
        'Bu akşam 20:00 için 4 kişilik masa var mı?',
        'Menü ve fiyatları görebilir miyim?',
        'Doğum günü veya özel kutlama yapıyor musunuz?',
        'Glutensiz ve vegan seçenek var mı?',
        'Otopark ve vale hizmeti var mı?'
      ],
      topics: {
        appointment: 'Bu akşam için bahçe, teras veya şömine yanı alanlarımızda harika bir masamız müsait! 🥂 Kaç kişilik bir masa ayırmamızı istersiniz? Adınız Soyadınız ve iletişim numaranızı iletirseniz rezervasyon kartınızı hemen oluşturup onay SMS\'inizi iletiyorum.',
        price: 'Taş fırın odun ateşinde Napoli pizzalarımız, dry-aged dinlendirilmiş antrikot ve bonfile seçeneklerimiz, el yapımı taze makarnalarımız ve gurme burger çeşitlerimiz bulunmaktadır 🍕 Ortalama ana yemeklerimiz 290 - 580 TL arasındadır. Dijital QR menü linkimizi iletmemi ister misiniz?',
        birthday: 'Elbette, kutlamalarınızda yanınızda olmaktan mutluluk duyarız! 🎉 Önceden bildirdiğinizde masanıza özel şık çiçek/mum süslemesi hazırlıyoruz ve şefimizin ikram doğum günü tatlısını özel volkanlı sunumla servis ediyoruz. Kutlama hangi gün olacak efendim?',
        vegan_gluten: 'Evet! Menümüzde çölyak dostu glutensiz taze makarna ve glutensiz pizza hamuru alternatiflerimiz, zengin vegan sebze tabaklarımız ve bitkisel süt seçeneklerimiz bulunmaktadır 🌱 Alerjiniz olan spesifik bir içerik varsa mutfağımıza önceden memnuniyetle not iletebilirim.',
        valet: 'Evet, restoranımızın hemen önünde misafirlerimize özel ücretsiz kapalı otoparkımız ve profesyonel vale hizmetimiz bulunmaktadır 🚗 Park sorunu yaşamadan rahatça gelebilirsiniz.',
        hours: 'Restoranımız haftanın her günü 11:30 - 00:30 saatleri arasında kesintisiz hizmet vermektedir. Mutfak son sipariş alımı 23:00\'e kadardır. Cuma ve Cumartesi akşamları 20:30\'dan itibaren hafif akustik canlı müzik dinletimiz mevcuttur 🎶',
        takeaway: 'Evet! Yemeksepeti, Getir ve Trendyol Yemek üzerinden sıcak paket servisimiz bulunmaktadır. Ayrıca doğrudan restoranımızdan %10 gel-al indirimiyle siparişinizi teslim alabilirsiniz.',
        location: 'Restoranımız merkezi sahil şeridinde, marina bölgesinde yer almaktadır 📍 WhatsApp üzerinden harita konumunu anında iletebilirim.'
      }
    },
    corporate: {
      name: 'AutoNEX Kurumsal & B2B AI Danışmanlık',
      avatar: '🏢',
      sector: 'Kurumsal B2B & Yapay Zeka Danışmanlık',
      summary: 'Meta Graph API resmi entegrasyonu, CRM bağlantıları, kurumsal paketler ve online keşif toplantısı',
      welcome: 'Merhaba! AutoNEX Kurumsal Çözümler Danışma Hattı\'na hoş geldiniz. 💼 İşletmeniz için 48 saatte anahtar teslim yapay zeka otomasyonları, Meta API entegrasyonları, CRM bağlantıları ve kurumsal teklif süreçleri hakkında bilgi alabilirsiniz.',
      prompts: [
        'İşletmemize kurulum ne kadar sürüyor?',
        'Fiyatlandırma ve paketler nasıl?',
        'Bizim mevcut CRM/yazılıma bağlanır mı?',
        'KVKK ve veri güvenliği standartları nedir?',
        'Teklif ve keşif toplantısı alabilir miyim?'
      ],
      topics: {
        setup: 'AutoNEX motoru anahtar teslim kurulur. Şirketinizin SSS, fiyat listesi ve müşteri temsilcisi operasyon kurallarını aldıktan sonra sistemi yalnızca 48 saat içinde Meta Graph API resmi onaylı şekilde canlıya alıyoruz. Yazılımcı çalıştırmanıza veya kod yazmanıza gerek kalmaz.',
        price: 'İşletme büyüklüğünüze ve mesaj hacminize göre şeffaf sabit paketlerimiz mevcuttur: Başlangıç (Tek Kanal Instagram/WhatsApp), Büyüme (Multi-Channel + CRM Entegrasyonu) ve Kurumsal Özel AI (SLA & Özel LLM). Mesaj başına sürpriz ekstra maliyetler çıkarılmaz. Net teklif için keşif görüşmesi planlayabiliriz.',
        crm: 'Evet! Webhook, REST API ve hazır konnektörlerimiz sayesinde HubSpot, Zoho, Salesforce, Parasut, Ticimax, IdeaSoft, Shopify ve Google Sheets dahil tüm veritabanlarınıza iki yönlü tam entegrasyon sağlıyoruz. Gelen mesajdaki lead veya sipariş anında CRM\'inize işlenir.',
        appointment: 'Harika! 15 dakikalık ücretsiz online Google Meet keşif toplantısı planlayabiliriz 💼 Ekibimiz mevcut müşteri mesajlaşma trafiğinizi inceler ve işletmenize özel potansiyel tasarruf ve ciro artış raporunu canlı sunar. Hangi gün ve saat aralığı sizin için uygundur?',
        sectors: 'Klinik & sağlık, yerel hizmet & temizlik, e-ticaret, gayrimenkul, otomotiv, otel & restoran, turizm ve hukuk büroları başta olmak üzere; Instagram DM, WhatsApp veya web sitesinden müşteriyle mesajlaşan TÜM sektörlere %100 uyumlu olarak eğitilebilmektedir.',
        security: 'Veri güvenliği en yüksek önceliğimizdir 🔒 Müşteri mesajlarınız uçtan uca şifrelenir ve KVKK/GDPR standartlarına tam uyumlu olarak barındırılır. Şirketinize ait ticari veriler asla üçüncü taraf yapay zeka modellerini genel eğitmek için kullanılmaz.',
        handover: 'Herhangi bir anda müşteri özel bir durum belirttiğinde veya canlı bir yetkili ile görüşmek istediğinde; yapay zeka saniyeler içinde sessize geçer ve canlı temsilcinizin paneline WhatsApp/Telegram üzerinden anında alarm bildirimi düşürür.',
        hours: 'Kurumsal danışmanlık ekibimiz hafta içi 09:00 - 18:30 saatleri arasında hizmet vermektedir. AI altyapımız ise 7/24 aktiftir.'
      }
    }
  };

  let currentScenario = 'clinic';
  const chatBody = document.getElementById('chat-body');
  const simBotName = document.getElementById('sim-bot-name');
  const simAvatar = document.getElementById('sim-avatar');
  const quickPromptsContainer = document.getElementById('quick-prompts');
  const typingIndicator = document.getElementById('typing-indicator');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const scenarioBtns = document.querySelectorAll('.scenario-btn');

  // Load Scenario
  function loadScenario(scenarioKey) {
    if (!scenarios[scenarioKey]) scenarioKey = 'clinic';
    currentScenario = scenarioKey;
    const data = scenarios[scenarioKey];
    
    // Update Header
    if (simBotName) simBotName.textContent = data.name;
    if (simAvatar) simAvatar.textContent = data.avatar;

    // Reset Chat Messages
    if (chatBody) {
      chatBody.innerHTML = '';
      appendMessage(data.welcome, 'bot');
    }

    // Update Quick Prompts
    if (quickPromptsContainer) {
      quickPromptsContainer.innerHTML = '';
      data.prompts.forEach(promptText => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quick-btn';
        btn.textContent = promptText;
        btn.addEventListener('click', () => {
          handleUserMessage(promptText);
        });
        quickPromptsContainer.appendChild(btn);
      });
      quickPromptsContainer.scrollLeft = 0;
    }

    // Update active button
    if (scenarioBtns.length > 0) {
      scenarioBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.scenario === scenarioKey);
      });
    }
  }

  // Append Message Helper
  function appendMessage(text, sender) {
    if (!chatBody) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}`;
    msgDiv.textContent = text;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // Normalize Turkish text helper for robust keyword matching
  function cleanText(str) {
    if (!str) return '';
    return str
      .replace(/İ/g, 'i')
      .replace(/I/g, 'i')
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .trim();
  }

  // Handle User Message
  function handleUserMessage(userText) {
    if (!userText.trim()) return;

    // Add User Message
    appendMessage(userText, 'user');
    if (chatInput) chatInput.value = '';

    // Show Typing Indicator
    if (typingIndicator) {
      typingIndicator.classList.add('active');
    }
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Simulate AI response delay (500ms - 800ms)
    setTimeout(() => {
      if (typingIndicator) {
        typingIndicator.classList.remove('active');
      }
      const response = generateAIResponse(userText);
      appendMessage(response, 'bot');
    }, 650);
  }

  // Intelligent Multi-Tier Natural AI Response Engine
  function generateAIResponse(rawInput) {
    const data = scenarios[currentScenario];
    const text = cleanText(rawInput);

    // ==========================================================
    // Priority 0: Exact or High-Affinity Quick Prompt Matching
    // ==========================================================
    if (currentScenario === 'clinic') {
      if (text.includes('cilt bakimi ne kadar') || (text.includes('cilt') && (text.includes('sur') || text.includes('dakika')))) {
        return data.topics.skin;
      }
      if (text.includes('fiyatlar ve seanslar') || text.includes('nasil belirleniyor')) {
        return data.topics.price;
      }
      if (text.includes('dis klinigi') || text.includes('gulus estetigi') || text.includes('dis beyazlatma')) {
        return data.topics.dental;
      }
      if (text.includes('doktor muayenesi') || text.includes('hekim muayenesi')) {
        return data.topics.doctor;
      }
      if (text.includes('cumartesi 14:00') || (text.includes('randevu') && (text.includes('cumartesi') || text.includes('14')))) {
        return data.topics.appointment;
      }
      if (text.includes('agrisiz mi') || text.includes('aci hisseder miyim')) {
        return data.topics.pain;
      }
      if (text.includes('konumu nerede') || text.includes('kliniginizin konumu')) {
        return data.topics.location;
      }
    } else if (currentScenario === 'service') {
      if (text.includes('koltuk yikama fiyat') || (text.includes('koltuk') && text.includes('fiyat'))) {
        return data.topics.sofa_price;
      }
      if (text.includes('3+1 ev temizligi ne kadar') || (text.includes('3+1') && text.includes('ne kadar'))) {
        return data.topics.price;
      }
      if (text.includes('kac saatte kurur') || (text.includes('kurur') && text.includes('saat'))) {
        return data.topics.sofa_drying;
      }
      if (text.includes('l koltuk yikama') || text.includes('kose koltuk') || text.includes('l koltuk')) {
        return data.topics.sofa_l;
      }
      if (text.includes('yarin icin bos') || text.includes('ekibiniz var mi')) {
        return data.topics.appointment;
      }
      if (text.includes('deterjanlari siz mi') || text.includes('malzemeleri getiriyor')) {
        return data.topics.material;
      }
      if (text.includes('yatak yikama')) {
        return data.topics.mattress;
      }
    } else if (currentScenario === 'ecom') {
      if (text.includes('ne zaman kargo') || text.includes('kargolanir')) {
        return data.topics.shipping;
      }
      if (text.includes('kargom nerede') || text.includes('kargo nerede') || text.includes('siparis takip')) {
        return data.topics.order;
      }
      if (text.includes('kapida odeme')) {
        return data.topics.payment;
      }
      if (text.includes('iade ve degisim') || text.includes('degisim sartlari')) {
        return data.topics.return;
      }
      if (text.includes('beden secimi') || text.includes('nasil yapilmali')) {
        return data.topics.size;
      }
      if (text.includes('kargo ucreti ne kadar') || (text.includes('kargo') && text.includes('ucret'))) {
        return data.topics.shipping_cost;
      }
    } else if (currentScenario === 'restaurant') {
      if (text.includes('20:00') || text.includes('4 kisilik masa')) {
        return data.topics.appointment;
      }
      if (text.includes('menu ve fiyat') || text.includes('fiyatlari gorebilir')) {
        return data.topics.price;
      }
      if (text.includes('dogum gunu') || text.includes('ozel kutlama')) {
        return data.topics.birthday;
      }
      if (text.includes('glutensiz ve vegan') || text.includes('vegan veya glutensiz')) {
        return data.topics.vegan_gluten;
      }
      if (text.includes('otopark ve vale') || text.includes('vale hizmeti')) {
        return data.topics.valet;
      }
    } else if (currentScenario === 'corporate') {
      if (text.includes('kurulum ne kadar suruyor') || (text.includes('kurulum') && text.includes('sur'))) {
        return data.topics.setup;
      }
      if (text.includes('fiyatlandirma ve paketler') || text.includes('paketler nasil')) {
        return data.topics.price;
      }
      if (text.includes('crm') || text.includes('yazilima baglanir')) {
        return data.topics.crm;
      }
      if (text.includes('kvkk ve veri') || text.includes('veri guvenligi')) {
        return data.topics.security;
      }
      if (text.includes('teklif ve kesif') || text.includes('toplantisi alabilir')) {
        return data.topics.appointment;
      }
    }

    // ==========================================================
    // Priority 1: Duration & Time Questions (Handled with extreme precision)
    // "ne kadar sürer", "kaç saat", "ne kadar zaman", "kaç dakika"
    // ==========================================================
    const durationKeywords = ['surer', 'suruyor', 'suresi', 'ne kadar sur', 'kac saat', 'kac dakika', 'kac dk', 'ne kadar zaman'];
    const isDuration = durationKeywords.some(kw => text.includes(kw));

    if (isDuration) {
      if (currentScenario === 'clinic') {
        if (text.includes('cilt') || text.includes('hydra') || text.includes('bakim')) {
          return data.topics.skin;
        }
        if (text.includes('lazer') || text.includes('epilasyon')) {
          return data.topics.laser_duration;
        }
        return 'Kliniğimizde Medikal Hydrafacial cilt bakımı protokolümüz 50-60 dakika, tüm vücut buz başlıklı lazer seansımız ise 35-45 dakika sürmektedir 🌸 Hangi işlemimiz hakkında detay veya randevu istersiniz?';
      } else if (currentScenario === 'service') {
        if (text.includes('kurur') || text.includes('kuruma') || text.includes('koku') || text.includes('islak') || text.includes('nemli')) {
          return data.topics.sofa_drying;
        }
        if (text.includes('koltuk')) {
          return 'Koltuk yıkama işlemimiz ortalama 1-1.5 saat sürmektedir efendim. Çift motorlu vakum sayesinde kumaş 4-6 saatte tamamen kurur ve aynı gün kullanıma hazır hale gelir.';
        }
        return data.topics.duration;
      } else if (currentScenario === 'ecom') {
        return data.topics.shipping;
      } else if (currentScenario === 'restaurant') {
        return 'Mutfak siparişlerimizin servis süresi ortalama 15-20 dakikadır. Taze ve sıcak servis edilir 🍷';
      } else if (currentScenario === 'corporate') {
        return data.topics.setup;
      }
    }

    // ==========================================================
    // Priority 2: Deep Sector-Specific Entity & Intent Matching
    // ==========================================================
    if (currentScenario === 'clinic') {
      if (['dis', 'implant', 'zirkonyum', 'beyazlatma', 'bleaching', 'plak', 'ortodonti', 'cene', 'gulus'].some(k => text.includes(k))) {
        return data.topics.dental;
      }
      if (['doktor', 'hekim', 'poliklinik', 'muayene', 'tahlil', 'tetkik', 'brans'].some(k => text.includes(k))) {
        return data.topics.doctor;
      }
      if (['cilt', 'hydra', 'leke', 'yosun', 'peeling', 'siyah nokta', 'gozenek', 'akne', 'sivilce'].some(k => text.includes(k))) {
        if (['fiyat', 'ucret', 'kac tl', 'kac para', 'paket', 'ne kadar'].some(k => text.includes(k))) {
          return data.topics.skin_price;
        }
        return data.topics.skin;
      }
      if (['aci', 'agri', 'yanar', 'acit', 'his'].some(k => text.includes(k))) {
        return data.topics.pain;
      }
      if (['lazer', 'epilasyon', 'buz baslik', 'kil'].some(k => text.includes(k))) {
        return data.topics.price;
      }
      if (['fiyat', 'ucret', 'kac para', 'kac tl', 'kampanya', 'paket', 'ne kadar'].some(k => text.includes(k))) {
        return data.topics.price;
      }
    } else if (currentScenario === 'service') {
      if (['l koltuk', 'kose koltuk', 'kose takimi', 'kose'].some(k => text.includes(k))) {
        return data.topics.sofa_l;
      }
      if (['kurur', 'kuruma', 'islak', 'nemli', 'koku'].some(k => text.includes(k))) {
        return data.topics.sofa_drying;
      }
      if (['yatak', 'baza', 'mayt', 'akar'].some(k => text.includes(k))) {
        return data.topics.mattress;
      }
      if (['insaat', 'tadilat', 'harc', 'boya', 'alci', 'silikon'].some(k => text.includes(k))) {
        return data.topics.construction;
      }
      if (['leke', 'cikar mi', 'cay', 'kahve', 'yag', 'kumas', 'tay tuyu', 'keten', 'nubuk', 'kadife'].some(k => text.includes(k))) {
        return data.topics.sofa_stain;
      }
      if (['malzeme', 'deterjan', 'kimyasal', 'karcher', 'makine', 'bez'].some(k => text.includes(k))) {
        return data.topics.material;
      }
      if (['bolge', 'ilce', 'semt', 'servis', 'nereye', 'sehir', 'koy'].some(k => text.includes(k))) {
        return data.topics.region;
      }
      if (['koltuk', 'cekyat', 'berjer', 'yikama'].some(k => text.includes(k))) {
        return data.topics.sofa_price;
      }
      if (['3+1', '2+1', '1+1', 'ev', 'daire', 'villa', 'ofis', 'temizlik'].some(k => text.includes(k))) {
        return data.topics.price;
      }
    } else if (currentScenario === 'ecom') {
      // Order tracking (evaluated BEFORE general shipping)
      if (['kargom nerede', 'kargo nerede', 'siparisim nerede', 'siparis nerede', 'nerede', 'kargo takip', 'siparis takip', 'takip'].some(k => text.includes(k))) {
        return data.topics.order;
      }
      if (['kargo', 'teslimat'].some(k => text.includes(k)) && ['ucret', 'fiyat', 'ne kadar', 'kac tl', 'bedava', 'ucretsiz'].some(k => text.includes(k))) {
        return data.topics.shipping_cost;
      }
      if (['kargo', 'teslimat', 'yurtici', 'ulasir', 'ne zaman'].some(k => text.includes(k))) {
        return data.topics.shipping;
      }
      if (['kapida', 'odeme', 'taksit', 'kart', 'nakit', 'havale', 'eft'].some(k => text.includes(k))) {
        return data.topics.payment;
      }
      if (['iade', 'degisim', 'geri', 'begenmez'].some(k => text.includes(k))) {
        return data.topics.return;
      }
      if (['beden', 'kalip', 'boy', 'kilo', 'small', 'medium', 'large', 'xl', 'oversize'].some(k => text.includes(k))) {
        return data.topics.size;
      }
      if (['siparis', 'kargom'].some(k => text.includes(k))) {
        return data.topics.order;
      }
      if (['orijinal', 'fatura', 'guvenilir', 'garanti', 'cakma'].some(k => text.includes(k))) {
        return data.topics.authenticity;
      }
      if (['indirim', 'kampanya', 'kupon', 'kod', 'firsat', 'fiyat'].some(k => text.includes(k))) {
        return data.topics.price;
      }
    } else if (currentScenario === 'restaurant') {
      if (['dogum gunu', 'kutlama', 'ozel', 'pasta', 'surpriz', 'yil donumu', 'susleme', 'evlilik'].some(k => text.includes(k))) {
        return data.topics.birthday;
      }
      if (['vegan', 'vejetaryen', 'glutensiz', 'colyak', 'alerjen', 'alerji', 'bitkisel', 'laktoz'].some(k => text.includes(k))) {
        return data.topics.vegan_gluten;
      }
      if (['otopark', 'vale', 'araba', 'park', 'ucretli mi'].some(k => text.includes(k))) {
        return data.topics.valet;
      }
      if (['paket', 'gel al', 'kurye', 'getir', 'yemeksepeti', 'trendyol'].some(k => text.includes(k))) {
        return data.topics.takeaway;
      }
      if (['canli muzik', 'akustik', 'muzik', 'dinleti'].some(k => text.includes(k))) {
        return data.topics.hours;
      }
      if (['menu', 'yemek', 'pizza', 'et', 'makarna', 'tatli', 'burger', 'icecek', 'sarap', 'fiyat'].some(k => text.includes(k))) {
        return data.topics.price;
      }
    } else if (currentScenario === 'corporate') {
      if (['kurulum', 'sure', 'ne kadar sur', 'canliya alma', 'nasil kurulur'].some(k => text.includes(k))) {
        return data.topics.setup;
      }
      if (['crm', 'yazilim', 'sheets', 'api', 'webhook', 'hubspot', 'zoho', 'salesforce', 'parasut', 'shopify', 'entegr'].some(k => text.includes(k))) {
        return data.topics.crm;
      }
      if (['toplanti', 'kesif', 'demo', 'gorusme', 'meet', 'zoom', 'sunum'].some(k => text.includes(k))) {
        return data.topics.appointment;
      }
      if (['sektor', 'uygun', 'kimler', 'brans', 'bize uyar'].some(k => text.includes(k))) {
        return data.topics.sectors;
      }
      if (['guvenlik', 'kvkk', 'gdpr', 'veri', 'gizlilik', 'sozlesme'].some(k => text.includes(k))) {
        return data.topics.security;
      }
      if (['temsilci', 'insan', 'devret', 'yetkili', 'mudahale', 'alarm'].some(k => text.includes(k))) {
        return data.topics.handover;
      }
      if (['paket', 'fiyat', 'ucret', 'maliyet', 'butce', 'aylik'].some(k => text.includes(k))) {
        return data.topics.price;
      }
    }

    // ==========================================================
    // Priority 3: General Appointments & Scheduling
    // ==========================================================
    const apptWords = ['randevu', 'rezervasyon', 'yer ayir', 'masa', 'bos mu', 'musait', 'yarin', 'cumartesi', 'tarih', 'seans'];
    if (apptWords.some(aw => text.includes(aw))) {
      return data.topics.appointment || data.topics.reservation || 'Talebinizi aldım! Takvimimizi kontrol ettiğimde belirttiğiniz zaman dilimi için müsaitlik görünüyor. Adınız Soyadınız ve iletişim numaranızı paylaşırsanız hemen kaydınızı oluşturabilirim.';
    }

    // ==========================================================
    // Priority 4: General Pricing & Rates (if not matched to a specific service)
    // ==========================================================
    const priceWords = ['fiyat', 'ucret', 'kac para', 'tarife', 'maliyet', 'kac tl', 'indirim', 'kampanya', 'tutar'];
    if (priceWords.some(pw => text.includes(pw)) || (!isDuration && text.includes('ne kadar'))) {
      return data.topics.price || data.topics.pricing || 'Güncel kampanya ve fiyat listemiz için özel indirimlerimiz mevcuttur! Size en uygun paketi belirleyebilmemiz için detay verebilir misiniz?';
    }

    // ==========================================================
    // Priority 5: Greetings & Politeness
    // ==========================================================
    const greetings = ['selam', 'merhaba', 'gunaydin', 'iyi gunler', 'iyi aksamlar', 'merhabalar', 'hey', 'slm', 'kolay gelsin', 'naber', 'nasilsin'];
    if (greetings.some(g => text.includes(g))) {
      return `Merhabalar, hoş geldiniz! 😊 Ben ${data.name}. Size ${data.sector} alanında güncel fiyatlarımız, randevu/rezervasyon saatlerimiz ve kampanyalarımız hakkında yardımcı olabilirim. Nasıl yardımcı olmamı istersiniz?`;
    }

    // ==========================================================
    // Priority 6: Gratitude & Acknowledgement
    // ==========================================================
    const gratitude = ['tesekkur', 'sagol', 'eyvallah', 'harika', 'tamamdir', 'anladim', 'super', 'tsk', 'cok iyi', 'gorusuruz', 'hoscakal'];
    if (gratitude.some(gr => text.includes(gr))) {
      return 'Rica ederim, ne demek! 🌟 İşleminizi onaylamak veya aklınıza takılan başka bir konuda destek olmak için 7/24 buradayım. Dilediğiniz an yazabilirsiniz.';
    }

    // ==========================================================
    // Priority 7: Identity & AI Capabilities (Who are you?)
    // ==========================================================
    const identityWords = ['kimsin', 'sen kimsin', 'bot musun', 'yapay zeka', 'autonex', 'robot', 'gercek misin', 'insan misin', 'canli misin'];
    if (identityWords.some(id => text.includes(id))) {
      return 'Ben AutoNEX altyapısıyla 7/24 çalışan yeni nesil bir Yapay Zeka Asistanıyım! 🤖 Meta Graph API üzerinden müşteri mesajlarını saniyeler içinde yanıtlar, randevu ve siparişleri insan müdahalesine gerek kalmadan anında yönetirim. Kendi işletmeniz için bu sistemi kurmak isterseniz sitedeki \'Ücretsiz Keşif Al\' butonuna tıklayabilir veya 0541 875 02 88 WhatsApp hattımızdan bize ulaşabilirsiniz!';
    }

    // ==========================================================
    // Priority 8: Direct Human / WhatsApp / Phone / Representative
    // ==========================================================
    const contactWords = ['telefon', 'numara', 'whatsapp', 'yetkili', 'temsilci', 'musteri temsilcisi', 'canli destek', 'insanla gorus', 'arama', 'iletisim', 'ulas'];
    if (contactWords.some(cw => text.includes(cw))) {
      return 'Dilerseniz sizi hemen yetkili danışmanımıza yönlendirebilirim! 📞 Doğrudan görüşmek için 0541 875 02 88 numaralı resmi WhatsApp hattımıza yazabilir veya sitemizdeki iletişim formunu doldurabilirsiniz. Yetkilimize ön bilgi iletmemi ister misiniz?';
    }

    // ==========================================================
    // Priority 9: Cross-Sector Inquiries (Does it work for other sectors?)
    // ==========================================================
    const crossSectorWords = ['baska sektor', 'tum sektor', 'farkli sektor', 'benim isletmem', 'emlak', 'gayrimenkul', 'otel', 'insaat', 'avukat', 'dis', 'kuafor', 'ajans', 'sektorler', 'baska is'];
    if (crossSectorWords.some(cs => text.includes(cs))) {
      return 'Kesinlikle evet! AutoNEX yapay zeka motoru klinik, e-ticaret, restoran, yerel hizmet, gayrimenkul, hukuk ve B2B dahil müşteriyle mesajlaşan TÜM sektörlere %100 uyumlu olarak eğitilebilmektedir. Sol menüden diğer sektör demolarını inceleyebilir veya sitenin altındaki formdan işletmenize özel teklif alabilirsiniz.';
    }

    // ==========================================================
    // Priority 10: Hours & Working Schedule
    // ==========================================================
    const hourWords = ['mesai', 'acik mi', 'calisma saat', 'pazar gunu', 'hafta sonu', 'kapanis', 'kacta acik', 'kacta kapaniyor', 'tatil'];
    if (hourWords.some(hw => text.includes(hw))) {
      return data.topics.hours || 'İşletmemiz haftanın her günü çalışma saatlerinde aktiftir. Ben ise bir yapay zeka asistanı olarak 7/24 kesintisiz hizmet vermekteyim; randevu ve sorularınızı dilediğiniz an kaydedebilirim.';
    }

    // ==========================================================
    // Priority 11: Location & Address
    // ==========================================================
    const locationWords = ['nerede', 'adres', 'konum', 'harita', 'ulasim', 'yeriniz', 'sehir', 'nasil gelirim', 'neredesiniz'];
    if (locationWords.some(lw => text.includes(lw))) {
      return data.topics.location || 'İşletmemiz ana arter üzerinde, toplu taşıma noktalarına çok yakın merkezi bir lokasyonda yer almaktadır. Dilerseniz size WhatsApp üzerinden canlı harita konumunu iletebilirim.';
    }

    // ==========================================================
    // Priority 12: Professional Smart Fallback
    // ==========================================================
    return `Bu soru için sizlere ${data.name} olarak ${data.summary} konularında 7/24 yardımcı olabilir, güncel fiyatlarımızı aktarabilir veya randevunuzu/talebinizi hemen oluşturabilirim. Size hangi hizmetimiz için bilgi vermemi istersiniz? 😊`;
  }

  // Chat Form Submit
  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleUserMessage(chatInput.value);
    });
  }

  // Scenario Buttons Click
  if (scenarioBtns.length > 0) {
    scenarioBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        loadScenario(btn.dataset.scenario);
      });
    });
  }

  // Initial Load if simulator elements present
  if (chatBody && simBotName) {
    loadScenario('clinic');
  }

  // 4. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close other items
        faqItems.forEach(otherItem => otherItem.classList.remove('open'));
        // Toggle clicked
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // 5. Professional E-Mail Discovery & Quote Form Handler
  const leadForm = document.getElementById('lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value;
      const business = document.getElementById('form-business').value;
      const email = document.getElementById('form-email').value;
      const moduleSelect = document.getElementById('form-module');
      const moduleVal = moduleSelect ? moduleSelect.value : 'Belirtilmedi';
      const notes = document.getElementById('form-notes').value || 'Detaylı analiz ve fiyatlandırma talep edildi.';

      const mailSubject = encodeURIComponent(`[AutoNEX Teklif Talebi] - ${business}`);
      const mailBody = encodeURIComponent(
        `Merhaba AutoNEX Ekibi,\n\n` +
        `Web siteniz üzerinden yeni bir keşif ve teklif talebinde bulunuyorum.\n\n` +
        `----------------------------------------\n` +
        `👤 Ad Soyad: ${name}\n` +
        `🏢 İşletme / Marka: ${business}\n` +
        `✉️ İletişim E-Posta: ${email}\n` +
        `⚙️ İlgilenilen Modül: ${moduleVal}\n` +
        `📝 İhtiyaç / Proje Detayı:\n${notes}\n` +
        `----------------------------------------\n\n` +
        `Teklif dosyasını ve uygun keşif toplantısı saatlerini bekliyorum.\n` +
        `İyi çalışmalar.`
      );

      const mailtoUrl = `mailto:info@autonex.net.tr?subject=${mailSubject}&body=${mailBody}`;
      
      // UX feedback in button
      const submitBtn = leadForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span>✓ Talebiniz Alındı! E-Posta Açılıyor...</span>`;
      submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
      submitBtn.style.color = '#ffffff';

      setTimeout(() => {
        window.location.href = mailtoUrl;
        leadForm.reset();
        
        // Show permanent success message below form
        let successNotice = document.getElementById('form-success-notice');
        if (!successNotice) {
          successNotice = document.createElement('div');
          successNotice.id = 'form-success-notice';
          successNotice.style.cssText = 'background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: 12px; padding: 1rem; color: #34d399; font-size: 0.9rem; text-align: center; margin-top: 1rem;';
          leadForm.parentNode.appendChild(successNotice);
        }
        successNotice.innerHTML = `<strong>✓ Keşif Talebiniz Başarıyla Kaydedildi!</strong><br>İnceleme ekibimiz en geç 2 saat içinde <u>${email}</u> adresinize detaylı çalışma planını ve teklif dokümanını iletecektir.`;

        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        submitBtn.style.color = '';
      }, 900);
    });
  }
});
