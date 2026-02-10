# Testing Contact Info Cards Component

## Quick Test Commands

### Test All Breakpoints
```bash
# Run all contact card tests
npx playwright test tests/visual/contact-info-cards.spec.ts

# Run with visible browser
npx playwright test tests/visual/contact-info-cards.spec.ts --headed

# Run with UI mode (recommended)
npx playwright test tests/visual/contact-info-cards.spec.ts --ui
```

### Test Specific Breakpoints
```bash
# Desktop only
npx playwright test tests/visual/contact-info-cards.spec.ts --project=desktop

# Tablet only
npx playwright test tests/visual/contact-info-cards.spec.ts --project=tablet

# Mobile only
npx playwright test tests/visual/contact-info-cards.spec.ts --project=mobile
```

### Test Specific Cards
```bash
# Test just Card 1 (Contact Us)
npx playwright test tests/visual/contact-info-cards.spec.ts -g "card 1"

# Test just Card 2 (Follow Us On)
npx playwright test tests/visual/contact-info-cards.spec.ts -g "card 2"

# Test just Card 3 (Visit Our Office with Globe)
npx playwright test tests/visual/contact-info-cards.spec.ts -g "card 3"

# Test just globe image
npx playwright test tests/visual/contact-info-cards.spec.ts -g "globe"
```

### Update Baselines
```bash
# Update all baselines for this component
npx playwright test tests/visual/contact-info-cards.spec.ts --update-snapshots

# Update desktop only
npx playwright test tests/visual/contact-info-cards.spec.ts --project=desktop --update-snapshots
```

### View Results
```bash
# Open HTML report
npx playwright show-report

# View in UI mode
npx playwright test tests/visual/contact-info-cards.spec.ts --ui
```

## Using the Test Script

```bash
# Make executable (first time)
chmod +x tests/test-contact-cards.sh

# Run the test
./tests/test-contact-cards.sh

# Run with options
./tests/test-contact-cards.sh --headed
./tests/test-contact-cards.sh --update-snapshots
```

## What's Being Tested

### Full Section Test
✅ All three cards visible and positioned correctly  
✅ Gap spacing between cards (20px)  
✅ Equal card widths on desktop  
✅ Globe image fully rendered  

### Card 1: Contact Us
✅ Phone number (+1 (310) 458-9274)  
✅ Email (name@email.com)  
✅ Location (Los Angeles, CA)  
✅ Three SVG icons (phone, email, location)  
✅ Two divider lines  
✅ Hover states  

### Card 2: Follow Us On
✅ Dribbble link  
✅ Twitter-X link  
✅ LinkedIn link  
✅ Three arrow icons  
✅ Two divider lines  
✅ Hover states  

### Card 3: Visit Our Office
✅ "Visit our Office" title  
✅ Globe image loaded and positioned  
✅ Globe at bottom-[-202px] right-px  
✅ Image dimensions correct  
✅ Overflow clipping works  

### Layout Tests
✅ Three-card flexbox layout  
✅ gap-[20px] between cards  
✅ flex-[1_0_0] equal widths  
✅ Card height alignment  
✅ Responsive behavior (mobile stacks vertically)  

### Interaction Tests
✅ Hover opacity changes (0.6 → 1.0)  
✅ Link functionality  
✅ Icon rendering  
✅ Divider line styling  

## Expected Thresholds

- **maxDiffPixelRatio**: 0.01 (1%)
- **Globe image**: 0.015 (1.5%) - allows for PNG compression
- **threshold**: 0.1 (10% per-pixel color tolerance)

## Common Issues

### Globe Image Not Showing
**Cause**: Image not loaded before screenshot  
**Solution**: Test includes 500ms wait for image rendering

### Cards Different Widths
**Cause**: flex-[1_0_0] not applied correctly  
**Solution**: Verify flexbox classes and container width

### Hover State Not Working
**Cause**: transition-duration still active  
**Solution**: Test includes CSS to disable all transitions

### Text Rendering Differences
**Cause**: Font anti-aliasing varies by OS  
**Solution**: 1% threshold tolerates minor variations

## Reading Test Results

### ✅ All Tests Pass
```
Running 12 tests using 3 workers
  12 passed (45s)
```
**Component matches original perfectly!**

### ❌ Some Tests Fail
```
Running 12 tests using 3 workers
  10 passed
  2 failed (45s)

Error: Screenshot comparison failed:
  desktop - card 3: Visit Our Office with Globe
  234 pixels (ratio 0.015 of all image pixels) are different.
```

**Investigation steps:**
1. Open HTML report: `npx playwright show-report`
2. Review diff image (red highlights show differences)
3. Check specific card/element that failed
4. Fix CSS/layout in source code
5. Re-run test

## Debugging Tips

### View What Browser Sees
```bash
npx playwright test tests/visual/contact-info-cards.spec.ts --headed
```

### Step Through Test
```bash
npx playwright test tests/visual/contact-info-cards.spec.ts --debug
```

### Interactive Mode
```bash
npx playwright test tests/visual/contact-info-cards.spec.ts --ui
```

### Check Single Card
```bash
# Test just the globe card
npx playwright test tests/visual/contact-info-cards.spec.ts -g "Visit Our Office"
```

### Compare Screenshots Manually
After test runs, check:
```
tests/visual/contact-info-cards.spec.ts-snapshots/
├── contact-info-cards-section-desktop-chromium-darwin.png
├── contact-card-desktop-chromium-darwin.png
├── follow-card-desktop-chromium-darwin.png
└── office-card-with-globe-desktop-chromium-darwin.png
```

## CI/CD Integration

This test is included in the full visual regression suite:
```bash
npm run test:visual
```

Or run just this component in CI:
```yaml
- name: Test Contact Cards Component
  run: npx playwright test tests/visual/contact-info-cards.spec.ts
```

## Validation Checklist

Before committing changes to this component:

- [ ] Run `npx playwright test tests/visual/contact-info-cards.spec.ts`
- [ ] All tests pass
- [ ] Reviewed any diff images if tests failed
- [ ] Verified globe image renders correctly
- [ ] Checked card spacing and alignment
- [ ] Tested all breakpoints (desktop, tablet, mobile)
- [ ] Hover states work correctly
- [ ] Updated baselines if intentional changes made

## Success Criteria

Component is **pixel-perfect** when:

✅ Full section test passes  
✅ All three individual card tests pass  
✅ Globe rendering test passes  
✅ Layout spacing test passes  
✅ All breakpoints pass (desktop, tablet, mobile)  
✅ Hover interaction tests pass  
✅ Typography matches exactly  
✅ Colors match exactly  
✅ Icon SVGs render correctly  

---

**Test File**: `/tests/visual/contact-info-cards.spec.ts`  
**Component**: Contact Info Cards Section (3 cards)  
**Location**: Contact Us Page, bottom section  
**Breakpoints**: Mobile (390x844), Tablet (768x1024), Desktop (1440x900)
