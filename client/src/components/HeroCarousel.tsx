import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type CarouselItem = {
  image: string;
  secondaryImage?: string;
  icon?: string;
  title: string;
  subtitle?: string;
  description: string;
  bgColor: string;
  cta: {
    text: string;
    link: string;
  };
};

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const carouselItems: CarouselItem[] = [
    {
      image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Your joyful",
      subtitle: "trip",
      icon: "🚌",
      description: "is waiting",
      bgColor: "bg-[#FFF8F2]",
      cta: {
        text: "Book Your Journey",
        link: "#contact"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80",
      title: "TRAVEL",
      subtitle: "with us",
      description: "WITH LOW PRICE YOU CAN GO ANYWHERE",
      bgColor: "bg-white",
      cta: {
        text: "Explore Services",
        link: "#services"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
      title: "We offer",
      description: "transportation for wedding events",
      bgColor: "bg-[#FFF8F2]",
      cta: {
        text: "Our Wedding Services",
        link: "#services"
      }
    }
  ];

  useEffect(() => {
    startCarouselInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startCarouselInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 6000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    startCarouselInterval();
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    startCarouselInterval();
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % carouselItems.length;
    setCurrentIndex(newIndex);
    startCarouselInterval();
  };

  return (
    <section id="home" className="h-screen relative overflow-hidden pt-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`${carouselItems[currentIndex].bgColor} h-full w-full`}
        >
          <div className="container h-full mx-auto px-4 relative">
            <div className="flex flex-col md:flex-row h-full items-center">
              {/* Content side */}
              <motion.div 
                className="w-full md:w-1/2 text-left pt-20 md:pt-0 z-10"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="max-w-lg">
                  {carouselItems[currentIndex].subtitle ? (
                    <>
                      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D2E4D] mb-2 leading-tight">
                        {carouselItems[currentIndex].title}
                      </h1>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FF8B00] italic">
                          {carouselItems[currentIndex].subtitle}
                        </span>
                        {carouselItems[currentIndex].icon && (
                          <span className="text-4xl">
                            {carouselItems[currentIndex].icon}
                          </span>
                        )}
                      </div>
                    </>
                  ) : (
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D2E4D] mb-2 leading-tight">
                      {carouselItems[currentIndex].title}
                    </h1>
                  )}
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-[#0D2E4D] mb-6">
                    {carouselItems[currentIndex].description}
                  </h2>
                  
                  <p className="text-gray-600 mb-8 max-w-md">
                    Unrivaled expertise for unique travel experiences. We're here to take you there dream travels.
                  </p>
                  
                  <Button 
                    asChild
                    className="bg-[#FF8B00] hover:bg-[#FF8B00]/90 text-white px-8 py-6 rounded-full font-semibold text-lg h-auto"
                  >
                    <a href={carouselItems[currentIndex].cta.link}>
                      {carouselItems[currentIndex].cta.text}
                    </a>
                  </Button>
                </div>
              </motion.div>
              
              {/* Image side */}
              <motion.div 
                className="w-full md:w-1/2 h-full relative flex items-center justify-center md:justify-end"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {currentIndex === 1 ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-[#0D2E4D]"></div>
                    <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[#0D2E4D]">
                      <img 
                        src={carouselItems[currentIndex].image}
                        alt="Travel with Bus X" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-0 right-0 w-20 h-20 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#0D2E4D]"></div>
                    </div>
                    <div className="absolute bottom-1/4 left-0 w-20 h-20 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full border-2 border-[#0D2E4D]"></div>
                    </div>
                    <div className="absolute top-1/3 left-1/4 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#FF8B00]"></div>
                    </div>
                  </div>
                ) : currentIndex === 2 ? (
                  <div className="relative w-full h-3/4 flex items-center justify-center">
                    <div className="rounded-t-full w-72 h-80 md:w-80 md:h-96 overflow-hidden border-2 border-[#0D2E4D]">
                      <img 
                        src={carouselItems[currentIndex].image}
                        alt="Wedding Transportation" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -z-10 top-1/2 -translate-y-1/2 right-1/4 w-40 h-40 rounded-full bg-white"></div>
                    <div className="absolute bottom-0 left-0 text-[#FF8B00]">
                      <i className="fas fa-fan text-3xl"></i>
                    </div>
                    <div className="absolute top-0 right-10">
                      <i className="fas fa-leaf text-green-500 text-2xl"></i>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-3/4 flex items-center justify-center">
                    <img 
                      src={carouselItems[currentIndex].image}
                      alt="Joyful Trip" 
                      className="w-3/4 h-auto object-cover rounded-lg"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-[#FF8B00]/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#FF8B00]/40"></div>
                    </div>
                    <div className="absolute top-1/4 -left-2 w-16 h-16 rounded-full border border-[#FF8B00]"></div>
                    <div className="absolute top-10 right-1/3 w-4 h-4 rounded-full bg-[#FF8B00]"></div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Carousel Controls */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2 z-30">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              currentIndex === index 
                ? "bg-[#FF8B00] w-8" 
                : "bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0D2E4D] text-4xl z-30 hover:text-[#FF8B00] transition-colors duration-300"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#0D2E4D] text-4xl z-30 hover:text-[#FF8B00] transition-colors duration-300"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </section>
  );
}
