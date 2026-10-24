// Download click tracking: fires GA4 `apk_download` event on download buttons.
// Works even before GA4 is configured (no-op if gtag is missing).
document.addEventListener('click', function (e) {
  var a = e.target.closest ? e.target.closest('a.dl-btn') : null;
  if (!a) return;
  var type = a.getAttribute('data-dl') || 'primary';
  if (window.gtag) {
    gtag('event', 'apk_download', { link_type: type, link_url: a.getAttribute('href') });
  }
});
