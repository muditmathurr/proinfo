import React from 'react';
import { Check, X } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
  delay: number;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  isPopular = false,
  delay
}) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform ${
        isPopular ? 'md:-translate-y-6 relative border-2 border-purple-500' : ''
      } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {isPopular && (
        <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
          <span className="bg-gradient-to-r from-purple-600 to-teal-500 text-white text-sm font-semibold py-1 px-4 rounded-full shadow-md">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500 dark:text-gray-400">/month</span>}
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.included ? (
                <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
              ) : (
                <X size={18} className="text-gray-400 mr-2 flex-shrink-0" />
              )}
              <span 
                className={`text-sm ${
                  feature.included 
                    ? 'text-gray-700 dark:text-gray-200' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        <a 
          href="#contact" 
          className={`block text-center py-3 px-6 rounded-full transition-all duration-300 font-medium ${
            isPopular 
              ? 'bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white' 
              : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
          }`}
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const plans = [
    {
      name: 'Starter',
      price: '$499',
      description: 'Basic security for small businesses',
      features: [
        { text: 'Vulnerability Assessment', included: true },
        { text: 'Basic Firewall Protection', included: true },
        { text: 'Email Security', included: true },
        { text: 'Monthly Security Reports', included: true },
        { text: '8/5 Support', included: true },
        { text: 'Advanced Threat Detection', included: false },
        { text: '24/7 Monitoring', included: false },
        { text: 'Dedicated Security Expert', included: false }
      ],
      isPopular: false,
      delay: 100
    },
    {
      name: 'Professional',
      price: '$999',
      description: 'Enhanced security for growing companies',
      features: [
        { text: 'Vulnerability Assessment', included: true },
        { text: 'Advanced Firewall Protection', included: true },
        { text: 'Email Security', included: true },
        { text: 'Weekly Security Reports', included: true },
        { text: '24/7 Support', included: true },
        { text: 'Advanced Threat Detection', included: true },
        { text: '24/7 Monitoring', included: true },
        { text: 'Dedicated Security Expert', included: false }
      ],
      isPopular: true,
      delay: 200
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Comprehensive security for large organizations',
      features: [
        { text: 'Vulnerability Assessment', included: true },
        { text: 'Advanced Firewall Protection', included: true },
        { text: 'Email Security', included: true },
        { text: 'Daily Security Reports', included: true },
        { text: '24/7 Priority Support', included: true },
        { text: 'Advanced Threat Detection', included: true },
        { text: '24/7 Monitoring', included: true },
        { text: 'Dedicated Security Expert', included: true }
      ],
      isPopular: false,
      delay: 300
    }
  ];
  
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose the security package that's right for your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={plan.delay}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Not sure which plan is right for you? Contact us for a personalized recommendation.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-500 font-medium py-3 px-8 rounded-full transition-all duration-300 hover:shadow-md"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;