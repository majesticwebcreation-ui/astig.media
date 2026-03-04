(function () {
  if (window.__astigInlineChatLoaded) {
    return;
  }
  window.__astigInlineChatLoaded = true;

  var ROOT_ID = "astig-inline-chat-root";

  function mountWidget() {
    if (document.getElementById(ROOT_ID)) {
      return;
    }

    var root = document.createElement("div");
    root.id = ROOT_ID;

    var panel = document.createElement("section");
    panel.id = "astig-inline-chat-panel";
    panel.hidden = true;
    panel.innerHTML =
      '<div class="astig-inline-chat-head">Astig Media Chatbot</div>' +
      '<div class="astig-inline-chat-body">Widget initialized. Connect this file to your chat backend logic.</div>';

    var launcher = document.createElement("button");
    launcher.id = "astig-inline-chat-launcher";
    launcher.type = "button";
    launcher.setAttribute("aria-label", "Toggle chat panel");
    launcher.textContent = "AI";

    launcher.addEventListener("click", function () {
      panel.hidden = !panel.hidden;
    });

    root.appendChild(panel);
    root.appendChild(launcher);
    document.body.appendChild(root);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountWidget, { once: true });
  } else {
    mountWidget();
  }
})();
