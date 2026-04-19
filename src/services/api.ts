// API service layer — all requests go through Supabase Edge Functions
import type { Project, Service, Testimonial, SiteSettings, FAQ } from '@/types';

// ============================================
// CONFIG
// ============================================

const BASE_URL = 'https://energypointbackend.onrender.com';
const TENANT_ID = '00000000-0000-0000-0000-000000000005';

function anonHeaders(adminToken?: string): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'x-tenant-id': TENANT_ID,
  };
  if (adminToken) {
    headers['Authorization'] = `Bearer ${adminToken}`;
  }
  return headers;
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
  data?: {
    role?: string;
    company?: string;
    image_url?: string;
    [key: string]: unknown;
  };
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
  const res = await fetch(`${BASE_URL}/${path}`, {
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
  const res = await fetch(`${BASE_URL}/${path}`, {
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
  const res = await fetch(`${BASE_URL}/${path}`, {
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
  const res = await fetch(`${BASE_URL}/${path}`, {
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
    serviceId: p.service_id,
  };
}

function mapTestimonial(t: BackendTestimonial): Testimonial {
  const d = t.data || {};
  return {
    id: t.id,
    name: t.customer_name,
    role: d.role || t.role || '',
    company: d.company || t.company || '',
    quote: t.quote,
    imageUrl: d.image_url || t.imageUrl,
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
    siteName: pick(['site_name', 'siteName'], ''),
    tagline: pick(['tagline'], ''),
    logoUrl: pick(['logo_url', 'logoUrl'], ''),
    footerVideoUrl: pick(['footer_video_url', 'footerVideoUrl'], ''),
    copyrightText: pick(['copyright_text', 'copyrightText'], ''),
    creditText: pick(['credit_text', 'creditText'], ''),
    creditUrl: pick(['credit_url', 'creditUrl'], ''),
    builtWithText: pick(['built_with_text', 'builtWithText'], ''),
    builtWithUrl: pick(['built_with_url', 'builtWithUrl'], ''),
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
// FILE UPLOAD — Edge Function
// ============================================

/** Upload any file (image or video) to storage. Returns the public URL. */
export async function uploadMedia(token: string, file: File): Promise<string> {
  const formData = new FormData();
  formData.append('image', file); // field name kept for backend compatibility

  const res = await fetch(`${BASE_URL}/admin/upload`, {
    method: 'POST',
    headers: {
      'x-tenant-id': TENANT_ID,
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const err = await res.text().catch(() => '');
    throw new Error(err || `Upload failed: ${res.status}`);
  }

  const data = await res.json() as { image_url: string };
  return data.image_url;
}

/** @deprecated Use uploadMedia instead */
export const uploadImage = uploadMedia;

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
  return fnPost<BackendService>('admin/services', { ...payload, tenant_id: TENANT_ID }, token);
}

export async function adminUpdateService(token: string, id: string, payload: { slug?: string; data?: object }): Promise<BackendService> {
  return fnPut<BackendService>(`admin/services/${id}`, { ...payload, tenant_id: TENANT_ID }, token);
}

export async function adminDeleteService(token: string, id: string): Promise<void> {
  return fnDelete(`admin/services/${id}`, token);
}

export async function adminCreateProject(token: string, payload: { slug: string; data: object; service_id?: string }): Promise<BackendProject> {
  return fnPost<BackendProject>('admin/projects', { ...payload, tenant_id: TENANT_ID }, token);
}

export async function adminUpdateProject(token: string, id: string, payload: { slug?: string; data?: object; service_id?: string }): Promise<BackendProject> {
  return fnPut<BackendProject>(`admin/projects/${id}`, { ...payload, tenant_id: TENANT_ID }, token);
}

export async function adminDeleteProject(token: string, id: string): Promise<void> {
  return fnDelete(`admin/projects/${id}`, token);
}

export async function adminCreateTestimonial(token: string, payload: {
  customer_name: string;
  quote: string;
  rating: number;
  date_published?: string;
  data?: { role?: string; company?: string; image_url?: string };
}): Promise<BackendTestimonial> {
  return fnPost<BackendTestimonial>('admin/testimonials', { ...payload, tenant_id: TENANT_ID }, token);
}

export async function adminUpdateTestimonial(token: string, id: string, payload: {
  customer_name?: string;
  quote?: string;
  rating?: number;
  date_published?: string;
  data?: { role?: string; company?: string; image_url?: string };
}): Promise<BackendTestimonial> {
  return fnPut<BackendTestimonial>(`admin/testimonials/${id}`, { ...payload, tenant_id: TENANT_ID }, token);
}

export async function adminDeleteTestimonial(token: string, id: string): Promise<void> {
  return fnDelete(`admin/testimonials/${id}`, token);
}

export async function adminUpdateSiteSetting(token: string, key: string, value_en: string, value_bg?: string): Promise<void> {
  await fnPut(`admin/site-settings/${key}`, {
    value_en,
    value_bg: value_bg ?? value_en,
    category: 'cms',
    label: key,
    sort_order: 0,
  }, token);
}

// ============================================
// LEGACY EXPORTS (no longer mock-backed)
// ============================================

export async function getClientLogos() { return []; }
export async function getWhyChooseUsItems() { return []; }
export async function getProcessSteps() { return []; }
export async function getPricingPlans() { return []; }
export async function getFAQItems(): Promise<FAQ[]> { return []; }
export async function getMainNavLinks() { return []; }
export async function getCMSNavLinks() { return []; }
export async function getSocialLinks() { return []; }
export async function getHomepageData() { return {}; }

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
  adminCreateTestimonial, adminUpdateTestimonial, adminDeleteTestimonial, adminUpdateSiteSetting,
  getClientLogos, getWhyChooseUsItems, getProcessSteps, getPricingPlans,
  getFAQItems, getMainNavLinks, getCMSNavLinks, getSocialLinks, submitContactForm,
};

export default api;
