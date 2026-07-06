/* SIEC — Footer behavior. Runs after footer.html is injected into #footer. */
(function initFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;

  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('newsletter-form');
  const status = document.getElementById('newsletter-status');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('#newsletter-email').value.trim();
      if (!email) return;
      // No backend wired up yet — placeholder confirmation only.
      status.textContent = `Thanks — we'll send updates to ${email}.`;
      form.reset();
    });
  }

  if (window.SIEC) {
    if (SIEC.rebindMagnetic) SIEC.rebindMagnetic();
    if (SIEC.bindCursorTargets) SIEC.bindCursorTargets();
    if (SIEC.rebindReveals) SIEC.rebindReveals();
  }
})();