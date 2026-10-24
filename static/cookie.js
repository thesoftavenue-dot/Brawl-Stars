(function () {
  var KEY = 'bs_ck';
  function init() {
    var bar = document.querySelector('.cookie-bar');
    if (!bar) return;
    var accepted = false;
    try { accepted = localStorage.getItem(KEY) === '1'; } catch (e) {}
    if (!accepted) bar.classList.add('show');
    var btn = bar.querySelector('.cookie-btn');
    if (btn) btn.addEventListener('click', function () {
      try { localStorage.setItem(KEY, '1'); } catch (e) {}
      bar.classList.remove('show');
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
