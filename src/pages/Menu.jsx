import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Sparkles, X, Flame, Award } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { menuCategories, menuItems } from '../data/menuData';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all' | 'veg' | 'nonveg'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter items logic
  const filteredItems = menuItems.filter((item) => {
    // Category match
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    // Dietary match
    if (dietaryFilter === 'veg' && !item.isVeg) return false;
    if (dietaryFilter === 'jain' && !item.isJain) return false;

    // Search query match
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const nameMatch = item.name.toLowerCase().includes(q);
      const descMatch = item.description.toLowerCase().includes(q);
      const tagMatch = item.tags && item.tags.some(t => t.toLowerCase().includes(q));
      return nameMatch || descMatch || tagMatch;
    }

    return true;
  });

  return (
    <div className="pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <SectionHeading
          tagline="Epicurean Delights"
          title="Explore Our Fine"
          highlight="Dining Menu"
          description="Handcrafted recipes combining organic spices, heritage marinades, and modern culinary precision."
        />

        {/* Search & Filter Controls Bar */}
        <div className="glass-card p-6 rounded-3xl border border-brand-cardBorder shadow-luxury mb-10 space-y-6">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-brand-orange absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search dishes, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white rounded-full pl-10 pr-4 py-2.5 text-sm text-brand-charcoal border border-brand-cardBorder focus:outline-none focus:border-brand-orange shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-brand-charcoal/40 hover:text-brand-charcoal"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Pure Veg / Jain Toggle Pills */}
            <div className="flex items-center gap-2 bg-brand-cream p-1.5 rounded-full border border-brand-cardBorder w-full md:w-auto justify-center">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  dietaryFilter === 'all'
                    ? 'bg-brand-charcoal text-white shadow'
                    : 'text-brand-charcoal/70 hover:text-brand-charcoal'
                }`}
              >
                All Specialties
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                100% Pure Veg
              </button>
              <button
                onClick={() => setDietaryFilter('jain')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  dietaryFilter === 'jain'
                    ? 'bg-amber-500 text-white shadow'
                    : 'text-amber-700 hover:bg-amber-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-300" />
                Jain Option
              </button>
            </div>

          </div>

          {/* Category Navigation Tabs with Animated Pill */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {menuCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive ? 'text-white font-semibold' : 'text-brand-charcoal/75 hover:text-brand-orange bg-white/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="menuActivePill"
                      className="absolute inset-0 bg-brand-gradient rounded-full shadow-glow"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{cat.name}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white/60 rounded-3xl border border-brand-cardBorder">
            <Sparkles className="w-10 h-10 text-brand-gold mx-auto mb-3 animate-bounce" />
            <h3 className="text-xl font-serif font-bold text-brand-charcoal">No Dishes Found</h3>
            <p className="text-sm text-brand-charcoal/60 mt-1">Try resetting your filters or searching for something else.</p>
            <button
              onClick={() => { setActiveCategory('all'); setDietaryFilter('all'); setSearchQuery(''); }}
              className="mt-4 text-xs font-semibold text-brand-orange underline"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card item={item} onSelect={(selected) => setSelectedItem(selected)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

      </div>

      {/* Item Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-brand-charcoal/80 backdrop-blur-md z-50 p-4 sm:p-6 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-brand-cream rounded-3xl overflow-hidden shadow-2xl border border-brand-gold/30"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-brand-orange transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-64 overflow-hidden relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {selectedItem.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        selectedItem.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                    />
                    <span className="text-xs font-semibold text-brand-charcoal uppercase">
                      {selectedItem.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    </span>
                    {selectedItem.isSpicy && (
                      <span className="flex items-center gap-1 text-xs text-rose-600 font-semibold ml-2">
                        <Flame className="w-3.5 h-3.5 fill-rose-500" /> Spicy
                      </span>
                    )}
                  </div>
                  <div className="text-2xl font-serif font-bold text-gradient-brand">
                    ₹{selectedItem.price}
                  </div>
                </div>

                <p className="text-sm text-brand-charcoal/80 font-sans leading-relaxed">
                  {selectedItem.description}
                </p>

                {selectedItem.tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {selectedItem.tags.map((t, idx) => (
                      <span key={idx} className="text-xs font-medium bg-brand-green/10 text-brand-greenDark px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-4 border-t border-brand-cardBorder flex gap-3">
                  <Button variant="primary" size="md" className="flex-1 justify-center" onClick={() => setSelectedItem(null)}>
                    Order This Item
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
