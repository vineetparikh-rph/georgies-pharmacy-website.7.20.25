// Gentle mobile optimizations that won't break the site

export const isMobile = () => {
  return window.innerWidth <= 768;
};

export const optimizeImagesGently = () => {
  if (!isMobile()) return;

  // Add loading="lazy" to non-critical images
  setTimeout(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      // Keep first 2 images eager, make rest lazy
      if (index > 1) {
        img.setAttribute('loading', 'lazy');
        img.setAttribute('decoding', 'async');
      }
    });
  }, 1000);
};

export const reduceMobileAnimations = () => {
  if (!isMobile()) return;

  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .animate-pulse { animation-duration: 2s; }
      .transition-all { transition-duration: 0.15s; }
      .duration-300 { transition-duration: 0.15s; }
      .duration-500 { transition-duration: 0.2s; }
    }
  `;
  document.head.appendChild(style);
};

export const optimizeFontsGently = () => {
  // Add font-display: swap for better loading
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
};

export const initGentleOptimizations = () => {
  // Only run gentle optimizations
  optimizeFontsGently();
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      optimizeImagesGently();
      reduceMobileAnimations();
    });
  } else {
    optimizeImagesGently();
    reduceMobileAnimations();
  }
};