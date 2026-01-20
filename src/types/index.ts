// TypeScript types for Flixen™ application
// CRITICAL: Types match exact data structure from static content
// DO NOT modify without ensuring visual parity

// ============================================
// PROJECTS / PORTFOLIO
// ============================================

export interface Project {
  id: string;
  slug: string;
  name: string;
  videoUrl: string;
  service: string;
  date: string;
}

// ============================================
// CLIENT LOGOS
// ============================================

export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  aspectRatio: string; // e.g., "auto_103_/_27"
}

// ============================================
// SERVICES
// ============================================

export interface ServiceFeature {
  id: string;
  name: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  features: ServiceFeature[];
}

// ============================================
// WHY CHOOSE US
// ============================================

export interface WhyChooseUsItem {
  id: string;
  number: string; // e.g., "01"
  title: string;
  description: string;
}

// ============================================
// PROCESS STEPS
// ============================================

export interface ProcessStep {
  id: string;
  iconUrl: string;
  title: string;
  description: string;
}

// ============================================
// PRICING
// ============================================

export interface PricingFeature {
  id: string;
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string; // e.g., "per project"
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
  ctaUrl: string;
}

// ============================================
// FAQ
// ============================================

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// ============================================
// TESTIMONIALS
// ============================================

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  position?: string; // Alias for role
  company: string;
  quote: string;
  imageUrl?: string;
  imageAlt?: string;
  rating?: number | string;
  metric?: string; // e.g., "Faster Delivery"
}

// ============================================
// BLOG POSTS
// ============================================

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  publishedDate: string;
  category: string;
  tags: string[];
}

// ============================================
// NAVIGATION
// ============================================

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  label: string;
  url: string;
}

// ============================================
// HERO SECTION
// ============================================

export interface HeroContent {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  videoUrl?: string;
  ctaText?: string;
  ctaUrl?: string;
}

// ============================================
// SITE SETTINGS
// ============================================

export interface SiteSettings {
  siteName: string;
  tagline: string;
  logoUrl: string;
  footerVideoUrl: string;
  copyrightText: string;
  creditText: string;
  creditUrl: string;
  builtWithText: string;
  builtWithUrl: string;
}

// ============================================
// PAGE METADATA
// ============================================

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

// ============================================
// HOMEPAGE DATA
// ============================================

export interface HomepageData {
  hero: HeroContent;
  introduction: {
    title: string;
    description: string;
  };
  clients: ClientLogo[];
  featuredProjects: Project[];
  aboutUs: {
    title: string;
    description: string;
    imageUrl: string;
    ctaText: string;
    ctaUrl: string;
  };
  services: Service[];
  whyChooseUs: WhyChooseUsItem[];
  process: {
    title: string;
    description: string;
    steps: ProcessStep[];
  };
  pricing: {
    title: string;
    description: string;
    plans: PricingPlan[];
  };
  faq: {
    title: string;
    items: FAQ[];
  };
  testimonials: Testimonial[];
}