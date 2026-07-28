import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Heart, ArrowUp } from 'lucide-react';
import Logo from '../ui/Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-brand-charcoal text-brand-cream pt-16 pb-8 overflow-hidden border-t-4 border-brand-orange">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/">
              <Logo size="md" />
            </Link>
            
            <p className="text-sm text-brand-grey leading-relaxed">
              Where age-old royal Indian culinary traditions meet contemporary aesthetic luxury. Fresh organic spices, handcrafted with passion.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-orange text-brand-grey hover:text-white flex items-center justify-center transition-all duration-300" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-orange text-brand-grey hover:text-white flex items-center justify-center transition-all duration-300" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-orange text-brand-grey hover:text-white flex items-center justify-center transition-all duration-300" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-brand-gold mb-4 relative inline-block">
              Quick Navigation
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-brand-orange rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-grey">
              <li>
                <Link to="/" className="hover:text-brand-orange transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-brand-orange transition-colors">Specialty Menu</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-orange transition-colors">Our Brand Story</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-brand-orange transition-colors">Visual Gallery</Link>
              </li>
              <li>
                <Link to="/reservation" className="hover:text-brand-orange transition-colors">Book a Table</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-orange transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Operating Hours */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-brand-gold mb-4 relative inline-block">
              Opening Hours
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-brand-orange rounded-full" />
            </h4>
            <div className="space-y-3 text-sm text-brand-grey">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Mon — Thu</span>
                  <span>12:00 PM – 11:00 PM</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Fri — Sun</span>
                  <span>11:30 AM – 11:45 PM</span>
                </div>
              </div>
              <p className="text-xs text-brand-orange pt-1 italic">
                *Kitchen closes 45 minutes before closing time.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Location Map Placeholder */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-brand-gold mb-4 relative inline-block">
              Visit Our Café
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-brand-orange rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-grey mb-4">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                <span>Gp Mall Near Bus Stand, Khurd, Harda-461331, Madhya Pradesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="tel:07947419351" className="hover:text-brand-orange transition-colors">07947419351</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span>hello@currypatta.com</span>
              </li>
            </ul>

            {/* Embedded Map Box */}
            <a
              href="https://maps.app.goo.gl/Xa9psJ7Ypv14XCgK7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden relative group cursor-pointer block"
            >
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=400&q=80"
                alt="Map location preview"
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-brand-charcoal/50 flex items-center justify-center gap-2 text-xs font-semibold text-white">
                <MapPin className="w-4 h-4 text-brand-orange animate-bounce" />
                <span>View on Google Maps</span>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom copyright & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-grey">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Curry Patta Café. All rights reserved. Crafted with{' '}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for food lovers.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
