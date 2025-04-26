import { motion } from "framer-motion";

interface CircularTourComponentProps {
  className?: string;
}

export function CircularTourComponent({ className = "" }: CircularTourComponentProps) {
  return (
    <section className={`py-16 md:py-20 bg-[#FFF8F2] ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center lg:text-left mb-8 lg:mb-0 max-w-md md:max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Discover beautiful destinations with <span className="text-[#FF8B00]">our guided tours</span>
          </motion.h2>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative flex justify-center">
              {/* Rotating text circle */}
              <div 
                className="absolute w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-full z-20 flex items-center justify-center rotate-animation"
                style={{ 
                  top: "-2rem", 
                  left: "50%", 
                  transform: "translateX(-50%)",
                  transformOrigin: "center center"
                }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#FF8B00]">
                      <i className="fas fa-exchange-alt text-xl md:text-2xl"></i>
                    </div>
                  </div>
                  
                  {/* The circular text */}
                  <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <defs>
                        <path 
                          id="circlePath" 
                          d="M50,15 a35,35 0 1,1 -0.1,0 z" 
                          fill="transparent"
                        />
                      </defs>
                      <text className="text-[9px] sm:text-xs font-bold" fill="#0D2E4D">
                        <textPath xlinkHref="#circlePath" startOffset="0%">
                          MAKE A TOUR NOW • MAKE A TOUR NOW •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Image circles */}
              <div className="flex items-center gap-2 sm:gap-4 mt-6">
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#FFF8F2] shadow-lg z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80" 
                    alt="City at night" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#FFF8F2] shadow-lg -ml-8 sm:-ml-10 md:-ml-16 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1421&q=80" 
                    alt="Couple traveling" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="flex justify-center mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#services"
            className="bg-[#FF8B00] hover:bg-[#FF8B00]/90 text-white px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-all duration-300 text-sm md:text-base"
          >
            <span>Explore Our Tours</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}