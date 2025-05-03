import React from 'react';
import { Shield, Eye, Server, Lock, FileText, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#ffb100] ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 mb-6 dark:bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center text-[#ffb100] dark:text-[#ffb100] group-hover:from-purple-500/30 group-hover:to-teal-500/30 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const services = [
    {
      icon: <Shield size={32} />,
      title: 'Consulting Services',
      description: 'Advanced threat detection and prevention to keep your systems safe from cyber attacks.',
      delay: 100
    },
    {
      icon: <Eye size={32} />,
      title: 'No Code Low Code',
      description: '24/7 monitoring of your infrastructure to detect and respond to security incidents.',
      delay: 200
    },
    {
      icon: <Server size={32} />,
      title: 'Quality Engineering & Assurance',
      description: 'Comprehensive security solutions for your cloud infrastructure and applications.',
      delay: 300
    },
    {
      icon: <Lock size={32} />,
      title: 'Blockchain Services',
      description: 'Control who has access to your systems and data with advanced authentication.',
      delay: 400
    },
    {
      icon: <FileText size={32} />,
      title: 'Cloud Services',
      description: 'Meet industry regulations and standards with our compliance solutions.',
      delay: 500
    },
    {
      icon: <Users size={32} />,
      title: 'Data & Analytics Services',
      description: 'Educate your team on security best practices to prevent human error.',
      delay: 600
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">The Best Services We Provide</h2>
          <div className="w-24 h-1 bg-[#ffb100] from-purple-600 to-teal-500 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;