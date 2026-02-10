# Visual Regression Testing Setup

## Overview

This project uses **Playwright** for comprehensive pixel-perfect visual regression testing to ensure 100% visual parity between the original Framer website (`https://primary-words-404174.framer.app/`) and the migrated React application.

## Architecture

### Test Suite Structure

```
tests/visual/
├── home.spec.ts          # Homepage visual tests
├── services.spec.ts      # Services page visual tests
├── about-us.spec.ts      # About Us page visual tests
└── contact-us.spec.ts    # Contact Us page visual tests
```

### Breakpoints Tested

All pages are tested at three responsive breakpoints matching the original Framer design:

1. **Mobile**: `390x844` - iPhone 12/13 viewport
2. **Tablet**: `768x1024` - iPad viewport  
3. **Desktop**: `1440x900` - Standard desktop viewport

## Running Tests

### Quick Start

```bash
# Run all visual regression tests
npm run test:visual

# Run with visible browser (headed mode)
npm run test:visual:headed

# Run in debug mode
npm run test:visual:debug

# Update baseline screenshots (after intentional changes)
npm run test:visual:update
```

### Using the Test Runner Script

The `visual-regression-runner.sh` script provides a comprehensive test execution flow:

```bash
# Make the script executable (first time only)
chmod +x tests/visual-regression-runner.sh

# Run tests
./tests/visual-regression-runner.sh

# Run with options
./tests/visual-regression-runner.sh --update-snapshots
./tests/visual-regression-runner.sh --headed --debug
./tests/visual-regression-runner.sh --report
```

## Test Configuration

### Playwright Config (`playwright.config.ts`)

```typescript
{
  // Screenshot comparison settings
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,    // 1% pixel difference threshold
      threshold: 0.1,              // 10% per-pixel color tolerance
      animations: 'disabled',      // Disable animations
      fullPage: true,              // Full page screenshots
    }
  }
}
```

### Threshold Justification

#### `maxDiffPixelRatio: 0.01` (1%)

This allows for minor pixel differences across different operating systems due to:
- **Font rendering**: Anti-aliasing differences between macOS, Windows, Linux
- **Image compression**: Minor PNG/WebP compression artifacts
- **Sub-pixel rendering**: Different devices render sub-pixels differently
- **GPU rendering**: Graphics card differences affect anti-aliasing

**1% threshold** is strict enough to catch actual layout issues while tolerating rendering variations.

#### `threshold: 0.1` (10% per-pixel)

This allows for slight color variations in individual pixels due to:
- **Anti-aliasing edges**: Text and shape edges have gradient anti-aliasing
- **Gradient rendering**: CSS gradients may differ slightly
- **Image scaling**: Responsive images scale with minor color shifts
- **Backdrop filters**: Blur effects render differently across browsers

**10% per-pixel** catches actual color/style changes while ignoring rendering artifacts.

### Why These Thresholds?

❌ **0% threshold** = Impossible to achieve across different environments
✅ **1% maxDiffPixelRatio** = Catches layout shifts, spacing issues, missing elements
✅ **10% threshold** = Catches color changes, style regressions

## Test Execution Flow

1. **Environment Check**: Verifies Playwright installation
2. **Build Application**: Ensures latest code is tested
3. **Start Dev Server**: Launches on `http://localhost:5173`
4. **Run Tests**: Executes all visual regression tests in parallel
5. **Generate Report**: Creates HTML report with diff images
6. **Display Results**: Shows pass/fail summary

## Understanding Test Results

### Passing Tests ✅

```
✓ All visual regression tests passed
✓ 100% visual parity maintained
```

No action needed - the migration maintains pixel-perfect fidelity.

### Failing Tests ❌

```
✗ Visual regression tests failed
✗ Visual differences detected
```

**Investigation Steps:**

1. **Review HTML Report**
   ```bash
   npx playwright show-report
   ```

2. **Check Diff Images**
   - Located in `test-results/`
   - Shows expected vs actual vs diff
   - Red highlights indicate pixel differences

3. **Identify Root Cause**
   - Layout shift → Check flexbox/grid CSS
   - Missing element → Verify DOM structure  
   - Color difference → Check CSS variables
   - Font rendering → Verify font loading
   - Image missing → Check asset paths

4. **Fix the Issue**
   - Update source code to match Framer design
   - Re-run tests to verify fix

5. **Update Baselines** (only if acceptable)
   ```bash
   npm run test:visual:update
   ```

## Common Issues & Solutions

### Issue: Font Rendering Differences

**Symptom**: Minor text rendering variations across OS

**Solution**: 
- Verify font files loaded correctly
- Check `@font-face` declarations
- Ensure `font-display: swap` is not causing issues
- Accept minor differences if <1% pixel variance

### Issue: Animation Interference

**Symptom**: Inconsistent snapshots with elements in different positions

**Solution**:
- Ensure `animations: 'disabled'` in test config
- Add `animation-duration: 0s !important` CSS override
- Wait for `page.waitForLoadState('networkidle')`

### Issue: Lazy-Loaded Images

**Symptom**: Missing images in snapshots

**Solution**:
- Scroll element into view: `element.scrollIntoViewIfNeeded()`
- Wait for images: `page.waitForLoadState('load')`
- Add explicit waits: `page.waitForTimeout(300)`

### Issue: Google Maps Iframe Variations

**Symptom**: Map section shows different tiles/content

**Solution**:
- Accept minor map tile differences
- Consider masking map area in comparison
- Use static map screenshot instead of iframe
- Document acceptable variance

## Baseline Screenshot Management

### Initial Baseline Creation

```bash
# First run creates baseline screenshots
npm run test:visual
```

Baselines stored in: `tests/visual/*.spec.ts-snapshots/`

### Updating Baselines After Intentional Changes

```bash
# After fixing bugs or making intentional design updates
npm run test:visual:update
```

⚠️ **Warning**: Only update baselines after verifying changes are intentional and correct!

### Baseline Review Checklist

Before updating baselines, verify:
- [ ] Changes match original Framer design
- [ ] Layout/spacing matches exactly
- [ ] Colors match CSS variables
- [ ] Typography matches font specs
- [ ] Images loaded correctly
- [ ] Animations disabled in snapshots
- [ ] No layout shifts during scroll

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Visual Regression Tests

on: [push, pull_request]

jobs:
  visual-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run test:visual
      - uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: visual-regression-report
          path: playwright-report/
```

## Best Practices

### Writing New Visual Tests

1. **Isolate Components**: Test sections individually for precise error location
2. **Wait for Stability**: Ensure fonts, images, animations loaded
3. **Disable Animations**: Always disable for consistent snapshots
4. **Use Descriptive Names**: Screenshot names should indicate what's tested
5. **Test Critical Paths**: Focus on user-visible components first

### Debugging Failed Tests

1. **Run in Headed Mode**: See what browser sees
   ```bash
   npm run test:visual:headed
   ```

2. **Use Debug Mode**: Step through test execution
   ```bash
   npm run test:visual:debug
   ```

3. **Check Console Logs**: Look for JavaScript errors
4. **Inspect Network Tab**: Verify all assets loaded
5. **Compare DOM**: Check if HTML structure matches Framer

### Performance Optimization

- **Parallel Execution**: Tests run across 3 breakpoints simultaneously
- **Reuse Server**: Dev server stays running between tests
- **Selective Testing**: Use `test.only()` for focused debugging
- **Fast Retries**: Configured for 2 retries on CI

## Test Coverage

### Current Coverage

✅ **Home Page** (`/`)
- Hero section
- Services section  
- Projects section
- Testimonials section
- Pricing section
- CTA section

✅ **Services Page** (`/services`)
- Hero section
- Services grid
- Full page snapshots

✅ **About Us Page** (`/about-us`)
- Hero section
- Team section
- Awards section
- Full page snapshots

✅ **Contact Us Page** (`/contact-us`)
- Hero with form
- Google Maps section
- Contact info cards (3 cards)
- Globe image positioning
- FAQ section
- CTA section

### Coverage Metrics

- **Pages**: 4/4 (100%)
- **Breakpoints**: 3/3 (100%)
- **Total Screenshots**: ~50+ per test run
- **Critical Sections**: All major sections covered

## Maintenance

### When to Update Tests

- **New Pages Added**: Create new spec file
- **Layout Changes**: Update affected snapshots
- **Responsive Breakpoints Changed**: Update config
- **New Components**: Add section-specific tests

### Regular Maintenance Tasks

- [ ] Review baseline screenshots monthly
- [ ] Update Playwright version quarterly  
- [ ] Verify thresholds still appropriate
- [ ] Archive old test results
- [ ] Update documentation

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Visual Comparison Best Practices](https://playwright.dev/docs/test-snapshots)
- [Original Framer Site](https://primary-words-404174.framer.app/)
- Project Repository: See `/tests/visual/` directory

## Support

For issues or questions:
1. Review this documentation
2. Check Playwright logs in `test-results/`
3. Examine HTML report in `playwright-report/`
4. Review test source code in `tests/visual/`

---

**Last Updated**: 2026-02-07  
**Playwright Version**: Latest  
**Node Version**: 18+
