import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Navigation as NavIcon, Building2, Stethoscope, Heart, Star } from "lucide-react";

export default function OutpatientPharmacy() {
  const clinicalServices = [
    "Post-Surgical Medications",
    "Discharge Prescriptions",
    "Pain Management",
    "Antibiotic Therapies",
    "Wound Care Supplies",
    "Medical Equipment",
    "Injectable Medications",
    "IV Therapies",
    "Specialized Compounds",
    "Clinical Consultations"
  ];

  const clinicalFeatures = [
    {
      icon: <Building2 className="h-6 w-6 text-primary" />,
      title: "Hospital-Grade Care",
      description: "Clinical pharmacy services meeting the highest medical standards and protocols"
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-primary" />,
      title: "Medical Coordination",
      description: "Seamless coordination with healthcare providers and medical facilities"
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Patient-Centered Care",
      description: "Comprehensive support for outpatient treatment and recovery needs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
              Clinical Pharmacy
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Georgies <span className="text-primary">Outpatient</span> Pharmacy
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Professional clinical pharmacy services in Browns Mills, specializing in outpatient care, 
              post-surgical medications, and comprehensive pharmaceutical support for medical treatments.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-slate-700">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span>6 Earlin Drive, Suite 130, Browns Mills, NJ 08015-1768</span>
              </div>
              <div className="flex items-center text-slate-700">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span>609-726-5800</span>
              </div>
              <div className="flex items-center text-slate-700">
                <Clock className="h-5 w-5 text-primary mr-3" />
                <span>Mon-Fri: 9:30 AM - 6:00 PM | Sat: 10:00 AM - 2:00 PM | Sun: Closed</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-5 w-5" />
                Call Clinical Team
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open(`https://maps.google.com/?q=6+Earlin+Drive,+Suite+130,+Browns+Mills,+NJ+08015`, '_blank')}
              >
                <NavIcon className="mr-2 h-5 w-5" />
                Get Directions
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Georgies Outpatient Pharmacy Clinical Setting"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center text-yellow-600">
                <Star className="h-5 w-5 fill-current mr-1" />
                <span className="font-semibold">4.9/5</span>
              </div>
              <p className="text-sm text-slate-600">Clinical Rating</p>
            </div>
          </div>
        </div>

        {/* Clinical Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Clinical Excellence Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clinicalFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Clinical Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Specialized Clinical Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clinicalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Medical Partnerships */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Healthcare Partnerships</CardTitle>
              <CardDescription className="text-center text-lg">
                Collaborating with medical facilities and healthcare providers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Medical Facilities We Serve</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Outpatient surgery centers</li>
                    <li>• Specialty medical clinics</li>
                    <li>• Rehabilitation facilities</li>
                    <li>• Urgent care centers</li>
                    <li>• Physician office practices</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Clinical Specialties</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Post-operative care</li>
                    <li>• Pain management protocols</li>
                    <li>• Infection control therapies</li>
                    <li>• Chronic disease management</li>
                    <li>• Medication reconciliation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Service Areas */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Professional Services</CardTitle>
                <CardDescription>
                  Comprehensive pharmaceutical care for outpatient medical needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Clinical Consultation</h4>
                    <p className="text-slate-600">Expert medication reviews and therapy optimization</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Discharge Planning</h4>
                    <p className="text-slate-600">Seamless transition from hospital to home care</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Medical Equipment</h4>
                    <p className="text-slate-600">Durable medical equipment and supplies</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Insurance Coordination</h4>
                    <p className="text-slate-600">Pre-authorization and coverage verification</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Burlington County Service</CardTitle>
                <CardDescription>
                  Serving Browns Mills and surrounding Burlington County communities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Browns Mills</h4>
                    <p className="text-slate-600">Our home base providing comprehensive outpatient services</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Fort Dix Area</h4>
                    <p className="text-slate-600">Serving military families and base personnel</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Pemberton Township</h4>
                    <p className="text-slate-600">Extended service to Pemberton area residents</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">McGuire AFB</h4>
                    <p className="text-slate-600">Supporting Air Force personnel and families</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary to-red-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Professional Clinical Pharmacy Care</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Experience the highest standards of pharmaceutical care with our clinical pharmacy team in Browns Mills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call 609-726-5800
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Clinical Consultation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}