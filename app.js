;(function () {
  var script = document.currentScript;
  if (!script) return;

  var config = {
    targetSelector: script.dataset.target || "",
    webhookUrl: script.dataset.webhook || "",
    userAvatar: script.dataset.userAvatar || "",
    assistantAvatar: script.dataset.assistantAvatar || "",
    launcherAvatar: script.dataset.launcherAvatar || "",
    launcherPosition: script.dataset.launcherPosition || "bottom-right",
    launcherShape: script.dataset.launcherShape || "circle"
  };

  var target = config.targetSelector ? document.querySelector(config.targetSelector) : null;
  if (!target) return;

  function isAllowedPosition(value) {
    return value === "bottom-right" || value === "bottom-left" || value === "top-right" || value === "top-left";
  }

  function isAllowedShape(value) {
    return value === "circle" || value === "square" || value === "rounded";
  }

  if (!isAllowedPosition(config.launcherPosition)) config.launcherPosition = "bottom-right";
  if (!isAllowedShape(config.launcherShape)) config.launcherShape = "circle";

  var root = document.createElement("div");
  root.className = "astig-root astig-" + config.launcherPosition + " astig-" + config.launcherShape;

  var launcher = document.createElement("button");
  launcher.type = "button";
  launcher.className = "astig-launcher";
  launcher.setAttribute("aria-label", "Open Astig Widget chat");
  launcher.innerHTML = config.launcherAvatar
    ? '<img src="' + config.launcherAvatar + '" alt="" class="astig-launcher-avatar">'
    : '<span class="astig-launcher-fallback">A</span>';

  var panel = document.createElement("section");
  panel.className = "astig-window";
  panel.setAttribute("aria-hidden", "true");
  panel.innerHTML =
    '<header class="astig-header">' +
      '<div class="astig-header-media">' +
        (config.assistantAvatar
          ? '<img src="' + config.assistantAvatar + '" alt="" class="astig-header-avatar">'
          : '<span class="astig-header-avatar astig-header-avatar--fallback">A</span>') +
      "</div>" +
      '<div class="astig-header-copy">' +
        "<strong>Astig Widget</strong>" +
        "<span>Assistant is online</span>" +
      "</div>" +
      '<button type="button" class="astig-close" aria-label="Close chat">×</button>' +
    "</header>" +
    '<div class="astig-messages" role="log" aria-live="polite"></div>' +
    '<form class="astig-composer">' +
      '<input class="astig-input" type="text" autocomplete="off" placeholder="Type your message...">' +
      '<button class="astig-send" type="submit">Send</button>' +
    "</form>";

  root.appendChild(panel);
  root.appendChild(launcher);
  target.innerHTML = "";
  target.appendChild(root);

  var messagesEl = panel.querySelector(".astig-messages");
  var formEl = panel.querySelector(".astig-composer");
  var inputEl = panel.querySelector(".astig-input");
  var sendEl = panel.querySelector(".astig-send");
  var closeEl = panel.querySelector(".astig-close");
  var sessionId = "astig-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);
  var isSending = false;

  function scrollMessagesToEnd() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function createAvatar(role) {
    var avatar = document.createElement("div");
    avatar.className = "astig-avatar astig-avatar--" + role;

    var avatarUrl = role === "user" ? config.userAvatar : config.assistantAvatar;
    if (avatarUrl) {
      var img = document.createElement("img");
      img.src = avatarUrl;
      img.alt = "";
      avatar.appendChild(img);
    } else {
      avatar.textContent = role === "user" ? "U" : "A";
    }

    return avatar;
  }

  function appendMessage(role, text, state) {
    var row = document.createElement("div");
    row.className = "astig-message astig-message--" + role + (state ? " astig-message--" + state : "");

    var bubble = document.createElement("div");
    bubble.className = "astig-bubble";
    bubble.textContent = text;

    row.appendChild(createAvatar(role));
    row.appendChild(bubble);
    messagesEl.appendChild(row);
    scrollMessagesToEnd();
    return row;
  }

  function setPanelOpen(open) {
    root.classList.toggle("astig-open", !!open);
    panel.setAttribute("aria-hidden", open ? "false" : "true");
    if (open) {
      inputEl.focus();
      scrollMessagesToEnd();
    }
  }

  function extractReply(payload, fallbackText) {
    if (typeof payload === "string" && payload.trim()) return payload.trim();
    if (Array.isArray(payload)) {
      return payload.map(function (item) {
        return extractReply(item, "");
      }).filter(Boolean).join("\n\n");
    }
    if (!payload || typeof payload !== "object") return fallbackText || "No response received.";
    if (typeof payload.reply === "string" && payload.reply.trim()) return payload.reply.trim();
    if (typeof payload.message === "string" && payload.message.trim()) return payload.message.trim();
    if (typeof payload.text === "string" && payload.text.trim()) return payload.text.trim();
    if (typeof payload.output === "string" && payload.output.trim()) return payload.output.trim();
    if (payload.response) return extractReply(payload.response, fallbackText);
    try {
      return JSON.stringify(payload, null, 2);
    } catch (error) {
      return fallbackText || "No response received.";
    }
  }

  async function sendMessage(message) {
    if (!config.webhookUrl) {
      appendMessage("assistant", "Webhook URL is missing.");
      return;
    }
    if (isSending || !message) return;

    isSending = true;
    inputEl.disabled = true;
    sendEl.disabled = true;

    appendMessage("user", message);
    var loadingRow = appendMessage("assistant", "Thinking...", "loading");

    try {
      var response = await fetch(config.webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: message,
          text: message,
          chatInput: message,
          sessionId: sessionId
        })
      });

      var rawText = await response.text();
      if (!response.ok) {
        throw new Error(rawText || "Request failed with status " + response.status);
      }

      var payload;
      try {
        payload = rawText ? JSON.parse(rawText) : {};
      } catch (error) {
        payload = rawText;
      }

      var reply = extractReply(payload, rawText);
      loadingRow.remove();
      appendMessage("assistant", reply || "No response received.");
    } catch (error) {
      loadingRow.remove();
      appendMessage("assistant", "Unable to reach the webhook right now. " + (error && error.message ? error.message : "Unknown error."));
    } finally {
      isSending = false;
      inputEl.disabled = false;
      sendEl.disabled = false;
      inputEl.focus();
    }
  }

  launcher.addEventListener("click", function () {
    setPanelOpen(!root.classList.contains("astig-open"));
  });

  closeEl.addEventListener("click", function () {
    setPanelOpen(false);
  });

  formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    var message = inputEl.value.trim();
    if (!message) return;
    inputEl.value = "";
    sendMessage(message);
  });

  appendMessage("assistant", "Hi, how can I help?");
})();
