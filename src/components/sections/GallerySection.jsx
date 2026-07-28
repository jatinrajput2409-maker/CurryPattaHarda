import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ArrowRight, Camera } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import CinematicReveal from '../ui/CinematicReveal';
import { galleryData } from '../../data/galleryData';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Format gallery items for CinematicReveal hero showcase
  const galleryRevealItems = galleryData.map(item => ({
    image: item.image,
    title: item.title,
    subtitle: `${item.category.toUpperCase()} • ${item.subtitle}`,
  }));

  // Take top 6 items for grid preview
  const previewItems = galleryData.slice(0, 6);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-cream/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <SectionHeading
          tagline="Visual Symphony"
          title="Moments Caught In"
          highlight="Curry Patta"
          description="Immerse your eyes in our artfully plated dishes, inviting interiors, and joyous celebrations."
        />

        {/* Featured Gallery Cinematic Reveal Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-4 sm:p-6 rounded-3xl border border-brand-cardBorder shadow-luxury"
        >
          <div className="flex items-center gap-2 mb-4">
            <Camera className="w-4 h-4 text-brand-orange" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Featured Gallery Experience
            </span>
          </div>

          <CinematicReveal
            items={galleryRevealItems}
            interval={4500}
            aspectRatio="h-[380px] sm:h-[480px]"
          />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className="relative group rounded-3xl overflow-hidden shadow-luxury cursor-pointer bg-brand-charcoal h-72 sm:h-80 w-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              
              {/* Hover Dark Overlay & Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="text-xl font-serif font-bold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-grey">
                    {item.subtitle}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="pt-6 text-center">
          <Link to="/gallery">
            <Button variant="gold" size="md" icon={ArrowRight}>
              Explore Full Gallery
            </Button>
          </Link>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-brand-charcoal/90 backdrop-blur-md z-50 p-4 sm:p-8 flex items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-brand-charcoal rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-brand-orange transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[75vh] object-contain"
              />

              <div className="p-6 bg-brand-charcoal text-white border-t border-white/10">
                <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-brand-grey mt-1">
                  {selectedImage.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
