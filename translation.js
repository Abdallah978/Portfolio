// ====== Language Translation System ======

class LanguageTranslator {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'ar';
        this.translations = {
            en: {
                // Navigation
                'nav-home': 'Home',
                'nav-about': 'About',
                'nav-skills': 'Skills', 
                'nav-portfolio': 'Portfolio',
                'nav-certificates': 'Certificates',
                'nav-contact': 'Contact',
                
                // Hero Section
                'hero-greeting': "Hello, I'm",
                'hero-name': 'Abdullah Mohammed Hamad',
                'hero-description': 'Passionate about modern technologies, experienced in skill development, and striving to make a real impact in every team I work with',
                'hero-view-work': 'View My Work',
                'hero-contact': 'Contact Me',
                
                // Typing Effect
                'typing-texts': [
                    'HR Specialist',
                    'Digital Marketing Expert', 
                    'Web Developer',
                    'Cybersecurity Analyst',
                    'GIS Specialist',
                    'UI/UX Designer'
                ],
                
                // About Section
                'about-subtitle': 'Get to Know Me',
                'about-title': 'About Me',
                'about-intro-title': 'Looking for an environment where I can achieve real results... not just a job',
                'about-intro-text': 'I am Abdullah Mohammed Hamad, a graduate of Al-Karkh University of Science - Baghdad, with a specialization in Earth Sciences and Remote Sensing. I have combined my academic background with my technical and managerial skills to create a professional mix that serves me in the world of business, technology, and analysis.',
                'about-education-title': 'Education',
                'about-education-text': 'Bachelor of Earth Sciences and Remote Sensing<br>Al-Karkh University of Science - Baghdad',
                'about-specializations-title': 'Specializations',
                'about-specializations-text': 'Human Resources, Digital Marketing, Web Development,<br>Cybersecurity, and Geographic Information Systems',
                'about-goal-title': 'Goal',
                'about-goal-text': 'Make a real impact in an advanced technical environment<br>and contribute to the success of teams and projects',
                'stat-projects': 'Completed Projects',
                'stat-certificates': 'Certificates',
                'stat-specializations': 'Specializations',
                'stat-commitment': '% Commitment',
                
                // Skills Section
                'skills-subtitle': 'What I Do',
                'skills-title': 'Skills & Expertise',
                  // Skills Card Titles
                'skill-hr-title': 'Human Resources',
                'skill-marketing-title': 'Digital Marketing',
                'skill-web-title': 'Web Development',
                'skill-cyber-title': 'Cybersecurity',
                'skill-gis-title': 'GIS Systems',
                'skill-design-title': 'UI/UX Design',
                
                // Portfolio Section
                'portfolio-subtitle': 'My Work',
                'portfolio-title': 'Featured Projects',
                'portfolio-all-projects': 'View All Projects',
                
                // Featured Projects
                'project-view-live': 'View Live',
                'project-view-code': 'View Code',
                'project-details': 'More Details',
                'project-web-category': 'Web Development',
                'project-mobile-category': 'Mobile Apps',
                'project-ai-category': 'AI & ML',
                'project-design-category': 'Design',
                'project-system-category': 'Systems',
                
                // Portfolio Gallery Page
                'gallery-breadcrumb-home': 'Home',
                'gallery-breadcrumb-portfolio': 'Portfolio Gallery',
                'gallery-hero-title': 'My Portfolio Gallery',
                'gallery-hero-description': 'Explore a comprehensive collection of my projects across various technical fields, from web development and applications to artificial intelligence and design',
                'gallery-stat-projects': 'Completed Projects',
                'gallery-stat-specializations': 'Specializations',
                'gallery-stat-clients': 'Satisfied Clients',
                'gallery-stat-success': 'Success Rate',
                
                // Project Categories
                'categories-subtitle': 'Project Categories',
                'categories-title': 'Browse by Specialization',
                'category-web-title': 'Web Development',
                'category-web-desc': 'Professional websites and interactive web applications',
                'category-web-count': '15 Projects',
                'category-mobile-title': 'Mobile Applications',
                'category-mobile-desc': 'Smart applications for Android & iOS',
                'category-mobile-count': '8 Projects',
                'category-ai-title': 'Artificial Intelligence',
                'category-ai-desc': 'Smart solutions and advanced machine learning systems',
                'category-ai-count': '10 Projects',
                'category-design-title': 'Design & Identity',
                'category-design-desc': 'Visual identity design and marketing materials',
                'category-design-count': '12 Projects',
                'category-dashboard-title': 'Dashboards',
                'category-dashboard-desc': 'Management and data analysis systems',
                'category-dashboard-count': '9 Projects',
                'category-system-title': 'Integrated Systems',
                'category-system-desc': 'Comprehensive technical solutions for enterprises',
                'category-system-count': '7 Projects',
                
                // Featured Projects Section
                'featured-subtitle': 'Featured Projects',
                'featured-title': 'My Best Work',
                
                // Individual Projects
                'project-ecommerce-title': 'Advanced E-commerce Platform',
                'project-ecommerce-desc': 'Comprehensive e-commerce system including product management, order processing, and multiple payment systems',
                'project-ecommerce-overlay-title': 'Comprehensive E-commerce Platform',
                'project-ecommerce-overlay-desc': 'Integrated platform for e-commerce with advanced management system and electronic payment support',
                'project-ai-title': 'Smart Prediction System',
                'project-ai-desc': 'Smart system for predicting trends and data using advanced machine learning techniques',
                'project-ai-overlay-title': 'Smart Prediction System',
                'project-ai-overlay-desc': 'Smart system for predicting trends and data using advanced machine learning techniques',
                'project-dashboard-title': 'Advanced Analytics Dashboard',
                'project-dashboard-desc': 'Interactive dashboard for data analysis and business intelligence with real-time reporting',
                'project-mobile-title': 'Multi-Platform Mobile App',
                'project-mobile-desc': 'Cross-platform mobile application with modern UI and comprehensive features',
                'project-gis-title': 'GIS Mapping System',
                'project-gis-desc': 'Advanced Geographic Information System with interactive mapping and spatial analysis',
                'project-hr-title': 'HR Management System',
                'project-hr-desc': 'Comprehensive human resources management system with employee tracking and analytics',
                
                // Contact Section
                'contact-subtitle': 'Get In Touch',
                'contact-title': 'Contact Me',
                'contact-description': "I'm always open to discussing new opportunities and exciting projects. Let's connect and create something amazing together!",
                'contact-name': 'Your Name',
                'contact-email': 'Your Email',
                'contact-subject': 'Subject',
                'contact-message': 'Your Message',
                'contact-send': 'Send Message',
                'contact-info-title': 'Contact Information',
                'contact-email-label': 'Email',
                'contact-phone-label': 'Phone',                'contact-location-label': 'Location',
                'contact-availability-label': 'Availability',
                
                // Footer Brand
                'footer-brand-welcome': 'Welcome to my digital world… where value is created and impact is made',
                
                // Additional UI Elements
                'modal-close': 'Close',
                'modal-view-project': 'View Project',
                'modal-view-code': 'View Code',
                'modal-technologies': 'Technologies Used',
                'modal-features': 'Key Features',
                'modal-challenges': 'Challenges & Solutions',
                
                // CTA Features
                'cta-feature-consultation': 'Free Consultation',
                'cta-feature-delivery': 'On-Time Delivery',
                'cta-feature-quality': 'Quality Guarantee',
                'cta-feature-support': 'Continuous Support',
                
                // Portfolio Gallery Specific
                'gallery-start-project': 'Start Your Project Now',
                'gallery-direct-contact': 'Direct Contact',
                
                // Footer
                'footer-description': 'Passionate about modern technologies and creating innovative solutions that make a real impact',
                'footer-tagline': 'Welcome to my digital world… where value is created and impact is made',
                'footer-quick-links': 'Quick Links',
                'footer-services': 'Services',
                'footer-follow': 'Follow Me',
                'footer-copyright': 'All rights reserved.',
                
                // Portfolio Gallery Specific
                'gallery-footer-brand': 'Abdullah Mohammed Hamad',
                'gallery-footer-tagline': 'Welcome to my digital world… where value is created and impact is made',
                
                // Loading & UI Elements
                'loading': 'Loading...',
                'scroll-down': 'Scroll Down',
                'back-to-top': 'Back to Top',
                  // Additional UI
                'view-project': 'View Project',
                'view-code': 'View Code',
                'free-consultation': 'Free Consultation',
                'on-time-delivery': 'On-Time Delivery',
                'quality-guarantee': 'Quality Guarantee',
                'continuous-support': 'Continuous Support',
                'start-project-now': 'Start Your Project Now',
                'direct-contact': 'Direct Contact',
                
                // Portfolio Gallery - Additional Projects
                'project-smart-assistant': 'Interactive Smart Assistant',
                'project-smart-assistant-desc': 'Smart chatbot for customer service',
                'project-brand-identity': 'Complete Brand Identity', 
                'project-brand-identity-desc': 'Comprehensive identity design for companies',
                'project-interactive-dashboard': 'Interactive Dashboard',
                'project-interactive-dashboard-desc': 'Data management and analysis system with modern interface',
                'project-hr-management': 'HR Management System',
                'project-hr-management-desc': 'Comprehensive human resource management solution',
                'project-hospital-management': 'Hospital Management System',
                'project-hospital-management-desc': 'Integrated medical management solution',
                
                // Footer Links Translation
                'footer-home': 'Home',
                'footer-about': 'About Me',
                'footer-skills': 'Skills',
                'footer-portfolio': 'Portfolio',
                'footer-web-dev': 'Web Development',
                'footer-mobile-apps': 'Mobile Apps',
                'footer-ai': 'Artificial Intelligence',                'footer-design': 'Design',
                'footer-email': 'Email',
                'footer-contact-form': 'Contact Form',
                
                // Modal and Form Elements
                'modal-project-details': 'Project Details',
                'form-full-name': 'Full Name',
                'form-email-address': 'Email Address',
                'form-company': 'Company / Organization',
                'form-subject': 'Subject',
                'form-project-details': 'Project Details',
                'form-budget': 'Expected Budget',
                'form-send-message': 'Send Message',
                'form-submit': 'Submit',
                'form-cancel': 'Cancel',
                'form-required': 'Required',
                'form-optional': 'Optional',
                
                // Status and Availability
                'status-available': 'Available for new projects',
                'status-busy': 'Currently busy',
                'status-offline': 'Offline',
                'availability-full-time': 'Full-time',
                'availability-part-time': 'Part-time',
                'availability-freelance': 'Freelance',
                
                // Certificate Tabs
                'tab-academic': 'Academic Certificates',
                'tab-professional': 'Professional Certificates', 
                'tab-courses': 'Training Courses',
                
                // Features and Benefits
                'feature-consultation': 'Free Consultation',
                'feature-delivery': 'On-Time Delivery',
                'feature-quality': 'Quality Guarantee',
                'feature-support': 'Continuous Support',
                
                // Button Actions
                'btn-view-live': 'View Live',
                'btn-view-code': 'View Code',
                'btn-view-demo': 'View Demo',
                'btn-more-info': 'More Info',
                'btn-close': 'Close',
                'btn-back': 'Back',
                'btn-next': 'Next',
                'btn-previous': 'Previous'
            },
            ar: {
                // Navigation
                'nav-home': 'الرئيسية',
                'nav-about': 'نبذة عني',
                'nav-skills': 'المهارات',
                'nav-portfolio': 'أعمالي',
                'nav-certificates': 'الشهادات',
                'nav-contact': 'تواصل معي',
                
                // Hero Section
                'hero-greeting': 'مرحباً، أنا',
                'hero-name': 'عبد الله محمد حمد',
                'hero-description': 'شغوف بالتقنيات الحديثة، متمرس في تطوير المهارات، وأسعى لصنع أثر حقيقي في كل فريق أعمل معه',
                'hero-view-work': 'مشاهدة أعمالي',
                'hero-contact': 'تواصل معي',
                
                // Typing Effect
                'typing-texts': [
                    'أخصائي موارد بشرية',
                    'خبير تسويق رقمي',
                    'مطوّر ويب',
                    'محلل أمن سيبراني',
                    'أخصائي GIS',
                    'مصمم UI/UX'
                ],
                
                // About Section
                'about-subtitle': 'تعرف عليّ أكثر',
                'about-title': 'نبذة عني',
                'about-intro-title': 'أبحث عن بيئة أحقق فيها نتائج حقيقية… لا مجرد وظيفة',
                'about-intro-text': 'أنا عبد الله محمد حمد، خريج جامعة الكرخ للعلوم – بغداد، بتخصص علوم الأرض والتحسس النائي. جمعت بين خلفيتي الأكاديمية ومهاراتي التقنية والإدارية لتكوين مزيج احترافي يخدمني في عالم الأعمال، التكنولوجيا، والتحليل.',
                'about-education-title': 'التعليم',
                'about-education-text': 'بكالوريوس علوم الأرض والتحسس النائي<br>جامعة الكرخ للعلوم - بغداد',
                'about-specializations-title': 'التخصصات',
                'about-specializations-text': 'موارد بشرية، تسويق رقمي، تطوير ويب،<br>أمن سيبراني، وأنظمة المعلومات الجغرافية',
                'about-goal-title': 'الهدف',
                'about-goal-text': 'صنع أثر حقيقي في بيئة تقنية متقدمة<br>والمساهمة في نجاح الفرق والمشاريع',
                'stat-projects': 'مشروع منجز',
                'stat-certificates': 'شهادة معتمدة',
                'stat-specializations': 'مجال تخصص',
                'stat-commitment': '% التزام',
                
                // Skills Section
                'skills-subtitle': 'ما أجيده',
                'skills-title': 'المهارات والخبرات',
                  // Skills Card Titles
                'skill-hr-title': 'الموارد البشرية',
                'skill-marketing-title': 'التسويق الرقمي',
                'skill-web-title': 'تطوير الويب',
                'skill-cyber-title': 'الأمن السيبراني',
                'skill-gis-title': 'أنظمة GIS',
                'skill-design-title': 'تصميم UI/UX',
                
                // Portfolio Section
                'portfolio-subtitle': 'أعمالي',
                'portfolio-title': 'المشاريع المميزة',
                'portfolio-all-projects': 'مشاهدة جميع المشاريع',
                
                // Featured Projects
                'project-view-live': 'معاينة حية',
                'project-view-code': 'مشاهدة الكود',
                'project-details': 'تفاصيل أكثر',
                'project-web-category': 'تطوير ويب',
                'project-mobile-category': 'تطبيقات الجوال',
                'project-ai-category': 'ذكاء اصطناعي',
                'project-design-category': 'تصميم',
                'project-system-category': 'أنظمة',
                
                // Portfolio Gallery Page
                'gallery-breadcrumb-home': 'الرئيسية',
                'gallery-breadcrumb-portfolio': 'معرض الأعمال',
                'gallery-hero-title': 'معرض أعمالي',
                'gallery-hero-description': 'استكشف مجموعة شاملة من مشاريعي في مختلف المجالات التقنية، من تطوير الويب والتطبيقات إلى الذكاء الاصطناعي والتصميم',
                'gallery-stat-projects': 'مشروع منجز',
                'gallery-stat-specializations': 'مجال تخصص',
                'gallery-stat-clients': 'عميل راضٍ',
                'gallery-stat-success': '% نجاح',
                
                // Project Categories
                'categories-subtitle': 'فئات المشاريع',
                'categories-title': 'تصفح حسب التخصص',
                'category-web-title': 'تطوير الويب',
                'category-web-desc': 'مواقع ويب احترافية وتطبيقات ويب تفاعلية',
                'category-web-count': '15 مشروع',
                'category-mobile-title': 'تطبيقات الجوال',
                'category-mobile-desc': 'تطبيقات ذكية للأندرويد و iOS',
                'category-mobile-count': '8 مشاريع',
                'category-ai-title': 'الذكاء الاصطناعي',
                'category-ai-desc': 'حلول ذكية وأنظمة تعلم آلي متقدمة',
                'category-ai-count': '10 مشاريع',
                'category-design-title': 'التصميم والهوية',
                'category-design-desc': 'تصميم هويات بصرية ومواد تسويقية',
                'category-design-count': '12 مشروع',
                'category-dashboard-title': 'لوحات التحكم',
                'category-dashboard-desc': 'أنظمة إدارة وتحليل البيانات',
                'category-dashboard-count': '9 مشاريع',
                'category-system-title': 'الأنظمة المتكاملة',
                'category-system-desc': 'حلول تقنية شاملة للمؤسسات',
                'category-system-count': '7 مشاريع',
                
                // Featured Projects Section
                'featured-subtitle': 'مشاريع مميزة',
                'featured-title': 'أبرز أعمالي',
                
                // Individual Projects
                'project-ecommerce-title': 'منصة التجارة الإلكترونية المتقدمة',
                'project-ecommerce-desc': 'نظام شامل للتجارة الإلكترونية يشمل إدارة المنتجات، معالجة الطلبات، وأنظمة الدفع المتعددة',
                'project-ecommerce-overlay-title': 'منصة تجارة إلكترونية شاملة',
                'project-ecommerce-overlay-desc': 'منصة متكاملة للتجارة الإلكترونية مع نظام إدارة متقدم ودعم للدفع الإلكتروني',
                'project-ai-title': 'نظام التنبؤ الذكي',
                'project-ai-desc': 'نظام ذكي للتنبؤ بالاتجاهات والبيانات باستخدام تقنيات التعلم الآلي المتقدمة',
                'project-ai-overlay-title': 'نظام التنبؤ الذكي',
                'project-ai-overlay-desc': 'نظام ذكي للتنبؤ بالاتجاهات والبيانات باستخدام تقنيات التعلم الآلي المتقدمة',
                'project-dashboard-title': 'لوحة تحليلات متقدمة',
                'project-dashboard-desc': 'لوحة تحكم تفاعلية لتحليل البيانات وذكاء الأعمال مع تقارير في الوقت الفعلي',
                'project-mobile-title': 'تطبيق جوال متعدد المنصات',
                'project-mobile-desc': 'تطبيق جوال متعدد المنصات بواجهة حديثة وميزات شاملة',
                'project-gis-title': 'نظام خرائط GIS',
                'project-gis-desc': 'نظام معلومات جغرافية متقدم مع خرائط تفاعلية وتحليل مكاني',
                'project-hr-title': 'نظام إدارة الموارد البشرية',
                'project-hr-desc': 'نظام شامل لإدارة الموارد البشرية مع تتبع الموظفين والتحليلات',
                
                // Contact Section
                'contact-subtitle': 'تواصل معي',
                'contact-title': 'اتصل بي',
                'contact-description': 'أنا متاح دائماً لمناقشة الفرص الجديدة والمشاريع المثيرة. دعنا نتواصل ونصنع شيئاً رائعاً معاً!',
                'contact-name': 'اسمك',
                'contact-email': 'بريدك الإلكتروني',
                'contact-subject': 'الموضوع',
                'contact-message': 'رسالتك',
                'contact-send': 'إرسال الرسالة',
                'contact-info-title': 'معلومات الاتصال',
                'contact-email-label': 'البريد الإلكتروني',
                'contact-phone-label': 'الهاتف',
                'contact-location-label': 'الموقع',
                'contact-availability-label': 'التوفر',
                
                // Footer
                'footer-description': 'شغوف بالتقنيات الحديثة وإنشاء حلول مبتكرة تصنع أثراً حقيقياً',
                'footer-quick-links': 'روابط سريعة',
                'footer-services': 'الخدمات',
                'footer-follow': 'تابعني',
                'footer-copyright': 'جميع الحقوق محفوظة.',                // Call to Action
                'cta-title': 'مستعد لبدء مشروعك القادم؟',
                'cta-description': 'دعنا نعمل معاً لتحويل أفكارك إلى واقع بالتقنيات الحديثة والحلول المبتكرة',
                'cta-button': 'ابدأ المشروع',
                
                // Footer Brand
                'footer-brand-welcome': 'أهلاً بك في عالمي الرقمي… حيث تُصنع القيمة ويُترك الأثر',
                
                // Additional UI Elements
                'modal-close': 'إغلاق',
                'modal-view-project': 'مشاهدة المشروع',
                'modal-view-code': 'مشاهدة الكود',
                'modal-technologies': 'التقنيات المستخدمة',
                'modal-features': 'المميزات الرئيسية',
                'modal-challenges': 'التحديات والحلول',
                
                // CTA Features
                'cta-feature-consultation': 'استشارة مجانية',
                'cta-feature-delivery': 'تسليم في المواعيد',
                'cta-feature-quality': 'ضمان الجودة',
                'cta-feature-support': 'دعم مستمر',
                
                // Portfolio Gallery Specific                'gallery-start-project': 'ابدأ مشروعك الآن',
                'gallery-direct-contact': 'تواصل مباشر',
                
                // Loading & UI Elements
                'loading': 'جاري التحميل...',
                'scroll-down': 'مرر للأسفل',
                'back-to-top': 'العودة للأعلى',
                  // Additional UI
                'view-project': 'مشاهدة المشروع',
                'view-code': 'مشاهدة الكود',
                'free-consultation': 'استشارة مجانية',
                'on-time-delivery': 'تسليم في المواعيد',
                'quality-guarantee': 'ضمان الجودة',
                'continuous-support': 'دعم مستمر',
                'start-project-now': 'ابدأ مشروعك الآن',
                'direct-contact': 'تواصل مباشر',
                
                // Portfolio Gallery - Additional Projects
                'project-smart-assistant': 'مساعد ذكي تفاعلي',
                'project-smart-assistant-desc': 'شات بوت ذكي لخدمة العملاء',
                'project-brand-identity': 'هوية بصرية متكاملة',
                'project-brand-identity-desc': 'تصميم هوية شاملة للشركات',
                'project-interactive-dashboard': 'لوحة تحكم تفاعلية',
                'project-interactive-dashboard-desc': 'نظام إدارة وتحليل البيانات مع واجهة عصرية',
                'project-hr-management': 'نظام الموارد البشرية',
                'project-hr-management-desc': 'حل شامل لإدارة الموارد البشرية',
                'project-hospital-management': 'نظام إدارة المستشفيات',
                'project-hospital-management-desc': 'حل متكامل للإدارة الطبية',
                
                // Footer Links Translation
                'footer-home': 'الرئيسية',
                'footer-about': 'نبذة عني',
                'footer-skills': 'المهارات',
                'footer-portfolio': 'معرض الأعمال',
                'footer-web-dev': 'تطوير الويب',
                'footer-mobile-apps': 'تطبيقات الجوال',
                'footer-ai': 'الذكاء الاصطناعي',                'footer-design': 'التصميم',
                'footer-email': 'البريد الإلكتروني',
                'footer-contact-form': 'نموذج التواصل',
                
                // Modal and Form Elements
                'modal-project-details': 'تفاصيل المشروع',
                'form-full-name': 'الاسم الكامل',
                'form-email-address': 'البريد الإلكتروني',
                'form-company': 'الشركة / المؤسسة',
                'form-subject': 'الموضوع',
                'form-project-details': 'تفاصيل المشروع',
                'form-budget': 'الميزانية المتوقعة',
                'form-send-message': 'إرسال الرسالة',
                'form-submit': 'إرسال',
                'form-cancel': 'إلغاء',
                'form-required': 'مطلوب',
                'form-optional': 'اختياري',
                
                // Status and Availability
                'status-available': 'متاح للمشاريع الجديدة',
                'status-busy': 'مشغول حالياً',
                'status-offline': 'غير متصل',
                'availability-full-time': 'دوام كامل',
                'availability-part-time': 'دوام جزئي',
                'availability-freelance': 'عمل حر',
                  // Certificate Tabs
                'tab-academic': 'الشهادات الأكاديمية',
                'tab-professional': 'الشهادات المهنية',
                'tab-courses': 'الدورات التدريبية',
                
                // Features and Benefits
                'feature-consultation': 'استشارة مجانية',
                'feature-delivery': 'تسليم في المواعيد',
                'feature-quality': 'ضمان الجودة',
                'feature-support': 'دعم مستمر',
                
                // Button Actions
                'btn-view-live': 'معاينة حية',
                'btn-view-code': 'مشاهدة الكود',
                'btn-view-demo': 'مشاهدة العرض',
                'btn-more-info': 'معلومات أكثر',
                'btn-close': 'إغلاق',
                'btn-back': 'رجوع',
                'btn-next': 'التالي',
                'btn-previous': 'السابق'
            }
        };
        
        this.init();
    }
    
    init() {
        this.createLanguageToggle();
        this.applyLanguage(this.currentLanguage);
        this.bindEvents();
    }
    
    createLanguageToggle() {
        const languageToggle = document.getElementById('languageToggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }
    
    toggleLanguage() {
        const newLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
        this.currentLanguage = newLanguage;
        localStorage.setItem('language', newLanguage);
        this.applyLanguage(newLanguage);
    }
    
    applyLanguage(language) {
        // Update HTML lang and dir attributes
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.body.setAttribute('lang', language);
        
        // Update all elements with translation attributes
        const elementsWithTranslation = document.querySelectorAll('[data-en], [data-ar]');
        elementsWithTranslation.forEach(element => {
            const translation = element.getAttribute(`data-${language}`);
            if (translation) {
                element.textContent = translation;
            }
        });
        
        // Update language toggle button text
        const langText = document.querySelector('.lang-text');
        if (langText) {
            langText.textContent = language === 'ar' ? 'English' : 'عربي';
        }
        
        // Update typing effect
        this.updateTypingEffect(language);
        
        // Update page title and meta description
        this.updatePageMeta(language);
        
        // Trigger custom event for other components
        document.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: language } 
        }));
    }
    
    updateTypingEffect(language) {
        const typingTexts = this.translations[language]['typing-texts'];
        if (window.typingEffect && typingTexts) {
            window.typingEffect.updateTexts(typingTexts);
        }
    }
    
    updatePageMeta(language) {
        if (language === 'en') {
            document.title = 'Abdullah Mohammed Hamad - Personal Portfolio';
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.content = 'Professional Portfolio of Abdullah Mohammed Hamad - HR Specialist, Digital Marketing Expert, Web Developer, Cybersecurity Analyst, and GIS Specialist';
            }
        } else {
            document.title = 'عبد الله محمد حمد - Portfolio الشخصي';
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.content = 'Portfolio احترافي لعبد الله محمد حمد - مختص موارد بشرية، تسويق رقمي، مطوّر ويب، أمن سيبراني، وGIS';
            }
        }
    }
    
    bindEvents() {
        // Listen for DOM changes to translate new content
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            const elementsWithTranslation = node.querySelectorAll('[data-en], [data-ar]');
                            elementsWithTranslation.forEach(element => {
                                const translation = element.getAttribute(`data-${this.currentLanguage}`);
                                if (translation) {
                                    element.textContent = translation;
                                }
                            });
                        }
                    });
                }
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    getCurrentLanguage() {
        return this.currentLanguage;
    }
    
    translate(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
}

// Initialize translation system
document.addEventListener('DOMContentLoaded', function() {
    window.translator = new LanguageTranslator();
});
