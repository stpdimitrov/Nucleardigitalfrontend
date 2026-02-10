import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

/**
 * Page Transition Wrapper Component
 * 
 * Provides smooth fade + slide transitions between routes
 * Matches Framer's typical page transition animations
 * 
 * CRITICAL: Uses transform and opacity only - no layout changes
 */

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1] // Framer's easeOut curve
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
