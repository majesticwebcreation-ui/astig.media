(() => {
  const CherryChat = {
    init(options = {}) {
      if (document.querySelector('.cherry-chat-iframe')) return;

      const cfg = {
        mount: options.mount || '#cherry-chatbot',
        floating: Boolean(options.floating),
        position: options.position || 'right',
        webhook: options.webhook || '',
        chatUrl: options.chatUrl || 'https://chat.yourdomain.com',
        proxy: options.proxy || '',
        mode: options.mode || 'inline'
      };

      const src = buildSrc(cfg);
      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.className = `cherry-chat-iframe ${cfg.floating ? 'floating' : 'inline'}`;
      iframe.setAttribute('title', 'Cherry Chatbot');
      iframe.loading = 'lazy';

      if (cfg.floating) {
        const launcher = buildLauncher(cfg);
        launcher.addEventListener('click', () => toggleFloating(iframe, launcher));
        document.body.appendChild(launcher);
        document.body.appendChild(iframe);
      } else {
        const mountNode = document.querySelector(cfg.mount);
        if (!mountNode) {
          console.warn('CherryChat: mount node not found, falling back to body.');
        }
        (mountNode || document.body).appendChild(iframe);
      }
    }
  };

  function buildSrc(cfg) {
    const url = new URL(cfg.chatUrl);
    if (cfg.webhook) url.searchParams.set('webhook', cfg.webhook);
    if (cfg.proxy) url.searchParams.set('proxy', cfg.proxy);
    url.searchParams.set('mode', cfg.mode);
    return url.toString();
  }

  function buildLauncher(cfg) {
    const btn = document.createElement('button');
    btn.className = `cherry-launcher ${cfg.position === 'left' ? 'left' : 'right'}`;
    btn.setAttribute('aria-label', 'Open chatbot');
    btn.innerHTML = 'Chat';
    return btn;
  }

  function toggleFloating(iframe, launcher) {
    const open = iframe.classList.toggle('open');
    launcher.classList.toggle('open', open);
  }

  window.CherryChat = CherryChat;
})();

