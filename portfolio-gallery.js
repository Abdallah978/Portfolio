// Portfolio Gallery JavaScript - Advanced functionality for project showcase

class PortfolioGallery {
    constructor() {
        this.projects = [];
        this.filteredProjects = [];
        this.currentFilter = 'all';
        this.currentPage = 1;
        this.projectsPerPage = 6;
        this.isLoading = false;
        this.observers = [];
        
        this.init();
    }

    async init() {
        this.loadProjects();
        this.setupFilters();
        this.setupModal();
        this.setupAnimations();
        this.setupLoadMore();
        this.setupSearch();
        this.setupLazyLoading();
        this.setupKeyboardNavigation();
    }    loadProjects() {
        // Featured projects data based on actual files
        this.projects = [
            {
                id: 1,
                title: "E-Commerce Platform",
                description: "A comprehensive e-commerce solution with modern UI/UX design, secure payment integration, and advanced product management features.",
                category: "web-development",
                image: "project-images/ecommerce-platform.png",
                technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
                status: "completed",
                featured: true,
                demoUrl: "project-demos/ecommerce-demo.html",
                codeUrl: "https://github.com/abdullah/ecommerce-platform",
                details: {
                    duration: "3 months",
                    client: "Personal Project",
                    role: "Full Stack Developer",
                    challenges: "Implementing secure payment processing and optimizing database queries"
                }
            },            {
                id: 2,
                title: "AI Prediction System",
                description: "Advanced AI prediction system with machine learning algorithms for data analysis and forecasting. Features intelligent pattern recognition and real-time predictions.",
                category: "ai-machine-learning",
                image: "project-images/ai-prediction-system.png",
                technologies: ["Python", "TensorFlow", "React", "Machine Learning", "APIs"],
                status: "completed",
                featured: true,
                demoUrl: "project-demos/ai-system-demo.html",
                codeUrl: "https://github.com/abdullah/ai-prediction-system",
                details: {
                    duration: "3 months",
                    client: "Tech Company",
                    role: "AI Developer",
                    challenges: "Implementing accurate prediction algorithms and optimizing model performance"
                }
            },            {
                id: 3,
                title: "Security System Dashboard",
                description: "Comprehensive security monitoring dashboard with real-time threat detection, surveillance integration, and incident response management.",
                category: "cybersecurity",
                image: "project-images/security-system.png",
                technologies: ["Vue.js", "Python", "Docker", "Security APIs", "Real-time Monitoring"],
                status: "completed",
                featured: true,
                demoUrl: "project-demos/security-system-demo.html",
                codeUrl: "https://github.com/abdullah/security-system",
                details: {
                    duration: "4 months",
                    client: "Security Agency",
                    role: "Security Engineer",
                    challenges: "Processing large volumes of security data and implementing real-time alerts"
                }
            },
            {
                id: 4,
                title: "E-Learning Platform",
                description: "Modern e-learning platform with interactive courses, student progress tracking, and multimedia content delivery system.",
                category: "web-development",
                image: "project-images/elearning-platform.png",
                technologies: ["React", "Node.js", "MongoDB", "Video Streaming", "LMS"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/elearning-platform-demo.html",
                codeUrl: "https://github.com/abdullah/elearning-platform",
                details: {
                    duration: "3 months",
                    client: "Educational Institution",
                    role: "Full Stack Developer",
                    challenges: "Implementing scalable video streaming and progress tracking"
                }
            },
            {
                id: 5,
                title: "GIS Land Management System",
                description: "Geographic Information System for land management with mapping tools, spatial analysis, and property management features.",
                category: "gis-mapping",
                image: "project-images/land-management.png",
                technologies: ["Leaflet", "PostGIS", "Python", "Spatial Analysis", "WebGIS"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/land-management-demo.html",
                codeUrl: "https://github.com/abdullah/land-management",
                details: {
                    duration: "4 months",
                    client: "Government Agency",
                    role: "GIS Developer",
                    challenges: "Integrating complex spatial data and optimizing map rendering"
                }
            },
            {
                id: 6,
                title: "Brand Identity Design",
                description: "Complete brand identity design package including logo, color scheme, typography, and brand guidelines for modern businesses.",
                category: "ui-ux-design",
                image: "project-images/brand-identity.png",
                technologies: ["Adobe Illustrator", "Photoshop", "Figma", "Brand Strategy", "Design Systems"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/brand-identity-demo.html",
                codeUrl: "https://github.com/abdullah/brand-identity",
                details: {
                    duration: "2 months",
                    client: "Startup Company",
                    role: "Brand Designer",
                    challenges: "Creating cohesive brand identity across multiple touchpoints"
                }
            },
            {
                id: 7,
                title: "Banking UI System",
                description: "Modern banking interface with secure transaction processing, account management, and financial analytics dashboard.",
                category: "web-development",
                image: "project-images/banking-ui.png",
                technologies: ["React", "TypeScript", "Financial APIs", "Security", "Charts"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/banking-ui-demo.html",
                codeUrl: "https://github.com/abdullah/banking-ui",
                details: {
                    duration: "3 months",
                    client: "Financial Institution",
                    role: "Frontend Developer",
                    challenges: "Implementing high-security standards and complex financial calculations"
                }
            },
            {
                id: 8,
                title: "AI Chatbot System",
                description: "Intelligent chatbot with natural language processing, multi-language support, and integration with various platforms.",
                category: "ai-machine-learning",
                image: "project-images/chatbot-ai.png",
                technologies: ["Python", "NLP", "Machine Learning", "APIs", "WebSocket"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/chatbot-demo.html",
                codeUrl: "https://github.com/abdullah/chatbot-ai",
                details: {
                    duration: "2.5 months",
                    client: "E-commerce Platform",
                    role: "AI Developer",
                    challenges: "Training multilingual models and handling complex conversation flows"
                }
            },
            {
                id: 9,
                title: "CMS Management System",
                description: "Content Management System with user-friendly interface, multi-role access, and advanced content publishing features.",
                category: "web-development",
                image: "project-images/cms-system.png",
                technologies: ["Laravel", "Vue.js", "MySQL", "Content Management", "SEO"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/cms-system-demo.html",
                codeUrl: "https://github.com/abdullah/cms-system",
                details: {
                    duration: "3 months",
                    client: "Media Company",
                    role: "Backend Developer",
                    challenges: "Implementing flexible content structures and SEO optimization"
                }
            },
            {
                id: 10,
                title: "Corporate Website",
                description: "Professional corporate website with modern design, responsive layout, and integrated business solutions.",
                category: "web-development",
                image: "project-images/corporate-website.png",
                technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SEO"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/company-website-demo.html",
                codeUrl: "https://github.com/abdullah/corporate-website",
                details: {
                    duration: "1.5 months",
                    client: "Corporate Client",
                    role: "Web Developer",
                    challenges: "Creating professional design that reflects company values"
                }
            },
            {
                id: 11,
                title: "CRM System",
                description: "Customer Relationship Management system with sales tracking, customer analytics, and automated marketing features.",
                category: "web-development",
                image: "project-images/crm-system (1).png",
                technologies: ["React", "Node.js", "PostgreSQL", "Analytics", "Automation"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/crm-system-demo.html",
                codeUrl: "https://github.com/abdullah/crm-system",
                details: {
                    duration: "4 months",
                    client: "Sales Organization",
                    role: "Full Stack Developer",
                    challenges: "Implementing complex sales workflows and reporting systems"
                }
            },
            {
                id: 12,
                title: "Environmental Monitoring",
                description: "Environmental monitoring system with sensor integration, data visualization, and environmental impact assessment tools.",
                category: "gis-mapping",
                image: "project-images/environmental-monitoring.png",
                technologies: ["IoT", "Python", "Data Visualization", "Sensors", "Real-time Data"],
                status: "in-progress",
                featured: false,
                demoUrl: "project-demos/environmental-monitoring-demo.html",
                codeUrl: "https://github.com/abdullah/environmental-monitoring",
                details: {
                    duration: "Ongoing",
                    client: "Environmental Agency",
                    role: "IoT Developer",
                    challenges: "Integrating multiple sensor types and handling large datasets"
                }
            },
            {
                id: 13,
                title: "Health Management App",
                description: "Comprehensive health management application with patient records, appointment scheduling, and health analytics.",
                category: "web-development",
                image: "project-images/health-app.png",
                technologies: ["React Native", "Node.js", "Healthcare APIs", "Security", "Analytics"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/health-app-demo.html",
                codeUrl: "https://github.com/abdullah/health-app",
                details: {
                    duration: "3.5 months",
                    client: "Healthcare Provider",
                    role: "Mobile Developer",
                    challenges: "Ensuring HIPAA compliance and secure data handling"
                }
            },
            {
                id: 14,
                title: "Hospital Management System",
                description: "Complete hospital management system with patient management, staff scheduling, and medical record keeping.",
                category: "web-development",
                image: "project-images/hospital-system.png",
                technologies: ["PHP", "MySQL", "Hospital Management", "Security", "Reporting"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/hospital-system-demo.html",
                codeUrl: "https://github.com/abdullah/hospital-system",
                details: {
                    duration: "5 months",
                    client: "Medical Center",
                    role: "System Developer",
                    challenges: "Integrating complex medical workflows and ensuring data security"
                }
            },
            {
                id: 15,
                title: "HR Management System",
                description: "Human Resource management system with employee tracking, payroll management, and performance evaluation tools.",
                category: "web-development",
                image: "project-images/hr-system.png",
                technologies: ["Laravel", "Vue.js", "HR Management", "Payroll", "Analytics"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/hr-system-demo.html",
                codeUrl: "https://github.com/abdullah/hr-system",
                details: {
                    duration: "4 months",
                    client: "Corporate HR Department",
                    role: "Full Stack Developer",
                    challenges: "Implementing complex payroll calculations and compliance features"
                }
            },
            {
                id: 16,
                title: "Interactive Dashboard",
                description: "Real-time interactive dashboard with data visualization, analytics, and business intelligence features.",
                category: "web-development",
                image: "project-images/interactive-dashboard.png",
                technologies: ["D3.js", "React", "Real-time Data", "Charts", "Analytics"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/web-dashboard-demo.html",
                codeUrl: "https://github.com/abdullah/interactive-dashboard",
                details: {
                    duration: "2 months",
                    client: "Business Analytics Firm",
                    role: "Data Visualization Developer",
                    challenges: "Creating responsive visualizations for complex datasets"
                }
            },
            {
                id: 17,
                title: "Inventory Management",
                description: "Comprehensive inventory management system with stock tracking, automated reordering, and supplier management.",
                category: "web-development",
                image: "project-images/inventory-system.png",
                technologies: ["React", "Node.js", "Inventory Management", "Automation", "Reporting"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/inventory-system-demo.html",
                codeUrl: "https://github.com/abdullah/inventory-system",
                details: {
                    duration: "3 months",
                    client: "Retail Company",
                    role: "System Developer",
                    challenges: "Implementing automated reorder points and supplier integration"
                }
            },
            {
                id: 18,
                title: "Library Management System",
                description: "Digital library management system with book cataloging, member management, and lending tracking features.",
                category: "web-development",
                image: "project-images/library-system.png",
                technologies: ["PHP", "MySQL", "Library Management", "Search", "Cataloging"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/library-system-demo.html",
                codeUrl: "https://github.com/abdullah/library-system",
                details: {
                    duration: "2.5 months",
                    client: "Public Library",
                    role: "Web Developer",
                    challenges: "Implementing advanced search and cataloging features"
                }
            },
            {
                id: 19,
                title: "Mobile Project App",
                description: "Mobile application for project management with task tracking, team collaboration, and progress monitoring.",
                category: "web-development",
                image: "project-images/mobile-project-app.png",
                technologies: ["React Native", "Firebase", "Project Management", "Mobile", "Collaboration"],
                status: "demo",
                featured: false,
                demoUrl: "project-demos/mobile-app-demo.html",
                codeUrl: "https://github.com/abdullah/mobile-project-app",
                details: {
                    duration: "2 months",
                    client: "Startup Company",
                    role: "Mobile Developer",
                    challenges: "Optimizing performance for mobile devices and offline functionality"
                }
            },
            {
                id: 20,
                title: "Real Estate System",
                description: "Real estate management platform with property listings, virtual tours, and client management features.",
                category: "web-development",
                image: "project-images/real-estate-system.png",
                technologies: ["React", "Node.js", "Real Estate", "Virtual Tours", "CRM"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/real-estate-demo.html",
                codeUrl: "https://github.com/abdullah/real-estate-system",
                details: {
                    duration: "3.5 months",
                    client: "Real Estate Agency",
                    role: "Full Stack Developer",
                    challenges: "Implementing virtual tour integration and property search algorithms"
                }
            },
            {
                id: 21,
                title: "Restaurant App",
                description: "Restaurant management application with menu management, order processing, and customer service features.",
                category: "web-development",
                image: "project-images/restaurant-app.png",
                technologies: ["React Native", "Node.js", "Restaurant Management", "POS", "Mobile"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/restaurant-app-demo.html",
                codeUrl: "https://github.com/abdullah/restaurant-app",
                details: {
                    duration: "2.5 months",
                    client: "Restaurant Chain",
                    role: "Mobile Developer",
                    challenges: "Integrating POS systems and handling high-volume orders"
                }
            },
            {
                id: 22,
                title: "School Management System",
                description: "Complete school management system with student records, grade tracking, and parent communication features.",
                category: "web-development",
                image: "project-images/school-system.png",
                technologies: ["PHP", "MySQL", "School Management", "Academic Records", "Communication"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/school-system-demo.html",
                codeUrl: "https://github.com/abdullah/school-system",
                details: {
                    duration: "4 months",
                    client: "Educational Institution",
                    role: "System Developer",
                    challenges: "Managing complex academic workflows and grade calculations"
                }
            },
            {
                id: 23,
                title: "Smart Maps Application",
                description: "Advanced mapping application with smart routing, location services, and real-time traffic information.",
                category: "gis-mapping",
                image: "project-images/smart-maps.png",
                technologies: ["Google Maps API", "React", "Location Services", "Real-time Data", "Routing"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/gis-system-demo.html",
                codeUrl: "https://github.com/abdullah/smart-maps",
                details: {
                    duration: "3 months",
                    client: "Transportation Company",
                    role: "GIS Developer",
                    challenges: "Implementing efficient routing algorithms and real-time updates"
                }
            },
            {
                id: 24,
                title: "Weather Monitoring App",
                description: "Weather monitoring application with forecasting, alerts, and climate data visualization features.",
                category: "web-development",
                image: "project-images/weather-app.png",
                technologies: ["React", "Weather APIs", "Data Visualization", "Forecasting", "Mobile"],
                status: "completed",
                featured: false,
                demoUrl: "project-demos/weather-app-demo.html",
                codeUrl: "https://github.com/abdullah/weather-app",
                details: {
                    duration: "1.5 months",
                    client: "Weather Service",
                    role: "Frontend Developer",
                    challenges: "Integrating multiple weather APIs and creating accurate forecasts"
                }
            }
        ];

        this.filteredProjects = [...this.projects];
        this.renderProjects();
    }

    setupFilters() {
        const filterButtons = document.querySelectorAll('.category-filter');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = button.dataset.filter;
                this.filterProjects(filter);
                this.updateActiveFilter(button);
            });
        });
    }

    filterProjects(category) {
        this.currentFilter = category;
        this.currentPage = 1;
        
        if (category === 'all') {
            this.filteredProjects = [...this.projects];
        } else {
            this.filteredProjects = this.projects.filter(project => 
                project.category === category
            );
        }
        
        this.renderProjects();
    }

    updateActiveFilter(activeButton) {
        document.querySelectorAll('.category-filter').forEach(btn => {
            btn.classList.remove('active');
        });
        activeButton.classList.add('active');
    }

    renderProjects() {
        this.renderFeaturedProjects();
        this.renderAllProjects();
    }

    renderFeaturedProjects() {
        const featuredContainer = document.getElementById('featured-projects');
        if (!featuredContainer) return;
        
        const featuredProjects = this.filteredProjects.filter(project => project.featured);
        
        featuredContainer.innerHTML = featuredProjects.map(project => `
            <div class="featured-project fade-in" data-project-id="${project.id}">
                <div class="featured-project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="project-category-badge">${this.getCategoryName(project.category)}</div>
                </div>
                <div class="featured-project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech-stack">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.demoUrl}" class="project-link primary" target="_blank">
                            <i class="fas fa-eye"></i> Live Demo
                        </a>
                        <a href="${project.codeUrl}" class="project-link secondary" target="_blank">
                            <i class="fas fa-code"></i> View Code
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderAllProjects() {
        const allProjectsContainer = document.getElementById('all-projects');
        if (!allProjectsContainer) return;
        
        const startIndex = 0;
        const endIndex = this.currentPage * this.projectsPerPage;
        const projectsToShow = this.filteredProjects.slice(startIndex, endIndex);
        
        allProjectsContainer.innerHTML = projectsToShow.map(project => `
            <div class="project-card scale-in" data-project-id="${project.id}">
                <div class="project-card-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="project-card-overlay">
                        <a href="${project.demoUrl}" class="overlay-btn" target="_blank">
                            <i class="fas fa-eye"></i> Demo
                        </a>
                        <button class="overlay-btn" onclick="galleryInstance.openModal(${project.id})">
                            <i class="fas fa-info-circle"></i> Details
                        </button>
                    </div>
                </div>
                <div class="project-card-content">
                    <div class="project-status ${project.status}">${project.status.replace('-', ' ')}</div>
                    <h3>${project.title}</h3>
                    <p>${project.description.substring(0, 100)}...</p>
                    <div class="project-tech-stack">
                        ${project.technologies.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        ${project.technologies.length > 3 ? `<span class="tech-tag">+${project.technologies.length - 3}</span>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
        
        this.updateLoadMoreButton();
    }

    setupLoadMore() {
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (!loadMoreBtn) return;
        
        loadMoreBtn.addEventListener('click', () => {
            this.loadMoreProjects();
        });
    }

    loadMoreProjects() {
        if (this.isLoading) return;
        
        this.isLoading = true;
        const loadMoreBtn = document.getElementById('load-more-btn');
        loadMoreBtn.innerHTML = '<span class="loading-spinner"></span> Loading...';
        loadMoreBtn.disabled = true;
        
        setTimeout(() => {
            this.currentPage++;
            this.renderAllProjects();
            this.isLoading = false;
            loadMoreBtn.innerHTML = 'Load More Projects';
            loadMoreBtn.disabled = false;
        }, 1000);
    }

    updateLoadMoreButton() {
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (!loadMoreBtn) return;
        
        const totalShown = this.currentPage * this.projectsPerPage;
        const hasMore = totalShown < this.filteredProjects.length;
        
        loadMoreBtn.style.display = hasMore ? 'block' : 'none';
    }

    setupModal() {
        const modal = document.getElementById('project-modal');
        if (!modal) return;
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });
        
        // Close modal with close button
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeModal();
            });
        }
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    openModal(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) return;
        
        const modal = document.getElementById('project-modal');
        const modalContent = modal.querySelector('.modal-content');
        
        modalContent.innerHTML = `
            <div class="modal-header">
                <img src="${project.image}" alt="${project.title}">
                <button class="modal-close" onclick="galleryInstance.closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <h2 class="modal-title">${project.title}</h2>
                <p class="modal-description">${project.description}</p>
                
                <div class="modal-details">
                    <div class="detail-item">
                        <h4>Technologies</h4>
                        <p>${project.technologies.join(', ')}</p>
                    </div>
                    <div class="detail-item">
                        <h4>Duration</h4>
                        <p>${project.details.duration}</p>
                    </div>
                    <div class="detail-item">
                        <h4>Client</h4>
                        <p>${project.details.client}</p>
                    </div>
                    <div class="detail-item">
                        <h4>Role</h4>
                        <p>${project.details.role}</p>
                    </div>
                    <div class="detail-item">
                        <h4>Status</h4>
                        <p><span class="project-status ${project.status}">${project.status.replace('-', ' ')}</span></p>
                    </div>
                    <div class="detail-item">
                        <h4>Category</h4>
                        <p>${this.getCategoryName(project.category)}</p>
                    </div>
                </div>
                
                <div class="detail-item">
                    <h4>Key Challenges</h4>
                    <p>${project.details.challenges}</p>
                </div>
                
                <div class="project-links" style="margin-top: 30px;">
                    <a href="${project.demoUrl}" class="project-link primary" target="_blank">
                        <i class="fas fa-eye"></i> Live Demo
                    </a>
                    <a href="${project.codeUrl}" class="project-link secondary" target="_blank">
                        <i class="fas fa-code"></i> View Code
                    </a>
                </div>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('project-modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    setupSearch() {
        const searchInput = document.getElementById('project-search');
        if (!searchInput) return;
        
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            this.searchProjects(searchTerm);
        });
    }

    searchProjects(searchTerm) {
        if (searchTerm === '') {
            this.filteredProjects = this.currentFilter === 'all' ? 
                [...this.projects] : 
                this.projects.filter(project => project.category === this.currentFilter);
        } else {
            let baseProjects = this.currentFilter === 'all' ? 
                [...this.projects] : 
                this.projects.filter(project => project.category === this.currentFilter);
                
            this.filteredProjects = baseProjects.filter(project => 
                project.title.toLowerCase().includes(searchTerm) ||
                project.description.toLowerCase().includes(searchTerm) ||
                project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
            );
        }
        
        this.currentPage = 1;
        this.renderProjects();
    }

    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        this.observers.push(observer);
        
        // Re-observe new elements after rendering
        this.observeAnimatedElements();
    }

    observeAnimatedElements() {
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
        
        this.observers.forEach(observer => {
            animatedElements.forEach(element => {
                observer.observe(element);
            });
        });
    }

    setupLazyLoading() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => imageObserver.observe(img));
            this.observers.push(imageObserver);
        }
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Navigate through filter buttons with arrow keys
            if (e.target.classList.contains('category-filter')) {
                const filters = Array.from(document.querySelectorAll('.category-filter'));
                const currentIndex = filters.indexOf(e.target);
                
                if (e.key === 'ArrowLeft' && currentIndex > 0) {
                    filters[currentIndex - 1].focus();
                } else if (e.key === 'ArrowRight' && currentIndex < filters.length - 1) {
                    filters[currentIndex + 1].focus();
                }
            }
        });
    }

    getCategoryName(category) {
        const categoryNames = {
            'web-development': 'Web Development',
            'ai-machine-learning': 'AI & Machine Learning',
            'cybersecurity': 'Cybersecurity',
            'digital-marketing': 'Digital Marketing',
            'gis-mapping': 'GIS & Mapping',
            'ui-ux-design': 'UI/UX Design'
        };
        return categoryNames[category] || category;
    }

    // Public methods for external access
    filterByCategory(category) {
        this.filterProjects(category);
        const button = document.querySelector(`[data-filter="${category}"]`);
        if (button) {
            this.updateActiveFilter(button);
        }
    }

    searchByTerm(term) {
        const searchInput = document.getElementById('project-search');
        if (searchInput) {
            searchInput.value = term;
            this.searchProjects(term);
        }
    }

    // Cleanup method
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers = [];
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.galleryInstance = new PortfolioGallery();
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll-based header styling
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Performance optimization: Debounce scroll events
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

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    // Add any scroll-based animations or effects here
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}, 16); // 60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Add loading state management
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading spinner if it exists
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    }
});

// Add error handling for missing images
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'images/placeholder.jpg'; // Fallback image
        e.target.alt = 'Image not available';
    }
}, true);

// Add copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show success message
        const toast = document.createElement('div');
        toast.className = 'toast success';
        toast.textContent = 'Copied to clipboard!';
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Add social sharing functionality
function shareProject(projectId) {
    const project = window.galleryInstance.projects.find(p => p.id === projectId);
    if (!project) return;
    
    const shareData = {
        title: project.title,
        text: project.description,
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData);
    } else {
        // Fallback: Copy URL to clipboard
        copyToClipboard(window.location.href);
    }
}

// Add print functionality
function printProject(projectId) {
    const project = window.galleryInstance.projects.find(p => p.id === projectId);
    if (!project) return;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${project.title} - Project Details</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1 { color: #333; }
                .tech-tag { background: #f0f0f0; padding: 2px 8px; margin: 2px; border-radius: 4px; }
                .detail-item { margin: 10px 0; }
                .detail-item h4 { margin: 5px 0; color: #666; }
            </style>
        </head>
        <body>
            <h1>${project.title}</h1>
            <p>${project.description}</p>
            <div class="detail-item">
                <h4>Technologies:</h4>
                <p>${project.technologies.join(', ')}</p>
            </div>
            <div class="detail-item">
                <h4>Duration:</h4>
                <p>${project.details.duration}</p>
            </div>
            <div class="detail-item">
                <h4>Client:</h4>
                <p>${project.details.client}</p>
            </div>
            <div class="detail-item">
                <h4>Role:</h4>
                <p>${project.details.role}</p>
            </div>
            <div class="detail-item">
                <h4>Key Challenges:</h4>
                <p>${project.details.challenges}</p>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}

// Export functions for global access
window.portfolioGallery = {
    copyToClipboard,
    shareProject,
    printProject
};
