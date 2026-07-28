import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function OffersModal({ isOpen, onClose }) {
  const offers = [
    {
      id: 'o1',
      title: 'Flat 10% OFF Dine-In',
      description: 'Enjoy a flat 10% discount on your dine-in bill at Gp Mall Harda.',
      minBill: 'Min bill ₹299',
      badge: 'POPULAR OFFER',
      gradient: 'from-[#38A128] to-[#2F6E14]',
    },
    {
      id: 'o2',
      title: 'Free Gunpowder Idli Pops',
      description: 'Get complimentary Gunpowder Idli Pops (6 pc) on orders above ₹499.',
      minBill: 'Min bill ₹499',
      badge: 'CHEF SPECIAL',
      gradient: 'from-[#F36F21] to-[#D94F04]',
    },
    {
      id: 'o3',
      title: '15% OFF Family Table Booking',
      description: 'Enjoy 15% off when reserving a table for 4 or more guests.',
      minBill: '4+ Guests Table',
      badge: 'FAMILY FEAST',
      gradient: 'from-[#EBA826] to-[#C57016]',
    },
    {
      id: 'o4',
      title: '20% OFF Shakes & Cold Coffees',
      description: 'Flat 20% discount on all Special Shakes & Hazelnut Cold Coffees.',
      minBill: 'No Min Bill',
      badge: 'LIMITED TIME',
      gradient: 'from-[#38A128] to-[#F36F21]',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1615]/80 backdrop-blur-md z-[100] p-4 sm:p-6 flex items-center justify-center cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.85, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.85, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-[#FFF9F2] rounded-3xl overflow-hidden border-2 border-[#F36F21]/30 shadow-2xl p-6 sm:p-8 cursor-default space-y-6"
          >
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#38A128] via-[#EBA826] to-[#F36F21]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#1A1615]/10 hover:bg-[#F36F21] text-[#1A1615] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#38A128] to-[#F36F21] text-white flex items-center justify-center shrink-0 shadow-lg">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-[#F36F21] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#EBA826]" /> Active Special Offers
                </div>
                <h3 className="text-2xl font-serif font-black text-[#1A1615]">
                  Curry Patta Harda Deals
                </h3>
              </div>
            </div>

            {/* Offers Cards List (No Coupon Codes) */}
            <div className="space-y-3.5 max-h-[55vh] overflow-y-auto pr-1">
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="glass-card p-4 rounded-2xl border border-[#F36F21]/20 shadow-sm flex items-center justify-between gap-4 hover:border-[#F36F21]/40 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black text-white bg-gradient-to-r ${offer.gradient}`}>
                        {offer.badge}
                      </span>
                      <span className="text-[11px] font-bold text-[#1A1615]/60">
                        {offer.minBill}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#1A1615]">
                      {offer.title}
                    </h4>
                    <p className="text-xs text-[#1A1615]/75 leading-relaxed">
                      {offer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Bottom Action */}
            <div className="pt-2 border-t border-[#1A1615]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-[#1A1615]/70 italic">
                *Offers automatically applied at billing at Gp Mall Harda.
              </p>
              <Link to="/reservation" onClick={onClose} className="w-full sm:w-auto">
                <Button variant="primary" size="sm" icon={ArrowRight} className="w-full justify-center">
                  Book Table to Avail Offer
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
