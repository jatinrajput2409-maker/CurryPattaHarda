import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollAnimation(options = { once: true, amount: 0.2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, options);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return { ref, isInView, fadeUpVariant, staggerContainer };
}
