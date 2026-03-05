const DEFAULT_OPTIONS = {
  primary: '#2563eb',
  borderRadius: '14px',
  launcherOffset: '20px'
};

function setCssVar(name, value) {
  if (!value) return;
  document.documentElement.style.setProperty(name, String(value));
}

export function initFloatingWidget(options = {}) {
  const cfg = { ...DEFAULT_OPTIONS, ...options };
  setCssVar('--chat--color-primary', cfg.primary);
  setCssVar('--chat--color-primary-shade-50', cfg.primary);
  setCssVar('--chat--border-radius', cfg.borderRadius);
  setCssVar('--chat--toggle--size', '56px');
  setCssVar('--chat--window--width', '380px');
  setCssVar('--chat--window--height', '640px');

  const launcher = document.querySelector('.n8n-chat .chat-window-toggle');
  if (launcher instanceof HTMLElement) {
    launcher.style.right = cfg.launcherOffset;
    launcher.style.bottom = cfg.launcherOffset;
  }
  return cfg;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initFloatingWidget(), { once: true });
} else {
  initFloatingWidget();
}
