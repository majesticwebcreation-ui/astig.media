(function (w, d) {
  var script = d.currentScript;
  var key = script ? String(script.getAttribute('data-astig-cherry-key') || '').trim() : '';
  var globalConfig = w.AstigCherryConfig;
  var registry = w.__ASTIG_CHERRY_EMBEDS || {};
  var entry = (globalConfig && typeof globalConfig === 'object')
    ? globalConfig
    : (key ? registry[key] : null);
  if (!entry || typeof entry !== 'object') return;
  if (!key) {
    key = String(entry.key || 'astig-widget-chatbot-project').trim() || 'astig-widget-chatbot-project';
  }

  var launcherCfg = entry.launcherCfg || {};
  var launcherImageUrl = String(entry.launcherImageUrl || '').trim();
  var launcherIconName = String(entry.launcherIconName || 'message-circle').trim();
  var launcherIconSvg = String(entry.launcherIconSvg || '').trim();
  var assistantName = String(entry.assistantName || 'Cherry').trim() || 'Cherry';
  var runtimeMessageType = String(entry.runtimeMessageType || 'ASTIG_CHERRY_RUNTIME_CONFIG').trim();
  var runtimePayload = entry.runtimePayload || null;
  var runtimeUrl = String(entry.runtimeUrl || '').trim();
  var frameSrcdoc = String(entry.frameSrcdoc || '').trim();

  function isImageLike(value) {
    var raw = String(value || '').trim();
    return !!raw && (/^(https?:)?\/\//i.test(raw) || /^data:/i.test(raw) || /^blob:/i.test(raw) || /^\//.test(raw) || /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(raw));
  }

  function getHeaderLogoConfig() {
    var payload = runtimePayload && typeof runtimePayload === 'object' ? runtimePayload : {};
    var branding = payload.branding && typeof payload.branding === 'object' ? payload.branding : {};
    var header = payload.header && typeof payload.header === 'object' ? payload.header : {};
    var rawSize = Number(branding.logoSize != null ? branding.logoSize : header.logoSize);
    return {
      logoType: String(branding.logoType || header.logoType || '').trim().toLowerCase(),
      logoUrl: String(branding.logoUrl || header.logoUrl || '').trim(),
      logoSize: Number.isFinite(rawSize) && rawSize > 0 ? rawSize : 22,
      logoShape: String(branding.logoShape || header.logoShape || 'circle').trim().toLowerCase(),
      offsetX: Number(header.logoOffsetX) || 0,
      offsetY: Number(header.logoOffsetY) || 0
    };
  }

  function renderFloatingHeaderLogo(el) {
    if (!el) return false;
    var logo = getHeaderLogoConfig();
    var imageUrl = logo.logoType === 'image' && isImageLike(logo.logoUrl) ? logo.logoUrl : '';
    var size = Math.max(16, Number(logo.logoSize || 22));
    var width = logo.logoShape === 'rectangle' ? Math.round(size * 1.55) : size;
    var radius = logo.logoShape === 'square' ? '4px' : (logo.logoShape === 'rounded' ? '8px' : (logo.logoShape === 'rectangle' ? '10px' : '999px'));
    el.innerHTML = '';
    el.style.width = width + 'px';
    el.style.height = size + 'px';
    el.style.borderRadius = radius;
    el.style.flexBasis = width + 'px';
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
    el.style.overflow = 'hidden';
    el.style.background = 'rgba(255,255,255,0.08)';
    el.style.border = '1px solid rgba(255,255,255,0.12)';
    el.style.color = '#ffffff';
    el.style.fontSize = Math.max(10, Math.round(size * 0.45)) + 'px';
    el.style.fontWeight = '700';
    applyFloatingHeaderLogoOffset(el);
    if (imageUrl) {
      var img = d.createElement('img');
      img.src = imageUrl;
      img.alt = assistantName + ' logo';
      img.draggable = false;
      img.referrerPolicy = 'no-referrer';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      img.style.display = 'block';
      img.style.pointerEvents = 'none';
      img.style.userSelect = 'none';
      img.style.webkitUserDrag = 'none';
      img.onerror = function () {
        el.innerHTML = assistantName.slice(0, 2).toUpperCase();
      };
      el.appendChild(img);
    } else {
      el.textContent = assistantName.slice(0, 2).toUpperCase();
    }
    return true;
  }

  var floatingLogoDragOffset = { x: 0, y: 0 };
  function getFloatingLogoStorageKey() {
    return 'astigCherryFloatingLogoOffset:' + key;
  }
  function clampFloatingLogoOffset(value, limit) {
    var next = Number(value);
    return Number.isFinite(next) ? Math.max(-limit, Math.min(limit, Math.round(next))) : 0;
  }
  function loadFloatingLogoDragOffset() {
    try {
      if (!w.localStorage) return;
      var raw = String(w.localStorage.getItem(getFloatingLogoStorageKey()) || '').trim();
      if (!raw) return;
      var parsed = JSON.parse(raw);
      floatingLogoDragOffset.x = clampFloatingLogoOffset(parsed && parsed.x, 260);
      floatingLogoDragOffset.y = clampFloatingLogoOffset(parsed && parsed.y, 180);
    } catch (err) {}
  }
  function saveFloatingLogoDragOffset() {
    try {
      if (!w.localStorage) return;
      w.localStorage.setItem(getFloatingLogoStorageKey(), JSON.stringify(floatingLogoDragOffset));
    } catch (err) {}
  }
  function applyFloatingHeaderLogoOffset(el) {
    if (!el) return;
    var logo = getHeaderLogoConfig();
    el.style.transform = 'translate(' + (logo.offsetX + floatingLogoDragOffset.x) + 'px, ' + (logo.offsetY + floatingLogoDragOffset.y) + 'px)';
  }
  function enableFloatingHeaderLogoDragging(el) {
    if (!el || el.dataset.dragBound === '1') return;
    el.dataset.dragBound = '1';
    el.style.pointerEvents = 'auto';
    el.style.cursor = 'grab';
    el.style.touchAction = 'none';
    el.style.userSelect = 'none';
    el.style.webkitUserSelect = 'none';
    el.setAttribute('draggable', 'false');
    el.addEventListener('dragstart', function (e) {
      e.preventDefault();
    });
    var dragStartX = 0;
    var dragStartY = 0;
    var originX = 0;
    var originY = 0;
    var pointerId = null;
    el.addEventListener('pointerdown', function (e) {
      if (e.button !== 0) return;
      pointerId = e.pointerId;
      el.setPointerCapture(pointerId);
      el.classList.add('is-dragging');
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      originX = floatingLogoDragOffset.x;
      originY = floatingLogoDragOffset.y;
      el.style.cursor = 'grabbing';
      e.preventDefault();
    });
    el.addEventListener('pointermove', function (e) {
      if (pointerId === null || e.pointerId !== pointerId) return;
      floatingLogoDragOffset.x = clampFloatingLogoOffset(originX + (e.clientX - dragStartX), 260);
      floatingLogoDragOffset.y = clampFloatingLogoOffset(originY + (e.clientY - dragStartY), 180);
      applyFloatingHeaderLogoOffset(el);
    });
    var finishDrag = function (e) {
      if (pointerId === null || e.pointerId !== pointerId) return;
      if (el.hasPointerCapture(pointerId)) el.releasePointerCapture(pointerId);
      pointerId = null;
      el.classList.remove('is-dragging');
      el.style.cursor = 'grab';
      saveFloatingLogoDragOffset();
    };
    el.addEventListener('pointerup', finishDrag);
    el.addEventListener('pointercancel', finishDrag);
  }

  function getLauncherIconSvg(name) {
    var icon = String(name || 'message-circle').toLowerCase();
    switch (icon) {
      case 'badge-dollar-sign':
        return '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l2.2 1.7 2.8-.2 1.1 2.6 2.4 1.4-.7 2.7.7 2.7-2.4 1.4-1.1 2.6-2.8-.2L12 21l-2.2-1.7-2.8.2-1.1-2.6-2.4-1.4.7-2.7-.7-2.7 2.4-1.4 1.1-2.6 2.8.2L12 3z"></path><path d="M14.5 9.5c0-.8-1-1.5-2.5-1.5s-2.5.7-2.5 1.8 1 1.5 2.5 1.7 2.5.7 2.5 1.8-1 1.8-2.5 1.8-2.5-.7-2.5-1.5"></path><path d="M12 7v10"></path></svg>';
      case 'headset':
        return '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 0 1 18 0"></path><path d="M21 13v5a2 2 0 0 1-2 2h-1"></path><path d="M3 13v5a2 2 0 0 0 2 2h1"></path><path d="M19 13a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2z"></path><path d="M5 13a2 2 0 0 1 2-2h1v6H7a2 2 0 0 1-2-2z"></path></svg>';
      case 'calendar-heart':
        return '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 10h18"></path><path d="M12 18l-1.35-1.23C8.4 14.73 7 13.46 7 11.5A2.5 2.5 0 0 1 9.5 9C10.54 9 11.54 9.5 12 10.28 12.46 9.5 13.46 9 14.5 9A2.5 2.5 0 0 1 17 11.5c0 1.96-1.4 3.23-3.65 5.27L12 18z"></path></svg>';
      case 'clock-4':
        return '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v6l4 2"></path></svg>';
      case 'message-circle-more':
        return '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 10h.01"></path><path d="M12 10h.01"></path><path d="M16 10h.01"></path></svg>';
      case 'image':
        return '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"></path></svg>';
      case 'message-circle':
      default:
        return '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
    }
  }

  function pushRuntimeConfig(frame, shouldRestart) {
    try {
      if (!frame || !frame.contentWindow || !runtimePayload) return;
      frame.contentWindow.postMessage({
        type: runtimeMessageType,
        payload: runtimePayload,
        restartConversation: !!shouldRestart
      }, '*');
    } catch (err) {}
  }

  function scheduleRuntimeConfigRetries(frame) {
    var delays = [0, 150, 500, 1200];
    for (var i = 0; i < delays.length; i += 1) {
      (function (delay, restartFlag) {
        w.setTimeout(function () {
          pushRuntimeConfig(frame, restartFlag);
        }, delay);
      })(delays[i], i === 0);
    }
  }

  w.__ASTIG_CHERRY_RUNTIME_NODES = w.__ASTIG_CHERRY_RUNTIME_NODES || {};
  var previousRoot = w.__ASTIG_CHERRY_RUNTIME_NODES[key];
  if (previousRoot && previousRoot.parentNode) previousRoot.parentNode.removeChild(previousRoot);
  var previousMotionStyle = d.getElementById('astig-cherry-motion-' + key);
  if (previousMotionStyle && previousMotionStyle.parentNode) previousMotionStyle.parentNode.removeChild(previousMotionStyle);

  var root = d.createElement('div');
  root.setAttribute('data-astig-cherry-runtime', key);
  root.style.position = 'fixed';
  root.style.inset = '0';
  root.style.pointerEvents = 'none';
  root.style.zIndex = '2147483000';
  root.style.fontFamily = 'Arial, sans-serif';
  (d.body || d.documentElement).appendChild(root);
  w.__ASTIG_CHERRY_RUNTIME_NODES[key] = root;

  var motionStyle = d.createElement('style');
  motionStyle.id = 'astig-cherry-motion-' + key;
  motionStyle.textContent = ''
    + '@keyframes astigLauncherPulse{0%{box-shadow:0 0 0 0 rgba(108,99,255,0.7);}70%{box-shadow:0 0 0 12px rgba(108,99,255,0);}100%{box-shadow:0 0 0 0 rgba(108,99,255,0);}}'
    + '@keyframes astigLauncherBounce{0%,20%,50%,80%,100%{transform:translateY(0);}40%{transform:translateY(-10px);}60%{transform:translateY(-5px);}}'
    + '@keyframes astigLauncherSpin{100%{transform:rotate(360deg);}}';
  (d.head || d.documentElement).appendChild(motionStyle);

  var launcherSize = Math.max(40, Number(launcherCfg.size || 48));
  var edge = 20;
  var gap = 12;
  var widgetOpen = false;

  var frame = d.createElement('iframe');
  frame.title = assistantName;
  frame.loading = 'lazy';
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  frame.allow = 'autoplay; clipboard-write';
  frame.onload = function () {
    scheduleRuntimeConfigRetries(frame);
  };
  if (runtimeUrl) {
    frame.src = runtimeUrl;
  } else {
    frame.srcdoc = frameSrcdoc;
    frame.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(frameSrcdoc);
  }
  frame.style.position = 'fixed';
  frame.style.right = edge + 'px';
  frame.style.bottom = (edge + launcherSize + gap) + 'px';
  frame.style.width = 'min(490px, calc(100vw - 24px))';
  frame.style.maxWidth = 'calc(100vw - 24px)';
  frame.style.height = 'min(700px, calc(100vh - 110px))';
  frame.style.maxHeight = 'calc(100vh - 110px)';
  frame.style.border = '0';
  frame.style.borderRadius = '20px';
  frame.style.background = '#0d111b';
  frame.style.boxShadow = '0 28px 60px rgba(0,0,0,0.38)';
  frame.style.pointerEvents = 'none';
  frame.style.opacity = '0';
  frame.style.visibility = 'hidden';
  frame.style.transition = 'opacity 220ms ease, visibility 220ms ease';
  root.appendChild(frame);

  function syncFloatingHeaderLogoVisibility() {}

  var launcher = d.createElement('button');
  launcher.type = 'button';
  launcher.setAttribute('aria-label', assistantName);
  launcher.style.position = 'fixed';
  launcher.style.right = edge + 'px';
  launcher.style.bottom = edge + 'px';
  launcher.style.width = launcherSize + 'px';
  launcher.style.height = launcherSize + 'px';
  launcher.style.padding = '0';
  launcher.style.margin = '0';
  launcher.style.display = 'flex';
  launcher.style.alignItems = 'center';
  launcher.style.justifyContent = 'center';
  launcher.style.pointerEvents = 'auto';
  launcher.style.cursor = 'pointer';
  launcher.style.border = '0';
  launcher.style.outline = 'none';
  launcher.style.color = '#ffffff';
  launcher.style.overflow = 'hidden';
  launcher.style.boxShadow = '0 16px 32px rgba(0,0,0,0.28)';
  launcher.style.zIndex = '2147483001';
  launcher.style.background = String(launcherCfg.bgColor || '#6c63ff');

  var bgStyle = String(launcherCfg.bgStyle || 'solid').toLowerCase();
  var gradientEnd = String(launcherCfg.gradientEnd || '#ff6584');
  if (bgStyle === 'gradient') {
    launcher.style.background = 'linear-gradient(135deg, ' + String(launcherCfg.bgColor || '#6c63ff') + ', ' + gradientEnd + ')';
  } else if (bgStyle === 'glass') {
    launcher.style.background = 'rgba(255,255,255,0.14)';
    launcher.style.border = '1px solid rgba(255,255,255,0.22)';
    launcher.style.backdropFilter = 'blur(12px)';
    launcher.style.webkitBackdropFilter = 'blur(12px)';
  } else if (bgStyle === 'transparent') {
    launcher.style.background = 'transparent';
    launcher.style.border = '1px solid rgba(255,255,255,0.22)';
  }

  var shape = String(launcherCfg.shape || 'circle').toLowerCase();
  launcher.style.borderRadius = shape === 'square' ? '16px' : (shape === 'rounded' ? '24px' : '999px');
  var launcherAnim = String(launcherCfg.animation || 'none').toLowerCase();
  if (launcherAnim === 'pulse') launcher.style.animation = 'astigLauncherPulse 2s infinite';
  else if (launcherAnim === 'bounce') launcher.style.animation = 'astigLauncherBounce 2s infinite';
  else if (launcherAnim === 'spin') launcher.style.animation = 'astigLauncherSpin 4s linear infinite';

  if (launcherCfg.iconType === 'image' && launcherImageUrl) {
    var img = d.createElement('img');
    img.src = launcherImageUrl;
    img.alt = assistantName;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.display = 'block';
    launcher.appendChild(img);
  } else {
    launcher.innerHTML = launcherIconSvg || getLauncherIconSvg(launcherIconName);
  }

  launcher.onclick = function () {
    widgetOpen = !widgetOpen;
    if (widgetOpen) {
      scheduleRuntimeConfigRetries(frame);
      frame.style.pointerEvents = 'auto';
      frame.style.opacity = '1';
      frame.style.visibility = 'visible';
      syncFloatingHeaderLogoVisibility();
    } else {
      frame.style.pointerEvents = 'none';
      frame.style.opacity = '0';
      frame.style.visibility = 'hidden';
      syncFloatingHeaderLogoVisibility();
    }
  };

  root.appendChild(launcher);
})(window, document);
