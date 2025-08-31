import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  User,
  Building
} from 'lucide-react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@ryphtech.com', 'support@ryphtech.com'],
      link: 'mailto:hello@ryphtech.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['123 Tech Street', 'Innovation District', 'San Francisco, CA 94105'],
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      link: null
    }
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications'
    },
    {
      title: 'Mobile Development',
      description: 'iOS and Android applications'
    },
    {
      title: 'Machine Learning',
      description: 'AI and data analytics solutions'
    },
    {
      title: 'Consulting',
      description: 'Technology strategy and planning'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual EmailJS service ID, template ID, and public key
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact RyphTech - Get in Touch for Your Next Project"
        description="Contact RyphTech for web development, mobile apps, and AI solutions. Get a free consultation and quote for your technology project. Located in San Francisco."
        keywords={[
          'contact RyphTech',
          'web development quote',
          'mobile app development contact',
          'AI solutions consultation',
          'technology consulting',
          'software development contact',
          'project consultation',
          'free quote'
        ]}
        url="/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact RyphTech",
          "description": "Get in touch with RyphTech for technology solutions",
          "url": "https://ryphtech.com/contact",
          "mainEntity": {
            "@type": "Organization",
            "name": "RyphTech",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "hello@ryphtech.com",
                "availableLanguage": "English"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+1-555-987-6543",
                "contactType": "technical support",
                "email": "support@ryphtech.com",
                "availableLanguage": "English"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Tech Street",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "postalCode": "94105",
              "addressCountry": "US"
            }
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
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Ready to start your project? Let's discuss how we can help bring your vision to life 
              and create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-poppins mb-6">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-green-800 dark:text-green-200">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                    <span className="text-red-800 dark:text-red-200">
                      Sorry, there was an error sending your message. Please try again or contact us directly.
                    </span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-poppins mb-6">
                Contact <span className="gradient-text">Information</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Get in touch with us through any of these channels. We're here to help!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <div key={i}>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                              >
                                {detail}
                              </a>
                            ) : (
                              <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Services We Offer */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Services We Offer</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 bg-gray-50 dark:bg-dark-700 rounded-lg"
                    >
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about working with RyphTech.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary depending on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We\'ll provide a detailed timeline during our initial consultation.'
              },
              {
                question: 'Do you provide ongoing support after launch?',
                answer: 'Yes, we offer comprehensive post-launch support including maintenance, updates, and technical support. We can also provide ongoing development services for new features.'
              },
              {
                question: 'What technologies do you specialize in?',
                answer: 'We work with modern technologies including React, Node.js, Python, React Native, Flutter, and various cloud platforms. We choose the best tech stack for each project.'
              },
              {
                question: 'How do you handle project communication?',
                answer: 'We maintain regular communication through scheduled meetings, progress updates, and project management tools. You\'ll have a dedicated project manager as your main point of contact.'
              },
              {
                question: 'What is your pricing structure?',
                answer: 'We offer flexible pricing based on project scope and requirements. We provide detailed quotes after understanding your needs. We can work on fixed-price or time-and-materials basis.'
              },
              {
                question: 'Do you work with international clients?',
                answer: 'Absolutely! We work with clients worldwide and have experience in different time zones. We use modern collaboration tools to ensure smooth communication regardless of location.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
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
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+15551234567" className="btn-primary inline-flex items-center">
                Call Us Now
                <Phone className="ml-2 w-5 h-5" />
              </a>
              <a href="mailto:hello@ryphtech.com" className="btn-secondary inline-flex items-center">
                Send Email
                <Mail className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Contact;
