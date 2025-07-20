import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Printer, Clock, Users, Stethoscope, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function GeorgiesSpecialty() {
  React.useEffect(() => {
    document.title = "Georgies Specialty Pharmacy - Linden, NJ | Specialized Medication Services";
  }, []);

  const handleDirections = () => {
    const address = encodeURIComponent("1201 W St Georges Ave, Linden, NJ 07036");
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, "_blank");
  };

  const handleCall = () => {
    window.open("tel:+19084861057", "_self");
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
            Georgies <span className="text-primary">Specialty Pharmacy</span>
          </h1>
          <p className="text-xl text-slate-600 mb-6">Advanced specialty medication services</p>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Specialized in complex therapies, rare diseases, and high-cost medications. 
            Expert care for specialty conditions with comprehensive patient support.
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
                  <p className="text-slate-600">(908) 486-1057</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Printer className="text-primary h-5 w-5 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Fax</p>
                  <p className="text-slate-600">(908) 486-1058</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-primary h-5 w-5 mt-1 font-bold text-sm">#</div>
                <div>
                  <p className="font-semibold text-slate-900">NCPDP</p>
                  <p className="text-slate-600">3155973</p>
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
                <span className="text-slate-600">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Tuesday</span>
                <span className="text-slate-600">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Wednesday</span>
                <span className="text-slate-600">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Thursday</span>
                <span className="text-slate-600">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Friday</span>
                <span className="text-slate-600">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Saturday</span>
                <span className="text-slate-600">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-900">Sunday</span>
                <span className="text-slate-600">Closed</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <Clock className="text-purple-600 h-5 w-5" />
                <p className="text-purple-800 font-medium">Specialty Consultations</p>
              </div>
              <p className="text-purple-700 text-sm mt-1">Extended consultation hours by appointment</p>
            </div>
          </div>
        </div>

        {/* Specialty Services */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Specialty Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">🧬</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Oncology</h3>
                <p className="text-slate-600 text-sm">Cancer treatment medications</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">🫀</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Cardiology</h3>
                <p className="text-slate-600 text-sm">Heart condition treatments</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">🧠</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Neurology</h3>
                <p className="text-slate-600 text-sm">Neurological disorder medications</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-sm">🦴</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Rheumatology</h3>
                <p className="text-slate-600 text-sm">Arthritis and autoimmune treatments</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-sm">💉</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Biologics</h3>
                <p className="text-slate-600 text-sm">Complex biologic medications</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-bold text-sm">🩺</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Rare Diseases</h3>
                <p className="text-slate-600 text-sm">Orphan drug therapies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Support Services */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Patient Support Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <p className="text-slate-700">Insurance authorization assistance</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <p className="text-slate-700">Prior authorization support</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <p className="text-slate-700">Financial assistance programs</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <p className="text-slate-700">24/7 clinical support</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <p className="text-slate-700">Cold chain shipping</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <p className="text-slate-700">Adherence monitoring</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Need Specialty Care?</h2>
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
              onClick={handleCall}
              variant="outline"
              className="border-secondary text-secondary hover:bg-green-50 px-8 py-3"
            >
              Consult Pharmacist
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}