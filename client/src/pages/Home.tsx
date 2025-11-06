import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { WelcomeSection } from "@/components/WelcomeSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { ServicesSection } from "@/components/ServicesSection";
// import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
// import { CircularTourComponent } from "@/components/CircularTourComponent";
// import { JetSkiSection } from "@/components/JetSkiSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");
      
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: offsetTop - 80, // Offset for fixed header
            behavior: "smooth"
          });
        }
      }
    };

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener("click", handleLinkClick as EventListener);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener("click", handleLinkClick as EventListener);
      });
    };
  }, []);

  return (
    <div className="bg-white text-dark">
      <Navbar />
      <HeroCarousel />
      <WelcomeSection />
      <AboutSection />
      {/* <CircularTourComponent /> */}
      <GallerySection />
      <ServicesSection />
      {/* <WhyChooseUs /> */}
      {/* <TestimonialsSection /> */}
      {/* <JetSkiSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
