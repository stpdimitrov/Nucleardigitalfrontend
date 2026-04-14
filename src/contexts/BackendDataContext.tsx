import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Service, Project, Testimonial, SiteSettings } from '@/types';
import {
  fetchServices,
  fetchProjects,
  fetchTestimonials,
  fetchSiteSettings,
  fetchRawSiteSettings,
} from '../services/api';
import {
  services as mockServices,
  projects as mockProjects,
  testimonials as mockTestimonials,
  siteSettings as mockSiteSettings,
} from '../services/mock-data';
import { useCMSStore } from '../src/cms/cmsStore';

interface BackendDataState {
  services: Service[];
  projects: Project[];
  testimonials: Testimonial[];
  siteSettings: SiteSettings;
  loading: boolean;
  error: string | null;
}

const BackendDataContext = createContext<BackendDataState>({
  services: mockServices,
  projects: mockProjects,
  testimonials: mockTestimonials,
  siteSettings: mockSiteSettings,
  loading: false,
  error: null,
});

export function useBackendData() {
  return useContext(BackendDataContext);
}

export function BackendDataProvider({ children }: { children: React.ReactNode }) {
  const [services, setServices] = useState<Service[]>(mockServices);
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(mockTestimonials);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(mockSiteSettings);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const batchUpdateContent = useCMSStore((s) => s.batchUpdateContent);

  useEffect(() => {
    let cancelled = false;

    async function loadAll() {
      setLoading(true);
      setError(null);

      const results = await Promise.allSettled([
        fetchServices(),
        fetchProjects(),
        fetchTestimonials(),
        fetchSiteSettings(),
        fetchRawSiteSettings(),
      ]);

      if (cancelled) return;

      const [servicesResult, projectsResult, testimonialsResult, settingsResult, rawSettingsResult] = results;

      const errors: string[] = [];

      if (servicesResult.status === 'fulfilled' && servicesResult.value.length > 0) {
        setServices(servicesResult.value);
      } else if (servicesResult.status === 'rejected') {
        errors.push(`services: ${servicesResult.reason}`);
      }

      if (projectsResult.status === 'fulfilled' && projectsResult.value.length > 0) {
        setProjects(projectsResult.value);
      } else if (projectsResult.status === 'rejected') {
        errors.push(`projects: ${projectsResult.reason}`);
      }

      if (testimonialsResult.status === 'fulfilled' && testimonialsResult.value.length > 0) {
        setTestimonials(testimonialsResult.value);
      } else if (testimonialsResult.status === 'rejected') {
        errors.push(`testimonials: ${testimonialsResult.reason}`);
      }

      if (settingsResult.status === 'fulfilled') {
        setSiteSettings(settingsResult.value);
      } else if (settingsResult.status === 'rejected') {
        errors.push(`site-settings: ${settingsResult.reason}`);
      }

      // Hydrate CMS content store from backend if cms_frontend_content exists
      if (rawSettingsResult.status === 'fulfilled') {
        const cmsSetting = rawSettingsResult.value.find((s) => s.key === 'cms_frontend_content');
        if (cmsSetting?.value_en) {
          try {
            const backendContent = JSON.parse(cmsSetting.value_en);
            if (backendContent && typeof backendContent === 'object') {
              batchUpdateContent(backendContent);
            }
          } catch {
            // Invalid JSON in backend — ignore and keep localStorage version
          }
        }
      }

      if (errors.length > 0) {
        setError(errors.join('; '));
        console.warn('[BackendDataProvider] Some fetches failed, using mock fallbacks:', errors);
      }

      setLoading(false);
    }

    loadAll();
    return () => { cancelled = true; };
  }, []);

  return (
    <BackendDataContext.Provider value={{ services, projects, testimonials, siteSettings, loading, error }}>
      {children}
    </BackendDataContext.Provider>
  );
}
