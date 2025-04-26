import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 bg-white ${scrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-[#FF8B00] text-3xl font-bold">Bus<span className="text-[#0D2E4D]">X</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium hover:text-[#FF8B00] transition duration-300">Home</a>
            <a href="#about" className="font-medium hover:text-[#FF8B00] transition duration-300">About</a>
            <a href="#services" className="font-medium hover:text-[#FF8B00] transition duration-300">Services</a>
            <a href="#gallery" className="font-medium hover:text-[#FF8B00] transition duration-300">Gallery</a>
            <a href="#contact" className="font-medium hover:text-[#FF8B00] transition duration-300">Contact</a>
            <Button 
              asChild 
              className="bg-[#FF8B00] hover:bg-[#FF8B00]/90 text-white rounded-full font-semibold"
            >
              <a href="#contact">Book Now</a>
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-[#0D2E4D] text-2xl" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden py-4 bg-white ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4">
            <a href="#home" className="font-medium px-4 hover:text-[#FF8B00] transition duration-300" onClick={closeMenu}>Home</a>
            <a href="#about" className="font-medium px-4 hover:text-[#FF8B00] transition duration-300" onClick={closeMenu}>About</a>
            <a href="#services" className="font-medium px-4 hover:text-[#FF8B00] transition duration-300" onClick={closeMenu}>Services</a>
            <a href="#gallery" className="font-medium px-4 hover:text-[#FF8B00] transition duration-300" onClick={closeMenu}>Gallery</a>
            <a href="#contact" className="font-medium px-4 hover:text-[#FF8B00] transition duration-300" onClick={closeMenu}>Contact</a>
            <Button 
              asChild 
              className="bg-[#FF8B00] hover:bg-[#FF8B00]/90 text-white rounded-full font-semibold mx-4"
              onClick={closeMenu}
            >
              <a href="#contact">Book Now</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
