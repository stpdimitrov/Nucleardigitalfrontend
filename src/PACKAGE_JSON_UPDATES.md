# Package.json Updates for Visual Regression Testing

Add these updates to your `package.json` file at the project root:

## 1. Add Playwright as Dev Dependency

```json
{
  "devDependencies": {
    "@playwright/test": "^1.41.0"
  }
}
```

## 2. Add Test Scripts

```json
{
  "scripts": {
    "test:visual": "playwright test",
    "test:visual:update": "playwright test --update-snapshots",
    "test:visual:ui": "playwright test --ui",
    "test:visual:debug": "playwright test --debug",
    "test:visual:report": "playwright show-report"
  }
}
```

## 3. Full Example

```json
{
  "name": "newclear-digital",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test:visual": "playwright test",
    "test:visual:update": "playwright test --update-snapshots",
    "test:visual:ui": "playwright test --ui",
    "test:visual:debug": "playwright test --debug",
    "test:visual:report": "playwright show-report"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.0",
    "motion": "^10.16.0"
  },
  "devDependencies": {
    "@playwright/test": "^1.41.0",
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@typescript-eslint/eslint-plugin": "^6.14.0",
    "@typescript-eslint/parser": "^6.14.0",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.55.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "typescript": "^5.2.2",
    "vite": "^5.0.8"
  }
}
```

## 4. Installation Command

After updating package.json, run:

```bash
npm install
```

Then install Playwright browsers:

```bash
npx playwright install
```

## 5. Usage

### Run visual tests
```bash
npm run test:visual
```

### Update baseline snapshots (first run)
```bash
npm run test:visual:update
```

### Run with UI mode (recommended for development)
```bash
npm run test:visual:ui
```

### Debug failing tests
```bash
npm run test:visual:debug
```

### View test report
```bash
npm run test:visual:report
```

## 6. CI/CD Integration

For GitHub Actions, add `.github/workflows/visual-tests.yml`:

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
```

## 7. Gitignore Updates

Add to `.gitignore`:

```
# Playwright
/test-results/
/playwright-report/
/playwright/.cache/
```

## 8. Baseline Snapshots

Baseline snapshots will be stored in:
```
tests/visual/about-us.spec.ts-snapshots/
├── about-us-desktop-chromium-darwin.png
├── about-us-mobile-chromium-darwin.png
├── about-us-tablet-chromium-darwin.png
└── ... (other test snapshots)
```

**IMPORTANT**: Commit baseline snapshots to version control so CI can compare against them.

## 9. First Run Workflow

1. Update package.json with scripts and dependencies
2. Run `npm install`
3. Run `npx playwright install`
4. Start dev server: `npm run dev`
5. Generate baseline snapshots: `npm run test:visual:update`
6. Verify snapshots look correct
7. Commit snapshots to git
8. Future runs will compare against these baselines

## 10. Troubleshooting

**Test fails with "page.goto: Navigation timeout"**
- Ensure dev server is running on port 5173
- Or update `webServer` config in playwright.config.ts

**Snapshots differ between machines**
- Different OS renders fonts differently
- CI should use same OS as baseline generation
- Consider using Docker for consistent rendering

**Tests are flaky**
- Increase wait times in test
- Ensure animations are fully disabled
- Check for dynamic timestamps or random content
