/* ============================================
   🌊 宜蘭一日探索 — 互動邏輯
   ============================================ */

// ============================================
// DATA: All cards / spots
// ============================================
const spotsData = [
  {
    id: 'splash',
    title: '🌊 蘇澳狂歡潑水節',
    desc: '全鎮封街潑水大戰！帶水槍加入，今年最消暑的夏日體驗。',
    image: 'images/splash-festival.png',
    category: 'activity',
    categoryLabel: '活動',
    todayOnly: true,
    detail: {
      time: '下午 3:00 開始',
      location: '蘇澳太平路 & 中山路一段（封街活動）',
      ticket: '免費參加',
      tips: '活動期間封街，建議停車於蘇澳鎮公所停車場，搭接駁車前往。帶水槍、穿可濕的衣服！',
      bonus: '活動後去旁邊蘇澳冷泉公園泡冷泉（當天大眾池免費！）'
    }
  },
  {
    id: 'kite',
    title: '🪁 冬山風箏節嘉年華',
    desc: '「飛吧！鯨奇海世界」— 巨型海洋生物造型風箏 × 金黃稻田，搭配樂團演出與市集。',
    image: 'images/kite-festival.png',
    category: 'activity',
    categoryLabel: '活動',
    todayOnly: true,
    detail: {
      time: '全天（7/18–7/19 最後一天）',
      location: '冬山鄉三奇農路（三奇美徑）',
      ticket: '免費',
      tips: '黃昏時分的風箏 × 稻田景色最夢幻，適合拍照。建議自行騎車或開車前往。'
    }
  },
  {
    id: 'childplay',
    title: '🎉 宜蘭國際童玩藝術節',
    desc: '「森歷其境」主題 — 大型戲水設施、國際民俗表演，暑假最大型活動！',
    image: 'images/hero.png',
    category: 'activity',
    categoryLabel: '活動',
    todayOnly: false,
    detail: {
      time: '7/4 – 8/16 ・ 09:00–18:00',
      location: '冬山河親水公園',
      ticket: '需購票（可使用文化幣）',
      tips: '雖然親子向，但一個人去玩水看表演也超開心！建議下午來避開最烈日。'
    }
  },
  {
    id: 'artfest',
    title: '🎭 羅東藝穗節',
    desc: '創意遊行踩街、舞台表演、文創市集，展現羅東在地文化活力。',
    image: 'images/night-market.png',
    category: 'activity',
    categoryLabel: '活動',
    todayOnly: false,
    detail: {
      time: '7/11 – 8/2',
      location: '羅東中山公園周邊',
      ticket: '免費',
      tips: '傍晚時段最熱鬧，可搭配羅東夜市一起逛。'
    }
  },
  {
    id: 'bookmuseum',
    title: '📖 藝術自造祭《書的博物館》',
    desc: '20組台灣+國際藝術家，裝置藝術、互動科技、地景書寫。黃春明《菅芒花》大型地景作品必看！',
    image: 'images/book-museum.png',
    category: 'exhibition',
    categoryLabel: '展覽',
    todayOnly: false,
    detail: {
      time: '7/9 – 9/6 ・ 室內 10:00–18:00 / 戶外延長至 22:00',
      location: '中興文化創意園區（五結鄉中正路二段6-8號）',
      ticket: '請查詢官方公告',
      tips: '園區前身是造紙廠，整體空間很有工業風氛圍，建議安排 2–3 小時。晚上有夜間燈光展！'
    }
  },
  {
    id: 'lanyang',
    title: '🏛️ 蘭陽博物館',
    desc: '烏石港正口200年特展 + 漢本考古遺址展，探索宜蘭歷史與史前文化。',
    image: 'images/lanyang-museum.png',
    category: 'exhibition',
    categoryLabel: '展覽',
    todayOnly: false,
    detail: {
      time: '09:00 – 17:00（週三休館）',
      location: '頭城鎮青雲路三段750號',
      ticket: '全票 100 元',
      tips: '建築本身就是一大亮點（傾斜三角形設計），搭配旁邊的烏石港濕地公園散步。'
    }
  },
  {
    id: 'turtle',
    title: '🐬 龜山島 + 牛奶海 SUP',
    desc: '夏季限定！賞鯨 + 夢幻牛奶海立槳體驗，宜蘭外海的經典行程。',
    image: 'images/turtle-island.png',
    category: 'outdoor',
    categoryLabel: '戶外',
    todayOnly: false,
    detail: {
      time: '需提前預約，船班約 08:00 出發',
      location: '烏石港遊客中心出發',
      ticket: '約 $1,200–$2,500（依行程方案）',
      tips: '⚠️ 需提前網路預約，當天可能額滿。易暈船者請先服用暈船藥。'
    }
  },
  {
    id: 'matcha',
    title: '🏔️ 抹茶山',
    desc: '翠綠山巒如抹茶般壯觀！聖母山莊步道，適合喜愛健行的探索者。',
    image: 'images/matcha-mountain.png',
    category: 'outdoor',
    categoryLabel: '戶外',
    todayOnly: false,
    detail: {
      time: '全天（建議清晨出發）',
      location: '礁溪五峰旗風景區入口',
      ticket: '免費',
      tips: '⚠️ 全程來回約 5–6 小時，部分路段陡峭，需評估體力。務必帶足飲水與補給品。'
    }
  },
  {
    id: 'fendiao',
    title: '🏖️ 粉鳥林漁港',
    desc: '世外桃源般的秘境海灣，湛藍海水配奇岩景致，非常適合靜心拍照。',
    image: 'images/turtle-island.png',
    category: 'outdoor',
    categoryLabel: '戶外',
    todayOnly: false,
    detail: {
      time: '全天開放（建議早上前往）',
      location: '蘇澳鎮東澳里（Google Map 搜尋「粉鳥林漁港」）',
      ticket: '免費',
      tips: '清晨或上午最美，中午烈日較不適合。附近無太多餐飲，建議自備飲水。'
    }
  },
  {
    id: 'coldspring',
    title: '🧊 蘇澳冷泉公園',
    desc: '全台唯一碳酸冷泉！22°C 天然冷泉泡湯，夏日最消暑的體驗。',
    image: 'images/splash-festival.png',
    category: 'outdoor',
    categoryLabel: '戶外',
    todayOnly: false,
    detail: {
      time: '09:00 – 21:00',
      location: '蘇澳鎮冷泉路',
      ticket: '大眾池 $70（潑水節當天免費！）',
      tips: '泡冷泉建議不要空腹，可搭配蘇澳潑水節一起安排。'
    }
  },
  {
    id: 'nightmarket',
    title: '🌙 羅東夜市',
    desc: '必吃：包心粉圓、三星蔥餅、當歸羊肉湯、花生捲冰淇淋！宜蘭美食聖地。',
    image: 'images/night-market.png',
    category: 'food',
    categoryLabel: '美食',
    todayOnly: false,
    detail: {
      time: '約 17:00 – 00:00',
      location: '羅東鎮中山公園周邊',
      ticket: '免費入場',
      tips: '假日人潮超多，建議 17:00 剛開攤就去搶先吃。停車可停中山公園地下停車場。'
    }
  },
  {
    id: 'nanfangao',
    title: '🐟 南方澳漁港海鮮',
    desc: '現撈海鮮直送餐桌，新鮮生魚片、海鮮鍋、炸魚，漁港邊大快朵頤！',
    image: 'images/turtle-island.png',
    category: 'food',
    categoryLabel: '美食',
    todayOnly: false,
    detail: {
      time: '午餐時段 11:00 – 14:00 最佳',
      location: '蘇澳鎮南方澳漁港周邊餐廳',
      ticket: '依餐廳消費',
      tips: '推薦搭配蘇澳潑水節行程，中午先吃海鮮再去潑水！'
    }
  },
  {
    id: 'redtea',
    title: '🍵 冬山紅茶季',
    desc: '7–8月限定！品嚐在地素馨紅茶，感受宜蘭茶鄉的慢活魅力。',
    image: 'images/matcha-mountain.png',
    category: 'food',
    categoryLabel: '美食',
    todayOnly: false,
    detail: {
      time: '7/1 – 8/31',
      location: '冬山鄉各茶園',
      ticket: '依體驗方案',
      tips: '可搭配冬山風箏節 + 三奇美徑騎車，來一趟完整的冬山田野之旅。'
    }
  },
  {
    id: 'kavalan',
    title: '🥃 噶瑪蘭威士忌酒廠',
    desc: '免費參觀 + 品飲台灣之光威士忌！了解金車噶瑪蘭的釀造工藝。',
    image: 'images/book-museum.png',
    category: 'exhibition',
    categoryLabel: '展覽',
    todayOnly: false,
    detail: {
      time: '09:00 – 18:00',
      location: '員山鄉員山路二段326號',
      ticket: '免費參觀（品飲需購買）',
      tips: '導覽解說很精彩，建議預留 1.5 小時。開車不喝酒！'
    }
  }
];


// ============================================
// RENDER CARDS
// ============================================
function renderCards(filter = 'all') {
  const grid = document.getElementById('card-grid');
  grid.innerHTML = '';

  const filtered = filter === 'all' 
    ? spotsData 
    : spotsData.filter(s => s.category === filter);

  filtered.forEach((spot, idx) => {
    const card = document.createElement('div');
    card.className = 'card fade-in';
    card.dataset.category = spot.category;
    card.dataset.id = spot.id;
    card.style.animationDelay = `${idx * 0.08}s`;

    const tagClass = `tag-${spot.category}`;

    card.innerHTML = `
      ${spot.todayOnly ? '<span class="today-badge">🔥 今日限定</span>' : ''}
      <div class="card-image-wrapper">
        <img class="card-image" src="${spot.image}" alt="${spot.title}" loading="lazy">
        <span class="card-category-tag ${tagClass}">${spot.categoryLabel}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${spot.title}</div>
        <div class="card-desc">${spot.desc}</div>
        <div class="card-meta">
          ${spot.detail.time ? `<span>🕐 ${spot.detail.time.split('・')[0]}</span>` : ''}
          ${spot.detail.location ? `<span>📍 ${spot.detail.location.split('（')[0]}</span>` : ''}
        </div>
      </div>
      <div class="card-detail" id="detail-${spot.id}">
        <div class="card-detail-inner">
          <div class="detail-row"><span class="detail-icon">🕐</span><span class="detail-label">時間</span><span class="detail-value">${spot.detail.time || '—'}</span></div>
          <div class="detail-row"><span class="detail-icon">📍</span><span class="detail-label">地點</span><span class="detail-value">${spot.detail.location || '—'}</span></div>
          <div class="detail-row"><span class="detail-icon">🎫</span><span class="detail-label">門票</span><span class="detail-value">${spot.detail.ticket || '—'}</span></div>
          <div class="detail-row"><span class="detail-icon">💡</span><span class="detail-label">提醒</span><span class="detail-value">${spot.detail.tips || '—'}</span></div>
          ${spot.detail.bonus ? `<div class="detail-row"><span class="detail-icon">🎁</span><span class="detail-label">加碼</span><span class="detail-value">${spot.detail.bonus}</span></div>` : ''}
        </div>
      </div>
      <div class="card-toggle" data-target="detail-${spot.id}">
        查看詳情 <span class="toggle-arrow">▼</span>
      </div>
    `;

    grid.appendChild(card);
  });

  // Re-observe for fade-in
  observeElements();
  // Bind toggle events
  bindToggles();
}

// ============================================
// FILTER LOGIC
// ============================================
function initFilters() {
  const filterBar = document.getElementById('filter-bar');
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // Update active state
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Re-render
    const filter = btn.dataset.filter;
    renderCards(filter);
  });
}

// ============================================
// ACCORDION TOGGLE
// ============================================
function bindToggles() {
  document.querySelectorAll('.card-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = toggle.dataset.target;
      const detail = document.getElementById(targetId);
      
      if (detail.classList.contains('open')) {
        detail.classList.remove('open');
        toggle.classList.remove('open');
        toggle.innerHTML = '查看詳情 <span class="toggle-arrow">▼</span>';
      } else {
        detail.classList.add('open');
        toggle.classList.add('open');
        toggle.innerHTML = '收起詳情 <span class="toggle-arrow">▼</span>';
      }
    });
  });
}

// ============================================
// ROUTE TABS
// ============================================
function initRouteTabs() {
  const tabs = document.getElementById('route-tabs');
  tabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.route-tab');
    if (!tab) return;

    // Update active tab
    tabs.querySelectorAll('.route-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Show corresponding content
    const route = tab.dataset.route;
    document.querySelectorAll('.route-content').forEach(c => c.classList.remove('active'));
    document.getElementById(`route-${route}`).classList.add('active');

    // Re-observe timeline items
    observeElements();
  });
}

// ============================================
// RANDOM PICKER
// ============================================
function initRandomPicker() {
  const btn = document.getElementById('random-btn');
  const heroBtn = document.getElementById('hero-random-btn');
  const resultDiv = document.getElementById('random-result');

  function doRandom() {
    // Spinning animation
    btn.classList.add('spinning');
    btn.disabled = true;
    resultDiv.classList.remove('show');

    setTimeout(() => {
      btn.classList.remove('spinning');
      btn.disabled = false;

      // Pick random spot
      const spot = spotsData[Math.floor(Math.random() * spotsData.length)];
      
      const tagColorMap = {
        activity: 'linear-gradient(135deg, #f48fb1, #ff4081)',
        exhibition: 'linear-gradient(135deg, #1565c0, #4fc3f7)',
        outdoor: 'linear-gradient(135deg, #2e7d32, #81c784)',
        food: 'linear-gradient(135deg, #ff7043, #ffab91)'
      };

      resultDiv.innerHTML = `
        <div class="result-card">
          <img class="result-image" src="${spot.image}" alt="${spot.title}">
          <div class="result-body">
            <div class="result-title">${spot.title}</div>
            <div class="result-desc">${spot.desc}</div>
            <span class="result-tag" style="background: ${tagColorMap[spot.category]}">${spot.categoryLabel}</span>
            ${spot.todayOnly ? ' <span class="result-tag" style="background: linear-gradient(135deg, #ff416c, #ff4b2b)">🔥 今日限定</span>' : ''}
          </div>
        </div>
      `;

      resultDiv.classList.add('show');

      // Scroll to result
      resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 1200);
  }

  btn.addEventListener('click', doRandom);
  heroBtn.addEventListener('click', () => {
    document.getElementById('random-section').scrollIntoView({ behavior: 'smooth' });
    setTimeout(doRandom, 600);
  });
}

// ============================================
// SCROLL FADE-IN OBSERVER
// ============================================
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    observer.observe(el);
  });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ============================================
// CHILDPLAY FESTIVAL TABS
// ============================================
function initChildplayTabs() {
  const tabs = document.getElementById('cp-tabs');
  if (!tabs) return;
  
  tabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.cp-tab');
    if (!tab) return;

    // Update active tab
    tabs.querySelectorAll('.cp-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Show corresponding content
    const cpId = tab.dataset.cp;
    document.querySelectorAll('.cp-content').forEach(c => c.classList.remove('active'));
    document.getElementById(`cp-${cpId}`).classList.add('active');

    // Re-observe for fade-in
    observeElements();
  });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  initFilters();
  initRouteTabs();
  initChildplayTabs();
  initRandomPicker();
  initSmoothScroll();
  observeElements();
});
