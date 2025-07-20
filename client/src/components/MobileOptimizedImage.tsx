import { useState, useEffect, useRef } from 'react';

interface MobileOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  mobileWidth?: number;
  mobileHeight?: number;
}

export default function MobileOptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  mobileWidth,
  mobileHeight
}: MobileOptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (priority || isMobile) {
      // Load immediately for priority images or mobile
      setImageSrc(src);
    } else {
      // Use Intersection Observer for non-critical images
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    }
  }, [src, priority, isMobile]);

  const optimizedSrc = imageSrc ? `${imageSrc}${imageSrc.includes('?') ? '&' : '?'}w=${isMobile ? (mobileWidth || 400) : (width || 800)}&h=${isMobile ? (mobileHeight || 300) : (height || 600)}&q=${isMobile ? 60 : 80}&auto=format&fit=crop` : '';

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" style={{
          aspectRatio: `${isMobile ? (mobileWidth || 400) : (width || 800)} / ${isMobile ? (mobileHeight || 300) : (height || 600)}`
        }} />
      )}
      {imageSrc && (
        <img
          src={optimizedSrc}
          alt={alt}
          width={isMobile ? mobileWidth : width}
          height={isMobile ? mobileHeight : height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
}