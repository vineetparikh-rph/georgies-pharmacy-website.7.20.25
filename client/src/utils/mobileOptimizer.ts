// Mobile-specific performance optimizations

export const isMobile = () => {
  return (
    window.innerWidth <= 768 ||
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );
};

export const optimizeForMobile = () => {
  if (!isMobile()) return;

  // Remove hover effects on mobile
  const style = document.createElement('style');
  style.textContent = `
    @media (hover: none) {
      .hover\\:shadow-xl:hover { box-shadow: var(--tw-shadow); }
      .hover\\:bg-red-700:hover { background-color: rgb(185 28 28); }
      .hover\\:-translate-y-1:hover { transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // Disable smooth scrolling on mobile for performance
  document.documentElement.style.scrollBehavior = 'auto';

  // Optimize images for mobile
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    if (!img.getAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    if (!img.getAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
  });

  // Reduce animation complexity
  const animatedElements = document.querySelectorAll('[class*="animate-"]');
  animatedElements.forEach((el) => {
    if (el instanceof HTMLElement) {
      el.style.animationDuration = '0.1s';
      el.style.animationIterationCount = '1';
    }
  });
};

export const deferNonCriticalResources = () => {
  // Defer testimonials and partners loading on mobile
  if (isMobile()) {
    const deferredSections = ['testimonials', 'partners', 'awards'];

    deferredSections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section instanceof HTMLElement) {
        // Hide initially and load after 4 seconds on mobile
        section.style.display = 'none';
        setTimeout(() => {
          section.style.display = 'block';
          section.style.opacity = '0';
          section.style.transition = 'opacity 0.5s';
          setTimeout(() => {
            section.style.opacity = '1';
          }, 100);
        }, 4000);
      }
    });
  }
};

export const optimizeFonts = () => {
  // Preload only critical fonts
  const criticalFonts = ['system-ui', '-apple-system', 'BlinkMacSystemFont'];

  // Use font-display: swap for better performance
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'optimized-system';
      src: local('system-ui'), local('-apple-system'), local('BlinkMacSystemFont');
      font-display: swap;
      unicode-range: U+0020-007F;
    }
  `;
  document.head.appendChild(style);
};

export const initMobileOptimizations = () => {
  // Run immediately
  optimizeForMobile();
  optimizeFonts();

  // Run after page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      deferNonCriticalResources();
    });
  } else {
    deferNonCriticalResources();
  }

  // Optimize on resize
  let resizeTimeout: number;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(optimizeForMobile, 150);
  });
};
