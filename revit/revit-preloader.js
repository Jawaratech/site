/* Revit preloader — overlay antar layar (load awal, navigasi tautan, revitGo/pushState, pindah halaman). */
(function () {
  if (window.RevitPreloader) return;
  var MIN = 900, QUIET = 280, MAX = 5000, FADE = 260;
  var css = '' +
    '#rv-pre{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;background-color:var(--background,#F5F7FB);font-family:var(--font-sans,"Plus Jakarta Sans",Inter,system-ui,sans-serif);color:var(--text-primary,#1A2B4C);opacity:1;transition:opacity ' + FADE + 'ms ease,visibility 0s linear 0s;visibility:visible}' +
    '#rv-pre[data-off]{opacity:0;visibility:hidden;pointer-events:none;transition:opacity ' + FADE + 'ms ease,visibility 0s linear ' + FADE + 'ms}' +
    '#rv-pre .rv-bar{position:absolute;top:0;left:0;right:0;height:3px;overflow:hidden;background-color:var(--primary-subtle,#E7EFFE)}' +
    '#rv-pre .rv-bar i{position:absolute;top:0;bottom:0;left:0;width:40%;background-color:var(--primary,#0B5FEF);border-radius:0 2px 2px 0;animation:rv-bar 1.3s cubic-bezier(.65,0,.35,1) infinite}' +
    '#rv-pre .rv-col{display:flex;flex-direction:column;align-items:center;gap:24px;padding:24px;animation:rv-in .42s cubic-bezier(.2,.7,.2,1) both}' +
    '#rv-pre .rv-mark{position:relative;width:136px;height:136px;display:flex;align-items:center;justify-content:center}' +
    '#rv-pre .rv-track{position:absolute;inset:0;border-radius:50%;border:3px solid var(--primary-subtle,#E7EFFE)}' +
    '#rv-pre .rv-arc{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,rgba(11,95,239,0) 0deg,var(--primary,#0B5FEF) 250deg,var(--primary,#0B5FEF) 280deg,rgba(11,95,239,0) 281deg);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 3px),#000 calc(100% - 3px));mask:radial-gradient(farthest-side,transparent calc(100% - 3px),#000 calc(100% - 3px));animation:rv-spin 1.1s linear infinite}' +
    '#rv-pre .rv-orbit{position:absolute;inset:12px;border-radius:50%;border:1px dashed var(--border-strong,#C5CCD8);animation:rv-spin 9s linear infinite reverse}' +
    '#rv-pre .rv-orbit b{position:absolute;top:-4px;left:50%;width:7px;height:7px;margin-left:-3.5px;border-radius:50%;background-color:var(--brand-navy,#13294B)}' +
    '#rv-pre .rv-disc{position:relative;width:84px;height:84px;border-radius:50%;background-color:var(--surface,#fff);box-shadow:0 1px 2px rgba(26,43,76,.08),0 8px 24px rgba(26,43,76,.10);display:flex;align-items:center;justify-content:center;animation:rv-breathe 2.2s ease-in-out infinite}' +
    '#rv-pre .rv-disc img{width:56px;height:56px;display:block;max-width:none}' +
    '#rv-pre .rv-lock{display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center}' +
    '#rv-pre .rv-word{font-size:24px;line-height:32px;font-weight:700;letter-spacing:-0.02em;color:var(--text-primary,#1A2B4C)}' +
    '#rv-pre .rv-org{font-size:12px;line-height:16px;font-weight:500;color:var(--text-secondary,#5A6270)}' +
    '#rv-pre .rv-blocks{display:flex;gap:6px}' +
    '#rv-pre .rv-blocks i{width:10px;height:10px;border-radius:3px;animation:rv-wave 1.2s ease-in-out infinite}' +
    '#rv-pre .rv-blocks i:nth-child(1){background-color:var(--primary,#0B5FEF)}' +
    '#rv-pre .rv-blocks i:nth-child(2){background-color:var(--primary-subtle,#E7EFFE);box-shadow:inset 0 0 0 1px rgba(11,95,239,.25);animation-delay:.12s}' +
    '#rv-pre .rv-blocks i:nth-child(3){background-color:var(--brand-navy,#13294B);animation-delay:.24s}' +
    '#rv-pre .rv-blocks i:nth-child(4){background-color:var(--emblem-gold,#855400);animation-delay:.36s}' +
    '#rv-pre .rv-msg{position:relative;height:22px;min-width:220px;font-size:14px;line-height:22px;color:var(--text-secondary,#5A6270);text-align:center}' +
    '#rv-pre .rv-msg span{position:absolute;inset:0;opacity:0;animation:rv-msg 4.2s ease-in-out infinite}' +
    '#rv-pre .rv-msg span:nth-child(2){animation-delay:1.4s}' +
    '#rv-pre .rv-msg span:nth-child(3){animation-delay:2.8s}' +
    '@keyframes rv-spin{to{transform:rotate(360deg)}}' +
    '@keyframes rv-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.045)}}' +
    '@keyframes rv-wave{0%,60%,100%{transform:translateY(0);opacity:1}30%{transform:translateY(-6px);opacity:.75}}' +
    '@keyframes rv-bar{0%{transform:translateX(-100%)}100%{transform:translateX(250%)}}' +
    '@keyframes rv-msg{0%{opacity:0;transform:translateY(6px)}6%,30%{opacity:1;transform:none}36%,100%{opacity:0;transform:translateY(-6px)}}' +
    '@keyframes rv-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}' +
    '@media (prefers-reduced-motion:reduce){#rv-pre *{animation-duration:0s!important;animation-iteration-count:1!important}#rv-pre .rv-arc{animation:rv-spin 2.4s linear infinite!important}#rv-pre .rv-msg span:first-child{opacity:1}}';

  var el, shownAt = 0, timer = 0, maxT = 0, mo = null, hold = /[?&]preload=hold\b/.test(location.search);

  function logoSrc() {
    var h = document.querySelector('img[data-revit-logo]');
    return (h && h.src) || 'assets/logo-setneg-ri.svg';
  }
  function build() {
    if (!document.getElementById('rv-pre-css')) {
      var st = document.createElement('style'); st.id = 'rv-pre-css'; st.textContent = css;
      (document.head || document.documentElement).appendChild(st);
    }
    el = document.createElement('div');
    el.id = 'rv-pre'; el.setAttribute('role', 'status'); el.setAttribute('aria-live', 'polite');
    el.innerHTML = '<div class="rv-bar"><i></i></div><div class="rv-col">' +
      '<div class="rv-mark"><div class="rv-track"></div><div class="rv-orbit"><b></b></div><div class="rv-arc"></div>' +
      '<div class="rv-disc"><img alt="Emblem Kementerian Sekretariat Negara RI" src="' + logoSrc() + '"></div></div>' +
      '<div class="rv-lock"><div class="rv-word">Revit</div><div class="rv-org">Kementerian Sekretariat Negara RI</div></div>' +
      '<div class="rv-blocks" aria-hidden="true"><i></i><i></i><i></i><i></i></div>' +
      '<div class="rv-msg"><span>Memuat halaman</span><span>Menyiapkan data</span><span>Hampir selesai</span></div></div>';
    (document.body || document.documentElement).appendChild(el);
  }
  function show() {
    if (!el || !el.isConnected) build();
    var img = el.querySelector('img'); var s = logoSrc(); if (img.getAttribute('src') !== s) img.src = s;
    el.removeAttribute('data-off');
    shownAt = Date.now();
    watch();
  }
  function hide() {
    if (hold || !el) return;
    clearTimeout(timer); clearTimeout(maxT); if (mo) { mo.disconnect(); mo = null; }
    el.setAttribute('data-off', '');
  }
  function settle() {
    clearTimeout(timer);
    timer = setTimeout(function () {
      var wait = MIN - (Date.now() - shownAt);
      if (wait > 0) { timer = setTimeout(settle, wait); return; }
      if (document.readyState !== 'complete') { timer = setTimeout(settle, 120); return; }
      hide();
    }, QUIET);
  }
  function watch() {
    if (mo) mo.disconnect();
    mo = new MutationObserver(function (list) {
      for (var i = 0; i < list.length; i++) { if (!el.contains(list[i].target)) { settle(); return; } }
    });
    mo.observe(document.body || document.documentElement, { subtree: true, childList: true });
    clearTimeout(maxT); maxT = setTimeout(hide, MAX);
    settle();
  }
  function routeKey(u) { try { var x = new URL(u, location.href); return x.pathname + x.search; } catch (e) { return String(u); } }
  function isPage(href) {
    if (!href || href.charAt(0) === '#' || /^(mailto|tel|javascript):/i.test(href)) return false;
    try { var x = new URL(href, location.href); return x.origin === location.origin && /\.html$/i.test(x.pathname) && routeKey(href) !== routeKey(location.href) || (/\.dc\.html/i.test(href) && x.hash !== location.hash); } catch (e) { return false; }
  }

  document.addEventListener('click', function (e) {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target && e.target.closest && e.target.closest('a[href]');
    if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
    if (isPage(a.getAttribute('href'))) show();
  }, true);
  var push = history.pushState;
  history.pushState = function (s, t, u) {
    var r = push.apply(this, arguments);
    lastKey = routeKey(location.href);
    if (u != null && /\.dc\.html|[?&]p=/.test(String(u) + location.search)) show();
    return r;
  };
  var lastKey = routeKey(location.href);
  window.addEventListener('popstate', function () { var k = routeKey(location.href); if (k !== lastKey) { lastKey = k; show(); } });
  window.addEventListener('beforeunload', function () { if (el) { el.removeAttribute('data-off'); } else { build(); } });
  window.addEventListener('pageshow', function (e) { if (e.persisted) { hold = false; hide(); } });


  /* Ekspor HTML mandiri: tautan antar-halaman X.dc.html → X.html (file sefolder). */
  var standalone = !/\.dc\.html$/i.test(decodeURIComponent(location.pathname)) && /\.html$/i.test(location.pathname);
  function toExport(u) { return String(u).replace(/^(\.\/)?([^#?\/]+)\.dc\.html/i, function (m, d, n) { return (d || '') + n + '.html'; }); }
  function fixLogos() {
    var src = document.querySelector('img[data-revit-logo]');
    if (!src || /logo-setneg-ri\.svg$/.test(src.getAttribute('src') || '')) return;
    var list = document.querySelectorAll('img[src$="logo-setneg-ri.svg"]');
    for (var i = 0; i < list.length; i++) list[i].src = src.src;
  }
  new MutationObserver(fixLogos).observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ['src'] });
  if (standalone) {
    /* Aset relatif di <helmet> DC anak (RevitHeader, dll.) sudah dimuat induk sebagai blob; jangan diambil ulang dari folder ekspor. */
    var LOCAL = /^(\.\/)?(_ds\/|assets\/|lc-icon\.js|support\.js|revit-preloader\.js)/i;
    var neuter = function (n) {
      if (!n || n.nodeType !== 1) return;
      if (n.tagName === 'SCRIPT' && LOCAL.test(n.getAttribute('src') || '')) n.setAttribute('src', 'data:text/javascript,');
      else if (n.tagName === 'LINK' && LOCAL.test(n.getAttribute('href') || '')) n.setAttribute('href', 'data:text/css,');
    };
    var ap = Node.prototype.appendChild, ib = Node.prototype.insertBefore;
    Node.prototype.appendChild = function (n) { neuter(n); return ap.call(this, n); };
    Node.prototype.insertBefore = function (n, r) { neuter(n); return ib.call(this, n, r); };
    window.revitGo = window.revitGo || function (u) { location.assign(toExport(u)); };
    document.addEventListener('click', function (e) {
      if (window.__revitHub || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target && e.target.closest && e.target.closest('a[href]');
      if (!a || (a.target && a.target !== '_self')) return;
      var href = a.getAttribute('href') || '';
      if (!/^(\.\/)?[^#?\/]+\.dc\.html/i.test(href)) return;
      e.preventDefault(); show(); location.assign(toExport(href));
    }, true);
  }
  window.RevitPreloader = { show: show, hide: function () { hold = false; hide(); } };
  if (document.body) show(); else document.addEventListener('DOMContentLoaded', show);
})();
