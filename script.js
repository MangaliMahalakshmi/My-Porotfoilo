document.addEventListener('DOMContentLoaded', () => {
    // Typing animation
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: [
                "Full-Stack Architect",
                "Cloud Alchemist", 
                "Code Poet",
                "Digital Craftsman",
                "System Sculptor"
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1800,
            loop: true,
            cursorChar: '▋'
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Skill bar animation
    const skillBars = document.querySelectorAll('.skill-bar');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.dataset.level;
                entry.target.style.width = `${level}%`;
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.7 });

    skillBars.forEach(bar => skillObserver.observe(bar));

    // Current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            const filter = button.dataset.filter;
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});