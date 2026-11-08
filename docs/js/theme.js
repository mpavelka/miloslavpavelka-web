/* Dark-mode toggle. Without this script the page follows the system setting (see css/site.css).
   The choice is kept in localStorage and applied as data-theme on <html>. */
(function () {
  var root = document.documentElement;
  var KEY = 'theme';

  try {
    var saved = localStorage.getItem(KEY);
    if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);
  } catch (e) { /* storage unavailable: follow the system setting */ }

  var media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return !!(media && media.matches);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;

    function sync() { btn.setAttribute('aria-checked', isDark() ? 'true' : 'false'); }

    btn.hidden = false;
    sync();

    btn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) { /* not persisted */ }
      sync();
    });

    // While no choice has been made, follow changes of the system setting.
    if (media && media.addEventListener) media.addEventListener('change', sync);
  });
})();
