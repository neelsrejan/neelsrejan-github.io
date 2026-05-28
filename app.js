document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Navigation Logic
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    function switchSection(targetId) {
        // Remove active class from all links and sections
        navLinks.forEach(link => {
            link.classList.remove('active');
            // If the link's href matches the target, add active
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });

        sections.forEach(section => {
            section.classList.remove('active-section');
        });

        // Show target section
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.classList.add('active-section');
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only prevent default if it's an internal hash link
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                switchSection(href);
            }
        });
    });

    // Handle hash in URL on load
    if (window.location.hash) {
        switchSection(window.location.hash);
    }
});
