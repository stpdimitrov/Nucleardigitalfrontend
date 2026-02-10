import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests for About Us Page
 * 
 * CRITICAL: These tests enforce pixel-perfect visual parity with the original
 * Framer website at https://primary-words-404174.framer.app/about-us
 * 
 * Tests run at three breakpoints matching Framer's responsive design:
 * - Mobile: 390x844 (nfhrb4/hfqtg1)
 * - Tablet: 768x1024 (1s8hhl0/1qrwxj9)  
 * - Desktop: 1440x900 (hlnx5q/ni78y7)
 */

test.describe('About Us Page - Visual Regression', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to About Us page
    await page.goto('/about-us');
    
    // Wait for fonts to load - critical for text rendering consistency
    await page.evaluate(() => document.fonts?.ready);
    
    // Wait for Framer animations to initialize
    // The animator script needs time to set up appear effects
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
    // Only run on mobile project
    if (testInfo.project.name !== 'mobile') {
      test.skip();
    }
    
    // Verify critical elements are visible
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('h1:has-text("About us")')).toBeVisible();
    
    // Take full page screenshot
    await expect(page).toHaveScreenshot('about-us-mobile.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('tablet viewport - full page snapshot', async ({ page }, testInfo) => {
    // Only run on tablet project
    if (testInfo.project.name !== 'tablet') {
      test.skip();
    }
    
    // Verify critical elements are visible
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('h1:has-text("About us")')).toBeVisible();
    
    // Take full page screenshot
    await expect(page).toHaveScreenshot('about-us-tablet.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('desktop viewport - full page snapshot', async ({ page }, testInfo) => {
    // Only run on desktop project
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    // Verify critical elements are visible
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('h1:has-text("About us")')).toBeVisible();
    
    // Take full page screenshot
    await expect(page).toHaveScreenshot('about-us-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('hero section - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const hero = page.locator('header[class*="framer-1dcdxjo"]');
    await expect(hero).toBeVisible();
    
    // Verify hero text elements
    await expect(hero.locator('h1:has-text("About us")')).toBeVisible();
    await expect(hero.locator('p:has-text("Trusted by industry leaders")')).toBeVisible();
    
    await expect(hero).toHaveScreenshot('hero-section-desktop.png', {
      animations: 'disabled',
    });
  });

  test('team section - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const teamSection = page.locator('section[class*="framer-9kjehk"]');
    await expect(teamSection).toBeVisible();
    
    // Verify team cards are rendered
    const teamCards = teamSection.locator('[data-framer-name="Team card"]');
    await expect(teamCards.first()).toBeVisible();
    
    await expect(teamSection).toHaveScreenshot('team-section-desktop.png', {
      animations: 'disabled',
    });
  });

  test('awards section - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const awardsSection = page.locator('section[class*="framer-1cxek4x"]');
    await expect(awardsSection).toBeVisible();
    
    // Verify awards content
    await expect(awardsSection.locator('h2:has-text("Our Achievements")')).toBeVisible();
    
    await expect(awardsSection).toHaveScreenshot('awards-section-desktop.png', {
      animations: 'disabled',
    });
  });

  test('responsive navbar rendering', async ({ page }, testInfo) => {
    const navbar = page.locator('nav[class*="framer-m9aWf"]');
    await expect(navbar).toBeVisible();
    
    // Verify logo
    await expect(navbar.locator('a[data-framer-name="Logo"]')).toBeVisible();
    
    // Check menu button visibility based on breakpoint
    const menuButton = navbar.locator('[data-framer-name="Menu button"]');
    
    if (testInfo.project.name === 'desktop') {
      // Desktop may have different menu structure
      await expect(navbar).toHaveScreenshot(`navbar-${testInfo.project.name}.png`);
    } else {
      // Mobile/tablet should have menu button
      await expect(menuButton).toBeVisible();
      await expect(navbar).toHaveScreenshot(`navbar-${testInfo.project.name}.png`);
    }
  });

  test('footer rendering consistency', async ({ page }, testInfo) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Scroll to footer
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    
    // Verify footer sections
    await expect(footer.locator('text=Main Pages')).toBeVisible();
    await expect(footer.locator('text=CMS Pages')).toBeVisible();
    await expect(footer.locator('text=Follow us on')).toBeVisible();
    await expect(footer.locator('text=Flixen ™. All rights reserved.')).toBeVisible();
    
    await expect(footer).toHaveScreenshot(`footer-${testInfo.project.name}.png`, {
      animations: 'disabled',
    });
  });

  test('scroll behavior and layout stability', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    // Take snapshot at top
    await expect(page).toHaveScreenshot('scroll-top.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1440, height: 900 }
    });
    
    // Scroll to middle
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight / 2));
    await page.waitForTimeout(200);
    
    await expect(page).toHaveScreenshot('scroll-middle.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1440, height: 900 }
    });
    
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await page.waitForTimeout(200);
    
    await expect(page).toHaveScreenshot('scroll-bottom.png', {
      fullPage: false,
      clip: { x: 0, y: 0, width: 1440, height: 900 }
    });
  });

  test('link navigation verification', async ({ page }) => {
    // Verify internal links use proper routing (not full page reload)
    
    // Click on a link to services
    const servicesLink = page.locator('a[href*="services"]').first();
    await servicesLink.click();
    
    // Should navigate without reload
    await expect(page).toHaveURL(/\/services/);
    
    // Navigate back
    await page.goBack();
    await expect(page).toHaveURL(/\/about-us/);
    
    // Verify state is preserved (no flash of unstyled content)
    await expect(page.locator('h1:has-text("About us")')).toBeVisible();
  });
});

/**
 * THRESHOLD JUSTIFICATION:
 * 
 * maxDiffPixelRatio: 0.01 (1%)
 * - Accounts for sub-pixel anti-aliasing differences across OS
 * - Framer uses custom fonts (Ronzino) with specific rendering hints
 * - Font anti-aliasing varies between macOS, Windows, Linux
 * - 1% threshold allows for minor rendering differences while catching layout shifts
 * 
 * threshold: 0.1 (10% per-pixel color diff)
 * - Allows for slight color anti-aliasing at edges
 * - Catches actual color/style changes while ignoring rendering artifacts
 * - Framer's blur effects and backdrop-filter may render slightly differently
 * 
 * If tests fail with <1% difference, it's likely:
 * 1. Font not loaded properly
 * 2. Animation still running
 * 3. Image not fully rendered
 * 4. CSS variable not applied
 * 
 * DO NOT increase thresholds to pass tests - fix the root cause.
 */
