import { Link } from 'react-router';
import svgPaths from "./svg-oba3n6vetg";

// Arrow icon component for the Contact Us button
function Component44() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Component 1">
          <path d={svgPaths.pb055200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Component43() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 4">
      <Component44 />
    </div>
  );
}

function IconMask3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]" data-name="Icon:mask">
      <Component43 />
    </div>
  );
}

function Icons1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="Icons">
      <IconMask3 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[15px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-name="Icon wrapper">
      <Icons1 />
    </div>
  );
}

export default function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-full" data-name="Container">
      {/* Header Section */}
      <div className="flex items-start justify-between relative w-full" data-name="Grid 6x">
        {/* Left: Section Tag */}
        <div className="flex flex-col items-start" data-name="Section tag">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22.4px] text-[14px] text-white tracking-[-0.16px] uppercase">
            AWARDS & RECOGNITIONS
          </p>
        </div>

        {/* Center: Title and Description */}
        <div className="flex flex-col items-start gap-[8px] flex-1 px-[60px]" data-name="Text">
          <h2 className="font-['Inter:Medium',sans-serif] font-medium leading-[50.4px] text-[45px] text-white tracking-[-1.44px]">
            Our Achievements
          </h2>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] opacity-70 text-[#ddd] text-[14px] tracking-[-0.32px]">
            Proudly recognized for creativity, innovation, and excellence in delivering outstanding video experiences.
          </p>
        </div>

        {/* Right: Contact Button */}
        <Link 
          to="/contact-us"
          className="bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center overflow-clip pl-[16px] pr-[6px] py-[6px] rounded-[1000px] shrink-0" 
          data-name="Button → Small"
        >
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22.4px] text-[14px] text-black tracking-[-0.16px] uppercase">
            CONTACT US
          </p>
          <IconWrapper2 />
        </Link>
      </div>

      {/* Awards Table */}
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Wrapper">
        {/* Table Header */}
        <div className="content-stretch flex gap-[32px] items-start justify-start border-b border-solid border-[#444] pb-[22px] relative shrink-0 w-full" data-name="Grid 6x">
          <div className="flex-[0_0_280px]">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]">
              Awwwards:
            </p>
          </div>
          <div className="flex-[1_1_0]">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]">
              Description:
            </p>
          </div>
          <div className="flex-[0_0_100px] text-right">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]">
              Year:
            </p>
          </div>
        </div>

        {/* Award Row 1 */}
        <div className="content-stretch flex gap-[32px] items-start justify-start border-b border-solid border-[rgba(255,255,255,0.3)] py-[32px] relative shrink-0 w-full" data-name="Awards → Desktop">
          <div className="flex-[0_0_280px]">
            <h3 className="font-['Inter:Medium',sans-serif] font-medium leading-[30.8px] text-[21px] text-white tracking-[-0.44px]">
              Best Creative Video Agency
            </h3>
          </div>
          <div className="flex-[1_1_0] opacity-80">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]">
              Recognized for producing visually stunning, story-driven videos that inspire audiences and set new creative standards in modern cinematic production.
            </p>
          </div>
          <div className="flex-[0_0_100px] text-right">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]">
              2025
            </p>
          </div>
        </div>

        {/* Award Row 2 */}
        <div className="content-stretch flex gap-[32px] items-start justify-start border-b border-solid border-[rgba(255,255,255,0.3)] py-[32px] relative shrink-0 w-full" data-name="Awards → Desktop">
          <div className="flex-[0_0_280px]">
            <h3 className="font-['Inter:Medium',sans-serif] font-medium leading-[30.8px] text-[21px] text-white tracking-[-0.44px]">
              Excellence in Cinematic Production
            </h3>
          </div>
          <div className="flex-[1_1_0] opacity-80">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]">
              Awarded for exceptional craftsmanship, direction, and storytelling that blend creativity and precision to deliver unforgettable cinematic brand experiences.
            </p>
          </div>
          <div className="flex-[0_0_100px] text-right">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]">
              2024
            </p>
          </div>
        </div>

        {/* Award Row 3 */}
        <div className="content-stretch flex gap-[32px] items-start justify-start border-b border-solid border-[rgba(255,255,255,0.3)] py-[32px] relative shrink-0 w-full" data-name="Awards → Desktop">
          <div className="flex-[0_0_280px]">
            <h3 className="font-['Inter:Medium',sans-serif] font-medium leading-[30.8px] text-[21px] text-white tracking-[-0.44px]">
              Innovation in Visual Storytelling
            </h3>
          </div>
          <div className="flex-[1_1_0] opacity-80">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]">
              Honored for redefining visual storytelling through innovative ideas, artistic direction, and emotional depth that connect audiences with every frame.
            </p>
          </div>
          <div className="flex-[0_0_100px] text-right">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]">
              2023
            </p>
          </div>
        </div>

        {/* Award Row 4 */}
        <div className="content-stretch flex gap-[32px] items-start justify-start border-b border-solid border-[rgba(255,255,255,0.3)] py-[32px] relative shrink-0 w-full" data-name="Awards → Desktop">
          <div className="flex-[0_0_280px]">
            <h3 className="font-['Inter:Medium',sans-serif] font-medium leading-[30.8px] text-[21px] text-white tracking-[-0.44px]">
              Outstanding Brand Film Award
            </h3>
          </div>
          <div className="flex-[1_1_0] opacity-80">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]">
              Celebrated for creating meaningful brand films that combine authenticity, creativity, and emotion to elevate brand presence and audience connection.
            </p>
          </div>
          <div className="flex-[0_0_100px] text-right">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]">
              2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
