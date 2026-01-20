# Dynamic Data Structure

## Overview

The application has been prepared for dynamic data while maintaining 100% visual parity. All static content has been extracted into typed data structures with mock data matching the exact current content.

---

## Directory Structure

```
/types/
  index.ts          - TypeScript interfaces for all data structures

/services/
  mock-data.ts      - Mock data matching current static content
  api.ts            - API service layer (ready for backend integration)
```

---

## Type Definitions

### Core Data Types

All TypeScript interfaces are defined in `/types/index.ts`:

#### Projects
```typescript
interface Project {
  id: string;
  slug: string;
  name: string;
  videoUrl: string;
  service: string;
  date: string;
}
```

**Data Location:** `/services/mock-data.ts` → `projects` (6 items)

#### Client Logos
```typescript
interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  aspectRatio: string;
}
```

**Data Location:** `/services/mock-data.ts` → `clientLogos` (8 items)

#### Services
```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  features: ServiceFeature[];
}

interface ServiceFeature {
  id: string;
  name: string;
}
```

**Data Location:** `/services/mock-data.ts` → `services` (3 services with 5 features each)

#### Why Choose Us
```typescript
interface WhyChooseUsItem {
  id: string;
  number: string;
  title: string;
  description: string;
}
```

**Data Location:** `/services/mock-data.ts` → `whyChooseUsItems` (6 items)

#### Process Steps
```typescript
interface ProcessStep {
  id: string;
  iconUrl: string;
  title: string;
  description: string;
}
```

**Data Location:** `/services/mock-data.ts` → `processSteps` (3 steps)

#### Pricing Plans
```typescript
interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  ctaText: string;
  ctaUrl: string;
}
```

**Data Location:** `/services/mock-data.ts` → `pricingPlans` (3 plans)

#### Navigation
```typescript
interface NavLink {
  id: string;
  label: string;
  href: string;
}

interface SocialLink {
  id: string;
  platform: string;
  label: string;
  url: string;
}
```

**Data Location:** `/services/mock-data.ts` → `mainNavLinks`, `cmsNavLinks`, `socialLinks`

---

## Mock Data

All mock data is in `/services/mock-data.ts` and **exactly matches** the current static content.

### Projects (6 total)
1. Lumen Brew - Video Production - Nov 4, 2025
2. Pulse Drive - Creative Direction - Apr 10, 2025
3. Echo Frames - Video Production - Aug 4, 2024
4. Waveline - Post-Production & Editing - Dec 19, 2023
5. Noir Threads - Creative Direction - Oct 18, 2022
6. Auralis - Video Production - Jun 22, 2021

### Client Logos (8 total)
All logo URLs preserved exactly as-is with correct aspect ratios.

### Services (3 total)
1. **Video Production** - 5 features (Commercials, Brand Films, Product Videos, Corporate Shoots, Event Coverage)
2. **Creative Direction** - 5 features (Concept Development, Scriptwriting, Storyboarding, Art Direction, Campaign Planning)
3. **Post-Production & Editing** - 5 features (Video Editing, Color Grading, Motion Graphics, Sound Design, Visual Effects)

### Why Choose Us (6 items)
Numbered 01-06 with titles and descriptions matching static content.

### Process Steps (3 steps)
1. Connect
2. Create
3. Launch

### Pricing Plans (3 plans)
1. **Starter Plan** - $1,500 per project (Popular)
2. **Professional Plan** - $3,500 per project
3. **Enterprise Plan** - Custom tailored pricing

---

## API Service Layer

### Current State: Mock Data

The `/services/api.ts` file provides a complete API service layer that **currently returns mock data** but is structured for future backend integration.

### Usage Example

```typescript
import { api } from '@/services/api';

// In a React component or Next.js page
export default async function ProjectsPage() {
  const projects = await api.getProjects();
  
  return (
    <div>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
```

### Available API Methods

#### Site Settings
- `getSiteSettings()` - Logo, site name, footer content

#### Navigation
- `getMainNavLinks()` - Main navigation (Homepage, About, Contact, 404)
- `getCMSNavLinks()` - CMS pages (Services, Projects, Blogs)
- `getSocialLinks()` - Social media links (Facebook, Instagram, etc.)

#### Projects
- `getProjects()` - All projects
- `getFeaturedProjects(limit?)` - Featured projects (default: 6)
- `getProjectBySlug(slug)` - Single project by slug

#### Clients
- `getClientLogos()` - All client logos

#### Services
- `getServices()` - All services
- `getServiceById(id)` - Single service by ID

#### Why Choose Us
- `getWhyChooseUsItems()` - All items

#### Process
- `getProcessSteps()` - All process steps

#### Pricing
- `getPricingPlans()` - All pricing plans
- `getPricingPlanById(id)` - Single plan by ID

#### FAQ
- `getFAQItems()` - All FAQ items

#### Testimonials
- `getTestimonials()` - All testimonials

#### Homepage
- `getHomepageData()` - All homepage data in one call

#### Forms
- `submitContactForm(data)` - Submit contact form
- `subscribeToNewsletter(email)` - Subscribe to newsletter

---

## Future API Integration

### When Backend is Ready

1. **Update API_BASE_URL** in `/services/api.ts`:
   ```typescript
   const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.flixen.com';
   ```

2. **Uncomment API fetch calls**:
   ```typescript
   // Current (mock):
   export async function getProjects(): Promise<Project[]> {
     return Promise.resolve(projects);
   }
   
   // Future (real API):
   export async function getProjects(): Promise<Project[]> {
     return apiFetch<Project[]>('/projects');
   }
   ```

3. **Add authentication, error handling, caching** as needed:
   ```typescript
   async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
       ...options,
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${getAuthToken()}`,
         ...options?.headers,
       },
     });
     
     if (!response.ok) {
       throw new Error(`API error: ${response.statusText}`);
     }
     
     return response.json();
   }
   ```

### Expected API Endpoints

Based on the service layer structure:

```
GET  /api/settings
GET  /api/navigation/main
GET  /api/navigation/cms
GET  /api/social-links
GET  /api/projects
GET  /api/projects?featured=true&limit=6
GET  /api/projects/:slug
GET  /api/clients
GET  /api/services
GET  /api/services/:id
GET  /api/why-choose-us
GET  /api/process
GET  /api/pricing
GET  /api/pricing/:id
GET  /api/faq
GET  /api/testimonials
GET  /api/homepage
POST /api/contact
POST /api/newsletter/subscribe
```

---

## Component Usage Patterns

### Before (Static Content)
```tsx
export default function FeaturedWork() {
  return (
    <section>
      <div>
        <a href="/projects/lumen-brew">
          <h6>Lumen Brew</h6>
          <p>Video Production</p>
          <p>Nov 4, 2025</p>
        </a>
      </div>
      {/* Repeated 5 more times... */}
    </section>
  );
}
```

### After (Dynamic Data)
```tsx
import { api } from '@/services/api';

export default async function FeaturedWork() {
  const projects = await api.getFeaturedProjects(6);
  
  return (
    <section>
      {projects.map(project => (
        <div key={project.id}>
          <a href={`/projects/${project.slug}`}>
            <h6>{project.name}</h6>
            <p>{project.service}</p>
            <p>{project.date}</p>
          </a>
        </div>
      ))}
    </section>
  );
}
```

**CRITICAL:** The rendered HTML structure remains **100% identical**. Only the data source changed.

---

## Environment Variables

### Required for Production

```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.flixen.com
```

### Optional
```env
# Authentication
NEXT_PUBLIC_API_KEY=your_api_key_here

# CMS Integration (if using Contentful, Sanity, etc.)
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_token

# Analytics
NEXT_PUBLIC_GA_ID=GA-XXXXXXXXX
```

---

## Data Validation

### Type Safety

All data is fully typed with TypeScript. Components receiving data via props will have compile-time type checking:

```typescript
interface ProjectCardProps {
  project: Project;  // Type-safe!
}

function ProjectCard({ project }: ProjectCardProps) {
  // TypeScript knows all available properties:
  // project.id, project.slug, project.name, etc.
}
```

### Runtime Validation (Optional)

For API responses, consider adding runtime validation with Zod:

```typescript
import { z } from 'zod';

const ProjectSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  videoUrl: z.string().url(),
  service: z.string(),
  date: z.string(),
});

// Validate API response
const projects = ProjectSchema.array().parse(apiResponse);
```

---

## Testing Strategy

### Mock Data Testing

1. **Visual Parity Test**
   - Current mock data produces identical output to static content
   - Compare screenshots before/after dynamic data implementation

2. **Data Structure Test**
   - All mock data conforms to TypeScript types
   - No runtime errors when consuming data

3. **API Service Test**
   - All API methods return correct mock data
   - Methods return correct types

### Future API Testing

When integrating real API:

1. **Unit Tests**
   - Test each API method
   - Test error handling
   - Test response parsing

2. **Integration Tests**
   - Test data flow from API to components
   - Test loading states
   - Test error states

3. **E2E Tests**
   - Test complete user flows
   - Test with real API responses

---

## Migration Checklist

### Phase 1: Structure (Current) ✅
- [x] Create TypeScript types
- [x] Extract all static data to mock data
- [x] Create API service layer structure
- [x] Document data structure

### Phase 2: Component Updates (Next)
- [ ] Update components to receive data via props
- [ ] Replace hardcoded content with dynamic data
- [ ] Verify 100% visual parity
- [ ] Test all pages with mock data

### Phase 3: API Integration (Future)
- [ ] Set up backend API or CMS
- [ ] Update API service to use real endpoints
- [ ] Add authentication if needed
- [ ] Add error handling
- [ ] Add loading states
- [ ] Add caching strategy
- [ ] Test with production data

---

## Visual Parity Guarantee

### How Mock Data Maintains Visual Parity

1. **Exact Content Match**
   - All text matches static content character-for-character
   - All URLs preserved exactly
   - All dates, numbers, and formatting preserved

2. **Same Data Structure**
   - Components render identical HTML
   - Same loop iterations (6 projects, 8 logos, etc.)
   - Same conditional rendering

3. **No Layout Changes**
   - Data structure doesn't affect CSS
   - Grid spans preserved
   - Spacing unchanged
   - Z-index unchanged

4. **No Breaking Changes**
   - Components can still render without data (fallbacks)
   - No required props break existing code
   - Gradual migration possible

---

## Benefits of This Structure

### Development
- ✅ Type-safe data consumption
- ✅ Single source of truth for data
- ✅ Easy to update content
- ✅ Testable components
- ✅ No prop drilling

### Future Scalability
- ✅ Ready for CMS integration (Contentful, Sanity, Strapi, etc.)
- ✅ Ready for headless WordPress
- ✅ Ready for custom backend API
- ✅ Ready for database integration
- ✅ Ready for multi-language support

### Maintenance
- ✅ Update data without touching components
- ✅ Add/remove items easily
- ✅ Version control for content
- ✅ Content review workflows possible

---

## Example: Converting a Static Section

### Before (Static)
```tsx
<section>
  <div>
    <img src="logo1.svg" />
  </div>
  <div>
    <img src="logo2.svg" />
  </div>
  {/* ... 6 more times */}
</section>
```

### After (Dynamic)
```tsx
import { api } from '@/services/api';

export default async function ClientLogos() {
  const logos = await api.getClientLogos();
  
  return (
    <section>
      {logos.map(logo => (
        <div key={logo.id}>
          <img src={logo.logoUrl} alt={logo.name} />
        </div>
      ))}
    </section>
  );
}
```

**Result:** Identical HTML output, but now:
- Add/remove logos by updating mock data
- Change logo URLs in one place
- Type-safe logo properties
- Ready for CMS integration

---

## Summary

✅ **Complete type definitions** in `/types/index.ts`  
✅ **Exact mock data** in `/services/mock-data.ts`  
✅ **API service layer** in `/services/api.ts`  
✅ **Zero visual changes** - mock data matches static content  
✅ **Future-ready** - prepared for backend/CMS integration  

**Next Step:** Update components to consume dynamic data while maintaining 100% visual parity.
