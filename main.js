// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

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
