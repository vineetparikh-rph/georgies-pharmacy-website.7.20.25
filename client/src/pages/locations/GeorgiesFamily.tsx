import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Printer, Clock, Users, Stethoscope, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function GeorgiesFamily() {
  React.useEffect(() => {
    document.title = "Georgies Family Pharmacy - Linden, NJ | Full Service Community Pharmacy";
  }, []);

  const handleDirections = () => {
    const address = encodeURIComponent("1201 W St Georges Ave, Linden, NJ 07036");
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, "_blank");
  };

  const handleCall = () => {
    window.open("tel:+19084862273", "_self");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <div className="mb-6">
          <Button 
            onClick={() => window.history.back()}
            variant="ghost"
            className="text-primary hover:bg-red-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Locations
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Georgies <span className="text-primary">Family Pharmacy</span>
          </h1>
          <p className="text-xl text-slate-600 mb-6">Your neighborhood pharmacy in Linden, NJ</p>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Serving the Linden community since 2011 with personalized care and modern convenience. 
            Your health and wellness are our top priorities.
          </p>
        </div>

        {/* Contact & Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Location & Contact</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary h-5 w-5 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Address</p>
                  <p className="text-slate-600">1201 W St Georges Ave<br />Linden, NJ 07036</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="text-primary h-5 w-5 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <p className="text-slate-600">(908) 486-2273</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Printer className="text-primary h-5 w-5 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Fax</p>
                  <p className="text-slate-600">(908) 486-2275</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-primary h-5 w-5 mt-1 font-bold text-sm">#</div>
                <div>
                  <p className="font-semibold text-slate-900">NCPDP</p>
                  <p className="text-slate-600">3198098</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <Button onClick={handleCall} className="flex-1 bg-primary text-white hover:bg-red-700">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button onClick={handleDirections} variant="outline" className="flex-1 border-primary text-primary hover:bg-red-50">
                <MapPin className="h-4 w-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Store Hours</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Monday</span>
                <span className="text-slate-600">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Tuesday</span>
                <span className="text-slate-600">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Wednesday</span>
                <span className="text-slate-600">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Thursday</span>
                <span className="text-slate-600">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Friday</span>
                <span className="text-slate-600">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Saturday</span>
                <span className="text-slate-600">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Sunday</span>
                <span className="text-slate-600">10:00 AM - 3:00 PM</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <Clock className="text-green-600 h-5 w-5" />
                <p className="text-green-800 font-medium">Extended Hours Available</p>
              </div>
              <p className="text-green-700 text-sm mt-1">Call for holiday hours and special appointments</p>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Services Offered</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">Rx</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Prescription Services</h3>
                <p className="text-slate-600 text-sm">New prescriptions, refills, transfers</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-secondary font-bold text-sm">💉</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Vaccinations</h3>
                <p className="text-slate-600 text-sm">Flu, COVID, travel vaccines</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center">
                <span className="text-warning font-bold text-sm">🩺</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Health Screenings</h3>
                <p className="text-slate-600 text-sm">Blood pressure, diabetes monitoring</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">🚚</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Delivery Service</h3>
                <p className="text-slate-600 text-sm">Free local delivery available</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">💊</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">OTC Products</h3>
                <p className="text-slate-600 text-sm">Wide selection of health products</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">👥</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Consultation</h3>
                <p className="text-slate-600 text-sm">Medication therapy management</p>
              </div>
            </div>
          </div>
        </div>

        {/* Staff Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                VP
              </div>
              <h3 className="font-semibold text-slate-900 text-center mb-1">Dr. Vineet Parikh</h3>
              <p className="text-primary text-center text-sm">Pharmacist in Charge</p>
              <p className="text-slate-600 text-sm text-center mt-2">Licensed PharmD with 15+ years experience</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                PT
              </div>
              <h3 className="font-semibold text-slate-900 text-center mb-1">Pharmacy Team</h3>
              <p className="text-secondary text-center text-sm">Certified Technicians</p>
              <p className="text-slate-600 text-sm text-center mt-2">Experienced pharmacy technicians</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                CS
              </div>
              <h3 className="font-semibold text-slate-900 text-center mb-1">Customer Service</h3>
              <p className="text-warning text-center text-sm">Support Staff</p>
              <p className="text-slate-600 text-sm text-center mt-2">Friendly and knowledgeable staff</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open("https://www.mygnp.com/pharmacies/georgies-outpatient-pharmacy-browns-mills-nj-08015/refill-request", "_blank")}
              className="bg-primary text-white hover:bg-red-700 px-8 py-3"
            >
              Request Refill
            </Button>
            <Button 
              onClick={() => window.open("https://www.mygnp.com/pharmacies/georgies-outpatient-pharmacy-browns-mills-nj-08015/transfer-request/", "_blank")}
              variant="outline"
              className="border-primary text-primary hover:bg-red-50 px-8 py-3"
            >
              Transfer Prescription
            </Button>
            <Button 
              onClick={() => window.location.href = '/features'}
              variant="outline"
              className="border-secondary text-secondary hover:bg-green-50 px-8 py-3"
            >
              Schedule Vaccine
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}