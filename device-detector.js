/**
 * Device Detection and Responsive Adaptation System
 * نظام الكشف عن الأجهزة والتكيف المتجاوب
 * 
 * This system automatically detects device type and applies appropriate styling
 * يقوم هذا النظام بالكشف التلقائي عن نوع الجهاز وتطبيق التصميم المناسب
 */

class DeviceDetector {
    constructor() {
        this.deviceInfo = {
            type: 'desktop', // mobile, tablet, desktop
            os: 'unknown',   // ios, android, windows, macos, linux
            browser: 'unknown', // chrome, firefox, safari, edge
            orientation: 'portrait', // portrait, landscape
            screenSize: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            touchDevice: false,
            retina: false
        };
        
        this.breakpoints = {
            mobile: {
                min: 0,
                max: 768
            },
            tablet: {
                min: 769,
                max: 1024
            },
            desktop: {
                min: 1025,
                max: Infinity
            }
        };
        
        this.init();
    }
    
    init() {
        this.detectDevice();
        this.applyDeviceClasses();
        this.setupEventListeners();
        this.optimizeForDevice();
        
        // إضافة مؤشر بصري لنوع الجهاز في وضع التطوير
        this.addDeviceIndicator();
    }
    
    detectDevice() {
        const userAgent = navigator.userAgent.toLowerCase();
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // كشف نوع الجهاز بناءً على حجم الشاشة و User Agent
        this.deviceInfo.touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        this.deviceInfo.retina = window.devicePixelRatio > 1;
        
        // كشف نظام التشغيل
        if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
            this.deviceInfo.os = 'ios';
        } else if (userAgent.includes('android')) {
            this.deviceInfo.os = 'android';
        } else if (userAgent.includes('windows')) {
            this.deviceInfo.os = 'windows';
        } else if (userAgent.includes('macintosh')) {
            this.deviceInfo.os = 'macos';
        } else if (userAgent.includes('linux')) {
            this.deviceInfo.os = 'linux';
        }
        
        // كشف المتصفح
        if (userAgent.includes('chrome') && !userAgent.includes('edge')) {
            this.deviceInfo.browser = 'chrome';
        } else if (userAgent.includes('firefox')) {
            this.deviceInfo.browser = 'firefox';
        } else if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
            this.deviceInfo.browser = 'safari';
        } else if (userAgent.includes('edge')) {
            this.deviceInfo.browser = 'edge';
        }
        
        // كشف نوع الجهاز
        if (width <= this.breakpoints.mobile.max) {
            this.deviceInfo.type = 'mobile';
        } else if (width <= this.breakpoints.tablet.max) {
            // تحقق إضافي للتابلت
            if (this.deviceInfo.touchDevice || userAgent.includes('ipad') || userAgent.includes('tablet')) {
                this.deviceInfo.type = 'tablet';
            } else {
                this.deviceInfo.type = 'desktop';
            }
        } else {
            this.deviceInfo.type = 'desktop';
        }
        
        // كشف اتجاه الشاشة
        this.deviceInfo.orientation = width > height ? 'landscape' : 'portrait';
        
        // تحديث أبعاد الشاشة
        this.deviceInfo.screenSize = { width, height };
        
        console.log('🔍 Device Detected:', this.deviceInfo);
    }
    
    applyDeviceClasses() {
        const body = document.body;
        
        // إزالة الفئات السابقة
        body.classList.remove('device-mobile', 'device-tablet', 'device-desktop');
        body.classList.remove('os-ios', 'os-android', 'os-windows', 'os-macos', 'os-linux');
        body.classList.remove('browser-chrome', 'browser-firefox', 'browser-safari', 'browser-edge');
        body.classList.remove('orientation-portrait', 'orientation-landscape');
        body.classList.remove('touch-device', 'no-touch', 'retina-display');
        
        // إضافة فئات جديدة
        body.classList.add(`device-${this.deviceInfo.type}`);
        body.classList.add(`os-${this.deviceInfo.os}`);
        body.classList.add(`browser-${this.deviceInfo.browser}`);
        body.classList.add(`orientation-${this.deviceInfo.orientation}`);
        body.classList.add(this.deviceInfo.touchDevice ? 'touch-device' : 'no-touch');
        
        if (this.deviceInfo.retina) {
            body.classList.add('retina-display');
        }
        
        // إضافة متغيرات CSS مخصصة
        document.documentElement.style.setProperty('--device-width', `${this.deviceInfo.screenSize.width}px`);
        document.documentElement.style.setProperty('--device-height', `${this.deviceInfo.screenSize.height}px`);
        document.documentElement.style.setProperty('--device-type', `"${this.deviceInfo.type}"`);
    }
    
    optimizeForDevice() {
        switch (this.deviceInfo.type) {
            case 'mobile':
                this.optimizeForMobile();
                break;
            case 'tablet':
                this.optimizeForTablet();
                break;
            case 'desktop':
                this.optimizeForDesktop();
                break;
        }
    }
    
    optimizeForMobile() {
        // تحسينات خاصة بالموبايل
        document.documentElement.style.setProperty('--container-padding', '16px');
        document.documentElement.style.setProperty('--nav-height', '60px');
        document.documentElement.style.setProperty('--hero-padding', '80px 0 60px');
        document.documentElement.style.setProperty('--section-padding', '60px 0');
        
        // تحسين الخطوط للموبايل
        if (this.deviceInfo.screenSize.width <= 375) {
            document.documentElement.style.setProperty('--base-font-size', '14px');
        } else {
            document.documentElement.style.setProperty('--base-font-size', '15px');
        }
        
        // تحسين التنقل للموبايل
        this.enableMobileNavigation();
        
        // تحسين الأداء للموبايل
        this.optimizeMobilePerformance();
    }
    
    optimizeForTablet() {
        // تحسينات خاصة بالتابلت
        document.documentElement.style.setProperty('--container-padding', '24px');
        document.documentElement.style.setProperty('--nav-height', '70px');
        document.documentElement.style.setProperty('--hero-padding', '100px 0 80px');
        document.documentElement.style.setProperty('--section-padding', '80px 0');
        document.documentElement.style.setProperty('--base-font-size', '16px');
        
        // تحسين التخطيط للتابلت
        this.optimizeTabletLayout();
    }
    
    optimizeForDesktop() {
        // تحسينات خاصة بالكمبيوتر
        document.documentElement.style.setProperty('--container-padding', '32px');
        document.documentElement.style.setProperty('--nav-height', '80px');
        document.documentElement.style.setProperty('--hero-padding', '120px 0 100px');
        document.documentElement.style.setProperty('--section-padding', '100px 0');
        document.documentElement.style.setProperty('--base-font-size', '16px');
        
        // تحسين التفاعل للكمبيوتر
        this.enableDesktopFeatures();
    }
    
    enableMobileNavigation() {
        // تفعيل القائمة المنسدلة للموبايل
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.style.display = 'flex';
            
            // إضافة حدث النقر
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
                document.body.classList.toggle('nav-open');
            });
            
            // إغلاق القائمة عند النقر على رابط
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.classList.remove('nav-open');
                });
            });
        }
    }
    
    optimizeTabletLayout() {
        // تحسين تخطيط الشبكات للتابلت
        const portfolioGrid = document.querySelector('.portfolio-grid');
        const skillsGrid = document.querySelector('.skills-grid');
        const certificatesGrid = document.querySelector('.certificates-grid');
        
        if (portfolioGrid) {
            portfolioGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
        }
        
        if (skillsGrid) {
            skillsGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
        }
        
        if (certificatesGrid) {
            certificatesGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
        }
    }
    
    enableDesktopFeatures() {
        // تفعيل الميزات الخاصة بالكمبيوتر
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            hamburger.style.display = 'none';
        }
        
        // تحسين التخطيط للكمبيوتر
        const portfolioGrid = document.querySelector('.portfolio-grid');
        const skillsGrid = document.querySelector('.skills-grid');
        
        if (portfolioGrid) {
            portfolioGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
        }
        
        if (skillsGrid) {
            skillsGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
        }
    }
    
    optimizeMobilePerformance() {
        // تحسين الأداء للموبايل
        
        // تأخير تحميل الصور
        this.implementLazyLoading();
        
        // تقليل الحركات للأجهزة البطيئة
        if (this.deviceInfo.screenSize.width <= 375) {
            document.documentElement.style.setProperty('--transition-duration', '0.2s');
        }
    }
    
    implementLazyLoading() {
        const images = document.querySelectorAll('img:not([loading])');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.loading = 'lazy';
                        observer.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback للمتصفحات القديمة
            images.forEach(img => {
                img.loading = 'lazy';
            });
        }
    }
    
    setupEventListeners() {
        // مراقبة تغيير حجم الشاشة
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.detectDevice();
                this.applyDeviceClasses();
                this.optimizeForDevice();
                this.updateDeviceIndicator();
            }, 250);
        });
        
        // مراقبة تغيير اتجاه الشاشة
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.detectDevice();
                this.applyDeviceClasses();
                this.optimizeForDevice();
                this.updateDeviceIndicator();
            }, 100);
        });
        
        // مراقبة اكتمال تحميل الصفحة
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.optimizeForDevice();
            });
        }
    }
    
    addDeviceIndicator() {
        // إضافة مؤشر بصري لنوع الجهاز (للتطوير والاختبار)
        const indicator = document.createElement('div');
        indicator.id = 'device-indicator';
        indicator.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 8px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-family: monospace;
            z-index: 10000;
            display: none;
            transition: all 0.3s ease;
        `;
        
        // إظهار المؤشر عند الضغط على Alt + D
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key.toLowerCase() === 'd') {
                indicator.style.display = indicator.style.display === 'none' ? 'block' : 'none';
            }
        });
        
        this.updateDeviceIndicator();
        document.body.appendChild(indicator);
    }
    
    updateDeviceIndicator() {
        const indicator = document.getElementById('device-indicator');
        if (indicator) {
            const info = this.deviceInfo;
            indicator.innerHTML = `
                📱 ${info.type.toUpperCase()}<br>
                💻 ${info.os.toUpperCase()}<br>
                🌐 ${info.browser.toUpperCase()}<br>
                📐 ${info.screenSize.width}×${info.screenSize.height}<br>
                🔄 ${info.orientation.toUpperCase()}
            `;
            
            // تغيير لون المؤشر حسب نوع الجهاز
            const colors = {
                mobile: '#4facfe',
                tablet: '#43e97b',
                desktop: '#fa709a'
            };
            indicator.style.background = colors[info.type] || 'rgba(0,0,0,0.8)';
        }
    }
    
    // دوال مساعدة للوصول إلى معلومات الجهاز
    getDeviceType() {
        return this.deviceInfo.type;
    }
    
    isMobile() {
        return this.deviceInfo.type === 'mobile';
    }
    
    isTablet() {
        return this.deviceInfo.type === 'tablet';
    }
    
    isDesktop() {
        return this.deviceInfo.type === 'desktop';
    }
    
    isTouchDevice() {
        return this.deviceInfo.touchDevice;
    }
    
    isRetina() {
        return this.deviceInfo.retina;
    }
    
    getOrientation() {
        return this.deviceInfo.orientation;
    }
    
    getScreenSize() {
        return this.deviceInfo.screenSize;
    }
}

// تهيئة نظام كشف الجهاز
let deviceDetector;

// تشغيل النظام عند تحميل الصفحة
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        deviceDetector = new DeviceDetector();
        window.deviceDetector = deviceDetector; // إتاحة النظام عالمياً
    });
} else {
    deviceDetector = new DeviceDetector();
    window.deviceDetector = deviceDetector;
}

// تصدير الكلاس للاستخدام في ملفات أخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DeviceDetector;
}
