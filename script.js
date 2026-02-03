// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll('.card, .result-item, .format-card, .bonus-card, .timeline-item, .target-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Smooth scroll for anchor links
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

    // Parallax effect for hero background
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        });
    }

    // Update badge based on program status
    const badge = document.querySelector('.hero-badge');
    if (badge) {
        const programStart = new Date('2026-02-01T00:00:00');
        const firstClass = new Date('2026-02-04T20:00:00');
        const now = new Date();

        if (now >= programStart && now < firstClass) {
            badge.innerHTML = '<span class="pulse"></span>Програма стартувала! Перше заняття 4 лютого';
        } else if (now >= firstClass) {
            badge.innerHTML = '<span class="pulse"></span>Програма активна';
        }
    }
});
