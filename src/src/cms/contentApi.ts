/**
 * Content API Layer
 * 
 * This module provides an abstraction layer for content persistence.
 * Default implementation uses localStorage, but can be easily swapped
 * for a real backend API (Supabase, REST API, GraphQL, etc.)
 */

import type { ContentRegistry } from './cmsStore';

export interface ContentAPIConfig {
  baseURL?: string;
  headers?: Record<string, string>;
}

export interface ContentAPI {
  loadContent: () => Promise<ContentRegistry>;
  saveContent: (patch: Partial<ContentRegistry>) => Promise<void>;
  resetContent: () => Promise<void>;
}

/**
 * Default LocalStorage Implementation
 */
class LocalStorageContentAPI implements ContentAPI {
  private storageKey = 'nucleardigital-cms-content';

  async loadContent(): Promise<ContentRegistry> {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (!stored) return {};
      const parsed = JSON.parse(stored);
      return parsed.state?.content || {};
    } catch (error) {
      console.error('Failed to load content from localStorage:', error);
      return {};
    }
  }

  async saveContent(patch: Partial<ContentRegistry>): Promise<void> {
    try {
      const current = await this.loadContent();
      const updated = { ...current, ...patch };
      
      // Update localStorage in the same format as zustand persist
      const stored = localStorage.getItem(this.storageKey);
      const existing = stored ? JSON.parse(stored) : {};
      
      localStorage.setItem(
        this.storageKey,
        JSON.stringify({
          ...existing,
          state: {
            ...existing.state,
            content: updated,
          },
        })
      );
    } catch (error) {
      console.error('Failed to save content to localStorage:', error);
      throw error;
    }
  }

  async resetContent(): Promise<void> {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        const existing = JSON.parse(stored);
        localStorage.setItem(
          this.storageKey,
          JSON.stringify({
            ...existing,
            state: {
              ...existing.state,
              content: {},
            },
          })
        );
      }
    } catch (error) {
      console.error('Failed to reset content:', error);
      throw error;
    }
  }
}

/**
 * Example: Supabase/Backend API Implementation
 * Uncomment and configure when ready to connect to real backend
 */
/*
class BackendContentAPI implements ContentAPI {
  constructor(private config: ContentAPIConfig) {}

  async loadContent(): Promise<ContentRegistry> {
    const response = await fetch(`${this.config.baseURL}/content`, {
      headers: this.config.headers,
    });
    if (!response.ok) throw new Error('Failed to load content');
    return response.json();
  }

  async saveContent(patch: Partial<ContentRegistry>): Promise<void> {
    const response = await fetch(`${this.config.baseURL}/content`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...this.config.headers,
      },
      body: JSON.stringify(patch),
    });
    if (!response.ok) throw new Error('Failed to save content');
  }

  async resetContent(): Promise<void> {
    const response = await fetch(`${this.config.baseURL}/content`, {
      method: 'DELETE',
      headers: this.config.headers,
    });
    if (!response.ok) throw new Error('Failed to reset content');
  }
}
*/

/**
 * Create and export the content API instance
 * 
 * To switch to backend API:
 * 1. Uncomment BackendContentAPI above
 * 2. Replace with: export const contentAPI = new BackendContentAPI({ baseURL: '...' });
 */
export const contentAPI: ContentAPI = new LocalStorageContentAPI();
