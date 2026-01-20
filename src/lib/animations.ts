// Animation utilities for Framer Motion enhancements
// CRITICAL: These animations enhance the experience WITHOUT changing:
// - Layout
// - Spacing
// - Colors
// - Typography
// - Breakpoints
// All animations use transforms and opacity only to maintain visual parity

import type { Variants } from "motion/react";

// ============================================
// FADE ANIMATIONS
// ============================================

/**
 * Simple fade in from opacity 0 to 1
 * No layout shift - opacity only
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

/**
 * Fade in with slight upward movement
 * Uses transform to avoid layout shift
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

/**
 * Fade in with slight downward movement
 * Uses transform to avoid layout shift
 */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

/**
 * Fade in from left
 * Uses transform to avoid layout shift
 */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
};

/**
 * Fade in from right
 * Uses transform to avoid layout shift
 */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
};

// ============================================
// SCALE ANIMATIONS
// ============================================

/**
 * Subtle scale up with fade
 * Scales from slightly smaller - no layout shift
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

/**
 * Scale with spring physics
 * Slight bounce effect for playful elements
 */
export const scaleSpring: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.34, 1.56, 0.64, 1] // Subtle spring
    }
  },
};

// ============================================
// STAGGER ANIMATIONS
// ============================================

/**
 * Container for staggered children
 * Staggers child animations with delay
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Fast stagger for grids
 */
export const staggerContainerFast: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

/**
 * Slow stagger for dramatic effect
 */
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

/**
 * Child item for stagger animations
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

// ============================================
// SLIDE ANIMATIONS
// ============================================

/**
 * Slide in from top (for navbar)
 */
export const slideInTop: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

/**
 * Slide in from bottom
 */
export const slideInBottom: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

// ============================================
// HOVER ANIMATIONS
// ============================================

/**
 * Subtle hover lift
 * Slight elevation on hover - no layout shift
 */
export const hoverLift = {
  rest: { y: 0 },
  hover: { 
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

/**
 * Hover scale up
 * Slight zoom on hover
 */
export const hoverScale = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

/**
 * Hover brightness increase
 * For images and videos
 */
export const hoverBrightness = {
  rest: { filter: "brightness(1)" },
  hover: { 
    filter: "brightness(1.1)",
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

// ============================================
// SCROLL ANIMATIONS
// ============================================

/**
 * Scroll-triggered fade in
 * Animates when element enters viewport
 */
export const scrollFadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
};

/**
 * Scroll-triggered scale in
 */
export const scrollScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
};

// ============================================
// NUMBER COUNTER ANIMATION
// ============================================

/**
 * Props for number counter animation
 */
export interface CounterProps {
  from: number;
  to: number;
  duration?: number;
}

/**
 * Animate a number from start to end
 * Used for statistics, pricing, etc.
 */
export const numberCounter = {
  duration: 2,
  ease: "easeOut",
};

// ============================================
// VIEWPORT SETTINGS
// ============================================

/**
 * Viewport detection settings for scroll animations
 * once: true means animation only plays once
 * amount: how much of element must be visible (0-1)
 */
export const viewport = {
  once: true,
  amount: 0.3, // Trigger when 30% visible
};

export const viewportFull = {
  once: true,
  amount: 0.8, // Trigger when 80% visible
};

export const viewportPartial = {
  once: true,
  amount: 0.1, // Trigger when 10% visible
};

// ============================================
// EASING CURVES
// ============================================

/**
 * Custom easing curves for consistent motion
 */
export const easings = {
  // Smooth and natural
  easeOut: [0.22, 1, 0.36, 1],
  
  // Slight spring
  spring: [0.34, 1.56, 0.64, 1],
  
  // Sharp and quick
  sharp: [0.4, 0, 0.2, 1],
  
  // Slow start, fast end
  accelerate: [0.4, 0, 1, 1],
  
  // Fast start, slow end
  decelerate: [0, 0, 0.2, 1],
};

// ============================================
// DURATION CONSTANTS
// ============================================

/**
 * Consistent duration values
 */
export const durations = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
  verySlow: 1.0,
};

// ============================================
// PRESETS FOR COMMON USE CASES
// ============================================

/**
 * Hero section animation preset
 * Dramatic entrance for main hero
 */
export const heroAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2 
    }
  },
};

/**
 * Card entrance animation
 * For project cards, pricing cards, etc.
 */
export const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

/**
 * Text reveal animation
 * For headings and paragraphs
 */
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

/**
 * Image reveal animation
 * For background images and media
 */
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Create a custom stagger delay based on index
 */
export const getStaggerDelay = (index: number, baseDelay: number = 0.1): number => {
  return index * baseDelay;
};

/**
 * Create viewport options with custom settings
 */
export const createViewport = (amount: number = 0.3, once: boolean = true) => ({
  once,
  amount,
});

/**
 * Combine multiple animation variants
 */
export const combineVariants = (...variants: Variants[]): Variants => {
  return variants.reduce((acc, variant) => ({ ...acc, ...variant }), {});
};
