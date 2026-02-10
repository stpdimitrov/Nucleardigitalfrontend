import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests for Services Page
 * 
 * CRITICAL: These tests enforce pixel-perfect visual parity with the original
 * Framer website at https://primary-words-404174.framer.app/services
 */

test.describe('Services Page - Visual Regression', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/services');
    await page.evaluate(() => document.fonts?.ready);
    await page.waitForLoadState('load');
    await page.waitForTimeout(300);
    
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
    
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(200);
  });

  test('mobile viewport - full page snapshot', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'mobile') test.skip();
    
    await expect(page).toHaveScreenshot('services-mobile.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('tablet viewport - full page snapshot', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'tablet') test.skip();
    
    await expect(page).toHaveScreenshot('services-tablet.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('desktop viewport - full page snapshot', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') test.skip();
    
    await expect(page).toHaveScreenshot('services-desktop.png', {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('hero section - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') test.skip();
    
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
    
    await expect(hero).toHaveScreenshot('services-hero-desktop.png', {
      animations: 'disabled',
    });
  });

  test('services grid - desktop', async ({ page }, testInfo) => {
    if (testInfo.project.name !== 'desktop') test.skip();
    
    const servicesGrid = page.locator('section').nth(1);
    await expect(servicesGrid).toBeVisible();
    
    await servicesGrid.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    
    await expect(servicesGrid).toHaveScreenshot('services-grid-desktop.png', {
      animations: 'disabled',
    });
  });
});
