import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  Award,
  CheckCircle
} from 'lucide-react';

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Testimonials' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'mobile-development', label: 'Mobile Development' },
    { id: 'machine-learning', label: 'Machine Learning' }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      content: 'RyphTech transformed our business with their innovative web solution. The team is professional, responsive, and delivers exceptional results. Our e-commerce platform has seen a 300% increase in sales since launch.',
      rating: 5,
      category: 'web-development',
      project: 'E-commerce Platform',
      results: ['300% increase in sales', '50% reduction in cart abandonment', 'Improved user experience']
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder',
      company: 'DataFlow Analytics',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      content: 'Their machine learning expertise helped us build a predictive analytics platform that increased our efficiency by 300%. The AI models they developed are incredibly accurate and have revolutionized our decision-making process.',
      rating: 5,
      category: 'machine-learning',
      project: 'Predictive Analytics Platform',
      results: ['300% increase in efficiency', '95% prediction accuracy', 'Automated decision making']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'MobileFirst',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      content: 'The mobile app they developed exceeded our expectations. Clean code, great UI/UX, and excellent performance across all devices. Our user engagement has increased by 200% since the app launch.',
      rating: 5,
      category: 'mobile-development',
      project: 'Fitness Tracking App',
      results: ['200% increase in user engagement', '4.8/5 app store rating', 'Cross-platform compatibility']
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'CTO',
      company: 'RealEstate Pro',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      content: 'RyphTech delivered a comprehensive property management system that streamlined our entire operation. The system is intuitive, scalable, and has significantly improved our team productivity.',
      rating: 5,
      category: 'web-development',
      project: 'Property Management System',
      results: ['40% increase in productivity', 'Streamlined operations', 'Improved client satisfaction']
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Operations Director',
      company: 'FoodExpress',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      content: 'The food delivery app they built for us has been a game-changer. Real-time tracking, seamless payment integration, and excellent user experience. Our delivery times have improved by 35%.',
      rating: 5,
      category: 'mobile-development',
      project: 'Food Delivery App',
      results: ['35% improvement in delivery times', 'Enhanced user experience', 'Real-time tracking']
    },
    {
      id: 6,
      name: 'Robert Kim',
      role: 'Head of Analytics',
      company: 'CustomerInsight',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      content: 'Their customer sentiment analysis system has provided us with invaluable insights. The AI models accurately analyze customer feedback and help us make data-driven decisions to improve our services.',
      rating: 5,
      category: 'machine-learning',
      project: 'Customer Sentiment Analysis',
      results: ['90% sentiment accuracy', 'Real-time insights', 'Data-driven decisions']
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform Transformation',
      company: 'TechStart Inc.',
      category: 'web-development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      challenge: 'TechStart needed a modern e-commerce platform to replace their outdated system and increase online sales.',
      solution: 'We developed a custom e-commerce platform using React and Node.js with advanced features like AI-powered product recommendations, seamless payment integration, and mobile-responsive design.',
      results: [
        '300% increase in online sales',
        '50% reduction in cart abandonment',
        'Improved page load speed by 60%',
        'Enhanced user experience across all devices'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS']
    },
    {
      id: 2,
      title: 'AI-Powered Predictive Analytics',
      company: 'DataFlow Analytics',
      category: 'machine-learning',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      challenge: 'DataFlow needed to build a predictive analytics platform to help clients make data-driven business decisions.',
      solution: 'We developed a comprehensive ML platform using Python, TensorFlow, and React that processes large datasets and provides accurate predictions with interactive visualizations.',
      results: [
        '300% increase in operational efficiency',
        '95% prediction accuracy',
        'Real-time data processing',
        'Automated decision-making workflows'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL']
    },
    {
      id: 3,
      title: 'Cross-Platform Mobile App',
      company: 'MobileFirst',
      category: 'mobile-development',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      challenge: 'MobileFirst wanted to create a fitness tracking app that works seamlessly across iOS and Android platforms.',
      solution: 'We built a React Native application with advanced features like workout tracking, progress analytics, social features, and offline functionality.',
      results: [
        '200% increase in user engagement',
        '4.8/5 app store rating',
        'Cross-platform compatibility',
        'Offline functionality'
      ],
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo']
    }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => 
    activeCategory === 'all' || testimonial.category === activeCategory
  );

  const filteredCaseStudies = caseStudies.filter(caseStudy => 
    activeCategory === 'all' || caseStudy.category === activeCategory
  );

  const stats = [
    { number: '25+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Projects Completed', icon: CheckCircle },
    { number: '4.9', label: 'Average Rating', icon: Star },
    { number: '100%', label: 'Client Satisfaction', icon: Award }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Client <span className="gradient-text">Testimonials</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say about 
              working with RyphTech and the results we've delivered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-purple-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real feedback from real clients about their experience working with RyphTech.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary-600 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project: {testimonial.project}
                  </div>
                  <div className="space-y-1">
                    {testimonial.results.map((result, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Case <span className="gradient-text">Studies</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Detailed insights into how we've helped our clients achieve their goals and drive business growth.
            </p>
          </motion.div>

          <div className="space-y-12">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                        {caseStudy.company}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Challenge</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Solution</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{caseStudy.solution}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Results</h4>
                      <div className="space-y-2">
                        {caseStudy.results.map((result, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <TrendingUp className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Ready to Join Our <span className="gradient-text">Success Stories?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results and transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/projects" className="btn-secondary inline-flex items-center">
                View More Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
