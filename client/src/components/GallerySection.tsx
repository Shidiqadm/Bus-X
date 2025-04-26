import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// More scalable gallery design with ability to add more images in the future
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Travel Group",
    featured: true
  },
  {
    src: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80",
    alt: "Travel Memory",
  },
  {
    src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1383&q=80",
    alt: "Venice Travel",
  },
  {
    src: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Mountain Vista",
  },
  {
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Beach Travel",
  },
  {
    src: "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Group Hiking",
  },
  {
    src: "https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Bus Travel",
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
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Separate featured image from the rest
  const featuredImg = galleryImages.find(img => img.featured) || galleryImages[0];
  const regularImages = galleryImages.filter(img => img !== featuredImg);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">joyful <span className="text-[#FF8B00]">memories</span></h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Explore some of the beautiful moments captured during our journeys. 
            Every trip with Bus X creates lasting memories.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Featured Image */}
          <motion.div 
            className="lg:w-1/2 bg-black rounded-xl overflow-hidden h-[500px] cursor-pointer relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedImage(featuredImg.src)}
          >
            <img 
              src={featuredImg.src} 
              alt={featuredImg.alt} 
              className="w-full h-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute left-6 bottom-6 z-10">
              <div className="flex flex-col items-start gap-1">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4].map((dot) => (
                    <div key={dot} className="w-2 h-2 rounded-full bg-[#FF8B00]"></div>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-white">Stunning Adventures</h3>
              </div>
            </div>
          </motion.div>
          
          {/* Grid of regular images - Now more scalable */}
          <motion.div 
            className="lg:w-1/2 grid grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {regularImages.slice(0, 4).map((image, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`relative rounded-xl overflow-hidden ${
                  index === 1 ? "bg-[#FF8B00]" : "bg-black"
                } cursor-pointer h-[235px]`}
                onClick={() => setSelectedImage(image.src)}
              >
                {index === 1 ? (
                  <div className="h-full w-full flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center px-4">Create Memorable Journeys</h3>
                  </div>
                ) : (
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                  />
                )}
                
                {/* Dots for aesthetic */}
                {index === 0 && (
                  <div className="absolute right-4 bottom-4 flex flex-col gap-1">
                    {[1, 2, 3, 4].map((dot) => (
                      <div key={dot} className="w-1.5 h-1.5 rounded-full bg-[#FF8B00]"></div>
                    ))}
                  </div>
                )}
                
                {/* Dots for the orange block */}
                {index === 1 && (
                  <div className="absolute left-4 top-4 flex flex-col gap-1">
                    {[1, 2, 3, 4].map((dot) => (
                      <div key={dot} className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional scalable grid for more images */}
        {regularImages.length > 4 && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6"
          >
            {regularImages.slice(4).map((image, index) => (
              <motion.div
                key={index + 4}
                variants={item}
                className="rounded-xl overflow-hidden bg-black cursor-pointer h-52"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <DialogTitle>
            <VisuallyHidden>Gallery Image</VisuallyHidden>
          </DialogTitle>
          <img 
            src={selectedImage || ''} 
            alt="Gallery Preview"
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}
