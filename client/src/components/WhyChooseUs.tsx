import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Updated features list as requested
const features = [
  {
    icon: "far fa-bus",
    title: "White Clean Exterior",
    description: "Our fleet features pristine, well-maintained exteriors that provide both a professional appearance and enhanced visibility on the road."
  },
  {
    icon: "far fa-snowflake",
    title: "Air Conditioned",
    description: "Climate-controlled interiors ensure your comfort regardless of outside weather conditions, with adjustable settings for perfect temperature."
  },
  {
    icon: "far fa-life-ring",
    title: "Seatbelt Fitted",
    description: "Safety is our priority with modern seatbelts installed in all seats, meeting the highest safety standards for your peace of mind."
  },
  {
    icon: "far fa-suitcase",
    title: "Luggage Bays",
    description: "Spacious luggage compartments provide ample storage space for all passenger belongings, keeping the cabin uncluttered and comfortable."
  },
  {
    icon: "far fa-window-maximize",
    title: "Tinted Windows",
    description: "UV-protected tinted windows enhance privacy while reducing glare and heat, creating a more pleasant travel environment."
  },
  {
    icon: "far fa-music",
    title: "CD/PA Systems",
    description: "State-of-the-art audio systems for entertainment and clear announcements throughout your journey, enhancing the travel experience."
  },
  {
    icon: "far fa-door-open",
    title: "Automatic Doors",
    description: "Convenient and safe automatic door systems for smooth boarding and disembarking, operated by our professional drivers."
  },
  {
    icon: "far fa-plus-circle",
    title: "More & More",
    description: "Additional amenities including USB charging ports, reading lights, reclining seats, and other comforts to elevate your travel experience."
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
      <div className="max-w-[1400px] mx-auto px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white bg-opacity-10 rounded-xl p-5 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300"
            >
              <div className="bg-[#FF8B00] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <i className={`${feature.icon} text-white text-xl`} style={{ strokeWidth: '1.5px' }}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Button 
            asChild
            className="bg-[#FF8B00] hover:bg-[#FF8B00]/90 text-white px-6 py-2 rounded-full font-semibold h-auto"
          >
            <a href="#contact">Contact Us Today</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
