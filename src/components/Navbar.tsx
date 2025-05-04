import React, { useState } from 'react';
import { Home, Wrench, Users, BookOpen, Phone, Sun, Moon } from 'lucide-react';
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

  return (
    <nav className="w-full flex justify-center items-center py-4 fixed top-0 z-50 bg-transparent">
      <div className="flex items-center space-x-8">
        {/* Logo */}
        {/* Tab Bar */}
        <div
          className={`flex items-center px-2 py-1 rounded-full shadow-md transition-colors duration-300 ${
            isDark ? 'bg-gray-900' : 'bg-white'
          }`}
        >
        <a href="#" className="flex items-center mr-6">
          <img
            fetchPriority="high"
            width="1165"
            height="282"
            src="https://proinfo.io/wp-content/uploads/2024/01/proinfo-logo-hori.png"
            className="sm:w-[200px] w-[150px]"
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
          className="ml-6 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;