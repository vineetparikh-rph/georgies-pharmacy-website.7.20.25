// Critical path CSS and resource optimization

export const inlineCriticalCSS = () => {
  const criticalCSS = `
    /* Critical above-the-fold mobile styles */
    .nav-mobile { height: 60px; background: #A92A2A; }
    .hero-mobile { min-height: 50vh; padding: 1rem; }
    .text-hero { font-size: 1.75rem; line-height: 1.2; font-weight: 700; }
    .text-sub { font-size: 1rem; line-height: 1.4; color: #64748b; }
    .btn-primary { background: #A92A2A; color: white; padding: 0.75rem 1.5rem; border-radius: 0.375rem; }
    .container-mobile { max-width: 100%; padding: 0 1rem; margin: 0 auto; }
    
    /* Remove non-critical styles on mobile */
    @media (max-width: 768px) {
      .shadow-xl, .shadow-lg { box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
      .rounded-xl { border-radius: 0.5rem; }
      .backdrop-blur-sm { backdrop-filter: none; }
      .bg-gradient-to-br { background: #ffffff; }
    }
  `;

  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.insertBefore(style, document.head.firstChild);
};

export const optimizeResourceHints = () => {
  // Remove non-critical preconnects
  const links = document.querySelectorAll('link[rel="preconnect"], link[rel="dns-prefetch"]');
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && !href.includes('fonts.googleapis.com') && !href.includes('fonts.gstatic.com')) {
      link.remove();
    }
  });

  // Add critical resource hints
  const criticalHints = [
    { rel: 'preload', href: '/src/components/Header.tsx', as: 'script' },
    { rel: 'preload', href: '/src/components/ImageCarousel.tsx', as: 'script' },
  ];

  criticalHints.forEach((hint) => {
    const link = document.createElement('link');
    Object.entries(hint).forEach(([key, value]) => {
      link.setAttribute(key, value);
    });
    document.head.appendChild(link);
  });
};

export const deferNonCriticalCSS = () => {
  // Defer loading of Tailwind utilities not needed above-the-fold
  const nonCriticalCSS = ['animate-', 'transition-', 'duration-', 'ease-', 'delay-'];

  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      [class*="animate-"],
      [class*="transition-"],
      [class*="duration-"],
      [class*="ease-"],
      [class*="delay-"] {
        animation: none !important;
        transition: none !important;
      }
    }
  `;
  document.head.appendChild(style);
};

export const initCriticalPathOptimizations = () => {
  // Run immediately for critical path
  inlineCriticalCSS();

  // Run after DOM loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      optimizeResourceHints();
      deferNonCriticalCSS();
    });
  } else {
    optimizeResourceHints();
    deferNonCriticalCSS();
  }
};
