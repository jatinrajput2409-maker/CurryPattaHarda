import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, PhoneCall, Gift, Tag, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import OffersModal from '../ui/OffersModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isOffersModalOpen, setIsOffersModalOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reserve', path: '/reservation' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileDrawerOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-2.5 shadow-luxury'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - Official Curry Patta Colors */}
          <Link to="/" className="group">
            <Logo size="md" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors duration-300 py-1 ${
                    isActive
                      ? 'text-brand-orange font-semibold'
                      : 'text-brand-charcoal hover:text-brand-orange'
                  }`}
                >
                  {link.name}

                  {/* Animated gradient underline on active/hover */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gradient rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Header Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Special Offers Button */}
            <button
              onClick={() => setIsOffersModalOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gradient-to-r from-[#38A128] via-[#EBA826] to-[#F36F21] text-white text-xs font-bold shadow-md hover:scale-105 transition-all cursor-pointer animate-pulse-glow"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Special Offers</span>
            </button>

            <Link to="/reservation">
              <Button variant="primary" size="sm" icon={Calendar}>
                Book Table
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger & Offers Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsOffersModalOpen(true)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#38A128] to-[#F36F21] text-white text-xs font-bold shadow-md cursor-pointer"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Offers</span>
            </button>

            <button
              onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
              className="p-2.5 rounded-full bg-brand-cream border border-brand-cardBorder text-brand-charcoal hover:text-brand-orange focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {mobileDrawerOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileDrawerOpen(false)}
                className="fixed inset-0 bg-brand-charcoal/60 backdrop-blur-sm z-40 md:hidden"
              />

              {/* Slide-in Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-brand-cream z-50 p-6 flex flex-col justify-between shadow-2xl border-l border-brand-cardBorder md:hidden"
              >
                <div>
                  {/* Mobile Drawer Header */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-brand-cardBorder">
                    <Logo size="sm" />
                    <button
                      onClick={() => setMobileDrawerOpen(false)}
                      className="p-2 rounded-full hover:bg-brand-cardBorder/50 text-brand-charcoal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col gap-3">
                    {navLinks.map((link) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <Link
                          key={link.name}
                          to={link.path}
                          className={`text-lg font-serif font-semibold px-4 py-3 rounded-2xl transition-all ${
                            isActive
                              ? 'bg-brand-gradient text-white shadow-glow'
                              : 'text-brand-charcoal hover:bg-brand-orange/10'
                          }`}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Drawer Footer CTA */}
                <div className="pt-6 border-t border-brand-cardBorder space-y-3">
                  <button
                    onClick={() => {
                      setMobileDrawerOpen(false);
                      setIsOffersModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-gradient-to-r from-[#38A128] to-[#F36F21] text-white text-sm font-bold shadow-md cursor-pointer"
                  >
                    <Gift className="w-4 h-4" />
                    <span>Special Offers & Coupons</span>
                  </button>

                  <Link to="/reservation" className="block w-full">
                    <Button variant="primary" size="md" className="w-full justify-center">
                      Reserve a Table
                    </Button>
                  </Link>
                  <div className="flex items-center justify-center gap-2 text-xs text-brand-charcoal/70">
                    <PhoneCall className="w-4 h-4 text-brand-orange" />
                    <a href="tel:07947419351">07947419351</a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Special Offers Modal Popup */}
      <OffersModal
        isOpen={isOffersModalOpen}
        onClose={() => setIsOffersModalOpen(false)}
      />
    </>
  );
}
