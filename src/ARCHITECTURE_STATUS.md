# Next.js App Router Architecture Mapping

## ✅ COMPLETED STRUCTURE

### Files Created:

```
/
├── app/
│   ├── layout.tsx                    ✅ Created
│   ├── globals.css                   ✅ Created (moved from /styles/globals.css)
│   ├── page.tsx                      ✅ Created (placeholder - needs content from App.tsx)
│   ├── about-us/
│   │   └── page.tsx                  ✅ Created (placeholder)
│   ├── contact-us/
│   │   └── page.tsx                  ✅ Created (placeholder)
│   ├── services/
│   │   └── page.tsx                  ✅ Created (placeholder)
│   ├── projects/
│   │   ├── page.tsx                  ✅ Created (placeholder)
│   │   └── [slug]/
│   │       └── page.tsx              ✅ Created (dynamic route placeholder)
│   ├── blogs/
│   │   └── page.tsx                  ✅ Created (placeholder)
│   └── not-found.tsx                 ✅ Created
├── components/                       ✅ Created (empty placeholders)
│   ├── Button.tsx                    ✅
│   ├── SectionTag.tsx                ✅
│   ├── ProjectCard.tsx               ✅
│   ├── ClientLogo.tsx                ✅
│   ├── ServiceCard.tsx               ✅
│   ├── BlogCard.tsx                  ✅
│   ├── TestimonialCard.tsx           ✅
│   ├── FooterLink.tsx                ✅
│   └── SocialLink.tsx                ✅
└── App.tsx                           ⚠️ LEGACY (keep until migration complete)
```

## 📋 ROUTE MAPPING

| Original URL | Next.js Route | Status |
|--------------|---------------|--------|
| https://primary-words-404174.framer.app/ | `/app/page.tsx` | Placeholder |
| https://primary-words-404174.framer.app/about-us | `/app/about-us/page.tsx` | Placeholder |
| https://primary-words-404174.framer.app/contact-us | `/app/contact-us/page.tsx` | Placeholder |
| https://primary-words-404174.framer.app/services | `/app/services/page.tsx` | Placeholder |
| https://primary-words-404174.framer.app/projects | `/app/projects/page.tsx` | Placeholder |
| https://primary-words-404174.framer.app/projects/lumen-brew | `/app/projects/[slug]/page.tsx` | Placeholder |
| https://primary-words-404174.framer.app/projects/pulse-drive | `/app/projects/[slug]/page.tsx` | Placeholder |
| https://primary-words-404174.framer.app/projects/echo-frames | `/app/projects/[slug]/page.tsx` | Placeholder |
| https://primary-words-404174.framer.app/projects/waveline | `/app/projects/[slug]/page.tsx` | Placeholder |
| https://primary-words-404174.framer.app/projects/noir-threads | `/app/projects/[slug]/page.tsx` | Placeholder |
| https://primary-words-404174.framer.app/projects/auralis | `/app/projects/[slug]/page.tsx` | Placeholder |
| https://primary-words-404174.framer.app/blogs | `/app/blogs/page.tsx` | Placeholder |
| https://primary-words-404174.framer.app/404 | `/app/not-found.tsx` | Created |

## 🎨 STYLE PRESERVATION

### Root Wrapper (MUST MAINTAIN):
```tsx
<div className="text-black text-[16px] leading-[normal]" 
     style={{"fontFamily":"\"Times New Roman\"","width":"1024px","transform":"scale(1)","margin":"auto"}}>
```

**⚠️ CRITICAL:** This creates the 1024px centered layout. DO NOT CHANGE.

### Typography (preserved in globals.css):
- **Ronzino** - Headings, logo (500 weight)
- **Apfel Grotezk** - Body text, UI (500 weight)
- **Inter & Inter Display** - Various UI elements (400, 500, 600 weights)
- **Satoshi** - Special use (500 weight)

### Color System (DO NOT MODIFY):
- Primary Background: `#000000` / `bg-black`
- Text: `#FFFFFF` / `text-white`
- Accent Yellow: `rgb(253, 197, 0)` / `bg-[rgb(253,_197,_0)]`
- Card Gray: `rgb(36, 36, 36)` / `bg-[rgb(36,_36,_36)]`
- Divider Gray: `rgb(68, 68, 68)` / `bg-[rgb(68,_68,_68)]`
- Muted Text: `rgb(221, 221, 221)` / `text-[rgb(221,_221,_221)]`

### Layout Constants:
- Max container width: `max-w-[1240px]`
- Section padding: `pt-[100px] pb-[100px]`
- Container horizontal padding: `pr-6 pl-6`

## 🔧 SHARED SECTIONS (Same on every page)

### Navigation (Fixed Top):
- Location: Lines 9-34 in App.tsx
- Position: `fixed w-full left-[50%] top-0 translate-x-[-50%] z-[10]`
- Logo: "Flixen™" with icon
- Menu button: Right aligned
- Backdrop blur: 20px

### Footer:
- Location: Lines ~2026-2217 in App.tsx
- Contains:
  - Video element
  - Footer links (Main Pages, CMS Pages)
  - Social links (Facebook, Instagram, X-Twitter, Dribbble, YouTube)
  - Logo (large version)
  - Copyright + credits

## ⚠️ ELEMENTS TO REMOVE

### 1. Framer Badge (Lines 2222-2235)
```tsx
<div className="flex justify-end pointer-events-none fixed w-full bottom-0 p-5 z-[2147483647]">
  <a href="https://www.framer.com/" ...>
    <!-- Framer branding -->
  </a>
</div>
```

### 2. Edit Content Button (Lines 2236-2243)
```tsx
<div className="items-center flex fixed w-max top-[305px] right-[10px] gap-[8px] z-[2147483647]">
  <span>Edit Content</span>
  <button><!-- Edit icon --></button>
</div>
```

### 3. Edit Modal Overlay (Lines 2244-2284)
```tsx
<div className="h-screen overflow-clip fixed w-screen left-0 top-0 z-[2147483646]" style={{"clipPath":"circle(1px at calc(100% - 20px) calc(50% + 4px))"}}>
  <!-- Modal content -->
</div>
```

### 4. Framify Promotion Popup (Lines ~1860-1980 in reverse counting, actual ~360-340)
```tsx
<div className="fixed right-5 bottom-[60px] z-[10]">
  <div aria-label="Variant 1" className="...w-[464px] h-[436px] bg-[rgb(0,_7,_43)]...">
    <!-- Framify promo content -->
  </div>
</div>
```

## 📦 DEPENDENCIES

### Required Next.js Packages:
```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  }
}
```

### Configuration Files Needed:
- `next.config.js` - For image optimization, etc.
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies

## 🚀 MIGRATION STATUS

### Phase 1: Structure ✅
- [x] App Router folder structure created
- [x] Layout with font imports
- [x] Global styles moved to app/
- [x] Placeholder pages for all routes
- [x] Empty component files created

### Phase 2: Content Migration ⚠️ PENDING
- [ ] Copy homepage content from App.tsx (lines 5-2219) to app/page.tsx
- [ ] Remove Framer-specific elements
- [ ] Convert absolute URLs to relative paths
- [ ] Replace `<a>` with Next.js `<Link>` (maintain styling)
- [ ] Test visual parity

### Phase 3: Additional Pages ⏳ PLANNED
- [ ] Create actual content for other pages (likely similar to homepage sections)
- [ ] Implement dynamic project pages
- [ ] Add proper routing and navigation

### Phase 4: Optimization 🔮 FUTURE
- [ ] Extract shared navbar/footer into layout
- [ ] Component extraction (ONLY after visual parity verified)
- [ ] Add interactivity (video controls, menu toggle, etc.)
- [ ] Performance optimizations

## 🎯 NEXT IMMEDIATE STEP

**Copy the homepage content:**
1. Read `/App.tsx` lines 5-2219
2. Remove Framer elements
3. Write to `/app/page.tsx`
4. Test for 100% visual parity

**Command needed:** Manual extraction of large file content while preserving exact formatting.
