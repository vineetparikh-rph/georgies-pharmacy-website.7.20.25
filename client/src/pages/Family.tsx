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
  Star, 
  Users, 
  Heart, 
  Shield,
  Stethoscope,
  Pill,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function Family() {
  const services = [
    "Prescription Dispensing & Refills",
    "Medication Counseling & Reviews", 
    "Immunizations & Vaccines",
    "Blood Pressure Monitoring",
    "Diabetes Management & Supplies",
    "Cholesterol Screening",
    "Medication Synchronization",
    "Prescription Transfers",
    "Insurance Consultation",
    "Over-the-Counter Medications"
  ];

  const specialFeatures = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Family-Focused Care",
      description: "Comprehensive medication management for patients of all ages, from pediatric to geriatric care"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Personal Relationships",
      description: "Our pharmacists know you by name and understand your unique health needs and preferences"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Insurance Navigation",
      description: "Expert assistance with insurance coverage, prior authorizations, and cost-saving programs"
    }
  ];

  const handleCall = () => {
    window.open("tel:+19089254567", "_self");
  };

  const handleDirections = () => {
    const address = encodeURIComponent("332 W. St. Georges Avenue, Linden, NJ 07036");
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>St. Georges Family Pharmacy - Linden, NJ | Your Trusted Community Pharmacy</title>
        <meta name="description" content="St. Georges Family Pharmacy in Linden, NJ provides personalized prescription services, immunizations, and comprehensive health care. JD Power & Associates #1 rated pharmacy serving families since 2011." />
        <meta name="keywords" content="family pharmacy Linden NJ, prescription refills, immunizations, St Georges Family Pharmacy, community pharmacy, medication counseling, diabetes management, blood pressure monitoring" />
        
        {/* Open Graph */}
        <meta property="og:title" content="St. Georges Family Pharmacy - Linden, NJ | Your Trusted Community Pharmacy" />
        <meta property="og:description" content="St. Georges Family Pharmacy in Linden, NJ provides personalized prescription services, immunizations, and comprehensive health care. JD Power & Associates #1 rated pharmacy." />
        <meta property="og:url" content="https://georgiesrx.com/family" />
        <meta property="og:type" content="website" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Pharmacy",
            "name": "St. Georges Family Pharmacy",
            "description": "Full-service community pharmacy providing personalized prescription services, immunizations, and comprehensive health care to families in Linden, NJ since 2011.",
            "url": "https://georgiesrx.com/family",
            "telephone": "+1-908-925-4567",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "332 W. St. Georges Avenue",
              "addressLocality": "Linden",
              "addressRegion": "NJ",
              "postalCode": "07036",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.6220",
              "longitude": "-74.2445"
            },
            "openingHours": [
              "Mo-Fr 09:00-19:00",
              "Sa 09:00-17:00"
            ],
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
            "areaServed": {
              "@type": "City",
              "name": "Linden",
              "addressRegion": "NJ"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pharmacy Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Prescription Dispensing"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Immunizations & Vaccines"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Medication Counseling"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
        <Navigation />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Main Location • JD Power & Associates #1 Rated
              </Badge>
              <h1 className="text-5xl font-bold text-slate-900 mb-6">
                St. Georges <span className="text-primary">Family</span> Pharmacy
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Your neighborhood pharmacy in Linden, NJ, providing personalized care and comprehensive health services 
                to families since 2011. We're proud to be consistently rated #1 by JD Power & Associates for customer satisfaction.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-slate-700">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>332 W. St. Georges Avenue, Linden, NJ 07036</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span>(908) 925-4567</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <span>Mon-Fri: 9:00 AM - 7:00 PM | Sat: 9:00 AM - 5:00 PM | Sun: Closed</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleCall} size="lg" className="bg-primary hover:bg-primary/90">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.8547!2d-74.24453!3d40.62202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z332+W1cuIFN0LiBHZW9yZ2VzIEF2ZW51ZSwgTGluZGVuLCBOSiAwNzAzNg!5e0!3m2!1sen!2sus!4v1"
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
              <h2 className="text-3xl font-bold text-slate-900 mb-8">About St. Georges Family Pharmacy</h2>
              <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
                <p>
                  Since opening our doors in 2011, St. Georges Family Pharmacy has been the cornerstone of healthcare for families throughout Linden, New Jersey. As our flagship location and the original St. Georges pharmacy, we've built our reputation on providing exceptional personalized care that goes far beyond simply filling prescriptions.
                </p>
                <p>
                  Our experienced team of pharmacists and healthcare professionals understands that every family has unique health needs. That's why we take the time to get to know each patient personally, creating customized medication plans and providing comprehensive counseling to ensure optimal health outcomes. We're proud to have earned recognition as the #1 pharmacy by JD Power & Associates for customer satisfaction, a testament to our unwavering commitment to excellence.
                </p>
                <p>
                  Located conveniently on West St. Georges Avenue, our modern facility combines the personal touch of a neighborhood pharmacy with cutting-edge technology and comprehensive services. From routine prescription fills to specialized immunizations, diabetes management, and insurance consultation, we're your one-stop destination for all your family's healthcare needs.
                </p>
                <p>
                  What sets us apart is our genuine care for our community. We don't just serve customers; we serve neighbors, friends, and families who trust us with their most important asset – their health. Our pharmacists are always available for consultation, medication reviews, and health education, ensuring that every member of your family receives the personalized attention they deserve.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Why Families Choose Us</h2>
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

          {/* Services Section */}
          <section className="mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Comprehensive Pharmacy Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-primary to-red-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Experience the Family Difference</h2>
            <p className="text-xl text-red-100 mb-8">
              Join thousands of satisfied families who trust St. Georges Family Pharmacy for their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleCall} size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Call (908) 925-4567
              </Button>
              <Button onClick={() => window.location.href = '/services/refills'} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Pill className="mr-2 h-5 w-5" />
                Request Refill
              </Button>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}