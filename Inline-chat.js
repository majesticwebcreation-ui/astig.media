(function () {
  if (window.__astigMainInlineEmbedBooted) return;
  window.__astigMainInlineEmbedBooted = true;

  var ROOT_ID = "astig-inline-chat-root";
  var DEFAULT_WEBHOOK_URL = "https://n8n.srv1291312.hstgr.cloud/webhook/a4d3520b-1922-4e9b-b162-3b15a5060985/chat";
  var DEFAULT_CHIPS = [
    "Get Jury Instruction",
    "Draft a Motion",
    "Check Penalties",
    "Analyze Police Report"
  ];

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
    if (window.AIAssistEmbedConfig && typeof window.AIAssistEmbedConfig === "object") {
      var byGlobal = String(window.AIAssistEmbedConfig.webhookUrl || "").trim();
      if (byGlobal) return byGlobal;
    }
    return DEFAULT_WEBHOOK_URL;
  }

  function safeText(value) {
    return String(value == null ? "" : value);
  }

  function extractResponseText(payload) {
    if (payload == null) return "";
    if (typeof payload === "string") return payload;
    if (typeof payload === "number" || typeof payload === "boolean") return String(payload);

    if (Array.isArray(payload)) {
      for (var i = 0; i < payload.length; i += 1) {
        var fromArray = extractResponseText(payload[i]);
        if (fromArray) return fromArray;
      }
      return "";
    }

    if (typeof payload === "object") {
      var keys = ["output", "response", "answer", "result", "message", "text", "content"];
      for (var k = 0; k < keys.length; k += 1) {
        var key = keys[k];
        if (key in payload) {
          var direct = extractResponseText(payload[key]);
          if (direct) return direct;
        }
      }
      return JSON.stringify(payload, null, 2);
    }

    return "";
  }

  async function parseResponse(response) {
    var text = await response.text();
    if (!text) return "";
    try {
      var parsed = JSON.parse(text);
      return extractResponseText(parsed) || JSON.stringify(parsed, null, 2);
    } catch {
      return text;
    }
  }

  function setStatus(statusEl, text, isError) {
    statusEl.textContent = safeText(text);
    statusEl.classList.toggle("is-error", Boolean(isError));
  }

  function render(root) {
    root.innerHTML = [
      '<div class="aia-main-embed">',
      '  <section class="aia-card aia-query-card">',
      '    <form class="aia-query-form" novalidate>',
      '      <input class="aia-upload-input" type="file" hidden>',
      '      <button class="aia-icon-btn aia-upload-btn" type="button" aria-label="Upload file" title="Upload file">',
      '        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>',
      '      </button>',
      '      <input class="aia-query-input" type="text" autocomplete="off" placeholder="✦ Ask Anything..." required>',
      '      <button class="aia-icon-btn aia-send-btn" type="submit" aria-label="Send prompt" title="Send prompt">',
      '        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.4 20.4 21 12 3.4 3.6l.2 6.6 9.8 1.8-9.8 1.8-.2 6.6z"></path></svg>',
      '      </button>',
      '    </form>',
      '    <div class="aia-chip-row"></div>',
      '    <p class="aia-status" role="status" aria-live="polite"></p>',
      '  </section>',
      '  <section class="aia-card aia-response-card">',
      '    <div class="aia-response-head">',
      '      <div>',
      '        <p class="aia-response-label">Query Sent</p>',
      '        <p class="aia-sent-query">Awaiting submission...</p>',
      '      </div>',
      '      <time class="aia-sent-time" datetime="">--</time>',
      '    </div>',
      '    <div class="aia-response-body">',
      '      <p class="aia-placeholder">Send a prompt to view webhook output.</p>',
      '    </div>',
      '    <div class="aia-response-actions">',
      '      <button class="aia-action-btn aia-copy-btn" type="button" disabled>Copy</button>',
      '      <button class="aia-action-btn aia-download-btn" type="button" disabled>Download</button>',
      '    </div>',
      '  </section>',
      '</div>'
    ].join("");
  }

  function wire(root, webhookUrl) {
    var queryForm = root.querySelector(".aia-query-form");
    var queryInput = root.querySelector(".aia-query-input");
    var sendBtn = root.querySelector(".aia-send-btn");
    var uploadInput = root.querySelector(".aia-upload-input");
    var uploadBtn = root.querySelector(".aia-upload-btn");
    var chipRow = root.querySelector(".aia-chip-row");
    var statusEl = root.querySelector(".aia-status");
    var sentQueryEl = root.querySelector(".aia-sent-query");
    var sentTimeEl = root.querySelector(".aia-sent-time");
    var responseBody = root.querySelector(".aia-response-body");
    var copyBtn = root.querySelector(".aia-copy-btn");
    var downloadBtn = root.querySelector(".aia-download-btn");

    var sessionId = createSessionId();
    var selectedFile = null;
    var lastResponse = "";

    function setBusy(isBusy) {
      sendBtn.disabled = isBusy;
      queryInput.disabled = isBusy;
      uploadBtn.disabled = isBusy;
    }

    function setResult(text) {
      lastResponse = safeText(text).trim();
      if (!lastResponse) {
        responseBody.innerHTML = '<p class="aia-placeholder">No content returned.</p>';
        copyBtn.disabled = true;
        downloadBtn.disabled = true;
        return;
      }
      responseBody.textContent = lastResponse;
      copyBtn.disabled = false;
      downloadBtn.disabled = false;
    }

    DEFAULT_CHIPS.forEach(function (label) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "aia-chip";
      btn.textContent = label;
      btn.addEventListener("click", function () {
        queryInput.value = label;
        queryForm.requestSubmit();
      });
      chipRow.appendChild(btn);
    });

    uploadBtn.addEventListener("click", function () {
      uploadInput.click();
    });

    uploadInput.addEventListener("change", function () {
      selectedFile = uploadInput.files && uploadInput.files[0] ? uploadInput.files[0] : null;
      if (selectedFile) {
        setStatus(statusEl, "Attached: " + selectedFile.name, false);
      }
    });

    copyBtn.addEventListener("click", async function () {
      if (!lastResponse) return;
      try {
        await navigator.clipboard.writeText(lastResponse);
        setStatus(statusEl, "Response copied.", false);
      } catch {
        setStatus(statusEl, "Unable to copy response.", true);
      }
    });

    downloadBtn.addEventListener("click", function () {
      if (!lastResponse) return;
      var stamp = new Date().toISOString().replace(/[:.]/g, "-");
      var blob = new Blob([lastResponse], { type: "text/plain;charset=utf-8" });
      var link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "ai-assist-response-" + stamp + ".txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(function () { URL.revokeObjectURL(link.href); }, 1200);
    });

    queryForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      var query = safeText(queryInput.value).trim();
      if (!query) return;
      if (!webhookUrl) {
        setStatus(statusEl, "Webhook URL is missing.", true);
        return;
      }

      setBusy(true);
      sentQueryEl.textContent = query;
      var now = new Date();
      sentTimeEl.dateTime = now.toISOString();
      sentTimeEl.textContent = now.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
      setStatus(statusEl, "Sending...", false);
      responseBody.textContent = "Loading response...";

      try {
        var response;
        if (selectedFile) {
          var formData = new FormData();
          formData.append("query", query);
          formData.append("sessionId", sessionId);
          formData.append("file", selectedFile, selectedFile.name);
          response = await fetch(webhookUrl, { method: "POST", mode: "cors", body: formData });
        } else {
          response = await fetch(webhookUrl, {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: query, sessionId: sessionId })
          });
        }

        var resultText = await parseResponse(response);
        if (!response.ok) {
          throw new Error(resultText || ("Request failed with status " + response.status));
        }

        setResult(resultText);
        setStatus(statusEl, "Response received.", false);
        queryInput.value = "";
        selectedFile = null;
        uploadInput.value = "";
      } catch (error) {
        var message = error && error.message ? error.message : "Unable to send request.";
        setResult("");
        responseBody.textContent = "Webhook Error: " + message;
        setStatus(statusEl, message, true);
      } finally {
        setBusy(false);
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
