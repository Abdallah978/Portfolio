// Enhanced Image Loader and Certificate Manager
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced certificate image loading
    function enhanceCertificateDisplay() {
        console.log('🔍 بدء تحسين عرض الشهادات...');
        
        // Find all certificate images
        const certificateImages = document.querySelectorAll('.certificate-image img, .certificate-card img');
        console.log(`📊 تم العثور على ${certificateImages.length} صورة شهادة`);
        
        certificateImages.forEach((img, index) => {
            console.log(`🖼️ معالجة الصورة ${index + 1}: ${img.src}`);
            
            // Special handling for EDRAAK certificate
            if (img.src.includes('EDRAAK') || img.alt.includes('إدراك') || img.alt.includes('EDRAAK')) {
                console.log('🎯 تم العثور على شهادة EDRAAK - تطبيق إصلاحات خاصة');
                
                // Force display
                img.style.display = 'block';
                img.style.visibility = 'visible';
                img.style.opacity = '1';
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.zIndex = '10';
                
                // Add special class
                img.classList.add('edraak-certificate');
                img.parentElement.classList.add('edraak-container');
                
                // Enhanced error handling
                img.onerror = function() {
                    console.error('❌ فشل في تحميل شهادة EDRAAK:', this.src);
                    this.style.backgroundColor = '#f8f9fa';
                    this.style.border = '2px dashed #4facfe';
                    this.style.minHeight = '200px';
                    
                    // Try alternative path
                    const altSrc = this.src.replace('EDRAAK/', 'EDRAAK\\');
                    if (this.src !== altSrc) {
                        console.log('🔄 جاري المحاولة بمسار بديل:', altSrc);
                        this.src = altSrc;
                    }
                };
                
                // Success handler
                img.onload = function() {
                    console.log('✅ تم تحميل شهادة EDRAAK بنجاح');
                    this.style.border = '2px solid #4facfe';
                    this.parentElement.style.boxShadow = '0 4px 15px rgba(79, 172, 254, 0.3)';
                };
            }
            
            // General image enhancement
            img.style.transition = 'all 0.3s ease';
            
            // Loading state
            if (!img.complete) {
                img.style.backgroundColor = '#f8f9fa';
                img.style.minHeight = '200px';
            }
        });
    }
    
    // Force certificate visibility
    function forceCertificateVisibility() {
        console.log('🔧 فرض إظهار جميع الشهادات...');
        
        const certificateCards = document.querySelectorAll('.certificate-card');
        certificateCards.forEach(card => {
            card.style.display = 'block';
            card.style.visibility = 'visible';
            card.style.opacity = '1';
            
            const img = card.querySelector('img');
            if (img) {
                img.style.display = 'block';
                img.style.visibility = 'visible';
                img.style.opacity = '1';
            }
        });
    }
    
    // Check certificate grid layout
    function fixCertificateGrid() {
        console.log('📐 إصلاح تخطيط شبكة الشهادات...');
        
        const certificateGrids = document.querySelectorAll('.certificates-grid');
        certificateGrids.forEach(grid => {
            grid.style.display = 'grid';
            grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
            grid.style.gap = '1.5rem';
            grid.style.width = '100%';
        });
    }
    
    // Debug function
    function debugCertificates() {
        console.log('🐛 تشخيص الشهادات:');
        
        const edraakImages = document.querySelectorAll('img[src*="EDRAAK"], img[alt*="إدراك"]');
        console.log(`📊 عدد صور EDRAAK الموجودة: ${edraakImages.length}`);
        
        edraakImages.forEach((img, index) => {
            console.log(`🖼️ صورة EDRAAK ${index + 1}:`);
            console.log(`   - المصدر: ${img.src}`);
            console.log(`   - النص البديل: ${img.alt}`);
            console.log(`   - العرض: ${img.style.display || getComputedStyle(img).display}`);
            console.log(`   - الرؤية: ${img.style.visibility || getComputedStyle(img).visibility}`);
            console.log(`   - الشفافية: ${img.style.opacity || getComputedStyle(img).opacity}`);
            console.log(`   - تم التحميل: ${img.complete}`);
            console.log(`   - الأبعاد: ${img.naturalWidth}x${img.naturalHeight}`);
        });
    }
    
    // Enhanced Certificate Tab Management
    class CertificateManager {
        constructor() {
            this.init();
        }

        init() {
            this.setupTabSwitching();
            this.ensureAcademicVisibility();
            this.setupImageErrorHandling();
            this.setupResponsiveHandling();
        }

        setupTabSwitching() {
            const tabButtons = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');

            console.log('تم العثور على أزرار التبويب:', tabButtons.length);
            console.log('تم العثور على محتويات التبويب:', tabContents.length);

            tabButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const tabId = button.getAttribute('data-tab');
                    console.log('التبديل إلى التبويب:', tabId);

                    // Remove active class from all buttons
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    button.classList.add('active');

                    // Hide all tab contents
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        content.style.display = 'none';
                    });

                    // Show selected tab content
                    const targetContent = document.getElementById(tabId);
                    if (targetContent) {
                        setTimeout(() => {
                            targetContent.style.display = 'block';
                            targetContent.classList.add('active');
                            
                            // Special handling for academic tab
                            if (tabId === 'academic') {
                                this.enhanceAcademicDisplay();
                            }
                        }, 150);
                    } else {
                        console.error('محتوى التبويب غير موجود لـ:', tabId);
                    }
                });
            });
        }

        ensureAcademicVisibility() {
            const academicTab = document.getElementById('academic');
            const mainDegree = document.querySelector('.main-degree');
            
            if (academicTab) {
                academicTab.style.display = 'block';
                academicTab.style.visibility = 'visible';
                academicTab.style.opacity = '1';
                console.log('تم التأكد من رؤية تبويب الأكاديمية');
            }

            if (mainDegree) {
                mainDegree.style.display = 'block';
                mainDegree.style.visibility = 'visible';
                mainDegree.style.opacity = '1';
                console.log('تم التأكد من رؤية الدرجة الرئيسية');
            }
        }

        enhanceAcademicDisplay() {
            const mainDegree = document.querySelector('.main-degree');
            if (mainDegree) {
                mainDegree.style.animation = 'fadeInUp 0.8s ease-out';
                console.log('تم تطبيق تأثير التحميل على شهادة الأكاديمية');
            }
        }

        setupImageErrorHandling() {
            const certificateImages = document.querySelectorAll('.certificate-image img');
            certificateImages.forEach(img => {
                img.addEventListener('error', (e) => {
                    console.error('فشل في تحميل صورة الشهادة:', img.src);
                    img.style.display = 'none';
                    
                    // Create placeholder
                    const placeholder = document.createElement('div');
                    placeholder.className = 'certificate-placeholder';
                    placeholder.innerHTML = '<i class="fas fa-certificate"></i><p>صورة الشهادة غير متوفرة</p>';
                    img.parentNode.appendChild(placeholder);
                });

                img.addEventListener('load', (e) => {
                    console.log('تم تحميل صورة الشهادة بنجاح:', img.src);
                });
            });
        }

        setupResponsiveHandling() {
            const handleResize = () => {
                const isMobile = window.innerWidth <= 768;
                const certificatesGrid = document.querySelector('.certificates-grid');
                
                if (certificatesGrid) {
                    if (isMobile) {
                        certificatesGrid.style.gridTemplateColumns = '1fr';
                    } else {
                        certificatesGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
                    }
                }
            };

            window.addEventListener('resize', handleResize);
            handleResize(); // Initial call
        }

        // Public method to force show academic tab
        showAcademicTab() {
            const academicButton = document.querySelector('[data-tab="academic"]');
            if (academicButton) {
                academicButton.click();
            }
        }

        // Debug method
        debugCertificates() {
            console.log('=== معلومات تشخيص الشهادات ===');
            console.log('تبويب الأكاديمية:', document.getElementById('academic'));
            console.log('الدرجة الرئيسية:', document.querySelector('.main-degree'));
            console.log('أزرار التبويب:', document.querySelectorAll('.tab-btn'));
            console.log('محتويات التبويب:', document.querySelectorAll('.tab-content'));
        }
    }

    // Run enhancements
    console.log('🚀 بدء تحسينات عرض الشهادات...');
    
    // Initial run
    enhanceCertificateDisplay();
    forceCertificateVisibility();
    fixCertificateGrid();
    
    // Initialize certificate manager
    const certificateManager = new CertificateManager();
    
    // Make it globally accessible for debugging
    window.certificateManager = certificateManager;
    
    // Force show academic tab initially
    setTimeout(() => {
        certificateManager.showAcademicTab();
        certificateManager.debugCertificates();
    }, 500);
    
    // Run after a short delay
    setTimeout(() => {
        enhanceCertificateDisplay();
        forceCertificateVisibility();
        debugCertificates();
    }, 500);
    
    // Run after images should have loaded
    setTimeout(() => {
        enhanceCertificateDisplay();
        debugCertificates();
    }, 2000);
    
    // Add window load event
    window.addEventListener('load', () => {
        console.log('🎯 النافذة تم تحميلها - تشغيل تحسينات نهائية');
        enhanceCertificateDisplay();
        forceCertificateVisibility();
        debugCertificates();
    });
    
    // Add tab switching event for certificates
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(() => {
                enhanceCertificateDisplay();
                forceCertificateVisibility();
            }, 200);
        });
    });
    
    console.log('✅ تم تهيئة محسن عرض الشهادات');
});

// Global function to manually trigger certificate enhancement
window.fixCertificateDisplay = function() {
    console.log('🔧 تشغيل إصلاح الشهادات يدوياً...');
    
    const certificateImages = document.querySelectorAll('img[src*="EDRAAK"]');
    certificateImages.forEach(img => {
        img.style.display = 'block !important';
        img.style.visibility = 'visible !important';
        img.style.opacity = '1 !important';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        
        console.log('🔧 تم إصلاح صورة EDRAAK:', img.src);
    });
};

// ====== ACADEMIC CERTIFICATE VISIBILITY ENHANCER ======

document.addEventListener('DOMContentLoaded', function() {
    console.log('Academic Certificate Enhancer Loading...');
    
    // Force Academic Tab to be visible by default
    function forceAcademicVisibility() {
        const academicTab = document.getElementById('academic');
        const academicBtn = document.querySelector('.tab-btn[data-tab="academic"]');
        const mainDegree = document.querySelector('.main-degree');
        
        if (academicTab) {
            academicTab.style.display = 'block';
            academicTab.style.visibility = 'visible';
            academicTab.style.opacity = '1';
            academicTab.classList.add('active');
            console.log('Academic tab forced visible');
        }
        
        if (academicBtn) {
            academicBtn.classList.add('active');
            console.log('Academic button activated');
        }
        
        if (mainDegree) {
            mainDegree.style.display = 'block';
            mainDegree.style.visibility = 'visible';
            mainDegree.style.opacity = '1';
            mainDegree.style.transform = 'none';
            mainDegree.style.position = 'relative';
            mainDegree.style.zIndex = '1000';
            console.log('Main degree certificate forced visible');
        }
    }
    
    // Enhanced Tab Switching with Academic Priority
    function enhanceTabSwitching() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                console.log('Tab clicked:', tabId);
                
                // Update active button
                tabButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Show corresponding content
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    content.style.display = 'none';
                    content.style.opacity = '0';
                });
                
                const targetContent = document.getElementById(tabId);
                if (targetContent) {
                    setTimeout(() => {
                        targetContent.classList.add('active');
                        targetContent.style.display = 'block';
                        targetContent.style.visibility = 'visible';
                        targetContent.style.opacity = '1';
                        
                        // Special handling for academic tab
                        if (tabId === 'academic') {
                            forceAcademicVisibility();
                        }
                    }, 100);
                }
            });
        });
    }
    
    // Monitor Academic Certificate Visibility
    function monitorAcademicVisibility() {
        const mainDegree = document.querySelector('.main-degree');
        if (!mainDegree) {
            console.error('Main degree certificate not found!');
            return;
        }
        
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && 
                    (mutation.attributeName === 'style' || mutation.attributeName === 'class')) {
                    
                    const target = mutation.target;
                    if (target.classList.contains('main-degree') || target.id === 'academic') {
                        // Re-force visibility if something tries to hide it
                        setTimeout(() => {
                            forceAcademicVisibility();
                        }, 50);
                    }
                }
            });
        });
        
        // Observe the academic tab and main degree
        observer.observe(document.getElementById('academic'), {
            attributes: true,
            attributeFilter: ['style', 'class']
        });
        
        observer.observe(mainDegree, {
            attributes: true,
            attributeFilter: ['style', 'class']
        });
    }
    
    // Initialize everything
    setTimeout(() => {
        forceAcademicVisibility();
        enhanceTabSwitching();
        monitorAcademicVisibility();
        
        // Double-check visibility after a longer delay
        setTimeout(forceAcademicVisibility, 1000);
        setTimeout(forceAcademicVisibility, 2000);
    }, 100);
    
    console.log('Academic Certificate Enhancer Loaded Successfully');
});

// Emergency Academic Certificate Show Function (can be called from console)
window.showAcademicCertificate = function() {
    const academicTab = document.getElementById('academic');
    const mainDegree = document.querySelector('.main-degree');
    const academicBtn = document.querySelector('.tab-btn[data-tab="academic"]');
    
    if (academicTab) {
        academicTab.style.display = 'block !important';
        academicTab.style.visibility = 'visible !important';
        academicTab.style.opacity = '1 !important';
        academicTab.classList.add('active');
    }
    
    if (mainDegree) {
        mainDegree.style.display = 'block !important';
        mainDegree.style.visibility = 'visible !important';
        mainDegree.style.opacity = '1 !important';
        mainDegree.style.transform = 'none !important';
    }
    
    if (academicBtn) {
        academicBtn.classList.add('active');
        academicBtn.click();
    }
    
    console.log('Academic certificate emergency show executed');
};
