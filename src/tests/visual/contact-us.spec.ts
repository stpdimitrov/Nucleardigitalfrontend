import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests for Contact Us Page
 * 
 * CRITICAL: These tests enforce pixel-perfect visual parity with the original
 * Framer website at https://primary-words-404174.framer.app/contact-us
 * 
 * Tests run at three breakpoints matching Framer's responsive design:
 * - Mobile: 390x844
 * - Tablet: 768x1024
 * - Desktop: 1440x900
 */

test.describe('Contact Us Page - Visual Regression', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to Contact Us page
    await page.goto('/contact-us');
    
    // Wait for fonts to load - critical for text rendering consistency
    await page.evaluate(() => document.fonts?.ready);
    
    // Wait for all images to load (especially the globe image)
    await page.waitForLoadState('load');
    
    // Wait for animations to initialize
    await page.waitForTimeout(300);
    
    // Disable animations for consistent snapshots
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
        }
      `
    });
    
    // Wait for layout stability
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(200);
  });

  test('mobile viewport - full page snapshot', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'mobile') {
      test.skip();
    }
    
    // Verify critical elements are visible
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    
    // Take full page screenshot
    await expect(page).toHaveScreenshot('contact-us-mobile.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('tablet viewport - full page snapshot', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'tablet') {
      test.skip();
    }
    
    // Verify critical elements are visible
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    
    // Take full page screenshot
    await expect(page).toHaveScreenshot('contact-us-tablet.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('desktop viewport - full page snapshot', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    // Verify critical elements are visible
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    
    // Take full page screenshot
    await expect(page).toHaveScreenshot('contact-us-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('hero section with form - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
    
    // Verify form elements
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('select[name="service"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    
    await expect(heroSection).toHaveScreenshot('hero-section-with-form-desktop.png', {
      animations: 'disabled',
    });
  });

  test('google map section - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const mapSection = page.locator('section[aria-label="Map"]');
    await expect(mapSection).toBeVisible();
    
    // Wait for iframe to load
    const iframe = page.frameLocator('iframe');
    await page.waitForTimeout(1000); // Give map time to render
    
    await expect(mapSection).toHaveScreenshot('map-section-desktop.png', {
      animations: 'disabled',
    });
  });

  test('contact info cards - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const contactInfoSection = page.locator('section[aria-label="Contact info"]');
    await expect(contactInfoSection).toBeVisible();
    
    // Scroll to the section to ensure it's in viewport
    await contactInfoSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    
    // Verify all three cards are visible
    const cards = contactInfoSection.locator('div[aria-label="Info card"]');
    await expect(cards).toHaveCount(3);
    
    // Verify card titles
    await expect(contactInfoSection.locator('text=Contact us')).toBeVisible();
    await expect(contactInfoSection.locator('text=Follow us on')).toBeVisible();
    await expect(contactInfoSection.locator('text=Visit our Office')).toBeVisible();
    
    // Verify globe image is loaded
    const globeImage = contactInfoSection.locator('img[src*="6532d92b11916c863725e22bf7380a9818e54d62"]');
    await expect(globeImage).toBeVisible();
    
    await expect(contactInfoSection).toHaveScreenshot('contact-info-cards-desktop.png', {
      animations: 'disabled',
    });
  });

  test('contact us card - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const contactCard = page.locator('div[aria-label="Info card"]').first();
    await expect(contactCard).toBeVisible();
    
    // Verify contact links
    await expect(contactCard.locator('text=+1 (310) 458-9274')).toBeVisible();
    await expect(contactCard.locator('text=name@email.com')).toBeVisible();
    await expect(contactCard.locator('text=Los Angeles, CA')).toBeVisible();
    
    await expect(contactCard).toHaveScreenshot('contact-us-card-desktop.png', {
      animations: 'disabled',
    });
  });

  test('follow us card - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const followCard = page.locator('div[aria-label="Info card"]').nth(1);
    await expect(followCard).toBeVisible();
    
    // Verify social links
    await expect(followCard.locator('text=Dribbble')).toBeVisible();
    await expect(followCard.locator('text=Twitter-X')).toBeVisible();
    await expect(followCard.locator('text=Linkedin')).toBeVisible();
    
    await expect(followCard).toHaveScreenshot('follow-us-card-desktop.png', {
      animations: 'disabled',
    });
  });

  test('visit office card with globe - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const officeCard = page.locator('div[aria-label="Info card"]').nth(2);
    await expect(officeCard).toBeVisible();
    
    // Scroll to ensure globe is in viewport
    await officeCard.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    
    // Verify globe image
    const globeImage = officeCard.locator('img');
    await expect(globeImage).toBeVisible();
    
    await expect(officeCard).toHaveScreenshot('visit-office-card-desktop.png', {
      animations: 'disabled',
    });
  });

  test('FAQ section - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const faqSection = page.locator('section').filter({ hasText: 'FAQ' }).first();
    await expect(faqSection).toBeVisible();
    
    await faqSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    
    await expect(faqSection).toHaveScreenshot('faq-section-desktop.png', {
      animations: 'disabled',
    });
  });

  test('CTA section - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const ctaSection = page.locator('section').last();
    await expect(ctaSection).toBeVisible();
    
    await ctaSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    
    // Verify CTA content
    await expect(ctaSection.locator('text=Let\'s work together')).toBeVisible();
    
    await expect(ctaSection).toHaveScreenshot('cta-section-desktop.png', {
      animations: 'disabled',
    });
  });

  test('form interaction states', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    // Test form focus states
    const nameInput = page.locator('input[name="name"]');
    await nameInput.focus();
    await page.waitForTimeout(100);
    
    await expect(nameInput).toHaveScreenshot('form-input-focused.png');
    
    // Test select dropdown
    const select = page.locator('select[name="service"]');
    await expect(select).toBeVisible();
    
    await expect(select).toHaveScreenshot('form-select-default.png');
  });

  test('responsive navbar rendering', async ({ page }, testInfo) => {
    const navbar = page.locator('nav').first();
    await expect(navbar).toBeVisible();
    
    await expect(navbar).toHaveScreenshot(`navbar-contact-${testInfo.project.name}.png`);
  });

  test('footer rendering consistency', async ({ page }, testInfo) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Scroll to footer
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    
    await expect(footer).toHaveScreenshot(`footer-contact-${testInfo.project.name}.png`, {
      animations: 'disabled',
    });
  });

  test('mobile - contact cards stack vertically', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'mobile') {
      test.skip();
    }
    
    const contactInfoSection = page.locator('section[aria-label="Contact info"]');
    await expect(contactInfoSection).toBeVisible();
    
    await contactInfoSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    
    await expect(contactInfoSection).toHaveScreenshot('contact-info-cards-mobile.png', {
      animations: 'disabled',
    });
  });

  test('tablet - contact cards layout', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'tablet') {
      test.skip();
    }
    
    const contactInfoSection = page.locator('section[aria-label="Contact info"]');
    await expect(contactInfoSection).toBeVisible();
    
    await contactInfoSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    
    await expect(contactInfoSection).toHaveScreenshot('contact-info-cards-tablet.png', {
      animations: 'disabled',
    });
  });
});

/**
 * THRESHOLD JUSTIFICATION:
 * 
 * maxDiffPixelRatio: 0.01 (1%)
 * - Accounts for sub-pixel anti-aliasing differences across OS
 * - Globe image rendering may have minor compression artifacts
 * - Google Maps iframe content may vary slightly
 * - Font anti-aliasing varies between macOS, Windows, Linux
 * - 1% threshold allows for minor rendering differences while catching layout shifts
 * 
 * threshold: 0.1 (10% per-pixel color diff)
 * - Allows for slight color anti-aliasing at edges
 * - Globe image has gradients that may render slightly differently
 * - Form inputs have subtle border/shadow effects
 * - Background images and overlays may have minor color variations
 * 
 * SPECIAL CONSIDERATIONS FOR CONTACT PAGE:
 * 
 * 1. Globe Image:
 *    - Large PNG with transparency and gradients
 *    - May have sub-pixel rendering differences
 *    - Positioned absolutely with complex overflow handling
 * 
 * 2. Google Maps Iframe:
 *    - External content that may vary
 *    - Consider masking or using static screenshot
 *    - Map tiles load asynchronously
 * 
 * 3. Form Elements:
 *    - Browser default rendering varies
 *    - Custom styling overrides browser defaults
 *    - Focus states need careful testing
 * 
 * If tests fail with <1% difference, check:
 * 1. Globe image loaded properly
 * 2. Google Maps iframe fully rendered
 * 3. Form inputs showing correct states
 * 4. Font anti-aliasing consistent
 * 5. Animation CSS properly disabled
 * 
 * DO NOT increase thresholds to pass tests - fix the root cause.
 */
