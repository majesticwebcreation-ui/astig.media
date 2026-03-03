// Astig Media Chatbot Widget
// Webhook: https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat
// CSS: https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat.css
// CDN: https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat.js
(function() {
  window.RSVPChatConfig = window.RSVPChatConfig || {};
  window.RSVPChatConfig.webhookUrl = "https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat";
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat.css';
  document.head.appendChild(link);
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat.js';
  script.defer = true;
  document.head.appendChild(script);
})();
