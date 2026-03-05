/*__ASTIG_DEPLOY_CONFIG_START__*/
(function() {
  window.RSVPChatConfig = window.RSVPChatConfig || {};
  window.RSVPChatConfig.webhookUrl = "https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat";
  window.RSVPChatConfig.fullConfig = {"theme":{"primaryColor":"#6c63ff","bgColor":"#17171f","surfaceColor":"#1f1f2e","fontFamily":"'DM Sans', sans-serif","borderRadius":20,"mode":"solid","gradient":{"start":"#6c63ff","end":"#ff6584"},"headerBgColor":"#1f1f2e","headerTextColor":"#ffffff","topHeroMediaType":"none","topHeroMediaUrl":""},"header":{"title":"Aria","name":"Aria","status":"Online","fontFamily":"'Syne', sans-serif","nameFontSize":15,"nameFontWeight":600,"statusFontSize":12,"animation":"none","logoOffsetX":0,"logoOffsetY":0,"nameOffsetX":0,"nameOffsetY":0,"statusOffsetX":0,"statusOffsetY":0,"avatar":"A","avatarSize":40,"logoSize":24,"logoType":"text","logoUrl":""},"assistant":{"name":"Aria"},"user":{"avatar":"U","avatarSize":32},"launcher":{"position":"bottom-right","iconType":"icon","icon":"message-circle","imageUrl":"","size":48,"badgeEnabled":false,"text":"","bubbleEnabled":false,"bubbleText":"Ta-da! You've found your creative superpower spot.","bubbleMode":"instant","bubbleTimed":false,"bubbleDelaySec":5,"bubbleDurationSec":10,"bgStyle":"solid","bgColor":"#6c63ff","gradientEnd":"#ff6584","animation":"none"},"video":{"layout":"inline","hideBehavior":"first-question","loop":true,"url":"","imageUrl":""},"questions":[],"questionsStyle":"solid","webhook":{"url":"https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat","testUrl":"","chatUrl":"https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat","production":true,"externalJsUrl":"https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/anti-vs/astig-chat-widgets.js"},"footer":{"text":"POWERED BY ASTIG MEDIA","url":"","fontFamily":"'Inter', sans-serif","animation":"none","textColor":"#7070a0","fontSize":11,"position":"center"},"ui":{"showPipelineMonitor":false,"showRealtimeTelemetry":false,"showRealtimeFeed":false,"templateStyle":""}};
  try {
    if (!document.querySelector('style[data-astig-template-runtime]')) {
      var __astigTemplateStyle = document.createElement('style');
      __astigTemplateStyle.setAttribute('data-astig-template-runtime', '1');
      __astigTemplateStyle.textContent = "\n.chat-widget.chat-widget--maximum-support {\n    background: #eef2f7;\n    border-color: #d4dce7;\n    border-radius: 18px;\n    box-shadow: 0 22px 48px rgba(25, 44, 72, 0.24);\n    overflow: hidden;\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__header {\n    min-height: 250px;\n    position: relative;\n    align-items: flex-start;\n    background-image: linear-gradient(180deg, rgba(27, 104, 238, 0.78) 0%, rgba(22, 100, 236, 0.92) 100%);\n    background-size: cover;\n    background-position: center;\n    border-bottom: none;\n    padding: 20px 18px 22px;\n    overflow: hidden;\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__header > * { position: relative; z-index: 2; }\n.chat-widget.chat-widget--maximum-support .max-support-hero-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; }\n.chat-widget.chat-widget--maximum-support .chat-widget__header-avatar {\n    width: 28px; height: 28px; border-radius: 8px; background: transparent;\n    border: 1px solid rgba(255, 255, 255, 0.45); color: #ffffff; font-size: 14px; margin-top: 2px;\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__header-info { margin-left: 0; margin-top: 126px; flex: 1; min-width: 0; }\n.chat-widget.chat-widget--maximum-support .chat-widget__header-name {\n    color: #ffffff; font-size: 44px; line-height: 1.02; font-weight: 800; letter-spacing: -0.6px;\n    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__header-status {\n    display: block; margin-top: 10px; color: rgba(236, 244, 255, 0.98);\n    font-size: 12px; font-weight: 600; line-height: 1.45; max-width: 310px;\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__header-status::before { display: none; }\n.chat-widget.chat-widget--maximum-support .chat-widget__header-actions { position: absolute; right: 12px; top: 10px; gap: 6px; }\n.chat-widget.chat-widget--maximum-support #cwRestartBtn { display: none !important; }\n.chat-widget.chat-widget--maximum-support #cwCloseBtn { display: none !important; }\n.chat-widget.chat-widget--maximum-support #cwDownloadBtn {\n    width: 30px; height: 30px; border: 1px solid rgba(255, 255, 255, 0.48);\n    background: rgba(13, 52, 128, 0.28); color: #ffffff; backdrop-filter: blur(2px);\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__messages {\n    background: #eef2f7; margin-top: -34px; border-top-left-radius: 22px; border-top-right-radius: 22px;\n    padding: 12px 16px 10px; gap: 10px;\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__divider { display: none; }\n.chat-widget.chat-widget--maximum-support .msg { gap: 8px; }\n.chat-widget.chat-widget--maximum-support .msg__avatar { display: none; }\n.chat-widget.chat-widget--maximum-support .msg__bubble {\n    max-width: 320px; border-radius: 18px; padding: 4px 12px 2px; background: #ffffff; color: #1f2b3d;\n    border: 1px solid #d7deea; box-shadow: 0 3px 8px rgba(45, 70, 108, 0.06); min-height: 0;\n}\n.chat-widget.chat-widget--maximum-support .msg__header { display: none; }\n.chat-widget.chat-widget--maximum-support .msg__text { font-size: 15px; line-height: 1; margin: 0; }\n.chat-widget.chat-widget--maximum-support .chat-options { display: block; padding: 0; margin: 0; }\n.chat-widget.chat-widget--maximum-support .chat-option-btn {\n    width: 100%; display: flex; align-items: center; justify-content: space-between;\n    padding: 15px 16px; margin: 0; border-radius: 0; border: 0; border-bottom: 1px solid #dde3ed;\n    background: #ffffff; color: #1f2b3d; font-size: 16px; font-weight: 600; text-align: left;\n}\n.chat-widget.chat-widget--maximum-support .chat-option-btn:first-child { border-top-left-radius: 16px; border-top-right-radius: 16px; }\n.chat-widget.chat-widget--maximum-support .chat-option-btn:last-child { border-bottom: 0; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; }\n.chat-widget.chat-widget--maximum-support .chat-option-btn::after { content: '\\203A'; font-size: 25px; line-height: 1; color: #17263e; }\n.chat-widget.chat-widget--maximum-support .chat-option-btn:hover { transform: none; background: #f6f9ff; color: #0f1f39; }\n.chat-widget.chat-widget--maximum-support .chat-widget__input-row { background: #eef2f7; border-top: none; padding: 10px 14px 12px; }\n.chat-widget.chat-widget--maximum-support .chat-widget__input { background: #ffffff; border: 1px solid #d6deea; color: #1f2b3d; }\n.chat-widget.chat-widget--maximum-support .chat-widget__input::placeholder { color: #7d8ca3; }\n.chat-widget.chat-widget--maximum-support #cwSendBtn {\n    background: #ffffff; border: 1px solid #d6deea;\n    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.95), 0 3px 10px rgba(35, 58, 93, 0.15);\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__footer {\n    background: #eef2f7; border-top: none; padding: 10px 12px 12px;\n    color: #6e7f99; letter-spacing: 0.04em; font-weight: 600;\n}\n.chat-widget.chat-widget--orders-online {\n    width: 420px; height: 700px; background: #f4f7fb; border-color: #d7e2f2;\n    border-radius: 28px; box-shadow: 0 22px 50px rgba(28, 61, 120, 0.22); overflow: hidden;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__header {\n    background: linear-gradient(135deg, #007BFF 0%, #27c4ff 100%); border-bottom: none;\n    padding: 14px 16px 0; min-height: 120px; align-items: flex-start; flex-wrap: wrap; position: relative;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__header::after {\n    content: ''; position: absolute; left: -6%; right: -6%; bottom: -14px; height: 28px;\n    background: #f4f7fb; border-radius: 0 0 50% 50%;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__header-avatar {\n    width: 42px; height: 42px; border: 2px solid rgba(255, 255, 255, 0.66);\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); margin-top: 1px;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__header-info { margin-left: 10px; flex: 1 1 auto; min-width: 0; }\n.chat-widget.chat-widget--orders-online .chat-widget__header-name { color: #ffffff; font-size: 33px; font-weight: 700; line-height: 1.05; }\n.chat-widget.chat-widget--orders-online .chat-widget__header-name::before {\n    content: 'Chat with'; display: block; font-size: 12px; font-weight: 500; opacity: 0.92;\n    margin-bottom: 3px; letter-spacing: 0.01em;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__header-status {\n    order: 3; width: auto; margin: 10px 0 0 52px; padding: 0; color: #ecf6ff; font-size: 13px;\n    font-weight: 500; background: transparent; border: none; backdrop-filter: none; gap: 8px;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__header-status::before { width: 8px; height: 8px; background: #6dff9e; box-shadow: 0 0 8px #6dff9e; }\n.chat-widget.chat-widget--orders-online .chat-widget__header-actions { margin-left: 10px; gap: 6px; padding-top: 4px; }\n.chat-widget.chat-widget--orders-online .chat-widget__header-btn {\n    width: 24px; height: 24px; border: none; background: transparent; color: rgba(244, 252, 255, 0.96); box-shadow: none;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__header-btn:hover { background: rgba(255, 255, 255, 0.14); color: #ffffff; transform: none; }\n.chat-widget.chat-widget--orders-online .chat-widget__messages { background: #f4f7fb; padding: 22px 18px 12px; gap: 11px; }\n.chat-widget.chat-widget--orders-online .chat-widget__divider { display: none; }\n.chat-widget.chat-widget--orders-online .msg { gap: 8px; }\n.chat-widget.chat-widget--orders-online .msg__avatar,\n.chat-widget.chat-widget--orders-online .msg__header { display: none; }\n.chat-widget.chat-widget--orders-online .msg--other { justify-content: flex-end; }\n.chat-widget.chat-widget--orders-online .msg--me { justify-content: flex-start; }\n.chat-widget.chat-widget--orders-online .msg--other .msg__bubble {\n    background: #e8edf4; color: #1c2737; border-radius: 22px; border-bottom-right-radius: 12px;\n    box-shadow: 0 4px 12px rgba(35, 48, 77, 0.08);\n}\n.chat-widget.chat-widget--orders-online .msg--me .msg__bubble {\n    background: linear-gradient(135deg, #304be6 0%, #25c6f9 100%); color: #ffffff;\n    border-radius: 22px; border-bottom-left-radius: 12px; box-shadow: 0 10px 20px rgba(36, 116, 230, 0.26);\n}\n.chat-widget.chat-widget--orders-online .msg__text { font-size: 14px; line-height: 1.35; }\n.chat-widget.chat-widget--orders-online .chat-options { width: 100%; padding: 0; margin-top: 2px; gap: 8px; justify-content: flex-end; }\n.chat-widget.chat-widget--orders-online .chat-option-btn {\n    width: auto; min-width: 0; padding: 8px 18px; border-radius: 999px; border: 2px solid #2f81f9;\n    background: rgba(255, 255, 255, 0.95); color: #1f67d5; font-size: 13px; font-weight: 600;\n    box-shadow: 0 10px 18px rgba(35, 120, 221, 0.16);\n}\n.chat-widget.chat-widget--orders-online .chat-option-btn:hover { background: #eef5ff; transform: translateY(-1px); color: #1457bd; }\n.chat-widget.chat-widget--orders-online .chat-widget__input-row {\n    background: rgba(255, 255, 255, 0.76); backdrop-filter: blur(10px);\n    border-top: 1px solid rgba(193, 208, 226, 0.7); padding: 10px 12px 12px; gap: 8px;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__input { border: none; background: transparent; color: #4e6078; font-size: 15px; padding-left: 6px; }\n.chat-widget.chat-widget--orders-online .chat-widget__input::placeholder { color: #9eaac0; }\n.chat-widget.chat-widget--orders-online #cwUploadBtn,\n.chat-widget.chat-widget--orders-online #cwEmojiBtn {\n    width: 30px; height: 30px; border-radius: 8px; background: transparent;\n    border: none; color: #7f8fa7; box-shadow: none;\n}\n.chat-widget.chat-widget--orders-online #cwUploadBtn:hover,\n.chat-widget.chat-widget--orders-online #cwEmojiBtn:hover {\n    background: rgba(114, 147, 193, 0.12); color: #496ea8; transform: none;\n}\n.chat-widget.chat-widget--orders-online #cwSendBtn {\n    width: 54px; height: 54px; border: none;\n    background: linear-gradient(135deg, #256ff5 0%, #20b8ff 100%);\n    box-shadow: 0 10px 24px rgba(34, 123, 243, 0.36);\n}\n.chat-widget.chat-widget--orders-online #cwSendBtn:hover { transform: translateY(-1px) scale(1.02); }\n.chat-widget.chat-widget--orders-online .chat-widget__footer {\n    background: rgba(255, 255, 255, 0.76); border-top: none; color: #9aa7bc;\n    font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;\n}\n@media (max-width: 520px) {\n    .chat-widget.chat-widget--orders-online { width: 100%; height: 100%; border-radius: 20px; }\n}\n";
      (document.head || document.documentElement).appendChild(__astigTemplateStyle);
    }
  } catch (e) {}
})();
/*__ASTIG_DEPLOY_CONFIG_END__*/
/* AI Assist hosted script asset */
const defaultChips = [
  { label: 'Get Jury Instruction', query: 'Get Jury Instruction' },
  { label: 'Draft a Motion', query: 'Draft a Motion' },
  { label: 'Check Penalties', query: 'Check Penalties' },
  { label: 'Analyze Police Report', query: 'Analyze Police Report' }
];

function createSessionId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'sid-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isLikelyMarkdown(text) {
  return /(^#{1,3}\s)|(^[-*]\s)|(^>\s)|(```)|(\*\*.+\*\*)|(`.+`)/m.test(String(text || ''));
}

function markdownToHtml(markdown) {
  const escaped = escapeHtml(markdown);
  const lines = escaped.split(/\r?\n/);
  let html = '';
  let inList = false;
  const closeList = function () {
    if (!inList) return;
    html += '</ul>';
    inList = false;
  };
  lines.forEach(function (line) {
    if (/^\s*[-*]\s+/.test(line)) {
      if (!inList) { html += '<ul>'; inList = true; }
      html += '<li>' + line.replace(/^\s*[-*]\s+/, '') + '</li>';
      return;
    }
    closeList();
    if (/^###\s+/.test(line)) { html += '<h3>' + line.replace(/^###\s+/, '') + '</h3>'; return; }
    if (/^##\s+/.test(line)) { html += '<h2>' + line.replace(/^##\s+/, '') + '</h2>'; return; }
    if (/^#\s+/.test(line)) { html += '<h1>' + line.replace(/^#\s+/, '') + '</h1>'; return; }
    if (/^>\s?/.test(line)) { html += '<blockquote>' + line.replace(/^>\s?/, '') + '</blockquote>'; return; }
    if (!line.trim()) { html += '<p></p>'; return; }
    html += '<p>' + line + '</p>';
  });
  closeList();
  return '<div class="aa-markdown">' + html
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>') + '</div>';
}

function resolveTarget(target) {
  if (target instanceof HTMLElement) return target;
  if (typeof target === 'string' && target) return document.querySelector(target);
  return null;
}

function formatTime(date) {
  return date.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' });
}

async function parseResponse(response) {
  const contentType = (response.headers.get('content-type') || '').toLowerCase();
  const text = await response.text();
  if (contentType.includes('application/json')) {
    try { return JSON.parse(text); } catch { return text; }
  }
  if (!text) return '';
  try { return JSON.parse(text); } catch { return text; }
}

function renderPayload(outputEl, payload) {
  if (typeof payload === 'string') {
    outputEl.innerHTML = isLikelyMarkdown(payload)
      ? markdownToHtml(payload)
      : '<pre>' + escapeHtml(payload) + '</pre>';
    return;
  }
  outputEl.innerHTML = '<pre>' + escapeHtml(JSON.stringify(payload, null, 2)) + '</pre>';
}

function createChat(options = {}) {
  const target = resolveTarget(options.target);
  const webhookUrl = String(options.webhookUrl || '').trim();
  if (!target) throw new Error('AI Assist createChat: target is required for inline embed.');
  if (!webhookUrl) throw new Error('AI Assist createChat: webhookUrl is required.');

  const chips = Array.isArray(options.chips) && options.chips.length ? options.chips : defaultChips;
  const sessionId = createSessionId();

  target.innerHTML = [
    '<div class="ai-assist-widget">',
    '  <div class="aa-shell">',
    '    <section class="aa-card aa-query">',
    '      <p class="aa-kicker">Legal Workflow Console</p>',
    '      <h2 class="aa-title">Tools for the lawyers of tomorrow</h2>',
    '      <p class="aa-sub">Research you can trust and draft with confidence, from first facts to final filing.</p>',
    '      <form class="aa-form" novalidate>',
    '        <input class="aa-input" type="text" placeholder="Ask Anything..." autocomplete="off" required />',
    '        <button class="aa-send" type="submit">Send</button>',
    '      </form>',
    '      <div class="aa-chips"></div>',
    '    </section>',
    '    <section class="aa-card aa-response">',
    '      <div class="aa-response-head">',
    '        <p class="aa-query-text">Awaiting submission...</p>',
    '        <time class="aa-time" datetime="">--</time>',
    '      </div>',
    '      <div class="aa-output"><p class="aa-placeholder">Send a prompt to view webhook output.</p></div>',
    '    </section>',
    '  </div>',
    '</div>'
  ].join('');

  const form = target.querySelector('.aa-form');
  const input = target.querySelector('.aa-input');
  const submitBtn = target.querySelector('.aa-send');
  const chipsWrap = target.querySelector('.aa-chips');
  const output = target.querySelector('.aa-output');
  const queryText = target.querySelector('.aa-query-text');
  const timeEl = target.querySelector('.aa-time');

  chips.forEach(function (chip) {
    if (!chip || typeof chip !== 'object') return;
    const label = String(chip.label || chip.query || '').trim();
    const query = String(chip.query || chip.label || '').trim();
    if (!label || !query) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'aa-chip';
    btn.textContent = label;
    btn.addEventListener('click', function () {
      input.value = query;
      form.requestSubmit();
    });
    chipsWrap.appendChild(btn);
  });

  const setBusy = function (isBusy) {
    submitBtn.disabled = isBusy;
    input.disabled = isBusy;
    if (isBusy) output.innerHTML = '<pre>Loading response...</pre>';
  };

  const submitQuery = async function (query) {
    const prompt = String(query || '').trim();
    if (!prompt) return;
    const now = new Date();
    queryText.textContent = prompt;
    timeEl.textContent = formatTime(now);
    timeEl.dateTime = now.toISOString();
    setBusy(true);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: prompt, prompt: prompt, message: prompt, sessionId: sessionId })
      });
      const payload = await parseResponse(response);
      if (!response.ok) {
        const details = typeof payload === 'string' ? payload : JSON.stringify(payload, null, 2);
        throw new Error(details || ('Request failed with status ' + response.status));
      }
      renderPayload(output, payload);
    } catch (error) {
      const message = error && error.message ? error.message : 'Unable to reach webhook.';
      output.innerHTML = '<p class="aa-error">Webhook Error: ' + escapeHtml(message) + '</p>';
    } finally {
      setBusy(false);
    }
  };

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const query = input.value;
    void submitQuery(query);
  });

  return {
    root: target,
    sendMessage: function (message) { return submitQuery(message); },
    destroy: function () { target.innerHTML = ''; }
  };
}

if (typeof window !== 'undefined') {
  window.AIAssistEmbed = window.AIAssistEmbed || {};
  window.AIAssistEmbed.createChat = createChat;

  var bootFromScriptTag = function (scriptEl) {
    if (!(scriptEl instanceof HTMLScriptElement)) return;
    if (!scriptEl.hasAttribute('data-ai-assist')) return;
    var webhookUrl = String(scriptEl.dataset.webhookUrl || '').trim();
    var target = String(scriptEl.dataset.target || '#ai-assist-inline-chat').trim();
    var targetEl = null;
    if (target) {
      targetEl = document.querySelector(target);
    }
    if (!targetEl && target && target.charAt(0) === '#') {
      targetEl = document.createElement('div');
      targetEl.id = target.slice(1);
      targetEl.style.width = '100%';
      targetEl.style.minHeight = '600px';
      if (scriptEl.parentNode) {
        scriptEl.parentNode.insertBefore(targetEl, scriptEl);
      } else {
        document.body.appendChild(targetEl);
      }
    }
    if (!webhookUrl) {
      console.error('[AI Assist] Missing data-webhook-url on embed script tag.');
      return;
    }
    try {
      createChat({ webhookUrl: webhookUrl, target: target });
    } catch (error) {
      console.error('[AI Assist] Auto-init failed.', error);
    }
  };

  var runBoot = function () {
    if (document.currentScript instanceof HTMLScriptElement) {
      bootFromScriptTag(document.currentScript);
      return;
    }
    var scripts = document.querySelectorAll('script[data-ai-assist]');
    scripts.forEach(bootFromScriptTag);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runBoot, { once: true });
  } else {
    runBoot();
  }
}
