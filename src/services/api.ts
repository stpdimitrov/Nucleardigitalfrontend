// API service layer for Flixen™ application
// CRITICAL: This is a placeholder structure for future API integration
// Currently returns mock data to maintain 100% visual parity during migration

import type {
  Project,
  ClientLogo,
  Service,
  WhyChooseUsItem,
  ProcessStep,
  PricingPlan,
  FAQ,
  Testimonial,
  SocialLink,
  NavLink,
  HomepageData,
  SiteSettings,
} from '@/types';

import {
  projects,
  clientLogos,
  services,
  whyChooseUsItems,
  processSteps,
  pricingPlans,
  faqItems,
  testimonials,
  mainNavLinks,
  cmsNavLinks,
  socialLinks,
  homepageData,
  siteSettings,
} from './mock-data';

// ============================================
// API CONFIGURATION
// ============================================

// TODO: Replace with actual API endpoint when backend is ready
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Generic fetch wrapper for API calls
 * TODO: Add authentication, error handling, retries, etc.
 */
async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  // For now, we're not making actual API calls
  // This structure is ready for when we integrate a real API
  
  throw new Error('API integration not yet implemented. Using mock data.');
}

// ============================================
// SITE SETTINGS
// ============================================

/**
 * Get site settings (logo, name, footer content, etc.)
 * 
 * Future API: GET /api/settings
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  // TODO: Replace with actual API call
  // return apiFetch<SiteSettings>('/settings');
  
  return Promise.resolve(siteSettings);
}

// ============================================
// NAVIGATION
// ============================================

/**
 * Get main navigation links
 * 
 * Future API: GET /api/navigation/main
 */
export async function getMainNavLinks(): Promise<NavLink[]> {
  // TODO: Replace with actual API call
  // return apiFetch<NavLink[]>('/navigation/main');
  
  return Promise.resolve(mainNavLinks);
}

/**
 * Get CMS navigation links
 * 
 * Future API: GET /api/navigation/cms
 */
export async function getCMSNavLinks(): Promise<NavLink[]> {
  // TODO: Replace with actual API call
  // return apiFetch<NavLink[]>('/navigation/cms');
  
  return Promise.resolve(cmsNavLinks);
}

/**
 * Get social media links
 * 
 * Future API: GET /api/social-links
 */
export async function getSocialLinks(): Promise<SocialLink[]> {
  // TODO: Replace with actual API call
  // return apiFetch<SocialLink[]>('/social-links');
  
  return Promise.resolve(socialLinks);
}

// ============================================
// PROJECTS
// ============================================

/**
 * Get all projects
 * 
 * Future API: GET /api/projects
 */
export async function getProjects(): Promise<Project[]> {
  // TODO: Replace with actual API call
  // return apiFetch<Project[]>('/projects');
  
  return Promise.resolve(projects);
}

/**
 * Get featured projects (subset of all projects)
 * 
 * Future API: GET /api/projects?featured=true
 */
export async function getFeaturedProjects(limit?: number): Promise<Project[]> {
  // TODO: Replace with actual API call
  // return apiFetch<Project[]>(`/projects?featured=true&limit=${limit || 6}`);
  
  const featured = projects.slice(0, limit || 6);
  return Promise.resolve(featured);
}

/**
 * Get single project by slug
 * 
 * Future API: GET /api/projects/:slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  // TODO: Replace with actual API call
  // return apiFetch<Project>(`/projects/${slug}`);
  
  const project = projects.find(p => p.slug === slug);
  return Promise.resolve(project || null);
}

// ============================================
// CLIENT LOGOS
// ============================================

/**
 * Get all client logos
 * 
 * Future API: GET /api/clients
 */
export async function getClientLogos(): Promise<ClientLogo[]> {
  // TODO: Replace with actual API call
  // return apiFetch<ClientLogo[]>('/clients');
  
  return Promise.resolve(clientLogos);
}

// ============================================
// SERVICES
// ============================================

/**
 * Get all services
 * 
 * Future API: GET /api/services
 */
export async function getServices(): Promise<Service[]> {
  // TODO: Replace with actual API call
  // return apiFetch<Service[]>('/services');
  
  return Promise.resolve(services);
}

/**
 * Get single service by ID
 * 
 * Future API: GET /api/services/:id
 */
export async function getServiceById(id: string): Promise<Service | null> {
  // TODO: Replace with actual API call
  // return apiFetch<Service>(`/services/${id}`);
  
  const service = services.find(s => s.id === id);
  return Promise.resolve(service || null);
}

// ============================================
// WHY CHOOSE US
// ============================================

/**
 * Get all "Why Choose Us" items
 * 
 * Future API: GET /api/why-choose-us
 */
export async function getWhyChooseUsItems(): Promise<WhyChooseUsItem[]> {
  // TODO: Replace with actual API call
  // return apiFetch<WhyChooseUsItem[]>('/why-choose-us');
  
  return Promise.resolve(whyChooseUsItems);
}

// ============================================
// PROCESS
// ============================================

/**
 * Get process steps
 * 
 * Future API: GET /api/process
 */
export async function getProcessSteps(): Promise<ProcessStep[]> {
  // TODO: Replace with actual API call
  // return apiFetch<ProcessStep[]>('/process');
  
  return Promise.resolve(processSteps);
}

// ============================================
// PRICING
// ============================================

/**
 * Get all pricing plans
 * 
 * Future API: GET /api/pricing
 */
export async function getPricingPlans(): Promise<PricingPlan[]> {
  // TODO: Replace with actual API call
  // return apiFetch<PricingPlan[]>('/pricing');
  
  return Promise.resolve(pricingPlans);
}

/**
 * Get single pricing plan by ID
 * 
 * Future API: GET /api/pricing/:id
 */
export async function getPricingPlanById(id: string): Promise<PricingPlan | null> {
  // TODO: Replace with actual API call
  // return apiFetch<PricingPlan>(`/pricing/${id}`);
  
  const plan = pricingPlans.find(p => p.id === id);
  return Promise.resolve(plan || null);
}

// ============================================
// FAQ
// ============================================

/**
 * Get all FAQ items
 * 
 * Future API: GET /api/faq
 */
export async function getFAQItems(): Promise<FAQ[]> {
  // TODO: Replace with actual API call
  // return apiFetch<FAQ[]>('/faq');
  
  return Promise.resolve(faqItems);
}

// ============================================
// TESTIMONIALS
// ============================================

/**
 * Get all testimonials
 * 
 * Future API: GET /api/testimonials
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  // TODO: Replace with actual API call
  // return apiFetch<Testimonial[]>('/testimonials');
  
  return Promise.resolve(testimonials);
}

// ============================================
// HOMEPAGE DATA
// ============================================

/**
 * Get all homepage data in one request
 * 
 * Future API: GET /api/homepage
 */
export async function getHomepageData(): Promise<HomepageData> {
  // TODO: Replace with actual API call
  // return apiFetch<HomepageData>('/homepage');
  
  return Promise.resolve(homepageData);
}

// ============================================
// CONTACT FORM
// ============================================

/**
 * Submit contact form
 * 
 * Future API: POST /api/contact
 */
export async function submitContactForm(data: {
  name: string;
  email: string;
  message: string;
  phone?: string;
}): Promise<{ success: boolean; message: string }> {
  // TODO: Replace with actual API call
  // return apiFetch<{ success: boolean; message: string }>('/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  
  console.log('Contact form submitted (mock):', data);
  return Promise.resolve({
    success: true,
    message: 'Thank you for your message. We will get back to you soon!',
  });
}

// ============================================
// NEWSLETTER
// ============================================

/**
 * Subscribe to newsletter
 * 
 * Future API: POST /api/newsletter/subscribe
 */
export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  // TODO: Replace with actual API call
  // return apiFetch<{ success: boolean; message: string }>('/newsletter/subscribe', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email }),
  // });
  
  console.log('Newsletter subscription (mock):', email);
  return Promise.resolve({
    success: true,
    message: 'Successfully subscribed to newsletter!',
  });
}

// ============================================
// EXPORT ALL SERVICES
// ============================================

export const api = {
  // Settings
  getSiteSettings,
  
  // Navigation
  getMainNavLinks,
  getCMSNavLinks,
  getSocialLinks,
  
  // Projects
  getProjects,
  getFeaturedProjects,
  getProjectBySlug,
  
  // Clients
  getClientLogos,
  
  // Services
  getServices,
  getServiceById,
  
  // Why Choose Us
  getWhyChooseUsItems,
  
  // Process
  getProcessSteps,
  
  // Pricing
  getPricingPlans,
  getPricingPlanById,
  
  // FAQ
  getFAQItems,
  
  // Testimonials
  getTestimonials,
  
  // Homepage
  getHomepageData,
  
  // Forms
  submitContactForm,
  subscribeToNewsletter,
};

export default api;
