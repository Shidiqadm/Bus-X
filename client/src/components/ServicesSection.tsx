import { motion } from "framer-motion";

const services = [
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80",
    icon: "fas fa-plane",
    title: "Airport Service",
    description: "Seamless airport transfers with punctual pick-up and drop-off services. Our spacious buses can accommodate groups of any size, making travel to and from airports stress-free."
  },
  {
    image: "https://images.unsplash.com/photo-1519741347686-c1e331c20a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    icon: "fas fa-glass-cheers",
    title: "Special Occasions",
    description: "Make your special day even more memorable with our luxury transportation for weddings, corporate events, and other celebrations. Customized services available."
  },
  {
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1421&q=80",
    icon: "fas fa-map-marked-alt",
    title: "Tours & Trips",
    description: "Explore incredible destinations with our guided tours and custom trip packages. From weekend getaways to extended vacations, we plan it all for you."
  },
  {
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1564&q=80",
    icon: "fas fa-ship",
    title: "Cruise Pickup",
    description: "Reliable transportation to and from cruise terminals. Start and end your cruise vacation with our comfortable and punctual service for individuals and groups."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            We offer a comprehensive range of premium transportation services tailored to meet your specific needs.
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>
              <div className="md:w-3/5 p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-[#FF8B00]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className={`${service.icon} text-[#FF8B00] text-xl`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href="#contact" 
                  className="text-[#FF8B00] font-semibold flex items-center group"
                >
                  Book Now{" "}
                  <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
