// Astig Media Chatbot Widget
// Webhook: https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat
// CSS: https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat.css
// CDN: https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat.js
// Runtime: https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat-widgets.js
(function() {
  window.RSVPChatConfig = window.RSVPChatConfig || {};
  window.RSVPChatConfig.webhookUrl = "https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat";
  var head = document.head || document.getElementsByTagName('head')[0];
  if (!document.querySelector('link[data-astig-chat-css]')) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat.css';
    link.setAttribute('data-astig-chat-css', '1');
    head.appendChild(link);
  }
  if (!document.querySelector('script[data-astig-chat-runtime]')) {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat-widgets.js';
    script.defer = true;
    script.setAttribute('data-astig-chat-runtime', '1');
    head.appendChild(script);
  }
})();
