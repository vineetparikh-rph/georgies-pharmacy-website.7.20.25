import { lazy, Suspense } from 'react';

interface LazyLoadWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  delay?: number;
}

export default function LazyLoadWrapper({
  children,
  fallback = <div className="animate-pulse bg-gray-200 h-20 rounded"></div>,
  delay = 0,
}: LazyLoadWrapperProps) {
  return (
    <Suspense fallback={fallback}>
      <div style={{ animationDelay: `${delay}ms` }}>{children}</div>
    </Suspense>
  );
}
