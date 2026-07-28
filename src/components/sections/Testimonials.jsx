import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { testimonialsData } from '../../data/testimonialsData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-20 bg-brand-cream relative overflow-hidden">
      {/* Decorative quotes background graphic */}
      <Quote className="absolute top-10 left-10 w-64 h-64 text-brand-orange/5 pointer-events-none -rotate-12" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          tagline="Guest Words"
          title="What Our Patrons"
          highlight="Say About Us"
          description="Read genuine reviews from food critics, bloggers, and connoisseurs who have dined with us."
        />

        {/* Carousel Card */}
        <div className="relative mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-8 sm:p-12 rounded-3xl border border-brand-cardBorder shadow-luxury flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
            >
              {/* Customer Avatar & Role */}
              <div className="shrink-0 flex flex-col items-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-brand-gold shadow-md mb-3">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-serif font-bold text-lg text-brand-charcoal">
                  {current.name}
                </h4>
                <span className="text-xs text-brand-orange font-semibold">
                  {current.role}
                </span>
              </div>

              {/* Quote & Stars */}
              <div className="flex-1 space-y-4">
                {/* Star Ratings */}
                <div className="flex items-center justify-center md:justify-start gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-base sm:text-lg text-brand-charcoal/80 font-serif italic leading-relaxed">
                  "{current.comment}"
                </p>

                <div className="text-xs text-brand-charcoal/50 font-sans pt-2">
                  Published {current.date}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white border border-brand-cardBorder text-brand-charcoal hover:text-brand-orange hover:border-brand-orange flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-brand-orange' : 'w-2.5 bg-brand-grey'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border border-brand-cardBorder text-brand-charcoal hover:text-brand-orange hover:border-brand-orange flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
