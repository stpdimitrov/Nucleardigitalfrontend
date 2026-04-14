// API service layer — all requests go through Supabase Edge Functions
import type { Project, Service, Testimonial, SiteSettings, FAQ } from '@/types';
import {
  projects as mockProjects,
  services as mockServices,
  testimonials as mockTestimonials,
  siteSettings as mockSiteSettings,
  clientLogos,
  whyChooseUsItems,
  processSteps,
  pricingPlans,
  faqItems,
  mainNavLinks,
  cmsNavLinks,
  socialLinks,
  homepageData,
} from './mock-data';

// ============================================
// CONFIG
// ============================================

const SUPABASE_URL = 'https://nwpbhznbvrmcoyzeywvk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53cGJoem5idnJtY295emV5d3ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxODUzODcsImV4cCI6MjA3NTc2MTM4N30.g40Gd2H7XxOxwSccQkZpxINKcshfIGfSHx-F2KGm-30';
const TENANT_ID = '00000000-0000-0000-0000-000000000005';

// All requests go through Edge Functions
const FN_URL = `${SUPABASE_URL}/functions/v1`;

function anonHeaders(token?: string): Record<string, string> {
  return {
    'Content-Type': 'application/json',
    'apikey': SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${token || SUPABASE_ANON_KEY}`,
    'x-tenant-id': TENANT_ID,
  };
}

// ============================================
// BACKEND RESPONSE TYPES
// ============================================

interface BackendService {
  id: string;
  slug: string;
  data: string | {
    title?: string;
    name?: string;
    description?: string;
    image?: string;
    cover_image?: string;
    videoUrl?: string;
    features?: Array<string | { name?: string; text?: string }>;
    benefits?: Array<string | { name?: string; text?: string }>;
    gallery_images?: Array<{ url: string }>;
    is_active?: boolean;
    is_featured?: boolean;
    [key: string]: unknown;
  };
  tenant_id: string;
  created_at: string;
  updated_at: string;
}

interface BackendProject {
  id: string;
  slug: string;
  data: string | {
    title?: string;
    name?: string;
    description?: string;
    image?: string;
    videoUrl?: string;
    date?: string;
    client?: string;
    overview?: string;
    process?: string;
    result?: string;
    service?: string;
    category?: string;
    featured?: boolean;
    [key: string]: unknown;
  };
  service_id?: string;
  tenant_id: string;
  created_at: string;
  updated_at: string;
}

interface BackendTestimonial {
  id: string;
  customer_name: string;
  quote: string;
  rating: number;
  date_published: string;
  created_at: string;
  tenant_id?: string;
  role?: string;
  company?: string;
  imageUrl?: string;
}

interface BackendSiteSetting {
  id: string;
  key: string;
  value_en: string;
  value_bg?: string;
  category?: string;
  label?: string;
  description?: string;
  sort_order?: number;
  tenant_id?: string;
}

// ============================================
// HELPERS
// ============================================

// The `data` field can be a JSON string or already an object
function parseData<T>(raw: string | T): T {
  if (typeof raw === 'string') {
    try { return JSON.parse(raw) as T; }
    catch { return {} as T; }
  }
  return raw;
}

async function fnGet<T>(path: string, token?: string): Promise<T> {
  const res = await fetch(`${FN_URL}/${path}`, {
    method: 'GET',
    headers: anonHeaders(token),
  });
  if (!res.ok) {
    const err = await res.text().catch(() => '');
    throw new Error(err || `GET ${path} → ${res.status}`);
  }
  return res.json() as Promise<T>;
}

async function fnPost<T>(path: string, body: object, token?: string): Promise<T> {
  const res = await fetch(`${FN_URL}/${path}`, {
    method: 'POST',
    headers: anonHeaders(token),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.text().catch(() => '');
    throw new Error(err || `POST ${path} → ${res.status}`);
  }
  return res.json() as Promise<T>;
}

async function fnPut<T>(path: string, body: object, token?: string): Promise<T> {
  const res = await fetch(`${FN_URL}/${path}`, {
    method: 'PUT',
    headers: anonHeaders(token),
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.text().catch(() => '');
    throw new Error(err || `PUT ${path} → ${res.status}`);
  }
  return res.json() as Promise<T>;
}

async function fnDelete(path: string, token?: string): Promise<void> {
  const res = await fetch(`${FN_URL}/${path}`, {
    method: 'DELETE',
    headers: anonHeaders(token),
  });
  if (!res.ok) {
    const err = await res.text().catch(() => '');
    throw new Error(err || `DELETE ${path} → ${res.status}`);
  }
}

// ============================================
// MAPPERS
// ============================================

function mapService(s: BackendService): Service {
  const d = parseData(s.data) as NonNullable<typeof s.data extends string ? never : typeof s.data>;
  const rawFeatures = [
    ...(Array.isArray(d.features) ? d.features : []),
    ...(Array.isArray(d.benefits) ? d.benefits : []),
  ] as Array<string | { name?: string; text?: string }>;

  return {
    id: s.id,
    slug: s.slug,
    title: d.title || d.name || s.slug,
    description: d.description || '',
    image: d.image || d.cover_image,
    videoUrl: d.videoUrl,
    features: rawFeatures,
  };
}

function mapProject(p: BackendProject): Project {
  const d = parseData(p.data) as NonNullable<typeof p.data extends string ? never : typeof p.data>;
  return {
    id: p.id,
    slug: p.slug,
    title: d.title || d.name || p.slug,
    name: d.name || d.title || p.slug,
    description: d.description || '',
    image: d.image,
    videoUrl: d.videoUrl,
    date: d.date || p.created_at.slice(0, 10),
    client: d.client,
    overview: d.overview,
    process: d.process,
    result: d.result,
    service: d.service,
    category: d.category,
    featured: d.featured,
  };
}

function mapTestimonial(t: BackendTestimonial): Testimonial {
  return {
    id: t.id,
    name: t.customer_name,
    role: t.role || '',
    company: t.company || '',
    quote: t.quote,
    imageUrl: t.imageUrl,
    rating: t.rating,
  };
}

function mapSiteSettings(settings: BackendSiteSetting[]): SiteSettings {
  const map: Record<string, string> = {};
  for (const s of settings) {
    if (s.value_en) map[s.key] = s.value_en;
  }

  const pick = (keys: string[], fallback: string): string => {
    for (const k of keys) { if (map[k]) return map[k]; }
    return fallback;
  };

  return {
    siteName: pick(['site_name', 'siteName'], mockSiteSettings.siteName),
    tagline: pick(['tagline'], mockSiteSettings.tagline),
    logoUrl: pick(['logo_url', 'logoUrl'], mockSiteSettings.logoUrl),
    footerVideoUrl: pick(['footer_video_url', 'footerVideoUrl'], mockSiteSettings.footerVideoUrl),
    copyrightText: pick(['copyright_text', 'copyrightText'], mockSiteSettings.copyrightText),
    creditText: pick(['credit_text', 'creditText'], mockSiteSettings.creditText),
    creditUrl: pick(['credit_url', 'creditUrl'], mockSiteSettings.creditUrl),
    builtWithText: pick(['built_with_text', 'builtWithText'], mockSiteSettings.builtWithText),
    builtWithUrl: pick(['built_with_url', 'builtWithUrl'], mockSiteSettings.builtWithUrl),
  };
}

// ============================================
// PUBLIC READ ENDPOINTS — all via Edge Function
// ============================================

export async function fetchServices(): Promise<Service[]> {
  const raw = await fnGet<BackendService[]>('api/services');
  return raw.map(mapService);
}

export async function fetchProjects(): Promise<Project[]> {
  const raw = await fnGet<BackendProject[]>('api/projects');
  return raw.map(mapProject);
}

export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const raw = await fnGet<BackendProject>(`api/project/${slug}`);
    return raw ? mapProject(raw) : null;
  } catch { return null; }
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  const raw = await fnGet<BackendTestimonial[]>('api/testimonials');
  return raw.map(mapTestimonial);
}

export async function fetchSiteSettings(): Promise<SiteSettings> {
  const raw = await fnGet<BackendSiteSetting[]>('api/site-settings');
  return mapSiteSettings(raw);
}

export async function fetchRawSiteSettings(): Promise<BackendSiteSetting[]> {
  return fnGet<BackendSiteSetting[]>('api/site-settings');
}

// ============================================
// CONTACT FORM — Edge Function
// ============================================

export interface AppointmentRequest {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  date?: string;
  message?: string;
}

export async function submitAppointment(data: AppointmentRequest): Promise<{ success: boolean; message: string }> {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split('T')[0];

  await fnPost('api/appointments/request', {
    customer_name: data.name,
    customer_email: data.email,
    customer_phone: data.phone || 'N/A',
    requested_service_slug: data.service || 'general',
    requested_date: data.date || defaultDate,
    customer_message: data.message || '',
    vehicle_details: '',
  });
  return { success: true, message: 'Thank you! We will be in touch shortly.' };
}

// ============================================
// AUTH — Edge Function
// ============================================

export async function adminLogin(email: string, password: string): Promise<string> {
  const data = await fnPost<{ user: object; token: string }>('auth/login', { email, password });
  if (!data.token) throw new Error('No token in response');
  return data.token;
}

// ============================================
// ADMIN WRITES — all via Edge Function
// ============================================

export async function adminCreateService(token: string, payload: { slug: string; data: object }): Promise<BackendService> {
  return fnPost<BackendService>('api/admin/services', { ...payload, tenant_id: TENANT_ID }, token);
}

export async function adminUpdateService(token: string, id: string, payload: { slug?: string; data?: object }): Promise<BackendService> {
  return fnPut<BackendService>(`api/admin/services/${id}`, { ...payload, tenant_id: TENANT_ID }, token);
}

export async function adminDeleteService(token: string, id: string): Promise<void> {
  return fnDelete(`api/admin/services/${id}`, token);
}

export async function adminCreateProject(token: string, payload: { slug: string; data: object; service_id?: string }): Promise<BackendProject> {
  return fnPost<BackendProject>('api/admin/projects', { ...payload, tenant_id: TENANT_ID }, token);
}

export async function adminUpdateProject(token: string, id: string, payload: { slug?: string; data?: object }): Promise<BackendProject> {
  return fnPut<BackendProject>(`api/admin/projects/${id}`, { ...payload, tenant_id: TENANT_ID }, token);
}

export async function adminDeleteProject(token: string, id: string): Promise<void> {
  return fnDelete(`api/admin/projects/${id}`, token);
}

export async function adminCreateTestimonial(token: string, payload: {
  customer_name: string;
  quote: string;
  rating: number;
  date_published?: string;
}): Promise<BackendTestimonial> {
  return fnPost<BackendTestimonial>('api/admin/testimonials', { ...payload, tenant_id: TENANT_ID }, token);
}

export async function adminDeleteTestimonial(token: string, id: string): Promise<void> {
  return fnDelete(`api/admin/testimonials/${id}`, token);
}

export async function adminUpdateSiteSetting(token: string, key: string, value_en: string, value_bg?: string): Promise<void> {
  await fnPut(`api/admin/site-settings/${key}`, {
    value_en,
    value_bg: value_bg ?? value_en,
    category: 'cms',
    label: key,
    sort_order: 0,
  }, token);
}

// ============================================
// SEED — insert frontend mock data for tenant
// ============================================

export async function seedTenantServices(token: string): Promise<void> {
  const { services: mockSvcs } = await import('./mock-data');
  for (const s of mockSvcs) {
    await adminCreateService(token, {
      slug: s.id.replace('service-', '') + '-' + s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      data: {
        name: s.title,
        title: s.title,
        description: s.description,
        videoUrl: s.videoUrl,
        features: Array.isArray(s.features) ? s.features : [],
        is_active: true,
        is_featured: true,
        cover_image: '',
        gallery_images: [],
        benefits: [],
        process_steps: [],
        faqs: [],
      },
    });
  }
}

// ============================================
// LEGACY MOCK-BACKED EXPORTS (unchanged data)
// ============================================

export { clientLogos, whyChooseUsItems, processSteps, pricingPlans, faqItems, mainNavLinks, cmsNavLinks, socialLinks, homepageData };

export async function getClientLogos() { return clientLogos; }
export async function getWhyChooseUsItems() { return whyChooseUsItems; }
export async function getProcessSteps() { return processSteps; }
export async function getPricingPlans() { return pricingPlans; }
export async function getFAQItems(): Promise<FAQ[]> { return faqItems; }
export async function getMainNavLinks() { return mainNavLinks; }
export async function getCMSNavLinks() { return cmsNavLinks; }
export async function getSocialLinks() { return socialLinks; }
export async function getHomepageData() { return homepageData; }

export const getServices = fetchServices;
export const getProjects = fetchProjects;
export const getTestimonials = fetchTestimonials;
export const getSiteSettings = fetchSiteSettings;
export const getProjectBySlug = fetchProjectBySlug;

export async function submitContactForm(data: { name: string; email: string; message: string; phone?: string }) {
  return submitAppointment(data);
}

export const api = {
  fetchServices, fetchProjects, fetchProjectBySlug, fetchTestimonials, fetchSiteSettings,
  submitAppointment, adminLogin,
  adminCreateService, adminUpdateService, adminDeleteService,
  adminCreateProject, adminUpdateProject, adminDeleteProject,
  adminCreateTestimonial, adminDeleteTestimonial, adminUpdateSiteSetting,
  seedTenantServices,
  getClientLogos, getWhyChooseUsItems, getProcessSteps, getPricingPlans,
  getFAQItems, getMainNavLinks, getCMSNavLinks, getSocialLinks, submitContactForm,
};

export default api;
