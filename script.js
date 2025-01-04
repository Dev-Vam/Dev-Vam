document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initializeMobileMenu();
    initializeTheme();
    initializeScrollTimeline();
});

// Language Functions
function initializeLanguage() {
    const langToggles = document.querySelectorAll('.lang-toggle');
    if (!langToggles.length) return;
    
    const currentLang = localStorage.getItem('language') || 'en';
    setLanguage(currentLang);
    
    langToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            setLanguage(toggle.getAttribute('data-lang'));
        });
    });
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('data-lang', lang);
    updateLanguageUI(lang);
    updateActiveLanguageToggle(lang);
}

// Mobile Menu Functions
function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    if (!mobileMenuBtn || !navMenu) return;

    setupMobileMenuListeners(mobileMenuBtn, navMenu);
}

// Theme Functions
function initializeTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;

    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' 
            ? 'light' 
            : 'dark';
        setTheme(newTheme);
    });
}

// Utility Functions
function updateLanguageUI(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (TRANSLATIONS[lang]?.[key]) {
            element.hasAttribute('placeholder')
                ? element.placeholder = TRANSLATIONS[lang][key]
                : element.textContent = TRANSLATIONS[lang][key];
        }
    });
}

function updateActiveLanguageToggle(currentLang) {
    const langToggles = document.querySelectorAll('.lang-toggle');
    langToggles.forEach(toggle => {
        if (toggle.getAttribute('data-lang') === currentLang) {
            toggle.classList.add('active');
        } else {
            toggle.classList.remove('active');
        }
    });
}

function setupMobileMenuListeners(mobileMenuBtn, navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !e.target.closest('.navbar')) {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    const themeToggleButton = document.querySelector('.theme-toggle');
    if (!themeToggleButton) return;

    if (theme === 'dark') {
        themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Constants
const TRANSLATIONS = {
    en: {
        // Navigation & Common
        "hello": "Hello, I'm",
        "creative-title": "Creative Designer & Developer",
        "hero-subtitle": "Design • Development",
        "view-work": "View My Work",
        "contact-me": "Contact Me",
        "my-work": "My Work",
        "view-live": "View Live",
        "view-code": "View Code",
        "about": "About",
        "home": "Home",
        "portfolio": "Portfolio",
        "contact": "Contact",
        "get-in-touch": "Get in Touch",
        "lets-create": "Let's Create Something Together",
        "lets-talk": "Let's Talk",
        "footer-text": "© 2024 Vamerlen. All rights reserved.",

        // Form Fields
        "name": "Name",
        "email": "Email",
        "subject": "Subject",
        "message": "Message",
        "send-message": "Send Message",

        // About Section
        "about-me": "About Me",
        "about-title": "About Me",
        "about-greeting": "Hi, I'm Mwadi Kayembe Vamerlen",
        "about-description": "I'm a passionate Creative Designer & Developer based in South Africa. I specialize in creating beautiful, functional websites and applications.",
        "bio-text": "Hello! I'm Mwadi Kayembe Vamerlen, a passionate creative developer based in South Africa. I specialize in crafting beautiful and functional digital experiences that combine innovative design with clean, efficient code. With a keen eye for detail and a love for both aesthetics and functionality, I help businesses bring their digital visions to life.",

        // Skills & Experience
        "skills": "Skills",
        "experience-title": "Experience",
        "education-title": "Education",
        "skills-title": "Skills",
        "tools-title": "Tools & Technologies",
        "years-experience": "Years of Experience",
        "frontend-dev": "Frontend Development",
        "backend-dev": "Backend Development",
        "responsive-design": "Responsive Design",
        "version-control": "Version Control",
        "problem-solving": "Problem Solving",
        "team-collaboration": "Team Collaboration",
        "creating-digital": "Creating Digital",
        "experiences": "Experiences",

        // Services
        "services": "Services",
        "services-title": "Services I Offer",
        "uiux-design": "UI/UX Design",
        "web-dev": "Web Development",
        "python-dev": "Python Development",
        "web-dev-title": "Web Development",
        "web-dev-desc": "Creating responsive and modern websites using the latest technologies",
        "ui-design-title": "UI/UX Design",
        "ui-design-desc": "Designing intuitive and beautiful user interfaces",
        "python-dev-title": "Python Development",
        "python-dev-desc": "Building efficient Python applications and automation scripts",
        "uiux-desc": "Creating intuitive and beautiful user interfaces",
        "dev-desc": "Building responsive and performant websites",
        "branding-desc": "Crafting unique and memorable python apps",

        // Contact & Info
        "location": "Location",
        "phone": "Phone",
        "download-cv": "Download CV",
        "projects": "Projects",
        "development": "Development",
        "branding": "Python",
        "email": "Email",

        // Projects
        "finance-tracker": "Finance Tracker Website",
        "finance-tracker-desc": "A fully responsive finance tracker platform built with modern web technologies.",
        "fitness-tracker": "Fitness Tracker Website",
        "fitness-tracker-desc": "A modern and responsive fitness tracker website with dark/light mode.",

        // Art Design
        "art-design-title": "Art Design",
        "art-design-desc": "A modern and mobile app design.",
        "view-design": "View Design"
    },
    fr: {
        // Navigation & Common
        "hello": "Bonjour, je suis",
        "creative-title": "Designer et Développeur Créatif",
        "hero-subtitle": "Design • Développement",
        "view-work": "Voir mon travail",
        "contact-me": "Me contacter",
        "my-work": "Mes projets",
        "view-live": "Voir en direct",
        "view-code": "Voir le code",
        "about": "À propos",
        "home": "Accueil",
        "portfolio": "Portfolio",
        "contact": "Contact",
        "get-in-touch": "Entrer en contact",
        "lets-create": "Créons quelque chose ensemble",
        "lets-talk": "Parlons-en",
        "footer-text": "© 2024 Vamerlen. Tous droits réservés.",

        // Form Fields
        "name": "Nom",
        "email": "E-mail",
        "subject": "Sujet",
        "message": "Message",
        "send-message": "Envoyer le message",

        // About Section
        "about-me": "À propos de moi",
        "about-title": "À propos de moi",
        "about-greeting": "Bonjour, je suis Mwadi Kayembe Vamerlen",
        "about-description": "Je suis un Designer et Développeur Créatif passionné basé en Afrique du Sud. Je me spécialise dans la création de sites web et d'applications beaux et fonctionnels.",
        "bio-text": "Bonjour ! Je suis Mwadi Kayembe Vamerlen, un développeur créatif passionné basé en Afrique du Sud. Je me spécialise dans la création d'expériences numériques belles et fonctionnelles qui allient design innovant et code propre et efficace. Avec un souci du détail et un amour pour l'esthétique et la fonctionnalité, j'aide les entreprises à donner vie à leurs visions numériques.",

        // Skills & Experience
        "skills": "Compétences",
        "experience-title": "Expérience",
        "education-title": "Formation",
        "skills-title": "Compétences",
        "tools-title": "Outils et Technologies",
        "years-experience": "Années d'expérience",
        "frontend-dev": "Développement Frontend",
        "backend-dev": "Développement Backend",
        "responsive-design": "Design Responsive",
        "version-control": "Gestion de Version",
        "problem-solving": "Résolution de Problèmes",
        "team-collaboration": "Travail d'Équipe",
        "creating-digital": "Création",
        "experiences": "d'Expériences Numériques",

        // Services
        "services": "Services",
        "services-title": "Services proposés",
        "uiux-design": "Design UI/UX",
        "web-dev": "Développement Web",
        "python-dev": "Développement Python",
        "web-dev-title": "Développement Web",
        "web-dev-desc": "Création de sites web modernes et responsifs utilisant les dernières technologies",
        "ui-design-title": "Design UI/UX",
        "ui-design-desc": "Conception d'interfaces utilisateur intuitives et esthétiques",
        "python-dev-title": "Développement Python",
        "python-dev-desc": "Création d'applications Python efficaces et de scripts d'automatisation",
        "uiux-desc": "Création d'interfaces utilisateur intuitives et esthétiques",
        "dev-desc": "Création de sites web réactifs et performants",
        "branding-desc": "Création d'applications Python uniques et mémorables",

        // Contact & Info
        "location": "Localisation",
        "phone": "Téléphone",
        "email":"Courriel",
        "download-cv": "Télécharger le CV",
        "projects": "Projets",
        "development": "Développement",
        "branding": "Python",

        // Projects
        "finance-tracker": "Site de Suivi Financier",
        "finance-tracker-desc": "Une plateforme de suivi financier entièrement responsive construite avec des technologies web modernes.",
        "fitness-tracker": "Site de Suivi Fitness",
        "fitness-tracker-desc": "Un site web moderne et responsive de suivi fitness avec mode clair/sombre.",

        // Art Design
        "art-design-title": "Design Artistique",
        "art-design-desc": "Un design d'application mobile moderne.",
        "view-design": "Voir le Design"
    }
};

// Scroll Timeline Functions
function initializeScrollTimeline() {
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.fade-in, .slide-in, .scale-in').forEach(element => {
        observer.observe(element);
    });
}

