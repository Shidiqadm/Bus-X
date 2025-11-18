import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function JetSkiSection() {
  return (
    <section className="relative min-h-[80svh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1505867798796-639ec7e8cdf5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-20 w-full">
          <div className="flex justify-end">
            <motion.div 
              className="max-w-lg text-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Enjoy the open water with friends and families
              </h2>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Based on requirements we will arrange the Jet ski for you!
              </p>
              
              <Button
                asChild
                className="bg-[#FF8B00] hover:bg-[#FF8B00]/90 text-white px-8 py-4 rounded-full font-semibold text-lg h-auto"
              >
                <a href="#contact">
                  Book Water Activities
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 