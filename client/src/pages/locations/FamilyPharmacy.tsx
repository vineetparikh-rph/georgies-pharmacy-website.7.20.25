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
  Users,
  Heart,
  Shield,
  Star,
} from "lucide-react";

export default function FamilyPharmacy() {
  const services = [
    "Prescription Dispensing",
    "Medication Counseling",
    "Immunizations & Vaccines",
    "Medication Synchronization",
    "Blood Pressure Monitoring",
    "Diabetes Management",
    "Cholesterol Screening",
    "Flu Shots & Travel Vaccines",
    "Prescription Transfers",
    "Medication Therapy Management",
  ];

  const specialFeatures = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Family-Focused Care",
      description:
        "Comprehensive medication management for the entire family, from children to seniors",
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Personal Service",
      description:
        "Get to know your pharmacist personally - we remember your name and your needs",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Insurance Expertise",
      description:
        "We work with all major insurance plans to maximize your savings",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Main Location
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Georgies <span className="text-primary">Family</span> Pharmacy
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Our flagship location in Linden, serving families with
              comprehensive pharmaceutical care since our founding. We're your
              neighborhood pharmacy that truly cares about your health and
              wellbeing.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-slate-700">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span>332 W. St. Georges Avenue, Linden, NJ 07036-5638</span>
              </div>
              <div className="flex items-center text-slate-700">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span>908-925-4567</span>
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
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open(
                    `https://maps.google.com/?q=332+W.+St.+Georges+Avenue,+Linden,+NJ+07036`,
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
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Georgies Family Pharmacy Interior"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center text-yellow-600">
                <Star className="h-5 w-5 fill-current mr-1" />
                <span className="font-semibold">4.9/5</span>
              </div>
              <p className="text-sm text-slate-600">Patient Rating</p>
            </div>
          </div>
        </div>

        {/* Special Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            What Makes Us Special
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

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Complete Pharmacy Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-slate-700 font-medium">
                      {service}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Location Details */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Visit Our Location</CardTitle>
                <CardDescription>
                  Conveniently located on St. Georges Avenue with easy parking
                  and accessibility.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Parking
                    </h4>
                    <p className="text-slate-600">
                      Free parking available in front of the store and adjacent
                      lot
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Accessibility
                    </h4>
                    <p className="text-slate-600">
                      Wheelchair accessible entrance and wide aisles throughout
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Public Transportation
                    </h4>
                    <p className="text-slate-600">
                      NJ Transit bus routes 112 and 113 stop nearby
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Commitment</CardTitle>
                <CardDescription>
                  Dedicated to providing exceptional pharmaceutical care to
                  Linden families.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Personal Attention
                    </h4>
                    <p className="text-slate-600">
                      Every patient receives individualized care and attention
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Community Focus
                    </h4>
                    <p className="text-slate-600">
                      Proudly serving the Linden community for years
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Quality Assurance
                    </h4>
                    <p className="text-slate-600">
                      State-of-the-art equipment and rigorous quality standards
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary to-red-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Experience Family-Centered Pharmacy Care
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied families who trust Georgies Family
            Pharmacy for all their medication needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call 908-925-4567
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Transfer Prescriptions
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
