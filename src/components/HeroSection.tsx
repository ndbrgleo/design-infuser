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
  return <section className="relative overflow-hidden pt-28 pb-16 md:pb-20 lg:pt-36 lg:pb-32 bg-gradient-to-br from-white to-just-orange-light py-[35px]">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/80 to-transparent z-10"></div>
      
      
      
      
    </section>;
};
export default HeroSection;