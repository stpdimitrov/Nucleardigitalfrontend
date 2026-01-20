# Exact Migration Instructions

## Current Status

The `/App.tsx` file (2,288 lines) already contains React JSX that was converted from the Framer website. 

## What Needs to Be Done

### Step 1: Copy Main Content to app/page.tsx

**Source:** `/App.tsx` lines 5-2219  
**Destination:** `/app/page.tsx`

**Content to copy:**
- Start: Line 5 `return ( <div className="text-black...`
- End: Line 2219 `</div>`

### Step 2: Remove Framer-Specific UI Elements

After copying, DELETE these sections from app/page.tsx:

#### Section 1: Framify Promotion Popup (Lines ~1860-1980)
Look for this fixed div:
```jsx
<div className="fixed right-5 bottom-[60px] z-[10]">
  <div aria-label="Variant 1" className="...w-[464px] h-[436px] bg-[rgb(0,_7,_43)]...">
```
**Action:** DELETE entire div block (starts around line 1860, ~120 lines)

#### Section 2: Framer Badge (Lines 2222-2235)  
```jsx
<div className="flex justify-end pointer-events-none fixed w-full bottom-0 p-5 z-[2147483647]">
  <a href="https://www.framer.com/" aria-label="Light"...>
```
**Action:** DELETE entire div block

#### Section 3: Edit Content Button (Lines 2236-2243)
```jsx
<div className="items-center flex fixed w-max top-[305px] right-[10px] gap-[8px] z-[2147483647]">
  <span aria-label="Edit Framer Content"...>
  <button...>
```
**Action:** DELETE entire div block

#### Section 4: Edit Modal Overlay (Lines 2244-2284)
```jsx
<div className="h-screen overflow-clip fixed w-screen left-0 top-0 z-[2147483646]" 
     style={{"clipPath":"circle(1px at calc(100% - 20px) calc(50% + 4px))"}}>
```
**Action:** DELETE entire div block (~40 lines)

### Step 3: Update URLs (Find & Replace)

**CRITICAL:** These are the ONLY URL changes needed. Do NOT modify any other code.

Replace ALL instances:

1. `https://primary-words-404174.framer.app/` → `/`
2. `https://primary-words-404174.framer.app/contact-us` → `/contact-us`
3. `https://primary-words-404174.framer.app/projects/lumen-brew` → `/projects/lumen-brew`
4. `https://primary-words-404174.framer.app/projects/pulse-drive` → `/projects/pulse-drive`
5. `https://primary-words-404174.framer.app/projects/echo-frames` → `/projects/echo-frames`
6. `https://primary-words-404174.framer.app/projects/waveline` → `/projects/waveline`
7. `https://primary-words-404174.framer.app/projects/noir-threads` → `/projects/noir-threads`
8. `https://primary-words-404174.framer.app/projects/auralis` → `/projects/auralis`
9. `https://primary-words-404174.framer.app/projects` → `/projects`
10. `https://primary-words-404174.framer.app/about-us` → `/about-us`
11. `https://primary-words-404174.framer.app/services` → `/services`
12. `https://primary-words-404174.framer.app/blogs` → `/blogs`
13. `https://primary-words-404174.framer.app/404` → `/404`

**External URLs to KEEP as-is:**
- `https://www.facebook.com/`
- `https://www.instagram.com/`
- `https://x.com/home`
- `https://dribbble.com/`
- `https://www.youtube.com/`
- `https://framify.design/`
- `https://framer.link/mudasir-hussain`
- `https://x.com/xmuhammadtalha`

### Step 4: Wrap in Component Function

Add at the top of app/page.tsx:

```tsx
export default function HomePage() {
```

And close at the bottom:

```tsx
}
```

## Validation Checklist

After migration, verify:

- [ ] Root wrapper has `width: "1024px"` in inline style
- [ ] All Tailwind classes are preserved exactly
- [ ] All inline styles are preserved exactly
- [ ] All aria-labels are preserved
- [ ] All grid configurations preserved
- [ ] All z-index values preserved
- [ ] All backdrop-blur values preserved
- [ ] No className values changed
- [ ] No spacing values changed
- [ ] All images/videos point to same URLs
- [ ] Navigation is fixed at top (z-[10])
- [ ] Footer is at bottom
- [ ] No Framer UI elements visible

## What NOT to Do

❌ DO NOT change any className values
❌ DO NOT change any inline style values  
❌ DO NOT change spacing (padding, margin, gap)
❌ DO NOT change colors
❌ DO NOT change font sizes or families
❌ DO NOT optimize or clean up code
❌ DO NOT extract components
❌ DO NOT add Next.js Link components yet (keep <a> tags)
❌ DO NOT modify grid configurations
❌ DO NOT change z-index values
❌ DO NOT change opacity values

## File Structure After Migration

```
/app/page.tsx          <- Homepage (content from App.tsx lines 5-2219, minus Framer UI)
/App.tsx               <- Keep as backup until migration verified
```

## Expected Line Count

`/app/page.tsx` should be approximately:
- Original: 2,219 lines (from App.tsx)
- Minus Framer UI: ~120 + 13 + 7 + 40 = ~180 lines
- Final: ~2,040 lines

## Visual Parity Test

The rendered page must look 100% identical to the original Framer site at:
`https://primary-words-404174.framer.app/`

Only differences allowed:
1. Framer badge removed (bottom right)
2. Edit button removed (top right)
3. Edit modal removed
4. Framify popup removed

Everything else must be pixel-perfect identical.
