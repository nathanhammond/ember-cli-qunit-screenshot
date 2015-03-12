(function(window, document, url, id) {
  // Don't redefine an existing function.
  if (window.takeScreenshot) { return; }

  window.takeScreenshot = function(synchronous) {
    // TODO: Calculate metadata.
    // TODO: Ensure that this escapes correctly.
    var metadata = encodeURIComponent(JSON.stringify({
      scrollHeight: document.body.scrollHeight,
      outerHeight: window.outerHeight,
      innerHeight: window.innerHeight
    }));

    var endpoint = url + '?id=' + id + '&metadata=' + metadata;
    var xhr = new XMLHttpRequest();

    if (synchronous) {
      xhr.open("GET", endpoint, false);
      xhr.send();
      // TODO: Fail gracefully.
      return true;
    } else {
      return new Promise(function(resolve, reject) {
        xhr.open("GET", endpoint, true);
        xhr.addEventListener("load", resolve, false);
        xhr.addEventListener("error", reject, false);
        xhr.addEventListener("abort", reject, false);
        xhr.send();
      });
    }
  }
})(window, document, QUnit.urlParams.screenshotServer, QUnit.urlParams.browserGUID);
