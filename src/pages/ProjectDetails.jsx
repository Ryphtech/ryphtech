import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Smartphone, 
  Brain,
  GraduationCap,
  ArrowLeft,
  Calendar,
  User,
  Tag
} from 'lucide-react';
import { getRowById } from '../utils/crudService';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    loadProject();
  }, [id]);

  // Keyboard navigation for images
  useEffect(() => {
    const handleKeyDown = (e) => {
      const images = getProjectImages();
      if (images.length <= 1) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevImage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextImage();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project]);

  const loadProject = async () => {
    try {
      setLoading(true);
      const data = await getRowById('projects', id);
      setProject(data);
      setError(null);
    } catch (error) {
      console.error('Error loading project:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web': return Globe;
      case 'mobile': return Smartphone;
      case 'ai': return Brain;
      case 'college': return GraduationCap;
      default: return Globe;
    }
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case 'web': return 'Web Development';
      case 'mobile': return 'App Development';
      case 'ai': return 'Machine Learning';
      case 'college': return 'College Projects';
      default: return 'Development';
    }
  };

  // Helper function to get all project images
  const getProjectImages = () => {
    if (!project) return [];
    
    const images = [];
    
    // Add main image if it exists
    if (project.image_url) {
      images.push({
        url: project.image_url,
        alt: `${project.title} - Main Image`,
        type: 'main'
      });
    }
    
    // Add additional images if they exist
    if (Array.isArray(project.additional_images) && project.additional_images.length > 0) {
      project.additional_images.forEach((img, index) => {
        images.push({
          url: img.url || img,
          alt: img.alt || `${project.title} - Image ${index + 1}`,
          type: 'additional'
        });
      });
    }
    
    // If no images, use placeholder
    if (images.length === 0) {
      images.push({
        url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
        alt: 'Project placeholder image',
        type: 'placeholder'
      });
    }
    
    return images;
  };

  const handleImageChange = (index) => {
    setSelectedImageIndex(index);
  };

  const nextImage = () => {
    const images = getProjectImages();
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = getProjectImages();
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (loading) {
    return (
      <div className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-red-600 mb-4">
            <p className="text-lg font-semibold">Error loading project</p>
            <p className="text-sm">{error || 'Project not found'}</p>
          </div>
          <button 
            onClick={() => navigate('/projects')}
            className="btn-primary"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Back Navigation */}
      <div className="bg-white dark:bg-black border-b b mt-10">
        <div className="container-custom py-4">
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            {/* Project Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-6">
                {React.createElement(getCategoryIcon(project.category), { className: "w-4 h-4 mr-2" })}
                {getCategoryLabel(project.category)}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                {project.description}
              </p>
            </div>

            {/* Project Image Gallery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl mb-12"
            >
              {(() => {
                const images = getProjectImages();
                const currentImage = images[selectedImageIndex];
                
                return (
                  <>
                    <img
                      src={currentImage.url}
                      alt={currentImage.alt}
                      className="w-full h-96 md:h-[500px] object-contain bg-black"
                    />
                    
                    {/* Navigation Controls */}
                    {images.length > 1 && (
                      <>
                        {/* Previous Button */}
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 text-white z-10"
                          aria-label="Previous image"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        {/* Next Button */}
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300 text-white z-10"
                          aria-label="Next image"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        
                        {/* Image Counter */}
                        <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-sm font-medium z-10">
                          {selectedImageIndex + 1} / {images.length}
                        </div>
                      </>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none">
                      <div className="absolute bottom-6 left-6 right-6 flex gap-4 pointer-events-auto">
                        {project.live_url && (
                          <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg flex items-center hover:bg-white/30 transition-colors duration-300 text-white font-medium"
                          >
                            <ExternalLink className="w-5 h-5 mr-2" />
                            View Live
                          </a>
                        )}
                        {project.github_url && (
                          <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg flex items-center hover:bg-white/30 transition-colors duration-300 text-white font-medium"
                          >
                            <Github className="w-5 h-5 mr-2" />
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
          
          {/* Thumbnail Gallery */}
          {(() => {
            const images = getProjectImages();
            if (images.length <= 1) return null;
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8"
              >
                <div className="flex gap-4 overflow-x-auto pb-4">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageChange(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === selectedImageIndex
                          ? 'border-primary-500 shadow-lg scale-105'
                          : 'border-gray-200 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-400'
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-contain bg-black"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            );
          })()}
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h2 className="text-3xl font-bold font-poppins mb-6">Project Overview</h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  {Array.isArray(project.features) && project.features.length > 0 && (
                    <div className="mt-12">
                      <h3 className="text-2xl font-bold font-poppins mb-6">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            className="flex items-start p-4 bg-gray-50 dark:bg-dark-700 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Image Gallery Section */}
                  {(() => {
                    const images = getProjectImages();
                    if (images.length <= 1) return null;
                    
                    return (
                      <div className="mt-12">
                        <h3 className="text-2xl font-bold font-poppins mb-6">Project Gallery</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {images.map((image, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                              className="group cursor-pointer"
                              onClick={() => handleImageChange(index)}
                            >
                              <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                <img
                                  src={image.url}
                                  alt={image.alt}
                                  className="w-full h-48 object-contain bg-black group-hover:scale-100 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="sticky top-24"
                >
                  {/* Project Info Card */}
                  <div className="bg-gray-50 dark:bg-dark-700 rounded-2xl p-6 mb-6">
                    <h3 className="text-xl font-bold font-poppins mb-4">Project Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Tag className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {getCategoryLabel(project.category)}
                        </span>
                      </div>
                      {project.created_at && (
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {new Date(project.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  {Array.isArray(project.technologies) && project.technologies.length > 0 && (
                    <div className="bg-gray-50 dark:bg-dark-700 rounded-2xl p-6">
                      <h3 className="text-xl font-bold font-poppins mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Start Your Project
                <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/projects" className="btn-secondary inline-flex items-center">
                View More Projects
                <ArrowLeft className="mr-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
