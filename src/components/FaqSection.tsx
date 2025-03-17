
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "What is Just FX?",
      answer:
        "Just FX is an FX analytics platform that helps corporate treasurers and finance teams track, manage and control their FX exposure, risk and costs. Our platform provides transparency into bank margins and helps companies reduce their FX costs by up to 65%.",
    },
    {
      question: "How does Just FX help me reduce costs?",
      answer:
        "Just FX helps you reduce costs in several ways: by providing transparency into your bank's margins, benchmarking your rates against what similar companies are paying, giving you access to fair FX liquidity, and providing tools to optimize your FX strategy and negotiations with banks.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, security is our top priority. We use enterprise-grade encryption and security measures to protect your data. Our platform is compliant with industry standards and regulations, and we never share your sensitive information with third parties without your explicit consent.",
    },
    {
      question: "Can Just FX integrate with my existing systems?",
      answer:
        "Yes, Just FX is designed to integrate seamlessly with most treasury management systems, ERP software, and banking platforms. Our team can work with you to set up custom integrations based on your specific requirements.",
    },
    {
      question: "What is the Just Fair Cost Index™?",
      answer:
        "The Just Fair Cost Index™ is our proprietary benchmark that shows what companies similar to yours are paying for FX services. It helps you understand if you're getting a fair deal from your banks and provides leverage for negotiations.",
    },
    {
      question: "How long does it take to implement Just FX?",
      answer:
        "Implementation is quick and straightforward. Most customers are up and running within days. The Free and Light plans can be implemented immediately, while Standard and Premium plans include personalized onboarding support to ensure smooth integration with your existing workflows.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in stagger-1">
            Everything you need to know about Just FX
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8 animate-fade-in stagger-2">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border rounded-lg px-4 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-medium py-4 hover:text-just-orange">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center animate-fade-in stagger-3">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-just-orange hover:text-just-orange-dark font-medium"
          >
            Contact our support team
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
