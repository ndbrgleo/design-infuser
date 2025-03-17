
import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ClientLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  // Generate placeholder logos with different shades
  const logos = [
    { name: "Mills", color: "#e85d04" },
    { name: "Hyundai", color: "#1a759f" },
    { name: "Deloitte", color: "#1e1e1e" },
    { name: "Sirend", color: "#1e3a8a" },
    { name: "Microsoft", color: "#107c10" },
    { name: "Adobe", color: "#ff0000" },
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in">
            Trusted by CFOs, treasurers &<br />board members at over 100 global companies
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 flex items-center">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center ml-2 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-8 py-8 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="pl-16"></div> {/* Spacer for left control */}
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-24 min-w-[200px] px-8 animate-fade-in premium-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="w-full h-full rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${logo.color}10` }}
                >
                  <span className="font-bold text-lg" style={{ color: logo.color }}>
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
            <div className="pr-16"></div> {/* Spacer for right control */}
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 flex items-center justify-end">
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center mr-2 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 2 ? "bg-gray-700" : "bg-just-orange"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
