// ====== Utility Functions ======
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ====== Loading Screen ======
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after everything is loaded
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000);
    });
});

// ====== Navigation ======
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', throttle(function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 100));

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Active link highlighting
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`a[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', throttle(updateActiveLink, 100));
    updateActiveLink(); // Initial call
});

// ====== Typing Animation ======
class TypingEffect {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.typeSpeed = options.typeSpeed || 100;
        this.deleteSpeed = options.deleteSpeed || 50;
        this.delayBetweenTexts = options.delayBetweenTexts || 2000;
        
        this.init();
    }
    
    init() {
        if (this.element && this.texts.length > 0) {
            this.type();
        }
    }
    
    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        let typeSpeed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
        
        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = this.delayBetweenTexts;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
    
    updateTexts(newTexts) {
        this.texts = newTexts;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.querySelector('.typing-text');
    const defaultTexts = [
        'مختص موارد بشرية',
        'مطوّر ويب متقدم',
        'خبير تسويق رقمي',
        'متخصص أمن سيبراني',
        'مطوّر تطبيقات ذكية',
        'خبير نظم معلومات جغرافية'
    ];
      if (typingText) {
        window.typingEffect = new TypingEffect(typingText, defaultTexts);
    }
});

// ====== Scroll Animations ======
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate counters
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.skill-category, .portfolio-item, .certificate-card, .stat-item, .contact-method, .detail-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Observe counter elements specifically
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => observer.observe(counter));
});

// ====== Counter Animation ======
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const speed = 50;
    const increment = target / speed;
    let count = 0;

    const updateCount = () => {
        if (count < target) {
            count += increment;
            element.textContent = Math.floor(count);
            setTimeout(updateCount, 20);
        } else {
            element.textContent = target;
        }
    };

    updateCount();
}

// ====== Portfolio Filter ======
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// ====== Certificate Tabs ======
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Show corresponding content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    setTimeout(() => {
                        content.classList.add('active');
                    }, 150);
                }
            });
        });
    });
});

// ====== Contact Form ======
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
        submitButton.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            // Create mailto link
            const subject = encodeURIComponent(`رسالة من ${formObject.name} - ${formObject.subject}`);
            const body = encodeURIComponent(
                `الاسم: ${formObject.name}\n` +
                `البريد الإلكتروني: ${formObject.email}\n` +
                `الشركة: ${formObject.company || 'غير محدد'}\n` +
                `نوع المشروع: ${formObject.subject}\n` +
                `الميزانية: ${formObject.budget || 'غير محدد'}\n\n` +
                `الرسالة:\n${formObject.message}`
            );

            const mailtoLink = `mailto:abdullahmohammedhamad24@gmail.com?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;

            // Reset form
            contactForm.reset();
            
            // Show success message
            showNotification('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.', 'success');
            
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 1500);
    });
});

// ====== Notification System ======
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 350px;
        font-family: var(--font-family);
    `;

    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;

    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        margin-left: 0.5rem;
        padding: 0.25rem;
        border-radius: 0.25rem;
        transition: background-color 0.2s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });

    // Auto close
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// ====== Back to Top Button ======
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', throttle(function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }, 100));

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ====== Smooth Scrolling for Navigation Links ======
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ====== Parallax Effect for Hero Section ======
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    window.addEventListener('scroll', throttle(function() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (scrolled < heroSection.offsetHeight) {
            heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    }, 16)); // ~60fps
});

// ====== Enhanced Skill Cards Interaction ======
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-category');

    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ====== Portfolio Item Hover Effects ======
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        const overlay = item.querySelector('.portfolio-overlay');
        const image = item.querySelector('.portfolio-image img');

        item.addEventListener('mouseenter', function() {
            overlay.style.opacity = '1';
            image.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', function() {
            overlay.style.opacity = '0';
            image.style.transform = 'scale(1)';
        });
    });
});

// ====== Performance Optimizations ======
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Preload critical resources
    const preloadLinks = [
        'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
    ];

    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
    });
});

// ====== Error Handling ======
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // Optional: Send error to analytics or logging service
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
    // Optional: Send error to analytics or logging service
});

// ====== Analytics Integration Ready ======
function trackEvent(eventName, eventData = {}) {
    // Google Analytics 4 event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Console log for development
    console.log('Event tracked:', eventName, eventData);
}

// Track important interactions
document.addEventListener('DOMContentLoaded', function() {
    // Track portfolio item views
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            trackEvent('portfolio_item_click', {
                item_index: index,
                item_category: item.getAttribute('data-category')
            });
        });
    });

    // Track contact form submissions
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            trackEvent('contact_form_submit', {
                form_id: 'main_contact_form'
            });
        });
    }

    // Track external link clicks
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('external_link_click', {
                link_url: this.href,
                link_text: this.textContent.trim()
            });
        });
    });
});

// ====== Accessibility Enhancements ======
document.addEventListener('DOMContentLoaded', function() {
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });

    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#about';
    skipLink.textContent = 'تخطي إلى المحتوى الرئيسي';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10001;
        transition: top 0.3s ease;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.prepend(skipLink);
});

// ====== Print Optimization ======
window.addEventListener('beforeprint', function() {
    // Hide interactive elements before printing
    const hideOnPrint = document.querySelectorAll('.portfolio-overlay, .floating-elements, .back-to-top');
    hideOnPrint.forEach(el => {
        el.style.display = 'none';
    });
});

window.addEventListener('afterprint', function() {
    // Restore interactive elements after printing
    const showAfterPrint = document.querySelectorAll('.portfolio-overlay, .floating-elements, .back-to-top');
    showAfterPrint.forEach(el => {
        el.style.display = '';
    });
});

// ====== Theme Toggle (Dark/Light Mode) ======
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    if (!themeToggle) return;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme immediately
    body.setAttribute('data-theme', savedTheme);
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Apply new theme
        body.setAttribute('data-theme', newTheme);
        
        // Save preference
        localStorage.setItem('theme', newTheme);
        
        // Add button animation
        this.style.transform = 'translateY(-50%) scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'translateY(-50%) scale(1)';
        }, 200);
          console.log('Theme switched to:', newTheme);
    });
});

// ====== Initialize All Components ======
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio website loaded successfully!');
    console.log('📧 Contact: abdullahmohammedhamad24@gmail.com');
    console.log('🔗 LinkedIn: https://www.linkedin.com/in/abdullah-mohammed-5376a4204');
});
