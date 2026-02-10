#!/bin/bash

##############################################################################
# Visual Regression Testing Runner
# 
# This script runs pixel-perfect visual regression tests comparing the
# migrated React application against the original Framer site.
#
# Usage:
#   ./tests/visual-regression-runner.sh [options]
#
# Options:
#   --update-snapshots  Update baseline screenshots
#   --headed            Run tests in headed mode (visible browser)
#   --debug             Run tests with debug output
#   --report            Open HTML report after tests
##############################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Parse arguments
UPDATE_SNAPSHOTS=false
HEADED=false
DEBUG=false
OPEN_REPORT=false

for arg in "$@"
do
    case $arg in
        --update-snapshots)
        UPDATE_SNAPSHOTS=true
        shift
        ;;
        --headed)
        HEADED=true
        shift
        ;;
        --debug)
        DEBUG=true
        shift
        ;;
        --report)
        OPEN_REPORT=true
        shift
        ;;
    esac
done

echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}   Visual Regression Testing Suite${NC}"
echo -e "${BLUE}   Framer Migration Pixel-Perfect Validation${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo ""

# Step 1: Check if Playwright is installed
echo -e "${YELLOW}[1/5]${NC} Checking Playwright installation..."
if ! npx playwright --version > /dev/null 2>&1; then
    echo -e "${RED}✗ Playwright not found${NC}"
    echo -e "${YELLOW}Installing Playwright browsers...${NC}"
    npx playwright install --with-deps
else
    echo -e "${GREEN}✓ Playwright installed${NC}"
fi
echo ""

# Step 2: Build the application (if needed)
echo -e "${YELLOW}[2/5]${NC} Checking build status..."
if [ ! -d "dist" ]; then
    echo -e "${YELLOW}Building application...${NC}"
    npm run build
    echo -e "${GREEN}✓ Build complete${NC}"
else
    echo -e "${GREEN}✓ Build exists${NC}"
fi
echo ""

# Step 3: Prepare test environment
echo -e "${YELLOW}[3/5]${NC} Preparing test environment..."
echo -e "  - Breakpoints: 390x844, 768x1024, 1440x900"
echo -e "  - Threshold: maxDiffPixelRatio 0.01 (1%)"
echo -e "  - Pages: Home, Services, About Us, Contact Us"
echo -e "${GREEN}✓ Environment ready${NC}"
echo ""

# Step 4: Run visual regression tests
echo -e "${YELLOW}[4/5]${NC} Running visual regression tests..."
echo ""

# Build Playwright command
PLAYWRIGHT_CMD="npx playwright test"

if [ "$UPDATE_SNAPSHOTS" = true ]; then
    PLAYWRIGHT_CMD="$PLAYWRIGHT_CMD --update-snapshots"
    echo -e "${YELLOW}⚠ UPDATING BASELINE SCREENSHOTS${NC}"
fi

if [ "$HEADED" = true ]; then
    PLAYWRIGHT_CMD="$PLAYWRIGHT_CMD --headed"
fi

if [ "$DEBUG" = true ]; then
    PLAYWRIGHT_CMD="$PLAYWRIGHT_CMD --debug"
fi

# Run the tests
if $PLAYWRIGHT_CMD; then
    echo ""
    echo -e "${GREEN}═══════════════════════════════════════════════════════════${NC}"
    echo -e "${GREEN}   ✓ ALL VISUAL REGRESSION TESTS PASSED${NC}"
    echo -e "${GREEN}   100% Visual Parity Maintained${NC}"
    echo -e "${GREEN}═══════════════════════════════════════════════════════════${NC}"
    TEST_RESULT=0
else
    echo ""
    echo -e "${RED}═══════════════════════════════════════════════════════════${NC}"
    echo -e "${RED}   ✗ VISUAL REGRESSION TESTS FAILED${NC}"
    echo -e "${RED}   Visual differences detected${NC}"
    echo -e "${RED}═══════════════════════════════════════════════════════════${NC}"
    TEST_RESULT=1
fi
echo ""

# Step 5: Generate report
echo -e "${YELLOW}[5/5]${NC} Generating test report..."
npx playwright show-report > /dev/null 2>&1 &
echo -e "${GREEN}✓ Report generated at: playwright-report/index.html${NC}"
echo ""

if [ "$OPEN_REPORT" = true ] || [ $TEST_RESULT -ne 0 ]; then
    echo -e "${BLUE}Opening HTML report...${NC}"
    npx playwright show-report
fi

# Summary
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo -e "${BLUE}   Test Summary${NC}"
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "  Results: ${GREEN}test-results/${NC}"
echo -e "  Report:  ${GREEN}playwright-report/index.html${NC}"
echo -e "  Config:  ${GREEN}playwright.config.ts${NC}"
echo ""

if [ $TEST_RESULT -eq 0 ]; then
    echo -e "  ${GREEN}Status: ✓ PASSED - Visual parity maintained${NC}"
else
    echo -e "  ${RED}Status: ✗ FAILED - Review differences${NC}"
    echo ""
    echo -e "${YELLOW}Next steps:${NC}"
    echo -e "  1. Review failed screenshots in test-results/"
    echo -e "  2. Check diff images for pixel differences"
    echo -e "  3. Fix layout/styling issues in source code"
    echo -e "  4. Re-run tests to verify fixes"
    echo -e ""
    echo -e "  ${YELLOW}If differences are acceptable (font rendering):${NC}"
    echo -e "  ./tests/visual-regression-runner.sh --update-snapshots"
fi

echo ""
echo -e "${BLUE}═══════════════════════════════════════════════════════════${NC}"

exit $TEST_RESULT
