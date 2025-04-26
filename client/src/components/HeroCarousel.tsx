import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type CarouselItem = {
  image: string;
  title: string;
  description: string;
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
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Experience Luxury Travel",
      description: "Discover the comfort and elegance of traveling with Bus X",
      cta: {
        text: "Book Your Journey",
        link: "#contact"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      title: "Journey to Amazing Destinations",
      description: "Let us take you to the most breathtaking locations in comfort",
      cta: {
        text: "Explore Services",
        link: "#services"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      title: "Travel in Style and Comfort",
      description: "Our luxury fleet ensures every journey is as enjoyable as the destination",
      cta: {
        text: "Our Advantages",
        link: "#why-choose-us"
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
    }, 5000);
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
      <div className="h-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D2E4D]/60 to-[#0D2E4D]/30 z-10"></div>
            <img 
              src={carouselItems[currentIndex].image} 
              alt="Luxury Travel" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="container mx-auto px-4 text-center">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-5xl md:text-6xl font-bold text-white mb-6"
                >
                  {carouselItems[currentIndex].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto"
                >
                  {carouselItems[currentIndex].description}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Button 
                    asChild
                    className="bg-[#FF8B00] hover:bg-[#FF8B00]/90 text-white px-8 py-6 rounded-full font-semibold text-lg h-auto"
                  >
                    <a href={carouselItems[currentIndex].cta.link}>
                      {carouselItems[currentIndex].cta.text}
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Carousel Controls */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2 z-30">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full bg-white transition duration-300 ${
              currentIndex === index ? "opacity-100" : "opacity-50 hover:opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-30 hover:text-[#FF8B00] transition-colors duration-300"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-30 hover:text-[#FF8B00] transition-colors duration-300"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </section>
  );
}
