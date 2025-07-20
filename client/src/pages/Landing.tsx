import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Users, ArrowRight, Car, Pill } from 'lucide-react';
import ImageCarousel from '@/components/ImageCarousel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Landing() {
  // Essential testimonials for initial load
  const essentialTestimonials = [
    {
      id: 'SM',
      name: 'Sarah M.',
      initials: 'SM',
      review:
        'Amazing service! The staff is incredibly helpful and my prescriptions are always ready on time.',
      source: 'via Facebook',
    },
    {
      id: 'DJ',
      name: 'David J.',
      initials: 'DJ',
      review: 'Best pharmacy in the area! They go above and beyond to help their customers.',
      source: 'via Facebook',
    },
    {
      id: 'ML',
      name: 'Maria L.',
      initials: 'ML',
      review: 'Professional, caring, and always available when I need them.',
      source: 'via Facebook',
    },
    {
      id: 'MS',
      name: 'Michael S.',
      initials: 'MS',
      review:
        'Outstanding pharmacy! They filled my prescription in 10 minutes and the pharmacist caught a dangerous drug interaction my doctor missed.',
      source: 'via Google',
    },
    {
      id: 'LW',
      name: 'Lisa W.',
      initials: 'LW',
      review:
        "I've been coming here for 8 years. They remember my allergies and always double-check everything. True community pharmacy at its best!",
      source: 'via Google',
    },
    {
      id: 'AG',
      name: 'Anthony G.',
      initials: 'AG',
      review:
        'Fast, friendly, and professional. The pharmacist took time to make sure I understood my medication interactions. Highly recommend!',
      source: 'via Facebook',
    },
    {
      id: 'CD',
      name: 'Carol D.',
      initials: 'CD',
      review:
        'Best prices in town! I compared with 5 other pharmacies and Georgies was significantly cheaper.',
      source: 'via Google',
    },
  ];

  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);
  const [shuffledTestimonials, setShuffledTestimonials] = useState(essentialTestimonials);

  const awards = [
    'in Customer Service',
    'in Resolving problems or complaints',
    'in Ability to get prescriptions',
    'in People',
    'in Helping save time or money',
    'in Digital channels - website, mobile app, text',
    'in Level of trust',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAwardIndex((prev) => (prev + 1) % awards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Shuffle testimonials on component mount and refresh periodically
  useEffect(() => {
    const shuffleTestimonials = () => {
      const shuffled = [...essentialTestimonials].sort(() => Math.random() - 0.5);
      setShuffledTestimonials(shuffled);
    };

    // Initial shuffle
    shuffleTestimonials();

    // Re-shuffle every 30 seconds for fresh randomization
    const interval = setInterval(shuffleTestimonials, 30000);

    return () => clearInterval(interval);
  }, []);

  // Load testimonials and partners much later for better performance
  useEffect(() => {
    let rootInstance: any = null;

    const loadDeferredContent = async () => {
      // Wait longer for better initial page performance
      setTimeout(async () => {
        const deferredContainer = document.getElementById('deferred-content');
        if (deferredContainer && !rootInstance) {
          // Show loading placeholder first
          deferredContainer.innerHTML = `
            <section class="mb-16">
              <h2 class="text-3xl font-bold text-center text-slate-900 mb-12">
                Real Testimony, by our Patients
              </h2>
              <div class="relative overflow-hidden mb-8">
                <div class="flex animate-scroll-left-fast space-x-8">
                  ${shuffledTestimonials
                    .concat(shuffledTestimonials)
                    .map(
                      (testimonial, index) => `
                    <div class="flex-shrink-0 bg-white p-8 rounded-xl shadow-lg border border-slate-200 w-80 text-center">
                      <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                        ${testimonial.initials}
                      </div>
                      <h3 class="font-semibold text-slate-900 mb-2">${testimonial.name}</h3>
                      <div class="flex justify-center mb-3">
                        <span class="text-yellow-400 text-lg font-bold">★★★★★</span>
                      </div>
                      <p class="text-sm text-slate-600 mb-2">${testimonial.source}</p>
                      <p class="text-slate-700 italic">
                        "${testimonial.review}"
                      </p>
                    </div>
                  `
                    )
                    .join('')}
                </div>
              </div>
              <div class="text-center">
                <button 
                  onclick="window.location.href='/testimonials'"
                  class="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-md transition-colors"
                >
                  Read More Reviews
                </button>
              </div>
            </section>

            <section class="py-16 bg-slate-50 overflow-hidden">
              <div class="max-w-7xl mx-auto px-6 text-center">
                <h3 class="text-3xl font-bold text-slate-900 mb-4">Our Healthcare Partners</h3>
                <p class="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
                  We collaborate with leading healthcare institutions, technology partners, and pharmaceutical distributors 
                  to provide you with the highest quality care and service.
                </p>
                
                <!-- Scrolling Partners -->
                <div class="relative overflow-hidden mb-8">
                  <div class="flex animate-scroll-left-fast space-x-8">
                    ${(() => {
                      const partners = [
                        // Major Pharmaceutical Distributors
                        {
                          name: 'AmerisourceBergen',
                          type: 'Pharmaceutical Distribution',
                          logo: 'AB',
                          category: 'national',
                        },
                        {
                          name: 'Cardinal Health',
                          type: 'Pharmaceutical Distribution',
                          logo: 'CH',
                          category: 'national',
                        },
                        {
                          name: 'McKesson Corporation',
                          type: 'Pharmaceutical Distribution',
                          logo: 'MK',
                          category: 'national',
                        },
                        {
                          name: 'Morris & Dickson',
                          type: 'Pharmaceutical Distribution',
                          logo: 'MD',
                          category: 'national',
                        },
                        {
                          name: 'HD Smith',
                          type: 'Pharmaceutical Distribution',
                          logo: 'HDS',
                          category: 'national',
                        },

                        // Major PBM Partners
                        {
                          name: 'Express Scripts',
                          type: 'Pharmacy Benefits',
                          logo: 'ES',
                          category: 'technology',
                        },
                        {
                          name: 'CVS Caremark',
                          type: 'Pharmacy Benefits',
                          logo: 'CVS',
                          category: 'technology',
                        },
                        {
                          name: 'OptumRx',
                          type: 'Pharmacy Benefits',
                          logo: 'OPT',
                          category: 'technology',
                        },
                        {
                          name: 'Humana Pharmacy',
                          type: 'Pharmacy Benefits',
                          logo: 'HUM',
                          category: 'technology',
                        },
                        {
                          name: 'Prime Therapeutics',
                          type: 'Pharmacy Benefits',
                          logo: 'PT',
                          category: 'technology',
                        },

                        // Technology & Software Partners
                        {
                          name: 'Microsoft',
                          type: 'Technology Partner',
                          logo: 'MS',
                          category: 'technology',
                        },
                        {
                          name: 'ComputerRx',
                          type: 'Pharmacy Software',
                          logo: 'CRx',
                          category: 'technology',
                        },
                        {
                          name: 'Outcomes',
                          type: 'Healthcare Analytics',
                          logo: 'OUT',
                          category: 'technology',
                        },
                        {
                          name: 'PDX',
                          type: 'Pharmacy Software',
                          logo: 'PDX',
                          category: 'technology',
                        },
                        {
                          name: 'PharmaClik',
                          type: 'Pharmacy Management',
                          logo: 'PC',
                          category: 'technology',
                        },
                        {
                          name: 'QS/1',
                          type: 'Pharmacy Software',
                          logo: 'QS1',
                          category: 'technology',
                        },
                        {
                          name: 'PioneerRx',
                          type: 'Pharmacy Software',
                          logo: 'PRx',
                          category: 'technology',
                        },
                        {
                          name: 'BestRx',
                          type: 'Pharmacy Software',
                          logo: 'BRx',
                          category: 'technology',
                        },
                        {
                          name: 'Surescripts',
                          type: 'E-Prescribing Network',
                          logo: 'SS',
                          category: 'technology',
                        },
                        {
                          name: 'RelayHealth',
                          type: 'Healthcare Connectivity',
                          logo: 'RH',
                          category: 'technology',
                        },

                        // Pharmacy Networks & Groups
                        {
                          name: 'Good Neighbor Pharmacy',
                          type: 'Pharmacy Network',
                          logo: 'GNP',
                          category: 'network',
                        },
                        {
                          name: 'Health Mart',
                          type: 'Pharmacy Network',
                          logo: 'HM',
                          category: 'network',
                        },
                        {
                          name: 'Independent Pharmacy Cooperative',
                          type: 'Pharmacy Network',
                          logo: 'IPC',
                          category: 'network',
                        },
                        {
                          name: 'PSAO',
                          type: 'Pharmacy Services',
                          logo: 'PSAO',
                          category: 'network',
                        },
                        {
                          name: 'RxOwnership',
                          type: 'Pharmacy Network',
                          logo: 'RxO',
                          category: 'network',
                        },
                        {
                          name: 'Pharmacy Partners',
                          type: 'Pharmacy Network',
                          logo: 'PP',
                          category: 'network',
                        },

                        // Major NJ Hospital Systems
                        {
                          name: 'Hackensack Meridian',
                          type: 'Health Network',
                          logo: 'HMH',
                          category: 'local',
                        },
                        {
                          name: 'RWJBarnabas Health',
                          type: 'Health System',
                          logo: 'RWJ',
                          category: 'local',
                        },
                        {
                          name: 'AtlantiCare',
                          type: 'Health System',
                          logo: 'AC',
                          category: 'local',
                        },
                        {
                          name: 'Cooper University',
                          type: 'Academic Medical',
                          logo: 'CUH',
                          category: 'local',
                        },
                        {
                          name: "Saint Peter's",
                          type: 'Healthcare Network',
                          logo: 'SPH',
                          category: 'local',
                        },
                        {
                          name: 'Virtua Health',
                          type: 'Health System',
                          logo: 'VH',
                          category: 'local',
                        },
                        {
                          name: 'Valley Health System',
                          type: 'Health Network',
                          logo: 'VHS',
                          category: 'local',
                        },
                        {
                          name: 'Prime Healthcare',
                          type: 'Hospital Network',
                          logo: 'PHC',
                          category: 'local',
                        },

                        // Major Hospitals
                        {
                          name: 'Trinitas Medical Center',
                          type: 'Regional Hospital',
                          logo: 'TMC',
                          category: 'local',
                        },
                        {
                          name: 'Englewood Hospital',
                          type: 'Community Hospital',
                          logo: 'EH',
                          category: 'local',
                        },
                        {
                          name: 'Morristown Medical',
                          type: 'Academic Hospital',
                          logo: 'MM',
                          category: 'local',
                        },
                        {
                          name: 'Overlook Medical',
                          type: 'Regional Hospital',
                          logo: 'OM',
                          category: 'local',
                        },
                        {
                          name: 'Newark Beth Israel',
                          type: 'Teaching Hospital',
                          logo: 'NBI',
                          category: 'local',
                        },
                        {
                          name: 'Jersey City Medical',
                          type: 'Regional Hospital',
                          logo: 'JCM',
                          category: 'local',
                        },
                        {
                          name: 'Saint Barnabas',
                          type: 'Medical Center',
                          logo: 'SB',
                          category: 'local',
                        },
                        {
                          name: 'Clara Maass',
                          type: 'Medical Center',
                          logo: 'CM',
                          category: 'local',
                        },
                        {
                          name: 'Chilton Medical',
                          type: 'Community Hospital',
                          logo: 'CMC',
                          category: 'local',
                        },
                        {
                          name: 'Holy Name Medical',
                          type: 'Regional Hospital',
                          logo: 'HNM',
                          category: 'local',
                        },
                        {
                          name: 'CentraState Medical',
                          type: 'Healthcare System',
                          logo: 'CS',
                          category: 'local',
                        },
                        {
                          name: 'Monmouth Medical',
                          type: 'Regional Hospital',
                          logo: 'MMC',
                          category: 'local',
                        },
                        {
                          name: 'Ocean Medical Center',
                          type: 'Regional Hospital',
                          logo: 'OMC',
                          category: 'local',
                        },
                        {
                          name: 'Riverview Medical',
                          type: 'Regional Hospital',
                          logo: 'RMC',
                          category: 'local',
                        },
                        {
                          name: 'Capital Health',
                          type: 'Health System',
                          logo: 'CH',
                          category: 'local',
                        },
                        {
                          name: 'Hunterdon Medical',
                          type: 'Regional Hospital',
                          logo: 'HMC',
                          category: 'local',
                        },
                        {
                          name: 'Somerset Medical',
                          type: 'Regional Hospital',
                          logo: 'SMC',
                          category: 'local',
                        },
                        {
                          name: 'JFK Medical Center',
                          type: 'Regional Hospital',
                          logo: 'JFK',
                          category: 'local',
                        },
                        {
                          name: 'University Hospital',
                          type: 'Academic Medical',
                          logo: 'UH',
                          category: 'local',
                        },

                        // Specialty Hospitals
                        {
                          name: 'Deborah Heart & Lung',
                          type: 'Specialty Hospital',
                          logo: 'DHL',
                          category: 'local',
                        },
                        {
                          name: "Children's Specialized",
                          type: 'Pediatric Hospital',
                          logo: 'CSH',
                          category: 'local',
                        },
                        {
                          name: "Goryeb Children's",
                          type: 'Pediatric Hospital',
                          logo: 'GCH',
                          category: 'local',
                        },
                        {
                          name: 'Institute for Neurology',
                          type: 'Specialty Hospital',
                          logo: 'IFN',
                          category: 'local',
                        },
                        {
                          name: 'Cancer Institute of NJ',
                          type: 'Cancer Center',
                          logo: 'CINJ',
                          category: 'local',
                        },
                        {
                          name: 'Eye Institute of NJ',
                          type: 'Specialty Center',
                          logo: 'EINJ',
                          category: 'local',
                        },

                        // Urgent Care Networks
                        {
                          name: 'CarePoint Health',
                          type: 'Urgent Care Network',
                          logo: 'CPH',
                          category: 'local',
                        },
                        {
                          name: 'Patient First',
                          type: 'Urgent Care',
                          logo: 'PF',
                          category: 'local',
                        },
                        { name: 'MedExpress', type: 'Urgent Care', logo: 'ME', category: 'local' },
                        {
                          name: 'ConvenientCare',
                          type: 'Urgent Care',
                          logo: 'CC',
                          category: 'local',
                        },
                        { name: 'FastCare', type: 'Urgent Care', logo: 'FC', category: 'local' },
                        {
                          name: 'AFC Urgent Care',
                          type: 'Urgent Care',
                          logo: 'AFC',
                          category: 'local',
                        },
                        {
                          name: 'GoHealth Urgent Care',
                          type: 'Urgent Care',
                          logo: 'GH',
                          category: 'local',
                        },

                        // Military & VA Medical
                        {
                          name: 'Joint Base MDL',
                          type: 'Military Medical',
                          logo: 'MDL',
                          category: 'local',
                        },
                        {
                          name: 'McGuire Air Force Base',
                          type: 'Military Medical',
                          logo: 'MAFB',
                          category: 'local',
                        },
                        {
                          name: 'Fort Dix Medical',
                          type: 'Military Medical',
                          logo: 'FDM',
                          category: 'local',
                        },
                        {
                          name: 'Lakehurst Naval Medical',
                          type: 'Military Medical',
                          logo: 'LNM',
                          category: 'local',
                        },
                        {
                          name: 'VA Medical Center East Orange',
                          type: 'Veterans Hospital',
                          logo: 'VAEO',
                          category: 'local',
                        },
                        {
                          name: 'VA Medical Center Lyons',
                          type: 'Veterans Hospital',
                          logo: 'VAL',
                          category: 'local',
                        },
                        {
                          name: 'VA Outpatient Clinic',
                          type: 'Veterans Care',
                          logo: 'VAOC',
                          category: 'local',
                        },

                        // Medical Groups & Practices
                        {
                          name: 'CareStation Medical',
                          type: 'Medical Group',
                          logo: 'CSM',
                          category: 'local',
                        },
                        {
                          name: 'Summit Medical Group',
                          type: 'Medical Practice',
                          logo: 'SMG',
                          category: 'local',
                        },
                        {
                          name: 'Allied Physicians',
                          type: 'Medical Group',
                          logo: 'AP',
                          category: 'local',
                        },
                        {
                          name: 'Garden State Medical',
                          type: 'Medical Group',
                          logo: 'GSM',
                          category: 'local',
                        },
                        {
                          name: 'Princeton Medical',
                          type: 'Medical Group',
                          logo: 'PM',
                          category: 'local',
                        },
                        {
                          name: 'Shore Medical Group',
                          type: 'Medical Practice',
                          logo: 'SHM',
                          category: 'local',
                        },

                        // Insurance Partners
                        {
                          name: 'Aetna',
                          type: 'Health Insurance',
                          logo: 'AET',
                          category: 'insurance',
                        },
                        {
                          name: 'Blue Cross Blue Shield',
                          type: 'Health Insurance',
                          logo: 'BCBS',
                          category: 'insurance',
                        },
                        {
                          name: 'Cigna',
                          type: 'Health Insurance',
                          logo: 'CIG',
                          category: 'insurance',
                        },
                        {
                          name: 'UnitedHealthcare',
                          type: 'Health Insurance',
                          logo: 'UHC',
                          category: 'insurance',
                        },
                        {
                          name: 'Horizon BCBSNJ',
                          type: 'Health Insurance',
                          logo: 'HOR',
                          category: 'insurance',
                        },
                        {
                          name: 'AmeriHealth',
                          type: 'Health Insurance',
                          logo: 'AMH',
                          category: 'insurance',
                        },
                        {
                          name: 'Medicaid NJ',
                          type: 'State Insurance',
                          logo: 'MNJ',
                          category: 'insurance',
                        },
                        {
                          name: 'Medicare',
                          type: 'Federal Insurance',
                          logo: 'MED',
                          category: 'insurance',
                        },

                        // Payment Partners
                        {
                          name: 'Visa',
                          type: 'Payment Processing',
                          logo: 'V',
                          category: 'payment',
                        },
                        {
                          name: 'Mastercard',
                          type: 'Payment Processing',
                          logo: 'MC',
                          category: 'payment',
                        },
                        {
                          name: 'American Express',
                          type: 'Payment Processing',
                          logo: 'AE',
                          category: 'payment',
                        },
                        {
                          name: 'Discover',
                          type: 'Payment Processing',
                          logo: 'D',
                          category: 'payment',
                        },
                        {
                          name: 'PayPal',
                          type: 'Digital Payments',
                          logo: 'PP',
                          category: 'payment',
                        },
                        {
                          name: 'Amboy Bank',
                          type: 'Local Banking',
                          logo: 'AB',
                          category: 'payment',
                        },

                        // Specialty Partners
                        { name: 'FDB', type: 'Drug Database', logo: 'FDB', category: 'specialty' },
                        {
                          name: 'Lexicomp',
                          type: 'Clinical Decision',
                          logo: 'LEX',
                          category: 'specialty',
                        },
                        {
                          name: 'Medi-Span',
                          type: 'Drug Information',
                          logo: 'MS',
                          category: 'specialty',
                        },
                        {
                          name: 'ScriptPro',
                          type: 'Automation Systems',
                          logo: 'SP',
                          category: 'specialty',
                        },
                        {
                          name: 'Parata Systems',
                          type: 'Packaging Solutions',
                          logo: 'PS',
                          category: 'specialty',
                        },
                        {
                          name: 'Innovation',
                          type: 'Packaging Systems',
                          logo: 'INN',
                          category: 'specialty',
                        },
                      ];
                      // Enhanced randomization - fresh shuffle each render with timestamp
                      const timestamp = Date.now();
                      const shuffled = [...partners]
                        .map((partner) => ({ ...partner, sortKey: Math.random() + timestamp }))
                        .sort((a, b) => a.sortKey - b.sortKey)
                        .map(({ sortKey, ...partner }) => partner);
                      return shuffled.concat(shuffled);
                    })()
                      .map(
                        (partner, index) => `
                      <div class="flex-shrink-0 bg-white p-6 rounded-xl shadow-lg border border-slate-200 w-64 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div class="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xs mx-auto mb-4 shadow-lg ${
                          partner.category === 'payment'
                            ? 'bg-gradient-to-br from-green-600 to-green-800'
                            : partner.category === 'technology'
                              ? 'bg-gradient-to-br from-blue-600 to-blue-800'
                              : partner.category === 'local'
                                ? 'bg-gradient-to-br from-purple-600 to-purple-800'
                                : partner.category === 'network'
                                  ? 'bg-gradient-to-br from-orange-600 to-orange-800'
                                  : partner.category === 'insurance'
                                    ? 'bg-gradient-to-br from-teal-600 to-teal-800'
                                    : partner.category === 'specialty'
                                      ? 'bg-gradient-to-br from-indigo-600 to-indigo-800'
                                      : 'bg-gradient-to-br from-primary to-red-700'
                        }">
                          ${partner.logo}
                        </div>
                        <h4 class="font-semibold text-slate-900 mb-2 text-sm leading-tight">${partner.name}</h4>
                        <p class="text-xs text-slate-600">${partner.type}</p>
                      </div>
                    `
                      )
                      .join('')}
                  </div>
                </div>
                
                <button
                  onclick="window.location.href='/partners'"
                  class="bg-primary text-white hover:bg-red-700 px-8 py-3 rounded-md transition-colors"
                >
                  View All Partners
                  <svg class="ml-2 h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </section>
          `;
        }
      }, 8000); // 8 second delay for better mobile performance
    };

    loadDeferredContent();

    return () => {
      if (rootInstance) {
        try {
          rootInstance.unmount();
        } catch (e) {
          // Ignore unmount errors
        }
        rootInstance = null;
      }
    };
  }, [shuffledTestimonials]);

  const handleLogin = () => {
    window.location.href = '/api/login';
  };

  return (
    <>
      <Helmet>
        <title>Georgies Pharmacy - #1 Rated Pharmacy | Linden, Parlin, Browns Mills NJ</title>
        <meta
          name="description"
          content="JD Power & Associates #1 Rated Pharmacy 8 years running! Georgies Pharmacy serves Linden, Parlin & Browns Mills NJ with prescription refills, transfers, vaccinations & personalized family care since 2011."
        />
        <meta
          name="keywords"
          content="pharmacy near me, prescription refills, Linden pharmacy, Parlin pharmacy, Browns Mills pharmacy, JD Power & Associates pharmacy, prescription transfer, vaccinations, family pharmacy, New Jersey pharmacy, Georgies Pharmacy"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Georgies Pharmacy - #1 Rated Pharmacy | Linden, Parlin, Browns Mills NJ"
        />
        <meta
          property="og:description"
          content="JD Power & Associates #1 Rated Pharmacy 8 years running! Family pharmacy serving New Jersey with prescription refills, transfers, vaccinations & personalized care since 2011."
        />
        <meta property="og:url" content="https://georgiesrx.com/" />
        <meta property="og:type" content="website" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Pharmacy',
            name: 'Georgies Pharmacy',
            description:
              'JD Power & Associates #1 Rated Pharmacy serving New Jersey with prescription services, refills, transfers, and personalized family care since 2011.',
            url: 'https://georgiesrx.com',
            telephone: '+1-908-925-4567',
            priceRange: '$$',
            openingHours: ['Mo-Fr 09:00-19:00', 'Sa 09:00-17:00'],
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              bestRating: '5',
              worstRating: '1',
              ratingCount: '500',
            },
            location: [
              {
                '@type': 'Place',
                name: 'Georgies Family Pharmacy',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '332 W. St. Georges Avenue',
                  addressLocality: 'Linden',
                  addressRegion: 'NJ',
                  postalCode: '07036',
                  addressCountry: 'US',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: '40.6220',
                  longitude: '-74.2447',
                },
                telephone: '+1-908-925-4567',
              },
              {
                '@type': 'Place',
                name: 'Georgies Specialty Pharmacy',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '521 N Wood Avenue',
                  addressLocality: 'Linden',
                  addressRegion: 'NJ',
                  postalCode: '07036',
                  addressCountry: 'US',
                },
                telephone: '+1-908-925-4566',
              },
              {
                '@type': 'Place',
                name: 'Georgies Parlin Pharmacy',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '499 Ernston Road',
                  addressLocality: 'Parlin',
                  addressRegion: 'NJ',
                  postalCode: '08859',
                  addressCountry: 'US',
                },
                telephone: '+1-732-952-3022',
              },
              {
                '@type': 'Place',
                name: 'Georgies Outpatient Pharmacy',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '530 Lakehurst Rd',
                  addressLocality: 'Browns Mills',
                  addressRegion: 'NJ',
                  postalCode: '08015',
                  addressCountry: 'US',
                },
                telephone: '+1-609-726-5800',
              },
            ],
            award: [
              'JD Power & Associates Pharmacy Study Winner - 8 Consecutive Years',
              'JD Power & Associates Winner 13 out of Last 15 Years',
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
        <Header />

        {/* Hero Section - Mobile Optimized */}
        <section className="relative min-h-[60vh] sm:min-h-[70vh] overflow-hidden">
          {/* Parallax Background */}
          <div className="absolute inset-0 parallax-bg">
            <div className="parallax-layer parallax-back">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: '0.08',
                }}
              ></div>
            </div>
            <div className="parallax-layer parallax-mid">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: '0.12',
                }}
              ></div>
            </div>
            <div className="parallax-layer parallax-front">
              <div className="w-full h-full bg-gradient-to-br from-slate-50/85 to-white/95"></div>
            </div>
          </div>

          {/* Hero Content - Mobile Responsive */}
          <div className="relative z-20 flex items-center justify-center h-full py-2 sm:py-8 px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-full max-w-7xl mx-auto">
              {/* Mobile-first responsive spacing */}
              <div className="h-2 sm:h-6 lg:h-8"></div>

              {/* Mobile-optimized Hero Image - Single optimized image for mobile */}
              <div className="mb-4 sm:mb-8 relative w-full mx-auto">
                <div className="h-32 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
                  <ImageCarousel
                    images={[
                      {
                        id: 1,
                        src: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        alt: 'Modern pharmacy counter',
                      },
                      {
                        id: 2,
                        src: 'https://images.unsplash.com/photo-1555633514-abcee6ab92e1?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        alt: 'Pharmacy interior',
                      },
                      {
                        id: 3,
                        src: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        alt: 'Pharmacist consultation',
                      },
                    ]}
                    autoPlay={true}
                    autoPlayInterval={6000}
                    showIndicators={true}
                    showArrows={true}
                    className="rounded-xl"
                  />
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight px-2">
                <span className="sr-only">
                  Georgies Pharmacy - J.D. Power #1 Rated Pharmacy in New Jersey serving Linden,
                  Parlin, Browns Mills -{' '}
                </span>
                Better Care. <span className="text-primary">Better Health.</span>
                <sup className="text-sm sm:text-base lg:text-lg">™</sup>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                At Georgies Pharmacy, you become part of our family. We provide old-fashioned,
                personalized service combined with modern technology. Serving New Jersey since 2011.
              </p>

              {/* Mobile-optimized bottom spacing */}
              <div className="h-2 sm:h-6 lg:h-8"></div>
            </div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 sm:py-2">
          {/* About Us Section - Reduced mobile spacing */}
          <section className="mb-6 sm:mb-12 mt-0 sm:mt-4">
            <div className="flex justify-center mb-4 sm:mb-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-200 max-w-md text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <label className="font-bold text-slate-900 text-lg">About Us</label>
                </div>
                <p className="fluid-text-sm text-slate-600 mb-4">
                  Learn more about our family-owned pharmacy and our commitment to personalized
                  healthcare in your community.
                </p>
                <Button
                  onClick={() => (window.location.href = '/about')}
                  className="w-full bg-primary text-white hover:bg-red-700"
                >
                  Learn More About Us
                </Button>
              </div>
            </div>
          </section>

          {/* Service Options with Icons */}
          <section className="mb-8 sm:mb-16">
            <div className="text-center mb-6 sm:mb-12 adaptive-spacing">
              <h2 className="fluid-text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
              <p className="fluid-text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive healthcare services designed with your family's needs in mind
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Quick Refills */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-200 flex flex-col h-full min-h-[200px] hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xs mt-0.5 flex-shrink-0">
                    Rx
                  </div>
                  <label className="font-semibold text-slate-900 leading-tight fluid-text-base">
                    Quick Refills
                  </label>
                </div>
                <p className="fluid-text-sm text-slate-600 mb-6 flex-grow">
                  Request prescription refills online with just a few clicks. Choose pickup or
                  delivery options.
                </p>
                <Button
                  onClick={() => (window.location.href = '/services/refills')}
                  className="w-full bg-primary text-white hover:bg-red-700 mt-auto"
                >
                  Start Refill
                </Button>
              </div>

              {/* Easy Transfers */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-200 flex flex-col h-full min-h-[200px] hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xs mt-0.5 flex-shrink-0">
                    ⇄
                  </div>
                  <label className="font-semibold text-slate-900 leading-tight text-base">
                    Easy Transfers
                  </label>
                </div>
                <p className="text-sm text-slate-600 mb-6 flex-grow">
                  Transfer prescriptions from other pharmacies seamlessly. We handle the paperwork.
                </p>
                <Button
                  onClick={() => (window.location.href = '/services/transfers')}
                  className="w-full bg-primary text-white hover:bg-red-700 mt-auto"
                >
                  Transfer Prescription
                </Button>
              </div>

              {/* Live Support */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-200 flex flex-col h-full min-h-[200px] hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-xs mt-0.5 flex-shrink-0">
                    💬
                  </div>
                  <label className="font-semibold text-slate-900 leading-tight text-base">
                    Live Support
                  </label>
                </div>
                <p className="text-sm text-slate-600 mb-6 flex-grow">
                  Chat directly with our pharmacy team for questions, consultations, and support.
                </p>
                <Button
                  onClick={() => (window.location.href = '/contact')}
                  className="w-full bg-primary text-white hover:bg-red-700 mt-auto"
                >
                  Start Chat
                </Button>
              </div>

              {/* Delivery Service */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-200 flex flex-col h-full min-h-[200px] hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center text-white font-bold text-xs mt-0.5 flex-shrink-0">
                    🚚
                  </div>
                  <label className="font-semibold text-slate-900 leading-tight text-base">
                    Delivery Service
                  </label>
                </div>
                <p className="text-sm text-slate-600 mb-6 flex-grow">
                  FREE delivery and pickup options: Home Delivery, Curbside Pickup, In-Store Pickup
                </p>
                <Button
                  onClick={() => (window.location.href = '/contact')}
                  className="w-full bg-primary text-white hover:bg-red-700 mt-auto"
                >
                  Schedule Delivery
                </Button>
              </div>

              {/* Vaccination Hub */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-200 flex flex-col h-full min-h-[200px] hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xs mt-0.5 flex-shrink-0">
                    💉
                  </div>
                  <label className="font-semibold text-slate-900 leading-tight text-base">
                    Vaccination Hub
                  </label>
                </div>
                <p className="text-sm text-slate-600 mb-6 flex-grow">
                  Vaccines and clinical testing: Flu, MMR, Tdap, HepB, COVID testing and more. WALK
                  IN available
                </p>
                <Button
                  onClick={() => window.open('/api/vaccine', '_blank')}
                  className="w-full bg-primary text-white hover:bg-red-700 mt-auto"
                >
                  Schedule a Vaccine
                </Button>
              </div>

              {/* Over The Counter */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-slate-200 flex flex-col h-full min-h-[200px] hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center text-white font-bold text-xs mt-0.5 flex-shrink-0">
                    🛒
                  </div>
                  <label className="font-semibold text-slate-900 leading-tight text-base">
                    Over The Counter
                  </label>
                </div>
                <p className="text-sm text-slate-600 mb-6 flex-grow">
                  Wide selection of OTC medications, vitamins, and health products with pickup or
                  delivery options
                </p>
                <Button
                  onClick={() => (window.location.href = '/otc-store')}
                  className="w-full bg-primary text-white hover:bg-red-700 mt-auto"
                >
                  Buy OTC Online
                </Button>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-primary to-red-900 rounded-2xl py-6 sm:py-8 px-4 sm:px-6 text-white mb-8 sm:mb-16">
            <h2 className="fluid-text-4xl font-bold mb-2">Access Prescription Management 24/7</h2>
            <p className="text-base text-red-100 mb-2">
              Track all your medications in one place. View status, refill counts, and prescription
              details. Your health information is protected with enterprise-grade security and HIPAA
              compliance. Join thousands of satisfied patients who trust Georgies Pharmacy for their
              healthcare needs.
            </p>
            <div className="flex justify-center items-center w-full mb-4">
              <Button
                onClick={() => window.open('/pharmacy-login', '_blank')}
                size="sm"
                variant="secondary"
                className="bg-white text-primary hover:bg-red-50 px-4 py-2 text-sm font-bold mx-auto"
              >
                Create Account or Login
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </section>

          {/* J.D. Power Awards Section */}
          <section className="mb-8 sm:mb-12 lg:mb-16 px-3 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 lg:mb-4 px-2">
                  <span className="block mb-1">Ranked Highest by JD Power & Associates</span>
                  <span className="block text-primary text-lg sm:text-xl lg:text-2xl mb-2">
                    8 Years in a Row • 13 out of the Last 15 Years!
                  </span>
                  <span
                    key={currentAwardIndex}
                    className="block h-8 sm:h-10 lg:h-12 transition-all duration-500 ease-in-out transform text-lg sm:text-xl lg:text-2xl text-primary"
                    style={{
                      animation: 'fadeInUp 0.5s ease-in-out',
                    }}
                  >
                    {awards[currentAwardIndex]}
                  </span>
                </h2>

                {/* Awards Badges Section */}
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                        <span className="text-white font-bold text-sm sm:text-lg">JD</span>
                      </div>
                      <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                        JD Power & Associates
                      </h3>
                      <p className="text-xs text-slate-600">8 Years Running</p>
                      <p className="text-xs text-primary font-medium">13 of 15 Years</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                        <span className="text-white font-bold text-xs sm:text-sm">5★</span>
                      </div>
                      <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                        Facebook Reviews
                      </h3>
                      <p className="text-xs text-slate-600">5/5 Stars</p>
                      <p className="text-xs text-primary font-medium">Excellent Rating</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                        <span className="text-white font-bold text-xs sm:text-sm">5★</span>
                      </div>
                      <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                        Google Reviews
                      </h3>
                      <p className="text-xs text-slate-600">5/5 Stars</p>
                      <p className="text-xs text-primary font-medium">Highly Rated</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                        <span className="text-white font-bold text-sm sm:text-lg">13+</span>
                      </div>
                      <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                        Years Serving
                      </h3>
                      <p className="text-xs text-slate-600">Community</p>
                      <p className="text-xs text-primary font-medium">Since 2011</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                        <span className="text-white font-bold text-sm sm:text-lg">4</span>
                      </div>
                      <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">Locations</h3>
                      <p className="text-xs text-slate-600">Serving You</p>
                      <p className="text-xs text-primary font-medium">Convenient</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8">
                  Source:{' '}
                  <a
                    href="https://www.wearegnp.com/jd-power-2024#:~:text=According%20to%20the%20J.D.%20Power,across%20all%20seven%20study%20dimensions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-red-900 underline break-words transition-colors"
                  >
                    Customer Satisfaction Study 2024
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Deferred loading - Load after main content */}
          <div id="deferred-content"></div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Pill className="text-white h-3 w-3" />
                  </div>
                  <span className="font-bold">Georgies Pharmacy</span>
                </div>
                <p className="text-slate-400">
                  Your trusted healthcare partner, providing convenient prescription management and
                  exceptional patient care.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Services</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>
                    <a href="/services/refills" className="hover:text-white transition-colors">
                      Prescription Refills
                    </a>
                  </li>
                  <li>
                    <a href="/services/transfers" className="hover:text-white transition-colors">
                      Prescription Transfers
                    </a>
                  </li>
                  <li>
                    <a href="/features" className="hover:text-white transition-colors">
                      Medication Synchronization
                    </a>
                  </li>
                  <li>
                    <a href="/features" className="hover:text-white transition-colors">
                      Health Consultations
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Support</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>
                    <a href="/contact" className="hover:text-white transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/support/faq" className="hover:text-white transition-colors">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="/support/hours" className="hover:text-white transition-colors">
                      Pharmacy Hours
                    </a>
                  </li>
                  <li>
                    <a href="/support/insurance" className="hover:text-white transition-colors">
                      Insurance Information
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Legal</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>
                    <a href="/legal/privacy" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/legal/terms" className="hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="/legal/hipaa" className="hover:text-white transition-colors">
                      HIPAA Notice
                    </a>
                  </li>
                  <li>
                    <a href="/legal/accessibility" className="hover:text-white transition-colors">
                      Accessibility
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 mt-8 pt-6 text-center">
              <div className="space-y-3">
                <p className="text-white font-semibold text-lg">Made with ❤️ in New Jersey</p>
                <p className="text-slate-300">
                  &copy; 2025 by Georgies Pharmacy Group. All rights reserved. Licensed Pharmacy.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
