// cookie-consent.js: GDPR/UK PECR-compliant consent system for Kaptea
// Categories: necessary (always on), analytics, marketing
// Storage key: kaptea_consent (localStorage)
// Public API: window.kapteaOpenCookieModal()
(function () {
  'use strict';

  var STORAGE_KEY = 'kaptea_consent';
  var VERSION = '1.0';

  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (parsed.version !== VERSION) return null;
      return parsed;
    } catch (e) {
      return null;
    }
  }

  function saveConsent(analytics, marketing) {
    var consent = {
      version: VERSION,
      necessary: true,
      analytics: !!analytics,
      marketing: !!marketing,
      timestamp: new Date().toISOString()
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch (e) {}
    return consent;
  }

  function activateScripts(consent) {
    var scripts = document.querySelectorAll('script[type="text/plain"][data-consent]');
    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i];
      var category = script.getAttribute('data-consent');
      if (!consent[category]) continue;
      var clone = document.createElement('script');
      for (var j = 0; j < script.attributes.length; j++) {
        var attr = script.attributes[j];
        if (attr.name === 'type' || attr.name === 'data-consent') continue;
        clone.setAttribute(attr.name, attr.value);
      }
      clone.type = 'text/javascript';
      if (script.src) {
        clone.src = script.src;
      } else {
        clone.text = script.textContent;
      }
      script.parentNode.replaceChild(clone, script);
    }
  }

  function showBanner() {
    var banner = document.getElementById('kaptea-cookie-banner');
    if (banner) banner.style.display = 'flex';
  }

  function hideBanner() {
    var banner = document.getElementById('kaptea-cookie-banner');
    if (banner) banner.style.display = 'none';
  }

  function openModal() {
    var modal = document.getElementById('kaptea-cookie-modal');
    if (!modal) return;
    var consent = getConsent() || { analytics: false, marketing: false };
    var aToggle = document.getElementById('kaptea-toggle-analytics');
    var mToggle = document.getElementById('kaptea-toggle-marketing');
    if (aToggle) aToggle.checked = !!consent.analytics;
    if (mToggle) mToggle.checked = !!consent.marketing;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    var modal = document.getElementById('kaptea-cookie-modal');
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  function acceptAll() {
    var consent = saveConsent(true, true);
    activateScripts(consent);
    hideBanner();
    closeModal();
  }

  function savePreferences() {
    var aToggle = document.getElementById('kaptea-toggle-analytics');
    var mToggle = document.getElementById('kaptea-toggle-marketing');
    var analytics = aToggle ? aToggle.checked : false;
    var marketing = mToggle ? mToggle.checked : false;
    var consent = saveConsent(analytics, marketing);
    activateScripts(consent);
    hideBanner();
    closeModal();
  }

  function rejectNonEssential() {
    var consent = saveConsent(false, false);
    activateScripts(consent);
    hideBanner();
    closeModal();
  }

  function init() {
    var consent = getConsent();
    if (consent) {
      activateScripts(consent);
      hideBanner();
    } else {
      showBanner();
    }

    var acceptBtn = document.getElementById('kaptea-accept-all');
    var manageBtn = document.getElementById('kaptea-manage-prefs');
    var rejectBtn = document.getElementById('kaptea-reject-all');
    var modalAccept = document.getElementById('kaptea-modal-accept');
    var modalSave = document.getElementById('kaptea-modal-save');
    var modalClose = document.getElementById('kaptea-modal-close');
    var modal = document.getElementById('kaptea-cookie-modal');

    if (acceptBtn) acceptBtn.addEventListener('click', acceptAll);
    if (manageBtn) manageBtn.addEventListener('click', openModal);
    if (rejectBtn) rejectBtn.addEventListener('click', rejectNonEssential);
    if (modalAccept) modalAccept.addEventListener('click', acceptAll);
    if (modalSave) modalSave.addEventListener('click', savePreferences);
    if (modalClose) modalClose.addEventListener('click', closeModal);

    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (!modal) return;
      var displayed = window.getComputedStyle(modal).display;
      if (displayed && displayed !== 'none') closeModal();
    });
  }

  window.kapteaOpenCookieModal = openModal;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
