import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import CinematicReveal from '../ui/CinematicReveal';
import { menuItems } from '../../data/menuData';

export default function SignatureDishes() {
  // Filter top chef special signature dishes
  const signatureDishes = menuItems.filter(item => item.isChefSpecial);
  
  // Format items for CinematicReveal featured spotlight
  const featuredRevealItems = signatureDishes.map(dish => ({
    image: dish.image,
    title: dish.name,
    subtitle: `₹${dish.price} • ${dish.isVeg ? 'Vegetarian Special' : 'Non-Veg Delicacy'} • ${dish.description}`,
  }));

  // Remaining grid items
  const gridDishes = signatureDishes.slice(0, 4);

  return (
    <section className="py-20 relative bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <SectionHeading
          tagline="Handcrafted Excellence"
          title="Our Signature"
          highlight="Culinary Creations"
          description="Discover the dishes our guests fall in love with. Each recipe is an ode to authentic Indian spice heritage."
        />

        {/* Featured Dish Cinematic Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-4 sm:p-6 rounded-3xl border border-brand-cardBorder/80 shadow-luxury"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Chef's Table Spotlight
            </span>
          </div>

          <CinematicReveal
            items={featuredRevealItems}
            interval={5000}
            aspectRatio="h-[360px] sm:h-[450px]"
          />
        </motion.div>

        {/* 3D Tilted Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-4">
          {gridDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card item={dish} />
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="pt-6 text-center">
          <Link to="/menu">
            <Button variant="primary" size="lg" icon={ArrowRight}>
              View Full Menu & Drinks
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
