import React from "react";
import { Badge } from "@/components/ui/badge";

export default function PartnersSection() {
  const partners = [
    "AmerisourceBergen",
    "Cardinal Health",
    "CVS Health",
    "Express Scripts",
    "McKesson",
    "OptumRx",
    "Walgreens",
    "Rite Aid",
    "Good Neighbor Pharmacy",
    "PSAO",
    "Independent Pharmacy Cooperative",
    "Health Mart",
    "FDB",
    "Surescripts",
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">
        Our Healthcare Partners
      </h2>
      <p className="text-center text-slate-600 mb-8 max-w-3xl mx-auto">
        We work with leading healthcare organizations to ensure you have access
        to the best medications and services at competitive prices.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {partners.map((partner, index) => (
          <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
            {partner}
          </Badge>
        ))}
      </div>
    </section>
  );
}
