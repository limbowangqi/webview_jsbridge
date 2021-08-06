const setupWebViewJavascriptBridge = function (e) {
  console.log("window.WebViewJavascriptBridge", window.WebViewJavascriptBridge);
  if (isStarfish() || isStarfishDoctor()) {
    if (window.WebViewJavascriptBridge) return e(WebViewJavascriptBridge);
    if (window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
    window.WVJBCallbacks = [e];
    var i = document.createElement("iframe");
    i.style.display = "none";
    i.src = "https://__bridge_loaded__";
    document.documentElement.appendChild(i);
    setTimeout(function () {
      document.documentElement.removeChild(i);
    }, 0);
  }
};

setupWebViewJavascriptBridge(function (bridge) {
  // bridge.callHandler()
  // bridge.registerHandler()
});
