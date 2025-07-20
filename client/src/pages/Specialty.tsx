import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Microscope,
  Shield,
  Zap,
  Pill,
  CheckCircle,
  Heart,
  Stethoscope
} from "lucide-react";

export default function Specialty() {
  const specialtyServices = [
    "Oncology Medications",
    "Rheumatology Treatments", 
    "Multiple Sclerosis Therapies",
    "Hepatitis C Medications",
    "HIV/AIDS Treatments",
    "Transplant Medications",
    "Rare Disease Therapies",
    "Fertility Medications",
    "Growth Hormone Treatments",
    "Hemophilia Factor Products"
  ];

  const specialFeatures = [
    {
      icon: <Microscope className="h-6 w-6 text-primary" />,
      title: "Specialized Expertise",
      description: "Our pharmacists have advanced training in complex specialty medications and rare disease therapies"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Insurance Navigation",
      description: "Dedicated insurance specialists help with prior authorizations, appeals, and coverage optimization"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Rapid Processing",
      description: "Expedited handling of time-sensitive specialty medications with priority overnight delivery"
    }
  ];

  const supportServices = [
    "Patient Education & Training",
    "Side Effect Management", 
    "Adherence Support Programs",
    "Financial Assistance Programs",
    "Clinical Monitoring",
    "24/7 On-Call Support"
  ];

  const handleCall = () => {
    window.open("tel:+19089254566", "_self");
  };

  const handleDirections = () => {
    const address = encodeURIComponent("521 N Wood Avenue, Linden, NJ 07036");
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Georgies Specialty Pharmacy - Linden, NJ | Advanced Specialty Medications</title>
        <meta name="description" content="Georgies Specialty Pharmacy in Linden, NJ specializes in oncology, rheumatology, and rare disease medications. Expert care for complex therapies with insurance navigation and patient support." />
        <meta name="keywords" content="specialty pharmacy Linden NJ, oncology medications, rheumatology treatments, rare disease pharmacy, HIV medications, transplant drugs, specialty drug insurance, patient assistance programs" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Georgies Specialty Pharmacy - Linden, NJ | Advanced Specialty Medications" />
        <meta property="og:description" content="Georgies Specialty Pharmacy specializes in oncology, rheumatology, and rare disease medications with expert care and comprehensive patient support." />
        <meta property="og:url" content="https://georgiesrx.com/specialty" />
        <meta property="og:type" content="website" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Pharmacy",
            "name": "Georgies Specialty Pharmacy",
            "description": "Advanced specialty pharmacy in Linden, NJ providing expert care for complex conditions including oncology, rheumatology, rare diseases, and specialty medication management.",
            "url": "https://georgiesrx.com/specialty",
            "telephone": "+1-908-925-4566",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "521 N Wood Avenue",
              "addressLocality": "Linden",
              "addressRegion": "NJ", 
              "postalCode": "07036",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.6297",
              "longitude": "-74.2445"
            },
            "openingHours": [
              "Mo-Fr 09:00-18:00",
              "Sa 09:00-14:00"
            ],
            "priceRange": "$$$",
            "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
            "areaServed": {
              "@type": "State",
              "name": "New Jersey"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Specialty Pharmacy Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Oncology Medications"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Rare Disease Therapies"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Patient Assistance Programs"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navigation />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Specialty Care • Advanced Therapies
              </Badge>
              <h1 className="text-5xl font-bold text-slate-900 mb-6">
                Georgies <span className="text-primary">Specialty</span> Pharmacy
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Advanced pharmaceutical care for complex conditions in Linden, NJ. Our specialty pharmacy team provides 
                expert support for patients requiring specialized medications, comprehensive disease management, and 
                personalized care coordination with healthcare providers.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-slate-700">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>521 N Wood Avenue, Linden, NJ 07036</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span>(908) 925-4566</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM | Sat: 9:00 AM - 2:00 PM | Sun: Closed</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleCall} size="lg" className="bg-primary hover:bg-primary/90">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Specialist Team
                </Button>
                <Button onClick={handleDirections} size="lg" variant="outline">
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions
                </Button>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Google Maps Location</h2>
                <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.7547!2d-74.24453!3d40.62973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z521+N+Wood+Avenue%2C+Linden%2C+NJ+07036!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">About Georgies Specialty Pharmacy</h2>
              <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
                <p>
                  Georgies Specialty Pharmacy represents the pinnacle of pharmaceutical care for patients with complex medical conditions. Located in Linden, New Jersey, our specialty division focuses exclusively on providing advanced therapeutic solutions for patients requiring specialized medications that are often not available at traditional retail pharmacies.
                </p>
                <p>
                  Our team of specialty-trained pharmacists possesses extensive knowledge in managing complex therapies for conditions such as oncology, rheumatology, multiple sclerosis, hepatitis C, HIV/AIDS, organ transplants, and rare diseases. We understand that specialty medications require specialized handling, storage, and administration guidance, which is why we've invested in state-of-the-art facilities and comprehensive training programs.
                </p>
                <p>
                  What sets us apart is our holistic approach to specialty care. Beyond dispensing medications, we provide comprehensive patient support services including detailed education about your therapy, side effect management, adherence monitoring, and coordination with your healthcare team. Our insurance specialists work tirelessly to navigate prior authorizations, appeals, and patient assistance programs to ensure you have access to the medications you need.
                </p>
                <p>
                  We recognize that managing a complex medical condition can be overwhelming, which is why our compassionate team is available to provide ongoing support throughout your treatment journey. From the moment you transfer your specialty prescriptions to us, you'll have access to dedicated pharmacists who understand your specific condition and are committed to optimizing your treatment outcomes while minimizing barriers to care.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Specialized Care Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialFeatures.map((feature, index) => (
                <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Specialty Medication Areas</h2>
                <div className="space-y-3">
                  {specialtyServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Patient Support Services</h2>
                <div className="space-y-3">
                  {supportServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Heart className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-slate-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Expert Care for Complex Conditions</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get specialized pharmaceutical care from our expert team. We're here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleCall} size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Call (908) 925-4566
              </Button>
              <Button onClick={() => window.location.href = '/services/transfers'} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Stethoscope className="mr-2 h-5 w-5" />
                Transfer Prescriptions
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}