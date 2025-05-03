import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './../styles/Button.module.css';

const HeroSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  // Sample client logos - replace with your actual client logos
  const clientLogos = [
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  ];
  
  return (
    <div id="hero" className="pt-28 pb-20 md:pt-30 md:pb-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-10 -right-10 w-48 h-48 md:w-72 md:h-72 bg-[#ffb100] opacity-10 rounded-full blur-3xl transform animate-blob"></div>
        <div className="absolute top-40 -left-10 md:-left-20 w-64 h-64 md:w-96 md:h-96 bg-teal-400 opacity-10 rounded-full blur-3xl transform animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 md:w-60 md:h-60 bg-coral-400 opacity-10 rounded-full blur-3xl transform animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>} 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Section with Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-[#2a2930] dark:text-gray-300">
              Welcome to <span className="text-[#ffb100]">Proinfo</span> Where Innovation Meets Excellence!
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            We pride ourselves on being at the forefront of innovation, delivering cutting-edge technology solutions across a spectrum of services.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a 
                href="#get-started" 
                className={styles.btn}
              >
                <span className={styles.btnContent}>Read More</span>
                <span className={styles.icon}>
                  <ArrowRight size={40} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </span>
              </a>
              
              {/* Trusted Clients Section */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {clientLogos.map((logo, index) => (
                    <div key={index} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-sm">
                      <img
                        src={logo}
                        alt={`Client ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <a 
                  href="#testimonials" 
                  className="text-sm text-[#ffb100] hover:text-[#ffb100]/80 transition-colors"
                >
                  View Testimonials →
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Section with Video */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              loop
              src="https://proinfo.io/wp-content/uploads/2024/10/3249940-uhd_3840_2160_25fps.mp4#t=0.1"
            >
            </video>
            <div className="elementor-container elementor-column-gap-no">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">
                      Welcome to <span className="text-white">Proinfo</span>
                      <br />Where Innovation Meets Excellence!
                    </h3>
                  </div>
                  <div className="elementor-widget-container">
                    <p>We pride ourselves on being at the forefront of innovation, delivering cutting-edge technology solutions across a spectrum of services.</p>
                  </div>
                  <div className="elementor-button-wrapper">
                    <a className="elementor-button elementor-size-sm" href="#about">
                      <span className="elementor-button-text">Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;