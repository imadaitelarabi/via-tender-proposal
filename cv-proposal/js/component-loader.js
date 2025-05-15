// component-loader.js
// Dynamically loads all [data-component] elements and injects their HTML
(function() {
  function loadComponent(placeholder) {
    const url = placeholder.getAttribute('data-component');
    if (!url) return Promise.resolve();
    return fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Component not found: ' + url);
        return res.text();
      })
      .then(html => {
        placeholder.outerHTML = html;
      })
      .catch(err => {
        placeholder.outerHTML = `<div class='error-loading-component'>${err.message}</div>`;
      });
  }

  function loadAllComponents() {
    const placeholders = Array.from(document.querySelectorAll('[data-component]'));
    if (placeholders.length === 0) {
      document.dispatchEvent(new Event('componentsLoaded'));
      if (window.runWireframesLoader) window.runWireframesLoader();
      return;
    }
    Promise.all(placeholders.map(loadComponent)).then(() => {
      document.dispatchEvent(new Event('componentsLoaded'));
      if (window.runWireframesLoader) window.runWireframesLoader();
    });
  }

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllComponents);
  } else {
    loadAllComponents();
  }
})(); 