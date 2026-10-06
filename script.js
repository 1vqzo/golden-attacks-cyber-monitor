:root {
  --bg: #06111d;
  --bg2: #0b1a2d;
  --bg3: #101d34;
  --gold: #d4af37;
  --gold2: #f0c14b;
  --cyan: #67e8f9;
  --danger: #ff4d4d;
  --warning: #ffb703;
  --success: #4ade80;
  --text: #edf4ff;
  --muted: #b6c7e1;
  --border: rgba(212,175,55,.25);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: "Cairo", "Inter", sans-serif;
  background: linear-gradient(135deg, var(--bg), var(--bg2), var(--bg3));
  color: var(--text);
  overflow-x: hidden;
}

a { text-decoration: none; }
button, input, select, textarea { font: inherit; }

.container {
  width: min(1200px, calc(100% - 28px));
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.grid-overlay {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
  background-size: 42px 42px;
}

.bg-glow {
  position: fixed;
  z-index: 0;
  border-radius: 50%;
  filter: blur(120px);
  opacity: .42;
  pointer-events: none;
}
.glow-1 { width: 420px; height: 420px; left: 5%; top: 10%; background: rgba(212,175,55,.22); }
.glow-2 { width: 500px; height: 500px; right: 8%; bottom: 8%; background: rgba(103,232,249,.15); }
.glow-3 { width: 300px; height: 300px; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(168,85,247,.12); }

.navbar {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(12px);
  background: rgba(5,10,18,.82);
  border-bottom: 1px solid var(--border);
}
.nav-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 76px;
  gap: 18px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.brand-mark {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--gold), var(--gold2));
  color: #111;
  display: grid;
  place-items: center;
  font-family: "Orbitron", sans-serif;
  font-weight: 900;
  box-shadow: 0 0 24px rgba(212,175,55,.35);
}
.brand-name {
  font-family: "Orbitron", sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: .04em;
}
.brand-sub { font-size: .78rem; color: var(--muted); }

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
}
.nav-links a {
  color: var(--muted);
  font-weight: 600;
  transition: .2s ease;
}
.nav-links a:hover { color: var(--gold); }

.nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
.icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,.04);
  color: var(--text);
  border: 1px solid var(--border);
  cursor: pointer;
}
.lang-switch {
  display: flex;
  align-items: center;
  background: rgba(255,255,255,.04);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 4px;
}
.lang {
  border: none;
  background: transparent;
  color: var(--muted);
  border-radius: 999px;
  padding: 7px 12px;
  font-weight: 700;
  cursor: pointer;
}
.lang.active {
  background: linear-gradient(135deg, var(--gold), var(--gold2));
  color: #111;
}

.hero { padding: 70px 0 30px; }
.hero-grid {
  display: grid;
  align-items: center;
  grid-template-columns: 1.2fr .8fr;
  gap: 32px;
}
.eyebrow {
  display: inline-block;
  margin-bottom: 18px;
  padding: 7px 14px;
  border-radius: 999px;
  background: rgba(212,175,55,.12);
  color: var(--gold);
  font-weight: 800;
  letter-spacing: .08em;
  border: 1px solid var(--border);
}
.hero-content h1 {
  margin: 0 0 18px;
  font-family: "Orbitron", sans-serif;
  font-size: clamp(2.7rem, 6vw, 4.2rem);
  line-height: 1.08;
  background: linear-gradient(135deg, var(--gold), var(--cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-content p {
  color: var(--muted);
  font-size: 1.12rem;
  line-height: 1.9;
  margin: 0 0 28px;
  max-width: 620px;
}
.hero-metrics {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.hero-metrics div { display: flex; flex-direction: column; }
.hero-metrics strong {
  color: var(--gold);
  font-size: 1.8rem;
}
.hero-metrics span { color: var(--muted); font-size: .85rem; }

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.primary-btn, .ghost-btn {
  border-radius: 14px;
  padding: 15px 26px;
  font-weight: 800;
  cursor: pointer;
  transition: .25s ease;
}
.primary-btn {
  background: linear-gradient(135deg, var(--gold), var(--gold2));
  color: #111;
  border: none;
  box-shadow: 0 10px 25px rgba(212,175,55,.28);
}
.primary-btn:hover { transform: translateY(-2px); }
.ghost-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
}

.profile-card {
  background: rgba(15, 23, 42, .8);
  border: 1px solid var(--border);
  border-radius: 30px;
  padding: 18px;
  box-shadow: 0 30px 60px rgba(0,0,0,.25);
}
.profile-card img {
  display: block;
  width: 100%;
  max-width: 410px;
  border-radius: 22px;
  border: 2px solid rgba(212,175,55,.25);
  margin: 0 auto 18px;
}
.profile-meta { text-align: center; }
.profile-meta h3 { margin: 0 0 4px; font-size: 2rem; }
.profile-meta span { color: var(--muted); letter-spacing: .12em; }

.social-bar {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 22px 0;
}
.social-row {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}
.social-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 150px;
  padding: 10px 18px;
  border-radius: 999px;
  color: white;
  font-weight: 700;
  border: 1px solid rgba(255,255,255,.08);
}
.ig { background: linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4); }
.fb { background: linear-gradient(135deg, #0866ff, #0b5bd3); }
.sc { background: linear-gradient(135deg, #fffc00, #f7d200); color: #111; }
.mail { background: linear-gradient(135deg, var(--gold), var(--gold2)); color: #111; }

.section {
  padding: 80px 0;
  border-bottom: 1px solid var(--border);
}
.section h2 {
  margin: 0 0 40px;
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.9rem);
}

.threat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 22px;
}
.threat-box {
  background: rgba(255,255,255,.02);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 26px 20px;
  text-align: center;
  transition: .25s ease;
}
.threat-box:hover { transform: translateY(-4px); }
.threat-top {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 12px;
}
.tag {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: .75rem;
  font-weight: 800;
}
.tag.critical { background: rgba(255,77,77,.15); color: #ff8a8a; }
.tag.high { background: rgba(255,183,3,.15); color: #ffd166; }
.tag.medium { background: rgba(74,222,128,.15); color: #82f0ad; }
.tag.low { background: rgba(103,232,249,.15); color: #95ebf9; }

.pulse {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--danger);
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: .5; }
}
.threat-number {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--gold);
  margin-bottom: 8px;
}
.threat-box p { margin: 0; color: var(--muted); }

.countries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
}
.country-card {
  background: rgba(255,255,255,.02);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 24px 20px;
  transition: .25s ease;
}
.country-card:hover { transform: translateY(-4px); }
.country-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 2rem;
}
.rank {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--gold);
  color: #111;
  font-weight: 900;
  font-size: .85rem;
}
.country-card h3 { margin: 0 0 8px; }
.country-card p {
  margin: 0 0 12px;
  color: var(--gold);
  font-weight: 700;
}
.progress {
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: rgba(255,255,255,.08);
  overflow: hidden;
}
.progress span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--gold), var(--cyan));
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 22px;
}
.stat-card {
  background: rgba(255,255,255,.02);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 24px 18px;
  text-align: center;
  transition: .25s ease;
}
.stat-card:hover { transform: translateY(-4px); }
.ring {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin: 0 auto 16px;
  display: grid;
  place-items: center;
  font-weight: 900;
  color: var(--gold);
  background: conic-gradient(var(--gold) 0deg calc(var(--value) * 3.6deg), rgba(255,255,255,.05) 0deg);
}
.ring-28 { --value: 28; }
.ring-24 { --value: 24; }
.ring-19 { --value: 19; }
.ring-16 { --value: 16; }
.ring-13 { --value: 13; }
.stat-card h3 { margin: 0 0 8px; }
.stat-card p { margin: 0; color: var(--muted); }

.feed-list { max-width: 980px; margin: 0 auto; }
.feed-item {
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(255,255,255,.02);
  border: 1px solid var(--border);
  border-left: 4px solid var(--warning);
  border-radius: 16px;
  padding: 18px 20px;
  margin-bottom: 14px;
}
.feed-item.critical-item { border-left-color: var(--danger); }
.feed-item.high-item { border-left-color: var(--warning); }
.feed-item.medium-item { border-left-color: var(--success); }
.feed-item span { color: var(--muted); }
.badge {
  padding: 5px 12px;
  border-radius: 999px;
  font-size: .74rem;
  font-weight: 800;
}
.badge.critical { background: rgba(255,77,77,.12); color: #ff8a8a; }
.badge.high { background: rgba(255,183,3,.12); color: #ffd166; }
.badge.medium { background: rgba(74,222,128,.12); color: #9af0b7; }
.feed-item p { flex: 1; margin: 0; line-height: 1.8; }
.feed-item strong { color: var(--gold); }

.about-box { max-width: 900px; margin: 0 auto; text-align: center; }
.about-box p { color: var(--muted); line-height: 1.9; font-size: 1.08rem; }
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 36px;
}
.feature-card {
  background: rgba(255,255,255,.02);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 24px 18px;
}
.feature-card span { font-size: 2.4rem; display: block; margin-bottom: 12px; }
.feature-card h4 { margin: 0 0 8px; }
.feature-card p { margin: 0; color: var(--muted); }

.footer {
  padding: 30px 0 50px;
}
.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  color: var(--muted);
  border-top: 1px solid var(--border);
  padding-top: 22px;
}
.footer-links { display: flex; gap: 20px; }
.footer-links a { color: var(--muted); }

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.7);
  display: grid;
  place-items: center;
  z-index: 100;
}
.modal.hidden { display: none; }
.modal-box {
  position: relative;
  width: min(520px, calc(100% - 30px));
  background: rgba(9,17,28,.96);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 28px 24px 22px;
}
.modal-close {
  position: absolute;
  top: 12px;
  right: 14px;
  background: transparent;
  border: none;
  color: var(--text);
  font-size: 2rem;
  cursor: pointer;
}
.modal-box h3 { margin: 0 0 18px; font-size: 1.7rem; }
.modal-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin-bottom: 18px;
}
.modal-grid label { display: block; margin-bottom: 8px; font-weight: 700; }
.modal-grid select, .contact-form input, .contact-form textarea {
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.04);
  color: var(--text);
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.save-btn { margin-top: 8px; width: 100%; }

.intro-screen {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #06111d 0%, #0b1a2d 50%, #101d34 100%);
  z-index: 500;
  display: grid;
  place-items: center;
}
.intro-box {
  text-align: center;
  max-width: 540px;
  padding: 40px 28px;
}
.intro-badge {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(212,175,55,.15);
  border: 1px solid rgba(212,175,55,.3);
  border-radius: 999px;
  color: var(--gold);
  font-weight: 700;
  margin-bottom: 18px;
}
.intro-box h1 {
  margin: 20px 0 18px;
  font-size: 2.6rem;
  color: var(--text);
  font-family: "Cairo", sans-serif;
}
.intro-box p {
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.9;
  margin-bottom: 30px;
}
.hidden { display: none !important; }

@media (max-width: 820px) {
  .nav-links { display: none; }
  .hero-grid { grid-template-columns: 1fr; text-align: center; }
  .hero-content p { margin-inline: auto; }
  .hero-metrics { justify-content: center; }
  .hero-actions { justify-content: center; }
  .social-row { flex-direction: column; }
  .social-link { width: 100%; }
}

@media (max-width: 520px) {
  .section h2 { font-size: 2rem; }
  .modal-grid { grid-template-columns: 1fr; }
  .feed-item { flex-wrap: wrap; }
  .footer-wrap { justify-content: center; text-align: center; }
  .nav-wrap { justify-content: center; flex-wrap: wrap; }
}




































































































































































