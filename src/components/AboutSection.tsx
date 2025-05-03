import React from 'react';
import { Shield, Award, Clock, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const Stat: React.FC<StatProps> = ({ icon, value, label, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-[#2a2930] dark:bg-purple-900/30 rounded-full flex items-center justify-center text-[#ffb100] dark:text-[#ffb100] mb-4">
        {icon}
      </div>
      <span className="text-3xl font-bold mb-2">{value}</span>
      <span className="text-gray-600 dark:text-gray-300 text-sm">{label}</span>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.1 });
  const { ref: imageRef, inView: imageInView } = useInView({ threshold: 0.1 });

  const stats = [
    {
      icon: <Shield size={32} />,
      value: '10+',
      label: 'Years Experience',
      delay: 100
    },
    {
      icon: <Award size={32} />,
      value: '99.9%',
      label: 'Success Rate',
      delay: 200
    },
    {
      icon: <Clock size={32} />,
      value: '24/7',
      label: 'Support',
      delay: 300
    },
    {
      icon: <Star size={32} />,
      value: '366+',
      label: 'Complete Projects',
      delay: 400
    }
  ];

  return (
    <>
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div
            ref={textRef}
            className={`lg:w-1/2 transition-all duration-700 ${textInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            >
            <h2 className="text-3xl font-bold mb-6">About ProInfo Technology</h2>
            <div className="w-24 h-1 bg-[#ffb100] from-purple-600 to-teal-500 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              At ProInfo Technologies, we pride ourselves on being at the forefront of innovation, delivering cutting-edge technology solutions across a spectrum of services. With a commitment to excellence, we leverage our expertise in Cloud Solutions, Consulting, Cybersecurity, No Code, and Low Code to empower businesses globally.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Our diverse portfolio includes specialized offerings in Data & Analytics, Enterprise Solutions, and IoT, redefining industries such as clinical research, financial services, HR technology, and now, No Code and Low Code development.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              At ProInfo Technologies, we are more than just a technology firm; we are architects of digital transformation, pioneers of innovation, and partners in your journey towards success. Established with a vision to redefine the technological landscape, we bring over a decade of global experience to the table.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-[#ffb100] mb-8">
              <p className="text-gray-700 dark:text-gray-200 italic">
                "ProInfo transformed our security posture and gave us confidence that our
                sensitive data is protected. Their team's expertise is unmatched."
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-4 font-medium">— Pulkit Mathur, CTO at TripCart</p>
            </div>

            <a
              href="#contact"
              className="inline-block bg-[#ffb100] from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white font-medium py-3 px-8 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#2a2930]"
              >
              Get in Touch
            </a>
          </div>

          <div
            ref={imageRef}
            className={`lg:w-1/2 transition-all duration-700 ${imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-teal-500/20 rounded-2xl transform -rotate-3 scale-105"></div>
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="ProInfo security team"
                className="relative rounded-2xl shadow-xl w-full"
                />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <Stat
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                delay={stat.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Core Competencies Section */}
    <section id="core-competencies" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 bg-[#ffb100] rounded-full"></span>
            <span className="tracking-widest text-sm font-semibold">OUR CORE COMPETENCIES</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Scalability, Flexibility, and Efficiency</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Consulting Services */}
          <div className="flex items-start gap-4">
            <span className="text-3xl mt-1">👥</span>
            <div>
              <h3 className="font-bold text-lg mb-1">Consulting Services</h3>
              <p>Tailored guidance and strategic insights to propel your business forward.</p>
            </div>
          </div>
          {/* No Code Low Code */}
          <div className="flex items-start gap-4">
            <span className="text-3xl mt-1">👨‍💻</span>
            <div>
              <h3 className="font-bold text-lg mb-1">No Code Low Code</h3>
              <p>Rapid application development without the need for traditional coding expertise.</p>
            </div>
          </div>
          {/* Quality Engineering & Assurance */}
          <div className="flex items-start gap-4">
            <span className="text-3xl mt-1">🛡️</span>
            <div>
              <h3 className="font-bold text-lg mb-1">Quality Engineering & Assurance</h3>
              <p>Ensuring your products meet the highest standards of performance and reliability.</p>
            </div>
          </div>
          {/* Blockchain Services */}
          <div className="flex items-start gap-4">
            <span className="text-3xl mt-1">🔗</span>
            <div>
              <h3 className="font-bold text-lg mb-1">Blockchain Services</h3>
              <p>Harnessing the power of decentralized technologies to drive innovation and security.</p>
            </div>
          </div>
          {/* Cloud Services */}
          <div className="flex items-start gap-4">
            <span className="text-3xl mt-1">☁️</span>
            <div>
              <h3 className="font-bold text-lg mb-1">Cloud Services</h3>
              <p>Scalable, secure, and cost-effective solutions to empower your digital transformation.</p>
            </div>
          </div>
          {/* Data & Analytics Services */}
          <div className="flex items-start gap-4">
            <span className="text-3xl mt-1">📊</span>
            <div>
              <h3 className="font-bold text-lg mb-1">Data & Analytics Services</h3>
              <p>Unlocking actionable insights and maximizing the value of your data assets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
              </>
  );
};

export default AboutSection;