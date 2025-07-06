/**
 * Image Loading Handler - معالج تحميل الصور
 * يضمن تحميل الصور بشكل صحيح مع إضافة حلول بديلة
 */

class ImageLoader {
    constructor() {
        this.init();
    }

    init() {
        // انتظار تحميل DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadImages());
        } else {
            this.loadImages();
        }
    }

    loadImages() {
        const profileImg = document.querySelector('.profile-img');
        if (profileImg) {
            this.handleProfileImage(profileImg);
        }
    }    handleProfileImage(img) {
        // تسجيل محاولة تحميل الصورة
        console.log('Loading profile image:', img.src);

        // تحسينات خاصة للموبايل
        this.optimizeForMobile(img);

        // إضافة معالج نجاح التحميل
        img.addEventListener('load', () => {
            console.log('Profile image loaded successfully');
            img.style.opacity = '1';
            img.classList.add('loaded');
            this.addImageAnimations(img);
        });

        // إضافة معالج فشل التحميل
        img.addEventListener('error', (e) => {
            console.error('Error loading profile image:', e);
            this.handleImageError(img);
        });

        // إضافة تأثير تدريجي للظهور
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in-out';
    }    optimizeForMobile(img) {
        // كشف إذا كان الجهاز موبايل
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            console.log('📱 Optimizing image for mobile...');
            
            // تحسينات خاصة للموبايل
            img.style.borderRadius = '50%';
            img.style.maxWidth = '260px';
            img.style.height = '260px';
            img.style.display = 'block';
            img.style.visibility = 'visible';
            img.style.opacity = '1';
            img.style.margin = '0 auto';
            img.style.objectFit = 'cover';
            
            // تحسين جودة الصورة للشاشات عالية الدقة
            if (window.devicePixelRatio > 1) {
                img.style.imageRendering = 'high-quality';
            }
            
            // إضافة lazy loading للموبايل
            img.loading = 'eager'; // تغيير من lazy إلى eager للموبايل
            img.decoding = 'sync';
            
            // تحسينات WebKit للموبايل
            img.style.webkitBackfaceVisibility = 'hidden';
            img.style.webkitPerspective = '1000';
            img.style.webkitTransform = 'translate3d(0,0,0)';
            img.style.transform = 'translate3d(0,0,0)';
            
            // منع إخفاء الصورة
            img.style.filter = 'none';
            img.style.webkitFilter = 'none';
            img.style.clipPath = 'none';
            img.style.webkitClipPath = 'none';
        }
    }

    addImageAnimations(img) {
        // إضافة تأثيرات حركية للصورة
        img.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                img.style.transform = 'scale(1.05) rotate(2deg)';
            } else {
                img.style.transform = 'scale(1.02)';
            }
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1) rotate(0deg)';
        });

        // تأثير اللمس للموبايل
        img.addEventListener('touchstart', () => {
            img.style.transform = 'scale(0.98)';
        });

        img.addEventListener('touchend', () => {
            img.style.transform = 'scale(1)';
        });
    }

    handleImageError(img) {
        console.log('Trying alternative image paths...');
        
        // قائمة بالمسارات البديلة
        const alternativePaths = [
            'image%20Profile/photo_2025-06-30_21-57-21.jpg',
            './image%20Profile/photo_2025-06-30_21-57-21.jpg',
            'image Profile/photo_2025-06-30_21-57-21.jpg',
            './image Profile/photo_2025-06-30_21-57-21.jpg',
            'images/profile.jpg',
            'assets/profile.jpg'
        ];

        let currentIndex = 0;

        const tryNextPath = () => {
            if (currentIndex < alternativePaths.length) {
                const newPath = alternativePaths[currentIndex];
                console.log(`Trying path ${currentIndex + 1}:`, newPath);
                
                // إنشاء صورة جديدة للاختبار
                const testImg = new Image();
                testImg.onload = () => {
                    console.log('Success with path:', newPath);
                    img.src = newPath;
                    img.style.opacity = '1';
                    img.classList.add('loaded');
                };
                testImg.onerror = () => {
                    currentIndex++;
                    tryNextPath();
                };
                testImg.src = newPath;
            } else {
                // إذا فشلت جميع المحاولات، إضافة صورة افتراضية
                this.addPlaceholderImage(img);
            }
        };

        tryNextPath();
    }

    addPlaceholderImage(img) {
        console.log('Adding placeholder image');
        
        // إنشاء صورة افتراضية بـ SVG
        const placeholderSvg = `data:image/svg+xml;base64,${btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
                <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="400" height="400" fill="url(#grad)" rx="20"/>
                <circle cx="200" cy="160" r="60" fill="white" opacity="0.9"/>
                <path d="M140 240 Q200 200 260 240 L260 360 Q200 320 140 360 Z" fill="white" opacity="0.9"/>
                <text x="200" y="320" text-anchor="middle" fill="white" font-family="Arial" font-size="16" opacity="0.8">
                    عبد الله محمد حمد
                </text>
            </svg>
        `)}`;

        img.src = placeholderSvg;
        img.style.opacity = '1';
        img.classList.add('placeholder');
        
        // إضافة رسالة تنبيه في console
        console.warn('Profile image not found. Using placeholder.');
    }
}

// تشغيل معالج الصور
const imageLoader = new ImageLoader();

// إضافة CSS للصور المحملة
const style = document.createElement('style');
style.textContent = `
    .profile-img.loaded {
        animation: imageSlideIn 0.8s ease-out;
    }
    
    .profile-img.placeholder {
        border: 3px solid rgba(255, 255, 255, 0.8);
        box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
    }
    
    @keyframes imageSlideIn {
        from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`;
document.head.appendChild(style);
