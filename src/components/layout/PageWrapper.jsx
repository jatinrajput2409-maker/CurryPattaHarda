import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';

export default function PageWrapper({ children }) {
  useEffect(() => {
    // Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll to top on page mount
    window.scrollTo(0, 0);

    return () => {
      lenis.destroy();
    };
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-24 bg-noise"
    >
      {children}
    </motion.main>
  );
}
