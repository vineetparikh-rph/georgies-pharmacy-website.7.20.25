import { Pill } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20" id="main-footer">
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
  );
}
