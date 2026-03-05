window.__CHATBOT_CONFIG__ = {
  "mode": "inline",
  "targetId": "chatbot-widget",
  "webhookUrl": "https://n8n.srv1291312.hstgr.cloud/webhook/a368d690-b760-49a9-ba19-67c4a6971fa3/chat",
  "avatar": "l",
  "kicker": "Legal Workflow Console",
  "title": "Tools for the lawyers of tomorrow",
  "subtitle": "Research you can trust and draft with confidence, from first facts to final filing.",
  "fontFamily": "'Sora', 'Trebuchet MS', sans-serif",
  "colors": {
    "bgStart": "#1a0533",
    "bgEnd": "#db2777",
    "accent": "#db2777",
    "text": "#f8fafc",
    "muted": "rgba(226, 232, 240, 0.82)"
  },
  "glassOpacity": 0.07,
  "blurIntensity": 20,
  "launcher": {
    "position": "bottom-right",
    "size": 54
  },
  "chips": [
    {
      "id": "chip-1772639884450",
      "label": "New Action",
      "icon": "💡",
      "query": "New Action"
    }
  ]
};
(function () {
  var PREFIX = "cw3d";
  var STYLE_ID = PREFIX + "-style";
  var BOOT_SCRIPT = document.currentScript instanceof HTMLScriptElement ? document.currentScript : null;
  var UPLOAD_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23182132' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25'/%3E%3Cpath d='m8 16 4-4 4 4'/%3E%3Cpath d='M12 12v9'/%3E%3C/svg%3E";
  var SEND_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23182132'%3E%3Cpath d='M3.4 20.4 22 12 3.4 3.6a.8.8 0 0 0-1.1.93L4 10.4c.05.2.23.35.44.36l8.88 1.24L4.44 13.3a.5.5 0 0 0-.44.36L2.3 19.5a.8.8 0 0 0 1.1.9Z'/%3E%3C/svg%3E";

  function decodeConfig(encoded) {
    if (!encoded) return {};
    try {
      var binary = atob(String(encoded));
      var bytes = new Uint8Array(binary.length);
      for (var i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
      var text = new TextDecoder().decode(bytes);
      return JSON.parse(text);
    } catch {
      return {};
    }
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, function (ch) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch] || ch;
    });
  }

  function ensureStyle(cfg) {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = ""
      + "." + PREFIX + "-root{font-family:" + cfg.fontFamily + ";color:" + cfg.colors.text + ";}"
      + "." + PREFIX + "-inline-wrap{width:min(1240px,95vw);margin:0 auto;display:grid;gap:22px;}"
      + "." + PREFIX + "-glass{border:1px solid rgba(255,255,255,0.2);border-radius:24px;backdrop-filter:blur(" + cfg.blurIntensity + "px);-webkit-backdrop-filter:blur(" + cfg.blurIntensity + "px);box-shadow:0 28px 44px rgba(14,4,28,0.4),inset 0 1px 0 rgba(255,255,255,0.25);}"
      + "." + PREFIX + "-display{padding:26px;display:grid;gap:14px;background:linear-gradient(160deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04)),linear-gradient(135deg," + cfg.colors.bgStart + "," + cfg.colors.bgEnd + ");}"
      + "." + PREFIX + "-display-head{display:flex;justify-content:space-between;gap:10px;align-items:flex-start;}"
      + "." + PREFIX + "-eyebrow{margin:0;text-transform:uppercase;letter-spacing:.08em;font-size:.72rem;font-weight:700;color:rgba(255,255,255,.68);}"
      + "." + PREFIX + "-query-text{margin:0;font-weight:700;color:#fff;max-width:44ch;}"
      + "." + PREFIX + "-meta{display:grid;justify-items:end;gap:4px;}"
      + "." + PREFIX + "-badge{font-size:.7rem;letter-spacing:.08em;font-weight:800;border-radius:999px;padding:5px 10px;border:1px solid rgba(59,130,246,.46);background:rgba(59,130,246,.16);color:#93c5fd;}"
      + "." + PREFIX + "-time{font-size:.78rem;color:rgba(255,255,255,.78);}"
      + "." + PREFIX + "-actions{display:flex;justify-content:flex-end;gap:8px;}"
      + "." + PREFIX + "-action-btn{border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.1);color:#fff;font-weight:700;font-size:1rem;border-radius:999px;min-width:36px;min-height:36px;display:inline-flex;align-items:center;justify-content:center;padding:0;cursor:pointer;transition:background .2s ease,border-color .2s ease,color .2s ease,transform .2s ease;}"
      + "." + PREFIX + "-action-btn:disabled{opacity:.45;cursor:default;}"
      + "." + PREFIX + "-action-btn:not(:disabled):hover{border-color:rgba(255,255,255,.5);background:rgba(255,255,255,.18);transform:translateY(-1px);}"
      + "." + PREFIX + "-out{border:1px solid rgba(255,255,255,.16);background:rgba(4,1,10,.34);border-radius:16px;padding:16px;min-height:220px;max-height:425px;overflow:auto;white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.5;}"
      + "." + PREFIX + "-input-panel{padding:26px;display:grid;gap:16px;background:linear-gradient(160deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08)),linear-gradient(135deg," + cfg.colors.bgStart + "," + cfg.colors.bgEnd + ");}"
      + "." + PREFIX + "-kicker{margin:0;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.72);font-size:.73rem;font-weight:700;}"
      + "." + PREFIX + "-row{display:grid;grid-template-columns:52px minmax(0,1fr) 52px;align-items:center;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.1);border-radius:18px;padding:8px;gap:8px;}"
      + "." + PREFIX + "-input{width:100%;min-height:46px;border:0;border-radius:14px;background:transparent;color:#fff;padding:0 10px;font-size:1.05rem;outline:none;}"
      + "." + PREFIX + "-input::placeholder{color:rgba(255,255,255,.64);}"
      + "." + PREFIX + "-icon-btn{width:44px;height:44px;border-radius:14px;border:1px solid rgba(255,255,255,.28);background:linear-gradient(180deg,rgba(255,255,255,.92),rgba(209,217,228,.86));display:inline-flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 10px 22px rgba(35,53,82,.24),inset 0 1px 0 rgba(255,255,255,.92);transition:transform .15s ease,box-shadow .15s ease,filter .15s ease;}"
      + "." + PREFIX + "-icon-btn:hover{transform:translateY(-1px);filter:brightness(1.03);}"
      + "." + PREFIX + "-icon-btn:active{transform:translateY(1px) scale(.98);}"
      + "." + PREFIX + "-icon-btn:disabled{opacity:.6;cursor:default;transform:none;}"
      + "." + PREFIX + "-upload{justify-self:start;}"
      + "." + PREFIX + "-send{justify-self:end;}"
      + "." + PREFIX + "-button-icon{width:20px;height:20px;display:block;pointer-events:none;}"
      + "." + PREFIX + "-shortcut-row{display:flex;flex-wrap:wrap;gap:10px;min-height:34px;}"
      + "." + PREFIX + "-shortcut-row:empty{display:none;}"
      + "." + PREFIX + "-shortcut-chip{border:1px solid rgba(122,138,158,.36);background:linear-gradient(180deg,#3d4758,#2f3949);color:#f5f7fb;font-weight:700;font-size:.9rem;line-height:1;padding:9px 14px;border-radius:999px;cursor:pointer;box-shadow:0 8px 16px rgba(15,23,42,.28);transition:transform .15s ease,filter .15s ease;}"
      + "." + PREFIX + "-shortcut-chip:hover{transform:translateY(-1px);filter:brightness(1.06);}"
      + "." + PREFIX + "-loading{display:inline-flex;align-items:flex-end;gap:2px;font-weight:600;}"
      + "." + PREFIX + "-loading-dot{display:inline-block;animation:" + PREFIX + "-dot-bounce .9s infinite ease-in-out;}"
      + "." + PREFIX + "-loading-dot:nth-child(2){animation-delay:.12s;}"
      + "." + PREFIX + "-loading-dot:nth-child(3){animation-delay:.24s;}"
      + "@keyframes " + PREFIX + "-dot-bounce{0%,80%,100%{transform:translateY(0);opacity:.65;}40%{transform:translateY(-5px);opacity:1;}}"
      + "." + PREFIX + "-floating-launch{position:fixed;right:18px;bottom:18px;width:54px;height:54px;border-radius:999px;border:0;background:linear-gradient(120deg,#f43f5e 0%," + cfg.colors.accent + " 100%);color:#fff;font-weight:700;cursor:pointer;z-index:999999;box-shadow:0 12px 24px rgba(2,6,23,.35);}"
      + "." + PREFIX + "-floating-wrap{position:fixed;right:18px;bottom:84px;z-index:999998;display:none;width:min(720px,92vw);}"
      + "." + PREFIX + "-floating-wrap.is-open{display:block;}"
      + "." + PREFIX + "-floating-wrap ." + PREFIX + "-inline-wrap{width:100%;}";
    document.head.appendChild(style);
  }

  function extractText(data) {
    if (data == null) return "";
    if (typeof data === "string") return data;
    if (Array.isArray(data)) return data.map(extractText).filter(Boolean).join("\n");
    if (typeof data === "object") {
      if (typeof data.content === "string" && data.content.trim()) return data.content;
      if (typeof data.text === "string" && data.text.trim()) return data.text;
      if (typeof data.delta === "string" && data.delta.trim()) return data.delta;
      if (typeof data.output === "string" && data.output.trim()) return data.output;
      if (typeof data.message === "string" && data.message.trim()) return data.message;
      if (typeof data.response === "string" && data.response.trim()) return data.response;
      if (typeof data.answer === "string" && data.answer.trim()) return data.answer;
      if (data.data) return extractText(data.data);
    }
    return "";
  }

  function markdownToHtml(text) {
    var escaped = escapeHtml(text);
    var lines = escaped.split(/\r?\n/);
    var html = "";
    var inList = false;
    function closeList() {
      if (!inList) return;
      html += "</ul>";
      inList = false;
    }
    lines.forEach(function (line) {
      if (/^\s*[-*]\s+/.test(line)) {
        if (!inList) {
          html += "<ul>";
          inList = true;
        }
        html += "<li>" + line.replace(/^\s*[-*]\s+/, "") + "</li>";
        return;
      }
      closeList();
      if (!line.trim()) {
        html += "<p></p>";
        return;
      }
      html += "<p>" + line + "</p>";
    });
    closeList();
    return html
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
  }

  function renderOutput(out, text) {
    var value = String(text || "");
    var looksLikeMd = /(^#{1,3}\s)|(^[-*]\s)|(^>\s)|(\*\*.+\*\*)/m.test(value);
    if (looksLikeMd) {
      out.innerHTML = markdownToHtml(value);
    } else {
      out.textContent = value;
    }
  }

  async function parseResponse(response, onStreamUpdate) {
    if (response.body && typeof response.body.getReader === "function") {
      var reader = response.body.getReader();
      var decoder = new TextDecoder();
      var raw = "";
      var sseBuffer = "";
      var accumulated = "";
      var sawStreamText = false;

      function tryHandleSseLine(line) {
        var trimmed = line.trim();
        if (!trimmed || trimmed.indexOf("data:") !== 0) return;
        var value = trimmed.slice(5).trim();
        if (!value || value === "[DONE]") return;
        try {
          var payload = JSON.parse(value);
          var piece = extractText(payload);
          if (!piece) return;
          sawStreamText = true;
          accumulated += piece;
          if (typeof onStreamUpdate === "function") {
            onStreamUpdate(accumulated);
          }
        } catch {}
      }

      while (true) {
        var chunk = await reader.read();
        if (chunk.done) break;
        var decoded = decoder.decode(chunk.value, { stream: true });
        raw += decoded;
        sseBuffer += decoded;

        var lines = sseBuffer.split(/\r?\n/);
        sseBuffer = lines.pop() || "";
        lines.forEach(tryHandleSseLine);
      }
      raw += decoder.decode();
      if (sseBuffer) tryHandleSseLine(sseBuffer);

      if (sawStreamText) {
        return accumulated;
      }

      var concatenatedParts = [];
      raw.replace(/}\s*{/g, "}\n{").split(/\r?\n/).forEach(function (line) {
        var trimmed = line.trim();
        if (!trimmed || trimmed.charAt(0) !== "{") return;
        try {
          var payload = JSON.parse(trimmed);
          var piece = extractText(payload);
          if (piece) concatenatedParts.push(piece);
        } catch {}
      });
      if (concatenatedParts.length) return concatenatedParts.join("");

      try {
        var parsedRaw = JSON.parse(raw);
        return extractText(parsedRaw) || JSON.stringify(parsedRaw, null, 2);
      } catch {
        return raw;
      }
    }

    var text = await response.text();
    try {
      var parsed = JSON.parse(text);
      return extractText(parsed) || JSON.stringify(parsed, null, 2);
    } catch {
      return text;
    }
  }

  function resolveTarget(cfg) {
    var id = String(cfg.targetId || "chatbot-widget");
    var node = document.getElementById(id);
    if (node) return node;
    node = document.createElement("div");
    node.id = id;
    if (
      BOOT_SCRIPT &&
      BOOT_SCRIPT.parentNode &&
      BOOT_SCRIPT.parentNode.nodeType === 1 &&
      String(BOOT_SCRIPT.parentNode.nodeName || "").toLowerCase() === "body"
    ) {
      BOOT_SCRIPT.parentNode.insertBefore(node, BOOT_SCRIPT);
    } else if (document.body) {
      document.body.appendChild(node);
    } else if (BOOT_SCRIPT && BOOT_SCRIPT.parentNode) {
      BOOT_SCRIPT.parentNode.appendChild(node);
    } else {
      return null;
    }
    return node;
  }

  function mountInlineMarkup(host, cfg) {
    host.innerHTML = ""
      + "<div class=\"" + PREFIX + "-inline-wrap\">"
      + "  <section class=\"" + PREFIX + "-glass " + PREFIX + "-display\">"
      + "    <div class=\"" + PREFIX + "-display-head\">"
      + "      <div>"
      + "        <p class=\"" + PREFIX + "-eyebrow\">Query Sent</p>"
      + "        <p class=\"" + PREFIX + "-query-text\"></p>"
      + "      </div>"
      + "      <div class=\"" + PREFIX + "-meta\">"
      + "        <span class=\"" + PREFIX + "-badge\">CHAT</span>"
      + "        <time class=\"" + PREFIX + "-time\">--</time>"
      + "      </div>"
      + "    </div>"
      + "    <div class=\"" + PREFIX + "-out\"></div>"
      + "    <div class=\"" + PREFIX + "-actions\">"
      + "      <button class=\"" + PREFIX + "-action-btn " + PREFIX + "-copy\" type=\"button\" aria-label=\"Copy response\" title=\"Copy response\" disabled>⎘</button>"
      + "      <button class=\"" + PREFIX + "-action-btn " + PREFIX + "-download\" type=\"button\" aria-label=\"Download response\" title=\"Download response\" disabled>⤓</button>"
      + "    </div>"
      + "  </section>"
      + "  <section class=\"" + PREFIX + "-glass " + PREFIX + "-input-panel\">"
      + "    <p class=\"" + PREFIX + "-kicker\">" + escapeHtml(cfg.kicker || "ASTIG MEDIA") + "</p>"
      + "    <form class=\"" + PREFIX + "-row\" novalidate>"
      + "      <input class=\"" + PREFIX + "-file\" type=\"file\" hidden />"
      + "      <button class=\"" + PREFIX + "-icon-btn " + PREFIX + "-upload\" type=\"button\" aria-label=\"Upload\" title=\"Upload\">"
      + "        <img class=\"" + PREFIX + "-button-icon\" src=\"" + UPLOAD_ICON + "\" alt=\"\" />"
      + "      </button>"
      + "      <input class=\"" + PREFIX + "-input\" type=\"text\" placeholder=\"✦ Ask Anything...\" required />"
      + "      <button class=\"" + PREFIX + "-icon-btn " + PREFIX + "-send\" type=\"submit\" aria-label=\"Send\" title=\"Send\">"
      + "        <img class=\"" + PREFIX + "-button-icon\" src=\"" + SEND_ICON + "\" alt=\"\" />"
      + "      </button>"
      + "    </form>"
      + "    <div class=\"" + PREFIX + "-shortcut-row\"></div>"
      + "  </section>"
      + "</div>";
  }

  function wireBehavior(scope, cfg) {
    var out = scope.querySelector("." + PREFIX + "-out");
    var form = scope.querySelector("form." + PREFIX + "-row");
    var fileInput = scope.querySelector("." + PREFIX + "-file");
    var uploadBtn = scope.querySelector("." + PREFIX + "-upload");
    var input = scope.querySelector("." + PREFIX + "-input");
    var send = scope.querySelector("." + PREFIX + "-send");
    var shortcutRow = scope.querySelector("." + PREFIX + "-shortcut-row");
    var queryText = scope.querySelector("." + PREFIX + "-query-text");
    var timeEl = scope.querySelector("." + PREFIX + "-time");
    var copyBtn = scope.querySelector("." + PREFIX + "-copy");
    var downloadBtn = scope.querySelector("." + PREFIX + "-download");
    var lastText = "";
    var typedText = "";
    var typingTarget = "";
    var typingTimer = null;

    function setActionState(disabled) {
      if (copyBtn) copyBtn.disabled = disabled;
      if (downloadBtn) downloadBtn.disabled = disabled;
    }

    function stopTypewriter() {
      if (typingTimer) {
        clearTimeout(typingTimer);
        typingTimer = null;
      }
    }

    function runTypewriter() {
      if (typedText.length >= typingTarget.length) {
        typingTimer = null;
        return;
      }
      typedText += typingTarget.charAt(typedText.length);
      out.textContent = typedText;
      typingTimer = setTimeout(runTypewriter, 8);
    }

    function renderTypewriter(nextText) {
      var next = String(nextText || "");
      if (!next) {
        stopTypewriter();
        typedText = "";
        typingTarget = "";
        out.textContent = "";
        return;
      }
      if (!next.startsWith(typedText)) {
        typedText = "";
      }
      typingTarget = next;
      if (!typingTimer) {
        runTypewriter();
      }
    }

    function renderLoadingTyping() {
      out.innerHTML = ""
        + "<span class=\"" + PREFIX + "-loading\">"
        + "Assistant Typing"
        + "<span class=\"" + PREFIX + "-loading-dot\">.</span>"
        + "<span class=\"" + PREFIX + "-loading-dot\">.</span>"
        + "<span class=\"" + PREFIX + "-loading-dot\">.</span>"
        + "</span>";
    }

    function renderShortcutChips() {
      if (!shortcutRow) return;
      shortcutRow.innerHTML = "";
      var safeChips = Array.isArray(cfg.chips) ? cfg.chips : [];
      safeChips.forEach(function (chip) {
        if (!chip || typeof chip !== "object") return;
        var label = String(chip.label || chip.query || "").trim();
        var query = String(chip.query || chip.label || "").trim();
        if (!label || !query) return;
        var button = document.createElement("button");
        button.type = "button";
        button.className = PREFIX + "-shortcut-chip";
        button.textContent = label;
        button.addEventListener("click", function () {
          input.value = query;
          input.focus();
        });
        shortcutRow.appendChild(button);
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        if (!lastText) return;
        navigator.clipboard.writeText(lastText).then(function () {
          copyBtn.textContent = "✓";
          setTimeout(function () { copyBtn.textContent = "⎘"; }, 900);
        }).catch(function () {});
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener("click", function () {
        if (!lastText) return;
        var stamp = new Date().toISOString().replace(/[:.]/g, "-");
        var blob = new Blob([lastText], { type: "text/plain;charset=utf-8" });
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "assistant-response-" + stamp + ".txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(function () {
          URL.revokeObjectURL(link.href);
        }, 800);
      });
    }

    if (uploadBtn && fileInput) {
      uploadBtn.addEventListener("click", function () {
        fileInput.click();
      });
      fileInput.addEventListener("change", function () {
        var selected = fileInput.files && fileInput.files[0] ? fileInput.files[0] : null;
        if (!selected || !input) return;
        if (!String(input.value || "").trim()) {
          input.value = "Analyze file: " + selected.name;
        }
        input.focus();
      });
    }

    renderShortcutChips();

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var query = String(input.value || "").trim();
      if (!query) return;
      send.disabled = true;
      if (queryText) queryText.textContent = query;
      if (timeEl) {
        var now = new Date();
        timeEl.textContent = now.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
      }
      stopTypewriter();
      typedText = "";
      typingTarget = "";
      renderLoadingTyping();
      fetch(cfg.webhookUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ query: query, prompt: query, message: query, sessionId: "sid-" + Date.now().toString(36) })
      }).then(function (response) {
        return parseResponse(response, function (partialText) {
          var partial = String(partialText || "");
          if (!partial.trim()) return;
          lastText = partial;
          renderTypewriter(partial);
          setActionState(false);
        }).then(function (text) {
          if (!response.ok) throw new Error(text || ("Request failed with status " + response.status));
          return text;
        });
      }).then(function (text) {
        var display = String(text || "").trim() || "No content returned.";
        lastText = display;
        renderTypewriter(display);
        setActionState(false);
        input.value = "";
      }).catch(function (error) {
        var msg = error && error.message ? error.message : "Unknown error";
        lastText = "";
        stopTypewriter();
        out.textContent = "Webhook Error: " + msg;
        setActionState(true);
      }).finally(function () {
        send.disabled = false;
      });
    });
  }

  function mount(cfg) {
    ensureStyle(cfg);
    var host = resolveTarget(cfg);
    if (!host) return;
    host.classList.add(PREFIX + "-root");

    if (cfg.mode === "floating") {
      var floatingWrap = document.createElement("div");
      floatingWrap.className = PREFIX + "-floating-wrap";
      host.innerHTML = "";
      host.appendChild(floatingWrap);
      mountInlineMarkup(floatingWrap, cfg);
      wireBehavior(floatingWrap, cfg);

      var launcher = document.createElement("button");
      launcher.type = "button";
      launcher.className = PREFIX + "-floating-launch";
      launcher.textContent = "Chat";
      launcher.addEventListener("click", function () {
        floatingWrap.classList.toggle("is-open");
      });
      document.body.appendChild(launcher);
      return;
    }

    mountInlineMarkup(host, cfg);
    wireBehavior(host, cfg);
  }

  var scriptCfg = (function () {
    if (!(document.currentScript instanceof HTMLScriptElement)) return {};
    return decodeConfig(document.currentScript.getAttribute("data-config"));
  })();
  var config = Object.assign({}, window.__CHATBOT_CONFIG__ || {}, scriptCfg || {});
  if (!config.webhookUrl) {
    console.error("[Chatbot Widget] Missing webhookUrl in config.");
    return;
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      mount(config);
    }, { once: true });
  } else {
    mount(config);
  }
})();