"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}) => {
  const [active, setActive] = useState(0);

  // Safety check: ensure testimonials is an array and has content
  if (!testimonials || !Array.isArray(testimonials) || testimonials.length === 0) {
    return (
      <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p>Loading testimonials...</p>
        </div>
      </div>
    );
  }

  const handleNext = () => {
    if (testimonials.length <= 1) return;
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (testimonials.length <= 1) return;
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && testimonials.length > 1) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  
  // Get current testimonial safely
  const currentTestimonial = testimonials[active] || testimonials[0];
  
  return (
    <div className="mx-auto max-w-sm px-4 py-12 md:py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-8 md:gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-64 md:h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src || index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -40, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src || 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=500&fit=crop&crop=face'}
                    alt={testimonial.name || 'Testimonial'}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-2xl md:rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-2 md:py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-1 md:mb-2">
              {currentTestimonial?.name || 'Client Name'}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 dark:text-neutral-500 mb-4 md:mb-6">
              {currentTestimonial?.designation || 'Client Role'}
            </p>
            <motion.p className="text-sm md:text-lg text-gray-500 dark:text-neutral-300 leading-relaxed">
              {(currentTestimonial?.quote || 'Testimonial quote').split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-3 md:gap-4 pt-6 md:pt-12 justify-center md:justify-start">
            <button
              onClick={handlePrev}
              disabled={testimonials.length <= 1}
              className="group/button flex h-8 w-8 md:h-7 md:w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <IconArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              disabled={testimonials.length <= 1}
              className="group/button flex h-8 w-8 md:h-7 md:w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <IconArrowRight className="h-4 w-4 md:h-5 md:w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
