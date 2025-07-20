// Aggressive mobile optimizations for PageSpeed

export const eliminateRenderBlocking = () => {
  // Remove non-critical CSS on mobile
  if (window.innerWidth <= 768) {
    const criticalOnly = `
      /* Ultra-minimal critical CSS for mobile */
      body { margin: 0; font-family: system-ui; }
      .header-nav { height: 60px; background: #A92A2A; position: fixed; top: 0; width: 100%; z-index: 50; }
      .hero-mobile { padding-top: 60px; min-height: 50vh; padding: 1rem; }
      .btn-primary { background: #A92A2A; color: white; padding: 12px 24px; border-radius: 6px; border: none; }
      .text-center { text-align: center; }
      .mb-4 { margin-bottom: 1rem; }
      .mb-6 { margin-bottom: 1.5rem; }
      .grid { display: grid; gap: 1rem; }
      .bg-white { background: white; }
      .p-6 { padding: 1.5rem; }
      .rounded-lg { border-radius: 8px; }
    `;

    // Replace existing styles with minimal critical CSS
    const existingStyles = document.querySelectorAll(
      'style, link[rel="stylesheet"]',
    );
    existingStyles.forEach((style) => {
      if (
        style.textContent?.includes("tailwind") ||
        style.getAttribute("href")?.includes("index.css")
      ) {
        return; // Keep main CSS
      }
      style.remove();
    });

    // Add ultra-minimal styles
    const minimalStyle = document.createElement("style");
    minimalStyle.textContent = criticalOnly;
    document.head.appendChild(minimalStyle);
  }
};

export const optimizeImages = () => {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    // Convert to WebP if supported and reduce quality on mobile
    if (window.innerWidth <= 768) {
      const src = img.src;
      if (src.includes("unsplash.com")) {
        // Ultra-compressed mobile images
        const mobileOptimized = src
          .replace(/w=\d+/, "w=400")
          .replace(/h=\d+/, "h=250")
          .replace(/q=\d+/, "q=50");

        img.src = mobileOptimized;
        img.loading = "lazy";
        img.decoding = "async";
      }
    }
  });
};

export const deferNonCriticalJS = () => {
  // Defer all non-critical JavaScript
  const scripts = document.querySelectorAll("script[src]");
  scripts.forEach((script) => {
    const src = script.getAttribute("src");
    if (src && !src.includes("main.tsx") && !src.includes("react")) {
      script.setAttribute("defer", "");
    }
  });
};

export const removeUnusedCSS = () => {
  if (window.innerWidth <= 768) {
    // Remove unused CSS classes on mobile
    const unusedClasses = [
      "shadow-xl",
      "shadow-lg",
      "backdrop-blur",
      "blur-",
      "animate-",
      "transition-",
      "duration-",
      "ease-",
      "hover:",
      "focus:",
      "group-hover:",
      "lg:",
      "xl:",
      "2xl:",
    ];

    const allElements = document.querySelectorAll("*");
    allElements.forEach((el) => {
      if (el instanceof HTMLElement && el.className) {
        let className = el.className;
        unusedClasses.forEach((unused) => {
          className = className.replace(
            new RegExp(`\\b[^\\s]*${unused}[^\\s]*`, "g"),
            "",
          );
        });
        el.className = className;
      }
    });
  }
};

export const optimizeFonts = () => {
  // Use only system fonts on mobile
  if (window.innerWidth <= 768) {
    const fontStyle = document.createElement("style");
    fontStyle.textContent = `
      * { font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif !important; }
    `;
    document.head.appendChild(fontStyle);
  }
};

export const initAggressiveOptimizations = () => {
  // Run immediately for critical path
  eliminateRenderBlocking();
  optimizeFonts();

  // Run after DOM content loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      optimizeImages();
      deferNonCriticalJS();
      removeUnusedCSS();
    });
  } else {
    optimizeImages();
    deferNonCriticalJS();
    removeUnusedCSS();
  }

  // Continuous optimization
  let optimizeTimeout: number;
  const continuousOptimize = () => {
    clearTimeout(optimizeTimeout);
    optimizeTimeout = window.setTimeout(() => {
      optimizeImages();
      removeUnusedCSS();
    }, 2000);
  };

  // Re-optimize when content changes
  const observer = new MutationObserver(continuousOptimize);
  observer.observe(document.body, { childList: true, subtree: true });
};
