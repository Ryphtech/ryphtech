import { motion } from 'framer-motion';
import { Globe, Smartphone, Brain, CheckCircle } from 'lucide-react';
import { BackgroundGradient } from '../ui/background-gradient';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: ['React & Next.js', 'Node.js & Express', 'Database Design', 'API Development']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment']
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'AI-powered solutions and predictive analytics to transform your business.',
      features: ['Python & TensorFlow', 'Data Analysis', 'Model Training', 'AI Integration']
    }
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive IT solutions tailored to your business needs,
            from concept to deployment and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient className="p-8 text-center group bg-white dark:bg-dark-800 rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 text-left">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
