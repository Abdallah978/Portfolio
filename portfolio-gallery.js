// ====== Portfolio Gallery JavaScript ======

// ====== Theme Toggle Functionality ======
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme immediately to prevent flash
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
    }
    
    // Theme toggle functionality
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Add smooth transition
            body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            
            // Apply new theme
            body.setAttribute('data-theme', newTheme);
            
            // Save preference
            localStorage.setItem('theme', newTheme);
            
            // Animate button with scale effect
            themeToggle.style.transform = 'translateY(-50%) scale(0.8) rotate(180deg)';
            
            setTimeout(() => {
                themeToggle.style.transform = 'translateY(-50%) scale(1) rotate(0deg)';
                // Remove transition after animation completes
                body.style.transition = '';
            }, 300);
            
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
                left: 50%;
                top: 50%;
                width: 60px;
                height: 60px;
                margin-left: -30px;
                margin-top: -30px;
            `;
            
            themeToggle.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    }
    
    // Handle system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    function handleSystemThemeChange(e) {
        // Only auto-change if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            const systemTheme = e.matches ? 'dark' : 'light';
            body.setAttribute('data-theme', systemTheme);
        }
    }
    
    mediaQuery.addListener(handleSystemThemeChange);
    
    // Initial check for system preference if no saved preference
    if (!localStorage.getItem('theme')) {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light';
        body.setAttribute('data-theme', systemTheme);
    }
    
    // Add CSS animation for ripple effect
    if (!document.getElementById('ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
});

// ====== Navigation Functionality ======
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger?.contains(e.target) && !navMenu?.contains(e.target)) {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        }
    });
});

// ====== Back to Top Button ======
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        function toggleBackToTop() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }

        window.addEventListener('scroll', toggleBackToTop);

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ====== Project Categories Filter ======
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (categoryBtns.length > 0 && projectCards.length > 0) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.getAttribute('data-category');

                // Update active button
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                // Filter projects
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
});

// ====== Project Modal Functionality ======
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTech = document.getElementById('modalTech');
    const modalDemo = document.getElementById('modalDemo');
    const modalCode = document.getElementById('modalCode');
    const closeModal = document.querySelector('.close-modal');
    const projectCards = document.querySelectorAll('.project-card');

    if (modal && projectCards.length > 0) {
        // Open modal
        projectCards.forEach(card => {
            card.addEventListener('click', function() {
                const imageSrc = card.querySelector('.project-image img').src;
                const title = card.querySelector('.project-title').textContent;
                const description = card.querySelector('.project-description').textContent;
                const techTags = card.querySelectorAll('.tech-tag');
                const demoLink = card.getAttribute('data-demo');
                const codeLink = card.getAttribute('data-code');

                modalImage.src = imageSrc;
                modalTitle.textContent = title;
                modalDescription.textContent = description;

                // Clear and populate tech tags
                modalTech.innerHTML = '';
                techTags.forEach(tag => {
                    const newTag = tag.cloneNode(true);
                    modalTech.appendChild(newTag);
                });

                // Set links
                if (demoLink) {
                    modalDemo.href = demoLink;
                    modalDemo.style.display = 'inline-flex';
                } else {
                    modalDemo.style.display = 'none';
                }

                if (codeLink) {
                    modalCode.href = codeLink;
                    modalCode.style.display = 'inline-flex';
                } else {
                    modalCode.style.display = 'none';
                }

                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        // Close modal
        function closeProjectModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        closeModal?.addEventListener('click', closeProjectModal);

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeProjectModal();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeProjectModal();
            }
        });
    }
});

// ====== Stats Animation ======
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');

    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const current = parseInt(stat.textContent);
            const increment = target / 100;

            if (current < target) {
                stat.textContent = Math.ceil(current + increment);
                setTimeout(animateStats, 20);
            }
        });
    }

    // Trigger animation when stats come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    });

    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        observer.observe(statsContainer);
    }
});

// ====== Initialize Gallery ======
console.log('🎨 Portfolio Gallery loaded successfully!');
console.log('💡 Theme toggle enabled');
console.log('📱 Responsive design active');
