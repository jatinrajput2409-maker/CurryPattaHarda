import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Users, User, CheckCircle2, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

export default function ReservationCTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 relative bg-gradient-to-r from-[#28C719] via-[#FF8800] to-[#FF5500] text-white overflow-hidden shadow-2xl">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Callout text */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-md px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider border border-white/30 shadow-md">
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              <span>Fine Dining Reservations</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight drop-shadow-md">
              Reserve Your Table At Curry Patta
            </h2>

            <p className="text-white/95 text-base sm:text-lg font-sans leading-relaxed drop-shadow-sm font-medium">
              Planning an intimate family dinner, business lunch, or private celebration? Secure your preferred seating and let our chefs prepare a bespoke culinary feast.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm font-bold text-white">
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700]" />
                <span>Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700]" />
                <span>No Booking Charges</span>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Quick Form */}
          <div className="lg:col-span-7">
            <div className="glass-card-dark p-6 sm:p-10 rounded-3xl border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#28C719]/20 text-[#28C719] flex items-center justify-center mx-auto border-2 border-[#28C719] shadow-[0_0_20px_rgba(40,199,25,0.5)]">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-white">
                      Reservation Request Received!
                    </h3>

                    <p className="text-sm text-brand-grey max-w-md mx-auto">
                      Thank you, <span className="text-[#FFB800] font-bold">{formData.name || 'Guest'}</span>. Our restaurant host will call you shortly to confirm your table for {formData.guests} guests on {formData.date || 'your selected date'}.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#FFB800] hover:underline pt-4 font-bold block mx-auto cursor-pointer"
                    >
                      Make Another Booking
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-serif font-bold text-white mb-4 border-b border-white/10 pb-3 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500]" />
                      Quick Booking Details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Guest Name */}
                      <div>
                        <label className="block text-xs font-bold text-brand-grey mb-1.5">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-[#FFB800] absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Aarav Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white/10 border border-white/25 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/30 transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-bold text-brand-grey mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/10 border border-white/25 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/30 transition-all"
                        />
                      </div>

                      {/* Date */}
                      <div>
                        <label className="block text-xs font-bold text-brand-grey mb-1.5">
                          Date
                        </label>
                        <div className="relative">
                          <CalendarIcon className="w-4 h-4 text-[#FFB800] absolute left-3.5 top-3.5" />
                          <input
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full bg-white/10 border border-white/25 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800]/30 transition-all"
                          />
                        </div>
                      </div>

                      {/* Time & Guests */}
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-bold text-brand-grey mb-1.5">
                            Time
                          </label>
                          <div className="relative">
                            <Clock className="w-4 h-4 text-[#FFB800] absolute left-3 top-3.5" />
                            <select
                              value={formData.time}
                              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                              className="w-full bg-white/10 border border-white/25 rounded-xl pl-8 pr-2 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFB800] transition-all"
                            >
                              <option value="12:30" className="bg-brand-charcoal">12:30 PM</option>
                              <option value="13:30" className="bg-brand-charcoal">01:30 PM</option>
                              <option value="19:30" className="bg-brand-charcoal">07:30 PM</option>
                              <option value="20:30" className="bg-brand-charcoal">08:30 PM</option>
                              <option value="21:30" className="bg-brand-charcoal">09:30 PM</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-brand-grey mb-1.5">
                            Guests
                          </label>
                          <div className="relative">
                            <Users className="w-4 h-4 text-[#FFB800] absolute left-3 top-3.5" />
                            <select
                              value={formData.guests}
                              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                              className="w-full bg-white/10 border border-white/25 rounded-xl pl-8 pr-2 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFB800] transition-all"
                            >
                              <option value="1" className="bg-brand-charcoal">1 Person</option>
                              <option value="2" className="bg-brand-charcoal">2 Guests</option>
                              <option value="4" className="bg-brand-charcoal">4 Guests</option>
                              <option value="6" className="bg-brand-charcoal">6+ Guests</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button variant="gold" size="lg" type="submit" className="w-full justify-center">
                        Confirm Table Reservation
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
