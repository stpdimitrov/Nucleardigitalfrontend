import {
  EditableText,
  EditableImage,
  EditableLink,
  EditableTeamSection,
  EditableAwardsContainer,
  EditableStorySection,
  EditableOverlay,
  EditableSection,
  type TeamMember,
  useCMSStore,
} from '../src/cms';
import imgCoverImage from "figma:asset/738c1c6b3be0ed43dbe8bb635d38249d662af9dc.png";
import imgImage01 from "figma:asset/22c6d322b798c1239707ba80c7d1773d257413b9.png";
import imgImage02 from "figma:asset/64104bdaf781a9a828a362ea1cd947edc85a971e.png";
import imgProfileImage from "figma:asset/c974f57a6fa51c7d3af1193130ada91836aed5f3.png";
import imgProfileImage1 from "figma:asset/501935f93877b31074a2af14092b441b87f633c8.png";
import imgProfileImage2 from "figma:asset/ded83a73b49789b68af85c0612dfbe33c99b01e8.png";
import imgProfileImage3 from "figma:asset/bf43cf518b04b120fbd2b9523cdd7e612ddfd875.png";
import imgProfileImage4 from "figma:asset/e427903404bbb36b3dd77f7ff9d14762c9fdbc72.png";
import imgProfileImage5 from "figma:asset/e6b888f6921111bc33485c6597979941b4748289.png";
import imgXmNDt2JWd6Z1ApLfBpTfkZwfp90Mp4 from "figma:asset/3d937a7d755ee480612b8b26f0f1e7f78875a0da.png";
import imgDesktop from "figma:asset/440a9540a3ca269479ea831effae21961445d048.png";
import svgPaths from "../imports/svg-oba3n6vetg";

/**
 * AboutUsPage - 100% Pixel-Perfect with Full CMS Integration
 * 
 * Every element is editable when edit mode is enabled (Cmd+E)
 * Visual design remains 100% identical to original
 */

// Default team members
const defaultTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Liam Carter',
    role: 'Creative Director',
    image: imgProfileImage,
    twitter: 'https://x.com/home',
    dribbble: 'https://dribbble.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    id: '2',
    name: 'Noah Reed',
    role: 'Senior Videographer',
    image: imgProfileImage1,
    twitter: 'https://x.com/home',
    dribbble: 'https://dribbble.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    id: '3',
    name: 'Ava Mitchell',
    role: 'Editor & Colorist',
    image: imgProfileImage2,
    twitter: 'https://x.com/home',
    dribbble: 'https://dribbble.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    id: '4',
    name: 'Ethan Brooks',
    role: 'Motion Designer',
    image: imgProfileImage3,
    twitter: 'https://x.com/home',
    dribbble: 'https://dribbble.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    id: '5',
    name: 'Sophia Bennett',
    role: 'Production Manager',
    image: imgProfileImage4,
    twitter: 'https://x.com/home',
    dribbble: 'https://dribbble.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    id: '6',
    name: 'Mason Price',
    role: 'Sound Designer',
    image: imgProfileImage5,
    twitter: 'https://x.com/home',
    dribbble: 'https://dribbble.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
  },
];

/**
 * Editable Hero Section - 100% Visually Identical
 */
function EditableHeroSection() {
  const { isEditMode, getContent, updateContent, persistContent } = useCMSStore();
  const coverScale = parseFloat(getContent('about.hero.coverImageScale', '1')) || 1;
  
  return (
    <div className="content-stretch flex items-center justify-center pb-[48px] md:pb-[72px] pt-[80px] md:pt-[100px] px-[16px] md:px-[60px] lg:px-[100px] xl:px-[140px] 2xl:px-[340px] relative w-full" data-name="Hero section">
      <div className="content-stretch flex flex-col gap-[40px] md:gap-[64px] items-center max-w-[1240px] overflow-clip relative shrink-0 w-full" data-name="Container">
        
        {/* Grid 6x - Header with Title */}
        <div className="flex flex-col md:flex-row gap-[8px] items-start md:items-end justify-center overflow-clip relative shrink-0 w-full" data-name="Grid 6x">
          {/* Left spacer - 2020-2025 — hidden on mobile */}
          <div className="hidden md:flex flex-col gap-[23.59px] items-start overflow-clip relative shrink-0 w-[200px] lg:w-[392px]" data-name="Users wrapper">
            <div className="blur-[2px] h-[62px] w-full" data-name="2020-2025" />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
              <EditableText
                contentKey="about.hero.yearsLabel"
                defaultValue="<div class='flex flex-col font-[&quot;Inter:Medium&quot;,sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[13.1px] tracking-[-0.16px] uppercase whitespace-nowrap'><p class='leading-[22.4px]'>2020-2025</p></div>"
                as="div"
                className=""
              />
            </div>
          </div>

          {/* Center - Title and Description (EDITABLE) */}
          <div className="content-stretch flex flex-1 flex-col gap-[8px] items-start overflow-clip relative w-full" data-name="Text wrapper">
            {/* Title: "About us" */}
            <div className="content-stretch flex gap-[13.46px] items-start relative shrink-0 w-full" data-name="h1.framer-text">
              <div className="blur-[2px] content-stretch flex items-start relative shrink-0">
                <EditableText
                  contentKey="about.hero.title.part1"
                  defaultValue="<div class='flex flex-col font-[&quot;Inter:Medium&quot;,sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[56px] text-white tracking-[-1.8px] whitespace-nowrap'><p class='leading-[63px]'>About</p></div>"
                  as="div"
                  className=""
                />
              </div>
              <div className="blur-[0px] content-stretch flex items-start relative shrink-0">
                <EditableText
                  contentKey="about.hero.title.part2"
                  defaultValue="<div class='flex flex-col font-[&quot;Inter:Medium&quot;,sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[56px] text-white tracking-[-1.8px] whitespace-nowrap'><p class='leading-[63px]'>us</p></div>"
                  as="div"
                  className=""
                />
              </div>
            </div>
            {/* Description */}
            <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="p.framer-text">
              <EditableText
                contentKey="about.hero.description"
                defaultValue="<div class='flex flex-col font-[&quot;Inter:Medium&quot;,sans-serif] font-medium justify-center leading-[27px] not-italic relative shrink-0 text-[#ddd] text-[16.3px] w-full whitespace-pre-wrap'><p class='mb-0'>We're a creative video agency crafting stories that </p><p>inspire, engage, & elevate brands globally.</p></div>"
                as="div"
                className=""
                multiline
              />
            </div>
          </div>

          {/* Right - Scroll Down — hidden on mobile */}
          <div className="hidden md:flex gap-[4px] h-[22.41px] items-center justify-end overflow-clip pb-px relative shrink-0" data-name="Scroll down → Scroll down">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-1lpeffq">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                <EditableText
                  contentKey="about.hero.scrollDown"
                  defaultValue="<div class='flex flex-col font-[&quot;Inter:Medium&quot;,sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap'><p class='leading-[22.4px]'>Scroll down</p></div>"
                  as="div"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative shrink-0 w-full" data-name="Cover image">
          {isEditMode && (
            <div style={{
              position: 'absolute', top: 8, right: 8, zIndex: 50,
              background: 'rgba(0,0,0,0.75)', borderRadius: 8, padding: '8px 12px',
              display: 'flex', alignItems: 'center', gap: 10, backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}>
              <span style={{ color: '#fff', fontSize: 11, fontFamily: 'sans-serif', whiteSpace: 'nowrap' }}>
                Height {Math.round(coverScale * 100)}%
              </span>
              <input
                type="range" min="0.3" max="2" step="0.05"
                value={coverScale}
                onChange={e => updateContent('about.hero.coverImageScale', e.target.value)}
                onMouseUp={() => persistContent()}
                onTouchEnd={() => persistContent()}
                style={{ width: 100, accentColor: '#0099FF', cursor: 'pointer' }}
              />
            </div>
          )}
          <div
            className="overflow-clip w-full"
            style={{ height: `clamp(${Math.round(200 * coverScale)}px, ${(53.2 * coverScale).toFixed(2)}vw, ${Math.round(660 * coverScale)}px)` }}
          >
            <div className={`absolute inset-0 overflow-hidden ${isEditMode ? '' : 'pointer-events-none'}`}>
              <EditableImage
                contentKey="about.hero.coverImage"
                defaultSrc={imgCoverImage}
                alt=""
                className="absolute h-[180.61%] left-0 max-w-none top-[-40.3%] w-full"
              />
            </div>
          </div>
        </div>

        {/* Wrapper - Story rows (EDITABLE with CRUD) */}
        <div className="content-stretch flex flex-col gap-[0px] items-center justify-center relative shrink-0 w-full" data-name="Wrapper">
          <EditableStorySection />
        </div>

        {/* Grid 2x - Images */}
        <div className="content-stretch flex flex-col md:flex-row gap-[24px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Grid 2x">
          <div className="w-full md:flex-[1_0_0] overflow-clip relative" style={{ height: 'clamp(220px, 37.9vw, 470px)' }} data-name="Image 01">
            <div className={`absolute inset-0 overflow-hidden ${isEditMode ? '' : 'pointer-events-none'}`}>
              <EditableImage
                contentKey="about.hero.image01"
                defaultSrc={imgImage01}
                alt=""
                className="absolute h-[124.26%] left-0 max-w-none top-[-12.13%] w-full"
              />
            </div>
          </div>
          <div className="w-full md:flex-[1_0_0] overflow-clip relative" style={{ height: 'clamp(220px, 37.9vw, 470px)' }} data-name="Image 02">
            <div className={`absolute inset-0 overflow-hidden ${isEditMode ? '' : 'pointer-events-none'}`}>
              <EditableImage
                contentKey="about.hero.image02"
                defaultSrc={imgImage02}
                alt=""
                className="absolute h-[124.26%] left-0 max-w-none top-[-12.13%] w-full"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/**
 * Editable Video Section - 100% Visually Identical
 */
function EditableVideoSection() {
  const { isEditMode } = useCMSStore();
  
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative w-full" style={{ height: 'clamp(400px, 96.8vw, 1200px)' }} data-name="Video">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="xmNDt2jWD6z1ApLfBpTfkZwfp90.mp4">
        <div className={`absolute inset-0 overflow-hidden ${isEditMode ? '' : 'pointer-events-none'}`}>
          <EditableImage
            contentKey="about.video.thumbnail"
            defaultSrc={imgXmNDt2JWd6Z1ApLfBpTfkZwfp90Mp4}
            alt=""
            className="absolute h-[160%] left-0 max-w-none top-[-30%] w-full"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Editable Awards Section - Uses existing Container3 with CMS wrapper
 */
function EditableAwardsSection() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] md:px-[60px] lg:px-[100px] xl:px-[140px] 2xl:px-[340px] py-[100px] relative w-full" data-name="Awards">
      <EditableAwardsContainer />
    </div>
  );
}

/**
 * Editable CTA Section - 100% Visually Identical
 */
function EditableCTASection() {
  const { isEditMode } = useCMSStore();
  
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative w-full" style={{ height: 'clamp(400px, 96.8vw, 1200px)' }} data-name="div.framer-18y2yvd-container">
      <div className="content-stretch flex items-center justify-center overflow-clip pb-[463.18px] pt-[463.19px] relative shrink-0 w-full" data-name="Desktop">
        <div className={`absolute inset-0 overflow-hidden ${isEditMode ? '' : 'pointer-events-none'}`}>
          <EditableImage
            contentKey="about.cta.bgImage"
            defaultSrc={imgDesktop}
            alt=""
            className="absolute h-[160%] left-0 max-w-none top-[-30%] w-full"
          />
        </div>
        <EditableOverlay
          contentKey="about.cta"
          defaultOpacity={30}
          defaultColor="#000000"
          className="inset-[0_0_0.02%_0]"
        >
          <div className="content-stretch flex items-center justify-center w-full max-w-[1240px] overflow-clip px-6 relative shrink-0" data-name="Container">
            <div className="content-stretch flex flex-col gap-[22.9px] items-center justify-center w-full max-w-[790px] overflow-clip relative shrink-0 px-2" data-name="Wrapper">
              {/* Section Tag */}
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Section tag">
                <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0" data-name="Section tag">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <EditableText
                        contentKey="about.cta.sectionTag"
                        defaultValue="<div class='flex flex-col font-[&quot;Inter:Medium&quot;,sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap'><p class='leading-[22.4px]'>Lets work together</p></div>"
                        as="div"
                        className=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Headline */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-sfb8j">
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2.framer-text">
                  <EditableText
                    contentKey="about.cta.headline"
                    defaultValue="<div class='flex flex-col font-[&quot;Inter:Medium&quot;,sans-serif] font-medium justify-center leading-[50.4px] not-italic relative shrink-0 text-[45.4px] text-center text-white tracking-[-1.44px] whitespace-nowrap'><p class='mb-0'>Ready to bring your vision to life?</p><p class='mb-0'>Let's create stunning visuals that</p><p>captivate, inspire, and deliver results.</p></div>"
                    as="div"
                    className=""
                    multiline
                  />
                </div>
              </div>

              {/* Button */}
              <div className="content-stretch flex items-center justify-center pt-[9.1px] relative shrink-0 w-full" data-name="Button wrapper">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
                  <EditableLink
                    contentKey="about.cta.buttonLink"
                    defaultValue="https://primary-words-404174.framer.app/contact-us"
                    className="bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center overflow-clip pl-[16px] pr-[6px] py-[6px] relative rounded-[1000px] shrink-0"
                    data-name="Small"
                  >
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                        <EditableText
                          contentKey="about.cta.buttonText"
                          defaultValue="<div class='flex flex-col font-[&quot;Inter:Medium&quot;,sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap' role='link' tabIndex='0'><p class='cursor-pointer leading-[22.4px]'>contact us</p></div>"
                          as="div"
                          className=""
                        />
                      </div>
                    </div>
                    <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-name="Icon wrapper">
                      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icons">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]" data-name="Icon:mask">
                          <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 4">
                            <div className="relative shrink-0 size-[15px]" data-name="Component 1">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                <g id="Component 1">
                                  <path d={svgPaths.pb055200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[15px] top-1/2" data-name="Icon" />
                      </div>
                    </div>
                  </EditableLink>
                </div>
              </div>
            </div>
          </div>
        </EditableOverlay>
      </div>
    </div>
  );
}

export function AboutUsPage() {
  return (
    <div className="bg-black flex flex-col min-h-screen relative w-full">
      <EditableSection sectionId="about.hero" label="Hero"><EditableHeroSection /></EditableSection>
      <EditableSection sectionId="about.team" label="Team"><EditableTeamSection defaultMembers={defaultTeamMembers} /></EditableSection>
      <EditableSection sectionId="about.video" label="Video"><EditableVideoSection /></EditableSection>
      <EditableSection sectionId="about.awards" label="Awards"><EditableAwardsSection /></EditableSection>
      <EditableSection sectionId="about.cta" label="CTA"><EditableCTASection /></EditableSection>
    </div>
  );
}