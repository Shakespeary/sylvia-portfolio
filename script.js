// ===== Typewriter Effect =====
const typewriterTexts = [
    'MBA @ INSEAD 🎓',
    'Strategy Enthusiast 💼',
    'AI Explorer 🤖',
    'Perfume Creator 🧪',
    'Your Friendly Shark 🦈'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
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

// ===== AI Shark Knowledge Base =====
const sharkKnowledge = {
    greetings: [
        "Hey! I'm AI 小鲨 🦈 Sylvia's digital twin. What's up?",
        "Hello there! Ask me anything about Sylvia!",
        "Hi! Ready to chat about Sylvia's adventures?"
    ],
    
    about: {
        keywords: ['who', 'about', 'background', 'story', 'tell me'],
        responses: [
            "Sylvia Han (小鲨) is currently doing her MBA at INSEAD (Class of 2025)! 🎓 She's absolutely crushing it with a 4.4 GPA (top 1%, Dean's List). Before INSEAD, she worked at BCG as a Consultant and now she's at Shopee as Assistant Manager for Regional Strategy in Singapore. Pretty impressive, right? 🦈",
            "So Sylvia's journey is pretty cool! She started at Tsinghua University (Economics + CS minor), did exchange at Michigan Ross, then worked at Zhen Fund, ByteDance, BCG, and now Shopee. Oh, and she's getting her MBA at INSEAD. She's basically a strategy + tech + business unicorn! 🦄🦈"
        ]
    },
    
    work: {
        keywords: ['work', 'job', 'experience', 'career', 'doing now'],
        responses: [
            "Currently, Sylvia is Assistant Manager for Regional Strategy & Planning at Shopee (Jul 2025 - Present) in Singapore! 🦐 She's working on board-level strategy for 2026 and leading the Vietnam eCom headroom project. Before that, she was at BCG for 3 years (Consultant → Senior Associate) doing PE/VC due diligence, retail transformation, and innovation acceleration. She even raised $3M+ for APAC's first innovation accelerator! 💰",
            "Her work experience is diverse! 🎯 BCG (strategy consulting), Shopee (e-commerce strategy), ByteDance (investment), and Zhen Fund (VC). She's done everything from due diligence to retail transformation to innovation fundraising. The girl's got range! 🦈"
        ]
    },
    
    education: {
        keywords: ['school', 'study', 'education', 'university', 'learn'],
        responses: [
            "Education-wise, Sylvia's got the trifecta! 🎓\n\n• INSEAD MBA (2024-2025) - GPA 4.4, Dean's List, Wharton Exchange\n• Tsinghua University - Economics + CS minor, GPA 3.88, Kaggle Silver Medal\n• Michigan Ross - Exchange program, GPA 3.97\n\nShe's basically a professional student at this point. Send help... or more coffee ☕",
            "Three countries, three amazing schools! 🌍 France/Singapore/US (INSEAD), China (Tsinghua), and USA (Michigan). She's collecting degrees like Pokemon cards! 🦈"
        ]
    },
    
    skills: {
        keywords: ['skill', 'good at', 'expert', 'strength', 'capability'],
        responses: [
            "Sylvia's superpowers include: 🎯 Strategic Planning & Investment Analysis, 💻 Python/R/Tableau/AI/ML, 📊 Business Modeling & Due Diligence, and 🌍 Speaking 3 languages (Mandarin, English, French). Oh, and she passed CFA Level I! She's basically a Swiss Army knife with fins 🦈",
            "Hard skills: Strategy, Finance, Data Analysis, Programming. Soft skills: Leadership, Communication, Adaptability. Fun skills: Guzheng (Grade 8), Perfume Making, Karate. She's like a Renaissance shark! 🎨🦈"
        ]
    },
    
    hobbies: {
        keywords: ['hobby', 'interest', 'like', 'fun', 'free time', 'passion'],
        responses: [
            "Oh boy, where to start? 😄 Sylvia's hobbies include: 🎾 Tennis, 🏊 Swimming (obviously, she's a shark!), 🥋 Karate, 🎵 Guzheng (Chinese zither - Grade 8!), and 🧪 Creating perfumes! She also volunteers for education equity at X-institute. Basically, she doesn't believe in being bored! 🦈",
            "Her hobbies are as diverse as her work! Sports (tennis, swimming, karate), Music (guzheng), Science (perfume making), and Social Impact (education equity). If you think you're busy, wait till you hear about Sylvia's schedule! 😅🦈"
        ]
    },
    
    collaboration: {
        keywords: ['collaborate', 'work together', 'contact', 'reach', 'connect', 'hire'],
        responses: [
            "Want to collaborate with Sylvia? Awesome! 🎉 You can reach her at:\n\n📧 sylvia.han@insead.edu (INSEAD email)\n📧 sylvia_han@foxmail.com (Personal)\n📱 +65 8393 3000\n💼 linkedin.com/in/sylviasiyuhan\n\nShe's always open to interesting projects, especially in strategy, AI, and innovation! 🦈",
            "Hit her up! Sylvia loves collaborating on strategy projects, AI initiatives, or anything that combines business + tech + impact. Check out her LinkedIn or shoot her an email. She's pretty responsive (unless she's drowning in MBA assignments 😅) 🦈"
        ]
    },
    
    achievements: {
        keywords: ['achievement', 'award', 'accomplishment', 'proud', 'winner'],
        responses: [
            "Sylvia's trophy case is getting full! 🏆\n\n• Kaggle M5 Forecasting - Silver Medal (top 3% globally!)\n• INSEAD Dean's List (top 1%)\n• Tsinghua Overall Excellence Award (top 1%)\n• SEM Student Leader Award (4 out of 299!)\n• 1st Place - Tsinghua Creative Challenge\n• Raised $3M+ for innovation accelerator\n\nNot bad for a little shark, right? 🦈",
            "Achievements? She's got them in academics (Dean's List), competitions (Kaggle Silver), leadership (Student Leader Award), and business ($3M+ raised). The girl's a walking achievement board! 🦈✨"
        ]
    },
    
    fun: {
        keywords: ['fun', 'joke', 'weird', 'random', 'favorite'],
        responses: [
            "Fun fact: Sylvia makes her own perfumes! 🧪 Like, she actually creates fragrances. So if you ever meet her, she'll probably smell amazing. Also, she plays guzheng (ancient Chinese instrument) at Grade 8 level. Imagine a shark playing traditional music while doing karate... that's Sylvia! 🦈🎵🥋",
            "Here's a weird one: She's fluent in Mandarin and English, learning French (A2 level), and also knows some Cantonese. Language shark! 🦈🌍 Also, she volunteered to teach at a borderless university in Shenzhen. Smart AND kind! 💙"
        ]
    },
    
    location: {
        keywords: ['where', 'location', 'based', 'live', 'country'],
        responses: [
            "Sylvia's currently in Singapore for her MBA and Shopee work! 🇸🇬 But she's been everywhere: France (INSEAD Fontainebleau), USA (INSEAD Pennsylvania + Michigan), China (Beijing for Tsinghua + work). She's basically a global citizen with a shark passport! 🦈🌍",
            "Home is where the MBA is! Currently Singapore, but she's done France, US, and China. At this point, her frequent flyer miles must be insane! ✈️🦈"
        ]
    },
    
    default: [
        "Hmm, that's a good question! 🤔 I'm not 100% sure about that one. But I can tell you about Sylvia's background, work, education, hobbies, or how to collaborate with her! Want to ask about any of those? 🦈",
        "Great question! I'm Sylvia's AI twin, so I know a lot about her professional stuff and interests. But for super specific questions, you might want to reach out to her directly! Her email is sylvia.han@insead.edu 📧🦈",
        "I'd love to help with that! While I know a ton about Sylvia (her INSEAD MBA, BCG/Shopee work, hobbies like guzheng and perfume making), I might not have the answer to everything. What else can I help you with? 🦈"
    ]
};

// ===== AI Response Logic =====
function getAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check each category
    for (const [category, data] of Object.entries(sharkKnowledge)) {
        if (category === 'greetings' || category === 'default') continue;
        
        if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
            const responses = data.responses;
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    
    // Check for greetings
    if (lowerMessage.match(/^(hi|hello|hey|greetings|sup|yo)/)) {
        return sharkKnowledge.greetings[Math.floor(Math.random() * sharkKnowledge.greetings.length)];
    }
    
    // Default response
    return sharkKnowledge.default[Math.floor(Math.random() * sharkKnowledge.default.length)];
}

// ===== Chat Functions =====
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Simulate bot thinking
    setTimeout(() => {
        const response = getAIResponse(message);
        addMessage(response, 'bot');
    }, 800 + Math.random() * 700);
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = text.replace(/\n/g, '<br>');
    
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function quickAsk(question) {
    const input = document.getElementById('chatInput');
    input.value = question;
    sendMessage();
}

// ===== Create Bubbles =====
function createBubbles() {
    const bubblesContainer = document.querySelector('.bubbles');
    for (let i = 0; i < 7; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubblesContainer.appendChild(bubble);
    }
}

function createFishes() {
    const fishesContainer = document.querySelector('.fishes');
    const fishes = ['🐠', '🐟', '🐡'];
    fishes.forEach((fish, index) => {
        const fishEl = document.createElement('div');
        fishEl.className = 'fish';
        fishEl.textContent = fish;
        fishEl.style.animationDelay = `${index * 5}s`;
        fishesContainer.appendChild(fishEl);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createBubbles();
    createFishes();
    
    // Console easter egg
    console.log('%c🦈 Welcome to Sylvia Han\'s Portfolio!', 'font-size: 20px; color: #00d4ff;');
    console.log('%cMade with 🦈 love and ocean vibes 🌊', 'font-size: 14px; color: #b8c5d6;');
    console.log('%cChat with AI 小鲨 to learn more about Sylvia!', 'font-size: 12px; color: #ff6b6b;');
});
