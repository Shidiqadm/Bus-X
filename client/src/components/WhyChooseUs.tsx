import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: "fas fa-couch",
    title: "Premium Comfort",
    description: "Our vehicles feature plush seating, ample legroom, climate control, and entertainment systems for maximum comfort."
  },
  {
    icon: "fas fa-wifi",
    title: "Modern Amenities",
    description: "Stay connected with onboard Wi-Fi, USB charging ports, refreshment services, and entertainment options."
  },
  {
    icon: "fas fa-user-tie",
    title: "Professional Drivers",
    description: "Our experienced, professional drivers prioritize your safety and provide courteous service throughout your journey."
  },
  {
    icon: "fas fa-cogs",
    title: "Well-Maintained Fleet",
    description: "Regular maintenance and inspections ensure our vehicles meet the highest standards for safety and comfort."
  },
  {
    icon: "fas fa-sliders-h",
    title: "Customizable Services",
    description: "We tailor our services to your specific requirements, creating personalized travel experiences to meet your needs."
  },
  {
    icon: "fas fa-headset",
    title: "24/7 Support",
    description: "Our customer service team is available around the clock to assist with inquiries, changes, or support during your journey."
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

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-[#0D2E4D] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Our dedication to excellence sets us apart. Discover the Bus X difference that makes us the preferred choice for luxury travel.
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300"
            >
              <div className="bg-[#FF8B00] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button 
            asChild
            className="bg-[#FF8B00] hover:bg-[#FF8B00]/90 text-white px-8 py-6 rounded-full font-semibold text-lg h-auto"
          >
            <a href="#contact">Contact Us Today</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
