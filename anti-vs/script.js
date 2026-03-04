/*
  Astig Chatbot Builder Logic
  - State Management
  - Event Listeners
  - Code Export
*/

// Default Configuration
const defaultConfig = {
    theme: {
        primaryColor: '#6c63ff',
        bgColor: '#17171f',
        surfaceColor: '#1f1f2e',
        fontFamily: "'DM Sans', sans-serif",
        borderRadius: 20,
        mode: 'solid',
        gradient: { start: '#6c63ff', end: '#ff6584' },
        headerBgColor: '#1f1f2e',
        headerTextColor: '#ffffff',
        topHeroMediaType: 'none',
        topHeroMediaUrl: ''
    },
    header: {
        title: 'Aria',
        name: 'Aria',
        status: 'Online',
        fontFamily: "'Syne', sans-serif",
        nameFontSize: 15,
        nameFontWeight: 600,
        statusFontSize: 12,
        animation: 'none',
        logoOffsetX: 0,
        logoOffsetY: 0,
        nameOffsetX: 0,
        nameOffsetY: 0,
        statusOffsetX: 0,
        statusOffsetY: 0,
        avatar: 'A',
        avatarSize: 40,
        logoSize: 24,
        logoType: 'text',
        logoUrl: ''
    },
    assistant: {
        name: 'Aria'
    },
    user: {
        avatar: 'U',
        avatarSize: 32
    },
    launcher: {
        position: 'bottom-right',
        iconType: 'icon',
        icon: 'message-circle',
        imageUrl: '',
        size: 48,
        badgeEnabled: false,
        text: '',
        bubbleEnabled: false,
        bubbleText: "Ta-da! You've found your creative superpower spot.",
        bubbleMode: 'instant',
        bubbleTimed: false,
        bubbleDelaySec: 5,
        bubbleDurationSec: 10,
        bgStyle: 'solid',
        bgColor: '#6c63ff',
        gradientEnd: '#ff6584',
        animation: 'none'
    },
    video: {
        layout: 'inline',
        hideBehavior: 'first-question',
        loop: true,
        url: 'https://widjets.astigmedia.com/vid/DJ.mp4',
        imageUrl: ''
    },
    questions: [],
    questionsStyle: 'solid',
    webhook: {
        url: '',
        testUrl: '',
        chatUrl: 'https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat',
        production: true,
        externalJsUrl: 'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/anti-vs/astig-chat-widgets.js'
    },
    footer: {
        text: 'POWERED BY ASTIG MEDIA',
        url: '',
        fontFamily: "'Inter', sans-serif",
        animation: 'none',
        textColor: '#7070a0',
        fontSize: 11,
        position: 'center'
    },
    ui: {
        showPipelineMonitor: false,
        showRealtimeTelemetry: false,
        showRealtimeFeed: false,
        templateStyle: ''
    }
};

const EMBED_DEFAULT_JS_URL = 'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/anti-vs/astig-chat-widgets.js';
const EMBED_DEFAULT_CSS_URL = 'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat.css';
const EMBED_RAW_RUNTIME_JS_URL = 'https://raw.githubusercontent.com/majesticwebcreation-ui/astig.media/main/astig-chat-widgets.js';
const EMBED_RAW_CSS_URL = 'https://raw.githubusercontent.com/majesticwebcreation-ui/astig.media/main/astig-chat.css';
const EMBED_RUNTIME_JS_URL = EMBED_DEFAULT_JS_URL;
const EMBED_LOCKED_SNIPPET = `<!-- Astig Media Chatbot Widget -->
<script>
(function () {
  var RAW_JS = 'https://raw.githubusercontent.com/majesticwebcreation-ui/astig.media/main/astig-chat-widgets.js';
  var RAW_CSS = 'https://raw.githubusercontent.com/majesticwebcreation-ui/astig.media/main/astig-chat.css';
  var FALLBACK_JS = 'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat-widgets.js';
  var FALLBACK_CSS = 'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat.css';
  var RUNTIME_MARKER = 'renderLauncher';

  function hasRuntimeCode(source) {
    return typeof source === 'string' && source.indexOf(RUNTIME_MARKER) !== -1;
  }

  function injectRuntimeScript(source) {
    if (!hasRuntimeCode(source)) throw new Error('Invalid runtime source');
    if (document.querySelector('script[data-astig-chat-runtime-inline]')) return;
    var node = document.createElement('script');
    node.setAttribute('data-astig-chat-runtime-inline', '1');
    node.text = source;
    document.head.appendChild(node);
  }

  function loadFallbackRuntime() {
    if (document.querySelector('script[data-astig-chat-runtime-fallback]')) return;
    var node = document.createElement('script');
    node.src = FALLBACK_JS;
    node.defer = true;
    node.setAttribute('data-astig-chat-runtime-fallback', '1');
    document.head.appendChild(node);
  }

  function injectCssText(cssText) {
    if (!cssText || !cssText.trim()) throw new Error('Invalid css source');
    var styleNode = document.querySelector('style[data-astig-chat-css-inline]');
    if (!styleNode) {
      styleNode = document.createElement('style');
      styleNode.setAttribute('data-astig-chat-css-inline', '1');
      document.head.appendChild(styleNode);
    }
    styleNode.textContent = cssText;
  }

  function loadFallbackCss() {
    if (document.querySelector('link[data-astig-chat-css-fallback]')) return;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = FALLBACK_CSS;
    link.setAttribute('data-astig-chat-css-fallback', '1');
    document.head.appendChild(link);
  }

  fetch(RAW_CSS, { cache: 'no-store' })
    .then(function (res) { if (!res.ok) throw new Error('CSS fetch failed'); return res.text(); })
    .then(injectCssText)
    .catch(loadFallbackCss);

  fetch(RAW_JS, { cache: 'no-store' })
    .then(function (res) { if (!res.ok) throw new Error('Runtime fetch failed'); return res.text(); })
    .then(injectRuntimeScript)
    .catch(loadFallbackRuntime);
})();
</script>`;
const EMBED_DEFAULT_WEBHOOK_URL = 'https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat';
const EMBED_LOCAL_JS_FILENAME = 'astig-chat-widgets.js';
const EMBED_LEGACY_RUNTIME_JS_FILENAME = 'astig-chat.js';
const EMBED_LOCAL_JS_PATHS = [
    '/anti-vs/astig-chat-widgets.js',
    './anti-vs/astig-chat-widgets.js',
    `./${EMBED_LOCAL_JS_FILENAME}`,
    './astig-chat-widgets.fixed.js',
    `/${EMBED_LOCAL_JS_FILENAME}`,
    '../anti-vs/astig-chat-widgets.js',
    `../${EMBED_LOCAL_JS_FILENAME}`,
    '../astig-chat-widgets.fixed.js'
];
const EMBED_LOCAL_CSS_FILENAME = 'astig-chat.css';
const EMBED_LOCAL_CSS_PATHS = [`./${EMBED_LOCAL_CSS_FILENAME}`, `../${EMBED_LOCAL_CSS_FILENAME}`];
const GITHUB_DEPLOY_DEFAULT_REPO = 'majesticwebcreation-ui/astig.media';
const GITHUB_DEPLOY_DEFAULT_BRANCH = 'main';
const GITHUB_DEPLOY_TARGET_STORAGE_KEY = 'astig-github-deploy-target-v1';
const GITHUB_DEPLOY_TOKEN_STORAGE_KEY = 'astig-github-deploy-token-v1';

const CHATBOT_TEMPLATES = {
    support: {
        theme: {
            primaryColor: '#5aa7d9',
            bgColor: '#dfe8f1',
            surfaceColor: '#d5dee8',
            fontFamily: "'DM Sans', sans-serif",
            borderRadius: 30,
            mode: 'solid',
            gradient: { start: '#dfe8f1', end: '#d5dee8' },
            headerBgColor: '#dfe8f1',
            headerTextColor: '#5e6873'
        },
        header: {
            name: 'Listening',
            status: '',
            avatar: 'EL',
            logoType: 'text',
            logoUrl: '',
            logoSize: 56,
            avatarSize: 24
        },
        user: {
            avatar: '',
            avatarSize: 0
        },
        video: {
            layout: 'inline',
            hideBehavior: 'first-question',
            loop: false,
            url: '',
            imageUrl: ''
        },
        launcher: {
            iconType: 'icon',
            icon: 'headset',
            size: 48,
            bgStyle: 'solid',
            bgColor: '#5aa7d9',
            gradientEnd: '#8ed1f0',
            animation: 'none'
        },
        questionsStyle: 'solid',
        questions: [
            { id: 1, text: 'Hi there, welcome to customer support. How can I help you?', type: 'text' }
        ],
        footer: { text: '', textColor: '#93c5fd' },
        ui: { templateStyle: 'support-reference' }
    },
    'orders-online': {
        theme: {
            primaryColor: '#0b6dff',
            bgColor: '#f4f7fb',
            surfaceColor: '#ffffff',
            fontFamily: "'Inter', sans-serif",
            borderRadius: 28,
            mode: 'solid',
            gradient: { start: '#0b6dff', end: '#2ec7ff' },
            headerBgColor: '#0b6dff',
            headerTextColor: '#ffffff',
            topHeroMediaType: 'none',
            topHeroMediaUrl: ''
        },
        header: {
            title: 'River',
            name: 'River',
            status: 'We are online!',
            avatar: 'R',
            logoType: 'image',
            logoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
            logoSize: 42,
            nameFontSize: 14,
            nameFontWeight: 700,
            statusFontSize: 13
        },
        assistant: {
            name: 'River'
        },
        user: {
            avatar: '',
            avatarSize: 0
        },
        launcher: {
            iconType: 'icon',
            icon: 'message-circle',
            size: 54,
            bgStyle: 'gradient',
            bgColor: '#007BFF',
            gradientEnd: '#2ec7ff',
            animation: 'none'
        },
        video: {
            layout: 'inline',
            hideBehavior: 'first-question',
            loop: false,
            url: '',
            imageUrl: ''
        },
        questionsStyle: 'solid',
        questions: [
            { id: 1, text: 'Hi! \ud83d\udc4b How can I help you?', type: 'text' },
            { id: 2, text: 'Let\'s take care of your order \ud83d\udce6\nPlease choose the right topic:', type: 'choice', choices: 'Track my order \ud83d\ude9a,How do I track my order (FAQ)?' }
        ],
        footer: { text: 'POWERED BY ASTIG MEDIA', textColor: '#93a0b8', fontSize: 10 },
        ui: { templateStyle: 'orders-online' }
    },
    'maximum-support-chat': {
        theme: {
            primaryColor: '#1f6dff',
            bgColor: '#eef2f7',
            surfaceColor: '#eef2f7',
            fontFamily: "'Inter', sans-serif",
            borderRadius: 18,
            mode: 'solid',
            gradient: { start: '#1f6dff', end: '#1257dd' },
            headerBgColor: '#1f6dff',
            headerTextColor: '#ffffff',
            topHeroMediaType: 'image',
            topHeroMediaUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80'
        },
        header: {
            name: 'Hi there! 👋',
            status: 'AI chat powered by our team - how can we help you?',
            avatar: '◔',
            logoType: 'text',
            logoUrl: '',
            logoSize: 28,
            nameFontSize: 44,
            nameFontWeight: 800
        },
        video: {
            layout: 'inline',
            hideBehavior: 'stay-on',
            loop: false,
            url: '',
            imageUrl: ''
        },
        launcher: {
            iconType: 'icon',
            icon: 'message-circle',
            size: 50,
            bgStyle: 'solid',
            bgColor: '#1f6dff',
            gradientEnd: '#1257dd',
            animation: 'none'
        },
        questionsStyle: 'solid',
        questions: [
            { id: 1, text: '', type: 'choice', choices: 'What is Astig Media?,Discover Astig AI,Help Center,Chat with us' }
        ],
        footer: { text: 'POWERED BY ASTIG AI', textColor: '#6e7f99' },
        ui: { templateStyle: 'maximum-support' }
    },
    sales: {
        theme: {
            primaryColor: '#f97316',
            bgColor: '#1a1020',
            surfaceColor: '#2a1632',
            fontFamily: "'Poppins', sans-serif",
            borderRadius: 22,
            mode: 'gradient',
            gradient: { start: '#f97316', end: '#ec4899' },
            headerBgColor: '#2a1632',
            headerTextColor: '#fff7ed'
        },
        header: {
            name: 'Sales Advisor',
            status: 'Ready to help',
            avatar: 'SA',
            logoType: 'text',
            logoUrl: ''
        },
        launcher: {
            iconType: 'icon',
            icon: 'sparkles',
            size: 50,
            bgStyle: 'gradient',
            bgColor: '#f97316',
            gradientEnd: '#ec4899',
            animation: 'bounce'
        },
        questionsStyle: 'gradient',
        questions: [
            { id: 1, text: 'Welcome! Looking for pricing, features, or a quick demo?', type: 'choice', choices: 'Pricing,Features,Demo' },
            { id: 2, text: 'Great choice. What business size are you?', type: 'choice', choices: 'Solo,Small team,Enterprise' }
        ],
        footer: { text: 'Book a demo in 2 clicks', textColor: '#fdba74' }
    },
    booking: {
        theme: {
            primaryColor: '#14b8a6',
            bgColor: '#0f172a',
            surfaceColor: '#12243d',
            fontFamily: "'DM Sans', sans-serif",
            borderRadius: 18,
            mode: 'frosted',
            gradient: { start: '#14b8a6', end: '#38bdf8' },
            headerBgColor: '#12243d',
            headerTextColor: '#e0f2fe'
        },
        header: {
            name: 'Booking Concierge',
            status: 'Calendar synced',
            avatar: 'BC',
            logoType: 'text',
            logoUrl: ''
        },
        launcher: {
            iconType: 'icon',
            icon: 'calendar-check',
            size: 48,
            bgStyle: 'solid',
            bgColor: '#14b8a6',
            gradientEnd: '#38bdf8',
            animation: 'pulse'
        },
        questionsStyle: 'solid',
        questions: [
            { id: 1, text: 'Let’s schedule your appointment. What day works best?', type: 'text' },
            { id: 2, text: 'Preferred time slot?', type: 'choice', choices: 'Morning,Afternoon,Evening' }
        ],
        footer: { text: 'Instant booking confirmation', textColor: '#67e8f9' }
    },
    rsvp: {
        theme: {
            primaryColor: '#ef4444',
            bgColor: '#1f1424',
            surfaceColor: '#2d1b36',
            fontFamily: "'Poppins', sans-serif",
            borderRadius: 22,
            mode: 'gradient',
            gradient: { start: '#ef4444', end: '#f59e0b' },
            headerBgColor: '#2d1b36',
            headerTextColor: '#fff7ed'
        },
        header: {
            name: 'RSVP Assistant',
            status: 'Event confirmations',
            avatar: 'RS',
            logoType: 'text',
            logoUrl: ''
        },
        launcher: {
            iconType: 'icon',
            icon: 'calendar-check',
            size: 48,
            bgStyle: 'gradient',
            bgColor: '#ef4444',
            gradientEnd: '#f59e0b',
            animation: 'pulse'
        },
        questionsStyle: 'gradient',
        questions: [
            { id: 1, text: 'Hi! Are you able to attend our event?', type: 'choice', choices: 'Yes,No,Maybe' },
            { id: 2, text: 'How many guests will be joining you?', type: 'choice', choices: '1,2,3,4+' },
            { id: 3, text: 'Please share your full name and email for confirmation.', type: 'text' }
        ],
        footer: { text: 'RSVP closes 48 hours before event day', textColor: '#fdba74' }
    },
    'event-rsvp-martha': {
        theme: {
            primaryColor: '#ff1493',
            bgColor: '#ffd1e8',
            surfaceColor: '#fff4fb',
            fontFamily: "'Inter', sans-serif",
            borderRadius: 24,
            mode: 'gradient',
            gradient: { start: '#ff69b4', end: '#ff1493' },
            headerBgColor: '#f4a5cf',
            headerTextColor: '#1f1140',
            topHeroMediaType: 'image',
            topHeroMediaUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80'
        },
        header: {
            title: 'Martha',
            name: 'Martha',
            status: 'Event RSVP Agent',
            avatar: 'M',
            logoType: 'image',
            logoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=80',
            logoSize: 46,
            nameFontSize: 16,
            nameFontWeight: 700,
            statusFontSize: 12
        },
        assistant: {
            name: 'Martha'
        },
        user: {
            avatar: '',
            avatarSize: 0
        },
        launcher: {
            position: 'bottom-right',
            iconType: 'icon',
            icon: 'calendar-heart',
            imageUrl: '',
            size: 54,
            badgeEnabled: true,
            text: 'Martha is here to help',
            bubbleEnabled: true,
            bubbleText: "Hi! I'm Martha, your Event RSVP Agent. How can I help you today?",
            bubbleMode: 'typewriter',
            bubbleTimed: true,
            bubbleDelaySec: 5,
            bubbleDurationSec: 10,
            bgStyle: 'gradient',
            bgColor: '#ff69b4',
            gradientEnd: '#ff1493',
            animation: 'pulse'
        },
        video: {
            layout: 'inline',
            hideBehavior: 'first-question',
            loop: false,
            url: '',
            imageUrl: ''
        },
        questionsStyle: 'solid',
        questions: [
            { id: 1, text: "Hi! I'm Martha, your Event RSVP Agent. How can I help you today?", type: 'choice', choices: 'RSVP Now,View Location,Chat' },
            { id: 2, text: 'Great! Please share your full name, email, event date, and number of guests.', type: 'text' },
            { id: 3, text: 'Would you like to RSVP as Yes, No, or Maybe?', type: 'choice', choices: 'Yes,No,Maybe' }
        ],
        footer: { text: 'POWERED BY ASTIG MEDIA', textColor: '#8a3f73', fontSize: 10 },
        ui: { templateStyle: 'event-rsvp-martha' }
    },
    onboarding: {
        theme: {
            primaryColor: '#8b5cf6',
            bgColor: '#111122',
            surfaceColor: '#1c1c34',
            fontFamily: "'Manrope', sans-serif",
            borderRadius: 20,
            mode: 'glass',
            gradient: { start: '#8b5cf6', end: '#06b6d4' },
            headerBgColor: '#1c1c34',
            headerTextColor: '#eef2ff'
        },
        header: {
            name: 'Onboarding Guide',
            status: 'Step-by-step help',
            avatar: 'OG',
            logoType: 'text',
            logoUrl: ''
        },
        launcher: {
            iconType: 'icon',
            icon: 'compass',
            size: 48,
            bgStyle: 'gradient',
            bgColor: '#8b5cf6',
            gradientEnd: '#06b6d4',
            animation: 'none'
        },
        questionsStyle: 'solid',
        questions: [
            { id: 1, text: 'Welcome aboard. Want a quick setup or full walkthrough?', type: 'choice', choices: 'Quick setup,Full walkthrough' },
            { id: 2, text: 'Which tool do you want to connect first?', type: 'text' }
        ],
        footer: { text: 'Average setup: under 4 minutes', textColor: '#c4b5fd' }
    },
    newsletter: {
        theme: {
            primaryColor: '#06b6d4',
            bgColor: '#0b1323',
            surfaceColor: '#12203a',
            fontFamily: "'Work Sans', sans-serif",
            borderRadius: 20,
            mode: 'gradient',
            gradient: { start: '#06b6d4', end: '#22c55e' },
            headerBgColor: '#12203a',
            headerTextColor: '#ecfeff'
        },
        header: {
            name: 'Newsletter Signup',
            status: 'Join our updates',
            avatar: 'NS',
            logoType: 'text',
            logoUrl: ''
        },
        launcher: {
            iconType: 'icon',
            icon: 'mail-plus',
            size: 48,
            bgStyle: 'gradient',
            bgColor: '#06b6d4',
            gradientEnd: '#22c55e',
            animation: 'pulse'
        },
        questionsStyle: 'solid',
        questions: [
            { id: 1, text: 'Welcome! Please enter your name to sign up for our newsletter.', type: 'text' },
            { id: 2, text: 'Great. Now enter your email address.', type: 'text' }
        ],
        footer: { text: 'No spam. Unsubscribe anytime.', textColor: '#99f6e4' }
    }
};

// Current State
let config = JSON.parse(JSON.stringify(defaultConfig));

function getHeaderTitle(cfg = config) {
    if (!cfg || typeof cfg !== 'object') return 'Chat';
    const header = cfg.header || {};
    const assistant = cfg.assistant || {};
    return (header.title || header.name || assistant.name || 'Chat').toString();
}

function getAssistantName(cfg = config) {
    if (!cfg || typeof cfg !== 'object') return 'Assistant';
    const assistant = cfg.assistant || {};
    const header = cfg.header || {};
    return (assistant.name || header.name || header.title || 'Assistant').toString();
}

function ensureHeaderAssistantSeparation(cfg = config) {
    if (!cfg || typeof cfg !== 'object') return;
    if (!cfg.header || typeof cfg.header !== 'object') cfg.header = {};
    if (!cfg.assistant || typeof cfg.assistant !== 'object') cfg.assistant = {};
    const legacyName = (cfg.header.name || '').toString().trim();
    if (!cfg.header.title) cfg.header.title = legacyName || 'Aria';
    if (!cfg.assistant.name) cfg.assistant.name = legacyName || cfg.header.title || 'Aria';
    cfg.header.name = cfg.header.title;
}

function normalizeQuestionsConfig(cfg) {
    if (!cfg || typeof cfg !== 'object') return;
    if (!Array.isArray(cfg.questions)) cfg.questions = [];
    cfg.questions = cfg.questions
        .map((q, index) => {
            if (!q || typeof q !== 'object') return null;
            const normalizedType = q.type === 'choice' ? 'choice' : 'text';
            const normalizedDisplayMode = q.displayMode === 'typewriter' ? 'typewriter' : 'instant';
            return {
                id: q.id || Date.now() + index,
                text: String(q.text || ''),
                type: normalizedType,
                displayMode: normalizedDisplayMode,
                choices: normalizedType === 'choice' ? String(q.choices || '') : ''
            };
        })
        .filter(Boolean);
    if (cfg.questionsStyle !== 'gradient') cfg.questionsStyle = 'solid';
}

function normalizeRuntimeConfigShape(cfg) {
    if (!cfg || typeof cfg !== 'object') return;
    if (!cfg.webhook || typeof cfg.webhook !== 'object') cfg.webhook = {};
    if (!cfg.video || typeof cfg.video !== 'object') cfg.video = {};
    if (!cfg.ui || typeof cfg.ui !== 'object') cfg.ui = {};
    if (!cfg.footer || typeof cfg.footer !== 'object') cfg.footer = {};
    if (!cfg.theme || typeof cfg.theme !== 'object') cfg.theme = {};
    if (!cfg.launcher || typeof cfg.launcher !== 'object') cfg.launcher = {};
    ensureHeaderAssistantSeparation(cfg);
    normalizeQuestionsConfig(cfg);

    const normalizedExternalJs = normalizeAstigJsDelivrUrl(cfg.webhook.externalJsUrl || '');
    cfg.webhook.externalJsUrl = normalizedExternalJs || EMBED_DEFAULT_JS_URL;
    cfg.webhook.url = String(cfg.webhook.url || '').trim();
    cfg.webhook.testUrl = String(cfg.webhook.testUrl || '').trim();
    cfg.webhook.chatUrl = String(cfg.webhook.chatUrl || EMBED_DEFAULT_WEBHOOK_URL).trim();
    cfg.webhook.production = cfg.webhook.production !== false;

    if (!cfg.video.hideBehavior || typeof cfg.video.hideBehavior !== 'string') {
        cfg.video.hideBehavior = 'first-question';
    }
}

ensureHeaderAssistantSeparation(config);
normalizeRuntimeConfigShape(config);
let chatHistory = [];
let maximumSupportInputUnlocked = false;
const DEFAULT_VIDEO_URL = 'https://widjets.astigmedia.com/vid/DJ.mp4';
const SEND_PLANE_ICON_DATA_URI = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9IndpbmdUb3AiIHgxPSIzNiIgeTE9Ijk4IiB4Mj0iMTYyIiB5Mj0iNTAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjODNFNkZGIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC40NCIgc3RvcC1jb2xvcj0iI0YyRjRGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNzQiIHN0b3AtY29sb3I9IiNGNEJDNUEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjI5QTJGIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJ3aW5nQm90dG9tIiB4MT0iNzgiIHkxPSIxNDIiIHgyPSIxNjAiIHkyPSI3MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNBMTFBQzkiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjQ4IiBzdG9wLWNvbG9yPSIjRDY2Q0E3Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0YwQjE2NiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic3BpbmUiIHgxPSI3MCIgeTE9IjEyNCIgeDI9IjE1MCIgeTI9IjY2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzE2MzRBRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNTIiIHN0b3AtY29sb3I9IiM3RDJGQUYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDY0MzFGIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJlZGdlIiB4MT0iMzgiIHkxPSIxMzgiIHgyPSIxNjQiIHkyPSI1MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzRkI1RkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjUyIiBzdG9wLWNvbG9yPSIjRjFGNUZGIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGQjA1RSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxmaWx0ZXIgaWQ9InNoYWRvdyIgeD0iMTgiIHk9IjI4IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEzNiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgogICAgICA8ZmVEcm9wU2hhZG93IGR4PSIwIiBkeT0iMyIgc3RkRGV2aWF0aW9uPSIyLjQiIGZsb29kLWNvbG9yPSIjMEExQzVBIiBmbG9vZC1vcGFjaXR5PSIwLjM4Ii8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CgogIDxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICAgIDxwYXRoIGQ9Ik0zOCA5Ni44TDE2NCA1MEw3Mi44IDE0Mi41TDM4IDk2LjhaIiBmaWxsPSJ1cmwoI3dpbmdUb3ApIiBzdHJva2U9InVybCgjZWRnZSkiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICA8cGF0aCBkPSJNNzMgMTQyLjVMMTY0IDUwTDEyNi43IDEzMy41TDczIDE0Mi41WiIgZmlsbD0idXJsKCN3aW5nQm90dG9tKSIgc3Ryb2tlPSIjRUQ4Q0I3IiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogICAgPHBhdGggZD0iTTM4IDk2LjhMNjQuNSAxMTQuNUw3MyAxNDIuNUw2Ni44IDEwOC42TDM4IDk2LjhaIiBmaWxsPSJ1cmwoI3NwaW5lKSIgc3Ryb2tlPSIjMkY3QUQ4IiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogICAgPHBhdGggZD0iTTY2LjggMTA4LjZMMTU0LjggNTYuMkw3Ni4yIDEzNi4yIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS1vcGFjaXR5PSIwLjc4IiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBkPSJNNDYuNSA5OS4yTDE2MCA1Mi40IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS1vcGFjaXR5PSIwLjM1IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBkPSJNNzggMTQwTDEyNiAxMzIiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLW9wYWNpdHk9IjAuMjgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8L2c+Cjwvc3ZnPgo=';
const SUPPORT_MIC_ICON_SVG = '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>';
const SUPPORT_MIC_OFF_ICON_SVG = '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12"></path><path d="M15 9.34V4a3 3 0 0 0-5.68-1.33"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2"></path><path d="M19 10v2a7 7 0 0 1-2.08 4.95"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>';
const SUPPORT_UPLOAD_ICON_SVG = '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>';
const ORDERS_CAMERA_ICON_SVG = '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h3l2-2h6l2 2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"></path><circle cx="12" cy="13" r="3"></circle></svg>';
const ORDERS_EMOJI_ICON_SVG = '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M8.5 15a5 5 0 0 0 7 0"></path><circle cx="9" cy="10" r="1"></circle><circle cx="15" cy="10" r="1"></circle></svg>';
const DEFAULT_PREVIEW_UPLOAD_ICON_HTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>';
const DEFAULT_PREVIEW_SEND_ICON_HTML = '<img class="chat-widget__send-plane" src="assets/send-airplane.svg" alt="Send" />';
const MAXIMUM_SUPPORT_DEFAULT_HERO_IMAGE = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80';
let appBooted = false;

// DOM Elements
const widget = document.getElementById('chatWidgetPreview');
const msgList = document.getElementById('previewMsgList');
const anchor = document.getElementById('previewAnchor');
const input = document.getElementById('previewInput');
const sendBtn = document.getElementById('previewSendBtn');
const previewRawTelemetryBody = document.getElementById('previewRawTelemetryBody');
const backendPanel = document.getElementById('backendPanel');
const backendStateBadge = document.getElementById('backendStateBadge');
const backendSessionIdEl = document.getElementById('backendSessionId');
const backendOverallBar = document.getElementById('backendOverallBar');
const backendOverallLabel = document.getElementById('backendOverallLabel');
const backendOverallText = document.getElementById('backendOverallText');
const backendLogList = document.getElementById('backendLogList');
const backendWebhookConnCard = document.getElementById('backendWebhookConnCard');
const backendWebhookConnState = document.getElementById('backendWebhookConnState');
const backendWebhookModeCard = document.getElementById('backendWebhookModeCard');
const backendWebhookProdState = document.getElementById('backendWebhookProdState');
const backendWebhookTestState = document.getElementById('backendWebhookTestState');

const BACKEND_STAGE_ORDER = ['outbound', 'processing', 'inbound', 'render'];
const backendStageEls = {
    outbound: document.getElementById('backendStepOutbound'),
    processing: document.getElementById('backendStepProcessing'),
    inbound: document.getElementById('backendStepInbound'),
    render: document.getElementById('backendStepRender')
};
const backendStageBarEls = {
    outbound: document.getElementById('backendBarOutbound'),
    processing: document.getElementById('backendBarProcessing'),
    inbound: document.getElementById('backendBarInbound'),
    render: document.getElementById('backendBarRender')
};
const backendStagePctEls = {
    outbound: document.getElementById('backendPctOutbound'),
    processing: document.getElementById('backendPctProcessing'),
    inbound: document.getElementById('backendPctInbound'),
    render: document.getElementById('backendPctRender')
};
const backendArrowEls = [
    document.getElementById('backendArrow1'),
    document.getElementById('backendArrow2'),
    document.getElementById('backendArrow3')
];

const backendTelemetry = {
    stage: null,
    stageProgress: { outbound: 0, processing: 0, inbound: 0, render: 0 },
    pendingProcessingTimer: null,
    draftActive: false,
    draftChars: 0
};

const RAW_TELEMETRY_MAX_LINES = 18;
let rawTelemetryLines = [];
let isCreateBotMode = false;
let createBotLastFocusedEl = null;
let autoSaveTimer = null;
let autoSaveSuspended = false;
let hasStartedFresh = false;
let deployInProgress = false;
const AUTO_SAVE_DELAY_MS = 700;

function persistConfigSilently() {
    try {
        localStorage.setItem('chatbotConfig', JSON.stringify(config));
        const notif = showProgressNotification('Auto Save');
        if (notif) notif.update(100, 'Auto-saved (100%)', 'success');
    } catch (e) {
        console.error('Auto-save failed:', e);
    }
}

function scheduleAutoSave() {
    if (autoSaveSuspended) return;
    if (autoSaveTimer) clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(() => {
        autoSaveTimer = null;
        persistConfigSilently();
    }, AUTO_SAVE_DELAY_MS);
}

function initAutoSave() {
    const sidebar = document.querySelector('.sidebar');
    const createMode = document.getElementById('createBotMode');
    const onSettingsChange = (e) => {
        const t = e.target;
        if (!t || !t.id) return;
        if (t.id === 'fileInput' || t.id === 'previewFileInput') return;
        scheduleAutoSave();
    };
    if (sidebar) {
        sidebar.addEventListener('input', onSettingsChange);
        sidebar.addEventListener('change', onSettingsChange);
    }
    if (createMode) {
        createMode.addEventListener('input', onSettingsChange);
        createMode.addEventListener('change', onSettingsChange);
    }
}

function toggleCreateModeTemplateChooser(showChooser) {
    const chooser = document.getElementById('createModeTemplateChooser');
    if (!chooser) return;
    chooser.hidden = !showChooser;
    chooser.style.display = showChooser ? 'block' : 'none';
    chooser.setAttribute('aria-hidden', showChooser ? 'false' : 'true');
    if (!showChooser) {
        const select = document.getElementById('createModeTemplateSelect');
        if (select) select.value = '';
    }
}

function setCreateBotMode(enabled, options = {}) {
    const { restoreFocus = true } = options;
    const previewArea = document.getElementById('previewArea');
    const createMode = document.getElementById('createBotMode');
    const startFreshBtn = document.getElementById('createModeStartFreshBtn');
    const createBtn = document.getElementById('createBotBtn');
    if (!previewArea || !createMode || !startFreshBtn || !createBtn) return;

    const next = !!enabled;
    if (next === isCreateBotMode) return;

    if (next) {
        createBotLastFocusedEl = document.activeElement;
        previewArea.classList.add('create-mode-on');
        createMode.setAttribute('aria-hidden', 'false');
        toggleCreateModeTemplateChooser(false);
        window.setTimeout(() => startFreshBtn.focus(), 120);
        isCreateBotMode = true;
        return;
    }

    previewArea.classList.remove('create-mode-on');
    createMode.setAttribute('aria-hidden', 'true');
    toggleCreateModeTemplateChooser(false);
    isCreateBotMode = false;
    if (restoreFocus && createBotLastFocusedEl && typeof createBotLastFocusedEl.focus === 'function') {
        window.setTimeout(() => createBotLastFocusedEl.focus(), 60);
    } else {
        window.setTimeout(() => createBtn.focus(), 60);
    }
}

function startFreshFromCreateMode() {
    hasStartedFresh = true;
    const freshConfig = JSON.parse(JSON.stringify(defaultConfig));
    if (!freshConfig.video || typeof freshConfig.video !== 'object') freshConfig.video = {};
    freshConfig.video.url = '';
    freshConfig.video.imageUrl = '';
    freshConfig.questions = [];
    freshConfig.footer.url = '';
    freshConfig.webhook.url = '';
    freshConfig.webhook.testUrl = '';
    freshConfig.webhook.chatUrl = EMBED_DEFAULT_WEBHOOK_URL;
    applyConfig(freshConfig);
    localStorage.setItem('chatbotConfig', JSON.stringify(freshConfig));
    setCreateBotMode(false, { restoreFocus: false });
}

function openCreateModeTemplateFlow() {
    toggleCreateModeTemplateChooser(true);
    const select = document.getElementById('createModeTemplateSelect');
    if (!select) return;
    window.setTimeout(() => {
        select.focus();
        try {
            if (typeof select.showPicker === 'function') select.showPicker();
        } catch (e) {
            // no-op for browsers that block programmatic picker opening
        }
    }, 80);
}

function applyCreateModeTemplateSelection() {
    const select = document.getElementById('createModeTemplateSelect');
    if (!select || !select.value) {
        const notif = showProgressNotification('Template Selection');
        if (notif) notif.update(100, 'Please choose a template first.', 'error');
        return;
    }
    const templateId = select.value;
    hasStartedFresh = true;
    applyTemplatePreset(templateId);
    toggleCreateModeTemplateChooser(false);
}

function initCreateBotModeActions() {
    const createBtn = document.getElementById('createBotBtn');
    const backBtn = document.getElementById('createBotBackBtn');
    const cancelBtn = document.getElementById('createBotCancelBtn');
    const startFreshBtn = document.getElementById('createModeStartFreshBtn');
    const useTemplatesBtn = document.getElementById('createModeUseTemplatesBtn');
    const openMyBotBtn = document.getElementById('createModeOpenMyBotBtn');
    const applyTemplateBtn = document.getElementById('createModeApplyTemplateBtn');
    const templateSelect = document.getElementById('createModeTemplateSelect');
    const dropzoneBtn = document.getElementById('createBotDropzone');

    if (createBtn) createBtn.addEventListener('click', () => setCreateBotMode(true));
    if (backBtn) backBtn.addEventListener('click', () => setCreateBotMode(false));
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            toggleCreateModeTemplateChooser(false);
            setCreateBotMode(false);
        });
    }
    if (startFreshBtn) startFreshBtn.addEventListener('click', startFreshFromCreateMode);
    if (useTemplatesBtn) useTemplatesBtn.addEventListener('click', openCreateModeTemplateFlow);
    if (openMyBotBtn) {
        openMyBotBtn.addEventListener('click', () => {
            const fileInput = document.getElementById('fileInput');
            if (fileInput) fileInput.click();
        });
    }
    if (dropzoneBtn) dropzoneBtn.addEventListener('click', openCreateModeTemplateFlow);
    if (applyTemplateBtn) applyTemplateBtn.addEventListener('click', applyCreateModeTemplateSelection);
}

function bootBuilderApp() {
    if (appBooted) return;
    appBooted = true;
    removeWebhookInlineEmbedOptions();
    initTabs();
    initInputs();
    hydrateGitHubIntegrationPanel();
    initAutoSave();
    initCreateBotModeActions();

    // Load saved settings if available and use it as startup state
    const hasSavedConfig = loadFromLocalStorage();
    if (hasSavedConfig) hasStartedFresh = true;
    // Always apply current config to DOM so interactive header drag/edit handlers are bound,
    // including after a full reset where no saved config exists.
    updateCSSVars();
    updateDOM();
    updateTelemetryVisibility();
    initBackendTelemetryPanel();

    renderChat();

    // Auto-open widget for preview convenience
    if (widget) {
        widget.classList.add('active');
        // Ensure display:flex is set if needed by CSS (handled by class .active in style.css)
    }

    // Toggle Widget on Launcher Click
    const launcherBtn = document.getElementById('previewLauncher');
    if (launcherBtn) {
        launcherBtn.addEventListener('click', () => {
            widget.classList.toggle('active');
        });
    }

    // Initial Render of Questions
    renderQuestions();

    // Trigger initial chat state
    restartChat();
    // Keep preview visible on startup; create mode is still available via "Create Bot".
    setCreateBotMode(false, { restoreFocus: false });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    bootBuilderApp();
});

// --- UI Logic ---

function initTabs() {
    const tabs = document.querySelectorAll('.nav-btn');
    const panels = document.querySelectorAll('.panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const panelId = `panel-${tab.dataset.tab}`;
            document.getElementById(panelId).classList.add('active');
        });
    });
}

function removeWebhookInlineEmbedOptions() {
    const webhookPanel = document.getElementById('panel-webhook');
    if (!webhookPanel) return;

    const copyBtn = webhookPanel.querySelector('#copyInlineEmbedWebhook');
    const codeEl = webhookPanel.querySelector('#inlineEmbedCodeWebhook');
    const previewBtn = webhookPanel.querySelector('#previewInlineEmbedWebhook');

    if (copyBtn) {
        const container = copyBtn.closest('.code-block-container');
        if (container) container.remove();
    }
    if (!copyBtn && codeEl) {
        const container = codeEl.closest('.code-block-container');
        if (container) container.remove();
    }
    if (previewBtn) previewBtn.remove();
}

function resolveEmbedJsUrl() {
    if (typeof syncWebhookSettingsFromInputs === 'function') {
        syncWebhookSettingsFromInputs();
    }
    const configuredUrl = (config?.webhook?.externalJsUrl || '').trim();
    const normalizedConfiguredUrl = normalizeAstigJsDelivrUrl(configuredUrl);
    if (
        /\/astig-chat\.js(?:[?#]|$)/i.test(normalizedConfiguredUrl) ||
        /\/astig-chat-widget\.js(?:[?#]|$)/i.test(normalizedConfiguredUrl) ||
        /\/astig-widget\.js(?:[?#]|$)/i.test(normalizedConfiguredUrl)
    ) {
        return EMBED_DEFAULT_JS_URL;
    }
    return normalizedConfiguredUrl || EMBED_DEFAULT_JS_URL;
}

function normalizeAstigJsDelivrUrl(url) {
    const value = String(url || '').trim();
    if (!value) return value;
    return value.replace(
        /^https:\/\/cdn\.jsdelivr\.net\/gh\/majesticwebcreation-ui\/astig\.media(?:@(main|master))?\/((?:anti-vs\/)?astig-chat-widgets\.js(?:[?#].*)?)$/i,
        'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/anti-vs/astig-chat-widgets.js'
    );
}

function resolveEmbedCssUrl(jsUrl) {
    void jsUrl;
    return EMBED_DEFAULT_CSS_URL;
}

function resolveEmbedWebhookUrl() {
    if (typeof syncWebhookSettingsFromInputs === 'function') {
        syncWebhookSettingsFromInputs();
    }

    const productionUrl = (config?.webhook?.url || '').trim();
    const testUrl = (config?.webhook?.testUrl || '').trim();
    const chatUrl = (config?.webhook?.chatUrl || '').trim();
    const productionMode = !!config?.webhook?.production;

    const active = productionMode ? productionUrl : testUrl;
    return active || chatUrl || productionUrl || testUrl || EMBED_DEFAULT_WEBHOOK_URL;
}

function getEmbedConfigSnapshot() {
    if (typeof syncWebhookSettingsFromInputs === 'function') {
        syncWebhookSettingsFromInputs();
    }
    const snapshot = JSON.parse(JSON.stringify(config || {}));
    normalizeRuntimeConfigShape(snapshot);
    return snapshot;
}

function stringifyForInlineScript(value) {
    return JSON.stringify(value)
        .replace(/<\//g, '<\\/')
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029');
}

function getEmbedSnippetText() {
    return EMBED_LOCKED_SNIPPET;
}

function getEmbedJsFileText() {
    const embedJsUrl = resolveEmbedJsUrl();
    const embedCssUrl = resolveEmbedCssUrl(embedJsUrl);
    const runtimeJsUrl = embedJsUrl || EMBED_RUNTIME_JS_URL;
    const embedWebhookUrl = resolveEmbedWebhookUrl();
    const webhookLiteral = JSON.stringify(embedWebhookUrl);
    const embedConfigLiteral = stringifyForInlineScript(getEmbedConfigSnapshot());
    return [
        '// Astig Media Chatbot Widget',
        `// Webhook: ${embedWebhookUrl}`,
        `// CSS: ${embedCssUrl}`,
        `// CDN: ${embedJsUrl}`,
        `// Runtime: ${runtimeJsUrl}`,
        '(function() {',
        '  window.RSVPChatConfig = window.RSVPChatConfig || {};',
        `  window.RSVPChatConfig.webhookUrl = ${webhookLiteral};`,
        `  window.RSVPChatConfig.fullConfig = ${embedConfigLiteral};`,
        "  var head = document.head || document.getElementsByTagName('head')[0];",
        "  if (!document.querySelector('link[data-astig-chat-css]')) {",
        "    var link = document.createElement('link');",
        "    link.rel = 'stylesheet';",
        `    link.href = '${embedCssUrl}';`,
        "    link.setAttribute('data-astig-chat-css', '1');",
        '    head.appendChild(link);',
        '  }',
        "  if (!document.querySelector('script[data-astig-chat-runtime]')) {",
        "    var script = document.createElement('script');",
        `    script.src = '${runtimeJsUrl}';`,
        '    script.defer = true;',
        "    script.setAttribute('data-astig-chat-runtime', '1');",
        '    head.appendChild(script);',
        '  }',
        '})();',
        ''
    ].join('\n');
}

async function fetchLocalEmbedJsFileText() {
    const runtimeCandidates = Array.from(new Set([
        ...EMBED_LOCAL_JS_PATHS,
        resolveEmbedJsUrl(),
        EMBED_RUNTIME_JS_URL,
        EMBED_DEFAULT_JS_URL,
        'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/anti-vs/astig-chat-widgets.js',
        'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media@main/anti-vs/astig-chat-widgets.js',
        'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat-widgets.js',
        'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media@main/astig-chat-widgets.js',
        'https://raw.githubusercontent.com/majesticwebcreation-ui/astig.media/main/anti-vs/astig-chat-widgets.js',
        'https://raw.githubusercontent.com/majesticwebcreation-ui/astig.media/main/astig-chat-widgets.js'
    ].filter(Boolean)));

    let lastErrorMessage = '';
    for (const path of runtimeCandidates) {
        try {
            const response = await fetch(path, { cache: 'no-store' });
            if (!response.ok) {
                lastErrorMessage = `HTTP ${response.status} at ${path}`;
                continue;
            }
            const content = await response.text();
            if (content && content.trim()) {
                if (isLoaderOnlyEmbedScript(content)) {
                    lastErrorMessage = `Loader-only script at ${path}`;
                    continue;
                }
                return { content, path };
            }
            lastErrorMessage = `Empty content at ${path}`;
        } catch (error) {
            lastErrorMessage = (error && error.message) ? error.message : `Failed to fetch ${path}`;
        }
    }
    throw new Error(
        `Unable to load ${EMBED_LOCAL_JS_FILENAME}. ${lastErrorMessage || 'No runtime source returned content.'}`
    );
}

function isLoaderOnlyEmbedScript(content) {
    const source = String(content || '');
    if (!source.trim()) return false;
    const hasRuntimeMarkers =
        source.includes('function renderLauncher') ||
        source.includes('Astig Media Chatbot: Rendering Launcher') ||
        source.includes('id="astig-chat-wrapper"');
    const hasLoaderMarkers =
        source.includes("data-astig-chat-runtime") &&
        source.includes("document.createElement('script')");
    return hasLoaderMarkers && !hasRuntimeMarkers;
}

async function fetchLocalEmbedCssFileText() {
    for (const path of EMBED_LOCAL_CSS_PATHS) {
        try {
            const response = await fetch(path, { cache: 'no-store' });
            if (!response.ok) continue;
            const content = await response.text();
            if (content && content.trim()) {
                return { content, path };
            }
        } catch (error) {
            void error;
        }
    }

    const embedCssUrl = resolveEmbedCssUrl(resolveEmbedJsUrl());
    const response = await fetch(embedCssUrl, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const content = await response.text();
    if (!content || !content.trim()) {
        throw new Error('CSS content was empty');
    }
    return { content, path: embedCssUrl };
}

function utf8ToBase64(value) {
    const source = String(value || '');
    const bytes = new TextEncoder().encode(source);
    const chunkSize = 0x8000;
    let binary = '';
    for (let index = 0; index < bytes.length; index += chunkSize) {
        binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
    }
    return btoa(binary);
}

function base64ToUtf8(value) {
    const normalized = String(value || '').replace(/\s+/g, '');
    if (!normalized) return '';
    const binary = atob(normalized);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
        bytes[index] = binary.charCodeAt(index);
    }
    return new TextDecoder().decode(bytes);
}

function getGitHubDeployHeaders(token, includeContentType = false) {
    const headers = {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28'
    };
    if (includeContentType) headers['Content-Type'] = 'application/json';
    return headers;
}

async function readGitHubApiError(response) {
    try {
        const data = await response.json();
        if (data && typeof data.message === 'string' && data.message.trim()) return data.message;
        return `HTTP ${response.status}`;
    } catch (error) {
        void error;
        return `HTTP ${response.status}`;
    }
}

function encodeGitHubContentPath(path) {
    return String(path || '')
        .split('/')
        .filter(Boolean)
        .map((segment) => encodeURIComponent(segment))
        .join('/');
}

function parseGitHubRepoSlug(slug) {
    const match = String(slug || '').trim().match(/^([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)$/);
    if (!match) throw new Error('Repository must be in owner/repo format.');
    return { owner: match[1], repo: match[2] };
}

function normalizeGitHubDeployBranch(repo, branch) {
    const repoSlug = String(repo || '').trim().toLowerCase();
    const value = String(branch || '').trim();
    if (!value) return '';
    if (repoSlug === GITHUB_DEPLOY_DEFAULT_REPO.toLowerCase() && value.toLowerCase() === 'master') {
        return 'main';
    }
    return value;
}

function getSavedGitHubDeployTarget() {
    const fallback = { repo: GITHUB_DEPLOY_DEFAULT_REPO, branch: GITHUB_DEPLOY_DEFAULT_BRANCH };
    try {
        const raw = localStorage.getItem(GITHUB_DEPLOY_TARGET_STORAGE_KEY);
        if (!raw) return fallback;
        const parsed = JSON.parse(raw);
        const repo = (parsed && typeof parsed.repo === 'string') ? parsed.repo.trim() : '';
        const parsedBranch = (parsed && typeof parsed.branch === 'string') ? parsed.branch.trim() : '';
        const branch = normalizeGitHubDeployBranch(repo || fallback.repo, parsedBranch || fallback.branch) || fallback.branch;
        return {
            repo: repo || fallback.repo,
            branch
        };
    } catch (error) {
        void error;
        return fallback;
    }
}

function saveGitHubDeployTarget(target) {
    const repo = String(target?.repo || '').trim();
    const branch = normalizeGitHubDeployBranch(repo, target?.branch);
    if (!repo || !branch) return;
    try {
        localStorage.setItem(
            GITHUB_DEPLOY_TARGET_STORAGE_KEY,
            JSON.stringify({ repo, branch })
        );
    } catch (error) {
        void error;
    }
}

function getSavedGitHubDeployToken() {
    try {
        return String(localStorage.getItem(GITHUB_DEPLOY_TOKEN_STORAGE_KEY) || '').trim();
    } catch (error) {
        void error;
        return '';
    }
}

function saveGitHubDeployToken(token) {
    const value = String(token || '').trim();
    try {
        if (value) {
            localStorage.setItem(GITHUB_DEPLOY_TOKEN_STORAGE_KEY, value);
        } else {
            localStorage.removeItem(GITHUB_DEPLOY_TOKEN_STORAGE_KEY);
        }
    } catch (error) {
        void error;
    }
}

function getGitHubIntegrationSettingsFromInputs(options = {}) {
    const promptForToken = options.promptForToken !== false;
    const savedTarget = getSavedGitHubDeployTarget();
    const savedToken = getSavedGitHubDeployToken();
    const repoInput = document.getElementById('githubRepoInput');
    const branchInput = document.getElementById('githubBranchInput');
    const tokenInput = document.getElementById('githubTokenInput');

    const repo = (repoInput instanceof HTMLInputElement ? repoInput.value : savedTarget.repo).trim() || savedTarget.repo;
    const rawBranch = (branchInput instanceof HTMLInputElement ? branchInput.value : savedTarget.branch).trim() || savedTarget.branch;
    const branch = normalizeGitHubDeployBranch(repo, rawBranch) || savedTarget.branch;
    let token = (tokenInput instanceof HTMLInputElement ? tokenInput.value : savedToken).trim() || savedToken;

    if (!repo) throw new Error('GitHub repository is required.');
    if (!branch) throw new Error('GitHub branch is required.');
    parseGitHubRepoSlug(repo);

    if (!token && promptForToken) {
        token = (window.prompt('GitHub full access token:', '') || '').trim();
        if (tokenInput instanceof HTMLInputElement && token) tokenInput.value = token;
    }
    if (!token) throw new Error('GitHub token is required. Open Integration and save your token.');

    if (branchInput instanceof HTMLInputElement && branchInput.value !== branch) {
        branchInput.value = branch;
    }

    saveGitHubDeployTarget({ repo, branch });
    saveGitHubDeployToken(token);
    return { repo, branch, token };
}

function hydrateGitHubIntegrationPanel() {
    const savedTarget = getSavedGitHubDeployTarget();
    const savedToken = getSavedGitHubDeployToken();
    const repoInput = document.getElementById('githubRepoInput');
    const branchInput = document.getElementById('githubBranchInput');
    const tokenInput = document.getElementById('githubTokenInput');
    const tokenShow = document.getElementById('githubTokenShow');
    const saveBtn = document.getElementById('saveGithubIntegrationBtn');

    const hydratedRepo = savedTarget.repo || GITHUB_DEPLOY_DEFAULT_REPO;
    const hydratedBranch = normalizeGitHubDeployBranch(hydratedRepo, savedTarget.branch || GITHUB_DEPLOY_DEFAULT_BRANCH) || GITHUB_DEPLOY_DEFAULT_BRANCH;
    if (repoInput instanceof HTMLInputElement) repoInput.value = hydratedRepo;
    if (branchInput instanceof HTMLInputElement) branchInput.value = hydratedBranch;
    if (tokenInput instanceof HTMLInputElement) tokenInput.value = savedToken;
    if (hydratedRepo !== savedTarget.repo || hydratedBranch !== savedTarget.branch) {
        saveGitHubDeployTarget({ repo: hydratedRepo, branch: hydratedBranch });
    }

    if (tokenShow instanceof HTMLInputElement && tokenInput instanceof HTMLInputElement) {
        tokenShow.checked = false;
        tokenInput.type = 'password';
        tokenShow.addEventListener('change', () => {
            tokenInput.type = tokenShow.checked ? 'text' : 'password';
        });
    }

    if (saveBtn instanceof HTMLButtonElement) {
        saveBtn.addEventListener('click', () => {
            try {
                const settings = getGitHubIntegrationSettingsFromInputs({ promptForToken: false });
                notifyEmbedAction('Integration', `GitHub integration saved (${settings.repo}@${settings.branch}).`, 'success');
            } catch (error) {
                notifyEmbedAction('Integration', error?.message || 'Unable to save integration settings.', 'error');
            }
        });
    }
}

async function fetchGitHubFileMeta({ owner, repo, branch, path, token }) {
    const encodedPath = encodeGitHubContentPath(path);
    const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/${encodedPath}?ref=${encodeURIComponent(branch)}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: getGitHubDeployHeaders(token)
    });
    if (response.status === 404) return null;
    if (!response.ok) {
        const message = await readGitHubApiError(response);
        throw new Error(`Unable to read ${path}: ${message}`);
    }
    return response.json();
}

async function fetchGitHubRepoMeta({ owner, repo, token }) {
    const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: getGitHubDeployHeaders(token)
    });
    if (!response.ok) {
        const message = await readGitHubApiError(response);
        throw new Error(`Unable to read repository metadata: ${message}`);
    }
    return response.json();
}

async function checkGitHubBranchExists({ owner, repo, branch, token }) {
    const value = String(branch || '').trim();
    if (!value) return false;
    const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/branches/${encodeURIComponent(value)}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: getGitHubDeployHeaders(token)
    });
    if (response.status === 404) return false;
    if (!response.ok) {
        const message = await readGitHubApiError(response);
        throw new Error(`Unable to verify branch "${value}": ${message}`);
    }
    return true;
}

async function resolveGitHubDeployBranch({ owner, repo, token, preferredBranch }) {
    const candidates = [];
    const pushCandidate = (value) => {
        const branch = String(value || '').trim();
        if (!branch) return;
        if (!candidates.includes(branch)) candidates.push(branch);
    };

    pushCandidate(preferredBranch);
    try {
        const meta = await fetchGitHubRepoMeta({ owner, repo, token });
        pushCandidate(meta?.default_branch);
    } catch (error) {
        void error;
    }
    pushCandidate('main');
    pushCandidate('master');

    for (const branch of candidates) {
        if (await checkGitHubBranchExists({ owner, repo, branch, token })) {
            return branch;
        }
    }
    throw new Error(`No valid branch found. Tried: ${candidates.join(', ')}`);
}

async function upsertGitHubFile({ owner, repo, branch, path, token, content, message }) {
    const existing = await fetchGitHubFileMeta({ owner, repo, branch, path, token });
    if (existing && typeof existing.content === 'string') {
        const existingContent = base64ToUtf8(existing.content);
        if (existingContent === content) {
            return { skipped: true, path };
        }
    }

    const encodedPath = encodeGitHubContentPath(path);
    const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/contents/${encodedPath}`;
    const payload = {
        message,
        branch,
        content: utf8ToBase64(content)
    };
    if (existing && existing.sha) payload.sha = existing.sha;

    const response = await fetch(url, {
        method: 'PUT',
        headers: getGitHubDeployHeaders(token, true),
        body: JSON.stringify(payload)
    });
    if (!response.ok) {
        const apiMessage = await readGitHubApiError(response);
        throw new Error(`Unable to update ${path}: ${apiMessage}`);
    }
    return response.json();
}

function toJsDelivrPurgeUrl(url) {
    const value = String(url || '').trim();
    if (!value) return '';
    if (!/^https:\/\/cdn\.jsdelivr\.net\//i.test(value)) return '';
    return value.replace(/^https:\/\/cdn\.jsdelivr\.net\//i, 'https://purge.jsdelivr.net/');
}

async function purgeJsDelivrAsset(url) {
    const purgeUrl = toJsDelivrPurgeUrl(url);
    if (!purgeUrl) return { skipped: true, url };
    const response = await fetch(purgeUrl, { method: 'GET' });
    if (!response.ok) {
        throw new Error(`Purge failed (${response.status}) for ${url}`);
    }
    return { skipped: false, url };
}

function buildDeployCdnAssetUrls(repoSlug, branch) {
    const repo = String(repoSlug || '').trim().replace(/^\/+|\/+$/g, '');
    const ref = String(branch || '').trim();
    if (!repo) return [];
    const base = `https://cdn.jsdelivr.net/gh/${repo}`;
    const refs = [];
    if (ref) refs.push(`@${ref}`);
    refs.push('', '@master', '@main');
    const files = [
        'astig-chat-widgets.js',
        'anti-vs/astig-chat-widgets.js',
        EMBED_LEGACY_RUNTIME_JS_FILENAME,
        'astig-chat.css'
    ];
    const urls = [];
    refs.forEach((r) => {
        files.forEach((f) => {
            urls.push(`${base}${r}/${f}`);
        });
    });
    return Array.from(new Set(urls));
}

function applyCurrentConfigToRuntimeBundle(runtimeSource, configLiteral) {
    const matcher = /const defaultBundleConfig = [\s\S]*?;\r?\n\s*const rsvp = window\.RSVPChatConfig \|\| \{\};/;
    const replacement = `const defaultBundleConfig = ${configLiteral};\n    const rsvp = window.RSVPChatConfig || {};`;
    return String(runtimeSource || '').replace(matcher, replacement);
}

function stripDeployInjectedConfig(runtimeSource) {
    return String(runtimeSource || '').replace(
        /\/\*__ASTIG_DEPLOY_CONFIG_START__\*\/[\s\S]*?\/\*__ASTIG_DEPLOY_CONFIG_END__\*\/\s*/g,
        ''
    );
}

function injectDeployRuntimeConfig(runtimeSource, configLiteral, webhookUrl) {
    const cleanedRuntime = stripDeployInjectedConfig(runtimeSource);
    const webhookLiteral = JSON.stringify(webhookUrl || EMBED_DEFAULT_WEBHOOK_URL);
    const bootstrap = [
        '/*__ASTIG_DEPLOY_CONFIG_START__*/',
        '(function() {',
        '  window.RSVPChatConfig = window.RSVPChatConfig || {};',
        `  window.RSVPChatConfig.webhookUrl = ${webhookLiteral};`,
        `  window.RSVPChatConfig.fullConfig = ${configLiteral};`,
        '})();',
        '/*__ASTIG_DEPLOY_CONFIG_END__*/',
        ''
    ].join('\n');
    return `${bootstrap}${cleanedRuntime}`;
}

async function buildDeployBundleFromCurrentSettings() {
    const runtime = await fetchLocalEmbedJsFileText();
    const snapshot = getEmbedConfigSnapshot();
    normalizeRuntimeConfigShape(snapshot);
    const webhookUrl = resolveEmbedWebhookUrl();
    if (!snapshot.webhook || typeof snapshot.webhook !== 'object') snapshot.webhook = {};
    snapshot.webhook.url = webhookUrl;
    if (!snapshot.webhook.chatUrl) snapshot.webhook.chatUrl = webhookUrl;
    const configLiteral = stringifyForInlineScript(snapshot);
    const patchedDefaultsRuntime = applyCurrentConfigToRuntimeBundle(runtime.content, configLiteral);
    const runtimeWithDefaults = patchedDefaultsRuntime || runtime.content;
    const patchedRuntime = injectDeployRuntimeConfig(runtimeWithDefaults, configLiteral, webhookUrl);
    if (!patchedRuntime || !patchedRuntime.trim()) {
        throw new Error('Unable to build runtime JS for deploy.');
    }
    if (isLoaderOnlyEmbedScript(patchedRuntime)) {
        throw new Error('Generated runtime JS is invalid (loader-only).');
    }
    const css = await fetchLocalEmbedCssFileText();
    return {
        js: patchedRuntime,
        css: css.content
    };
}

async function deployCurrentSettingsToGitHub() {
    if (deployInProgress) return;
    deployInProgress = true;
    const deployBtn = document.getElementById('deployEmbedBtn');
    if (deployBtn instanceof HTMLButtonElement) deployBtn.disabled = true;

    const notif = showProgressNotification('Deploy');
    const notify = (progress, message, state = 'progress') => {
        if (notif) notif.update(progress, message, state);
    };

    try {
        notify(5, 'Saving current settings...');
        syncWebhookSettingsFromInputs();
        localStorage.setItem('chatbotConfig', JSON.stringify(config));

        notify(15, 'Resolving GitHub integration settings...');
        const { repo: repoSlug, branch, token } = getGitHubIntegrationSettingsFromInputs({ promptForToken: true });
        const { owner, repo } = parseGitHubRepoSlug(repoSlug);
        const branchInput = document.getElementById('githubBranchInput');
        const resolvedBranch = await resolveGitHubDeployBranch({
            owner,
            repo,
            token,
            preferredBranch: branch
        });
        if (resolvedBranch !== branch) {
            if (branchInput instanceof HTMLInputElement) branchInput.value = resolvedBranch;
            saveGitHubDeployTarget({ repo: repoSlug, branch: resolvedBranch });
            notify(24, `Branch "${branch}" not found. Using "${resolvedBranch}".`);
        }

        notify(30, 'Building deploy assets from current settings...');
        const bundle = await buildDeployBundleFromCurrentSettings();
        const timestamp = new Date().toISOString();

        notify(58, 'Uploading astig-chat-widgets.js...');
        await upsertGitHubFile({
            owner,
            repo,
            branch: resolvedBranch,
            path: 'astig-chat-widgets.js',
            token,
            content: bundle.js,
            message: `Deploy astig-chat-widgets.js from builder (${timestamp})`
        });

        notify(68, 'Uploading anti-vs/astig-chat-widgets.js...');
        await upsertGitHubFile({
            owner,
            repo,
            branch: resolvedBranch,
            path: 'anti-vs/astig-chat-widgets.js',
            token,
            content: bundle.js,
            message: `Deploy anti-vs/astig-chat-widgets.js from builder (${timestamp})`
        });

        notify(78, `Uploading ${EMBED_LEGACY_RUNTIME_JS_FILENAME}...`);
        await upsertGitHubFile({
            owner,
            repo,
            branch: resolvedBranch,
            path: EMBED_LEGACY_RUNTIME_JS_FILENAME,
            token,
            content: bundle.js,
            message: `Deploy ${EMBED_LEGACY_RUNTIME_JS_FILENAME} from builder (${timestamp})`
        });

        notify(88, 'Uploading astig-chat.css...');
        await upsertGitHubFile({
            owner,
            repo,
            branch: resolvedBranch,
            path: 'astig-chat.css',
            token,
            content: bundle.css,
            message: `Deploy astig-chat.css from builder (${timestamp})`
        });

        notify(95, 'Purging jsDelivr cache...');
        const purgeTargets = Array.from(new Set([
            ...buildDeployCdnAssetUrls(repoSlug, resolvedBranch),
            EMBED_DEFAULT_JS_URL,
            EMBED_DEFAULT_CSS_URL,
            resolveEmbedJsUrl(),
            resolveEmbedCssUrl(resolveEmbedJsUrl())
        ].filter(Boolean)));
        const purgeResults = await Promise.allSettled(
            purgeTargets.map((url) => purgeJsDelivrAsset(url))
        );
        const purgeFailures = purgeResults.filter((result) => result.status === 'rejected').length;

        const embedCodeOutput = document.getElementById('embedCodeOutput');
        if (embedCodeOutput instanceof HTMLTextAreaElement) {
            embedCodeOutput.value = getEmbedSnippetText();
        }
        if (purgeFailures > 0) {
            notify(100, `Deploy complete (${repoSlug}@${resolvedBranch}). CDN purge warnings: ${purgeFailures}`, 'success');
        } else {
            notify(100, `Deploy complete and CDN purged: ${repoSlug}@${resolvedBranch}`, 'success');
        }
    } catch (error) {
        const message = (error && error.message) ? error.message : 'Unknown deployment error';
        notify(100, `Deploy failed: ${message}`, 'error');
    } finally {
        deployInProgress = false;
        if (deployBtn instanceof HTMLButtonElement) deployBtn.disabled = false;
    }
}

async function copyTextToClipboard(text) {
    const value = String(text || '');
    if (!value) return false;
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(value);
            return true;
        }
    } catch (error) {
        void error;
    }

    const helper = document.createElement('textarea');
    helper.value = value;
    helper.setAttribute('readonly', '');
    helper.style.position = 'absolute';
    helper.style.left = '-9999px';
    document.body.appendChild(helper);
    helper.select();
    const copied = document.execCommand('copy');
    helper.remove();
    return !!copied;
}

function notifyEmbedAction(title, message, state = 'success') {
    const notif = showProgressNotification(title);
    if (notif) notif.update(100, message, state);
}

function initInputs() {
    // Theme Inputs
    bindInput('primaryColor', (val) => { config.theme.primaryColor = val; updateCSSVars(); });
    bindInput('bgColor', (val) => { config.theme.bgColor = val; updateCSSVars(); });
    bindInput('surfaceColor', (val) => { config.theme.surfaceColor = val; updateCSSVars(); });
    bindInput('fontFamily', (val) => { config.theme.fontFamily = val; updateCSSVars(); });
    bindInput('borderRadius', (val) => { config.theme.borderRadius = val; updateCSSVars(); });

    document.getElementById('bgMode').addEventListener('change', (e) => {
        config.theme.mode = e.target.value;
        const gradGroup = document.getElementById('gradientGroup');
        gradGroup.style.display = e.target.value === 'gradient' ? 'block' : 'none';
        updateCSSVars();
    });

    bindInput('gradientStart', (val) => { config.theme.gradient.start = val; updateCSSVars(); });
    bindInput('gradientEnd', (val) => { config.theme.gradient.end = val; updateCSSVars(); });
    const topHeroMediaTypeInput = document.getElementById('topHeroMediaType');
    const topHeroMediaUrlGroup = document.getElementById('topHeroMediaUrlGroup');
    const syncTopHeroMediaControls = () => {
        if (!topHeroMediaTypeInput || !topHeroMediaUrlGroup) return;
        topHeroMediaUrlGroup.style.display = topHeroMediaTypeInput.value === 'none' ? 'none' : 'block';
    };
    if (topHeroMediaTypeInput) {
        topHeroMediaTypeInput.addEventListener('change', (e) => {
            config.theme.topHeroMediaType = e.target.value;
            syncTopHeroMediaControls();
            updateDOM();
        });
    }
    bindInput('topHeroMediaUrl', (val) => {
        const trimmed = (val || '').trim();
        config.theme.topHeroMediaUrl = trimmed;
        // If URL is provided while type is none, auto-select a sensible media type.
        if (trimmed && (!config.theme.topHeroMediaType || config.theme.topHeroMediaType === 'none')) {
            const looksLikeVideo = /\.(mp4|webm|ogg)(\?|#|$)/i.test(trimmed);
            config.theme.topHeroMediaType = looksLikeVideo ? 'video' : 'image';
            if (topHeroMediaTypeInput) topHeroMediaTypeInput.value = config.theme.topHeroMediaType;
            syncTopHeroMediaControls();
        }
        updateDOM();
    });
    syncTopHeroMediaControls();

    // Logo
    const logoTypeInput = document.getElementById('logoType');
    logoTypeInput.addEventListener('change', (e) => {
        config.header.logoType = e.target.value;
        updateDOM();
    });

    bindInput('logoValue', (val) => {
        if (config.header.logoType === 'image') {
            config.header.logoUrl = val;
        } else {
            config.header.title = val;
            config.header.name = val;
        }
        updateDOM();
    });
    bindInput('logoSize', (val) => { config.header.logoSize = val; updateDOM(); });

    // Logo Upload
    const uploadLogoBtn = document.getElementById('uploadLogoBtn');
    const logoFileInput = document.getElementById('logoFileInput');
    if (uploadLogoBtn && logoFileInput) {
        uploadLogoBtn.addEventListener('click', () => logoFileInput.click());
        logoFileInput.addEventListener('change', (e) => handleImageUpload(e, 'logo'));
    }

    // Header Text (new)
    bindInput('headerTitleValue', (val) => {
        config.header.title = val;
        config.header.name = val;
        updateDOM();
    });
    // Legacy ID fallback for older markup
    bindInput('headerNameValue', (val) => {
        config.header.title = val;
        config.header.name = val;
        updateDOM();
    });
    bindInput('headerFontFamily', (val) => {
        config.header.fontFamily = val;
        updateDOM();
    });
    bindInput('headerNameFontSize', (val) => {
        config.header.nameFontSize = Number(val) || 15;
        updateDOM();
    });
    bindInput('headerStatusFontSize', (val) => {
        config.header.statusFontSize = Number(val) || 12;
        updateDOM();
    });
    bindInput('headerStatusValue', (val) => {
        config.header.status = val;
        updateDOM();
    });
    bindInput('headerAnimation', (val) => {
        config.header.animation = val || 'none';
        updateDOM();
    });

    // Avatar
    bindInput('assistantName', (val) => {
        if (!config.assistant || typeof config.assistant !== 'object') config.assistant = {};
        config.assistant.name = val;
        updateDOM();
    });
    bindInput('assistantAvatar', (val) => { config.header.avatar = val; updateDOM(); });
    bindInput('assistantAvatarSize', (val) => { config.header.avatarSize = val; updateDOM(); });
    bindInput('assistantStatus', (val) => { config.header.status = val; updateDOM(); });

    // Assistant Avatar Upload
    const uploadAssistantBtn = document.getElementById('uploadAssistantBtn');
    const assistantFileInput = document.getElementById('assistantFileInput');
    if (uploadAssistantBtn && assistantFileInput) {
        uploadAssistantBtn.addEventListener('click', () => assistantFileInput.click());
        assistantFileInput.addEventListener('change', (e) => handleImageUpload(e, 'assistant'));
    }

    // User Avatar
    bindInput('userAvatar', (val) => { config.user.avatar = val; });
    bindInput('userAvatarSize', (val) => { config.user.avatarSize = val; });

    // User Avatar Upload
    const uploadUserBtn = document.getElementById('uploadUserBtn');
    const userFileInput = document.getElementById('userFileInput');
    if (uploadUserBtn && userFileInput) {
        uploadUserBtn.addEventListener('click', () => userFileInput.click());
        userFileInput.addEventListener('change', (e) => handleImageUpload(e, 'user'));
    }

    // Launcher
    document.getElementById('launcherIconType').addEventListener('change', (e) => {
        config.launcher.iconType = e.target.value;
        const iconInput = document.getElementById('launcherIcon');

        // Sync input value to the correct config property on switch
        if (iconInput) {
            if (e.target.value === 'image') {
                config.launcher.imageUrl = iconInput.value;
                iconInput.placeholder = 'Image URL';
            } else {
                config.launcher.icon = iconInput.value;
                iconInput.placeholder = 'Name or Image URL';
            }
        }

        const browseLink = document.getElementById('launcherIconLink');
        if (browseLink) browseLink.style.display = e.target.value === 'image' ? 'none' : 'inline-block';
        updateDOM();
    });

    bindInput('launcherIcon', (val) => {
        if (config.launcher.iconType === 'image') {
            config.launcher.imageUrl = val;
        } else {
            config.launcher.icon = val;
        }
        updateDOM();
    });

    const uploadLauncherBtn = document.getElementById('uploadLauncherBtn');
    const launcherFileInput = document.getElementById('launcherFileInput');
    if (uploadLauncherBtn && launcherFileInput) {
        uploadLauncherBtn.addEventListener('click', () => launcherFileInput.click());
        launcherFileInput.addEventListener('change', (e) => handleImageUpload(e, 'launcher'));
    }

    document.getElementById('launcherBadgeEnabled').addEventListener('change', (e) => {
        config.launcher.badgeEnabled = e.target.checked;
        updateDOM();
    });

    bindInput('launcherText', (val) => { config.launcher.text = val; updateDOM(); });
    document.getElementById('launcherBubbleEnabled').addEventListener('change', (e) => {
        config.launcher.bubbleEnabled = e.target.checked;
        updateDOM();
    });
    bindInput('launcherBubbleText', (val) => { config.launcher.bubbleText = val; updateDOM(); });
    document.getElementById('launcherBubbleMode').addEventListener('change', (e) => {
        config.launcher.bubbleMode = e.target.value;
        updateDOM();
    });
    document.getElementById('launcherBubbleTimed').addEventListener('change', (e) => {
        config.launcher.bubbleTimed = e.target.checked;
        updateDOM();
    });
    bindInput('launcherBubbleDelaySec', (val) => {
        const n = Number(val);
        config.launcher.bubbleDelaySec = Number.isFinite(n) ? Math.max(0, n) : 5;
        updateDOM();
    });
    bindInput('launcherBubbleDurationSec', (val) => {
        const n = Number(val);
        config.launcher.bubbleDurationSec = Number.isFinite(n) ? Math.max(0, n) : 10;
        updateDOM();
    });
    const launcherBubblePresetBtn = document.getElementById('launcherBubblePresetBtn');
    if (launcherBubblePresetBtn) {
        launcherBubblePresetBtn.addEventListener('click', () => {
            config.launcher.bubbleTimed = true;
            config.launcher.bubbleDelaySec = 5;
            config.launcher.bubbleDurationSec = 10;
            const timedEl = document.getElementById('launcherBubbleTimed');
            const delayEl = document.getElementById('launcherBubbleDelaySec');
            const durationEl = document.getElementById('launcherBubbleDurationSec');
            if (timedEl) timedEl.checked = true;
            if (delayEl) delayEl.value = '5';
            if (durationEl) durationEl.value = '10';
            updateDOM();
        });
    }
    bindInput('launcherSize', (val) => { config.launcher.size = val; updateDOM(); });

    document.getElementById('launcherBgStyle').addEventListener('change', (e) => {
        config.launcher.bgStyle = e.target.value;
        document.getElementById('launcherGradientGroup').style.display = e.target.value === 'gradient' ? 'block' : 'none';
        document.getElementById('launcherBgColorLabel').innerText = e.target.value === 'gradient' ? 'Gradient Start' : 'Background Color';
        updateDOM();
    });
    bindInput('launcherBgColor', (val) => { config.launcher.bgColor = val; updateDOM(); });
    bindInput('launcherGradientEnd', (val) => { config.launcher.gradientEnd = val; updateDOM(); });

    document.getElementById('launcherAnimation').addEventListener('change', (e) => {
        config.launcher.animation = e.target.value;
        updateDOM();
    });
    document.getElementById('launcherPosition').addEventListener('change', (e) => {
        config.launcher.position = e.target.value;
        updateDOM();
    });

    // Video
    const videoLayoutMode = document.getElementById('videoLayoutMode');
    if (videoLayoutMode) {
        videoLayoutMode.addEventListener('change', (e) => {
            config.video.layout = e.target.value;
            renderChat();
        });
    }
    const videoTurnOffMode = document.getElementById('videoTurnOffMode');
    if (videoTurnOffMode) {
        videoTurnOffMode.addEventListener('change', (e) => {
            config.video.hideBehavior = e.target.value;
            hasScheduledVideoHide = false;
            if (conversationVideoHideTimer) {
                clearTimeout(conversationVideoHideTimer);
                conversationVideoHideTimer = null;
            }
            renderChat();
        });
    }
    bindInput('videoUrl', (val) => {
        config.video.url = (val || '').trim();
        renderChat();
    });
    bindInput('videoImageUrl', (val) => {
        config.video.imageUrl = (val || '').trim();
        renderChat();
    });
    const videoLoopEnabled = document.getElementById('videoLoopEnabled');
    if (videoLoopEnabled) {
        videoLoopEnabled.addEventListener('change', (e) => {
            config.video.loop = !!e.target.checked;
            renderChat();
        });
    }

    // Questions
    document.getElementById('addQuestionBtn').addEventListener('click', () => {
        config.questions.push({ id: Date.now(), text: '', type: 'text', displayMode: 'instant' });
        renderQuestions();
        scheduleAutoSave();
    });
    document.getElementById('questionsBtnStyle').addEventListener('change', (e) => {
        config.questionsStyle = e.target.value;
    });



    // Header Color
    bindInput('headerBgColor', (val) => {
        config.theme.headerBgColor = val;
        updateDOM();
    });
    bindInput('headerTextColor', (val) => {
        config.theme.headerTextColor = val;
        document.querySelector('.chat-widget__header-name').style.color = val;
    });

    // Webhook
    bindInput('webhookUrl', (val) => {
        config.webhook.url = val;
        updateBackendWebhookNotices();
    });
    bindInput('webhookTestUrl', (val) => {
        config.webhook.testUrl = val;
        updateBackendWebhookNotices();
    });
    bindInput('webhookChatUrl', (val) => {
        config.webhook.chatUrl = val;
        updateBackendWebhookNotices();
    });
    bindInput('externalJsUrl', (val) => { config.webhook.externalJsUrl = val; });

    // Embed
    const generateEmbedCodeBtn = document.getElementById('generateEmbedCodeBtn');
    const embedCodeOutput = document.getElementById('embedCodeOutput');
    const copyEmbedCodeBtn = document.getElementById('copyEmbedCodeBtn');
    const downloadEmbedJsBtn = document.getElementById('downloadEmbedJsBtn');
    const downloadEmbedCssBtn = document.getElementById('downloadEmbedCssBtn');
    const deployEmbedBtn = document.getElementById('deployEmbedBtn');

    if (generateEmbedCodeBtn && embedCodeOutput) {
        generateEmbedCodeBtn.addEventListener('click', () => {
            embedCodeOutput.value = getEmbedSnippetText();
            notifyEmbedAction('Embed Code', 'Static embed code generated. Click Deploy to sync latest builder UX.', 'success');
        });
    }

    if (copyEmbedCodeBtn && embedCodeOutput) {
        copyEmbedCodeBtn.addEventListener('click', async () => {
            if (!embedCodeOutput.value.trim()) {
                embedCodeOutput.value = getEmbedSnippetText();
            }
            const copied = await copyTextToClipboard(embedCodeOutput.value);
            notifyEmbedAction('Embed Code', copied ? 'Embed code copied to clipboard.' : 'Unable to copy embed code.', copied ? 'success' : 'error');
        });
    }

    if (downloadEmbedJsBtn) {
        downloadEmbedJsBtn.addEventListener('click', async () => {
            try {
                const { content, path } = await fetchLocalEmbedJsFileText();
                const blob = new Blob([content], { type: 'application/javascript;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const anchorNode = document.createElement('a');
                anchorNode.href = url;
                anchorNode.download = EMBED_LOCAL_JS_FILENAME;
                document.body.appendChild(anchorNode);
                anchorNode.click();
                anchorNode.remove();
                setTimeout(() => URL.revokeObjectURL(url), 1500);
                notifyEmbedAction('Embed JS', `${EMBED_LOCAL_JS_FILENAME} download started (${path}).`, 'success');
            } catch (error) {
                notifyEmbedAction('Embed JS', `Unable to download JS file: ${error.message}`, 'error');
            }
        });
    }

    if (downloadEmbedCssBtn) {
        downloadEmbedCssBtn.addEventListener('click', async () => {
            try {
                const { content: cssContent, path } = await fetchLocalEmbedCssFileText();
                const blob = new Blob([cssContent], { type: 'text/css;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const anchorNode = document.createElement('a');
                anchorNode.href = url;
                anchorNode.download = EMBED_LOCAL_CSS_FILENAME;
                document.body.appendChild(anchorNode);
                anchorNode.click();
                anchorNode.remove();
                setTimeout(() => URL.revokeObjectURL(url), 1500);
                notifyEmbedAction('Embed CSS', `${EMBED_LOCAL_CSS_FILENAME} download started (${path}).`, 'success');
            } catch (error) {
                notifyEmbedAction('Embed CSS', `Unable to download CSS file: ${error.message}`, 'error');
            }
        });
    }

    if (deployEmbedBtn) {
        deployEmbedBtn.addEventListener('click', async () => {
            await deployCurrentSettingsToGitHub();
        });
    }

    // Footer
    bindInput('footerTextValue', (val) => { config.footer.text = val; updateDOM(); });
    bindInput('footerLinkValue', (val) => { config.footer.url = val; updateDOM(); });
    bindInput('footerFontFamily', (val) => { config.footer.fontFamily = val; updateDOM(); });
    bindInput('footerAnimation', (val) => { config.footer.animation = val; updateDOM(); });
    bindInput('footerTextColor', (val) => { config.footer.textColor = val; updateDOM(); });
    bindInput('footerFontSize', (val) => { config.footer.fontSize = val; updateDOM(); });
    bindInput('footerPosition', (val) => { config.footer.position = val; updateDOM(); });

    const telemetryAll = document.getElementById('telemetryShowAll');
    const telemetryPipeline = document.getElementById('telemetryShowPipeline');
    const telemetryRealtime = document.getElementById('telemetryShowRealtime');
    const telemetryFeed = document.getElementById('telemetryShowRealtimeFeed');

    if (telemetryAll) {
        telemetryAll.addEventListener('change', (e) => {
            const enabled = !!e.target.checked;
            if (!config.ui || typeof config.ui !== 'object') config.ui = {};
            config.ui.showPipelineMonitor = enabled;
            config.ui.showRealtimeTelemetry = enabled;
            config.ui.showRealtimeFeed = enabled;
            if (telemetryPipeline) telemetryPipeline.checked = enabled;
            if (telemetryRealtime) telemetryRealtime.checked = enabled;
            if (telemetryFeed) telemetryFeed.checked = enabled;
            updateTelemetryVisibility();
        });
    }
    if (telemetryPipeline) {
        telemetryPipeline.addEventListener('change', (e) => {
            if (!config.ui || typeof config.ui !== 'object') config.ui = {};
            config.ui.showPipelineMonitor = !!e.target.checked;
            if (telemetryAll) {
                telemetryAll.checked = !!(config.ui.showPipelineMonitor && config.ui.showRealtimeTelemetry && config.ui.showRealtimeFeed);
            }
            updateTelemetryVisibility();
        });
    }
    if (telemetryRealtime) {
        telemetryRealtime.addEventListener('change', (e) => {
            if (!config.ui || typeof config.ui !== 'object') config.ui = {};
            config.ui.showRealtimeTelemetry = !!e.target.checked;
            if (telemetryAll) {
                telemetryAll.checked = !!(config.ui.showPipelineMonitor && config.ui.showRealtimeTelemetry && config.ui.showRealtimeFeed);
            }
            updateTelemetryVisibility();
        });
    }
    if (telemetryFeed) {
        telemetryFeed.addEventListener('change', (e) => {
            if (!config.ui || typeof config.ui !== 'object') config.ui = {};
            config.ui.showRealtimeFeed = !!e.target.checked;
            if (telemetryAll) {
                telemetryAll.checked = !!(config.ui.showPipelineMonitor && config.ui.showRealtimeTelemetry && config.ui.showRealtimeFeed);
            }
            updateTelemetryVisibility();
        });
    }

    document.getElementById('webhookMode').addEventListener('change', (e) => {
        config.webhook.production = !e.target.checked; // If checked (Test) -> production false
        document.getElementById('testUrlGroup').style.display = e.target.checked ? 'block' : 'none';
        document.getElementById('webhookUrl').parentElement.style.display = e.target.checked ? 'none' : 'block';
        updateBackendWebhookNotices();
    });

    document.getElementById('testWebhookBtn').addEventListener('click', testWebhook);


    // Chat Inputs
    sendBtn.addEventListener('click', handleUserSend);
    input.addEventListener('input', () => {
        backendTrackDraftInput(input.value || '');
    });
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleUserSend();
    });

    const previewRestartBtn = document.getElementById('previewRestartBtn');
    if (previewRestartBtn) previewRestartBtn.addEventListener('click', restartChat);

    const previewDownloadBtn = document.getElementById('previewDownloadBtn');
    if (previewDownloadBtn) previewDownloadBtn.addEventListener('click', downloadChat);

    const previewUploadBtn = document.getElementById('previewUploadBtn');
    const previewFileInput = document.getElementById('previewFileInput');
    if (previewUploadBtn && previewFileInput) {
        previewUploadBtn.addEventListener('click', () => {
            if (isSupportReferenceTemplate()) {
                if (input) input.focus();
                return;
            }
            previewFileInput.click();
        });
        previewFileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const file = e.target.files[0];
                handleUserSend(`[File attached: ${file.name}]`);
                e.target.value = '';
            }
        });
    }

    // Toolbar Inputs
    document.getElementById('restartBtn').addEventListener('click', restartChat);
    document.getElementById('resetBtn').addEventListener('click', resetProject);
    const resetPositionsBtn = document.getElementById('resetPositionsBtn');
    if (resetPositionsBtn) resetPositionsBtn.addEventListener('click', resetPositionsOnly);
    const saveLocalBtn = document.getElementById('saveLocalBtn');
    if (saveLocalBtn) saveLocalBtn.addEventListener('click', saveToLocalStorage);
    document.getElementById('saveBtn').addEventListener('click', openSaveProjectModal);
    const loadBtn = document.getElementById('loadBtn');
    if (loadBtn) loadBtn.addEventListener('click', () => document.getElementById('fileInput').click());
    document.getElementById('fileInput').addEventListener('change', loadProject);
    document.getElementById('previewExternalBtn').addEventListener('click', openExternalPreview);

    initSaveProjectModal();
    initAboutModal();

    // View Toggles
    document.getElementById('viewMobile').addEventListener('click', () => {
        widget.classList.add('mobile-view');
        widget.classList.remove('desktop-view');
    });
    document.getElementById('viewDesktop').addEventListener('click', () => {
        widget.classList.remove('mobile-view');
        widget.classList.add('desktop-view');
    });

    initApplyButtons();
}

function syncWebhookSettingsFromInputs() {
    const webhookUrlInput = document.getElementById('webhookUrl');
    const webhookTestUrlInput = document.getElementById('webhookTestUrl');
    const webhookChatUrlInput = document.getElementById('webhookChatUrl');
    const externalJsUrlInput = document.getElementById('externalJsUrl');
    const webhookModeInput = document.getElementById('webhookMode');

    if (!config.webhook || typeof config.webhook !== 'object') config.webhook = {};
    if (webhookUrlInput) config.webhook.url = (webhookUrlInput.value || '').trim();
    if (webhookTestUrlInput) config.webhook.testUrl = (webhookTestUrlInput.value || '').trim();
    if (webhookChatUrlInput) config.webhook.chatUrl = (webhookChatUrlInput.value || '').trim();
    if (externalJsUrlInput) {
        const normalized = normalizeAstigJsDelivrUrl((externalJsUrlInput.value || '').trim());
        config.webhook.externalJsUrl = normalized || EMBED_DEFAULT_JS_URL;
        externalJsUrlInput.value = config.webhook.externalJsUrl;
    }
    if (webhookModeInput) config.webhook.production = !webhookModeInput.checked;
    normalizeRuntimeConfigShape(config);
    updateBackendWebhookNotices();
}

function applyTemplatePreset(templateId) {
    if (!templateId || !CHATBOT_TEMPLATES[templateId]) return;
    maximumSupportInputUnlocked = false;
    const webhookSnapshot = JSON.parse(JSON.stringify(config.webhook || defaultConfig.webhook));
    const templateConfig = CHATBOT_TEMPLATES[templateId];
    const merged = deepMerge(JSON.parse(JSON.stringify(defaultConfig)), templateConfig);
    merged.webhook = webhookSnapshot;
    applyConfig(merged);

    const notif = showProgressNotification('Template Applied');
    if (notif) {
        notif.update(100, `Template "${templateId}" applied successfully (100%)`, 'success');
    }
    scheduleAutoSave();
    if (isCreateBotMode) {
        setCreateBotMode(false, { restoreFocus: false });
    }
}

function initApplyButtons() {
    document.getElementById('applyThemeBtn').addEventListener('click', (e) => {
        syncThemeSettingsFromInputs();
        updateCSSVars();
        updateDOM();
        showFeedback(e.target);
        notifyApplyResult('Theme Settings', 'Theme applied successfully (100%)');
    });

    document.getElementById('applyLogoBtn').addEventListener('click', (e) => {
        updateDOM();
        renderChat();
        showFeedback(e.target);
        notifyApplyResult('Logo Settings', 'Logo applied successfully (100%)');
    });

    document.getElementById('applyAvatarBtn').addEventListener('click', (e) => {
        updateDOM();
        updateCSSVars();
        renderChat(); // Re-render chat to apply new avatar to messages
        showFeedback(e.target);
        notifyApplyResult('Avatars', 'Avatars applied successfully (100%)');
    });

    document.getElementById('applyLauncherBtn').addEventListener('click', (e) => {
        updateDOM();
        showFeedback(e.target);
        notifyApplyResult('Launcher Settings', 'Launcher settings applied successfully (100%)');
    });

    document.getElementById('applyVideoBtn').addEventListener('click', (e) => {
        renderChat();
        showFeedback(e.target);
        notifyApplyResult('Video Settings', 'Video settings applied successfully (100%)');
    });

    document.getElementById('applyQuestionsBtn').addEventListener('click', (e) => {
        renderQuestions();
        restartChat(); // Restart chat to show new flow immediately
        showFeedback(e.target);
        notifyApplyResult('Questions Flow', 'Question flow applied successfully (100%)');
    });

    document.getElementById('applyHeaderBtn').addEventListener('click', (e) => {
        syncHeaderSettingsFromInputs();
        updateDOM();
        showFeedback(e.target);
        notifyApplyResult('Header Settings', 'Header settings applied successfully (100%)');
    });

    document.getElementById('applyWebhookBtn').addEventListener('click', (e) => {
        syncWebhookSettingsFromInputs();
        const hasUrl = config.webhook.url || config.webhook.testUrl || config.webhook.chatUrl;
        if (!hasUrl) {
            notifyApplyResult('Webhook Settings', 'Please enter a Webhook URL first.', 'error');
            return;
        }
        try {
            localStorage.setItem('chatbotConfig', JSON.stringify(config));
        } catch (err) {
            console.error('Failed to save webhook settings:', err);
        }
        showFeedback(e.target);
        notifyApplyResult('Webhook Settings', 'Webhook settings applied successfully (100%)');
    });

    document.getElementById('applyFooterBtn').addEventListener('click', (e) => {
        updateDOM();
        showFeedback(e.target);
        notifyApplyResult('Footer Settings', 'Footer applied successfully (100%)');
    });
}

function showFeedback(btn) {
    const originalText = btn.textContent;
    btn.textContent = 'Applied!';
    const originalColor = btn.style.backgroundColor;
    btn.style.backgroundColor = '#2ecc71'; // Success Green
    btn.style.borderColor = '#2ecc71';

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = originalColor;
        btn.style.borderColor = '';
    }, 1000);
}

function notifyApplyResult(title, message, state = 'success') {
    const notif = showProgressNotification(title);
    if (!notif) return;
    notif.update(100, message, state);
}

function bindInput(id, callback) {
    const el = document.getElementById(id);
    if (!el) return;

    const onValueChange = (e) => callback(e.target.value);
    el.addEventListener('input', onValueChange);
    el.addEventListener('change', onValueChange);
}

function backendNowLabel() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function backendSet3dSymbol(el, isGood, goodLabel, badLabel) {
    if (!el) return;
    el.classList.remove('backend-status-symbol--good', 'backend-status-symbol--bad');
    if (isGood) {
        el.classList.add('backend-status-symbol--good');
        el.textContent = '✓';
        if (goodLabel) el.setAttribute('aria-label', goodLabel);
    } else {
        el.classList.add('backend-status-symbol--bad');
        el.textContent = '✕';
        if (badLabel) el.setAttribute('aria-label', badLabel);
    }
}

function updateBackendWebhookNotices() {
    const productionUrl = (config?.webhook?.url || '').trim();
    const testUrl = (config?.webhook?.testUrl || '').trim();
    const chatUrl = (config?.webhook?.chatUrl || '').trim();
    const productionMode = !!config?.webhook?.production;
    const activeUrl = (productionMode ? productionUrl : testUrl) || chatUrl;
    const connected = !!activeUrl;
    const productionIsValidActive = productionMode && !!productionUrl;
    const testIsValidActive = !productionMode && !!testUrl;

    if (backendWebhookConnCard) {
        backendWebhookConnCard.classList.toggle('backend-notice--connected', connected);
        backendWebhookConnCard.classList.toggle('backend-notice--disconnected', !connected);
    }
    backendSet3dSymbol(
        backendWebhookConnState,
        connected,
        'Webhook connected',
        'Webhook disconnected'
    );

    if (backendWebhookModeCard) {
        backendWebhookModeCard.classList.toggle('backend-notice--production', productionMode);
        backendWebhookModeCard.classList.toggle('backend-notice--test', !productionMode);
    }
    backendSet3dSymbol(
        backendWebhookProdState,
        productionIsValidActive,
        'Production URL active',
        'Production URL inactive'
    );
    backendSet3dSymbol(
        backendWebhookTestState,
        testIsValidActive,
        'Test URL active',
        'Test URL inactive'
    );
}

function backendSetBadge(state, text) {
    if (!backendStateBadge) return;
    backendStateBadge.className = `backend-state backend-state--${state}`;
    backendStateBadge.textContent = text;
}

function backendSetOverall(progress, text) {
    const val = Math.max(0, Math.min(100, Math.round(Number(progress) || 0)));
    if (backendOverallBar) backendOverallBar.style.width = `${val}%`;
    if (backendOverallLabel) backendOverallLabel.textContent = `${val}%`;
    if (backendOverallText && text) backendOverallText.textContent = text;
}

function backendSetStepPercent(stage, percent) {
    const value = Math.max(0, Math.min(100, Math.round(Number(percent) || 0)));
    backendTelemetry.stageProgress[stage] = Math.max(backendTelemetry.stageProgress[stage] || 0, value);
    const applied = backendTelemetry.stageProgress[stage];
    if (backendStageBarEls[stage]) backendStageBarEls[stage].style.width = `${applied}%`;
    if (backendStagePctEls[stage]) backendStagePctEls[stage].textContent = `${applied}%`;
}

function backendAddLog(message, kind = 'info') {
    if (!backendLogList) return;
    const row = document.createElement('div');
    row.className = `backend-log${kind === 'error' ? ' backend-log--error' : kind === 'success' ? ' backend-log--success' : ''}`;
    row.innerHTML = `<span>${message}</span><span class="backend-log__time">${backendNowLabel()}</span>`;
    backendLogList.prepend(row);
    while (backendLogList.children.length > 16) backendLogList.removeChild(backendLogList.lastChild);
}

function resetRawTelemetryFeed() {
    rawTelemetryLines = [];
    if (previewRawTelemetryBody) {
        previewRawTelemetryBody.textContent = 'Waiting for webhook activity...';
    }
}

function appendRawTelemetryLine(label, payload) {
    if (!previewRawTelemetryBody) return;
    const text = String(payload ?? '').replace(/\s+$/g, '');
    const line = `[${backendNowLabel()}] ${label}: ${text || '(empty)'}`;
    rawTelemetryLines.unshift(line);
    if (rawTelemetryLines.length > RAW_TELEMETRY_MAX_LINES) {
        rawTelemetryLines = rawTelemetryLines.slice(0, RAW_TELEMETRY_MAX_LINES);
    }
    previewRawTelemetryBody.textContent = rawTelemetryLines.join('\n');
}

function backendUpdateFlowClasses(activeStage, mode = 'active') {
    const stageIndex = BACKEND_STAGE_ORDER.indexOf(activeStage);
    BACKEND_STAGE_ORDER.forEach((stage, idx) => {
        const el = backendStageEls[stage];
        if (!el) return;
        el.classList.remove('is-active', 'is-done', 'is-error');
        if (mode === 'error' && idx === stageIndex) {
            el.classList.add('is-error');
        } else if (mode === 'done' || idx < stageIndex) {
            el.classList.add('is-done');
        } else if (idx === stageIndex) {
            el.classList.add('is-active');
        }
    });

    backendArrowEls.forEach((arrow, idx) => {
        if (!arrow) return;
        arrow.classList.remove('is-active', 'is-done');
        if (mode === 'done' || idx < stageIndex - 1) arrow.classList.add('is-done');
        else if (idx === stageIndex - 1) arrow.classList.add(mode === 'error' ? 'is-done' : 'is-active');
    });
}

function backendAdvanceStage(stage, percent, description) {
    if (!backendPanel || !BACKEND_STAGE_ORDER.includes(stage)) return;
    backendTelemetry.stage = stage;
    backendSetStepPercent(stage, percent);
    backendUpdateFlowClasses(stage, 'active');
    backendSetOverall(percent, description || 'Processing request...');
}

function backendStartTransfer(payloadText = '') {
    if (!backendPanel) return;
    backendTelemetry.draftActive = false;
    backendTelemetry.draftChars = 0;
    if (backendTelemetry.pendingProcessingTimer) {
        clearTimeout(backendTelemetry.pendingProcessingTimer);
        backendTelemetry.pendingProcessingTimer = null;
    }
    BACKEND_STAGE_ORDER.forEach((stage) => {
        backendTelemetry.stageProgress[stage] = 0;
        backendSetStepPercent(stage, 0);
    });
    backendUpdateFlowClasses('outbound', 'active');
    backendSetBadge('active', 'Live');
    backendSetOverall(8, 'Preparing payload for webhook');
    if (backendSessionIdEl) backendSessionIdEl.textContent = `Session: ${webhookSessionId || 'pending'}`;
    const len = String(payloadText || '').trim().length;
    backendAddLog(`Outgoing payload queued (${len} chars)`, 'info');
}

function backendTrackDraftInput(draftText = '') {
    if (!backendPanel) return;
    const len = String(draftText || '').trim().length;

    if (len <= 0) {
        if (backendTelemetry.draftActive) {
            backendTelemetry.draftActive = false;
            backendTelemetry.draftChars = 0;
            BACKEND_STAGE_ORDER.forEach((stage) => {
                backendTelemetry.stageProgress[stage] = 0;
                backendSetStepPercent(stage, 0);
            });
            backendUpdateFlowClasses('outbound', 'active');
            backendSetBadge('idle', 'Idle');
            backendSetOverall(0, 'No active webhook transfer');
            backendAddLog('Draft cleared. Monitor is idle.', 'info');
        }
        return;
    }

    const draftProgress = Math.max(8, Math.min(32, 8 + Math.round(len / 3)));
    backendTelemetry.stage = 'outbound';
    backendSetStepPercent('outbound', draftProgress);
    backendSetStepPercent('processing', 0);
    backendSetStepPercent('inbound', 0);
    backendSetStepPercent('render', 0);
    backendUpdateFlowClasses('outbound', 'active');
    backendSetBadge('active', 'Live');
    backendSetOverall(draftProgress, `Draft detected (${len} chars). Preparing automation request...`);

    if (!backendTelemetry.draftActive) {
        if (!webhookSessionId) webhookSessionId = createStableSessionId('builder');
        if (backendSessionIdEl) backendSessionIdEl.textContent = `Session: ${webhookSessionId}`;
        backendAddLog(`Input detected (${len} chars). Live telemetry started.`, 'info');
    } else if (Math.abs(len - backendTelemetry.draftChars) >= 20) {
        backendAddLog(`Draft updated (${len} chars).`, 'info');
    }

    backendTelemetry.draftActive = true;
    backendTelemetry.draftChars = len;
}

function backendCompleteTransfer(summaryText) {
    if (!backendPanel) return;
    BACKEND_STAGE_ORDER.forEach((stage) => backendSetStepPercent(stage, 100));
    backendUpdateFlowClasses('render', 'done');
    backendSetBadge('done', 'Done');
    backendSetOverall(100, 'Data returned from n8n and rendered');
    backendAddLog(`Response rendered${summaryText ? `: ${summaryText}` : ''}`, 'success');
}

function backendFailTransfer(message) {
    if (!backendPanel) return;
    const failedStage = backendTelemetry.stage || 'processing';
    backendUpdateFlowClasses(failedStage, 'error');
    backendSetBadge('error', 'Error');
    backendSetOverall(100, 'Webhook transfer failed');
    backendAddLog(message || 'Unknown webhook error', 'error');
}

function initBackendTelemetryPanel() {
    if (!backendPanel) return;
    BACKEND_STAGE_ORDER.forEach((stage) => {
        backendTelemetry.stageProgress[stage] = 0;
        backendSetStepPercent(stage, 0);
    });
    backendUpdateFlowClasses('outbound', 'active');
    backendSetBadge('idle', 'Idle');
    backendSetOverall(0, 'No active webhook transfer');
    backendTelemetry.draftActive = false;
    backendTelemetry.draftChars = 0;
    updateBackendWebhookNotices();
    if (backendSessionIdEl) backendSessionIdEl.textContent = 'Session: waiting...';
    if (backendLogList) backendLogList.innerHTML = '';
    backendAddLog('Monitor ready. Awaiting webhook activity.', 'info');
}

function scheduleLauncherBadgeVisibility(launcher, badgeEl) {
    if (!launcher || !badgeEl) return;
    if (launcher.__badgeShowTimer) clearTimeout(launcher.__badgeShowTimer);
    if (launcher.__badgeHideTimer) clearTimeout(launcher.__badgeHideTimer);

    badgeEl.style.display = 'none';
    launcher.__badgeShowTimer = setTimeout(() => {
        if (!launcher.contains(badgeEl)) return;
        badgeEl.style.display = 'flex';
        launcher.__badgeHideTimer = setTimeout(() => {
            if (launcher.contains(badgeEl)) badgeEl.style.display = 'none';
        }, 15000);
    }, 5000);
}

function scheduleLauncherBubbleVisibility(launcher, bubbleEl, opts = {}) {
    if (!launcher || !bubbleEl) return;
    if (launcher.__bubbleShowTimer) clearTimeout(launcher.__bubbleShowTimer);
    if (launcher.__bubbleHideTimer) clearTimeout(launcher.__bubbleHideTimer);

    const showNow = () => {
        if (!launcher.contains(bubbleEl)) return;
        bubbleEl.style.display = 'block';
        if (typeof opts.onShow === 'function') opts.onShow();
    };

    if (!opts.timed) {
        showNow();
        return;
    }

    const delayMs = Math.max(0, Number(opts.delaySec ?? 5)) * 1000;
    const durationMs = Math.max(0, Number(opts.durationSec ?? 10)) * 1000;
    bubbleEl.style.display = 'none';
    launcher.__bubbleShowTimer = setTimeout(() => {
        showNow();
        if (durationMs > 0) {
            launcher.__bubbleHideTimer = setTimeout(() => {
                if (launcher.contains(bubbleEl)) bubbleEl.style.display = 'none';
            }, durationMs);
        }
    }, delayMs);
}

function typewriteIntoElement(targetEl, text, stepMs = 24) {
    if (!targetEl) return;
    if (targetEl.__typewriterTimer) clearInterval(targetEl.__typewriterTimer);
    const full = String((text !== undefined && text !== null ? text : (targetEl.dataset && targetEl.dataset.fullText)) || '');
    if (targetEl.dataset) targetEl.dataset.fullText = full;
    targetEl.textContent = '';
    if (!full) return;
    let i = 0;
    const maxMs = Math.max(250, (Math.max(12, Number(stepMs) || 24) * full.length) + 220);
    targetEl.__typewriterTimer = setInterval(() => {
        i += 1;
        targetEl.textContent = full.slice(0, i);
        if (i >= full.length) {
            clearInterval(targetEl.__typewriterTimer);
            targetEl.__typewriterTimer = null;
        }
    }, Math.max(12, Number(stepMs) || 24));
    // Safety net: never leave the bubble empty if animation gets interrupted.
    setTimeout(() => {
        if (!targetEl || !targetEl.isConnected) return;
        if (!targetEl.textContent && full) targetEl.textContent = full;
    }, maxMs);
}

function renderLauncherMessageBubble(launcher, opts = {}) {
    if (!launcher) return null;
    const enabled = !!opts.enabled;
    const rawText = (opts.text || '').toString().trim();
    if (!enabled || !rawText) return null;

    const bubble = document.createElement('div');
    bubble.className = 'cw-launcher-message';

    const pos = (opts.position || 'bottom-right').toString();
    if (pos.includes('right')) bubble.classList.add('pos-left');
    else bubble.classList.add('pos-right');
    if (pos.includes('top')) bubble.classList.add('pos-below');
    else bubble.classList.add('pos-above');

    const textEl = document.createElement('span');
    textEl.className = 'cw-launcher-message__text';
    textEl.dataset.fullText = rawText;
    textEl.setAttribute('data-bubble-text', encodeURIComponent(rawText));
    textEl.style.color = '#1f2937';
    bubble.appendChild(textEl);

    const tail = document.createElement('span');
    tail.className = 'cw-launcher-message__tail';
    bubble.appendChild(tail);

    launcher.appendChild(bubble);

    const renderBubbleText = () => {
        if (opts.mode === 'typewriter') typewriteIntoElement(textEl, rawText, 22);
        else textEl.textContent = rawText;
    };

    scheduleLauncherBubbleVisibility(launcher, bubble, {
        timed: !!opts.timed,
        delaySec: opts.delaySec,
        durationSec: opts.durationSec,
        onShow: renderBubbleText
    });

    return bubble;
}

function updateCSSVars() {
    const root = widget.style;
    root.setProperty('--w-accent', config.theme.primaryColor);
    root.setProperty('--w-bg', config.theme.bgColor); // Default bg
    root.setProperty('--w-surface', config.theme.surfaceColor);
    root.setProperty('--font-family', config.theme.fontFamily);
    root.setProperty('--w-radius', `${config.theme.borderRadius}px`);

    // Background Mode Logic
    widget.classList.remove('bg-glass', 'bg-frosted', 'mode-transparent');
    widget.style.background = config.theme.bgColor; // Reset to solid
    widget.style.backgroundImage = '';

    if (config.theme.mode === 'transparent') {
        widget.style.background = 'transparent';
        widget.classList.add('mode-transparent');
    } else if (config.theme.mode === 'glass') {
        widget.classList.add('bg-glass');
    } else if (config.theme.mode === 'frosted') {
        widget.classList.add('bg-frosted');
    } else if (config.theme.mode === 'gradient') {
        widget.style.background = `linear-gradient(135deg, ${config.theme.gradient.start}, ${config.theme.gradient.end})`;
    }

    // Keep message-area background in sync with theme mode, including template styles.
    const messageArea = document.getElementById('previewMsgList');
    if (messageArea) {
        messageArea.style.backgroundImage = '';
        if (config.theme.mode === 'transparent') {
            messageArea.style.background = 'transparent';
        } else if (config.theme.mode === 'gradient') {
            messageArea.style.background = `linear-gradient(135deg, ${config.theme.gradient.start}, ${config.theme.gradient.end})`;
        } else {
            messageArea.style.background = config.theme.bgColor;
        }
    }

    // Also update launcher background
    const launcher = document.getElementById('previewLauncher');
    if (launcher) launcher.style.background = config.launcher.bgColor;
}

function syncThemeSettingsFromInputs() {
    const primaryColor = document.getElementById('primaryColor');
    const bgColor = document.getElementById('bgColor');
    const surfaceColor = document.getElementById('surfaceColor');
    const fontFamily = document.getElementById('fontFamily');
    const borderRadius = document.getElementById('borderRadius');
    const bgMode = document.getElementById('bgMode');
    const gradientStart = document.getElementById('gradientStart');
    const gradientEnd = document.getElementById('gradientEnd');

    if (!config.theme || typeof config.theme !== 'object') config.theme = {};
    if (!config.theme.gradient || typeof config.theme.gradient !== 'object') config.theme.gradient = {};

    if (primaryColor) config.theme.primaryColor = primaryColor.value;
    if (bgColor) config.theme.bgColor = bgColor.value;
    if (surfaceColor) config.theme.surfaceColor = surfaceColor.value;
    if (fontFamily) config.theme.fontFamily = fontFamily.value;
    if (borderRadius) config.theme.borderRadius = Number(borderRadius.value) || config.theme.borderRadius || 20;
    if (bgMode) config.theme.mode = bgMode.value;
    if (gradientStart) config.theme.gradient.start = gradientStart.value;
    if (gradientEnd) config.theme.gradient.end = gradientEnd.value;
}

function syncHeaderSettingsFromInputs() {
    const headerBgColor = document.getElementById('headerBgColor');
    const headerTextColor = document.getElementById('headerTextColor');
    const topHeroMediaType = document.getElementById('topHeroMediaType');
    const topHeroMediaUrl = document.getElementById('topHeroMediaUrl');
    const topHeroMediaUrlGroup = document.getElementById('topHeroMediaUrlGroup');

    if (!config.theme || typeof config.theme !== 'object') config.theme = {};

    if (headerBgColor) config.theme.headerBgColor = headerBgColor.value;
    if (headerTextColor) config.theme.headerTextColor = headerTextColor.value;
    if (topHeroMediaType) config.theme.topHeroMediaType = topHeroMediaType.value;

    const mediaUrl = topHeroMediaUrl ? (topHeroMediaUrl.value || '').trim() : '';
    config.theme.topHeroMediaUrl = mediaUrl;

    if (mediaUrl && (!config.theme.topHeroMediaType || config.theme.topHeroMediaType === 'none')) {
        const looksLikeVideo = /\.(mp4|webm|ogg)(\?|#|$)/i.test(mediaUrl);
        config.theme.topHeroMediaType = looksLikeVideo ? 'video' : 'image';
        if (topHeroMediaType) topHeroMediaType.value = config.theme.topHeroMediaType;
    }

    if (topHeroMediaUrlGroup && topHeroMediaType) {
        topHeroMediaUrlGroup.style.display = topHeroMediaType.value === 'none' ? 'none' : 'block';
    }
}

function applyHeaderStatusOffset(statusEl) {
    if (!statusEl) return;
    const x = Number(config.header.statusOffsetX) || 0;
    const y = Number(config.header.statusOffsetY) || 0;
    statusEl.style.transform = `translate(${x}px, ${y}px)`;
}

function applyHeaderNameOffset(nameEl) {
    if (!nameEl) return;
    const x = Number(config.header.nameOffsetX) || 0;
    const y = Number(config.header.nameOffsetY) || 0;
    nameEl.style.transform = `translate(${x}px, ${y}px)`;
}

function applyHeaderLogoOffset(logoEl) {
    if (!logoEl) return;
    const x = Number(config.header.logoOffsetX) || 0;
    const y = Number(config.header.logoOffsetY) || 0;
    logoEl.style.transform = `translate(${x}px, ${y}px)`;
}

function syncStatusInput(text) {
    const headerStatusInput = document.getElementById('headerStatusValue');
    if (headerStatusInput && headerStatusInput.value !== text) headerStatusInput.value = text;
    const legacyStatusInput = document.getElementById('assistantStatus');
    if (legacyStatusInput && legacyStatusInput.value !== text) legacyStatusInput.value = text;
}

function enableHeaderNameDragging(nameEl) {
    if (!nameEl || nameEl.dataset.interactiveBound === '1') return;
    nameEl.dataset.interactiveBound = '1';
    nameEl.classList.add('is-draggable');
    applyHeaderNameOffset(nameEl);

    let dragStartX = 0;
    let dragStartY = 0;
    let originX = 0;
    let originY = 0;
    let pointerId = null;

    nameEl.addEventListener('pointerdown', (e) => {
        if (e.button !== 0) return;
        pointerId = e.pointerId;
        nameEl.setPointerCapture(pointerId);
        nameEl.classList.add('is-dragging');
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        originX = Number(config.header.nameOffsetX) || 0;
        originY = Number(config.header.nameOffsetY) || 0;
        e.preventDefault();
    });

    nameEl.addEventListener('pointermove', (e) => {
        if (pointerId === null || e.pointerId !== pointerId) return;
        const nextX = Math.max(-120, Math.min(120, originX + (e.clientX - dragStartX)));
        const nextY = Math.max(-40, Math.min(40, originY + (e.clientY - dragStartY)));
        config.header.nameOffsetX = Math.round(nextX);
        config.header.nameOffsetY = Math.round(nextY);
        applyHeaderNameOffset(nameEl);
    });

    const finishDrag = (e) => {
        if (pointerId === null || e.pointerId !== pointerId) return;
        if (nameEl.hasPointerCapture(pointerId)) nameEl.releasePointerCapture(pointerId);
        pointerId = null;
        nameEl.classList.remove('is-dragging');
    };

    nameEl.addEventListener('pointerup', finishDrag);
    nameEl.addEventListener('pointercancel', finishDrag);
}

function enableHeaderLogoDragging(logoEl) {
    if (!logoEl || logoEl.dataset.interactiveBound === '1') return;
    logoEl.dataset.interactiveBound = '1';
    logoEl.classList.add('is-draggable');
    applyHeaderLogoOffset(logoEl);

    let dragStartX = 0;
    let dragStartY = 0;
    let originX = 0;
    let originY = 0;
    let pointerId = null;

    logoEl.addEventListener('pointerdown', (e) => {
        if (e.button !== 0) return;
        pointerId = e.pointerId;
        logoEl.setPointerCapture(pointerId);
        logoEl.classList.add('is-dragging');
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        originX = Number(config.header.logoOffsetX) || 0;
        originY = Number(config.header.logoOffsetY) || 0;
        e.preventDefault();
    });

    logoEl.addEventListener('pointermove', (e) => {
        if (pointerId === null || e.pointerId !== pointerId) return;
        const nextX = Math.max(-120, Math.min(120, originX + (e.clientX - dragStartX)));
        const nextY = Math.max(-40, Math.min(40, originY + (e.clientY - dragStartY)));
        config.header.logoOffsetX = Math.round(nextX);
        config.header.logoOffsetY = Math.round(nextY);
        applyHeaderLogoOffset(logoEl);
    });

    const finishDrag = (e) => {
        if (pointerId === null || e.pointerId !== pointerId) return;
        if (logoEl.hasPointerCapture(pointerId)) logoEl.releasePointerCapture(pointerId);
        pointerId = null;
        logoEl.classList.remove('is-dragging');
    };

    logoEl.addEventListener('pointerup', finishDrag);
    logoEl.addEventListener('pointercancel', finishDrag);
}

function enableHeaderStatusEditingAndDragging(statusEl) {
    if (!statusEl || statusEl.dataset.interactiveBound === '1') return;
    statusEl.dataset.interactiveBound = '1';
    statusEl.classList.add('is-draggable');
    applyHeaderStatusOffset(statusEl);

    let editing = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let originX = 0;
    let originY = 0;
    let pointerId = null;
    let editSnapshot = '';

    const setEditMode = (enabled) => {
        editing = enabled;
        statusEl.contentEditable = enabled ? 'true' : 'false';
        statusEl.classList.toggle('is-editing', enabled);
        if (!enabled) statusEl.blur();
    };

    const commitEdit = () => {
        const newStatus = (statusEl.textContent || '').trim() || 'Online';
        config.header.status = newStatus;
        statusEl.textContent = newStatus;
        syncStatusInput(newStatus);
        setEditMode(false);
    };

    statusEl.addEventListener('dblclick', () => {
        editSnapshot = config.header.status || 'Online';
        setEditMode(true);
        statusEl.focus();
        try {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(statusEl);
            selection.removeAllRanges();
            selection.addRange(range);
        } catch (e) {
            // Selection API can fail in rare browser states; edit mode still works.
        }
    });

    statusEl.addEventListener('blur', () => {
        if (!editing) return;
        commitEdit();
    });

    statusEl.addEventListener('keydown', (e) => {
        if (!editing) return;
        if (e.key === 'Enter') {
            e.preventDefault();
            commitEdit();
        }
        if (e.key === 'Escape') {
            e.preventDefault();
            config.header.status = editSnapshot || 'Online';
            statusEl.textContent = config.header.status;
            syncStatusInput(config.header.status);
            setEditMode(false);
        }
    });

    statusEl.addEventListener('pointerdown', (e) => {
        if (editing || e.button !== 0) return;
        pointerId = e.pointerId;
        statusEl.setPointerCapture(pointerId);
        statusEl.classList.add('is-dragging');
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        originX = Number(config.header.statusOffsetX) || 0;
        originY = Number(config.header.statusOffsetY) || 0;
        e.preventDefault();
    });

    statusEl.addEventListener('pointermove', (e) => {
        if (editing || pointerId === null || e.pointerId !== pointerId) return;
        const nextX = Math.max(-120, Math.min(120, originX + (e.clientX - dragStartX)));
        const nextY = Math.max(-40, Math.min(40, originY + (e.clientY - dragStartY)));
        config.header.statusOffsetX = Math.round(nextX);
        config.header.statusOffsetY = Math.round(nextY);
        applyHeaderStatusOffset(statusEl);
    });

    const finishDrag = (e) => {
        if (pointerId === null || e.pointerId !== pointerId) return;
        if (statusEl.hasPointerCapture(pointerId)) statusEl.releasePointerCapture(pointerId);
        pointerId = null;
        statusEl.classList.remove('is-dragging');
    };

    statusEl.addEventListener('pointerup', finishDrag);
    statusEl.addEventListener('pointercancel', finishDrag);
}

function isSupportReferenceTemplate(cfg = config) {
    return !!(cfg && cfg.ui && cfg.ui.templateStyle === 'support-reference');
}

function isMaximumSupportTemplate(cfg = config) {
    return !!(cfg && cfg.ui && cfg.ui.templateStyle === 'maximum-support');
}

function isOrdersOnlineTemplate(cfg = config) {
    return !!(cfg && cfg.ui && cfg.ui.templateStyle === 'orders-online');
}

function isMaximumSupportInputTrigger(choiceText = '') {
    return /chat with/i.test((choiceText || '').trim());
}

function isMaximumSupportInputOnlyChoice(choiceText = '') {
    const normalized = (choiceText || '').trim().toLowerCase();
    return normalized === 'chat with us';
}

function getMaximumSupportHeroMedia(cfg = config) {
    const theme = (cfg && cfg.theme) ? cfg.theme : {};
    const templateStyle = (((cfg && cfg.ui && cfg.ui.templateStyle) || '') + '').toLowerCase();
    const mediaType = (theme.topHeroMediaType || 'none').toLowerCase();
    const mediaUrl = (theme.topHeroMediaUrl || '').trim();
    const inferredType = (mediaType === 'none' && mediaUrl)
        ? (/\.(mp4|webm|ogg)(\?|#|$)/i.test(mediaUrl) ? 'video' : 'image')
        : mediaType;
    if (inferredType === 'video' && mediaUrl) return { type: 'video', url: mediaUrl };
    if (inferredType === 'image') {
        const fallbackImage = templateStyle === 'maximum-support' ? MAXIMUM_SUPPORT_DEFAULT_HERO_IMAGE : '';
        const resolvedUrl = mediaUrl || fallbackImage;
        if (resolvedUrl) return { type: 'image', url: resolvedUrl };
    }
    return { type: 'none', url: '' };
}

function applyMaximumSupportHeroMedia(rootWidget = widget, cfg = config) {
    if (!rootWidget) return;
    const header = rootWidget.querySelector('.chat-widget__header');
    if (!header) return;
    const isMaximumTemplate = rootWidget.classList.contains('chat-widget--maximum-support');
    const existingVideos = header.querySelectorAll('.max-support-hero-video');

    if (!isMaximumTemplate) {
        existingVideos.forEach((el) => el.remove());
        header.style.removeProperty('background-image');
        header.style.removeProperty('background-size');
        header.style.removeProperty('background-position');
        return;
    }

    const media = getMaximumSupportHeroMedia(cfg);
    const overlayGradient = 'linear-gradient(180deg, rgba(27, 104, 238, 0.78) 0%, rgba(22, 100, 236, 0.92) 100%)';
    const videoClass = 'max-support-hero-video';

    if (media.type === 'video' && media.url) {
        header.style.backgroundImage = overlayGradient;
        header.style.backgroundSize = 'cover';
        header.style.backgroundPosition = 'center';
        existingVideos.forEach((el) => {
            if (!el.classList.contains(videoClass)) el.remove();
        });
        let videoEl = header.querySelector(`.${videoClass}`);
        if (!videoEl) {
            videoEl = document.createElement('video');
            videoEl.className = videoClass;
            videoEl.muted = true;
            videoEl.autoplay = true;
            videoEl.loop = true;
            videoEl.playsInline = true;
            videoEl.preload = 'metadata';
            header.insertBefore(videoEl, header.firstChild);
        }
        if (videoEl.src !== media.url) videoEl.src = media.url;
        videoEl.play().catch(() => {});
        return;
    }

    existingVideos.forEach((el) => el.remove());
    if (media.type === 'image' && media.url) {
        const safeUrl = media.url.replace(/"/g, '\\"');
        header.style.backgroundImage = `${overlayGradient}, url("${safeUrl}")`;
        header.style.backgroundSize = 'cover';
        header.style.backgroundPosition = 'center';
    } else {
        header.style.removeProperty('background-image');
        header.style.removeProperty('background-size');
        header.style.removeProperty('background-position');
    }
}

function applySupportTemplateVisuals() {
    const supportStyleEnabled = isSupportReferenceTemplate();
    const maximumSupportEnabled = isMaximumSupportTemplate();
    const ordersOnlineEnabled = isOrdersOnlineTemplate();
    if (!widget) return;

    widget.classList.toggle('chat-widget--support-reference', supportStyleEnabled);
    widget.classList.toggle('chat-widget--maximum-support', maximumSupportEnabled);
    widget.classList.toggle('chat-widget--orders-online', ordersOnlineEnabled);
    if (msgList) msgList.classList.toggle('chat-widget__messages--support-reference', supportStyleEnabled);
    if (msgList) msgList.classList.toggle('chat-widget__messages--maximum-support', maximumSupportEnabled);

    const previewInput = document.getElementById('previewInput');
    const previewUploadBtn = document.getElementById('previewUploadBtn');
    const previewSendBtn = document.getElementById('previewSendBtn');
    const previewRestartBtn = document.getElementById('previewRestartBtn');
    const previewDownloadBtn = document.getElementById('previewDownloadBtn');
    const inputRow = widget.querySelector('.chat-widget__input-row');
    const previewFileInput = document.getElementById('previewFileInput');

    if (previewInput) {
        previewInput.placeholder = supportStyleEnabled
            ? 'Or send a message...'
            : (maximumSupportEnabled ? 'Ask a question...' : (ordersOnlineEnabled ? 'Enter your message...' : 'Type a message...'));
    }
    if (previewUploadBtn) {
        previewUploadBtn.innerHTML = supportStyleEnabled
            ? SUPPORT_MIC_OFF_ICON_SVG
            : (ordersOnlineEnabled ? ORDERS_CAMERA_ICON_SVG : DEFAULT_PREVIEW_UPLOAD_ICON_HTML);
        previewUploadBtn.title = supportStyleEnabled ? 'Mute Microphone' : 'Upload File';
        if (supportStyleEnabled) {
            previewUploadBtn.style.position = 'absolute';
            previewUploadBtn.style.top = '18px';
            previewUploadBtn.style.right = '70px';
            previewUploadBtn.style.zIndex = '8';
            previewUploadBtn.style.width = '44px';
            previewUploadBtn.style.height = '44px';
            previewUploadBtn.style.background = 'linear-gradient(180deg, #d7e0e9 0%, #c7d2dd 100%)';
            previewUploadBtn.style.border = '1px solid rgba(154, 168, 184, 0.34)';
            previewUploadBtn.style.color = '#5d6a77';
            previewUploadBtn.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.42), inset 0 1px 0 rgba(255,255,255,0.96), inset 0 -1px 1px rgba(123,140,159,0.28), 0 3px 7px rgba(56,69,90,0.16)';
            previewUploadBtn.style.padding = '0';
            previewUploadBtn.style.cursor = 'pointer';
        } else {
            previewUploadBtn.setAttribute('style', "background:transparent; color:var(--w-muted); border:none; padding:0; width:30px; cursor:pointer;");
        }
    }
    if (previewSendBtn) {
        previewSendBtn.innerHTML = DEFAULT_PREVIEW_SEND_ICON_HTML;
        previewSendBtn.title = 'Send';
    }
    if (previewRestartBtn && previewDownloadBtn) {
        if (ordersOnlineEnabled) {
            previewRestartBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.8"></circle><circle cx="12" cy="12" r="1.8"></circle><circle cx="12" cy="19" r="1.8"></circle></svg>';
            previewDownloadBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';
            previewRestartBtn.title = 'More';
            previewDownloadBtn.title = 'Collapse';
        } else {
            previewRestartBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>';
            previewDownloadBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>';
            previewRestartBtn.title = 'Restart Chat';
            previewDownloadBtn.title = 'Download Chat';
        }
    }

    let extraUploadBtn = document.getElementById('previewUploadExtraBtn');
    let previewEmojiBtn = document.getElementById('previewEmojiBtn');
    if (supportStyleEnabled) {
        if (!extraUploadBtn && inputRow) {
            extraUploadBtn = document.createElement('button');
            extraUploadBtn.className = 'chat-widget__send';
            extraUploadBtn.id = 'previewUploadExtraBtn';
            extraUploadBtn.type = 'button';
            extraUploadBtn.innerHTML = SUPPORT_UPLOAD_ICON_SVG;
            inputRow.insertBefore(extraUploadBtn, previewSendBtn);
        }
        if (extraUploadBtn) {
            extraUploadBtn.title = 'Upload File';
            extraUploadBtn.style.position = 'absolute';
            extraUploadBtn.style.top = '18px';
            extraUploadBtn.style.right = '18px';
            extraUploadBtn.style.zIndex = '8';
            extraUploadBtn.style.width = '44px';
            extraUploadBtn.style.height = '44px';
            extraUploadBtn.style.background = 'linear-gradient(180deg, #d7e0e9 0%, #c7d2dd 100%)';
            extraUploadBtn.style.border = '1px solid rgba(154, 168, 184, 0.34)';
            extraUploadBtn.style.color = '#5d6a77';
            extraUploadBtn.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.42), inset 0 1px 0 rgba(255,255,255,0.96), inset 0 -1px 1px rgba(123,140,159,0.28), 0 3px 7px rgba(56,69,90,0.16)';
            extraUploadBtn.onclick = () => {
                if (previewFileInput) previewFileInput.click();
            };
        }
        if (previewEmojiBtn) previewEmojiBtn.remove();
    } else if (ordersOnlineEnabled) {
        if (extraUploadBtn) extraUploadBtn.remove();
        if (!previewEmojiBtn && inputRow && previewSendBtn) {
            previewEmojiBtn = document.createElement('button');
            previewEmojiBtn.className = 'chat-widget__send';
            previewEmojiBtn.id = 'previewEmojiBtn';
            previewEmojiBtn.type = 'button';
            previewEmojiBtn.innerHTML = ORDERS_EMOJI_ICON_SVG;
            inputRow.insertBefore(previewEmojiBtn, previewSendBtn);
        }
        if (previewEmojiBtn) {
            previewEmojiBtn.title = 'Emoji';
            previewEmojiBtn.onclick = () => {
                if (previewInput) previewInput.focus();
            };
        }
    } else {
        if (extraUploadBtn) extraUploadBtn.remove();
        if (previewEmojiBtn) previewEmojiBtn.remove();
    }

    if (inputRow) {
        const shouldHideInput = maximumSupportEnabled && !maximumSupportInputUnlocked;
        inputRow.style.display = shouldHideInput ? 'none' : 'flex';
    }
    applyMaximumSupportHeroMedia(widget, config);
}

function updateDOM() {
    ensureHeaderAssistantSeparation(config);
    updateBackendWebhookNotices();

    // Header
    const headerName = document.getElementById('previewName');
    const headerStatus = document.querySelector('.chat-widget__header-status');
    const headerAvatar = document.querySelector('.chat-widget__header-avatar'); // Note: ID was prevAvatar, class is better
    const headerRoot = document.querySelector('.chat-widget__header');

    // Sync Inputs (if multiple Inputs control the same config)
    const nameInput1 = document.getElementById('assistantName');
    const nameInput2 = document.getElementById('headerTitleValue') || document.getElementById('headerNameValue');
    if (nameInput1 && nameInput1.value !== getAssistantName()) nameInput1.value = getAssistantName();
    if (nameInput2 && nameInput2.value !== getHeaderTitle()) nameInput2.value = getHeaderTitle();
    const headerFontFamilyInput = document.getElementById('headerFontFamily');
    if (headerFontFamilyInput) headerFontFamilyInput.value = config.header.fontFamily || "'Syne', sans-serif";
    const headerNameFontSizeInput = document.getElementById('headerNameFontSize');
    if (headerNameFontSizeInput) headerNameFontSizeInput.value = Number(config.header.nameFontSize) || 15;
    const headerStatusFontSizeInput = document.getElementById('headerStatusFontSize');
    if (headerStatusFontSizeInput) headerStatusFontSizeInput.value = Number(config.header.statusFontSize) || 12;
    const headerStatusValueInput = document.getElementById('headerStatusValue');
    if (headerStatusValueInput && headerStatusValueInput.value !== config.header.status) {
        headerStatusValueInput.value = config.header.status || '';
    }
    const headerAnimationInput = document.getElementById('headerAnimation');
    if (headerAnimationInput) headerAnimationInput.value = config.header.animation || 'none';

    if (config.header.logoSize) {
        // Logo size affects the avatar/icon size
        headerAvatar.style.width = `${config.header.logoSize}px`;
        headerAvatar.style.height = `${config.header.logoSize}px`;
        headerAvatar.style.fontSize = `${config.header.logoSize * 0.5}px`;
    }
    applyHeaderLogoOffset(headerAvatar);
    enableHeaderLogoDragging(headerAvatar);

    // Avatar Logic (Assistant) Helper
    const isImage = (val) => val && (val.includes('://') || val.startsWith('data:') || val.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i));

    // Render Title in Header Name
    headerName.textContent = getHeaderTitle();
    applyHeaderNameOffset(headerName);
    enableHeaderNameDragging(headerName);

    if (!headerStatus.classList.contains('is-editing')) {
        headerStatus.textContent = config.header.status;
    }
    applyHeaderStatusOffset(headerStatus);
    enableHeaderStatusEditingAndDragging(headerStatus);

    // Apply Header Colors (from persistence)
    if (headerRoot) {
        if (config.theme.headerBgColor && !isMaximumSupportTemplate() && !isOrdersOnlineTemplate()) {
            headerRoot.style.background = config.theme.headerBgColor;
        }
    }
    if (config.theme.headerTextColor) {
        document.querySelector('.chat-widget__header-name').style.color = config.theme.headerTextColor;
    }

    // Render Logo in Header Avatar
    if (config.header.logoType === 'image' && config.header.logoUrl) {
        headerAvatar.innerHTML = '';
        const img = document.createElement('img');
        img.src = config.header.logoUrl;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '50%';

        img.onerror = () => {
            img.remove();
            headerAvatar.textContent = getHeaderTitle() ? getHeaderTitle().substring(0, 2).toUpperCase() : 'A';
        };

        headerAvatar.appendChild(img);
    } else {
        headerAvatar.textContent = getHeaderTitle() ? getHeaderTitle().substring(0, 2).toUpperCase() : 'A';
    }

    // Assistant Avatar Size (in Chat) - we need to update CSS var or inline styles for ALL messages?
    // Better to update CSS var
    document.documentElement.style.setProperty('--avatar-size-bot', `${config.header.avatarSize}px`);
    document.documentElement.style.setProperty('--avatar-size-user', `${config.user.avatarSize}px`);


    // Launcher Logic
    const launcher = document.getElementById('previewLauncher');
    if (launcher) {
        launcher.style.display = 'flex'; // Override display: none from CSS

        // Size
        launcher.style.width = `${config.launcher.size}px`;
        launcher.style.height = `${config.launcher.size}px`;

        // Background Style
        launcher.className = 'cw-launcher'; // Reset classes
        launcher.style.background = '';
        launcher.style.backgroundColor = '';
        launcher.style.boxShadow = '';
        launcher.style.backdropFilter = '';
        launcher.style.border = '';
        launcher.style.transform = '';
        if (launcher.__badgeShowTimer) clearTimeout(launcher.__badgeShowTimer);
        if (launcher.__badgeHideTimer) clearTimeout(launcher.__badgeHideTimer);
        if (launcher.__bubbleShowTimer) clearTimeout(launcher.__bubbleShowTimer);
        if (launcher.__bubbleHideTimer) clearTimeout(launcher.__bubbleHideTimer);

        const bgStyle = config.launcher.bgStyle || 'solid';
        const bgColor = config.launcher.bgColor || '#6c63ff';
        const gradientEnd = config.launcher.gradientEnd || '#ff6584';

        if (bgStyle === 'transparent') {
            launcher.style.backgroundColor = 'transparent';
        } else if (bgStyle === 'glass') {
            launcher.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            launcher.style.backdropFilter = 'blur(10px)';
            launcher.style.border = '1px solid rgba(255, 255, 255, 0.2)';
            launcher.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)';
        } else if (bgStyle === '3d') {
            launcher.style.backgroundColor = bgColor;
            launcher.style.boxShadow = `inset 0 -4px 0 0 rgba(0,0,0,0.2), 0 8px 15px rgba(0,0,0,0.3)`;
        } else if (bgStyle === 'gradient') {
            launcher.style.background = `linear-gradient(135deg, ${bgColor}, ${gradientEnd})`;
        } else {
            // solid
            launcher.style.backgroundColor = bgColor;
        }

        // Icon / Image
        launcher.innerHTML = '';

        // Render Badge if enabled
        if (config.launcher.badgeEnabled) {
            const badgeText = (config.launcher.text && config.launcher.text.trim())
                ? config.launcher.text.trim()
                : `${getAssistantName() || 'Chat'} typing...`;
            const badge = document.createElement('div');
            badge.className = 'cw-launcher-badge';
            badge.textContent = badgeText;
            badge.style.display = 'none';

            // Position badge based on launcher position
            const pos = config.launcher.position || 'bottom-right';
            if (pos.includes('right')) badge.classList.add('pos-left');
            else badge.classList.add('pos-right');

            launcher.appendChild(badge);
            scheduleLauncherBadgeVisibility(launcher, badge);
        }

        renderLauncherMessageBubble(launcher, {
            enabled: !!config.launcher.bubbleEnabled,
            text: config.launcher.bubbleText || '',
            mode: config.launcher.bubbleMode || 'instant',
            position: config.launcher.position || 'bottom-right',
            timed: !!config.launcher.bubbleTimed,
            delaySec: Number(config.launcher.bubbleDelaySec ?? 5),
            durationSec: Number(config.launcher.bubbleDurationSec ?? 10)
        });

        if (config.launcher.iconType === 'image' && config.launcher.imageUrl) {
            const img = document.createElement('img');
            img.src = config.launcher.imageUrl;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '50%';

            img.onerror = () => {
                img.remove();
                const fallback = document.createElement('i');
                fallback.dataset.lucide = 'image';
                fallback.style.color = 'white';
                fallback.style.width = '50%';
                fallback.style.height = '50%';
                launcher.appendChild(fallback);
                if (window.lucide) window.lucide.createIcons({ root: launcher });
            };

            launcher.appendChild(img);
        } else {
            const i = document.createElement('i');
            i.dataset.lucide = config.launcher.icon || 'message-circle';
            i.style.color = 'white';
            i.style.width = '50%';
            i.style.height = '50%';
            launcher.appendChild(i);
            if (window.lucide) window.lucide.createIcons({ root: launcher });
        }

        // Ensure circular shape unless user explicitly overrides it (Size is always fixed now)
        launcher.style.borderRadius = '50%';
        launcher.style.padding = '0'; // Reset padding from previous pill mode
        launcher.style.width = `${config.launcher.size}px`;
        launcher.style.height = `${config.launcher.size}px`;

        // Position
        launcher.style.bottom = '';
        launcher.style.right = '';
        launcher.style.left = '';
        launcher.style.top = '';

        const pos = config.launcher.position || 'bottom-right';
        const launcherSizePx = Number(config.launcher.size) || 48;
        const outsideBottomOffset = `-${Math.max(34, Math.round(launcherSizePx * 1.2))}px`;
        if (pos === 'bottom-right') {
            launcher.style.bottom = outsideBottomOffset;
            launcher.style.right = '12px';
        } else if (pos === 'bottom-left') {
            launcher.style.bottom = outsideBottomOffset;
            launcher.style.left = '12px';
        } else if (pos === 'top-right') {
            launcher.style.top = '20px';
            launcher.style.right = '20px';
        } else if (pos === 'top-left') {
            launcher.style.top = '20px';
            launcher.style.left = '20px';
        } else {
            launcher.style.bottom = outsideBottomOffset;
            launcher.style.right = '12px';
        }
    }

    // Footer Render
    const footerWrap = document.getElementById('previewFooter');
    if (footerWrap) {
        if (config.footer && config.footer.text) {
            footerWrap.innerHTML = config.footer.url
                ? `<a href="${config.footer.url}" target="_blank" style="color: ${config.footer.textColor}">${config.footer.text}</a>`
                : `<span style="color: ${config.footer.textColor}">${config.footer.text}</span>`;

            // Apply advanced styles
            footerWrap.style.fontFamily = config.footer.fontFamily;
            footerWrap.style.fontSize = `${config.footer.fontSize}px`;
            footerWrap.style.display = 'flex'; // Explicitly set to flex for positioning
            footerWrap.style.justifyContent = config.footer.position || 'center';

            // Handle Animation
            footerWrap.className = 'chat-widget__footer'; // Reset classes
            if (config.footer.animation !== 'none') {
                footerWrap.classList.add(`anim-footer-${config.footer.animation}`);
            }

            // Ensure display: flex is maintained for alignment
        } else {
            footerWrap.style.display = 'none';
        }
    }

    // Header Styling (Font Size/Weight)
    const headerNameInfo = document.querySelector('.chat-widget__header-name');
    if (headerNameInfo) {
        headerNameInfo.style.fontFamily = config.header.fontFamily || "'Syne', sans-serif";
        headerNameInfo.style.fontSize = `${Number(config.header.nameFontSize) || 15}px`;
        headerNameInfo.style.fontWeight = Number(config.header.nameFontWeight) || 600;
    }
    if (headerStatus) {
        headerStatus.style.fontFamily = config.header.fontFamily || "'Syne', sans-serif";
        headerStatus.style.fontSize = `${Number(config.header.statusFontSize) || 12}px`;
    }
    if (headerRoot) {
        headerRoot.classList.remove('anim-header-pulse', 'anim-header-fade', 'anim-header-slide-up');
        if (config.header.animation && config.header.animation !== 'none') {
            headerRoot.classList.add(`anim-header-${config.header.animation}`);
        }
    }

    // Launcher Animation
    launcher.classList.remove('anim-pulse', 'anim-bounce', 'anim-spin');
    if (config.launcher.animation !== 'none') {
        launcher.classList.add(`anim-${config.launcher.animation}`);
    }

    applySupportTemplateVisuals();
    if (window.lucide) window.lucide.createIcons();
    updateTelemetryVisibility();
    scheduleAutoSave();
}

function updateTelemetryVisibility() {
    const rail = document.getElementById('telemetryRail');
    const pipeline = document.getElementById('backendPanel');
    const realtime = document.getElementById('backendRealtimePanel');
    const rawFeed = document.getElementById('backendRawPanel');
    const showPipeline = !!config?.ui?.showPipelineMonitor;
    const showRealtime = !!config?.ui?.showRealtimeTelemetry;
    const showFeed = !!config?.ui?.showRealtimeFeed;

    if (pipeline) pipeline.style.display = showPipeline ? '' : 'none';
    if (realtime) realtime.style.display = showRealtime ? '' : 'none';
    if (rawFeed) rawFeed.style.display = showFeed ? '' : 'none';
    if (rail) rail.style.display = (showPipeline || showRealtime || showFeed) ? '' : 'none';
}

function testWebhook() {
    const url = (config.webhook.production ? config.webhook.url : config.webhook.testUrl) || config.webhook.chatUrl;
    if (!url) {
        const notif = showProgressNotification('Webhook Test');
        if (notif) notif.update(100, 'Please enter a Webhook URL first.', 'error');
        else alert('Please enter a Webhook URL first.');
        return;
    }

    const payload = {
        message: "This is a test message from the Astig Chatbot Builder.",
        sessionId: 'test-session-' + Date.now(),
        test: true,
        timestamp: new Date().toISOString()
    };

    const notif = showProgressNotification('Testing Webhook');
    if (notif) notif.update(20, 'Sending payload...', 'progress');

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify(payload)
    })
        .then(response => {
            // When using no-cors, the response is opaque. We assume success if it didn't throw an error.
            if (notif) notif.update(100, 'Webhook test request sent successfully!', 'success');
            else alert('Webhook test request sent successfully! Check your n8n log.');
        })
        .catch(error => {
            if (notif) notif.update(100, `Webhook test error: ${error.message}`, 'error');
            else alert(`Webhook test error: ${error.message}`);
        });
}

let draggedItem = null;

function renderQuestions() {
    const container = document.getElementById('questionsList');
    container.innerHTML = '';

    config.questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'control-group';
        div.draggable = true;
        div.dataset.index = index;
        div.style.background = 'rgba(255,255,255,0.05)';
        div.style.padding = '10px';
        div.style.borderRadius = '6px';
        div.style.cursor = 'grab';

        const stepDisplayMode = q.displayMode || 'instant';

        div.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:5px; align-items:center;">
                <div style="display:flex; align-items:center; gap:5px;">
                    <i data-lucide="grip-vertical" style="width:14px; height:14px; color:gray"></i>
                    <label style="margin:0">Step ${index + 1}</label>
                </div>
                <button class="btn-icon delete-q-btn" style="color:red">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
            <input type="text" class="q-text-input" value="${q.text}" placeholder="Question text" style="margin-bottom:5px">
            <select class="q-type-select" style="width:100%; padding:5px; background:rgba(0,0,0,0.2); border:1px solid var(--border-color); color:white; border-radius:4px; margin-bottom:5px;">
                <option value="text" ${q.type === 'text' ? 'selected' : ''}>Text Input</option>
                <option value="choice" ${q.type === 'choice' ? 'selected' : ''}>Multiple Choice</option>
            </select>
            <select class="q-display-select" style="width:100%; padding:5px; background:rgba(0,0,0,0.2); border:1px solid var(--border-color); color:white; border-radius:4px; margin-bottom:5px;">
                <option value="instant" ${stepDisplayMode === 'instant' ? 'selected' : ''}>Display: Instant</option>
                <option value="typewriter" ${stepDisplayMode === 'typewriter' ? 'selected' : ''}>Display: Typewriter</option>
            </select>
            ${q.type === 'choice' ? `
                <input type="text" class="q-choices-input" value="${q.choices || ''}" placeholder="Choices (comma separated, e.g. Yes, No, Maybe)">
            ` : ''}
        `;

        // Bind Events
        const deleteBtn = div.querySelector('.delete-q-btn');
        deleteBtn.onclick = () => {
            config.questions.splice(index, 1);
            renderQuestions();
            scheduleAutoSave();
        };

        const textInput = div.querySelector('.q-text-input');
        textInput.addEventListener('input', (e) => {
            config.questions[index].text = e.target.value;
        });

        const typeSelect = div.querySelector('.q-type-select');
        typeSelect.addEventListener('change', (e) => {
            config.questions[index].type = e.target.value;
            renderQuestions();
            scheduleAutoSave();
        });

        const displaySelect = div.querySelector('.q-display-select');
        if (displaySelect) {
            displaySelect.addEventListener('change', (e) => {
                config.questions[index].displayMode = e.target.value;
                scheduleAutoSave();
            });
        }

        const choicesInput = div.querySelector('.q-choices-input');
        if (choicesInput) {
            choicesInput.addEventListener('input', (e) => {
                config.questions[index].choices = e.target.value;
            });
        }

        // Add Drag Events
        div.addEventListener('dragstart', function () {
            draggedItem = index;
            setTimeout(() => this.classList.add('dragging'), 0);
        });

        div.addEventListener('dragend', function () {
            draggedItem = null;
            this.classList.remove('dragging');
            document.querySelectorAll('.control-group').forEach(el => el.style.border = 'none');
        });

        div.addEventListener('dragover', function (e) {
            e.preventDefault();
            this.style.border = '1px dashed var(--accent-color)';
        });

        div.addEventListener('dragleave', function () {
            this.style.border = 'none';
        });

        div.addEventListener('drop', function () {
            this.style.border = 'none';
            if (draggedItem === null || draggedItem === index) return;

            const item = config.questions.splice(draggedItem, 1)[0];
            config.questions.splice(index, 0, item);

            renderQuestions();
            scheduleAutoSave();
        });

        container.appendChild(div);
    });

    if (window.lucide) window.lucide.createIcons();
}

// Remove global helpers as they are no longer needed
// window.removeQuestion... etc removed

// --- Chat Engine ---

let currentQuestionIndex = -1; // -1 means we haven't started questions or are in intro
let currentSessionId = 0;
let webhookSessionId = '';
let conversationVideoHideTimer = null;
let hasScheduledVideoHide = false;
let scrollAnimFrame = null;

function getVideoHideBehavior() {
    const mode = config.video && typeof config.video.hideBehavior === 'string'
        ? config.video.hideBehavior
        : 'first-question';
    if (mode === 'stay-on' || mode === 'after-10s' || mode === 'first-question') return mode;
    return 'first-question';
}

function scheduleConversationVideoHide(root = msgList, delayMs = 0) {
    const media = root.querySelector('.chat-widget__conversation-media');
    if (!media) return;

    if (conversationVideoHideTimer) {
        clearTimeout(conversationVideoHideTimer);
        conversationVideoHideTimer = null;
    }

    media.classList.remove('is-hiding');
    conversationVideoHideTimer = setTimeout(() => {
        media.classList.add('is-hiding');
        setTimeout(() => {
            if (media.parentNode) {
                const videoEl = media.querySelector('video');
                if (videoEl) {
                    try {
                        videoEl.pause();
                        videoEl.removeAttribute('src');
                        const sourceEl = videoEl.querySelector('source');
                        if (sourceEl) sourceEl.removeAttribute('src');
                        videoEl.load();
                    } catch (e) {
                        // no-op
                    }
                }
                media.remove();
                root.classList.add('video-hidden');
            }
        }, 820);
    }, Math.max(0, Number(delayMs) || 0));
}

function stopConversationMediaPlayback(root = msgList) {
    if (!root) return;
    root.querySelectorAll('.chat-widget__conversation-video').forEach((videoEl) => {
        try {
            videoEl.pause();
            videoEl.removeAttribute('src');
            const sourceEl = videoEl.querySelector('source');
            if (sourceEl) sourceEl.removeAttribute('src');
            videoEl.load();
        } catch (e) {
            // no-op
        }
    });
}

function applyConversationMediaLayout(root = msgList) {
    if (!root) return;
    const isBackground = config.video && config.video.layout === 'background';
    root.classList.toggle('chat-widget__messages--media-bg', !!isBackground);
}

function ensureConversationMediaPlayback(root = msgList) {
    if (!root) return;
    const video = root.querySelector('.chat-widget__conversation-video');
    if (!video) return;

    video.loop = false;

    const playWithFallback = () => {
        if (video.ended) return;
        const playAttempt = video.play();
        if (playAttempt && typeof playAttempt.catch === 'function') {
            playAttempt.catch(() => {
                video.muted = true;
                video.play().catch(() => {});
            });
        }
    };

    playWithFallback();

    if (!video.__astigEndedBind) {
        video.__astigEndedBind = true;
        video.addEventListener('ended', () => {
            video.__astigEnded = true;
        });
    }

    if (video.__astigUnmuteBind) return;
    video.__astigUnmuteBind = true;

    const target = widget || document;
    const unmute = () => {
        if (video.ended || video.__astigEnded) return;
        video.muted = false;
        video.volume = 1;
        video.play().catch(() => {});
    };

    ['pointerdown', 'touchstart', 'keydown'].forEach((evt) => {
        target.addEventListener(evt, unmute, { once: true, passive: true });
    });
}

function scheduleVideoHideByMode(trigger = 'initial', root = msgList) {
    return;
}

function getConversationMediaMarkup() {
    const hasConfiguredVideoUrl = !!(config.video && typeof config.video.url === 'string');
    const configuredVideoUrl = hasConfiguredVideoUrl ? config.video.url.trim() : '';
    const configuredImageUrl = (config.video && typeof config.video.imageUrl === 'string') ? config.video.imageUrl.trim() : '';
    const resolvedVideoUrl = configuredImageUrl ? '' : (hasConfiguredVideoUrl ? configuredVideoUrl : DEFAULT_VIDEO_URL);
    const loopAttr = '';

    if (configuredImageUrl) {
        return '<div class="chat-widget__conversation-media">' +
            '<img class="chat-widget__conversation-image" src="' + configuredImageUrl + '" alt="Conversation media">' +
            '</div>';
    }

    if (resolvedVideoUrl) {
        return '<div class="chat-widget__conversation-media">' +
            '<video class="chat-widget__conversation-video" autoplay' + loopAttr + ' playsinline preload="metadata">' +
            '<source src="' + resolvedVideoUrl + '" type="video/mp4">' +
            '</video>' +
            '</div>';
    }

    return '';
}

function renderChat() {
    // Clear messages except anchor/divider
    // For simplicity, let's just re-add the "Today" divider every time
    stopConversationMediaPlayback(msgList);
    msgList.innerHTML = getConversationMediaMarkup() + '<div class="chat-widget__divider">Today</div>';
    msgList.classList.remove('video-hidden');
    applyConversationMediaLayout(msgList);
    ensureConversationMediaPlayback(msgList);
    hasScheduledVideoHide = false;
    if (conversationVideoHideTimer) {
        clearTimeout(conversationVideoHideTimer);
        conversationVideoHideTimer = null;
    }
    scheduleVideoHideByMode('initial', msgList);

    chatHistory.forEach(msg => {
        const el = createMsgElement(msg);
        msgList.appendChild(el);
    });

    msgList.appendChild(anchor);
    scrollToBottom();
}

function handleUserSend(textOverride = null) {
    const text = (typeof textOverride === 'string') ? textOverride : input.value.trim();
    if (!text) return;

    if (typeof textOverride !== 'string') {
        input.value = '';
        backendTrackDraftInput('');
    }

    // Add User Message
    addMessage({
        who: 'me',
        name: 'You',
        text: text,
        time: getCurrentTime()
    });

    // Remove any existing choices
    const existingChoices = msgList.querySelectorAll('.chat-options');
    existingChoices.forEach(el => el.remove());

    // Simulate Reply
    simulateReply();
}

function addMessage(msg) {
    chatHistory.push(msg);
    const el = createMsgElement(msg);
    msgList.insertBefore(el, anchor);
    scrollToBottom();
}

function addMessageTypewriter(msg, onComplete = null, stepMs = 18) {
    const safeMsg = {
        ...msg,
        text: '',
        time: msg.time || getCurrentTime()
    };

    chatHistory.push({ ...msg, time: safeMsg.time });
    const el = createMsgElement(safeMsg);
    msgList.insertBefore(el, anchor);
    const textEl = el.querySelector('.msg__text');
    const full = String(msg.text || '');
    let idx = 0;
    const delay = Math.max(8, Math.min(40, Number(stepMs) || 18));

    const timer = setInterval(() => {
        idx += 1;
        if (textEl) textEl.textContent = full.slice(0, idx);
        scrollToBottom();

        if (idx >= full.length) {
            clearInterval(timer);
            if (textEl && window.marked) {
                textEl.innerHTML = marked.parse(full, { breaks: true });
            }
            if (typeof onComplete === 'function') onComplete();
        }
    }, delay);
}

function createMsgElement({ who, name, text, time }) {
    const div = document.createElement('div');
    div.className = `msg msg--${who}`;

    // Create Avatar Container
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'msg__avatar';

    let val = (who === 'me') ? config.user.avatar : config.header.avatar;
    const isImage = (v) => v && (v.includes('://') || v.startsWith('data:') || v.match(/\.(jpeg|jpg|gif|png|webp|svg)$/i));

    if (isImage(val)) {
        const img = document.createElement('img');
        img.src = val;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '50%';
        img.alt = name;

        img.onerror = () => {
            img.remove();
            if (who === 'me') {
                avatarDiv.textContent = 'U';
            } else {
                avatarDiv.textContent = getAssistantName() ? getAssistantName().substring(0, 2).toUpperCase() : 'A';
            }
        };

        avatarDiv.appendChild(img);
    } else {
        avatarDiv.textContent = val ? val.substring(0, 2).toUpperCase() : (who === 'me' ? 'U' : 'A');
    }

    div.innerHTML = ``;
    div.appendChild(avatarDiv);

    const bubble = document.createElement('div');
    bubble.className = 'msg__bubble';

    let parsedText = text;
    if (typeof parsedText === 'string') {
        parsedText = parsedText.replace(/\\n/g, '\n').replace(/\\r/g, '');
    }
    if (window.marked) {
        parsedText = marked.parse(parsedText, { breaks: true });
    }

    bubble.innerHTML = `
            <div class="msg__header">
                <span class="msg__name">${name}</span>
                <span class="msg__time">${time}</span>
            </div>
            <div class="msg__text">${parsedText}</div>
    `;
    div.appendChild(bubble);

    return div;
}

function extractWebhookReplyFromPayload(payload, options = {}) {
    const preserveWhitespace = !!options.preserveWhitespace;
    if (payload === null || payload === undefined) return '';
    if (typeof payload === 'string') return preserveWhitespace ? payload : payload.trim();
    if (typeof payload === 'number' || typeof payload === 'boolean') return String(payload);

    if (Array.isArray(payload)) {
        for (const item of payload) {
            const candidate = extractWebhookReplyFromPayload(item, options);
            if (candidate) return candidate;
        }
        return '';
    }

    if (typeof payload === 'object') {
        const eventType = typeof payload.type === 'string' ? payload.type.trim().toLowerCase() : '';
        const ignoredEventTypes = new Set([
            'begin', 'start', 'started', 'metadata', 'heartbeat', 'ping', 'status',
            'end', 'done', 'complete', 'completed'
        ]);
        if (eventType && ignoredEventTypes.has(eventType)) {
            return '';
        }

        const directKeys = [
            'reply', 'message', 'text', 'output', 'response', 'answer', 'content',
            'final', 'finalText', 'finalOutput', 'chatOutput', 'completion'
        ];
        for (const key of directKeys) {
            if (typeof payload[key] === 'string') {
                if (preserveWhitespace && payload[key].length > 0) return payload[key];
                if (!preserveWhitespace && payload[key].trim()) return payload[key].trim();
            }
        }

        const nestedKeys = [
            'data', 'result', 'body', 'payload', 'output', 'outputs', 'item', 'items',
            'message', 'messages', 'response', 'responses', 'delta', 'chunk', 'content'
        ];
        for (const key of nestedKeys) {
            if (payload[key] !== undefined) {
                const nested = extractWebhookReplyFromPayload(payload[key], options);
                if (nested) return nested;
            }
        }
    }

    return '';
}

function parseWebhookReplyText(rawText, contentType = '') {
    const fallback = 'Thanks for your message!';
    const raw = String(rawText || '');
    const text = raw.trim();
    if (!text) return fallback;

    const contentTypeLower = String(contentType || '').toLowerCase();
    const looksJson = contentTypeLower.includes('application/json') || text.startsWith('{') || text.startsWith('[');

    if (!looksJson) return text;

    try {
        const parsed = JSON.parse(text);
        return extractWebhookReplyFromPayload(parsed) || fallback;
    } catch (error) {
        void error;
    }

    // Support stream/NDJSON/SSE payloads from n8n where objects may come as:
    // - one JSON object per line
    // - data: {json}
    // - concatenated objects: {...}{...}
    const normalized = raw
        .replace(/}\s*{/g, '}\n{')
        .replace(/\]\s*\[/g, ']\n[');

    const lines = normalized.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
    const extractedParts = [];
    for (const line of lines) {
        let candidateLine = line;
        if (/^data:/i.test(candidateLine)) {
            candidateLine = candidateLine.replace(/^data:\s*/i, '');
        }
        if (!candidateLine || candidateLine === '[DONE]') continue;
        try {
            const parsedLine = JSON.parse(candidateLine);
            const fromLine = extractWebhookReplyFromPayload(parsedLine, { preserveWhitespace: true });
            if (fromLine !== '') extractedParts.push(fromLine);
        } catch (error) {
            void error;
        }
    }

    if (extractedParts.length > 0) {
        if (extractedParts.length > 1 && extractedParts.every(part => part.length <= 120)) {
            const merged = extractedParts.join('');
            return merged.trim() || fallback;
        }
        const last = extractedParts[extractedParts.length - 1];
        return String(last || '').trim() || fallback;
    }

    return text;
}

function simulateReply() {
    const sessionId = currentSessionId;
    // Show Typing Indicator
    const typingCallback = showTyping();
    scrollToBottom();

    setTimeout(() => {
        if (sessionId !== currentSessionId) return;
        typingCallback.remove();

        let userReplyText = "";
        if (chatHistory.length > 0) {
            const lastMsg = chatHistory[chatHistory.length - 1];
            if (lastMsg.who === 'me') {
                userReplyText = lastMsg.text;
            }
        }

        const url = (config.webhook.production ? config.webhook.url : config.webhook.testUrl) || config.webhook.chatUrl;

        if (url && userReplyText) {
            if (!webhookSessionId) webhookSessionId = createStableSessionId('builder');
            backendStartTransfer(userReplyText);
            backendAdvanceStage('outbound', 24, 'Sending payload from client to n8n');
            backendAddLog(`POST ${url}`, 'info');
            appendRawTelemetryLine('USER', userReplyText);
            backendTelemetry.pendingProcessingTimer = setTimeout(() => {
                backendAdvanceStage('processing', 52, 'n8n workflow is processing data');
                backendAddLog('n8n flow execution in progress...', 'info');
            }, 280);
            const networkTyping = showTyping();
            const slowTypingTimer = setTimeout(() => {
                if (sessionId === currentSessionId) networkTyping.showSlow();
            }, 5000);
            scrollToBottom();

            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userReplyText,
                    chatInput: userReplyText, // Added for n8n Chat Triggers
                    sessionId: webhookSessionId,
                    formattingRules: "You must always present responses with a clear structure and readable layout.\n\nUse bold headings for main sections and insert one line break before each heading.\n\nSeparate each paragraph or section with one line break to maintain proper spacing in chat.\n\nUse bullet points for lists, numbered points for step-by-step instructions, and short paragraphs for context.\n\nOnly include headers when the response covers multiple sections.\n\nDo not include summaries at the end of long responses unless they help the user better understand the main ideas."
                })
            })
                .then(async (res) => {
                    if (backendTelemetry.pendingProcessingTimer) {
                        clearTimeout(backendTelemetry.pendingProcessingTimer);
                        backendTelemetry.pendingProcessingTimer = null;
                    }
                    backendAdvanceStage('processing', 70, `n8n accepted request (${res.status || 200})`);
                    backendAddLog(`n8n responded with status ${res.status || 200}`, 'info');
                    const contentType = res.headers.get('content-type') || '';
                    const rawResponse = await res.text();
                    const replyText = parseWebhookReplyText(rawResponse, contentType);
                    if (!res.ok) {
                        const statusMsg = `HTTP ${res.status || 500}`;
                        const suffix = replyText ? `: ${replyText}` : '';
                        throw new Error(`${statusMsg}${suffix}`);
                    }
                    return replyText;
                })
                .then(replyText => {
                    if (sessionId !== currentSessionId) {
                        clearTimeout(slowTypingTimer);
                        return;
                    }
                    clearTimeout(slowTypingTimer);
                    networkTyping.remove();
                    backendAdvanceStage('inbound', 86, 'Transferring processed payload back to chat');
                    backendAddLog('Inbound payload received from n8n', 'success');
                    appendRawTelemetryLine('WEBHOOK_RESPONSE', replyText);
                    addMessage({
                        who: 'other',
                        name: getAssistantName(),
                        text: replyText,
                        time: getCurrentTime()
                    });
                    backendAdvanceStage('render', 100, 'Rendering response inside the widget');
                    backendCompleteTransfer();
                })
                .catch(err => {
                    if (backendTelemetry.pendingProcessingTimer) {
                        clearTimeout(backendTelemetry.pendingProcessingTimer);
                        backendTelemetry.pendingProcessingTimer = null;
                    }
                    if (sessionId !== currentSessionId) {
                        clearTimeout(slowTypingTimer);
                        return;
                    }
                    console.error('Webhook error:', err);
                    clearTimeout(slowTypingTimer);
                    networkTyping.remove();
                    backendFailTransfer('Webhook error: ' + err.message);
                    appendRawTelemetryLine('WEBHOOK_ERROR', err.message);
                    // Fallback on error
                    addMessage({
                        who: 'other',
                        name: getAssistantName(),
                        text: 'Error reaching webhook: ' + err.message,
                        time: getCurrentTime()
                    });
                });

            return;
        }

        let replyText = "";
        let choices = [];

        currentQuestionIndex++;

        if (currentQuestionIndex < config.questions.length) {
            const q = config.questions[currentQuestionIndex];
            replyText = q.text;

            if (q.type === 'choice' && q.choices) {
                choices = q.choices.split(',').map(c => c.trim()).filter(c => c);
                if (isMaximumSupportTemplate()) {
                    replyText = '';
                }
            }
        } else if (userReplyText) {
            replyText = config.transcript || 'Thanks for your message!';
        } else {
            return;
        }

        if (!replyText) {
            if (choices.length > 0) {
                addChoices(choices);
            }
            return;
        }

        const finalizeQuestionStep = () => {
            if (config.questions && config.questions.length > 0 && currentQuestionIndex === 0) {
                scheduleVideoHideByMode('first-question', msgList);
            }
            if (choices.length > 0) addChoices(choices);
        };

        if ((config.questions[currentQuestionIndex]?.displayMode || 'instant') === 'typewriter') {
            addMessageTypewriter({
                who: 'other',
                name: getAssistantName(),
                text: replyText,
                time: getCurrentTime()
            }, finalizeQuestionStep);
        } else {
            addMessage({
                who: 'other',
                name: getAssistantName(),
                text: replyText,
                time: getCurrentTime()
            });
            finalizeQuestionStep();
        }

    }, 1500);
}

function addChoices(choices) {
    const div = document.createElement('div');
    div.className = 'chat-options';

    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'chat-option-btn';
        if (config.questionsStyle === 'gradient') {
            btn.classList.add('gradient');
        }
        btn.textContent = choice;
        btn.onclick = () => {
            if (isMaximumSupportTemplate()) {
                maximumSupportInputUnlocked = true;
                applySupportTemplateVisuals();
                if (isMaximumSupportInputOnlyChoice(choice)) {
                    const existingChoices = msgList.querySelectorAll('.chat-options');
                    existingChoices.forEach(el => el.remove());
                    if (input) input.focus();
                    return;
                }
                if (input) input.focus();
            }
            handleUserSend(choice);
        };
        div.appendChild(btn);
    });

    msgList.insertBefore(div, anchor);
    scrollToBottom();
}

function showTyping() {
    const el = document.createElement('div');
    el.className = 'chat-widget__typing';
    const initial = getAssistantName() ? getAssistantName()[0] : 'A';
    const typingName = (getAssistantName() || 'Assistant').trim();
    el.innerHTML = `
      <div class="msg__avatar">${initial}</div>
      <div class="typing-stack">
        <div class="typing-bubble">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
        <div class="typing-status" style="display:none;">${typingName} typing...</div>
      </div>`;
    msgList.insertBefore(el, anchor);

    const statusEl = el.querySelector('.typing-status');
    return {
        showSlow: () => {
            if (statusEl) {
                statusEl.style.display = 'block';
                statusEl.classList.add('is-visible');
                scrollToBottom();
            }
        },
        remove: () => el.remove()
    };
}

function smoothScrollContainerToBottom(container, duration = 320) {
    if (!container) return;
    if (scrollAnimFrame) {
        cancelAnimationFrame(scrollAnimFrame);
        scrollAnimFrame = null;
    }
    const start = container.scrollTop;
    const target = Math.max(0, container.scrollHeight - container.clientHeight);
    const delta = target - start;
    if (Math.abs(delta) < 2) {
        container.scrollTop = target;
        return;
    }
    const t0 = performance.now();
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
        const p = Math.min(1, (now - t0) / duration);
        container.scrollTop = start + delta * easeOutCubic(p);
        if (p < 1) {
            scrollAnimFrame = requestAnimationFrame(step);
        } else {
            scrollAnimFrame = null;
        }
    };
    scrollAnimFrame = requestAnimationFrame(step);
}

function scrollToBottom() {
    if (!msgList) return;
    smoothScrollContainerToBottom(msgList, 320);
}

function getCurrentTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function createStableSessionId(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function restartChat() {
    currentSessionId++;
    webhookSessionId = createStableSessionId('builder');
    if (backendSessionIdEl) backendSessionIdEl.textContent = `Session: ${webhookSessionId}`;
    if (backendTelemetry.pendingProcessingTimer) {
        clearTimeout(backendTelemetry.pendingProcessingTimer);
        backendTelemetry.pendingProcessingTimer = null;
    }
    backendSetBadge('idle', 'Idle');
    backendSetOverall(0, 'Conversation restarted');
    BACKEND_STAGE_ORDER.forEach((stage) => {
        backendTelemetry.stageProgress[stage] = 0;
        backendSetStepPercent(stage, 0);
    });
    backendUpdateFlowClasses('outbound', 'active');
    backendAddLog('Conversation restarted and session renewed.', 'info');
    resetRawTelemetryFeed();
    const sessionId = currentSessionId;
    chatHistory = [];
    currentQuestionIndex = -1;
    maximumSupportInputUnlocked = false;
    hasScheduledVideoHide = false;
    if (conversationVideoHideTimer) {
        clearTimeout(conversationVideoHideTimer);
        conversationVideoHideTimer = null;
    }
    renderChat();
    applySupportTemplateVisuals();

    // If questions exist, trigger the first one automatically
    if (config.questions && config.questions.length > 0) {
        setTimeout(() => {
            if (sessionId === currentSessionId) simulateReply();
        }, 500);
    }
}

function downloadChat() {
    let content = "Chat History\n\n";
    chatHistory.forEach(msg => {
        content += `[${msg.time}] ${msg.name}: ${msg.text}\n`;
    });
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat_transcript.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function resetProject() {
    const notif = showProgressNotification('Reset Settings');
    if (!notif) {
        if (confirm('Are you sure you want to reset all settings to default? This cannot be undone.')) {
            const resetConfig = JSON.parse(JSON.stringify(defaultConfig));
            if (!resetConfig.video || typeof resetConfig.video !== 'object') resetConfig.video = {};
            resetConfig.video.url = '';
            resetConfig.video.imageUrl = '';
            localStorage.setItem('chatbotConfig', JSON.stringify(resetConfig));
            location.reload();
        }
        return;
    }

    const panel = getNotificationsPanel();
    const el = document.getElementById(notif.id);
    if (!el) return;

    // Overwrite the default progress HTML for a confirmation prompt
    el.innerHTML = `
        <div class="notif-header">
            <div class="notif-icon error"><i data-lucide="alert-triangle"></i></div>
            <div class="notif-title" style="color: var(--danger-color)">Reset to Default?</div>
        </div>
        <div class="notif-message">Are you sure you want to reset all settings? This cannot be undone.</div>
        <div class="notif-actions show" style="justify-content: space-between;">
            <button class="notif-btn" id="cancelReset-${notif.id}">Cancel</button>
            <button class="notif-btn" id="confirmReset-${notif.id}" style="background: var(--danger-color); border-color: var(--danger-color); color: white;">Reset</button>
        </div>
    `;

    if (window.lucide) window.lucide.createIcons({ root: el });

    document.getElementById(`cancelReset-${notif.id}`).onclick = () => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(50px)';
        setTimeout(() => el.remove(), 300);
    };

    document.getElementById(`confirmReset-${notif.id}`).onclick = () => {
        el.remove();
        simulateSaveProgress(
            'Resetting Project',
            'Clearing current settings...',
            'Project reset to defaults (100%)',
            () => {
                const resetConfig = JSON.parse(JSON.stringify(defaultConfig));
                if (!resetConfig.video || typeof resetConfig.video !== 'object') resetConfig.video = {};
                resetConfig.video.url = '';
                resetConfig.video.imageUrl = '';
                localStorage.setItem('chatbotConfig', JSON.stringify(resetConfig));
                setTimeout(() => location.reload(), 500);
            }
        );
    };
}

function resetOffsetValues(target) {
    if (!target || typeof target !== 'object') return false;
    let changed = false;

    if (Array.isArray(target)) {
        target.forEach((item) => {
            if (resetOffsetValues(item)) changed = true;
        });
        return changed;
    }

    Object.keys(target).forEach((key) => {
        const value = target[key];
        if (/(OffsetX|OffsetY)$/i.test(key)) {
            if (Number(value) !== 0) changed = true;
            target[key] = 0;
            return;
        }
        if (value && typeof value === 'object') {
            if (resetOffsetValues(value)) changed = true;
        }
    });

    return changed;
}

function resetPositionsOnly() {
    const changed = resetOffsetValues(config);
    updateDOM();
    renderChat();
    scheduleAutoSave();

    const notif = showProgressNotification('Reset Positions');
    if (notif) {
        notif.update(
            100,
            changed ? 'Position offsets reset to defaults (100%)' : 'No custom offsets found (100%)',
            'success'
        );
    }
}

// --- Persistence ---

function saveToLocalStorage() {
    simulateSaveProgress(
        'Saving Settings',
        'Writing to storage...',
        'Settings saved to browser storage (100%)',
        () => {
            localStorage.setItem('chatbotConfig', JSON.stringify(config));
        },
        (e) => {
            throw new Error('Failed to save settings: ' + (e?.message || 'Unknown error'));
        }
    );
}

function applyConfig(data) {
    if (!data) return;
    autoSaveSuspended = true;

    // Merge with defaults to handle missing properties in old saves
    config = deepMerge(JSON.parse(JSON.stringify(defaultConfig)), data);
    normalizeRuntimeConfigShape(config);

    // Update all Inputs to match new config
    // Theme
    if (document.getElementById('primaryColor')) document.getElementById('primaryColor').value = config.theme.primaryColor;
    if (document.getElementById('bgColor')) document.getElementById('bgColor').value = config.theme.bgColor;
    if (document.getElementById('surfaceColor')) document.getElementById('surfaceColor').value = config.theme.surfaceColor;
    if (document.getElementById('fontFamily')) document.getElementById('fontFamily').value = config.theme.fontFamily;
    if (document.getElementById('borderRadius')) document.getElementById('borderRadius').value = config.theme.borderRadius;
    if (document.getElementById('bgMode')) {
        document.getElementById('bgMode').value = config.theme.mode;
        const event = new Event('change');
        document.getElementById('bgMode').dispatchEvent(event);
    }

    if (config.theme.mode === 'gradient' && config.theme.gradient) {
        if (document.getElementById('gradientStart')) document.getElementById('gradientStart').value = config.theme.gradient.start;
        if (document.getElementById('gradientEnd')) document.getElementById('gradientEnd').value = config.theme.gradient.end;
    }
    if (document.getElementById('topHeroMediaUrl')) {
        document.getElementById('topHeroMediaUrl').value = (config.theme && config.theme.topHeroMediaUrl) ? config.theme.topHeroMediaUrl : '';
    }
    if (document.getElementById('topHeroMediaType')) {
        document.getElementById('topHeroMediaType').value = (config.theme && config.theme.topHeroMediaType) ? config.theme.topHeroMediaType : 'none';
        document.getElementById('topHeroMediaType').dispatchEvent(new Event('change'));
    }

    // Header/Logo/Avatar
    if (document.getElementById('logoType')) document.getElementById('logoType').value = config.header.logoType || 'text';
    if (document.getElementById('logoValue')) {
        document.getElementById('logoValue').value = (config.header.logoType === 'image') ? config.header.logoUrl : getHeaderTitle(config);
    }
    if (document.getElementById('logoSize')) document.getElementById('logoSize').value = config.header.logoSize;
    if (document.getElementById('headerTitleValue')) document.getElementById('headerTitleValue').value = getHeaderTitle(config);
    if (document.getElementById('headerNameValue')) document.getElementById('headerNameValue').value = getHeaderTitle(config);
    if (document.getElementById('headerFontFamily')) {
        document.getElementById('headerFontFamily').value = config.header.fontFamily || "'Syne', sans-serif";
    }
    if (document.getElementById('headerNameFontSize')) {
        document.getElementById('headerNameFontSize').value = Number(config.header.nameFontSize) || 15;
    }
    if (document.getElementById('headerStatusFontSize')) {
        document.getElementById('headerStatusFontSize').value = Number(config.header.statusFontSize) || 12;
    }
    if (document.getElementById('headerStatusValue')) {
        document.getElementById('headerStatusValue').value = config.header.status || 'Online';
    }
    if (document.getElementById('headerAnimation')) {
        document.getElementById('headerAnimation').value = config.header.animation || 'none';
    }

    if (document.getElementById('headerBgColor')) {
        document.getElementById('headerBgColor').value = config.theme.headerBgColor || '#1f1f2e';
    }
    if (document.getElementById('headerTextColor')) {
        document.getElementById('headerTextColor').value = config.theme.headerTextColor || '#ffffff';
    }

    // Avatar
    if (document.getElementById('assistantName')) document.getElementById('assistantName').value = getAssistantName(config);
    if (document.getElementById('assistantAvatar')) document.getElementById('assistantAvatar').value = config.header.avatar;
    if (document.getElementById('assistantAvatarSize')) document.getElementById('assistantAvatarSize').value = config.header.avatarSize;
    if (document.getElementById('assistantStatus')) document.getElementById('assistantStatus').value = config.header.status;

    // User
    if (document.getElementById('userAvatar')) document.getElementById('userAvatar').value = config.user.avatar;
    if (document.getElementById('userAvatarSize')) document.getElementById('userAvatarSize').value = config.user.avatarSize;

    // Launcher
    if (document.getElementById('launcherIconType')) {
        document.getElementById('launcherIconType').value = config.launcher.iconType || 'icon';
    }
    if (document.getElementById('launcherIcon')) {
        document.getElementById('launcherIcon').value = (config.launcher.iconType === 'image') ? config.launcher.imageUrl : config.launcher.icon;
    }
    if (document.getElementById('launcherBadgeEnabled')) document.getElementById('launcherBadgeEnabled').checked = config.launcher.badgeEnabled || false;
    if (document.getElementById('launcherText')) document.getElementById('launcherText').value = config.launcher.text || '';
    if (document.getElementById('launcherBubbleEnabled')) document.getElementById('launcherBubbleEnabled').checked = !!config.launcher.bubbleEnabled;
    if (document.getElementById('launcherBubbleText')) document.getElementById('launcherBubbleText').value = config.launcher.bubbleText || '';
    if (document.getElementById('launcherBubbleMode')) document.getElementById('launcherBubbleMode').value = config.launcher.bubbleMode || 'instant';
    if (document.getElementById('launcherBubbleTimed')) document.getElementById('launcherBubbleTimed').checked = !!config.launcher.bubbleTimed;
    if (document.getElementById('launcherBubbleDelaySec')) document.getElementById('launcherBubbleDelaySec').value = Number(config.launcher.bubbleDelaySec ?? 5);
    if (document.getElementById('launcherBubbleDurationSec')) document.getElementById('launcherBubbleDurationSec').value = Number(config.launcher.bubbleDurationSec ?? 10);
    if (document.getElementById('launcherSize')) document.getElementById('launcherSize').value = config.launcher.size;
    if (document.getElementById('launcherBgStyle')) {
        document.getElementById('launcherBgStyle').value = config.launcher.bgStyle || 'solid';
    }
    if (document.getElementById('launcherBgColor')) document.getElementById('launcherBgColor').value = config.launcher.bgColor;
    if (document.getElementById('launcherGradientEnd')) document.getElementById('launcherGradientEnd').value = config.launcher.gradientEnd || '#000000';
    if (document.getElementById('launcherAnimation')) document.getElementById('launcherAnimation').value = config.launcher.animation;
    if (document.getElementById('launcherPosition')) document.getElementById('launcherPosition').value = config.launcher.position;
    if (document.getElementById('videoLayoutMode')) {
        document.getElementById('videoLayoutMode').value =
            (config.video && typeof config.video.layout === 'string') ? config.video.layout : 'inline';
    }
    if (document.getElementById('videoTurnOffMode')) {
        document.getElementById('videoTurnOffMode').value =
            (config.video && typeof config.video.hideBehavior === 'string') ? config.video.hideBehavior : 'first-question';
    }
    if (document.getElementById('videoUrl')) {
        document.getElementById('videoUrl').value =
            (config.video && typeof config.video.url === 'string') ? config.video.url : DEFAULT_VIDEO_URL;
    }
    if (document.getElementById('videoImageUrl')) document.getElementById('videoImageUrl').value = (config.video && config.video.imageUrl) ? config.video.imageUrl : '';
    if (document.getElementById('videoLoopEnabled')) {
        document.getElementById('videoLoopEnabled').checked = !(config.video && config.video.loop === false);
    }

    // Dispatch events AFTER setting values to avoid race conditions
    if (document.getElementById('launcherIconType')) {
        document.getElementById('launcherIconType').dispatchEvent(new Event('change'));
    }
    if (document.getElementById('launcherBgStyle')) {
        document.getElementById('launcherBgStyle').dispatchEvent(new Event('change'));
    }

    // Webhook
    if (document.getElementById('webhookUrl')) document.getElementById('webhookUrl').value = config.webhook.url || '';
    if (document.getElementById('webhookTestUrl')) document.getElementById('webhookTestUrl').value = config.webhook.testUrl || '';
    if (document.getElementById('webhookChatUrl')) document.getElementById('webhookChatUrl').value = config.webhook.chatUrl || '';
    if (document.getElementById('externalJsUrl')) {
        // Auto-fix old cached URLs for existing users
        let currentUrl = normalizeAstigJsDelivrUrl(config.webhook.externalJsUrl);
        const isLegacyBrokenUrl = currentUrl && /^https?:\/\/cdn\.jsdelivr\.net\/gh\/majesticwebcreation-ui\/astig\.media\/astig-chat\.js/i.test(currentUrl);
        if (currentUrl && (currentUrl.endsWith('astig-chat-widget.js') || currentUrl.endsWith('astig-widget.js') || isLegacyBrokenUrl)) {
            currentUrl = EMBED_DEFAULT_JS_URL;
            config.webhook.externalJsUrl = currentUrl;
        }
        if (!currentUrl || !/^https?:\/\/.+\.js(?:[?#]|$)/i.test(currentUrl.trim())) {
            currentUrl = EMBED_DEFAULT_JS_URL;
            config.webhook.externalJsUrl = currentUrl;
        }
        document.getElementById('externalJsUrl').value = currentUrl;
    }
    if (document.getElementById('webhookMode')) {
        document.getElementById('webhookMode').checked = !config.webhook.production;
        const event = new Event('change');
        document.getElementById('webhookMode').dispatchEvent(event);
    }

    // Questions Style
    if (document.getElementById('questionsBtnStyle')) {
        document.getElementById('questionsBtnStyle').value = config.questionsStyle || 'solid';
    }

    // Telemetry
    if (document.getElementById('telemetryShowPipeline')) {
        document.getElementById('telemetryShowPipeline').checked = !!(config.ui && config.ui.showPipelineMonitor);
    }
    if (document.getElementById('telemetryShowRealtime')) {
        document.getElementById('telemetryShowRealtime').checked = !!(config.ui && config.ui.showRealtimeTelemetry);
    }
    if (document.getElementById('telemetryShowRealtimeFeed')) {
        document.getElementById('telemetryShowRealtimeFeed').checked = !!(config.ui && config.ui.showRealtimeFeed);
    }
    if (document.getElementById('telemetryShowAll')) {
        document.getElementById('telemetryShowAll').checked = !!(config.ui && config.ui.showPipelineMonitor && config.ui.showRealtimeTelemetry && config.ui.showRealtimeFeed);
    }

    // Apply to DOM & Preview
    updateCSSVars();
    updateDOM();
    renderQuestions();
    restartChat();
    autoSaveSuspended = false;
}

function deepMerge(target, source) {
    for (const key in source) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
            if (!target[key]) target[key] = {};
            deepMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem('chatbotConfig');
        if (saved) {
            const data = JSON.parse(saved);
            applyConfig(data);
            return true;
        }
    } catch (e) {
        console.error("Error loading settings:", e);
    }
    return false;
}

// --- Notifications & Progress ---
function getNotificationsPanel() {
    let panel = document.getElementById('notifications-panel');
    if (!panel) return null;

    let rail = document.getElementById('notifications-rail');
    if (!rail) {
        rail = document.createElement('div');
        rail.id = 'notifications-rail';
        rail.className = 'notifications-rail';
        document.body.appendChild(rail);
    }

    if (panel.parentElement !== rail) rail.appendChild(panel);
    return panel;
}

function showProgressNotification(title) {
    const panel = getNotificationsPanel();
    if (!panel) return null;

    const id = 'notif-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);

    // Create element
    const notifItem = document.createElement('div');
    notifItem.className = 'notification-item';
    notifItem.id = id;

    notifItem.innerHTML = `
        <div class="notif-header">
            <div class="notif-icon" id="icon-${id}">
                <i data-lucide="loader-2" class="spin-anim"></i>
            </div>
            <div class="notif-title" id="title-${id}">${title}</div>
            <div class="notif-percentage" id="pct-${id}">0%</div>
        </div>
        <div class="notif-message" id="msg-${id}">Starting...</div>
        <div class="notif-progress-bg">
            <div class="notif-progress-fill" id="fill-${id}" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div>
        </div>
        <div class="notif-actions" id="actions-${id}">
            <button class="notif-btn" id="retry-${id}">Retry</button>
        </div>
    `;

    // Most recent at top
    panel.insertBefore(notifItem, panel.firstChild);

    // Re-initialize lucide icons inside the new element
    if (window.lucide) {
        window.lucide.createIcons({
            root: notifItem,
            attrs: {
                class: ["lucide"]
            }
        });
        // Add spin animation to the loader
        const loader = notifItem.querySelector('.spin-anim');
        if (loader) {
            loader.style.animation = 'spin 1.5s linear infinite';
        }
    }

    return {
        id,
        update: (progress, message, state = 'progress') => {
            const fill = document.getElementById(`fill-${id}`);
            const pct = document.getElementById(`pct-${id}`);
            const msg = document.getElementById(`msg-${id}`);
            const titleEl = document.getElementById(`title-${id}`);
            const icon = document.getElementById(`icon-${id}`);
            const actions = document.getElementById(`actions-${id}`);

            if (!fill || !pct || !msg) return;

            // Update Progress
            const validProgress = Math.max(0, Math.min(100, Math.round(progress)));
            fill.style.width = validProgress + '%';
            fill.setAttribute('aria-valuenow', validProgress);
            pct.textContent = validProgress + '%';

            if (message) msg.textContent = message;

            // Handle States
            if (state === 'success') {
                fill.classList.add('success');
                fill.classList.remove('error');
                icon.innerHTML = '<i data-lucide="check-circle"></i>';
                icon.classList.add('success');
                icon.classList.remove('error');
                if (window.lucide) window.lucide.createIcons({ root: icon });

                // Make the message disappear 1 second after 100% complete
                setTimeout(() => {
                    const el = document.getElementById(id);
                    if (el) {
                        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        el.style.opacity = '0';
                        el.style.transform = 'translateX(50px)';
                        setTimeout(() => el.remove(), 500);
                    }
                }, 1000);
            } else if (state === 'error') {
                fill.classList.add('error');
                fill.classList.remove('success');
                icon.innerHTML = '<i data-lucide="alert-circle"></i>';
                icon.classList.add('error');
                icon.classList.remove('success');

                if (validProgress === 100 && (title === 'Webhook Test' || title === 'Testing Webhook' || title === 'Reset Settings' || title === 'Copying Code' || title === 'Upload Error' || title === 'Webhook Settings')) {
                    actions.classList.remove('show');
                    setTimeout(() => {
                        const el = document.getElementById(id);
                        if (el) {
                            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                            el.style.opacity = '0';
                            el.style.transform = 'translateX(50px)';
                            setTimeout(() => el.remove(), 500);
                        }
                    }, 1000);
                } else {
                    actions.classList.add('show');
                }

                if (window.lucide) window.lucide.createIcons({ root: icon });
            }
        },
        onRetry: (callback) => {
            const retryBtn = document.getElementById(`retry-${id}`);
            if (retryBtn) {
                retryBtn.onclick = () => {
                    document.getElementById(`actions-${id}`).classList.remove('show');
                    callback();
                };
            }
        }
    };
}

// Simulates a backend save process to show satisfying progress
function simulateSaveProgress(title, initialMsg, successMsg, successCallback, errorCallback) {
    const notif = showProgressNotification(title);
    if (!notif) {
        // Fallback if panel doesn't exist
        try {
            successCallback();
            console.log(successMsg);
        } catch (e) {
            if (errorCallback) errorCallback(e);
        }
        return;
    }

    notif.update(5, initialMsg);

    let progress = 5;
    const duration = 800; // ms
    const interval = 30; // ms
    const increments = duration / interval;
    const step = 90 / increments; // get to ~95%

    const timer = setInterval(() => {
        progress += step + (Math.random() * 2); // add a little randomness
        if (progress > 95) progress = 95;

        notif.update(progress, `Saving... ${Math.round(progress)}% complete`);
    }, interval);

    // Finalize
    setTimeout(() => {
        clearInterval(timer);
        try {
            successCallback();
            notif.update(100, successMsg, 'success');
        } catch (error) {
            notif.update(progress, 'Save failed. Please try again or check console.', 'error');
            notif.onRetry(() => {
                simulateSaveProgress(title, initialMsg, successMsg, successCallback, errorCallback);
            });
            if (errorCallback) errorCallback(error);
        }
    }, duration);
}

// Ensure spin animation exists in CSS dynamically if missing
if (!document.getElementById('notif-spin-style')) {
    const style = document.createElement('style');
    style.id = 'notif-spin-style';
    style.innerHTML = `
        @keyframes spin { 
            0% { transform: rotate(0deg); } 
            100% { transform: rotate(360deg); } 
        }
    `;
    document.head.appendChild(style);
}

function normalizeProjectFilename(rawName = '') {
    const trimmed = String(rawName || '').trim();
    const fallback = 'chatbot-project.json';
    if (!trimmed) return fallback;
    const safeBase = trimmed.replace(/[<>:"/\\|?*\x00-\x1F]+/g, '-').replace(/\s+/g, '-');
    if (!safeBase) return fallback;
    return safeBase.toLowerCase().endsWith('.json') ? safeBase : `${safeBase}.json`;
}

function initSaveProjectModal() {
    const modal = document.getElementById('saveProjectModal');
    const closeBtn = document.getElementById('closeSaveProjectModal');
    const cancelBtn = document.getElementById('cancelSaveProjectBtn');
    const confirmBtn = document.getElementById('confirmSaveProjectBtn');
    const filenameInput = document.getElementById('saveProjectFilename');
    if (!modal || !closeBtn || !cancelBtn || !confirmBtn || !filenameInput) return;

    const closeModal = () => {
        modal.style.display = 'none';
    };

    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    confirmBtn.addEventListener('click', () => {
        saveProject(filenameInput.value);
        closeModal();
    });
    filenameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            confirmBtn.click();
        }
    });
}

function openSaveProjectModal() {
    const modal = document.getElementById('saveProjectModal');
    const filenameInput = document.getElementById('saveProjectFilename');
    if (!modal || !filenameInput) {
        saveProject('chatbot-project');
        return;
    }
    filenameInput.value = 'chatbot-project';
    modal.style.display = 'flex';
    setTimeout(() => {
        filenameInput.focus();
        filenameInput.select();
    }, 40);
}

function initAboutModal() {
    const modal = document.getElementById('aboutModal');
    const openBtn = document.getElementById('aboutBtn');
    const closeBtn = document.getElementById('closeAboutModal');
    if (!modal || !openBtn || !closeBtn) return;

    const openModal = () => {
        modal.style.display = 'flex';
    };
    const closeModal = () => {
        modal.style.display = 'none';
    };

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// --- Data & Export ---

function saveProject(filename = 'chatbot-project') {
    const finalFilename = normalizeProjectFilename(filename);
    simulateSaveProgress(
        'Exporting Project JSON',
        'Generating file...',
        'Changes saved successfully (100%)',
        () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(config, null, 2));
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", finalFilename);
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        }
    );
}

function loadProject(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        simulateSaveProgress(
            'Loading Project',
            'Reading JSON file...',
            'Project loaded successfully (100%)',
            () => {
                const data = JSON.parse(e.target.result);
                hasStartedFresh = true;
                applyConfig(data);
                setCreateBotMode(false, { restoreFocus: false });
            },
            (err) => {
                console.error(err);
                throw new Error('Error parsing JSON file');
            }
        );
    };
    reader.readAsText(file);
}

function handleImageUpload(event, type) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        const notif = showProgressNotification('Upload Error');
        if (notif) notif.update(100, 'Please select an image file.', 'error');
        else alert('Please select an image file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        const dataUrl = e.target.result;
        if (type === 'logo') {
            config.header.logoUrl = dataUrl;
            config.header.logoType = 'image';
            if (document.getElementById('logoType')) document.getElementById('logoType').value = 'image';
            if (document.getElementById('logoValue')) document.getElementById('logoValue').value = dataUrl;
        } else if (type === 'assistant') {
            config.header.avatar = dataUrl;
            if (document.getElementById('assistantAvatar')) document.getElementById('assistantAvatar').value = dataUrl;
        } else if (type === 'user') {
            config.user.avatar = dataUrl;
            if (document.getElementById('userAvatar')) document.getElementById('userAvatar').value = dataUrl;
        } else if (type === 'launcher') {
            config.launcher.imageUrl = dataUrl;
            config.launcher.iconType = 'image';
            if (document.getElementById('launcherIconType')) document.getElementById('launcherIconType').value = 'image';
            if (document.getElementById('launcherIcon')) document.getElementById('launcherIcon').value = dataUrl;
            const browseLink = document.getElementById('launcherIconLink');
            if (browseLink) browseLink.style.display = 'none';
        }
        updateDOM();
        renderChat();
        scheduleAutoSave();
    };
    reader.readAsDataURL(file);
}

function openExternalPreview() {
    // Ensure we snapshot the latest configured question flow/state from the main builder.
    try {
        updateDOM();
        renderQuestions();
    } catch (e) {
        // Non-blocking: proceed with best-effort snapshot if live refresh fails.
    }

    const sourceWidget = document.getElementById('chatWidgetPreview');
    const sourceLauncher = document.getElementById('previewLauncher');
    if (!sourceWidget) {
        const notif = showProgressNotification('Open Preview');
        if (notif) notif.update(100, 'Main preview widget not found.', 'error');
        return;
    }
    const widgetSnapshot = String(sourceWidget.outerHTML || '').replace(/<\/script/gi, '<\\/script');
    let launcherSnapshot = '';
    if (sourceLauncher) {
        const launcherClone = sourceLauncher.cloneNode(true);
        const bubbleTextEl = launcherClone.querySelector('.cw-launcher-message__text');
        if (bubbleTextEl) {
            const encoded = bubbleTextEl.getAttribute('data-bubble-text') || '';
            const fullFromAttr = encoded ? decodeURIComponent(encoded) : '';
            const fullFromDataset = (bubbleTextEl.getAttribute('data-full-text') || '').toString();
            const full = fullFromAttr || fullFromDataset || (config.launcher && config.launcher.bubbleText ? String(config.launcher.bubbleText) : '');
            if (full) bubbleTextEl.textContent = full;
        }
        launcherSnapshot = String(launcherClone.outerHTML || '').replace(/<\/script/gi, '<\\/script');
    }
    const widgetSnapshotJson = JSON.stringify(widgetSnapshot);
    const launcherSnapshotJson = JSON.stringify(launcherSnapshot);

    const stylesheetLinks = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
        .map((el) => `<link rel="stylesheet" href="${String(el.href || '').replace(/"/g, '&quot;')}">`)
        .join('\n');

    const previewRuntimeOptionsJson = JSON.stringify({
        questions: Array.isArray(config.questions) ? config.questions : [],
        transcript: (config.transcript || ''),
        assistantName: (getAssistantName() || 'Assistant'),
        launcher: {
            bubbleEnabled: !!(config.launcher && config.launcher.bubbleEnabled),
            bubbleMode: (config.launcher && config.launcher.bubbleMode) ? config.launcher.bubbleMode : 'instant',
            bubbleTimed: !!(config.launcher && config.launcher.bubbleTimed),
            bubbleDelaySec: Number((config.launcher && config.launcher.bubbleDelaySec) ?? 5),
            bubbleDurationSec: Number((config.launcher && config.launcher.bubbleDurationSec) ?? 10)
        }
    });

    const previewHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>External Widget Preview</title>
  <base href="${window.location.href}">
  ${stylesheetLinks}
  <style>
    :root { --bg:#090c1a; --bg-2:#11152a; --border:rgba(255,255,255,.14); --text:#eef2ff; --muted:#acb7d5; --accent-2:#ffc371; --accent-3:#6ad6ff; }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      color: var(--text);
      background:
        radial-gradient(900px 420px at 8% -10%, rgba(106, 214, 255, 0.15), transparent 70%),
        radial-gradient(900px 420px at 92% -10%, rgba(255, 95, 125, 0.18), transparent 70%),
        linear-gradient(165deg, var(--bg) 0%, var(--bg-2) 52%, #0f1220 100%);
    }
    .site-header { position: sticky; top: 0; z-index: 20; backdrop-filter: blur(8px); background: rgba(9,12,26,.78); border-bottom: 1px solid var(--border); }
    .header-inner { max-width: 1180px; margin: 0 auto; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .logo { font-weight: 800; letter-spacing: .6px; font-size: 18px; background: linear-gradient(90deg, var(--accent-3), #fff 48%, var(--accent-2)); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .site-nav { display: flex; gap: 20px; color: var(--muted); font-size: 14px; }
    .cta-btn { border: 1px solid rgba(255,255,255,.24); color: var(--text); background: linear-gradient(120deg, rgba(255,95,125,.18), rgba(255,195,113,.18)); border-radius: 999px; padding: 9px 16px; font-weight: 600; font-size: 13px; }
    .hero { max-width: 1180px; margin: 0 auto; padding: 70px 24px 28px; display: block; }
    .kicker { display: inline-flex; border: 1px solid var(--border); border-radius: 999px; padding: 7px 12px; color: #d8e2ff; font-size: 12px; margin-bottom: 12px; background: rgba(255,255,255,.04); }
    .hero h1 { margin: 0 0 10px; font-size: clamp(30px, 5.2vw, 52px); line-height: 1.04; letter-spacing: -.6px; }
    .hero h1 .grad { background: linear-gradient(90deg, var(--accent-3) 0%, #ffffff 45%, var(--accent-2) 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .hero p { margin: 0; color: var(--muted); font-size: 15px; line-height: 1.62; max-width: 680px; }
    .preview-grid { max-width: 1180px; margin: 0 auto; padding: 0 24px 56px; display: grid; gap: 18px; }
    .preview-card { border: 1px solid rgba(255,255,255,.14); border-radius: 18px; background: rgba(255,255,255,.03); padding: 18px; }
    .preview-card h2 { margin: 0 0 12px; font-size: 18px; color: #e2e8f0; font-weight: 700; }
    #floatingHint { color: #b9c5e1; font-size: 14px; line-height: 1.5; }
    @media (max-width: 980px) { .hero { padding-top: 56px; } .site-nav { display: none; } }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="header-inner">
      <div class="logo">Astig Media</div>
      <nav class="site-nav"><span>Home</span><span>About</span><span>Services</span><span>Works</span><span>Contact</span></nav>
      <button class="cta-btn">Create A Bot</button>
    </div>
  </header>
  <section class="hero">
    <div>
      <div class="kicker">AI-Driven Agency</div>
      <h1><span class="grad">Main Builder-Matched Preview</span></h1>
      <p>Floating widget preview uses the same runtime as the main builder.</p>
    </div>
  </section>
  <section class="preview-grid">
    <div class="preview-card">
      <h2>Floating Widget</h2>
      <div id="floatingHint">Use the launcher in the page corner. Chat scroll and buttons should work like the main builder.</div>
    </div>
  </section>
  <div id="floatingMount"></div>

  <script>
  (function () {
    var widgetHtml = ${widgetSnapshotJson};
    var launcherHtml = ${launcherSnapshotJson};
    var launcherPosition = ${JSON.stringify((config && config.launcher && config.launcher.position) ? config.launcher.position : 'bottom-right')};
    var runtimeOptions = ${previewRuntimeOptionsJson};

    function wireWidgetRuntime(root, opts) {
      if (!root) return;
      opts = opts || {};
      var questions = Array.isArray(opts.questions) ? opts.questions : [];
      var transcript = (opts.transcript || '').toString();
      var assistantName = (opts.assistantName || 'Assistant').toString();
      var questionIndex = -1;
      var widget = root.querySelector('.chat-widget');
      if (!widget) return;
      var msgList = widget.querySelector('.chat-widget__messages');
      var input = widget.querySelector('.chat-widget__input');
      var sendBtn = widget.querySelector('#previewSendBtn') || widget.querySelector('.chat-widget__send:last-of-type');
      var restartBtn = widget.querySelector('#previewRestartBtn');
      var downloadBtn = widget.querySelector('#previewDownloadBtn');
      var uploadBtn = widget.querySelector('#previewUploadBtn');
      var fileInput = widget.querySelector('#previewFileInput');
      var anchor = widget.querySelector('#previewAnchor') || widget.querySelector('.chat-widget__anchor');
      var launcher = root.querySelector('.cw-launcher');
      var initialMessagesHtml = msgList ? msgList.innerHTML : '';

      function scheduleLauncherBadgeVisibilityPreview() {
        if (!launcher) return;
        var badge = launcher.querySelector('.cw-launcher-badge');
        if (!badge) return;
        if (launcher.__badgeShowTimer) clearTimeout(launcher.__badgeShowTimer);
        if (launcher.__badgeHideTimer) clearTimeout(launcher.__badgeHideTimer);
        badge.style.display = 'none';
        launcher.__badgeShowTimer = setTimeout(function () {
          if (!launcher.contains(badge)) return;
          badge.style.display = 'flex';
          launcher.__badgeHideTimer = setTimeout(function () {
            if (launcher.contains(badge)) badge.style.display = 'none';
          }, 15000);
        }, 5000);
      }

      function scheduleLauncherBubbleVisibilityPreview() {
        if (!launcher) return;
        var bubble = launcher.querySelector('.cw-launcher-message');
        if (!bubble) return;
        var textEl = bubble.querySelector('.cw-launcher-message__text');
        if (!textEl) return;
        if (launcher.__bubbleShowTimer) clearTimeout(launcher.__bubbleShowTimer);
        if (launcher.__bubbleHideTimer) clearTimeout(launcher.__bubbleHideTimer);

        var launcherCfg = (opts && opts.launcher) ? opts.launcher : {};
        var bubbleEnabled = launcherCfg.bubbleEnabled !== false;
        if (!bubbleEnabled) {
          bubble.style.display = 'none';
          return;
        }
        var mode = (textEl.getAttribute('data-bubble-mode') || launcherCfg.bubbleMode || 'instant').toLowerCase();
        var encoded = textEl.getAttribute('data-bubble-text') || '';
        var full = encoded ? decodeURIComponent(encoded) : (textEl.textContent || '').toString();
        var bubbleTimed = !!launcherCfg.bubbleTimed;
        var delayMs = Math.max(0, Number(launcherCfg.bubbleDelaySec ?? 5)) * 1000;
        var durationMs = Math.max(0, Number(launcherCfg.bubbleDurationSec ?? 10)) * 1000;

        function renderBubbleTextNow() {
          if (mode !== 'typewriter') {
            textEl.textContent = full;
            return;
          }
          if (textEl.__typewriterTimer) clearInterval(textEl.__typewriterTimer);
          textEl.textContent = '';
          var chars = Array.from(full);
          var idx = 0;
          textEl.__typewriterTimer = setInterval(function () {
            idx += 1;
            textEl.textContent = chars.slice(0, idx).join('');
            if (idx >= chars.length) {
              clearInterval(textEl.__typewriterTimer);
              textEl.__typewriterTimer = null;
            }
          }, 22);
        }

        function showBubbleNow() {
          if (!launcher.contains(bubble)) return;
          bubble.style.display = 'block';
          renderBubbleTextNow();
        }

        if (!bubbleTimed) {
          showBubbleNow();
          return;
        }

        bubble.style.display = 'none';
        launcher.__bubbleShowTimer = setTimeout(function () {
          showBubbleNow();
          if (durationMs > 0) {
            launcher.__bubbleHideTimer = setTimeout(function () {
              if (launcher.contains(bubble)) bubble.style.display = 'none';
            }, durationMs);
          }
        }, delayMs);
      }

      function scrollBottom() {
        if (msgList) msgList.scrollTop = msgList.scrollHeight;
      }

      function addMessage(text, who) {
        var activeAnchor = getActiveAnchor();
        if (!msgList || !activeAnchor || !text) return;
        var div = document.createElement('div');
        div.className = 'msg msg--' + (who || 'me');
        var initials = ((who === 'other' ? assistantName : 'You') || 'A').substring(0, 2).toUpperCase();
        div.innerHTML = '<div class="msg__avatar">' + initials + '</div>' +
                        '<div class="msg__bubble"><div class="msg__header"><span class="msg__name">' + ((who === 'other') ? assistantName : 'You') + '</span></div><div class="msg__text"></div></div>';
        var textEl = div.querySelector('.msg__text');
        if (textEl) textEl.textContent = text;
        msgList.insertBefore(div, activeAnchor);
        scrollBottom();
        return textEl;
      }

      function addTypewriterMessage(text, who, done) {
        var textEl = addMessage(text, who);
        if (!textEl) {
          if (typeof done === 'function') done();
          return;
        }
        var full = String(text || '');
        textEl.textContent = '';
        var chars = Array.from(full);
        var idx = 0;
        var t = setInterval(function () {
          idx += 1;
          textEl.textContent = chars.slice(0, idx).join('');
          scrollBottom();
          if (idx >= chars.length) {
            clearInterval(t);
            if (typeof done === 'function') done();
          }
        }, 18);
      }

      function removeChoices() {
        if (!msgList) return;
        msgList.querySelectorAll('.chat-options').forEach(function (el) { el.remove(); });
      }

      function ensureAnchor() {
        if (!msgList) return null;
        var existingAnchor = msgList.querySelector('#previewAnchor') || msgList.querySelector('.chat-widget__anchor');
        if (existingAnchor) return existingAnchor;
        var newAnchor = document.createElement('div');
        newAnchor.className = 'chat-widget__anchor';
        newAnchor.id = 'previewAnchor';
        msgList.appendChild(newAnchor);
        return newAnchor;
      }

      function getActiveAnchor() {
        anchor = ensureAnchor();
        return anchor;
      }

      function resetConversationToBase() {
        if (!msgList) return;
        msgList.innerHTML = initialMessagesHtml;
        var activeAnchor = getActiveAnchor();
        msgList.querySelectorAll('.msg, .chat-options, .chat-widget__typing').forEach(function (el) { el.remove(); });
        if (!msgList.contains(activeAnchor)) msgList.appendChild(activeAnchor);
        removeChoices();
      }

      function addChoices(choices) {
        var activeAnchor = getActiveAnchor();
        if (!msgList || !activeAnchor || !Array.isArray(choices) || choices.length === 0) return;
        var wrap = document.createElement('div');
        wrap.className = 'chat-options';
        choices.forEach(function (choice) {
          var btn = document.createElement('button');
          btn.className = 'chat-option-btn';
          btn.type = 'button';
          btn.textContent = choice;
          wrap.appendChild(btn);
        });
        msgList.insertBefore(wrap, activeAnchor);
        scrollBottom();
      }

      function renderStep(q) {
        if (!q || typeof q !== 'object') return;
        var text = (q.text || '').toString();
        var displayMode = (q.displayMode || 'instant').toString();
        var choices = (q.type === 'choice' && q.choices)
          ? String(q.choices).split(',').map(function (c) { return c.trim(); }).filter(Boolean)
          : [];

        var afterText = function () {
          if (choices.length > 0) addChoices(choices);
        };

        if (!text) {
          afterText();
          return;
        }

        if (displayMode === 'typewriter') {
          addTypewriterMessage(text, 'other', afterText);
        } else {
          addMessage(text, 'other');
          afterText();
        }
      }

      function advanceConversation() {
        if (!questions.length) {
          if (transcript) addMessage(transcript, 'other');
          return;
        }
        questionIndex += 1;
        if (questionIndex < questions.length) {
          renderStep(questions[questionIndex]);
          return;
        }
        if (transcript) addMessage(transcript, 'other');
      }

      function handleChoice(choice) {
        removeChoices();
        addMessage(choice, 'me');
        setTimeout(advanceConversation, 240);
      }

      function handleSend() {
        if (!input) return;
        var txt = (input.value || '').trim();
        if (!txt) return;
        input.value = '';
        addMessage(txt, 'me');
        removeChoices();
        setTimeout(advanceConversation, 240);
      }

      function applyInitialTypewriterIfNeeded() {
        resetConversationToBase();
        if (!questions.length) {
          if (transcript) addMessage(transcript, 'other');
          return;
        }
        questionIndex = 0;
        renderStep(questions[0]);
      }

      if (sendBtn) sendBtn.addEventListener('click', handleSend);
      if (input) input.addEventListener('keydown', function (e) { if (e.key === 'Enter') handleSend(); });
      if (msgList) {
        msgList.addEventListener('click', function (e) {
          var targetEl = e.target && e.target.nodeType === 3 ? e.target.parentElement : e.target;
          var btn = targetEl && targetEl.closest ? targetEl.closest('.chat-option-btn') : null;
          if (!btn) return;
          e.preventDefault();
          handleChoice((btn.textContent || '').trim());
        });
      }
      if (restartBtn) restartBtn.addEventListener('click', function () {
        if (!msgList) return;
        applyInitialTypewriterIfNeeded();
        scrollBottom();
      });
      if (downloadBtn) downloadBtn.addEventListener('click', function () {
        var lines = [];
        root.querySelectorAll('.msg .msg__text').forEach(function (el) { lines.push((el.textContent || '').trim()); });
        var blob = new Blob([lines.join('\\n')], { type: 'text/plain' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'chat_transcript.txt';
        a.click();
        URL.revokeObjectURL(url);
      });
      if (uploadBtn && fileInput) {
        uploadBtn.addEventListener('click', function () { fileInput.click(); });
        fileInput.addEventListener('change', function (e) {
          if (!e.target.files || !e.target.files.length) return;
          addMessage('[File attached: ' + e.target.files[0].name + ']', 'me');
          e.target.value = '';
        });
      }

      if (msgList) {
        msgList.style.overflowY = 'auto';
        msgList.style.overflowX = 'hidden';
      }

      if (opts && opts.inline) {
        if (launcher) launcher.style.display = 'none';
        widget.style.position = 'relative';
        widget.style.left = 'auto';
        widget.style.right = 'auto';
        widget.style.top = 'auto';
        widget.style.bottom = 'auto';
        widget.style.display = 'flex';
        widget.style.zIndex = '1';
        widget.style.margin = '0';
        widget.style.maxWidth = '560px';
        widget.style.width = '100%';
      } else if (launcher) {
        var edge = 20;
        var gap = 18;
        var launcherSize = parseInt(launcher.style.width || launcher.style.height || '48', 10) || 48;
        var widgetOffset = edge + launcherSize + gap;

        launcher.style.position = 'fixed';
        launcher.style.zIndex = '99998';
        widget.style.position = 'fixed';
        widget.style.zIndex = '99999';

        launcher.style.top = '';
        launcher.style.right = '';
        launcher.style.bottom = '';
        launcher.style.left = '';
        widget.style.top = '';
        widget.style.right = '';
        widget.style.bottom = '';
        widget.style.left = '';

        if (launcherPosition === 'bottom-left') {
          launcher.style.left = edge + 'px';
          launcher.style.bottom = edge + 'px';
          widget.style.left = edge + 'px';
          widget.style.bottom = widgetOffset + 'px';
        } else if (launcherPosition === 'top-right') {
          launcher.style.right = edge + 'px';
          launcher.style.top = edge + 'px';
          widget.style.right = edge + 'px';
          widget.style.top = widgetOffset + 'px';
        } else if (launcherPosition === 'top-left') {
          launcher.style.left = edge + 'px';
          launcher.style.top = edge + 'px';
          widget.style.left = edge + 'px';
          widget.style.top = widgetOffset + 'px';
        } else {
          launcher.style.right = edge + 'px';
          launcher.style.bottom = edge + 'px';
          widget.style.right = edge + 'px';
          widget.style.bottom = widgetOffset + 'px';
        }

        widget.style.display = 'none';
        scheduleLauncherBadgeVisibilityPreview();
        scheduleLauncherBubbleVisibilityPreview();
        launcher.addEventListener('click', function () {
          widget.style.display = widget.style.display === 'none' ? 'flex' : 'none';
        });
      }
      applyInitialTypewriterIfNeeded();
      scrollBottom();
    }

    var floatingMount = document.getElementById('floatingMount');
    if (floatingMount) {
      floatingMount.innerHTML = widgetHtml + launcherHtml;
      wireWidgetRuntime(floatingMount, Object.assign({}, runtimeOptions, { inline: false }));
    }
  })();
  </script>
</body>
</html>`;

    const previewWindow = window.open('', '_blank');
    if (!previewWindow) {
        const notif = showProgressNotification('Open Preview');
        if (notif) notif.update(100, 'Popup blocked. Allow popups and click Preview again.', 'error');
        return;
    }
    previewWindow.document.open();
    previewWindow.document.write(previewHtml);
    previewWindow.document.close();
}

