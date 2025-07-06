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

// ====== ULTRA AGGRESSIVE Mobile Loading Screen Handler ======
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const isMobile = window.innerWidth <= 768 || 
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0;
    
    console.log('🔧 ULTRA AGGRESSIVE Loading Screen Handler - Mobile:', isMobile);
    console.log('📱 Touch device:', 'ontouchstart' in window);
    console.log('🖐️ Touch points:', navigator.maxTouchPoints);
    
    // NUCLEAR OPTION - Immediate removal function
    function nukeLoadingScreen() {
        const screen = document.getElementById('loading-screen');
        if (screen) {
            console.log('💥 NUKING loading screen');
            screen.style.cssText = 'display: none !important; opacity: 0 !important; visibility: hidden !important; z-index: -9999 !important; transform: scale(0) !important; pointer-events: none !important;';
            screen.classList.add('hidden');
            screen.remove();
            return true;
        }
        return false;
    }
    
    // Enhanced loading screen handler for desktop
    function hideLoadingScreen() {
        if (loadingScreen) {
            console.log('👋 Hiding loading screen (desktop)');
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 0.3s ease-out';
            loadingScreen.style.transform = 'scale(0.9)';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                loadingScreen.classList.add('hidden');
            }, 300);
        }
    }

    // Multiple ULTRA AGGRESSIVE fallback methods for mobile
    let loadingHidden = false;
    
    // MOBILE INSTANT NUKE - Hide after 25ms for mobile
    if (isMobile) {
        console.log('📱 MOBILE INSTANT NUKE ACTIVATED');
        
        // INSTANT nuke (25ms)
        setTimeout(() => {
            if (!loadingHidden && nukeLoadingScreen()) {
                console.log('📱 Mobile INSTANT nuke (25ms)');
                loadingHidden = true;
            }
        }, 25);
        
        // ULTRA FAST nuke (100ms)
        setTimeout(() => {
            if (!loadingHidden && nukeLoadingScreen()) {
                console.log('📱 Mobile ULTRA FAST nuke (100ms)');
                loadingHidden = true;
            }
        }, 100);
        
        // SUPER FAST nuke (250ms)
        setTimeout(() => {
            if (!loadingHidden && nukeLoadingScreen()) {
                console.log('📱 Mobile SUPER FAST nuke (250ms)');
                loadingHidden = true;
            }
        }, 250);
        
        // Standard nuke (500ms)
        setTimeout(() => {
            if (!loadingHidden && nukeLoadingScreen()) {
                console.log('📱 Mobile standard nuke (500ms)');
                loadingHidden = true;
            }
        }, 500);
    }
    
    // Method 1: Standard window load event (with immediate mobile override)
    window.addEventListener('load', function() {
        if (!loadingHidden) {
            console.log('🏁 Window loaded');
            loadingHidden = true;
            if (isMobile) {
                nukeLoadingScreen(); // Immediate nuke for mobile
            } else {
                setTimeout(hideLoadingScreen, 800);
            }
        }
    });
    
    // Method 2: Ultra aggressive fallback timer (much faster for mobile)
    setTimeout(() => {
        if (!loadingHidden) {
            console.log('⏰ Ultra aggressive fallback timer activated');
            loadingHidden = true;
            if (isMobile) {
                nukeLoadingScreen();
            } else {
                hideLoadingScreen();
            }
        }
    }, isMobile ? 600 : 3000); // 0.6s for mobile, 3s for desktop
    
    // Method 3: Document readyState check (immediate for mobile)
    if (document.readyState === 'complete') {
        setTimeout(() => {
            if (!loadingHidden) {
                console.log('📄 Document ready state complete');
                loadingHidden = true;
                if (isMobile) {
                    nukeLoadingScreen();
                } else {
                    hideLoadingScreen();
                }
            }
        }, isMobile ? 50 : 1000);
    }
    
    // Method 4: MOBILE NUCLEAR PROTOCOL - Continuous destruction
    if (isMobile) {
        let nuclearAttempts = 0;
        const nuclearInterval = setInterval(() => {
            nuclearAttempts++;
            const stillExists = document.getElementById('loading-screen');
            if (stillExists) {
                console.log(`🚨 MOBILE NUCLEAR PROTOCOL #${nuclearAttempts}: Destroying loading screen`);
                nukeLoadingScreen();
            }
            
            // Stop after 40 attempts (4 seconds max)
            if (nuclearAttempts >= 40) {
                clearInterval(nuclearInterval);
                console.log('💥 Nuclear protocol completed - 40 attempts');
            }
        }, 100); // Every 100ms for 4 seconds
    }
    
    // Method 5: ULTIMATE FAILSAFE
    setTimeout(() => {
        const finalCheck = document.getElementById('loading-screen');
        if (finalCheck) {
            console.log('🔥 ULTIMATE FAILSAFE: Final loading screen destruction');
            finalCheck.remove();
        }
    }, isMobile ? 1000 : 4000);
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
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
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
    const targetValue = element.getAttribute('data-target');
    const target = parseInt(targetValue);
    const hasPlus = element.textContent.includes('+');
    const speed = 50;
    const increment = target / speed;
    let count = 0;

    const updateCount = () => {
        if (count < target) {
            count += increment;
            const currentValue = Math.floor(count);
            element.textContent = hasPlus ? currentValue + '+' : currentValue;
            setTimeout(updateCount, 20);
        } else {
            element.textContent = hasPlus ? target + '+' : target;
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

    console.log('Certificate tabs initialized:', tabButtons.length, 'buttons,', tabContents.length, 'contents');

    // Ensure academic tab is visible initially
    const academicTab = document.getElementById('academic');
    const mainDegree = document.querySelector('.main-degree');
    
    if (academicTab) {
        academicTab.style.display = 'block';
        academicTab.style.visibility = 'visible';
        academicTab.style.opacity = '1';
        console.log('Academic tab visibility ensured on load');
    }
    
    if (mainDegree) {
        mainDegree.style.display = 'block';
        mainDegree.style.visibility = 'visible';
        mainDegree.style.opacity = '1';
        console.log('Main degree visibility ensured on load');
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            console.log('Switching to tab:', tabId);

            // Update active button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Show corresponding content
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
                if (content.id === tabId) {
                    setTimeout(() => {
                        content.style.display = 'block';
                        content.classList.add('active');
                        
                        // Special handling for academic tab
                        if (tabId === 'academic') {
                            const mainDegreeElement = content.querySelector('.main-degree');
                            if (mainDegreeElement) {
                                mainDegreeElement.style.display = 'block';
                                mainDegreeElement.style.visibility = 'visible';
                                mainDegreeElement.style.opacity = '1';
                                mainDegreeElement.style.animation = 'fadeInUp 0.8s ease-out';
                                console.log('Academic certificate enhanced');
                            }
                        }
                    }, 150);
                }
            });
        });
    });
    
    // Auto-activate academic tab if none is active
    setTimeout(() => {
        const activeTab = document.querySelector('.tab-content.active');
        if (!activeTab) {
            const academicButton = document.querySelector('[data-tab="academic"]');
            if (academicButton) {
                academicButton.click();
                console.log('Auto-activated academic tab');
            }
        }
    }, 500);
});

// ====== Contact Form ======
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
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
    }
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

    if (backToTopButton) {
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
    }
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

// ====== Initialize All Components ======
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio website loaded successfully!');
    console.log('📧 Contact: abdullahmohammedhamad24@gmail.com');
    console.log('🔗 LinkedIn: https://www.linkedin.com/in/abdullah-mohammed-5376a4204');
    console.log('📱 Mobile optimizations: ULTRA AGGRESSIVE mode activated');
});
