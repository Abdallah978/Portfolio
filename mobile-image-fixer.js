/**
 * Mobile Image Fix Handler - معالج إصلاح الصور للموبايل
 * يحل مشكلة اختفاء الصور على أجهزة الموبايل
 */

class MobileImageFixer {
    constructor() {
        this.isMobile = window.innerWidth <= 768;
        this.isTouch = 'ontouchstart' in window;
        this.init();
    }    init() {
        console.log('🔧 Mobile Image Fixer initialized');
        console.log('📱 Is Mobile:', this.isMobile);
        console.log('👆 Is Touch Device:', this.isTouch);

        // Force hide loading screen on mobile if it's still visible
        this.forceHideLoadingScreen();

        // تشغيل الإصلاحات بعد تحميل DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.fixAllImages());
        } else {
            this.fixAllImages();
        }

        // إصلاح الصور عند تغيير حجم الشاشة
        window.addEventListener('resize', () => this.handleResize());
        
        // إصلاح الصور عند التدوير
        window.addEventListener('orientationchange', () => {
            setTimeout(() => this.fixAllImages(), 100);
        });
    }

    forceHideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen && this.isMobile) {
            console.log('📱 Force hiding loading screen for mobile...');
            
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.visibility = 'hidden';
                loadingScreen.style.pointerEvents = 'none';
                loadingScreen.style.display = 'none';
                loadingScreen.classList.add('hidden');
            }, 1000);
            
            // Emergency fallback
            setTimeout(() => {
                if (loadingScreen.style.display !== 'none') {
                    loadingScreen.remove();
                    console.log('🚨 Emergency: Removed loading screen');
                }
            }, 4000);
        }
    }

    fixAllImages() {
        console.log('🖼️ Fixing all images for mobile...');
        
        // إصلاح صورة البروفايل
        this.fixProfileImage();
        
        // إصلاح صور المشاريع
        this.fixProjectImages();
        
        // إصلاح صور الشهادات
        this.fixCertificateImages();
        
        // إصلاح جميع الصور الأخرى
        this.fixGeneralImages();
        
        // مراقبة الصور الجديدة
        this.observeNewImages();
    }

    fixProfileImage() {
        const profileImg = document.querySelector('.profile-img');
        const imageContainer = document.querySelector('.image-container');
        const heroImage = document.querySelector('.hero-image');

        if (!profileImg) {
            console.warn('⚠️ Profile image not found');
            return;
        }

        console.log('👤 Fixing profile image...');

        // إجبار عرض الحاويات
        if (heroImage) {
            this.forceElementVisibility(heroImage);
            if (this.isMobile) {
                heroImage.style.order = '-1';
                heroImage.style.marginBottom = '2rem';
                heroImage.style.display = 'flex';
                heroImage.style.justifyContent = 'center';
            }
        }

        if (imageContainer) {
            this.forceElementVisibility(imageContainer);
            if (this.isMobile) {
                imageContainer.style.maxWidth = '280px';
                imageContainer.style.margin = '0 auto';
            }
        }

        // إصلاح صورة البروفايل
        this.forceImageVisibility(profileImg);
        
        if (this.isMobile) {
            profileImg.style.borderRadius = '50%';
            profileImg.style.maxWidth = '280px';
            profileImg.style.height = '280px';
            profileImg.style.objectFit = 'cover';
            profileImg.style.margin = '0 auto';
            profileImg.style.display = 'block';
        }

        // إضافة معالجات الأحداث
        this.addImageEventHandlers(profileImg);
    }

    fixProjectImages() {
        const projectImages = document.querySelectorAll('.portfolio-image img, .project-image img');
        
        console.log(`🎨 Fixing ${projectImages.length} project images...`);

        projectImages.forEach(img => {
            this.forceImageVisibility(img);
            
            if (this.isMobile) {
                img.style.minHeight = '200px';
                img.style.objectFit = 'cover';
                img.style.width = '100%';
            }
            
            this.addImageEventHandlers(img);
        });
    }

    fixCertificateImages() {
        const certificateImages = document.querySelectorAll('.certificate-image img, .certificate-card img');
        
        console.log(`🎓 Fixing ${certificateImages.length} certificate images...`);

        certificateImages.forEach(img => {
            this.forceImageVisibility(img);
            
            if (this.isMobile) {
                img.style.height = '200px';
                img.style.objectFit = 'cover';
                img.style.width = '100%';
            }
            
            this.addImageEventHandlers(img);
        });
    }

    fixGeneralImages() {
        const allImages = document.querySelectorAll('img');
        
        console.log(`🖼️ Fixing ${allImages.length} total images...`);

        allImages.forEach(img => {
            this.forceImageVisibility(img);
            this.addImageEventHandlers(img);
        });
    }

    forceElementVisibility(element) {
        if (!element) return;

        element.style.display = 'block';
        element.style.visibility = 'visible';
        element.style.opacity = '1';
        element.style.position = 'relative';
        element.style.zIndex = '1';
    }

    forceImageVisibility(img) {
        if (!img) return;

        // إجبار العرض
        img.style.display = 'block';
        img.style.visibility = 'visible';
        img.style.opacity = '1';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.position = 'relative';
        img.style.zIndex = '1';

        // إزالة أي مرشحات قد تخفي الصورة
        img.style.filter = 'none';
        img.style.webkitFilter = 'none';
        img.style.transform = 'none';
        img.style.webkitTransform = 'none';

        // تحسينات التحميل للموبايل
        if (this.isMobile) {
            img.loading = 'eager';
            img.decoding = 'sync';
            img.style.imageRendering = 'auto';
            
            // إضافة خصائص للموبايل
            img.style.webkitBackfaceVisibility = 'hidden';
            img.style.webkitPerspective = '1000';
            img.style.webkitTransform = 'translate3d(0,0,0)';
            img.style.transform = 'translate3d(0,0,0)';
        }

        // إضافة خلفية للصور المكسورة
        img.style.backgroundColor = '#f8f9fa';
    }

    addImageEventHandlers(img) {
        if (!img) return;

        // معالج نجاح التحميل
        img.addEventListener('load', () => {
            console.log('✅ Image loaded:', img.src);
            img.style.opacity = '1';
            img.classList.add('loaded');
        });

        // معالج فشل التحميل
        img.addEventListener('error', (e) => {
            console.error('❌ Image failed to load:', img.src);
            this.handleImageError(img);
        });

        // تأثيرات اللمس للموبايل
        if (this.isTouch) {
            img.addEventListener('touchstart', (e) => {
                e.preventDefault();
                img.style.transform = 'scale(0.98)';
            });

            img.addEventListener('touchend', () => {
                img.style.transform = 'scale(1)';
            });
        }
    }

    handleImageError(img) {
        console.log('🔄 Trying to fix broken image...');
        
        // قائمة المسارات البديلة
        const alternativePaths = [
            'images/profile.jpg',
            'image%20Profile/photo_2025-06-30_21-57-21.jpg',
            'image Profile/photo_2025-06-30_21-57-21.jpg'
        ];

        // إضافة نص بديل للصور المكسورة
        img.style.background = 'linear-gradient(45deg, #f8f9fa, #e9ecef)';
        img.style.display = 'flex';
        img.style.alignItems = 'center';
        img.style.justifyContent = 'center';
        img.style.color = '#6c757d';
        img.style.fontSize = '14px';
        img.style.textAlign = 'center';
        
        // إضافة نص بديل
        if (img.alt) {
            img.title = img.alt;
        }

        // محاولة تحميل مسار بديل
        if (img.src.includes('profile') || img.alt.includes('عبد الله')) {
            alternativePaths.forEach((path, index) => {
                setTimeout(() => {
                    const testImg = new Image();
                    testImg.onload = () => {
                        img.src = path;
                        console.log('✅ Alternative image loaded:', path);
                    };
                    testImg.src = path;
                }, index * 1000);
            });
        }
    }

    handleResize() {
        const newIsMobile = window.innerWidth <= 768;
        
        if (newIsMobile !== this.isMobile) {
            this.isMobile = newIsMobile;
            console.log('📱 Device type changed, re-fixing images...');
            this.fixAllImages();
        }
    }

    observeNewImages() {
        // مراقبة إضافة صور جديدة للصفحة
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) { // Element node
                        const newImages = node.querySelectorAll ? node.querySelectorAll('img') : [];
                        if (newImages.length > 0) {
                            console.log(`🆕 Found ${newImages.length} new images, fixing...`);
                            newImages.forEach(img => {
                                this.forceImageVisibility(img);
                                this.addImageEventHandlers(img);
                            });
                        }
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // طريقة لاختبار جميع الصور
    testAllImages() {
        const allImages = document.querySelectorAll('img');
        console.log('🧪 Testing all images...');
        
        allImages.forEach((img, index) => {
            console.log(`Image ${index + 1}:`, {
                src: img.src,
                alt: img.alt,
                visible: window.getComputedStyle(img).display !== 'none',
                opacity: window.getComputedStyle(img).opacity,
                width: img.offsetWidth,
                height: img.offsetHeight
            });
        });
    }
}

// تشغيل إصلاح الصور للموبايل
document.addEventListener('DOMContentLoaded', () => {
    window.mobileImageFixer = new MobileImageFixer();
    
    // إضافة زر اختبار للتطوير
    if (window.location.hash === '#debug') {
        setTimeout(() => {
            const testButton = document.createElement('button');
            testButton.textContent = 'Test Images';
            testButton.style.cssText = `
                position: fixed;
                bottom: 10px;
                right: 10px;
                z-index: 9999;
                background: #007bff;
                color: white;
                border: none;
                padding: 10px;
                border-radius: 5px;
                cursor: pointer;
            `;
            testButton.onclick = () => window.mobileImageFixer.testAllImages();
            document.body.appendChild(testButton);
        }, 1000);
    }
});

// تصدير للاستخدام الخارجي
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MobileImageFixer;
}
