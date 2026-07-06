document.addEventListener('DOMContentLoaded', () => {
  // ===== Lazy Loading Images =====
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // ===== Smooth Anchor Links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== Console branding =====
  console.log(
    '%c SIEC ',
    'background: #2d6a4f; color: white; font-size: 20px; font-weight: bold; padding: 8px 12px; border-radius: 4px;'
  );
  console.log('%c Sustainable Integrated Environmental Consultants ', 'color: #2d6a4f; font-size: 14px;');
  console.log('%c Built with ❤️ using HTML, Tailwind, and GSAP ', 'color: #666; font-size: 12px;');
});