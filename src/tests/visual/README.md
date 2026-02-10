# Visual Regression Test Suite

## 📸 Purpose

This test suite ensures **100% pixel-perfect visual parity** between the original Framer website and the migrated React application. Every page, every breakpoint, every section is tested to maintain exact visual fidelity.

## 🎯 Test Coverage

### Pages Tested
- ✅ **Home** (`/`) - Hero, Services, Projects, Testimonials, Pricing, CTA
- ✅ **Services** (`/services`) - Hero, Services Grid
- ✅ **About Us** (`/about-us`) - Hero, Team, Awards
- ✅ **Contact Us** (`/contact-us`) - Form, Map, Contact Cards, Globe, FAQ, CTA

### Breakpoints
- **Mobile**: 390x844 (iPhone 12/13)
- **Tablet**: 768x1024 (iPad)
- **Desktop**: 1440x900 (Standard desktop)

### Total Test Coverage
- **4 Pages** × **3 Breakpoints** = **12 Full-page snapshots**
- **~50+ Section-level snapshots** for granular testing
- **All major UI components** tested individually

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

```bash
# Run all visual regression tests
npm run test:visual

# Run with UI mode (recommended for development)
npm run test:visual:ui

# Run in headed mode (see browser)
npm run test:visual:headed

# Debug failing tests
npm run test:visual:debug

# View test report
npm run test:visual:report
```

### First Time Setup

```bash
# 1. Generate baseline screenshots
npm run test:visual:update

# 2. Verify baselines look correct
npm run test:visual:report

# 3. Commit baselines to git
git add tests/visual/**/*-snapshots/
git commit -m "Add visual regression baselines"

# 4. Future test runs will compare against these baselines
npm run test:visual
```

## 📋 Test Files

### File Structure

```
tests/visual/
├── README.md                    # This file
├── home.spec.ts                 # Homepage tests
├── services.spec.ts             # Services page tests
├── about-us.spec.ts             # About Us page tests
├── contact-us.spec.ts           # Contact Us page tests
├── home.spec.ts-snapshots/      # Home baseline screenshots
├── services.spec.ts-snapshots/  # Services baseline screenshots
├── about-us.spec.ts-snapshots/  # About Us baseline screenshots
└── contact-us.spec.ts-snapshots/# Contact Us baseline screenshots
```

### Test Anatomy

Each test file follows this structure:

```typescript
test.describe('Page Name - Visual Regression', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to page
    // Wait for fonts and images
    // Disable animations
    // Ensure layout stability
  });

  test('mobile viewport - full page snapshot', async ({ page }, testInfo) => {
    // Take mobile screenshot
  });

  test('tablet viewport - full page snapshot', async ({ page }, testInfo) => {
    // Take tablet screenshot
  });

  test('desktop viewport - full page snapshot', async ({ page }, testInfo) => {
    // Take desktop screenshot
  });

  test('specific section - desktop', async ({ page }, testInfo) => {
    // Test individual sections for precise error location
  });
});
```

## 🔍 Understanding Results

### Passing Tests ✅

```bash
✅ All visual regression tests passed
✅ 100% visual parity maintained
```

**What it means**: The migrated application matches the original Framer design pixel-perfectly.

### Failing Tests ❌

```bash
❌ Visual regression tests failed
❌ Visual differences detected
```

**What to do**:

1. **View HTML Report**
   ```bash
   npm run test:visual:report
   ```

2. **Check Diff Images**
   - Red highlights show pixel differences
   - Side-by-side comparison of expected vs actual
   - Diff percentage shown

3. **Investigate Root Cause**
   - Layout shift? → Check CSS flexbox/grid
   - Missing element? → Verify DOM structure
   - Wrong color? → Check CSS variables
   - Font issue? → Verify font loading
   - Image missing? → Check asset paths

4. **Fix the Issue**
   - Update source code to match Framer design
   - DO NOT update baselines to pass tests
   - Re-run tests to verify fix

5. **Update Baselines** (only if intentional change)
   ```bash
   npm run test:visual:update
   ```

## ⚙️ Configuration

### Threshold Settings

```typescript
// playwright.config.ts
expect: {
  toHaveScreenshot: {
    maxDiffPixelRatio: 0.01,   // 1% pixel difference allowed
    threshold: 0.1,             // 10% per-pixel color tolerance
    animations: 'disabled',     // No animations
    fullPage: true,             // Full page screenshots
  }
}
```

### Why These Thresholds?

#### `maxDiffPixelRatio: 0.01` (1%)

Accounts for:
- Font rendering differences across OS (macOS, Windows, Linux)
- Sub-pixel anti-aliasing variations
- Image compression artifacts
- GPU rendering differences

**1% is strict enough** to catch actual layout issues while tolerating rendering variations.

#### `threshold: 0.1` (10% per-pixel)

Accounts for:
- Anti-aliasing on text/shape edges
- Gradient rendering differences
- Image scaling color shifts
- Backdrop filter variations

**10% per-pixel** catches actual color/style changes while ignoring rendering artifacts.

## 🐛 Debugging Failed Tests

### Strategy 1: Run in Headed Mode

See what the browser sees:

```bash
npm run test:visual:headed
```

### Strategy 2: Use Debug Mode

Step through test execution:

```bash
npm run test:visual:debug
```

### Strategy 3: Test Single File

Focus on one page:

```bash
npx playwright test tests/visual/contact-us.spec.ts --headed
```

### Strategy 4: Use UI Mode

Interactive test debugging:

```bash
npm run test:visual:ui
```

Features:
- ✅ Visual test picker
- ✅ Time-travel debugging
- ✅ Network inspector
- ✅ DOM snapshot viewer
- ✅ Console logs

### Strategy 5: Check Specific Breakpoint

Test only mobile, tablet, or desktop:

```bash
npx playwright test --project=mobile
npx playwright test --project=tablet
npx playwright test --project=desktop
```

## 📊 Common Issues & Solutions

### Issue: Font Rendering Differences

**Symptom**: Text looks slightly different

**Cause**: Font anti-aliasing varies by OS

**Solution**:
- Verify fonts load correctly
- Check `@font-face` declarations
- Accept minor differences if <1% pixel variance
- Ensure `font-display: swap` not causing FOUT

### Issue: Animation Interference

**Symptom**: Elements in different positions across runs

**Cause**: Animations still running during snapshot

**Solution**:
- Verify `animations: 'disabled'` in config
- Check CSS override is applied
- Add `page.waitForTimeout(300)` after navigation
- Ensure `waitForLoadState('networkidle')`

### Issue: Lazy-Loaded Images

**Symptom**: Images missing in snapshots

**Cause**: Images not yet loaded when snapshot taken

**Solution**:
- Scroll element into view: `scrollIntoViewIfNeeded()`
- Wait for images: `waitForLoadState('load')`
- Add explicit waits: `waitForTimeout(500)`
- Check network tab for failed requests

### Issue: Google Maps Variations

**Symptom**: Map tiles different across runs

**Cause**: Google Maps loads dynamic content

**Solution**:
- Accept minor tile differences
- Consider masking map area in comparison
- Use static image instead of iframe
- Document acceptable variance in test

### Issue: Timestamp/Date Elements

**Symptom**: Dynamic content changes

**Cause**: Current date/time displayed

**Solution**:
- Mock `Date.now()` for consistent snapshots
- Hide/mask dynamic elements
- Use static test data

## 📈 Best Practices

### Writing New Tests

1. **Isolate Sections**: Test components individually for precise error location
2. **Wait for Stability**: Always wait for fonts, images, animations
3. **Disable Animations**: Ensures consistent snapshots
4. **Descriptive Names**: Screenshot names should indicate what's tested
5. **Critical Path First**: Test user-visible components first

### Maintaining Tests

1. **Review Baselines**: Monthly review of baseline screenshots
2. **Update Documentation**: Keep this README up to date
3. **Version Control**: Always commit baselines to git
4. **CI Integration**: Run tests on every PR
5. **Threshold Review**: Periodically verify thresholds are appropriate

### Performance Optimization

1. **Parallel Execution**: Tests run across breakpoints simultaneously
2. **Server Reuse**: Dev server stays running between tests
3. **Selective Testing**: Use `test.only()` for focused debugging
4. **Shard Tests**: Split tests across multiple workers in CI

## 🔄 CI/CD Integration

### GitHub Actions

Visual regression tests run automatically on:
- ✅ Push to `main` or `develop`
- ✅ Pull requests
- ✅ Manual workflow trigger

### Workflow Features

- **Parallel execution** across 3 shards
- **Automatic report upload** on failure
- **PR comments** with test results summary
- **Artifact retention** for 30 days
- **Failure screenshots** uploaded separately

### Viewing CI Results

1. Go to **Actions** tab in GitHub
2. Click on latest workflow run
3. Check **Summary** for pass/fail status
4. Download **Artifacts** for detailed reports
5. Review **playwright-report-merged** for full results

## 📦 Baseline Management

### What Are Baselines?

Baseline screenshots are the "source of truth" - the expected visual appearance of each page at each breakpoint.

### Where Are They Stored?

```
tests/visual/
├── home.spec.ts-snapshots/
│   ├── home-desktop-chromium-darwin.png
│   ├── home-mobile-chromium-darwin.png
│   └── home-tablet-chromium-darwin.png
├── services.spec.ts-snapshots/
├── about-us.spec.ts-snapshots/
└── contact-us.spec.ts-snapshots/
```

### When to Update Baselines?

✅ **Update baselines when**:
- Intentional design changes made
- Bug fixes that change visual appearance
- New features added to pages
- Framer site updated (after verifying changes)

❌ **DO NOT update baselines to**:
- Make failing tests pass
- Hide regressions
- Skip investigation

### How to Update Baselines?

```bash
# Step 1: Fix the visual issue in source code
# Step 2: Verify fix looks correct
npm run dev  # Check in browser

# Step 3: Update baselines
npm run test:visual:update

# Step 4: Review updated baselines
npm run test:visual:report

# Step 5: Commit if correct
git add tests/visual/**/*-snapshots/
git commit -m "Update visual baselines after [reason]"
```

## 🎓 Learning Resources

- [Playwright Documentation](https://playwright.dev/)
- [Visual Testing Guide](https://playwright.dev/docs/test-snapshots)
- [Debugging Tests](https://playwright.dev/docs/debug)
- [CI/CD Best Practices](https://playwright.dev/docs/ci)

## 🆘 Getting Help

### Quick Troubleshooting

1. **Read error message** - Often tells you exactly what's wrong
2. **Check HTML report** - Visual diff images highlight issues
3. **Run in headed mode** - See what browser sees
4. **Review this README** - Most issues documented here
5. **Check Playwright logs** - In `test-results/` directory

### Support Channels

- Project documentation in `/VISUAL_REGRESSION_SETUP.md`
- Test configuration in `/playwright.config.ts`
- Example tests in this directory
- GitHub Issues for project-specific problems

---

**Last Updated**: 2026-02-07  
**Playwright Version**: ^1.41.0  
**Node Version**: 18+  
**Maintainer**: Development Team
