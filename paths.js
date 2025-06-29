// JavaScript for Paths of Knowledge page - Enhanced with multiple fallbacks

// Era data
const eraData = {
    vedic: {
        title: 'Vedic Period (1500 - 500 BCE)',
        description: 'The foundation of Indian philosophy and spiritual thought',
        cards: [
            {
                title: 'The Four Vedas',
                description: 'Sacred hymns and mantras revealed to ancient seers (Rishis) through deep meditation. The Rig Veda contains cosmic principles, Sama Veda has melodies for spiritual elevation, Yajur Veda provides sacrificial wisdom, and Atharva Veda offers practical life guidance.',
                image: '📿',
                details: 'The Vedas form the foundation of Hindu philosophy and are considered eternal knowledge (Sanatan Dharma). They emphasize the unity of existence and the pursuit of truth through various spiritual practices.'
            },
            {
                title: 'Upanishads - The Inner Teachings',
                description: 'Philosophical dialogues between masters and disciples exploring the nature of reality and the Self. These texts contain the essence of Vedic wisdom, focusing on the relationship between Atman (individual soul) and Brahman (universal consciousness).',
                image: '🧘‍♂️',
                details: 'The principal Upanishads like Isha, Kena, Katha, and Mandukya provide profound insights into consciousness, meditation, and the path to self-realization.'
            },
            {
                title: 'Yajna - Sacred Rituals',
                description: 'Sophisticated fire ceremonies that harmonized cosmic and earthly energies. These rituals were based on precise mathematical calculations and acoustic principles, demonstrating advanced understanding of sound vibration and energy transformation.',
                image: '🔥',
                details: 'Yajnas were not mere rituals but scientific practices involving specific mantras, geometric fire altars, and precise timing to achieve physical and spiritual benefits.'
            }
        ]
    },
    buddhist: {
        title: 'Buddhist Period (500 BCE - 500 CE)',
        description: 'Era of enlightenment and philosophical discourse',
        cards: [
            {
                title: 'Buddha\'s Middle Path',
                description: 'Prince Siddhartha\'s revolutionary approach to ending suffering through balanced living. The Middle Path avoids extremes of indulgence and severe asceticism, focusing on ethical conduct, mental discipline, and wisdom development.',
                image: '☸️',
                details: 'The Noble Eightfold Path provides practical guidance for ethical living: Right Understanding, Right Intention, Right Speech, Right Action, Right Livelihood, Right Effort, Right Mindfulness, and Right Concentration.'
            },
            {
                title: 'Nalanda University',
                description: 'The world\'s first residential international university, attracting scholars from across Asia. Nalanda was a center of learning for mathematics, astronomy, medicine, logic, and philosophy, with a library containing millions of manuscripts.',
                image: '🏛️',
                details: 'At its peak, Nalanda housed over 10,000 students and 2,000 teachers. It pioneered the concept of structured higher education and academic research methodology.'
            },
            {
                title: 'Vipassana Meditation',
                description: 'Insight meditation technique for developing clear awareness and understanding the impermanent nature of existence. This practice involves observing bodily sensations and mental processes without attachment or judgment.',
                image: '🪷',
                details: 'Vipassana, meaning "to see things as they really are," is a practical method for mental purification and achieving liberation from suffering through direct experience of reality.'
            }
        ]
    },
    gupta: {
        title: 'Gupta Age (320 - 550 CE)',
        description: 'The Golden Age of science, mathematics, and arts',
        cards: [
            {
                title: 'Aryabhata\'s Contributions',
                description: 'Revolutionary mathematician and astronomer who calculated Earth\'s circumference, explained eclipses scientifically, and developed the concept of zero. He proposed that the Earth rotates on its axis and provided accurate calculations for planetary positions.',
                image: '🌌',
                details: 'Aryabhata\'s work "Aryabhatiya" influenced mathematics and astronomy for centuries. He calculated the value of π (pi) and the length of the solar year with remarkable accuracy.'
            },
            {
                title: 'Ayurvedic Medicine',
                description: 'Comprehensive medical system developed by Charaka and Sushruta, covering internal medicine, surgery, and holistic healing. Ayurveda emphasizes prevention through lifestyle, diet, and herbal treatments based on individual constitution.',
                image: '🌿',
                details: 'Sushruta Samhita describes over 300 surgical procedures and 120 surgical instruments. Charaka Samhita provides detailed understanding of human anatomy, physiology, and therapeutic principles.'
            },
            {
                title: 'Classical Sanskrit Literature',
                description: 'Masterpieces by Kalidasa, Bharavi, and others that combined artistic excellence with philosophical depth. These works explored themes of love, duty, nature, and spiritual realization through sophisticated poetic techniques.',
                image: '📚',
                details: 'Kalidasa\'s "Shakuntalam" and "Meghaduta" are considered pinnacles of world literature, praised by scholars like Goethe for their emotional depth and artistic perfection.'
            }
        ]
    },
    bhakti: {
        title: 'Bhakti Period (800 - 1700 CE)',
        description: 'Renaissance of devotional literature and philosophy',
        cards: [
            {
                title: 'Sant Kabir\'s Universal Message',
                description: 'Mystical poet who transcended religious boundaries, emphasizing direct experience of the Divine. Kabir\'s verses promote unity, social equality, and the futility of external rituals without inner transformation.',
                image: '🎵',
                details: 'Kabir\'s dohas (couplets) use simple language to convey profound spiritual truths, criticizing religious orthodoxy while promoting love, compassion, and self-realization.'
            },
            {
                title: 'Mirabai\'s Divine Love',
                description: 'Rajasthani princess who renounced worldly life for devotion to Krishna. Her passionate bhajans express the soul\'s longing for union with the Divine, inspiring generations of spiritual seekers.',
                image: '💝',
                details: 'Mirabai\'s poetry exemplifies pure bhakti (devotion), where personal ego dissolves in divine love. Her fearless pursuit of spiritual truth challenged social conventions of her time.'
            },
            {
                title: 'Guru Nanak\'s Teachings',
                description: 'Founder of Sikhism who promoted equality, social justice, and devotion to one formless God. Guru Nanak\'s teachings emphasized honest living, sharing with others, and meditation on the Divine Name.',
                image: '🌅',
                details: 'The Guru Granth Sahib contains Guru Nanak\'s revolutionary ideas about God, society, and spiritual practice, promoting religious harmony and social equality.'
            }
        ]
    },
    modern: {
        title: 'Modern Revival (1947 - Present)',
        description: 'Rediscovering ancient wisdom in contemporary context',
        cards: [
            {
                title: 'Scientific Validation of Yoga',
                description: 'Modern research confirms ancient yogic practices for physical and mental health. Studies show yoga\'s effectiveness in treating stress, depression, cardiovascular disease, and enhancing cognitive function and emotional well-being.',
                image: '🧬',
                details: 'Neuroscience research reveals how meditation and pranayama literally rewire the brain, increasing gray matter density and improving emotional regulation, attention, and self-awareness.'
            },
            {
                title: 'Digital Preservation',
                description: 'Technology-driven efforts to preserve and share ancient Indian texts, making Sanskrit literature accessible through digital libraries, AI translations, and online learning platforms.',
                image: '💻',
                details: 'Projects like Digital Library of India and Sanskrit computational linguistics are ensuring that ancient wisdom remains available for future generations while enabling new forms of scholarly research.'
            },
            {
                title: 'Global Spiritual Renaissance',
                description: 'Worldwide interest in Indian philosophy, meditation, and holistic living. Ancient practices like mindfulness, Ayurveda, and yoga are being integrated into modern healthcare, education, and personal development.',
                image: '🌍',
                details: 'Indian spiritual traditions are influencing global movements in mental health, environmental consciousness, and holistic education, proving the timeless relevance of ancient wisdom.'
            }
        ]
    }
};

class PathsOfKnowledge {
    constructor() {
        console.log('⏳ Initializing Paths of Knowledge...');
        this.initializeElements();
        this.setupEventListeners();
        this.testFeatures();
    }

    initializeElements() {
        try {
            this.timelineItems = document.querySelectorAll('.timeline-item');
            this.eraDetails = document.getElementById('eraDetails');
            this.eraTitle = document.getElementById('eraTitle');
            this.eraCards = document.getElementById('eraCards');
            
            console.log('✅ Timeline elements found:', this.timelineItems.length);
            
            if (this.timelineItems.length === 0) {
                console.warn('⚠️ No timeline items found, creating fallback...');
                this.createFallbackTimeline();
            }
        } catch (error) {
            console.error('❌ Error initializing elements:', error);
            this.createFallbackTimeline();
        }
    }

    createFallbackTimeline() {
        const main = document.querySelector('.paths-main') || document.querySelector('main') || document.body;
        const fallbackHTML = `
            <div style="padding: 2rem; background: rgba(244, 228, 188, 0.1); margin: 2rem; border-radius: 15px;">
                <h2 style="color: #d4af37; text-align: center; margin-bottom: 2rem;">Paths of Knowledge - Interactive Timeline</h2>
                <div style="display: grid; gap: 1rem;">
                    ${Object.entries(eraData).map(([key, era]) => `
                        <div class="timeline-item-fallback" data-era="${key}" style="background: rgba(212, 175, 55, 0.1); padding: 1.5rem; border-radius: 10px; cursor: pointer; border: 2px solid transparent; transition: all 0.3s ease;">
                            <h3 style="color: #d4af37; margin-bottom: 0.5rem;">${era.title}</h3>
                            <p style="color: #f4e4bc; opacity: 0.9;">${era.description}</p>
                        </div>
                    `).join('')}
                </div>
                <div id="eraDetails" style="display: none; margin-top: 2rem; padding: 2rem; background: rgba(244, 228, 188, 0.1); border-radius: 15px;">
                    <button onclick="this.parentElement.style.display='none'" style="float: right; background: none; border: none; color: #d4af37; font-size: 1.5rem; cursor: pointer;">&times;</button>
                    <h2 id="eraTitle" style="color: #d4af37; margin-bottom: 1rem;"></h2>
                    <div id="eraCards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;"></div>
                </div>
            </div>
        `;
        main.innerHTML += fallbackHTML;
        this.initializeElements();
    }

    setupEventListeners() {
        try {
            // Timeline item clicks - multiple methods
            this.timelineItems = document.querySelectorAll('.timeline-item, .timeline-item-fallback');
            
            this.timelineItems.forEach(item => {
                // Method 1: addEventListener
                item.addEventListener('click', () => {
                    const era = item.getAttribute('data-era');
                    this.showEraDetails(era);
                });
                
                // Method 2: onclick fallback
                item.onclick = () => {
                    const era = item.getAttribute('data-era');
                    this.showEraDetails(era);
                };
                
                // Method 3: hover effects
                item.addEventListener('mouseenter', () => {
                    item.style.transform = 'scale(1.02)';
                    item.style.borderColor = '#d4af37';
                });
                
                item.addEventListener('mouseleave', () => {
                    item.style.transform = 'scale(1)';
                    item.style.borderColor = 'transparent';
                });
            });

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.eraDetails && this.eraDetails.style.display !== 'none') {
                    this.closeEraDetails();
                }
            });

            console.log('✅ Timeline event listeners set up for', this.timelineItems.length, 'items');
        } catch (error) {
            console.error('❌ Error setting up event listeners:', error);
        }
    }

    showEraDetails(era) {
        try {
            console.log('📚 Showing details for era:', era);
            
            const data = eraData[era];
            if (!data) {
                console.error('❌ Era data not found:', era);
                return;
            }

            // Find or create elements
            this.eraDetails = this.eraDetails || document.getElementById('eraDetails');
            this.eraTitle = this.eraTitle || document.getElementById('eraTitle');
            this.eraCards = this.eraCards || document.getElementById('eraCards');

            if (!this.eraDetails) {
                console.warn('⚠️ Era details container not found, creating fallback...');
                this.createEraDetailsFallback(data);
                return;
            }

            // Update title
            if (this.eraTitle) {
                this.eraTitle.textContent = data.title;
            }

            // Clear and populate cards
            if (this.eraCards) {
                this.eraCards.innerHTML = '';
                
                data.cards.forEach((card, index) => {
                    const cardElement = this.createEraCard(card, index);
                    this.eraCards.appendChild(cardElement);
                });
            }

            // Show details with animation
            this.eraDetails.style.display = 'block';
            this.eraDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Add entrance animation
            setTimeout(() => {
                this.eraDetails.style.opacity = '1';
                this.eraDetails.style.transform = 'translateY(0)';
            }, 100);

            // Show notification
            this.showNotification(`Exploring ${data.title}`, 'info');
            
            console.log('✅ Era details displayed successfully');
        } catch (error) {
            console.error('❌ Error showing era details:', error);
            this.createEraDetailsFallback(eraData[era] || { title: 'Era Details', cards: [] });
        }
    }

    createEraDetailsFallback(data) {
        const main = document.querySelector('.paths-main') || document.querySelector('main') || document.body;
        const cardsHTML = data.cards.map(card => `
            <div style="background: rgba(212, 175, 55, 0.1); padding: 2rem; border-radius: 15px; margin-bottom: 1rem;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                    <span style="font-size: 2rem;">${card.image}</span>
                    <h4 style="color: #d4af37; margin: 0;">${card.title}</h4>
                </div>
                <p style="color: #f4e4bc; margin-bottom: 1rem; opacity: 0.9;">${card.description}</p>
                <details style="color: #f4e4bc; opacity: 0.8;">
                    <summary style="cursor: pointer; color: #d4af37;">Learn More</summary>
                    <p style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid rgba(212, 175, 55, 0.2);">${card.details || ''}</p>
                </details>
            </div>
        `).join('');
        
        const fallbackHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 2rem; box-sizing: border-box;">
                <div style="background: linear-gradient(135deg, #f4e4bc 0%, #e6d3a3 100%); padding: 2rem; border-radius: 20px; max-width: 800px; max-height: 80vh; overflow-y: auto; color: #2c1810; position: relative;">
                    <button onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 1rem; right: 1.5rem; background: none; border: none; color: #8b1538; font-size: 2rem; cursor: pointer;">&times;</button>
                    <h2 style="color: #8b1538; margin-bottom: 2rem;">${data.title}</h2>
                    ${cardsHTML}
                </div>
            </div>
        `;
        main.innerHTML += fallbackHTML;
    }

    createEraCard(card, index) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'era-card';
        cardDiv.style.animationDelay = `${index * 0.1}s`;
        
        cardDiv.innerHTML = `
            <div class="era-card-header">
                <span class="era-card-icon">${card.image}</span>
                <h4>${card.title}</h4>
            </div>
            <p class="era-card-description">${card.description}</p>
            <div class="era-card-details" style="display: none;">
                <p>${card.details || ''}</p>
            </div>
            <button class="learn-more-btn" onclick="this.parentElement.querySelector('.era-card-details').style.display = this.parentElement.querySelector('.era-card-details').style.display === 'none' ? 'block' : 'none'; this.textContent = this.textContent === 'Learn More' ? 'Show Less' : 'Learn More';">
                Learn More
            </button>
        `;

        return cardDiv;
    }

    closeEraDetails() {
        try {
            if (this.eraDetails) {
                this.eraDetails.style.opacity = '0';
                this.eraDetails.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    this.eraDetails.style.display = 'none';
                }, 300);
            }
        } catch (error) {
            console.error('❌ Error closing era details:', error);
        }
    }

    showNotification(message, type = 'info') {
        try {
            if (window.aryavartAI && window.aryavartAI.showNotification) {
                window.aryavartAI.showNotification(message, type);
            } else {
                console.log('📢', message);
            }
        } catch (error) {
            console.error('❌ Error showing notification:', error);
        }
    }

    testFeatures() {
        console.log('🧪 Testing Paths of Knowledge features...');
        
        const tests = {
            timelineItems: this.timelineItems.length > 0,
            eraData: Object.keys(eraData).length > 0,
            eventListeners: true
        };
        
        console.log('🧪 Feature test results:', tests);
        
        const allWorking = Object.values(tests).every(test => test);
        
        if (allWorking) {
            console.log('✅ All Paths of Knowledge features working!');
            this.showNotification('Timeline is ready to explore! ⏳', 'success');
        } else {
            console.warn('⚠️ Some features may not work properly');
        }
    }
}

// Global function for closing era details (called from HTML)
function closeEraDetails() {
    try {
        if (window.pathsOfKnowledge) {
            window.pathsOfKnowledge.closeEraDetails();
        } else {
            // Fallback
            const eraDetails = document.getElementById('eraDetails');
            if (eraDetails) {
                eraDetails.style.display = 'none';
            }
        }
    } catch (error) {
        console.error('❌ Error in global closeEraDetails:', error);
    }
}

// Make function globally available
window.closeEraDetails = closeEraDetails;

// Initialize when DOM is loaded - Multiple methods
function initializePathsOfKnowledge() {
    try {
        console.log('🚀 Starting Paths of Knowledge initialization...');
        window.pathsOfKnowledge = new PathsOfKnowledge();
        console.log('✅ Paths of Knowledge initialized successfully!');
    } catch (error) {
        console.error('❌ Failed to initialize Paths of Knowledge:', error);
        
        // Fallback initialization
        setTimeout(() => {
            try {
                window.pathsOfKnowledge = new PathsOfKnowledge();
            } catch (e) {
                console.error('❌ Fallback initialization also failed:', e);
            }
        }, 1000);
    }
}

// Multiple initialization methods
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePathsOfKnowledge);
} else {
    initializePathsOfKnowledge();
}

// Fallback initialization
setTimeout(initializePathsOfKnowledge, 500);
window.addEventListener('load', initializePathsOfKnowledge);

// Export for debugging
window.PathsOfKnowledge = PathsOfKnowledge;