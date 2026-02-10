# Visual Regression Testing - Complete Setup Guide

## Overview

Pixel-perfect visual regression testing for the Framer → React migration using Playwright. Ensures 100% visual fidelity across three critical breakpoints.

## Files Created

```
├── playwright.config.ts          # Playwright configuration
├── tests/
│   └── visual/
│       └── about-us.spec.ts      # About Us page visual tests
├── PACKAGE_JSON_UPDATES.md       # Package.json modifications needed
└── VISUAL_REGRESSION_TESTING.md  # This file
```

## Quick Start

### 1. Install Dependencies

Add to `package.json`:
```json
{
  "devDependencies": {
    "@playwright/test": "^1.41.0"
  },
  "scripts": {
    "test:visual": "playwright test",
    "test:visual:update": "playwright test --update-snapshots",
    "test:visual:ui": "playwright test --ui",
    "test:visual:debug": "playwright test --debug",
    "test:visual:report": "playwright show-report"
  }
}
```

Then run:
```bash
npm install
npx playwright install
```

### 2. First Test Run (Generate Baselines)

```bash
# Start dev server
npm run dev

# In another terminal, generate baseline snapshots
npm run test:visual:update
```

This creates baseline snapshots in `tests/visual/about-us.spec.ts-snapshots/`

### 3. Verify Baselines

Review the generated PNG files to ensure they match the original Framer design:
- `about-us-desktop-chromium-{os}.png`
- `about-us-tablet-chromium-{os}.png`
- `about-us-mobile-chromium-{os}.png`

### 4. Commit Baselines

```bash
git add tests/visual/about-us.spec.ts-snapshots/
git commit -m "Add baseline visual regression snapshots for About Us page"
```

### 5. Run Tests

```bash
npm run test:visual
```

## Test Coverage

### About Us Page Tests

| Test | Viewport | Description |
|------|----------|-------------|
| Mobile Full Page | 390x844 | Complete page snapshot at mobile breakpoint |
| Tablet Full Page | 768x1024 | Complete page snapshot at tablet breakpoint |
| Desktop Full Page | 1440x900 | Complete page snapshot at desktop breakpoint |
| Hero Section | 1440x900 | Isolated hero section testing |
| Team Section | 1440x900 | Team cards grid testing |
| Awards Section | 1440x900 | Awards list testing |
| Navbar Rendering | All | Responsive navbar across breakpoints |
| Footer Rendering | All | Footer consistency across breakpoints |
| Scroll Behavior | 1440x900 | Layout stability during scroll |
| Link Navigation | Desktop | Router integration testing |

## Breakpoint Mapping

Matching Framer's exact breakpoints:

| Name | Width | Framer Hash | Our Project |
|------|-------|-------------|-------------|
| Desktop | ≥1240px | hlnx5q/ni78y7 | desktop (1440x900) |
| Tablet | 810-1239px | 1s8hhl0/1qrwxj9 | tablet (768x1024) |
| Mobile | ≤809px | nfhrb4/hfqtg1 | mobile (390x844) |

## Comparison Thresholds

### Current Settings

```typescript
expect.toHaveScreenshot({
  maxDiffPixelRatio: 0.01,  // 1% max pixel difference
  threshold: 0.1,            // 10% per-pixel color tolerance
  animations: 'disabled',
  fullPage: true,
})
```

### Threshold Justification

**maxDiffPixelRatio: 0.01 (1%)**
- Sub-pixel anti-aliasing varies by OS (macOS vs Windows vs Linux)
- Framer custom fonts (Ronzino) render with slight variations
- Acceptable for font edges, icon anti-aliasing
- Strict enough to catch layout shifts, color changes

**threshold: 0.1 (10%)**
- Per-pixel color difference tolerance
- Handles anti-aliasing at element edges
- backdrop-filter: blur() may render slightly differently
- Catches actual style bugs while ignoring rendering artifacts

### When Tests Fail

If visual regression tests fail:

1. **< 1% difference** - Likely acceptable
   - Font rendering variation
   - Sub-pixel anti-aliasing
   - Review diff image, approve if no functional change

2. **1-5% difference** - Investigate
   - Possible CSS variable not applied
   - Animation still running
   - Image not fully loaded
   - Check Playwright trace

3. **> 5% difference** - Bug detected
   - Layout shift
   - Color change
   - Missing element
   - Font not loaded
   - DO NOT update baseline without fixing root cause

## Reviewing Test Results

### Using Playwright UI Mode (Recommended)

```bash
npm run test:visual:ui
```

Benefits:
- Visual diff viewer
- Side-by-side comparison
- Interactive test running
- Easy baseline updates

### Using HTML Report

```bash
npm run test:visual:report
```

Shows:
- All test results
- Screenshot diffs
- Error traces
- Performance metrics

## Updating Baselines

### When to Update

✅ **Update baselines when:**
- Intentional design changes
- Framer export updated
- Content legitimately changed
- Font files updated

❌ **DO NOT update when:**
- Tests are "flaky"
- Trying to make tests pass
- Unsure why diff exists
- Haven't investigated root cause

### How to Update

```bash
# Update all baselines
npm run test:visual:update

# Update specific test
npm run test:visual:update -- about-us.spec.ts

# Update specific project
npm run test:visual:update -- --project=desktop
```

## Debugging Failed Tests

### 1. Check Dev Server

```bash
# Ensure server is running
curl http://localhost:5173/about-us
```

### 2. Run with Debug Mode

```bash
npm run test:visual:debug
```

Opens Playwright Inspector for step-by-step debugging.

### 3. Check Traces

Failed tests generate traces in `test-results/`:
- Video recording
- DOM snapshots
- Network activity
- Console logs

### 4. Verify Framer Scripts

Ensure all scripts from `FRAMER_SCRIPTS_INTEGRATION.md` are in `index.html`:
- Animator engine
- Appear animation data
- SVG sprites

Missing scripts = broken animations = failed visual tests.

## CI/CD Integration

### GitHub Actions Example

Create `.github/workflows/visual-tests.yml`:

```yaml
name: Visual Regression Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps
      
      - name: Run Playwright tests
        run: npm run test:visual
      
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
      
      - uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: test-results
          path: test-results/
          retention-days: 7
```

### Handling OS Differences

Baselines are OS-specific:
- `about-us-desktop-chromium-darwin.png` (macOS)
- `about-us-desktop-chromium-linux.png` (Linux/CI)
- `about-us-desktop-chromium-win32.png` (Windows)

**Recommendation**: Generate baselines on the same OS as CI.

## Best Practices

### 1. Consistent Environment

- Use same Node version locally and CI
- Install same browser versions
- Generate baselines on CI OS

### 2. Stable Waits

Always wait for:
```typescript
await page.evaluate(() => document.fonts?.ready);
await page.waitForLoadState('networkidle');
await page.waitForTimeout(200); // Layout settle
```

### 3. Disable Animations

```typescript
await page.addStyleTag({
  content: `
    *, *::before, *::after {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
  `
});
```

### 4. Deterministic Content

- No timestamps
- No random UUIDs
- No external API calls
- Use fixed seed for randomness

### 5. Regular Baseline Reviews

- Review baselines monthly
- Update when Framer exports update
- Document all baseline changes in git commits

## Troubleshooting

### "Navigation timeout" Error

**Cause**: Dev server not running or wrong port

**Fix**:
```bash
# Check server
curl http://localhost:5173

# Update playwright.config.ts if different port
webServer: {
  url: 'http://localhost:3000', // your port
}
```

### Fonts Not Loading

**Cause**: @font-face declarations missing in index.html

**Fix**: Verify all 67 Ronzino font-face declarations from original About Us page are in `<head>`

### Animations Still Running

**Cause**: Framer animator script interfering

**Fix**: Add longer wait or disable animator:
```typescript
await page.evaluate(() => {
  window.__framer_disable_appear_effects_optimization__ = true;
});
```

### Snapshots Differ Between Machines

**Cause**: Different OS font rendering

**Fix**: 
- Generate baselines on same OS as tests will run
- Use CI to generate canonical baselines
- Consider Docker for consistent rendering

## Expanding Test Coverage

### Adding More Pages

1. Create new spec file: `tests/visual/contact-us.spec.ts`
2. Follow same pattern as `about-us.spec.ts`
3. Generate baselines: `npm run test:visual:update -- contact-us.spec.ts`

### Adding More Breakpoints

Update `playwright.config.ts`:
```typescript
{
  name: 'large-desktop',
  use: { 
    viewport: { width: 1920, height: 1080 },
  },
},
```

### Adding More Browsers

```typescript
projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
  },
  {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  },
]
```

## Performance

Average test run times:
- Single page, single viewport: ~5-10s
- All viewports: ~20-30s
- Full suite (with retries): ~1-2min

Optimization tips:
- Use `fullyParallel: true` in config
- Increase workers on powerful machines
- Skip redundant scroll tests

## Success Criteria

✅ **Migration is pixel-perfect when:**
- All visual tests pass at <1% diff
- No layout shifts during scroll
- Fonts render identically
- Animations initialize correctly
- Responsive breakpoints match exactly
- Footer and header consistent
- No console errors

## Maintenance Schedule

- **Daily**: Run tests locally before commits
- **Weekly**: Review test reports in CI
- **Monthly**: Update Playwright and browsers
- **Per Release**: Update baselines if design changed

## Support

If visual tests fail unexpectedly:

1. Check `FRAMER_SCRIPTS_INTEGRATION.md` - All scripts in place?
2. Review `playwright-report/index.html` - What changed?
3. Run `npm run test:visual:debug` - Step through test
4. Compare to original: https://primary-words-404174.framer.app/about-us
5. Check Framer CSS - All classes in `framer-services-export.css`?

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Visual Comparison Guide](https://playwright.dev/docs/test-snapshots)
- [FRAMER_SCRIPTS_INTEGRATION.md](./FRAMER_SCRIPTS_INTEGRATION.md)
- [PACKAGE_JSON_UPDATES.md](./PACKAGE_JSON_UPDATES.md)
