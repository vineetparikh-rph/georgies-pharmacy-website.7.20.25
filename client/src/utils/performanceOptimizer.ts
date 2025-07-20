// Performance optimization utilities

export const preloadCriticalResources = () => {
  // Preload critical images
  const criticalImages = ["/images/hero-pharmacy.jpg", "/images/logo.png"];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
};

export const optimizeThirdPartyScripts = () => {
  // Defer non-critical scripts
  const scripts = document.querySelectorAll("script[src]");
  scripts.forEach((script) => {
    if (!script.hasAttribute("defer") && !script.hasAttribute("async")) {
      script.setAttribute("defer", "");
    }
  });
};

export const removeUnusedCSS = () => {
  // Remove unused CSS rules after page load
  setTimeout(() => {
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach((sheet) => {
      if (sheet.getAttribute("href")?.includes("unused")) {
        sheet.remove();
      }
    });
  }, 2000);
};

export const enableServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("/sw.js");
      console.log("Service Worker registered");
    } catch (error) {
      console.log("Service Worker registration failed");
    }
  }
};

export const initPerformanceOptimizations = () => {
  // Run optimizations after DOM is loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      preloadCriticalResources();
      optimizeThirdPartyScripts();
      removeUnusedCSS();
      enableServiceWorker();
    });
  } else {
    preloadCriticalResources();
    optimizeThirdPartyScripts();
    removeUnusedCSS();
    enableServiceWorker();
  }
};
