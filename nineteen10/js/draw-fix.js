/* Fixes the draw handlers without changing the existing game logic. */
(function () {
  var originalDraw = window.estrai;

  window.estrai = function () {
    try {
      return originalDraw.apply(this, arguments);
    } finally {
      // The card is an <img>: use its src, not CSS `content`, to show the draw.
      var drawnCard = document.getElementById("youestraz");
      if (drawnCard) {
        drawnCard.style.removeProperty("content");
      }
    }
  };

  window.trova_win = function () {
    var deck = document.getElementById("mazzos");
    if (!deck) return;

    if (estr === 1) {
      deck.onclick = null;
      deck.style.removeProperty("content");
      deck.src = new URL("img/retroRED.png", document.baseURI).href;
    } else if (estr === 2) {
      // Assign the function as the handler; calling it here would run it now.
      deck.onclick = estrai_wincard;
    }
  };
})();
