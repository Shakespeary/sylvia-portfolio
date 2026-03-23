// ===== Typewriter Effect =====
const typewriterTexts = [
    'MBA @ INSEAD 🎓',
    'Strategy @ Sea Limited 🦐',
    'AI Enthusiast 🤖',
    'Perfume Creator 🧪',
    'Your Friendly Shark 🦈'
];

let textIndex = 0, charIndex = 0, isDeleting = false;
const typewriterElement = document.querySelector('.typewriter');

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
document.addEventListener('DOMContentLoaded', type);

// ===== AI Shark Knowledge Base (in Sylvia's voice) =====
const sharkKnowledge = {
    greetings: [
        "Hey! I'm AI 小鲨 🦈 Sylvia's digital twin. What's up?",
        "Hi there! Ask me anything about Sylvia!",
        "Hello! I'm Sylvia's AI version. Fire away! 🦈"
    ],
    
    about: {
        keywords: ['who', 'about', 'background', 'story', 'tell me', 'sylvia'],
        responses: [
            "So I'm Sylvia Han, but everyone calls me 小鲨 (Little Shark) 🦈 Currently doing my MBA at INSEAD, working at Sea Limited (Shopee's parent company) in Singapore. Before that, I was at BCG doing strategy consulting. Love solving complex problems and making things happen!",
            "Hey! I'm Sylvia. Quick version: INSEAD MBA student, work at Sea Limited (not the company name, that's just coincidence 😅), previously BCG. Love strategy, AI, and have way too many hobbies. The shark nickname stuck because... well, I guess I'm persistent! 🦈"
        ]
    },
    
    work: {
        keywords: ['work', 'job', 'do', 'career', 'company', 'sea'],
        responses: [
            "Currently I'm at Sea Limited (Shopee's parent company) as Assistant Manager for Regional Strategy in Singapore! 🦐 Working on board-level strategy and Vietnam eCom projects. Before this, I spent 3 years at BCG as a Consultant. Love the strategy + tech combo!",
            "I work at Sea Limited - yes, that's the company name, not my nickname! 😄 I'm in Regional Strategy & Planning, shaping 2026 roadmap. Previously at BCG doing PE/VC due diligence and innovation projects. Fun fact: I helped raise $3M+ for an innovation accelerator!"
        ]
    },
    
    education: {
        keywords: ['school', 'study', 'education', 'university', 'mba', 'insead'],
        responses: [
            "I'm currently at INSEAD for my MBA (Class of 2025)! 🎓 Got lucky with a 4.4 GPA and made Dean's List. Before that, Tsinghua University in Beijing for Economics + CS minor, and did an exchange at Michigan Ross. Basically been a professional student for a while now! 😅",
            "Education journey: Tsinghua (Beijing) → Michigan Ross (exchange) → Now INSEAD MBA! 🌍 Three countries, three amazing experiences. The MBA's been incredible - France, Singapore, Pennsylvania campuses. Living that global student life! ✈️"
        ]
    },
    
    hobbies: {
        keywords: ['hobby', 'fun', 'like', 'interest', 'free time', 'passion'],
        responses: [
            "Oh boy, where to start? 😄 I do tennis, swimming (obviously, I'm a shark!), karate, guzheng (Chinese zither - Grade 8!), and I create perfumes! 🧪 Also volunteer for education equity. Yeah, I don't really believe in being bored. Send coffee... or sleep! ☕",
            "My hobbies are all over the place! Sports: tennis, swimming, karate 🥋. Music: guzheng (traditional Chinese instrument) 🎵. Science: making perfumes 🧪. And education volunteering. Basically if it's interesting, I'll try it! Life's too short for boring weekends! 🦈"
        ]
    },
    
    collaborate: {
        keywords: ['collaborate', 'work together', 'contact', 'reach', 'connect', 'hire', 'project'],
        responses: [
            "Would love to! 🎉 Best way to reach me: email at sylvia.han@insead.edu or sylvia_han@foxmail.com. Also on LinkedIn or WhatsApp (+65 8393 3000). I'm open to strategy projects, AI stuff, or anything combining business + tech + impact! 🦈",
            "Always happy to collaborate! 💼 Hit me up on LinkedIn, email, or WhatsApp. I'm especially interested in strategy, AI/tech innovation, and projects with social impact. If it sounds exciting, let's chat! Worst case, I'll say no politely 😄"
        ]
    },
    
    location: {
        keywords: ['where', 'location', 'based', 'live', 'country', 'city'],
        responses: [
            "Currently in Singapore for MBA + work! 🇸🇬 But I've bounced around: France (INSEAD Fontainebleau), US (INSEAD campus + Michigan), China (Beijing for undergrad + work). At this point I think airports know me better than my neighbors! ✈️🦈",
            "Home base is Singapore right now. But honestly, between INSEAD campuses and work travel, I'm everywhere and nowhere! 😄 France, US, China, Singapore - pick a continent! The shark life is a global life! 🌍🦈"
        ]
    },
    
    achievements: {
        keywords: ['achievement', 'award', 'proud', 'accomplishment'],
        responses: [
            "Hmm, let me think... Won Silver in Kaggle M5 Forecasting (top 3% globally!), got Dean's List at INSEAD, raised $3M+ for innovation at BCG, and some student awards at Tsinghua. But honestly? The fun stuff like making perfumes and playing guzheng makes me prouder! 🏆🎵",
            "Achievements... Kaggle Silver Medal 🏆, INSEAD Dean's List 📚, $3M+ fundraising 💰, Tsinghua Excellence Award. But you know what I'm really proud? Balancing all this with hobbies like guzheng and perfume making. That's the real achievement! 😄🦈"
        ]
    },
    
    fun: {
        keywords: ['fun', 'weird', 'random', 'favorite', 'interesting'],
        responses: [
            "Fun fact: I make my own perfumes! 🧪 Like, actual fragrances from scratch. Also play guzheng (2000-year-old Chinese instrument). Imagine a shark doing karate while playing ancient music and mixing perfumes... that's me! 🦈🎵🥋",
            "Here's a weird one: I'm fluent in Mandarin and English, learning French (A2 - encore un peu!), and know some Cantonese. Language shark! 🦈 Also, I volunteer teaching at a borderless university. Smart's cool, but kind's cooler! 💙"
        ]
    },
    
    default: [
        "Hmm, good question! 🤔 I'm Sylvia's AI twin, so I know a lot about her, but might not have that answer. Try asking about her background, work, hobbies, or how to collaborate! 🦈",
        "Great question! I know tons about Sylvia (INSEAD MBA, Sea Limited work, BCG history, guzheng, perfumes...), but for super specific stuff, maybe email her directly? sylvia.han@insead.edu 📧🦈",
        "I'd love to help! While I know a lot about Sylvia, I might not have that specific answer. What else can I tell you about? Work, hobbies, background, collaboration? 🦈"
    ]
};

// ===== AI Response Logic =====
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

// ===== Chat Functions =====
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;
    addMessage(message, 'user');
    input.value = '';
    setTimeout(() => {
        const response = getAIResponse(message);
        addMessage(response, 'bot');
    }, 600 + Math.random() * 600);
}

function addMessage(text, sender) {
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = `message ${sender}`;
    div.innerHTML = `<div class="message-content">${text.replace(/\n/g, '<br>')}</div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') sendMessage();
}

function quickAsk(q) {
    document.getElementById('chatInput').value = q;
    sendMessage();
}

// ===== Create Background Elements =====
function createBubbles() {
    const container = document.querySelector('.bubbles');
    for (let i = 0; i < 7; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        container.appendChild(bubble);
    }
}

function createFishes() {
    const container = document.querySelector('.fishes');
    ['🐠', '🐟', '🐡'].forEach((fish, i) => {
        const el = document.createElement('div');
        el.className = 'fish';
        el.textContent = fish;
        el.style.animationDelay = `${i * 5}s`;
        container.appendChild(el);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createBubbles();
    createFishes();
    console.log('%c🦈 Welcome to Sylvia\\'s Portfolio!', 'font-size: 20px; color: #00d4ff;');
    console.log('%cChat with AI 小鲨 to learn more! 🤖', 'font-size: 14px; color: #ff6b6b;');
});
