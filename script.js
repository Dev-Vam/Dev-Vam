// Constants
// Add these translations to your existing TRANSLATIONS object
const TRANSLATIONS = {
    en: {
        // ... existing English translations ...
        "about-title": "About Me",
        "about-greeting": "Hi, I'm Vamerlen",
        "about-description": "I'm a passionate Creative Designer & Developer based in South Africa. I specialize in creating beautiful, functional websites and applications.",
        "experience-title": "Experience",
        "education-title": "Education",
        "skills-title": "Skills",
        "tools-title": "Tools & Technologies",
        
        // Services
        "services-title": "Services I Offer",
        "web-dev-title": "Web Development",
        "web-dev-desc": "Creating responsive and modern websites using the latest technologies",
        "ui-design-title": "UI/UX Design",
        "ui-design-desc": "Designing intuitive and beautiful user interfaces",
        "python-dev-title": "Python Development",
        "python-dev-desc": "Building efficient Python applications and automation scripts",
        
        // Skills
        "frontend-dev": "Frontend Development",
        "backend-dev": "Backend Development",
        "responsive-design": "Responsive Design",
        "version-control": "Version Control",
        "problem-solving": "Problem Solving",
        "team-collaboration": "Team Collaboration"
    },
    fr: {
        // ... existing French translations ...
        "about-title": "À Propos de Moi",
        "about-greeting": "Bonjour, je suis Vamerlen",
        "about-description": "Je suis un Designer & Développeur Créatif passionné basé en Afrique du Sud. Je me spécialise dans la création de sites web et d'applications beaux et fonctionnels.",
        "experience-title": "Expérience",
        "education-title": "Formation",
        "skills-title": "Compétences",
        "tools-title": "Outils & Technologies",
        
        // Services
        "services-title": "Services Proposés",
        "web-dev-title": "Développement Web",
        "web-dev-desc": "Création de sites web modernes et réactifs utilisant les dernières technologies",
        "ui-design-title": "Design UI/UX",
        "ui-design-desc": "Conception d'interfaces utilisateur intuitives et esthétiques",
        "python-dev-title": "Développement Python",
        "python-dev-desc": "Développement d'applications Python efficaces et scripts d'automatisation",
        
        // Skills
        "frontend-dev": "Développement Frontend",
        "backend-dev": "Développement Backend",
        "responsive-design": "Design Adaptatif",
        "version-control": "Gestion de Version",
        "problem-solving": "Résolution de Problèmes",
        "team-collaboration": "Collaboration d'Équipe"
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


