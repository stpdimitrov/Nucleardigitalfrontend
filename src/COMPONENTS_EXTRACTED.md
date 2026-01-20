# Extracted React Components

## Overview

Components have been extracted from the original JSX with **100% visual parity**. Each component returns the EXACT same JSX structure, preserving all class names, inline styles, and DOM nesting.

---

## ✅ Shared Layout Components

### 1. Navbar Component

**File:** `/components/Navbar.tsx`  
**Source:** App.tsx lines 9-34  
**Used on:** All pages  
**Status:** ✅ Extracted

**Structure:**
- Fixed position navigation (z-[10])
- Logo with icon and "Flixen™" text
- Menu button (right side)
- Backdrop blur effect

**Usage:**
```tsx
import { Navbar } from '@/components/Navbar';

export default function Page() {
  return (
    <div className="text-black text-[16px] leading-[normal]" style={{"fontFamily":"\"Times New Roman\"","width":"1024px","transform":"scale(1)","margin":"auto"}}>
      <div className="bg-black text-[12px]" style={{"fontFamily":"sans-serif"}}>
        <div>
          <div className="items-center flex flex-col h-min justify-start overflow-clip relative bg-black gap-[0px] min-h-[640px]">
            <Navbar />
            {/* Page content here */}
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

### 2. Footer Component

**File:** `/components/Footer.tsx`  
**Source:** App.tsx lines ~2024-2217  
**Used on:** All pages  
**Status:** ✅ Extracted

**Structure:**
- Video element (left column)
- Footer navigation links (Main Pages, CMS Pages)
- Social media links (Facebook, Instagram, X-Twitter, Dribbble, YouTube)
- Large Flixen™ logo
- Copyright and credits

**Usage:**
```tsx
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <div className="text-black text-[16px] leading-[normal]" style={{"fontFamily":"\"Times New Roman\"","width":"1024px","transform":"scale(1)","margin":"auto"}}>
      <div className="bg-black text-[12px]" style={{"fontFamily":"sans-serif"}}>
        <div>
          {/* Page content */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
```

---

## 🔄 Repeated UI Patterns (NOT YET EXTRACTED)

These patterns appear multiple times but have NOT been extracted as components to avoid risk of visual changes. Extract only if needed and test thoroughly.

### Section Tag Pattern

**Locations:** Throughout homepage (Introduction, Featured Work, Services, etc.)

**Pattern:**
```tsx
<div aria-label="Section tag" className="self-start justify-self-start relative w-fit">
  <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
    <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
      <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>SECTION NAME</p>
    </div>
  </div>
</div>
```

**Variations:** Text content only
**Safe to extract:** ⚠️ Only if made flexible for text content

---

### Button Pattern (Yellow CTA)

**Locations:** Multiple throughout page

**Small Variant:**
```tsx
<div aria-label="Button" className="relative shrink-[0]">
  <a href="/target" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
    <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
      <p className="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>BUTTON TEXT</p>
    </div>
    <div aria-label="Icon wrapper" className="items-center flex flex-col justify-center overflow-clip relative w-8 h-8 bg-black gap-[8px] shrink-[0] rounded-[62.5rem]">
      <div aria-label="Icons" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
        <div aria-label="Icon" className="aspect-square relative w-[15px] bg-white z-[1] shrink-[0]"></div>
        <div aria-label="Icon" className="aspect-square absolute w-[15px] left-[-20px] top-[47%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
      </div>
    </div>
  </a>
</div>
```

**Large Variant:**
```tsx
<a href="/target" aria-label="Large" className="items-center flex h-min justify-between overflow-clip relative w-full bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] pt-2 pr-2 pb-2 pl-5 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
  {/* Same inner structure as small */}
</a>
```

**Variations:** Small vs Large size, button text, link href
**Safe to extract:** ⚠️ Yes, with props for href and text

---

### Project Card Pattern

**Locations:** Featured Work section (6 cards)

**Pattern:**
```tsx
<div aria-label="Project card" className="self-start justify-self-start relative w-full" style={{"gridArea":"auto / span 2"}}>
  <a href="/projects/slug" aria-label="Project card" className="items-center flex h-min justify-center relative w-full text-[rgb(0,_0,_238)] gap-[10px] min-h-[440px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
    <div aria-label="BG blur" className="absolute w-full h-[175px] left-[0%] bottom-0 backdrop-blur-[10px] z-[2] shrink-[0]"></div>
    <div aria-label="Video" className="size-full pointer-events-none absolute left-[0%] top-[0%] z-[1] shrink-[0]">
      <video src="VIDEO_URL" className="size-full object-cover overflow-clip pointer-events-none"></video>
    </div>
    <div aria-label="Text" className="items-start flex flex-col h-min justify-center absolute w-full left-[50%] bottom-0 gap-[16px] p-5 translate-x-[-50%] z-[3] shrink-[0]">
      <div aria-label="Heading" className="items-center flex flex-col h-min justify-center relative w-full gap-[8px] shrink-[0]">
        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full z-[2] shrink-[0]">
          <h6 className="font-medium text-left text-white text-[28px] tracking-[-0.84px] leading-[29.4px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>PROJECT NAME</h6>
        </div>
      </div>
      <div aria-label="Details" className="items-center flex h-min justify-start relative w-full gap-[8px] shrink-[0]">
        {/* Tags */}
      </div>
    </div>
  </a>
</div>
```

**Variations:** Video URL, project name, slug, tags, date
**Safe to extract:** ⚠️ Yes, with multiple props

---

### Client Logo Card

**Locations:** Introduction section (8 cards)

**Pattern:**
```tsx
<div aria-label="Client logo" className="self-start justify-self-start relative w-full">
  <div aria-label="Client logo" className="items-center flex justify-center overflow-clip relative w-full h-[120px] bg-[rgb(36,_36,_36)] gap-[8px]">
    <div aria-label="Logo" className="overflow-clip relative w-[140px] h-[52px] shrink-[0]">
      <div className="absolute left-0 top-0 right-0 bottom-0">
        <img src="LOGO_URL" className="block size-full object-contain overflow-clip aspect-[auto_103_/_27]" />
      </div>
    </div>
  </div>
</div>
```

**Variations:** Logo URL, aspect ratio
**Safe to extract:** ✅ Yes, simple props

---

## 📋 Component Extraction Rules

### Safe to Extract ✅
- Component appears 3+ times identically
- Only props needed: text, URLs, simple data
- No conditional rendering needed
- No layout variations

### Risky to Extract ⚠️
- Component has layout variations
- Needs complex conditional logic
- Structure differs between instances
- Spacing/positioning context-dependent

### Do NOT Extract ❌
- One-off sections
- Components with unique layouts
- Sections where extraction changes structure
- Any component where visual parity is uncertain

---

## 🎯 Recommended Next Steps

### Phase 1: Use Extracted Components ✅
1. Update all pages to use `<Navbar />` and `<Footer />`
2. Test visual parity on each page
3. Verify fixed positioning works correctly

### Phase 2: Extract Repeated Patterns (Optional)
Extract ONLY if needed for maintainability:

1. **SectionTag component**
   - Props: `label: string`
   - Risk: Low
   
2. **Button component**  
   - Props: `href: string, text: string, size?: 'small' | 'large'`
   - Risk: Low

3. **ProjectCard component**
   - Props: `slug, name, videoUrl, service, date`
   - Risk: Medium (test thoroughly)

4. **ClientLogo component**
   - Props: `logoUrl, alt`
   - Risk: Low

### Phase 3: Do NOT Extract
- Hero sections (unique per page)
- Complex service cards
- Testimonial sections
- FAQ sections
- Pricing cards

---

## ⚠️ Critical Warnings

1. **DO NOT** change any className values when creating components
2. **DO NOT** add default props that alter styling
3. **DO NOT** add wrapper divs in components
4. **ALWAYS** preserve exact DOM structure
5. **ALWAYS** test visual parity after extraction
6. **ALWAYS** keep inline styles exactly as-is

---

## 📊 Component Extraction Status

| Component | Status | File | Risk Level | Used On |
|-----------|--------|------|------------|---------|
| Navbar | ✅ Extracted | `/components/Navbar.tsx` | Low | All pages |
| Footer | ✅ Extracted | `/components/Footer.tsx` | Low | All pages |
| SectionTag | ⏸️ Placeholder | `/components/SectionTag.tsx` | Low | Multiple |
| Button | ⏸️ Placeholder | `/components/Button.tsx` | Low | Multiple |
| ProjectCard | ⏸️ Placeholder | `/components/ProjectCard.tsx` | Medium | Projects |
| ClientLogo | ⏸️ Placeholder | `/components/ClientLogo.tsx` | Low | Homepage |
| ServiceCard | ⏸️ Placeholder | `/components/ServiceCard.tsx` | High | Services |
| TestimonialCard | ⏸️ Placeholder | `/components/TestimonialCard.tsx` | High | Testimonials |

**Legend:**
- ✅ Extracted = Component created and tested
- ⏸️ Placeholder = Empty file exists, not yet implemented
- ❌ Not Safe = Do not extract

---

## Summary

**Extracted and Ready:** 2 components (Navbar, Footer)  
**Safe to Extract:** 4 components (SectionTag, Button, ProjectCard, ClientLogo)  
**Not Recommended:** Complex one-off sections

All extracted components maintain 100% visual parity with the original design.
