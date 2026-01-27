document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
        const isExpanded = navList.classList.contains('active');
        mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // --- Header Scroll Effect ---
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // --- Hero Headline Animation ---
    const animTexts = document.querySelectorAll('.hero-anim-text');
    const delayPerItem = 1100; // 0.8s duration + 0.3s pause

    animTexts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('visible');
        }, index * delayPerItem);
    });
});
