# Framer Scripts Integration Guide

## Critical Requirement for Visual Parity

The AboutUsPage (and all Framer-migrated pages) require specific Framer scripts to maintain 100% visual fidelity and animation behavior. These scripts MUST be added to `index.html` in the exact order specified below.

## Script Integration Order

### 1. Add to `index.html` <head> section (before closing `</head>`):

```html
<!-- Framer Fonts (already present from previous pages) -->
<!-- All @font-face declarations for Ronzino font family -->
```

### 2. Add to `index.html` <body> section (before closing `</body>`):

```html
<!-- 1. Framer Events Tracking -->
<script async src="https://events.framer.com/script?v=2" 
  data-fid="de380340be2dad89893c608d8bfac1146be3812d8194870d12a2490a31d02345" 
  data-no-nt></script>

<!-- 2. Nested Link Handler -->
<script>(()=>{function u(){function n(t,e,i){let r=document.createElement("a");r.href=t,r.target=i,r.rel=e,document.body.appendChild(r),r.click(),r.remove()}function o(t){if(this.dataset.hydrated){this.removeEventListener("click",o);return}t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");if(!e)return;if(/Mac|iPod|iPhone|iPad/u.test(navigator.userAgent)?t.metaKey:t.ctrlKey)return n(e,"","_blank");let r=this.getAttribute("rel")??"",c=this.getAttribute("target")??"";n(e,r,c)}function a(t){if(this.dataset.hydrated){this.removeEventListener("auxclick",o);return}t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");e&&n(e,"","_blank")}function s(t){if(this.dataset.hydrated){this.removeEventListener("keydown",s);return}if(t.key!=="Enter")return;t.preventDefault(),t.stopPropagation();let e=this.getAttribute("href");if(!e)return;let i=this.getAttribute("rel")??"",r=this.getAttribute("target")??"";n(e,i,r)}document.querySelectorAll("[data-nested-link]").forEach(t=>{t instanceof HTMLElement&&(t.addEventListener("click",o),t.addEventListener("auxclick",a),t.addEventListener("keydown",s))})}return u})()()</script>

<!-- 3. Image Sizes Handler -->
<script>(()=>{function i(){for(let e of document.querySelectorAll("[data-framer-original-sizes]")){let t=e.getAttribute("data-framer-original-sizes");t===""?e.removeAttribute("sizes"):e.setAttribute("sizes",t),e.removeAttribute("data-framer-original-sizes")}}function a(){window.__framer_onRewriteBreakpoints=i}return a})()()</script>

<!-- 4. Variant Params Preserver -->
<script data-preserve-internal-params>!function(){var l="framer_variant";function u(a,r){let n=r.indexOf("#"),e=n===-1?r:r.substring(0,n),o=n===-1?"":r.substring(n),t=e.indexOf("?"),m=t===-1?e:e.substring(0,t),d=t===-1?"":e.substring(t),s=new URLSearchParams(d),h=new URLSearchParams(a);for(let[i,g]of h)s.has(i)||i!==l&&s.append(i,g);let c=s.toString();return c===""?e+o:m+"?"+c+o}var w='div#main a[href^="#"],div#main a[href^="/"],div#main a[href^="."]',f="div#main a[data-framer-preserve-params]",p=document.currentScript?.hasAttribute("data-preserve-internal-params");if(window.location.search&&!navigator.webdriver&&!/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(navigator.userAgent)){let a=document.querySelectorAll(p?`${w},${f}`:f);for(let r of a){let n=u(window.location.search,r.href);r.setAttribute("href",n)}}}()</script>

<!-- 5. Animator Engine (LARGE - Spring physics, WAAPI, appear animations) -->
<script>var animator=(()=>{/* Full animator code from original - ~15KB minified */})())</script>

<!-- 6. Appear Animation Data (JSON) -->
<script type="framer/appear" id="__framer__appearAnimationsContent">
{/* JSON data with animation configurations for each element */}
</script>

<script type="framer/appear" id="__framer__breakpoints">
[{"hash":"hlnx5q","mediaQuery":"(min-width: 1240px)"},{"hash":"1s8hhl0","mediaQuery":"(min-width: 810px) and (max-width: 1239.98px)"},{"hash":"nfhrb4","mediaQuery":"(max-width: 809.98px)"},{"hash":"ni78y7","mediaQuery":"(min-width: 1240px)"},{"hash":"1qrwxj9","mediaQuery":"(min-width: 810px) and (max-width: 1239.98px)"},{"hash":"hfqtg1","mediaQuery":"(max-width: 809.98px)"}]
</script>

<!-- 7. Appear Animation Executor -->
<script data-framer-appear-animation="reduce">(()=>{function c(i,o,s){if(window.__framer_disable_appear_effects_optimization__||typeof animator>"u")return;let e={detail:{bg:document.hidden}};requestAnimationFrame(()=>{let a="framer-appear-start";performance.mark(a,e),animator.animateAppearEffects(JSON.parse(window.__framer__appearAnimationsContent.text),(m,p,d)=>{let t=document.querySelector(m);if(t)for(let[r,f]of Object.entries(p))animator.startOptimizedAppearAnimation(t,r,f,d[r])},i,o,s&&window.matchMedia("(prefers-reduced-motion:reduce)").matches===!0,animator.getActiveVariantHash(JSON.parse(window.__framer__breakpoints.text)));let n="framer-appear-end";performance.mark(n,e),performance.measure("framer-appear",{start:a,end:n,detail:e.detail})})}return c})()("data-framer-appear-id","__Appear_Animation_Transform__",true)</script>

<!-- 8. Process env shim -->
<script>typeof document<"u"&&(window.process={...window.process,env:{...window.process?.env,NODE_ENV:"production"}});</script>

<!-- 9. Module Preloads (all modulepreload links) -->
<link rel="modulepreload" fetchpriority="low" href="https://framerusercontent.com/sites/3PrM8PoCHykUm4I8fisxCn/react.BLrcsSCC.mjs">
<!-- ... (all other modulepreload links from original) ... -->

<!-- 10. Main Framer Bundle -->
<script type="module" async data-framer-bundle="main" fetchPriority="low" 
  src="https://framerusercontent.com/sites/3PrM8PoCHykUm4I8fisxCn/script_main.DN6oZ3aW.mjs"></script>

<!-- 11. SVG Sprite Definitions -->
<div id="svg-templates" style="position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict" aria-hidden="true">
  <!-- All SVG symbol definitions -->
  <svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <!-- Plus icon -->
    <path d="M 1.5 16.5 C 0.672 16.5 0 15.828 0 15 L 0 1.5 C 0 0.672 0.672 0 1.5 0 L 15 0 C 15.828 0 16.5 0.672 16.5 1.5 L 16.5 15 C 16.5 15.828 15.828 16.5 15 16.5 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.5px" id="qUr6K2nJv" transform="translate(3.75 3.75)" width="16.5px"/>
    <path d="M 0 0 L 16.5 0" fill="transparent" height="1px" id="MbfmAbWGf" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(3.75 12)" width="16.5px"/>
    <path d="M 0 0 L 0 16.5" fill="transparent" height="16.5px" id="mcA57vhod" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12 3.75)" width="1px"/>
  </svg>
  <!-- ... (all other SVG symbols) ... -->
</div>
```

## Why These Scripts Are Required

### Animation Engine (`animator`)
- Handles all scroll-triggered appear animations
- Manages spring physics calculations for smooth motion
- Optimizes WAAPI (Web Animations API) performance
- Controls transform animations on hero text, images, cards

### Appear Animation Data
- Contains keyframe configurations for each animated element
- Defines timing, easing, and transform properties
- Breakpoint-specific animation variants

### Nested Link Handler
- Ensures proper link behavior within Framer components
- Handles meta/ctrl-click for new tabs
- Prevents default behavior where needed

### Image Sizes Handler
- Dynamically adjusts responsive image sizes
- Restores original sizes attribute after hydration
- Prevents layout shift during load

### Variant Params
- Preserves URL parameters across navigation
- Maintains Framer variant state
- Required for proper routing with variants

### SVG Sprites
- Icon definitions used by `<use href="#...">` elements
- Plus, star, X, globe, Instagram, LinkedIn icons
- Required for navbar, footer, and UI elements to render

## Implementation Steps

1. **Copy all scripts from original About Us page HTML**
2. **Paste into `/index.html` in exact order**
3. **Verify script src URLs are accessible**
4. **Test animations on page load**
5. **Test responsive breakpoint transitions**
6. **Verify all icons render correctly**

## Testing Checklist

- [ ] Hero text animates on load (fade + slide up)
- [ ] Images fade in on scroll
- [ ] Team cards animate in sequence
- [ ] Awards section scroll triggers work
- [ ] Navbar icons render (plus, X)
- [ ] Footer social icons render
- [ ] Page navigation preserves state
- [ ] Responsive breakpoints trigger correctly
- [ ] No console errors related to animator
- [ ] Spring animations feel identical to Framer

## Performance Notes

- The `animator` script is ~15KB minified
- Module preloads improve initial load time
- Scripts are marked `async` where safe
- SVG sprites prevent icon flashing

## DO NOT

- ❌ Remove or reorder scripts
- ❌ Modify script content
- ❌ Skip modulepreload links
- ❌ Remove SVG sprite definitions
- ❌ Change script src URLs
- ❌ Add `defer` to scripts that need immediate execution

## Maintenance

When updating to newer Framer exports:
1. Compare script versions
2. Update URLs if changed
3. Verify animation JSON structure
4. Test all breakpoints
5. Validate icon references
