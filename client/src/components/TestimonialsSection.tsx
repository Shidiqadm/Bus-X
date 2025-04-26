import { motion } from "framer-motion";

const testimonials = [
  {
    content: "Our corporate event transportation was flawless. The buses were immaculate, drivers professional, and the entire experience exceeded our expectations. Will definitely use again for our annual events.",
    name: "Robert Johnson",
    role: "Event Coordinator",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    content: "Bus X made our wedding day transportation stress-free. The luxury buses were beautiful, on time, and the drivers were so accommodating. Our guests were impressed and comfortable.",
    name: "Sarah Williams",
    role: "Wedding Client",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    content: "Our family tour was exceptional with Bus X. The kids loved the entertainment options, and we appreciated the comfortable seating and frequent stops. The driver was knowledgeable and friendly.",
    name: "Michael Garcia",
    role: "Family Traveler",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4.5
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
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Hear from our satisfied customers about their experiences with Bus X.
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl shadow-md p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-[#FF8B00] text-5xl absolute -top-5 left-6 opacity-20">
                <i className="fas fa-quote-left"></i>
              </div>
              <div className="mb-6">
                <div className="flex text-[#FF8B00] mb-2">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <i className="fas fa-star-half-alt"></i>
                  )}
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
