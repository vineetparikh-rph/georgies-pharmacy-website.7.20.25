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
  Building2,
  Stethoscope,
  Heart,
  Pill,
  CheckCircle,
  Truck,
  Shield,
} from "lucide-react";

export default function Outpatient() {
  const clinicalServices = [
    "Post-Surgical Medications",
    "Discharge Prescriptions",
    "Pain Management Solutions",
    "Antibiotic Therapies",
    "Wound Care Supplies",
    "Durable Medical Equipment",
    "Injectable Medications",
    "IV Therapy Supplies",
    "Specialized Compounds",
    "Clinical Consultations",
  ];

  const clinicalFeatures = [
    {
      icon: <Building2 className="h-6 w-6 text-primary" />,
      title: "Hospital-Grade Care",
      description:
        "Clinical pharmacy services meeting the highest medical standards and institutional protocols",
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-primary" />,
      title: "Medical Coordination",
      description:
        "Seamless coordination with healthcare providers, hospitals, and medical facilities",
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Patient-Centered Care",
      description:
        "Comprehensive support for outpatient treatment plans and recovery programs",
    },
  ];

  const additionalServices = [
    "Same-Day Prescription Filling",
    "Free Prescription Delivery",
    "Insurance Verification",
    "Prior Authorization Assistance",
    "Medication Therapy Management",
    "Clinical Documentation",
  ];

  const handleCall = () => {
    window.open("tel:+16097265800", "_self");
  };

  const handleDirections = () => {
    const address = encodeURIComponent(
      "530 Lakehurst Rd, Browns Mills, NJ 08015",
    );
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${address}`,
      "_blank",
    );
  };

  return (
    <>
      <Helmet>
        <title>
          Georgies Outpatient Pharmacy - Browns Mills, NJ | Clinical Pharmacy
          Services
        </title>
        <meta
          name="description"
          content="Georgies Outpatient Pharmacy in Browns Mills, NJ offers clinical pharmacy services, post-surgical medications, and comprehensive outpatient care. Free prescription delivery Browns Mills."
        />
        <meta
          name="keywords"
          content="outpatient pharmacy Browns Mills NJ, clinical pharmacy services, post-surgical medications, free prescription delivery Browns Mills, medical equipment, discharge prescriptions, pain management"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Georgies Outpatient Pharmacy - Browns Mills, NJ | Clinical Pharmacy Services"
        />
        <meta
          property="og:description"
          content="Georgies Outpatient Pharmacy offers clinical pharmacy services, post-surgical medications, and comprehensive outpatient care in Browns Mills, NJ."
        />
        <meta property="og:url" content="https://georgiesrx.com/outpatient" />
        <meta property="og:type" content="website" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Pharmacy",
            name: "Georgies Outpatient Pharmacy",
            description:
              "Clinical pharmacy services in Browns Mills, NJ specializing in outpatient care, post-surgical medications, discharge prescriptions, and comprehensive pharmaceutical support.",
            url: "https://georgiesrx.com/outpatient",
            telephone: "+1-609-726-5800",
            address: {
              "@type": "PostalAddress",
              streetAddress: "530 Lakehurst Rd",
              addressLocality: "Browns Mills",
              addressRegion: "NJ",
              postalCode: "08015",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "39.9726",
              longitude: "-74.5710",
            },
            openingHours: ["Mo-Fr 09:30-18:00", "Sa 10:00-14:00"],
            priceRange: "$$",
            paymentAccepted: ["Cash", "Credit Card", "Insurance"],
            areaServed: [
              {
                "@type": "City",
                name: "Browns Mills",
                addressRegion: "NJ",
              },
              {
                "@type": "City",
                name: "Pemberton",
                addressRegion: "NJ",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Clinical Pharmacy Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Post-Surgical Medications",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Free Prescription Delivery",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Clinical Consultations",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
        <Navigation />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
                Clinical Pharmacy • Hospital-Grade Care
              </Badge>
              <h1 className="text-5xl font-bold text-slate-900 mb-6">
                Georgies <span className="text-primary">Outpatient</span>{" "}
                Pharmacy
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Professional clinical pharmacy services in Browns Mills, NJ,
                specializing in outpatient care, post-surgical medications, and
                comprehensive pharmaceutical support for medical treatments. We
                bridge the gap between hospital and home care.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-slate-700">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>530 Lakehurst Rd, Browns Mills, NJ 08015</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span>(609) 726-5800</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <span>
                    Mon-Fri: 9:30 AM - 6:00 PM | Sat: 10:00 AM - 2:00 PM | Sun:
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
                  Call Clinical Team
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081.2547!2d-74.57103!3d39.97263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z530+Lakehurst+Rd%2C+Browns+Mills%2C+NJ+08015!5e0!3m2!1sen!2sus!4v1"
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
                About Georgies Outpatient Pharmacy
              </h2>
              <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
                <p>
                  Georgies Outpatient Pharmacy in Browns Mills represents our
                  commitment to providing hospital-quality pharmaceutical care
                  in an outpatient setting. Since joining the Georgies family,
                  we've specialized in serving patients who require
                  clinical-level support for their medication needs,
                  particularly those transitioning from hospital to home care.
                </p>
                <p>
                  Our Browns Mills location is uniquely positioned to serve
                  patients requiring post-surgical medications, complex
                  discharge prescriptions, pain management solutions, and
                  specialized medical supplies. We work closely with local
                  hospitals, surgery centers, and healthcare providers to ensure
                  seamless care transitions and optimal patient outcomes.
                </p>
                <p>
                  What makes our outpatient pharmacy special is our clinical
                  approach to pharmaceutical care. Our team includes pharmacists
                  with extensive experience in institutional settings who
                  understand the complexities of post-acute care. We provide
                  comprehensive medication reviews, drug interaction screenings,
                  and detailed patient education to ensure safe and effective
                  medication management at home.
                </p>
                <p>
                  We're particularly proud of our free prescription delivery
                  service throughout Browns Mills and surrounding areas,
                  recognizing that many of our patients may have mobility
                  limitations or transportation challenges following medical
                  procedures. Our commitment extends beyond medication
                  dispensing to include ongoing clinical support, insurance
                  coordination, and collaboration with your entire healthcare
                  team to optimize your recovery and long-term health outcomes.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Clinical Care Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clinicalFeatures.map((feature, index) => (
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

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Clinical Pharmacy Services
                </h2>
                <div className="space-y-3">
                  {clinicalServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span className="text-slate-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Additional Services
                </h2>
                <div className="space-y-3">
                  {additionalServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Truck className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-slate-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-purple-600 to-teal-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Professional Clinical Care
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Experience hospital-quality pharmaceutical care for your
              outpatient needs. Free delivery available in Browns Mills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleCall}
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (609) 726-5800
              </Button>
              <Button
                onClick={() => (window.location.href = "/services/transfers")}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Pill className="mr-2 h-5 w-5" />
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
