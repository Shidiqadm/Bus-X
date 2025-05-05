import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import xlogo from "@/assets/xlogo.svg";

// Full list of services as requested
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
    image: "https://images.unsplash.com/photo-1527234483219-48cae6a6f1b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    icon: "fas fa-ship",
    title: "Cruise Pickup",
    description: "Reliable transportation to and from cruise terminals. Start and end your cruise vacation with our comfortable and punctual service for individuals and groups."
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8659302644d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    icon: "fas fa-briefcase",
    title: "Corporate Events",
    description: "Professional transportation for corporate meetings, team-building events, and conferences. Impress your clients and staff with our punctual and comfortable service."
  },
  {
    image: "https://images.unsplash.com/photo-1606216794079-73f85bbd925d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    icon: "fas fa-ring",
    title: "Engagements",
    description: "Make your engagement day special with our luxury transportation services. We'll ensure your guests travel in comfort and style on this momentous occasion."
  },
  {
    image: "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    icon: "fas fa-glass-martini-alt",
    title: "Pub Crawls",
    description: "Enjoy a safe night out with our pub crawl transportation services. Visit multiple venues without worrying about driving, with pickup and drop-off at your convenience."
  },
  {
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1485&q=80",
    icon: "fas fa-flag-checkered",
    title: "Races",
    description: "Get to and from race events with ease. Our transportation service ensures you arrive on time and comfortably for your favorite racing events."
  },
  {
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    icon: "fas fa-church",
    title: "Weddings",
    description: "Make your wedding day perfect with our elegant transportation services. We'll get your wedding party and guests to the venue in style and comfort."
  },
  {
    image: "https://images.unsplash.com/photo-1505455184862-554165e5f6ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    icon: "fas fa-wine-glass",
    title: "Winery Tours",
    description: "Enjoy a day of wine tasting without worrying about driving. Our winery tour transportation allows everyone to indulge safely and comfortably."
  },
  {
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    icon: "fas fa-users",
    title: "Social Events",
    description: "From birthday parties to reunions, our transportation services are perfect for all your social gatherings, ensuring everyone arrives together and on time."
  },
  {
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    icon: "fas fa-music",
    title: "Concerts",
    description: "Enhance your concert experience with our transportation service. Avoid parking hassles and driving after the event with our reliable pickup and drop-off."
  },
  {
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    icon: "fas fa-headphones",
    title: "Music Festival",
    description: "Attend music festivals stress-free with our transportation service. We'll get you there and back safely so you can fully enjoy the experience."
  },
  {
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    icon: "fas fa-birthday-cake",
    title: "Personal Events",
    description: "Celebrate your personal milestones with our transportation service. We'll take care of the travel logistics so you can focus on enjoying your special day."
  },
  {
    image: "https://images.unsplash.com/photo-1604681726272-c1ddf9c45d35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    icon: "fas fa-beer",
    title: "Bucks Nights",
    description: "Ensure a safe and fun bucks night with our transportation services. Enjoy the celebration without worrying about driving between venues."
  },
  {
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1507&q=80",
    icon: "fas fa-futbol",
    title: "Sporting Events",
    description: "Get to your favorite sporting events without the hassle of parking and traffic. Our service ensures you arrive on time to catch all the action."
  }
];

// Fleet images for the showcase
const allFleetImages = [
  "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
  "https://images.unsplash.com/photo-1556122071-e404eaedb77f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1570125909517-49d576cc84f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1464219789935-c2d9d9eb4930?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1565963925430-47909dc377e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1516550893885-985c872c60da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
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
  // State for service card pagination
  const [currentPage, setCurrentPage] = useState(0);
  const servicesPerPage = 4;
  const pageCount = Math.ceil(services.length / servicesPerPage);
  
  // State for fleet image carousel
  const [currentFleetSet, setCurrentFleetSet] = useState(0);
  const imagesPerSet = 4;
  const fleetSetCount = Math.ceil(allFleetImages.length / imagesPerSet);
  
  // Get current fleet images to display
  const currentFleetImages = allFleetImages.slice(
    currentFleetSet * imagesPerSet, 
    (currentFleetSet + 1) * imagesPerSet
  );
  
  // Get current services to display
  const currentServices = services.slice(
    currentPage * servicesPerPage, 
    (currentPage + 1) * servicesPerPage
  );
  
  // Functions to navigate through fleet images
  const prevFleetSet = () => {
    setCurrentFleetSet((prev) => (prev === 0 ? fleetSetCount - 1 : prev - 1));
  };
  
  const nextFleetSet = () => {
    setCurrentFleetSet((prev) => (prev === fleetSetCount - 1 ? 0 : prev + 1));
  };
  
  // Functions for service pagination
  const nextServicePage = () => {
    setCurrentPage((prev) => (prev === pageCount - 1 ? 0 : prev + 1));
  };
  
  const prevServicePage = () => {
    setCurrentPage((prev) => (prev === 0 ? pageCount - 1 : prev - 1));
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* <motion.div
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
        </motion.div> */}

        {/* Scrolling Text Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mb-16 overflow-hidden text-transparent py-6 [-webkit-text-stroke:0.5px_#000]"
        >
          <div className="flex items-center gap-6 whitespace-nowrap animate-marquee">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="flex items-center gap-6 text-5xl font-bold">
                <span>Travel anywhere and anytime with Bus</span>
                <img src={xlogo} alt="X Logo" className="w-8 h-8" />
                <span className="mx-4">•</span>
                <span>Travel anywhere and anytime with Bus</span>
                <img src={xlogo} alt="X Logo" className="w-8 h-8" />
                <span className="mx-4">•</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Bus Service */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 bg-[#FFF8F2] rounded-xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row group">
            <div className="md:w-1/2 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565963925430-47909dc377e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Luxury Bus" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center transition-all duration-300 group-hover:bg-[#FFF8F2]/70">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 transition-all duration-300 relative inline-block">
                We help you to create <span className="text-[#FF8B00] transition-all duration-300 group-hover:text-[#FF7A00]">memories with us!</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF8B00] transition-all duration-700 group-hover:w-1/3"></span>
              </h3>
              <p className="text-gray-600 mb-6 transition-all duration-300 group-hover:text-gray-700">
                We offer a luxury, affordable price bus for events and trips. Just take a look at our way of services.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentFleetImages.map((img, index) => (
                  <div key={index} className="rounded-md overflow-hidden h-24 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <img 
                      src={img} 
                      alt={`Bus service ${index+1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <Button 
                  asChild
                  className="bg-[#FF8B00] hover:bg-[#FF8B00]/90 text-white px-6 rounded-full font-semibold h-auto transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  <a href="#contact">Book Now</a>
                </Button>
                
                <div className="flex items-center text-[#FF8B00]">
                  <span className="mr-2 text-sm">explore our previous services</span>
                  <div className="flex gap-1">
                    <button 
                      className="w-8 h-8 border border-[#FF8B00] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#FF8B00]/10"
                      onClick={prevFleetSet}
                    >
                      <i className="fas fa-chevron-left text-xs transition-transform duration-300 hover:-translate-x-0.5"></i>
                    </button>
                    <button 
                      className="w-8 h-8 bg-[#FF8B00] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#FF8B00]/90"
                      onClick={nextFleetSet}
                    >
                      <i className="fas fa-chevron-right text-xs transition-transform duration-300 hover:translate-x-0.5"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}
        
        {/* Service Cards */}
        {/* <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {currentServices.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="md:w-3/5 p-6 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FFF8F2]">
                <div className="flex items-center mb-4">
                  <div className="bg-[#FF8B00]/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-[#FF8B00]/20 group-hover:scale-110">
                    <i className={`${service.icon} text-[#FF8B00] text-xl transition-all duration-300 group-hover:rotate-12`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold transition-all duration-300 group-hover:text-[#0D2E4D] relative">
                    {service.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF8B00] transition-all duration-500 group-hover:w-full"></span>
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 transition-all duration-300 group-hover:text-gray-700">{service.description}</p>
                <a 
                  href="#contact" 
                  className="text-[#FF8B00] font-semibold flex items-center group/link"
                >
                  <span className="relative overflow-hidden">
                    Book Now
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF8B00] transition-all duration-300 group-hover/link:w-full"></span>
                  </span>
                  <i className="fas fa-arrow-right ml-2 transition-all duration-300 group-hover/link:translate-x-1"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Pagination controls */}
        {/* <motion.div 
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 bg-white py-3 px-6 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
            <button 
              onClick={prevServicePage}
              className="w-10 h-10 border border-[#FF8B00] rounded-full flex items-center justify-center text-[#FF8B00] hover:bg-[#FF8B00] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <i className="fas fa-chevron-left transition-transform duration-300 group-hover:-translate-x-0.5"></i>
            </button>
            
            <div className="flex items-center gap-2">
              {[...Array(pageCount)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentPage === idx 
                      ? "bg-[#FF8B00] w-6" 
                      : "bg-gray-300 hover:bg-gray-400 w-3 hover:w-4"
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextServicePage}
              className="w-10 h-10 border border-[#FF8B00] rounded-full flex items-center justify-center text-[#FF8B00] hover:bg-[#FF8B00] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <i className="fas fa-chevron-right transition-transform duration-300 group-hover:translate-x-0.5"></i>
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
