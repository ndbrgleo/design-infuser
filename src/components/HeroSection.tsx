
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pb-20 lg:pt-36 lg:pb-32 bg-gradient-to-br from-white to-just-orange-light">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/80 to-transparent z-10"></div>
      
      <div className="container mx-auto relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-just-orange/10 text-just-orange-dark text-sm font-medium mb-6 animate-fade-in">
              ARE YOU OVERPAYING ON CORPORATE FX TRADES?
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in stagger-1">
              Reduce FX costs by up to <span className="text-just-orange">65%</span> and get your FX strategy under control
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in stagger-2">
              Instantly reveal your bank's margin on corporate FX trades. See what similar companies are being charged. And always get access to FX liquidity on fair terms. Discover a new way to track, manage and control your company's FX exposure, risk and costs — with Just Technologies' easy-to-use FX analytics software.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-3">
              <Button className="bg-just-orange hover:bg-just-orange-dark text-white px-8 py-6 rounded-md transition-all duration-200 shadow-sm hover:shadow-md">
                Book a demo
              </Button>
              <Button variant="outline" className="border-just-orange text-just-orange hover:bg-just-orange/5 px-8 py-6 rounded-md transition-all duration-200">
                Get my free trial
              </Button>
            </div>
          </div>
          
          <div 
            ref={imageRef} 
            className="relative hidden lg:block animate-fade-in stagger-2"
          >
            <div className="absolute inset-0 bg-gradient-radial from-just-orange/20 to-transparent opacity-60"></div>
            <div className="relative animate-float">
              <img
                src="/lovable-uploads/3555a641-4014-4094-a88e-659ef5300ace.png"
                alt="FX Analytics Dashboard"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 animate-float" style={{animationDelay: "1s"}}>
              <img
                src="/lovable-uploads/5adc2ddf-d177-4df3-aca2-d548fe9ded9e.png"
                alt="FX Cost Analysis"
                className="w-5/6 h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
