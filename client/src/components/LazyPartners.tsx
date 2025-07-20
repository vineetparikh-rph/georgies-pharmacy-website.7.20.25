import React, { lazy, Suspense } from "react";

const PartnersSection = lazy(() => import("./PartnersSection"));

export default function LazyPartners() {
  return (
    <Suspense
      fallback={
        <div className="animate-pulse bg-gray-100 rounded-lg h-48 flex items-center justify-center">
          <span className="text-gray-500">Loading partners...</span>
        </div>
      }
    >
      <PartnersSection />
    </Suspense>
  );
}
