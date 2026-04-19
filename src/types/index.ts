// TypeScript types for Flixen™ application
// CRITICAL: Types match exact data structure from static content
// DO NOT modify without ensuring visual parity

// ============================================
// PROJECTS / PORTFOLIO
// ============================================

export interface Project {
  id: string;
  slug: string;
  title?: string; // For CMS compatibility
  name?: string; // Legacy field
  description?: string;
  image?: string; // CMS image URL
  videoUrl?: string; // Legacy field
  service?: string; // Legacy field
  serviceId?: string;
  category?: string;
  featured?: boolean;
  client?: string;
  date: string;
  services?: string[];
  // Project detail page fields
  overview?: string;
  process?: string;
  result?: string;
  images?: string[];
  videos?: string[];
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
  image?: string; // CMS compatibility
  imageUrl?: string; // Legacy field
  author: string | BlogAuthor;
  publishedAt?: string; // CMS format
  publishedDate?: string; // Legacy field
  category: string;
  tags?: string[];
  readTime?: number;
}

export interface BlogAuthor {
  name: string;
  avatar?: string;
  bio?: string;
}

// ============================================
// SERVICES
// ============================================

export interface ServiceFeature {
  id?: string;
  name?: string;
  text?: string; // Alternative field name
}

export interface Service {
  id: string;
  slug?: string;
  title: string;
  shortDescription?: string;
  description: string;
  icon?: string;
  image?: string;
  videoUrl?: string;
  features: ServiceFeature[] | string[];
}

// ============================================
// TEAM MEMBERS
// ============================================

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  social?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

// ============================================
// CLIENT LOGOS
// ============================================

export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  website?: string;
}

// ============================================
// CONTACT US PAGE
// ============================================

export interface ContactHeroContent {
  id: string;
  sectionTag: string;
  heading: string;
  description: string[];
  scrollDownText: string;
  coverImage: string;
  coverImageAlt: string;
}

export interface ContactFormField {
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'select' | 'textarea';
  name: string;
  required: boolean;
  options?: string[]; // For select fields
}

export interface ContactFormConfig {
  id: string;
  fields: ContactFormField[];
  submitButtonText: string;
}

export interface ContactInfo {
  id: string;
  type: 'phone' | 'email' | 'location';
  icon: 'phone' | 'email' | 'location';
  label: string;
  value: string;
  href?: string;
}

export interface SocialMediaLink {
  id: string;
  platform: string;
  url: string;
}

export interface ContactCardsContent {
  id: string;
  contactCard: {
    title: string;
    contacts: ContactInfo[];
  };
  socialCard: {
    title: string;
    links: SocialMediaLink[];
  };
  officeCard: {
    title: string;
    globeImage: string;
    globeImageAlt: string;
  };
}

export interface MapConfig {
  id: string;
  embedUrl: string;
  height: string;
  title: string;
}

export interface ContactUsPageData {
  id: string;
  hero: ContactHeroContent;
  form: ContactFormConfig;
  map: MapConfig;
  cards: ContactCardsContent;
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