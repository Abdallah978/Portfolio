// ===== Translation System =====
class TranslationManager {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {
            en: {
                // Navigation
                home: 'Home',
                about: 'About',
                skills: 'Skills',
                projects: 'Projects',
                certificates: 'Certificates',
                contact: 'Contact',
                
                // Hero Section
                greeting: "Hello, I'm",
                heroSubtitle: 'Full Stack Developer | AI Specialist | Cybersecurity Expert',
                heroDescription: 'Passionate about creating innovative digital solutions that make a real impact. Let\'s build something amazing together.',
                viewMyWork: 'View My Work',
                getInTouch: 'Get In Touch',
                scrollDown: 'Scroll Down',
                
                // About Section
                aboutTitle: 'About Me',
                aboutSubtitle: 'Discover my journey and expertise',
                professionalBackground: 'Professional Background',
                aboutDescription: 'I am a versatile technology professional with expertise spanning multiple domains including web development, artificial intelligence, cybersecurity, and digital marketing. My passion lies in creating innovative solutions that bridge the gap between technology and real-world business needs.',
                projectsCompleted: 'Projects Completed',
                certificatesEarned: 'Certificates Earned',
                yearsExperience: 'Years Experience',
                aboutQuote: 'I don\'t just look for a job... I seek an environment where I can achieve real results.',
                
                // Skills Section
                skillsTitle: 'My Skills',
                skillsSubtitle: 'Expertise across multiple domains',
                webDevelopment: 'Web Development',
                artificialIntelligence: 'Artificial Intelligence',
                cybersecurity: 'Cybersecurity',
                digitalMarketing: 'Digital Marketing',
                gisMapping: 'GIS & Mapping',
                uiuxDesign: 'UI/UX Design',
                
                // Projects Section
                projectsTitle: 'Featured Projects',
                projectsSubtitle: 'Showcasing my latest work and achievements',
                allProjects: 'All Projects',
                webDev: 'Web Development',
                aiMl: 'AI & Machine Learning',
                mobileApps: 'Mobile Apps',
                design: 'UI/UX Design',
                viewAllProjects: 'View All Projects',
                
                // Project Descriptions
                ecommerceTitle: 'E-commerce Platform',
                ecommerceDesc: 'Full-stack e-commerce solution with advanced features including payment integration, inventory management, and analytics dashboard.',
                aiSystemTitle: 'AI Prediction System',
                aiSystemDesc: 'Machine learning model for predictive analytics with real-time data processing and visualization capabilities.',
                healthAppTitle: 'Healthcare Mobile App',
                healthAppDesc: 'Cross-platform mobile application for patient management, appointment scheduling, and health monitoring.',
                corporateWebsiteTitle: 'Corporate Website Design',
                corporateWebsiteDesc: 'Modern and professional corporate website design with focus on user experience and brand identity.',
                bankingUITitle: 'Banking UI System',
                bankingUIDesc: 'Secure and intuitive banking interface with advanced security features and real-time transaction monitoring.',
                chatbotTitle: 'AI-Powered Chatbot',
                chatbotDesc: 'Intelligent chatbot with natural language processing capabilities for customer support and engagement.',
                
                // Certificates Section
                certificatesTitle: 'Certificates & Achievements',
                certificatesSubtitle: 'Professional certifications and continuous learning journey',
                academic: 'Academic',
                professional: 'Professional',
                onlineCourses: 'Online Courses',                // Certificate Names
                humanResourcesCert: 'Human Resources Certification',
                fullStackDev: 'Full Stack Web Development',
                digitalMarketingExpert: 'Digital Marketing Expert',
                professionalEnglish: 'Professional English Network',
                machineLearningSpec: 'Machine Learning Specialization',
                digitalSkillsCourse: 'Digital Skills Course',
                onlineLearningCert: 'Online Learning Certificate',
                professionalDevelopment: 'Professional Development',
                universityDegree: 'Bachelor\'s Degree in Earth Sciences & Remote Sensing',
                forDisplayOnly: 'For Display Only',
                
                // Certificate Issuers
                hrciInstitute: 'HR Certification Institute',
                specializedInstitute: 'Specialized Institute',
                alephAcademy: 'Aleph Academy',
                usDepartmentState: 'US Department of State',
                coursera: 'Coursera',
                edraak: 'Edraak',
                easytonline: 'Easyt.online',
                mindLuster: 'Mind Luster',
                universityKarkh: 'University of Karkh for Science',
                
                // Contact Section
                contactTitle: 'Get In Touch',
                contactSubtitle: 'Let\'s discuss your next project',
                email: 'Email',
                location: 'Location',
                availableRemote: 'Available for Remote Work',
                yourName: 'Your Name',
                yourEmail: 'Your Email',
                subject: 'Subject',
                yourMessage: 'Your Message',
                sendMessage: 'Send Message',
                
                // Footer
                footerDescription: 'Creating innovative digital solutions that make a real impact.',
                quickLinks: 'Quick Links',
                services: 'Services',
                contactInfo: 'Contact Info',
                allRightsReserved: 'All rights reserved.',
                availableWorldwide: 'Available Worldwide',
                
                // Services
                webDevelopmentService: 'Web Development',
                aiSolutions: 'AI Solutions',
                cybersecurityService: 'Cybersecurity',
                uiuxService: 'UI/UX Design',
                
                // Loading and Messages
                loading: 'Loading...',
                messageSent: 'Message sent successfully!',
                fillField: 'Please fill in the {field} field.',
                validEmail: 'Please enter a valid email address.',
                
                // Specializations
                humanResources: 'Human Resources',
                talentManagement: 'Talent Management and Recruitment',
                policyDevelopment: 'Policy and Procedure Development',
                hrAnalytics: 'HR Data Analysis',
                socialMediaMarketing: 'Social Media Marketing',
                marketingAnalytics: 'Marketing Data Analysis',
                campaignManagement: 'Digital Campaign Management',
                interactiveWebApps: 'Interactive Web Applications',
                responsiveWebsites: 'Professional Responsive Websites',
                cmsystems: 'Content Management Systems',
                riskAssessment: 'Security Risk Assessment',
                securitySolutions: 'Security Solutions Development',
                systemMonitoring: 'System Monitoring',
                spatialAnalysis: 'Spatial Data Analysis',
                interactiveMaps: 'Interactive Maps',
                environmentalMonitoring: 'Environmental Monitoring Systems',
                userInterface: 'User Interface Design',
                userExperience: 'User Experience Development',
                interactivePrototypes: 'Interactive Prototyping'
            },
            ar: {
                // Navigation
                home: 'الرئيسية',
                about: 'نبذة عني',
                skills: 'المهارات',
                projects: 'المشاريع',
                certificates: 'الشهادات',
                contact: 'التواصل',
                
                // Hero Section
                greeting: 'مرحباً، أنا',
                heroSubtitle: 'مطور متكامل | متخصص ذكاء اصطناعي | خبير أمن سيبراني',
                heroDescription: 'شغوف بإنشاء حلول رقمية مبتكرة تحدث أثراً حقيقياً. دعنا نبني شيئاً رائعاً معاً.',
                viewMyWork: 'مشاهدة أعمالي',
                getInTouch: 'تواصل معي',
                scrollDown: 'مرر للأسفل',
                
                // About Section
                aboutTitle: 'نبذة عني',
                aboutSubtitle: 'اكتشف رحلتي وخبرتي',
                professionalBackground: 'الخلفية المهنية',
                aboutDescription: 'أنا محترف تقني متعدد الاختصاصات بخبرة تمتد عبر مجالات متعددة بما في ذلك تطوير الويب والذكاء الاصطناعي والأمن السيبراني والتسويق الرقمي. شغفي يكمن في إنشاء حلول مبتكرة تربط بين التكنولوجيا واحتياجات الأعمال الحقيقية.',
                projectsCompleted: 'مشروع مكتمل',
                certificatesEarned: 'شهادة حاصل عليها',
                yearsExperience: 'سنوات خبرة',
                aboutQuote: 'لا أبحث عن وظيفة فقط... أبحث عن بيئة أحقق فيها نتائج حقيقية.',
                
                // Skills Section
                skillsTitle: 'مهاراتي',
                skillsSubtitle: 'خبرة عبر مجالات متعددة',
                webDevelopment: 'تطوير الويب',
                artificialIntelligence: 'الذكاء الاصطناعي',
                cybersecurity: 'الأمن السيبراني',
                digitalMarketing: 'التسويق الرقمي',
                gisMapping: 'نظم المعلومات الجغرافية',
                uiuxDesign: 'تصميم واجهات المستخدم',
                
                // Projects Section
                projectsTitle: 'المشاريع المميزة',
                projectsSubtitle: 'عرض أحدث أعمالي وإنجازاتي',
                allProjects: 'جميع المشاريع',
                webDev: 'تطوير الويب',
                aiMl: 'الذكاء الاصطناعي',
                mobileApps: 'تطبيقات الهاتف',
                design: 'تصميم واجهات',
                viewAllProjects: 'مشاهدة جميع المشاريع',
                
                // Project Descriptions
                ecommerceTitle: 'منصة تجارة إلكترونية',
                ecommerceDesc: 'حل تجارة إلكترونية متكامل مع ميزات متقدمة تشمل تكامل الدفع وإدارة المخزون ولوحة تحليلات.',
                aiSystemTitle: 'نظام التنبؤ بالذكاء الاصطناعي',
                aiSystemDesc: 'نموذج تعلم آلي للتحليل التنبؤي مع قدرات معالجة البيانات في الوقت الفعلي والتصور.',
                healthAppTitle: 'تطبيق الرعاية الصحية',
                healthAppDesc: 'تطبيق جوال متعدد المنصات لإدارة المرضى وجدولة المواعيد ومراقبة الصحة.',
                corporateWebsiteTitle: 'تصميم موقع الشركة',
                corporateWebsiteDesc: 'تصميم موقع شركة حديث ومهني مع التركيز على تجربة المستخدم وهوية العلامة التجارية.',
                bankingUITitle: 'نظام واجهة البنك',
                bankingUIDesc: 'واجهة بنكية آمنة وسهلة الاستخدام مع ميزات أمان متقدمة ومراقبة المعاملات في الوقت الفعلي.',
                chatbotTitle: 'روبوت الدردشة الذكي',
                chatbotDesc: 'روبوت دردشة ذكي مع قدرات معالجة اللغة الطبيعية لدعم العملاء والمشاركة.',
                
                // Certificates Section
                certificatesTitle: 'الشهادات والإنجازات',
                certificatesSubtitle: 'الشهادات المهنية ورحلة التعلم المستمر',
                academic: 'أكاديمية',
                professional: 'مهنية',
                onlineCourses: 'دورات أونلاين',                // Certificate Names
                humanResourcesCert: 'شهادة الموارد البشرية',
                fullStackDev: 'تطوير الويب الكامل',
                digitalMarketingExpert: 'خبير التسويق الرقمي',
                professionalEnglish: 'شبكة الإنجليزية المهنية',                machineLearningSpec: 'تخصص التعلم الآلي',
                employeeDevelopmentSpec: 'تخصص تطوير الموظفين',
                digitalSkillsCourse: 'دورة المهارات الرقمية',
                cybersecuritySpec2023: 'تخصص الأمن السيبراني 2023',
                onlineLearningCert: 'شهادة التعلم الإلكتروني',
                cybersecurity2023: 'الأمن السيبراني 2023',
                professionalDevelopment: 'التطوير المهني',
                universityDegree: 'بكالوريوس في علوم الأرض والتحسس النائي',
                forDisplayOnly: 'للعرض فقط',
                
                // Certificate Issuers
                hrciInstitute: 'معهد شهادات الموارد البشرية',
                specializedInstitute: 'معهد متخصص',
                alephAcademy: 'أكاديمية أليف',
                usDepartmentState: 'وزارة الخارجية الأمريكية',
                coursera: 'كورسيرا',
                edraak: 'إدراك',
                easytonline: 'إيزي تي أونلاين',
                mindLuster: 'مايند لستر',
                universityKarkh: 'جامعة الكرخ للعلوم',
                
                // Contact Section
                contactTitle: 'تواصل معي',
                contactSubtitle: 'دعنا نناقش مشروعك القادم',
                email: 'البريد الإلكتروني',
                location: 'الموقع',
                availableRemote: 'متاح للعمل عن بُعد',
                yourName: 'اسمك',
                yourEmail: 'بريدك الإلكتروني',
                subject: 'الموضوع',
                yourMessage: 'رسالتك',
                sendMessage: 'إرسال الرسالة',
                
                // Footer
                footerDescription: 'إنشاء حلول رقمية مبتكرة تحدث أثراً حقيقياً.',
                quickLinks: 'روابط سريعة',
                services: 'الخدمات',
                contactInfo: 'معلومات التواصل',
                allRightsReserved: 'جميع الحقوق محفوظة.',
                availableWorldwide: 'متاح عالمياً',
                
                // Services
                webDevelopmentService: 'تطوير الويب',
                aiSolutions: 'حلول الذكاء الاصطناعي',
                cybersecurityService: 'الأمن السيبراني',
                uiuxService: 'تصميم واجهات المستخدم',
                
                // Loading and Messages
                loading: 'جاري التحميل...',
                messageSent: 'تم إرسال الرسالة بنجاح!',
                fillField: 'يرجى ملء حقل {field}.',
                validEmail: 'يرجى إدخال عنوان بريد إلكتروني صحيح.',
                
                // Specializations
                humanResources: 'الموارد البشرية',
                talentManagement: 'إدارة المواهب والتوظيف',
                policyDevelopment: 'تطوير السياسات والإجراءات',
                hrAnalytics: 'تحليل البيانات HR',
                socialMediaMarketing: 'استراتيجيات وسائل التواصل',
                marketingAnalytics: 'تحليل البيانات التسويقية',
                campaignManagement: 'إدارة الحملات الرقمية',
                interactiveWebApps: 'تطبيقات ويب تفاعلية',
                responsiveWebsites: 'مواقع احترافية متجاوبة',
                cmsystems: 'أنظمة إدارة محتوى',
                riskAssessment: 'تقييم المخاطر الأمنية',
                securitySolutions: 'تطوير حلول الأمان',
                systemMonitoring: 'مراقبة الأنظمة',
                spatialAnalysis: 'تحليل البيانات المكانية',
                interactiveMaps: 'خرائط تفاعلية',
                environmentalMonitoring: 'نظم رصد بيئية',
                userInterface: 'تصميم واجهات المستخدم',
                userExperience: 'تطوير تجربة المستخدم',
                interactivePrototypes: 'النماذج الأولية التفاعلية'
            }
        };
        
        this.init();
    }
    
    init() {
        // Check for saved language preference
        const savedLanguage = localStorage.getItem('portfolio-language') || 'en';
        this.setLanguage(savedLanguage);
        
        // Add language toggle functionality
        this.addLanguageToggleListener();
    }
    
    setLanguage(language) {
        if (!this.translations[language]) {
            console.warn(`Language ${language} not supported, falling back to English`);
            language = 'en';
        }
        
        this.currentLanguage = language;
        
        // Update HTML attributes
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        
        // Save language preference
        localStorage.setItem('portfolio-language', language);
        
        // Update all translatable elements
        this.updateTranslatableElements();
        
        // Update language toggle button
        this.updateLanguageToggleButton();
        
        // Dispatch language change event
        this.dispatchLanguageChangeEvent();
    }
    
    updateTranslatableElements() {
        // Update elements with data attributes
        const translatableElements = document.querySelectorAll('[data-translate]');
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update elements with data-en and data-ar attributes (legacy support)
        const legacyElements = document.querySelectorAll('[data-en][data-ar]');
        legacyElements.forEach(element => {
            const text = element.getAttribute(`data-${this.currentLanguage}`);
            if (text) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = text;
                } else {
                    element.textContent = text;
                }
            }
        });
        
        // Update dynamic content
        this.updateDynamicContent();
    }
    
    updateDynamicContent() {
        // Update page title
        document.title = this.getTranslation('pageTitle') || 'Abdullah Mohammed Hamad - Portfolio';
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = this.getTranslation('metaDescription') || 
                'Professional portfolio showcasing expertise in web development, AI, cybersecurity, and digital solutions';
        }
        
        // Update typing effect if it exists
        this.updateTypingEffect();
    }
    
    updateTypingEffect() {
        const typingElement = document.querySelector('.typing-text');
        if (typingElement) {
            const subtitleText = this.getTranslation('heroSubtitle');
            if (subtitleText) {
                typingElement.textContent = subtitleText;
            }
        }
    }
    
    updateLanguageToggleButton() {
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            const langText = langToggle.querySelector('.lang-text');
            if (langText) {
                langText.textContent = this.currentLanguage === 'en' ? 'عربي' : 'English';
            }
            
            // Update title attribute
            langToggle.title = this.currentLanguage === 'en' ? 'التبديل إلى العربية' : 'Switch to English';
        }
    }
    
    addLanguageToggleListener() {
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                const newLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
                this.setLanguage(newLanguage);
            });
        }
    }
    
    getTranslation(key) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            if (translation && typeof translation === 'object') {
                translation = translation[k];
            } else {
                return null;
            }
        }
        
        return translation || this.translations.en[key] || key;
    }
    
    translate(key, placeholders = {}) {
        let translation = this.getTranslation(key);
        
        // Replace placeholders
        Object.keys(placeholders).forEach(placeholder => {
            const value = placeholders[placeholder];
            translation = translation.replace(`{${placeholder}}`, value);
        });
        
        return translation;
    }
    
    dispatchLanguageChangeEvent() {
        const event = new CustomEvent('languageChanged', {
            detail: {
                language: this.currentLanguage,
                isRTL: this.currentLanguage === 'ar'
            }
        });
        document.dispatchEvent(event);
    }
    
    // Method to add new translations dynamically
    addTranslations(language, translations) {
        if (!this.translations[language]) {
            this.translations[language] = {};
        }
        
        this.translations[language] = { ...this.translations[language], ...translations };
    }
    
    // Method to get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    // Method to check if current language is RTL
    isRTL() {
        return this.currentLanguage === 'ar';
    }
    
    // Method to format numbers based on language
    formatNumber(number) {
        if (this.currentLanguage === 'ar') {
            // Convert to Arabic-Indic numerals if needed
            return number.toString();
        }
        return number.toString();
    }
    
    // Method to format dates based on language
    formatDate(date) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        
        if (this.currentLanguage === 'ar') {
            return new Intl.DateTimeFormat('ar-SA', options).format(date);
        }
        
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }
}

// Initialize translation manager
const translationManager = new TranslationManager();

// Export for global access
window.translationManager = translationManager;

// Utility functions for easy translation access
window.t = function(key, placeholders) {
    return translationManager.translate(key, placeholders);
};

window.getCurrentLanguage = function() {
    return translationManager.getCurrentLanguage();
};

window.isRTL = function() {
    return translationManager.isRTL();
};

// Listen for language changes to update dynamic content
document.addEventListener('languageChanged', function(event) {
    console.log('Language changed to:', event.detail.language);
    
    // Update any dynamic content that needs special handling
    updateLanguageDependentStyles(event.detail.isRTL);
    updateLanguageDependentAnimations();
});

function updateLanguageDependentStyles(isRTL) {
    // Update CSS custom properties for RTL/LTR
    const root = document.documentElement;
    
    if (isRTL) {
        root.style.setProperty('--text-align-start', 'right');
        root.style.setProperty('--text-align-end', 'left');
        root.style.setProperty('--margin-start', 'margin-right');
        root.style.setProperty('--margin-end', 'margin-left');
        root.style.setProperty('--padding-start', 'padding-right');
        root.style.setProperty('--padding-end', 'padding-left');
    } else {
        root.style.setProperty('--text-align-start', 'left');
        root.style.setProperty('--text-align-end', 'right');
        root.style.setProperty('--margin-start', 'margin-left');
        root.style.setProperty('--margin-end', 'margin-right');
        root.style.setProperty('--padding-start', 'padding-left');
        root.style.setProperty('--padding-end', 'padding-right');
    }
}

function updateLanguageDependentAnimations() {
    // Restart animations that might be affected by language change
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        // Restart typing animation if it exists
        const animationName = typingElement.style.animationName;
        if (animationName) {
            typingElement.style.animationName = 'none';
            setTimeout(() => {
                typingElement.style.animationName = animationName;
            }, 10);
        }
    }
}

// Add CSS for language-specific styles
const languageStyles = document.createElement('style');
languageStyles.textContent = `
    /* RTL specific styles */
    [dir="rtl"] {
        font-family: 'Cairo', sans-serif;
    }
    
    [dir="rtl"] .nav-link::after {
        right: 0;
        left: auto;
    }
    
    [dir="rtl"] .hero-buttons {
        justify-content: flex-end;
    }
    
    [dir="rtl"] .about-quote blockquote::before {
        right: 0;
        left: auto;
    }
    
    [dir="rtl"] .about-quote blockquote::after {
        left: 0;
        right: auto;
    }
    
    [dir="rtl"] .scroll-indicator {
        transform: translateX(50%);
    }
    
    [dir="rtl"] .back-to-top {
        right: auto;
        left: 30px;
    }
    
    [dir="rtl"] .close {
        right: auto;
        left: 35px;
    }
    
    [dir="rtl"] .form-group label {
        left: auto;
        right: var(--spacing-md);
    }
    
    [dir="rtl"] .form-group input:focus + label,
    [dir="rtl"] .form-group textarea:focus + label,
    [dir="rtl"] .form-group input:valid + label,
    [dir="rtl"] .form-group textarea:valid + label {
        right: var(--spacing-sm);
        left: auto;
    }
    
    [dir="rtl"] .project-tech {
        justify-content: flex-end;
    }
    
    [dir="rtl"] .hero-buttons {
        flex-direction: row-reverse;
    }
    
    [dir="rtl"] .contact-item {
        flex-direction: row-reverse;
        text-align: right;
    }
    
    [dir="rtl"] .social-links {
        justify-content: flex-end;
    }
    
    [dir="rtl"] .nav-controls {
        flex-direction: row-reverse;
    }
    
    /* LTR specific styles */
    [dir="ltr"] {
        font-family: 'Poppins', sans-serif;
    }
    
    /* Language transition animations */
    .translate-element {
        transition: opacity 0.3s ease;
    }
    
    .translate-element.changing {
        opacity: 0;
    }
    
    /* Typography adjustments for Arabic */
    [dir="rtl"] h1, [dir="rtl"] h2, [dir="rtl"] h3, [dir="rtl"] h4, [dir="rtl"] h5, [dir="rtl"] h6 {
        font-weight: 600;
        line-height: 1.4;
    }
    
    [dir="rtl"] p, [dir="rtl"] li {
        line-height: 1.8;
    }
    
    [dir="rtl"] .hero-title {
        line-height: 1.3;
    }
    
    [dir="rtl"] .section-title {
        font-weight: 700;
    }
    
    /* Arabic number formatting */
    [dir="rtl"] .stat-number {
        font-family: 'Poppins', sans-serif;
    }
    
    /* Responsive typography for Arabic */
    @media (max-width: 768px) {
        [dir="rtl"] .hero-title {
            font-size: var(--font-size-2xl);
            line-height: 1.2;
        }
        
        [dir="rtl"] .section-title {
            font-size: var(--font-size-2xl);
        }
    }
`;

document.head.appendChild(languageStyles);

// Enhanced notification system with translation support
function showTranslatedNotification(messageKey, type = 'info', placeholders = {}) {
    const message = translationManager.translate(messageKey, placeholders);
    if (window.portfolioApp && window.portfolioApp.showNotification) {
        window.portfolioApp.showNotification(message, type);
    }
}

// Export translated notification function
window.showTranslatedNotification = showTranslatedNotification;

// Auto-detect browser language on first visit
if (!localStorage.getItem('portfolio-language')) {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const supportedLanguage = browserLanguage.startsWith('ar') ? 'ar' : 'en';
    translationManager.setLanguage(supportedLanguage);
}

console.log('Translation system initialized with language:', translationManager.getCurrentLanguage());
