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

  // 3. Interactive Asistan Simulator Data & Logic
  const scenarios = {
    clinic: {
      name: 'AutoNEX Klinik & Güzellik Asistanı',
      avatar: '✨',
      welcome: 'Merhaba! Kliniğimize hoş geldiniz. 🌸 Lazer epilasyon, medikal cilt bakımı ve güncel kampanyalarımız hakkında 7/24 bilgi alabilir veya randevunuzu hemen oluşturabilirsiniz. Size nasıl yardımcı olabilirim?',
      prompts: [
        'Lazer epilasyon fiyatları nedir?',
        'Cumartesi 14:00 randevu var mı?',
        'Cilt bakımı ne kadar sürüyor?',
        'Kliniğinizin konumu nerede?'
      ],
      responses: {
        'lazer': 'Tüm vücut buz lazer paketimizde bu aya özel %25 indirimimiz bulunuyor! 8 seanslık komple paketimiz 8.500 TL yerine 6.400 TL. Dilerseniz size uygun bir gün için ücretsiz ön muayene ve deneme atışı randevusu oluşturalım mı?',
        'randevu': 'Harika bir tercih! Cumartesi günü saat 14:00 seansımız şu an müsait görünüyor. Adınız Soyadınız ve telefon numaranızı iletirseniz randevunuzu hemen takvime işleyip onay mesajınızı iletiyorum. 📅',
        'cilt': 'Medikal Hydrafacial cilt bakımı protokolümüz yaklaşık 50-60 dakika sürmektedir. Derinlemesine gözenek temizliği, siyah nokta arındırma ve hyaluronik asit nem takviyesi içerir.',
        'konum': 'Kliniğimiz merkezi lokasyonda, metro ve metrobüs durağına 3 dakika yürüme mesafesindedir. Size harita konumunu WhatsApp üzerinden gönderebilirim.',
        'default': 'Talebinizi aldım! Uzman hekim ve estetisyen kadromuzla size en uygun seansı planlamak için randevu saatlerinizi belirleyebiliriz. Başka hangi işlem hakkında bilgi istersiniz?'
      }
    },
    ecom: {
      name: 'AutoNEX E-Ticaret & Satış Asistanı',
      avatar: '🛍️',
      welcome: 'Selam! Mağazamıza hoş geldiniz. ⚡ Yeni sezon ürünlerimizde bugüne özel sepette %20 anında indirim var. Beden seçimi, sipariş takibi veya kargo hakkında ne sormak istersiniz?',
      prompts: [
        'Siparişim ne zaman kargolanır?',
        'Kapıda ödeme imkanı var mı?',
        'İade ve değişim şartları nedir?',
        'Kargo ücreti ne kadar?'
      ],
      responses: {
        'kargo': 'Hafta içi saat 16:00\'ya kadar verilen tüm siparişler aynı gün Yurtiçi Kargo ile yola çıkar! 500 TL üzeri tüm alışverişlerinizde kargo tamamen ücretsizdir.',
        'kapıda': 'Evet, kapıda nakit veya kredi kartıyla güvenli ödeme seçeneğimiz mevcuttur. Dilediğiniz ürünü hemen hazırlatabilirim!',
        'iade': 'Siparişinizi teslim aldıktan sonra 14 gün içinde koşulsuz ve ücretsiz iade veya değişim yapabilirsiniz. İade kargo kodunu size hemen WhatsApp\'tan iletebilirim.',
        'sipariş': 'Sipariş durumunuzu anında sorgulamak için lütfen 6 haneli sipariş numaranızı veya kayıtlı telefon numaranızı yazın, kargo takip linkinizi ileteyim.',
        'default': 'Harika bir ürün seçimi! Stoğumuzdaki son adetler tükenmeden sepetinize ekleyebilir, indirim kodunuzu uygulayarak siparişinizi 1 dakikada tamamlayabiliriz.'
      }
    },
    service: {
      name: 'AutoNEX Yerel Hizmet & Temizlik Asistanı',
      avatar: '🧹',
      welcome: 'Merhaba! Dağ Temizlik profesyonel hizmet asistanıyım. 🧼 Ev, ofis veya inşaat sonrası temizlik için anında sabit fiyat teklifi alabilir ve rezervasyonunuzu saniyeler içinde oluşturabilirsiniz.',
      prompts: [
        '3+1 ev temizliği ne kadar?',
        'Yarın için boş ekibiniz var mı?',
        'Temizlik malzemelerini getiriyor musunuz?',
        'Hangi bölgelere hizmet veriyorsunuz?'
      ],
      responses: {
        'fiyat': '3+1 standart detaylı ev temizliği hizmetimiz (1 tam gün, profesyonel ekip ve buharlı dezenfeksiyon dahil) sabit 2.400 TL\'dir. Ekstra hiçbir sürpriz ücret çıkmaz.',
        'yarın': 'Yarın sabah 09:00 başlangıçlı seansımız için 1 ekibimiz müsait görünüyor! Adres ve iletişim bilgilerinizi alarak rezervasyonunuzu hemen onaylayabilirim.',
        'malzeme': 'Evet! Tüm vakumlu makineler, mikrofiber bezler ve çevre dostu profesyonel temizlik kimyasalları tarafımızdan eksiksiz getirilmektedir.',
        'bölge': 'Şehrin tüm ilçe ve semtlerine servisimiz mevcuttur. Yol veya ulaşım için ek ücret talep etmiyoruz.',
        'default': 'Hizmet detayınız sisteme kaydedildi! Size en uygun temizlik paketini rezerve etmek için hangi tarihin uygun olduğunu iletmeniz yeterlidir.'
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
    currentScenario = scenarioKey;
    const data = scenarios[scenarioKey];
    
    // Update Header
    simBotName.textContent = data.name;
    simAvatar.textContent = data.avatar;

    // Reset Chat Messages
    chatBody.innerHTML = '';
    appendMessage(data.welcome, 'bot');

    // Update Quick Prompts
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

    // Update active button
    scenarioBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.scenario === scenarioKey);
    });
  }

  // Append Message Helper
  function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}`;
    msgDiv.textContent = text;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // Handle User Message
  function handleUserMessage(userText) {
    if (!userText.trim()) return;

    // Add User Message
    appendMessage(userText, 'user');
    chatInput.value = '';

    // Show Typing Indicator
    typingIndicator.classList.add('active');
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simulate AI response delay (600ms - 900ms)
    setTimeout(() => {
      typingIndicator.classList.remove('active');
      const response = generateAIResponse(userText.toLowerCase());
      appendMessage(response, 'bot');
    }, 750);
  }

  // AI Response Matcher
  function generateAIResponse(input) {
    const data = scenarios[currentScenario];
    const resKeys = Object.keys(data.responses);

    for (const key of resKeys) {
      if (input.includes(key)) {
        return data.responses[key];
      }
    }
    return data.responses['default'];
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
