// ===== Global Variables =====
let currentLanguage = 'en';
let currentTheme = 'light';
let isScrolling = false;
let animationFrameId = null;

// ===== DOM Elements =====
const elements = {
    loadingScreen: null,
    navbar: null,
    navToggle: null,
    navMenu: null,
    navLinks: null,
    langToggle: null,
    themeToggle: null,
    backToTop: null,
    modal: null,
    modalImage: null,
    closeModal: null,
    contactForm: null,
    filterBtns: null,
    projectCards: null,
    tabBtns: null,
    tabContents: null,
    skillBars: null,
    statNumbers: null,
    animateElements: null
};

// ===== Initialize Application =====
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    initializeTheme();
    initializeLanguage();
    initializeNavigation();
    initializeAnimations();
    initializeFilters();
    initializeTabs();
    initializeModal();
    initializeForm();
    initializeScrollEffects();
    initializeParallax();
    
    // Hide loading screen
    setTimeout(() => {
        if (elements.loadingScreen) {
            elements.loadingScreen.classList.add('hidden');
        }
    }, 1000);
});

// ===== Initialize DOM Elements =====
function initializeElements() {
    elements.loadingScreen = document.getElementById('loading-screen');
    elements.navbar = document.getElementById('navbar');
    elements.navToggle = document.getElementById('nav-toggle');
    elements.navMenu = document.getElementById('nav-menu');
    elements.navLinks = document.querySelectorAll('.nav-link');
    elements.langToggle = document.getElementById('lang-toggle');
    elements.themeToggle = document.getElementById('theme-toggle');
    elements.backToTop = document.getElementById('back-to-top');
    elements.modal = document.getElementById('certificate-modal');
    elements.modalImage = document.getElementById('modal-image');
    elements.closeModal = document.querySelector('.close');
    elements.contactForm = document.getElementById('contact-form');
    elements.filterBtns = document.querySelectorAll('.filter-btn');
    elements.projectCards = document.querySelectorAll('.project-card');
    elements.tabBtns = document.querySelectorAll('.tab-btn');
    elements.tabContents = document.querySelectorAll('.tab-content');
    elements.skillBars = document.querySelectorAll('.skill-progress');
    elements.statNumbers = document.querySelectorAll('.stat-number');
    elements.animateElements = document.querySelectorAll('.animate-on-scroll');
}

// ===== Theme Management =====
function initializeTheme() {
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    if (elements.themeToggle) {
        elements.themeToggle.addEventListener('click', toggleTheme);
    }
}

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (elements.themeToggle) {
        const icon = elements.themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// ===== Language Management =====
function initializeLanguage() {
    // Check for saved language preference or default to 'en'
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
    
    if (elements.langToggle) {
        elements.langToggle.addEventListener('click', toggleLanguage);
    }
}

function setLanguage(language) {
    currentLanguage = language;
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('language', language);
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-en][data-ar]');
    translatableElements.forEach(element => {
        const text = element.getAttribute(`data-${language}`);
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update language toggle button
    if (elements.langToggle) {
        const langText = elements.langToggle.querySelector('.lang-text');
        if (langText) {
            langText.textContent = language === 'en' ? 'عربي' : 'English';
        }
    }
}

function toggleLanguage() {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
}

// ===== Navigation Management =====
function initializeNavigation() {
    // Mobile menu toggle
    if (elements.navToggle && elements.navMenu) {
        elements.navToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Navigation links
    if (elements.navLinks) {
        elements.navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
        });
    }
    
    // Scroll spy
    window.addEventListener('scroll', handleScroll);
    
    // Back to top button
    if (elements.backToTop) {
        elements.backToTop.addEventListener('click', scrollToTop);
    }
}

function toggleMobileMenu() {
    if (elements.navMenu && elements.navToggle) {
        elements.navMenu.classList.toggle('active');
        elements.navToggle.classList.toggle('active');
    }
}

function handleNavClick(e) {
    const href = e.target.getAttribute('href');
    
    if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
            smoothScrollTo(offsetTop);
        }
        
        // Close mobile menu if open
        if (elements.navMenu && elements.navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
}

function handleScroll() {
    if (isScrolling) return;
    
    isScrolling = true;
    requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        // Update navbar
        if (elements.navbar) {
            if (scrollY > 50) {
                elements.navbar.classList.add('scrolled');
            } else {
                elements.navbar.classList.remove('scrolled');
            }
        }
        
        // Update back to top button
        if (elements.backToTop) {
            if (scrollY > 300) {
                elements.backToTop.classList.add('visible');
            } else {
                elements.backToTop.classList.remove('visible');
            }
        }
        
        // Update active navigation link
        updateActiveNavLink();
        
        isScrolling = false;
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 100; // Offset for better detection
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            elements.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function smoothScrollTo(targetY) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 800;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startY, distance, duration);
        window.scrollTo(0, run);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

function scrollToTop() {
    smoothScrollTo(0);
}

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

// ===== Animation Management =====
function initializeAnimations() {
    // Initialize Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animate skill bars
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
                
                // Animate stat numbers
                if (entry.target.classList.contains('about')) {
                    animateStatNumbers();
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    if (elements.animateElements) {
        elements.animateElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Observe sections for special animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

function animateSkillBars() {
    if (elements.skillBars) {
        elements.skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            }, index * 100);
        });
    }
}

function animateStatNumbers() {
    if (elements.statNumbers) {
        elements.statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            function updateCounter() {
                current += step;
                if (current < target) {
                    stat.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target + '+';
                }
            }
            
            updateCounter();
        });
    }
}

// ===== Project Filters =====
function initializeFilters() {
    if (elements.filterBtns && elements.projectCards) {
        elements.filterBtns.forEach(btn => {
            btn.addEventListener('click', handleFilterClick);
        });
    }
}

function handleFilterClick(e) {
    const filter = e.target.getAttribute('data-filter');
    
    // Update active filter button
    elements.filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Filter projects
    filterProjects(filter);
}

function filterProjects(filter) {
    if (!elements.projectCards) return;
    
    elements.projectCards.forEach((card, index) => {
        const category = card.getAttribute('data-category');
        const shouldShow = filter === 'all' || category === filter;
        
        setTimeout(() => {
            if (shouldShow) {
                card.style.display = 'block';
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                }, 300);
            }
        }, index * 50);
    });
}

// ===== Certificate Tabs =====
function initializeTabs() {
    if (elements.tabBtns && elements.tabContents) {
        elements.tabBtns.forEach(btn => {
            btn.addEventListener('click', handleTabClick);
        });
    }
}

function handleTabClick(e) {
    const tabId = e.target.getAttribute('data-tab');
    
    // Update active tab button
    elements.tabBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Show corresponding tab content
    elements.tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === tabId) {
            content.classList.add('active');
        }
    });
}

// ===== Modal Management =====
function initializeModal() {
    if (elements.closeModal) {
        elements.closeModal.addEventListener('click', closeModal);
    }
    
    if (elements.modal) {
        elements.modal.addEventListener('click', (e) => {
            if (e.target === elements.modal) {
                closeModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.modal && elements.modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openCertificate(imageSrc) {
    if (elements.modal && elements.modalImage) {
        elements.modalImage.src = imageSrc;
        elements.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    if (elements.modal) {
        elements.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Make openCertificate globally available
window.openCertificate = openCertificate;

// ===== Form Management =====
function initializeForm() {
    if (elements.contactForm) {
        elements.contactForm.addEventListener('submit', handleFormSubmit);
        
        // Add floating label functionality
        const formInputs = elements.contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', handleInputFocus);
            input.addEventListener('blur', handleInputBlur);
            input.addEventListener('input', handleInputChange);
        });
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(elements.contactForm);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (validateForm(data)) {
        // Show success message
        showNotification('Message sent successfully!', 'success');
        
        // Reset form
        elements.contactForm.reset();
        
        // Here you would normally send the data to your server
        console.log('Form data:', data);
    }
}

function validateForm(data) {
    const requiredFields = ['name', 'email', 'subject', 'message'];
    
    for (let field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            showNotification(`Please fill in the ${field} field.`, 'error');
            return false;
        }
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return false;
    }
    
    return true;
}

function handleInputFocus(e) {
    const formGroup = e.target.closest('.form-group');
    if (formGroup) {
        formGroup.classList.add('focused');
    }
}

function handleInputBlur(e) {
    const formGroup = e.target.closest('.form-group');
    if (formGroup && !e.target.value) {
        formGroup.classList.remove('focused');
    }
}

function handleInputChange(e) {
    const formGroup = e.target.closest('.form-group');
    if (formGroup) {
        if (e.target.value) {
            formGroup.classList.add('has-value');
        } else {
            formGroup.classList.remove('has-value');
        }
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
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
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1060;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
    
    // Manual close
    const closeBtn = notification.querySelector('.notification-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        });
    }
}

// ===== Scroll Effects =====
function initializeScrollEffects() {
    window.addEventListener('scroll', handleScrollEffects);
}

function handleScrollEffects() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    
    animationFrameId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            const heroHeight = hero.offsetHeight;
            const parallaxElements = hero.querySelectorAll('.parallax-element');
            
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-speed') || 0.5;
                const yPos = -(scrollY * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        }
        
        // Update progress indicators
        updateReadingProgress();
    });
}

function updateReadingProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Create or update progress bar
    let progressBar = document.querySelector('.reading-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: ${scrollPercent}%;
            height: 3px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            z-index: 1031;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    } else {
        progressBar.style.width = `${scrollPercent}%`;
    }
}

// ===== Parallax Effects =====
function initializeParallax() {
    // Add parallax class to elements that should have parallax effect
    const heroParticles = document.querySelector('.hero-particles');
    if (heroParticles) {
        heroParticles.classList.add('parallax-element');
        heroParticles.setAttribute('data-speed', '0.3');
    }
    
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.classList.add('parallax-element');
        heroBg.setAttribute('data-speed', '0.2');
    }
}

// ===== Typing Effect =====
function initializeTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const texts = [
        {
            en: "Full Stack Developer | AI Specialist | Cybersecurity Expert",
            ar: "مطور متكامل | متخصص ذكاء اصطناعي | خبير أمن سيبراني"
        }
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    
    function typeText() {
        const currentText = texts[textIndex][currentLanguage];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                isPaused = true;
                setTimeout(() => {
                    isPaused = false;
                    typeText();
                }, 500);
                return;
            }
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                isPaused = true;
                setTimeout(() => {
                    isPaused = false;
                    isDeleting = true;
                    typeText();
                }, 2000);
                return;
            }
        }
        
        if (!isPaused) {
            setTimeout(typeText, isDeleting ? 50 : 100);
        }
    }
    
    setTimeout(() => {
        typeText();
    }, 1000);
}

// ===== Performance Optimization =====
function initializePerformanceOptimizations() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    preloadCriticalResources();
}

function preloadCriticalResources() {
    const criticalImages = [
        './images/profile.jpg',
        './image Profile/photo_2025-06-30_21-57-21.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// ===== Error Handling =====
function setupErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript Error:', e.error);
        // You could send this to an error tracking service
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled Promise Rejection:', e.reason);
        // You could send this to an error tracking service
    });
}

// ===== Accessibility Features =====
function initializeAccessibility() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1061;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Improve keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

// ===== Initialize All Features =====
function initializeAllFeatures() {
    setupErrorHandling();
    initializePerformanceOptimizations();
    initializeAccessibility();
    initializeTypingEffect();
}

// Initialize additional features after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeAllFeatures, 100);
});

// ===== Service Worker Registration =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// ===== Utility Functions =====
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
    };
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ===== Export Functions for Global Access =====
window.portfolioApp = {
    setLanguage,
    setTheme,
    openCertificate,
    closeModal,
    showNotification,
    smoothScrollTo,
    scrollToTop
};

// ===== Add CSS Animations Dynamically =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(300px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(300px);
        }
    }
    
    .keyboard-navigation *:focus {
        outline: 2px solid #667eea !important;
        outline-offset: 2px !important;
    }
    
    .notification {
        animation: slideInRight 0.3s ease-out;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 0.25rem;
        transition: background-color 0.2s ease;
    }
    
    .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
    
    .reading-progress {
        transition: width 0.1s ease;
    }
`;

document.head.appendChild(style);
