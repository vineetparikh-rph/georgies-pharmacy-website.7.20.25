import { Button } from "@/components/ui/button";
import { Pill, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What are your pharmacy hours?",
        answer: "Our hours vary by location: • Georgies Family Pharmacy (Linden): Mon-Fri 9:00 AM - 7:00 PM | Sat 9:00 AM - 5:00 PM | Sun Closed • Georgies Specialty Pharmacy (Linden): Mon-Fri 9:30 AM - 6:00 PM | Sat-Sun Closed • Georgies Parlin Pharmacy: Mon-Fri 9:00 AM - 7:00 PM | Sat 9:00 AM - 5:00 PM | Sun Closed • Georgies Outpatient Pharmacy (Browns Mills): Mon-Fri 9:30 AM - 6:00 PM | Sat 10:00 AM - 2:00 PM | Sun Closed. We also offer 24/7 online services through our patient portal."
      },
      {
        question: "Do you accept my insurance?",
        answer: "We accept all major insurances."
      },
      {
        question: "How do I create an online account?",
        answer: "Visit our patient portal at https://georgiesrx.streamlit.app/ and follow the registration process. You'll need your prescription number and personal information to verify your identity."
      }
    ]
  },
  {
    category: "Prescriptions",
    questions: [
      {
        question: "How do I request a prescription refill?",
        answer: "You can request refills through our online portal, mobile app, by calling our automated line, or visiting the pharmacy in person."
      },
      {
        question: "How long does it take to fill a prescription?",
        answer: "Most prescriptions are ready within 15-30 minutes. Complex medications or prior authorizations may take longer. We'll notify you when your prescription is ready."
      },
      {
        question: "Can I get a 90-day supply of my medication?",
        answer: "Yes, if your insurance allows and your doctor has prescribed a 90-day supply. This is often more convenient and cost-effective."
      }
    ]
  },
  {
    category: "Transfers",
    questions: [
      {
        question: "How do I transfer prescriptions from another pharmacy?",
        answer: "Use our online transfer form or call us at our pharmacy location. We'll need your current pharmacy information and prescription details. We handle all the paperwork."
      },
      {
        question: "Is there a fee to transfer prescriptions?",
        answer: "No, prescription transfers are completely free. We're happy to help you switch to Georgies Pharmacy at no cost."
      },
      {
        question: "How long does a prescription transfer take?",
        answer: "Most transfers are completed within 24 hours. Some may take longer depending on the other pharmacy's response time."
      }
    ]
  },
  {
    category: "Delivery & Pickup",
    questions: [
      {
        question: "Do you offer prescription delivery?",
        answer: "Yes, we offer free local delivery for prescriptions. Delivery times vary by location but typically occur within the same day."
      },
      {
        question: "What is curbside pickup?",
        answer: "Curbside pickup allows you to stay in your car while we bring your prescription to you. Call when you arrive, and we'll bring your order out."
      },
      {
        question: "Can someone else pick up my prescription?",
        answer: "Yes, with proper authorization. The person must provide valid ID and may need to be listed as an authorized pickup person on your account."
      }
    ]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Find answers to common questions about our pharmacy services and policies. 
            Need more help? <span className="text-red-600 font-semibold">Chat with Us</span> for immediate assistance.
          </p>
        </div>

        {faqs.map((category, categoryIndex) => (
          <div key={category.category} className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{category.category}</h2>
            <div className="space-y-4">
              {category.questions.map((faq, faqIndex) => {
                const itemId = `${categoryIndex}-${faqIndex}`;
                const isOpen = openItems.includes(itemId);
                
                return (
                  <Collapsible key={itemId} open={isOpen} onOpenChange={() => toggleItem(itemId)}>
                    <CollapsibleTrigger className="w-full">
                      <div className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center">
                          <h3 className="text-left font-semibold text-slate-900">{faq.question}</h3>
                          {isOpen ? (
                            <ChevronUp className="text-primary h-5 w-5 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="text-primary h-5 w-5 flex-shrink-0" />
                          )}
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="bg-slate-50 border-l-4 border-primary p-6 rounded-b-lg">
                        <p className="text-slate-700">{faq.answer}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                );
              })}
            </div>
          </div>
        ))}

        <section className="text-center bg-gradient-to-r from-primary to-red-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl text-red-100 mb-8">
            Our pharmacy team is here to help. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => window.location.href = "/contact"} size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Contact Us
            </Button>
            <Button 
              onClick={() => window.open('https://3156177.winrxrefill.com/Secure', '_blank')} 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              <span className="text-red-300 font-semibold">Chat with Us</span>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}