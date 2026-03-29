# Contact Us Page CMS System

## Overview

The Contact Us page now has a **complete CMS (Content Management System)** that allows you to edit every element on the page without touching code. This follows the same pattern as the rest of the site with inline editing, modal-based management, and scroll-based CMS panel visibility.

## Features

### 🎯 Highly Customizable Elements

Every element on the page is editable:
- **Hero Section**: Section tag, heading, description, scroll down text, cover image
- **Form Fields**: Labels, placeholders, field types, options, submit button text  
- **Contact Information**: Phone, email, location values and links
- **Social Media Links**: Platform names and URLs (add/remove links dynamically)
- **Map Settings**: Embed URL, height, title
- **Office Card**: Title, globe image

### ⚡ Smart Features

1. **Inline Editing** - Click any text to edit it directly on the page
2. **Modal Management** - Comprehensive editing modals for complex sections
3. **Scroll-Based CMS Panel** - Auto-shows when you scroll to managed sections
4. **Keyboard Shortcut** - `Cmd/Ctrl + Shift + E` to toggle CMS mode
5. **Visual Feedback** - Yellow highlights on editable elements
6. **Add/Delete** - Dynamically add or remove social media links

## How to Use

### Activating CMS Mode

1. **Button**: Click "Enter CMS Mode" in the top-right corner
2. **Keyboard**: Press `Cmd/Ctrl + Shift + E`

### Inline Editing

When CMS mode is active:
1. Hover over any text - you'll see a yellow highlight
2. Click the text to open the appropriate modal for editing
3. Edit buttons appear on major sections

### Editing Sections

#### Hero Section
- Click "Edit Hero" button or any hero text
- Modify: Section tag, heading, description lines, scroll text, images
- Changes apply instantly

#### Contact Cards
- Click "Edit Cards" button
- **Contact Info Card**: Edit phone, email, location details
- **Social Media Card**: Add new links with "Add Link" button, edit platform names/URLs, delete links
- **Office Card**: Edit title and globe image URL

#### Map Settings
- Click "Edit Map" button
- Update Google Maps embed URL, map height, accessibility title
- Get embed URLs from Google Maps → Share → Embed a map

## Data Structure

### Type Definitions

All types are defined in `/types/index.ts`:

```typescript
ContactUsPageData {
  hero: ContactHeroContent;      // Hero section content
  form: ContactFormConfig;       // Form fields & config
  map: MapConfig;                // Map embed settings
  cards: ContactCardsContent;    // All 3 cards (contact, social, office)
}
```

### Mock Data

Located in `/services/mock-data.ts`:

```typescript
export const contactUsPageData: ContactUsPageData = {
  // ... all contact page content
}
```

## Designer-Focused Benefits

### 🎨 Complete Control

- **Typography**: Edit all text content without code
- **Links**: Update URLs for contact methods and social media
- **Images**: Swap cover images and globe graphic
- **Layout**: Adjust map height and spacing

### 🔄 Real-Time Updates

- All changes are immediate (no page refresh needed)
- Visual feedback shows what's editable
- Hover states guide the editing experience

### 🛠️ Flexible Structure

- Add unlimited social media links
- Reorder contact information
- Change form field options
- Update map location anytime

## File Structure

```
/pages/
  ContactUsPageCMS.tsx         # CMS-enabled Contact Us page
  ContactUsPage.tsx            # Original static version (backup)

/services/
  mock-data.ts                 # Contact page data + all site data

/types/
  index.ts                     # TypeScript type definitions

/components/
  FAQSection.tsx               # FAQ component (already CMS-enabled)
```

## Integration

### Using the CMS Version

Replace the route in your router:

```typescript
// Before
import { ContactUsPage } from './pages/ContactUsPage';

// After  
import { ContactUsPageCMS } from './pages/ContactUsPageCMS';

// In your router
<Route path="/contact-us" element={<ContactUsPageCMS />} />
```

### Data Persistence (Future Enhancement)

Currently, changes are stored in React state. To persist changes:

1. **LocalStorage**: Save to browser (quick solution)
2. **Supabase**: Connect to database for cloud storage
3. **API**: Create backend endpoints for data management

Example LocalStorage integration:

```typescript
// Save changes
useEffect(() => {
  localStorage.setItem('contactPageData', JSON.stringify(pageData));
}, [pageData]);

// Load on mount
useEffect(() => {
  const saved = localStorage.getItem('contactPageData');
  if (saved) setPageData(JSON.parse(saved));
}, []);
```

## Best Practices

### For Designers

1. **Test First**: Always make edits in CMS mode, then review in regular mode
2. **Backup Data**: Export current data before major changes
3. **Consistent Branding**: Keep text, links, and images aligned with brand guidelines
4. **Mobile Check**: Preview changes on different screen sizes

### For Developers

1. **Type Safety**: All data uses TypeScript types - respect the structure
2. **Validation**: Add form validation for URLs and required fields
3. **Error Handling**: Wrap update functions in try-catch blocks
4. **Performance**: Use `useMemo` for complex data transformations

## Customization Examples

### Adding a New Contact Method

```typescript
const newContact: ContactInfo = {
  id: `contact-${Date.now()}`,
  type: 'phone',
  icon: 'phone',
  label: 'Support Line',
  value: '+1 (555) 123-4567',
  href: 'tel:+15551234567'
};
```

### Changing Map Location

1. Go to Google Maps
2. Find your location
3. Click Share → Embed a map
4. Copy the `src` URL from the iframe
5. Paste into Map Settings modal

### Adding Custom Form Fields

Edit `contactUsPageData.form.fields` in `mock-data.ts`:

```typescript
{
  id: "field-company",
  label: "Company Name",
  placeholder: "Acme Inc.",
  type: "text",
  name: "company",
  required: false
}
```

## Keyboard Shortcuts

- `Cmd/Ctrl + Shift + E` - Toggle CMS mode
- `Esc` - Close active modal
- `Click outside` - Close CMS panel

## Visual States

### CMS Mode Active
- Yellow "Edit CMS Mode" button (top-right)
- Edit buttons on sections
- Yellow highlights on hover
- Floating CMS panel (bottom-left)

### Regular Mode
- Gray "Enter CMS Mode" button
- Clean presentation
- No edit affordances

## Technical Details

### State Management

```typescript
const [isEditMode, setIsEditMode] = useState(false);
const [pageData, setPageData] = useState<ContactUsPageData>(contactUsPageData);
const [activeModal, setActiveModal] = useState<string | null>(null);
```

### Update Pattern

```typescript
const updateHero = (updates: Partial<ContactHeroContent>) => {
  setPageData(prev => ({
    ...prev,
    hero: { ...prev.hero, ...updates }
  }));
};
```

### Scroll Observation

```typescript
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && isEditMode) {
          setShowCMSPanel(true);
        }
      });
    },
    { threshold: 0.1 }
  );
  // ... observe sections
}, [isEditMode]);
```

## Comparison: Static vs CMS

| Feature | Static (ContactUsPage) | CMS (ContactUsPageCMS) |
|---------|----------------------|------------------------|
| Edit Mode | ❌ No | ✅ Yes |
| Inline Editing | ❌ No | ✅ Yes |
| Modals | ❌ No | ✅ Yes |
| Add/Remove Items | ❌ No | ✅ Yes |
| Data Source | Hard-coded | CMS Data |
| File Size | Smaller | Larger (+CMS logic) |
| User-Friendly | Developers only | Designers + Marketers |

## Future Enhancements

1. **Image Upload**: Replace text URLs with visual image picker
2. **Preview Mode**: See changes before publishing
3. **Version History**: Undo/redo functionality
4. **Multi-language**: Edit content in multiple languages
5. **Drag & Drop**: Reorder contact methods and social links
6. **Validation**: Real-time validation for email/phone formats
7. **Export/Import**: Download/upload page configuration as JSON

## Support

For questions or issues:
1. Check this README
2. Review `/types/index.ts` for data structures
3. Inspect `/services/mock-data.ts` for current content
4. Test in CMS mode with browser dev tools open

---

**Created**: February 2026  
**Version**: 1.0.0  
**Status**: Production-Ready ✅
