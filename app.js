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
        shipping: 'Hafta içi saat 16:00\'ya kadar verilen tüm siparişler aynı gün Yurtiçi Kargo güvencesiyle yola çıkar! 500 TL üzeri tüm siparişlerinizde kargo tamamen ücretsizdir.',
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

    // Tier 1: Greetings & Politeness
    const greetings = ['selam', 'merhaba', 'gunaydin', 'iyi gunler', 'iyi aksamlar', 'merhabalar', 'hey', 'slm', 'kolay gelsin', 'naber', 'nasilsin'];
    if (greetings.some(g => text.includes(g))) {
      return `Merhabalar, hoş geldiniz! 😊 Ben ${data.name}. Size ${data.sector} alanında güncel fiyatlarımız, randevu/rezervasyon saatlerimiz ve kampanyalarımız hakkında yardımcı olabilirim. Nasıl yardımcı olmamı istersiniz?`;
    }

    // Tier 2: Gratitude & Acknowledgement
    const gratitude = ['tesekkur', 'sagol', 'eyvallah', 'harika', 'tamamdir', 'anladim', 'super', 'tsk', 'cok iyi', 'gorusuruz', 'hoscakal'];
    if (gratitude.some(gr => text.includes(gr))) {
      return `Rica ederim, ne demek! 🌟 İşleminizi onaylamak veya aklınıza takılan başka bir konuda destek olmak için 7/24 buradayım. Dilediğiniz an yazabilirsiniz.`;
    }

    // Tier 3: Identity & AI Capabilities (Who are you?)
    const identityWords = ['kimsin', 'sen kimsin', 'bot musun', 'yapay zeka', 'autonex', 'robot', 'gercek misin', 'insan misin', 'canli misin'];
    if (identityWords.some(id => text.includes(id))) {
      return `Ben AutoNEX altyapısıyla 7/24 çalışan yeni nesil bir Yapay Zeka Asistanıyım! 🤖 Meta Graph API üzerinden müşteri mesajlarını saniyeler içinde yanıtlar, randevu ve siparişleri insan müdahalesine gerek kalmadan anında yönetirim. Kendi işletmeniz için bu sistemi kurmak isterseniz sitedeki 'Ücretsiz Keşif Al' butonuna tıklayabilir veya 0541 875 02 88 WhatsApp hattımızdan bize ulaşabilirsiniz!`;
    }

    // Tier 4: Direct Human / WhatsApp / Phone / Representative
    const contactWords = ['telefon', 'numara', 'whatsapp', 'yetkili', 'temsilci', 'musteri temsilcisi', 'canli destek', 'insanla gorus', 'arama', 'iletisim', 'ulas'];
    if (contactWords.some(cw => text.includes(cw))) {
      return `Dilerseniz sizi hemen yetkili danışmanımıza yönlendirebilirim! 📞 Doğrudan görüşmek için 0541 875 02 88 numaralı resmi WhatsApp hattımıza yazabilir veya sitemizdeki iletişim formunu doldurabilirsiniz. Yetkilimize ön bilgi iletmemi ister misiniz?`;
    }

    // Tier 5: Cross-Sector Inquiries (Does it work for other sectors?)
    const crossSectorWords = ['baska sektor', 'tum sektor', 'farkli sektor', 'benim isletmem', 'emlak', 'gayrimenkul', 'otel', 'insaat', 'avukat', 'dis', 'kuafor', 'ajans', 'sektorler', 'baska is'];
    if (crossSectorWords.some(cs => text.includes(cs))) {
      return `Kesinlikle evet! AutoNEX yapay zeka motoru klinik, e-ticaret, restoran, yerel hizmet, gayrimenkul, hukuk ve B2B dahil müşteriyle mesajlaşan TÜM sektörlere %100 uyumlu olarak eğitilebilmektedir. Sol menüden diğer sektör demolarını inceleyebilir veya sitenin altındaki formdan işletmenize özel teklif alabilirsiniz.`;
    }

    // Tier 6: Hours & Working Schedule
    const hourWords = ['saat', 'kacta', 'mesai', 'acik mi', 'calisma saat', 'pazar', 'hafta sonu', 'kapanis', 'tatil'];
    if (hourWords.some(hw => text.includes(hw))) {
      return data.topics.hours || `İşletmemiz haftanın her günü çalışma saatlerinde aktiftir. Ben ise bir yapay zeka asistanı olarak 7/24 kesintisiz hizmet vermekteyim; randevu ve sorularınızı dilediğiniz an kaydedebilirim.`;
    }

    // Tier 7: Location & Address
    const locationWords = ['nerede', 'adres', 'konum', 'harita', 'ulasim', 'yeriniz', 'sehir', 'nasil gelirim', 'neredesiniz'];
    if (locationWords.some(lw => text.includes(lw))) {
      return data.topics.location || `İşletmemiz ana arter üzerinde, toplu taşıma noktalarına çok yakın merkezi bir lokasyonda yer almaktadır. Dilerseniz size WhatsApp üzerinden canlı harita konumunu iletebilirim.`;
    }

    // Tier 8: General Pricing / Cost / Rates
    const priceWords = ['fiyat', 'ucret', 'ne kadar', 'kac para', 'tarife', 'maliyet', 'kac tl', 'indirim', 'kampanya', 'tutar'];
    if (priceWords.some(pw => text.includes(pw))) {
      return data.topics.price || data.topics.pricing || `Güncel kampanya ve fiyat listemiz için özel indirimlerimiz mevcuttur! Size en uygun paketi belirleyebilmemiz için detay verebilir misiniz?`;
    }

    // Tier 9: General Appointment / Reservation / Availability
    const apptWords = ['randevu', 'rezervasyon', 'yer ayir', 'masa', 'bos mu', 'musait', 'yarin', 'cumartesi', 'tarih', 'gun', 'seans'];
    if (apptWords.some(aw => text.includes(aw))) {
      return data.topics.appointment || data.topics.reservation || `Talebinizi aldım! Takvimimizi kontrol ettiğimde belirttiğiniz zaman dilimi için müsaitlik görünüyor. Adınız Soyadınız ve iletişim numaranızı paylaşırsanız hemen kaydınızı oluşturabilirim.`;
    }

    // Tier 10: Sector-Specific Topics & Keywords
    if (currentScenario === 'clinic') {
      if (text.includes('lazer') || text.includes('epilasyon') || text.includes('buz')) return data.topics.price;
      if (text.includes('cilt') || text.includes('hydrafacial') || text.includes('leke') || text.includes('siyah nokta')) return data.topics.skin;
      if (text.includes('aci') || text.includes('agri') || text.includes('yanar') || text.includes('acitir')) return data.topics.pain;
    } else if (currentScenario === 'ecom') {
      if (text.includes('kargo') || text.includes('yurtici') || text.includes('teslimat') || text.includes('ulasir')) return data.topics.shipping;
      if (text.includes('kapida') || text.includes('odeme') || text.includes('kart') || text.includes('taksit')) return data.topics.payment;
      if (text.includes('iade') || text.includes('degisim') || text.includes('geri')) return data.topics.return;
      if (text.includes('beden') || text.includes('kalip') || text.includes('boy') || text.includes('kilo')) return data.topics.size;
      if (text.includes('siparis') || text.includes('takip') || text.includes('nerede')) return data.topics.order;
    } else if (currentScenario === 'service') {
      if (text.includes('malzeme') || text.includes('deterjan') || text.includes('kimyasal') || text.includes('makine')) return data.topics.material;
      if (text.includes('koltuk') || text.includes('yikama') || text.includes('doseme') || text.includes('hali')) return data.topics.sofa;
      if (text.includes('bolge') || text.includes('ilce') || text.includes('semt') || text.includes('servis')) return data.topics.region;
    } else if (currentScenario === 'restaurant') {
      if (text.includes('menu') || text.includes('yemek') || text.includes('pizza') || text.includes('et') || text.includes('tatli')) return data.topics.price;
      if (text.includes('dogum gunu') || text.includes('kutlama') || text.includes('ozel') || text.includes('pasta')) return data.topics.birthday;
      if (text.includes('otopark') || text.includes('vale') || text.includes('araba')) return data.topics.valet;
    } else if (currentScenario === 'corporate') {
      if (text.includes('kurulum') || text.includes('sure') || text.includes('nasil') || text.includes('entegre')) return data.topics.setup;
      if (text.includes('crm') || text.includes('yazilim') || text.includes('sheets') || text.includes('api')) return data.topics.crm;
      if (text.includes('toplanti') || text.includes('kesif') || text.includes('gorusme') || text.includes('meet')) return data.topics.appointment;
      if (text.includes('sektor') || text.includes('uygun') || text.includes('kimler')) return data.topics.sectors;
    }

    // Tier 11: Professional Smart Fallback (No absurd answers, polite refocus)
    return `Bu konu işletmemizin hizmet alanı dışında kalıyor 😊 Ancak sizlere ${data.name} olarak ${data.summary} konularında 7/24 yardımcı olabilir, güncel fiyatlarımızı aktarabilir veya randevunuzu/talebinizi hemen oluşturabilirim. Hangi hizmetimizle ilgili detay istersiniz?`;
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
