import React from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Landing from "@/pages/Landing";
import Locations from "@/pages/Locations";
import LocationsMap from "@/pages/LocationsMap";
import PetMedications from "@/pages/PetMedications";
import BestPrices from "@/pages/BestPrices";
import MedPack from "@/pages/MedPack";
import MedPackHowItWorks from "@/pages/MedPackHowItWorks";
import Testimonials from "@/pages/Testimonials";
import OTCProducts from "@/pages/OTCProducts";
import Checkout from "@/pages/Checkout";
import Partners from "@/pages/Partners";
import Features from "@/pages/Features";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import GeorgiesFamily from "@/pages/locations/GeorgiesFamily";
import GeorgiesSpecialty from "@/pages/locations/GeorgiesSpecialty";
import GeorgiesParlin from "@/pages/locations/GeorgiesParlin";
import GeorgiesOutpatient from "@/pages/locations/GeorgiesOutpatient";
import FamilyPharmacy from "@/pages/locations/FamilyPharmacy";
import SpecialtyPharmacy from "@/pages/locations/SpecialtyPharmacy";
import ParlinPharmacy from "@/pages/locations/ParlinPharmacy";
import OutpatientPharmacy from "@/pages/locations/OutpatientPharmacy";
import Refills from "@/pages/services/Refills";
import Transfers from "@/pages/services/Transfers";
import Consultations from "@/pages/services/Consultations";
import MedicationSync from "@/pages/services/MedicationSync";
import FAQ from "@/pages/support/FAQ";
import Hours from "@/pages/support/Hours";
import Insurance from "@/pages/support/Insurance";
import Privacy from "@/pages/legal/Privacy";
import Terms from "@/pages/legal/Terms";
import HIPAA from "@/pages/legal/HIPAA";
import Accessibility from "@/pages/legal/Accessibility";
import Redirect404 from "@/pages/404";
import Family from "@/pages/Family";
import Parlin from "@/pages/Parlin";
import Specialty from "@/pages/Specialty";
import Outpatient from "@/pages/Outpatient";
import Blog from "@/pages/Blog";

// Simple redirect component
function Redirect({ to }: { to: string }) {
  const [, setLocation] = useLocation();

  React.useEffect(() => {
    window.location.href = to;
  }, [to]);

  return null;
}

function Router() {
  return (
    <Switch>
      {/* Redirect routes */}
      <Route path="/refill">
        <Redirect to="/app/refill" />
      </Route>
      <Route path="/transfer">
        <Redirect to="/app/transfer" />
      </Route>
      <Route path="/vaccine">
        <Redirect to="/app/vaccine" />
      </Route>

      {/* Simple routing - same for all users */}
      <Route path="/" component={Landing} />

      {/* SEO-optimized location landing pages */}
      <Route path="/family" component={Family} />
      <Route path="/parlin" component={Parlin} />
      <Route path="/specialty" component={Specialty} />
      <Route path="/outpatient" component={Outpatient} />

      <Route path="/locations" component={Locations} />
      <Route path="/locations/map" component={LocationsMap} />
      <Route path="/locations/family" component={GeorgiesFamily} />
      <Route path="/locations/specialty" component={GeorgiesSpecialty} />
      <Route path="/locations/parlin" component={GeorgiesParlin} />
      <Route path="/locations/outpatient" component={GeorgiesOutpatient} />
      <Route path="/locations/family-pharmacy" component={FamilyPharmacy} />
      <Route
        path="/locations/specialty-pharmacy"
        component={SpecialtyPharmacy}
      />
      <Route path="/locations/parlin-pharmacy" component={ParlinPharmacy} />
      <Route
        path="/locations/outpatient-pharmacy"
        component={OutpatientPharmacy}
      />
      <Route path="/pet-medications" component={PetMedications} />
      <Route path="/best-prices" component={BestPrices} />
      <Route path="/partners" component={Partners} />
      <Route path="/features" component={Features} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/services/refills" component={Refills} />
      <Route path="/services/transfers" component={Transfers} />
      <Route path="/services/consultations" component={Consultations} />
      <Route path="/services/medication-sync" component={MedicationSync} />
      <Route path="/support/faq" component={FAQ} />
      <Route path="/support/hours" component={Hours} />
      <Route path="/support/insurance" component={Insurance} />
      <Route path="/legal/privacy" component={Privacy} />
      <Route path="/legal/terms" component={Terms} />
      <Route path="/legal/hipaa" component={HIPAA} />
      <Route path="/legal/accessibility" component={Accessibility} />
      <Route path="/medpack" component={MedPack} />
      <Route path="/medpack/how-it-works" component={MedPackHowItWorks} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/otc-products" component={OTCProducts} />
      <Route path="/otc-store" component={OTCProducts} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/blog" component={Blog} />

      <Route component={Redirect404} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
