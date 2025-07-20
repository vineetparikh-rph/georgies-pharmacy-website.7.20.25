import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Building2, Globe, Award, Users } from 'lucide-react';

export default function Partners() {
  // SEO: Update page title for partners page
  useEffect(() => {
    document.title = 'Our Partners | Georgies Pharmacy | Local & National Healthcare Partners';
  }, []);

  const nationalPartners = [
    {
      name: 'AmerisourceBergen',
      type: 'National Pharmaceutical Distributor',
      description:
        'Leading pharmaceutical sourcing and distribution services company providing medications and healthcare solutions.',
      category: 'Distribution',
      established: '1985',
      website: 'https://www.amerisourcebergen.com',
    },
    {
      name: 'McKesson Corporation',
      type: 'Healthcare Services Company',
      description:
        'Fortune 6 company providing pharmaceuticals and medical supplies to healthcare facilities nationwide.',
      category: 'Distribution',
      established: '1833',
      website: 'https://www.mckesson.com',
    },
    {
      name: 'Cardinal Health',
      type: 'Healthcare Services & Products',
      description:
        'Global, integrated healthcare services company providing customized solutions for hospitals, health systems, pharmacies.',
      category: 'Distribution',
      established: '1971',
      website: 'https://www.cardinalhealth.com',
    },
    {
      name: 'Express Scripts',
      type: 'Pharmacy Benefit Management',
      description:
        'Leading pharmacy benefit management organization providing prescription drug benefits.',
      category: 'PBM',
      established: '1986',
      website: 'https://www.express-scripts.com',
    },
    {
      name: 'Outcomes',
      type: 'Pharmacy Technology Solutions',
      description:
        'Leading provider of pharmacy management software and technology solutions for independent pharmacies.',
      category: 'Technology',
      established: '1999',
      website: 'https://www.outcomes.com',
    },
    {
      name: 'ComputerRx',
      type: 'Pharmacy Management System',
      description:
        'Comprehensive pharmacy management software providing dispensing, inventory, and patient management solutions.',
      category: 'Technology',
      established: '1982',
      website: 'https://www.computerrx.com',
    },
    {
      name: 'Microsoft',
      type: 'Cloud & Technology Solutions',
      description:
        'Enterprise cloud computing and technology solutions for healthcare data management and security.',
      category: 'Technology',
      established: '1975',
      website: 'https://www.microsoft.com',
    },
  ];

  const localPartners = [
    // Major NJ Hospital Systems
    {
      name: 'Hackensack Meridian Health',
      type: 'Integrated Health Network',
      description:
        'Leading health network providing comprehensive medical services across New Jersey.',
      category: 'Health System',
      location: 'Multiple NJ Locations',
      services: 'Primary care, specialty services, urgent care',
    },
    {
      name: 'RWJBarnabas Health',
      type: 'Health System',
      description:
        "New Jersey's largest integrated healthcare delivery system serving communities statewide.",
      category: 'Health System',
      location: 'Multiple Locations, NJ',
      services: 'Academic medicine, specialty care, community hospitals',
    },
    {
      name: 'AtlantiCare',
      type: 'Health System',
      description:
        'Regional health system providing comprehensive care throughout southern New Jersey.',
      category: 'Health System',
      location: 'Southern NJ',
      services: 'Hospital care, primary care, specialty services',
    },
    {
      name: 'Cooper University Health Care',
      type: 'Academic Medical Center',
      description:
        'Academic health system with Level I trauma center and medical school affiliation.',
      category: 'Academic Medical',
      location: 'Camden, NJ',
      services: 'Trauma care, medical education, specialty services',
    },
    {
      name: "Saint Peter's Healthcare System",
      type: 'Healthcare Network',
      description: 'Faith-based healthcare system serving central New Jersey communities.',
      category: 'Health System',
      location: 'Central NJ',
      services: 'Hospital care, rehabilitation, long-term care',
    },
    {
      name: 'Virtua Health',
      type: 'Health System',
      description: 'Non-profit health system providing comprehensive care across South Jersey.',
      category: 'Health System',
      location: 'South Jersey',
      services: 'Hospital care, urgent care, specialty services',
    },
    {
      name: 'Valley Health System',
      type: 'Health Network',
      description: 'Regional health network serving northern New Jersey and New York areas.',
      category: 'Health System',
      location: 'Northern NJ',
      services: 'Hospital care, emergency services, rehabilitation',
    },

    // Major Hospitals
    {
      name: 'Trinitas Regional Medical Center',
      type: 'Regional Medical Center',
      description: 'Full-service medical center serving Union County and surrounding areas.',
      category: 'Hospital',
      location: 'Elizabeth, NJ',
      services: 'Emergency care, surgical services, specialty clinics',
    },
    {
      name: 'Robert Wood Johnson University Hospital',
      type: 'Academic Medical Center',
      description:
        'Leading academic medical center providing advanced healthcare services and medical education.',
      category: 'Hospital',
      location: 'New Brunswick, NJ',
      services: 'Trauma center, cancer care, cardiovascular services',
    },
    {
      name: 'Morristown Medical Center',
      type: 'Academic Hospital',
      description: 'Regional academic medical center with advanced specialty services.',
      category: 'Hospital',
      location: 'Morristown, NJ',
      services: 'Neuroscience, oncology, cardiovascular care',
    },
    {
      name: 'Newark Beth Israel Medical Center',
      type: 'Teaching Hospital',
      description: 'Major teaching hospital providing comprehensive medical services.',
      category: 'Hospital',
      location: 'Newark, NJ',
      services: 'Emergency medicine, surgery, internal medicine',
    },
    {
      name: 'Jersey City Medical Center',
      type: 'Regional Hospital',
      description: 'Full-service hospital serving Hudson County residents.',
      category: 'Hospital',
      location: 'Jersey City, NJ',
      services: 'Emergency care, maternity, surgical services',
    },
    {
      name: 'Saint Barnabas Medical Center',
      type: 'Medical Center',
      description: 'Comprehensive medical center with advanced clinical services.',
      category: 'Hospital',
      location: 'Livingston, NJ',
      services: 'Cardiac care, oncology, emergency medicine',
    },
    {
      name: 'Englewood Hospital and Medical Center',
      type: 'Community Hospital',
      description:
        'Full-service hospital providing quality healthcare services to northern New Jersey communities.',
      category: 'Hospital',
      location: 'Englewood, NJ',
      services: 'Emergency care, maternity services, cancer care',
    },
    {
      name: 'Clara Maass Medical Center',
      type: 'Community Hospital',
      description:
        'Community hospital providing comprehensive healthcare services to Essex County.',
      category: 'Hospital',
      location: 'Belleville, NJ',
      services: 'Emergency care, surgery, maternity services',
    },

    // Specialty Hospitals
    {
      name: 'Deborah Heart and Lung Center',
      type: 'Specialty Hospital',
      description:
        'Nationally recognized heart and lung specialty hospital providing advanced cardiac and pulmonary care.',
      category: 'Specialty',
      location: 'Browns Mills, NJ',
      services: 'Cardiac surgery, pulmonary care, cardiovascular rehabilitation',
    },
    {
      name: "Children's Specialized Hospital",
      type: 'Pediatric Hospital',
      description: 'Leading pediatric rehabilitation hospital serving children with special needs.',
      category: 'Specialty',
      location: 'Multiple NJ Locations',
      services: 'Pediatric rehabilitation, autism services, developmental care',
    },
    {
      name: 'Cancer Institute of New Jersey',
      type: 'Cancer Center',
      description: 'Comprehensive cancer center providing advanced oncology care.',
      category: 'Specialty',
      location: 'Multiple NJ Locations',
      services: 'Cancer treatment, research, clinical trials',
    },
    {
      name: 'Eye Institute of New Jersey',
      type: 'Specialty Hospital',
      description: 'Specialized eye care center providing comprehensive ophthalmology services.',
      category: 'Specialty',
      location: 'Multiple NJ Locations',
      services: 'Eye surgery, vision care, retinal specialists',
    },

    // Military & VA Medical
    {
      name: 'Joint Base McGuire-Dix-Lakehurst',
      type: 'Military Medical Facility',
      description:
        'Military medical services supporting active duty personnel, veterans, and their families.',
      category: 'Military',
      location: 'Joint Base MDL, NJ',
      services: 'Military healthcare, veteran services, family medicine',
    },
    {
      name: 'McGuire Air Force Base Hospital',
      type: 'Military Hospital',
      description:
        'Air Force medical facility providing healthcare to military personnel and families.',
      category: 'Military',
      location: 'McGuire AFB, NJ',
      services: 'Military medicine, flight medicine, emergency care',
    },
    {
      name: 'Fort Dix Medical Facility',
      type: 'Military Medical',
      description: 'Army medical facility supporting military training and operations.',
      category: 'Military',
      location: 'Fort Dix, NJ',
      services: 'Military healthcare, occupational health, emergency medicine',
    },
    {
      name: 'VA Medical Center East Orange',
      type: 'Veterans Hospital',
      description: 'Full-service VA medical center serving New Jersey veterans.',
      category: 'Veterans',
      location: 'East Orange, NJ',
      services: 'Primary care, mental health, specialty services',
    },
    {
      name: 'VA Medical Center Lyons',
      type: 'Veterans Hospital',
      description: 'Specialized VA medical center focusing on extended care services.',
      category: 'Veterans',
      location: 'Lyons, NJ',
      services: 'Extended care, rehabilitation, mental health',
    },

    // Urgent Care Networks
    {
      name: 'CarePoint Health',
      type: 'Urgent Care Network',
      description: 'Comprehensive urgent care network serving Hudson County.',
      category: 'Urgent Care',
      location: 'Hudson County, NJ',
      services: 'Urgent care, primary care, occupational health',
    },
    {
      name: 'Patient First',
      type: 'Urgent Care',
      description: 'Walk-in medical care providing convenient healthcare services.',
      category: 'Urgent Care',
      location: 'Multiple NJ Locations',
      services: 'Urgent care, occupational medicine, physicals',
    },
    {
      name: 'MedExpress Urgent Care',
      type: 'Urgent Care',
      description: 'National urgent care provider with multiple New Jersey locations.',
      category: 'Urgent Care',
      location: 'Multiple NJ Locations',
      services: 'Urgent care, occupational health, wellness services',
    },
    {
      name: 'AFC Urgent Care',
      type: 'Urgent Care',
      description: 'Neighborhood urgent care providing quality medical services.',
      category: 'Urgent Care',
      location: 'Multiple NJ Locations',
      services: 'Urgent care, wellness services, travel medicine',
    },
    {
      name: 'GoHealth Urgent Care',
      type: 'Urgent Care',
      description: 'Modern urgent care centers with advanced medical technology.',
      category: 'Urgent Care',
      location: 'Multiple NJ Locations',
      services: 'Urgent care, diagnostic imaging, laboratory services',
    },
    {
      name: 'ConvenientCare',
      type: 'Urgent Care',
      description: 'Community-focused urgent care providing accessible healthcare.',
      category: 'Urgent Care',
      location: 'Multiple NJ Locations',
      services: 'Urgent care, primary care, preventive medicine',
    },

    // Medical Groups
    {
      name: 'Summit Medical Group',
      type: 'Medical Practice',
      description: 'Large multi-specialty medical group serving northern New Jersey.',
      category: 'Medical Group',
      location: 'Northern NJ',
      services: 'Primary care, specialty care, diagnostic services',
    },
    {
      name: 'CareStation Medical Group',
      type: 'Primary Care Network',
      description:
        'Multi-specialty medical group providing comprehensive primary and specialty care services.',
      category: 'Medical Group',
      location: 'Central NJ',
      services: 'Family medicine, internal medicine, specialty care',
    },
    {
      name: 'Allied Physicians Group',
      type: 'Medical Group',
      description: 'Independent physician group providing comprehensive medical services.',
      category: 'Medical Group',
      location: 'Multiple NJ Locations',
      services: 'Primary care, internal medicine, family practice',
    },
    {
      name: 'Garden State Medical Group',
      type: 'Medical Practice',
      description: 'Community-based medical group serving diverse patient populations.',
      category: 'Medical Group',
      location: 'Multiple NJ Locations',
      services: 'Family medicine, pediatrics, geriatric care',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Local and National Partners</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Georgies Pharmacy collaborates with leading healthcare organizations and pharmaceutical
            companies to provide you with the highest quality medications and services.
          </p>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-slate-900">15+</h3>
              <p className="text-slate-600">Healthcare Partners</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-slate-900">4</h3>
              <p className="text-slate-600">National Distributors</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-slate-900">13+</h3>
              <p className="text-slate-600">Years Partnership</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-slate-900">10,000+</h3>
              <p className="text-slate-600">Patients Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* National Partners */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">National Healthcare Partners</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We work with Fortune 500 pharmaceutical companies and healthcare organizations to
              ensure reliable medication supply and competitive pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {nationalPartners.map((partner, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-900">
                        {partner.name}
                      </CardTitle>
                      <p className="text-primary font-medium">{partner.type}</p>
                    </div>
                    <div className="text-right text-sm text-slate-500">
                      <p>Est. {partner.established}</p>
                      <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs mt-1">
                        {partner.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{partner.description}</p>
                  <div className="flex items-center justify-between">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-red-700 text-sm font-medium"
                    >
                      Learn More →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Partners */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Local Healthcare Partners</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Strong relationships with local healthcare providers ensure coordinated care and
              seamless prescription management for our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {localPartners.map((partner, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-slate-900">
                        {partner.name}
                      </CardTitle>
                      <p className="text-primary font-medium">{partner.type}</p>
                    </div>
                    <div className="text-right text-sm text-slate-500">
                      <p>{partner.location}</p>
                      <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs mt-1">
                        {partner.category}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{partner.description}</p>
                  <div className="bg-slate-100 p-3 rounded">
                    <p className="text-sm text-slate-700">
                      <strong>Services:</strong> {partner.services}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment and Financial Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Payment and Financial Partners
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We accept all major credit cards and work with leading financial partners to make
              healthcare accessible and convenient.
            </p>
          </div>

          {/* Credit Cards */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
              Accepted Credit Cards
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2 bg-slate-100 px-6 py-4 rounded-lg">
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VISA</span>
                </div>
                <span className="font-medium text-slate-700">Visa</span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-100 px-6 py-4 rounded-lg">
                <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">MC</span>
                </div>
                <span className="font-medium text-slate-700">Mastercard</span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-100 px-6 py-4 rounded-lg">
                <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AMEX</span>
                </div>
                <span className="font-medium text-slate-700">American Express</span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-100 px-6 py-4 rounded-lg">
                <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">DISC</span>
                </div>
                <span className="font-medium text-slate-700">Discover</span>
              </div>
            </div>
          </div>

          {/* Financial Service Partners */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
              Financial Service Partners
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">AB</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Amboy Bank</h4>
                  <p className="text-sm text-slate-600">
                    Community banking partner providing flexible payment solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">WP</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">WorldPay</h4>
                  <p className="text-sm text-slate-600">
                    Global payment processing technology for secure transactions
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">SQ</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Square</h4>
                  <p className="text-sm text-slate-600">
                    Modern point-of-sale and payment processing solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">ST</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Stripe</h4>
                  <p className="text-sm text-slate-600">
                    Advanced online payment infrastructure and processing
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmacy Technology Partners - Floating Animation */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pharmacy Technology Partners</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Powered by industry-leading technology and network partners to deliver secure,
              efficient prescription management and healthcare services.
            </p>
          </div>

          <div className="overflow-hidden relative">
            <div className="flex animate-scroll-left-to-right space-x-6 py-4 whitespace-nowrap">
              {/* SureScripts */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-blue-600 text-lg">Surescripts</h4>
                  <p className="text-xs text-slate-600">Electronic Prescribing Network</p>
                </div>
              </div>

              {/* CoverMyMeds */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-green-600 text-lg">CoverMyMeds</h4>
                  <p className="text-xs text-slate-600">Prior Authorization Solutions</p>
                </div>
              </div>

              {/* AmerisourceBergen */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-blue-700 text-lg">AmerisourceBergen</h4>
                  <p className="text-xs text-slate-600">Pharmaceutical Distribution</p>
                </div>
              </div>

              {/* eRx Network */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-purple-600 text-lg">eRx Network</h4>
                  <p className="text-xs text-slate-600">Electronic Prescribing</p>
                </div>
              </div>

              {/* Amplicare */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-teal-600 text-lg">Amplicare</h4>
                  <p className="text-xs text-slate-600">Patient Care Solutions</p>
                </div>
              </div>

              {/* Vuca Health */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-indigo-600 text-lg">Vuca Health</h4>
                  <p className="text-xs text-slate-600">Healthcare Technology</p>
                </div>
              </div>

              {/* ConnectiveRx */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-cyan-600 text-lg">ConnectiveRx</h4>
                  <p className="text-xs text-slate-600">Patient Access Solutions</p>
                </div>
              </div>

              {/* Cardinal Health */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-red-600 text-lg">Cardinal Health</h4>
                  <p className="text-xs text-slate-600">Healthcare Solutions</p>
                </div>
              </div>

              {/* RelayHealth */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-orange-600 text-lg">RelayHealth</h4>
                  <p className="text-xs text-slate-600">Healthcare Communications</p>
                </div>
              </div>

              {/* Digital Pharmacist */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-emerald-600 text-lg">Digital Pharmacist</h4>
                  <p className="text-xs text-slate-600">Pharmacy Marketing</p>
                </div>
              </div>

              {/* Global Payments */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-violet-600 text-lg">Global Payments</h4>
                  <p className="text-xs text-slate-600">Payment Processing</p>
                </div>
              </div>

              {/* Worldpay by FIS */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-rose-600 text-lg">Worldpay by FIS</h4>
                  <p className="text-xs text-slate-600">Payment Solutions</p>
                </div>
              </div>

              {/* RefillRx Connect */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-amber-600 text-lg">RefillRx Connect</h4>
                  <p className="text-xs text-slate-600">Refill Management</p>
                </div>
              </div>

              {/* Asembia */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-lime-600 text-lg">Asembia</h4>
                  <p className="text-xs text-slate-600">Specialty Pharmacy</p>
                </div>
              </div>

              {/* Updox */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-sky-600 text-lg">Updox</h4>
                  <p className="text-xs text-slate-600">Healthcare Communications</p>
                </div>
              </div>

              {/* Duplicate set for continuous scroll */}
              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-blue-600 text-lg">Surescripts</h4>
                  <p className="text-xs text-slate-600">Electronic Prescribing Network</p>
                </div>
              </div>

              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-green-600 text-lg">CoverMyMeds</h4>
                  <p className="text-xs text-slate-600">Prior Authorization Solutions</p>
                </div>
              </div>

              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-blue-700 text-lg">AmerisourceBergen</h4>
                  <p className="text-xs text-slate-600">Pharmaceutical Distribution</p>
                </div>
              </div>

              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-purple-600 text-lg">eRx Network</h4>
                  <p className="text-xs text-slate-600">Electronic Prescribing</p>
                </div>
              </div>

              <div className="flex-shrink-0 bg-white rounded-lg p-4 shadow-md border border-slate-200 w-64 h-24 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="font-bold text-teal-600 text-lg">Amplicare</h4>
                  <p className="text-xs text-slate-600">Patient Care Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Partnership Benefits for Our Patients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliable Supply Chain</h3>
              <p className="text-slate-600">
                Direct partnerships with major distributors ensure consistent medication
                availability and competitive pricing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Coordinated Care</h3>
              <p className="text-slate-600">
                Seamless communication with local healthcare providers for better patient outcomes
                and care coordination.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-slate-600">
                Partnerships with accredited organizations ensure the highest standards of
                pharmaceutical care and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
