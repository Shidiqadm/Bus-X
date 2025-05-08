import { motion } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-[1400px] mx-auto px-20">
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
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80" 
                alt="About Bus X" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#FF8B00] text-white p-6 rounded-lg hidden md:block">
                <p className="text-2xl font-bold mb-1">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
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
                <h3 className="text-2xl font-semibold mb-4">Welcome to Bus X</h3>
                <p className="text-gray-600 mb-4">
                  Your ultimate travel experience. Bus X is an Australian-owned and operated luxury transportation service, dedicated to providing premium travel experiences across Sydney, Hunter Valley, Blue Mountains, and Canberra. Whether it's a wedding, party, corporate event, or group trip, we ensure a stylish and seamless journey.
                </p>
                <p className="text-gray-600">
                  Our modern fleet is equipped with comfortable seating, ambient lighting, and high-quality sound systems for an unforgettable ride. Safety is our priority; our vehicles are regularly maintained, and our professional drivers ensure a smooth, timely journey.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  At Bus X, our mission is to redefine travel by combining luxury, safety, and personalized service. We strive to create journeys that are as memorable as the destinations themselves.
                </p>
                <p className="text-gray-600">
                  We're committed to providing reliable transportation solutions that cater to diverse needs while maintaining the highest standards of comfort and customer satisfaction.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-4">
                  We envision becoming the premier choice for luxury bus travel globally, setting new benchmarks for excellence in the transportation industry.
                </p>
                <p className="text-gray-600">
                  Our goal is to expand our services while maintaining our core values of exceptional service, sustainability, and creating unforgettable travel experiences for our clients.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Book Your Ride Today</h3>
                <p className="text-gray-600">
                  At Bus X, we make every trip special. Book your ride today and travel in comfort, style, and safety!
                </p>
              </div>
              
              <div className="pt-8 flex flex-wrap gap-8">
                <div className="flex items-center">
                  <div className="bg-[#FF8B00]/10 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    <i className="far fa-users text-[#FF8B00]" style={{ strokeWidth: '1.5px' }}></i>
                  </div>
                  <div>
                    <p className="font-semibold text-3xl">5000+</p>
                    <p className="text-gray-600">Happy Customers</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[#FF8B00]/10 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    <i className="far fa-bus-alt text-[#FF8B00]" style={{ strokeWidth: '1.5px' }}></i>
                  </div>
                  <div>
                    <p className="font-semibold text-3xl">25+</p>
                    <p className="text-gray-600">Luxury Buses</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[#FF8B00]/10 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    <i className="far fa-map-marker-alt text-[#FF8B00]" style={{ strokeWidth: '1.5px' }}></i>
                  </div>
                  <div>
                    <p className="font-semibold text-3xl">100+</p>
                    <p className="text-gray-600">Destinations</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
