import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Printer, Clock, Users, Stethoscope, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function GeorgiesOutpatient() {
  React.useEffect(() => {
    document.title = "Georgies Outpatient Pharmacy - Browns Mills, NJ | Comprehensive Healthcare Services";
  }, []);

  const handleDirections = () => {
    const address = encodeURIComponent("530 Lakehurst Rd, Browns Mills, NJ 08015");
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, "_blank");
  };

  const handleCall = () => {
    window.open("tel:+16097265800", "_self");
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
            Georgies <span className="text-primary">Outpatient Pharmacy</span>
          </h1>
          <p className="text-xl text-slate-600 mb-6">Comprehensive outpatient services in Browns Mills</p>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Our flagship location offering the full spectrum of pharmacy services including specialty medications, 
            clinical services, and comprehensive patient care programs.
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
                  <p className="text-slate-600">530 Lakehurst Rd<br />Browns Mills, NJ 08015</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="text-primary h-5 w-5 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <p className="text-slate-600">(609) 726-5800</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Printer className="text-primary h-5 w-5 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Fax</p>
                  <p className="text-slate-600">(609) 726-5801</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-primary h-5 w-5 mt-1 font-bold text-sm">#</div>
                <div>
                  <p className="font-semibold text-slate-900">NCPDP</p>
                  <p className="text-slate-600">3156177</p>
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
                <span className="text-slate-600">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Tuesday</span>
                <span className="text-slate-600">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Wednesday</span>
                <span className="text-slate-600">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Thursday</span>
                <span className="text-slate-600">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Friday</span>
                <span className="text-slate-600">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Saturday</span>
                <span className="text-slate-600">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Sunday</span>
                <span className="text-slate-600">10:00 AM - 4:00 PM</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <Clock className="text-green-600 h-5 w-5" />
                <p className="text-green-800 font-medium">Extended Hours</p>
              </div>
              <p className="text-green-700 text-sm mt-1">Longest hours in the area - open 7 days a week</p>
            </div>
          </div>
        </div>

        {/* Comprehensive Services */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Comprehensive Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">Rx</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Full Pharmacy Services</h3>
                <p className="text-slate-600 text-sm">Complete prescription dispensing and management</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-secondary font-bold text-sm">💉</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Clinical Services</h3>
                <p className="text-slate-600 text-sm">Vaccinations, testing, health screenings</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">🧬</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Specialty Pharmacy</h3>
                <p className="text-slate-600 text-sm">Complex therapies and specialty medications</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">📦</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">MedPack Program</h3>
                <p className="text-slate-600 text-sm">Comprehensive medication synchronization</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-sm">🚚</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Delivery Services</h3>
                <p className="text-slate-600 text-sm">Local and specialty medication delivery</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">💊</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">OTC & Wellness</h3>
                <p className="text-slate-600 text-sm">Extensive health and wellness products</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Excellence */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Clinical Excellence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                VP
              </div>
              <h3 className="font-semibold text-slate-900 text-center mb-1">Dr. Vineet Parikh, PharmD</h3>
              <p className="text-primary text-center text-sm">Owner & Clinical Director</p>
              <p className="text-slate-600 text-sm text-center mt-2">15+ years clinical pharmacy experience</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                CT
              </div>
              <h3 className="font-semibold text-slate-900 text-center mb-1">Clinical Team</h3>
              <p className="text-secondary text-center text-sm">Certified Specialists</p>
              <p className="text-slate-600 text-sm text-center mt-2">Specialized in complex therapies</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                PS
              </div>
              <h3 className="font-semibold text-slate-900 text-center mb-1">Patient Support</h3>
              <p className="text-warning text-center text-sm">Care Coordinators</p>
              <p className="text-slate-600 text-sm text-center mt-2">Dedicated patient advocacy</p>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Awards & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">J.D. Power Recognition</h3>
              <div className="space-y-2">
                <p className="text-slate-600 text-sm">• Ranked "Highest in Customer Satisfaction" 8 years in a row</p>
                <p className="text-slate-600 text-sm">• 13 out of last 15 years recognition</p>
                <p className="text-slate-600 text-sm">• Excellence in patient care and service</p>
                <p className="text-slate-600 text-sm">• Outstanding pharmacy operations</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Community Impact</h3>
              <div className="space-y-2">
                <p className="text-slate-600 text-sm">• 13+ years serving Browns Mills community</p>
                <p className="text-slate-600 text-sm">• Partnership with local healthcare providers</p>
                <p className="text-slate-600 text-sm">• Military family support programs</p>
                <p className="text-slate-600 text-sm">• 5-star Facebook and Google Reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Experience Excellence in Pharmacy Care</h2>
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