// Astig Media Chatbot Widget
(function () {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat-widgets.css';
  document.head.appendChild(link);

  var script = document.createElement('script');
  script.src = 'https://YOUR-DOMAIN.com/astig-chat-widgets.fixed.js'; // or your valid widget runtime
  script.defer = true;
  document.head.appendChild(script);
})();
