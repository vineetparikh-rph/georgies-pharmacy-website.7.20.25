import { Button } from '@/components/ui/button';
import { Pill, Heart, Users, Award, Shield, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <Navigation />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            About <span className="text-primary">Georgies Pharmacy</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Better Care. Better Health. Your trusted healthcare partner for over 15 years, committed
            to providing exceptional pharmaceutical care and personalized services to everyone in
            New Jersey.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About Us</h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded in 2011, Georgies Pharmacy began as a small community pharmacy in Linden,
                New Jersey, originally known as St. Georges Family Pharmacy. With a simple
                mission—to provide personalized healthcare solutions with genuine care and attention
                to detail—we quickly became a trusted resource for local families.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Over the years, we've grown from a single storefront to four thriving locations,
                evolving into a comprehensive healthcare provider. Yet our core values remain
                unchanged: we believe every patient deserves individualized care, expert guidance,
                and convenient access to their medications.
              </p>
              <p className="text-lg text-slate-600">
                As we've expanded, we've stayed true to our roots. To honor our beginnings and
                continue the legacy that started on St. Georges Avenue, we proudly kept Georgies in
                the foundation of our name. Today, we serve thousands of patients across New Jersey
                while maintaining the personal touch that sets us apart from larger chain
                pharmacies.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">14+</div>
                  <div className="text-slate-600">Years of Service</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                  <div className="text-slate-600">Patients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1Million+</div>
                  <div className="text-slate-600">Prescriptions Filled</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <div className="text-slate-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Compassionate Care</h3>
              <p className="text-slate-600">
                We treat every patient with empathy, understanding, and genuine concern for their
                well-being.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600">
                We maintain the highest standards in pharmaceutical care, accuracy, and customer
                service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Community Focus</h3>
              <p className="text-slate-600">
                We're deeply committed to the health and wellness of our local community.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Meet Our Team</h2>

          {/* Leadership Row - CEO & Shareholders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">VP</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Vineet Parikh, PharmD</h3>
              <p className="text-primary font-medium mb-2">CEO & Co-Founder</p>
              <p className="text-slate-600 text-sm">
                Vineet Parikh is the CEO and Co-Founder of Georgies Pharmacy, which he launched
                alongside his father, Bharat Parikh, to reimagine local pharmacy care. With over 15
                years of experience spanning entrepreneurship, operations, leadership, and direct
                patient care, Vineet brings both strategic vision and hands-on clinical expertise to
                every aspect of the business. Holding a doctorate in pharmacy, he is committed to
                delivering innovative, accessible healthcare solutions while preserving the
                personalized service of a community pharmacy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">HS</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Hiral Shah, PharmD</h3>
              <p className="text-primary font-medium mb-2">
                Pharmacist in Charge and Shareholder at Georgies Parlin Pharmacy
              </p>
              <p className="text-slate-600 text-sm">
                Specialized in pharmaceutical care and medication therapy management with 15+ years
                of experience in pharmacy operations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/70 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">PP</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Prashant Patel, PharmD</h3>
              <p className="text-primary font-medium mb-2">
                Pharmacist in Charge and Shareholder at Georgies Family Pharmacy
              </p>
              <p className="text-slate-600 text-sm">
                Specialized in medication synchronization programs and comprehensive pharmacy
                operations management.
              </p>
            </div>
          </div>

          {/* Pharmacist Staff Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">NP</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Nitin Patel, PharmD</h3>
              <p className="text-primary font-medium mb-2">
                Pharmacist in Charge at Georgies Specialty Pharmacy
              </p>
              <p className="text-slate-600 text-sm">
                Specialized in clinical pharmacy services and specialty medication management.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">RM</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Rose Marwa, RPh</h3>
              <p className="text-primary font-medium mb-2">Registered Pharmacist</p>
              <p className="text-slate-600 text-sm">
                Dedicated to providing exceptional patient care and medication therapy management.
              </p>
            </div>
          </div>
        </section>

        {/* Pharmacy Staff */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Our Pharmacy Staff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Alexander S. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">AS</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Alexander S.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Amber F. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">AF</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Amber F.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Anthony E. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">AE</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Anthony E.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Arif J. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">AJ</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Arif J.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Daniela O. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">DO</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Daniela O.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Jay M. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">JM</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Jay M.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Juan V. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-stone-400 to-stone-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">JV</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Juan V.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Karan K. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-400 to-violet-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">KK</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Karan K.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Linda H. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">LH</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Linda H.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Mahir D. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">MD</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Mahir D.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Mawloda K. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">MK</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Mawloda K.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Marguerit T. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">MT</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Marguerit T.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Raghda S. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">RS</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Raghda S.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Riddhee V. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">RV</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Riddhee V.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Rina D. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">RD</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Rina D.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Sahil P. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-400 to-fuchsia-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SP</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Sahil P.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Shaeel J. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SJ</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Shaeel J.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Shkurte Z. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">SZ</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Shkurte Z.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Tanvir K. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">TK</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Tanvir K.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Teerth R. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">TR</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Teerth R.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>

            {/* Vruta S. */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">VS</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Vruta S.</h3>
              <p className="text-primary font-medium text-sm">Pharmacy Staff</p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="text-center bg-gradient-to-r from-primary to-red-600 rounded-2xl p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-red-100 max-w-4xl mx-auto">
            Better Care. Better Health. To provide exceptional pharmaceutical care through
            personalized service, innovative technology, and unwavering commitment to our patients'
            health and well-being. We strive to be the most trusted healthcare partner in our
            community.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
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
                  <a href="/services/sync" className="hover:text-white transition-colors">
                    Medication Synchronization
                  </a>
                </li>
                <li>
                  <a href="/services/consultations" className="hover:text-white transition-colors">
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
            <p className="text-slate-400">
              &copy; 2025 by Georgies Pharmacy Group. All rights reserved. Licensed Pharmacy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
