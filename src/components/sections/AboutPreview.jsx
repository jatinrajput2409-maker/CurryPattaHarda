import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ShieldCheck, HeartHandshake } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function AboutPreview() {
  const highlights = [
    { title: 'Organic Curry Leaves', desc: 'Handpicked daily from private spice gardens in Kerala.', icon: Leaf },
    { title: 'Stone-Ground Spices', desc: 'Freshly ground each morning using traditional sil-batta.', icon: ShieldCheck },
    { title: 'Royal Heritage Recipes', desc: 'Preserved recipes passed down across three generations.', icon: HeartHandshake },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-brand-cream/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          tagline="Our Legacy"
          title="The Story Behind"
          highlight="Curry Patta"
          description="Born out of a passion for preserving timeless Indian cooking traditions, Curry Patta is where aromatic spices tell stories of ancient royal kitchens."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          
          {/* Image Split Stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-luxury border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="Head chef garnishing curry"
                className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Overlapping Secondary Image */}
            <div className="absolute -bottom-6 -right-6 z-20 w-48 sm:w-64 h-48 sm:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-2xl hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80"
                alt="Aromatic Indian Spices"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Gold Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold/30 rounded-3xl -z-10" />
          </motion.div>

          {/* Text Content Split */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal">
              Crafting Unforgettable Flavours with Passion & Authenticity
            </h3>

            <p className="text-brand-charcoal/75 text-base leading-relaxed font-sans">
              "Curry Patta" is named after the humble yet transformative curry leaf—the soul of Indian tempering. We believe true luxury lies in simplicity, purity, and uncompromised quality.
            </p>

            {/* Feature List */}
            <div className="space-y-4 pt-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 border border-brand-cardBorder/60 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-greenDark flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-brand-charcoal text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs text-brand-charcoal/70 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link to="/about">
                <Button variant="gold" size="md" icon={ArrowRight}>
                  Read Our Full Story
                </Button>
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
