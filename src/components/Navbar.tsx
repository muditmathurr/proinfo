import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
            <img 
            fetchpriority="high" width="1165" height="282" 
            src="https://proinfo.io/wp-content/uploads/2024/01/proinfo-logo-hori.png" 
            className="elementor-animation-float attachment-full size-full wp-image-882 sm:w-[200px] w-[150px]" alt="" 
            srcset="https://proinfo.io/wp-content/uploads/2024/01/proinfo-logo-hori.png 1165w, 
            https://proinfo.io/wp-content/uploads/2024/01/proinfo-logo-hori-300x73.png 300w, 
            https://proinfo.io/wp-content/uploads/2024/01/proinfo-logo-hori-1024x248.png 1024w, 
            https://proinfo.io/wp-content/uploads/2024/01/proinfo-logo-hori-768x186.png 768w" 
            sizes="(max-width: 576px) 150px, 200px"/>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Service</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="#careers" className="nav-link">Careers</a>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden bg-white dark:bg-gray-900 shadow-lg`}
      >
        <div className="container mx-auto px-4 py-4 space-y-3">
          <a href="#hero" className="block py-2 nav-link" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" className="block py-2 nav-link" onClick={() => setIsOpen(false)}>Service</a>
          <a href="#about" className="block py-2 nav-link" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" className="block py-2 nav-link" onClick={() => setIsOpen(false)}>Contact</a>
          <a 
            href="#get-started" 
            className="block text-center bg-[#ffb100] from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;