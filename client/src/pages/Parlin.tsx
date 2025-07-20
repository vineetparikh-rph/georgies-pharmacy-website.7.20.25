import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Clock,
  Car,
  Home,
  Clock3,
  Pill,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function Parlin() {
  const services = [
    "Prescription Dispensing & Refills",
    "Curbside Pickup",
    "Medication Counseling",
    "Immunizations & Flu Shots",
    "Blood Pressure Monitoring",
    "Diabetes Supplies & Testing",
    "Over-the-Counter Consultations",
    "Prescription Transfers",
    "Medication Synchronization",
    "Medicare Part D Consultation",
  ];

  const convenientFeatures = [
    {
      icon: <Clock3 className="h-6 w-6 text-primary" />,
      title: "Extended Hours",
      description:
        "Open until 7 PM on weekdays and 5 PM on Saturday hours for maximum convenience",
    },
    {
      icon: <Car className="h-6 w-6 text-primary" />,
      title: "Curbside Pickup",
      description:
        "Quick and convenient prescription pickup without leaving your car - perfect for busy families",
    },
    {
      icon: <Home className="h-6 w-6 text-primary" />,
      title: "Community Focused",
      description:
        "Proudly serving Parlin, Sayreville, and surrounding communities with personalized neighborhood care",
    },
  ];

  const handleCall = () => {
    window.open("tel:+17329523022", "_self");
  };

  const handleDirections = () => {
    const address = encodeURIComponent("499 Ernston Road, Parlin, NJ 08859");
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${address}`,
      "_blank",
    );
  };

  return (
    <>
      <Helmet>
        <title>
          Georgies Parlin Pharmacy - Parlin, NJ | Community Pharmacy with
          Drive-Through
        </title>
        <meta
          name="description"
          content="Georgies Parlin Pharmacy offers convenient drive-through service, prescription refills, and personalized care in Parlin, NJ. Serving Sayreville and surrounding communities with extended hours."
        />
        <meta
          name="keywords"
          content="Parlin pharmacy, drive through pharmacy, prescription refills Parlin NJ, Sayreville pharmacy, community pharmacy, immunizations, diabetes supplies, medication counseling"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Georgies Parlin Pharmacy - Parlin, NJ | Community Pharmacy with Drive-Through"
        />
        <meta
          property="og:description"
          content="Georgies Parlin Pharmacy offers convenient drive-through service, prescription refills, and personalized care in Parlin, NJ."
        />
        <meta property="og:url" content="https://georgiesrx.com/parlin" />
        <meta property="og:type" content="website" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Pharmacy",
            name: "Georgies Parlin Pharmacy",
            description:
              "Community pharmacy in Parlin, NJ offering drive-through service, prescription refills, immunizations, and comprehensive pharmaceutical care to local families.",
            url: "https://georgiesrx.com/parlin",
            telephone: "+1-732-952-3022",
            address: {
              "@type": "PostalAddress",
              streetAddress: "499 Ernston Road",
              addressLocality: "Parlin",
              addressRegion: "NJ",
              postalCode: "08859",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "40.4598",
              longitude: "-74.3140",
            },
            openingHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-17:00"],
            priceRange: "$$",
            paymentAccepted: ["Cash", "Credit Card", "Insurance"],
            areaServed: [
              {
                "@type": "City",
                name: "Parlin",
                addressRegion: "NJ",
              },
              {
                "@type": "City",
                name: "Sayreville",
                addressRegion: "NJ",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Pharmacy Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Drive-Through Pharmacy Service",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Prescription Dispensing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Immunizations & Vaccines",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <Navigation />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
                Community Pharmacy • Drive-Through Available
              </Badge>
              <h1 className="text-5xl font-bold text-slate-900 mb-6">
                Georgies <span className="text-primary">Parlin</span> Pharmacy
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Your convenient neighborhood pharmacy in Parlin, serving the
                local community with personalized care, drive-through service,
                and extended hours. We're committed to making your healthcare
                experience as convenient and comfortable as possible.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-slate-700">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>499 Ernston Road, Parlin, NJ 08859</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span>(732) 952-3022</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <span>
                    Mon-Fri: 9:00 AM - 7:00 PM | Sat: 9:00 AM - 5:00 PM | Sun:
                    Closed
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleCall}
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Google Maps Location
                </h2>
                <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.2547!2d-74.31403!3d40.45986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z499%20Ernston%20Road%2C%20Parlin%2C%20NJ%2008859!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "8px" }}
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
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                About Georgies Parlin Pharmacy
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
                <p>
                  Georgies Parlin Pharmacy has been a trusted healthcare partner
                  for families in Parlin, Sayreville, and surrounding
                  communities since joining the Georgies family. Located
                  conveniently on Ernston Road, our pharmacy combines the warmth
                  and personal attention of a neighborhood pharmacy with modern
                  conveniences that fit your busy lifestyle.
                </p>
                <p>
                  What makes our Parlin location special is our commitment to
                  convenience without compromising on care. Our drive-through
                  service allows you to pick up prescriptions quickly and
                  safely, while our extended hours ensure we're available when
                  you need us most. Whether you're rushing to work, managing
                  family schedules, or simply prefer the convenience of staying
                  in your car, we've designed our services around your needs.
                </p>
                <p>
                  Our experienced pharmacy team takes pride in knowing each
                  customer personally and understanding their unique health
                  requirements. We work closely with local healthcare providers
                  to ensure seamless care coordination and offer comprehensive
                  services including immunizations, diabetes management
                  supplies, blood pressure monitoring, and detailed medication
                  consultations.
                </p>
                <p>
                  As part of the Georgies Pharmacy Group, we maintain the
                  highest standards of pharmaceutical care while fostering the
                  close-knit community relationships that make neighborhood
                  pharmacies special. We're not just your pharmacy – we're your
                  neighbors, committed to supporting the health and wellness of
                  everyone we serve in Parlin and beyond.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Convenient Features & Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {convenientFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Complete Pharmacy Services
              </h2>
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
          <section className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Experience Convenience & Care
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Visit our Parlin location for fast, friendly service and
              comprehensive pharmaceutical care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleCall}
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (732) 952-3022
              </Button>
              <Button
                onClick={() => (window.location.href = "/services/refills")}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
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
