import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Github, 
  Mail, 
  Globe,
  Award,
  Users,
  Zap,
  Heart
} from 'lucide-react';

const Team = () => {
  const founders = [
    {
      name: 'Thanzeer J',
      role: 'Co-Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Visionary leader with expertise in web development and business strategy. Passionate about creating innovative solutions that drive business growth.',
      skills: ['Web Development', 'Business Strategy', 'Product Management', 'Team Leadership'],
      social: {
        linkedin: 'https://linkedin.com/in/thanzeer-j',
        github: 'https://github.com/thanzeer-j',
        email: 'thanzeer@ryphtech.com',
        website: 'https://thanzeer.dev'
      }
    },
    {
      name: 'Devdarsh M',
      role: 'Co-Founder & CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Technical expert specializing in mobile development and machine learning. Committed to building scalable, cutting-edge technology solutions.',
      skills: ['Mobile Development', 'Machine Learning', 'System Architecture', 'Technical Leadership'],
      social: {
        linkedin: 'https://linkedin.com/in/devdarsh-m',
        github: 'https://github.com/devdarsh-m',
        email: 'devdarsh@ryphtech.com',
        website: 'https://devdarsh.dev'
      }
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Senior Web Developer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Full-stack developer with 5+ years of experience in React, Node.js, and cloud technologies.',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
      social: {
        linkedin: 'https://linkedin.com/in/sarah-chen',
        github: 'https://github.com/sarah-chen',
        email: 'sarah@ryphtech.com'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Mobile App Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      bio: 'Experienced mobile developer specializing in React Native and Flutter applications.',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      social: {
        linkedin: 'https://linkedin.com/in/michael-rodriguez',
        github: 'https://github.com/michael-rodriguez',
        email: 'michael@ryphtech.com'
      }
    },
    {
      name: 'Emily Watson',
      role: 'Machine Learning Engineer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'ML specialist with expertise in Python, TensorFlow, and deploying AI solutions in production.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps'],
      social: {
        linkedin: 'https://linkedin.com/in/emily-watson',
        github: 'https://github.com/emily-watson',
        email: 'emily@ryphtech.com'
      }
    },
    {
      name: 'David Kim',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
      bio: 'Creative designer focused on creating intuitive and engaging user experiences.',
      skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
      social: {
        linkedin: 'https://linkedin.com/in/david-kim',
        behance: 'https://behance.net/david-kim',
        email: 'david@ryphtech.com'
      }
    },
    {
      name: 'Lisa Thompson',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      bio: 'DevOps specialist ensuring smooth deployment and infrastructure management.',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
      social: {
        linkedin: 'https://linkedin.com/in/lisa-thompson',
        github: 'https://github.com/lisa-thompson',
        email: 'lisa@ryphtech.com'
      }
    },
    {
      name: 'Alex Johnson',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Experienced project manager ensuring timely delivery and client satisfaction.',
      skills: ['Agile', 'Scrum', 'Client Communication', 'Risk Management'],
      social: {
        linkedin: 'https://linkedin.com/in/alex-johnson',
        email: 'alex@ryphtech.com'
      }
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We\'re passionate about technology and creating solutions that make a difference.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to solve complex problems.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to client relationships.'
    }
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
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A talented group of innovators, creators, and problem-solvers dedicated to 
              transforming businesses through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
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
              Our <span className="gradient-text">Founders</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries behind RyphTech who are driving innovation and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8 text-center"
              >
                <div className="relative mb-8">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{founder.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {founder.bio}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  {founder.social.linkedin && (
                    <a
                      href={founder.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 dark:bg-dark-700 hover:bg-primary-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {founder.social.github && (
                    <a
                      href={founder.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 dark:bg-dark-700 hover:bg-primary-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {founder.social.email && (
                    <a
                      href={`mailto:${founder.social.email}`}
                      className="w-10 h-10 bg-gray-100 dark:bg-dark-700 hover:bg-primary-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                  {founder.social.website && (
                    <a
                      href={founder.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 dark:bg-dark-700 hover:bg-primary-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
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
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the talented individuals who make RyphTech a success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group"
              >
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {member.bio}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-100 dark:bg-dark-700 hover:bg-primary-600 hover:text-white rounded flex items-center justify-center transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-100 dark:bg-dark-700 hover:bg-primary-600 hover:text-white rounded flex items-center justify-center transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-gray-100 dark:bg-dark-700 hover:bg-primary-600 hover:text-white rounded flex items-center justify-center transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide our team and shape our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
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
              Join Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center">
                Get in Touch
                <Mail className="ml-2 w-5 h-5" />
              </a>
              <a href="/careers" className="btn-secondary inline-flex items-center">
                View Openings
                <Users className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
