import { motion } from "framer-motion";
import { useRef } from "react";
import busImage from "../assets/gallery-renamed/adventure_travel.jpeg";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" ref={containerRef}>
          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-12rem)] lg:flex lg:items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src={busImage} 
                alt="About Bus X" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-[#FF8B00] text-white p-6 rounded-lg hidden md:block">
                <p className="text-2xl font-bold mb-1">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div> */}
            </motion.div>
          </div>
          
          <div className="lg:min-h-[100vh]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <h2 className="text-4xl font-bold">About Us</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Welcome to Bus X Travel – a family-run business dedicated to turning every journey into a celebration!</h3>
                <p className="text-gray-600 mb-4">
                  At Bus X Travel, we’re not just a bus service; we’re a family bringing fun, comfort, and unforgettable memories to your trips. Whether it’s a party, airport run, cruise trip, wedding, or a full-day tour, we make sure every ride is lively, safe, and full of good vibes.
                </p>
                <p className="text-gray-600 mb-4">
                  Our 21-seat party bus comes fully loaded with lights, music, air-conditioning, and  perfect for friends, family, or any celebration on the move. Being a family business, we care about every detail – from smooth rides to happy passengers – because your experience matters to us like it matters to our own family.
                </p>
                <p className="text-gray-600">
                  With Bus X Travel, your trip isn’t just a ride – it’s a party, a memory, and a story you’ll remember. Your trip. Your crew. Your vibe. Hop in, turn up the music, and let’s make every journey unforgettable 🎶
                </p>
              </div>
              
              {/* <div>
                <h3 className="text-2xl font-semibold mb-4">Book Your Ride Today</h3>
                <p className="text-gray-600">
                  At Bus X, we make every trip special. Book your ride today and travel in comfort, style, and safety!
                </p>
              </div> */}
              
              {/* <div className="pt-8 flex flex-wrap gap-8">
                <div className="flex items-center">
                  <div className="bg-[#FF8B00]/10 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-regular fa-user" style={{ strokeWidth: '1.5px', color: '#FF8B00' }}></i>
                  </div>
                  <div>
                    <p className="font-semibold text-3xl">5000+</p>
                    <p className="text-gray-600">Happy Customers</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[#FF8B00]/10 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-solid fa-van-shuttle" style={{ strokeWidth: '1.5px', color: '#FF8B00' }}></i>
                  </div>
                  <div>
                    <p className="font-semibold text-3xl">25+</p>
                    <p className="text-gray-600">Luxury Buses</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[#FF8B00]/10 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-solid fa-location-dot" style={{ strokeWidth: '1.5px', color: '#FF8B00' }}></i>
                  </div>
                  <div>
                    <p className="font-semibold text-3xl">100+</p>
                    <p className="text-gray-600">Destinations</p>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
