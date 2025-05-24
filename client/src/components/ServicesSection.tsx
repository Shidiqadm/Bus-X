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
    <section id="services" className="w-full overflow-hidden py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-6"
      >
        <div className="flex items-center gap-6 whitespace-nowrap animate-marquee" style={{ animationDuration: '15s' }}>
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-6 text-5xl font-bold text-slate-200">
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
    </section>
  );
}
