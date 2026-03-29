/**
 * CMS Service Layer
 * 
 * This is a mock CMS service that returns structured data.
 * Replace the functions in this file with real API calls when ready.
 */

import { Project, BlogPost, Service, TeamMember } from '../types';

// Simulates API delay
const delay = (ms: number = 300) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Fetch all projects from CMS
 * TODO: Replace with actual API call
 */
export async function getProjects(): Promise<Project[]> {
  await delay();
  
  // Import from mock-data to use the actual Framer videos
  const { projects } = await import('../services/mock-data');
  return projects;
}

/**
 * Fetch a single project by slug
 * TODO: Replace with actual API call
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  await delay();
  
  const projects = await getProjects();
  return projects.find(p => p.slug === slug) || null;
}

/**
 * Fetch all blog posts from CMS
 * TODO: Replace with actual API call
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  await delay();
  
  return [
    {
      id: '1',
      slug: 'storytelling-in-brand-video',
      title: 'The Art of Storytelling in Brand Video',
      excerpt: 'Discover how narrative-driven video content can transform your brand identity and connect with audiences on a deeper level.',
      content: 'Full blog content here...',
      category: 'Video Production',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      },
      publishedAt: '2025-02-10',
      readTime: 5,
    },
    {
      id: '2',
      slug: 'lighting-techniques-product-photography',
      title: '5 Lighting Techniques for Product Photography',
      excerpt: 'Master these essential lighting setups to create stunning product images that sell.',
      content: 'Full blog content here...',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop',
      author: {
        name: 'Michael Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      },
      publishedAt: '2025-02-05',
      readTime: 7,
    },
    {
      id: '3',
      slug: 'roi-of-video-marketing',
      title: 'Understanding the ROI of Video Marketing',
      excerpt: 'Learn how to measure the impact of your video campaigns and justify your marketing investment.',
      content: 'Full blog content here...',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      author: {
        name: 'Emily Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      },
      publishedAt: '2025-01-28',
      readTime: 6,
    },
  ];
}

/**
 * Fetch a single blog post by slug
 * TODO: Replace with actual API call
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  await delay();
  
  const posts = await getBlogPosts();
  return posts.find(p => p.slug === slug) || null;
}

/**
 * Fetch all services from CMS
 * TODO: Replace with actual API call
 */
export async function getServices(): Promise<Service[]> {
  await delay();
  
  return [
    {
      id: '1',
      slug: 'video-production',
      title: 'Video Production',
      shortDescription: 'Cinematic storytelling that brings your brand to life.',
      description: 'From concept to final cut, we create compelling video content that resonates with your audience.',
      icon: '🎥',
      features: ['Brand Videos', 'Commercials', 'Documentary', 'Event Coverage'],
    },
    {
      id: '2',
      slug: 'photography',
      title: 'Photography',
      shortDescription: 'Stunning visuals that capture your brand essence.',
      description: 'Professional photography services for products, events, and brand campaigns.',
      icon: '📸',
      features: ['Product Photography', 'Brand Photography', 'Event Photography', 'Portrait'],
    },
    {
      id: '3',
      slug: 'creative-direction',
      title: 'Creative Direction',
      shortDescription: 'Strategic vision that sets your brand apart.',
      description: 'End-to-end creative direction to ensure your visual content aligns with your brand strategy.',
      icon: '✨',
      features: ['Brand Strategy', 'Concept Development', 'Art Direction', 'Campaign Planning'],
    },
  ];
}

/**
 * Fetch team members from CMS
 * TODO: Replace with actual API call
 */
export async function getTeamMembers(): Promise<TeamMember[]> {
  await delay();
  
  return [
    {
      id: '1',
      name: 'Alex Morgan',
      role: 'Creative Director',
      bio: 'Award-winning director with 10+ years of experience in brand storytelling.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      social: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
      },
    },
    {
      id: '2',
      name: 'Jessica Lee',
      role: 'Lead Photographer',
      bio: 'Specializing in editorial and commercial photography with a unique artistic vision.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      social: {
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
      },
    },
  ];
}