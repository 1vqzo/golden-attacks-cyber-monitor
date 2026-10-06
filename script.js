// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate threat bars on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.6s ease forwards';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.threat-bar, .country-card, .stat-box, .feed-item').forEach(el => {
    observer.observe(el);
});

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Live update simulation
function updateThreatStats() {
    const numbers = document.querySelectorAll('.threat-number');
    numbers.forEach(num => {
        const current = parseInt(num.textContent);
        const change = Math.floor(Math.random() * 100) - 50;
        const newVal = Math.max(0, current + change);
        num.textContent = newVal.toLocaleString();
    });
}

// Update stats every 30 seconds
setInterval(updateThreatStats, 30000);

// Add glow effect to mouse movement
const glows = document.querySelectorAll('.glow');
if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        glows.forEach((glow, index) => {
            if (index === 0) {
                glow.style.transform = `translate(${e.clientX * 0.1}px, ${e.clientY * 0.1}px)`;
            } else {
                glow.style.transform = `translate(${e.clientX * -0.1}px, ${e.clientY * -0.1}px)`;
            }
        });
    });
}

console.log('© Golden Attacks By mo7a - Cyber Threat Monitor Loaded');
