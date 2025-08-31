import { motion } from 'framer-motion';

import SEO from '../components/SEO';
import { 
  Target, 
  Eye, 
  Heart, 
  Zap, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering the highest quality solutions that exceed expectations.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our passion for technology drives us to create innovative solutions that make a real impact.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and close collaboration with our clients to achieve the best results.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge technologies and creative problem-solving approaches.'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Company Founded',
      description: 'RyphTech was established by Thanzeer J and Devdarsh M with a vision to transform businesses through technology.'
    },
    {
      year: '2023',
      title: 'First Major Project',
      description: 'Successfully delivered our first enterprise web application, establishing our reputation for quality.'
    },
    {
      year: '2024',
      title: 'Team Expansion',
      description: 'Grew our team to include talented developers, designers, and AI specialists.'
    },
    {
      year: '2024',
      title: '50+ Projects',
      description: 'Reached a milestone of 50+ successful projects across web, mobile, and AI domains.'
    }
  ];

  const stats = [
    { number: '2', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '25+', label: 'Happy Clients', icon: Users },
    { number: '100%', label: 'Client Satisfaction', icon: Heart }
  ];

  return (
    <>
      <SEO
        title="About RyphTech - Our Story, Mission & Values"
        description="Learn about RyphTech's journey, mission, and values. Founded by Thanzeer J and Devdarsh M, we're passionate about transforming businesses through innovative technology solutions."
        keywords={[
          'about RyphTech',
          'company story',
          'mission statement',
          'company values',
          'team founders',
          'technology company',
          'web development company',
          'software development team'
        ]}
        url="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "RyphTech",
          "url": "https://ryphtech.com",
          "logo": "https://ryphtech.com/logo.png",
          "description": "Modern web development and technology solutions",
          "foundingDate": "2023",
          "founder": [
            {
              "@type": "Person",
              "name": "Thanzeer J"
            },
            {
              "@type": "Person", 
              "name": "Devdarsh M"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          }
        }}
      />
      <div className="pt-16">
        <div className="py-6 px-4 bg-gradient-to-br from-dark-900 to-dark-800 border-b border-dark-700">
    
        </div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
              About <span className="gradient-text">RyphTech</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We are a passionate team of innovators, creators, and problem-solvers 
              dedicated to transforming businesses through cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2023 by Thanzeer J and Devdarsh M, RyphTech emerged from a shared vision 
                  to bridge the gap between innovative ideas and digital reality. What started as a 
                  small team of passionate developers has grown into a comprehensive IT services company.
                </p>
                <p>
                  Our founders recognized that many businesses struggled to find technology partners 
                  who could truly understand their needs and deliver solutions that drive real results. 
                  This insight led to the creation of RyphTech - a company built on the principles of 
                  excellence, innovation, and genuine partnership.
                </p>
                <p>
                  Today, we're proud to have helped over 25 businesses transform their digital presence 
                  and achieve their goals through our expertise in web development, app development, 
                  and machine learning solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold font-poppins mb-4">Our Mission</h3>
                <p className="text-lg mb-6">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage in the digital age.
                </p>
                <h3 className="text-2xl font-bold font-poppins mb-4">Our Vision</h3>
                <p className="text-lg">
                  To be the leading technology partner for businesses seeking to transform 
                  their digital presence and achieve sustainable growth through innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50 dark:bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape the way we work with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
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
                transition={{ duration: 0.5, delay: index * 0.05 }}
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

      {/* Timeline Section */}
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
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted technology partner for businesses worldwide.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-600 to-purple-600 h-full hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="card p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-4 h-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full border-4 border-white dark:border-dark-800 shadow-lg"></div>

                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50 dark:bg-black">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Ready to Work <span className="gradient-text">Together?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life and create 
              something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center">
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/team" className="btn-secondary inline-flex items-center">
                Meet Our Team
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

export default About;
