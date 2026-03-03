// Astig Media Chatbot Widget
// Webhook: https://n8n.srv1291312.hstgr.cloud/webhook/a368d690-b760-49a9-ba19-67c4a6971fa3/chat
// CSS: https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat.css
// CDN: https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat.js
// Runtime: https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat.js
(function() {
  window.RSVPChatConfig = window.RSVPChatConfig || {};
  window.RSVPChatConfig.webhookUrl = "https://n8n.srv1291312.hstgr.cloud/webhook/a368d690-b760-49a9-ba19-67c4a6971fa3/chat";
  window.RSVPChatConfig.fullConfig = {"theme":{"primaryColor":"#5aa7d9","bgColor":"#dfe8f1","surfaceColor":"#d5dee8","fontFamily":"'DM Sans', sans-serif","borderRadius":30,"mode":"solid","gradient":{"start":"#dfe8f1","end":"#d5dee8"},"headerBgColor":"#dfe8f1","headerTextColor":"#5e6873","topHeroMediaType":"none","topHeroMediaUrl":""},"header":{"title":"Aria","name":"Aria","status":"","fontFamily":"'Syne', sans-serif","nameFontSize":15,"nameFontWeight":600,"statusFontSize":12,"animation":"none","logoOffsetX":0,"logoOffsetY":0,"nameOffsetX":0,"nameOffsetY":0,"statusOffsetX":0,"statusOffsetY":0,"avatar":"EL","avatarSize":24,"logoSize":56,"logoType":"image","logoUrl":"https://widjets.astigmedia.com/img/main-logo.png"},"assistant":{"name":"Aria"},"user":{"avatar":"","avatarSize":0},"launcher":{"position":"bottom-right","iconType":"image","icon":"headset","imageUrl":"https://widjets.astigmedia.com/img/main-logo.png","size":48,"badgeEnabled":false,"text":"","bubbleEnabled":true,"bubbleText":"Ta-da! You've found your creative superpower spot.","bubbleMode":"instant","bubbleTimed":false,"bubbleDelaySec":5,"bubbleDurationSec":10,"bgStyle":"solid","bgColor":"#5aa7d9","gradientEnd":"#8ed1f0","animation":"none"},"video":{"layout":"inline","hideBehavior":"first-question","loop":false,"url":"","imageUrl":""},"questions":[{"id":1,"text":"Hi there, welcome to customer support. How can I help you?","type":"text"},{"id":1772508477805,"text":"","type":"text","displayMode":"instant"}],"questionsStyle":"solid","webhook":{"url":"","testUrl":"","chatUrl":"https://n8n.srv1291312.hstgr.cloud/webhook/a368d690-b760-49a9-ba19-67c4a6971fa3/chat","production":true,"externalJsUrl":"https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat.js"},"footer":{"text":"","url":"","fontFamily":"'Inter', sans-serif","animation":"none","textColor":"#93c5fd","fontSize":11,"position":"center"},"ui":{"showPipelineMonitor":false,"showRealtimeTelemetry":false,"showRealtimeFeed":false,"templateStyle":"support-reference"}};
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
    script.src = 'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat.js';
    script.defer = true;
    script.setAttribute('data-astig-chat-runtime', '1');
    head.appendChild(script);
  }
})();
