import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'mobile-development', label: 'Mobile Development' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'technology', label: 'Technology Trends' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: What to Expect in 2024',
      excerpt: 'Explore the latest trends in web development, from AI-powered tools to new frameworks that are shaping the future of the web.',
      content: 'Web development is evolving at an unprecedented pace. In 2024, we\'re seeing the rise of AI-powered development tools, the adoption of new frameworks like Svelte and Solid.js, and a growing emphasis on performance and accessibility...',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      category: 'web-development',
      author: 'Thanzeer J',
      date: '2024-01-15',
      readTime: '5 min read',
      tags: ['Web Development', 'AI', 'Trends', '2024'],
      featured: true
    },
    {
      id: 2,
      title: 'Building Cross-Platform Mobile Apps with React Native',
      excerpt: 'Learn how to create high-performance mobile applications that work seamlessly across iOS and Android platforms.',
      content: 'React Native has revolutionized mobile app development by enabling developers to write once and deploy everywhere. In this comprehensive guide, we\'ll explore best practices for building cross-platform applications...',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      category: 'mobile-development',
      author: 'Devdarsh M',
      date: '2024-01-10',
      readTime: '8 min read',
      tags: ['React Native', 'Mobile Development', 'Cross-Platform', 'JavaScript']
    },
    {
      id: 3,
      title: 'Machine Learning in Production: Best Practices for Deployment',
      excerpt: 'Discover the essential practices for deploying machine learning models in production environments.',
      content: 'Deploying machine learning models in production requires careful consideration of scalability, monitoring, and maintenance. This article covers the key aspects of ML model deployment...',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'machine-learning',
      author: 'Thanzeer J',
      date: '2024-01-05',
      readTime: '12 min read',
      tags: ['Machine Learning', 'Production', 'Deployment', 'AI']
    },
    {
      id: 4,
      title: 'The Rise of Edge Computing: Implications for Developers',
      excerpt: 'Understanding how edge computing is changing the landscape of application development and deployment.',
      content: 'Edge computing is transforming how we think about application architecture. By bringing computation closer to data sources, we can achieve lower latency and better performance...',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      category: 'technology',
      author: 'Devdarsh M',
      date: '2023-12-28',
      readTime: '6 min read',
      tags: ['Edge Computing', 'Cloud', 'Performance', 'Architecture']
    },
    {
      id: 5,
      title: 'Optimizing React Applications for Performance',
      excerpt: 'Practical techniques for improving the performance of React applications and enhancing user experience.',
      content: 'Performance optimization is crucial for providing a smooth user experience. In this guide, we\'ll explore various techniques for optimizing React applications...',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      category: 'web-development',
      author: 'Thanzeer J',
      date: '2023-12-20',
      readTime: '10 min read',
      tags: ['React', 'Performance', 'Optimization', 'JavaScript']
    },
    {
      id: 6,
      title: 'The Impact of AI on Software Development',
      excerpt: 'How artificial intelligence is transforming the software development process and what it means for developers.',
      content: 'AI is not just changing the products we build; it\'s transforming how we build them. From code generation to testing automation, AI tools are becoming integral to the development process...',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      category: 'technology',
      author: 'Devdarsh M',
      date: '2023-12-15',
      readTime: '7 min read',
      tags: ['AI', 'Software Development', 'Automation', 'Future']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Insights, tutorials, and thoughts on technology, development, and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((featuredPost) => (
        <section key={featuredPost.id} className="section-padding bg-white dark:bg-dark-800">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                Featured Post
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(featuredPost.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="btn-primary inline-flex items-center self-start">
                    Read More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Blog Posts Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center group">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.filter(post => !post.featured).length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Stay Updated with Our <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter for the latest articles, tutorials, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
