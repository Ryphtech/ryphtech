import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Smartphone, 
  Brain,
  Filter,
  Search
} from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'App Development' },
    { id: 'ai', label: 'Machine Learning' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A modern e-commerce platform built with React and Node.js, featuring advanced search, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['User Authentication', 'Product Management', 'Payment Processing', 'Order Tracking']
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Workout Tracking', 'Progress Analytics', 'Social Features', 'Offline Mode']
    },
    {
      id: 3,
      title: 'Predictive Analytics Dashboard',
      category: 'ai',
      description: 'AI-powered analytics platform that provides predictive insights for business decision making.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Data Visualization', 'Predictive Models', 'Real-time Analytics', 'Custom Reports']
    },
    {
      id: 4,
      title: 'Real Estate Management System',
      category: 'web',
      description: 'Comprehensive property management system with listing management, client portal, and financial tracking.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Property Listings', 'Client Portal', 'Financial Tracking', 'Document Management']
    },
    {
      id: 5,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'Mobile application for food delivery with real-time tracking, payment integration, and restaurant management.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Real-time Tracking', 'Payment Integration', 'Restaurant Dashboard', 'Order Management']
    },
    {
      id: 6,
      title: 'Customer Sentiment Analysis',
      category: 'ai',
      description: 'Machine learning system that analyzes customer feedback and provides sentiment insights for business improvement.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Python', 'NLTK', 'Scikit-learn', 'Django'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Text Analysis', 'Sentiment Scoring', 'Trend Detection', 'Automated Reports']
    },
    {
      id: 7,
      title: 'Learning Management System',
      category: 'web',
      description: 'Educational platform with course management, student progress tracking, and interactive learning tools.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      technologies: ['React', 'Django', 'PostgreSQL', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Course Management', 'Student Progress', 'Interactive Tools', 'Assessment System']
    },
    {
      id: 8,
      title: 'Smart Home Control App',
      category: 'mobile',
      description: 'IoT mobile application for controlling smart home devices with automation and energy monitoring.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      technologies: ['React Native', 'MQTT', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Device Control', 'Automation Rules', 'Energy Monitoring', 'Security Features']
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web': return Globe;
      case 'mobile': return Smartphone;
      case 'ai': return Brain;
      default: return Globe;
    }
  };

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
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore our portfolio of successful projects that showcase our expertise 
              in web development, app development, and machine learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card overflow-hidden group"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        <a
                          href={project.liveUrl}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={project.githubUrl}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        {React.createElement(getCategoryIcon(project.category), { className: "w-5 h-5 text-white" })}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Key Features:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {project.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-primary-600 text-xs">+{project.features.length - 3} more features</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center">
              Start Your Project
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
