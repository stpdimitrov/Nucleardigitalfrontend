/**
 * Custom React Hooks for CMS Data Fetching
 * 
 * These hooks handle loading states, error handling, and data caching.
 * Replace the CMS service calls when connecting to a real API.
 */

import { useState, useEffect } from 'react';
import * as cms from '../lib/cms';
import { Project, BlogPost, Service, TeamMember } from '../types';

interface UseCMSState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Hook to fetch all projects
 */
export function useProjects(): UseCMSState<Project[]> {
  const [data, setData] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const projects = await cms.getProjects();
      setData(projects);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
}

/**
 * Hook to fetch a single project by slug
 */
export function useProject(slug: string): UseCMSState<Project> {
  const [data, setData] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const project = await cms.getProjectBySlug(slug);
      if (!project) {
        setError('Project not found');
      } else {
        setData(project);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch project');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchData();
    }
  }, [slug]);

  return { data, loading, error, refetch: fetchData };
}

/**
 * Hook to fetch all blog posts
 */
export function useBlogPosts(): UseCMSState<BlogPost[]> {
  const [data, setData] = useState<BlogPost[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const posts = await cms.getBlogPosts();
      setData(posts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch blog posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
}

/**
 * Hook to fetch a single blog post by slug
 */
export function useBlogPost(slug: string): UseCMSState<BlogPost> {
  const [data, setData] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const post = await cms.getBlogPostBySlug(slug);
      if (!post) {
        setError('Blog post not found');
      } else {
        setData(post);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch blog post');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchData();
    }
  }, [slug]);

  return { data, loading, error, refetch: fetchData };
}

/**
 * Hook to fetch all services
 */
export function useServices(): UseCMSState<Service[]> {
  const [data, setData] = useState<Service[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const services = await cms.getServices();
      setData(services);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch services');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
}

/**
 * Hook to fetch team members
 */
export function useTeamMembers(): UseCMSState<TeamMember[]> {
  const [data, setData] = useState<TeamMember[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const members = await cms.getTeamMembers();
      setData(members);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch team members');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
}
