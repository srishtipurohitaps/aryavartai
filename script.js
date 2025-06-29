// Main JavaScript file for Aryavart.AI
class AryavartAI {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupAnimations();
        this.loadUserData();
        this.checkPageLoad();
    }

    checkPageLoad() {
        // Debug: Log page load
        console.log('Aryavart.AI loaded successfully!');
        console.log('Current page:', window.location.pathname);
        
        // Check if all required elements exist
        const navbar = document.querySelector('.navbar');
        const main = document.querySelector('main');
        
        if (!navbar) console.error('Navbar not found!');
        if (!main) console.error('Main content not found!');
        
        // Show success message
        setTimeout(() => {
            this.showNotification('Welcome to Aryavart.AI! 🕉️', 'success');
        }, 1000);
    }

    setupNavigation() {
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking on nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Debug navigation clicks
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                console.log('Navigation clicked:', link.href);
            });
        });
    }

    setupAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        document.querySelectorAll('[data-aos]').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });

        // Add scroll-based navbar background
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 100) {
                    navbar.style.background = 'rgba(26, 14, 10, 0.98)';
                } else {
                    navbar.style.background = 'rgba(26, 14, 10, 0.95)';
                }
            }
        });
    }

    loadUserData() {
        // Load user preferences and scores from localStorage
        try {
            const userData = localStorage.getItem('aryavart-user-data');
            if (userData) {
                this.userData = JSON.parse(userData);
            } else {
                this.userData = {
                    questionsAsked: [],
                    gameScores: {
                        truthMyth: { best: 0, total: 0 },
                        mantra: { best: 0, total: 0 }
                    },
                    preferences: {
                        theme: 'default'
                    }
                };
            }
        } catch (error) {
            console.warn('Could not load user data:', error);
            this.userData = {
                questionsAsked: [],
                gameScores: {
                    truthMyth: { best: 0, total: 0 },
                    mantra: { best: 0, total: 0 }
                },
                preferences: {
                    theme: 'default'
                }
            };
        }
    }

    saveUserData() {
        try {
            localStorage.setItem('aryavart-user-data', JSON.stringify(this.userData));
        } catch (error) {
            console.warn('Could not save user data:', error);
        }
    }

    addQuestionToHistory(question, answer) {
        this.userData.questionsAsked.unshift({
            question,
            answer,
            timestamp: new Date().toISOString()
        });

        // Keep only last 10 questions
        if (this.userData.questionsAsked.length > 10) {
            this.userData.questionsAsked = this.userData.questionsAsked.slice(0, 10);
        }

        this.saveUserData();
    }

    updateGameScore(gameType, score) {
        if (this.userData.gameScores[gameType]) {
            this.userData.gameScores[gameType].total++;
            if (score > this.userData.gameScores[gameType].best) {
                this.userData.gameScores[gameType].best = score;
            }
            this.saveUserData();
        }
    }

    // Utility functions
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#355e3b' : type === 'error' ? '#8b1538' : '#d4af37'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            z-index: 3000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 4 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }

    // Debug function
    debugInfo() {
        console.log('=== Aryavart.AI Debug Info ===');
        console.log('Current URL:', window.location.href);
        console.log('User Data:', this.userData);
        console.log('Page Elements:', {
            navbar: !!document.querySelector('.navbar'),
            main: !!document.querySelector('main'),
            footer: !!document.querySelector('.footer')
        });
        console.log('Scripts loaded:', {
            main: !!window.aryavartAI,
            ask: !!window.AskTheRishis,
            paths: !!window.pathsOfKnowledge,
            scrolls: !!window.WisdomScrolls,
            quests: !!window.sacredQuests
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing Aryavart.AI...');
    window.aryavartAI = new AryavartAI();
    
    // Add debug info to console
    setTimeout(() => {
        if (window.aryavartAI) {
            window.aryavartAI.debugInfo();
        }
    }, 2000);
});

// Handle page errors
window.addEventListener('error', (e) => {
    console.error('Page error:', e.error);
    if (window.aryavartAI) {
        window.aryavartAI.showNotification('An error occurred. Please refresh the page.', 'error');
    }
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AryavartAI;
}