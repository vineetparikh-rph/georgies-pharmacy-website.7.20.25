import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Navigation as NavIcon, Car, Home, Clock3, Star } from 'lucide-react';

export default function ParlinPharmacy() {
  const communityServices = [
    'Prescription Dispensing',
    'Medication Counseling',
    'Immunizations & Flu Shots',
    'Blood Pressure Checks',
    'Diabetes Supplies',
    'OTC Consultations',
    'Prescription Transfers',
    'Medication Synchronization',
    'Compounding Services',
    'Medicare Part D Consultation',
  ];

  const convenientFeatures = [
    {
      icon: <Car className="h-6 w-6 text-primary" />,
      title: 'Drive-Through Service',
      description: 'Quick and convenient prescription pickup without leaving your car',
    },
    {
      icon: <Home className="h-6 w-6 text-primary" />,
      title: 'Local Community Focus',
      description: 'Serving Parlin and surrounding communities with personalized neighborhood care',
    },
    {
      icon: <Clock3 className="h-6 w-6 text-primary" />,
      title: 'Extended Hours',
      description: 'Open until 7 PM weekdays and Saturday hours for your convenience',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">
              Community Pharmacy
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Georgies <span className="text-primary">Parlin</span> Pharmacy
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Your convenient neighborhood pharmacy in Parlin, offering comprehensive pharmaceutical
              services with the personal touch you deserve. We're committed to serving our local
              community with excellence.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-slate-700">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span>499 Ernston Road, Parlin, NJ 08859-1406</span>
              </div>
              <div className="flex items-center text-slate-700">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span>732-952-3022</span>
              </div>
              <div className="flex items-center text-slate-700">
                <Clock className="h-5 w-5 text-primary mr-3" />
                <span>Mon-Fri: 9:00 AM - 7:00 PM | Sat: 9:00 AM - 5:00 PM | Sun: Closed</span>
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
                    `https://maps.google.com/?q=499+Ernston+Road,+Parlin,+NJ+08859`,
                    '_blank'
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
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Georgies Parlin Pharmacy Exterior"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center text-yellow-600">
                <Star className="h-5 w-5 fill-current mr-1" />
                <span className="font-semibold">4.8/5</span>
              </div>
              <p className="text-sm text-slate-600">Community Rating</p>
            </div>
          </div>
        </div>

        {/* Convenient Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Convenient Community Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {convenientFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
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
            Full-Service Community Pharmacy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {communityServices.map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-slate-700 font-medium">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Location Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Why Choose Our Parlin Location?</CardTitle>
                <CardDescription>
                  Convenient location with easy access and comprehensive services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Convenient Location</h4>
                    <p className="text-slate-600">
                      Easily accessible on Ernston Road with ample parking
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Drive-Through</h4>
                    <p className="text-slate-600">
                      Quick prescription pickup without leaving your vehicle
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Extended Hours</h4>
                    <p className="text-slate-600">
                      Open until 7 PM on weekdays for working families
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Local Knowledge</h4>
                    <p className="text-slate-600">
                      Familiar with local doctors and healthcare providers
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Community Connections</CardTitle>
                <CardDescription>
                  Proud to serve Parlin, Sayreville, and surrounding areas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Local Partnerships</h4>
                    <p className="text-slate-600">
                      Working relationships with area physicians and specialists
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Community Events</h4>
                    <p className="text-slate-600">
                      Participating in local health fairs and community activities
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Senior Services</h4>
                    <p className="text-slate-600">
                      Special programs for Medicare patients and seniors
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Family Care</h4>
                    <p className="text-slate-600">
                      Comprehensive medication management for all ages
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Services */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Serving These Communities</CardTitle>
              <CardDescription className="text-center text-lg">
                Conveniently located to serve multiple neighborhoods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Parlin</h4>
                  <p className="text-slate-600 text-sm">
                    Our home community with convenient local access
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Sayreville</h4>
                  <p className="text-slate-600 text-sm">
                    Just minutes away with easy Route 9 access
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Old Bridge</h4>
                  <p className="text-slate-600 text-sm">
                    Serving the Old Bridge community with quality care
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">South Amboy</h4>
                  <p className="text-slate-600 text-sm">
                    Close proximity for South Amboy residents
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Perth Amboy</h4>
                  <p className="text-slate-600 text-sm">
                    Accessible location for Perth Amboy patients
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">East Brunswick</h4>
                  <p className="text-slate-600 text-sm">
                    Convenient for East Brunswick area residents
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary to-red-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Your Neighborhood Pharmacy Partner</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Experience the convenience and personal service that makes Georgies Parlin Pharmacy your
            community healthcare partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call 732-952-3022
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Visit Our Drive-Through
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
