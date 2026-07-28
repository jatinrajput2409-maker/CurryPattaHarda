import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, Send } from 'lucide-react';
import Button from '../ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-brand-cream relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-brand-cardBorder shadow-luxury text-center relative overflow-hidden">
          {/* Subtle Top Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-gradient" />

          <div className="w-12 h-12 rounded-2xl bg-[#28C719]/10 text-[#14800B] flex items-center justify-center mx-auto mb-4 border border-[#28C719]/20 shadow-sm">
            <Mail className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal mb-2">
            Join The Curry Patta Supper Club
          </h3>

          <p className="text-sm text-brand-charcoal/75 font-sans max-w-lg mx-auto mb-6 leading-relaxed">
            Subscribe to receive private invitations to secret menu tasting nights, seasonal chef specials, and masterclass workshops.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-[#28C719]/20 text-[#14800B] px-6 py-3 rounded-full font-bold text-sm border border-[#28C719]/40 shadow-sm"
            >
              <Check className="w-5 h-5 text-[#28C719]" />
              <span>Welcome to our inner circle! Check your inbox soon.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto relative flex flex-col sm:flex-row gap-3">
              {/* Input with animated gradient border glow */}
              <div className="relative flex-1 group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#28C719] via-[#FF9900] to-[#FF5500] rounded-full opacity-60 group-hover:opacity-100 transition-opacity blur-xs pointer-events-none" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="relative w-full bg-white rounded-full px-5 py-3.5 text-sm text-brand-charcoal font-medium placeholder-brand-charcoal/40 focus:outline-none shadow-inner z-10"
                />
              </div>

              <Button variant="primary" size="md" type="submit" icon={Send} className="shrink-0">
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-[11px] text-brand-charcoal/50 mt-4 italic font-medium">
            *We respect your privacy. Unsubscribe at any time with one click.
          </p>
        </div>

      </div>
    </section>
  );
}
