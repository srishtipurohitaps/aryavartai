// JavaScript for Wisdom Scrolls page - Enhanced with multiple fallbacks

// Wisdom scrolls database
const wisdomScrolls = [
    // Dharma Category
    {
        id: 1,
        title: 'The Eternal Law of Dharma',
        category: 'dharma',
        quote: 'धर्मो रक्षति रक्षितः (Dharmo rakshati rakshitah)',
        summary: 'Dharma protects those who protect dharma. Understanding righteousness as the foundation of cosmic order.',
        fullText: `Dharma is the cosmic principle that maintains order in the universe. It is not merely a set of rules, but the very fabric of existence that upholds truth, righteousness, and natural law.

In the Mahabharata, Yudhishthira declares that dharma is subtle and often difficult to understand. It varies according to time, place, and circumstances, yet its essence remains constant: the welfare of all beings.

The four pillars of dharma are Truth (Satya), Compassion (Daya), Austerity (Tapas), and Charity (Dana). When these are upheld, society flourishes in peace and prosperity.

Individual dharma (svadharma) must align with universal dharma (sanatan dharma). One's duties depend on their stage of life and social position, but the ultimate goal is always liberation and service to the Divine.`,
        source: 'Mahabharata, Vana Parva'
    },
    {
        id: 2,
        title: 'The Path of Righteous Action',
        category: 'dharma',
        quote: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन (Karmanyevadhikaraste ma phaleshu kadachana)',
        summary: 'You have the right to perform action, but not to the fruits of action. The essence of karma yoga.',
        fullText: `Lord Krishna's teaching in the Bhagavad Gita reveals the secret of liberated action. When we perform our duties without attachment to results, action becomes worship and work becomes yoga.

This principle transforms ordinary activities into spiritual practice. A king ruling justly, a farmer tending crops, a teacher sharing knowledge - all become paths to the Divine when done with dedication and detachment.

The ego seeks credit and fears blame, but the wise person offers all actions to the Supreme. This is the path of karma yoga, suitable for those engaged in worldly responsibilities.

Three types of action exist: forbidden (vikarma), prescribed (karma), and transcendent (akarma). The last is action performed in perfect understanding, which binds neither to merit nor demerit.`,
        source: 'Bhagavad Gita, Chapter 2, Verse 47'
    },

    // Ayurveda Category
    {
        id: 3,
        title: 'Food as Medicine',
        category: 'ayurveda',
        quote: 'जब तक आहार ठीक है तब तक दवाई की जरूरत नहीं, जब आहार गलत है तो दवाई काम नहीं करती',
        summary: 'When diet is correct, medicine is unnecessary. When diet is wrong, medicine is ineffective.',
        fullText: `Charaka Samhita teaches that food is the first medicine. Proper nutrition according to one's constitution (prakriti) and current state (vikriti) maintains health and prevents disease.

The six tastes (rasas) must be balanced: sweet (madhura), sour (amla), salty (lavana), pungent (katu), bitter (tikta), and astringent (kashaya). Each taste affects the doshas differently and serves specific therapeutic purposes.

Eating guidelines from Ayurveda:
- Eat in a peaceful environment without distractions
- Consume the largest meal when the sun is highest
- Fill the stomach half with food, quarter with water, quarter empty
- Eat according to your digestive fire (agni)

Incompatible food combinations (viruddha ahara) create toxins. Milk with sour fruits, honey with ghee in equal proportions, and fish with milk are examples of harmful combinations that should be avoided.`,
        source: 'Charaka Samhita, Sutra Sthana'
    },
    {
        id: 4,
        title: 'The Science of Longevity',
        category: 'ayurveda',
        quote: 'आयुः कामयमानेन धर्मार्थसुखसंयुतम् (Ayuh kamayamanena dharmarthasukhasanyutam)',
        summary: 'One desiring longevity should live a life balanced with dharma, prosperity, and happiness.',
        fullText: `Ayurveda aims not just at longevity, but at a life filled with purpose, prosperity, and joy. Health is not merely the absence of disease, but a state of complete well-being.

The concept of Rasayana (rejuvenation therapy) includes both physical and mental rejuvenation. Practices like meditation, yoga, proper sleep, and seasonal living are as important as herbal medicines.

Daily routine (dinacharya) and seasonal adaptation (ritucharya) are fundamental to maintaining health. Rising before sunrise, oil massage, meditation, proper evacuation, and timely meals create harmony with natural rhythms.

Mental health is equally emphasized through practices like:
- Satvavajaya chikitsa (psychotherapy)
- Yoga and pranayama for emotional balance  
- Positive thinking and ethical living
- Connection with nature and community

True health manifests as radiant energy, emotional stability, clear thinking, and spiritual contentment.`,
        source: 'Charaka Samhita, Sutra Sthana 1.15'
    },

    // Astronomy Category
    {
        id: 5,
        title: 'The Cosmic Dance',
        category: 'astronomy',
        quote: 'यस्मिन् सर्वाणि भूतानि भवन्ति अथ वा सूर्योदये (Yasmin sarvani bhutani bhavanti atha va suryodaye)',
        summary: 'All beings emerge and exist in the cosmic rhythm of the sun. Ancient understanding of celestial influence.',
        fullText: `Vedic astronomy recognized the profound connection between celestial movements and life on Earth. The sun (Surya) was understood not just as a physical entity, but as the cosmic principle of time and consciousness.

Aryabhata calculated the Earth's circumference as 24,835 miles (remarkably close to the modern value of 24,901 miles). He explained that the Earth rotates on its axis, causing day and night - a revolutionary idea for his time.

The Surya Siddhanta describes complex calculations for planetary positions, eclipses, and the precession of equinoxes. These mathematical achievements demonstrate sophisticated understanding of celestial mechanics.

Ancient Indian astronomers identified:
- The spherical nature of Earth and other planets
- The cause of eclipses (shadow of Earth/Moon)  
- The varying speeds of planets in their orbits
- The concept of gravity (though not named as such)

This knowledge was deeply connected to spiritual understanding, seeing the cosmos as a living, conscious entity where every movement has meaning and purpose.`,
        source: 'Surya Siddhanta and Aryabhatiya'
    },
    {
        id: 6,
        title: 'Time as the Eternal Wheel',
        category: 'astronomy',
        quote: 'कालो ब्रह्म कलाभ्यो वा कल्प एको महाकल्पः (Kalo brahma kalabhyo va kalpa eko mahakalpa)',
        summary: 'Time is Brahman, manifesting through cycles within cycles, from moments to cosmic ages.',
        fullText: `Hindu cosmology presents time as cyclic rather than linear, with vast periods called yugas and kalpas. This understanding parallels modern concepts of cosmic cycles and deep time.

The four yugas represent different ages of human consciousness:
- Satya Yuga: Age of truth and perfection (1,728,000 years)
- Treta Yuga: Age of three-quarters truth (1,296,000 years)  
- Dvapara Yuga: Age of half-truth (864,000 years)
- Kali Yuga: Age of darkness and discord (432,000 years)

One cycle of four yugas (Mahayuga) equals 4,320,000 years. One thousand Mahayugas form one day of Brahma (Kalpa), lasting 4.32 billion years - remarkably close to the geological age of Earth!

This cosmic vision places human existence in vast perspective, encouraging both humility and wonder. Each individual life is precious yet part of an unimaginably grand design.

The cyclical view also offers hope - after destruction comes renewal, after darkness comes light, and after ignorance comes wisdom.`,
        source: 'Vishnu Purana and Bhagavata Purana'
    },

    // Philosophy Category
    {
        id: 7,
        title: 'The Unity of Existence',
        category: 'philosophy',
        quote: 'सर्वं खल्विदं ब्रह्म (Sarvam khalvidam brahma)',
        summary: 'All this is indeed Brahman. The fundamental teaching of Vedanta about the unity of all existence.',
        fullText: `The Chandogya Upanishad proclaims the fundamental unity underlying apparent diversity. This is not mere philosophy, but a practical realization that transforms how we relate to ourselves and the world.

When Uddalaka teaches his son Svetaketu about the subtle essence pervading everything, he uses the analogy of salt dissolved in water - invisible yet present everywhere. Similarly, Brahman is the invisible consciousness present in all forms.

This understanding dissolves the artificial barriers between self and other, between the individual and the cosmos. Suffering arises from the illusion of separation; joy comes from recognizing our essential unity with all life.

Practical implications of this teaching:
- Compassion naturally arises when we see ourselves in others
- Environmental care becomes self-care  
- Service to others becomes service to our own higher Self
- Death loses its terror when we know our eternal nature

The sage who realizes this unity lives in perpetual peace, seeing the Divine play in every experience, finding the sacred in every moment.`,
        source: 'Chandogya Upanishad 3.14.1'
    },
    {
        id: 8,
        title: 'The Four Goals of Life',
        category: 'philosophy',
        quote: 'धर्मार्थकाममोक्षाणाम् आरोग्यं मूलमुत्तमम् (Dharmarthakamamokshanam arogyam mulamuttamam)',
        summary: 'Health is the foundation for the four goals of life: dharma, prosperity, pleasure, and liberation.',
        fullText: `Hindu philosophy recognizes four legitimate pursuits (purusharthas) that encompass the full spectrum of human aspiration:

Dharma (Righteousness): Living in harmony with cosmic law and moral principles. This provides the ethical foundation for all other pursuits.

Artha (Prosperity): Material security and resources needed for dignified living. Wealth is sacred when earned and used righteously.

Kama (Pleasure): Enjoyment of beauty, love, sensual pleasures, and aesthetic experiences. Life is meant to be celebrated, not denied.

Moksha (Liberation): Freedom from all limitations and the realization of one's divine nature. This is the ultimate goal that gives meaning to all others.

These four goals are not sequential but integrated. A balanced life pursues all four according to one's stage of life and circumstances. The householder fulfills dharma through family duties, earns wealth through honest work, enjoys legitimate pleasures, and prepares for eventual renunciation.

This holistic vision avoids both extreme materialism and otherworldly escapism, honoring both human needs and spiritual aspirations.`,
        source: 'Kautilya\'s Arthashastra and various Dharma Shastras'
    },

    // Women in Vedas Category
    {
        id: 9,
        title: 'Gargi: The Fearless Questioner',
        category: 'women',
        quote: 'गार्गी वाचक्नवी बहुधा प्रश्नैर्यज्ञवल्क्यम् अप्रच्छत् (Gargi vachaknavii bahudha prashnaih yajnavalkyam apracchat)',
        summary: 'Gargi Vachaknavi questioned Yajnavalkya extensively, demonstrating the high intellectual status of women in Vedic times.',
        fullText: `In the court of King Janaka, when the great sage Yajnavalkya declared himself the foremost among scholars, it was Gargi who rose to challenge him with her profound questions about the ultimate nature of reality.

Her questions progressed systematically from the grosser to the subtler levels of existence: "On what is this world woven, warp and woof?" When Yajnavalkya answered "On air," she continued: "On what is air woven?" This continued until they reached the discussion of Brahman itself.

Gargi's method demonstrates sophisticated philosophical inquiry:
- Starting with observable phenomena
- Proceeding through logical questioning  
- Reaching the ultimate ground of existence
- Testing the teacher's understanding rigorously

Her fearless questioning forced Yajnavalkya to the limits of expressible knowledge, leading to the famous teaching that Brahman is beyond all categories and descriptions.

Gargi represents the ideal of intellectual fearlessness and spiritual seeking that was expected of both men and women in Vedic society. Her example shows that the highest philosophical discussions included women as equals.`,
        source: 'Brihadaranyaka Upanishad 3.6 and 3.8'
    },
    {
        id: 10,
        title: 'Lopamudra: The Tantric Sage',
        category: 'women',
        quote: 'लोपामुद्रा ऋषिका महान् तपस्विनी (Lopamudra rishika mahan tapasvini)',
        summary: 'Lopamudra, wife-disciple of Sage Agastya, was a great female rishi and practitioner of austerities.',
        fullText: `Lopamudra stands as one of the most remarkable figures in Vedic literature - a princess who became a sage, a wife who was also a spiritual teacher, and a woman who mastered both worldly wisdom and transcendent knowledge.

Born as a princess of Vidarbha, she was created by Sage Agastya through his yogic powers to be his perfect companion. However, she was no mere consort but an equal partner in spiritual practice and realization.

Her contributions include:
- Composing hymns in the Rig Veda (1.179)
- Mastering tantric practices and energy work
- Teaching the integration of material and spiritual life
- Demonstrating that marriage can be a spiritual path

The dialogue between Lopamudra and Agastya in the Rig Veda reveals her as someone who challenges even her enlightened husband, demanding balance between spiritual practice and householder duties.

She represents the ideal of the spiritual woman who embraces all aspects of life - beauty, sexuality, motherhood, and transcendence - seeing them as different expressions of the Divine Feminine.

Her legacy inspires women to claim their full spiritual authority while honoring all dimensions of feminine experience.`,
        source: 'Rig Veda 1.179 and Puranic literature'
    },
    {
        id: 11,
        title: 'Maitreyi: The Seeker of Immortality',
        category: 'women',
        quote: 'येनाहं नामृता स्यां तेन अहं किं कुर्याम् (Yenaham namrita syam tena aham kim kuryam)',
        summary: 'What shall I do with that which will not make me immortal? Maitreyi\'s response when offered material wealth.',
        fullText: `When Sage Yajnavalkya decided to renounce worldly life, he offered to divide his property between his two wives. While Katyayani accepted her share, Maitreyi asked the question that changed the course of Indian philosophy.

"Will all this wealth make me immortal?" she inquired. When Yajnavalkya replied that riches could only provide comfort but not immortality, Maitreyi rejected material wealth and asked instead for the knowledge of the Self.

This pivotal moment led to one of the most profound philosophical dialogues in the Upanishads. Yajnavalkya taught Maitreyi about:
- The nature of the Atman (Self)
- The illusion of separate existence
- The source of true love and happiness
- The path to immortality through self-knowledge

Maitreyi's discrimination between the permanent and impermanent represents the highest spiritual intelligence. Her choice of knowledge over comfort demonstrates that women were expected to be serious spiritual seekers, not merely passive recipients of teaching.

Her questions show sophisticated understanding of consciousness, reality, and the human condition. She embodies the ideal of the spiritual seeker who values truth above all worldly achievements.`,
        source: 'Brihadaranyaka Upanishad 2.4 and 4.5'
    }
];

class WisdomScrolls {
    constructor() {
        console.log('📜 Initializing Wisdom Scrolls...');
        this.scrolls = wisdomScrolls;
        this.currentFilter = 'all';
        this.initializeElements();
        this.setupEventListeners();
        this.displayScrolls();
        this.testFeatures();
    }

    initializeElements() {
        try {
            this.scrollsGrid = document.getElementById('scrollsGrid');
            this.filterButtons = document.querySelectorAll('.filter-btn');
            this.modal = document.getElementById('scrollModal');
            this.modalContent = {
                title: document.getElementById('modalTitle'),
                category: document.getElementById('modalCategory'),
                quote: document.getElementById('modalQuote'),
                text: document.getElementById('modalText'),
                source: document.getElementById('modalSource')
            };
            this.closeModal = document.querySelector('.close-modal');
            
            console.log('✅ Scrolls elements initialized');
            
            if (!this.scrollsGrid) {
                console.warn('⚠️ Scrolls grid not found, creating fallback...');
                this.createFallbackInterface();
            }
        } catch (error) {
            console.error('❌ Error initializing elements:', error);
            this.createFallbackInterface();
        }
    }

    createFallbackInterface() {
        const main = document.querySelector('.scrolls-main') || document.querySelector('main') || document.body;
        const fallbackHTML = `
            <div style="padding: 2rem; background: rgba(244, 228, 188, 0.1); margin: 2rem; border-radius: 15px;">
                <h2 style="color: #d4af37; text-align: center; margin-bottom: 2rem;">Wisdom Scrolls</h2>
                <div style="text-align: center; margin-bottom: 2rem;">
                    <button class="filter-btn active" data-category="all" style="background: #d4af37; color: #1a0e0a; border: none; padding: 0.5rem 1rem; margin: 0.25rem; border-radius: 15px; cursor: pointer;">All</button>
                    <button class="filter-btn" data-category="dharma" style="background: rgba(244, 228, 188, 0.1); color: #f4e4bc; border: 1px solid #d4af37; padding: 0.5rem 1rem; margin: 0.25rem; border-radius: 15px; cursor: pointer;">Dharma</button>
                    <button class="filter-btn" data-category="ayurveda" style="background: rgba(244, 228, 188, 0.1); color: #f4e4bc; border: 1px solid #d4af37; padding: 0.5rem 1rem; margin: 0.25rem; border-radius: 15px; cursor: pointer;">Ayurveda</button>
                    <button class="filter-btn" data-category="astronomy" style="background: rgba(244, 228, 188, 0.1); color: #f4e4bc; border: 1px solid #d4af37; padding: 0.5rem 1rem; margin: 0.25rem; border-radius: 15px; cursor: pointer;">Astronomy</button>
                    <button class="filter-btn" data-category="philosophy" style="background: rgba(244, 228, 188, 0.1); color: #f4e4bc; border: 1px solid #d4af37; padding: 0.5rem 1rem; margin: 0.25rem; border-radius: 15px; cursor: pointer;">Philosophy</button>
                    <button class="filter-btn" data-category="women" style="background: rgba(244, 228, 188, 0.1); color: #f4e4bc; border: 1px solid #d4af37; padding: 0.5rem 1rem; margin: 0.25rem; border-radius: 15px; cursor: pointer;">Women</button>
                </div>
                <div id="scrollsGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;"></div>
            </div>
            
            <div id="scrollModal" style="display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8);">
                <div style="background: linear-gradient(135deg, #f4e4bc 0%, #e6d3a3 100%); margin: 5% auto; padding: 0; border-radius: 20px; width: 90%; max-width: 800px; max-height: 80vh; overflow-y: auto; color: #2c1810; position: relative;">
                    <span class="close-modal" style="position: absolute; top: 15px; right: 20px; color: #5d4e37; font-size: 2rem; font-weight: bold; cursor: pointer;">&times;</span>
                    <div style="padding: 2rem 2rem 1rem; border-bottom: 1px solid rgba(212, 175, 55, 0.3);">
                        <h2 id="modalTitle" style="color: #8b1538; margin-bottom: 0.5rem;"></h2>
                        <div id="modalCategory" style="display: inline-block; background: #d4af37; color: #1a0e0a; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem; font-weight: 600;"></div>
                    </div>
                    <div style="padding: 2rem;">
                        <div id="modalQuote" style="font-style: italic; font-size: 1.3rem; color: #8b1538; margin-bottom: 2rem; text-align: center; padding: 1rem; background: rgba(212, 175, 55, 0.1); border-radius: 10px; border-left: 4px solid #d4af37;"></div>
                        <div id="modalText" style="color: #2c1810; line-height: 1.8; margin-bottom: 2rem;"></div>
                        <div id="modalSource" style="font-size: 0.9rem; color: #5d4e37; font-style: italic; text-align: right;"></div>
                    </div>
                </div>
            </div>
        `;
        main.innerHTML += fallbackHTML;
        this.initializeElements();
    }

    setupEventListeners() {
        try {
            // Filter buttons - multiple methods
            this.filterButtons = document.querySelectorAll('.filter-btn');
            this.filterButtons.forEach(btn => {
                // Method 1: addEventListener
                btn.addEventListener('click', () => {
                    this.setActiveFilter(btn);
                    this.currentFilter = btn.getAttribute('data-category');
                    this.displayScrolls();
                });
                
                // Method 2: onclick fallback
                btn.onclick = () => {
                    this.setActiveFilter(btn);
                    this.currentFilter = btn.getAttribute('data-category');
                    this.displayScrolls();
                };
            });

            // Modal close events
            this.closeModal = document.querySelector('.close-modal');
            this.modal = document.getElementById('scrollModal');
            
            if (this.closeModal) {
                this.closeModal.addEventListener('click', () => this.hideModal());
                this.closeModal.onclick = () => this.hideModal();
            }
            
            if (this.modal) {
                this.modal.addEventListener('click', (e) => {
                    if (e.target === this.modal) {
                        this.hideModal();
                    }
                });
            }

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.modal && this.modal.style.display === 'block') {
                    this.hideModal();
                }
            });

            console.log('✅ Scrolls event listeners set up');
        } catch (error) {
            console.error('❌ Error setting up event listeners:', error);
        }
    }

    setActiveFilter(activeBtn) {
        try {
            this.filterButtons.forEach(btn => btn.classList.remove('active'));
            activeBtn.classList.add('active');
            
            // Fallback styling
            this.filterButtons.forEach(btn => {
                btn.style.background = 'rgba(244, 228, 188, 0.1)';
                btn.style.color = '#f4e4bc';
            });
            activeBtn.style.background = '#d4af37';
            activeBtn.style.color = '#1a0e0a';
        } catch (error) {
            console.error('❌ Error setting active filter:', error);
        }
    }

    displayScrolls() {
        try {
            const filteredScrolls = this.currentFilter === 'all' 
                ? this.scrolls 
                : this.scrolls.filter(scroll => scroll.category === this.currentFilter);

            if (!this.scrollsGrid) {
                this.scrollsGrid = document.getElementById('scrollsGrid');
            }

            if (!this.scrollsGrid) {
                console.error('❌ Scrolls grid still not found');
                return;
            }

            this.scrollsGrid.innerHTML = '';

            if (filteredScrolls.length === 0) {
                this.scrollsGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #f4e4bc; opacity: 0.7;">
                        <p>No scrolls found for this category.</p>
                    </div>
                `;
                return;
            }

            filteredScrolls.forEach((scroll, index) => {
                const scrollCard = this.createScrollCard(scroll, index);
                this.scrollsGrid.appendChild(scrollCard);
            });

            // Add stagger animation
            this.animateScrollCards();
            
            console.log('✅ Displayed', filteredScrolls.length, 'scrolls');
        } catch (error) {
            console.error('❌ Error displaying scrolls:', error);
        }
    }

    createScrollCard(scroll, index) {
        const card = document.createElement('div');
        card.className = 'scroll-card';
        card.style.cssText = `
            background: rgba(244, 228, 188, 0.1);
            padding: 2rem;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(212, 175, 55, 0.2);
            cursor: pointer;
            transition: all 0.3s ease;
            animation-delay: ${index * 0.1}s;
        `;
        
        card.innerHTML = `
            <div style="display: inline-block; background: #d4af37; color: #1a0e0a; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem; font-weight: 600; margin-bottom: 1rem;">
                ${this.formatCategory(scroll.category)}
            </div>
            <h3 style="color: #d4af37; margin-bottom: 1rem; font-size: 1.3rem;">${scroll.title}</h3>
            <div style="font-style: italic; color: #cd7f32; margin-bottom: 1rem; font-size: 1.1rem;">"${scroll.quote}"</div>
            <p style="color: #f4e4bc; opacity: 0.9; line-height: 1.6;">${scroll.summary}</p>
        `;

        // Multiple event binding methods
        card.addEventListener('click', () => this.showModal(scroll));
        card.onclick = () => this.showModal(scroll);
        
        // Hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
        
        return card;
    }

    formatCategory(category) {
        const categoryMap = {
            'dharma': 'Dharma',
            'ayurveda': 'Ayurveda',
            'astronomy': 'Astronomy',
            'philosophy': 'Philosophy',
            'women': 'Women in Vedas'
        };
        return categoryMap[category] || category;
    }

    showModal(scroll) {
        try {
            console.log('📖 Opening scroll:', scroll.title);
            
            // Find modal elements
            this.modal = this.modal || document.getElementById('scrollModal');
            this.modalContent = {
                title: document.getElementById('modalTitle'),
                category: document.getElementById('modalCategory'),
                quote: document.getElementById('modalQuote'),
                text: document.getElementById('modalText'),
                source: document.getElementById('modalSource')
            };

            if (!this.modal) {
                console.warn('⚠️ Modal not found, creating fallback...');
                this.createModalFallback(scroll);
                return;
            }

            // Update modal content
            if (this.modalContent.title) this.modalContent.title.textContent = scroll.title;
            if (this.modalContent.category) this.modalContent.category.textContent = this.formatCategory(scroll.category);
            if (this.modalContent.quote) this.modalContent.quote.textContent = `"${scroll.quote}"`;
            if (this.modalContent.text) this.modalContent.text.textContent = scroll.fullText;
            if (this.modalContent.source) this.modalContent.source.textContent = `Source: ${scroll.source}`;

            // Show modal
            this.modal.style.display = 'block';
            document.body.style.overflow = 'hidden';

            // Add entrance animation
            setTimeout(() => {
                const modalContent = this.modal.querySelector('.modal-content') || this.modal.firstElementChild;
                if (modalContent) {
                    modalContent.style.transform = 'scale(1)';
                    modalContent.style.opacity = '1';
                }
            }, 50);

            // Show notification
            this.showNotification(`Reading: ${scroll.title}`, 'info');
            
            console.log('✅ Modal displayed successfully');
        } catch (error) {
            console.error('❌ Error showing modal:', error);
            this.createModalFallback(scroll);
        }
    }

    createModalFallback(scroll) {
        const fallbackHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 3000; display: flex; align-items: center; justify-content: center; padding: 2rem; box-sizing: border-box;">
                <div style="background: linear-gradient(135deg, #f4e4bc 0%, #e6d3a3 100%); padding: 2rem; border-radius: 20px; max-width: 800px; max-height: 80vh; overflow-y: auto; color: #2c1810; position: relative;">
                    <button onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 1rem; right: 1.5rem; background: none; border: none; color: #8b1538; font-size: 2rem; cursor: pointer;">&times;</button>
                    <div style="margin-bottom: 1rem;">
                        <span style="display: inline-block; background: #d4af37; color: #1a0e0a; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem; font-weight: 600;">${this.formatCategory(scroll.category)}</span>
                    </div>
                    <h2 style="color: #8b1538; margin-bottom: 2rem;">${scroll.title}</h2>
                    <div style="font-style: italic; font-size: 1.3rem; color: #8b1538; margin-bottom: 2rem; text-align: center; padding: 1rem; background: rgba(212, 175, 55, 0.1); border-radius: 10px; border-left: 4px solid #d4af37;">"${scroll.quote}"</div>
                    <div style="color: #2c1810; line-height: 1.8; margin-bottom: 2rem; white-space: pre-line;">${scroll.fullText}</div>
                    <div style="font-size: 0.9rem; color: #5d4e37; font-style: italic; text-align: right;">Source: ${scroll.source}</div>
                </div>
            </div>
        `;
        document.body.innerHTML += fallbackHTML;
    }

    hideModal() {
        try {
            if (!this.modal) return;
            
            const modalContent = this.modal.querySelector('.modal-content') || this.modal.firstElementChild;
            if (modalContent) {
                modalContent.style.transform = 'scale(0.9)';
                modalContent.style.opacity = '0';
            }

            setTimeout(() => {
                this.modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
            
            console.log('✅ Modal hidden');
        } catch (error) {
            console.error('❌ Error hiding modal:', error);
        }
    }

    animateScrollCards() {
        try {
            const cards = this.scrollsGrid.querySelectorAll('.scroll-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease-out';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        } catch (error) {
            console.error('❌ Error animating cards:', error);
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
        console.log('🧪 Testing Wisdom Scrolls features...');
        
        const tests = {
            scrollsData: this.scrolls.length > 0,
            scrollsGrid: !!this.scrollsGrid,
            filterButtons: this.filterButtons.length > 0,
            modal: !!this.modal
        };
        
        console.log('🧪 Feature test results:', tests);
        
        const allWorking = Object.values(tests).every(test => test);
        
        if (allWorking) {
            console.log('✅ All Wisdom Scrolls features working!');
            this.showNotification('Wisdom Scrolls are ready to explore! 📜', 'success');
        } else {
            console.warn('⚠️ Some features may not work properly');
        }
    }
}

// Initialize when DOM is loaded - Multiple methods
function initializeWisdomScrolls() {
    try {
        console.log('🚀 Starting Wisdom Scrolls initialization...');
        window.wisdomScrolls = new WisdomScrolls();
        console.log('✅ Wisdom Scrolls initialized successfully!');
    } catch (error) {
        console.error('❌ Failed to initialize Wisdom Scrolls:', error);
        
        // Fallback initialization
        setTimeout(() => {
            try {
                window.wisdomScrolls = new WisdomScrolls();
            } catch (e) {
                console.error('❌ Fallback initialization also failed:', e);
            }
        }, 1000);
    }
}

// Multiple initialization methods
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWisdomScrolls);
} else {
    initializeWisdomScrolls();
}

// Fallback initialization
setTimeout(initializeWisdomScrolls, 500);
window.addEventListener('load', initializeWisdomScrolls);

// Export for debugging
window.WisdomScrolls = WisdomScrolls;