import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1464219789935-c2d9d9eb4930?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
              alt="About Bus X" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#FF8B00] text-white p-6 rounded-lg hidden md:block">
              <p className="text-2xl font-bold mb-1">10+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                At Bus X, our mission is to redefine travel by combining luxury, safety, and personalized service. 
                We strive to create journeys that are as memorable as the destinations themselves.
              </p>
              <p className="text-gray-600">
                We're committed to providing reliable transportation solutions that cater to diverse needs 
                while maintaining the highest standards of comfort and customer satisfaction.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                We envision becoming the premier choice for luxury bus travel globally, 
                setting new benchmarks for excellence in the transportation industry.
              </p>
              <p className="text-gray-600">
                Our goal is to expand our services while maintaining our core values of exceptional service, 
                sustainability, and creating unforgettable travel experiences for our clients.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="bg-[#FF8B00]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-users text-[#FF8B00]"></i>
                </div>
                <div>
                  <p className="font-bold text-xl">5000+</p>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-[#FF8B00]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-bus-alt text-[#FF8B00]"></i>
                </div>
                <div>
                  <p className="font-bold text-xl">25+</p>
                  <p className="text-gray-600">Luxury Buses</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-[#FF8B00]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-[#FF8B00]"></i>
                </div>
                <div>
                  <p className="font-bold text-xl">100+</p>
                  <p className="text-gray-600">Destinations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
