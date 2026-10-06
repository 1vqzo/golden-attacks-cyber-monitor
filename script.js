:root {
    --primary: #d4af37;
    --primary-light: #f0c14b;
    --primary-dark: #b8930c;
    --secondary: #67e8f9;
    --danger: #ff4747;
    --warning: #ffd166;
    --success: #4ade80;
    --dark: #0a0e27;
    --darker: #050810;
    --card: rgba(20, 30, 60, 0.6);
    --border: rgba(212, 175, 55, 0.25);
    --text: #e8f1ff;
    --text-muted: #b8c8e1;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    width: 100%;
    height: 100%;
}

body {
    font-family: 'Cairo', 'Inter', sans-serif;
    background: linear-gradient(135deg, #0a0e27 0%, #0f1640 50%, #050810 100%);
    color: var(--text);
    overflow-x: hidden;
    position: relative;
    line-height: 1.6;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 1;
}

.bg-container {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
}

.glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(150px);
    opacity: 0.35;
}

.glow-1 {
    width: 500px;
    height: 500px;
    top: 5%;
    left: 5%;
    background: rgba(212, 175, 55, 0.25);
    animation: float 20s infinite ease-in-out;
}

.glow-2 {
    width: 600px;
    height: 600px;
    bottom: 10%;
    right: 8%;
    background: rgba(103, 232, 249, 0.15);
    animation: float 25s infinite ease-in-out reverse;
}

.glow-3 {
    width: 400px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(212, 175, 55, 0.1);
    animation: pulse-glow 30s infinite ease-in-out;
}

@keyframes float {
    0%, 100% { transform: translateY(0) translateX(0); }
    25% { transform: translateY(-20px) translateX(10px); }
    50% { transform: translateY(0) translateX(0); }
    75% { transform: translateY(20px) translateX(-10px); }
}

@keyframes pulse-glow {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.35; }
    50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.5; }
}

.noise {
    position: absolute;
    inset: 0;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /></filter><rect width="100" height="100" filter="url(%23noiseFilter)" opacity="0.03"/></svg>');
    opacity: 0.4;
}

.grid-bg {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.3;
}

.navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(5, 8, 16, 0.85);
    border-bottom: 1px solid var(--border);
    backdrop-filter: blur(12px);
    padding: 15px 0;
}

.nav-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

.logo-section {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
}

.logo-icon {
    font-size: 2rem;
    animation: spin 10s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.logo-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.3rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.logo-sub {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-weight: 600;
}

.nav-links {
    display: flex;
    gap: 25px;
}

.nav-link {
    color: var(--text-muted);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    position: relative;
}

.nav-link:hover {
    color: var(--primary);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}

.nav-tools {
    display: flex;
    align-items: center;
    gap: 12px;
}

.icon-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    color: var(--text);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s;
}

.icon-btn:hover {
    background: rgba(212, 175, 55, 0.1);
    border-color: var(--primary);
    transform: scale(1.1);
}

.lang-toggle {
    display: flex;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 4px;
}

.lang-btn {
    background: transparent;
    border: none;
    color: var(--text-muted);
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 999px;
    font-weight: 700;
    transition: all 0.3s;
}

.lang-btn.active {
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: #0a0a0a;
}

.search-bar {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 600px;
    background: var(--card);
    border: 2px solid var(--border);
    border-radius: 50px;
    padding: 12px 20px;
    display: flex;
    gap: 10px;
    z-index: 99;
    animation: slideDown 0.3s ease;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateX(-50%) translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
}

.search-bar.hidden {
    display: none;
}

.search-input {
    flex: 1;
    background: transparent;
    border: none;
    color: var(--text);
    outline: none;
    font-size: 1rem;
}

.search-input::placeholder {
    color: var(--text-muted);
}

.modal {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: grid;
    place-items: center;
    z-index: 200;
    opacity: 1;
    transition: opacity 0.3s;
}

.modal.hidden {
    opacity: 0;
    pointer-events: none;
}

.modal-content {
    background: linear-gradient(135deg, rgba(20, 30, 60, 0.9), rgba(15, 22, 64, 0.95));
    border: 2px solid var(--border);
    border-radius: 20px;
    padding: 40px;
    max-width: 600px;
    width: 90%;
    position: relative;
    animation: modalSlide 0.4s ease;
}

@keyframes modalSlide {
    from {
        opacity: 0;
        transform: scale(0.9) translateY(-50px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    color: var(--text);
    font-size: 2rem;
    cursor: pointer;
    transition: transform 0.2s;
}

.modal-close:hover {
    transform: scale(1.2);
}

.modal-content h2 {
    margin-bottom: 20px;
    font-size: 1.8rem;
}

.modal-content p {
    color: var(--text-muted);
    margin-bottom: 20px;
    line-height: 1.8;
}

.settings-content {
    max-width: 500px;
}

.settings-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 25px;
}

.setting-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.setting-item label {
    font-weight: 700;
    color: var(--text);
}

.setting-item select,
.setting-item input[type="checkbox"] {
    padding: 8px 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text);
    cursor: pointer;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-form input,
.contact-form textarea {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px;
    color: var(--text);
    font-family: 'Cairo', sans-serif;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
    color: var(--text-muted);
}

.btn {
    border: none;
    border-radius: 12px;
    padding: 12px 28px;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 1rem;
    text-decoration: none;
    display: inline-block;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: #0a0a0a;
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.5);
}

.btn-outline {
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
}

.btn-outline:hover {
    background: rgba(212, 175, 55, 0.1);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
    color: var(--text);
}

.btn-lg {
    padding: 14px 35px;
    font-size: 1.1rem;
}

.hero {
    padding: 100px 0;
    position: relative;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 50px;
    align-items: center;
}

.hero-title {
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.1;
    margin-bottom: 20px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-desc {
    font-size: 1.2rem;
    color: var(--text-muted);
    margin-bottom: 30px;
}

.hero-stats {
    display: flex;
    gap: 30px;
    margin-bottom: 40px;
}

.stat {
    display: flex;
    flex-direction: column;
}

.stat-number {
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--primary);
}

.stat-label {
    color: var(--text-muted);
    font-size: 0.9rem;
}

.hero-buttons {
    display: flex;
    gap: 20px;
}

.hero-visual {
    text-align: center;
}

.profile-img {
    width: 100%;
    max-width: 400px;
    border-radius: 20px;
    border: 3px solid var(--primary);
    box-shadow: 0 20px 60px rgba(212, 175, 55, 0.3);
    animation: float 6s ease-in-out infinite;
}

.profile-info {
    margin-top: 20px;
}

.profile-info h3 {
    font-size: 1.5rem;
    margin-bottom: 5px;
}

.profile-info p {
    color: var(--text-muted);
}

.social-strip {
    padding: 30px 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.social-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 50px;
    font-weight: 700;
    text-decoration: none;
    color: white;
    border: 2px solid transparent;
    transition: all 0.3s;
}

.social-btn:hover {
    transform: translateY(-3px);
}

.instagram {
    background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4);
}

.facebook {
    background: #0866ff;
}

.snapchat {
    background: linear-gradient(135deg, #fffc00, #f7d200);
    color: #000;
}

.email {
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: #0a0a0a;
}

.threats-section,
.countries-section,
.stats-section,
.feed-section,
.about-section {
    padding: 80px 0;
    border-bottom: 1px solid var(--border);
}

.section-title {
    font-size: 2.5rem;
    margin-bottom: 50px;
    text-align: center;
    font-weight: 900;
}

.threats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}

.threat-card {
    background: var(--card);
    border: 2px solid var(--border);
    border-radius: 18px;
    padding: 30px;
    text-align: center;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
}

.threat-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.05));
    pointer-events: none;
}

.threat-card:hover {
    transform: translateY(-8px);
    border-color: var(--primary);
}

.threat-card.critical { border-color: rgba(255, 71, 71, 0.3); }
.threat-card.high { border-color: rgba(255, 209, 102, 0.3); }

.threat-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
}

.threat-badge {
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 800;
}

.threat-badge.critical {
    background: rgba(255, 71, 71, 0.2);
    color: #ff8a8a;
}

.threat-badge.high {
    background: rgba(255, 209, 102, 0.2);
    color: #ffd783;
}

.threat-badge.medium {
    background: rgba(74, 222, 128, 0.15);
    color: #9af0b7;
}

.threat-badge.low {
    background: rgba(103, 232, 249, 0.12);
    color: #9aeaf8;
}

.threat-pulse {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--danger);
    animation: pulse 2s infinite;
}

.threat-card h3 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: var(--primary);
}

.threat-card p {
    color: var(--text-muted);
}

.countries-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
}

.country-card {
    background: var(--card);
    border: 2px solid var(--border);
    border-radius: 18px;
    padding: 25px;
    transition: all 0.3s;
}

.country-card:hover {
    transform: translateY(-8px);
    border-color: var(--primary);
}

.country-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
}

.country-flag {
    font-size: 2.5rem;
}

.country-rank {
    background: var(--primary);
    color: #0a0a0a;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: 900;
}

.country-card h3 {
    margin-bottom: 8px;
    font-size: 1.3rem;
}

.country-attacks {
    color: var(--primary);
    font-weight: 700;
    margin-bottom: 12px;
}

.progress-bar {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 999px;
    overflow: hidden;
}

.progress {
    height: 100%;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: inherit;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 25px;
}

.stat-card {
    background: var(--card);
    border: 2px solid var(--border);
    border-radius: 18px;
    padding: 25px;
    text-align: center;
    transition: all 0.3s;
}

.stat-card:hover {
    transform: translateY(-8px);
}

.chart-circle {
    width: 140px;
    height: 140px;
    margin: 0 auto 20px;
    border-radius: 50%;
    background: conic-gradient(var(--primary) 0deg calc(var(--percentage) * 3.6deg), rgba(255,255,255,0.05) 0deg);
    display: grid;
    place-items: center;
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--primary);
}

.stat-card h3 {
    margin-bottom: 8px;
}

.stat-card p {
    color: var(--text-muted);
}

.feed-items {
    max-width: 1000px;
    margin: 0 auto;
}

.feed-item {
    background: var(--card);
    border-left: 4px solid var(--warning);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
    transition: all 0.3s;
}

.feed-item.critical { border-left-color: var(--danger); }
.feed-item.high { border-left-color: var(--warning); }
.feed-item.medium { border-left-color: var(--success); }

.feed-item:hover {
    transform: translateX(5px);
}

.feed-time {
    min-width: 100px;
    color: var(--text-muted);
    font-size: 0.9rem;
}

.feed-type {
    padding: 5px 12px;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 800;
    white-space: nowrap;
}

.feed-type.critical {
    background: rgba(255, 71, 71, 0.2);
    color: #ff8a8a;
}

.feed-type.high {
    background: rgba(255, 209, 102, 0.2);
    color: #ffd783;
}

.feed-type.medium {
    background: rgba(74, 222, 128, 0.2);
    color: #9af0b7;
}

.feed-item p {
    flex: 1;
}

.feed-location {
    color: var(--primary);
    font-weight: 700;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 40px;
    color: var(--text-muted);
    line-height: 1.9;
    font-size: 1.1rem;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 25px;
}

.feature-box {
    background: var(--card);
    border: 2px solid var(--border);
    border-radius: 18px;
    padding: 30px;
    text-align: center;
    transition: all 0.3s;
}

.feature-box:hover {
    transform: translateY(-8px);
    border-color: var(--primary);
}

.feature-box span {
    font-size: 2.5rem;
    display: block;
    margin-bottom: 15px;
}

.feature-box h4 {
    margin-bottom: 10px;
    font-size: 1.2rem;
}

.feature-box p {
    color: var(--text-muted);
}

.footer {
    padding: 40px 0;
    border-top: 1px solid var(--border);
}

.footer-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    color: var(--text-muted);
}

.footer-links {
    display: flex;
    gap: 25px;
}

.footer-links a {
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.3s;
}

.footer-links a:hover {
    color: var(--primary);
}

@media (max-width: 900px) {
    .hero-grid {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-buttons,
    .hero-stats {
        justify-content: center;
    }

    .nav-links {
        display: none;
    }

    .social-links {
        flex-direction: column;
    }

    .social-btn {
        width: 100%;
        justify-content: center;
    }

    .footer-content {
        flex-direction: column;
        text-align: center;
    }
}

@media (max-width: 600px) {
    .hero-title {
        font-size: 1.8rem;
    }

    .section-title {
        font-size: 1.8rem;
    }

    .hero-stats {
        flex-direction: column;
        gap: 15px;
    }
}
