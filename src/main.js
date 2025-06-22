import './styles.scss'

// Language translations
const translations = {
  en: {
    nav: {
      logo: "Portfolio",
      home: "Home",
      about: "About",
      contact: "Contact"
    },
    hero: {
      title: "Creative Designer & Photographer",
      subtitle: "Bringing your vision to life through stunning visuals and innovative design",
      portfolio: "View Portfolio",
      contact: "Get In Touch"
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "A selection of my recent work",
      item1: { title: "Nature Photography", desc: "Landscape capture" },
      item2: { title: "Brand Design", desc: "Corporate identity" },
      item3: { title: "Portrait Session", desc: "Professional headshots" },
      item4: { title: "Web Design", desc: "Responsive website" },
      item5: { title: "Event Photography", desc: "Wedding moments" },
      item6: { title: "Print Design", desc: "Magazine layout" }
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's discuss your next project",
      form: {
        name: "Name",
        phone: "Phone",
        email: "Email",
        message: "Message",
        submit: "Send Message"
      },
      location: {
        title: "Location",
        address: "3 Pl. Rossetti, 06300 Nice, France"
      }
    },
    about: {
      title: "About Me",
      description: "I'm a passionate designer and photographer with over 8 years of experience creating compelling visual narratives. My work spans across digital design, brand identity, and photography, always striving to capture the essence of each project with creativity and precision.",
      mission: "My mission is to help businesses and individuals tell their unique stories through powerful visuals that connect, inspire, and leave lasting impressions."
    },
    skills: {
      title: "Skills & Expertise",
      design: {
        title: "Design",
        item1: "Brand Identity",
        item2: "Web Design",
        item3: "Print Design",
        item4: "UI/UX Design"
      },
      photography: {
        title: "Photography",
        item1: "Portrait Photography",
        item2: "Event Photography",
        item3: "Landscape Photography",
        item4: "Commercial Photography"
      },
      tools: {
        title: "Tools",
        item1: "Adobe Creative Suite",
        item2: "Figma",
        item3: "Lightroom",
        item4: "Final Cut Pro"
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: {
        question: "What types of projects do you work on?",
        answer: "I work on a wide range of projects including brand identity design, website design, portrait and event photography, commercial photography, and print design. Whether you're a startup needing a complete brand overhaul or an individual looking for professional headshots, I can help bring your vision to life."
      },
      q2: {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary depending on the scope and complexity. A simple logo design might take 1-2 weeks, while a complete brand identity with website could take 4-6 weeks. Photography sessions are typically delivered within 1-2 weeks after the shoot. I always provide clear timelines during our initial consultation."
      },
      q3: {
        question: "Do you offer revisions?",
        answer: "Yes, I include a specific number of revisions in all my project packages. For design work, I typically include 2-3 rounds of revisions to ensure the final result meets your expectations. For photography, I provide a selection of edited images based on the package you choose."
      },
      q4: {
        question: "What are your rates?",
        answer: "My rates vary depending on the project scope, timeline, and deliverables. I offer both project-based pricing and hourly rates. After our initial consultation, I'll provide a detailed quote tailored to your specific needs. Contact me to discuss your project and receive a personalized estimate."
      },
      q5: {
        question: "Do you work with clients internationally?",
        answer: "Absolutely! While I'm based in Nice, France, I work with clients worldwide. For design projects, everything can be handled remotely through video calls and file sharing. For photography, I can travel for special projects or work with local photographers in your area if needed."
      }
    },
    footer: {
      copyright: "Designer & Photographer Portfolio. All rights reserved."
    }
  },
  fr: {
    nav: {
      logo: "Portfolio",
      home: "Accueil",
      about: "À propos",
      contact: "Contact"
    },
    hero: {
      title: "Designer Créatif & Photographe",
      subtitle: "Donner vie à votre vision grâce à des visuels époustouflants et un design innovant",
      portfolio: "Voir le Portfolio",
      contact: "Contactez-moi"
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Une sélection de mes travaux récents",
      item1: { title: "Photographie Nature", desc: "Capture de paysages" },
      item2: { title: "Design de Marque", desc: "Identité corporative" },
      item3: { title: "Séance Portrait", desc: "Photos professionnelles" },
      item4: { title: "Design Web", desc: "Site web responsive" },
      item5: { title: "Photographie Événementielle", desc: "Moments de mariage" },
      item6: { title: "Design Imprimé", desc: "Mise en page magazine" }
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Discutons de votre prochain projet",
      form: {
        name: "Nom",
        phone: "Téléphone",
        email: "Email",
        message: "Message",
        submit: "Envoyer le Message"
      },
      location: {
        title: "Localisation",
        address: "3 Pl. Rossetti, 06300 Nice, France"
      }
    },
    about: {
      title: "À Propos de Moi",
      description: "Je suis un designer et photographe passionné avec plus de 8 ans d'expérience dans la création de récits visuels captivants. Mon travail s'étend au design numérique, à l'identité de marque et à la photographie, m'efforçant toujours de capturer l'essence de chaque projet avec créativité et précision.",
      mission: "Ma mission est d'aider les entreprises et les particuliers à raconter leurs histoires uniques grâce à des visuels puissants qui connectent, inspirent et laissent des impressions durables."
    },
    skills: {
      title: "Compétences & Expertise",
      design: {
        title: "Design",
        item1: "Identité de Marque",
        item2: "Design Web",
        item3: "Design Imprimé",
        item4: "Design UI/UX"
      },
      photography: {
        title: "Photographie",
        item1: "Photographie Portrait",
        item2: "Photographie Événementielle",
        item3: "Photographie Paysage",
        item4: "Photographie Commerciale"
      },
      tools: {
        title: "Outils",
        item1: "Adobe Creative Suite",
        item2: "Figma",
        item3: "Lightroom",
        item4: "Final Cut Pro"
      }
    },
    faq: {
      title: "Questions Fréquemment Posées",
      q1: {
        question: "Sur quels types de projets travaillez-vous ?",
        answer: "Je travaille sur une large gamme de projets incluant le design d'identité de marque, la conception de sites web, la photographie de portrait et d'événements, la photographie commerciale et l'impression. Que vous soyez une startup ayant besoin d'une refonte complète de marque ou un particulier cherchant des photos professionnelles, je peux vous aider à donner vie à votre vision."
      },
      q2: {
        question: "Quel est votre délai de projet habituel ?",
        answer: "Les délais de projet varient selon la portée et la complexité. Un simple design de logo peut prendre 1-2 semaines, tandis qu'une identité de marque complète avec site web pourrait prendre 4-6 semaines. Les séances photo sont généralement livrées dans 1-2 semaines après la prise de vue. Je fournis toujours des délais clairs lors de notre consultation initiale."
      },
      q3: {
        question: "Proposez-vous des révisions ?",
        answer: "Oui, j'inclus un nombre spécifique de révisions dans tous mes forfaits de projet. Pour le travail de design, j'inclus généralement 2-3 tours de révisions pour m'assurer que le résultat final répond à vos attentes. Pour la photographie, je fournis une sélection d'images retouchées basée sur le forfait que vous choisissez."
      },
      q4: {
        question: "Quels sont vos tarifs ?",
        answer: "Mes tarifs varient selon la portée du projet, les délais et les livrables. J'offre à la fois une tarification basée sur le projet et des tarifs horaires. Après notre consultation initiale, je fournirai un devis détaillé adapté à vos besoins spécifiques. Contactez-moi pour discuter de votre projet et recevoir une estimation personnalisée."
      },
      q5: {
        question: "Travaillez-vous avec des clients internationaux ?",
        answer: "Absolument ! Bien que je sois basé à Nice, en France, je travaille avec des clients du monde entier. Pour les projets de design, tout peut être géré à distance via des appels vidéo et le partage de fichiers. Pour la photographie, je peux voyager pour des projets spéciaux ou travailler avec des photographes locaux dans votre région si nécessaire."
      }
    },
    footer: {
      copyright: "Portfolio Designer & Photographe. Tous droits réservés."
    }
  }
};

// Initialize the application
class PortfolioApp {
  constructor() {
    this.currentLanguage = 'en';
    this.init();
  }

  init() {
    this.setupLanguageSwitcher();
    this.setupMobileMenu();
    this.setupContactForm();
    this.setupFAQ();
    this.setupGoogleMaps();
    this.setupSmoothScrolling();
    this.updateContent();
  }

  setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.target.dataset.lang;
        this.switchLanguage(lang);
      });
    });
  }

  switchLanguage(lang) {
    this.currentLanguage = lang;
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update content
    this.updateContent();
  }

  updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.dataset.i18n;
      const translation = this.getTranslation(key);
      if (translation) {
        element.textContent = translation;
      }
    });
  }

  getTranslation(key) {
    const keys = key.split('.');
    let value = translations[this.currentLanguage];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return null;
      }
    }
    
    return value;
  }

  setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });

      // Close menu when clicking on a link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });
    }
  }

  setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (this.validateForm()) {
        this.submitForm();
      }
    });
  }

  validateForm() {
    const fields = ['name', 'phone', 'email', 'message'];
    let isValid = true;

    fields.forEach(field => {
      const input = document.getElementById(field);
      const error = document.getElementById(field + 'Error');
      
      if (!input.value.trim()) {
        error.textContent = 'This field is required';
        isValid = false;
      } else if (field === 'email' && !this.isValidEmail(input.value)) {
        error.textContent = 'Please enter a valid email address';
        isValid = false;
      } else {
        error.textContent = '';
      }
    });

    return isValid;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  submitForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Sending...';
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      submitBtn.classList.remove('loading');
      submitBtn.textContent = 'Send Message';
      
      // Show success message
      const successMsg = document.createElement('div');
      successMsg.className = 'success-message';
      successMsg.textContent = 'Thank you for your message! I\'ll get back to you soon.';
      form.appendChild(successMsg);
      
      // Reset form
      form.reset();
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        successMsg.remove();
      }, 5000);
    }, 2000);
  }

  setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      
      question.addEventListener('click', () => {
        const isActive = question.classList.contains('active');
        
        // Close all other FAQ items
        faqItems.forEach(otherItem => {
          otherItem.querySelector('.faq-question').classList.remove('active');
          otherItem.querySelector('.faq-answer').classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
          question.classList.add('active');
          answer.classList.add('active');
        }
      });
    });
  }

  setupGoogleMaps() {
    // Initialize Google Maps
    if (typeof google !== 'undefined' && google.maps) {
      this.initMap();
    } else {
      // Load Google Maps API
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      // Set global callback
      window.initMap = () => this.initMap();
      
      document.head.appendChild(script);
    }
  }

  initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    const location = { lat: 43.6962, lng: 7.2757 }; // 3 Pl. Rossetti, Nice, France
    
    // For now, we'll create a simple placeholder since we don't have Google Maps API key
    mapElement.innerHTML = `
      <div style="width: 100%; height: 100%; background: #f0f0f0; display: flex; align-items: center; justify-content: center; color: #666;">
        <div style="text-align: center;">
          <p><strong>3 Pl. Rossetti</strong></p>
          <p>06300 Nice, France</p>
          <p style="font-size: 0.9em; margin-top: 10px;">Google Maps integration available</p>
        </div>
      </div>
    `;
  }

  setupSmoothScrolling() {
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
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});
