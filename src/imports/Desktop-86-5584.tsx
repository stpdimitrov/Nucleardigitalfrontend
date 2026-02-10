import svgPaths from "./svg-14r86arvjb";
import imgDesktop from "figma:asset/440a9540a3ca269479ea831effae21961445d048.png";

function Overlay() {
  return <div className="absolute bg-black inset-[0_0_0.02%_0] opacity-30" data-name="Overlay" />;
}

function PFramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
        <p className="leading-[22.4px]">Lets work together</p>
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

function SectionTag1() {
  return (
    <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0" data-name="Section tag">
      <Description />
    </div>
  );
}

function SectionTag() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Section tag">
      <SectionTag1 />
    </div>
  );
}

function H2FramerText() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[50.4px] not-italic relative shrink-0 text-[45.4px] text-center text-white tracking-[-1.44px] whitespace-nowrap">
        <p className="mb-0">Ready to bring your vision to life?</p>
        <p className="mb-0">Let’s create stunning visuals that</p>
        <p>captivate, inspire, and deliver results.</p>
      </div>
    </div>
  );
}

function DivFramerSfb8J() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-sfb8j">
      <H2FramerText />
    </div>
  );
}

function PFramerText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[22.4px] text-[14.1px]">contact us</p>
      </div>
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText1 />
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p3b6ad300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 6">
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

function Small() {
  return (
    <a className="bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center overflow-clip pl-[16px] pr-[6px] py-[6px] relative rounded-[1000px] shrink-0" data-name="Small" href="https://primary-words-404174.framer.app/contact-us">
      <Description1 />
      <IconWrapper />
    </a>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
      <Small />
    </div>
  );
}

function ButtonWrapper() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[9.1px] relative shrink-0 w-full" data-name="Button wrapper">
      <Button />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[22.9px] items-center justify-center max-w-[790px] overflow-clip relative shrink-0 w-[790px]" data-name="Wrapper">
      <SectionTag />
      <DivFramerSfb8J />
      <ButtonWrapper />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]" data-name="Container">
      <Wrapper />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[463.18px] pt-[463.19px] relative size-full" data-name="Desktop">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[160%] left-0 max-w-none top-[-30%] w-full" src={imgDesktop} />
      </div>
      <Overlay />
      <Container />
    </div>
  );
}