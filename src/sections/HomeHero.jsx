import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

import BlurText from "../blocks/TextAnimations/BlurText/BlurText";
import DarkVeil from '../blocks/Backgrounds/DarkVeil/DarkVeil';



const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        
        
       <DarkVeil
        className="absolute inset-0"
        speed={2}
         />

        <div className='pointer-events-none absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-50'></div>
      </div>

      <div className="container-custom relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <BlurText
            text="Transforming Ideas Into"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-4 sm:mb-6 dark:text-gray-300"
          />
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-4 sm:mb-6 dark:text-gray-300">
            <span className="block gradient-text">Digital Reality</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
            Founded by Thanzeer J and Devdarsh M, RyphTech delivers cutting-edge
            web development, app development, and machine learning solutions that
            drive business growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link to="/contact" className="btn-primary inline-flex items-center justify-center text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link to="/projects" className="btn-secondary inline-flex items-center justify-center text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6">
              View Our Work
              <Play className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2.5 sm:h-3 bg-gray-400 rounded-full mt-1.5 sm:mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeHero;


