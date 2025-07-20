import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, Calendar, Users, Heart, Shield } from "lucide-react";

export default function Consultations() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Pharmacy Consultations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert medication guidance from our licensed pharmacists. 
              We provide personalized consultations to help you understand your medications, 
              manage side effects, and optimize your treatment plan.
            </p>
          </div>

          {/* Consultation Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Medication Review</CardTitle>
                <CardDescription>
                  Comprehensive review of all your medications to identify interactions and optimize therapy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Drug interaction screening</li>
                  <li>• Dosage optimization</li>
                  <li>• Cost-saving alternatives</li>
                  <li>• Side effect management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Immunization Counseling</CardTitle>
                <CardDescription>
                  Expert guidance on vaccines and immunizations for all ages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Vaccine scheduling</li>
                  <li>• Travel immunizations</li>
                  <li>• Adult vaccinations</li>
                  <li>• Pediatric vaccines</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Chronic Care Management</CardTitle>
                <CardDescription>
                  Specialized support for managing chronic conditions through medication therapy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Diabetes management</li>
                  <li>• Blood pressure monitoring</li>
                  <li>• Cholesterol management</li>
                  <li>• Medication adherence</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">How Our Consultations Work</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-2">Schedule</h3>
                <p className="text-gray-600 text-sm">Book your consultation online or by phone</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-2">Prepare</h3>
                <p className="text-gray-600 text-sm">Bring all medications and health information</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-2">Consult</h3>
                <p className="text-gray-600 text-sm">Meet with our licensed pharmacist</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold mb-2">Follow-up</h3>
                <p className="text-gray-600 text-sm">Receive written recommendations and ongoing support</p>
              </div>
            </div>
          </section>

          {/* Consultation Hours */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Consultation Hours</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    Walk-in Consultations
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                    <Badge variant="secondary" className="mt-2">No appointment needed</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    Scheduled Consultations
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: 10:00 AM - 2:00 PM</p>
                    <Badge variant="secondary" className="mt-2">Book in advance</Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Consultation Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle>Basic Consultation</CardTitle>
                  <div className="text-3xl font-bold text-primary">$25</div>
                  <CardDescription>15-minute consultation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Medication questions</li>
                    <li>• Side effect discussion</li>
                    <li>• Basic drug interactions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader className="text-center">
                  <Badge className="mb-2">Most Popular</Badge>
                  <CardTitle>Comprehensive Review</CardTitle>
                  <div className="text-3xl font-bold text-primary">$50</div>
                  <CardDescription>30-minute consultation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Complete medication review</li>
                    <li>• Interaction screening</li>
                    <li>• Cost optimization</li>
                    <li>• Written recommendations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle>Chronic Care Plan</CardTitle>
                  <div className="text-3xl font-bold text-primary">$75</div>
                  <CardDescription>45-minute consultation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Comprehensive assessment</li>
                    <li>• Personalized care plan</li>
                    <li>• Monitoring schedule</li>
                    <li>• Follow-up included</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-primary to-red-900 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Consultation?</h2>
            <p className="text-xl text-red-100 mb-8">
              Our licensed pharmacists are here to help you get the most from your medications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open('https://3156177.winrxrefill.com/Secure', '_blank')}
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-red-50 px-8 py-4 text-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Online
              </Button>
              <Button
                onClick={() => window.open('tel:732-499-7979', '_self')}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call to Book
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}