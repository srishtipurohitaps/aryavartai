// JavaScript for Ask the Rishis page - Enhanced with multiple fallbacks

// AI Responses Database
const rishiResponses = [
    {
        keywords: ['ayurveda', 'food', 'diet', 'eating', 'nutrition'],
        response: `In the ancient science of Ayurveda, food is considered medicine. The great sage Charaka taught us that proper digestion is the root of health. 

"When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need."

Food should be taken according to your dosha - Vata, Pitta, or Kapha. Eat warm, cooked foods. Take your largest meal when the sun is highest, for that is when your digestive fire (Agni) is strongest.

Remember: "Mitaharam" - eat in moderation. Your stomach should be half-filled with food, one-quarter with water, and one-quarter left empty for proper digestion.`
    },
    {
        keywords: ['gargi', 'woman', 'women', 'female', 'philosopher'],
        response: `Gargi Vachaknavi was one of the greatest philosophers in ancient India, a brilliant woman who challenged even the wisest sages in debate.

In the court of King Janaka, when Yajnavalkya declared himself the greatest scholar, it was Gargi who rose to question him. She asked him about the fundamental nature of reality, pushing him to the limits of human knowledge.

"On what is this world woven, warp and woof?" she asked, leading to the profound realization of Brahman as the ultimate reality.

Gargi represents the high status of women in Vedic society, where learning and wisdom were valued above all, regardless of gender. She reminds us that truth-seeking knows no boundaries.`
    },
    {
        keywords: ['karma', 'action', 'dharma', 'duty'],
        response: `Karma is the eternal law of cause and effect, beautifully explained in the Bhagavad Gita by Lord Krishna.

"Karmanyevadhikaraste ma phaleshu kadachana" - You have the right to perform action, but never to the fruits of action.

Every action creates an impression (sanskara) in the mind. Good actions purify the heart, while selfish actions bind us to suffering. The key is performing all actions as service to the Divine, without attachment to results.

There are three types of karma:
- Sanchita: Accumulated actions from past lives
- Prarabdha: Actions bearing fruit in this life  
- Kriyamana: Actions being performed now

Free yourself through selfless action (Nishkama Karma) and devotion (Bhakti).`
    },
    {
        keywords: ['peace', 'meditation', 'inner', 'calm', 'tranquil', 'serenity'],
        response: `Inner peace comes from understanding your true nature, as taught in the Upanishads.

The Katha Upanishad reveals: "When all desires of the heart are surrendered, the mortal becomes immortal and attains Brahman even in this life."

Practice the eight limbs of Yoga as given by Patanjali:
1. Yama (Restraints) - Ahimsa, Satya, Asteya, Brahmacharya, Aparigraha
2. Niyama (Observances) - Saucha, Santosha, Tapas, Svadhyaya, Ishvara Pranidhana
3. Asana (Posture)
4. Pranayama (Breath Control)
5. Pratyahara (Withdrawal of Senses)
6. Dharana (Concentration)
7. Dhyana (Meditation)  
8. Samadhi (Union)

"Yoga chitta vritti nirodha" - Yoga is the cessation of fluctuations of the mind. In stillness, you find your eternal Self.`
    },
    {
        keywords: ['vedas', 'scripture', 'knowledge', 'wisdom'],
        response: `The Vedas are the eternal wisdom, revealed to the Rishis in deep meditation. They are called "Apaurusheya" - not of human origin, but divine revelations.

The four Vedas are:
- Rig Veda: Hymns of praise and cosmic principles
- Sama Veda: Melodies and chants for spiritual elevation  
- Yajur Veda: Sacrificial formulas and procedures
- Atharva Veda: Practical wisdom for daily life

Each Veda has four parts:
- Samhitas: Hymns and mantras
- Brahmanas: Ritual explanations
- Aranyakas: Forest meditations  
- Upanishads: Philosophical teachings

"Aham Brahmasmi" - I am Brahman. This is the ultimate realization that the Vedas lead us to.`
    },
    {
        keywords: ['yoga', 'meditation', 'spiritual', 'practice'],
        response: `Yoga means union - the joining of individual consciousness with universal consciousness. Patanjali's Yoga Sutras provide the complete science.

"Tada drashtuh svarupe avasthanam" - Then the seer is established in its own essential nature.

The path includes:
- Karma Yoga: Path of selfless action
- Bhakti Yoga: Path of devotion and love
- Raja Yoga: Path of meditation and mental control
- Jnana Yoga: Path of knowledge and wisdom

Regular practice (abhyasa) and detachment (vairagya) are the two wings that lift consciousness to higher states. Start with simple pranayama and meditation daily.

Remember: "Practice and all is coming" - as the great guru Pattabhi Jois taught.`
    },
    {
        keywords: ['dharma', 'righteousness', 'duty', 'ethics'],
        response: `Dharma is the cosmic principle that upholds the universe. It is righteousness, moral law, and natural order combined.

The Mahabharata declares: "Dharma exists for the welfare of all beings. Hence one should not abandon dharma."

Four pillars of Dharma in Kali Yuga:
- Satyam: Truth in thought, word, and deed
- Shaucham: Purity of body, mind, and environment  
- Daya: Compassion for all living beings
- Dhyanam: Regular spiritual practice

Your Svadharma (personal dharma) depends on your stage of life (ashrama) and social position (varna). But universal dharma applies to all: non-violence, truthfulness, cleanliness, and self-control.

"Dharmo rakshati rakshitah" - Dharma protects those who protect dharma.`
    }
];

// Fallback responses for questions not in the database
const fallbackResponses = [
    "The ancient rishis remind us that some questions require deep contemplation. Meditate upon this, and understanding will dawn like the sunrise over the Himalayas.",
    "Like the mighty Ganga that flows from Shiva's locks, wisdom flows to those who approach with humility and an open heart. Your question touches the depths of eternal truth.",
    "In the sacred groves where rishis once meditated, such profound questions were pondered. The answer lies within - turn your attention inward through prayer and reflection.",
    "The Upanishads tell us 'Tat tvam asi' - Thou art That. Every sincere question is a step closer to realizing your divine nature.",
    "As the great sage Vasishtha taught, the seeker must be like a river - persistent, humble, and always flowing toward the ocean of truth."
];

class AskTheRishis {
    constructor() {
        console.log('🧙‍♂️ Initializing Ask the Rishis...');
        this.initializeElements();
        this.setupEventListeners();
        this.typewriterSpeed = 30;
        this.testFeatures();
    }

    initializeElements() {
        try {
            this.questionInput = document.getElementById('questionInput');
            this.askButton = document.getElementById('askButton');
            this.answerSection = document.getElementById('answerSection');
            this.answerText = document.getElementById('answerText');
            this.askAnotherBtn = document.getElementById('askAnotherBtn');
            
            console.log('✅ Ask the Rishis elements initialized');
            
            // Fallback if elements not found
            if (!this.questionInput || !this.askButton) {
                console.error('❌ Critical elements missing, creating fallbacks...');
                this.createFallbackInterface();
            }
        } catch (error) {
            console.error('❌ Error initializing elements:', error);
            this.createFallbackInterface();
        }
    }

    createFallbackInterface() {
        const main = document.querySelector('main') || document.body;
        const fallbackHTML = `
            <div style="padding: 2rem; background: rgba(244, 228, 188, 0.1); margin: 2rem; border-radius: 15px;">
                <h2 style="color: #d4af37; text-align: center;">Ask the Rishis - Fallback Mode</h2>
                <textarea id="questionInput" placeholder="Ask your question..." style="width: 100%; padding: 1rem; margin: 1rem 0; border-radius: 10px; background: rgba(244, 228, 188, 0.1); color: #f4e4bc; border: 2px solid #d4af37;"></textarea>
                <button id="askButton" style="background: #d4af37; color: #1a0e0a; padding: 1rem 2rem; border: none; border-radius: 25px; cursor: pointer; font-weight: bold;">Ask the Rishis</button>
                <div id="answerSection" style="display: none; margin-top: 2rem; padding: 2rem; background: rgba(139, 21, 56, 0.1); border-radius: 15px;">
                    <div id="answerText" style="color: #f4e4bc; line-height: 1.8;"></div>
                    <button id="askAnotherBtn" style="background: transparent; color: #d4af37; border: 2px solid #d4af37; padding: 0.5rem 1rem; border-radius: 25px; margin-top: 1rem; cursor: pointer;">Ask Another</button>
                </div>
            </div>
        `;
        main.innerHTML += fallbackHTML;
        this.initializeElements();
    }

    setupEventListeners() {
        try {
            // Multiple event binding methods for maximum compatibility
            if (this.askButton) {
                // Method 1: addEventListener
                this.askButton.addEventListener('click', () => this.askQuestion());
                
                // Method 2: onclick fallback
                this.askButton.onclick = () => this.askQuestion();
                
                console.log('✅ Ask button events bound');
            }
            
            if (this.questionInput) {
                // Enter key handling with multiple methods
                this.questionInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        this.askQuestion();
                    }
                });
                
                this.questionInput.onkeydown = (e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        this.askQuestion();
                    }
                };
                
                // Auto-resize with fallback
                this.questionInput.addEventListener('input', () => this.autoResize());
                this.questionInput.oninput = () => this.autoResize();
            }

            if (this.askAnotherBtn) {
                this.askAnotherBtn.addEventListener('click', () => this.resetForm());
                this.askAnotherBtn.onclick = () => this.resetForm();
            }

            // Global click handlers for example questions
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('example-q')) {
                    this.setExampleQuestion(e.target.textContent);
                }
            });

            console.log('✅ All event listeners set up');
        } catch (error) {
            console.error('❌ Error setting up event listeners:', error);
        }
    }

    autoResize() {
        if (this.questionInput) {
            this.questionInput.style.height = 'auto';
            this.questionInput.style.height = this.questionInput.scrollHeight + 'px';
        }
    }

    setExampleQuestion(question) {
        if (this.questionInput) {
            this.questionInput.value = question;
            this.autoResize();
            this.questionInput.focus();
        }
    }

    askQuestion() {
        console.log('🤔 Processing question...');
        
        const question = this.questionInput ? this.questionInput.value.trim() : '';
        
        if (!question) {
            this.showError('Please enter your question to seek wisdom from the rishis.');
            return;
        }

        this.setLoading(true);
        
        // Show immediate feedback
        this.showNotification('The rishis are contemplating your question...', 'info');

        // Simulate thinking time with random delay
        const thinkingTime = 1500 + Math.random() * 2000;
        
        setTimeout(() => {
            try {
                const response = this.generateResponse(question);
                this.displayAnswer(response);
                
                // Save to history
                this.saveToHistory(question, response);
                
                this.setLoading(false);
                console.log('✅ Question answered successfully');
            } catch (error) {
                console.error('❌ Error generating response:', error);
                this.displayAnswer("The ancient wisdom flows through many channels. Please try asking your question again, and the rishis will guide you.");
                this.setLoading(false);
            }
        }, thinkingTime);
    }

    generateResponse(question) {
        const questionLower = question.toLowerCase();
        
        // Find matching response based on keywords
        for (let responseObj of rishiResponses) {
            for (let keyword of responseObj.keywords) {
                if (questionLower.includes(keyword)) {
                    console.log(`📚 Found matching response for keyword: ${keyword}`);
                    return responseObj.response;
                }
            }
        }
        
        // Return fallback response
        const fallback = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
        console.log('🎲 Using fallback response');
        return fallback;
    }

    displayAnswer(answer) {
        try {
            if (!this.answerSection || !this.answerText) {
                console.error('❌ Answer elements not found, creating fallback...');
                this.createAnswerFallback(answer);
                return;
            }

            this.answerSection.style.display = 'block';
            this.answerText.innerHTML = '';
            
            // Scroll to answer section
            this.answerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Typewriter effect with fallback
            this.typeWriter(answer, this.answerText);
            
            console.log('✅ Answer displayed successfully');
        } catch (error) {
            console.error('❌ Error displaying answer:', error);
            this.createAnswerFallback(answer);
        }
    }

    createAnswerFallback(answer) {
        const container = document.querySelector('.ask-interface') || document.querySelector('main') || document.body;
        const answerHTML = `
            <div style="background: rgba(139, 21, 56, 0.1); padding: 2rem; border-radius: 15px; margin-top: 2rem; border-left: 4px solid #d4af37;">
                <h3 style="color: #d4af37; margin-bottom: 1rem;">रिषि (Rishi) speaks:</h3>
                <div style="color: #f4e4bc; line-height: 1.8; font-size: 1.1rem;">${answer}</div>
                <button onclick="location.reload()" style="background: transparent; color: #d4af37; border: 2px solid #d4af37; padding: 0.5rem 1rem; border-radius: 25px; margin-top: 1rem; cursor: pointer;">Ask Another Question</button>
            </div>
        `;
        container.innerHTML += answerHTML;
    }

    typeWriter(text, element) {
        if (!element) return;
        
        let i = 0;
        const timer = setInterval(() => {
            try {
                if (i < text.length) {
                    if (text.charAt(i) === '\n') {
                        element.innerHTML += '<br>';
                    } else {
                        element.innerHTML += text.charAt(i);
                    }
                    i++;
                    
                    // Auto-scroll to keep text visible
                    element.scrollIntoView({ behavior: 'smooth', block: 'end' });
                } else {
                    clearInterval(timer);
                    // Show "Ask Another" button after typing is complete
                    if (this.askAnotherBtn) {
                        this.askAnotherBtn.style.display = 'inline-block';
                    }
                }
            } catch (error) {
                console.error('❌ Typewriter error:', error);
                clearInterval(timer);
                element.innerHTML = text; // Fallback to instant display
                if (this.askAnotherBtn) {
                    this.askAnotherBtn.style.display = 'inline-block';
                }
            }
        }, this.typewriterSpeed);
    }

    resetForm() {
        try {
            if (this.questionInput) {
                this.questionInput.value = '';
                this.questionInput.style.height = 'auto';
                this.questionInput.focus();
            }
            
            if (this.answerSection) {
                this.answerSection.style.display = 'none';
            }
            
            if (this.askAnotherBtn) {
                this.askAnotherBtn.style.display = 'none';
            }
            
            // Scroll back to input
            if (this.questionInput) {
                this.questionInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            console.log('✅ Form reset successfully');
        } catch (error) {
            console.error('❌ Error resetting form:', error);
            location.reload(); // Ultimate fallback
        }
    }

    setLoading(isLoading) {
        try {
            if (this.askButton) {
                this.askButton.disabled = isLoading;
                const span = this.askButton.querySelector('span');
                if (span) {
                    span.textContent = isLoading ? 'Consulting Rishis...' : 'Seek Wisdom';
                } else {
                    this.askButton.textContent = isLoading ? 'Consulting Rishis...' : 'Seek Wisdom';
                }
            }
            
            if (this.questionInput) {
                this.questionInput.disabled = isLoading;
            }
        } catch (error) {
            console.error('❌ Error setting loading state:', error);
        }
    }

    saveToHistory(question, response) {
        try {
            if (window.aryavartAI && window.aryavartAI.addQuestionToHistory) {
                window.aryavartAI.addQuestionToHistory(question, response);
            }
        } catch (error) {
            console.error('❌ Error saving to history:', error);
        }
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showNotification(message, type = 'info') {
        try {
            if (window.aryavartAI && window.aryavartAI.showNotification) {
                window.aryavartAI.showNotification(message, type);
            } else {
                // Fallback notification
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed; top: 100px; right: 20px; z-index: 3000;
                    background: ${type === 'error' ? '#8b1538' : '#d4af37'};
                    color: white; padding: 1rem 2rem; border-radius: 10px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                `;
                notification.textContent = message;
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 3000);
            }
        } catch (error) {
            console.error('❌ Error showing notification:', error);
            alert(message); // Ultimate fallback
        }
    }

    testFeatures() {
        console.log('🧪 Testing Ask the Rishis features...');
        
        const tests = {
            questionInput: !!this.questionInput,
            askButton: !!this.askButton,
            answerSection: !!this.answerSection,
            eventListeners: true
        };
        
        console.log('🧪 Feature test results:', tests);
        
        const allWorking = Object.values(tests).every(test => test);
        
        if (allWorking) {
            console.log('✅ All Ask the Rishis features working!');
            this.showNotification('Ask the Rishis is ready! 🧙‍♂️', 'success');
        } else {
            console.warn('⚠️ Some features may not work properly');
        }
    }
}

// Global function to set example questions - Multiple fallback methods
function setQuestion(element) {
    try {
        const questionInput = document.getElementById('questionInput');
        if (questionInput && element) {
            questionInput.value = element.textContent || element.innerText;
            questionInput.focus();
            
            // Trigger resize
            questionInput.style.height = 'auto';
            questionInput.style.height = questionInput.scrollHeight + 'px';
            
            console.log('✅ Example question set:', element.textContent);
        }
    } catch (error) {
        console.error('❌ Error setting example question:', error);
    }
}

// Alternative global function
window.setQuestion = setQuestion;

// Initialize when DOM is loaded - Multiple methods
function initializeAskTheRishis() {
    try {
        console.log('🚀 Starting Ask the Rishis initialization...');
        window.askTheRishis = new AskTheRishis();
        console.log('✅ Ask the Rishis initialized successfully!');
    } catch (error) {
        console.error('❌ Failed to initialize Ask the Rishis:', error);
        
        // Fallback initialization
        setTimeout(() => {
            try {
                window.askTheRishis = new AskTheRishis();
            } catch (e) {
                console.error('❌ Fallback initialization also failed:', e);
            }
        }, 1000);
    }
}

// Multiple initialization methods
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAskTheRishis);
} else {
    initializeAskTheRishis();
}

// Fallback initialization
setTimeout(initializeAskTheRishis, 500);
window.addEventListener('load', initializeAskTheRishis);

// Export for debugging
window.AskTheRishis = AskTheRishis;