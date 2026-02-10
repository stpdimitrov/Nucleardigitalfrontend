#!/bin/bash

##############################################################################
# Contact Info Cards Component Visual Test Runner
# 
# Focused test for the 3-card contact section component
##############################################################################

set -e

echo "🧪 Testing Contact Info Cards Component"
echo "========================================"
echo ""

# Check if dev server is running
if ! curl -s http://localhost:5173 > /dev/null; then
    echo "❌ Dev server not running on http://localhost:5173"
    echo "Please start it with: npm run dev"
    exit 1
fi

echo "✓ Dev server detected"
echo ""

# Run the specific component test
echo "Running visual regression tests for Contact Info Cards..."
echo ""

npx playwright test tests/visual/contact-info-cards.spec.ts "$@"

TEST_RESULT=$?

echo ""
if [ $TEST_RESULT -eq 0 ]; then
    echo "✅ Contact Info Cards component matches original!"
    echo ""
    echo "All tests passed:"
    echo "  ✓ Three-card layout"
    echo "  ✓ Contact Us card"
    echo "  ✓ Follow Us On card"
    echo "  ✓ Visit Our Office card with globe"
    echo "  ✓ Globe image rendering"
    echo "  ✓ Card spacing and alignment"
    echo "  ✓ Responsive layouts (mobile/tablet/desktop)"
else
    echo "❌ Visual differences detected in Contact Info Cards"
    echo ""
    echo "View detailed report:"
    echo "  npx playwright show-report"
    echo ""
    echo "Check specific failures:"
    echo "  - Card layout/spacing"
    echo "  - Globe image position"
    echo "  - Typography/colors"
    echo "  - Icon rendering"
fi

exit $TEST_RESULT
