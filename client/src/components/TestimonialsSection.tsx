import React from 'react';
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: string;
  name: string;
  initials: string;
  review: string;
  source: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
        Real Testimony, by our Patients
      </h2>
      
      {/* Continuous Scrolling Testimonials */}
      <div className="relative overflow-hidden mb-8">
        <div className="flex animate-scroll-left-fast space-x-8">
          {/* Render shuffled testimonials twice for seamless loop */}
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 bg-white p-8 rounded-xl shadow-lg border border-slate-200 w-80 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                {testimonial.initials}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{testimonial.name}</h3>
              <div className="flex justify-center mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="text-yellow-400 text-lg font-bold drop-shadow-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-slate-600 mb-2">{testimonial.source}</p>
              <p className="text-slate-700 italic">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center">
        <Button
          onClick={() => window.location.href = '/testimonials'}
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
        >
          Read More Reviews
        </Button>
      </div>
    </section>
  );
}