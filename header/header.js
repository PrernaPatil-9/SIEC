/* SIEC — Header behavior. Runs after header.html is injected into #header. */
(function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');

  // Hamburger open/close
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    menu.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  // Dark-on-hero: if the first section under <main> is a dark hero, the
  // header starts in "on dark" (white text) mode until the user scrolls
  // past it, then flips to a light, blurred bar.
  const heroSection = document.querySelector('main > section:first-of-type');
  const heroIsDark = heroSection && getComputedStyle(heroSection).backgroundColor !== 'rgba(0, 0, 0, 0)'
    && heroSection.id === 'hero';

  if (heroIsDark) header.classList.add('header-on-dark');

  const applyScrollState = () => {
    const scrolled = window.scrollY > 40;
    header.classList.toggle('header-scrolled', scrolled);
    if (heroIsDark) header.classList.toggle('header-on-dark', !scrolled);
  };
  applyScrollState();
  window.addEventListener('scroll', applyScrollState, { passive: true });

  // Re-bind magnetic + cursor highlight behaviour to the logo/CTA now
  // that they exist in the DOM (main.js already ran its first pass).
  if (window.SIEC) {
    if (SIEC.rebindMagnetic) SIEC.rebindMagnetic();
    if (SIEC.bindCursorTargets) SIEC.bindCursorTargets();
  }
})();