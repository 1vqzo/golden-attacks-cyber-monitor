// MODAL FUNCTIONS
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
}

// CLOSE MODALS ON BACKGROUND CLICK
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});

// SEARCH TOGGLE
function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('hidden');
}

// LANGUAGE SWITCHER
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        document.documentElement.lang = lang;
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // SAVE TO LOCAL STORAGE
        localStorage.setItem('language', lang);
    });
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// SHOW HELP MODAL ON FIRST LOAD
if (!localStorage.getItem('visited')) {
    setTimeout(() => {
        openModal('help-modal');
        localStorage.setItem('visited', 'true');
    }, 500);
}

// RESTORE LANGUAGE PREFERENCE
const savedLang = localStorage.getItem('language') || 'ar';
document.documentElement.lang = savedLang;
document.body.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
const langBtn = document.querySelector(`[data-lang="${savedLang}"]`);
if (langBtn) {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    langBtn.classList.add('active');
}

// RANDOM NUMBER GENERATOR FOR LIVE STATS
function randomizeStats() {
    const numbers = document.querySelectorAll('.threat-card h3, .stat-card p');
    numbers.forEach(el => {
        const current = parseInt(el.textContent.replace(/,/g, ''));
        if (!isNaN(current)) {
            const change = Math.floor(Math.random() * 100) - 50;
            const newVal = Math.max(0, current + change);
            el.textContent = newVal.toLocaleString('ar-EG');
        }
    });
}

// UPDATE STATS EVERY 30 SECONDS
setInterval(randomizeStats, 30000);

// FORM SUBMISSION
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('شكراً لتواصلك معنا! سنرد عليك قريباً.');
    e.target.reset();
    closeModal('contact-modal');
});

// THEME TOGGLE
document.getElementById('theme-select')?.addEventListener('change', (e) => {
    const theme = e.target.value;
    localStorage.setItem('theme', theme);
    applyTheme(theme);
});

function applyTheme(theme) {
    document.body.style.filter = theme === 'light' ? 'invert(1)' : 'none';
}

// COLOR SCHEME TOGGLE
document.getElementById('color-scheme')?.addEventListener('change', (e) => {
    const scheme = e.target.value;
    const root = document.documentElement;
    
    if (scheme === 'cyan') {
        root.style.setProperty('--primary', '#00d9ff');
        root.style.setProperty('--primary-light', '#00ffff');
    } else if (scheme === 'purple') {
        root.style.setProperty('--primary', '#a855f7');
        root.style.setProperty('--primary-light', '#c084fc');
    } else {
        root.style.setProperty('--primary', '#d4af37');
        root.style.setProperty('--primary-light', '#f0c14b');
    }
    
    localStorage.setItem('colorScheme', scheme);
});

// RESTORE COLOR SCHEME
const savedScheme = localStorage.getItem('colorScheme') || 'gold';
if (document.getElementById('color-scheme')) {
    document.getElementById('color-scheme').value = savedScheme;
    const event = new Event('change');
    document.getElementById('color-scheme').dispatchEvent(event);
}

// RANDOM NOTIFICATION SYSTEM
function showRandomNotification() {
    const notifications = [
        '🚨 تم اكتشاف هجوم جديد في اليابان',
        '⚠️ محاولة اختراق عالية في الولايات المتحدة',
        '🛡️ تم حجب 50 هجمة DDoS',
        '📊 تقرير جديد: زيادة الهجمات 15%',
        '🔔 تحديث أمني: تصحيح ثغرة حرجة'
    ];
    
    if (Math.random() > 0.7 && !document.getElementById('help-modal').classList.contains('hidden') === false) {
        const notif = notifications[Math.floor(Math.random() * notifications.length)];
        console.log('🔔 إشعار:', notif);
    }
}

setInterval(showRandomNotification, 45000);

// PARALLAX EFFECT
window.addEventListener('scroll', () => {
    const glows = document.querySelectorAll('.glow');
    glows.forEach((glow, index) => {
        const offset = window.scrollY * (0.1 + index * 0.05);
        glow.style.transform = `translateY(${offset}px)`;
    });
});

// CONSOLE EASTER EGG
console.log('%c© Golden Attacks By mo7a', 'color: #d4af37; font-size: 20px; font-weight: bold;');
console.log('%cمنصة احترافية لمراقبة الهجمات السيبرانية حول العالم', 'color: #67e8f9; font-size: 14px;');
console.log('%cتم التطوير بواسطة: Mo7a 🎯', 'color: #4ade80; font-size: 12px;');

// PERFORMANCE MONITORING
window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`⏱️ وقت التحميل: ${pageLoadTime}ms`);
});
