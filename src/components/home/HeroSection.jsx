import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import DarkVeil from '../../blocks/Backgrounds/DarkVeil/DarkVeil';
import BlurText from "../../blocks/TextAnimations/BlurText/BlurText";
import ScrambledText from '../../blocks/TextAnimations/ScrambledText/ScrambledText';
import LogoLoop from '../../blocks/Animations/LogoLoop/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const HeroSection = () => {
  const [loopConfig, setLoopConfig] = useState({ logoHeight: 44, gap: 36, speed: 120 });

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

  return (
    <>
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
                text="Transforming Ideas Into Digital Reality "
                delay={150}
                animateBy="words"
                direction="top"
                className="text-3xl font-bold font-poppins tracking-tight block mb-3 text-center"
              />
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
            <div className="flex flex-col gap-4 mb-8">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center group w-full text-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/projects" className="btn-secondary inline-flex items-center justify-center group w-full text-center">
                View Our Work
                <Play className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" />
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
          <DarkVeil speed={2} />
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
              <span className="block gradient-text mb-2 md:mb-3 text-center">Digital Reality</span>
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
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center group w-full sm:w-auto text-center">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/projects" className="btn-secondary inline-flex items-center justify-center group w-full sm:w-auto text-center">
                View Our Work
                <Play className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110" />
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
    </>
  );
};

export default HeroSection;
