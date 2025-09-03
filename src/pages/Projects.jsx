import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Smartphone, 
  Brain,
  Filter,
  Search,
  Plus,
  GraduationCap
} from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

import AdminOverlay from '../components/AdminOverlay';
import { listRows } from '../utils/crudService';

const Projects = () => {
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'App Development' },
    { id: 'ai', label: 'Machine Learning' },
    { id: 'college', label: 'College Projects' }
  ];

  const projectFields = [
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category' },
    { key: 'description', label: 'Description' },
    { key: 'image_url', label: 'Main Image URL' },
    { key: 'additional_images', label: 'Additional Images (JSON array of URLs or objects with url and alt properties)' },
    { key: 'technologies', label: 'Technologies' },
    { key: 'live_url', label: 'Live URL' },
    { key: 'github_url', label: 'GitHub URL' },
    { key: 'features', label: 'Features' }
  ];

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await listRows('projects');
      setProjects(data || []);
      setError(null);
    } catch (error) {
      console.error('Error loading projects:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (Array.isArray(project.technologies) && project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return (
      <div className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-red-600 mb-4">
            <p className="text-lg font-semibold">Error loading projects</p>
            <p className="text-sm">{error}</p>
          </div>
          <button 
            onClick={loadProjects}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web': return Globe;
      case 'mobile': return Smartphone;
      case 'ai': return Brain;
      case 'college': return GraduationCap;
      default: return Globe;
    }
  };

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  // Helper function to get project images for preview
  const getProjectPreviewImages = (project) => {
    const images = [];
    
    // Add main image if it exists
    if (project.image_url) {
      images.push(project.image_url);
    }
    
    // Add additional images if they exist
    if (Array.isArray(project.additional_images) && project.additional_images.length > 0) {
      project.additional_images.forEach((img) => {
        if (images.length < 3) { // Limit to 3 images for preview
          images.push(img.url || img);
        }
      });
    }
    
    // If no images, use placeholder
    if (images.length === 0) {
      images.push('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop');
    }
    
    return images;
  };

  return (
    <div className="pt-16">
      <div className="py-6 px-4 bg-gradient-to-br from-dark-900 to-dark-800 border-b border-dark-700">
  
      </div>
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
            {isAdmin && (
              <div className="mt-6">
                <button 
                  className="btn-primary inline-flex items-center"
                  onClick={() => {
                    // Navigate to admin projects page to add new project
                    window.location.href = '/admin/projects';
                  }}
                >
                  <Plus className="mr-2 w-5 h-5" />
                  Add Project
                </button>
              </div>
            )}
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
              {filteredProjects.map((project, index) => {
                const projectCard = (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    onClick={() => handleProjectClick(project.id)}
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      {(() => {
                        const images = getProjectPreviewImages(project);
                        
                        if (images.length === 1) {
                          return (
                            <img
                              src={images[0]}
                              alt={project.title}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          );
                        }
                        
                        // Show multiple images in a grid
                        return (
                          <div className="grid grid-cols-2 gap-1 h-48">
                            {images.slice(0, 4).map((img, index) => (
                              <div key={index} className="relative overflow-hidden">
                                <img
                                  src={img}
                                  alt={`${project.title} - Image ${index + 1}`}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {index === 3 && images.length > 4 && (
                                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">
                                      +{images.length - 4} more
                                    </span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        );
                      })()}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                          {project.live_url && (
                            <a
                              href={project.live_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="w-5 h-5 text-white" />
                            </a>
                          )}
                          {project.github_url && (
                            <a
                              href={project.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="w-5 h-5 text-white" />
                            </a>
                          )}
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
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors duration-300 flex items-center">
                        {project.title}
                        <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {Array.isArray(project.technologies) && project.technologies.map((tech) => (
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
                          {Array.isArray(project.features) && project.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                          {Array.isArray(project.features) && project.features.length > 3 && (
                            <li className="text-primary-600 text-xs">+{project.features.length - 3} more features</li>
                          )}
                        </ul>
                      </div>
                      
                      {/* Click hint */}
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-600">
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                          Click to view details
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );

                // Only wrap with AdminOverlay if user is admin
                return isAdmin ? (
                  <AdminOverlay
                    key={project.id}
                    table="projects"
                    item={project}
                    fields={projectFields}
                    onUpdate={loadProjects}
                    onDelete={loadProjects}
                    className=""
                  >
                    {projectCard}
                  </AdminOverlay>
                ) : (
                  projectCard
                );
              })}
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
