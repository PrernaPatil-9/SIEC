document.addEventListener('DOMContentLoaded', () => {
  // ===== LOAD HEADER & FOOTER =====
  const loadComponent = async (url, targetId) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      const html = await response.text();
      document.getElementById(targetId).innerHTML = html;
      
      // After footer loads, re-initialize footer JS
      if (targetId === 'footer') {
        // Dynamically load footer.js
        const script = document.createElement('script');
        script.src = '../../footer/footer.js';
        document.body.appendChild(script);
      }
    } catch (error) {
      console.error('Error loading component:', error);
    }
  };

  loadComponent('../../header/header.html', 'header');
  loadComponent('../../footer/footer.html', 'footer');

  // ... rest of your home.js code
});
