(function(){
  const T = {
    ru: {
      name: "Томаш Павел Сергеевич",
      title: "Старший инженер‑программист (Embedded)",
      aboutTitle: "Обо мне",
      aboutText: "Старший embedded‑инженер: STM32/ESP32 (C/C++, FreeRTOS, HAL/CMSIS), DALI/DMX/BLE, API/SDK, серийное производство; Git‑флоу, code‑review, ЕСКД/ЕСПД. Открыт к релокации (Китай/Европа). Английский B2, китайский A1.",
      expTitle: "Опыт работы",
      experience: [
        {
          role: "Старший разработчик встраиваемых систем",
          company: "1440.space",
          location: "Москва",
          period: "11.2024 — наст. время",
          bullets: [
            "Участие в модулях связи с землей и видеостриминга (в составе команды)",
            "Code review; поддержка внутренней библиотеки core и репозитория драйверов",
            "Участие во внедрении практик ревью и автоматизации"
          ]
        },
        {
          role: "Руководитель/инженер разработки ПО",
          company: "ООО «Трион»",
          location: "Москва",
          period: "2021 — 2024",
          bullets: [
            "Настройка/сопровождение Helvar Designer (Router 905, 40 БП), Стрелец‑Мастер, iRidi Smart Office (Яндекс), СУО ‘Аврора’ + M‑Configurator, MasterSCADA 3→BMS",
            "Награды ‘Золотой фотон’; ПО в реестре Минцифры РФ"
          ]
        },
        {
          role: "Инженер-программист (Embedded)",
          company: "TM RADUGA",
          location: "Москва",
          period: "2020 — 2021",
          bullets: [
            "STM32 (HAL/CMSIS), ESP32 (ESP‑IDF/ADF); интеграция с API",
            "DC‑DC узлы: расчёт/проверка; документация"
          ]
        }
      ],
      eduTitle: "Образование",
      education: [
        "2027 (ожид.) — МФПУ «Синергия», бакалавриат",
        "2021 — МПТ (РЭУ им. Г.В. Плеханова), 09.02.01",
        "CS50 (Harvard, 2024); Flutter (МФТИ, 2024); Cisco: IoT/A+; EF SET; OpenCV; Golang (баз.)"
      ],
      skillsTitle: "Навыки",
      skills: [
        "C/C++","Python","Dart/Flutter","C# (Avalonia)","JavaScript (баз.)",
        "STM32 (HAL/CMSIS)","ESP32 (ESP‑IDF/ADF)","BlueNRG‑2","FreeRTOS",
        "UART","SPI","I2C","CAN","Modbus RTU","DALI/IEC62386","DMX/RDM","BLE",
        "Git","Altium Designer","DipTrace","Документация","Тестовые стенды"
      ],
      contactsTitle: "Контакты",
      techTitle: "Технические компетенции",
      tech: [
        "MCU: STM32F777, STM32L496, STM32 (CMSIS/HAL), ESP32 (ESP‑IDF/ADF), BlueNRG‑2",
        "RTOS/Архитектуры: FreeRTOS, bare‑metal, драйверы, периферия",
        "Языки: C/C++ (C++11/20), Python, Dart, C# (Avalonia)",
        "Инструменты: Keil uVision, Git, Altium Designer, DipTrace, ЕСКД/ЕСПД",
        "Протоколы: DALI/DALI‑2 (IEC 62386), DMX/RDM/ArtNet, Modbus RTU, BLE, UART/SPI/I2C/CAN",
        "HMI/SCADA: iRidi Studio, iRidi SCADA (Smart Opora/Office/Lounge)"
      ],
      portfolioTitle: "Портфолио/Награды",
      portfolio: [
        { t: "RADUGA — Декоративные светильники", u: "https://raduga-light.com/ru/catalog/arkhitekturnoe-osveshchenie/dekorativnye-svetilniki/" },
        { t: "RADUGA — Линейные светильники", u: "https://raduga-light.com/ru/catalog/arkhitekturnoe-osveshchenie/lineynye-svetilniki/" },
        { t: "RADUGA — Маломощные прожекторы", u: "https://raduga-light.com/ru/catalog/arkhitekturnoe-osveshchenie/malomoshchnye-prozhektory/" },
        { t: "RADUGA — Прожекторы", u: "https://raduga-light.com/ru/catalog/arkhitekturnoe-osveshchenie/prozhektory/" },
        { t: "Минцифры РФ — Реестр ПО (TRION)", u: "https://reestr.digital.gov.ru/reestr/2338137/?sphrase_id=4767956" },
        { t: "‘Золотой фотон’ — Светильник", u: "https://www.smartcity-award.com/nominations?nomination=169&id=332" },
        { t: "‘Золотой фотон’ — Источник питания и ПО", u: "https://www.smartcity-award.com/nominations?nomination=224&id=635" },
        { t: "‘Золотой фотон’ — Источник питания TW (СТ‑1)", u: "https://www.smartcity-award.com/nominations?nomination=312&id=1762" },
        { t: "‘Золотой фотон’ — Умный офисный светильник", u: "https://www.smartcity-award.com/nominations?nomination=349&id=1724" },
        { t: "Командная награда — Геленджик Арена", u: "https://www.smartcity-award.com/nominations?nomination=349&id=1817" }
      ]
    },
    en: {
      name: "Pavel Tomash",
      title: "Senior Embedded Software Engineer",
      aboutTitle: "About",
      aboutText: "Senior embedded engineer: STM32/ESP32 (C/C++, FreeRTOS, HAL/CMSIS), DALI/DMX/BLE, API/SDK, mass manufacturing; Git flow, code review, ESKD/ESPD. Open to relocation (China/Europe). English B2, Chinese A1.",
      expTitle: "Experience",
      experience: [
        {
          role: "Senior Embedded Engineer",
          company: "1440.space",
          location: "Moscow",
          period: "Nov 2024 — present",
          bullets: [
            "STM32: C/C++, FreeRTOS, HAL/CMSIS; UART/SPI/I2C, timers, ADC",
            "Test bench/release software; legacy maintenance",
            "Code review, documentation; manufacturing liaison"
          ]
        },
        {
          role: "Software Engineer / Team Lead",
          company: "TRION",
          location: "Moscow",
          period: "2021 — 2024",
          bullets: [
            "Embedded firmware; production testing software",
            "Release planning; quality & reliability improvements"
          ]
        },
        {
          role: "Embedded Engineer",
          company: "TM RADUGA",
          location: "Moscow",
          period: "2020 — 2021",
          bullets: [
            "STM32 (HAL/CMSIS), ESP32 (ESP‑IDF/ADF); API integration",
            "DC‑DC basics; documentation"
          ]
        }
      ],
      eduTitle: "Education",
      education: [
        "2027 (exp.) — Synergy University, BSc",
        "2021 — College (Plekhanov REU), 09.02.01",
        "CS50 (Harvard, 2024); Flutter (MIPT, 2024); Cisco: IoT/A+; EF SET; OpenCV; Golang (basic)"
      ],
      skillsTitle: "Skills",
      skills: [
        "C/C++","Python","Dart/Flutter","C# (Avalonia)","JavaScript (basic)",
        "STM32 (HAL/CMSIS)","ESP32 (ESP‑IDF/ADF)","BlueNRG‑2","FreeRTOS",
        "UART","SPI","I2C","CAN","Modbus RTU","DALI/IEC62386","DMX/RDM","BLE",
        "Git","Altium Designer","DipTrace","Docs","Test benches"
      ],
      contactsTitle: "Contacts",
      techTitle: "Technical Competencies",
      tech: [
        "MCU: STM32F777, STM32L496, STM32 (CMSIS/HAL), ESP32 (ESP‑IDF/ADF), BlueNRG‑2",
        "RTOS/Arch: FreeRTOS, bare‑metal, drivers, peripherals",
        "Languages: C/C++ (C++11/20), Python, Dart, C# (Avalonia)",
        "Tools: Keil uVision, Git, Altium Designer, DipTrace, ESKD/ESPD",
        "Protocols: DALI/DALI‑2 (IEC 62386), DMX/RDM/ArtNet, Modbus RTU, BLE, UART/SPI/I2C/CAN",
        "HMI/SCADA: iRidi Studio, iRidi SCADA (Smart Opora/Office/Lounge)"
      ],
      portfolioTitle: "Portfolio/Awards",
      portfolio: [
        { t: "RADUGA — Decorative lighting", u: "https://raduga-light.com/ru/catalog/arkhitekturnoe-osveshchenie/dekorativnye-svetilniki/" },
        { t: "RADUGA — Linear lighting", u: "https://raduga-light.com/ru/catalog/arkhitekturnoe-osveshchenie/lineynye-svetilniki/" },
        { t: "RADUGA — Low‑power floodlights", u: "https://raduga-light.com/ru/catalog/arkhitekturnoe-osveshchenie/malomoshchnye-prozhektory/" },
        { t: "RADUGA — Floodlights", u: "https://raduga-light.com/ru/catalog/arkhitekturnoe-osveshchenie/prozhektory/" },
        { t: "Ministry registry (RU software)", u: "https://reestr.digital.gov.ru/reestr/2338137/?sphrase_id=4767956" },
        { t: "Golden Photon — Luminaire", u: "https://www.smartcity-award.com/nominations?nomination=169&id=332" },
        { t: "Golden Photon — PSU & Software", u: "https://www.smartcity-award.com/nominations?nomination=224&id=635" },
        { t: "Golden Photon — PSU with TW (ST‑1)", u: "https://www.smartcity-award.com/nominations?nomination=312&id=1762" },
        { t: "Golden Photon — Smart office luminaire", u: "https://www.smartcity-award.com/nominations?nomination=349&id=1724" },
        { t: "Team award — Gelendzhik Arena", u: "https://www.smartcity-award.com/nominations?nomination=349&id=1817" }
      ]
    },
    zh: {
      name: "Pavel Tomash",
      title: "高级嵌入式软件工程师",
      aboutTitle: "关于我",
            aboutText: "高级嵌入式工程师：STM32/ESP32（C/C++，FreeRTOS，HAL/CMSIS），DALI/DMX/BLE，API/SDK，量产；Git流程、代码评审、ESKD/ESPD。可搬迁（中国/欧洲）。英语B2，中文A1。",
       expTitle: "工作经历",
      experience: [
        {
          role: "资深嵌入式工程师",
          company: "1440.space",
          location: "莫斯科",
          period: "2024/11 — 至今",
          bullets: [
            "STM32：C/C++、FreeRTOS、HAL/CMSIS；UART/SPI/I2C、定时器、ADC",
            "测试工装/发布软件；遗留代码维护",
            "代码评审、技术文档；对接生产"
          ]
        },
        {
          role: "软件工程师/小组负责人",
          company: "TRION",
          location: "莫斯科",
          period: "2021 — 2024",
          bullets: [
            "嵌入式固件；量产测试软件",
            "发布规划；质量与可靠性改进"
          ]
        },
        {
          role: "嵌入式工程师",
          company: "TM RADUGA",
          location: "莫斯科",
          period: "2020 — 2021",
          bullets: [
            "STM32（HAL/CMSIS）、ESP32（ESP‑IDF/ADF）；API 集成",
            "DC‑DC 基础；文档"
          ]
        }
      ],
      eduTitle: "教育",
      education: [
        "2027（预计）— Synergy 大学，本科",
        "2021 — Plekhanov REU 学院，09.02.01",
        "CS50（哈佛，2024）；Flutter（MIPT，2024）；Cisco：IoT/A+；EF SET；OpenCV；Golang（基础）"
      ],
      skillsTitle: "技能",
      skills: [
        "C/C++","Python","Dart/Flutter","C# (Avalonia)","JavaScript（基础）",
        "STM32 (HAL/CMSIS)","ESP32 (ESP‑IDF/ADF)","BlueNRG‑2","FreeRTOS",
        "UART","SPI","I2C","CAN","Modbus RTU","DALI/IEC62386","DMX/RDM","BLE",
        "Git","Altium Designer","DipTrace","文档","测试工装"
      ],
      contactsTitle: "联系方式",
      techTitle: "技术能力",
      tech: [
        "MCU：STM32F777、STM32L496、STM32（CMSIS/HAL）、ESP32（ESP‑IDF/ADF）、BlueNRG‑2",
        "RTOS/架构：FreeRTOS、裸机、驱动、外设",
        "语言：C/C++（C++11/20）、Python、Dart、C#（Avalonia）",
        "工具：Keil uVision、Git、Altium Designer、DipTrace、ESKD/ESPD",
        "协议：DALI/DALI‑2（IEC 62386）、DMX/RDM/ArtNet、Modbus RTU、BLE、UART/SPI/I2C/CAN",
        "HMI/SCADA：iRidi Studio、iRidi SCADA（Smart Opora/Office/Lounge）"
      ],
      portfolioTitle: "作品/奖项",
      portfolio: [
        { t: "RADUGA — 装饰类灯具", u: "https://raduga-light.com/ru/catalog/arkhitekturnoe-osveshchenie/dekorativnye-svetilniki/" },
        { t: "RADUGA — 线性灯具", u: "https://raduga-light.com/ru/catalog/arkhitekturnoe-osveshchenie/lineynye-svetilniki/" },
        { t: "RADUGA — 小功率投光", u: "https://raduga-light.com/ru/catalog/arkhitekturnoe-osveshchenie/malomoshchnye-prozhektory/" },
        { t: "RADUGA — 投光灯", u: "https://raduga-light.com/ru/catalog/arkhitekturnoe-osveshchenie/prozhektory/" },
        { t: "俄官方软件名录", u: "https://reestr.digital.gov.ru/reestr/2338137/?sphrase_id=4767956" },
        { t: "“金色光子” — 灯具", u: "https://www.smartcity-award.com/nominations?nomination=169&id=332" },
        { t: "“金色光子” — 电源与软件", u: "https://www.smartcity-award.com/nominations?nomination=224&id=635" },
        { t: "“金色光子” — TW 功能电源（ST‑1）", u: "https://www.smartcity-award.com/nominations?nomination=312&id=1762" },
        { t: "“金色光子” — 智能办公灯具", u: "https://www.smartcity-award.com/nominations?nomination=349&id=1724" },
        { t: "团队奖 — 格连吉克体育馆", u: "https://www.smartcity-award.com/nominations?nomination=349&id=1817" }
      ]
    }
  };

  const qs = s=>document.querySelector(s);
  const expList = qs('#expList');
  const eduList = qs('#eduList');
  const skillsList = qs('#skillsList');
  const techList = qs('#techList');
  const portfolioList = qs('#portfolioList');

  function render(lang){
    const L = T[lang] || T.ru;
    document.documentElement.lang = (lang==='zh'?'zh-CN':lang);
    qs('#name').textContent = L.name;
    qs('#tagline').textContent = L.title;
    qs('[data-i18n="aboutTitle"]').textContent = L.aboutTitle;
    qs('#aboutText').textContent = L.aboutText;
    qs('[data-i18n="expTitle"]').textContent = L.expTitle;
    qs('[data-i18n="eduTitle"]').textContent = L.eduTitle;
    qs('[data-i18n="skillsTitle"]').textContent = L.skillsTitle;
    qs('[data-i18n="contactsTitle"]').textContent = L.contactsTitle;

    // description for SEO
    const metaDesc = document.querySelector('meta[name="description"]');
    if(metaDesc){ metaDesc.setAttribute('content', `${L.title}. ${L.aboutText}`.slice(0, 250)); }

    expList.innerHTML = '';
    L.experience.forEach(item=>{
      const el = document.createElement('div');
      el.className = 'item';
      el.innerHTML = `
        <div>
          <div class="role">${item.role} — ${item.company}</div>
          <div class="meta">${item.location} • ${item.period}</div>
        </div>
        <div><ul>${item.bullets.map(b=>`<li>${b}</li>`).join('')}</ul></div>
      `;
      expList.appendChild(el);
    });

    eduList.innerHTML = L.education.map(e=>`<li>${e}</li>`).join('');
    skillsList.innerHTML = L.skills.map(s=>`<span class="tag">${s}</span>`).join('');
    if (techList && L.tech) {
      techList.innerHTML = L.tech.map(t=>`<li>${t}</li>`).join('');
      qs('#tech h2').textContent = L.techTitle || 'Технические компетенции';
    }
    if (portfolioList && L.portfolio) {
      portfolioList.innerHTML = L.portfolio.map(i=>`<li><a href="${i.u}" target="_blank" rel="noopener">${i.t}</a></li>`).join('');
      qs('#portfolio h2').textContent = L.portfolioTitle || 'Портфолио';
    }

    localStorage.setItem('lang', lang);
    location.hash = '#' + lang;
  }

  // Theme toggle
  const themeBtn = document.getElementById('themeToggle');
  function applyTheme(mode){
    const root = document.documentElement;
    if(mode==='light' || mode==='dark'){ root.setAttribute('data-theme', mode); }
    else { root.setAttribute('data-theme','auto'); }
    localStorage.setItem('theme', mode);
  }
  themeBtn.addEventListener('click', ()=>{
    const cur = localStorage.getItem('theme') || 'auto';
    const next = cur==='auto' ? 'dark' : (cur==='dark' ? 'light' : 'auto');
    applyTheme(next);
  });

  // Language handlers
  document.querySelectorAll('.actions .lang').forEach(btn=>{
    btn.addEventListener('click', ()=> render(btn.dataset.lang));
  });

  // Init
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
  const savedLang = (location.hash||'').replace('#','') || localStorage.getItem('lang') || 'ru';
  const savedTheme = localStorage.getItem('theme') || 'auto';
  applyTheme(savedTheme);
  render(savedLang);
})(); 