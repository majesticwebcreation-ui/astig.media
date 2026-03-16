document.addEventListener('DOMContentLoaded', () => {
    const DEFAULT_CHERRY_AVATAR_URL = 'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media@main/assets/templates/jarchat-source/assets/character_standin.png';
    const flowContainer = document.getElementById('conversation-flow');
    const scrollRegion = document.getElementById('chat-scroll-region');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const restartBtn = document.getElementById('restart-btn');
    const downloadBtn = document.getElementById('download-btn');
    const emailBtn = document.getElementById('email-btn');
    const formInterface = document.querySelector('.form-interface');
    const formHeader = document.querySelector('.form-header');
    const inputWrapper = document.querySelector('.input-wrapper');
    const headerTitle = document.querySelector('.brand h1');
    const headerSubtitle = document.querySelector('.brand-subtitle');
    const brandLogo = document.querySelector('.brand-logo');
    const statusDot = document.querySelector('.status-dot');
    const brandLink = document.querySelector('.brand-link');
    const runtimeMessageType = 'ASTIG_JARCHAT_RUNTIME_CONFIG';

    // Webhook URLs
    let webhookUrls = {
        production: '',
        test: '',
        chat: ''
    };
    let currentWebhookMode = 'production';
    let currentWebhookUrl = '';
    let runtimeConfig = null;
    let currentStep = 0;
    let steps = [];
    const formData = {
        sessionId: generateSessionId(),
        name: '',
        email: '',
        inquiry: ''
    };
    const dynamicStorage = {
        yes: '',
        no: ''
    };
    const AUTH_HEADER_PATTERN = /^(basic|bearer)\s+\S+/i;

    // State for interactive actions
    let isAskingForEmail = false;

    // ... (existing code) ...

    function decodeRuntimeConfig(value) {
        try {
            const normalized = String(value || '').trim();
            if (!normalized) return null;
            const binary = atob(decodeURIComponent(normalized));
            const bytes = new Uint8Array(binary.length);
            for (let index = 0; index < binary.length; index += 1) {
                bytes[index] = binary.charCodeAt(index);
            }
            return JSON.parse(new TextDecoder().decode(bytes));
        } catch (error) {
            console.warn('Unable to decode JARCHAT runtime config.', error);
            return null;
        }
    }

    function postTelemetry(kind, payload = {}) {
        try {
            if (!window.parent || window.parent === window) return;
            window.parent.postMessage({
                type: 'ASTIG_JARCHAT_TELEMETRY',
                payload: {
                    kind: String(kind || '').trim(),
                    sessionId: formData.sessionId,
                    webhookMode: currentWebhookMode,
                    webhookUrl: currentWebhookUrl,
                    ...payload
                }
            }, '*');
        } catch (error) {
            void error;
        }
    }

    function readTestingAuthContext(sourceWindow) {
        try {
            if (!sourceWindow || typeof sourceWindow !== 'object') return null;
            const raw = sourceWindow.__ASTIG_CLIENT_AUTH_TESTING;
            if (!raw || typeof raw !== 'object' || raw.enabled !== true) return null;
            const headerName = typeof raw.headerName === 'string' && raw.headerName.trim()
                ? raw.headerName.trim()
                : 'Authorization';
            const headerValue = typeof raw.headerValue === 'string' ? raw.headerValue.trim() : '';
            if (!headerValue || !AUTH_HEADER_PATTERN.test(headerValue)) return null;
            return { headerName, headerValue };
        } catch (error) {
            return null;
        }
    }

    function resolveWebhookAuthContext() {
        const runtimePreviewAuth = runtimeConfig && runtimeConfig.previewAuth && typeof runtimeConfig.previewAuth === 'object'
            ? runtimeConfig.previewAuth
            : null;
        if (runtimePreviewAuth && runtimePreviewAuth.enabled === true) {
            const headerName = typeof runtimePreviewAuth.headerName === 'string' && runtimePreviewAuth.headerName.trim()
                ? runtimePreviewAuth.headerName.trim()
                : 'Authorization';
            const headerValue = typeof runtimePreviewAuth.headerValue === 'string'
                ? runtimePreviewAuth.headerValue.trim()
                : '';
            if (headerValue && AUTH_HEADER_PATTERN.test(headerValue)) {
                return { headerName, headerValue };
            }
        }

        const localAuth = readTestingAuthContext(window);
        if (localAuth) return localAuth;

        if (window.parent && window.parent !== window) {
            const parentAuth = readTestingAuthContext(window.parent);
            if (parentAuth) return parentAuth;
        }

        return null;
    }

    function setCurrentWebhookMode(mode) {
        const nextMode = mode === 'test' || mode === 'chat' || mode === 'production' ? mode : 'production';
        currentWebhookMode = nextMode;
        currentWebhookUrl = webhookUrls[nextMode] || webhookUrls.chat || webhookUrls.production || webhookUrls.test || '';
    }

    function isImageSourceValue(value) {
        const normalized = String(value || '').trim();
        if (!normalized) return false;
        return normalized.startsWith('data:')
            || normalized.startsWith('blob:')
            || /^https?:\/\//i.test(normalized)
            || /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(normalized);
    }

    function getAssistantDisplayName() {
        const assistant = runtimeConfig && runtimeConfig.assistant && typeof runtimeConfig.assistant === 'object'
            ? runtimeConfig.assistant
            : {};
        const header = runtimeConfig && runtimeConfig.header && typeof runtimeConfig.header === 'object'
            ? runtimeConfig.header
            : {};
        if (typeof header.subtitleEmojiStripEnabled !== 'boolean') header.subtitleEmojiStripEnabled = true;
        if (typeof header.subtitleEmojiWave !== 'boolean') header.subtitleEmojiWave = true;
        if (typeof header.subtitleEmojiPray !== 'boolean') header.subtitleEmojiPray = true;
        if (typeof header.subtitleEmojiSmile !== 'boolean') header.subtitleEmojiSmile = true;
        if (typeof header.subtitleEmojiThumb !== 'boolean') header.subtitleEmojiThumb = true;
        if (typeof header.subtitleEmojiParty !== 'boolean') header.subtitleEmojiParty = true;
        return String(assistant.name || header.title || header.name || 'Cherry').trim() || 'Cherry';
    }

    function getAssistantAvatarSource() {
        const assistant = runtimeConfig && runtimeConfig.assistant && typeof runtimeConfig.assistant === 'object'
            ? runtimeConfig.assistant
            : {};
        const header = runtimeConfig && runtimeConfig.header && typeof runtimeConfig.header === 'object'
            ? runtimeConfig.header
            : {};
        const logoUrl = String(header.logoUrl || '').trim();
        const legacyHeaderAvatar = String(header.avatar || '').trim();
        if (isImageSourceValue(assistant.avatar)) return String(assistant.avatar).trim();
        if (legacyHeaderAvatar && !logoUrl && isImageSourceValue(legacyHeaderAvatar)) {
            return legacyHeaderAvatar;
        }
        return DEFAULT_CHERRY_AVATAR_URL;
    }

    function getAssistantAvatarSize() {
        const assistant = runtimeConfig && runtimeConfig.assistant && typeof runtimeConfig.assistant === 'object'
            ? runtimeConfig.assistant
            : {};
        const header = runtimeConfig && runtimeConfig.header && typeof runtimeConfig.header === 'object'
            ? runtimeConfig.header
            : {};
        const rawSize = Number(
            assistant.avatarSize != null
                ? assistant.avatarSize
                : header.avatarSize
        );
        return Number.isFinite(rawSize) && rawSize > 0 ? rawSize : 40;
    }

    function buildAssistantAvatarMarkup() {
        const assistantName = getAssistantDisplayName();
        const avatarSource = getAssistantAvatarSource();
        return `<img src="${avatarSource}" alt="${assistantName}">`;
    }

    function applyAssistantAvatarSize(avatarNode) {
        if (!(avatarNode instanceof HTMLElement)) return;
        const size = getAssistantAvatarSize();
        avatarNode.style.width = `${size}px`;
        avatarNode.style.height = `${size}px`;
        avatarNode.style.minWidth = `${size}px`;
        avatarNode.style.minHeight = `${size}px`;
    }

    function getHeaderLogoShapeStyle(header = {}) {
        const rawSize = Number(header.logoSize);
        const size = Number.isFinite(rawSize) && rawSize > 0 ? rawSize : 28;
        const shape = String(header.logoShape || 'circle').trim().toLowerCase();

        let width = size;
        let height = size;
        let borderRadius = '50%';

        switch (shape) {
            case 'rectangle':
                width = Math.round(size * 1.6);
                height = size;
                borderRadius = '12px';
                break;
            case 'rounded':
                borderRadius = '12px';
                break;
            case 'square':
                borderRadius = '0px';
                break;
            default:
                borderRadius = '50%';
                break;
        }

        const fontSize = Math.max(10, Math.round(height * 0.42));
        return { width, height, borderRadius, fontSize };
    }

    function renderHeaderLogo(header = {}) {
        if (!brandLogo) return;

        const logoType = String(header.logoType || '').trim().toLowerCase();
        const logoUrl = String(header.logoUrl || '').trim();
        const assistantName = getAssistantDisplayName();
        const { width, height, borderRadius, fontSize } = getHeaderLogoShapeStyle(header);

        brandLogo.style.width = `${width}px`;
        brandLogo.style.height = `${height}px`;
        brandLogo.style.borderRadius = borderRadius;
        brandLogo.style.fontSize = `${fontSize}px`;

        if (logoType === 'image' && isImageSourceValue(logoUrl)) {
            brandLogo.innerHTML = `<img src="${logoUrl}" alt="${assistantName} logo" style="border-radius:${borderRadius};">`;
            brandLogo.style.display = 'inline-flex';
            return;
        }

        const avatarText = String(header.logoValue || header.title || assistantName || 'A').trim().substring(0, 2).toUpperCase();
        if (avatarText) {
            brandLogo.textContent = avatarText;
            brandLogo.style.display = 'inline-flex';
        } else {
            brandLogo.textContent = '';
            brandLogo.style.display = 'none';
        }
    }

    function refreshAssistantAvatars() {
        document.querySelectorAll('.message-wrapper .avatar').forEach((avatarNode) => {
            avatarNode.innerHTML = buildAssistantAvatarMarkup();
            applyAssistantAvatarSize(avatarNode);
        });
    }

    function stripHtml(value) {
        const container = document.createElement('div');
        container.innerHTML = String(value || '');
        return (container.textContent || container.innerText || '').trim();
    }

    function getJarchatConfiguredSteps() {
        const configuredQuestions = runtimeConfig && Array.isArray(runtimeConfig.questions)
            ? runtimeConfig.questions
            : [];
        const normalizedQuestions = configuredQuestions
            .map((question) => ({
                text: String(question && question.text ? question.text : ''),
                type: String(question && question.type ? question.type : 'text').trim().toLowerCase() === 'choice' ? 'choice' : 'text',
                choices: String(question && question.choices ? question.choices : ''),
                displayMode: String(question && question.displayMode ? question.displayMode : 'instant').trim()
            }))
            .filter((question) => question.text.trim().length > 0);

        return normalizedQuestions.map((question, index) => ({
            field: index === 0 ? 'name' : index === 1 ? 'inquiry' : `question_${index + 1}`,
            question: question.text,
            placeholder: 'Type here...',
            type: question.type,
            choices: question.type === 'choice'
                ? question.choices.split(',').map((choice) => choice.trim()).filter(Boolean)
                : [],
            displayMode: question.displayMode === 'typewriter' ? 'typewriter' : 'instant'
        }));
    }

    function getActiveWebhookSelection() {
        const webhook = runtimeConfig && runtimeConfig.webhook && typeof runtimeConfig.webhook === 'object'
            ? runtimeConfig.webhook
            : {};
        const proxyUrl = String(webhook.proxyUrl || '').trim();
        if (proxyUrl) {
            return { mode: 'proxy', url: proxyUrl };
        }
        const mode = webhook.activeMode === 'test' || webhook.activeMode === 'chat' || webhook.activeMode === 'production'
            ? webhook.activeMode
            : currentWebhookMode;
        const url = mode === 'test'
            ? String(webhook.testUrl || webhookUrls.test || '').trim()
            : mode === 'chat'
                ? String(webhook.chatUrl || webhook.url || webhookUrls.chat || '').trim()
                : String(webhook.url || webhook.productionUrl || webhookUrls.production || '').trim();
        return { mode, url };
    }

    function convertHexToRgba(color, alpha = 1) {
        const raw = String(color || '').trim();
        if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(raw)) return `rgba(31, 31, 46, ${alpha})`;
        const normalized = raw.length === 4
            ? `#${raw[1]}${raw[1]}${raw[2]}${raw[2]}${raw[3]}${raw[3]}`
            : raw;
        const value = normalized.slice(1);
        const r = parseInt(value.slice(0, 2), 16);
        const g = parseInt(value.slice(2, 4), 16);
        const b = parseInt(value.slice(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function escapeAttribute(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function getConversationMediaConfig() {
        const video = runtimeConfig && runtimeConfig.video && typeof runtimeConfig.video === 'object'
            ? runtimeConfig.video
            : {};
        const imageUrl = String(video.imageUrl || '').trim();
        const videoUrl = String(video.url || '').trim();
        const layout = String(video.layout || 'inline').trim().toLowerCase() === 'background'
            ? 'background'
            : 'inline';
        const hideBehavior = String(video.hideBehavior || 'first-question').trim().toLowerCase();
        const loop = video.loop !== false;

        if (imageUrl) {
            return { type: 'image', url: imageUrl, layout, hideBehavior, loop: false };
        }

        if (videoUrl) {
            return { type: 'video', url: videoUrl, layout, hideBehavior, loop };
        }

        return { type: 'none', url: '', layout, hideBehavior, loop: false };
    }

    function ensureConversationMediaRoot() {
        if (!scrollRegion || !flowContainer) return null;
        let mediaRoot = document.getElementById('conversation-media-root');
        if (mediaRoot) return mediaRoot;
        mediaRoot = document.createElement('div');
        mediaRoot.id = 'conversation-media-root';
        mediaRoot.className = 'conversation-media-root';
        mediaRoot.hidden = true;
        scrollRegion.insertBefore(mediaRoot, flowContainer);
        return mediaRoot;
    }

    function stopConversationMediaPlayback(mediaRoot) {
        if (!mediaRoot) return;
        mediaRoot.querySelectorAll('video').forEach((videoNode) => {
            try {
                videoNode.pause();
                videoNode.removeAttribute('src');
                const sourceNode = videoNode.querySelector('source');
                if (sourceNode) sourceNode.removeAttribute('src');
                videoNode.load();
            } catch (error) {
                void error;
            }
        });
    }

    function ensureConversationMediaPlayback(mediaRoot) {
        if (!mediaRoot) return;
        const videoNode = mediaRoot.querySelector('video');
        if (!(videoNode instanceof HTMLVideoElement)) return;
        const originalUrl = String(videoNode.getAttribute('data-media-url') || '').trim();

        if (!videoNode.__astigConversationErrorBind) {
            videoNode.__astigConversationErrorBind = true;
            videoNode.addEventListener('error', () => {
                if (videoNode.__astigConversationRetried) return;
                videoNode.__astigConversationRetried = true;
                if (originalUrl) {
                    videoNode.removeAttribute('src');
                    videoNode.src = originalUrl;
                    videoNode.load();
                    const retryAttempt = videoNode.play();
                    if (retryAttempt && typeof retryAttempt.catch === 'function') {
                        retryAttempt.catch(() => {});
                    }
                }
            });
        }

        const playAttempt = videoNode.play();
        if (playAttempt && typeof playAttempt.catch === 'function') {
            playAttempt.catch(() => {
                videoNode.muted = true;
                videoNode.play().catch(() => {});
            });
        }
    }

    function renderConversationMedia() {
        const mediaRoot = ensureConversationMediaRoot();
        if (!mediaRoot || !scrollRegion) return;

        const media = getConversationMediaConfig();
        stopConversationMediaPlayback(mediaRoot);
        mediaRoot.innerHTML = '';
        mediaRoot.hidden = true;
        mediaRoot.className = 'conversation-media-root';
        scrollRegion.classList.remove('chat-scroll-region--media-bg');

        if (media.type === 'none' || !media.url) return;

        mediaRoot.hidden = false;
        mediaRoot.classList.add(
            media.layout === 'background'
                ? 'conversation-media-root--background'
                : 'conversation-media-root--inline'
        );

        if (media.type === 'image') {
            mediaRoot.innerHTML = `<img class="conversation-media-root__image" src="${escapeAttribute(media.url)}" alt="Conversation media">`;
            scrollRegion.classList.toggle('chat-scroll-region--media-bg', media.layout === 'background');
            return;
        }

        const loopAttr = media.loop ? ' loop' : '';
        mediaRoot.innerHTML =
            `<video class="conversation-media-root__video" autoplay muted playsinline preload="metadata" data-media-url="${escapeAttribute(media.url)}" src="${escapeAttribute(media.url)}"${loopAttr}></video>`;
        scrollRegion.classList.toggle('chat-scroll-region--media-bg', media.layout === 'background');
        ensureConversationMediaPlayback(mediaRoot);
    }

    function shouldKeepInlineMediaVisible() {
        const mediaRoot = document.getElementById('conversation-media-root');
        if (!(mediaRoot instanceof HTMLElement) || mediaRoot.hidden) return false;
        if (!mediaRoot.classList.contains('conversation-media-root--inline')) return false;
        return currentStep === 0 && !flowContainer.querySelector('.history-item');
    }

    function syncConversationMediaPinState() {
        const mediaRoot = document.getElementById('conversation-media-root');
        if (!(mediaRoot instanceof HTMLElement) || mediaRoot.hidden) return;
        mediaRoot.classList.toggle('conversation-media-root--pinned', shouldKeepInlineMediaVisible());
    }

    function applyRuntimeConfig(nextConfig) {
        runtimeConfig = nextConfig && typeof nextConfig === 'object' ? nextConfig : null;
        const webhook = runtimeConfig && runtimeConfig.webhook && typeof runtimeConfig.webhook === 'object'
            ? runtimeConfig.webhook
            : {};
        const converse = runtimeConfig && runtimeConfig.converse && typeof runtimeConfig.converse === 'object'
            ? runtimeConfig.converse
            : {};
        const header = runtimeConfig && runtimeConfig.header && typeof runtimeConfig.header === 'object'
            ? runtimeConfig.header
            : {};
        const theme = runtimeConfig && runtimeConfig.theme && typeof runtimeConfig.theme === 'object'
            ? runtimeConfig.theme
            : {};
        const footer = runtimeConfig && runtimeConfig.footer && typeof runtimeConfig.footer === 'object'
            ? runtimeConfig.footer
            : {};

        webhookUrls = {
            production: String(webhook.url || webhook.productionUrl || webhookUrls.production || '').trim(),
            test: String(webhook.testUrl || webhookUrls.test || '').trim(),
            chat: String(webhook.chatUrl || webhook.url || webhookUrls.chat || '').trim()
        };
        setCurrentWebhookMode(String(webhook.activeMode || currentWebhookMode || 'production').trim());
        const activeSelection = getActiveWebhookSelection();
        currentWebhookMode = String(activeSelection.mode || currentWebhookMode || 'production').trim();
        currentWebhookUrl = String(activeSelection.url || currentWebhookUrl || '').trim();

        if (theme.fontFamily) {
            document.body.style.fontFamily = String(theme.fontFamily).trim();
            if (userInput) userInput.style.fontFamily = String(theme.fontFamily).trim();
        }
    if (headerTitle) {
        const resolvedAssistantName = getAssistantDisplayName();
        const preferredHeaderTitle = String(resolvedAssistantName || header.title || header.name || headerTitle.textContent).trim();
        headerTitle.textContent = preferredHeaderTitle || headerTitle.textContent;
    }
    if (headerSubtitle) {
        const subtitleText = String(header.subtitle || '').trim();
        const subtitleEmojiUrl = String(header.subtitleEmojiUrl || '').trim();
        const showWeddingStrip = header.subtitleEmojiStripEnabled !== false;
        const emojiPieces = [];
        if (header.subtitleEmojiWave !== false) {
            emojiPieces.push(`<picture>
  <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp" type="image/webp">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" width="32" height="32">
</picture>`);
        }
        if (header.subtitleEmojiPray !== false) {
            emojiPieces.push(`<picture>
  <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f/512.webp" type="image/webp">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f64f/512.gif" alt="🙏" width="32" height="32">
</picture>`);
        }
        if (header.subtitleEmojiSmile !== false) {
            emojiPieces.push(`<picture>
  <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.webp" type="image/webp">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f600/512.gif" alt="😀" width="32" height="32">
</picture>`);
        }
        if (header.subtitleEmojiThumb !== false) {
            emojiPieces.push(`<picture>
  <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d/512.webp" type="image/webp">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d/512.gif" alt="👍" width="32" height="32">
</picture>`);
        }
        if (header.subtitleEmojiParty !== false) {
            emojiPieces.push(`<picture>
  <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.webp" type="image/webp">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.gif" alt="🎉" width="32" height="32">
</picture>`);
        }
        const weddingEmojiHtml = emojiPieces.join('');
        headerSubtitle.innerHTML = '';
        let hasSub = false;
        if (subtitleEmojiUrl) {
            const img = document.createElement('img');
            img.src = subtitleEmojiUrl;
            img.alt = subtitleText || 'Sub-header';
            img.className = 'brand-subtitle-emoji';
            img.referrerPolicy = 'no-referrer';
            img.onerror = () => {
                img.remove();
                if (!subtitleText) {
                    headerSubtitle.style.display = 'none';
                }
            };
            headerSubtitle.appendChild(img);
            hasSub = true;
        }
        if (subtitleText) {
            const span = document.createElement('span');
            span.className = 'brand-subtitle-text';
            span.textContent = subtitleText;
            headerSubtitle.appendChild(span);
            hasSub = true;
        }
        if (showWeddingStrip && weddingEmojiHtml) {
            const htmlSpan = document.createElement('span');
            htmlSpan.className = 'brand-subtitle-html';
            htmlSpan.innerHTML = weddingEmojiHtml;
            headerSubtitle.appendChild(htmlSpan);
            hasSub = true;
        }
        headerSubtitle.style.display = hasSub ? 'flex' : 'none';
        if (theme.headerTextColor) headerSubtitle.style.color = String(theme.headerTextColor).trim();
        const offsetX = Number(header.subtitleOffsetX) || 0;
        const offsetY = Number(header.subtitleOffsetY) || 0;
        headerSubtitle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
        renderHeaderLogo(header);
        if (statusDot && theme.primaryColor) {
            statusDot.style.background = theme.primaryColor;
            statusDot.style.boxShadow = `0 0 10px ${theme.primaryColor}`;
        }
        if (formHeader) {
            const headerAlpha = Math.max(0, Math.min(1, Number(theme.headerTransparency ?? 100) / 100));
            formHeader.style.background = theme.headerBgColor
                ? convertHexToRgba(String(theme.headerBgColor).trim(), headerAlpha)
                : '';
            formHeader.style.color = theme.headerTextColor ? String(theme.headerTextColor).trim() : '';
        }
        if (headerTitle && theme.headerTextColor) {
            headerTitle.style.color = String(theme.headerTextColor).trim();
        }
        document.querySelectorAll('.settings-btn').forEach((button) => {
            button.style.color = theme.headerTextColor ? String(theme.headerTextColor).trim() : '';
        });
        if (formInterface) {
            const conversationFill = String(converse.conversationFill || 'theme').trim();
            const conversationBg = String(converse.conversationBgColor || theme.bgColor || '').trim();
            const conversationGradientEnd = String(converse.conversationGradientEnd || theme.surfaceColor || '').trim();
            if (conversationFill === 'gradient' && conversationBg && conversationGradientEnd) {
                formInterface.style.background = `linear-gradient(180deg, ${conversationBg}, ${conversationGradientEnd})`;
            } else if (conversationFill === 'solid' && conversationBg) {
                formInterface.style.background = conversationBg;
            } else if (theme.mode === 'gradient' && theme.gradient && theme.gradient.start && theme.gradient.end) {
                formInterface.style.background = `linear-gradient(180deg, ${theme.gradient.start}, ${theme.gradient.end})`;
            } else if (theme.mode === 'solid' && theme.bgColor) {
                formInterface.style.background = theme.bgColor;
            } else if (theme.mode === 'transparent') {
                formInterface.style.background = 'transparent';
            } else if (theme.bgColor && theme.surfaceColor) {
                formInterface.style.background = `linear-gradient(180deg, ${theme.surfaceColor}, ${theme.bgColor})`;
            }
            if (theme.borderRadius) {
                formInterface.style.borderRadius = `${Number(theme.borderRadius) || 20}px`;
            }
        }
        if (inputWrapper) {
            const composer = converse.composer && typeof converse.composer === 'object' ? converse.composer : {};
            const composerFill = String(composer.fill || 'theme').trim();
            const composerBg = String(composer.bgColor || theme.surfaceColor || '').trim();
            const composerGradientEnd = String(composer.gradientEnd || theme.bgColor || '').trim();
            inputWrapper.style.background = 'transparent';
            if (composerFill === 'gradient' && composerBg && composerGradientEnd) {
                inputWrapper.style.background = `linear-gradient(135deg, ${composerBg}, ${composerGradientEnd})`;
                inputWrapper.style.padding = '12px 14px';
                inputWrapper.style.borderRadius = '18px';
                inputWrapper.style.borderBottom = 'none';
            } else if (composerFill === 'solid' && composerBg) {
                inputWrapper.style.background = composerBg;
                inputWrapper.style.padding = '12px 14px';
                inputWrapper.style.borderRadius = '18px';
                inputWrapper.style.borderBottom = 'none';
            } else {
                inputWrapper.style.padding = '';
                inputWrapper.style.borderRadius = '';
                inputWrapper.style.borderBottom = '';
            }
            if (composer.fontFamily) userInput.style.fontFamily = composer.fontFamily;
            if (composer.fontSizePx) userInput.style.fontSize = `${Number(composer.fontSizePx) || 14}px`;
        }
        if (sendBtn) {
            const sendButton = converse.sendButton && typeof converse.sendButton === 'object' ? converse.sendButton : {};
            const sendFill = String(sendButton.fill || 'theme').trim();
            const sendBg = String(sendButton.bgColor || theme.primaryColor || '').trim();
            const sendGradientEnd = String(sendButton.gradientEnd || theme.gradient?.end || '').trim();
            if (sendFill === 'gradient' && sendBg && sendGradientEnd) {
                sendBtn.style.background = `linear-gradient(135deg, ${sendBg}, ${sendGradientEnd})`;
            } else if (sendFill === 'solid' && sendBg) {
                sendBtn.style.background = sendBg;
            } else {
                sendBtn.style.background = '';
            }
            if (sendButton.sizePx) {
                const nextHeight = Math.max(44, Number(sendButton.sizePx) || 50);
                sendBtn.style.minHeight = `${nextHeight}px`;
                sendBtn.style.paddingLeft = '18px';
                sendBtn.style.paddingRight = '18px';
            }
            if (sendButton.shape === 'square') sendBtn.style.borderRadius = '14px';
            else if (sendButton.shape === 'rounded') sendBtn.style.borderRadius = '18px';
            else sendBtn.style.borderRadius = '999px';
            if (sendButton.iconUrl) {
                sendBtn.innerHTML = `<img src="${String(sendButton.iconUrl)}" alt="Send" style="width:20px;height:20px;object-fit:contain;">`;
            } else {
                sendBtn.textContent = 'SUBMIT';
            }
        }
        if (footer.text && brandLink) {
            brandLink.textContent = String(footer.text).trim() || brandLink.textContent;
        }
        if (footer.url && brandLink) {
            brandLink.href = String(footer.url).trim();
        }
        if (footer.textColor && brandLink) {
            brandLink.style.color = footer.textColor;
        }
        if (header.logoType === 'text' && header.logoValue && headerTitle) {
            const resolvedAssistantName = getAssistantDisplayName();
            const nextHeaderText = String(resolvedAssistantName || header.logoValue || headerTitle.textContent).trim();
            headerTitle.textContent = nextHeaderText || headerTitle.textContent;
        }

        renderConversationMedia();

        steps = getJarchatConfiguredSteps();
        const hasRenderedConversation = !!(flowContainer && flowContainer.querySelector('.message-wrapper'));
        if (flowContainer && steps.length > 0 && (!hasRenderedConversation || currentStep < 0 || currentStep > steps.length)) {
            currentStep = 0;
            flowContainer.innerHTML = '';
            renderStep();
            return;
        }
        if (currentStep === 0 && flowContainer && !flowContainer.querySelector('.history-item')) {
            flowContainer.innerHTML = '';
            renderStep();
            return;
        }

        refreshAssistantAvatars();
    }

    const initialRuntimeConfig = window.__ASTIG_JARCHAT_RUNTIME_CONFIG
        || decodeRuntimeConfig(new URLSearchParams(window.location.search).get('astigRuntimeConfig'));
    if (initialRuntimeConfig) {
        applyRuntimeConfig(initialRuntimeConfig);
    }

    window.addEventListener('message', (event) => {
        const payload = event && event.data;
        if (!payload || payload.type !== runtimeMessageType) return;
        const nextConfig = payload.payload || {};
        applyRuntimeConfig(nextConfig);
        if (nextConfig && nextConfig.restartConversation) {
            restart();
        }
    });

    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadChat);
    }

    if (emailBtn) {
        emailBtn.addEventListener('click', requestEmail);
    }

    if (restartBtn) {
        restartBtn.addEventListener('click', restart);
    }

    // ... rest of initialization ...

    function downloadChat() {
        let transcript = "Chat Transcript - Cherry\n\n";

        // Get all history items (including hidden ones)
        const historyItems = flowContainer.querySelectorAll('.history-item');
        historyItems.forEach(item => {
            const q = item.querySelector('.history-q');
            const a = item.querySelector('.history-a');

            if (q) transcript += `Cherry: ${q.innerText.replace(/\n/g, ' ')}\n`;
            if (a) transcript += `You: ${a.innerText.replace(/\n/g, ' ')}\n`;
            transcript += "\n";
        });

        // Get current step if it has content (e.g. the last response)
        const current = flowContainer.querySelector('.current-step h2');
        if (current && current.innerText) {
            transcript += `Cherry: ${current.innerText.replace(/\n/g, ' ')}\n`;
        }

        const blob = new Blob([transcript], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `chat-transcript-${new Date().toISOString().slice(0, 10)}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }

    // ... existing functions ...
    // Form State
    // Steps Definition

    steps = getJarchatConfiguredSteps();

    // Initialize
    if (!flowContainer.children.length) {
        renderStep();
    }



    function createBotMessage() {
        // Create Wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'message-wrapper';

        // Add Avatar
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'avatar';
        avatarDiv.innerHTML = buildAssistantAvatarMarkup();
        applyAssistantAvatarSize(avatarDiv);
        wrapper.appendChild(avatarDiv);

        // Add Content Area
        const stepDiv = document.createElement('div');
        stepDiv.className = 'current-step';
        wrapper.appendChild(stepDiv);

        flowContainer.appendChild(wrapper);
        return stepDiv; // Return the content div for manipulation
    }

    function createChoiceButtons(stepDiv, choices) {
        if (!(stepDiv instanceof HTMLElement) || !Array.isArray(choices) || choices.length === 0) return;
        const choiceGroup = document.createElement('div');
        choiceGroup.className = 'choice-button-group';
        choices.forEach((choice) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'choice-button';
            btn.textContent = choice;
            btn.addEventListener('click', () => {
                if (userInput) {
                    userInput.disabled = false;
                    userInput.value = '';
                }
                handleNext(choice);
            });
            choiceGroup.appendChild(btn);
        });
        stepDiv.appendChild(choiceGroup);
    }

    function renderStep() {
        // Clear previous 'current-step' classes but keep history
        archiveCurrentStep();

        if (currentStep < steps.length) {
            // Render Next Question
            const stepData = steps[currentStep];
            let qText = stepData.question;

            // Replace placeholders
            if (formData.name) {
                qText = qText.replace(/\{name\}/gi, stripHtml(formData.name));
            }
            if (formData.email) {
                qText = qText.replace(/\{email\}/gi, stripHtml(formData.email));
            }
            qText = qText.replace(/\{yes\}/gi, stripHtml(dynamicStorage.yes || ''));
            qText = qText.replace(/\{no\}/gi, stripHtml(dynamicStorage.no || ''));

            // Create Message Block with Avatar
            const stepDiv = createBotMessage();
            stepDiv.innerHTML = `<h2></h2>`;

            // Trigger prompt rendering
            const h2 = stepDiv.querySelector('h2');
            if (stepData.displayMode === 'typewriter') {
                typeText(h2, qText);
            } else {
                h2.innerHTML = qText;
            }

            if (stepData.type === 'choice' && Array.isArray(stepData.choices) && stepData.choices.length > 0) {
                createChoiceButtons(stepDiv, stepData.choices);
                userInput.placeholder = 'Select an option below...';
                userInput.value = '';
                userInput.disabled = true;
            } else {
                userInput.placeholder = stepData.placeholder;
                userInput.value = '';
                userInput.disabled = false;
                userInput.focus();
            }
        } else {
            // Submission Step
            submitForm();
        }

        scrollToBottom();
    }

    function typeText(element, html, speed = 40) {
        if (runtimeConfig && runtimeConfig.converse && runtimeConfig.converse.typingEnabled === false) {
            element.innerHTML = html;
            return;
        }
        element.innerHTML = html; // Set initial structure (hidden text)

        const textNodes = [];
        // Walk the tree to find all text nodes
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while (node = walker.nextNode()) {
            textNodes.push({ node: node, text: node.nodeValue });
            node.nodeValue = ''; // Clear text content initially
        }

        let nodeIdx = 0;
        let charIdx = 0;

        function type() {
            if (nodeIdx >= textNodes.length) return;

            const currentItem = textNodes[nodeIdx];

            if (charIdx < currentItem.text.length) {
                currentItem.node.nodeValue += currentItem.text.charAt(charIdx);
                charIdx++;
                setTimeout(type, speed);
                scrollToBottom();
            } else {
                nodeIdx++;
                charIdx = 0;
                type(); // Proceed to next text node immediately
            }
        }

        // Start typing if there is text
        if (textNodes.length > 0) {
            type();
        }
    }

    function addToHistory(answer) {
        // Find the active question wrapper content
        // The last child of flowContainer is now .message-wrapper
        const lastWrapper = flowContainer.lastElementChild;
        if (lastWrapper) {
            const activeStep = lastWrapper.querySelector('.current-step') || lastWrapper.querySelector('.history-item');
            // It might be activeStep or historyItem depending on timing, usually it's current-step when user types
            if (activeStep) {
                const answerSpan = document.createElement('span');
                answerSpan.className = 'history-a';
                answerSpan.textContent = answer;
                activeStep.appendChild(answerSpan);
            }
        }
    }

    function requestEmail() {
        if (isAskingForEmail) return; // Already asking
        isAskingForEmail = true;

        // Render Bot Question
        const stepDiv = createBotMessage();
        stepDiv.innerHTML = `<h2></h2>`;

        const h2 = stepDiv.querySelector('h2');
        typeText(h2, "To stay in touch, could you please share your email address?");

        userInput.placeholder = "Enter your email...";
        userInput.value = '';
        userInput.focus();
        scrollToBottom();
    }

    async function handleNext(forcedValue = '') {
        const text = String(forcedValue || userInput.value || '').trim();
        if (!text) return;

        // Show Answer visually
        addToHistory(text);

        if (isAskingForEmail) {
            // Handle Email Input
            formData.email = text;
            isAskingForEmail = false;

            // Archive and send logic similar to continuous chat
            archiveCurrentStep();

            // Store original inquiry if needed, or just append details
            // Temporarily piggyback on inquiry to ensure it sends useful context if webhook isn't updated to look for email field explicitly
            // But we also have formData.email set

            // We can send a specific 'inquiry' saying user provided email
            formData.inquiry = `[User provided email: ${text}]`;

            userInput.value = '';
            scrollToBottom();
            submitForm();
            return;
        }

        if (currentStep < steps.length) {
            // Save Data for wizard steps
            const currentField = steps[currentStep].field;
            formData[currentField] = text;
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
                formData.email = text;
            }
            if (text.toLowerCase() === 'yes') {
                dynamicStorage.yes = text;
                dynamicStorage.no = '';
            } else if (text.toLowerCase() === 'no') {
                dynamicStorage.no = text;
                dynamicStorage.yes = '';
            }

            currentStep++;
            userInput.value = '';
            renderStep();
        } else {
            // Continuous Chat Mode
            archiveCurrentStep();
            formData.inquiry = text; // Send new text as inquiry
            userInput.value = '';
            scrollToBottom(); // Scroll after user message archives
            submitForm();
        }
    }

    function archiveCurrentStep() {
        // Find the wrapper with current-step
        // We can search the whole container or just look at last child
        const currentWrapper = flowContainer.querySelector('.message-wrapper:has(.current-step)') || flowContainer.lastElementChild;
        // :has support is good but fallback to lastElementChild is safer if structure holds

        if (currentWrapper) {
            const previousCurrent = currentWrapper.querySelector('.current-step');
            if (previousCurrent) {
                previousCurrent.classList.remove('current-step');
                previousCurrent.classList.add('history-item');
                // Change H2 to span for history styling
                const h2 = previousCurrent.querySelector('h2');
                if (h2) {
                    const spanQ = document.createElement('span');
                    spanQ.className = 'history-q';
                    spanQ.innerHTML = h2.innerHTML; // Keep HTML for highlights
                    previousCurrent.replaceChild(spanQ, h2);
                }
            }
        }
        pruneHistory();
    }

    function pruneHistory() {
        // Prune the wrappers, not just items inside
        const wrappers = flowContainer.querySelectorAll('.message-wrapper');
        // Keep only the last 2 wrappers visible
        if (wrappers.length > 2) {
            for (let i = 0; i < wrappers.length - 2; i++) {
                wrappers[i].style.display = 'none';
            }
        }
    }

    function buildWebhookPayload() {
        const inquiryText = String(formData.inquiry || '').trim();
        const nameText = String(formData.name || '').trim();
        const primaryText = inquiryText || nameText;
        return {
            ...formData,
            message: primaryText,
            chatInput: primaryText,
            sessionId: formData.sessionId,
            formattingRules: "You must always present responses with a clear structure and readable layout.\n\nUse bold headings for main sections and insert one line break before each heading.\n\nSeparate each paragraph or section with one line break to maintain proper spacing in chat.\n\nUse bullet points for lists, numbered points for step-by-step instructions, and short paragraphs for context.\n\nOnly include headers when the response covers multiple sections.\n\nDo not include summaries at the end of long responses unless they help the user better understand the main ideas."
        };
    }

    function extractReplyFromPayload(payload, options = {}) {
        const preserveWhitespace = !!options.preserveWhitespace;
        if (payload === null || payload === undefined) return '';
        if (typeof payload === 'string') return preserveWhitespace ? payload : payload.trim();
        if (typeof payload === 'number' || typeof payload === 'boolean') return String(payload);

        if (Array.isArray(payload)) {
            for (const item of payload) {
                const candidate = extractReplyFromPayload(item, options);
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
                    const nested = extractReplyFromPayload(payload[key], options);
                    if (nested) return nested;
                }
            }
        }

        return '';
    }

    function parseReplyText(rawText, contentType = '') {
        const fallback = 'Thank you for reaching out.';
        const raw = String(rawText || '');
        const text = raw.trim();
        if (!text) return fallback;

        const contentTypeLower = String(contentType || '').toLowerCase();
        const looksJson = contentTypeLower.includes('application/json') || text.startsWith('{') || text.startsWith('[');

        if (!looksJson) return text;

        try {
            const parsed = JSON.parse(text);
            return extractReplyFromPayload(parsed) || fallback;
        } catch (error) {
            void error;
        }

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
                const fromLine = extractReplyFromPayload(parsedLine, { preserveWhitespace: true });
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

    function escapeHtml(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function formatAssistantReply(text) {
        const normalized = String(text || '')
            .replace(/\r/g, '')
            .replace(/\\n/g, '\n')
            .trim();
        if (!normalized) return '<p>Thank you for reaching out.</p>';

        const escaped = escapeHtml(normalized);
        const blocks = escaped.split(/\n{2,}/).map(block => block.trim()).filter(Boolean);
        const htmlBlocks = [];

        for (const block of blocks) {
            const lines = block.split('\n').map(line => line.trim()).filter(Boolean);
            if (!lines.length) continue;

            const isBulletList = lines.every(line => /^[-*]\s+/.test(line));
            const isNumberList = lines.every(line => /^\d+\.\s+/.test(line));

            if (isBulletList) {
                const items = lines
                    .map(line => line.replace(/^[-*]\s+/, ''))
                    .map(line => `<li>${line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</li>`)
                    .join('');
                htmlBlocks.push(`<ul>${items}</ul>`);
                continue;
            }

            if (isNumberList) {
                const items = lines
                    .map(line => line.replace(/^\d+\.\s+/, ''))
                    .map(line => `<li>${line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</li>`)
                    .join('');
                htmlBlocks.push(`<ol>${items}</ol>`);
                continue;
            }

            if (lines.length === 1 && /^([A-Z][A-Za-z0-9\s/&,-]{1,60}|.*:)$/.test(lines[0])) {
                htmlBlocks.push(`<h3>${lines[0].replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}</h3>`);
                continue;
            }

            const paragraph = lines.join('<br>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
            htmlBlocks.push(`<p>${paragraph}</p>`);
        }

        return htmlBlocks.join('');
    }

    async function submitForm() {
        // Show Loading
        const stepDiv = createBotMessage();
        const loadingHTML = `<div class="loading-dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`;
        stepDiv.innerHTML = loadingHTML;

        scrollToBottom(); // Scroll to show loading
        userInput.disabled = true;
        userInput.placeholder = "Please wait...";

        try {
            const authContext = resolveWebhookAuthContext();
            const activeSelection = getActiveWebhookSelection();
            currentWebhookMode = String(activeSelection.mode || currentWebhookMode || 'production').trim();
            currentWebhookUrl = String(activeSelection.url || currentWebhookUrl || '').trim();
            if (!currentWebhookUrl) {
                throw new Error('Webhook URL is not configured.');
            }
            const requestPayload = buildWebhookPayload();
            const headers = { 'Content-Type': 'application/json' };
            if (authContext && authContext.headerName && authContext.headerValue) {
                headers[String(authContext.headerName)] = String(authContext.headerValue);
            }
            postTelemetry('submit-start', {
                text: formData.inquiry || formData.name || '',
                webhookMode: currentWebhookMode,
                webhookUrl: currentWebhookUrl,
                authEnabled: !!(authContext && authContext.headerName && authContext.headerValue),
                authHeaderName: authContext && authContext.headerName ? String(authContext.headerName) : '',
                usingProxy: currentWebhookMode === 'proxy'
            });
            console.log("Submitting to:", currentWebhookUrl); // Debug log
            const response = await fetch(currentWebhookUrl, {
                method: 'POST',
                headers,
                body: JSON.stringify(requestPayload)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const responseText = await response.text();
            let data = {};
            try {
                data = responseText ? JSON.parse(responseText) : {};
            } catch (e) {
                console.warn("Could not parse JSON response directly, using raw parser:", e);
                data = { text: responseText };
            }

            console.log("Webhook Response:", data); // Debug log
            postTelemetry('submit-success', {
                status: response.status || 200,
                rawResponse: responseText
            });

            const botReply = parseReplyText(
                responseText,
                response.headers && typeof response.headers.get === 'function' ? response.headers.get('content-type') || '' : ''
            );

            stepDiv.innerHTML = `<div class="assistant-reply">${formatAssistantReply(botReply)}</div>`;
            scrollToBottom(); // Scroll to show bot response


        } catch (error) {
            console.error(error);
            postTelemetry('submit-error', {
                message: error.message || 'Unknown webhook error',
                webhookMode: currentWebhookMode,
                webhookUrl: currentWebhookUrl
            });
            stepDiv.innerHTML = `<h2>Error: ${error.message}</h2>`;
        } finally {
            userInput.disabled = false;
            userInput.placeholder = "Type here...";
            userInput.focus();
        }
    }





    function scrollToBottom() {
        // Use timeout to ensure DOM has updated
        setTimeout(() => {
            const scrollHost = scrollRegion || flowContainer;
            syncConversationMediaPinState();
            if (shouldKeepInlineMediaVisible()) {
                scrollHost.scrollTop = 0;
                return;
            }
            scrollHost.scrollTop = scrollHost.scrollHeight;
        }, 400);
    }

    function restart() {
        currentStep = 0;
        formData.sessionId = generateSessionId();
        formData.name = '';
        formData.inquiry = '';
        flowContainer.innerHTML = '';
        postTelemetry('restart');
        renderStep();
    }

    function generateSessionId() {
        return 'sess-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }

    // Event Listeners
    sendBtn.addEventListener('click', handleNext);
    restartBtn.addEventListener('click', restart);

    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent any default form action
            handleNext();
        }
    });

});
