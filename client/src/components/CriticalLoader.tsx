// Critical path loading component for mobile optimization
import { useEffect, useState } from 'react';

interface CriticalLoaderProps {
  children: React.ReactNode;
}

export default function CriticalLoader({ children }: CriticalLoaderProps) {
  const [isCriticalLoaded, setIsCriticalLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => window.innerWidth <= 768;
    setIsMobile(checkMobile());

    // Load critical content immediately
    setIsCriticalLoaded(true);

    // Optimize for mobile
    if (checkMobile()) {
      // Remove non-critical CSS classes on mobile
      const removeNonCritical = () => {
        const elements = document.querySelectorAll('[class*="shadow-"], [class*="backdrop-"], [class*="blur-"]');
        elements.forEach(el => {
          if (el instanceof HTMLElement) {
            el.className = el.className
              .replace(/shadow-\w+/g, '')
              .replace(/backdrop-\w+/g, '')
              .replace(/blur-\w+/g, '');
          }
        });
      };

      // Defer non-critical style removal
      setTimeout(removeNonCritical, 100);
    }
  }, []);

  if (!isCriticalLoaded) {
    // Ultra-minimal loading state
    return (
      <div style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #7c2d12, #dc2626)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{
          width: '32px',
          height: '32px',
          border: '3px solid rgba(255,255,255,0.3)',
          borderTop: '3px solid white',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite'
        }} />
      </div>
    );
  }

  return <>{children}</>;
}