import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Flame, Award } from 'lucide-react';

export default function Card({ item, onSelect }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation (-10 deg to 10 deg)
    const rY = ((mouseX / width) - 0.5) * 14;
    const rX = ((mouseY / height) - 0.5) * -14;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ y: -8 }}
      className="relative group rounded-3xl overflow-hidden bg-white shadow-luxury hover:shadow-luxury-hover border border-brand-cardBorder transition-all duration-300 flex flex-col justify-between"
    >
      {/* Animated gradient border glow on hover */}
      <div className="absolute -inset-0.5 bg-brand-gradient rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

      {/* Image Header Container */}
      <div className="relative h-52 md:h-60 overflow-hidden bg-brand-cream">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

        {/* 100% Pure Veg Indicator */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-emerald-500/20">
          <span className="w-3 h-3 rounded-full flex items-center justify-center border border-emerald-600 bg-emerald-500">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
          </span>
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            100% Pure Veg
          </span>
        </div>

        {/* Chef Special Badge */}
        {item.isChefSpecial && (
          <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#FF5500] to-[#FF9900] text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 border border-white/20">
            <Award className="w-3.5 h-3.5 text-white" />
            <span>Chef's Choice</span>
          </div>
        )}

        {/* Rating overlay */}
        {item.rating && (
          <div className="absolute bottom-3 left-4 z-10 flex items-center gap-1 bg-brand-charcoal/90 backdrop-blur-md text-[#FFB800] px-3 py-1 rounded-full text-xs font-bold border border-white/10">
            <Star className="w-3.5 h-3.5 fill-[#FFB800]" />
            <span>{item.rating}</span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between bg-white">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-serif font-bold text-brand-charcoal group-hover:text-brand-orange transition-colors duration-300">
              {item.name}
            </h3>
            {item.isSpicy && (
              <span className="text-rose-500 shrink-0" title="Spicy">
                <Flame className="w-4 h-4 fill-rose-500" />
              </span>
            )}
          </div>

          <p className="text-sm text-brand-charcoal/75 line-clamp-2 mb-4 font-sans leading-relaxed">
            {item.description}
          </p>

          {/* Tags */}
          {item.tags && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-bold bg-[#28C719]/10 text-[#14800B] px-2.5 py-0.5 rounded-full border border-[#28C719]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Price & Action */}
        <div className="pt-4 border-t border-brand-cardBorder/70 flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-1">
            <span className="text-xs text-brand-charcoal/60 font-bold">INR</span>
            <span className="text-2xl font-serif font-extrabold text-gradient-brand">
              ₹{item.price}
            </span>
          </div>

          <button
            onClick={() => onSelect && onSelect(item)}
            className="text-xs font-bold text-white bg-gradient-to-r from-[#FF5500] to-[#FF7700] hover:from-[#FF6600] hover:to-[#FF8800] px-4 py-2 rounded-full shadow-[0_4px_15px_rgba(255,85,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,85,0,0.5)] transition-all duration-300 cursor-pointer"
          >
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
