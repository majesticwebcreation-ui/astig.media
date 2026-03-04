(function () {
  if (window.__astigInlineEmbedBooted) return;
  window.__astigInlineEmbedBooted = true;

  var ROOT_ID = "astig-inline-chat-root";
  var OVERRIDE_STYLE_ID = "astig-inline-chat-runtime-style";
  var INLINE_BUNDLE_SRC = "https://cdn.jsdelivr.net/gh/majesticwebcreation-ui/astig.media/astig-chat-widgets.js";

  function ensureRoot() {
    var root = document.getElementById(ROOT_ID);
    if (root) return root;

    root = document.createElement("section");
    root.id = ROOT_ID;
    root.setAttribute("aria-label", "Astig Media Inline Chat");

    var parent = (document.currentScript && document.currentScript.parentNode) || document.body || document.documentElement;
    if (parent === document.head) {
      parent = document.body || document.documentElement;
    }
    parent.appendChild(root);
    return root;
  }

  function injectRuntimeOverrides() {
    if (document.getElementById(OVERRIDE_STYLE_ID)) return;
    var style = document.createElement("style");
    style.id = OVERRIDE_STYLE_ID;
    style.textContent = [
      "#astig-inline-chat-root{position:relative;display:block;max-width:100%;margin:16px auto;z-index:1;}",
      "#astig-inline-chat-root #astig-chat-wrapper{position:static !important;inset:auto !important;display:block !important;visibility:visible !important;pointer-events:auto !important;z-index:auto !important;width:100% !important;max-width:100% !important;}",
      "#astig-inline-chat-root #cwLauncher{display:none !important;visibility:hidden !important;pointer-events:none !important;}",
      "#astig-inline-chat-root #chatWidget{position:relative !important;inset:auto !important;right:auto !important;left:auto !important;top:auto !important;bottom:auto !important;display:flex !important;width:min(490px,100%) !important;max-width:100% !important;height:700px !important;margin:0 !important;box-sizing:border-box !important;pointer-events:auto !important;z-index:1 !important;}",
      "@media (max-width: 560px){#astig-inline-chat-root #chatWidget{width:100% !important;height:min(700px,80vh) !important;}}"
    ].join("");
    (document.head || document.documentElement).appendChild(style);
  }

  function applyInlineMode() {
    var root = ensureRoot();
    var wrapper = document.getElementById("astig-chat-wrapper");
    var widget = document.getElementById("chatWidget");
    if (!wrapper || !widget) return false;

    if (wrapper.parentNode !== root) {
      root.appendChild(wrapper);
    }
    wrapper.setAttribute("data-astig-inline-mode", "true");

    var launcher = document.getElementById("cwLauncher");
    if (launcher) {
      launcher.style.setProperty("display", "none", "important");
      launcher.style.setProperty("pointer-events", "none", "important");
      launcher.setAttribute("aria-hidden", "true");
    }

    widget.style.setProperty("display", "flex", "important");
    widget.style.setProperty("position", "relative", "important");
    widget.style.setProperty("right", "auto", "important");
    widget.style.setProperty("left", "auto", "important");
    widget.style.setProperty("top", "auto", "important");
    widget.style.setProperty("bottom", "auto", "important");
    return true;
  }

  function watchForWidget() {
    var maxChecks = 140;
    var checks = 0;
    var interval = setInterval(function () {
      checks += 1;
      if (applyInlineMode() || checks >= maxChecks) {
        clearInterval(interval);
      }
    }, 120);

    var observer = new MutationObserver(function () {
      if (applyInlineMode()) {
        observer.disconnect();
      }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(function () {
      observer.disconnect();
    }, 20000);
  }

  function hasBundleScript() {
    var scripts = document.querySelectorAll("script[src]");
    for (var i = 0; i < scripts.length; i += 1) {
      var src = scripts[i].src || "";
      if (src.indexOf("astig-chat-widgets.js") !== -1) return true;
    }
    return false;
  }

  function loadInlineBundle() {
    if (document.getElementById("astig-chat-wrapper")) {
      applyInlineMode();
      watchForWidget();
      return;
    }

    if (hasBundleScript()) {
      watchForWidget();
      return;
    }

    var script = document.createElement("script");
    script.src = INLINE_BUNDLE_SRC;
    script.async = true;
    script.setAttribute("data-astig-inline-bundle", "1");
    script.onload = function () {
      applyInlineMode();
    };
    (document.head || document.documentElement).appendChild(script);
    watchForWidget();
  }

  function boot() {
    injectRuntimeOverrides();
    ensureRoot();
    loadInlineBundle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
