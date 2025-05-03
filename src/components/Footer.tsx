import React from 'react';
import { Shield, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20 pb-8 overflow-x-hidden">
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50 dark:fill-gray-900"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="https://proinfo.io/wp-content/uploads/2024/01/proinfo-logo-hori.png" 
                alt="ProInfo Logo"
                className="w-full max-w-[200px] h-auto hover:opacity-90 transition-opacity"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              At ProInfo Technologies, we are more than just a technology firm. We are your partners in digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#ffb100] rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#ffb100] rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#ffb100] rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffb100] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-[#ffb100] transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#ffb100] group-hover:w-4 mr-2 transition-all duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#ffb100] transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#ffb100] group-hover:w-4 mr-2 transition-all duration-300"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#ffb100] transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#ffb100] group-hover:w-4 mr-2 transition-all duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-[#ffb100] transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#ffb100] group-hover:w-4 mr-2 transition-all duration-300"></span>
                  Blog
                </a>
              </li>
              <li>
                <a href="#career" className="text-gray-400 hover:text-[#ffb100] transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#ffb100] group-hover:w-4 mr-2 transition-all duration-300"></span>
                  Career
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#ffb100] transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#ffb100] group-hover:w-4 mr-2 transition-all duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffb100] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ffb100] transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#ffb100] group-hover:w-4 mr-2 transition-all duration-300"></span>
                  Cloud Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ffb100] transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#ffb100] group-hover:w-4 mr-2 transition-all duration-300"></span>
                  Blockchain Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ffb100] transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#ffb100] group-hover:w-4 mr-2 transition-all duration-300"></span>
                  Quality Engineering
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ffb100] transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#ffb100] group-hover:w-4 mr-2 transition-all duration-300"></span>
                  No Code Low Code
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ffb100] transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#ffb100] group-hover:w-4 mr-2 transition-all duration-300"></span>
                  Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ffb100] transition-colors duration-300 flex items-center group">
                  <span className="w-0 h-0.5 bg-[#ffb100] group-hover:w-4 mr-2 transition-all duration-300"></span>
                  Data & Analytics Services
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Stay Updated
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffb100] transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></span>
            </h4>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-[#ffb100] focus:border-transparent transition-all"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#ffb100] hover:bg-[#2a2930] text-black hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ProInfo Technologies. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <a href="#" className="text-gray-400 hover:text-[#ffb100] text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#ffb100] text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#ffb100] text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Name */}
      <div className="absolute bottom-0 left-0 w-full text-center py-4">
        <span className="text-8xl font-black text-white opacity-20 tracking-wider">PRO<span className="text-orange-600">INFO</span></span>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#ffb100] hover:bg-[#2a2930] text-black hover:text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;