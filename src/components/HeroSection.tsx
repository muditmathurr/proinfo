import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const HeroSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  return (
    <div id="hero" className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-10 -right-10 w-48 h-48 md:w-72 md:h-72 bg-[#ffb100] opacity-10 rounded-full blur-3xl transform animate-blob"></div>
        <div className="absolute top-40 -left-10 md:-left-20 w-64 h-64 md:w-96 md:h-96 bg-teal-400 opacity-10 rounded-full blur-3xl transform animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 md:w-60 md:h-60 bg-coral-400 opacity-10 rounded-full blur-3xl transform animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={ref} 
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
            
            <div className="flex gap-4">
              <a 
                href="#get-started" 
                className="bg-[#ffb100] text-black from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                Read More
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
             
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