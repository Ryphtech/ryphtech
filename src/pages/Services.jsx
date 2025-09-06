import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Globe, 
  Smartphone, 
  Brain, 
  CheckCircle, 
  ArrowRight,
  Code,
  Database,
  Shield,
  Zap,
  Smartphone as Mobile,
  Cpu,
  BarChart3,
  Cloud,
  GitBranch,
  Monitor,
  Palette,
  Users,
  Image
} from 'lucide-react';


const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'We create modern, responsive, and scalable web applications that deliver exceptional user experiences and drive business growth.',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Web Application Development',
        'API Development & Integration',
        'Database Design & Optimization',
        'Performance Optimization',
        'SEO & Digital Marketing',
        'Maintenance & Support'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Vercel'],
      process: [
        { step: '01', title: 'Discovery & Planning', description: 'Understanding your requirements and creating a detailed project plan' },
        { step: '02', title: 'Design & Prototyping', description: 'Creating wireframes and visual designs for your approval' },
        { step: '03', title: 'Development', description: 'Building your website with clean, maintainable code' },
        { step: '04', title: 'Testing & Launch', description: 'Thorough testing and deployment to production' }
      ]
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'We develop native and cross-platform mobile applications that provide seamless user experiences across all devices.',
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-platform Development',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'App Analytics & Monitoring',
        'App Maintenance & Updates'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'App Store Connect', 'Google Play Console'],
      process: [
        { step: '01', title: 'Requirements Analysis', description: 'Defining app features, user flows, and technical requirements' },
        { step: '02', title: 'UI/UX Design', description: 'Creating intuitive and engaging user interfaces' },
        { step: '03', title: 'Development', description: 'Building the app with best practices and performance in mind' },
        { step: '04', title: 'Testing & Deployment', description: 'Comprehensive testing and app store submission' }
      ]
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'We leverage artificial intelligence and machine learning to create intelligent solutions that automate processes and provide insights.',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Recommendation Systems',
        'Data Analysis & Visualization',
        'Model Training & Optimization',
        'AI Integration',
        'Continuous Learning Systems'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLTK', 'Pandas', 'NumPy'],
      process: [
        { step: '01', title: 'Data Analysis', description: 'Understanding your data and defining ML objectives' },
        { step: '02', title: 'Model Development', description: 'Building and training machine learning models' },
        { step: '03', title: 'Integration', description: 'Integrating ML models into your existing systems' },
        { step: '04', title: 'Monitoring & Optimization', description: 'Continuous monitoring and model improvement' }
      ]
    },
    {
      icon: Image,
      title: 'Poster Designing',
      description: 'We create stunning, professional posters that capture attention and effectively communicate your message to your target audience.',
      features: [
        'Event Posters & Flyers',
        'Marketing & Promotional Posters',
        'Social Media Graphics',
        'Print-Ready Designs',
        'Brand-Consistent Designs',
        'High-Resolution Output',
        'Multiple Format Support',
        'Quick Turnaround Times'
      ],
      technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva Pro', 'Figma', 'CorelDRAW', 'InDesign', 'Sketch', 'Procreate'],
      process: [
        { step: '01', title: 'Concept & Briefing', description: 'Understanding your requirements, target audience, and design objectives' },
        { step: '02', title: 'Design & Layout', description: 'Creating initial concepts and layouts for your approval' },
        { step: '03', title: 'Refinement', description: 'Incorporating feedback and perfecting the design details' },
        { step: '04', title: 'Final Delivery', description: 'Providing high-resolution files in all required formats' }
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions for your applications.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security audits and implementation to protect your digital assets.'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.'
    },
    {
      icon: GitBranch,
      title: 'DevOps',
      description: 'Streamline your development process with CI/CD pipelines and automation.'
    }
  ];

  return (
    <>
      <SEO
        title="Our Services - Web Development, Mobile Apps, AI Solutions & Poster Design"
        description="RyphTech offers comprehensive web development, mobile app development, AI/ML solutions, and professional poster designing services. Custom software development with React, Next.js, and cutting-edge technologies."
        keywords={[
          'web development services',
          'mobile app development',
          'AI solutions',
          'machine learning services',
          'poster designing services',
          'graphic design services',
          'React development',
          'Next.js development',
          'custom software development',
          'technology consulting',
          'digital transformation',
          'cloud solutions'
        ]}
        url="/services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Technology Services",
          "provider": {
            "@type": "Organization",
            "name": "RyphTech"
          },
          "description": "Web development, mobile app development, AI solutions, and poster designing services",
          "serviceType": ["Web Development", "Mobile App Development", "AI/ML Solutions", "Poster Designing"],
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Technology Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Development"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mobile App Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Machine Learning Solutions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Poster Designing"
                }
              }
            ]
          }
        }}
      />
      <div className="pt-16">
        <div className="py-6 px-4 bg-gradient-to-br from-dark-900 to-dark-800 border-b border-dark-700">
    
        </div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Comprehensive IT solutions tailored to your business needs, from concept to deployment and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      {services.map((service, serviceIndex) => (
        <section key={service.title} className={`section-padding ${serviceIndex % 2 === 0 ? 'bg-white dark:bg-dark-800' : 'bg-gray-50 dark:bg-dark-900'}`}>
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={serviceIndex % 2 === 0 ? '' : 'lg:order-2'}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold font-poppins mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold font-poppins mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing Table for Web Development */}
                {service.title === 'Web Development' && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold font-poppins mb-6">Website Pricing Plans</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-gradient-to-r from-primary-600 to-purple-600 text-white">
                            <th className="px-4 py-3 text-left font-semibold">Feature</th>
                            <th className="px-4 py-3 text-center font-semibold">Budget</th>
                            <th className="px-4 py-3 text-center font-semibold">Basic</th>
                            <th className="px-4 py-3 text-center font-semibold">Standard</th>
                            <th className="px-4 py-3 text-center font-semibold">Professional</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-dark-700">
                          <tr className="border-b border-gray-200 dark:border-gray-600">
                            <td className="px-4 py-3 font-medium">Free Domain</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-dark-800">
                            <td className="px-4 py-3 font-medium">WhatsApp Chat</td>
                            <td className="px-4 py-3 text-center text-red-500">✘</td>
                            <td className="px-4 py-3 text-center text-red-500">✘</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-600">
                            <td className="px-4 py-3 font-medium">Live Chat</td>
                            <td className="px-4 py-3 text-center text-red-500">✘</td>
                            <td className="px-4 py-3 text-center text-red-500">✘</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-dark-800">
                            <td className="px-4 py-3 font-medium">CMS (Self Update)</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-600">
                            <td className="px-4 py-3 font-medium">Contact Forms</td>
                            <td className="px-4 py-3 text-center">Basic-1</td>
                            <td className="px-4 py-3 text-center">Advanced-2</td>
                            <td className="px-4 py-3 text-center">Advanced-2+</td>
                            <td className="px-4 py-3 text-center">Advanced-2+</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-dark-800">
                            <td className="px-4 py-3 font-medium">Theme Design</td>
                            <td className="px-4 py-3 text-center">Basic-1</td>
                            <td className="px-4 py-3 text-center">2</td>
                            <td className="px-4 py-3 text-center">3</td>
                            <td className="px-4 py-3 text-center">3</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-600">
                            <td className="px-4 py-3 font-medium">Dynamic Website</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-dark-800">
                            <td className="px-4 py-3 font-medium">SEO Friendly</td>
                            <td className="px-4 py-3 text-center text-red-500">✘</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-600">
                            <td className="px-4 py-3 font-medium">Social Media Integration</td>
                            <td className="px-4 py-3 text-center text-red-500">✘</td>
                            <td className="px-4 py-3 text-center text-red-500">✘</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-dark-800">
                            <td className="px-4 py-3 font-medium">Responsive Theme</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-600">
                            <td className="px-4 py-3 font-medium">Content Strategy</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-dark-800">
                            <td className="px-4 py-3 font-medium">Website Management</td>
                            <td className="px-4 py-3 text-center text-red-500">✘</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-600">
                            <td className="px-4 py-3 font-medium">24x7 Support</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                            <td className="px-4 py-3 text-center text-green-600">✔</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                      <p>* All plans include hosting and SSL certificate</p>
                      <p>* Custom features available upon request</p>
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={serviceIndex % 2 === 0 ? 'lg:order-2' : ''}
              >
                <div className="bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold font-poppins mb-6">Our Process</h3>
                  <div className="space-y-6">
                    {service.process.map((step) => (
                      <div key={step.step} className="flex items-start">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-sm font-bold">{step.step}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{step.title}</h4>
                          <p className="text-sm opacity-90">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Additional <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Beyond our core services, we offer specialized solutions to support your digital transformation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card p-6 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Why Choose <span className="gradient-text">RyphTech?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Fast Delivery',
                description: 'We deliver projects on time and within budget, without compromising on quality.'
              },
              {
                icon: Shield,
                title: 'Quality Assurance',
                description: 'Rigorous testing and quality control processes ensure your solution works flawlessly.'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Our experienced team brings diverse skills and deep industry knowledge to every project.'
              },
              {
                icon: Monitor,
                title: '24/7 Support',
                description: 'Round-the-clock support and maintenance to keep your systems running smoothly.'
              },
              {
                icon: Palette,
                title: 'Custom Solutions',
                description: 'Tailored solutions designed specifically for your business needs and objectives.'
              },
              {
                icon: Code,
                title: 'Modern Technology',
                description: 'We use the latest technologies and best practices to build future-proof solutions.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card p-6 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/projects" className="btn-secondary inline-flex items-center">
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Services;
