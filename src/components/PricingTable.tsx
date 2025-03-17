import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      price: "€0",
      description: "Basic FX tools for occasional users",
      features: [
        "Introduction video",
        "FX setup course (5 videos)",
        "Access to Live FX interbank rates",
        "Live FX cost check",
      ],
      buttonText: "Sign up free",
      buttonVariant: "outline" as const,
    },
    {
      name: "Light",
      price: "€199",
      description: "Essential FX tools for small businesses",
      features: [
        "Introduction video",
        "FX setup course (5 videos)",
        "Access to Live FX interbank rates",
        "Live FX cost check",
        "Automated TCA",
        "Access to FX Analytics",
        "Detailed data driven insight",
        "Visualisation and overview of cost, margins and volumes",
      ],
      buttonText: "Start with Light",
      buttonVariant: "outline" as const,
      isPopular: false,
    },
    {
      name: "Standard",
      price: "€499",
      description: "Complete FX toolkit for growing companies",
      features: [
        "Introduction video",
        "FX setup course (5 videos)",
        "Access to Live FX interbank rates",
        "Live FX cost check",
        "Automated TCA",
        "Access to FX Analytics",
        "Detailed data driven insight",
        "Visualisation and overview of cost, margins and volumes",
        "Benchmark against Just Fair Cost Index™",
        "Detailed insight on FX Cost Optimization",
        "Track achieved savings",
        "Add custom milestones, bank negotiations and track outcome",
        "Liquidity Connect",
      ],
      buttonText: "Choose Standard",
      buttonVariant: "default" as const,
      isPopular: true,
    },
    {
      name: "Premium",
      price: "€999",
      description: "Advanced FX management for enterprise",
      features: [
        "Introduction video",
        "FX setup course (5 videos)",
        "Access to Live FX interbank rates",
        "Live FX cost check",
        "Automated TCA",
        "Access to FX Analytics",
        "Detailed data driven insight",
        "Visualisation and overview of cost, margins and volumes",
        "Benchmark against Just Fair Cost Index™",
        "Detailed insight on FX Cost Optimization",
        "Track achieved savings",
        "Add custom milestones, bank negotiations and track outcome",
        "Liquidity Connect",
        "Access to dedicated support person",
        "Custom advisory from Just FX experts",
        "Tailored negotiation support",
        "Access to custom reports on request",
      ],
      buttonText: "Contact sales",
      buttonVariant: "outline" as const,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in stagger-1">
            Choose the plan that's right for your business
          </p>
          
          <div className="mt-8 inline-flex items-center justify-center p-1 rounded-full bg-gray-100 animate-fade-in stagger-2">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual ? "bg-white shadow-sm text-gray-900" : "text-gray-600"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isAnnual ? "bg-white shadow-sm text-gray-900" : "text-gray-600"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual <span className="text-just-orange">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in stagger-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl border ${
                plan.isPopular
                  ? "border-just-orange shadow-lg"
                  : "border-gray-200 shadow-sm"
              } p-6 transition-all duration-300 hover:border-just-orange hover:shadow-lg premium-hover`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-just-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <div className="mt-4 text-4xl font-bold">
                  {isAnnual
                    ? `${plan.price.replace(/\d+/, (match) =>
                        (parseInt(match) * 0.8).toString()
                      )}/mo`
                    : `${plan.price}/mo`}
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  {isAnnual && plan.name !== "Free" ? "billed annually" : ""}
                </div>
                <p className="mt-4 text-sm text-gray-600 h-12">
                  {plan.description}
                </p>
              </div>
              <Button
                variant={plan.buttonVariant}
                className={`w-full mb-6 ${
                  plan.isPopular
                    ? "bg-just-orange hover:bg-just-orange-dark text-white"
                    : plan.buttonVariant === "outline"
                    ? "border-just-orange text-just-orange hover:bg-just-orange/5"
                    : ""
                }`}
              >
                {plan.buttonText}
              </Button>
              <ul className="space-y-3 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-just-orange shrink-0 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-6xl mx-auto overflow-x-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Compare all features
          </h3>
          <div className="border rounded-lg shadow-sm overflow-hidden">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th className="w-1/3">Feature</th>
                  <th>Free</th>
                  <th>Light</th>
                  <th className="featured-column">Standard</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Price per month</td>
                  <td>€0</td>
                  <td>€290</td>
                  <td className="featured-column">€590</td>
                  <td>€1290</td>
                </tr>
                <tr>
                  <td>Introduction video</td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td className="featured-column"><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>FX setup course (5 videos)</td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td className="featured-column"><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>Access to Live FX interbank rates</td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td className="featured-column"><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>Live FX cost check</td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td className="featured-column"><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>Automated TCA</td>
                  <td></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td className="featured-column"><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>Access to FX Analytics</td>
                  <td></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td className="featured-column"><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>Detailed data driven insight</td>
                  <td></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td className="featured-column"><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>Visualisation and overview of cost, margins and volumes</td>
                  <td></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td className="featured-column"><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>Benchmark against Just Fair Cost Index™</td>
                  <td></td>
                  <td></td>
                  <td className="featured-column"><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>Detailed insight on FX Cost Optimization</td>
                  <td></td>
                  <td></td>
                  <td className="featured-column"><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>Track achieved savings</td>
                  <td></td>
                  <td></td>
                  <td className="featured-column"><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>Add custom milestones, bank negotiations and track outcome</td>
                  <td></td>
                  <td></td>
                  <td className="featured-column"><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>Liquidity Connect</td>
                  <td></td>
                  <td></td>
                  <td className="featured-column"><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>Access to dedicated support person</td>
                  <td></td>
                  <td></td>
                  <td className="featured-column"></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>Custom advisory from Just FX experts</td>
                  <td></td>
                  <td></td>
                  <td className="featured-column"></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>Tailored negotiation support</td>
                  <td></td>
                  <td></td>
                  <td className="featured-column"></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
                <tr>
                  <td>Access to custom reports on request</td>
                  <td></td>
                  <td></td>
                  <td className="featured-column"></td>
                  <td><Check className="h-5 w-5 text-just-orange mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
