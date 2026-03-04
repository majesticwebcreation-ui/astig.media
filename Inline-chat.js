(function () {
  if (window.__astigMainInlineEmbedBooted) return;
  window.__astigMainInlineEmbedBooted = true;

  var ROOT_ID = "astig-inline-chat-root";
  var DEFAULT_WEBHOOK_URL = "https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat";

  function createSessionId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
    return "sid-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
  }

  function ensureRoot(scriptEl) {
    var root = document.getElementById(ROOT_ID);
    if (root) return root;

    root = document.createElement("section");
    root.id = ROOT_ID;

    var parent = (scriptEl && scriptEl.parentNode) || document.body || document.documentElement;
    if (parent === document.head) parent = document.body || document.documentElement;
    parent.appendChild(root);
    return root;
  }

  function resolveWebhookUrl(scriptEl) {
    var byData = scriptEl && scriptEl.dataset ? String(scriptEl.dataset.webhookUrl || "").trim() : "";
    if (byData) return byData;

    var fromGlobal = "";
    if (window.AIAssistEmbedConfig && typeof window.AIAssistEmbedConfig === "object") {
      fromGlobal = String(window.AIAssistEmbedConfig.webhookUrl || "").trim();
    }
    if (fromGlobal) return fromGlobal;

    return DEFAULT_WEBHOOK_URL;
  }

  function render(root) {
    root.innerHTML = [
      '<div class="aia-inline-shell">',
      '  <div class="aia-inline-form-wrap">',
      '    <form class="aia-inline-form" novalidate>',
      '      <input class="aia-inline-upload-input" type="file" hidden>',
      '      <button class="aia-inline-icon-btn aia-inline-upload" type="button" aria-label="Upload file" title="Upload file">',
      '        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>',
      '      </button>',
      '      <input class="aia-inline-input" type="text" autocomplete="off" placeholder="✦ Ask Anything..." required>',
      '      <button class="aia-inline-icon-btn aia-inline-send" type="submit" aria-label="Send prompt" title="Send prompt">',
      '        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.4 20.4 21 12 3.4 3.6l.2 6.6 9.8 1.8-9.8 1.8-.2 6.6z"></path></svg>',
      '      </button>',
      '    </form>',
      '  </div>',
      '  <p class="aia-inline-status" role="status" aria-live="polite"></p>',
      '</div>'
    ].join("");
  }

  function wire(root, webhookUrl) {
    var form = root.querySelector(".aia-inline-form");
    var input = root.querySelector(".aia-inline-input");
    var sendBtn = root.querySelector(".aia-inline-send");
    var uploadBtn = root.querySelector(".aia-inline-upload");
    var uploadInput = root.querySelector(".aia-inline-upload-input");
    var status = root.querySelector(".aia-inline-status");
    var sessionId = createSessionId();
    var selectedFile = null;
    var statusTimer = null;

    function setStatus(message, isError) {
      status.textContent = message || "";
      status.classList.toggle("is-error", Boolean(isError));
      if (statusTimer) clearTimeout(statusTimer);
      if (!message) return;
      statusTimer = setTimeout(function () {
        status.textContent = "";
        status.classList.remove("is-error");
      }, 2500);
    }

    uploadBtn.addEventListener("click", function () {
      uploadInput.click();
    });

    uploadInput.addEventListener("change", function () {
      selectedFile = uploadInput.files && uploadInput.files[0] ? uploadInput.files[0] : null;
      if (selectedFile) {
        setStatus("Attached: " + selectedFile.name, false);
      }
    });

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      var query = String(input.value || "").trim();
      if (!query) return;
      if (!webhookUrl) {
        setStatus("Webhook URL is missing.", true);
        return;
      }

      sendBtn.disabled = true;
      input.disabled = true;
      setStatus("Sending...", false);

      try {
        var response;
        if (selectedFile) {
          var formData = new FormData();
          formData.append("query", query);
          formData.append("sessionId", sessionId);
          formData.append("file", selectedFile, selectedFile.name);
          response = await fetch(webhookUrl, {
            method: "POST",
            mode: "cors",
            body: formData
          });
        } else {
          response = await fetch(webhookUrl, {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: query, sessionId: sessionId })
          });
        }

        var text = await response.text();
        if (!response.ok) {
          throw new Error(text || ("Request failed with status " + response.status));
        }

        input.value = "";
        selectedFile = null;
        uploadInput.value = "";
        setStatus("Sent successfully.", false);

        try {
          var parsed = text ? JSON.parse(text) : null;
          window.dispatchEvent(new CustomEvent("ai-assist-inline-response", { detail: parsed || text }));
        } catch {
          window.dispatchEvent(new CustomEvent("ai-assist-inline-response", { detail: text }));
        }
      } catch (error) {
        var message = error && error.message ? error.message : "Unable to send request.";
        setStatus(message, true);
      } finally {
        sendBtn.disabled = false;
        input.disabled = false;
      }
    });
  }

  function boot() {
    var scriptEl = document.currentScript;
    var root = ensureRoot(scriptEl);
    var webhookUrl = resolveWebhookUrl(scriptEl);
    render(root);
    wire(root, webhookUrl);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
