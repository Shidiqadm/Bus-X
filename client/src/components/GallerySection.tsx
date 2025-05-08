import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Import gallery images
import galleryImage1 from "../assets/gallery/WhatsApp Image 2025-05-08 at 11.43.07 AM.jpeg";
import galleryImage2 from "../assets/gallery/WhatsApp Image 2025-05-08 at 11.43.07 AM (1).jpeg";
import galleryImage3 from "../assets/gallery/WhatsApp Image 2025-05-08 at 11.43.07 AM (2).jpeg";
import galleryImage4 from "../assets/gallery/WhatsApp Image 2025-05-08 at 11.43.08 AM.jpeg";
import galleryImage5 from "../assets/gallery/WhatsApp Image 2025-05-08 at 11.43.08 AM (1).jpeg";
import galleryImage6 from "../assets/gallery/WhatsApp Image 2025-05-08 at 11.43.08 AM (2).jpeg";
import galleryImage7 from "../assets/gallery/WhatsApp Image 2025-05-08 at 11.43.08 AM (3).jpeg";
import galleryImage8 from "../assets/gallery/WhatsApp Image 2025-05-08 at 11.43.09 AM.jpeg";
import galleryImage9 from "../assets/gallery/WhatsApp Image 2025-05-08 at 11.43.09 AM (1).jpeg";
import galleryImage10 from "../assets/gallery/WhatsApp Image 2025-05-08 at 11.43.10 AM.jpeg";
import galleryImage11 from "../assets/gallery/WhatsApp Image 2025-05-08 at 11.43.10 AM (1).jpeg";
import galleryImage12 from "../assets/gallery/WhatsApp Image 2025-05-08 at 11.43.10 AM (2).jpeg";

// Gallery items with both images and videos
const galleryItems = [
  {
    src: galleryImage1,
    alt: "Travel Experience",
    type: "image"
  },
  {
    src: galleryImage2,
    alt: "Travel Journey",
    type: "image"
  },
  {
    src: galleryImage3,
    alt: "Luxury Travel",
    type: "image"
  },
  {
    src: galleryImage4,
    alt: "Travel Memory",
    type: "image"
  },
  {
    src: galleryImage5,
    alt: "Tourist Experience",
    type: "image"
  },
  {
    src: galleryImage6,
    alt: "Travel Adventure",
    type: "image"
  },
  {
    src: galleryImage7,
    alt: "Group Travel",
    type: "image"
  },
  {
    src: galleryImage8,
    alt: "Bus Tour",
    type: "image"
  },
  {
    src: galleryImage9,
    alt: "Travel Destination",
    type: "image"
  },
  {
    src: galleryImage10,
    alt: "Scenic View",
    type: "image"
  },
  {
    src: galleryImage11,
    alt: "Cultural Experience",
    type: "image"
  },
  {
    src: galleryImage12,
    alt: "Tourist Attraction",
    type: "image"
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
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);
  const [lightboxItem, setLightboxItem] = useState<(typeof galleryItems)[0] | null>(null);
  const autoChangeRef = useRef<number | null>(null);
  
  useEffect(() => {
    // Auto-change preview every 5 seconds
    startAutoChange();
    
    return () => {
      if (autoChangeRef.current) {
        clearInterval(autoChangeRef.current);
      }
    };
  }, []);
  
  const startAutoChange = () => {
    if (autoChangeRef.current) {
      clearInterval(autoChangeRef.current);
    }
    
    autoChangeRef.current = window.setInterval(() => {
      setCurrentPreviewIndex(prev => (prev + 1) % galleryItems.length);
    }, 5000);
  };
  
  const handleThumbnailClick = (index: number) => {
    setCurrentPreviewIndex(index);
    startAutoChange(); // Reset timer when user clicks
  };
  
  const openLightbox = (item: typeof galleryItems[0]) => {
    setLightboxItem(item);
    // Pause auto-change when lightbox is open
    if (autoChangeRef.current) {
      clearInterval(autoChangeRef.current);
    }
  };
  
  const closeLightbox = () => {
    setLightboxItem(null);
    startAutoChange(); // Restart auto-change when lightbox is closed
  };

  const currentItem = galleryItems[currentPreviewIndex];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6"><span className="text-[#0D2E4D]">JOYFUL</span> <span className="text-[#FF8B00]">MEMORIES</span></h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Explore some of the beautiful moments captured during our journeys. 
            Every trip with Bus X creates lasting memories.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Large Preview Window */}
          <motion.div 
            className="lg:w-3/5 bg-black rounded-xl overflow-hidden h-[500px] relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            onClick={() => openLightbox(currentItem)}
          >
            {currentItem.type === 'image' ? (
              <img 
                src={currentItem.src} 
                alt={currentItem.alt} 
                className="w-full h-full object-cover cursor-pointer"
              />
            ) : (
              <div className="relative w-full h-full">
                <video 
                  src={currentItem.src} 
                  poster={currentItem.thumbnail}
                  className="w-full h-full object-cover cursor-pointer" 
                  controls
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#FF8B00]/80 flex items-center justify-center">
                    <i className="fas fa-play text-white text-xl"></i>
                  </div>
                </div>
              </div>
            )}
            <div className="absolute left-6 bottom-6 z-10">
              <div className="flex flex-col items-start gap-1">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4].map((dot) => (
                    <div key={dot} className="w-2 h-2 rounded-full bg-[#FF8B00]"></div>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white">{currentItem.alt}</h3>
              </div>
            </div>
          </motion.div>
          
          {/* Grid of Thumbnails */}
          <motion.div 
            className="lg:w-2/5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-2 gap-4">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`relative rounded-xl overflow-hidden bg-black cursor-pointer h-[120px] ${
                    currentPreviewIndex === index ? 'ring-2 ring-[#FF8B00]' : ''
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  {item.type === 'image' ? (
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <img 
                        src={item.thumbnail} 
                        alt={item.alt} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#FF8B00]/80 flex items-center justify-center">
                          <i className="fas fa-play text-white text-xs"></i>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={!!lightboxItem} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          <DialogTitle>
            <VisuallyHidden>Gallery Item</VisuallyHidden>
          </DialogTitle>
          {lightboxItem?.type === 'image' ? (
            <img 
              src={lightboxItem.src} 
              alt={lightboxItem.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          ) : lightboxItem?.type === 'video' ? (
            <video 
              src={lightboxItem.src} 
              controls
              autoPlay
              className="w-full h-auto max-h-[80vh]"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
