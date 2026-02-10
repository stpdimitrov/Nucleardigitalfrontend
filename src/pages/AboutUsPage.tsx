import Component1920WLight, { 
  HeroSection, 
  VideoSection, 
  AwardsSection, 
  CTASection, 
  FooterSection 
} from '../imports/1920WLight-111-1387';
import OurTeamSection from '../imports/OurTeam';

/**
 * AboutUsPage - 100% Pixel-Perfect Framer Migration
 * 
 * This is a DOM-preserving HTML → JSX transpilation where:
 * - Every HTML element exists in JSX with same nesting depth
 * - Same order, same class names, same inline styles  
 * - Same data attributes, same Framer motion wrappers
 * - Uses react-router-dom for routing functionality
 * 
 * Visual regression tests enforce 100% visual fidelity at:
 * - Mobile (390x844)
 * - Tablet (768x1024)  
 * - Desktop (1440x900)
 * 
 * REFACTORED: Broken down into independently selectable components
 * - HeroSection: Title and intro content
 * - OurTeamSection: Team member cards
 * - VideoSection: Video showcase
 * - AwardsSection: Awards and recognition
 * - CTASection: Call-to-action with stats
 * - FooterSection: Footer content
 */

export function AboutUsPage() {
  return (
    <div className="bg-black flex flex-col min-h-screen relative w-full">
      <HeroSection />
      <OurTeamSection />
      <VideoSection />
      <AwardsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}