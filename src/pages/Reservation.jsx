import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, User, Mail, Phone, UtensilsCrossed, CheckCircle2, Sparkles, Heart } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2',
    seating: 'Indoor Dining Room',
    specialRequest: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-20 pt-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          tagline="Table Reservations"
          title="Book Your Exceptional"
          highlight="Dining Experience"
          description="Secure your preferred seating. Whether it's an intimate date, business dinner, or family gathering, we look forward to serving you."
        />

        {/* Form Container */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-brand-cardBorder shadow-luxury relative overflow-hidden">
          {/* Subtle Top Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-gradient" />

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center mx-auto border-2 border-brand-green shadow-glow-green">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <h3 className="text-3xl font-serif font-bold text-brand-charcoal">
                  Reservation Confirmed!
                </h3>

                <div className="bg-brand-cream/80 p-6 rounded-2xl border border-brand-cardBorder max-w-md mx-auto text-left space-y-2 text-sm text-brand-charcoal">
                  <div className="flex justify-between border-b border-brand-cardBorder/50 pb-2">
                    <span className="font-semibold text-brand-charcoal/60">Guest Name:</span>
                    <span className="font-bold text-brand-charcoal">{formData.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-cardBorder/50 pb-2">
                    <span className="font-semibold text-brand-charcoal/60">Date & Time:</span>
                    <span className="font-bold text-brand-orange">{formData.date} at {formData.time}</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-cardBorder/50 pb-2">
                    <span className="font-semibold text-brand-charcoal/60">Party Size:</span>
                    <span className="font-bold text-brand-charcoal">{formData.guests} Guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-brand-charcoal/60">Seating Area:</span>
                    <span className="font-bold text-brand-greenDark">{formData.seating}</span>
                  </div>
                </div>

                <p className="text-xs text-brand-charcoal/70 max-w-sm mx-auto">
                  A confirmation SMS & email have been sent to <span className="font-semibold text-brand-charcoal">{formData.email}</span>.
                </p>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => setSubmitted(false)}
                >
                  Make Another Reservation
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-brand-orange absolute left-4 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aarav Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white rounded-2xl pl-11 pr-4 py-3 text-sm text-brand-charcoal border border-brand-cardBorder focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-brand-orange absolute left-4 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="aarav@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white rounded-2xl pl-11 pr-4 py-3 text-sm text-brand-charcoal border border-brand-cardBorder focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-brand-orange absolute left-4 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white rounded-2xl pl-11 pr-4 py-3 text-sm text-brand-charcoal border border-brand-cardBorder focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                      Date of Visit *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-brand-orange absolute left-4 top-3.5" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-white rounded-2xl pl-11 pr-4 py-3 text-sm text-brand-charcoal border border-brand-cardBorder focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-brand-orange absolute left-4 top-3.5" />
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-white rounded-2xl pl-11 pr-4 py-3 text-sm text-brand-charcoal border border-brand-cardBorder focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-inner"
                      >
                        <option value="12:30">Lunch — 12:30 PM</option>
                        <option value="13:30">Lunch — 01:30 PM</option>
                        <option value="14:30">Lunch — 02:30 PM</option>
                        <option value="19:00">Dinner — 07:00 PM</option>
                        <option value="20:00">Dinner — 08:00 PM</option>
                        <option value="21:00">Dinner — 09:00 PM</option>
                        <option value="22:00">Late Dinner — 10:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                      Number of Guests *
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-brand-orange absolute left-4 top-3.5" />
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-white rounded-2xl pl-11 pr-4 py-3 text-sm text-brand-charcoal border border-brand-cardBorder focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-inner"
                      >
                        <option value="1">1 Person (Solo Dining)</option>
                        <option value="2">2 Guests (Couple Table)</option>
                        <option value="4">4 Guests (Family Table)</option>
                        <option value="6">6 Guests (Large Party)</option>
                        <option value="8+">8+ Guests (Private Room)</option>
                      </select>
                    </div>
                  </div>

                </div>

                {/* Seating Preference */}
                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                    Seating Area Preference
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Indoor Dining Room', 'Garden Courtyard', 'Private Chef Room'].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFormData({ ...formData, seating: option })}
                        className={`p-3 rounded-2xl text-xs font-semibold border transition-all text-center ${
                          formData.seating === option
                            ? 'bg-brand-gradient text-white border-transparent shadow-glow'
                            : 'bg-white text-brand-charcoal border-brand-cardBorder hover:bg-brand-orange/10'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                    Special Occasion or Dietary Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Celebrating an anniversary, need a quiet corner table, allergies to nuts..."
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    className="w-full bg-white rounded-2xl p-4 text-sm text-brand-charcoal border border-brand-cardBorder focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-inner"
                  />
                </div>

                <div className="pt-4">
                  <Button variant="primary" size="lg" type="submit" className="w-full justify-center">
                    Submit Reservation Request
                  </Button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
