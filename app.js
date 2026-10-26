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
      name: 'AutoNEX Klinik & Güzellik Asistanı',
      avatar: '✨',
      sector: 'Güzellik, Klinik & Estetik',
      summary: 'lazer epilasyon, medikal cilt bakımı, bölgesel incelme ve uzman hekim randevuları',
      welcome: 'Merhaba! Kliniğimize hoş geldiniz. 🌸 Lazer epilasyon, medikal cilt bakımı, bölgesel incelme ve güncel kampanyalarımız hakkında 7/24 bilgi alabilir veya randevunuzu hemen oluşturabilirsiniz. Size nasıl yardımcı olabilirim?',
      prompts: [
        'Lazer epilasyon fiyatları nedir?',
        'Cumartesi 14:00 randevu var mı?',
        'Cilt bakımı ne kadar sürüyor?',
        'Ağrısız mı, acı hisseder miyim?',
        'Kliniğinizin konumu nerede?'
      ],
      topics: {
        price: 'Tüm vücut orijinal FDA onaylı buz başlıklı lazer paketimizde bu aya özel %25 indirimimiz bulunuyor! 8 seanslık komple paketimiz 8.500 TL yerine 6.400 TL. Dilerseniz size uygun bir gün için ücretsiz kıl analizi ve deneme atışı randevusu oluşturalım mı?',
        appointment: 'Cumartesi günü saat 14:00 seansımız şu an müsait görünüyor! 📅 Adınız Soyadınız ve telefon numaranızı iletirseniz randevunuzu hemen takvime işleyip onay bildiriminizi iletiyorum.',
        skin: 'Medikal Hydrafacial cilt bakımı protokolümüz yaklaşık 50-60 dakika sürmektedir. Vakumlu derin gözenek temizliği, siyah nokta arındırma ve hyaluronik asit nem takviyesi içerir. Tek seans 1.200 TL, 4\'lü kür 3.800 TL\'dir.',
        skin_price: 'Hydrafacial medikal derin cilt bakımı seans ücretimiz tek seans 1.200 TL, 4 seanslık komple yenileyici kürümüz ise indirimle 3.800 TL\'dir. İşlem 50-60 dakika sürer. Randevu oluşturmak ister misiniz?',
        laser_duration: 'Tüm vücut buz lazer seansımız ortalama 35-45 dakika sürmektedir. Kıl yapısına bağlı olarak 6-8 seansta %85-90 kalıcı pürüzsüzlük sağlanır. Ücretsiz deneme atışı randevusu ister misiniz?',
        pain: 'Kullandığımız yeni nesil soğutmalı buz başlık teknolojisi sayesinde atışlar masaj konforunda ve sıfıra yakın acıyla gerçekleşir. İlk seanstan önce 1 dakikalık ücretsiz deneme atışı yapabiliriz.',
        location: 'Kliniğimiz merkezi lokasyonda, ana cadde üzerinde ve metro/metrobüs durağına yalnızca 3 dakika yürüme mesafesindedir. Otoparkımız mevcuttur. Dilerseniz WhatsApp üzerinden canlı konum gönderebilirim.',
        hours: 'Kliniğimiz Pazartesi - Cumartesi günleri 09:30 - 19:30 saatleri arasında açıktır. Ben ise 7/24 aktif olduğum için randevunuzu dilediğiniz an takvime işleyebilirim.'
      }
    },
    ecom: {
      name: 'AutoNEX E-Ticaret & Satış Asistanı',
      avatar: '🛍️',
      sector: 'E-Ticaret & Perakende Satış',
      summary: 'sipariş takibi, kargolama, ürün beden seçimi, kapıda ödeme ve iade/değişim',
      welcome: 'Selam! Mağazamıza hoş geldiniz. ⚡ Yeni sezon koleksiyonumuzda bugüne özel sepette %20 anında indirim var! Beden rehberi, sipariş takibi veya kargo süreçleri hakkında ne sormak istersiniz?',
      prompts: [
        'Siparişim ne zaman kargolanır?',
        'Kapıda ödeme imkanı var mı?',
        'İade ve değişim şartları nedir?',
        'Beden seçimi nasıl yapılmalı?',
        'Kargo ücreti ne kadar?'
      ],
      topics: {
        shipping: 'Hafta içi saat 16:00\'ya kadar verilen tüm siparişler aynı gün Yurtiçi Kargo güvencesiyle yola çıkar! Ortalama 1-3 iş günü içinde adresinize teslim edilir.',
        shipping_cost: '500 TL ve üzeri tüm siparişlerinizde kargo tamamen ÜCRETSİZDİR! 500 TL altındaki siparişlerde anlaşmalı kargo ücreti sabit 49 TL\'dir.',
        payment: 'Evet, kapıda nakit veya kredi kartıyla güvenli ödeme seçeneğimiz mevcuttur. Ayrıca web sitemizde tüm kartlara peşin fiyatına 3 taksit fırsatımız bulunmaktadır!',
        return: 'Siparişinizi teslim aldıktan sonra 14 gün içinde koşulsuz ve ücretsiz iade veya beden değişimi yapabilirsiniz. Size hemen anlaşmalı ücretsiz iade kargo kodu oluşturabilirim.',
        size: 'Kalıplarımız standart kalıptır (True-to-size). Boy ve kilo bilginizi iletirseniz, en uygun bedeni saniyeler içinde sizin için hesaplayabilirim.',
        order: 'Siparişinizin durumunu anında sorgulamak için 6 haneli sipariş numaranızı veya telefon numaranızı yazmanız yeterlidir; canlı kargo takip linkinizi ileteyim.',
        price: 'Sezon ürünlerimizde sepette %20 indirim tanımlıdır! Ayrıca 2. ürüne %50 indirim kampanyamız devam ediyor. İndirim kuponunuzu sepetinize otomatik uygulayabilirim.',
        hours: 'Online mağazamız ve sipariş altyapımız 7/24 kesintisiz çalışmaktadır. Canlı kargo gönderimlerimiz hafta içi her gün yapılmaktadır.'
      }
    },
    service: {
      name: 'AutoNEX Yerel Hizmet & Temizlik Asistanı',
      avatar: '🧹',
      sector: 'Yerel Hizmet, Temizlik & Saha Servisi',
      summary: 'ev/ofis temizliği, koltuk yıkama, anlık sabit fiyat teklifleri ve ekip rezervasyonu',
      welcome: 'Merhaba! Profesyonel Temizlik & Yerel Hizmet hattına hoş geldiniz. 🧼 Ev, ofis, villa veya inşaat sonrası temizlik için anında sabit fiyat teklifi alabilir ve rezervasyonunuzu saniyeler içinde oluşturabilirsiniz.',
      prompts: [
        '3+1 ev temizliği ne kadar?',
        'Yarın için boş ekibiniz var mı?',
        'Temizlik malzemelerini getiriyor musunuz?',
        'Koltuk yıkama hizmeti var mı?',
        'Hangi bölgelere hizmet veriyorsunuz?'
      ],
      topics: {
        price: '3+1 standart detaylı ev temizliği hizmetimiz (1 tam gün, 2 kişilik profesyonel ekip ve buharlı dezenfeksiyon makinesi dahil) sabit 2.400 TL\'dir. Yol ve malzeme dahil olup ekstra hiçbir sürpriz ücret çıkmaz.',
        duration: '3+1 standart detaylı ev temizliği hizmetimiz 2 kişilik uzman ekibimizle ortalama 6-7 saat sürmektedir. İnşaat sonrası veya boş daire temizlikleri ise metrekareye göre 7-8 saat sürebilir.',
        appointment: 'Yarın sabah 09:00 başlangıçlı seansımız için şu an 1 profesyonel ekibimiz müsait görünüyor! İlçe, mahalle ve telefon bilgilerinizi alarak randevunuzu hemen sabitleyebilirim.',
        material: 'Kesinlikle evet! Karcher profesyonel buhar makineleri, vakumlu çekiciler, tek kullanımlık mikrofiber bezler ve çevre dostu kimyasallar tarafımızdan eksiksiz getirilmektedir.',
        sofa: 'Evet! Yerinde buharlı ve derin vakumlu koltuk yıkama hizmetimiz mevcuttur. L leke çıkarma garantili olup işlem sonrası koltuklarınız 3-4 saat içinde tamamen kurur.',
        region: 'Şehrin tüm ilçe ve mahallelerine mobil servisimiz mevcuttur. Ulaşım veya servis için ekstra yol ücreti talep etmiyoruz.',
        hours: 'Saha temizlik ekiplerimiz haftanın 7 günü 08:30 - 18:30 saatleri arasında çalışmaktadır. Ben ise 7/24 rezervasyon ve acil talepleri kaydetmekteyim.'
      }
    },
    restaurant: {
      name: 'AutoNEX Restoran & Rezervasyon Asistanı',
      avatar: '🍽️',
      sector: 'Restoran, Kafe & Gastronomi',
      summary: 'masa rezervasyonu, menü detayları, özel etkinlikler ve çalışma saatleri',
      welcome: 'Hoş geldiniz! 🍷 Şefimizin gurme lezzetleri, güncel menümüz, özel kutlamalar veya akşam masası rezervasyonu için 7/24 hizmetinizdeyim. Size nasıl yardımcı olabilirim?',
      prompts: [
        'Bu akşam 20:00 için 4 kişilik masa var mı?',
        'Menü ve fiyatları görebilir miyim?',
        'Doğum günü veya özel kutlama yapıyor musunuz?',
        'Otopark ve vale hizmeti var mı?',
        'Çalışma saatleriniz nedir?'
      ],
      topics: {
        appointment: 'Bu akşam saat 20:00 için bahçe veya teras alanımızda 4 kişilik harika bir masamız müsait! 🥂 Rezervasyon adına bir İsim Soyisim ve telefon numarası alabilir miyim?',
        price: 'Taş fırın İtalyan pizzalarımız, dry-aged et seçeneklerimiz, el yapımı taze makarna ve gurme burger çeşitlerimiz bulunmaktadır. Ortalama ana yemekler 280 - 540 TL arasındadır. Dijital menü linkimizi iletebilirim!',
        duration: 'Mutfak siparişlerimizin servis süresi ortalama 15-20 dakikadır. Taze ve sıcak servis edilir.',
        birthday: 'Elbette! Doğum günü, yıl dönümü ve özel kutlamalar için masa süslemesi, şefin ikram pastası ve özel müzik servisi sağlıyoruz. Önceden bildirdiğinizde masanızı özel hazırlatıyoruz.',
        valet: 'Evet, restoranımızın hemen önünde misafirlerimize özel ücretsiz kapalı otopark ve vale hizmetimiz bulunmaktadır.',
        hours: 'Restoranımız haftanın her günü 11:30 - 00:30 saatleri arasında hizmet vermektedir. Mutfak son sipariş alımı 23:00\'e kadardır.',
        location: 'Restoranımız sahil şeridinde, merkezi marina bölgesinde yer almaktadır. WhatsApp üzerinden harita konumunu anında paylaşabilirim.'
      }
    },
    corporate: {
      name: 'AutoNEX Kurumsal & B2B Danışmanlık',
      avatar: '🏢',
      sector: 'Kurumsal & B2B Danışmanlık',
      summary: 'Meta Graph API entegrasyonu, CRM bağlantıları, kurumsal fiyatlandırma ve online keşif toplantısı',
      welcome: 'Merhaba! AutoNEX Kurumsal Çözümler Danışma Hattı\'na hoş geldiniz. 💼 İşletmeniz için yapay zeka otomasyonları, Meta API entegrasyonları, CRM bağlantıları ve kurumsal teklif süreçleri hakkında bilgi alabilirsiniz.',
      prompts: [
        'İşletmemize kurulum ne kadar sürüyor?',
        'Fiyatlandırma ve paketler nasıl?',
        'Bizim mevcut CRM/yazılıma bağlanır mı?',
        'Teklif ve keşif toplantısı alabilir miyim?',
        'Hangi sektörler için uygunsunuz?'
      ],
      topics: {
        setup: 'AutoNEX motoru anahtar teslim kurulur. Şirketinizin SSS, fiyat ve operasyon kurallarını aldıktan sonra 48 saat içinde Meta Graph API onaylı şekilde canlıya alıyoruz.',
        price: 'İşletme büyüklüğünüze göre esnek paketlerimiz mevcuttur: Başlangıç (Tek Kanal), Büyüme (Instagram + WhatsApp + CRM) ve Kurumsal Özel AI. Net fiyat teklifi için keşif formumuzu doldurabilir veya canlı görüşme planlayabilirsiniz.',
        crm: 'Evet! Webhook, REST API ve Zapier/Make köprüleri sayesinde HubSpot, Zoho, Google Sheets, Parasut ve özel veritabanlarınıza iki yönlü tam entegrasyon sağlıyoruz.',
        appointment: 'Harika! 15 dakikalık ücretsiz online keşif ve canlı demo toplantısı planlayabiliriz. Hangi gün ve saat sizin için uygundur? Yetkilimiz Google Meet davetiyesini iletsin.',
        sectors: 'Klinik & sağlık, e-ticaret, gayrimenkul, otomotiv, otel & restoran, sigorta, hukuk büroları ve yerel hizmetler başta olmak üzere müşteriyle mesajlaşan TÜM sektörlere %100 uyumludur.',
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
    return str
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
    // Ensures clicking prompt chips or typing matching prompt questions
    // ALWAYS returns the exact intended answer.
    // ==========================================================
    if (currentScenario === 'clinic') {
      if (text.includes('cilt bakimi ne kadar') || (text.includes('cilt') && text.includes('sur'))) {
        return data.topics.skin;
      }
      if (text.includes('lazer epilasyon fiyat') || (text.includes('lazer') && (text.includes('fiyat') || text.includes('ucret') || text.includes('kampanya')))) {
        return data.topics.price;
      }
      if (text.includes('cumartesi 14:00') || (text.includes('randevu') && (text.includes('cumartesi') || text.includes('var mi') || text.includes('14')))) {
        return data.topics.appointment;
      }
      if (text.includes('agrisiz mi') || text.includes('aci hisseder miyim') || text.includes('acit')) {
        return data.topics.pain;
      }
      if (text.includes('konumu nerede') || text.includes('kliniginizin konumu')) {
        return data.topics.location;
      }
    } else if (currentScenario === 'ecom') {
      if (text.includes('ne zaman kargo') || text.includes('ne zaman kargolanir')) {
        return data.topics.shipping;
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
    } else if (currentScenario === 'service') {
      if (text.includes('3+1 ev temizligi ne kadar') || (text.includes('3+1') && text.includes('ne kadar'))) {
        return data.topics.price;
      }
      if (text.includes('yarin icin bos') || text.includes('ekibiniz var mi')) {
        return data.topics.appointment;
      }
      if (text.includes('malzemelerini getiriyor') || text.includes('temizlik malzemeleri')) {
        return data.topics.material;
      }
      if (text.includes('koltuk yikama')) {
        return data.topics.sofa;
      }
      if (text.includes('hangi bolgelere') || text.includes('bolgelere hizmet')) {
        return data.topics.region;
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
      if (text.includes('otopark ve vale') || text.includes('vale hizmeti')) {
        return data.topics.valet;
      }
      if (text.includes('calisma saatleriniz')) {
        return data.topics.hours;
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
      if (text.includes('teklif ve kesif') || text.includes('toplantisi alabilir')) {
        return data.topics.appointment;
      }
      if (text.includes('hangi sektorler icin') || text.includes('sektorler icin uygun')) {
        return data.topics.sectors;
      }
    }

    // ==========================================================
    // Priority 1: Duration & Time Questions (Crucial!)
    // "ne kadar sürer", "kaç saat", "ne zaman", "süresi nedir"
    // Must NEVER be confused with price!
    // ==========================================================
    const isDuration = 
      text.includes('sur') || 
      text.includes('sure') || 
      text.includes('kac saat') || 
      text.includes('kac dakika') || 
      text.includes('kac dk') || 
      text.includes('ne kadar zaman') || 
      text.includes('ne kadar sur') ||
      text.includes('ne zaman');

    if (isDuration) {
      if (currentScenario === 'clinic') {
        if (text.includes('cilt') || text.includes('hydra') || text.includes('bakim') || text.includes('yuz') || text.includes('maske') || text.includes('gozenek')) {
          return data.topics.skin;
        }
        if (text.includes('lazer') || text.includes('epilasyon') || text.includes('seans')) {
          return data.topics.laser_duration;
        }
        // General clinic duration
        return `Kliniğimizde Medikal Hydrafacial cilt bakımı protokolümüz 50-60 dakika, tüm vücut buz başlıklı lazer seansımız ise 35-45 dakika sürmektedir. Hangi işlemimiz hakkında detay veya randevu istersiniz?`;
      } else if (currentScenario === 'ecom') {
        return data.topics.shipping;
      } else if (currentScenario === 'service') {
        if (text.includes('koltuk')) {
          return `Koltuk yıkama işlemimiz yaklaşık 1-1.5 saat sürmektedir. Derin vakum teknolojisi sayesinde kumaş 3-4 saat içinde tamamen kurur ve kullanıma hazır hale gelir.`;
        }
        return data.topics.duration;
      } else if (currentScenario === 'restaurant') {
        return data.topics.duration;
      } else if (currentScenario === 'corporate') {
        return data.topics.setup;
      }
    }

    // ==========================================================
    // Priority 2: Sector-Specific Entities & Sub-Services
    // Evaluates specific service queries (with their specific prices or features)
    // BEFORE hitting generic broad catch-alls!
    // ==========================================================
    if (currentScenario === 'clinic') {
      // Skin care queries
      if (text.includes('cilt') || text.includes('hydra') || text.includes('leke') || text.includes('siyah nokta') || text.includes('gozenek') || text.includes('peeling')) {
        if (text.includes('fiyat') || text.includes('ucret') || text.includes('kac tl') || text.includes('kac para') || text.includes('paket') || text.includes('ne kadar')) {
          return data.topics.skin_price;
        }
        return data.topics.skin;
      }
      // Pain / Comfort queries
      if (text.includes('aci') || text.includes('agri') || text.includes('yanar') || text.includes('acitir') || text.includes('his')) {
        return data.topics.pain;
      }
      // Laser queries
      if (text.includes('lazer') || text.includes('epilasyon') || text.includes('buz baslik') || text.includes('kil')) {
        return data.topics.price;
      }
    } else if (currentScenario === 'ecom') {
      // Shipping cost
      if ((text.includes('kargo') || text.includes('teslimat')) && (text.includes('ucret') || text.includes('fiyat') || text.includes('ne kadar') || text.includes('kac tl') || text.includes('bedava') || text.includes('ucretsiz'))) {
        return data.topics.shipping_cost;
      }
      // Shipping general
      if (text.includes('kargo') || text.includes('teslimat') || text.includes('yurtici') || text.includes('ulasir')) {
        return data.topics.shipping;
      }
      // Payment
      if (text.includes('kapida') || text.includes('odeme') || text.includes('taksit') || text.includes('kart') || text.includes('nakit') || text.includes('havale')) {
        return data.topics.payment;
      }
      // Return & Exchange
      if (text.includes('iade') || text.includes('degisim') || text.includes('geri')) {
        return data.topics.return;
      }
      // Sizing
      if (text.includes('beden') || text.includes('kalip') || text.includes('boy') || text.includes('kilo') || text.includes('small') || text.includes('medium') || text.includes('large')) {
        return data.topics.size;
      }
      // Order tracking
      if (text.includes('siparis') || text.includes('takip') || text.includes('nerede')) {
        return data.topics.order;
      }
    } else if (currentScenario === 'service') {
      // Sofa washing
      if (text.includes('koltuk') || text.includes('yikama') || text.includes('doseme') || text.includes('hali') || text.includes('leke')) {
        return data.topics.sofa;
      }
      // Cleaning equipment / chemicals
      if (text.includes('malzeme') || text.includes('deterjan') || text.includes('kimyasal') || text.includes('karcher') || text.includes('makine') || text.includes('bez')) {
        return data.topics.material;
      }
      // Service coverage area
      if (text.includes('bolge') || text.includes('ilce') || text.includes('semt') || text.includes('servis') || text.includes('nereye') || text.includes('sehir')) {
        return data.topics.region;
      }
      // Home cleaning
      if (text.includes('3+1') || text.includes('2+1') || text.includes('ev') || text.includes('daire') || text.includes('villa') || text.includes('ofis') || text.includes('temizlik')) {
        return data.topics.price;
      }
    } else if (currentScenario === 'restaurant') {
      // Birthday & Special celebration
      if (text.includes('dogum gunu') || text.includes('kutlama') || text.includes('ozel') || text.includes('pasta') || text.includes('surpriz') || text.includes('yil donumu')) {
        return data.topics.birthday;
      }
      // Parking & Valet
      if (text.includes('otopark') || text.includes('vale') || text.includes('araba') || text.includes('park')) {
        return data.topics.valet;
      }
      // Menu & Food
      if (text.includes('menu') || text.includes('yemek') || text.includes('pizza') || text.includes('et') || text.includes('makarna') || text.includes('tatli') || text.includes('sarap') || text.includes('icecek')) {
        return data.topics.price;
      }
    } else if (currentScenario === 'corporate') {
      // CRM & Software
      if (text.includes('crm') || text.includes('yazilim') || text.includes('sheets') || text.includes('api') || text.includes('webhook') || text.includes('entegr')) {
        return data.topics.crm;
      }
      // Demo / Meeting / Discovery
      if (text.includes('toplanti') || text.includes('kesif') || text.includes('demo') || text.includes('gorusme') || text.includes('meet') || text.includes('zoom')) {
        return data.topics.appointment;
      }
      // Sectors
      if (text.includes('sektor') || text.includes('uygun') || text.includes('kimler') || text.includes('brans')) {
        return data.topics.sectors;
      }
      // Packages
      if (text.includes('paket') || text.includes('fiyat') || text.includes('ucret') || text.includes('maliyet') || text.includes('butce')) {
        return data.topics.price;
      }
    }

    // ==========================================================
    // Priority 3: General Appointments & Scheduling
    // ==========================================================
    const apptWords = ['randevu', 'rezervasyon', 'yer ayir', 'masa', 'bos mu', 'musait', 'yarin', 'cumartesi', 'tarih', 'seans'];
    if (apptWords.some(aw => text.includes(aw))) {
      return data.topics.appointment || data.topics.reservation || `Talebinizi aldım! Takvimimizi kontrol ettiğimde belirttiğiniz zaman dilimi için müsaitlik görünüyor. Adınız Soyadınız ve iletişim numaranızı paylaşırsanız hemen kaydınızı oluşturabilirim.`;
    }

    // ==========================================================
    // Priority 4: General Pricing & Rates (if not matched to a specific service)
    // ==========================================================
    const priceWords = ['fiyat', 'ucret', 'kac para', 'tarife', 'maliyet', 'kac tl', 'indirim', 'kampanya', 'tutar'];
    if (priceWords.some(pw => text.includes(pw)) || (!isDuration && text.includes('ne kadar'))) {
      return data.topics.price || data.topics.pricing || `Güncel kampanya ve fiyat listemiz için özel indirimlerimiz mevcuttur! Size en uygun paketi belirleyebilmemiz için detay verebilir misiniz?`;
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
      return `Rica ederim, ne demek! 🌟 İşleminizi onaylamak veya aklınıza takılan başka bir konuda destek olmak için 7/24 buradayım. Dilediğiniz an yazabilirsiniz.`;
    }

    // ==========================================================
    // Priority 7: Identity & AI Capabilities (Who are you?)
    // ==========================================================
    const identityWords = ['kimsin', 'sen kimsin', 'bot musun', 'yapay zeka', 'autonex', 'robot', 'gercek misin', 'insan misin', 'canli misin'];
    if (identityWords.some(id => text.includes(id))) {
      return `Ben AutoNEX altyapısıyla 7/24 çalışan yeni nesil bir Yapay Zeka Asistanıyım! 🤖 Meta Graph API üzerinden müşteri mesajlarını saniyeler içinde yanıtlar, randevu ve siparişleri insan müdahalesine gerek kalmadan anında yönetirim. Kendi işletmeniz için bu sistemi kurmak isterseniz sitedeki 'Ücretsiz Keşif Al' butonuna tıklayabilir veya 0541 875 02 88 WhatsApp hattımızdan bize ulaşabilirsiniz!`;
    }

    // ==========================================================
    // Priority 8: Direct Human / WhatsApp / Phone / Representative
    // ==========================================================
    const contactWords = ['telefon', 'numara', 'whatsapp', 'yetkili', 'temsilci', 'musteri temsilcisi', 'canli destek', 'insanla gorus', 'arama', 'iletisim', 'ulas'];
    if (contactWords.some(cw => text.includes(cw))) {
      return `Dilerseniz sizi hemen yetkili danışmanımıza yönlendirebilirim! 📞 Doğrudan görüşmek için 0541 875 02 88 numaralı resmi WhatsApp hattımıza yazabilir veya sitemizdeki iletişim formunu doldurabilirsiniz. Yetkilimize ön bilgi iletmemi ister misiniz?`;
    }

    // ==========================================================
    // Priority 9: Cross-Sector Inquiries (Does it work for other sectors?)
    // ==========================================================
    const crossSectorWords = ['baska sektor', 'tum sektor', 'farkli sektor', 'benim isletmem', 'emlak', 'gayrimenkul', 'otel', 'insaat', 'avukat', 'dis', 'kuafor', 'ajans', 'sektorler', 'baska is'];
    if (crossSectorWords.some(cs => text.includes(cs))) {
      return `Kesinlikle evet! AutoNEX yapay zeka motoru klinik, e-ticaret, restoran, yerel hizmet, gayrimenkul, hukuk ve B2B dahil müşteriyle mesajlaşan TÜM sektörlere %100 uyumlu olarak eğitilebilmektedir. Sol menüden diğer sektör demolarını inceleyebilir veya sitenin altındaki formdan işletmenize özel teklif alabilirsiniz.`;
    }

    // ==========================================================
    // Priority 10: Hours & Working Schedule
    // ==========================================================
    const hourWords = ['mesai', 'acik mi', 'calisma saat', 'pazar gunu', 'hafta sonu', 'kapanis', 'kacta acik', 'kacta kapaniyor', 'tatil'];
    if (hourWords.some(hw => text.includes(hw))) {
      return data.topics.hours || `İşletmemiz haftanın her günü çalışma saatlerinde aktiftir. Ben ise bir yapay zeka asistanı olarak 7/24 kesintisiz hizmet vermekteyim; randevu ve sorularınızı dilediğiniz an kaydedebilirim.`;
    }

    // ==========================================================
    // Priority 11: Location & Address
    // ==========================================================
    const locationWords = ['nerede', 'adres', 'konum', 'harita', 'ulasim', 'yeriniz', 'sehir', 'nasil gelirim', 'neredesiniz'];
    if (locationWords.some(lw => text.includes(lw))) {
      return data.topics.location || `İşletmemiz ana arter üzerinde, toplu taşıma noktalarına çok yakın merkezi bir lokasyonda yer almaktadır. Dilerseniz size WhatsApp üzerinden canlı harita konumunu iletebilirim.`;
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
