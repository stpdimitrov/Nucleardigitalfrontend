# Next.js App Router Migration Plan

## Current State
- Single file: `/App.tsx` (2,288 lines)
- All pages combined in one component
- Framer-specific UI elements present (lines 2222-2284)

## Target Next.js Structure

```
/
├── app/
│   ├── layout.tsx                    [CREATED]
│   ├── globals.css                   [CREATED]
│   ├── page.tsx                      [TODO - Homepage]
│   ├── about-us/
│   │   └── page.tsx                  [TODO]
│   ├── contact-us/
│   │   └── page.tsx                  [TODO]
│   ├── services/
│   │   └── page.tsx                  [TODO]
│   ├── projects/
│   │   ├── page.tsx                  [TODO - Projects list]
│   │   └── [slug]/
│   │       └── page.tsx              [TODO - Dynamic route]
│   ├── blogs/
│   │   └── page.tsx                  [TODO]
│   └── not-found.tsx                 [TODO - 404 page]
├── components/                       [TODO - Empty placeholders]
│   ├── Button.tsx
│   ├── SectionTag.tsx
│   ├── ProjectCard.tsx
│   ├── ClientLogo.tsx
│   ├── ServiceCard.tsx
│   ├── BlogCard.tsx
│   ├── TestimonialCard.tsx
│   ├── FooterLink.tsx
│   └── SocialLink.tsx
└── App.tsx                           [LEGACY - TO BE REMOVED AFTER MIGRATION]
```

## Page Routes Identified

1. **/** - Homepage (lines 5-2219 of App.tsx)
2. **/about-us** - About page
3. **/contact-us** - Contact page
4. **/services** - Services listing
5. **/projects** - Projects listing
6. **/projects/lumen-brew** - Individual project
7. **/projects/pulse-drive** - Individual project
8. **/projects/echo-frames** - Individual project
9. **/projects/waveline** - Individual project
10. **/projects/noir-threads** - Individual project
11. **/projects/auralis** - Individual project
12. **/blogs** - Blog listing
13. **/404** - 404 error page (using not-found.tsx)

## Visual Preservation Requirements

### CRITICAL - DO NOT CHANGE:
- Fixed 1024px width container: `width: "1024px", transform: "scale(1)", margin: "auto"`
- All spacing values (padding, margins, gaps)
- All color values (rgb(253, 197, 0), rgb(0, 0, 238), etc.)
- All font families (Ronzino, Apfel Grotezk, Inter, Inter Display, Satoshi)
- All font sizes, tracking, and line-heights
- Grid configurations and column spans
- Z-index layering
- Border radius values
- Opacity values
- Backdrop blur effects

### Elements to REMOVE (Framer-specific):
- Lines 2222-2235: Framer badge (bottom right)
- Lines 2236-2243: Edit Content button
- Lines 2244-2284: Edit page modal overlay
- Lines 360-340: Framify promotion popup (fixed bottom right)

### Links to Convert:
- Change all `href="https://primary-words-404174.framer.app/*"` to relative paths
- Use Next.js `<Link>` component from `next/link`
- Maintain exact same visual styling

## Next Steps

### Phase 1: Structure Setup ✅
- [x] Create `app/layout.tsx`
- [x] Create `app/globals.css` (moved from `/styles/globals.css`)
- [ ] Create empty component placeholders in `/components/`

### Phase 2: Homepage Migration
- [ ] Extract lines 5-2219 from `/App.tsx`
- [ ] Remove Framer-specific elements (lines 2222-2284, 360-340)
- [ ] Create `app/page.tsx`
- [ ] Convert absolute URLs to relative paths
- [ ] Test visual parity

### Phase 3: Create Other Pages
- [ ] Create placeholder pages for all routes
- [ ] Add "Coming Soon" content with same styling
- [ ] Set up dynamic route `/projects/[slug]/page.tsx`

### Phase 4: Component Extraction (Optional - DO NOT REFACTOR NOW)
- [ ] Create empty placeholder components
- [ ] Document patterns for future componentization

### Phase 5: Cleanup
- [ ] Remove original `/App.tsx`
- [ ] Remove `/styles/globals.css`
- [ ] Verify all routes work
- [ ] Test visual parity on all pages

## Component Patterns Identified (For Future Reference)

### Button Pattern
```tsx
// Small variant
className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]"

// Large variant  
className="items-center flex h-min justify-between overflow-clip relative w-full bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] pt-2 pr-2 pb-2 pl-5 rounded-[62.5rem]"
```

### Section Tag Pattern
```tsx
className="items-center flex size-min justify-center overflow-clip relative gap-[8px]"
// Contains: <p> with Apfel Grotezk, 16px, tracking-[-0.16px], leading-[22.4px], uppercase
```

### Project Card Pattern
```tsx
// Grid span 2, min-height 440px, with video background, backdrop blur, text overlay
```

## Migration Warnings

⚠️ **DO NOT**:
- Change any spacing values
- Modify color values
- Alter font specifications
- Adjust grid configurations
- Remove inline styles
- "Improve" or "optimize" the code
- Extract components yet

✅ **DO**:
- Copy code exactly as-is
- Remove only Framer-specific UI (lines specified above)
- Convert absolute URLs to relative paths
- Use Next.js Link component
- Maintain all inline styles
- Keep all className values identical

## Status: IN PROGRESS

Current: Setting up basic Next.js structure
Next: Extract homepage content to app/page.tsx
