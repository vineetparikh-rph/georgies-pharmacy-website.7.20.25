import React from "react";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Printer,
  Clock,
  Users,
  Stethoscope,
  ArrowLeft,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function GeorgiesParlin() {
  React.useEffect(() => {
    document.title =
      "Georgies Parlin Pharmacy - Parlin, NJ | Community Healthcare Services";
  }, []);

  const handleDirections = () => {
    const address = encodeURIComponent("3242 Washington Rd, Parlin, NJ 08859");
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${address}`,
      "_blank",
    );
  };

  const handleCall = () => {
    window.open("tel:+17327212500", "_self");
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
            Georgies <span className="text-primary">Parlin Pharmacy</span>
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            Serving the Parlin and Sayreville communities
          </p>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Your trusted neighborhood pharmacy providing personalized care and
            comprehensive health services to the Parlin community since 2011.
          </p>
        </div>

        {/* Contact & Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Location & Contact
            </h2>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary h-5 w-5 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Address</p>
                  <p className="text-slate-600">
                    3242 Washington Rd
                    <br />
                    Parlin, NJ 08859
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="text-primary h-5 w-5 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <p className="text-slate-600">(732) 721-2500</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Printer className="text-primary h-5 w-5 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Fax</p>
                  <p className="text-slate-600">(732) 721-2501</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="text-primary h-5 w-5 mt-1 font-bold text-sm">
                  #
                </div>
                <div>
                  <p className="font-semibold text-slate-900">NCPDP</p>
                  <p className="text-slate-600">3151482</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <Button
                onClick={handleCall}
                className="flex-1 bg-primary text-white hover:bg-red-700"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button
                onClick={handleDirections}
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-red-50"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Store Hours
            </h2>

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

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <Clock className="text-blue-600 h-5 w-5" />
                <p className="text-blue-800 font-medium">Convenient Hours</p>
              </div>
              <p className="text-blue-700 text-sm mt-1">
                Open 7 days a week for your convenience
              </p>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Services Offered
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">Rx</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  Prescription Services
                </h3>
                <p className="text-slate-600 text-sm">
                  Full prescription dispensing services
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="text-secondary font-bold text-sm">💉</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Immunizations</h3>
                <p className="text-slate-600 text-sm">
                  Complete vaccination services
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center">
                <span className="text-warning font-bold text-sm">🩺</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Health Testing</h3>
                <p className="text-slate-600 text-sm">
                  Blood glucose, cholesterol screening
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">📦</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  MedPack Service
                </h3>
                <p className="text-slate-600 text-sm">
                  Medication synchronization and packaging
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">🚗</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Drive-Thru</h3>
                <p className="text-slate-600 text-sm">
                  Convenient drive-thru service
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">💊</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">OTC & Vitamins</h3>
                <p className="text-slate-600 text-sm">
                  Wide selection of health products
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Focus */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Community Focused Care
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">
                Local Partnerships
              </h3>
              <div className="space-y-2">
                <p className="text-slate-600 text-sm">
                  • Sayreville War Memorial High School health programs
                </p>
                <p className="text-slate-600 text-sm">
                  • Local senior centers medication management
                </p>
                <p className="text-slate-600 text-sm">
                  • Community health screening events
                </p>
                <p className="text-slate-600 text-sm">
                  • School district vaccination programs
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">
                Special Programs
              </h3>
              <div className="space-y-2">
                <p className="text-slate-600 text-sm">
                  • Medicare Part D consultation
                </p>
                <p className="text-slate-600 text-sm">
                  • Diabetes management program
                </p>
                <p className="text-slate-600 text-sm">
                  • Blood pressure monitoring
                </p>
                <p className="text-slate-600 text-sm">
                  • Medication therapy management
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Visit Us Today
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() =>
                window.open(
                  "https://www.mygnp.com/pharmacies/georgies-outpatient-pharmacy-browns-mills-nj-08015/refill-request",
                  "_blank",
                )
              }
              className="bg-primary text-white hover:bg-red-700 px-8 py-3"
            >
              Request Refill
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://www.mygnp.com/pharmacies/georgies-outpatient-pharmacy-browns-mills-nj-08015/transfer-request/",
                  "_blank",
                )
              }
              variant="outline"
              className="border-primary text-primary hover:bg-red-50 px-8 py-3"
            >
              Transfer Prescription
            </Button>
            <Button
              onClick={() => (window.location.href = "/features")}
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
