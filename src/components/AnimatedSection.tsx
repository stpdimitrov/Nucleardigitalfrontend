'use client';

// Reusable Animated Section Wrapper
// Makes it easy to add scroll-triggered animations to any section

import { motion } from "motion/react";
import { scrollFadeIn, viewport } from "@/lib/animations";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = "", ariaLabel, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      aria-label={ariaLabel}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={scrollFadeIn}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
}

interface AnimatedDivProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export function AnimatedDiv({ children, className = "", ariaLabel, style, delay = 0 }: AnimatedDivProps) {
  return (
    <motion.div
      aria-label={ariaLabel}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
