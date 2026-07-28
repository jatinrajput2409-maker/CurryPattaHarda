import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import GradientText from './GradientText';

export default function SectionHeading({
  tagline = '',
  title = '',
  highlight = '',
  description = '',
  align = 'center', // 'center' | 'left'
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} mb-12 md:mb-16 ${className}`}
    >
      {tagline && (
        <div className={`flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="w-6 h-[2px] bg-gradient-to-r from-brand-green to-brand-orange rounded-full" />
          <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
          <span>{tagline}</span>
          <span className="w-6 h-[2px] bg-gradient-to-r from-brand-orange to-brand-green rounded-full" />
        </div>
      )}

      {title && (
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-charcoal leading-tight mb-4">
          {title}{' '}
          {highlight && <GradientText variant="brand">{highlight}</GradientText>}
        </h2>
      )}

      {description && (
        <p className="text-base md:text-lg text-brand-charcoal/70 font-sans leading-relaxed">
          {description}
        </p>
      )}

      <div className={`mt-4 flex items-center ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[2px] w-16 bg-gradient-to-r from-brand-gold via-brand-orange to-transparent rounded-full" />
      </div>
    </motion.div>
  );
}
