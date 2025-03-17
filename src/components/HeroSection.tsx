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
  return;
};
export default HeroSection;