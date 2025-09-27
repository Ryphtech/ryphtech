import React, { useEffect, useState } from 'react';
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

import { listRows, createRow } from '../utils/crudService';
import { useAdmin } from '../contexts/AdminContext';
import { AnimatedTestimonials } from '../components/ui/animated-testimonials';


const Testimonials = () => {
  const { isAdmin } = useAdmin();
  const [activeCategory, setActiveCategory] = useState('all');
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', role: '', company: '', content: '', rating: 5 });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');

  const categories = [
    { id: 'all', label: 'All Testimonials' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'mobile-development', label: 'Mobile Development' },
    { id: 'machine-learning', label: 'Machine Learning' }
  ];

  useEffect(() => { loadTestimonials(); }, []);

  const loadTestimonials = async () => {
    try {
      const data = await listRows('testimonials');
      setTestimonials(data);
      setError('');
    } catch (e) {
      setError(e.message || 'Failed to load testimonials');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess('');
    setError('');
    try {
      await createRow('testimonials', { 
        name: form.name,
        role: form.role,
        company: form.company,
        content: form.content,
        rating: Number(form.rating) || 5,
        approved: false,
      });
      setForm({ name: '', role: '', company: '', content: '', rating: 5 });
      setSuccess('Thank you! Your testimonial was submitted and is pending approval.');
      await loadTestimonials();
    } catch (e) {
      setError(e.message || 'Failed to submit testimonial');
    } finally {
      setSubmitting(false);
    }
  };

  const filteredTestimonials = (testimonials || [])
    .filter(t => isAdmin || t.approved)
    .filter(testimonial => activeCategory === 'all' || testimonial.category === activeCategory);

  // Transform testimonials for AnimatedTestimonials component
  const animatedTestimonials = filteredTestimonials.map(testimonial => ({
    quote: testimonial.content || '',
    name: testimonial.name || 'Client',
    designation: `${testimonial.role || 'Client'}${testimonial.company ? ` at ${testimonial.company}` : ''}`,
    src: testimonial.image_url || 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=500&fit=crop&crop=face'
  }));

  // Fallback testimonials for demonstration if none exist
  const fallbackTestimonials = [
    {
      quote: "RyphTech delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and innovative features have completely transformed our online business.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "The mobile app development project was seamless from start to finish. RyphTech's team demonstrated exceptional technical expertise and delivered on time and within budget.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Working with RyphTech has been a game-changer for our organization. Their machine learning solutions have provided insights that were previously impossible to obtain.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];

  // Use fallback testimonials if no real testimonials exist
  const displayTestimonials = animatedTestimonials.length > 0 ? animatedTestimonials : fallbackTestimonials;

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

  const stats = [
    { number: '25+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Projects Completed', icon: CheckCircle },
    { number: '4.9', label: 'Average Rating', icon: Star },
    { number: '100%', label: 'Client Satisfaction', icon: Award }
  ];

  return (
    <div className="pt-16">
      <div className="py-6 px-4 bg-gradient-to-br from-dark-900 to-dark-800 border-b border-dark-700">
  
      </div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
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

      {/* Submit Testimonial */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Share your experience</h2>
            {success && <div className="mb-3 text-green-600">{success}</div>}
            {error && <div className="mb-3 text-red-600">{error}</div>}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white" placeholder="Your name" required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
              <input className="rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white" placeholder="Your role" value={form.role} onChange={(e)=>setForm({...form, role:e.target.value})} />
              <input className="rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white" placeholder="Company" value={form.company} onChange={(e)=>setForm({...form, company:e.target.value})} />
              <input className="rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white" type="number" min={1} max={5} placeholder="Rating (1-5)" value={form.rating} onChange={(e)=>setForm({...form, rating:e.target.value})} />
              <div className="md:col-span-2">
                <textarea className="w-full rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white" rows={4} placeholder="Write your testimonial..." required value={form.content} onChange={(e)=>setForm({...form, content:e.target.value})} />
              </div>
              <div className="md:col-span-2">
                <button disabled={submitting} className="btn-primary">
                  {submitting ? 'Submitting...' : 'Submit Testimonial'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-500 text-white">
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
      <section className="section-padding bg-white dark:bg-black">
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

          {/* Animated Testimonials */}
          <div className="mb-12">
            {!loading && displayTestimonials.length > 0 && (
              <AnimatedTestimonials 
                testimonials={displayTestimonials} 
                autoplay={true}
              />
            )}
            {loading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                <p className="text-gray-500 dark:text-gray-400">Loading testimonials...</p>
              </div>
            )}
          </div>

                    {/* Legacy Testimonials Grid (Admin Only) */}
          {isAdmin && (
            <>
              <h3 className="text-xl md:text-2xl font-bold font-poppins mb-6 md:mb-8 text-center">
                All Testimonials (Admin View)
              </h3>
              {filteredTestimonials.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                  {filteredTestimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="card p-4 md:p-6"
                    >
                      <div className="flex mb-3 md:mb-4">
                        {[...Array(testimonial.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <div className="mb-4 md:mb-6">
                        <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary-600 mb-3 md:mb-4" />
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 italic leading-relaxed">
                          "{testimonial.content}"
                        </p>
                      </div>

                      <div className="flex items-center mb-3 md:mb-4">
                        <img
                          src={testimonial.image_url || 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face'}
                          alt={testimonial.name}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4"
                        />
                        <div>
                          <div className="font-semibold text-sm md:text-base">{testimonial.name}</div>
                          <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 md:py-12">
                  <Quote className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-3 md:mb-4" />
                  <p className="text-base md:text-lg text-gray-500 dark:text-gray-400">
                    No testimonials in the database yet. Testimonials will appear here once submitted and approved.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins mb-3 md:mb-4">
              Case <span className="gradient-text">Studies</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Detailed insights into how we've helped our clients achieve their goals and drive business growth.
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  <div className="relative overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-48 md:h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 lg:p-8">
                    <div className="mb-3 md:mb-4">
                      <span className="px-2 md:px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs md:text-sm font-medium">
                        {caseStudy.company}
                      </span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold font-poppins mb-3 md:mb-4">{caseStudy.title}</h3>
                    
                    <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2 text-sm md:text-base">Challenge</h4>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1 md:mb-2 text-sm md:text-base">Solution</h4>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{caseStudy.solution}</p>
                      </div>
                    </div>

                    <div className="mb-4 md:mb-6">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 md:mb-3 text-sm md:text-base">Results</h4>
                      <div className="space-y-1 md:space-y-2">
                        {caseStudy.results.map((result, i) => (
                          <div key={i} className="flex items-center text-xs md:text-sm text-gray-600 dark:text-gray-400">
                            <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-primary-600 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 md:mb-3 text-sm md:text-base">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1 md:gap-2">
                        {caseStudy.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 md:px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs md:text-sm"
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
        <div className="container-custom text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins mb-3 md:mb-4">
              Ready to Join Our <span className="gradient-text">Success Stories?</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results and transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="/projects" className="btn-secondary inline-flex items-center justify-center">
                View More Work
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
