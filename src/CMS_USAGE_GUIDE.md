# CMS Usage Guide

This guide explains how to use and manage content in your Newclear Digital application.

---

## 🎯 Current Setup

Your app uses a **mock CMS** that simulates real API calls. This makes it easy to develop and test before connecting to a real backend.

---

## 📝 How to Add/Edit Content

### **1. Edit Projects**

Edit `/services/mock-data.ts` and modify the `projects` array:

```typescript
export const projects: Project[] = [
  {
    id: "project-7",
    slug: "my-new-project",
    name: "My New Project",
    title: "My New Project",
    description: "An amazing video showcasing...",
    videoUrl: "https://your-video-url.mp4",
    image: "https://your-image-url.jpg", // Used as poster/fallback
    service: "Video Production",
    category: "Video Production",
    date: "Feb 16, 2026",
  },
  // ... existing projects
];
```

**The page will automatically update!** Navigate to `/projects` to see your changes.

---

### **2. Edit Blog Posts**

Edit `/lib/cms.ts` → `getBlogPosts()` function:

```typescript
export async function getBlogPosts(): Promise<BlogPost[]> {
  await delay();
  
  return [
    {
      id: '4',
      slug: 'my-new-blog-post',
      title: 'My New Blog Post',
      excerpt: 'A quick summary of the post...',
      content: 'Full article content goes here...',
      category: 'Video Production',
      image: 'https://your-image-url.jpg',
      author: {
        name: 'Your Name',
        avatar: 'https://your-avatar.jpg',
      },
      publishedAt: '2026-02-16',
      readTime: 5,
    },
    // ... existing posts
  ];
}
```

---

### **3. Edit Services**

Edit `/lib/cms.ts` → `getServices()` function:

```typescript
export async function getServices(): Promise<Service[]> {
  await delay();
  
  return [
    {
      id: '4',
      slug: 'new-service',
      title: 'New Service',
      shortDescription: 'Brief description',
      description: 'Detailed description of the service',
      icon: '🎬',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    // ... existing services
  ];
}
```

---

## 💻 How to Use CMS in Components

### **Example 1: Display Projects**

```tsx
import { useProjects } from '../hooks/useCMS';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';

function MyProjectsPage() {
  const { data: projects, loading, error, refetch } = useProjects();
  
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;
  
  return (
    <div>
      {projects?.map(project => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### **Example 2: Display Single Project**

```tsx
import { useProject } from '../hooks/useCMS';
import { useParams } from 'react-router';

function ProjectDetailPage() {
  const { slug } = useParams();
  const { data: project, loading, error } = useProject(slug!);
  
  if (loading) return <LoadingSpinner />;
  if (error || !project) return <ErrorMessage message="Project not found" />;
  
  return (
    <div>
      <h1>{project.title}</h1>
      <video src={project.videoUrl} autoPlay loop muted />
      <p>{project.description}</p>
    </div>
  );
}
```

### **Example 3: Display Blog Posts**

```tsx
import { useBlogPosts } from '../hooks/useCMS';

function BlogPage() {
  const { data: posts, loading } = useBlogPosts();
  
  if (loading) return <LoadingSpinner />;
  
  return (
    <div>
      {posts?.map(post => (
        <article key={post.id}>
          <img src={post.image} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <span>{post.readTime} min read</span>
        </article>
      ))}
    </div>
  );
}
```

---

## 🔌 Available CMS Hooks

All hooks are in `/hooks/useCMS.ts`:

| Hook | Returns | Usage |
|------|---------|-------|
| `useProjects()` | All projects | Project listing pages |
| `useProject(slug)` | Single project | Project detail pages |
| `useBlogPosts()` | All blog posts | Blog listing pages |
| `useBlogPost(slug)` | Single blog post | Blog detail pages |
| `useServices()` | All services | Services page |
| `useTeamMembers()` | Team members | About page |

### Hook Return Value

Every hook returns:
```typescript
{
  data: T | null;        // The fetched data
  loading: boolean;      // True while fetching
  error: string | null;  // Error message if failed
  refetch: () => void;   // Function to reload data
}
```

---

## 🌐 Connect to a Real CMS

### **Option A: Supabase (Recommended)**

1. Set up Supabase project
2. Create tables: `projects`, `blog_posts`, `services`
3. Update `/lib/cms.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_ANON_KEY'
);

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('date', { ascending: false });
    
  if (error) throw error;
  return data;
}
```

### **Option B: Contentful**

```typescript
import { createClient } from 'contentful';

const client = createClient({
  space: 'YOUR_SPACE_ID',
  accessToken: 'YOUR_ACCESS_TOKEN',
});

export async function getProjects(): Promise<Project[]> {
  const entries = await client.getEntries({ content_type: 'project' });
  return entries.items.map(item => ({
    id: item.sys.id,
    slug: item.fields.slug,
    title: item.fields.title,
    // ... map other fields
  }));
}
```

### **Option C: Custom API**

```typescript
export async function getProjects(): Promise<Project[]> {
  const response = await fetch('https://your-api.com/projects');
  if (!response.ok) throw new Error('Failed to fetch');
  return await response.json();
}
```

---

## 📂 File Structure

```
/lib/cms.ts           → CMS service layer (API calls)
/hooks/useCMS.ts      → React hooks for data fetching
/services/mock-data.ts → Mock data (projects, logos, etc.)
/types/index.ts       → TypeScript type definitions
/components/
  LoadingSpinner.tsx  → Loading UI component
  ErrorMessage.tsx    → Error UI component
/pages/
  ProjectsPageNew.tsx → Example usage of useProjects()
```

---

## ✅ Best Practices

1. **Always handle loading states** - Use `LoadingSpinner` component
2. **Always handle errors** - Use `ErrorMessage` component with retry
3. **Use TypeScript types** - Ensures data consistency
4. **Keep CMS logic in `/lib/cms.ts`** - Easy to swap backends
5. **Use hooks in components** - Automatic state management

---

## 🎬 Where CMS is Currently Used

- ✅ **Projects Page** (`/pages/ProjectsPageNew.tsx`)
  - Uses `useProjects()` hook
  - Displays all 6 projects with videos
  - Shows loading/error states

**To use CMS on other pages:**
- Copy the pattern from `ProjectsPageNew.tsx`
- Import the appropriate hook
- Handle loading/error states
- Map over the data to display

---

## 🚀 Quick Start

1. **Edit content** → `/services/mock-data.ts`
2. **Navigate to** → `/projects`
3. **See your changes** → Content updates automatically!

---

## 📧 Need Help?

- Check `/hooks/useCMS.ts` for all available hooks
- Check `/types/index.ts` for data structure
- See `/pages/ProjectsPageNew.tsx` for complete example
