import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './../styles/Button.module.css';
import heroStyles from './HeroSection.module.css';
import StarryBackground from './StarryBackground';

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
    <div id="hero" className={`pt-24 sm:pt-28 md:pt-32 min-h-[120vh] sm:min-h-screen w-full flex items-center relative overflow-hidden ${heroStyles.heroBackground}`}>
      <div className={heroStyles.sliderThumb}></div>
      <StarryBackground />
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* <div className="absolute -top-10 -right-10 w-48 h-48 md:w-72 md:h-72 bg-[#FB8C00] opacity-10 rounded-full blur-3xl transform animate-blob"></div>
        <div className="absolute top-40 -left-10 md:-left-20 w-64 h-64 md:w-96 md:h-96 bg-teal-400 opacity-10 rounded-full blur-3xl transform animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 md:w-60 md:h-60 bg-coral-400 opacity-10 rounded-full blur-3xl transform animate-blob animation-delay-4000"></div> */}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>} 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Section with Text */}
          <div className="flex flex-col justify-center py-8 lg:py-0 text-center lg:text-left mt-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 lg:mb-8">
              <span className="text-white">
                Welcome to <span className="text-orange-600">Proinfo</span>
                <br className="hidden sm:block" />
                Where Innovation
                <br className="hidden sm:block" />
                Meets Excellence!
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0">
              We pride ourselves on being at the forefront of innovation, delivering cutting-edge technology solutions across a spectrum of services.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
              <a 
                href="#get-started" 
                className={`${styles.btn} w-full sm:w-auto`}
              >
                <span className={styles.btnContent}>Read More</span>
                <span className={styles.icon}>
                  <ArrowRight size={40} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </span>
              </a>
              
              {/* Trusted Clients Section */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex -space-x-2">
                  {clientLogos.map((logo, index) => (
                    <div key={index} className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-sm">
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
                  className="text-sm sm:text-base text-white hover:text-orange-600/80 transition-colors"
                >
                  View Testimonials →
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Section with Video */}
          <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-2xl mb-12 sm:mb-20">
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              loop
              src="https://proinfo.io/wp-content/uploads/2024/10/3249940-uhd_3840_2160_25fps.mp4#t=0.1"
            >
            </video>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 text-white" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;