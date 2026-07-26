document.querySelectorAll('.tg-cta-button').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    var opened = false;
    var openBot = function (clientID) {
      if (opened) return;
      opened = true;
      var suffix = clientID ? 'CID_' + clientID : 'nocid';
      window.location.href = 'https://t.me/jagiello_connect_bot?start=' + suffix;
    };
    var timeout = setTimeout(function () { openBot(null); }, 800);
    try {
      ym(106763595, 'getClientID', function (clientID) {
        clearTimeout(timeout);
        openBot(clientID);
      });
    } catch (err) {
      clearTimeout(timeout);
      openBot(null);
    }
  });
});
