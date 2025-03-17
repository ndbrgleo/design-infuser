
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="8" fill="#000000" />
                <path
                  d="M20.5 28H13V12H20.5C25.2 12 29 15.8 29 20C29 24.2 25.2 28 20.5 28Z"
                  fill="white"
                />
              </svg>
              <span className="text-xl font-bold">Just</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-black transition-colors">
                <span>Product</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                <div className="pt-4">
                  <div className="bg-white shadow-lg rounded-lg p-4 w-64 border border-gray-100">
                    <div className="grid gap-2">
                      <a href="/fx-analytics" className="block p-2 rounded-md hover:bg-gray-50 transition-colors">
                        FX Analytics
                      </a>
                      <a href="/fx-costs" className="block p-2 rounded-md hover:bg-gray-50 transition-colors">
                        FX Costs
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-black transition-colors">
                <span>Customers</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-black transition-colors">
                <span>Partners</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <a href="/case-studies" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Case Studies
            </a>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-black transition-colors">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Login
            </a>
            <Button className="bg-just-orange hover:bg-just-orange-dark transition-colors">
              Book a demo
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a href="/product" className="text-sm font-medium py-2">
              Product
            </a>
            <a href="/customers" className="text-sm font-medium py-2">
              Customers
            </a>
            <a href="/partners" className="text-sm font-medium py-2">
              Partners
            </a>
            <a href="/case-studies" className="text-sm font-medium py-2">
              Case Studies
            </a>
            <a href="/resources" className="text-sm font-medium py-2">
              Resources
            </a>
            <a href="/login" className="text-sm font-medium py-2">
              Login
            </a>
            <Button className="bg-just-orange hover:bg-just-orange-dark w-full">
              Book a demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
