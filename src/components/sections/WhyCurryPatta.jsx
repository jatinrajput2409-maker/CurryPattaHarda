import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Flame, Sparkles, Clock, Heart } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export default function WhyCurryPatta() {
  const features = [
    {
      id: 1,
      title: 'Fresh Organic Ingredients',
      description: 'Zero artificial preservatives or food dyes. We source organic vegetables, cold-pressed oils, and free-range meats daily.',
      icon: Leaf,
      gradient: 'from-emerald-500 to-emerald-700',
    },
    {
      id: 2,
      title: 'Authentic Royal Recipes',
      description: 'Timeless spice blends perfected over decades, honoring regional recipes from Awadh, Malabar, Chettinad, and Kashmir.',
      icon: Flame,
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      id: 3,
      title: 'Warm Luxury Ambience',
      description: 'Designed with warm brass accents, plush velvet seating, and subtle curry leaf botanicals for an intimate dining atmosphere.',
      icon: Sparkles,
      gradient: 'from-amber-400 to-yellow-600',
    },
    {
      id: 4,
      title: 'Exemplary Hospitality',
      description: 'From your greeting at the door to personal table recommendations by our sommeliers, your comfort is our priority.',
      icon: Heart,
      gradient: 'from-rose-500 to-rose-700',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-brand-cream/80 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          tagline="Uncompromising Standards"
          title="Why Dine With"
          highlight="Curry Patta?"
          description="We elevate every meal into a memorable celebration of flavor, comfort, and luxury."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="glass-card p-8 rounded-3xl border border-brand-cardBorder/80 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Feature Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-brand-charcoal mb-3 group-hover:text-brand-orange transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-brand-charcoal/70 leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-cardBorder/50 flex items-center gap-2 text-xs font-semibold text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Experience Perfection</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
