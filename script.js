// ===== Language Management =====
let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    
    // Toggle body class for CSS-based switching
    document.body.classList.remove('lang-en', 'lang-zh');
    document.body.classList.add('lang-' + currentLang);
    
    // Update button text
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = currentLang === 'en' ? '中文' : 'English';
    }
    
    // Update typewriter for current language
    updateTypewriterTexts();
    
    // Save preference
    localStorage.setItem('preferredLang', currentLang);
    
    // Debug log
    console.log('Language switched to:', currentLang);
    console.log('Body class:', document.body.className);
}

function updateTypewriterTexts() {
    if (currentLang === 'zh') {
        typewriterTexts[0] = 'INSEAD MBA 毕业生 🎓';
        typewriterTexts[1] = '冬海集团 AI 战略与投资 🦈';
        typewriterTexts[2] = 'AI 爱好者 🤖';
        typewriterTexts[3] = '香水创作者 🧪';
        typewriterTexts[4] = '你的友好小鲨 🦈';
    } else {
        typewriterTexts[0] = 'INSEAD MBA Graduate 🎓';
        typewriterTexts[1] = 'AI Strategy @ Sea Limited 🦈';
        typewriterTexts[2] = 'AI Enthusiast 🤖';
        typewriterTexts[3] = 'Perfume Creator 🧪';
        typewriterTexts[4] = 'Your Friendly Shark 🦈';
    }
}

// ===== Typewriter Effect =====
const typewriterTexts = [
    'MBA @ INSEAD 🎓',
    'AI Strategy @ Sea Limited 🦈',
    'AI Enthusiast 🤖',
    'Perfume Creator 🧪',
    'Your Friendly Shark 🦈'
];

let textIndex = 0, charIndex = 0, isDeleting = false;

function initTypewriter() {
    const typewriterElement = document.querySelector('.typewriter');
    if (!typewriterElement) return;
    
    function type() {
        const currentText = typewriterTexts[textIndex];
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        let typeSpeed = isDeleting ? 50 : 100;
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typewriterTexts.length;
            typeSpeed = 500;
        }
        setTimeout(type, typeSpeed);
    }
    type();
}

// ===== AI Shark Knowledge Base =====
const sharkKnowledge = {
    greetings: [
        "Hey! I'm AI 小鲨 🦈 Sylvia's digital twin. What's up?",
        "Hi there! Ask me anything about Sylvia!",
        "Hello! I'm Sylvia's AI version. Fire away! 🦈"
    ],
    about: {
        keywords: ['who', 'about', 'background', 'story', 'tell me', 'sylvia'],
        responses: [
            "So I'm Sylvia Han, but in casual platforms, my nickname is 小鲨 (Little Shark) 🦈 I'm an INSEAD MBA graduate, working at Sea Limited's (冬海集团) President's Office on AI Strategy & Investment in Singapore. Before that, I was at BCG doing strategy consulting. Love solving complex problems and making things happen!",
            "Hey! I'm Sylvia. Quick version: INSEAD MBA grad, work at Sea Limited's (冬海集团) President's Office (AI Strategy & Investment), previously BCG. Love strategy, AI, and have way too many hobbies!"
        ]
    },
    work: {
        keywords: ['work', 'job', 'do', 'career', 'company', 'sea', 'president', '冬海'],
        responses: [
            "Currently I'm at Sea Limited's (冬海集团) President's Office, focusing on AI Strategy & Investment! 🦈 Working on AI-driven initiatives and investment opportunities at the board level. Before this, I spent 3 years at BCG as a Consultant.",
            "I work at Sea Limited's President's Office - doing AI strategy and investment stuff! 🤖💼 Shaping AI direction for the company and exploring investment opportunities. Previously at BCG doing strategy consulting!"
        ]
    },
    education: {
        keywords: ['school', 'study', 'education', 'university', 'mba', 'insead'],
        responses: [
            "I'm an INSEAD MBA graduate (Class of 2025)! 🎓 Made Dean's List with a 4.4 GPA (but who's counting?). Before that, Tsinghua University in Beijing for Economics + CS minor, and did an exchange at Michigan Ross.",
            "Education journey: Tsinghua (Beijing) → Michigan Ross (exchange) → INSEAD MBA Graduate! 🌍 Four countries: Singapore, US, China, France."
        ]
    },
    hobbies: {
        keywords: ['hobby', 'fun', 'like', 'interest', 'free time', 'passion'],
        responses: [
            "Oh boy, where to start? 😄 I do tennis, swimming (obviously, I'm a shark!), karate, guzheng (Chinese zither - Grade 8!), and I create perfumes! 🧪 Also volunteer for education equity. Yeah, I don't really believe in being bored.",
            "My hobbies are all over the place! Sports: tennis, swimming, karate 🥋. Music: guzheng 🎵. Science: making perfumes 🧪. And education volunteering. Basically if it's interesting, I'll try it!"
        ]
    },
    collaborate: {
        keywords: ['collaborate', 'work together', 'contact', 'reach', 'connect', 'hire', 'project'],
        responses: [
            "Would love to! 🎉 Best way to reach me: email at sylvia.han@insead.edu or sylvia_han@foxmail.com. Also on LinkedIn or WhatsApp (+65 8393 3000). I'm open to strategy projects, AI stuff, or anything combining business + tech + impact!",
            "Always happy to collaborate! 💼 Hit me up on LinkedIn, email, or WhatsApp. I'm especially interested in strategy, AI/tech innovation, and projects with social impact."
        ]
    },
    location: {
        keywords: ['where', 'location', 'based', 'live', 'country', 'city'],
        responses: [
            "Currently in Singapore for MBA + work! 🇸🇬 But I've bounced around: France (INSEAD Fontainebleau), US (INSEAD campus + Michigan), China (Beijing). At this point I think airports know me better than my neighbors! ✈️",
            "Home base is Singapore right now. But honestly, between INSEAD campuses and work travel, I'm everywhere and nowhere! 😄"
        ]
    },
    achievements: {
        keywords: ['achievement', 'award', 'proud', 'accomplishment'],
        responses: [
            "Hmm, let me think... Won Silver in Kaggle M5 Forecasting (top 3% globally!), INSEAD MBA Dean's List (but who cares? 😄), raised $3M+ for innovation at BCG, and some student awards at Tsinghua. But honestly? The fun stuff makes me prouder! 🏆",
            "Achievements... Kaggle Silver Medal 🏆, INSEAD MBA Dean's List 📚, $3M+ fundraising 💰. But you know what I'm really proud? Balancing all this with hobbies like guzheng and perfume making!"
        ]
    },
    fun: {
        keywords: ['fun', 'weird', 'random', 'favorite', 'interesting', 'tsinghua', 'major'],
        responses: [
            "Fun fact: I make my own perfumes! 🧪 Like, actual fragrances from scratch. Also play guzheng (2000-year-old Chinese instrument). Imagine a shark doing karate while playing ancient music and mixing perfumes... that's me! 🦈",
            "Here's a weird one: At Tsinghua I majored in Economics and minored in CS - seems like I know a lot, but maybe I know nothing, just like a finance bro 😄 Also fluent in Mandarin and English, learning French (A2)!"
        ]
    },
    default: [
        "Hmm, good question! 🤔 I'm Sylvia's AI twin, so I know a lot about her, but might not have that answer. Try asking about her background, work, hobbies, or how to collaborate! 🦈",
        "Great question! I know tons about Sylvia (INSEAD MBA, Sea Limited work, BCG history, guzheng, perfumes...), but for super specific stuff, maybe email her directly? sylvia.han@insead.edu 📧",
        "I'd love to help! While I know a lot about Sylvia, I might not have that specific answer. What else can I tell you about? 🦈"
    ]
};

function getAIResponse(message) {
    const lower = message.toLowerCase();
    for (const [cat, data] of Object.entries(sharkKnowledge)) {
        if (cat === 'greetings' || cat === 'default') continue;
        if (data.keywords.some(k => lower.includes(k))) {
            return data.responses[Math.floor(Math.random() * data.responses.length)];
        }
    }
    if (lower.match(/^(hi|hello|hey|greetings|sup|yo)/)) {
        return sharkKnowledge.greetings[Math.floor(Math.random() * sharkKnowledge.greetings.length)];
    }
    return sharkKnowledge.default[Math.floor(Math.random() * sharkKnowledge.default.length)];
}

// ===== Chat Functions (Global) =====
window.sendMessage = function() {
    const input = document.getElementById('chatInput');
    if (!input) return;
    const message = input.value.trim();
    if (!message) return;
    addMessage(message, 'user');
    input.value = '';
    setTimeout(() => {
        const response = getAIResponse(message);
        addMessage(response, 'bot');
    }, 600 + Math.random() * 600);
};

window.addMessage = function(text, sender) {
    const container = document.getElementById('chatMessages');
    if (!container) return;
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    div.innerHTML = `<div class="message-content">${text.replace(/\n/g, '<br>')}</div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
};

window.handleKeyPress = function(event) {
    if (event.key === 'Enter') window.sendMessage();
};

window.quickAsk = function(q) {
    const input = document.getElementById('chatInput');
    if (!input) return;
    input.value = q;
    window.sendMessage();
};

// ===== Background Elements =====
function createBubbles() {
    const container = document.querySelector('.bubbles');
    if (!container) return;
    for (let i = 0; i < 7; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        container.appendChild(bubble);
    }
}

function createFishes() {
    const container = document.querySelector('.fishes');
    if (!container) return;
    ['🐠', '🐟', '🐡'].forEach((fish, i) => {
        const el = document.createElement('div');
        el.className = 'fish';
        el.textContent = fish;
        el.style.animationDelay = `${i * 5}s`;
        container.appendChild(el);
    });
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    if (savedLang === 'zh') {
        toggleLanguage();
    }
    
    initTypewriter();
    createBubbles();
    createFishes();
    console.log('%c🦈 Welcome to Sylvia\'s Portfolio!', 'font-size: 20px; color: #00d4ff;');
    console.log('%cChat with AI 小鲨！🤖', 'font-size: 14px; color: #ff6b6b;');
});
