// Constants
const TRANSLATIONS = {
    en: {
        "hello": "Hello, I'm",
        "creative-title": "Creative Designer & Developer",
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
        "name": "Name",
        "email": "Email",
        "subject": "Subject",
        "message": "Message",
        "send-message": "Send Message",
        "about-me": "About Me",
        "skills": "Skills",
        "services": "Services",
        "uiux-design": "UI/UX Design",
        "web-dev": "Web Development",
        "python-dev": "Python Development",
        "location": "Location",
        "phone": "Phone",
        "download-cv": "Download CV",
        "projects": "Projects",
        "footer-text": "© 2024 Vamerlen. All rights reserved."
    },
    fr: {
        "hello": "Bonjour, je suis",
        "creative-title": "Designer & Développeur Créatif",
        "view-work": "Voir Mes Projets",
        "contact-me": "Me Contacter",
        "my-work": "Mes Projets",
        "view-live": "Voir En Direct",
        "view-code": "Voir Le Code",
        "about": "À Propos",
        "home": "Accueil",
        "portfolio": "Portfolio",
        "contact": "Contact",
        "get-in-touch": "Contactez-moi",
        "lets-create": "Créons Quelque Chose Ensemble",
        "name": "Nom",
        "email": "Email",
        "subject": "Sujet",
        "message": "Message",
        "send-message": "Envoyer",
        "about-me": "À Propos de Moi",
        "skills": "Compétences",
        "services": "Services",
        "uiux-design": "Design UI/UX",
        "web-dev": "Développement Web",
        "python-dev": "Développement Python",
        "location": "Localisation",
        "phone": "Téléphone",
        "download-cv": "Télécharger CV",
        "projects": "Projets",
        "footer-text": "© 2024 Vamerlen. Tous droits réservés."
    }
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    initializeMobileMenu();
    initializeTheme();
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


