/*__ASTIG_DEPLOY_CONFIG_START__*/
(function() {
  var __astigDeployStamp = "2026-03-06T00:47:45.493Z";
  var __astigPrevStamp = String(window.__ASTIG_CHAT_DEPLOY_STAMP || '');
  if (__astigPrevStamp && __astigDeployStamp && __astigPrevStamp > __astigDeployStamp) { return; }
  if (__astigDeployStamp) window.__ASTIG_CHAT_DEPLOY_STAMP = __astigDeployStamp;
  window.RSVPChatConfig = window.RSVPChatConfig || {};
  window.RSVPChatConfig.webhookUrl = "https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat";
  window.RSVPChatConfig.fullConfig = {"theme":{"primaryColor":"#14b8a6","bgColor":"#0f172a","surfaceColor":"#12243d","fontFamily":"'DM Sans', sans-serif","borderRadius":18,"mode":"frosted","gradient":{"start":"#6c63ff","end":"#ff6584"},"headerBgColor":"#12243d","headerTextColor":"#e0f2fe","topHeroMediaType":"none","topHeroMediaUrl":""},"header":{"title":"River","name":"River","status":"Online","fontFamily":"'Inter', sans-serif","nameFontSize":15,"nameFontWeight":600,"statusFontSize":12,"animation":"pulse","logoOffsetX":0,"logoOffsetY":0,"nameOffsetX":20,"nameOffsetY":0,"statusOffsetX":19,"statusOffsetY":1,"avatar":"https://widjets.astigmedia.com/img/Assistant-logo.png","avatarSize":"40","logoSize":"50","logoType":"image","logoUrl":"https://widjets.astigmedia.com/img/Launcher-Logo.png"},"assistant":{"name":"River"},"user":{"avatar":"https://widjets.astigmedia.com/img/User-logo.png","avatarSize":"32"},"launcher":{"position":"bottom-right","iconType":"image","icon":"calendar-check","imageUrl":"https://widjets.astigmedia.com/img/Launcher-Logo.png","size":"48","badgeEnabled":false,"text":"","bubbleEnabled":false,"bubbleText":"Ta-da! You've found your creative superpower spot.","bubbleMode":"instant","bubbleTimed":false,"bubbleDelaySec":5,"bubbleDurationSec":10,"bgStyle":"solid","bgColor":"#14b8a6","gradientEnd":"#38bdf8","animation":"pulse"},"video":{"layout":"inline","hideBehavior":"first-question","loop":false,"url":"","imageUrl":""},"questions":[{"id":1772756462021,"text":"👋Hi I'm River. How can I help?","type":"text","displayMode":"typewriter","choices":""}],"questionsStyle":"solid","webhook":{"url":"https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat","testUrl":"","chatUrl":"https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat","activeMode":"chat","production":false,"externalJsUrl":"https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/anti-vs/astig-chat-embed-runtime.js"},"footer":{"text":"","url":"","fontFamily":"'Inter', sans-serif","animation":"none","textColor":"#7070a0","fontSize":"11","position":"center"},"ui":{"showPipelineMonitor":false,"showRealtimeTelemetry":false,"showRealtimeFeed":false,"templateStyle":""}};
  if (__astigDeployStamp) window.RSVPChatConfig.__deployedAt = __astigDeployStamp;
  try {
    var __astigTemplateStyleName = (((window.RSVPChatConfig.fullConfig || {}).ui || {}).templateStyle || '');
    console.info('Astig Media Chatbot: Deploy config loaded', { stamp: __astigDeployStamp, templateStyle: __astigTemplateStyleName });
  } catch (e) {}
  try {
    if (!document.querySelector('style[data-astig-template-runtime]')) {
      var __astigTemplateRuntimeStyleNode = document.createElement('style');
      __astigTemplateRuntimeStyleNode.setAttribute('data-astig-template-runtime', '1');
      __astigTemplateRuntimeStyleNode.textContent = "\n.chat-widget.chat-widget--maximum-support {\n    background: #eef2f7;\n    border-color: #d4dce7;\n    border-radius: 18px;\n    box-shadow: 0 22px 48px rgba(25, 44, 72, 0.24);\n    overflow: hidden;\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__header {\n    min-height: 250px;\n    position: relative;\n    align-items: flex-start;\n    background-image: linear-gradient(180deg, rgba(27, 104, 238, 0.78) 0%, rgba(22, 100, 236, 0.92) 100%);\n    background-size: cover;\n    background-position: center;\n    border-bottom: none;\n    padding: 20px 18px 22px;\n    overflow: hidden;\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__header > * { position: relative; z-index: 2; }\n.chat-widget.chat-widget--maximum-support .max-support-hero-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; }\n.chat-widget.chat-widget--maximum-support .chat-widget__header-avatar {\n    width: 28px; height: 28px; border-radius: 8px; background: transparent;\n    border: 1px solid rgba(255, 255, 255, 0.45); color: #ffffff; font-size: 14px; margin-top: 2px;\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__header-info { margin-left: 0; margin-top: 126px; flex: 1; min-width: 0; }\n.chat-widget.chat-widget--maximum-support .chat-widget__header-name {\n    color: #ffffff; font-size: 44px; line-height: 1.02; font-weight: 800; letter-spacing: -0.6px;\n    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__header-status {\n    display: block; margin-top: 10px; color: rgba(236, 244, 255, 0.98);\n    font-size: 12px; font-weight: 600; line-height: 1.45; max-width: 310px;\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__header-status::before { display: none; }\n.chat-widget.chat-widget--maximum-support .chat-widget__header-actions { position: absolute; right: 12px; top: 10px; gap: 6px; }\n.chat-widget.chat-widget--maximum-support #cwRestartBtn { display: none !important; }\n.chat-widget.chat-widget--maximum-support #cwCloseBtn { display: none !important; }\n.chat-widget.chat-widget--maximum-support #cwDownloadBtn {\n    width: 30px; height: 30px; border: 1px solid rgba(255, 255, 255, 0.48);\n    background: rgba(13, 52, 128, 0.28); color: #ffffff; backdrop-filter: blur(2px);\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__messages {\n    background: #eef2f7; margin-top: -34px; border-top-left-radius: 22px; border-top-right-radius: 22px;\n    padding: 12px 16px 10px; gap: 10px;\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__divider { display: none; }\n.chat-widget.chat-widget--maximum-support .msg { gap: 8px; }\n.chat-widget.chat-widget--maximum-support .msg__avatar { display: none; }\n.chat-widget.chat-widget--maximum-support .msg__bubble {\n    max-width: 320px; border-radius: 18px; padding: 4px 12px 2px; background: #ffffff; color: #1f2b3d;\n    border: 1px solid #d7deea; box-shadow: 0 3px 8px rgba(45, 70, 108, 0.06); min-height: 0;\n}\n.chat-widget.chat-widget--maximum-support .msg__header { display: none; }\n.chat-widget.chat-widget--maximum-support .msg__text { font-size: 15px; line-height: 1; margin: 0; }\n.chat-widget.chat-widget--maximum-support .chat-options { display: block; padding: 0; margin: 0; }\n.chat-widget.chat-widget--maximum-support .chat-option-btn {\n    width: 100%; display: flex; align-items: center; justify-content: space-between;\n    padding: 15px 16px; margin: 0; border-radius: 0; border: 0; border-bottom: 1px solid #dde3ed;\n    background: #ffffff; color: #1f2b3d; font-size: 16px; font-weight: 600; text-align: left;\n}\n.chat-widget.chat-widget--maximum-support .chat-option-btn:first-child { border-top-left-radius: 16px; border-top-right-radius: 16px; }\n.chat-widget.chat-widget--maximum-support .chat-option-btn:last-child { border-bottom: 0; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; }\n.chat-widget.chat-widget--maximum-support .chat-option-btn::after { content: '\\203A'; font-size: 25px; line-height: 1; color: #17263e; }\n.chat-widget.chat-widget--maximum-support .chat-option-btn:hover { transform: none; background: #f6f9ff; color: #0f1f39; }\n.chat-widget.chat-widget--maximum-support .chat-widget__input-row { background: #eef2f7; border-top: none; padding: 10px 14px 12px; }\n.chat-widget.chat-widget--maximum-support .chat-widget__input { background: #ffffff; border: 1px solid #d6deea; color: #1f2b3d; }\n.chat-widget.chat-widget--maximum-support .chat-widget__input::placeholder { color: #7d8ca3; }\n.chat-widget.chat-widget--maximum-support #cwSendBtn {\n    background: #ffffff; border: 1px solid #d6deea;\n    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.95), 0 3px 10px rgba(35, 58, 93, 0.15);\n}\n.chat-widget.chat-widget--maximum-support .chat-widget__footer {\n    background: #eef2f7; border-top: none; padding: 10px 12px 12px;\n    color: #6e7f99; letter-spacing: 0.04em; font-weight: 600;\n}\n.chat-widget.chat-widget--orders-online {\n    width: 420px; height: 700px; background: #f4f7fb; border-color: #d7e2f2;\n    border-radius: 28px; box-shadow: 0 22px 50px rgba(28, 61, 120, 0.22); overflow: hidden;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__header {\n    background: linear-gradient(135deg, #007BFF 0%, #27c4ff 100%); border-bottom: none;\n    padding: 14px 16px 0; min-height: 120px; align-items: flex-start; flex-wrap: wrap; position: relative;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__header::after {\n    content: ''; position: absolute; left: -6%; right: -6%; bottom: -14px; height: 28px;\n    background: #f4f7fb; border-radius: 0 0 50% 50%;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__header-avatar {\n    width: 42px; height: 42px; border: 2px solid rgba(255, 255, 255, 0.66);\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); margin-top: 1px;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__header-info { margin-left: 10px; flex: 1 1 auto; min-width: 0; }\n.chat-widget.chat-widget--orders-online .chat-widget__header-name { color: #ffffff; font-size: 33px; font-weight: 700; line-height: 1.05; }\n.chat-widget.chat-widget--orders-online .chat-widget__header-name::before {\n    content: 'Chat with'; display: block; font-size: 12px; font-weight: 500; opacity: 0.92;\n    margin-bottom: 3px; letter-spacing: 0.01em;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__header-status {\n    order: 3; width: auto; margin: 10px 0 0 52px; padding: 0; color: #ecf6ff; font-size: 13px;\n    font-weight: 500; background: transparent; border: none; backdrop-filter: none; gap: 8px;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__header-status::before { width: 8px; height: 8px; background: #6dff9e; box-shadow: 0 0 8px #6dff9e; }\n.chat-widget.chat-widget--orders-online .chat-widget__header-actions { margin-left: 10px; gap: 6px; padding-top: 4px; }\n.chat-widget.chat-widget--orders-online .chat-widget__header-btn {\n    width: 24px; height: 24px; border: none; background: transparent; color: rgba(244, 252, 255, 0.96); box-shadow: none;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__header-btn:hover { background: rgba(255, 255, 255, 0.14); color: #ffffff; transform: none; }\n.chat-widget.chat-widget--orders-online .chat-widget__messages { background: #f4f7fb; padding: 22px 18px 12px; gap: 11px; }\n.chat-widget.chat-widget--orders-online .chat-widget__divider { display: none; }\n.chat-widget.chat-widget--orders-online .msg { gap: 8px; }\n.chat-widget.chat-widget--orders-online .msg__avatar,\n.chat-widget.chat-widget--orders-online .msg__header { display: none; }\n.chat-widget.chat-widget--orders-online .msg--other { justify-content: flex-end; }\n.chat-widget.chat-widget--orders-online .msg--me { justify-content: flex-start; }\n.chat-widget.chat-widget--orders-online .msg--other .msg__bubble {\n    background: #e8edf4; color: #1c2737; border-radius: 22px; border-bottom-right-radius: 12px;\n    box-shadow: 0 4px 12px rgba(35, 48, 77, 0.08);\n}\n.chat-widget.chat-widget--orders-online .msg--me .msg__bubble {\n    background: linear-gradient(135deg, #304be6 0%, #25c6f9 100%); color: #ffffff;\n    border-radius: 22px; border-bottom-left-radius: 12px; box-shadow: 0 10px 20px rgba(36, 116, 230, 0.26);\n}\n.chat-widget.chat-widget--orders-online .msg__text { font-size: 14px; line-height: 1.35; }\n.chat-widget.chat-widget--orders-online .chat-options { width: 100%; padding: 0; margin-top: 2px; gap: 8px; justify-content: flex-end; }\n.chat-widget.chat-widget--orders-online .chat-option-btn {\n    width: auto; min-width: 0; padding: 8px 18px; border-radius: 999px; border: 2px solid #2f81f9;\n    background: rgba(255, 255, 255, 0.95); color: #1f67d5; font-size: 13px; font-weight: 600;\n    box-shadow: 0 10px 18px rgba(35, 120, 221, 0.16);\n}\n.chat-widget.chat-widget--orders-online .chat-option-btn:hover { background: #eef5ff; transform: translateY(-1px); color: #1457bd; }\n.chat-widget.chat-widget--orders-online .chat-widget__input-row {\n    background: rgba(255, 255, 255, 0.76); backdrop-filter: blur(10px);\n    border-top: 1px solid rgba(193, 208, 226, 0.7); padding: 10px 12px 12px; gap: 8px;\n}\n.chat-widget.chat-widget--orders-online .chat-widget__input { border: none; background: transparent; color: #4e6078; font-size: 15px; padding-left: 6px; }\n.chat-widget.chat-widget--orders-online .chat-widget__input::placeholder { color: #9eaac0; }\n.chat-widget.chat-widget--orders-online #cwUploadBtn,\n.chat-widget.chat-widget--orders-online #cwEmojiBtn {\n    width: 30px; height: 30px; border-radius: 8px; background: transparent;\n    border: none; color: #7f8fa7; box-shadow: none;\n}\n.chat-widget.chat-widget--orders-online #cwUploadBtn:hover,\n.chat-widget.chat-widget--orders-online #cwEmojiBtn:hover {\n    background: rgba(114, 147, 193, 0.12); color: #496ea8; transform: none;\n}\n.chat-widget.chat-widget--orders-online #cwSendBtn {\n    width: 54px; height: 54px; border: none;\n    background: linear-gradient(135deg, #256ff5 0%, #20b8ff 100%);\n    box-shadow: 0 10px 24px rgba(34, 123, 243, 0.36);\n}\n.chat-widget.chat-widget--orders-online #cwSendBtn:hover { transform: translateY(-1px) scale(1.02); }\n.chat-widget.chat-widget--orders-online .chat-widget__footer {\n    background: rgba(255, 255, 255, 0.76); border-top: none; color: #9aa7bc;\n    font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;\n}\n@media (max-width: 520px) {\n    .chat-widget.chat-widget--orders-online { width: 100%; height: 100%; border-radius: 20px; }\n}\n";
      (document.head || document.documentElement).appendChild(__astigTemplateRuntimeStyleNode);
    }
  } catch (e) {}
})();
/*__ASTIG_DEPLOY_CONFIG_END__*/
/**
 * Astig Media Chatbot Widget
 * Automatically injected widget bundle.
 * Build: 2026-03-03T04:38:59.462Z
 */
(function() {
    // Current Configuration
    const defaultBundleConfig = {"theme":{"primaryColor":"#14b8a6","bgColor":"#0f172a","surfaceColor":"#12243d","fontFamily":"'DM Sans', sans-serif","borderRadius":18,"mode":"frosted","gradient":{"start":"#6c63ff","end":"#ff6584"},"headerBgColor":"#12243d","headerTextColor":"#e0f2fe","topHeroMediaType":"none","topHeroMediaUrl":""},"header":{"title":"River","name":"River","status":"Online","fontFamily":"'Inter', sans-serif","nameFontSize":15,"nameFontWeight":600,"statusFontSize":12,"animation":"pulse","logoOffsetX":0,"logoOffsetY":0,"nameOffsetX":20,"nameOffsetY":0,"statusOffsetX":19,"statusOffsetY":1,"avatar":"https://widjets.astigmedia.com/img/Assistant-logo.png","avatarSize":"40","logoSize":"50","logoType":"image","logoUrl":"https://widjets.astigmedia.com/img/Launcher-Logo.png"},"assistant":{"name":"River"},"user":{"avatar":"https://widjets.astigmedia.com/img/User-logo.png","avatarSize":"32"},"launcher":{"position":"bottom-right","iconType":"image","icon":"calendar-check","imageUrl":"https://widjets.astigmedia.com/img/Launcher-Logo.png","size":"48","badgeEnabled":false,"text":"","bubbleEnabled":false,"bubbleText":"Ta-da! You've found your creative superpower spot.","bubbleMode":"instant","bubbleTimed":false,"bubbleDelaySec":5,"bubbleDurationSec":10,"bgStyle":"solid","bgColor":"#14b8a6","gradientEnd":"#38bdf8","animation":"pulse"},"video":{"layout":"inline","hideBehavior":"first-question","loop":false,"url":"","imageUrl":""},"questions":[{"id":1772756462021,"text":"👋Hi I'm River. How can I help?","type":"text","displayMode":"typewriter","choices":""}],"questionsStyle":"solid","webhook":{"url":"https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat","testUrl":"","chatUrl":"https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat","activeMode":"chat","production":false,"externalJsUrl":"https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/anti-vs/astig-chat-embed-runtime.js"},"footer":{"text":"","url":"","fontFamily":"'Inter', sans-serif","animation":"none","textColor":"#7070a0","fontSize":"11","position":"center"},"ui":{"showPipelineMonitor":false,"showRealtimeTelemetry":false,"showRealtimeFeed":false,"templateStyle":""}};
    const rsvp = window.RSVPChatConfig || {};
    const hasFullConfig = !!(rsvp && typeof rsvp.fullConfig === 'object' && rsvp.fullConfig);
    const config = hasFullConfig
        ? JSON.parse(JSON.stringify(rsvp.fullConfig))
        : Object.assign({}, defaultBundleConfig);
    const SEND_PLANE_ICON_DATA_URI = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9IndpbmdUb3AiIHgxPSIzNiIgeTE9Ijk4IiB4Mj0iMTYyIiB5Mj0iNTAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjODNFNkZGIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC40NCIgc3RvcC1jb2xvcj0iI0YyRjRGRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNzQiIHN0b3AtY29sb3I9IiNGNEJDNUEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjI5QTJGIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJ3aW5nQm90dG9tIiB4MT0iNzgiIHkxPSIxNDIiIHgyPSIxNjAiIHkyPSI3MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNBMTFBQzkiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjQ4IiBzdG9wLWNvbG9yPSIjRDY2Q0E3Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0YwQjE2NiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic3BpbmUiIHgxPSI3MCIgeTE9IjEyNCIgeDI9IjE1MCIgeTI9IjY2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzE2MzRBRiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNTIiIHN0b3AtY29sb3I9IiM3RDJGQUYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRDY0MzFGIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJlZGdlIiB4MT0iMzgiIHkxPSIxMzgiIHgyPSIxNjQiIHkyPSI1MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzRkI1RkYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjUyIiBzdG9wLWNvbG9yPSIjRjFGNUZGIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGQjA1RSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxmaWx0ZXIgaWQ9InNoYWRvdyIgeD0iMTgiIHk9IjI4IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEzNiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgogICAgICA8ZmVEcm9wU2hhZG93IGR4PSIwIiBkeT0iMyIgc3RkRGV2aWF0aW9uPSIyLjQiIGZsb29kLWNvbG9yPSIjMEExQzVBIiBmbG9vZC1vcGFjaXR5PSIwLjM4Ii8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CgogIDxnIGZpbHRlcj0idXJsKCNzaGFkb3cpIj4KICAgIDxwYXRoIGQ9Ik0zOCA5Ni44TDE2NCA1MEw3Mi44IDE0Mi41TDM4IDk2LjhaIiBmaWxsPSJ1cmwoI3dpbmdUb3ApIiBzdHJva2U9InVybCgjZWRnZSkiIHN0cm9rZS13aWR0aD0iMi40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICA8cGF0aCBkPSJNNzMgMTQyLjVMMTY0IDUwTDEyNi43IDEzMy41TDczIDE0Mi41WiIgZmlsbD0idXJsKCN3aW5nQm90dG9tKSIgc3Ryb2tlPSIjRUQ4Q0I3IiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogICAgPHBhdGggZD0iTTM4IDk2LjhMNjQuNSAxMTQuNUw3MyAxNDIuNUw2Ni44IDEwOC42TDM4IDk2LjhaIiBmaWxsPSJ1cmwoI3NwaW5lKSIgc3Ryb2tlPSIjMkY3QUQ4IiBzdHJva2Utd2lkdGg9IjIuMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogICAgPHBhdGggZD0iTTY2LjggMTA4LjZMMTU0LjggNTYuMkw3Ni4yIDEzNi4yIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS1vcGFjaXR5PSIwLjc4IiBzdHJva2Utd2lkdGg9IjIuNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBkPSJNNDYuNSA5OS4yTDE2MCA1Mi40IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS1vcGFjaXR5PSIwLjM1IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBkPSJNNzggMTQwTDEyNiAxMzIiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLW9wYWNpdHk9IjAuMjgiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8L2c+Cjwvc3ZnPgo=";
    function getHeaderTitle(cfg) {
        var header = (cfg && cfg.header) ? cfg.header : {};
        var assistant = (cfg && cfg.assistant) ? cfg.assistant : {};
        return String(header.title || header.name || assistant.name || 'Chat');
    }
    function getAssistantName(cfg) {
        var assistant = (cfg && cfg.assistant) ? cfg.assistant : {};
        var header = (cfg && cfg.header) ? cfg.header : {};
        return String(assistant.name || header.name || header.title || 'Assistant');
    }
    function ensureHeaderAssistantSeparation(cfg) {
        if (!cfg || typeof cfg !== 'object') return;
        if (!cfg.header || typeof cfg.header !== 'object') cfg.header = {};
        if (!cfg.assistant || typeof cfg.assistant !== 'object') cfg.assistant = {};
        var legacyName = (cfg.header.name || '').toString().trim();
        if (!cfg.header.title) cfg.header.title = legacyName || 'Aria';
        if (!cfg.assistant.name) cfg.assistant.name = legacyName || cfg.header.title || 'Aria';
        cfg.header.name = cfg.header.title;
    }
    ensureHeaderAssistantSeparation(config);
    
    // Helper used by multiple parts of the script
    const isImage = (v) => v && (typeof v === 'string') && (v.includes('://') || v.startsWith('data:') || v.match(/.(jpeg|jpg|gif|png|webp|svg)$/i));

    if (!hasFullConfig) {
        if (rsvp.webhookUrl) config.webhook.url = rsvp.webhookUrl;
        if (rsvp.themeColor) {
            config.theme.primaryColor = rsvp.themeColor;
            config.launcher.bgColor = rsvp.themeColor;
        }
        if (rsvp.themeMode) config.theme.mode = rsvp.themeMode;
        if (rsvp.bgColor) config.theme.bgColor = rsvp.bgColor;
        if (rsvp.surfaceColor) config.theme.surfaceColor = rsvp.surfaceColor;
        if (!config.theme.gradient) config.theme.gradient = {};
        if (rsvp.gradientStart) config.theme.gradient.start = rsvp.gradientStart;
        if (rsvp.gradientEnd) config.theme.gradient.end = rsvp.gradientEnd;
        if (typeof rsvp.topHeroMediaType === 'string') config.theme.topHeroMediaType = rsvp.topHeroMediaType;
        if (typeof rsvp.topHeroMediaUrl === 'string') config.theme.topHeroMediaUrl = rsvp.topHeroMediaUrl;
        if (rsvp.title) {
            config.header.title = rsvp.title;
            config.header.name = rsvp.title;
        }
        if (typeof rsvp.assistantName === 'string' && rsvp.assistantName.trim()) {
            if (!config.assistant || typeof config.assistant !== 'object') config.assistant = {};
            config.assistant.name = rsvp.assistantName.trim();
        }
        ensureHeaderAssistantSeparation(config);
        if (rsvp.assistantAvatar !== undefined) config.header.avatar = rsvp.assistantAvatar;
        if (rsvp.logoType) config.header.logoType = rsvp.logoType;
        if (rsvp.logoUrl) config.header.logoUrl = rsvp.logoUrl;
        if (rsvp.launcherIconType) config.launcher.iconType = rsvp.launcherIconType;
        if (rsvp.launcherImageUrl) config.launcher.imageUrl = rsvp.launcherImageUrl;
        if (rsvp.launcherIcon) config.launcher.icon = rsvp.launcherIcon;
        if (typeof rsvp.launcherBadgeEnabled === 'boolean') config.launcher.badgeEnabled = rsvp.launcherBadgeEnabled;
        if (typeof rsvp.launcherBadgeText === 'string') config.launcher.text = rsvp.launcherBadgeText;
        if (typeof rsvp.launcherBubbleEnabled === 'boolean') config.launcher.bubbleEnabled = rsvp.launcherBubbleEnabled;
        if (typeof rsvp.launcherBubbleText === 'string') config.launcher.bubbleText = rsvp.launcherBubbleText;
        if (typeof rsvp.launcherBubbleMode === 'string') config.launcher.bubbleMode = rsvp.launcherBubbleMode;
        if (typeof rsvp.launcherBubbleTimed === 'boolean') config.launcher.bubbleTimed = rsvp.launcherBubbleTimed;
        if (rsvp.launcherBubbleDelaySec !== undefined) {
            const delaySec = Number(rsvp.launcherBubbleDelaySec);
            if (Number.isFinite(delaySec) && delaySec >= 0) config.launcher.bubbleDelaySec = delaySec;
        }
        if (rsvp.launcherBubbleDurationSec !== undefined) {
            const durationSec = Number(rsvp.launcherBubbleDurationSec);
            if (Number.isFinite(durationSec) && durationSec >= 0) config.launcher.bubbleDurationSec = durationSec;
        }
        if (typeof rsvp.launcherPosition === 'string') config.launcher.position = rsvp.launcherPosition;
        if (rsvp.avatarUrl) { 
            config.header.logoType = 'image'; 
            config.header.logoUrl = rsvp.avatarUrl; 
            if (!rsvp.assistantAvatar) config.header.avatar = rsvp.avatarUrl; 
        }
        if (rsvp.userAvatarUrl) config.user.avatar = rsvp.userAvatarUrl;
        if (rsvp.transcript) config.transcript = rsvp.transcript;
        if (typeof rsvp.videoLayout === 'string') config.video.layout = rsvp.videoLayout;
        if (typeof rsvp.videoBehavior === 'string') config.video.hideBehavior = rsvp.videoBehavior;
        if (typeof rsvp.videoLoop === 'boolean') config.video.loop = rsvp.videoLoop;
        if (typeof rsvp.videoUrl === 'string') config.video.url = rsvp.videoUrl;
        if (typeof rsvp.videoImageUrl === 'string') config.video.imageUrl = rsvp.videoImageUrl;
    }
    
    // Inject CSS immediately
    const style = document.createElement('style');
    style.innerHTML = "\n    :root {\n        --w-bg: #dfe8f1;\n        --w-surface: #d5dee8;\n        --w-border: #2a2a3d;\n        --w-accent: #5aa7d9;\n        --w-accent-2: #ff6584; /* Helper */\n        --w-me-bg: #5aa7d9;\n        --w-me-text: #ffffff;\n        --w-other-bg: #2a2a3d;\n        --w-other-text: #e8e8f0;\n        --w-muted: #7070a0;\n        --w-input-bg: #111118;\n        --w-radius: 30px;\n        --w-bubble-r: 16px;\n        --avatar-size-bot: 24px;\n        --avatar-size-user: 0px;\n        --font-family: 'DM Sans', sans-serif;\n    }\n    \n    .chat-widget {\n        width: 490px; height: 700px;\n        background: var(--w-bg);\n        border-radius: var(--w-radius);\n        border: 1px solid var(--w-border);\n        display: flex; flex-direction: column;\n        overflow: hidden;\n        position: relative;\n        font-family: var(--font-family);\n        box-shadow: 0 10px 40px rgba(0,0,0,0.2);\n    }\n    .chat-widget.mode-transparent .chat-widget__messages { background: transparent; }\n\n    .chat-widget__conversation-media { position: sticky; top: 0; z-index: 0; width: 100%; height: 220px; min-height: 220px; max-height: 220px; flex: 0 0 220px; overflow-anchor: none; margin: 0 0 12px 0; border-radius: 12px; overflow: hidden; border: none; background: #ffffff; opacity: 1; margin-bottom: 0; }\n    .chat-widget__conversation-media.is-hiding { animation: videoFadeAway 0.8s ease forwards; pointer-events: none; }\n    .chat-widget__conversation-video { width: 100%; height: 100%; display: block; object-fit: contain; object-position: center center; background: #ffffff; }\n    .chat-widget__conversation-image { width: 100%; height: 100%; display: block; object-fit: contain; object-position: center center; background: #ffffff; }\n    \n    .chat-widget__header { display: flex; align-items: center; justify-content: flex-start; gap: 4px; padding: 16px 20px; background: #dfe8f1; border-bottom: 1px solid var(--w-border); }\n    .chat-widget__header-avatar { width: 56px; height: 56px; font-size: 28px; border-radius: 50%; background: var(--w-accent); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; overflow: hidden; }\n    .chat-widget__header-name { color: #5e6873; font-weight: 600; font-family: 'Syne', sans-serif; font-size: 15px; }\n    .chat-widget__header-info { flex: 1; margin-left: -1px; }\n    .chat-widget__header-status { font-size: 12px; font-family: 'Syne', sans-serif; color: var(--w-muted); display: flex; align-items: center; gap: 5px; }\n    .chat-widget__header-status::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 6px #4ade80; display: inline-block; }\n    \n    .chat-widget__header-btn { width: 32px; height: 32px; border-radius: 50%; background: transparent; border: 1px solid var(--w-border); cursor: pointer; color: var(--w-muted); display: flex; align-items: center; justify-content: center; transition: background .2s, color .2s; }\n    .chat-widget__header-btn:hover { background: var(--w-border); color: #e8e8f5; }\n    \n    .chat-widget__messages { flex: 1; padding: 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 14px; }\n    .chat-widget__messages::-webkit-scrollbar { width: 4px; }\n    .chat-widget__messages::-webkit-scrollbar-thumb { background: var(--w-border); border-radius: 4px; }\n    \n    .chat-widget__divider { display: flex; align-items: center; gap: 10px; color: var(--w-muted); font-size: 11px; text-transform: uppercase; margin: 0 0 4px 0; }\n    .chat-widget__messages.video-hidden .chat-widget__divider { margin: 0 0 4px 0; }\n    .chat-widget__divider::before, .chat-widget__divider::after { content: ''; flex: 1; height: 1px; background: var(--w-border); }\n    .chat-widget__messages:not(.video-hidden) .msg, .chat-widget__messages:not(.video-hidden) .chat-widget__typing { animation: none; }\n    .chat-widget__divider, .msg, .chat-widget__typing, .chat-options, #cwAnchor { position: relative; z-index: 3; }\n    .chat-widget__messages.chat-widget__messages--media-bg { position: relative; }\n    .chat-widget__messages.chat-widget__messages--media-bg .chat-widget__conversation-media { position: absolute; inset: 0; z-index: 0; width: 100%; height: 100%; min-height: 100%; max-height: 100%; margin: 0; border-radius: 0; opacity: .28; pointer-events: none; }\n    .chat-widget__messages.chat-widget__messages--media-bg .chat-widget__divider, .chat-widget__messages.chat-widget__messages--media-bg .msg, .chat-widget__messages.chat-widget__messages--media-bg .chat-widget__typing, .chat-widget__messages.chat-widget__messages--media-bg .chat-options, .chat-widget__messages.chat-widget__messages--media-bg #cwAnchor { position: relative; z-index: 3; }\n    \n    .msg { display: flex; gap: 10px; align-items: flex-end; animation: msgIn 280ms cubic-bezier(.34, 1.4, .64, 1) both; }\n    .msg--me { flex-direction: row-reverse; }\n    .msg__avatar { width: var(--avatar-size-bot); height: var(--avatar-size-bot); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: #fff; background: linear-gradient(135deg, var(--w-accent), var(--w-accent-2)); flex-shrink: 0; overflow: hidden; }\n    .msg--me .msg__avatar { width: var(--avatar-size-user); height: var(--avatar-size-user); background: linear-gradient(135deg, var(--w-accent), #a78bfa); }\n    .msg__bubble { display: flex; flex-direction: column; width: fit-content; min-width: 64px; max-width: 320px; padding: 4px 12px 2px; border-radius: var(--w-bubble-r); position: relative; min-height: 0; }\n    .msg--other .msg__bubble { background: var(--w-other-bg); color: var(--w-other-text); border-bottom-left-radius: 4px; }\n    .msg--me .msg__bubble { background: var(--w-me-bg); color: var(--w-me-text); border-bottom-right-radius: 4px; box-shadow: 0 4px 20px rgba(108, 99, 255, .35); }\n    .msg__header { display: flex; align-items: baseline; gap: 0; margin-bottom: 2px; }\n    .msg__name { font-size: 10px; font-weight: 600; opacity: .75; }\n    .msg__name::after { content: ', '; }\n    .msg__time { font-size: 9px; opacity: .55; margin-left: 2px; }\n    .msg__text { font-size: 15px; line-height: 1; white-space: pre-wrap; overflow-wrap: anywhere; margin:0; }\n    .msg__text p { margin: 0 0 16px 0; }\n    .msg__text p:last-child { margin-bottom: 0; }\n    .msg__text ul, .msg__text ol { margin: 8px 0; padding-left: 20px; }\n    .msg__text li { margin-bottom: 4px; }\n    .msg__text h1, .msg__text h2, .msg__text h3, .msg__text h4 { margin: 12px 0 8px 0; font-weight: 600; font-size: 16px; line-height: 1.3;}\n    .msg__text h1:first-child, .msg__text h2:first-child, .msg__text h3:first-child, .msg__text h4:first-child { margin-top: 0; }\n    .msg__text a { color: inherit; text-decoration: underline; font-weight: 500;}\n    .msg__text strong { font-weight: 600; }\n    \n    .chat-widget__input-row { padding: 14px; background: var(--w-surface); display: flex; gap: 10px; border-top: 1px solid var(--w-border); }\n    .chat-widget__footer { padding: 8px 14px 12px; border-top: 1px solid var(--w-border); display: none; align-items: center; min-height: 24px; }\n    .chat-widget__footer a, .chat-widget__footer span { line-height: 1.35; }\n    .chat-widget__input { flex: 1; padding: 10px 16px; border-radius: 24px; border: 1px solid var(--w-border); background: var(--w-input-bg); color: white; outline: none; }\n    .chat-widget__send { width: 42px; height: 42px; border-radius: 50%; background: #f8fbff; border: 1px solid #d8e2ef; color: white; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform .15s; flex-shrink:0; box-shadow: inset 0 2px 2px rgba(255, 255, 255, 0.95), inset 0 -2px 3px rgba(177, 188, 204, 0.45), 0 8px 18px rgba(35, 53, 82, 0.28); }\n    .chat-widget__send:hover { transform: scale(1.08); }\n    .chat-widget__send:active { transform: scale(.95); }\n    .chat-widget__send-plane { width: 48px; height: 48px; object-fit: contain; display: block; pointer-events: none; filter: drop-shadow(0 1px 1px rgba(9, 18, 38, 0.35)); }\n    #cwSendBtn { width: 50px; height: 50px; background: linear-gradient(145deg, #4cc9ff 0%, #2f8cff 55%, #1f6be6 100%); border: 1px solid rgba(189, 226, 255, 0.9); box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.65), inset 0 -4px 8px rgba(9, 54, 139, 0.45), 0 9px 18px rgba(8, 30, 78, 0.44); transition: transform .14s ease, box-shadow .14s ease, filter .14s ease; animation: sendBtnIdle 2s ease-in-out infinite; }\n    #cwSendBtn:hover { transform: translateY(-2px) scale(1.03); box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.72), inset 0 -4px 8px rgba(7, 44, 118, 0.52), 0 12px 22px rgba(8, 30, 78, 0.48); filter: saturate(1.08); }\n    #cwSendBtn:active { animation: none; transform: translateY(2px) scale(0.96); box-shadow: inset 0 2px 4px rgba(3, 24, 67, 0.55), inset 0 -1px 2px rgba(255, 255, 255, 0.22), 0 4px 10px rgba(6, 20, 48, 0.34); }\n    #cwSendBtn .chat-widget__send-plane { filter: drop-shadow(0 1px 1px rgba(9, 18, 38, 0.35)); }\n    .chat-widget__send-icon { width: 18px; height: 18px; object-fit: contain; display: block; }\n    \n    .chat-options { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; justify-content: flex-end; padding: 0 14px; }\n    .chat-option-btn { padding: 8px 16px; border-radius: 20px; border: 1px solid var(--w-accent); background: transparent; color: var(--w-accent); font-size: 13px; cursor: pointer; transition: all 0.2s; font-family: var(--font-family); }\n    .chat-option-btn:hover { background: var(--w-accent); color: white; }\n    .chat-option-btn.gradient { border: none; background: linear-gradient(135deg, var(--w-accent), var(--w-accent-2)); color: white; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); }\n    .chat-option-btn.gradient:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3); }\n\n    .chat-widget__typing { display: flex; align-items: flex-end; gap: 8px; animation: msgIn 280ms ease both; }\n    .typing-bubble { background: var(--w-other-bg); border-radius: var(--w-bubble-r); border-bottom-left-radius: 4px; padding: 14px 18px; display: flex; gap: 5px; align-items: center; }\n    .typing-stack { display: flex; flex-direction: column; gap: 6px; }\n    .typing-status { font-size: 11px; line-height: 1.2; color: var(--w-muted); opacity: .95; }\n    .typing-status.is-visible { animation: slowTypingPulse 1.2s ease-in-out infinite; }\n    .typing-dot { width: 7px; height: 7px; background: var(--w-muted); border-radius: 50%; animation: typeBounce 1.1s ease-in-out infinite; }\n    .typing-dot:nth-child(1) { animation-delay: 0s; }\n    .typing-dot:nth-child(2) { animation-delay: .18s; }\n    .typing-dot:nth-child(3) { animation-delay: .36s; }\n    @keyframes typeBounce { 0%, 80%, 100% { transform: translateY(0); opacity: .55; } 40% { transform: translateY(-6px); opacity: 1; } }\n    @keyframes slowTypingPulse { 0%, 100% { opacity: .55; } 50% { opacity: 1; } }\n    @keyframes videoFadeAway { from { opacity: 1; height: 360px; margin-bottom: 0; } to { opacity: 0; height: 0; margin-bottom: 0; } }\n\n    @keyframes msgIn { from { opacity: 0; transform: translateY(12px) scale(.97); } to { opacity: 1; transform: none; } }\n    @keyframes sendBtnIdle { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-1px); } }\n    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }\n    @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(108, 99, 255, 0.7); } 70% { box-shadow: 0 0 0 10px rgba(108, 99, 255, 0); } 100% { box-shadow: 0 0 0 0 rgba(108, 99, 255, 0); } }\n    @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-10px); } 60% { transform: translateY(-5px); } }\n    @keyframes spin { 100% { transform: rotate(360deg); } }\n    @keyframes headerSlideUp { from { opacity: .65; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }\n    \n    .anim-pulse { animation: pulse 2s infinite; }\n    .anim-bounce { animation: bounce 2s infinite; }\n    .anim-spin { animation: spin 4s linear infinite; }\n    .anim-header-pulse { animation: pulse 2s infinite; }\n    .anim-header-fade { animation: fadeIn 0.8s ease-out; }\n    .anim-header-slide-up { animation: headerSlideUp 0.6s cubic-bezier(0.25, 0.8, 0.25, 1); }\n    \n    .chat-widget.chat-widget--support-reference { background: linear-gradient(180deg, #e3ebf3 0%, #dbe5ee 100%); border-color: #c8d3de; border-radius: 30px; box-shadow: 0 22px 52px rgba(45, 61, 84, 0.26); }\n    .chat-widget.chat-widget--support-reference .chat-widget__header { position: relative; background: transparent; border-bottom: none; padding: 18px 16px 8px; }\n    .chat-widget.chat-widget--support-reference .chat-widget__header-actions { display: flex; gap: 8px; margin-left: auto; }\n    .chat-widget.chat-widget--support-reference #cwCloseBtn { position: absolute; top: 18px; right: 22px; z-index: 11; width: 44px; height: 44px; border-radius: 50%; display: flex !important; align-items: center; justify-content: center; animation: none; background: linear-gradient(180deg, #d7e0e9 0%, #c7d2dd 100%); border: 1px solid rgba(154, 168, 184, 0.34); color: #5d6a77; box-shadow: 0 0 0 1px rgba(255,255,255,0.42), inset 0 1px 0 rgba(255,255,255,0.96), inset 0 -1px 1px rgba(123,140,159,0.28), 0 3px 7px rgba(56,69,90,0.16); }\n    .chat-widget.chat-widget--support-reference .chat-widget__header-info { flex: 0 0 auto; width: fit-content; margin-left: 6px; background: rgba(177, 189, 202, 0.44); border: 1px solid rgba(154, 169, 184, 0.42); padding: 5px 8px; border-radius: 999px; max-width: 140px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n    .chat-widget.chat-widget--support-reference .chat-widget__header-name { color: #667381; font-size: 13px; font-weight: 600; letter-spacing: 0; display: inline-flex; align-items: center; gap: 6px; }\n    .chat-widget.chat-widget--support-reference .chat-widget__header-name::after { content: ''; width: 7px; height: 7px; border-radius: 50%; background: #6fd38f; box-shadow: 0 0 0 0 rgba(111, 211, 143, 0.45); animation: supportOnlinePulse 1.5s ease-out infinite; }\n    .chat-widget.chat-widget--support-reference .chat-widget__header-status { display: none; }\n    .chat-widget.chat-widget--support-reference .chat-widget__messages { padding: 8px 16px 14px; gap: 12px; }\n    .chat-widget.chat-widget--support-reference .chat-widget__divider { display: none; }\n    .chat-widget.chat-widget--support-reference .msg { gap: 7px; }\n    .chat-widget.chat-widget--support-reference .msg__avatar { box-shadow: none; }\n    .chat-widget.chat-widget--support-reference .msg--me .msg__avatar { display: none; }\n    .chat-widget.chat-widget--support-reference .msg__bubble { display: inline-flex; flex-direction: row; align-items: center; justify-content: center; height: auto; padding: 4px 12px 2px !important; border-radius: 18px; max-width: 320px; min-height: 0; }\n    .chat-widget.chat-widget--support-reference .msg--other .msg__bubble { background: #ced8e1; color: #5a6673; border-bottom-left-radius: 18px; }\n    .chat-widget.chat-widget--support-reference .msg--me .msg__bubble { background: #0c0c0f; color: #eef2f7; border-bottom-right-radius: 18px; box-shadow: none; }\n    .chat-widget.chat-widget--support-reference .msg__header { display: none; }\n    .chat-widget.chat-widget--support-reference .msg__text { font-size: 15px; line-height: 1 !important; margin: 0; padding: 0; display: inline !important; }\n    .chat-widget.chat-widget--support-reference .msg__text p { margin: 0 !important; display: inline !important; }\n    .chat-widget.chat-widget--support-reference .msg__text > * { margin: 0 !important; }\n    .chat-widget.chat-widget--support-reference .msg__text * { margin: 0 !important; padding: 0 !important; line-height: 1 !important; }\n    .chat-widget.chat-widget--support-reference .msg__text br:last-child { display: none !important; }\n    .chat-widget.chat-widget--support-reference .typing-bubble { background: #ced8e1; border-bottom-left-radius: 18px; }\n    .chat-widget.chat-widget--support-reference .chat-widget__input-row { padding: 10px 12px 14px; border-top: none; background: transparent; gap: 8px; }\n    .chat-widget.chat-widget--support-reference .chat-widget__input { order: 1; color: #697685; background: rgba(187, 198, 210, 0.55); border: 1px solid rgba(162, 175, 189, 0.5); box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.45); }\n    .chat-widget.chat-widget--support-reference .chat-widget__input::placeholder { color: #7a8795; }\n    .chat-widget.chat-widget--support-reference #cwUploadBtn, .chat-widget.chat-widget--support-reference #cwUploadBtnExtra, .chat-widget.chat-widget--support-reference #cwSendBtn { width: 44px; height: 44px; order: 2; animation: none; background: linear-gradient(180deg, #d7e0e9 0%, #c7d2dd 100%); border: 1px solid rgba(154, 168, 184, 0.34); color: #5d6a77; box-shadow: 0 0 0 1px rgba(255,255,255,0.42), inset 0 1px 0 rgba(255,255,255,0.96), inset 0 -1px 1px rgba(123,140,159,0.28), 0 3px 7px rgba(56,69,90,0.16); }\n    .chat-widget.chat-widget--support-reference #cwUploadBtn, .chat-widget.chat-widget--support-reference #cwUploadBtnExtra { position: absolute; top: 18px; z-index: 8; order: initial; }\n    .chat-widget.chat-widget--support-reference #cwUploadBtn { right: 126px !important; }\n    .chat-widget.chat-widget--support-reference #cwUploadBtnExtra { right: 74px !important; }\n    .chat-widget.chat-widget--support-reference #cwUploadBtn:hover, .chat-widget.chat-widget--support-reference #cwUploadBtnExtra:hover, .chat-widget.chat-widget--support-reference #cwSendBtn:hover, .chat-widget.chat-widget--support-reference #cwCloseBtn:hover { transform: translateY(-1px); filter: none; }\n    .chat-widget.chat-widget--support-reference #cwUploadBtn:active, .chat-widget.chat-widget--support-reference #cwUploadBtnExtra:active, .chat-widget.chat-widget--support-reference #cwSendBtn:active, .chat-widget.chat-widget--support-reference #cwCloseBtn:active { transform: translateY(0); }\n    @keyframes supportOnlinePulse { 0% { box-shadow: 0 0 0 0 rgba(111,211,143,0.42); opacity: 1; } 70% { box-shadow: 0 0 0 7px rgba(111,211,143,0); opacity: .88; } 100% { box-shadow: 0 0 0 0 rgba(111,211,143,0); opacity: 1; } }\n\n    \n    \n\n    .cw-launcher {\n        box-shadow: 0 4px 15px rgba(0,0,0,0.2);\n    }\n\n    .cw-launcher-badge {\n        position: absolute;\n        background: #1f1f2e;\n        color: white;\n        padding: 10px 18px;\n        border-radius: 12px;\n        font-size: 14px;\n        font-weight: 600;\n        white-space: nowrap;\n        box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n        z-index: 99999;\n        pointer-events: none;\n        animation: fadeInBadge 0.3s ease-out forwards;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .cw-launcher-badge.pos-left { right: 100%; margin-right: 15px; }\n    .cw-launcher-badge.pos-right { left: 100%; margin-left: 15px; }\n\n    .cw-launcher-message {\n        position: absolute;\n        max-width: 260px;\n        min-width: 180px;\n        background: #ffffff;\n        color: #2a2a2a;\n        border-radius: 16px;\n        padding: 12px 14px;\n        font-size: 14px;\n        font-weight: 600;\n        line-height: 1.35;\n        box-shadow: 0 12px 26px rgba(0,0,0,0.16);\n        z-index: 99999;\n        pointer-events: none;\n    }\n    .cw-launcher-message.pos-left { right: 0; }\n    .cw-launcher-message.pos-right { left: 0; }\n    .cw-launcher-message.pos-above { bottom: calc(100% + 14px); }\n    .cw-launcher-message.pos-below { top: calc(100% + 14px); }\n    .cw-launcher-message__text { display: block; white-space: normal; word-break: break-word; }\n    .cw-launcher-message__tail {\n        position: absolute;\n        width: 0;\n        height: 0;\n        border-left: 10px solid transparent;\n        border-right: 10px solid transparent;\n    }\n    .cw-launcher-message.pos-above .cw-launcher-message__tail { bottom: -9px; right: 28px; border-top: 10px solid #ffffff; }\n    .cw-launcher-message.pos-below .cw-launcher-message__tail { top: -9px; right: 28px; border-bottom: 10px solid #ffffff; }\n\n    @keyframes fadeInBadge {\n        from { opacity: 0; transform: translateX(10px); }\n        to { opacity: 1; transform: translateX(0); }\n    }\n    ";
    document.head.appendChild(style);

    function injectVisibilitySafetyStyles() {
        if (document.getElementById('astig-chat-safety-styles')) return;
        const safety = document.createElement('style');
        safety.id = 'astig-chat-safety-styles';
        safety.textContent = [
            '#astig-chat-wrapper{position:fixed !important;inset:0 !important;z-index:2147483646 !important;pointer-events:none !important;display:block !important;visibility:visible !important;}',
            '#astig-chat-wrapper #cwLauncher{z-index:2147483647 !important;pointer-events:auto !important;display:flex !important;visibility:visible !important;opacity:1 !important;}',
            '#astig-chat-wrapper #chatWidget{z-index:2147483647 !important;pointer-events:auto !important;}'
        ].join('');
        document.head.appendChild(safety);
    }

    function applyVisibilitySafetyStyles(wrapper) {
        if (!wrapper) return;
        wrapper.style.setProperty('position', 'fixed', 'important');
        wrapper.style.setProperty('inset', '0', 'important');
        wrapper.style.setProperty('z-index', '2147483646', 'important');
        wrapper.style.setProperty('pointer-events', 'none', 'important');
        wrapper.style.setProperty('display', 'block', 'important');
        wrapper.style.setProperty('visibility', 'visible', 'important');

        const launcher = wrapper.querySelector('#cwLauncher');
        if (launcher) {
            launcher.style.setProperty('z-index', '2147483647', 'important');
            launcher.style.setProperty('pointer-events', 'auto', 'important');
            launcher.style.setProperty('display', 'flex', 'important');
            launcher.style.setProperty('visibility', 'visible', 'important');
            launcher.style.setProperty('opacity', '1', 'important');
        }

        const widget = wrapper.querySelector('#chatWidget');
        if (widget) {
            widget.style.setProperty('z-index', '2147483647', 'important');
            widget.style.setProperty('pointer-events', 'auto', 'important');
        }
    }
    
    function initDependencies() {
        console.log('Astig Media Chatbot: Loading dependencies...');
        if (!window.marked) {
            const mScript = document.createElement('script');
            mScript.src = "https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js";
            mScript.onload = () => { console.log('Astig Media Chatbot: Marked loaded.'); loadLucide(); };
            mScript.onerror = () => { console.error('Astig Media Chatbot: Failed to load Marked.'); loadLucide(); };
            document.head.appendChild(mScript);
        } else {
            loadLucide();
        }
    }

    function loadLucide() {
        if (!window.lucide) {
            const script = document.createElement('script');
            script.src = "https://unpkg.com/lucide@latest";
            script.onload = () => { 
                console.log('Astig Media Chatbot: Lucide loaded.');
                if(window.lucide) window.lucide.createIcons({ root: document.getElementById('astig-chat-wrapper') });
            };
            script.onerror = () => console.error('Astig Media Chatbot: Failed to load Lucide.');
            document.head.appendChild(script);
        } else {
            if(window.lucide) window.lucide.createIcons({ root: document.getElementById('astig-chat-wrapper') });
        }
    }

    function buildConversationMediaHtml() {
        const hasConfiguredVideoUrl = !!(config.video && typeof config.video.url === 'string');
        const configuredVideoUrl = hasConfiguredVideoUrl ? config.video.url.trim() : '';
        const configuredImageUrl = (config.video && typeof config.video.imageUrl === 'string') ? config.video.imageUrl.trim() : '';
        const resolvedVideoUrl = configuredImageUrl ? '' : (hasConfiguredVideoUrl ? configuredVideoUrl : 'https://widjets.astigmedia.com/vid/DJ.mp4');
        const shouldLoop = !(config.video && config.video.loop === false);
        const loopAttr = shouldLoop ? ' loop' : '';

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

    // --- PROGRESSIVE RENDERING: Launcher Rendered First ---
    function renderLauncher() {
        console.log('Astig Media Chatbot: Rendering Launcher...');
        injectVisibilitySafetyStyles();
        const existingWrapper = document.getElementById('astig-chat-wrapper');
        if (existingWrapper) {
            const hasExistingLauncher = !!existingWrapper.querySelector('#cwLauncher');
            const hasExistingWidget = !!existingWrapper.querySelector('#chatWidget');
            if (hasExistingLauncher || hasExistingWidget) {
                applyVisibilitySafetyStyles(existingWrapper);
                return;
            }
            try {
                existingWrapper.remove();
            } catch (e) {
                return;
            }
        }
        const container = document.body || document.documentElement;

        // Apply Runtime Config Overrides to CSS
        if (config.theme.primaryColor) {
            document.documentElement.style.setProperty('--w-accent', config.theme.primaryColor);
            document.documentElement.style.setProperty('--w-me-bg', config.theme.primaryColor);
        }
        if (config.theme.bgColor) document.documentElement.style.setProperty('--w-bg', config.theme.bgColor);
        if (config.theme.surfaceColor) document.documentElement.style.setProperty('--w-surface', config.theme.surfaceColor);
        if (config.theme.fontFamily) document.documentElement.style.setProperty('--font-family', config.theme.fontFamily);
        if (config.header.avatarSize) document.documentElement.style.setProperty('--avatar-size-bot', config.header.avatarSize + 'px');
        if (config.user.avatarSize) document.documentElement.style.setProperty('--avatar-size-user', config.user.avatarSize + 'px');

        const wrapper = document.createElement('div');
        wrapper.id = 'astig-chat-wrapper';
        wrapper.style.display = 'block';

        const launcherAnimClass = config.launcher.animation !== 'none' ? 'anim-' + config.launcher.animation : '';
        const launcherEdgeOffset = 20;
        const launcherGap = 18; // Extra clearance so pulse animation is visible.
        const launcherSizePx = Number(config.launcher.size) || 60;
        const widgetOffsetPx = launcherEdgeOffset + launcherSizePx + launcherGap;
        const positionStyles = config.launcher.position === 'bottom-left' ? ('bottom:' + launcherEdgeOffset + 'px; left:' + launcherEdgeOffset + 'px;') : 
                               config.launcher.position === 'top-right' ? ('top:' + launcherEdgeOffset + 'px; right:' + launcherEdgeOffset + 'px;') :
                               config.launcher.position === 'top-left' ? ('top:' + launcherEdgeOffset + 'px; left:' + launcherEdgeOffset + 'px;') : ('bottom:' + launcherEdgeOffset + 'px; right:' + launcherEdgeOffset + 'px;');
        
        // Determine widget window position relative to launcher
        let widgetPositionStyles = 'position: fixed; z-index: 99999; display: none;';
        if (config.launcher.position === 'bottom-left') widgetPositionStyles += ' bottom: ' + widgetOffsetPx + 'px; left: ' + launcherEdgeOffset + 'px;';
        else if (config.launcher.position === 'top-right') widgetPositionStyles += ' top: ' + widgetOffsetPx + 'px; right: ' + launcherEdgeOffset + 'px;';
        else if (config.launcher.position === 'top-left') widgetPositionStyles += ' top: ' + widgetOffsetPx + 'px; left: ' + launcherEdgeOffset + 'px;';
        else widgetPositionStyles += ' bottom: ' + widgetOffsetPx + 'px; right: ' + launcherEdgeOffset + 'px;';

        // Match widget background mode behavior from the in-app preview.
        let widgetThemeStyles = 'background:' + (config.theme.bgColor || '#1f1f2e') + ';';
        let widgetModeClass = '';
        if (config.theme.mode === 'transparent') {
            widgetThemeStyles = 'background:transparent;';
            widgetModeClass = ' mode-transparent';
        } else if (config.theme.mode === 'gradient') {
            const start = (config.theme.gradient && config.theme.gradient.start) ? config.theme.gradient.start : (config.theme.bgColor || '#1f1f2e');
            const end = (config.theme.gradient && config.theme.gradient.end) ? config.theme.gradient.end : '#ff6584';
            widgetThemeStyles = 'background:linear-gradient(135deg, ' + start + ', ' + end + ');';
        } else if (config.theme.mode === 'glass') {
            widgetThemeStyles = 'background:rgba(255, 255, 255, 0.08); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border:1px solid rgba(255, 255, 255, 0.22);';
        } else if (config.theme.mode === 'frosted') {
            widgetThemeStyles = 'background:rgba(31, 31, 46, 0.72); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(255, 255, 255, 0.1);';
        }

        let launcherInnerHtml = '';
        if (config.launcher.badgeEnabled) {
            const badgePosClass = config.launcher.position.includes('right') ? 'pos-left' : 'pos-right';
            const badgeText = (config.launcher.text && String(config.launcher.text).trim())
                ? String(config.launcher.text).trim()
                : (getAssistantName(config) ? getAssistantName(config) + ' typing...' : 'Chat typing...');
            launcherInnerHtml += '<div class="cw-launcher-badge ' + badgePosClass + '" style="display:none;">' + badgeText + '</div>';
        }
        if (config.launcher.bubbleEnabled && (config.launcher.bubbleText && String(config.launcher.bubbleText).trim())) {
            const bubblePosClass = config.launcher.position.includes('right') ? 'pos-left' : 'pos-right';
            const bubbleVertClass = config.launcher.position.includes('top') ? 'pos-below' : 'pos-above';
            const bubbleText = String(config.launcher.bubbleText).trim();
            const bubbleMode = config.launcher.bubbleMode === 'typewriter' ? 'typewriter' : 'instant';
            const bubbleTextEscaped = bubbleText
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;');
            launcherInnerHtml += '<div class="cw-launcher-message ' + bubblePosClass + ' ' + bubbleVertClass + '"><span class="cw-launcher-message__text" data-bubble-mode="' + bubbleMode + '" data-bubble-text="' + encodeURIComponent(bubbleText) + '">' + (bubbleMode === 'typewriter' ? '' : bubbleTextEscaped) + '</span><span class="cw-launcher-message__tail"></span></div>';
        }

        if (config.launcher.iconType === 'image' && config.launcher.imageUrl) {
            launcherInnerHtml += '<img src="' + config.launcher.imageUrl + '" style="width:100%; height:100%; object-fit:cover; border-radius:50%;"> ' + 
                                '<i data-lucide="image" style="display:none; color:white; width:50%; height:50%;"></i>';
        } else {
            launcherInnerHtml += '<i data-lucide="' + (config.launcher.icon || 'message-circle') + '" style="color:white; width:50%; height:50%;"></i>';
        }

        let launcherBgStyles = 'background:' + config.launcher.bgColor + ';';
        if (config.launcher.bgStyle === 'gradient') {
            launcherBgStyles = 'background:linear-gradient(135deg, ' + config.launcher.bgColor + ', ' + (config.launcher.gradientEnd || '#ff6584') + ');';
        } else if (config.launcher.bgStyle === 'glass') {
            launcherBgStyles = 'background:rgba(255, 255, 255, 0.1); backdrop-filter:blur(10px); border:1px solid rgba(255, 255, 255, 0.2);';
        } else if (config.launcher.bgStyle === 'transparent') {
            launcherBgStyles = 'background:transparent;';
        }

    const templateStyle = (config.ui && config.ui.templateStyle) || '';
    const isSupportTemplate = templateStyle === 'support-reference';
    const isMaximumSupportTemplate = templateStyle === 'maximum-support';
    const isOrdersOnlineTemplate = templateStyle === 'orders-online';
        const supportAvatarText = ((config.header.status || getHeaderTitle(config) || 'A') + '').substring(0, 2).toUpperCase();
        const avatarHtml = (config.header.logoType === 'image' && config.header.logoUrl)
            ? '<img src="' + config.header.logoUrl + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">'
            : (isSupportTemplate ? supportAvatarText : (getHeaderTitle(config) ? getHeaderTitle(config).substring(0, 2).toUpperCase() : 'A'));
        const logoOffsetStyle = 'transform:translate(' + (Number(config.header.logoOffsetX) || 0) + 'px,' + (Number(config.header.logoOffsetY) || 0) + 'px);';
        const nameOffsetStyle = 'transform:translate(' + (Number(config.header.nameOffsetX) || 0) + 'px,' + (Number(config.header.nameOffsetY) || 0) + 'px);';
        const statusOffsetStyle = 'transform:translate(' + (Number(config.header.statusOffsetX) || 0) + 'px,' + (Number(config.header.statusOffsetY) || 0) + 'px);';
        const headerAnimationClass = (config.header.animation && config.header.animation !== 'none') ? (' anim-header-' + config.header.animation) : '';
        const headerFontFamily = config.header.fontFamily || "'Syne', sans-serif";
        const headerTextColor = (config.theme && config.theme.headerTextColor) ? config.theme.headerTextColor : '';
        const headerNameStyle = nameOffsetStyle + 'font-family:' + headerFontFamily + ';font-size:' + (Number(config.header.nameFontSize) || 15) + 'px;font-weight:' + (Number(config.header.nameFontWeight) || 600) + ';' + (headerTextColor ? ('color:' + headerTextColor + ';') : '');
        const headerStatusStyle = statusOffsetStyle + 'font-family:' + headerFontFamily + ';font-size:' + (Number(config.header.statusFontSize) || 12) + 'px;' + (headerTextColor ? ('color:' + headerTextColor + ';') : '');
        const logoSizePx = Number(config.header.logoSize) || 56;
        const avatarSizeStyle = 'width:' + logoSizePx + 'px;height:' + logoSizePx + 'px;font-size:' + Math.max(12, Math.round(logoSizePx * 0.5)) + 'px;';
        const headerBgInlineStyle = (config.theme && config.theme.headerBgColor && !isMaximumSupportTemplate && !isOrdersOnlineTemplate)
            ? ' style="background:' + config.theme.headerBgColor + ';"'
            : '';
        const footerCfg = (config.footer && typeof config.footer === 'object') ? config.footer : {};
        const footerText = String(footerCfg.text || '').trim();
        const footerColor = String(footerCfg.textColor || '#7070a0');
        const footerFontFamily = String(footerCfg.fontFamily || "'Inter', sans-serif");
        const footerFontSize = Number(footerCfg.fontSize) || 11;
        const footerPosition = ['center', 'flex-start', 'flex-end'].includes(String(footerCfg.position || '').trim())
            ? String(footerCfg.position).trim()
            : 'center';
        const footerAnimation = String(footerCfg.animation || 'none').trim();
        const footerAnimationCss = footerAnimation === 'pulse'
            ? 'animation:pulse 2s infinite;'
            : (footerAnimation === 'fade'
                ? 'animation:fadeIn 0.8s ease-out;'
                : (footerAnimation === 'slide-up'
                    ? 'animation:headerSlideUp 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);'
                    : ''));
        let footerHtml = '<div class="chat-widget__footer" id="cwFooter" style="display:none;"></div>';
        if (footerText) {
            const footerLink = String(footerCfg.url || '').trim();
            const footerContent = footerLink
                ? '<a href="' + footerLink + '" target="_blank" rel="noopener noreferrer" style="color:' + footerColor + ';text-decoration:none;">' + footerText + '</a>'
                : '<span style="color:' + footerColor + ';">' + footerText + '</span>';
            footerHtml = '<div class="chat-widget__footer" id="cwFooter" style="display:flex;justify-content:' + footerPosition + ';font-family:' + footerFontFamily + ';font-size:' + footerFontSize + 'px;' + footerAnimationCss + '">' +
                footerContent +
            '</div>';
        }
        const widgetTemplateClass = isSupportTemplate
            ? ' chat-widget--support-reference'
            : (isMaximumSupportTemplate ? ' chat-widget--maximum-support' : (isOrdersOnlineTemplate ? ' chat-widget--orders-online' : ''));
        const inputPlaceholder = isSupportTemplate
            ? 'Or send a message...'
            : (isMaximumSupportTemplate ? 'Ask a question...' : (isOrdersOnlineTemplate ? 'Enter your message...' : 'Type a message...'));
        const uploadBtnTitle = isSupportTemplate ? 'Mute Microphone' : 'Upload File';
        const uploadBtnInlineStyle = isSupportTemplate
            ? ''
            : "background:transparent; color:var(--w-muted); border:none; padding:0; width:30px; cursor:pointer;";
        const uploadIconHtml = isSupportTemplate
            ? '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12"></path><path d="M15 9.34V4a3 3 0 0 0-5.68-1.33"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2"></path><path d="M19 10v2a7 7 0 0 1-2.08 4.95"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>'
            : (isOrdersOnlineTemplate
                ? '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h3l2-2h6l2 2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"></path><circle cx="12" cy="13" r="3"></circle></svg>'
                : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>');
        const restartIconHtml = isOrdersOnlineTemplate
            ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.8"></circle><circle cx="12" cy="12" r="1.8"></circle><circle cx="12" cy="19" r="1.8"></circle></svg>'
            : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>';
        const downloadIconHtml = isOrdersOnlineTemplate
            ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>'
            : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>';
        const closeButtonHtml = isOrdersOnlineTemplate ? '' : (
            '<button class="chat-widget__header-btn" id="cwCloseBtn" title="Close">' +
                '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>' +
            '</button>'
        );
        const sendIconHtml = isSupportTemplate
            ? '<img class="chat-widget__send-plane" src="' + SEND_PLANE_ICON_DATA_URI + '" alt="Send" />'
            : '<img class="chat-widget__send-plane" src="' + SEND_PLANE_ICON_DATA_URI + '" alt="Send" />';
        const extraUploadButtonHtml = isSupportTemplate
            ? '<button class="chat-widget__send" id="cwUploadBtnExtra" title="Upload File"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg></button>'
            : (isOrdersOnlineTemplate
                ? '<button class="chat-widget__send" id="cwEmojiBtn" title="Emoji"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M8.5 15a5 5 0 0 0 7 0"></path><circle cx="9" cy="10" r="1"></circle><circle cx="15" cy="10" r="1"></circle></svg></button>'
                : '');

        wrapper.innerHTML = '<div class="chat-widget' + widgetModeClass + widgetTemplateClass + '" id="chatWidget" style="' + widgetPositionStyles + ' ' + widgetThemeStyles + '">' +
            '<header class="chat-widget__header' + headerAnimationClass + '"' + headerBgInlineStyle + '>' +
                '<div class="chat-widget__header-avatar" style="' + avatarSizeStyle + logoOffsetStyle + '">' + avatarHtml + '</div>' +
                '<div class="chat-widget__header-info">' +
                    '<div class="chat-widget__header-name" style="' + headerNameStyle + '">' + getHeaderTitle(config) + '</div>' +
                    '<div class="chat-widget__header-status" style="' + headerStatusStyle + '">' + config.header.status + '</div>' +
                '</div>' +
                '<button class="chat-widget__header-btn" id="cwRestartBtn" title="Restart Chat">' +
                    restartIconHtml +
                '</button>' +
                '<button class="chat-widget__header-btn" id="cwDownloadBtn" title="Download Chat">' +
                    downloadIconHtml +
                '</button>' +
                closeButtonHtml +
            '</header>' +
            '<div class="chat-widget__messages" id="cwMsgList">' +
                buildConversationMediaHtml() +
                '<div class="chat-widget__divider">Today</div>' +
                '<div id="cwAnchor"></div>' +
            '</div>' +
            '<div class="chat-widget__input-row">' +
                '<button class="chat-widget__send" id="cwUploadBtn" title="' + uploadBtnTitle + '" style="' + uploadBtnInlineStyle + '" onmouseover="this.style.color=\'var(--w-accent)\'" onmouseout="this.style.color=\'var(--w-muted)\'">' +
                    uploadIconHtml +
                '</button>' +
                '<input type="file" id="cwFileInput" style="display:none;" />' +
                '<input class="chat-widget__input" id="cwInput" type="text" placeholder="' + inputPlaceholder + '" autocomplete="off" />' +
                extraUploadButtonHtml +
                '<button class="chat-widget__send" id="cwSendBtn">' +
                    sendIconHtml +
                '</button>' +
            '</div>' +
            footerHtml +
        '</div>' +
        '<div id="cwLauncher" class="cw-launcher ' + launcherAnimClass + '" ' +
             'style="position:fixed; ' + positionStyles + ' width:' + (config.launcher.size === 'auto' ? 'auto' : config.launcher.size + 'px') + '; height:' + (config.launcher.size === 'auto' ? 'auto' : config.launcher.size + 'px') + '; min-height: 50px; ' + launcherBgStyles + ' border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; z-index:99998; transition: transform 0.2s;">' +
            launcherInnerHtml +
        '</div>';

        applyVisibilitySafetyStyles(wrapper);
        (container || document.body).appendChild(wrapper);
        console.log('Astig Media Chatbot: Launcher injected.');
        
        setupLogic();
        initDependencies();
    }

        function setupLogic() {
        const isSupportTemplate = !!(config.ui && config.ui.templateStyle === 'support-reference');
        const isMaximumSupportTemplate = !!(config.ui && config.ui.templateStyle === 'maximum-support');
        const isOrdersOnlineTemplate = !!(config.ui && config.ui.templateStyle === 'orders-online');
        const widget = document.getElementById('chatWidget');
        const launcher = document.getElementById('cwLauncher');
        const closeBtn = document.getElementById('cwCloseBtn');
        const sendBtn = document.getElementById('cwSendBtn');
        const input = document.getElementById('cwInput');
        const inputRow = widget ? widget.querySelector('.chat-widget__input-row') : null;
        const msgList = document.getElementById('cwMsgList');
        const anchor = document.getElementById('cwAnchor');
        const restartBtn = document.getElementById('cwRestartBtn');
        const downloadBtn = document.getElementById('cwDownloadBtn');
        const uploadBtn = document.getElementById('cwUploadBtn');
        const uploadExtraBtn = document.getElementById('cwUploadBtnExtra');
        const emojiBtn = document.getElementById('cwEmojiBtn');
        const fileInput = document.getElementById('cwFileInput');
        let conversationVideoHideTimer = null;
        let scrollAnimFrame = null;
        let maximumSupportInputUnlocked = false;
        let initialConversationBooted = false;

        function isMaximumSupportInputTrigger(choiceText) {
            return /chat with/i.test((choiceText || '').trim());
        }

        function isMaximumSupportInputOnlyChoice(choiceText) {
            var normalized = (choiceText || '').trim().toLowerCase();
            return normalized === 'chat with us';
        }

        function syncMaximumSupportInputVisibility() {
            if (!inputRow) return;
            const shouldHideInput = isMaximumSupportTemplate && !maximumSupportInputUnlocked;
            inputRow.style.display = shouldHideInput ? 'none' : 'flex';
        }

        function getMaximumSupportHeroMedia() {
            const theme = (config && config.theme) ? config.theme : {};
            const mediaType = (theme.topHeroMediaType || 'none').toLowerCase();
            const mediaUrl = (theme.topHeroMediaUrl || '').trim();
            const inferredType = (mediaType === 'none' && mediaUrl)
                ? (/\.(mp4|webm|ogg)(\?|#|$)/i.test(mediaUrl) ? 'video' : 'image')
                : mediaType;
            if (inferredType === 'video' && mediaUrl) return { type: 'video', url: mediaUrl };
            if (inferredType === 'image') {
                const fallbackImage = isMaximumSupportTemplate
                    ? 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80'
                    : '';
                const resolvedUrl = mediaUrl || fallbackImage;
                if (!resolvedUrl) return { type: 'none', url: '' };
                return {
                    type: 'image',
                    url: resolvedUrl
                };
            }
            return { type: 'none', url: '' };
        }

        function applyMaximumSupportHeroMedia() {
            if (!widget) return;
            const header = widget.querySelector('.chat-widget__header');
            if (!header) return;
            const existingVideos = header.querySelectorAll('.max-support-hero-video');
            if (!isMaximumSupportTemplate) {
                existingVideos.forEach((el) => el.remove());
                header.style.removeProperty('background-image');
                header.style.removeProperty('background-size');
                header.style.removeProperty('background-position');
                return;
            }
            const media = getMaximumSupportHeroMedia();
            const overlayGradient = 'linear-gradient(180deg, rgba(27, 104, 238, 0.78) 0%, rgba(22, 100, 236, 0.92) 100%)';
            const videoClass = 'max-support-hero-video';

            if (media.type === 'video' && media.url) {
                header.style.backgroundImage = overlayGradient;
                header.style.backgroundSize = 'cover';
                header.style.backgroundPosition = 'center';
                existingVideos.forEach((el) => {
                    if (!el.classList.contains(videoClass)) el.remove();
                });
                let videoEl = header.querySelector('.' + videoClass);
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
                const safeUrl = media.url.replace(/"/g, '\"');
                header.style.backgroundImage = overlayGradient + ', url("' + safeUrl + '")';
                header.style.backgroundSize = 'cover';
                header.style.backgroundPosition = 'center';
            } else {
                header.style.removeProperty('background-image');
                header.style.removeProperty('background-size');
                header.style.removeProperty('background-position');
            }
        }

        function bootInitialConversationIfNeeded() {
            if (initialConversationBooted || !widget) return;
            const visible = widget.style.display !== 'none' &&
                (!window.getComputedStyle || window.getComputedStyle(widget).display !== 'none');
            if (!visible || msgHistory.length > 0) return;
            initialConversationBooted = true;
            currentSessionId++;
            webhookSessionId = createStableSessionId('rsvp');
            const sessionId = currentSessionId;
            if (config.questions && config.questions.length > 0) {
                setTimeout(() => { if (sessionId === currentSessionId) simulateReply(null); }, 120);
            } else {
                const openingTranscript = (config.transcript || '').trim();
                if (getAssistantName(config) && openingTranscript) {
                    setTimeout(() => {
                        if (sessionId === currentSessionId) {
                            addMessage('other', getAssistantName(config), openingTranscript, config.header.avatar);
                        }
                    }, 120);
                }
            }
        }

        function getVideoHideBehavior() {
            const mode = config.video && typeof config.video.hideBehavior === 'string'
                ? config.video.hideBehavior
                : 'first-question';
            if (mode === 'stay-on' || mode === 'after-10s' || mode === 'first-question') return mode;
            return 'first-question';
        }

        function scheduleConversationVideoHide(delayMs) {
            const media = msgList.querySelector('.chat-widget__conversation-media');
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
                            } catch (e) {}
                        }
                        media.remove();
                        msgList.classList.add('video-hidden');
                    }
                }, 820);
            }, Math.max(0, Number(delayMs) || 0));
        }

        function stopConversationMediaPlayback() {
            if (!msgList) return;
            msgList.querySelectorAll('.chat-widget__conversation-video').forEach((videoEl) => {
                try {
                    videoEl.pause();
                    videoEl.removeAttribute('src');
                    const sourceEl = videoEl.querySelector('source');
                    if (sourceEl) sourceEl.removeAttribute('src');
                    videoEl.load();
                } catch (e) {}
            });
        }

        let msgHistory = [];
        let currentQuestionIndex = -1;
        let currentSessionId = 0;
        let webhookSessionId = '';
        let hasScheduledVideoHide = false;

        function createStableSessionId(prefix) {
            return prefix + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 10);
        }

        function applyConversationMediaLayout() {
            if (!msgList) return;
            const isBackground = config.video && config.video.layout === 'background';
            msgList.classList.toggle('chat-widget__messages--media-bg', !!isBackground);
        }

        function ensureConversationMediaPlayback() {
            if (!msgList) return;
            const video = msgList.querySelector('.chat-widget__conversation-video');
            if (!video) return;

            video.loop = !(config.video && config.video.loop === false);

            const playWithFallback = () => {
                if (video.ended || video.__astigEnded) return;
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

        function scheduleVideoHideByMode(trigger) {
            return;
        }

        function scheduleLauncherBadgeVisibility() {
            const badge = launcher ? launcher.querySelector('.cw-launcher-badge') : null;
            if (!launcher || !badge) return;
            if (launcher.__badgeShowTimer) clearTimeout(launcher.__badgeShowTimer);
            if (launcher.__badgeHideTimer) clearTimeout(launcher.__badgeHideTimer);

            badge.style.display = 'none';
            launcher.__badgeShowTimer = setTimeout(() => {
                if (!launcher.contains(badge)) return;
                badge.style.display = 'flex';
                launcher.__badgeHideTimer = setTimeout(() => {
                    if (launcher.contains(badge)) badge.style.display = 'none';
                }, 15000);
            }, 5000);
        }

        function typewriteIntoLauncherBubble() {
            const textEl = launcher ? launcher.querySelector('.cw-launcher-message__text') : null;
            if (!textEl) return;
            const mode = (textEl.getAttribute('data-bubble-mode') || 'instant').toLowerCase();
            const encoded = textEl.getAttribute('data-bubble-text') || '';
            const full = encoded ? decodeURIComponent(encoded) : (textEl.textContent || '').toString();
            if (!full) return;
            if (mode !== 'typewriter') {
                textEl.textContent = full;
                return;
            }
            if (textEl.__typewriterTimer) clearInterval(textEl.__typewriterTimer);
            textEl.textContent = '';
            let i = 0;
            textEl.__typewriterTimer = setInterval(() => {
                i += 1;
                textEl.textContent = full.slice(0, i);
                if (i >= full.length) {
                    clearInterval(textEl.__typewriterTimer);
                    textEl.__typewriterTimer = null;
                }
            }, 22);
        }

        function scheduleLauncherBubbleVisibility() {
            const bubble = launcher ? launcher.querySelector('.cw-launcher-message') : null;
            const textEl = bubble ? bubble.querySelector('.cw-launcher-message__text') : null;
            if (!launcher || !bubble || !textEl) return;
            if (launcher.__bubbleShowTimer) clearTimeout(launcher.__bubbleShowTimer);
            if (launcher.__bubbleHideTimer) clearTimeout(launcher.__bubbleHideTimer);

            const showNow = () => {
                if (!launcher.contains(bubble)) return;
                bubble.style.display = 'block';
                const mode = (textEl.getAttribute('data-bubble-mode') || 'instant').toLowerCase();
                if (mode === 'typewriter') typewriteIntoLauncherBubble();
                else {
                    const encoded = textEl.getAttribute('data-bubble-text') || '';
                    const full = encoded ? decodeURIComponent(encoded) : (textEl.textContent || '').toString();
                    textEl.textContent = full;
                }
            };

            if (!config.launcher || !config.launcher.bubbleTimed) {
                showNow();
                return;
            }

            const delayMs = Math.max(0, Number(config.launcher.bubbleDelaySec ?? 5)) * 1000;
            const durationMs = Math.max(0, Number(config.launcher.bubbleDurationSec ?? 10)) * 1000;
            bubble.style.display = 'none';
            launcher.__bubbleShowTimer = setTimeout(() => {
                showNow();
                if (durationMs > 0) {
                    launcher.__bubbleHideTimer = setTimeout(() => {
                        if (launcher.contains(bubble)) bubble.style.display = 'none';
                    }, durationMs);
                }
            }, delayMs);
        }

        function toggleWidget() {
            if (widget.style.display === 'none') {
                widget.style.display = 'flex';
                widget.style.animation = 'msgIn 0.3s ease forwards';
                scheduleVideoHideByMode('initial');
                ensureConversationMediaPlayback();
                if (msgHistory.length === 0) {
                    initialConversationBooted = true;
                    currentSessionId++;
                    webhookSessionId = createStableSessionId('rsvp');
                    const sessionId = currentSessionId;
                    if (config.questions && config.questions.length > 0) {
                        setTimeout(() => { if (sessionId === currentSessionId) simulateReply(null); }, 500);
                    } else {
                        const openingTranscript = (config.transcript || '').trim();
                        if (getAssistantName(config) && openingTranscript) {
                            setTimeout(() => {
                               if (sessionId === currentSessionId) {
                                   addMessage('other', getAssistantName(config), openingTranscript, config.header.avatar);
                               }
                            }, 500);
                        }
                    }
                }
            } else {
                widget.style.display = 'none';
            }
        }
        scheduleLauncherBadgeVisibility();
        scheduleLauncherBubbleVisibility();
        launcher.addEventListener('click', toggleWidget);
        if (closeBtn) closeBtn.addEventListener('click', toggleWidget);

        if (restartBtn) {
            restartBtn.addEventListener('click', () => {
                currentSessionId++;
                webhookSessionId = createStableSessionId('rsvp');
                const sessionId = currentSessionId;
                msgHistory = [];
                currentQuestionIndex = -1;
                maximumSupportInputUnlocked = false;
                initialConversationBooted = true;
                hasScheduledVideoHide = false;
                if (conversationVideoHideTimer) {
                    clearTimeout(conversationVideoHideTimer);
                    conversationVideoHideTimer = null;
                }
                stopConversationMediaPlayback();
                msgList.innerHTML = buildConversationMediaHtml() + '<div class="chat-widget__divider">Today</div><div id="cwAnchor"></div>';
                msgList.classList.remove('video-hidden');
                applyConversationMediaLayout();
                ensureConversationMediaPlayback();
                scheduleVideoHideByMode('initial');
                syncMaximumSupportInputVisibility();
                if (config.questions && config.questions.length > 0) {
                    setTimeout(() => { if (sessionId === currentSessionId) simulateReply(null); }, 500);
                }
            });
        }

        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                let content = "Chat History\n\n";
                msgHistory.forEach(msg => { content += '[' + msg.time + '] ' + msg.name + ': ' + msg.text + '\n'; });
                const blob = new Blob([content], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'chat_transcript.txt';
                a.click();
                URL.revokeObjectURL(url);
            });
        }

        if (uploadBtn && fileInput) {
            if (isSupportTemplate) {
                uploadBtn.addEventListener('click', () => {
                    if (input) input.focus();
                });
            } else {
                uploadBtn.addEventListener('click', () => fileInput.click());
            }
            fileInput.addEventListener('change', (e) => {
                if (e.target.files.length > 0) {
                    const file = e.target.files[0];
                    handleSend('[File attached: ' + file.name + ']');
                    e.target.value = '';
                }
            });
        }
        if (uploadExtraBtn && fileInput) {
            uploadExtraBtn.addEventListener('click', () => fileInput.click());
        }
        if (emojiBtn) {
            emojiBtn.addEventListener('click', () => {
                if (input) input.focus();
            });
        }

        if (input) {
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') handleSend();
            });
        }

        if (sendBtn) {
            sendBtn.addEventListener('click', handleSend);
        }

        applyConversationMediaLayout();
        ensureConversationMediaPlayback();
        scheduleLauncherBadgeVisibility();
        scheduleLauncherBubbleVisibility();
        syncMaximumSupportInputVisibility();
        applyMaximumSupportHeroMedia();
        bootInitialConversationIfNeeded();

        let inlineBootChecks = 0;
        const inlineBootTimer = setInterval(() => {
            inlineBootChecks++;
            bootInitialConversationIfNeeded();
            if (initialConversationBooted || inlineBootChecks > 140) clearInterval(inlineBootTimer);
        }, 80);

        function handleSend(textOverride = null) {
            if (typeof window.marked !== 'function') {
                console.warn('Astig Media Chatbot: Marked library not ready yet. Messages will be plain text.');
            }
            const liveInput = document.getElementById('cwInput') || input;
            const text = typeof textOverride === 'string'
                ? textOverride
                : ((liveInput && typeof liveInput.value === 'string' ? liveInput.value : '').trim());
            if(!text) return;
            if(typeof textOverride !== 'string' && liveInput) liveInput.value = '';

            addMessage('me', 'You', text, config.user.avatar);
            
            // Remove choices
            const choices = msgList.querySelectorAll('.chat-options');
            choices.forEach(c => c.remove());

            simulateReply(text);
        }

        // Global fallback hook used by inline onkeydown/onclick attributes.
        window.__astigSend = () => handleSend();

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
                if (eventType && ignoredEventTypes.has(eventType)) return '';

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

        function simulateReply(userReplyText) {
            const sessionId = currentSessionId;
            const typing = showTyping();
            scrollToBottom();

            setTimeout(() => {
                if (sessionId !== currentSessionId) return;
                typing.remove();
                
                // Webhook logic
                if (config.webhook.url && userReplyText) {
                    if (!webhookSessionId) webhookSessionId = createStableSessionId('rsvp');
                    // Show a new typing indicator while waiting for the network
                    const networkTyping = showTyping();
                    const slowTypingTimer = setTimeout(() => {
                        if (sessionId === currentSessionId) networkTyping.showSlow();
                    }, 5000);
                    scrollToBottom();
                    
                    fetch(config.webhook.url, {
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
                        addMessage('other', getAssistantName(config), replyText, config.header.avatar);
                    })
                    .catch(err => {
                        if (sessionId !== currentSessionId) {
                            clearTimeout(slowTypingTimer);
                            return;
                        }
                        console.error('Astig Media Chatbot: Webhook error', err);
                        clearTimeout(slowTypingTimer);
                        networkTyping.remove();
                        // Fallback response if webhook fails
                        addMessage('other', getAssistantName(config), 'Error reaching webhook: ' + err.message, config.header.avatar);
                    });

                    return; // Prevent local fallback logic from running below
                }

                let replyText = "";
                let choices = [];

                currentQuestionIndex++;

                if (config.questions && currentQuestionIndex < config.questions.length) {
                    const q = config.questions[currentQuestionIndex];
                    replyText = q.text;
                    if (q.type === 'choice' && q.choices) {
                        choices = q.choices.split(',').map(c => c.trim()).filter(c => c);
                        if (isMaximumSupportTemplate) {
                            replyText = '';
                        }
                    }
                } else if (userReplyText) {
                    replyText = config.transcript || "Thanks for your message!";
                }

                if (!replyText) {
                    if (choices.length > 0) {
                        addChoices(choices);
                    }
                    return;
                }

                addMessage('other', getAssistantName(config), replyText, config.header.avatar);
                if (config.questions && config.questions.length > 0 && currentQuestionIndex === 0) {
                    scheduleVideoHideByMode('first-question');
                }

                if (choices.length > 0) {
                    addChoices(choices);
                }
            }, 1000);
        }

        function addChoices(choices) {
            const div = document.createElement('div');
            div.className = 'chat-options';
            choices.forEach(c => {
                const btn = document.createElement('button');
                btn.className = 'chat-option-btn';
                if (config.questionsStyle === 'gradient') btn.classList.add('gradient');
                btn.textContent = c;
                btn.onclick = () => {
                    if (isMaximumSupportTemplate) {
                        maximumSupportInputUnlocked = true;
                        syncMaximumSupportInputVisibility();
                        if (isMaximumSupportInputOnlyChoice(c)) {
                            const existingChoices = msgList.querySelectorAll('.chat-options');
                            existingChoices.forEach(el => el.remove());
                            if (input) input.focus();
                            return;
                        }
                        if (input) input.focus();
                    }
                    handleSend(c);
                };
                div.appendChild(btn);
            });
            msgList.insertBefore(div, anchor);
            scrollToBottom();
        }

        function showTyping() {
            const el = document.createElement('div');
            el.className = 'chat-widget__typing';
            const val = config.header.avatar;
            const typingName = (getAssistantName(config) || 'Assistant').trim();
            
            let avatarContent = '';
            if (isImage(val)) {
                avatarContent = '<img src="' + val + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" onerror="this.parentElement.textContent=\'A\'; this.remove()">';
            } else {
                avatarContent = val ? val.substring(0, 2).toUpperCase() : 'A';
            }

            el.innerHTML = '<div class="msg__avatar">' + avatarContent + '</div>' +
              '<div class="typing-stack">' +
                '<div class="typing-bubble">' +
                  '<div class="typing-dot"></div>' +
                  '<div class="typing-dot"></div>' +
                  '<div class="typing-dot"></div>' +
                '</div>' +
                '<div class="typing-status" style="display:none;">' + typingName + ' typing...</div>' +
              '</div>';
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

        function smoothScrollContainerToBottom(container, duration) {
            if (!container) return;
            if (scrollAnimFrame) {
                cancelAnimationFrame(scrollAnimFrame);
                scrollAnimFrame = null;
            }
            var start = container.scrollTop;
            var target = Math.max(0, container.scrollHeight - container.clientHeight);
            var delta = target - start;
            if (Math.abs(delta) < 2) {
                container.scrollTop = target;
                return;
            }
            var t0 = performance.now();
            var easeOutCubic = function (t) { return 1 - Math.pow(1 - t, 3); };
            var step = function (now) {
                var p = Math.min(1, (now - t0) / duration);
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

        function addMessage(who, name, text, avatarVal) {
            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            msgHistory.push({ who, name, text, time });
            const div = document.createElement('div');
            div.className = 'msg--container';
            div.className = 'msg msg--' + who;
            
            let avatarContent = '';
            const fallbackInitial = name ? name.substring(0, 2).toUpperCase() : (who === 'me' ? 'U' : 'A');
            if (isImage(avatarVal)) {
                avatarContent = '<img src="' + avatarVal + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" onerror="this.parentElement.textContent=\'' + fallbackInitial + '\'; this.remove()">';
            } else {
                avatarContent = avatarVal ? avatarVal.substring(0, 2).toUpperCase() : fallbackInitial;
            }
            
            let parsedText = text;
            if (typeof parsedText === 'string') {
                parsedText = parsedText.replace(/\\n/g, '\n').replace(/\\r/g, '');
            }
            if (window.marked) {
                parsedText = marked.parse(parsedText, { breaks: true });
            }

            div.innerHTML = '<div class="msg__avatar">' + avatarContent + '</div>' +
                '<div class="msg__bubble">' +
                    '<div class="msg__header">' +
                        '<span class="msg__name">' + name + '</span>' +
                        '<span class="msg__time">' + time + '</span>' +
                    '</div>' +
                    '<div class="msg__text">' + parsedText + '</div>' +
                '</div>';
            msgList.insertBefore(div, anchor);
            scrollToBottom();
        }
    }

    // --- START RENDERING ---
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        renderLauncher();
    } else {
        window.addEventListener('DOMContentLoaded', renderLauncher);
    }
})();
    
