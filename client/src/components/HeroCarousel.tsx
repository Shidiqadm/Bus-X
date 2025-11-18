import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import joyfulTrip from "../assets/Hero image.png";
import van from "../assets/van.png";
import music from "../assets/musicfest.png";
import busTravel from "../assets/gallery-renamed/snow_party.jpeg";

type CarouselItem = {
  image: string;
  secondaryImage?: string;
  icon?: string;
  title: string;
  subtitle?: string;
  description: string;
  tagline?: string;
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
      image: "https://images.pexels.com/photos/31726433/pexels-photo-31726433.jpeg",
      title: "Your Trusted Bus and Tour Partner in NSW",
      description: "Comfortable, reliable, and affordable travel for all your trips.",
      bgColor: "bg-[#0D2E4D]",
      cta: {
        text: "Get a quote",
        link: "#contact",
      },
    },
    {
      image: joyfulTrip,
      title: "Your joyful",
      subtitle: "trip",
      icon: van,
      description: "is waiting",
      tagline: "YOUR RIDE | YOUR TUNE | YOUR TIME",
      bgColor: "bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900",
      cta: {
        text: "Get a quote",
        link: "#contact",
      },
    },
    // {
    //   image:
    //   "https://images.unsplash.com/photo-1620119948054-6ebec4500f05?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     // "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80",
    //   title: "TRAVEL",
    //   subtitle: "with us",
    //   description: "WITH LOW PRICE YOU CAN GO ANYWHERE",
    //   bgColor: "bg-white",
    //   cta: {
    //     text: "Explore Services",
    //     link: "#services",
    //   },
    // },
    // {
    //   image:
    //     // "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    //     "https://plus.unsplash.com/premium_photo-1729096861671-442f5d4402f7?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   title: "We offer",
    //   description: "transportation for wedding events",
    //   bgColor: "bg-[#FFF8F2]",
    //   cta: {
    //     text: "Our Wedding Services",
    //     link: "#services",
    //   },
    // },
    {
      image: busTravel,
      title: "Family Running Business",
      description: "Your trusted partner for comfortable and reliable bus services across NSW",
      bgColor: "bg-[#FFF8F2]",
      cta: {
        text: "Get a quote",
        link: "#contact",
      },
    },
    // {
    //   image: music,
    //   title: "joyful",
    //   subtitle: "music fest",
    //   description: "EXPERIENCE THE BEST LIVE PERFORMANCES",
    //   bgColor: "bg-black",
    //   cta: {
    //     text: "Book Festival Transport",
    //     link: "#contact",
    //   },
    // },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1564633351631-e85bd59a91af?q=80&w=3496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   title: "Enjoy big wave",
    //   subtitle: "with our jet ski",
    //   description: "EXPERIENCE THE THRILL OF THE OCEAN",
    //   bgColor: "bg-[#E0F7FF]",
    //   cta: {
    //     text: "Book Water Activities",
    //     link: "#contact",
    //   },
    // },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    //   title: "amazing",
    //   subtitle: "travels",
    //   description: "DISCOVER THE WORLD'S BEST DESTINATIONS",
    //   bgColor: "bg-[#FFF8F2]",
    //   cta: {
    //     text: "Start Your Adventure",
    //     link: "#services",
    //   },
    // },
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
    const newIndex =
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    startCarouselInterval();
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % carouselItems.length;
    setCurrentIndex(newIndex);
    startCarouselInterval();
  };

  // Check if current slide should have full-screen image with overlay
  const isFullScreenSlide = [0].includes(currentIndex);

  return (
    <section id="home" className={`relative overflow-hidden ${isFullScreenSlide ? 'pt-0' : 'pt-16 sm:pt-20'} ${isFullScreenSlide ? '' : carouselItems[currentIndex].bgColor}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full flex items-center relative ${
            isFullScreenSlide ? 'min-h-[100dvh]' : ''
          }`}
          style={
            isFullScreenSlide
              ? {
                  backgroundImage: `url(${carouselItems[currentIndex].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }
              : {}
          }
        >
          {/* Overlay for full-screen slides */}
          {isFullScreenSlide && (
            <div className="absolute inset-0 bg-black/60 md:bg-black/50 z-10"></div>
          )}

          <div className={`max-w-[1400px] mx-auto px-4 sm:px-6 md:px-20 py-6 md:py-20 relative ${isFullScreenSlide ? 'z-20' : ''}`}>
            {isFullScreenSlide ? (
              // Full-screen layout with text overlay
              <div className="flex flex-col items-center justify-center text-center min-h-[100dvh]">
                <motion.div
                  className="max-w-4xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  {carouselItems[currentIndex].subtitle ? (
                    <>
                      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-3 leading-tight text-white">
                        {carouselItems[currentIndex].title}
                      </h1>
                      <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-normal text-[#FF8B00] italic" style={{ fontFamily: "'Red Bright Demo', italic" }}>
                          {carouselItems[currentIndex].subtitle}
                        </span>
                      </div>
                    </>
                  ) : (
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight text-white">
                      {carouselItems[currentIndex].title}
                    </h1>
                  )}

                  <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">
                    {carouselItems[currentIndex].description}
                  </h2>


                  <Button
                    asChild
                    className="bg-[#FF8B00] hover:bg-[#FF8B00]/90 text-white px-6 py-3 sm:px-10 sm:py-5 rounded-full font-semibold text-base sm:text-xl h-auto"
                  >
                    <a href={carouselItems[currentIndex].cta.link}>
                      {carouselItems[currentIndex].cta.text}
                    </a>
                  </Button>
                </motion.div>
              </div>
            ) : (
              // Original split layout for other slides
              <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Content side */}
                <motion.div
                  className="w-full md:w-1/2 text-center md:text-left md:pr-8 z-10 mb-10 md:mb-0"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="max-w-xl mx-auto md:mx-0">
                    {carouselItems[currentIndex].subtitle ? (
                      <>
                        <h1
                          className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight ${
                            currentIndex === 2 ? "text-[#0D2E4D]" : currentIndex === 1 ? "text-white" : "text-[#0D2E4D]"
                          }`}
                        >
                          {carouselItems[currentIndex].title}
                        </h1>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                          <span className={`text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-normal italic ${
                            currentIndex === 1 ? "text-[#FF8B00]" : "text-[#FF8B00]"
                          }`} style={{ fontFamily: "'Red Bright Demo', italic", textShadow: currentIndex === 1 ? '0 0 30px rgba(255, 139, 0, 0.6)' : 'none' }}>
                            {carouselItems[currentIndex].subtitle}
                          </span>
                          {carouselItems[currentIndex].icon && (
                            <img
                              src={carouselItems[currentIndex].icon}
                              alt="Van"
                              className="w-40 h-30"
                            />
                          )}
                        </div>
                      </>
                    ) : (
                      <h1
                        className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight ${
                          currentIndex === 2 ? "text-[#0D2E4D]" : "text-[#0D2E4D]"
                        }`}
                      >
                        {carouselItems[currentIndex].title}
                      </h1>
                    )}

                    <h2
                      className={`text-base sm:text-xl md:text-2xl lg:text-3xl font-medium mb-8 ${
                        currentIndex === 2 ? "text-[#0D2E4D]" : currentIndex === 1 ? "text-white" : "text-[#0D2E4D]"
                      }`}
                    >
                      {carouselItems[currentIndex].description}
                    </h2>

                    {carouselItems[currentIndex].tagline && (
                      <p
                        className={`mb-8 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider ${
                          currentIndex === 2 ? "text-gray-300" : "text-[#FF8B00]"
                        }`}
                        style={{ textShadow: currentIndex === 1 ? '0 0 20px rgba(255, 139, 0, 0.5)' : 'none' }}
                      >
                        {carouselItems[currentIndex].tagline}
                      </p>
                    )}


                    <Button
                      asChild
                      className="bg-[#FF8B00] hover:bg-[#FF8B00]/90 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg h-auto mx-auto md:mx-0"
                    >
                      <a href={carouselItems[currentIndex].cta.link}>
                        {carouselItems[currentIndex].cta.text}
                      </a>
                    </Button>
                  </div>
                </motion.div>

                {/* Image side */}
                <motion.div
                  className="w-full md:w-1/2 relative flex items-center justify-center md:justify-end md:h-full"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  {/* All images should be large like the 1st slide */}
                  <div className="relative w-full h-64 sm:h-80 md:h-4/6 flex items-center justify-center">
                    <div className="w-[85%] h-full overflow-hidden rounded-lg">
                      <img
                        src={carouselItems[currentIndex].image}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Decorative elements based on slide */}
                    {currentIndex === 1 && (
                      <div className="hidden md:block">
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-[#FF8B00]/20 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#FF8B00]/40"></div>
                        </div>
                        <div className="absolute top-1/4 -left-2 w-12 h-12 rounded-full border border-[#FF8B00]"></div>
                        <div className="absolute top-10 right-1/3 w-3 h-3 rounded-full bg-[#FF8B00]"></div>
                      </div>
                    )}
                    
                    {currentIndex === 2 && (
                      <div className="hidden md:block">
                        <div className="absolute top-0 right-0 w-16 h-16 flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-white"></div>
                        </div>
                        <div className="absolute bottom-1/4 left-0 w-16 h-16 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="absolute top-1/3 left-1/4 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-[#FF8B00]"></div>
                        </div>
                      </div>
                    )}
                    
                    {currentIndex === 5 && (
                      <div className="hidden md:block">
                        <div className="absolute top-[30%] -left-4 w-16 h-16 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-[#0D2E4D]/20 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full bg-[#0D2E4D]/50"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Carousel Controls */}
      <div className={`${isFullScreenSlide ? 'absolute bottom-3 left-0 right-0' : 'mt-6'} flex justify-center space-x-2 z-30 md:absolute md:bottom-3 md:left-0 md:right-0`}>
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition duration-300 ${
              currentIndex === index
                ? "bg-[#FF8B00] w-6"
                : "bg-gray-400 hover:bg-gray-600 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <button
        className={`hidden md:block absolute left-4 md:left-20 top-1/2 transform -translate-y-1/2 text-3xl md:text-4xl z-30 hover:text-[#FF8B00] transition-colors duration-300 ${
          isFullScreenSlide || currentIndex === 2 ? "text-[#0D2E4D]" : "text-[#0D2E4D]"
        }`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className={`hidden md:block absolute right-4 md:right-20 top-1/2 transform -translate-y-1/2 text-3xl md:text-4xl z-30 hover:text-[#FF8B00] transition-colors duration-300 ${
          isFullScreenSlide || currentIndex === 2 ? "text-[#0D2E4D]" : "text-[#0D2E4D]"
        }`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </section>
  );
}
