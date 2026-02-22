// ═══════════════════════════════════════════════════════
// BEAUTIFUL JEWEL — Premium Interaction Engine
// ═══════════════════════════════════════════════════════

// --- Loading Screen ---
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1200);
    }
});

// --- Custom Cursor ---
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

if (cursorDot && cursorRing) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    // Smooth ring follow
    function animateRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .collection-card, .gallery-item, .video-item, .philosophy-item, .value-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
    });
}

// --- Smart Header Hide/Show ---
const header = document.getElementById('mainHeader') || document.querySelector('.header');
if (header) {
    let lastScrollTop = 0;
    const delta = 8;

    window.addEventListener('scroll', () => {
        const st = window.scrollY;

        if (Math.abs(lastScrollTop - st) <= delta) return;

        if (st > lastScrollTop && st > 100) {
            header.classList.add('nav-hidden');
        } else {
            header.classList.remove('nav-hidden');
        }

        if (st > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = st;
    }, { passive: true });
}

// --- Intersection Observer for Reveal Animations ---
const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal, .text-reveal').forEach(el => {
    revealObserver.observe(el);
});

// --- Smooth Parallax on Hero + Video Pause/Play ---
const heroVideo = document.querySelector('.hero-video');
const heroContent = document.querySelector('.hero-content');

if (heroVideo || heroContent) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroHeight = window.innerHeight;

        if (scrolled < heroHeight) {
            const progress = scrolled / heroHeight;

            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - progress * 1.2;
            }
        }
    }, { passive: true });
}

// Pause hero video when out of view, resume when back in view
if (heroVideo) {
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroVideo.play();
            } else {
                heroVideo.pause();
            }
        });
    }, { threshold: 0.1 });
    videoObserver.observe(heroVideo);
}

// --- Magnetic Effect on Buttons ---
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// --- Counter Animation for Stats ---
const counters = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const text = target.textContent;
            const match = text.match(/(\d+)/);

            if (match) {
                const endValue = parseInt(match[1]);
                const suffix = text.replace(match[1], '');
                let current = 0;
                const duration = 2000;
                const stepTime = duration / endValue;
                const step = Math.max(1, Math.floor(endValue / 60));

                const timer = setInterval(() => {
                    current += step;
                    if (current >= endValue) {
                        current = endValue;
                        clearInterval(timer);
                    }
                    target.textContent = current + suffix;
                }, stepTime * step);
            }

            counterObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// --- Image Lazy Loading with Fade ---
document.querySelectorAll('.gallery-item img, .card-img-wrapper img').forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
});

console.log('%c✦ Beautiful Jewel — Crafted for the Extraordinary ✦', 'color: #c9a96e; font-size: 14px; font-weight: 300; font-family: Georgia, serif;');
