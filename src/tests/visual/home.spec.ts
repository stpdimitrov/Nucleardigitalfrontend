import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests for Home Page
 * 
 * CRITICAL: These tests enforce pixel-perfect visual parity with the original
 * Framer website at https://primary-words-404174.framer.app/
 * 
 * Tests run at three breakpoints matching Framer's responsive design:
 * - Mobile: 390x844
 * - Tablet: 768x1024
 * - Desktop: 1440x900
 */

test.describe('Home Page - Visual Regression', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to home page
    await page.goto('/');
    
    // Wait for fonts to load
    await page.evaluate(() => document.fonts?.ready);
    
    // Wait for all images to load
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
    
    await expect(page).toHaveScreenshot('home-mobile.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('tablet viewport - full page snapshot', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'tablet') {
      test.skip();
    }
    
    await expect(page).toHaveScreenshot('home-tablet.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('desktop viewport - full page snapshot', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    await expect(page).toHaveScreenshot('home-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('hero section - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
    
    await expect(hero).toHaveScreenshot('hero-section-desktop.png', {
      animations: 'disabled',
    });
  });

  test('services section - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const servicesSection = page.locator('section').filter({ hasText: 'Our Services' }).first();
    await expect(servicesSection).toBeVisible();
    
    await servicesSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    
    await expect(servicesSection).toHaveScreenshot('services-section-desktop.png', {
      animations: 'disabled',
    });
  });

  test('projects section - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const projectsSection = page.locator('section').filter({ hasText: 'Featured Projects' }).first();
    await expect(projectsSection).toBeVisible();
    
    await projectsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    
    await expect(projectsSection).toHaveScreenshot('projects-section-desktop.png', {
      animations: 'disabled',
    });
  });

  test('testimonials section - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const testimonialsSection = page.locator('section').filter({ hasText: 'Testimonials' }).first();
    await expect(testimonialsSection).toBeVisible();
    
    await testimonialsSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    
    await expect(testimonialsSection).toHaveScreenshot('testimonials-section-desktop.png', {
      animations: 'disabled',
    });
  });

  test('pricing section - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') {
      test.skip();
    }
    
    const pricingSection = page.locator('section').filter({ hasText: 'Pricing' }).first();
    await expect(pricingSection).toBeVisible();
    
    await pricingSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    
    await expect(pricingSection).toHaveScreenshot('pricing-section-desktop.png', {
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
    
    await expect(ctaSection).toHaveScreenshot('cta-section-desktop.png', {
      animations: 'disabled',
    });
  });
});
