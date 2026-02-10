import svgPaths from "./svg-gfkecmw87r";
import imgProfileImage from "figma:asset/59433e6d6ddb3b0f42912e368c88b5919c5a0e0c.png";
import imgAPersonWithShortLightBrownHairWearsADarkGreenBlazerOverACreamCableKnitTurtleneckThePoseIsCalmAgainstANeutralBackground from "figma:asset/7e73c7aabad20943e4272bca350bb8114758102b.png";
import imgAPersonWithShortRedHairWearsATanCoatAndAWhiteTurtleneckGazingConfidentlyTheBackgroundIsANeutralGrayCreatingACalmProfessionalTone from "figma:asset/4b463d6fb2243401ecb681d36cb89dcaf0c09986.png";
import imgXoodsIqIwqIpkB6M4NvuYs52EVcPng from "figma:asset/92e2965cd21a86fe0952e28b698ba606d7a53405.png";
import { imgSection } from "./svg-qiac3";

function PFramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
        <p className="leading-[22.4px]">testimonials</p>
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[45.6px] text-white tracking-[-1.44px] whitespace-nowrap">
        <p className="leading-[50.4px]">Our Happy Clients</p>
      </div>
    </div>
  );
}

function PFramerText1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-70 right-0 top-[58.41px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
        <p className="mb-0">{`Hear from our amazing clients who trusted us to bring their `}</p>
        <p>creative visions to life.</p>
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[22.4px]">What we do</p>
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

function Component3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 5">
      <Component />
    </div>
  );
}

function IconMask() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]" data-name="Icon:mask">
      <Component3 />
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
    <a className="absolute bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center left-[1035.39px] overflow-clip pl-[16px] pr-[6px] py-[6px] rounded-[1000px] top-[62.41px]" data-name="Button → Small" href="https://primary-words-404174.framer.app/services">
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

function ProfileImage() {
  return (
    <div className="h-[450px] overflow-clip relative shrink-0 w-[385.33px]" data-name="Profile image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-19.37%] max-w-none top-0 w-[138.73%]" src={imgProfileImage} />
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[60px] text-white whitespace-nowrap">
        <p className="leading-[normal]">7</p>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[60px] text-white whitespace-nowrap">
        <p className="leading-[normal]">x</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center pl-[4px] relative shrink-0" data-name="div">
      <Span />
      <Span1 />
    </div>
  );
}

function DivFramer1A7D5HiContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-1a7d5hi-container">
      <Div />
    </div>
  );
}

function PFramerText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.1px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Faster Delivery</p>
      </div>
    </div>
  );
}

function DivFramer1Xvoiz() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-1xvoiz6">
      <PFramerText3 />
    </div>
  );
}

function Numbers() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0 w-full" data-name="Numbers">
      <DivFramer1A7D5HiContainer />
      <DivFramer1Xvoiz />
    </div>
  );
}

function PFramerText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`"Flixen™ turned our concept into a cinematic masterpiece. Their `}</p>
        <p className="mb-0">{`team’s creativity, precision, and speed truly exceeded our `}</p>
        <p>{`expectations from start to finish."`}</p>
      </div>
    </div>
  );
}

function DivFramer1Xkec() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-[446.78px]" data-name="div.framer-1xkec49">
      <PFramerText4 />
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Main">
      <Numbers />
      <DivFramer1Xkec />
    </div>
  );
}

function PFramerText5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20.8px] text-white tracking-[-0.44px] whitespace-nowrap">
        <p className="leading-[30.8px]">Olivia Bennett</p>
      </div>
    </div>
  );
}

function PFramerText6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-0 top-[30.8px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Marketing Director</p>
      </div>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="h-[54.8px] overflow-clip relative shrink-0 w-full" data-name="User info">
      <PFramerText5 />
      <PFramerText6 />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between min-w-[496.44000244140625px] overflow-clip relative shrink-0" data-name="Wrapper">
      <Main />
      <UserInfo />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.p390123a0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Component 5">
      <Component1 />
    </div>
  );
}

function ArrowMask() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[16px]" data-name="Arrow:mask">
      <Component4 />
    </div>
  );
}

function ArrowMaskGroup() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow:mask-group">
      <ArrowMask />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[16px] top-1/2" data-name="Arrow" />
    </div>
  );
}

function InActive() {
  return (
    <div className="aspect-[28/28] bg-[#242424] content-stretch flex items-center justify-center opacity-60 overflow-clip py-[6px] relative rounded-[999px] shrink-0" data-name="In-active">
      <ArrowMaskGroup />
    </div>
  );
}

function SlideArrow() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Slide Arrow">
      <InActive />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Component 1">
          <path d={svgPaths.p1b7f8f00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="Component 5">
      <Component2 />
    </div>
  );
}

function ArrowMask1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[16px]" data-name="Arrow:mask">
      <Component5 />
    </div>
  );
}

function ArrowMaskGroup1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Arrow:mask-group">
      <ArrowMask1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[16px] top-1/2" data-name="Arrow" />
    </div>
  );
}

function Active() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center justify-center overflow-clip relative rounded-[999px] shrink-0 size-[28px]" data-name="Active">
      <ArrowMaskGroup1 />
    </div>
  );
}

function SlideArrow1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Slide Arrow">
      <Active />
    </div>
  );
}

function DivFramer1Nj2Aky() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end overflow-clip pl-[180.21px] pr-[0.01px] relative shrink-0" data-name="div.framer-1nj2aky">
      <SlideArrow />
      <SlideArrow1 />
    </div>
  );
}

function Grid3X() {
  return (
    <div className="bg-black content-stretch flex gap-[8px] items-end justify-center p-[16px] relative self-stretch shrink-0" data-name="Grid 3x">
      <Wrapper1 />
      <DivFramer1Nj2Aky />
    </div>
  );
}

function Component1Desktop() {
  return (
    <div className="bg-[#242424] relative shrink-0 w-full" data-name="1-desktop">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center p-[8px] relative w-full">
          <ProfileImage />
          <Grid3X />
        </div>
      </div>
    </div>
  );
}

function Li() {
  return <div className="absolute h-[334px] left-0 top-0 w-[350px]" data-name="li" />;
}

function Li1() {
  return <div className="absolute h-[334px] left-[365.83px] top-0 w-[350px]" data-name="li" />;
}

function Li2() {
  return <div className="absolute h-[334px] left-[726.67px] top-0 w-[350px]" data-name="li" />;
}

function TestimonialCard() {
  return <div className="absolute h-[334px] left-[1087.5px] top-0 w-[350px]" data-name="Testimonial card" />;
}

function Li3() {
  return <div className="absolute h-[334px] left-[1447.5px] top-0 w-[350px]" data-name="li" />;
}

function Numbers1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="Numbers">
      <div className="h-[50.4px] shrink-0 w-full" data-name="h4.framer-text" />
      <div className="h-[19.6px] opacity-60 shrink-0 w-full" data-name="p.framer-text" />
    </div>
  );
}

function PFramerText7() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Working with Flixen™ was effortless. They `}</p>
        <p className="mb-0">{`understood our vision instantly and delivered `}</p>
        <p>visuals that elevated our brand story.</p>
      </div>
    </div>
  );
}

function TopWrapper() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Top wrapper">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[36px] items-start p-[16px] relative w-full">
          <Numbers1 />
          <PFramerText7 />
        </div>
      </div>
    </div>
  );
}

function UserProfile() {
  return <div className="rounded-[999px] shrink-0 size-[54px]" data-name="User profile" />;
}

function UserText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="User Text">
      <div className="h-[27px] shrink-0 w-full" data-name="p.framer-text" />
      <div className="h-[19.59px] opacity-60 shrink-0 w-full" data-name="p.framer-text" />
    </div>
  );
}

function UserInfo1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="User info">
      <UserProfile />
      <UserText />
    </div>
  );
}

function TestimonialCardTestimonialsCard() {
  return (
    <div className="bg-[#242424] content-stretch flex flex-col gap-[20px] items-start overflow-clip pb-[14px] pt-[8px] px-[8px] relative shrink-0 w-[350px]" data-name="Testimonial card → Testimonials card">
      <TopWrapper />
      <UserInfo1 />
    </div>
  );
}

function Li4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[334px] items-start left-[1808.33px] pl-[0.84px] top-0" data-name="li">
      <TestimonialCardTestimonialsCard />
    </div>
  );
}

function H4FramerText() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="h4.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[32.8px] text-white tracking-[-0.72px] whitespace-nowrap">
        <p className="leading-[50.4px]">10x</p>
      </div>
    </div>
  );
}

function PFramerText8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-0 top-[54.4px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.6px] whitespace-nowrap">
        <p className="leading-[19.6px]">Client Satisfaction</p>
      </div>
    </div>
  );
}

function Numbers2() {
  return (
    <div className="h-[74px] overflow-clip relative shrink-0 w-full" data-name="Numbers">
      <H4FramerText />
      <PFramerText8 />
    </div>
  );
}

function PFramerText9() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] w-full whitespace-pre-wrap">
        <p className="mb-0">The Flixen™ team is reliable, fast, and detail-</p>
        <p className="mb-0">{`oriented. Every frame felt intentional and `}</p>
        <p>beautifully crafted with creativity and care.</p>
      </div>
    </div>
  );
}

function TopWrapper1() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Top wrapper">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[36px] items-start p-[16px] relative w-full">
          <Numbers2 />
          <PFramerText9 />
        </div>
      </div>
    </div>
  );
}

function APersonWithShortLightBrownHairWearsADarkGreenBlazerOverACreamCableKnitTurtleneckThePoseIsCalmAgainstANeutralBackground() {
  return (
    <div className="absolute inset-0 rounded-[999px]" data-name="A person with short, light brown hair wears a dark green blazer over a cream cable-knit turtleneck. The pose is calm against a neutral background.">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">
        <img alt="" className="absolute h-[102.55%] left-0 max-w-none top-[-1.27%] w-full" src={imgAPersonWithShortLightBrownHairWearsADarkGreenBlazerOverACreamCableKnitTurtleneckThePoseIsCalmAgainstANeutralBackground} />
      </div>
    </div>
  );
}

function UserProfile1() {
  return (
    <div className="overflow-clip relative rounded-[999px] shrink-0 size-[54px]" data-name="User profile">
      <APersonWithShortLightBrownHairWearsADarkGreenBlazerOverACreamCableKnitTurtleneckThePoseIsCalmAgainstANeutralBackground />
    </div>
  );
}

function PFramerText10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[16px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Liam Carter</p>
      </div>
    </div>
  );
}

function PFramerText11() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.4px] w-full">
        <p className="leading-[19.6px] whitespace-pre-wrap">CEO, Nova Media</p>
      </div>
    </div>
  );
}

function UserText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="User Text">
      <PFramerText10 />
      <PFramerText11 />
    </div>
  );
}

function UserInfo2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="User info">
      <UserProfile1 />
      <UserText1 />
    </div>
  );
}

function TestimonialCardTestimonialsCard1() {
  return (
    <div className="bg-[#242424] content-stretch flex flex-col gap-[20px] items-start overflow-clip pb-[14px] pt-[8px] px-[8px] relative shrink-0 w-[350px]" data-name="Testimonial card → Testimonials card">
      <TopWrapper1 />
      <UserInfo2 />
    </div>
  );
}

function Li5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[334px] items-start left-[2169.17px] pl-[0.83px] top-0" data-name="li">
      <TestimonialCardTestimonialsCard1 />
    </div>
  );
}

function H4FramerText1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="h4.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[31.6px] text-white tracking-[-0.72px] whitespace-nowrap">
        <p className="leading-[50.4px]">3x</p>
      </div>
    </div>
  );
}

function PFramerText12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-0 top-[54.4px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.8px] whitespace-nowrap">
        <p className="leading-[19.6px]">Engagement Boost</p>
      </div>
    </div>
  );
}

function Numbers3() {
  return (
    <div className="h-[74px] overflow-clip relative shrink-0 w-full" data-name="Numbers">
      <H4FramerText1 />
      <PFramerText12 />
    </div>
  );
}

function PFramerText13() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Flixen™ brought our campaign to life with `}</p>
        <p className="mb-0">{`storytelling and visuals that matched our `}</p>
        <p>brand tone and expectations.</p>
      </div>
    </div>
  );
}

function TopWrapper2() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Top wrapper">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[36px] items-start p-[16px] relative w-full">
          <Numbers3 />
          <PFramerText13 />
        </div>
      </div>
    </div>
  );
}

function APersonWithShortRedHairWearsATanCoatAndAWhiteTurtleneckGazingConfidentlyTheBackgroundIsANeutralGrayCreatingACalmProfessionalTone() {
  return (
    <div className="absolute inset-0 rounded-[999px]" data-name="A person with short, red hair wears a tan coat and a white turtleneck, gazing confidently. The background is a neutral gray, creating a calm, professional tone.">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">
        <img alt="" className="absolute h-[100.11%] left-0 max-w-none top-[-0.06%] w-full" src={imgAPersonWithShortRedHairWearsATanCoatAndAWhiteTurtleneckGazingConfidentlyTheBackgroundIsANeutralGrayCreatingACalmProfessionalTone} />
      </div>
    </div>
  );
}

function UserProfile2() {
  return (
    <div className="overflow-clip relative rounded-[999px] shrink-0 size-[54px]" data-name="User profile">
      <APersonWithShortRedHairWearsATanCoatAndAWhiteTurtleneckGazingConfidentlyTheBackgroundIsANeutralGrayCreatingACalmProfessionalTone />
    </div>
  );
}

function PFramerText14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[16.2px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Sofia Lane</p>
      </div>
    </div>
  );
}

function PFramerText15() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.6px] w-full">
        <p className="leading-[19.6px] whitespace-pre-wrap">Content Strategist</p>
      </div>
    </div>
  );
}

function UserText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="User Text">
      <PFramerText14 />
      <PFramerText15 />
    </div>
  );
}

function UserInfo3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="User info">
      <UserProfile2 />
      <UserText2 />
    </div>
  );
}

function TestimonialCardTestimonialsCard2() {
  return (
    <div className="bg-[#242424] content-stretch flex flex-col gap-[20px] items-start overflow-clip pb-[14px] pt-[8px] px-[8px] relative shrink-0 w-[350px]" data-name="Testimonial card → Testimonials card">
      <TopWrapper2 />
      <UserInfo3 />
    </div>
  );
}

function Li6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[334px] items-start left-[2530px] pl-[0.83px] top-0" data-name="li">
      <TestimonialCardTestimonialsCard2 />
    </div>
  );
}

function H4FramerText2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="h4.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[32.6px] text-white tracking-[-0.72px] whitespace-nowrap">
        <p className="leading-[50.4px]">5x</p>
      </div>
    </div>
  );
}

function PFramerText16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-0 top-[54.4px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.5px] whitespace-nowrap">
        <p className="leading-[19.6px]">Brand Growth</p>
      </div>
    </div>
  );
}

function Numbers4() {
  return (
    <div className="h-[74px] overflow-clip relative shrink-0 w-full" data-name="Numbers">
      <H4FramerText2 />
      <PFramerText16 />
    </div>
  );
}

function PFramerText17() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Working with Flixen™ was effortless. They `}</p>
        <p className="mb-0">{`understood our vision instantly and delivered `}</p>
        <p>visuals that elevated our brand story.</p>
      </div>
    </div>
  );
}

function TopWrapper3() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Top wrapper">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[36px] items-start p-[16px] relative w-full">
          <Numbers4 />
          <PFramerText17 />
        </div>
      </div>
    </div>
  );
}

function XoodsIqIwqIpkB6M4NvuYs52EVcPng() {
  return (
    <div className="absolute inset-0 rounded-[999px]" data-name="XoodsIQIwqIpkB6M4nvuYS52EVc.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">
        <img alt="" className="absolute h-full left-[-8.45%] max-w-none top-0 w-[116.89%]" src={imgXoodsIqIwqIpkB6M4NvuYs52EVcPng} />
      </div>
    </div>
  );
}

function UserProfile3() {
  return (
    <div className="overflow-clip relative rounded-[999px] shrink-0 size-[54px]" data-name="User profile">
      <XoodsIqIwqIpkB6M4NvuYs52EVcPng />
    </div>
  );
}

function PFramerText18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[16.2px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Ethan Ross</p>
      </div>
    </div>
  );
}

function PFramerText19() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.7px] w-full">
        <p className="leading-[19.6px] whitespace-pre-wrap">Creative Producer</p>
      </div>
    </div>
  );
}

function UserText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="User Text">
      <PFramerText18 />
      <PFramerText19 />
    </div>
  );
}

function UserInfo4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="User info">
      <UserProfile3 />
      <UserText3 />
    </div>
  );
}

function TestimonialCardTestimonialsCard3() {
  return (
    <div className="bg-[#242424] content-stretch flex flex-col gap-[20px] items-start overflow-clip pb-[14px] pt-[8px] px-[8px] relative shrink-0 w-[350px]" data-name="Testimonial card → Testimonials card">
      <TopWrapper3 />
      <UserInfo4 />
    </div>
  );
}

function Li7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[334px] items-start left-[2890.83px] pl-[0.83px] top-0" data-name="li">
      <TestimonialCardTestimonialsCard3 />
    </div>
  );
}

function Li8() {
  return <div className="absolute h-[334px] left-[3251.66px] top-0 w-[350px]" data-name="li" />;
}

function Li9() {
  return <div className="absolute h-[334px] left-[3612.5px] top-0 w-[350px]" data-name="li" />;
}

function Li10() {
  return <div className="absolute h-[334px] left-[3973.33px] top-0 w-[350px]" data-name="li" />;
}

function Ul() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="ul">
      <Li />
      <Li1 />
      <Li2 />
      <TestimonialCard />
      <Li3 />
      <Li4 />
      <Li5 />
      <Li6 />
      <Li7 />
      <Li8 />
      <Li9 />
      <Li10 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex inset-[0_0_0_-2026.67px] items-center justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[62.97%_0%] mask-size-[37.03%_100%] pr-[2026.67px]" data-name="section" style={{ maskImage: `url('${imgSection}')` }}>
      <Ul />
    </div>
  );
}

function SectionMaskGroup() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="section:mask-group">
      <Section />
    </div>
  );
}

function TestimonialsTicker() {
  return (
    <div className="content-stretch flex flex-col h-[311px] items-start justify-center relative shrink-0 w-full" data-name="Testimonials ticker">
      <SectionMaskGroup />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full" data-name="Wrapper">
      <Component1Desktop />
      <TestimonialsTicker />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]" data-name="Container">
      <Grid6X />
      <Wrapper />
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="content-stretch flex items-center justify-center px-[340px] py-[100px] relative size-full" data-name="Testimonials">
      <Container />
    </div>
  );
}