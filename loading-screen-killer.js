/**
 * ULTIMATE Mobile Loading Screen Killer
 * حل نهائي لمشكلة شاشة التحميل العالقة على الموبايل
 */

// تشغيل فوري بمجرد تحميل الملف
(function() {
    'use strict';
    
    const isMobile = window.innerWidth <= 768 || 
                    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    console.log('🔥 ULTIMATE Mobile Loading Killer - Mobile:', isMobile);
    
    if (isMobile) {
        console.log('📱 MOBILE DETECTED: Activating ultimate loading screen killer');
        
        // فورياً - حذف شاشة التحميل بعد 100ms
        setTimeout(function() {
            killLoadingScreen('IMMEDIATE');
        }, 100);
        
        // احتياطي - حذف بعد 500ms
        setTimeout(function() {
            killLoadingScreen('BACKUP_500');
        }, 500);
        
        // نهائي - حذف بعد 1000ms
        setTimeout(function() {
            killLoadingScreen('FINAL_1000');
        }, 1000);
        
        // طوارئ - حذف بعد 1500ms
        setTimeout(function() {
            killLoadingScreen('EMERGENCY_1500');
        }, 1500);
    }
    
    function killLoadingScreen(stage) {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            console.log(`💀 ${stage}: Killing loading screen`);
            
            // طرق متعددة للحذف
            loadingScreen.style.display = 'none';
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
            loadingScreen.style.pointerEvents = 'none';
            loadingScreen.style.zIndex = '-9999';
            loadingScreen.style.transform = 'scale(0)';
            loadingScreen.classList.add('hidden');
            
            // إزالة كاملة من DOM
            try {
                loadingScreen.remove();
                console.log(`✅ ${stage}: Loading screen removed successfully`);
            } catch (e) {
                console.log(`⚠️ ${stage}: Could not remove, hiding instead`);
                loadingScreen.style.cssText = 'display: none !important; opacity: 0 !important; visibility: hidden !important;';
            }
        } else {
            console.log(`ℹ️ ${stage}: No loading screen found`);
        }
    }
    
    // مراقبة إضافة شاشة تحميل جديدة
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.id === 'loading-screen' || (node.querySelector && node.querySelector('#loading-screen'))) {
                    console.log('🚨 New loading screen detected, killing immediately');
                    setTimeout(() => killLoadingScreen('OBSERVER'), 50);
                }
            });
        });
    });
    
    // بدء المراقبة عند جاهزية DOM
    if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            observer.observe(document.body, { childList: true, subtree: true });
        });
    }
    
})();

// تصدير للاستخدام العام
window.killLoadingScreen = function() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.remove();
        console.log('💀 Manual loading screen kill executed');
    }
};
