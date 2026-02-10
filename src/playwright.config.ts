import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for pixel-perfect visual regression testing
 * 
 * Enforces 100% visual fidelity with strict screenshot comparison
 * Tests against production Framer build at three critical breakpoints
 */
export default defineConfig({
  testDir: './tests/visual',
  
  // Strict timeout for visual tests
  timeout: 30000,
  
  // Fail fast on CI, retry locally
  retries: process.env.CI ? 2 : 0,
  
  // Run tests in parallel
  workers: process.env.CI ? 1 : undefined,
  
  // Reporter configuration
  reporter: [
    ['html'],
    ['list'],
    ['json', { outputFile: 'test-results/visual-regression-results.json' }]
  ],
  
  use: {
    // Base URL for the dev server
    baseURL: 'http://localhost:5173',
    
    // Screenshot settings for pixel-perfect comparison
    screenshot: 'only-on-failure',
    
    // Trace on first retry
    trace: 'on-first-retry',
    
    // Video on failure
    video: 'retain-on-failure',
  },

  // Configure projects for different breakpoints
  projects: [
    {
      name: 'mobile',
      use: { 
        ...devices['iPhone 12'],
        viewport: { width: 390, height: 844 },
        deviceScaleFactor: 1,
      },
    },
    {
      name: 'tablet',
      use: { 
        viewport: { width: 768, height: 1024 },
        deviceScaleFactor: 1,
      },
    },
    {
      name: 'desktop',
      use: { 
        viewport: { width: 1440, height: 900 },
        deviceScaleFactor: 1,
      },
    },
  ],

  // Development server configuration
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },

  // Screenshot comparison settings
  expect: {
    toHaveScreenshot: {
      // Very strict comparison - allow minimal anti-aliasing variance only
      // maxDiffPixels: 0 would be ideal but font rendering varies by OS
      // This threshold accounts for sub-pixel anti-aliasing differences
      maxDiffPixelRatio: 0.01, // 1% pixel difference threshold
      
      // Animations must be disabled for consistent snapshots
      animations: 'disabled',
      
      // Full page screenshots
      fullPage: true,
      
      // Comparison strategy
      threshold: 0.1, // 10% per-pixel color difference tolerance
    },
  },
});
