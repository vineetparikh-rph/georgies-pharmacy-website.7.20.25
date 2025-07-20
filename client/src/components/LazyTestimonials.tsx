import React, { lazy, Suspense } from "react";

const TestimonialsSection = lazy(() => import("./TestimonialsSection"));

export default function LazyTestimonials({
  testimonials,
}: {
  testimonials: any[];
}) {
  return (
    <Suspense
      fallback={
        <div className="animate-pulse bg-gray-100 rounded-lg h-96 flex items-center justify-center">
          <span className="text-gray-500">Loading testimonials...</span>
        </div>
      }
    >
      <TestimonialsSection testimonials={testimonials} />
    </Suspense>
  );
}
