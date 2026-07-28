import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading
          tagline="Get In Touch"
          title="We Would Love To"
          highlight="Hear From You"
          description="Have questions about private catering, press inquiries, or feedback? Send us a message or visit our café."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Left Column: Contact Details & Opening Hours & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Info Card */}
            <div className="glass-card p-8 rounded-3xl border border-brand-cardBorder shadow-luxury space-y-6">
              <h3 className="text-2xl font-serif font-bold text-brand-charcoal border-b border-brand-cardBorder pb-3">
                Café Information
              </h3>

              <div className="space-y-4 text-sm text-brand-charcoal">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-greenDark flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-charcoal">Address</h5>
                    <p className="text-brand-charcoal/75 leading-relaxed">
                      Gp Mall Near Bus Stand, Khurd, Harda-461331, Madhya Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-charcoal">Phone Contact</h5>
                    <p className="text-brand-charcoal/75">07947419351</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-charcoal">Email Inquiries</h5>
                    <p className="text-brand-charcoal/75">hello@currypatta.com</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-brand-cardBorder flex items-center gap-3">
                <span className="text-xs font-semibold text-brand-charcoal/70 uppercase">Follow Us:</span>
                <a href="#" className="w-8 h-8 rounded-full bg-brand-cream hover:bg-brand-orange text-brand-charcoal hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-brand-cream hover:bg-brand-orange text-brand-charcoal hover:text-white flex items-center justify-center transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-brand-cream hover:bg-brand-orange text-brand-charcoal hover:text-white flex items-center justify-center transition-colors" aria-label="Twitter">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="glass-card p-8 rounded-3xl border border-brand-cardBorder shadow-luxury space-y-4">
              <div className="flex items-center gap-2 text-brand-orange">
                <Clock className="w-5 h-5" />
                <h4 className="font-serif font-bold text-xl text-brand-charcoal">Operating Hours</h4>
              </div>

              <div className="space-y-2 text-sm text-brand-charcoal/80">
                <div className="flex justify-between py-1 border-b border-brand-cardBorder/40">
                  <span>Monday – Thursday</span>
                  <span className="font-semibold text-brand-charcoal">12:00 PM – 11:00 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-brand-cardBorder/40">
                  <span>Friday – Sunday</span>
                  <span className="font-semibold text-brand-orange">11:30 AM – 11:45 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Special Holiday Hours</span>
                  <span className="font-semibold text-brand-greenDark">Open All Days</span>
                </div>
              </div>
            </div>

            {/* Embedded Location Map Placeholder */}
            <div className="h-64 rounded-3xl overflow-hidden shadow-luxury border border-brand-cardBorder relative group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="Map representation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-[2px] flex flex-col items-center justify-center text-white p-4 text-center">
                <MapPin className="w-8 h-8 text-brand-orange animate-bounce mb-2" />
                <h5 className="font-serif font-bold text-lg">Curry Patta Café</h5>
                <p className="text-xs text-brand-grey max-w-xs mt-1">Gp Mall Near Bus Stand, Khurd, Harda, MP</p>
                <a
                  href="https://maps.app.goo.gl/Xa9psJ7Ypv14XCgK7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-xs font-semibold bg-white text-brand-charcoal px-4 py-2 rounded-full hover:bg-brand-orange hover:text-white transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-12 rounded-3xl border border-brand-cardBorder shadow-luxury relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-gradient" />

              <h3 className="text-2xl font-serif font-bold text-brand-charcoal mb-2">
                Send Us A Message
              </h3>
              <p className="text-sm text-brand-charcoal/70 mb-8 font-sans">
                We respond to all guest inquiries within 24 hours.
              </p>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center mx-auto border-2 border-brand-green">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-brand-charcoal">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-sm text-brand-charcoal/70 max-w-md mx-auto">
                      Thank you for reaching out to Curry Patta. Our team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="text-xs text-brand-orange font-semibold hover:underline pt-2 block mx-auto"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Aarav Sharma"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full bg-white rounded-2xl px-4 py-3 text-sm text-brand-charcoal border border-brand-cardBorder focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-inner"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="aarav@example.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full bg-white rounded-2xl px-4 py-3 text-sm text-brand-charcoal border border-brand-cardBorder focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Inquiry about private dining / event catering / general"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="w-full bg-white rounded-2xl px-4 py-3 text-sm text-brand-charcoal border border-brand-cardBorder focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-charcoal uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Write your message here..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full bg-white rounded-2xl p-4 text-sm text-brand-charcoal border border-brand-cardBorder focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-inner"
                      />
                    </div>

                    <Button variant="primary" size="lg" type="submit" icon={Send} className="w-full justify-center">
                      Send Message
                    </Button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
