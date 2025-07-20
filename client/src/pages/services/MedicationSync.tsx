import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Pill, CheckCircle, Users, Phone, ArrowRight } from "lucide-react";

export default function MedicationSync() {
  const benefits = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Single Pickup Date",
      description: "All your medications ready on the same convenient day each month"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Time Saving",
      description: "Reduce pharmacy visits from multiple trips to just one per month"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Better Adherence",
      description: "Never miss doses with organized, synchronized refill schedules"
    },
    {
      icon: <Pill className="h-8 w-8 text-primary" />,
      title: "Medication Management",
      description: "Simplified tracking and management of multiple prescriptions"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Consultation",
      description: "Meet with our pharmacist to review all your current medications"
    },
    {
      step: "2",
      title: "Synchronization",
      description: "We align all your prescription refill dates to a single convenient day"
    },
    {
      step: "3",
      title: "Coordination",
      description: "Work with your doctors to adjust prescription quantities as needed"
    },
    {
      step: "4",
      title: "Monthly Pickup",
      description: "Pick up all medications on your designated sync date each month"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Medication Management
          </Badge>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Medication <span className="text-primary">Synchronization</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Simplify your life with our medication synchronization service. Get all your prescriptions ready on the same day each month for ultimate convenience.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Phone className="mr-2 h-5 w-5" />
            Enroll Today
          </Button>
        </div>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Medication Sync?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our medication synchronization program is designed to make managing multiple medications easier and more convenient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Getting started with medication synchronization is simple and straightforward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl text-center">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-center">{step.description}</p>
                  </CardContent>
                </Card>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-primary/5 to-red-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Who Can Benefit?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Perfect for patients who:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      Take 3 or more maintenance medications
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      Want to reduce pharmacy visits
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      Struggle with medication adherence
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      Have chronic conditions requiring ongoing treatment
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Requirements:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      Stable medication regimen
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      Insurance coverage for 90-day supplies
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      Physician approval for quantity adjustments
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      Commitment to monthly pickup schedule
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary to-red-600 rounded-2xl p-12 text-white">
          <Users className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Medication Management?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who have streamlined their medication routine with our synchronization service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call to Enroll
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-red-400/30">
            <h3 className="text-lg font-semibold mb-4">Available at All Georgies Pharmacy Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="font-medium">Family Pharmacy</p>
                <p className="text-red-100">Linden • 908-925-4567</p>
              </div>
              <div>
                <p className="font-medium">Specialty Pharmacy</p>
                <p className="text-red-100">Linden • 908-925-4566</p>
              </div>
              <div>
                <p className="font-medium">Parlin Pharmacy</p>
                <p className="text-red-100">Parlin • 732-952-3022</p>
              </div>
              <div>
                <p className="font-medium">Outpatient Pharmacy</p>
                <p className="text-red-100">Browns Mills • 609-726-5800</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}