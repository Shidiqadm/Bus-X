import { motion } from "framer-motion";

const services = [
  {
    icon: "far fa-medal",
    title: "Premium Experience",
    description: "Luxurious travel with top-notch amenities and personalized service for your comfort."
  },
  {
    icon: "far fa-shield-alt",
    title: "Safety First",
    description: "Your safety is our priority with expert drivers and well-maintained vehicles."
  },
  {
    icon: "far fa-route",
    title: "Diverse Destinations",
    description: "From city tours to remote getaways, we'll take you wherever your heart desires."
  },
  {
    icon: "far fa-clock",
    title: "Punctuality",
    description: "We value your time and ensure our services are always on schedule."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export function WelcomeSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Welcome to <span className="text-[#FF8B00]">Bus X</span></h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            We are dedicated to providing premium travel experiences with our luxurious fleet of buses. 
            Our commitment to excellence, comfort, and safety makes every journey memorable.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-white rounded-xl p-6 text-center transition duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="bg-[#FF8B00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${service.icon} text-[#FF8B00] text-xl`} style={{ strokeWidth: '1.5px' }}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
