import { motion } from "framer-motion";
import discoverImg from "../assets/discover.png"

interface CircularTourComponentProps {
  className?: string;
}

export function CircularTourComponent({ className = "" }: CircularTourComponentProps) {
  return (
    <section className={`py-16 md:py-20 bg-[#FFF8F2] ${className}`}>
      <div className="max-w-[1400px] mx-auto px-20">
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
            <div className="relative flex items-end justify-end">
              {/* Rotating text circle */}
              <div 
                className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-white rounded-full z-30 flex items-center justify-center rotate-animation"
                style={{ 
                  top: "-1rem", 
                  left: "35%", 
                  transform: "translateX(-50%)",
                  transformOrigin: "center center"
                }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#FF8B00]">
                      <i className="far fa-sync-alt text-2xl md:text-3xl" style={{ strokeWidth: '1.5px' }}></i>
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
                      <text className="text-[10px] sm:text-sm font-bold" fill="#0D2E4D">
                        <textPath xlinkHref="#circlePath" startOffset="0%">
                          MAKE A TOUR NOW • MAKE A TOUR NOW •   
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <img src={discoverImg} alt="Discover" className="object-cover" />
              </div>
              
              {/* Image circles - Updated to match Figma with larger right image */}
              {/* <div className="flex items-center gap-6 sm:gap-0 mt-10">
                <div className="w-18 h-18 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#FFF8F2] z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80" 
                    alt="City at night" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#FFF8F2] relative z-20">
                  <img 
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1421&q=80" 
                    alt="Couple traveling" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}