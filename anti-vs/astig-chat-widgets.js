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
