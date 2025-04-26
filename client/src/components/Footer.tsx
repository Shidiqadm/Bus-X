import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0D2E4D] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <span className="text-[#FF8B00] text-3xl font-bold">Bus<span className="text-white">X</span></span>
            </Link>
            <p className="text-gray-300 mb-6">
              Experience luxury travel with our premium bus services. Comfort, safety, and exceptional service on every journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#FF8B00] transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF8B00] transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF8B00] transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF8B00] transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-[#FF8B00] transition duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#FF8B00] transition duration-300">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[#FF8B00] transition duration-300">Services</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-[#FF8B00] transition duration-300">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#FF8B00] transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-[#FF8B00] transition duration-300">Airport Transfers</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[#FF8B00] transition duration-300">Special Occasions</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[#FF8B00] transition duration-300">Tours & Trips</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[#FF8B00] transition duration-300">Cruise Pickups</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[#FF8B00] transition duration-300">Corporate Travel</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for travel tips and exclusive offers.</p>
            <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-dark" 
                />
                <button 
                  type="submit" 
                  className="bg-[#FF8B00] text-white px-4 py-2 rounded-r-lg hover:bg-[#FF8B00]/90 transition duration-300"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
            <p className="text-gray-300 text-sm">We respect your privacy. No spam, ever.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">&copy; {new Date().getFullYear()} BusX. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-[#FF8B00] transition duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-[#FF8B00] transition duration-300 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-[#FF8B00] transition duration-300 text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
