# CMS Implementation Guide

## Overview

This project implements a Framer CMS–like inline editing system that allows you to edit content directly on the page without changing the visual layout or DOM structure.

## Architecture

```
src/cms/
├── cmsStore.ts         # Zustand store for edit mode & content state
├── contentApi.ts       # API layer (localStorage default, swappable to backend)
├── EditableText.tsx    # Inline text editing component
├── EditableImage.tsx   # Image replacement component
├── EditableLink.tsx    # Link editing component
└── EditModeToggle.tsx  # UI toggle + save status
```

## How It Works

1. **Edit Mode Toggle**: Press `Cmd/Ctrl+E` or click "Edit Mode" button
2. **Edit Content**: When edit mode is ON, click any editable element
3. **Auto-save**: Changes are debounced (600ms) and saved to localStorage
4. **Persistence**: Content loads from localStorage on page load

## Adding Editable Content

### Step 1: Import Components

```tsx
import { EditableText } from '../src/cms/EditableText';
import { EditableImage } from '../src/cms/EditableImage';
import { EditableLink } from '../src/cms/EditableLink';
```

### Step 2: Wrap Existing Elements

**Before:**
```tsx
function MyComponent() {
  return (
    <div className="text-4xl font-bold text-white">
      My Title
    </div>
  );
}
```

**After:**
```tsx
function MyComponent() {
  return (
    <EditableText
      contentKey="my-component.title"
      defaultValue="My Title"
      as="div"
      className="text-4xl font-bold text-white"
    />
  );
}
```

### Step 3: Use Stable Content Keys

Content keys should follow a hierarchical pattern:
- `page.section.element`
- Example: `about.hero.title`
- Example: `services.card.1.description`

**Good Keys:**
- ✅ `about.hero.title`
- ✅ `services.card-1.image`
- ✅ `footer.cta.button.label`

**Bad Keys:**
- ❌ `title` (too generic)
- ❌ `text1` (not descriptive)
- ❌ `component-title` (lacks context)

## Component APIs

### EditableText

```tsx
<EditableText
  contentKey="about.hero.title"         // Required: unique key
  defaultValue="About Newclear Digital"          // Required: default content
  as="h1"                               // Optional: HTML tag (default: 'div')
  className="text-6xl font-bold"        // Optional: keep existing classes
  style={{ color: 'white' }}            // Optional: keep existing styles  
  multiline={false}                     // Optional: enable textarea (default: false)
  placeholder="Enter text..."           // Optional: placeholder text
/>
```

**Supported Tags:**
- `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- `p`, `span`, `div`

**Features:**
- Click to edit in edit mode
- Auto-focus with text selection
- Enter to save (single-line)
- Shift+Enter for new line (multiline)
- Escape to revert changes
- Debounced auto-save (600ms)

### EditableImage

```tsx
<EditableImage
  contentKey="about.hero.cover"
  defaultSrc="/images/hero.jpg"
  alt="Hero Background"
  className="w-full h-96 object-cover"
  style={{ borderRadius: '8px' }}
/>
```

**Features:**
- Hover to show toolbar
- Replace via URL input
- Upload from device
- Base64 encoding (or configure cloud storage)

### EditableLink

```tsx
<EditableLink
  contentKey="footer.cta.button"
  defaultLabel="Contact Us"
  defaultHref="/contact-us"
  className="px-6 py-3 bg-blue-500 text-white"
  external={false}                      // true for <a>, false for <Link>
/>
```

**Features:**
- Click to open edit modal
- Edit label and URL separately
- Internal routing support (react-router)
- External links support

## Real-World Example: AboutUs Page

### Original Code

```tsx
// imports/1920WLight-111-1387.tsx
function H1FramerText() {
  return (
    <div className="content-stretch flex gap-[13.46px] items-start relative shrink-0 w-full">
      <div className="blur-[2px] content-stretch flex items-start relative shrink-0">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[56px] text-white tracking-[-1.8px] whitespace-nowrap">
          <p className="leading-[63px]">About</p>
        </div>
      </div>
      <div className="blur-[0px] content-stretch flex items-start relative shrink-0">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[56px] text-white tracking-[-1.8px] whitespace-nowrap">
          <p className="leading-[63px]">us</p>
        </div>
      </div>
    </div>
  );
}
```

### Made Editable (Preserving DOM Structure)

```tsx
import { EditableText } from '../src/cms/EditableText';

function H1FramerText() {
  return (
    <div className="content-stretch flex gap-[13.46px] items-start relative shrink-0 w-full">
      <div className="blur-[2px] content-stretch flex items-start relative shrink-0">
        <EditableText
          contentKey="about.hero.title.part1"
          defaultValue="About"
          as="div"
          className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[56px] text-white tracking-[-1.8px] whitespace-nowrap"
        />
      </div>
      <div className="blur-[0px] content-stretch flex items-start relative shrink-0">
        <EditableText
          contentKey="about.hero.title.part2"
          defaultValue="us"
          as="div"
          className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[56px] text-white tracking-[-1.8px] whitespace-nowrap"
        />
      </div>
    </div>
  );
}
```

**Key Points:**
- ✅ Same `className` preserved
- ✅ Same `style` attributes
- ✅ Same nesting depth
- ✅ Same DOM structure
- ✅ No visual changes
- ✅ Now editable!

## Content Registry Storage

### LocalStorage Format

```json
{
  "newclear-cms-content": {
    "state": {
      "content": {
        "about.hero.title.part1": "About",
        "about.hero.title.part2": "us",
        "about.hero.description": "We're a creative video agency...",
        "services.section.title": "Our Services"
      }
    }
  }
}
```

### Viewing Content in Console

```javascript
// View all content
const store = JSON.parse(localStorage.getItem('newclear-cms-content'));
console.log(store.state.content);

// Get specific value
console.log(store.state.content['about.hero.title.part1']);
```

### Resetting Content

```javascript
// Option 1: Use the Reset button in edit mode
// Click the reset icon → Confirm

// Option 2: Clear localStorage manually
localStorage.removeItem('newclear-cms-content');
location.reload();
```

## Switching to Backend API

### Current (LocalStorage)

```tsx
// src/cms/contentApi.ts
export const contentAPI: ContentAPI = new LocalStorageContentAPI();
```

### Switch to Supabase

```tsx
// src/cms/contentApi.ts

import { createClient } from '@supabase/supabase-js';

class SupabaseContentAPI implements ContentAPI {
  private supabase;

  constructor() {
    this.supabase = createClient(
      'YOUR_SUPABASE_URL',
      'YOUR_SUPABASE_ANON_KEY'
    );
  }

  async loadContent(): Promise<ContentRegistry> {
    const { data, error } = await this.supabase
      .from('cms_content')
      .select('*');
    
    if (error) throw error;

    const registry: ContentRegistry = {};
    data?.forEach((row) => {
      registry[row.key] = row.value;
    });
    
    return registry;
  }

  async saveContent(patch: Partial<ContentRegistry>): Promise<void> {
    const updates = Object.entries(patch).map(([key, value]) => ({
      key,
      value,
      updated_at: new Date().toISOString(),
    }));

    const { error } = await this.supabase
      .from('cms_content')
      .upsert(updates);

    if (error) throw error;
  }

  async resetContent(): Promise<void> {
    const { error } = await this.supabase
      .from('cms_content')
      .delete()
      .neq('key', '__never_matches__');

    if (error) throw error;
  }
}

export const contentAPI = new SupabaseContentAPI();
```

### Supabase Schema

```sql
CREATE TABLE cms_content (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Optional: Add RLS policies
ALTER TABLE cms_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access"
  ON cms_content FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can edit"
  ON cms_content FOR ALL
  USING (auth.role() = 'authenticated');
```

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + E` | Toggle edit mode |
| `Enter` | Save current edit (single-line text) |
| `Shift + Enter` | New line (multiline text) |
| `Escape` | Cancel and revert changes |

## Best Practices

### ✅ DO

- Use descriptive content keys (`about.hero.title`)
- Keep exact same `className` and DOM structure
- Test edits in incognito to verify localStorage persistence
- Use multiline for paragraphs
- Provide clear default values

### ❌ DON'T

- Change className or styles when wrapping
- Use dynamic keys (e.g., `title-${Math.random()}`)
- Nest EditableText components
- Remove the wrapping element's structure
- Use generic keys like `text1`, `image`

## Troubleshooting

### Content Not Saving

1. Check console for errors
2. Verify contentKey is unique
3. Check localStorage quota (5-10MB limit)
4. Clear localStorage and try again

### Layout Shifted After Making Editable

- Ensure you're passing the exact same `className`
- Check if you're using `as` prop correctly
- Verify you didn't add/remove wrapper divs

### Edit Mode Not Activating

- Check if `EditModeToggle` is rendered in App.tsx
- Verify zustand is installed: `npm install zustand`
- Check browser console for errors

## File Structure

```
src/
├── cms/
│   ├── cmsStore.ts                 # ← Core state management
│   ├── contentApi.ts               # ← Swappable API layer
│   ├── EditableText.tsx            # ← Text editing
│   ├── EditableImage.tsx           # ← Image replacement
│   ├── EditableLink.tsx            # ← Link editing
│   └── EditModeToggle.tsx          # ← UI controls
│
pages/
├── AboutUsPage.tsx                 # ← Example: Editable hero
└── ServicesPageNew.tsx             # ← Example: Editable title
```

## Next Steps

1. **Make more pages editable**: Wrap text/images in other pages
2. **Connect to backend**: Swap localStorage for Supabase/API
3. **Add authentication**: Protect edit mode with login
4. **Add media library**: Integrate Cloudinary for image uploads
5. **Add revision history**: Track content changes over time

---

**Questions?** Check the inline component documentation or inspect the AboutUs page example implementation.
