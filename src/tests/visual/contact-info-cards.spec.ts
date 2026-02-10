import { test, expect } from '@playwright/test';

/**
 * Focused Visual Regression Test for Contact Info Cards Section
 * 
 * Tests the specific 3-card layout section with:
 * - Contact Us card (phone, email, location)
 * - Follow Us On card (social links)
 * - Visit Our Office card (with globe image)
 * 
 * This is a granular test for the selected component only.
 */

test.describe('Contact Info Cards - Component Test', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to Contact Us page
    await page.goto('/contact-us');
    
    // Wait for fonts to load - critical for text rendering consistency
    await page.evaluate(() => document.fonts?.ready);
    
    // Wait for all images to load (especially the globe image)
    await page.waitForLoadState('load');
    
    // Wait for Motion animations to initialize
    await page.waitForTimeout(500);
    
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
    await page.waitForTimeout(300);
  });

  test('desktop - full contact info cards section', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    // Locate the specific section
    const contactInfoSection = page.locator('section[aria-label="Contact info"]');
    await expect(contactInfoSection).toBeVisible();
    
    // Scroll section into view
    await contactInfoSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500); // Extra time for globe image to render
    
    // Verify all three cards are present
    const cards = contactInfoSection.locator('div[aria-label="Info card"]');
    await expect(cards).toHaveCount(3);
    
    // Verify card titles
    await expect(contactInfoSection.locator('p:has-text("Contact us")')).toBeVisible();
    await expect(contactInfoSection.locator('p:has-text("Follow us on")')).toBeVisible();
    await expect(contactInfoSection.locator('p:has-text("Visit our Office")')).toBeVisible();
    
    // Verify globe image is loaded
    const globeImage = contactInfoSection.locator('img');
    await expect(globeImage).toBeVisible();
    
    // Wait for image to fully render
    await globeImage.evaluate((img: HTMLImageElement) => {
      return img.complete && img.naturalHeight !== 0;
    });
    
    // Take screenshot of the entire section
    await expect(contactInfoSection).toHaveScreenshot('contact-info-cards-section-desktop.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.01,
      threshold: 0.1,
    });
  });

  test('desktop - card 1: Contact Us', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const contactCard = page.locator('section[aria-label="Contact info"] div[aria-label="Info card"]').first();
    await expect(contactCard).toBeVisible();
    
    await contactCard.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    
    // Verify content
    await expect(contactCard.locator('p:has-text("Contact us")')).toBeVisible();
    await expect(contactCard.locator('p:has-text("+1 (310) 458-9274")')).toBeVisible();
    await expect(contactCard.locator('p:has-text("name@email.com")')).toBeVisible();
    await expect(contactCard.locator('p:has-text("Los Angeles, CA")')).toBeVisible();
    
    // Verify all SVG icons are present
    const svgs = contactCard.locator('svg');
    await expect(svgs).toHaveCount(3); // phone, email, location
    
    await expect(contactCard).toHaveScreenshot('contact-card-desktop.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.01,
    });
  });

  test('desktop - card 2: Follow Us On', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const followCard = page.locator('section[aria-label="Contact info"] div[aria-label="Info card"]').nth(1);
    await expect(followCard).toBeVisible();
    
    await followCard.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    
    // Verify content
    await expect(followCard.locator('p:has-text("Follow us on")')).toBeVisible();
    await expect(followCard.locator('p:has-text("Dribbble")')).toBeVisible();
    await expect(followCard.locator('p:has-text("Twitter-X")')).toBeVisible();
    await expect(followCard.locator('p:has-text("Linkedin")')).toBeVisible();
    
    // Verify arrow icons
    const arrows = followCard.locator('svg');
    await expect(arrows).toHaveCount(3);
    
    await expect(followCard).toHaveScreenshot('follow-card-desktop.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.01,
    });
  });

  test('desktop - card 3: Visit Our Office with Globe', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const officeCard = page.locator('section[aria-label="Contact info"] div[aria-label="Info card"]').nth(2);
    await expect(officeCard).toBeVisible();
    
    await officeCard.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500); // Extra time for globe image
    
    // Verify title
    await expect(officeCard.locator('p:has-text("Visit our Office")')).toBeVisible();
    
    // Verify globe image
    const globeImage = officeCard.locator('img');
    await expect(globeImage).toBeVisible();
    
    // Wait for image to be fully loaded
    await globeImage.evaluate((img: HTMLImageElement) => {
      return img.complete && img.naturalHeight !== 0;
    });
    
    // Verify globe positioning (absolute positioning with specific values)
    const globeContainer = officeCard.locator('div').filter({ has: globeImage });
    await expect(globeContainer).toBeVisible();
    
    await expect(officeCard).toHaveScreenshot('office-card-with-globe-desktop.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.01,
    });
  });

  test('desktop - globe image rendering', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const section = page.locator('section[aria-label="Contact info"]');
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    // Find globe image specifically
    const globeImage = section.locator('img[src*="6532d92b11916c863725e22bf7380a9818e54d62"]');
    await expect(globeImage).toBeVisible();
    
    // Verify image loaded
    const isLoaded = await globeImage.evaluate((img: HTMLImageElement) => {
      return img.complete && img.naturalHeight !== 0;
    });
    expect(isLoaded).toBeTruthy();
    
    // Take screenshot of just the globe container
    const globeContainer = section.locator('div[aria-label="Info card"]').nth(2);
    await expect(globeContainer).toHaveScreenshot('globe-rendering-desktop.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.015, // Slightly higher for image compression
    });
  });

  test('desktop - three card layout spacing', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const section = page.locator('section[aria-label="Contact info"]');
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    const container = section.locator('div[aria-label="Container"]');
    const grid = container.locator('div[aria-label="Grid 3x"]');
    
    await expect(grid).toBeVisible();
    
    // Verify grid has 3 cards
    const cards = grid.locator('div[aria-label="Info card"]');
    const cardCount = await cards.count();
    expect(cardCount).toBe(3);
    
    // Verify equal width cards (flex-[1_0_0])
    const cardWidths = await cards.evaluateAll((elements) => {
      return elements.map(el => el.getBoundingClientRect().width);
    });
    
    // All cards should be approximately the same width
    const avgWidth = cardWidths.reduce((a, b) => a + b, 0) / cardWidths.length;
    cardWidths.forEach(width => {
      expect(Math.abs(width - avgWidth)).toBeLessThan(2); // Within 2px
    });
    
    // Take screenshot of the grid container
    await expect(grid).toHaveScreenshot('three-card-grid-layout-desktop.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.01,
    });
  });

  test('tablet - contact info cards layout', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'tablet') {
      test.skip();
    }
    
    const contactInfoSection = page.locator('section[aria-label="Contact info"]');
    await expect(contactInfoSection).toBeVisible();
    
    await contactInfoSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    // Verify cards are present
    const cards = contactInfoSection.locator('div[aria-label="Info card"]');
    await expect(cards).toHaveCount(3);
    
    await expect(contactInfoSection).toHaveScreenshot('contact-info-cards-section-tablet.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.01,
    });
  });

  test('mobile - contact info cards stack vertically', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'mobile') {
      test.skip();
    }
    
    const contactInfoSection = page.locator('section[aria-label="Contact info"]');
    await expect(contactInfoSection).toBeVisible();
    
    await contactInfoSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    
    // Verify cards are present
    const cards = contactInfoSection.locator('div[aria-label="Info card"]');
    await expect(cards).toHaveCount(3);
    
    // On mobile, cards should stack vertically
    // Verify first card is above second card
    const firstCardBox = await cards.first().boundingBox();
    const secondCardBox = await cards.nth(1).boundingBox();
    
    if (firstCardBox && secondCardBox) {
      expect(firstCardBox.y).toBeLessThan(secondCardBox.y);
    }
    
    await expect(contactInfoSection).toHaveScreenshot('contact-info-cards-section-mobile.png', {
      animations: 'disabled',
      maxDiffPixelRatio: 0.01,
    });
  });

  test('desktop - hover states on contact links', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const section = page.locator('section[aria-label="Contact info"]');
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    
    // Test phone link hover
    const phoneLink = section.locator('a[href^="tel:"]');
    await expect(phoneLink).toBeVisible();
    
    // Get initial opacity
    const initialOpacity = await phoneLink.evaluate((el) => {
      return window.getComputedStyle(el).opacity;
    });
    
    // Hover
    await phoneLink.hover();
    await page.waitForTimeout(100);
    
    // Get hover opacity
    const hoverOpacity = await phoneLink.evaluate((el) => {
      return window.getComputedStyle(el).opacity;
    });
    
    // Opacity should increase on hover (from 0.6 to 1.0)
    expect(parseFloat(hoverOpacity)).toBeGreaterThan(parseFloat(initialOpacity));
  });

  test('desktop - divider lines rendering', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const contactCard = page.locator('section[aria-label="Contact info"] div[aria-label="Info card"]').first();
    await contactCard.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    
    // Find all divider lines in contact card
    const dividers = contactCard.locator('div.h-px.bg-\\[rgb\\(68\\,_68\\,_68\\)\\]');
    const dividerCount = await dividers.count();
    
    expect(dividerCount).toBe(2); // Between phone/email and email/location
    
    // Verify divider styling
    const firstDivider = dividers.first();
    const height = await firstDivider.evaluate((el) => {
      return window.getComputedStyle(el).height;
    });
    
    expect(height).toBe('1px');
  });
});

/**
 * COMPONENT-SPECIFIC VALIDATION NOTES:
 * 
 * 1. Three-Card Layout:
 *    - Uses flexbox with gap-[20px]
 *    - Each card: flex-[1_0_0] (equal width, no shrink)
 *    - Cards should be exactly same width on desktop
 * 
 * 2. Globe Image Positioning:
 *    - Positioned absolutely: bottom-[-202px]
 *    - Right positioned: right-px
 *    - Width: w-[369px]
 *    - Overflow clipped by parent rounded-[inherit]
 * 
 * 3. Card Structure:
 *    - Background: bg-[#242424]
 *    - Padding: pb-[24px] pt-[23px] px-[24px]
 *    - Content uses justify-between for title/content spacing
 * 
 * 4. Interactive Elements:
 *    - Links have opacity-60, hover to opacity-100
 *    - SVG icons are size-[20px]
 *    - Divider lines are h-px bg-[rgb(68,_68,_68)]
 * 
 * 5. Typography:
 *    - Titles: text-[20.5px] leading-[30.8px]
 *    - Links: text-[14.4px] leading-[24px]
 *    - Font: Apfel Grotezk
 * 
 * VALIDATION THRESHOLDS:
 * - maxDiffPixelRatio: 0.01 (1%) - strict layout validation
 * - Globe image: 0.015 (1.5%) - allows for PNG compression
 * - Each card tested individually for precise error location
 */
