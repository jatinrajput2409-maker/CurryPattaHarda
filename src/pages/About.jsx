import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Award, ShieldCheck, Flame, Leaf, Calendar, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

export default function About() {
  const timeline = [
    {
      year: '2025',
      title: 'Grand Opening in Harda',
      description: 'Curry Patta opened its doors at Gp Mall Near Bus Stand, Khurd, Harda MP, bringing 100% Pure Veg South Indian & Fusion delicacies to the city.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      badge: 'Grand Opening in Harda',
    },
    {
      year: '2025',
      title: 'Fusion Culinary Innovation',
      description: 'Introduced iconic signature dishes like Gunpowder Idli Pops, Palak Patta Chaat, Idli Bruschetta & Singaporean Noodles.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      badge: 'Authentic Spice Recipes',
    },
    {
      year: '2026',
      title: '1 Year of Culinary Excellence',
      description: 'Celebrating 1 Year in Business at Gp Mall Harda with over 50,000 delighted food lovers and loyal guests.',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
      badge: '1 Year in Business',
    },
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      title: 'Luxury Ambient Dining',
    },
    {
      url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
      title: 'Signature Masala Dosa Platter',
    },
    {
      url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      title: 'Paneer Lababdar & Truffle',
    },
    {
      url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      title: 'Royal Dal Makhani 24-Hour',
    },
  ];

  return (
    <div className="pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          tagline="Our Heritage"
          title="The Story & Vision Of"
          highlight="Curry Patta"
          description="Where age-old royal recipes meet modern aesthetic luxury and uncompromised culinary devotion."
        />

        {/* Story Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80"
                alt="Founder Chef Sanjeev"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-charcoal text-white p-6 rounded-3xl border border-brand-gold/30 shadow-luxury max-w-xs hidden sm:block">
              <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider block mb-1">
                Founder & Executive Chef
              </span>
              <h4 className="font-serif font-bold text-lg text-white">Chef Sanjeev Kumar</h4>
              <p className="text-xs text-brand-grey mt-1 italic">
                "Spices are not mere seasonings; they are memories preserved in scent and color."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-3xl font-serif font-bold text-brand-charcoal">
              The Essence of the Curry Leaf
            </h3>

            <p className="text-brand-charcoal/80 font-sans text-base leading-relaxed">
              In Indian cooking, the curry leaf (Curry Patta) is revered for its subtle, smoky aroma and digestive health properties. When tossed in hot ghee alongside mustard seeds, it releases a fragrance that signifies home, warmth, and culinary magic.
            </p>

            <p className="text-brand-charcoal/80 font-sans text-base leading-relaxed">
              Our kitchen operates on three sacred pillars: zero compromise on organic spice purity, hand-grinding ingredients in small batches daily, and treating every guest as royalty in our home.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-brand-cardBorder shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-greenDark flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif font-bold text-brand-charcoal text-sm">100% Pure Veg</h5>
                  <p className="text-xs text-brand-charcoal/60">Organic Spice Sourced</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-brand-cardBorder shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif font-bold text-brand-charcoal text-sm">Slow Embers</h5>
                  <p className="text-xs text-brand-charcoal/60">Overnight Simmering</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Milestones of Excellence Section with High Quality Cards */}
        <div className="py-16 bg-white/80 rounded-3xl border border-brand-cardBorder p-6 sm:p-12 mb-20 shadow-luxury">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block mb-2">
              Our Journey Through Time
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal">
              Milestones of Excellence
            </h3>
            <p className="text-xs sm:text-sm text-brand-charcoal/70 mt-2 font-medium">
              From a modest spice bistro to a celebrated 100% Pure Veg luxury fine dining landmark.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card rounded-3xl overflow-hidden border border-brand-cardBorder shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Milestone HD Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-serif font-extrabold text-brand-orange shadow-md border border-brand-orange/30">
                    {item.year}
                  </div>

                  <div className="absolute bottom-3 left-3 text-xs font-bold text-white/90 bg-brand-charcoal/70 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                    {item.badge}
                  </div>
                </div>

                {/* Milestone Details */}
                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-serif font-bold text-brand-charcoal group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-brand-charcoal/75 font-sans leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Inside Our Culinary Sanctuary Gallery Strip */}
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold text-brand-green uppercase tracking-widest block mb-1">
              Visual Tour
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal">
              Inside Our Culinary Sanctuary
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative group rounded-2xl overflow-hidden shadow-md h-52">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-bold text-white drop-shadow font-serif">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
