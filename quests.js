// JavaScript for Sacred Quests page - Enhanced with multiple fallbacks

// Truth or Myth questions database
const truthMythQuestions = [
    {
        question: "Ancient Indians knew that the Earth was round and calculated its circumference accurately.",
        answer: true,
        explanation: "Aryabhata (5th century CE) calculated Earth's circumference as 24,835 miles, very close to the actual 24,901 miles."
    },
    {
        question: "The concept of zero was invented by the Arabs and brought to India.",
        answer: false,
        explanation: "Zero was invented in India by mathematicians like Brahmagupta (7th century CE) and later transmitted to the Arab world."
    },
    {
        question: "Sushruta performed cataract surgery and plastic surgery over 2000 years ago.",
        answer: true,
        explanation: "The Sushruta Samhita describes over 300 surgical procedures including cataract removal and rhinoplasty (nose reconstruction)."
    },
    {
        question: "Yoga was originally created for physical fitness and flexibility.",
        answer: false,
        explanation: "Yoga was developed as a comprehensive spiritual practice for achieving union with the Divine, with physical benefits being secondary."
    },
    {
        question: "Ancient Indian texts describe flying vehicles called Vimanas.",
        answer: true,
        explanation: "The Ramayana, Mahabharata, and Vaimanika Shastra contain detailed descriptions of various types of flying vehicles."
    },
    {
        question: "The game of chess originated in ancient India as Chaturanga.",
        answer: true,
        explanation: "Chaturanga, meaning 'four divisions of the military,' was the precursor to modern chess, invented in India around the 6th century CE."
    },
    {
        question: "Ancient Indians believed the sun revolved around the Earth.",
        answer: false,
        explanation: "Aryabhata correctly stated that the Earth rotates on its axis and explained the apparent movement of stars and planets."
    },
    {
        question: "The decimal system was first used in ancient India.",
        answer: true,
        explanation: "The decimal place-value system with zero was developed in India and later transmitted to other civilizations."
    },
    {
        question: "Ayurveda only deals with herbal medicines and natural remedies.",
        answer: false,
        explanation: "Ayurveda includes surgery, psychology, lifestyle medicine, diet therapy, and various treatment modalities beyond herbs."
    },
    {
        question: "The Vedas were written down when they were first composed.",
        answer: false,
        explanation: "The Vedas were transmitted orally for over 1000 years before being written down, maintaining perfect accuracy through sophisticated memorization techniques."
    }
];

// Sanskrit words and meanings for Decode Mantra game
const sanskritWords = [
    {
        word: "अहिंसा (Ahimsa)",
        meanings: ["Non-violence", "Anger", "Meditation", "Sacrifice"],
        correct: 0,
        explanation: "Ahimsa means non-violence or non-harm, the first principle of yoga and dharma."
    },
    {
        word: "धर्म (Dharma)",
        meanings: ["Wealth", "Righteousness", "Knowledge", "Power"],
        correct: 1,
        explanation: "Dharma means righteousness, moral law, or one's duty in life."
    },
    {
        word: "मोक्ष (Moksha)",
        meanings: ["Pleasure", "Duty", "Liberation", "Wealth"],
        correct: 2,
        explanation: "Moksha means liberation or release from the cycle of birth and death."
    },
    {
        word: "संस्कार (Sanskara)",
        meanings: ["Language", "Ritual", "Mental impression", "Temple"],
        correct: 2,
        explanation: "Sanskara refers to mental impressions or psychological imprints from past actions."
    },
    {
        word: "गुरु (Guru)",
        meanings: ["Teacher", "Student", "Book", "Temple"],
        correct: 0,
        explanation: "Guru means teacher or one who brings light to darkness (Gu=darkness, Ru=light)."
    },
    {
        word: "योग (Yoga)",
        meanings: ["Exercise", "Union", "Breathing", "Posture"],
        correct: 1,
        explanation: "Yoga means union or joining, specifically the union of individual consciousness with universal consciousness."
    },
    {
        word: "कर्म (Karma)",
        meanings: ["Fate", "Action", "Meditation", "Prayer"],
        correct: 1,
        explanation: "Karma means action or deed, and the law of cause and effect governing all actions."
    },
    {
        word: "आत्मा (Atma)",
        meanings: ["Body", "Mind", "Soul", "Breath"],
        correct: 2,
        explanation: "Atma means the individual soul or Self, the eternal essence of a being."
    },
    {
        word: "ब्रह्म (Brahman)",
        meanings: ["Priest", "Ultimate Reality", "Ritual", "Scripture"],
        correct: 1,
        explanation: "Brahman is the ultimate reality, the unchanging truth behind the universe."
    },
    {
        word: "सत्य (Satya)",
        meanings: ["Peace", "Truth", "Love", "Wisdom"],
        correct: 1,
        explanation: "Satya means truth, one of the fundamental principles of dharma."
    }
];

// Hidden facts for temple bell
const hiddenFacts = [
    "The word 'Guru' comes from 'Gu' (darkness) and 'Ru' (light) - one who leads from darkness to light.",
    "Ancient Indian mathematicians used the concept of infinity (ananta) in their calculations thousands of years ago.",
    "The Gayatri Mantra contains exactly 24 syllables, corresponding to the 24 hours of the day.",
    "Takshashila University had students from as far as Babylon, Greece, and China over 2500 years ago.",
    "The Sanskrit word 'Namaste' means 'I bow to the divine in you' - recognizing the sacred in everyone.",
    "Ancient Indians knew about the speed of light - the Rig Veda mentions light traveling 2,202 yojanas in half a nimisha.",
    "The concept of 'Vasudhaiva Kutumbakam' (the world is one family) appears in ancient Indian texts.",
    "Charaka identified the heart as the controlling center of the circulatory system 2000 years before Harvey.",
    "The game of Snakes and Ladders originated in India as 'Moksha Patam' to teach moral lessons.",
    "Ancient Indian texts describe the atom (anu) as the smallest indivisible particle of matter."
];

class SacredQuests {
    constructor() {
        console.log('🎯 Initializing Sacred Quests...');
        this.currentGame = null;
        this.gameState = {
            truthMyth: {
                currentQuestion: 0,
                score: 0,
                questions: [...truthMythQuestions].sort(() => Math.random() - 0.5)
            },
            mantra: {
                currentQuestion: 0,
                score: 0,
                questions: [...sanskritWords].sort(() => Math.random() - 0.5)
            }
        };
        
        this.initializeElements();
        this.setupEventListeners();
        this.testFeatures();
    }

    initializeElements() {
        try {
            // Temple bell
            this.templeBell = document.getElementById('templeBell');
            this.hiddenFact = document.getElementById('hiddenFact');
            this.factText = document.getElementById('factText');

            // Game containers
            this.truthMythGame = document.getElementById('truthMythGame');
            this.mantraGame = document.getElementById('mantraGame');
            this.gameResults = document.getElementById('gameResults');

            // Truth or Myth elements
            this.truthMythQuestion = document.getElementById('truthMythQuestion');
            this.truthMythScore = document.getElementById('truthMythScore');
            this.truthMythFeedback = document.getElementById('truthMythFeedback');
            this.nextTruthMythBtn = document.getElementById('nextTruthMythBtn');

            // Mantra game elements
            this.sanskritWord = document.getElementById('sanskritWord');
            this.mantraScore = document.getElementById('mantraScore');
            this.meaningButtons = document.querySelectorAll('.meaning-btn');
            this.mantraFeedback = document.getElementById('mantraFeedback');
            this.nextMantraBtn = document.getElementById('nextMantraBtn');

            // Results elements
            this.finalScore = document.getElementById('finalScore');
            this.performanceMessage = document.getElementById('performanceMessage');
            
            console.log('✅ Quest elements initialized');
            
            if (!this.templeBell) {
                console.warn('⚠️ Temple bell not found, creating fallback...');
                this.createFallbackInterface();
            }
        } catch (error) {
            console.error('❌ Error initializing elements:', error);
            this.createFallbackInterface();
        }
    }

    createFallbackInterface() {
        const main = document.querySelector('.quests-main') || document.querySelector('main') || document.body;
        const fallbackHTML = `
            <div style="padding: 2rem; background: rgba(244, 228, 188, 0.1); margin: 2rem; border-radius: 15px;">
                <h2 style="color: #d4af37; text-align: center; margin-bottom: 2rem;">Sacred Quests - Test Your Knowledge</h2>
                
                <div id="templeBell" style="position: fixed; top: 50%; right: 2rem; font-size: 2rem; cursor: pointer; background: rgba(212, 175, 55, 0.2); padding: 1rem; border-radius: 50%; z-index: 100;">🔔</div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
                    <div style="background: rgba(244, 228, 188, 0.1); padding: 2.5rem; border-radius: 15px; text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">🎯</div>
                        <h3 style="color: #d4af37; margin-bottom: 1rem;">Truth or Myth</h3>
                        <p style="color: #f4e4bc; margin-bottom: 2rem; opacity: 0.9;">Test your knowledge of ancient Indian facts and legends</p>
                        <button onclick="window.sacredQuests.startTruthMythGame()" style="background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%); color: #1a0e0a; padding: 1rem 2rem; border: none; border-radius: 50px; cursor: pointer; font-weight: 500;">Begin Quest</button>
                    </div>
                    
                    <div style="background: rgba(244, 228, 188, 0.1); padding: 2.5rem; border-radius: 15px; text-align: center;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">🔤</div>
                        <h3 style="color: #d4af37; margin-bottom: 1rem;">Decode the Mantra</h3>
                        <p style="color: #f4e4bc; margin-bottom: 2rem; opacity: 0.9;">Match Sanskrit words with their meanings</p>
                        <button onclick="window.sacredQuests.startMantraGame()" style="background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%); color: #1a0e0a; padding: 1rem 2rem; border: none; border-radius: 50px; cursor: pointer; font-weight: 500;">Begin Quest</button>
                    </div>
                </div>
                
                <!-- Game containers will be added dynamically -->
                <div id="truthMythGame" style="display: none;"></div>
                <div id="mantraGame" style="display: none;"></div>
                <div id="gameResults" style="display: none;"></div>
                <div id="hiddenFact" style="display: none;"></div>
            </div>
        `;
        main.innerHTML += fallbackHTML;
        this.initializeElements();
    }

    setupEventListeners() {
        try {
            // Temple bell click - multiple methods
            if (this.templeBell) {
                this.templeBell.addEventListener('click', () => this.showHiddenFact());
                this.templeBell.onclick = () => this.showHiddenFact();
                
                // Add bell animation on hover
                this.templeBell.addEventListener('mouseenter', () => {
                    this.templeBell.style.animation = 'swing 0.5s ease-in-out';
                });

                this.templeBell.addEventListener('animationend', () => {
                    this.templeBell.style.animation = '';
                });
            }

            console.log('✅ Quest event listeners set up');
        } catch (error) {
            console.error('❌ Error setting up event listeners:', error);
        }
    }

    showHiddenFact() {
        try {
            const randomFact = hiddenFacts[Math.floor(Math.random() * hiddenFacts.length)];
            
            if (!this.hiddenFact || !this.factText) {
                // Create fallback modal
                this.createHiddenFactFallback(randomFact);
                return;
            }
            
            this.factText.textContent = randomFact;
            this.hiddenFact.style.display = 'flex';
            
            // Add entrance animation
            setTimeout(() => {
                this.hiddenFact.style.opacity = '1';
            }, 50);

            // Ring bell sound effect (visual feedback)
            if (this.templeBell) {
                this.templeBell.style.transform = 'scale(1.2) rotate(15deg)';
                setTimeout(() => {
                    this.templeBell.style.transform = 'scale(1) rotate(0deg)';
                }, 200);
            }

            this.showNotification('Sacred bell rings with ancient wisdom! 🔔', 'success');
            console.log('✅ Hidden fact displayed');
        } catch (error) {
            console.error('❌ Error showing hidden fact:', error);
            alert(hiddenFacts[Math.floor(Math.random() * hiddenFacts.length)]);
        }
    }

    createHiddenFactFallback(fact) {
        const fallbackHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 3000; display: flex; align-items: center; justify-content: center; padding: 2rem; box-sizing: border-box;">
                <div style="background: linear-gradient(135deg, #f4e4bc 0%, #e6d3a3 100%); padding: 3rem; border-radius: 20px; max-width: 600px; text-align: center; color: #2c1810; position: relative;">
                    <button onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 1rem; right: 1.5rem; background: none; border: none; color: #8b1538; font-size: 1.5rem; cursor: pointer;">✕</button>
                    <h3 style="color: #8b1538; margin-bottom: 1.5rem;">🌟 Hidden Wisdom Revealed 🌟</h3>
                    <p style="color: #2c1810; line-height: 1.6; margin-bottom: 2rem;">${fact}</p>
                    <button onclick="this.parentElement.parentElement.remove()" style="background: transparent; color: #d4af37; border: 2px solid #d4af37; padding: 0.5rem 1rem; border-radius: 25px; cursor: pointer;">Close</button>
                </div>
            </div>
        `;
        document.body.innerHTML += fallbackHTML;
    }

    // Truth or Myth Game Methods
    startTruthMythGame() {
        try {
            console.log('🎯 Starting Truth or Myth game...');
            
            this.currentGame = 'truthMyth';
            this.gameState.truthMyth.currentQuestion = 0;
            this.gameState.truthMyth.score = 0;
            this.gameState.truthMyth.questions = [...truthMythQuestions].sort(() => Math.random() - 0.5);
            
            if (!this.truthMythGame) {
                this.createTruthMythGameFallback();
                return;
            }
            
            this.truthMythGame.style.display = 'block';
            this.showTruthMythQuestion();
            
            // Scroll to game
            this.truthMythGame.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            console.log('✅ Truth or Myth game started');
        } catch (error) {
            console.error('❌ Error starting Truth or Myth game:', error);
            this.createTruthMythGameFallback();
        }
    }

    createTruthMythGameFallback() {
        const container = document.querySelector('.quests-main') || document.querySelector('main') || document.body;
        const gameHTML = `
            <div id="truthMythGameFallback" style="background: rgba(244, 228, 188, 0.1); padding: 3rem; border-radius: 20px; margin: 2rem; backdrop-filter: blur(10px); border: 1px solid rgba(212, 175, 55, 0.2);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap;">
                    <h2 style="color: #d4af37;">Truth or Myth?</h2>
                    <span style="color: #f4e4bc; font-size: 1.2rem; font-weight: 600;">Score: <span id="truthMythScoreFallback">0</span>/10</span>
                </div>
                
                <div style="background: rgba(212, 175, 55, 0.1); padding: 2rem; border-radius: 15px; margin-bottom: 2rem; text-align: center;">
                    <p id="truthMythQuestionFallback" style="color: #f4e4bc; font-size: 1.2rem; line-height: 1.6;"></p>
                </div>
                
                <div style="display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;">
                    <button onclick="window.sacredQuests.answerTruthMyth(true)" style="padding: 1rem 2rem; border: 2px solid #355e3b; background: transparent; color: #355e3b; border-radius: 10px; cursor: pointer; font-size: 1.1rem; font-weight: 500;">Truth</button>
                    <button onclick="window.sacredQuests.answerTruthMyth(false)" style="padding: 1rem 2rem; border: 2px solid #8b1538; background: transparent; color: #8b1538; border-radius: 10px; cursor: pointer; font-size: 1.1rem; font-weight: 500;">Myth</button>
                </div>
                
                <div id="truthMythFeedbackFallback" style="display: none; padding: 1rem; border-radius: 10px; text-align: center; margin-bottom: 2rem; font-weight: 500;"></div>
                
                <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                    <button id="nextTruthMythBtnFallback" onclick="window.sacredQuests.nextTruthMythQuestion()" style="display: none; background: transparent; color: #d4af37; border: 2px solid #d4af37; padding: 0.5rem 1rem; border-radius: 25px; cursor: pointer;">Next Question</button>
                    <button onclick="window.sacredQuests.endTruthMythGame()" style="background: transparent; color: #d4af37; border: 2px solid #d4af37; padding: 0.5rem 1rem; border-radius: 25px; cursor: pointer;">End Game</button>
                </div>
            </div>
        `;
        container.innerHTML += gameHTML;
        
        // Update element references
        this.truthMythGame = document.getElementById('truthMythGameFallback');
        this.truthMythQuestion = document.getElementById('truthMythQuestionFallback');
        this.truthMythScore = document.getElementById('truthMythScoreFallback');
        this.truthMythFeedback = document.getElementById('truthMythFeedbackFallback');
        this.nextTruthMythBtn = document.getElementById('nextTruthMythBtnFallback');
        
        this.showTruthMythQuestion();
    }

    showTruthMythQuestion() {
        try {
            const state = this.gameState.truthMyth;
            const question = state.questions[state.currentQuestion];
            
            if (this.truthMythQuestion) {
                this.truthMythQuestion.textContent = question.question;
            }
            if (this.truthMythScore) {
                this.truthMythScore.textContent = state.score;
            }
            if (this.truthMythFeedback) {
                this.truthMythFeedback.style.display = 'none';
            }
            if (this.nextTruthMythBtn) {
                this.nextTruthMythBtn.style.display = 'none';
            }
            
            // Enable answer buttons
            document.querySelectorAll('[onclick*="answerTruthMyth"]').forEach(btn => {
                btn.disabled = false;
                btn.style.opacity = '1';
            });
            
            console.log('✅ Truth or Myth question displayed');
        } catch (error) {
            console.error('❌ Error showing Truth or Myth question:', error);
        }
    }

    answerTruthMyth(userAnswer) {
        try {
            console.log('🤔 Processing Truth or Myth answer:', userAnswer);
            
            const state = this.gameState.truthMyth;
            const question = state.questions[state.currentQuestion];
            const isCorrect = userAnswer === question.answer;
            
            if (isCorrect) {
                state.score++;
                if (this.truthMythScore) {
                    this.truthMythScore.textContent = state.score;
                }
            }
            
            // Show feedback
            const feedbackElement = this.truthMythFeedback || document.getElementById('truthMythFeedbackFallback');
            if (feedbackElement) {
                feedbackElement.innerHTML = `
                    <div style="color: ${isCorrect ? '#355e3b' : '#8b1538'}; background: rgba(${isCorrect ? '53, 94, 59' : '139, 21, 56'}, 0.2); border: 1px solid ${isCorrect ? '#355e3b' : '#8b1538'}; padding: 1rem; border-radius: 10px;">
                        <strong>${isCorrect ? 'Correct!' : 'Incorrect!'}</strong><br>
                        ${question.explanation}
                    </div>
                `;
                feedbackElement.style.display = 'block';
            }
            
            // Disable answer buttons
            document.querySelectorAll('[onclick*="answerTruthMyth"]').forEach(btn => {
                btn.disabled = true;
                btn.style.opacity = '0.6';
            });
            
            // Show next button or end game
            if (state.currentQuestion < 9) {
                const nextBtn = this.nextTruthMythBtn || document.getElementById('nextTruthMythBtnFallback');
                if (nextBtn) {
                    nextBtn.style.display = 'inline-block';
                }
            } else {
                setTimeout(() => this.endTruthMythGame(), 2000);
            }
            
            console.log('✅ Truth or Myth answer processed');
        } catch (error) {
            console.error('❌ Error processing Truth or Myth answer:', error);
        }
    }

    nextTruthMythQuestion() {
        try {
            this.gameState.truthMyth.currentQuestion++;
            this.showTruthMythQuestion();
        } catch (error) {
            console.error('❌ Error showing next Truth or Myth question:', error);
        }
    }

    endTruthMythGame() {
        try {
            const score = this.gameState.truthMyth.score;
            if (this.truthMythGame) {
                this.truthMythGame.style.display = 'none';
            }
            this.showResults('Truth or Myth', score, 10);
            
            // Update user data
            this.updateGameScore('truthMyth', score);
            
            console.log('✅ Truth or Myth game ended with score:', score);
        } catch (error) {
            console.error('❌ Error ending Truth or Myth game:', error);
        }
    }

    // Decode Mantra Game Methods
    startMantraGame() {
        try {
            console.log('🔤 Starting Decode Mantra game...');
            
            this.currentGame = 'mantra';
            this.gameState.mantra.currentQuestion = 0;
            this.gameState.mantra.score = 0;
            this.gameState.mantra.questions = [...sanskritWords].sort(() => Math.random() - 0.5);
            
            if (!this.mantraGame) {
                this.createMantraGameFallback();
                return;
            }
            
            this.mantraGame.style.display = 'block';
            this.showMantraQuestion();
            
            // Scroll to game
            this.mantraGame.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            console.log('✅ Decode Mantra game started');
        } catch (error) {
            console.error('❌ Error starting Decode Mantra game:', error);
            this.createMantraGameFallback();
        }
    }

    createMantraGameFallback() {
        const container = document.querySelector('.quests-main') || document.querySelector('main') || document.body;
        const gameHTML = `
            <div id="mantraGameFallback" style="background: rgba(244, 228, 188, 0.1); padding: 3rem; border-radius: 20px; margin: 2rem; backdrop-filter: blur(10px); border: 1px solid rgba(212, 175, 55, 0.2);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap;">
                    <h2 style="color: #d4af37;">Decode the Mantra</h2>
                    <span style="color: #f4e4bc; font-size: 1.2rem; font-weight: 600;">Score: <span id="mantraScoreFallback">0</span>/10</span>
                </div>
                
                <div style="text-align: center; margin-bottom: 2rem;">
                    <h3 id="sanskritWordFallback" style="color: #d4af37; font-size: 2.5rem; text-shadow: 0 0 10px rgba(212, 175, 55, 0.3);"></h3>
                </div>
                
                <div id="meaningOptionsFallback" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;"></div>
                
                <div id="mantraFeedbackFallback" style="display: none; padding: 1rem; border-radius: 10px; text-align: center; margin-bottom: 2rem; font-weight: 500;"></div>
                
                <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                    <button id="nextMantraBtnFallback" onclick="window.sacredQuests.nextMantraQuestion()" style="display: none; background: transparent; color: #d4af37; border: 2px solid #d4af37; padding: 0.5rem 1rem; border-radius: 25px; cursor: pointer;">Next Word</button>
                    <button onclick="window.sacredQuests.endMantraGame()" style="background: transparent; color: #d4af37; border: 2px solid #d4af37; padding: 0.5rem 1rem; border-radius: 25px; cursor: pointer;">End Game</button>
                </div>
            </div>
        `;
        container.innerHTML += gameHTML;
        
        // Update element references
        this.mantraGame = document.getElementById('mantraGameFallback');
        this.sanskritWord = document.getElementById('sanskritWordFallback');
        this.mantraScore = document.getElementById('mantraScoreFallback');
        this.mantraFeedback = document.getElementById('mantraFeedbackFallback');
        this.nextMantraBtn = document.getElementById('nextMantraBtnFallback');
        
        this.showMantraQuestion();
    }

    showMantraQuestion() {
        try {
            const state = this.gameState.mantra;
            const question = state.questions[state.currentQuestion];
            
            if (this.sanskritWord) {
                this.sanskritWord.textContent = question.word;
            }
            if (this.mantraScore) {
                this.mantraScore.textContent = state.score;
            }
            if (this.mantraFeedback) {
                this.mantraFeedback.style.display = 'none';
            }
            if (this.nextMantraBtn) {
                this.nextMantraBtn.style.display = 'none';
            }
            
            // Set up meaning buttons
            const meaningContainer = document.getElementById('meaningOptionsFallback') || document.querySelector('.meaning-options');
            if (meaningContainer) {
                meaningContainer.innerHTML = '';
                question.meanings.forEach((meaning, index) => {
                    const btn = document.createElement('button');
                    btn.textContent = meaning;
                    btn.onclick = () => this.selectMeaning(index);
                    btn.style.cssText = `
                        padding: 1rem 2rem;
                        border: 2px solid #d4af37;
                        background: transparent;
                        color: #d4af37;
                        border-radius: 10px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        font-size: 1.1rem;
                        font-weight: 500;
                    `;
                    btn.addEventListener('mouseenter', () => {
                        btn.style.background = '#d4af37';
                        btn.style.color = '#1a0e0a';
                    });
                    btn.addEventListener('mouseleave', () => {
                        btn.style.background = 'transparent';
                        btn.style.color = '#d4af37';
                    });
                    meaningContainer.appendChild(btn);
                });
            }
            
            console.log('✅ Mantra question displayed');
        } catch (error) {
            console.error('❌ Error showing Mantra question:', error);
        }
    }

    selectMeaning(selectedIndex) {
        try {
            console.log('🔤 Processing Mantra answer:', selectedIndex);
            
            const state = this.gameState.mantra;
            const question = state.questions[state.currentQuestion];
            const isCorrect = selectedIndex === question.correct;
            
            if (isCorrect) {
                state.score++;
                if (this.mantraScore) {
                    this.mantraScore.textContent = state.score;
                }
            }
            
            // Show feedback
            const feedbackElement = this.mantraFeedback || document.getElementById('mantraFeedbackFallback');
            if (feedbackElement) {
                feedbackElement.innerHTML = `
                    <div style="color: ${isCorrect ? '#355e3b' : '#8b1538'}; background: rgba(${isCorrect ? '53, 94, 59' : '139, 21, 56'}, 0.2); border: 1px solid ${isCorrect ? '#355e3b' : '#8b1538'}; padding: 1rem; border-radius: 10px;">
                        <strong>${isCorrect ? 'Correct!' : 'Incorrect!'}</strong><br>
                        ${question.explanation}
                    </div>
                `;
                feedbackElement.style.display = 'block';
            }
            
            // Highlight correct answer and disable buttons
            const meaningContainer = document.getElementById('meaningOptionsFallback') || document.querySelector('.meaning-options');
            if (meaningContainer) {
                const buttons = meaningContainer.querySelectorAll('button');
                buttons.forEach((btn, index) => {
                    btn.disabled = true;
                    btn.style.opacity = '0.6';
                    btn.style.cursor = 'not-allowed';
                    
                    if (index === question.correct) {
                        btn.style.background = '#355e3b';
                        btn.style.color = 'white';
                        btn.style.borderColor = '#355e3b';
                        btn.style.opacity = '1';
                    } else if (index === selectedIndex && !isCorrect) {
                        btn.style.background = '#8b1538';
                        btn.style.color = 'white';
                        btn.style.borderColor = '#8b1538';
                        btn.style.opacity = '1';
                    }
                });
            }
            
            // Show next button or end game
            if (state.currentQuestion < 9) {
                const nextBtn = this.nextMantraBtn || document.getElementById('nextMantraBtnFallback');
                if (nextBtn) {
                    nextBtn.style.display = 'inline-block';
                }
            } else {
                setTimeout(() => this.endMantraGame(), 2000);
            }
            
            console.log('✅ Mantra answer processed');
        } catch (error) {
            console.error('❌ Error processing Mantra answer:', error);
        }
    }

    nextMantraQuestion() {
        try {
            this.gameState.mantra.currentQuestion++;
            this.showMantraQuestion();
        } catch (error) {
            console.error('❌ Error showing next Mantra question:', error);
        }
    }

    endMantraGame() {
        try {
            const score = this.gameState.mantra.score;
            if (this.mantraGame) {
                this.mantraGame.style.display = 'none';
            }
            this.showResults('Decode the Mantra', score, 10);
            
            // Update user data
            this.updateGameScore('mantra', score);
            
            console.log('✅ Decode Mantra game ended with score:', score);
        } catch (error) {
            console.error('❌ Error ending Decode Mantra game:', error);
        }
    }

    // Results and Utility Methods
    showResults(gameType, score, total) {
        try {
            let message = '';
            const percentage = (score / total) * 100;
            
            if (percentage >= 90) {
                message = '🌟 Exceptional! You are truly a keeper of ancient wisdom!';
            } else if (percentage >= 70) {
                message = '🏆 Excellent! Your knowledge of ancient India is impressive!';
            } else if (percentage >= 50) {
                message = '👍 Good work! Continue your journey of learning!';
            } else {
                message = '📚 Keep exploring! There is much wisdom yet to discover!';
            }
            
            // Create results modal
            const resultsHTML = `
                <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 3000; display: flex; align-items: center; justify-content: center; padding: 2rem; box-sizing: border-box;">
                    <div style="background: linear-gradient(135deg, #f4e4bc 0%, #e6d3a3 100%); padding: 3rem; border-radius: 20px; text-align: center; max-width: 500px; color: #2c1810; position: relative;">
                        <h2 style="color: #8b1538; margin-bottom: 2rem;">Quest Complete!</h2>
                        <div style="font-size: 2rem; font-weight: 600; color: #d4af37; margin-bottom: 1rem;">${score}/${total}</div>
                        <div style="color: #5d4e37; margin-bottom: 2rem; font-size: 1.1rem;">${message}</div>
                        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                            <button onclick="this.parentElement.parentElement.remove(); location.reload()" style="background: linear-gradient(135deg, #d4af37 0%, #b8941f 100%); color: #1a0e0a; padding: 1rem 2rem; border: none; border-radius: 50px; cursor: pointer; font-weight: 500;">New Quest</button>
                            <button onclick="window.sacredQuests.shareScore('${gameType}', ${score})" style="background: transparent; color: #d4af37; border: 2px solid #d4af37; padding: 1rem 2rem; border-radius: 50px; cursor: pointer; font-weight: 500;">Share Score</button>
                        </div>
                    </div>
                </div>
            `;
            document.body.innerHTML += resultsHTML;
            
            console.log('✅ Results displayed');
        } catch (error) {
            console.error('❌ Error showing results:', error);
            alert(`Quest Complete!\nScore: ${score}/${total}\n${message}`);
        }
    }

    shareScore(gameType, score) {
        try {
            const shareText = `I scored ${score}/10 in ${gameType} on Aryavart.AI! Test your knowledge of ancient Indian wisdom at ${window.location.origin}`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'Aryavart.AI Quest Results',
                    text: shareText,
                    url: window.location.href
                });
            } else if (navigator.clipboard) {
                navigator.clipboard.writeText(shareText).then(() => {
                    this.showNotification('Score copied to clipboard!', 'success');
                });
            } else {
                // Fallback
                const textArea = document.createElement('textarea');
                textArea.value = shareText;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                this.showNotification('Score copied to clipboard!', 'success');
            }
            
            console.log('✅ Score shared');
        } catch (error) {
            console.error('❌ Error sharing score:', error);
            alert(`Share this: ${shareText}`);
        }
    }

    updateGameScore(gameType, score) {
        try {
            if (window.aryavartAI && window.aryavartAI.updateGameScore) {
                window.aryavartAI.updateGameScore(gameType, score);
            }
        } catch (error) {
            console.error('❌ Error updating game score:', error);
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
        console.log('🧪 Testing Sacred Quests features...');
        
        const tests = {
            templeBell: !!this.templeBell,
            gameData: truthMythQuestions.length > 0 && sanskritWords.length > 0,
            hiddenFacts: hiddenFacts.length > 0,
            gameState: !!this.gameState
        };
        
        console.log('🧪 Feature test results:', tests);
        
        const allWorking = Object.values(tests).every(test => test);
        
        if (allWorking) {
            console.log('✅ All Sacred Quests features working!');
            this.showNotification('Sacred Quests are ready to challenge you! 🎯', 'success');
        } else {
            console.warn('⚠️ Some features may not work properly');
        }
    }
}

// Global functions for HTML onclick handlers - Multiple fallback methods
const questFunctions = {
    startTruthMythGame: () => window.sacredQuests?.startTruthMythGame(),
    startMantraGame: () => window.sacredQuests?.startMantraGame(),
    answerTruthMyth: (answer) => window.sacredQuests?.answerTruthMyth(answer),
    nextTruthMythQuestion: () => window.sacredQuests?.nextTruthMythQuestion(),
    endTruthMythGame: () => window.sacredQuests?.endTruthMythGame(),
    selectMeaning: (index) => window.sacredQuests?.selectMeaning(index),
    nextMantraQuestion: () => window.sacredQuests?.nextMantraQuestion(),
    endMantraGame: () => window.sacredQuests?.endMantraGame(),
    closeHiddenFact: () => {
        const hiddenFact = document.getElementById('hiddenFact');
        if (hiddenFact) {
            hiddenFact.style.opacity = '0';
            setTimeout(() => {
                hiddenFact.style.display = 'none';
            }, 300);
        }
    }
};

// Make functions globally available
Object.assign(window, questFunctions);

// Add CSS for swing animation
const style = document.createElement('style');
style.textContent = `
    @keyframes swing {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(15deg); }
        75% { transform: rotate(-15deg); }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is loaded - Multiple methods
function initializeSacredQuests() {
    try {
        console.log('🚀 Starting Sacred Quests initialization...');
        window.sacredQuests = new SacredQuests();
        console.log('✅ Sacred Quests initialized successfully!');
    } catch (error) {
        console.error('❌ Failed to initialize Sacred Quests:', error);
        
        // Fallback initialization
        setTimeout(() => {
            try {
                window.sacredQuests = new SacredQuests();
            } catch (e) {
                console.error('❌ Fallback initialization also failed:', e);
            }
        }, 1000);
    }
}

// Multiple initialization methods
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSacredQuests);
} else {
    initializeSacredQuests();
}

// Fallback initialization
setTimeout(initializeSacredQuests, 500);
window.addEventListener('load', initializeSacredQuests);

// Export for debugging
window.SacredQuests = SacredQuests;