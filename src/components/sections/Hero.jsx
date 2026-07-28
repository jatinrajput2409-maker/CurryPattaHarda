import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Utensils, ChevronDown, Sparkles, Award, Users, UtensilsCrossed, Star, Flame } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  const stats = [
    { value: '1 Year', label: 'In Business (Harda, MP)', icon: Award },
    { value: '50+', label: 'Pure Veg Specialties', icon: UtensilsCrossed },
    { value: '50k+', label: 'Delighted Guests', icon: Users },
  ];

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden pt-6 pb-10">
      {/* Hyper-Vibrant Glowing Background Light Halos */}
      <div className="absolute top-10 left-10 w-[550px] h-[550px] bg-[#38A128]/20 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#F36F21]/20 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#EBA826]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          
          {/* Left Floating Dish Card Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -60, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="absolute -left-12 lg:-left-32 top-6 hidden xl:flex items-center gap-3 glass-card p-3 rounded-2xl border border-[#F36F21]/30 shadow-2xl animate-float pointer-events-auto group max-w-[220px]"
          >
            <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-brand-gold/40">
              <img
                src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=300&q=80"
                alt="Paneer Lababdar & Truffle"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-[10px] font-extrabold text-[#EBA826] uppercase tracking-wider">
                <Star className="w-3 h-3 fill-[#EBA826]" /> 5.0 Best Seller
              </div>
              <h4 className="font-serif font-bold text-xs text-[#1A1615] line-clamp-1">
                Paneer Lababdar & Truffle
              </h4>
              <span className="text-xs font-serif font-extrabold text-gradient-brand">
                ₹525
              </span>
            </div>
          </motion.div>

          {/* Right Floating Dish Card Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 60, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="absolute -right-12 lg:-right-32 top-12 hidden xl:flex items-center gap-3 glass-card p-3 rounded-2xl border border-[#38A128]/30 shadow-2xl animate-float pointer-events-auto group max-w-[220px]"
            style={{ animationDelay: '2s' }}
          >
            <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-brand-green/40">
              <img
                src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=300&q=80"
                alt="Crispy Masala Dosa"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 text-[10px] font-extrabold text-[#38A128] uppercase tracking-wider">
                <Flame className="w-3 h-3 text-[#F36F21]" /> Pure Veg Special
              </div>
              <h4 className="font-serif font-bold text-xs text-[#1A1615] line-clamp-1">
                Crispy Masala Dosa
              </h4>
              <span className="text-xs font-serif font-extrabold text-gradient-brand">
                ₹345
              </span>
            </div>
          </motion.div>

          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#F36F21]/30 shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#EBA826] animate-spin-slow" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1A1615]">
              100% Pure Veg Fine Dining
            </span>
          </motion.div>

          {/* Brand Headline Typography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight leading-[1.05] drop-shadow-sm">
              <span className="text-[#38A128]">CURRY </span>
              <span className="text-[#F36F21]">PATTA</span>
            </h1>

            <p className="text-xl sm:text-3xl md:text-4xl font-serif font-semibold italic text-[#EBA826] drop-shadow-sm pt-1">
              Where Tradition Meets Flavour
            </p>
          </motion.div>

          {/* Body Sub-description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-[#1A1615]/85 font-sans leading-relaxed max-w-xl mx-auto font-medium"
          >
            Step into a sensory oasis of stone-ground spices, 24-hour slow-cooked gravies, and royal Indian hospitality. Every dish is a culinary masterpiece.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Link to="/reservation">
              <Button variant="primary" size="md" icon={Calendar}>
                Reserve a Table
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="outline" size="md" icon={Utensils}>
                Explore Specialty Menu
              </Button>
            </Link>
          </motion.div>

          {/* Stat Counter Strip with Glass Pill Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-2xl"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="glass-card px-5 py-3 rounded-2xl border border-[#F36F21]/20 shadow-luxury flex items-center justify-center gap-3 hover:border-[#F36F21]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#38A128]/15 to-[#F36F21]/15 text-[#F36F21] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-xl sm:text-2xl font-serif font-black text-gradient-brand block leading-none mb-0.5">
                      {stat.value}
                    </span>
                    <span className="text-xs font-bold text-[#1A1615]/80 block leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="flex flex-col items-center justify-center pt-6 text-[#1A1615]/70 hover:text-[#F36F21] transition-colors cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
        }}
      >
        <span className="text-xs font-extrabold uppercase tracking-widest mb-1">Scroll to Experience</span>
        <ChevronDown className="w-5 h-5 text-[#F36F21]" />
      </motion.div>
    </section>
  );
}
