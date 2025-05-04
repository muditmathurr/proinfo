import React from 'react';
import { ArrowRight, AppWindow, Cloud, Database, Rocket, Cpu, Code, Zap} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import styles from './../styles/Button.module.css';
import blobStyles from './../styles/BlobButton.module.css';
import heroStyles from './HeroSection.module.css';
import StarryBackground from './StarryBackground';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  // Sample client logos - replace with your actual client logos
  const clientLogos = [
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  ];

  // Animated icons data
  const animatedIcons = [
    { Icon: AppWindow, delay: '0.5s', position: 'top-[10%] right-[15%] sm:top-[15%] sm:right-[20%]', bgColor: 'bg-white/70 dark:bg-gray-800/70' },
    { Icon: Cloud, delay: '1s', position: 'top-[30%] left-[5%] sm:top-[35%] sm:left-[18%]', bgColor: 'bg-white/70 dark:bg-gray-800/70' },
    { Icon: Database, delay: '1.5s', position: 'top-[43%] right-[8%] sm:top-[47%] sm:right-[22%]', bgColor: 'bg-white/70 dark:bg-gray-800/70' },
    { Icon: Cpu, delay: '2s', position: 'bottom-[40%] left-[3%] sm:bottom-[30%] sm:left-[22%]', bgColor: 'bg-white/70 dark:bg-gray-800/70' },
    { Icon: Code, delay: '2.5s', position: 'top-[70%] right-[18%] sm:top-[70%] sm:right-[26%]', bgColor: 'bg-white/70 dark:bg-gray-800/70' },
    { Icon: Zap, delay: '3s', position: 'top-[16%] left-[20%] sm:top-[15%] sm:left-[40%]', bgColor: 'bg-white/70 dark:bg-gray-800/70' },
    { Icon: Rocket, delay: '3.5s', position: 'bottom-[20%] left-[30%] sm:bottom-[15%] sm:left-[50%]', bgColor: 'bg-white/70 dark:bg-gray-800/70' },
   
  ];
  
  return (
    <div id="hero" className={`pb-20 sm:pt-28 md:pt-32 min-h-[110vh] sm:min-h-screen w-full flex items-center relative overflow-hidden ${heroStyles.heroBackground}`}>
      <div className={heroStyles.sliderThumb}></div>
      <StarryBackground />
      
      {/* SVG Filter for Blob Effect */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="goo" />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
      
      {/* Animated Icons */}
      {animatedIcons.map(({ Icon, delay, position, bgColor }, index) => (
        <div
          key={index}
          className={`absolute ${position} w-14 h-14 sm:w-20 sm:h-20 rounded-full ${bgColor} flex items-center justify-center animate-float`}
          style={{ animationDelay: delay }}
        >
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
        </div>
      ))}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>} 
          className={`flex flex-col items-center justify-center text-center transition-all duration-1000 transform ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6 lg:mb-8">
              <span className="text-black dark:text-white">
                <span className="block max-w-[20ch] mx-auto">
                  Welcome to <span className="text-orange-600"><TypewriterText text="PROINFO..." /></span>
                </span>
                <span className="block max-w-[16ch] mx-auto ">Where Innovation</span>
                <span className="block mx-auto ">Meets Excellence!</span>
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto dark:text-white">
              We pride ourselves on being at the forefront of innovation, delivering cutting-edge technology solutions across a spectrum of services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-12 mx-auto">
              <a 
                href="#blog" 
                className={blobStyles.blobButton}
              >
                <span className={blobStyles.blobButtonInner}>
                  <span className={blobStyles.blobButtonBlobs}>
                    <span className={blobStyles.blobButtonBlob}></span>
                    <span className={blobStyles.blobButtonBlob}></span>
                    <span className={blobStyles.blobButtonBlob}></span>
                    <span className={blobStyles.blobButtonBlob}></span>
                  </span>
                </span>
                <strong>Read More</strong>
              </a>
              {/* Trusted Clients Section */}
              <div className="flex flex-row items-center gap-4 whitespace-nowrap">
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
                  className="text-sm sm:text-base text-black dark:text-white hover:text-orange-600/80 transition-colors font-bold"
                >
                  View Testimonials
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white" 
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