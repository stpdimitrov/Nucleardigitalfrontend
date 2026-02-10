import svgPaths from "./svg-wsrl3dqnlx";
import imgDivFramer1Nvv2Kh from "figma:asset/0b0d785bcc2b969d32d4abfd5dcf158daee3d0e5.png";
import imgDivFramer1Nvv2Kh1 from "figma:asset/c5fc99d18d1985fc95e2c95ecf962959031a52b9.png";
import imgDivFramer1Nvv2Kh2 from "figma:asset/e3ea1e166e4ed8fea98f471c9d4a0c1cf5ee347c.png";

function PFramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.3px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
        <p className="leading-[22.4px]">Our services</p>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText />
    </div>
  );
}

function SectionTagSectionTag() {
  return (
    <div className="absolute content-stretch flex h-[22.41px] items-center justify-center left-0 overflow-clip pb-px top-0" data-name="Section tag → Section tag">
      <Description />
    </div>
  );
}

function H2FramerText() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="h2.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[45.2px] text-white tracking-[-1.44px] whitespace-nowrap">
        <p className="leading-[50.4px]">What We Offer</p>
      </div>
    </div>
  );
}

function PFramerText1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-70 right-0 top-[58.41px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
        <p className="mb-0">{`We create impactful videos that inspire audiences, tell `}</p>
        <p>stories, and elevate your brand.</p>
      </div>
    </div>
  );
}

function TextWrapper() {
  return (
    <div className="absolute h-[106.41px] left-[400px] overflow-clip right-[400px] top-0" data-name="Text wrapper">
      <H2FramerText />
      <PFramerText1 />
    </div>
  );
}

function PFramerText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[22.4px]">Contact us</p>
      </div>
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText2 />
    </div>
  );
}

function Component() {
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

function Component1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 5">
      <Component />
    </div>
  );
}

function IconMask() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]" data-name="Icon:mask">
      <Component1 />
    </div>
  );
}

function Icons() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="Icons">
      <IconMask />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[15px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-name="Icon wrapper">
      <Icons />
    </div>
  );
}

function ButtonSmall() {
  return (
    <a className="absolute bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center left-[1033.77px] overflow-clip pl-[16px] pr-[6px] py-[6px] rounded-[1000px] top-[62.41px]" data-name="Button → Small" href="https://primary-words-404174.framer.app/contact-us">
      <Description1 />
      <IconWrapper />
    </a>
  );
}

function Grid6X() {
  return (
    <div className="h-[106.41px] overflow-clip relative shrink-0 w-full" data-name="Grid 6x">
      <SectionTagSectionTag />
      <TextWrapper />
      <ButtonSmall />
    </div>
  );
}

function DivFramer1Nvv2Kh() {
  return (
    <div className="h-[500px] relative shrink-0 w-[592px]" data-name="div.framer-1nvv2kh">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[118.4%] left-0 max-w-none top-[-9.2%] w-full" src={imgDivFramer1Nvv2Kh} />
      </div>
    </div>
  );
}

function H4FramerText() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="h4.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[34.2px] text-white tracking-[-0.72px] whitespace-nowrap">
        <p className="leading-[50.4px]">Video Production</p>
      </div>
    </div>
  );
}

function PFramerText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full whitespace-nowrap">
        <p className="mb-0">{`We handle every stage from concept to filming, creating visuals that capture `}</p>
        <p>emotion and inspire audiences.</p>
      </div>
    </div>
  );
}

function DivFramer11Rxj8D() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-[10%] top-[60.4px]" data-name="div.framer-11rxj8d">
      <PFramerText3 />
    </div>
  );
}

function TopWrapper() {
  return (
    <div className="h-[108.41px] overflow-clip relative shrink-0 w-full" data-name="Top wrapper">
      <H4FramerText />
      <DivFramer11Rxj8D />
    </div>
  );
}

function PFramerText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Commercials</p>
      </div>
    </div>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText4 />
    </div>
  );
}

function ServiceCategoryTag() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description2 />
    </div>
  );
}

function ServiceFeatures() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-24px)]" data-name="Service features">
      <ServiceCategoryTag />
    </div>
  );
}

function PFramerText5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Brand Films</p>
      </div>
    </div>
  );
}

function Description3() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText5 />
    </div>
  );
}

function ServiceCategoryTag1() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description3 />
    </div>
  );
}

function ServiceFeatures1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[124.17px] top-[calc(50%-24px)]" data-name="Service features">
      <ServiceCategoryTag1 />
    </div>
  );
}

function PFramerText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Product Videos</p>
      </div>
    </div>
  );
}

function Description4() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText6 />
    </div>
  );
}

function ServiceCategoryTag2() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description4 />
    </div>
  );
}

function ServiceFeatures2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[237.42px] top-[calc(50%-24px)]" data-name="Service features">
      <ServiceCategoryTag2 />
    </div>
  );
}

function PFramerText7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Corporate Shoots</p>
      </div>
    </div>
  );
}

function Description5() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText7 />
    </div>
  );
}

function ServiceCategoryTag3() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description5 />
    </div>
  );
}

function ServiceFeatures3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[375.44px] top-[calc(50%-24px)]" data-name="Service features">
      <ServiceCategoryTag3 />
    </div>
  );
}

function PFramerText8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Event Coverage</p>
      </div>
    </div>
  );
}

function Description6() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText8 />
    </div>
  );
}

function ServiceCategoryTag4() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description6 />
    </div>
  );
}

function ServiceFeatures4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%+24px)]" data-name="Service features">
      <ServiceCategoryTag4 />
    </div>
  );
}

function BottomWrapper() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Bottom wrapper">
      <ServiceFeatures />
      <ServiceFeatures1 />
      <ServiceFeatures2 />
      <ServiceFeatures3 />
      <ServiceFeatures4 />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[16px] relative self-stretch shrink-0" data-name="Wrapper">
      <TopWrapper />
      <BottomWrapper />
    </div>
  );
}

function ServiceCard1Desktop() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Service card → 1-desktop">
      <DivFramer1Nvv2Kh />
      <Wrapper />
    </div>
  );
}

function H4FramerText1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="h4.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[34.2px] text-white tracking-[-0.72px] whitespace-nowrap">
        <p className="leading-[50.4px]">Creative Direction</p>
      </div>
    </div>
  );
}

function PFramerText9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Our creative team transforms ideas into captivating visuals through `}</p>
        <p>storytelling, strategy, and detailed direction.</p>
      </div>
    </div>
  );
}

function DivFramer11Rxj8D1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-[10%] top-[60.4px]" data-name="div.framer-11rxj8d">
      <PFramerText9 />
    </div>
  );
}

function TopWrapper1() {
  return (
    <div className="h-[108.41px] overflow-clip relative shrink-0 w-full" data-name="Top wrapper">
      <H4FramerText1 />
      <DivFramer11Rxj8D1 />
    </div>
  );
}

function PFramerText10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Concept Development</p>
      </div>
    </div>
  );
}

function Description7() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText10 />
    </div>
  );
}

function ServiceCategoryTag5() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description7 />
    </div>
  );
}

function ServiceFeatures5() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-24px)]" data-name="Service features">
      <ServiceCategoryTag5 />
    </div>
  );
}

function PFramerText11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Scriptwriting</p>
      </div>
    </div>
  );
}

function Description8() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText11 />
    </div>
  );
}

function ServiceCategoryTag6() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description8 />
    </div>
  );
}

function ServiceFeatures6() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[186.89px] top-[calc(50%-24px)]" data-name="Service features">
      <ServiceCategoryTag6 />
    </div>
  );
}

function PFramerText12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Storyboarding</p>
      </div>
    </div>
  );
}

function Description9() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText12 />
    </div>
  );
}

function ServiceCategoryTag7() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description9 />
    </div>
  );
}

function ServiceFeatures7() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[306.63px] top-[calc(50%-24px)]" data-name="Service features">
      <ServiceCategoryTag7 />
    </div>
  );
}

function PFramerText13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Art Direction</p>
      </div>
    </div>
  );
}

function Description10() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText13 />
    </div>
  );
}

function ServiceCategoryTag8() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description10 />
    </div>
  );
}

function ServiceFeatures8() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[438.22px] top-[calc(50%-24px)]" data-name="Service features">
      <ServiceCategoryTag8 />
    </div>
  );
}

function PFramerText14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Campaign Planning</p>
      </div>
    </div>
  );
}

function Description11() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText14 />
    </div>
  );
}

function ServiceCategoryTag9() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description11 />
    </div>
  );
}

function ServiceFeatures9() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%+24px)]" data-name="Service features">
      <ServiceCategoryTag9 />
    </div>
  );
}

function BottomWrapper1() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Bottom wrapper">
      <ServiceFeatures5 />
      <ServiceFeatures6 />
      <ServiceFeatures7 />
      <ServiceFeatures8 />
      <ServiceFeatures9 />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[16px] relative self-stretch shrink-0" data-name="Wrapper">
      <TopWrapper1 />
      <BottomWrapper1 />
    </div>
  );
}

function DivFramer1Nvv2Kh1() {
  return (
    <div className="h-[500px] relative shrink-0 w-[592px]" data-name="div.framer-1nvv2kh">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[118.4%] left-0 max-w-none top-[-9.2%] w-full" src={imgDivFramer1Nvv2Kh1} />
      </div>
    </div>
  );
}

function ServiceCard2Desktop() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Service card → 2-desktop">
      <Wrapper1 />
      <DivFramer1Nvv2Kh1 />
    </div>
  );
}

function DivFramer1Nvv2Kh2() {
  return (
    <div className="h-[500px] relative shrink-0 w-[592px]" data-name="div.framer-1nvv2kh">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[118.4%] left-0 max-w-none top-[-9.2%] w-full" src={imgDivFramer1Nvv2Kh2} />
      </div>
    </div>
  );
}

function H4FramerText2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="h4.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[34.5px] text-white tracking-[-0.72px] whitespace-nowrap">
        <p className="leading-[50.4px]">{`Post-Production & Editing`}</p>
      </div>
    </div>
  );
}

function PFramerText15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`We refine your footage with expert editing, sound design, and color grading `}</p>
        <p>for cinematic perfection.</p>
      </div>
    </div>
  );
}

function DivFramer11Rxj8D2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-[10%] top-[60.4px]" data-name="div.framer-11rxj8d">
      <PFramerText15 />
    </div>
  );
}

function TopWrapper2() {
  return (
    <div className="h-[108.41px] overflow-clip relative shrink-0 w-full" data-name="Top wrapper">
      <H4FramerText2 />
      <DivFramer11Rxj8D2 />
    </div>
  );
}

function PFramerText16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Video Editing</p>
      </div>
    </div>
  );
}

function Description12() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText16 />
    </div>
  );
}

function ServiceCategoryTag10() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description12 />
    </div>
  );
}

function ServiceFeatures10() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%-24px)]" data-name="Service features">
      <ServiceCategoryTag10 />
    </div>
  );
}

function PFramerText17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Color Grading</p>
      </div>
    </div>
  );
}

function Description13() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText17 />
    </div>
  );
}

function ServiceCategoryTag11() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description13 />
    </div>
  );
}

function ServiceFeatures11() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[123.88px] top-[calc(50%-24px)]" data-name="Service features">
      <ServiceCategoryTag11 />
    </div>
  );
}

function PFramerText18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Motion Graphics</p>
      </div>
    </div>
  );
}

function Description14() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText18 />
    </div>
  );
}

function ServiceCategoryTag12() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description14 />
    </div>
  );
}

function ServiceFeatures12() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[252.58px] top-[calc(50%-24px)]" data-name="Service features">
      <ServiceCategoryTag12 />
    </div>
  );
}

function PFramerText19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Sound Design</p>
      </div>
    </div>
  );
}

function Description15() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText19 />
    </div>
  );
}

function ServiceCategoryTag13() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description15 />
    </div>
  );
}

function ServiceFeatures13() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[397.66px] top-[calc(50%-24px)]" data-name="Service features">
      <ServiceCategoryTag13 />
    </div>
  );
}

function PFramerText20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.1px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Visual Effects</p>
      </div>
    </div>
  );
}

function Description16() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText20 />
    </div>
  );
}

function ServiceCategoryTag14() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description16 />
    </div>
  );
}

function ServiceFeatures14() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%+24px)]" data-name="Service features">
      <ServiceCategoryTag14 />
    </div>
  );
}

function BottomWrapper2() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Bottom wrapper">
      <ServiceFeatures10 />
      <ServiceFeatures11 />
      <ServiceFeatures12 />
      <ServiceFeatures13 />
      <ServiceFeatures14 />
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[16px] relative self-stretch shrink-0" data-name="Wrapper">
      <TopWrapper2 />
      <BottomWrapper2 />
    </div>
  );
}

function Component1Desktop() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="1-desktop">
      <DivFramer1Nvv2Kh2 />
      <Wrapper2 />
    </div>
  );
}

function ServicesWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative shrink-0 w-full" data-name="Services wrapper">
      <ServiceCard1Desktop />
      <ServiceCard2Desktop />
      <Component1Desktop />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]" data-name="Container">
      <Grid6X />
      <ServicesWrapper />
    </div>
  );
}

export default function Services() {
  return (
    <div className="content-stretch flex items-center justify-center px-[340px] py-[100px] relative size-full" data-name="Services">
      <Container />
    </div>
  );
}