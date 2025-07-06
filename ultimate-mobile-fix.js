// ULTIMATE Mobile Loading Screen Killer
// هذا الملف مخصص لحل مشكلة شاشة التحميل المستمرة على أجهزة الموبايل

(function() {
    'use strict';
    
    console.log('🚨 ULTIMATE Mobile Loading Screen Killer Activated');
    
    // Detect mobile with multiple methods
    const isMobile = 
        window.innerWidth <= 768 ||
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.orientation !== undefined ||
        screen.width <= 768;
    
    console.log('📱 Mobile detection result:', isMobile);
    console.log('📏 Screen width:', window.innerWidth);
    console.log('👆 Touch events:', 'ontouchstart' in window);
    console.log('🖐️ Max touch points:', navigator.maxTouchPoints);
    console.log('🔄 Has orientation:', window.orientation !== undefined);
    
    if (!isMobile) {
        console.log('🖥️ Desktop detected, skipping mobile fixes');
        return;
    }
    
    // NUCLEAR FUNCTION - Complete destruction of loading screen
    function nukeLoadingScreen() {
        const selectors = [
            '#loading-screen',
            '.loading-screen',
            '[id*="loading"]',
            '[class*="loading"]',
            '[class*="loader"]'
        ];
        
        let nukesDeployed = 0;
        
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (element && element.parentNode) {
                    // Complete style override
                    element.style.cssText = `
                        display: none !important;
                        opacity: 0 !important;
                        visibility: hidden !important;
                        z-index: -9999 !important;
                        pointer-events: none !important;
                        position: absolute !important;
                        top: -100vh !important;
                        left: -100vw !important;
                        transform: scale(0) !important;
                        max-height: 0 !important;
                        max-width: 0 !important;
                        overflow: hidden !important;
                    `;
                    
                    // Add destruction class
                    element.classList.add('loading-screen-destroyed');
                    
                    // Remove from DOM
                    element.remove();
                    nukesDeployed++;
                    
                    console.log(`💥 NUKED: ${selector} (${nukesDeployed} total)`);
                }
            });
        });
        
        return nukesDeployed > 0;
    }
    
    // IMMEDIATE EXECUTION - Before DOM is ready
    console.log('⚡ IMMEDIATE: Executing mobile loading screen destruction');
    
    // Multiple immediate attempts
    setTimeout(() => nukeLoadingScreen(), 10);   // 10ms
    setTimeout(() => nukeLoadingScreen(), 50);   // 50ms
    setTimeout(() => nukeLoadingScreen(), 100);  // 100ms
    setTimeout(() => nukeLoadingScreen(), 200);  // 200ms
    setTimeout(() => nukeLoadingScreen(), 300);  // 300ms
    setTimeout(() => nukeLoadingScreen(), 500);  // 500ms
    
    // DOM Content Loaded handler
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            console.log('📄 DOM Ready - Mobile nuclear protocol engaged');
            
            setTimeout(() => nukeLoadingScreen(), 0);    // Immediate
            setTimeout(() => nukeLoadingScreen(), 100);  // 100ms after DOM
            setTimeout(() => nukeLoadingScreen(), 250);  // 250ms after DOM
            setTimeout(() => nukeLoadingScreen(), 500);  // 500ms after DOM
        });
    } else {
        console.log('📄 DOM already ready - Immediate nuclear protocol');
        nukeLoadingScreen();
    }
    
    // Window load handler
    if (document.readyState !== 'complete') {
        window.addEventListener('load', function() {
            console.log('🏁 Window loaded - Final mobile nuclear strike');
            setTimeout(() => nukeLoadingScreen(), 0);    // Immediate
            setTimeout(() => nukeLoadingScreen(), 100);  // 100ms after load
        });
    } else {
        console.log('🏁 Window already loaded - Immediate final strike');
        nukeLoadingScreen();
    }
    
    // CONTINUOUS NUCLEAR PROTOCOL - Every 100ms for 5 seconds
    let nuclearAttempts = 0;
    const maxAttempts = 50; // 5 seconds
    
    const nuclearInterval = setInterval(() => {
        nuclearAttempts++;
        const nuked = nukeLoadingScreen();
        
        if (nuked) {
            console.log(`🚨 CONTINUOUS NUCLEAR STRIKE #${nuclearAttempts}: Targets destroyed`);
        }
        
        // Stop after max attempts
        if (nuclearAttempts >= maxAttempts) {
            clearInterval(nuclearInterval);
            console.log(`💥 Nuclear protocol completed after ${nuclearAttempts} attempts`);
        }
    }, 100);
    
    // OBSERVER PATTERN - Watch for new loading screens
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const loadingElements = node.querySelectorAll ? 
                        node.querySelectorAll('#loading-screen, .loading-screen, [class*="loading"], [class*="loader"]') : 
                        [];
                    
                    if (loadingElements.length > 0 || 
                        (node.id && node.id.includes('loading')) ||
                        (node.className && typeof node.className === 'string' && node.className.includes('loading'))) {
                        
                        console.log('👀 OBSERVER: New loading element detected, destroying...');
                        setTimeout(() => nukeLoadingScreen(), 0);
                    }
                }
            });
        });
    });
    
    // Start observing when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
            console.log('👀 OBSERVER: Watching for new loading screens');
        });
    } else {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        console.log('👀 OBSERVER: Already watching for new loading screens');
    }
    
    // EMERGENCY OVERRIDE - CSS injection
    const emergencyCSS = document.createElement('style');
    emergencyCSS.textContent = `
        @media screen and (max-width: 768px) {
            #loading-screen,
            .loading-screen,
            [id*="loading"],
            [class*="loading"],
            [class*="loader"] {
                display: none !important;
                opacity: 0 !important;
                visibility: hidden !important;
                z-index: -9999 !important;
                pointer-events: none !important;
                position: absolute !important;
                top: -100vh !important;
                left: -100vw !important;
                transform: scale(0) !important;
                max-height: 0 !important;
                max-width: 0 !important;
                overflow: hidden !important;
            }
        }
    `;
    document.head.appendChild(emergencyCSS);
    console.log('💉 EMERGENCY CSS: Injected mobile loading screen killer styles');
    
    // FINAL FAILSAFE - Ultimate destruction after 3 seconds
    setTimeout(() => {
        console.log('🔥 FINAL FAILSAFE: Ultimate loading screen destruction');
        nukeLoadingScreen();
        
        // Additional DOM cleanup
        const body = document.body;
        if (body) {
            body.classList.remove('loading');
            body.style.overflow = '';
        }
        
        // Force show main content
        const mainContent = document.querySelector('main, .main-content, #main, .container');
        if (mainContent) {
            mainContent.style.display = '';
            mainContent.style.opacity = '1';
            mainContent.style.visibility = 'visible';
        }
        
        console.log('✅ MOBILE LOADING SCREEN KILLER: Mission completed');
    }, 3000);
    
})();
