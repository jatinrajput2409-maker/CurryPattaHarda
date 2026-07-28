import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CinematicReveal({
  items = [],
  interval = 4500,
  autoPlay = true,
  className = '',
  aspectRatio = 'aspect-[16/9] min-h-[350px] md:min-h-[480px]',
  showDots = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  // Trigger smooth transition with black flash overlay
  const goToIndex = (nextIndex) => {
    if (isTransitioning || nextIndex === currentIndex || items.length === 0) return;
    
    setIsTransitioning(true);

    // After fade to black (400ms), change item, then fade out of black
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 400);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    goToIndex(nextIdx);
  };

  // Auto-play interval handling
  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    timerRef.current = setInterval(() => {
      handleNext();
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay, interval, items.length, currentIndex, isTransitioning]);

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];
  const titleWords = currentItem.title ? currentItem.title.split(' ') : [];

  // Variants for staggered word reveal
  const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.25,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className={`relative rounded-3xl overflow-hidden shadow-luxury ${aspectRatio} ${className}`}>
      {/* Full-bleed Black Transition Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isTransitioning ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="absolute inset-0 bg-black pointer-events-none z-30"
      />

      {/* Image Layer with AnimatePresence */}
      <div className="absolute inset-0 overflow-hidden bg-brand-charcoal">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={currentItem.image}
            alt={currentItem.title || 'Cinematic Showcase'}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient dark vignetting overlay for content contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/40 to-transparent pointer-events-none z-10" />
      </div>

      {/* Text Content Overlay (Staggered Word Reveal) */}
      <div className="absolute inset-0 z-20 p-6 sm:p-10 flex flex-col justify-end pointer-events-none">
        <motion.div
          key={currentIndex}
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl space-y-2 pointer-events-auto"
        >
          {/* Subtitle / Category Tagline */}
          {currentItem.subtitle && (
            <motion.p
              variants={wordVariants}
              className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand-gold drop-shadow"
            >
              {currentItem.subtitle}
            </motion.p>
          )}

          {/* Staggered Word Heading */}
          {currentItem.title && (
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight flex flex-wrap drop-shadow-md">
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h3>
          )}
        </motion.div>

        {/* Manual Navigation Dots */}
        {showDots && items.length > 1 && (
          <div className="flex items-center gap-2 pt-6 pointer-events-auto z-20">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToIndex(idx)}
                aria-label={`Jump to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-brand-gradient shadow-glow'
                    : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
