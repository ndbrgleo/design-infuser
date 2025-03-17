
import React from "react";

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-just-orange to-just-orange-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Unfair price discrimination is common in corporate FX deals
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20 shadow-lg transition-all duration-300 hover:transform hover:scale-105 animate-fade-in stagger-1">
            <h3 className="text-xl font-semibold mb-4">A typical company using FX Analytics achieves</h3>
            <p className="text-4xl font-bold mb-2">8-15x</p>
            <p className="text-xl">return on investment</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20 shadow-lg transition-all duration-300 hover:transform hover:scale-105 animate-fade-in stagger-2">
            <h3 className="text-xl font-semibold mb-4">Wells Fargo caught defrauding</h3>
            <p className="text-4xl font-bold mb-2">771</p>
            <p className="text-xl">corporate FX customers by US gov.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20 shadow-lg transition-all duration-300 hover:transform hover:scale-105 animate-fade-in stagger-3">
            <h3 className="text-xl font-semibold mb-4">Companies that don't benchmark pay</h3>
            <p className="text-4xl font-bold mb-2">100-150%</p>
            <p className="text-xl">more than companies that do</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
