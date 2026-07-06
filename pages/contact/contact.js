document.addEventListener('DOMContentLoaded', function() {
  // Load header
  fetch('../../header/header.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('header').innerHTML = html;
      const script = document.createElement('script');
      script.src = '../../header/header.js';
      document.body.appendChild(script);
    });

  // Load footer
  fetch('../../footer/footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
      const script = document.createElement('script');
      script.src = '../../footer/footer.js';
      document.body.appendChild(script);
    });

  // GSAP Animations
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Page header
    gsap.from('.page-header h1', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.3
    });
    gsap.from('.page-header p', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.5
    });
    gsap.from('.page-header .section-tag', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out',
      delay: 0.1
    });

    // Contact cards
    document.querySelectorAll('.contact-card').forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        delay: index * 0.08
      });
    });
  }

  // Form submission
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        alert('Thank you for your message! Our team will get back to you within 24 hours.');
        form.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 1500);
    });
  }
});