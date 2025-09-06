import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import DarkVeil from '../blocks/Backgrounds/DarkVeil/DarkVeil';
import {
  ArrowRight,
  Globe,
  Smartphone,
  Brain,
  Star,
  Users,
  Award,
  CheckCircle,
  Play
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { listRows } from '../utils/crudService';
import BlurText from "../blocks/TextAnimations/BlurText/BlurText";
import SEO from '../components/SEO';

import LogoLoop from '../blocks/Animations/LogoLoop/LogoLoop';
import ScrambledText from '../blocks/TextAnimations/ScrambledText/ScrambledText';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { BackgroundGradient } from '../components/ui/background-gradient';
import { FlipWords } from '../components/ui/flip-words';


const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loopConfig, setLoopConfig] = useState({ logoHeight: 44, gap: 36, speed: 120 });
  
  // Words for FlipWords animation
  const flipWords = ["Digital Reality", "Innovation", "Success", "Excellence"];

  useEffect(() => {
    (async () => {
      try {
        const data = await listRows('testimonials');
        const approved = (data || []).filter(t => t.approved);
        setTestimonials(approved.slice(0, 3));
      } catch {
        setTestimonials([]);
      }
    })();
  }, []);

  useEffect(() => {
    const updateLoop = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setLoopConfig({ logoHeight: 28, gap: 20, speed: 80 });
      } else if (width < 768) {
        setLoopConfig({ logoHeight: 36, gap: 28, speed: 100 });
      } else if (width < 1024) {
        setLoopConfig({ logoHeight: 42, gap: 32, speed: 110 });
      } else {
        setLoopConfig({ logoHeight: 48, gap: 40, speed: 120 });
      }
    };

    updateLoop();
    window.addEventListener('resize', updateLoop);
    return () => window.removeEventListener('resize', updateLoop);
  }, []);

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: ['React & Next.js', 'Node.js & Express', 'Database Design', 'API Development']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment']
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'AI-powered solutions and predictive analytics to transform your business.',
      features: ['Python & TensorFlow', 'Data Analysis', 'Model Training', 'AI Integration']
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Award },
    { number: '25+', label: 'Happy Clients', icon: Users },
    { number: '4.9', label: 'Client Rating', icon: Star },
    { number: '24/7', label: 'Support Available', icon: CheckCircle }
  ];

  return (
    <>
      <SEO
        title="RyphTech - Modern Web Development & Technology Solutions"
        description="RyphTech delivers cutting-edge web development, mobile apps, and AI solutions. Expert React, Next.js, and machine learning services for modern businesses."
        keywords={[
          'web development',
          'React development',
          'Next.js development',
          'mobile app development',
          'AI solutions',
          'machine learning',
          'software development',
          'technology consulting',
          'digital transformation',
          'custom software'
        ]}
        url="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "RyphTech",
          "url": "https://ryphtech.com",
          "description": "Modern web development and technology solutions",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ryphtech.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      <div className="">
        {/* Mobile Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-24 lg:hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <DarkVeil speed={2} />
        </div>

        <div className="relative z-10 text-center px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-3 bg-primary-100/20 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-6 border border-primary-200/30 dark:border-primary-800/30"
            >
              <Star className="w-4 h-4 text-primary-600" />
              Trusted by 25+ Clients Worldwide
            </motion.div>

            {/* Mobile Optimized Heading */}
            <h1 className="text-3xl font-bold font-poppins tracking-tight leading-tight mb-4 px-2 text-center">
              <BlurText
                text="Transforming Ideas Into "
                delay={150}
                animateBy="words"
                direction="top"
                className="text-3xl font-bold font-poppins tracking-tight block mb-3 text-center"
              />
              <span className="block gradient-text text-3xl text-center">
                <FlipWords words={flipWords} duration={3000}  />
              </span>
            </h1>
            
            {/* Mobile Optimized Description */}
            <ScrambledText
              radius={150}
              duration={0.8}
              speed={0.3}
              scrambleChars=".:"
              className="text-base text-gray-600 dark:text-gray-300 mb-8 mx-auto max-w-sm px-2"
            >
              RyphTech delivers cutting-edge web development, app development, and machine learning solutions that drive business growth and innovation.
            </ScrambledText>

            {/* Mobile Optimized Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-4 mb-8"
            >
              <div className="flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span>4.9/5 Client Rating</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>50+ Projects Completed</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </motion.div>

            {/* Mobile Optimized Buttons */}
            <div className="flex flex-col gap-4 mb-8 px-4">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center group">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/projects" className="btn-secondary inline-flex items-center justify-center group">
                View Our Work
                <Play className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Optimized Tech Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Powered by cutting-edge technologies</p>
              <LogoLoop
                logos={techLogos}
                speed={loopConfig.speed}
                direction="left"
                logoHeight={loopConfig.logoHeight}
                gap={loopConfig.gap}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#000"
                ariaLabel="Technology partners"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Desktop Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-24 hidden lg:flex">
        {/* Animated Background */}
        <div className="absolute inset-0 ">
          <DarkVeil
            speed={2} />
        </div>

        <div className="container-custom relative z-10 text-center px-4 pt-10 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-primary-100/20 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-primary-200/30 dark:border-primary-800/30"
            >
              <Star className="w-3 h-3 md:w-4 md:h-4 text-primary-600" />
              Trusted by 25+ Clients Worldwide
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-poppins tracking-tight leading-[1.1] sm:leading-[1.08] md:leading-[1.06] mb-3 md:mb-6 px-2 text-center">
              <BlurText
                text="Transforming Ideas Into"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-poppins tracking-tight block mb-2 text-center pl-40"
              />
              <span className="block gradient-text mb-2 md:mb-3 text-center">
                <FlipWords words={flipWords} duration={3000} />
              </span>
            </h1>
            
            <ScrambledText
              radius={100}
              duration={0.8}
              speed={0.3}
              scrambleChars=".:"
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 mx-auto max-w-4xl px-4 sm:px-6"
            >
              RyphTech delivers cutting-edge web development, app development, and machine learning solutions that drive business growth and innovation.
            </ScrambledText>

            {/* Quick Stats Row - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6 md:mb-8 px-4"
            >
              <div className="flex items-center gap-2 text-sm md:text-base text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>4.9/5 Client Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>50+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base text-gray-500 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center mb-8 md:mb-12 px-4">
              <Link to="/contact" className="w-full sm:w-auto text-center">
                <HoverBorderGradient as="div" containerClassName="rounded-full" className="dark:bg-black bg-white text-black dark:text-white inline-flex items-center justify-center px-6">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </HoverBorderGradient>
              </Link>
              <Link to="/projects" className="w-full sm:w-auto text-center">
                <HoverBorderGradient as="div" containerClassName="rounded-full" className="dark:bg-black bg-white text-black dark:text-white inline-flex items-center justify-center px-6">
                  View Our Work
                  <Play className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </HoverBorderGradient>
              </Link>
            </div>
          </motion.div>

          {/* Tech Logos Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 md:mt-12 lg:mt-16 px-4"
          >
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-6">Powered by cutting-edge technologies</p>
            <LogoLoop
              logos={techLogos}
              speed={loopConfig.speed}
              direction="left"
              logoHeight={loopConfig.logoHeight}
              gap={loopConfig.gap}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#000"
              ariaLabel="Technology partners"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive IT solutions tailored to your business needs,
              from concept to deployment and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BackgroundGradient className="p-8 text-center group bg-white dark:bg-dark-800 rounded-3xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-left">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </BackgroundGradient>
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

      {/* Testimonials Section */}
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
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with RyphTech.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id || testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-secondary">
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expertise
              in web development, app development, and machine learning.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
