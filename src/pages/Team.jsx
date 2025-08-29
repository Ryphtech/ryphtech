import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Github, 
  Mail, 
  Globe,
  Award,
  Users,
  Zap,
  Heart,
  Plus
} from 'lucide-react';
import BackToHome from '../components/BackToHome';
import { useAdmin } from '../contexts/AdminContext';
import AdminOverlay from '../components/AdminOverlay';
import { listRows } from '../utils/crudService';

const Team = () => {
  const { isAdmin } = useAdmin();
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const teamFields = [
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'photo_url', label: 'Photo URL' },
    { key: 'linkedin_url', label: 'LinkedIn URL' }
  ];

  useEffect(() => {
    loadTeamMembers();
  }, []);

  const loadTeamMembers = async () => {
    try {
      const data = await listRows('team');
      setTeamMembers(data || []);
      setError(null);
    } catch (error) {
      console.error('❌ Error loading team members:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

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

  if (loading) {
    return (
      <div className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading team members...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-red-600 mb-4">
            <p className="text-lg font-semibold">Error loading team members</p>
            <p className="text-sm">{error}</p>
          </div>
          <button 
            onClick={loadTeamMembers}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <div className="py-4 bg-transparent">
        <BackToHome />
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
            {isAdmin && (
              <div className="mt-4">
                <AdminOverlay
                  table="team"
                  fields={teamFields}
                  onAdd={loadTeamMembers}
                  className="inline-block"
                >
                  <button className="btn-primary inline-flex items-center">
                    <Plus className="mr-2 w-5 h-5" />
                    Add Team Member
                  </button>
                </AdminOverlay>
              </div>
            )}
          </motion.div>



                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-500">
                  <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">No team members found</p>
                  <p className="text-sm">Team members will appear here once added.</p>
                </div>
              </div>
            ) : (
              teamMembers.map((member, index) => {
                const memberCard = (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6 text-center group"
                  >
                    <div className="mb-6">
                      <img
                        src={member.photo_url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{member.role}</p>

                    <div className="flex justify-center space-x-3">
                      {member.linkedin_url && (
                        <a
                          href={member.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-gray-100 dark:bg-dark-700 hover:bg-primary-600 hover:text-white rounded flex items-center justify-center transition-all duration-300"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                );

                // Only wrap with AdminOverlay if user is admin
                return isAdmin ? (
                  <AdminOverlay
                    key={member.id}
                    table="team"
                    item={member}
                    fields={teamFields}
                    onUpdate={loadTeamMembers}
                    onDelete={loadTeamMembers}
                    className=""
                  >
                    {memberCard}
                  </AdminOverlay>
                ) : (
                  memberCard
                );
              })
            )}
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
