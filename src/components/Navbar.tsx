import React, { useState, useEffect } from 'react';
import { Home, Wrench, Users, BookOpen, Phone, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navTabs = [
  { label: 'Home', icon: Home, href: '#hero' },
  { label: 'Services', icon: Wrench, href: '#services' },
  { label: 'About', icon: Users, href: '#about' },
  { label: 'Blog', icon: BookOpen, href: '#blog' },
  { label: 'Contact', icon: Phone, href: '#contact' },
];

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('Specs');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`w-full flex justify-center items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between md:justify-center">
        {/* Logo - Visible on both mobile and desktop */}
        <a href="#" className="md:hidden">
          <img
            fetchPriority="high"
            width="1165" 
            height="282"
            src="https://proinfo.io/wp-content/uploads/2024/01/proinfo-logo-hori.png"
            className="w-[120px]"
            alt="Logo"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          {/* Logo */}
          <div
            className={`flex items-center px-2 py-1 rounded-full shadow-md transition-colors duration-300 ${
              isDark ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <a href="#" className="mr-8">
              <img
                fetchPriority="high"
                width="1165"
                height="282"
                src="https://proinfo.io/wp-content/uploads/2024/01/proinfo-logo-hori.png"
                className="w-[120px] sm:w-[150px] md:w-[200px]"
                alt="Logo"
              />
            </a>
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.label;
              return (
                <a
                  key={tab.label}
                  href={tab.href}
                  onClick={() => setActiveTab(tab.label)}
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
                  <Icon size={22} className="mb-1" />
                  <span className="text-xs font-medium">{tab.label}</span>
                </a>
              );
            })}
          </div>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 ml-8 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden absolute right-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
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
              <a
                key={tab.label}
                href={tab.href}
                onClick={() => {
                  setActiveTab(tab.label);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-2 w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? isDark
                      ? 'bg-gray-800 text-white'
                      : 'bg-orange-400 text-white'
                    : isDark
                    ? 'text-gray-300 hover:bg-gray-800'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{tab.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;