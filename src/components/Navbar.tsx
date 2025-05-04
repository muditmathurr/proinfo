import React, { useState, useEffect, useRef } from 'react';
import { Home, Wrench, Users, BookOpen, Phone, Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const services = [
  { label: 'Cloud Services', href: '#cloud-services' },
  { label: 'Blockchain Services', href: '#blockchain-services' },
  { label: 'Quality Engineering', href: '#quality-engineering' },
  { label: 'No Code Low Code', href: '#no-code-low-code' },
  { label: 'Consulting', href: '#consulting' },
  { label: 'Data & Analytics Services', href: '#data-analytics' },
];

const navTabs = [
  { label: 'Home', icon: Home, href: '#hero' },
  { label: 'Services', icon: Wrench, href: '#services', hasDropdown: true },
  { label: 'About', icon: Users, href: '#about' },
  { label: 'Blog', icon: BookOpen, href: '#blog' },
  { label: 'Contact', icon: Phone, href: '#contact' },
];

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('Specs');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, tab: any) => {
    e.preventDefault();
    setActiveTab(tab.label);
    
    if (tab.hasDropdown) {
      setIsServicesDropdownOpen(!isServicesDropdownOpen);
    } else {
      const targetId = tab.href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`w-full flex justify-center items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between md:justify-between">
        {/* Logo - Visible on both mobile and desktop */}
        <a href="#" className="flex-shrink-0">
          <img
            fetchPriority="high"
            width="1165" 
            height="282"
            src="https://proinfo.io/wp-content/uploads/2024/01/proinfo-logo-hori.png"
            className="w-[120px] md:w-[200px]"
            alt="Logo"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div
            className={`flex items-center px-2 py-1 rounded-full shadow-md transition-colors duration-300 ${
              isDark ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.label;
              return (
                <div key={tab.label} className="relative" ref={tab.hasDropdown ? servicesDropdownRef : null}>
                  <a
                    href={tab.href}
                    onClick={(e) => handleNavigation(e, tab)}
                    className={`flex flex-col items-center px-6 py-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FB8C00] cursor-pointer ${
                      isActive
                        ? isDark
                          ? 'bg-gray-800 text-white'
                          : 'bg-orange-400 text-white'
                        : isDark
                        ? 'text-gray-300 hover:bg-orange-400'
                        : 'text-gray-700 hover:bg-orange-400'
                    }`}
                    style={{ minWidth: 80 }}
                  >
                    <div className="flex items-center">
                      <Icon size={22} className="mb-1" />
                      {tab.hasDropdown && <ChevronDown size={16} className="ml-1" />}
                    </div>
                    <span className="text-xs font-medium">{tab.label}</span>
                  </a>
                  
                  {/* Services Dropdown */}
                  {tab.hasDropdown && isServicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {services.map((service) => (
                          <a
                            key={service.label}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-orange-400 hover:text-white transition-colors duration-200"
                            onClick={(e) => {
                              e.preventDefault();
                              const targetId = service.href.replace('#', '');
                              const element = document.getElementById(targetId);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                              setIsServicesDropdownOpen(false);
                            }}
                          >
                            {service.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 ml-8 rounded-full hover:bg-orange-400 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full hover:bg-orange-400 dark:hover:bg-gray-700 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMobileMenu}
            className={`p-2 rounded-full hover:bg-orange-400 dark:hover:bg-gray-700 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[72px] left-0 w-full h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 p-6">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.label;
            return (
              <div key={tab.label} className="w-full">
                <a
                  href={tab.href}
                  onClick={(e) => handleNavigation(e, tab)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? isDark
                        ? 'bg-gray-800 text-white'
                        : 'bg-orange-400 text-white'
                      : isDark
                      ? 'text-gray-300 hover:bg-gray-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon size={20} />
                    <span className="font-medium">{tab.label}</span>
                  </div>
                  {tab.hasDropdown && <ChevronDown size={16} />}
                </a>
                
                {/* Mobile Services Dropdown */}
                {tab.hasDropdown && isServicesDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <a
                        key={service.label}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-orange-400 hover:text-white rounded-lg transition-colors duration-200"
                        onClick={(e) => {
                          e.preventDefault();
                          const targetId = service.href.replace('#', '');
                          const element = document.getElementById(targetId);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                          setIsServicesDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {service.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;