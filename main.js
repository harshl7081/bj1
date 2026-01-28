// Header scroll effect with Smart Hide/Show (Apple style)
const header = document.querySelector('.header');
let lastScrollTop = 0;
const delta = 5;
const navbarHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    let st = window.scrollY; // Removed pageYOffset for modern standard

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, hide it
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        header.classList.add('nav-hidden');
    } else {
        // Scroll Up
        if (st + window.innerHeight < document.body.scrollHeight) {
            header.classList.remove('nav-hidden');
        }
    }

    // Visual style for scrolled state (transparency/shadow)
    if (st > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScrollTop = st;
}, { passive: true });

const heroContent = document.querySelector('.hero-content');
const heroMedia = document.querySelector('.hero-img, .hero-video');

window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    if (heroMedia) {
        heroMedia.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
    }
});

// Smooth reveal for sections (if any are added later)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal, section').forEach(el => {
    observer.observe(el);
});

console.log('Beautiful Jewel - Crafted for the Extraordinary');
