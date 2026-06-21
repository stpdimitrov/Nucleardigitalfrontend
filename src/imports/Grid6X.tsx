import svgPaths from "./svg-82pvtfr3fz";

function PFramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
        <p className="leading-[22.4px]">Our team</p>
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[45.4px] text-white tracking-[-1.44px] whitespace-nowrap">
        <p className="leading-[50.4px]">The Creative Team</p>
      </div>
    </div>
  );
}

function PFramerText1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-70 right-0 top-[58.41px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] whitespace-nowrap">
        <p className="mb-0">{`Meet the talented creatives behind Newclear Digital, dedicated to `}</p>
        <p>{`crafting exceptional visuals & bringing every story to life.`}</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[106.41px] left-[400px] overflow-clip right-[400px] top-0" data-name="Text">
      <H2FramerText />
      <PFramerText1 />
    </div>
  );
}

function PFramerText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.3px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[22.4px]">Join our team</p>
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
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 4">
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
    <a className="absolute bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center left-[1013.27px] overflow-clip pl-[16px] pr-[6px] py-[6px] rounded-[1000px] top-[62.41px]" data-name="Button → Small" href="https://primary-words-404174.framer.app/contact-us">
      <Description1 />
      <IconWrapper />
    </a>
  );
}

export default function Grid6X() {
  return (
    <div className="relative size-full" data-name="Grid 6x">
      <SectionTagSectionTag />
      <Text />
      <ButtonSmall />
    </div>
  );
}