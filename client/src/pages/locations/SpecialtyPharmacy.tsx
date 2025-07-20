import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Clock,
  Navigation as NavIcon,
  Microscope,
  Shield,
  Zap,
  Star,
} from "lucide-react";

export default function SpecialtyPharmacy() {
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
    "Hemophilia Factor Products",
  ];

  const specialFeatures = [
    {
      icon: <Microscope className="h-6 w-6 text-primary" />,
      title: "Specialized Expertise",
      description:
        "Our pharmacists have advanced training in complex specialty medications and therapies",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Insurance Navigation",
      description:
        "Dedicated insurance specialists help with prior authorizations and coverage issues",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Rapid Processing",
      description:
        "Expedited handling of time-sensitive specialty medications with priority service",
    },
  ];

  const supportServices = [
    {
      title: "Patient Education",
      description:
        "Comprehensive medication counseling and administration training",
    },
    {
      title: "Side Effect Management",
      description:
        "Proactive monitoring and management of medication side effects",
    },
    {
      title: "Adherence Support",
      description: "Customized programs to help ensure treatment compliance",
    },
    {
      title: "Financial Assistance",
      description: "Help accessing patient assistance programs and copay cards",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Specialty Care
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Georgies <span className="text-primary">Specialty</span> Pharmacy
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Advanced pharmaceutical care for complex conditions. Our specialty
              pharmacy team provides expert support for patients requiring
              specialized medications and comprehensive disease management.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-slate-700">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span>521 N Wood Avenue, Linden, NJ 07036-4146</span>
              </div>
              <div className="flex items-center text-slate-700">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span>908-925-4566</span>
              </div>
              <div className="flex items-center text-slate-700">
                <Clock className="h-5 w-5 text-primary mr-3" />
                <span>Mon-Fri: 9:30 AM - 6:00 PM | Sat-Sun: Closed</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Specialist
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open(
                    `https://maps.google.com/?q=521+N+Wood+Avenue,+Linden,+NJ+07036`,
                    "_blank",
                  )
                }
              >
                <NavIcon className="mr-2 h-5 w-5" />
                Get Directions
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Georgies Specialty Pharmacy Clean Room"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center text-yellow-600">
                <Star className="h-5 w-5 fill-current mr-1" />
                <span className="font-semibold">5.0/5</span>
              </div>
              <p className="text-sm text-slate-600">Specialist Rating</p>
            </div>
          </div>
        </div>

        {/* Special Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Specialized Care Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Specialty Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Specialty Medications We Handle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specialtyServices.map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-slate-700 font-medium">
                      {service}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Support Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Comprehensive Patient Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Conditions We Treat */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Conditions We Specialize In
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Expert pharmaceutical care for complex medical conditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Oncology
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Cancer treatment medications and supportive care
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Autoimmune
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Rheumatoid arthritis, lupus, and other autoimmune conditions
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Neurological
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Multiple sclerosis, epilepsy, and neurological disorders
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Infectious Disease
                  </h4>
                  <p className="text-slate-600 text-sm">
                    HIV/AIDS, hepatitis, and complex infections
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Rare Diseases
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Orphan drugs and ultra-rare condition therapies
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Transplant
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Immunosuppressants and post-transplant care
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary to-red-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Advanced Care for Complex Conditions
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Our specialty pharmacy team is ready to provide expert support for
            your complex medication needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call 908-925-4566
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Specialty Consultation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
