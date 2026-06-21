import svgPaths from "./svg-1gbva1ce8p";
import imgDivFramer1Nvv2Kh from "figma:asset/0b0d785bcc2b969d32d4abfd5dcf158daee3d0e5.png";
import imgDivFramer1Nvv2Kh1 from "figma:asset/c5fc99d18d1985fc95e2c95ecf962959031a52b9.png";
import imgDivFramer1Nvv2Kh2 from "figma:asset/e3ea1e166e4ed8fea98f471c9d4a0c1cf5ee347c.png";
import imgCoverImage from "figma:asset/64551b4f8a24e6e0541fe588b92468f0e00c3a5e.png";
import imgDesktop from "figma:asset/440a9540a3ca269479ea831effae21961445d048.png";
import imgVideo from "figma:asset/bc7fec3e75371ec886cf5202470bf399a7d51cc4.png";
import imgFramerLogo from "figma:asset/186186e8842153f2d8782124c4158b0abc2624c7.png";
import { imgBottom, imgIframeFramerEditorbar } from "./svg-xucct";

function Component() {
  return (
    <div className="relative shrink-0 size-[200px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 200">
        <g id="Component 1">
          <path d={svgPaths.pb912980} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[30px]" data-name="Component 4">
      <Component />
    </div>
  );
}

function GkYmdCuSzDdEia8BAhhQ5VE7WEmSvg() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="GkYMDCuSZDdEia8bAhhQ5vE7wEM.svg">
      <Component3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Icon">
      <GkYmdCuSzDdEia8BAhhQ5VE7WEmSvg />
    </div>
  );
}

function PFramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.72px] uppercase whitespace-nowrap" href="https://primary-words-404174.framer.app/">
        <p className="cursor-pointer leading-[24px] text-[23.6px]">Newclear Digital</p>
      </a>
    </div>
  );
}

function DivFramer10Eoqs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-10eoqs3">
      <PFramerText />
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Logo">
      <Icon />
      <DivFramer10Eoqs />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Logo">
      <Logo1 />
    </div>
  );
}

function PFramerText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[17.3px] text-white tracking-[-0.6px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">Menu</p>
      </div>
    </div>
  );
}

function DivFramerI74O5W() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-i74o5w">
      <PFramerText1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Component 1">
          <path d="M5 15H19M5 9H19" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="Component 4">
      <Component1 />
    </div>
  );
}

function IconMask() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start right-0 top-1/2 w-[24px]" data-name="Icon:mask">
      <Component4 />
    </div>
  );
}

function IconMaskGroup() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon:mask-group">
      <IconMask />
      <div className="-translate-y-1/2 absolute bg-white right-0 size-[24px] top-1/2" data-name="Icon" />
    </div>
  );
}

function Close() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Close">
      <DivFramerI74O5W />
      <IconMaskGroup />
    </div>
  );
}

function MenuButton() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Menu button">
      <Close />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]" data-name="Container">
      <Logo />
      <MenuButton />
    </div>
  );
}

function Navbar() {
  return (
    <div className="backdrop-blur-[10px] content-stretch flex items-center justify-center overflow-clip py-[20px] relative shrink-0 w-full" data-name="Navbar">
      <Container />
    </div>
  );
}

function DivFramer186EzfnContainer() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="div.framer-186ezfn-container">
      <Navbar />
    </div>
  );
}

function Backdrop() {
  return <div className="absolute bg-white inset-px rounded-[10px] shadow-[0px_0.602px_1.566px_-1.5px_rgba(0,0,0,0.17),0px_2.289px_5.95px_-3px_rgba(0,0,0,0.14),0px_10px_26px_-4.5px_rgba(0,0,0,0.02)]" data-name="Backdrop" />;
}

function Component2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 20">
        <g id="Component 1">
          <path d={svgPaths.p5ca1b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center justify-center overflow-clip relative shrink-0 w-[12px]" data-name="Component 4">
      <Component2 />
    </div>
  );
}

function LogoMask() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-0 w-[12px]" data-name="Logo:mask">
      <Component5 />
    </div>
  );
}

function LogoMaskGroup() {
  return (
    <div className="-translate-x-1/2 absolute h-[20px] left-1/2 top-[-2px] w-[12px]" data-name="Logo:mask-group">
      <LogoMask />
      <div className="-translate-x-1/2 absolute bg-black h-[20px] left-1/2 top-0 w-[12px]" data-name="Logo" />
    </div>
  );
}

function DivFramer1Kflzx() {
  return (
    <div className="h-[16px] relative shrink-0 w-[12px]" data-name="div.framer-1kflzx5">
      <LogoMaskGroup />
    </div>
  );
}

function Component7() {
  return (
    <div className="h-[10px] relative shrink-0 w-[97px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 10">
        <g clipPath="url(#clip0_101_942)" id="Component 1">
          <path d={svgPaths.p29f9900} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_101_942">
            <rect fill="white" height="10" width="97" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col h-[10px] items-center justify-center overflow-clip relative shrink-0 w-[97px]" data-name="Component 4">
      <Component7 />
    </div>
  );
}

function TextMask() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2 w-[97px]" data-name="Text:mask">
      <Component6 />
    </div>
  );
}

function TextMaskGroup() {
  return (
    <div className="h-[10px] relative shrink-0 w-[97px]" data-name="Text:mask-group">
      <TextMask />
      <div className="-translate-y-1/2 absolute bg-black h-[10px] left-0 top-1/2 w-[97px]" data-name="Text" />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex gap-[10px] inset-[28.95%_7.5%] items-center" data-name="Content">
      <DivFramer1Kflzx />
      <TextMaskGroup />
    </div>
  );
}

function Bottom() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] opacity-6 rounded-[11px]" data-name="Bottom" style={{ maskImage: `url('${imgBottom}')` }}>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_black]" />
    </div>
  );
}

function Border() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] inset-0 opacity-4 rounded-[11px]" data-name="Border">
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_black]" />
    </div>
  );
}

function Light() {
  return (
    <a className="block cursor-pointer h-[38px] relative shrink-0 w-[140px]" data-name="Light" href="https://www.framer.com/">
      <Backdrop />
      <Content />
      <Bottom />
      <Border />
    </a>
  );
}

function DivFramerBadgeContainer() {
  return (
    <div className="absolute bottom-[3712.55px] content-stretch flex items-start justify-end left-0 p-[20px] w-[1920px]" data-name="div#__framer-badge-container">
      <Light />
    </div>
  );
}

function EditFramerContent() {
  return (
    <div className="absolute backdrop-blur-[5px] bg-[rgba(34,34,34,0.8)] content-stretch flex flex-col items-start opacity-0 overflow-clip px-[8px] py-[4px] right-[37.64px] rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(255,255,255,0.15)] top-[3.5px]" data-name="Edit Framer Content">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Edit Content</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Component 1">
          <path d={svgPaths.p143eab00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8 11.75H11.75" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFramerEditorbarButton() {
  return (
    <div className="backdrop-blur-[5px] bg-[rgba(34,34,34,0.8)] content-stretch flex items-center justify-center overflow-clip relative rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(255,255,255,0.15)] shrink-0 size-[30px]" data-name="button#__framer-editorbar-button">
      <Component8 />
    </div>
  );
}

function DivFramerEditorbarContainer() {
  return (
    <div className="absolute content-stretch flex items-center right-[10px] top-[585px]" data-name="div#__framer-editorbar-container">
      <EditFramerContent />
      <ButtonFramerEditorbarButton />
    </div>
  );
}

function PFramerText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.3px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
        <p className="leading-[22.4px]">our services</p>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText2 />
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
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[800px] top-0" data-name="Section tag">
      <SectionTag1 />
    </div>
  );
}

function H1FramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h1.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[56.7px] text-white tracking-[-1.8px] w-full">
        <p className="leading-[63px] whitespace-pre-wrap">What We Offer</p>
      </div>
    </div>
  );
}

function PFramerText3() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[27px] not-italic relative shrink-0 text-[#ddd] text-[16.5px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Delivering expert video production services that `}</p>
        <p>elevate brands and bring stories to life.</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[400px] overflow-clip right-[400px] top-0" data-name="Text">
      <H1FramerText />
      <PFramerText3 />
    </div>
  );
}

function PFramerText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
        <p className="leading-[22.4px]">Scroll down</p>
      </div>
    </div>
  );
}

function DivFramer1Lpeffq() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-1lpeffq">
      <PFramerText4 />
    </div>
  );
}

function Component10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Component 1">
          <path d={svgPaths.p8871c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="Component 4">
      <Component10 />
    </div>
  );
}

function IconMask1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start right-0 top-1/2 w-[18px]" data-name="Icon:mask">
      <Component9 />
    </div>
  );
}

function IconMaskGroup1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon:mask-group">
      <IconMask1 />
      <div className="-translate-y-1/2 absolute bg-white right-0 size-[18px] top-1/2" data-name="Icon" />
    </div>
  );
}

function ScrollDownScrollDown() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[22.41px] items-center justify-end left-[1067.17px] overflow-clip pb-px top-[102.59px]" data-name="Scroll down → Scroll down">
      <DivFramer1Lpeffq />
      <IconMaskGroup1 />
    </div>
  );
}

function Grid6X() {
  return (
    <div className="h-[125px] overflow-clip relative shrink-0 w-full" data-name="Grid 6x">
      <SectionTag />
      <Text />
      <ScrollDownScrollDown />
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

function PFramerText5() {
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
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-[10%] top-[60.41px]" data-name="div.framer-11rxj8d">
      <PFramerText5 />
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

function PFramerText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Commercials</p>
      </div>
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText6 />
    </div>
  );
}

function ServiceCategoryTag() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description1 />
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

function PFramerText7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Brand Films</p>
      </div>
    </div>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText7 />
    </div>
  );
}

function ServiceCategoryTag1() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description2 />
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

function PFramerText8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Product Videos</p>
      </div>
    </div>
  );
}

function Description3() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText8 />
    </div>
  );
}

function ServiceCategoryTag2() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description3 />
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

function PFramerText9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Corporate Shoots</p>
      </div>
    </div>
  );
}

function Description4() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText9 />
    </div>
  );
}

function ServiceCategoryTag3() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description4 />
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

function PFramerText10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Event Coverage</p>
      </div>
    </div>
  );
}

function Description5() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText10 />
    </div>
  );
}

function ServiceCategoryTag4() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description5 />
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

function Wrapper1() {
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
      <Wrapper1 />
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

function PFramerText11() {
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
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-[10%] top-[60.41px]" data-name="div.framer-11rxj8d">
      <PFramerText11 />
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

function PFramerText12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Concept Development</p>
      </div>
    </div>
  );
}

function Description6() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText12 />
    </div>
  );
}

function ServiceCategoryTag5() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description6 />
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

function PFramerText13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Scriptwriting</p>
      </div>
    </div>
  );
}

function Description7() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText13 />
    </div>
  );
}

function ServiceCategoryTag6() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description7 />
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

function PFramerText14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Storyboarding</p>
      </div>
    </div>
  );
}

function Description8() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText14 />
    </div>
  );
}

function ServiceCategoryTag7() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description8 />
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

function PFramerText15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Art Direction</p>
      </div>
    </div>
  );
}

function Description9() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText15 />
    </div>
  );
}

function ServiceCategoryTag8() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description9 />
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

function PFramerText16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Campaign Planning</p>
      </div>
    </div>
  );
}

function Description10() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText16 />
    </div>
  );
}

function ServiceCategoryTag9() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description10 />
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

function Wrapper2() {
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
      <Wrapper2 />
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

function PFramerText17() {
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
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-[10%] top-[60.41px]" data-name="div.framer-11rxj8d">
      <PFramerText17 />
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

function PFramerText18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Video Editing</p>
      </div>
    </div>
  );
}

function Description11() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText18 />
    </div>
  );
}

function ServiceCategoryTag10() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description11 />
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

function PFramerText19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Color Grading</p>
      </div>
    </div>
  );
}

function Description12() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText19 />
    </div>
  );
}

function ServiceCategoryTag11() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description12 />
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

function PFramerText20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Motion Graphics</p>
      </div>
    </div>
  );
}

function Description13() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText20 />
    </div>
  );
}

function ServiceCategoryTag12() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description13 />
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

function PFramerText21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Sound Design</p>
      </div>
    </div>
  );
}

function Description14() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText21 />
    </div>
  );
}

function ServiceCategoryTag13() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description14 />
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

function PFramerText22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.1px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">Visual Effects</p>
      </div>
    </div>
  );
}

function Description15() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
      <PFramerText22 />
    </div>
  );
}

function ServiceCategoryTag14() {
  return (
    <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
      <Description15 />
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

function Wrapper3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[16px] relative self-stretch shrink-0" data-name="Wrapper">
      <TopWrapper2 />
      <BottomWrapper2 />
    </div>
  );
}

function ServiceCard1Desktop1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Service card → 1-desktop">
      <DivFramer1Nvv2Kh2 />
      <Wrapper3 />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative shrink-0 w-full" data-name="Wrapper">
      <ServiceCard1Desktop />
      <ServiceCard2Desktop />
      <ServiceCard1Desktop1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1240px] px-[24px] relative shrink-0 w-[1240px]" data-name="Container">
      <Grid6X />
      <Wrapper />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 px-[340px] py-[100px] right-0 top-0" data-name="Hero section">
      <Container1 />
    </div>
  );
}

function PFramerText23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
        <p className="leading-[22.4px]">How we work</p>
      </div>
    </div>
  );
}

function Description16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText23 />
    </div>
  );
}

function SectionTagSectionTag() {
  return (
    <div className="absolute content-stretch flex h-[22.41px] items-center justify-center left-0 overflow-clip pb-px top-0" data-name="Section tag → Section tag">
      <Description16 />
    </div>
  );
}

function H2FramerText() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="h2.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[45.4px] text-white tracking-[-1.44px] whitespace-nowrap">
        <p className="leading-[50.4px]">Inside the Process</p>
      </div>
    </div>
  );
}

function PFramerText24() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-70 right-0 top-[58.41px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] whitespace-nowrap">
        <p className="mb-0">{`From concept to screen, our process transforms ideas into `}</p>
        <p>powerful visual stories that inspire.</p>
      </div>
    </div>
  );
}

function TextWrapper() {
  return (
    <div className="absolute h-[106.41px] left-[400px] overflow-clip right-[400px] top-0" data-name="Text wrapper">
      <H2FramerText />
      <PFramerText24 />
    </div>
  );
}

function PFramerText25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[22.4px] text-[13.6px]">what we do</p>
      </div>
    </div>
  );
}

function Description17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText25 />
    </div>
  );
}

function Component12() {
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

function Component11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 4">
      <Component12 />
    </div>
  );
}

function IconMask2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]" data-name="Icon:mask">
      <Component11 />
    </div>
  );
}

function Icons() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="Icons">
      <IconMask2 />
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
      <Description17 />
      <IconWrapper />
    </a>
  );
}

function Grid6X1() {
  return (
    <div className="h-[106.41px] overflow-clip relative shrink-0 w-full" data-name="Grid 6x">
      <SectionTagSectionTag />
      <TextWrapper />
      <ButtonSmall />
    </div>
  );
}

function Component13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="1028000027">
          <path d={svgPaths.p318b9b80} fill="var(--fill-0, white)" id="C0XRUgMsp" />
          <path d={svgPaths.p318b9b80} id="z9XZNqukS" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function PFramerText26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase w-full">
        <p className="leading-[22.4px] whitespace-pre-wrap">Connect</p>
      </div>
    </div>
  );
}

function Description18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Description">
      <PFramerText26 />
    </div>
  );
}

function TabButtonActive() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px pb-[12px] relative" data-name="Tab button → Active">
      <Component13 />
      <Description18 />
      <div className="absolute inset-[1px_0_0_0]" data-name="::after">
        <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="1028000027">
          <g id="C0XRUgMsp" />
          <path d={svgPaths.p318b9b80} id="z9XZNqukS" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function PFramerText27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.5px] text-white tracking-[-0.16px] uppercase w-full">
        <p className="leading-[22.4px] whitespace-pre-wrap">Create</p>
      </div>
    </div>
  );
}

function Description19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Description">
      <PFramerText27 />
    </div>
  );
}

function Inactive() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px opacity-60 pb-[12px] relative" data-name="Inactive">
      <Component14 />
      <Description19 />
      <div className="absolute inset-[1px_0_0_0]" data-name="::after">
        <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="1028000027">
          <g id="C0XRUgMsp" />
          <path d={svgPaths.p318b9b80} id="z9XZNqukS" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function PFramerText28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-white tracking-[-0.16px] uppercase w-full">
        <p className="leading-[22.4px] whitespace-pre-wrap">Launch</p>
      </div>
    </div>
  );
}

function Description20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Description">
      <PFramerText28 />
    </div>
  );
}

function TabButtonInactive() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px opacity-60 pb-[12px] relative" data-name="Tab button → Inactive">
      <Component15 />
      <Description20 />
      <div className="absolute inset-[1px_0_0_0]" data-name="::after">
        <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function TopTabs() {
  return (
    <div className="content-stretch flex gap-[14px] items-start justify-center relative shrink-0 w-full" data-name="Top tabs">
      <TabButtonActive />
      <Inactive />
      <TabButtonInactive />
    </div>
  );
}

function CoverImage() {
  return (
    <div className="h-[473px] overflow-clip relative shrink-0 w-[763.33px]" data-name="Cover image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[161.38%] left-0 max-w-none top-[-30.69%] w-full" src={imgCoverImage} />
      </div>
    </div>
  );
}

function PFramerText29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase w-full">
        <p className="leading-[22.4px] whitespace-pre-wrap">001.</p>
      </div>
    </div>
  );
}

function Description21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Description">
      <PFramerText29 />
    </div>
  );
}

function H2FramerText1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="h2.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[45.2px] text-white tracking-[-1.44px] whitespace-nowrap">
        <p className="leading-[50.4px]">Connect</p>
      </div>
    </div>
  );
}

function PFramerText30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-0 top-[66.41px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] whitespace-nowrap">
        <p className="mb-0">{`Start by sharing your vision and goals — we’ll collaborate `}</p>
        <p className="mb-0">{`closely to plan a creative direction perfectly suited to `}</p>
        <p>your brand.</p>
      </div>
    </div>
  );
}

function TextWrapper1() {
  return (
    <div className="h-[138.41px] overflow-clip relative shrink-0 w-full" data-name="Text wrapper">
      <H2FramerText1 />
      <PFramerText30 />
    </div>
  );
}

function TopWrapper3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[22px] items-start justify-center left-0 right-0 top-[-1px]" data-name="Top wrapper">
      <Description21 />
      <TextWrapper1 />
    </div>
  );
}

function PFramerText31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[22.4px]">Contact us</p>
      </div>
    </div>
  );
}

function Description22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText31 />
    </div>
  );
}

function Component17() {
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

function Component16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 4">
      <Component17 />
    </div>
  );
}

function IconMask3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]" data-name="Icon:mask">
      <Component16 />
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

function IconWrapper1() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-name="Icon wrapper">
      <Icons1 />
    </div>
  );
}

function ButtonLarge() {
  return (
    <a className="absolute bg-[#fdc500] content-stretch cursor-pointer flex items-center justify-between left-0 overflow-clip pl-[20px] pr-[8.01px] py-[8px] right-0 rounded-[1000px] top-[425px]" data-name="Button → Large" href="https://primary-words-404174.framer.app/contact-us">
      <Description22 />
      <IconWrapper1 />
    </a>
  );
}

function Wrapper4() {
  return (
    <div className="overflow-clip relative self-stretch shrink-0 w-[374.66px]" data-name="Wrapper">
      <TopWrapper3 />
      <ButtonLarge />
    </div>
  );
}

function Desktop() {
  return (
    <div className="bg-[#242424] relative shrink-0 w-full" data-name="Desktop">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[14px] items-start justify-center p-[20px] relative w-full">
          <CoverImage />
          <Wrapper4 />
        </div>
      </div>
    </div>
  );
}

function TabContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tab content">
      <Desktop />
    </div>
  );
}

function Content1Desktop() {
  return (
    <div className="content-stretch flex flex-col gap-[23.99px] items-center justify-center relative shrink-0 w-full" data-name="Content → 1-desktop">
      <TopTabs />
      <TabContent />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[63px] items-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]" data-name="Container">
      <Grid6X1 />
      <Content1Desktop />
    </div>
  );
}

function HowWeWorkDesktop() {
  return (
    <div className="absolute bg-black content-stretch flex items-center justify-center left-0 overflow-clip px-[340px] py-[72px] right-0 top-[1949px]" data-name="How we work → Desktop">
      <Container2 />
    </div>
  );
}

function Overlay() {
  return <div className="absolute bg-black inset-[0_0_0.02%_0] opacity-30" data-name="Overlay" />;
}

function PFramerText32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
        <p className="leading-[22.4px]">Lets work together</p>
      </div>
    </div>
  );
}

function Description23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText32 />
    </div>
  );
}

function SectionTag3() {
  return (
    <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0" data-name="Section tag">
      <Description23 />
    </div>
  );
}

function SectionTag2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Section tag">
      <SectionTag3 />
    </div>
  );
}

function H2FramerText2() {
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
      <H2FramerText2 />
    </div>
  );
}

function PFramerText33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[22.4px]">contact us</p>
      </div>
    </div>
  );
}

function Description24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText33 />
    </div>
  );
}

function Component19() {
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

function Component18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 4">
      <Component19 />
    </div>
  );
}

function IconMask4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]" data-name="Icon:mask">
      <Component18 />
    </div>
  );
}

function Icons2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="Icons">
      <IconMask4 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[15px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-name="Icon wrapper">
      <Icons2 />
    </div>
  );
}

function Small() {
  return (
    <a className="bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center overflow-clip pl-[16px] pr-[6px] py-[6px] relative rounded-[1000px] shrink-0" data-name="Small" href="https://primary-words-404174.framer.app/contact-us">
      <Description24 />
      <IconWrapper2 />
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

function Wrapper5() {
  return (
    <div className="content-stretch flex flex-col gap-[22.9px] items-center justify-center max-w-[790px] overflow-clip relative shrink-0 w-[790px]" data-name="Wrapper">
      <SectionTag2 />
      <DivFramerSfb8J />
      <ButtonWrapper />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]" data-name="Container">
      <Wrapper5 />
    </div>
  );
}

function Desktop1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip pb-[463.18px] pt-[463.19px] relative shrink-0 w-full" data-name="Desktop">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[160%] left-0 max-w-none top-[-30%] w-full" src={imgDesktop} />
      </div>
      <Overlay />
      <Container3 />
    </div>
  );
}

function DivFramer18Y2YvdContainer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1200px] items-start justify-center left-0 right-0 top-[2834.81px]" data-name="div.framer-18y2yvd-container">
      <Desktop1 />
    </div>
  );
}

function Video() {
  return (
    <div className="relative self-stretch shrink-0 w-[373.33px]" data-name="Video">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVideo} />
      </div>
    </div>
  );
}

function PFramerText34() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-white tracking-[-0.44px] whitespace-nowrap">
        <p className="leading-[30.8px]">Main Pages</p>
      </div>
    </div>
  );
}

function PFramerText35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.32px] whitespace-nowrap" href="https://primary-words-404174.framer.app/">
        <p className="cursor-pointer leading-[24px] text-[14.6px]">Homepage</p>
      </a>
    </div>
  );
}

function DivFramer11Bdfbn() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-11bdfbn">
      <PFramerText35 />
    </div>
  );
}

function PFramerText36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.32px] w-full" href="https://primary-words-404174.framer.app/">
        <p className="cursor-pointer leading-[24px] text-[14.6px] whitespace-pre-wrap">Homepage</p>
      </a>
    </div>
  );
}

function DivFramerD137Jy() {
  return (
    <div className="absolute bottom-[-20px] content-stretch flex flex-col items-start left-[-0.01%] right-[0.01%]" data-name="div.framer-d137jy">
      <PFramerText36 />
    </div>
  );
}

function FooterLink1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="Footer link">
      <DivFramer11Bdfbn />
      <DivFramerD137Jy />
    </div>
  );
}

function FooterLink() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Footer link">
      <FooterLink1 />
    </div>
  );
}

function PFramerText37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-left text-white tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px]">About us</p>
      </div>
    </div>
  );
}

function DivFramer11Bdfbn1() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-11bdfbn">
      <PFramerText37 />
    </div>
  );
}

function PFramerText38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-left text-white tracking-[-0.32px] w-full" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px] whitespace-pre-wrap">About us</p>
      </div>
    </div>
  );
}

function DivFramerD137Jy1() {
  return (
    <div className="absolute bottom-[-20px] content-stretch flex flex-col items-start left-0 right-0" data-name="div.framer-d137jy">
      <PFramerText38 />
    </div>
  );
}

function FooterLink3() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="Footer link" href="https://primary-words-404174.framer.app/about-us">
      <DivFramer11Bdfbn1 />
      <DivFramerD137Jy1 />
    </a>
  );
}

function FooterLink2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Footer link">
      <FooterLink3 />
    </div>
  );
}

function PFramerText39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.3px] text-left text-white tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px]">Contact us</p>
      </div>
    </div>
  );
}

function DivFramer11Bdfbn2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-11bdfbn">
      <PFramerText39 />
    </div>
  );
}

function PFramerText40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.3px] text-left text-white tracking-[-0.32px] w-full" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px] whitespace-pre-wrap">Contact us</p>
      </div>
    </div>
  );
}

function DivFramerD137Jy2() {
  return (
    <div className="absolute bottom-[-20px] content-stretch flex flex-col items-start left-[-0.01%] right-[0.01%]" data-name="div.framer-d137jy">
      <PFramerText40 />
    </div>
  );
}

function FooterLink5() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="Footer link" href="https://primary-words-404174.framer.app/contact-us">
      <DivFramer11Bdfbn2 />
      <DivFramerD137Jy2 />
    </a>
  );
}

function FooterLink4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Footer link">
      <FooterLink5 />
    </div>
  );
}

function PFramerText41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-left text-white tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px]">404</p>
      </div>
    </div>
  );
}

function DivFramer11Bdfbn3() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-11bdfbn">
      <PFramerText41 />
    </div>
  );
}

function PFramerText42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.9px] text-left text-white tracking-[-0.32px] w-full" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px] whitespace-pre-wrap">404</p>
      </div>
    </div>
  );
}

function DivFramerD137Jy3() {
  return (
    <div className="absolute bottom-[-44px] content-stretch flex flex-col items-start left-0 right-0" data-name="div.framer-d137jy">
      <PFramerText42 />
    </div>
  );
}

function FooterLink7() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="Footer link" href="https://primary-words-404174.framer.app/404">
      <DivFramer11Bdfbn3 />
      <DivFramerD137Jy3 />
    </a>
  );
}

function FooterLink6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Footer link">
      <FooterLink7 />
    </div>
  );
}

function Wrapper6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start justify-center left-0 opacity-90 right-0 top-[50.8px]" data-name="Wrapper">
      <FooterLink />
      <FooterLink2 />
      <FooterLink4 />
      <FooterLink6 />
    </div>
  );
}

function FooterLinksWrapper() {
  return (
    <div className="h-[182.8px] overflow-clip relative shrink-0 w-[189.66px]" data-name="Footer links wrapper">
      <PFramerText34 />
      <Wrapper6 />
    </div>
  );
}

function PFramerText43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20.8px] text-white tracking-[-0.44px] whitespace-nowrap">
        <p className="leading-[30.8px]">CMS Pages</p>
      </div>
    </div>
  );
}

function PFramerText44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-left text-white tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px] text-[14.4px]">Services</p>
      </div>
    </div>
  );
}

function DivFramer11Bdfbn4() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-11bdfbn">
      <PFramerText44 />
    </div>
  );
}

function PFramerText45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-left text-white tracking-[-0.32px] w-full" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px] text-[14.4px] whitespace-pre-wrap">Services</p>
      </div>
    </div>
  );
}

function DivFramerD137Jy4() {
  return (
    <div className="absolute bottom-[-44px] content-stretch flex flex-col items-start left-0 right-0" data-name="div.framer-d137jy">
      <PFramerText45 />
    </div>
  );
}

function FooterLink9() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="Footer link" href="https://primary-words-404174.framer.app/services">
      <DivFramer11Bdfbn4 />
      <DivFramerD137Jy4 />
    </a>
  );
}

function FooterLink8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Footer link">
      <FooterLink9 />
    </div>
  );
}

function PFramerText46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.32px] whitespace-nowrap" href="https://primary-words-404174.framer.app/projects">
        <p className="cursor-pointer leading-[24px] text-[14.5px]">Projects</p>
      </a>
    </div>
  );
}

function DivFramer11Bdfbn5() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-11bdfbn">
      <PFramerText46 />
    </div>
  );
}

function PFramerText47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.32px] w-full" href="https://primary-words-404174.framer.app/projects">
        <p className="cursor-pointer leading-[24px] text-[14.5px] whitespace-pre-wrap">Projects</p>
      </a>
    </div>
  );
}

function DivFramerD137Jy5() {
  return (
    <div className="absolute bottom-[-20px] content-stretch flex flex-col items-start left-0 right-0" data-name="div.framer-d137jy">
      <PFramerText47 />
    </div>
  );
}

function FooterLink11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="Footer link">
      <DivFramer11Bdfbn5 />
      <DivFramerD137Jy5 />
    </div>
  );
}

function FooterLink10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Footer link">
      <FooterLink11 />
    </div>
  );
}

function PFramerText48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.5px] text-left text-white tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px]">Blogs</p>
      </div>
    </div>
  );
}

function DivFramer11Bdfbn6() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-11bdfbn">
      <PFramerText48 />
    </div>
  );
}

function PFramerText49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.5px] text-left text-white tracking-[-0.32px] w-full" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px] whitespace-pre-wrap">Blogs</p>
      </div>
    </div>
  );
}

function DivFramerD137Jy6() {
  return (
    <div className="absolute bottom-[-20px] content-stretch flex flex-col items-start left-0 right-0" data-name="div.framer-d137jy">
      <PFramerText49 />
    </div>
  );
}

function FooterLink13() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="Footer link" href="https://primary-words-404174.framer.app/blogs">
      <DivFramer11Bdfbn6 />
      <DivFramerD137Jy6 />
    </a>
  );
}

function FooterLink12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Footer link">
      <FooterLink13 />
    </div>
  );
}

function Wrapper7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start justify-center left-0 opacity-90 right-0 top-[50.8px]" data-name="Wrapper">
      <FooterLink8 />
      <FooterLink10 />
      <FooterLink12 />
    </div>
  );
}

function FooterLinksWrapper1() {
  return (
    <div className="h-[146.8px] overflow-clip relative shrink-0 w-[189.67px]" data-name="Footer links wrapper">
      <PFramerText43 />
      <Wrapper7 />
    </div>
  );
}

function PFramerText50() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20.8px] text-white tracking-[-0.44px] whitespace-nowrap">
        <p className="leading-[30.8px]">Follow us on</p>
      </div>
    </div>
  );
}

function PFramerText51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-left text-white tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px]">Facebook</p>
      </div>
    </div>
  );
}

function DivFramerImmjyo() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-immjyo">
      <PFramerText51 />
    </div>
  );
}

function Component21() {
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

function Component20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component21 />
    </div>
  );
}

function IconMask5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component20 />
    </div>
  );
}

function IconMaskGroup2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
      <IconMask5 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 overflow-clip relative shrink-0" data-name="Icon Wrapper">
      <IconMaskGroup2 />
    </div>
  );
}

function SocialLinkSocialLink() {
  return (
    <a className="cursor-pointer relative shrink-0 w-full" data-name="Social link → Social link" href="https://www.facebook.com/">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <DivFramerImmjyo />
          <IconWrapper3 />
        </div>
      </div>
    </a>
  );
}

function DivFramer4K2Plf() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="div.framer-4k2plf" />;
}

function PFramerText52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-left text-white tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px]">Instagram</p>
      </div>
    </div>
  );
}

function DivFramerImmjyo1() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-immjyo">
      <PFramerText52 />
    </div>
  );
}

function Component23() {
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

function Component22() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component23 />
    </div>
  );
}

function IconMask6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component22 />
    </div>
  );
}

function IconMaskGroup3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
      <IconMask6 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper4() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 overflow-clip relative shrink-0" data-name="Icon Wrapper">
      <IconMaskGroup3 />
    </div>
  );
}

function SocialLinkSocialLink1() {
  return (
    <a className="cursor-pointer relative shrink-0 w-full" data-name="Social link → Social link" href="https://www.instagram.com/">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <DivFramerImmjyo1 />
          <IconWrapper4 />
        </div>
      </div>
    </a>
  );
}

function Line() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />;
}

function PFramerText53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.8px] text-left text-white tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px]">X-Twitter</p>
      </div>
    </div>
  );
}

function DivFramerImmjyo2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-immjyo">
      <PFramerText53 />
    </div>
  );
}

function Component25() {
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

function Component24() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component25 />
    </div>
  );
}

function IconMask7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component24 />
    </div>
  );
}

function IconMaskGroup4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
      <IconMask7 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper5() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 overflow-clip relative shrink-0" data-name="Icon Wrapper">
      <IconMaskGroup4 />
    </div>
  );
}

function SocialLinkSocialLink2() {
  return (
    <a className="cursor-pointer relative shrink-0 w-full" data-name="Social link → Social link" href="https://x.com/home">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <DivFramerImmjyo2 />
          <IconWrapper5 />
        </div>
      </div>
    </a>
  );
}

function Line1() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />;
}

function PFramerText54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-left text-white tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px]">Dribbble</p>
      </div>
    </div>
  );
}

function DivFramerImmjyo3() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-immjyo">
      <PFramerText54 />
    </div>
  );
}

function Component27() {
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

function Component26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component27 />
    </div>
  );
}

function IconMask8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component26 />
    </div>
  );
}

function IconMaskGroup5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
      <IconMask8 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper6() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 overflow-clip relative shrink-0" data-name="Icon Wrapper">
      <IconMaskGroup5 />
    </div>
  );
}

function SocialLinkSocialLink3() {
  return (
    <a className="cursor-pointer relative shrink-0 w-full" data-name="Social link → Social link" href="https://dribbble.com/">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <DivFramerImmjyo3 />
          <IconWrapper6 />
        </div>
      </div>
    </a>
  );
}

function Line2() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />;
}

function PFramerText55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-left text-white tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px]">Youtube</p>
      </div>
    </div>
  );
}

function DivFramerImmjyo4() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-immjyo">
      <PFramerText55 />
    </div>
  );
}

function Component29() {
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

function Component28() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component29 />
    </div>
  );
}

function IconMask9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component28 />
    </div>
  );
}

function IconMaskGroup6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
      <IconMask9 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper7() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 overflow-clip relative shrink-0" data-name="Icon Wrapper">
      <IconMaskGroup6 />
    </div>
  );
}

function SocialLinkSocialLink4() {
  return (
    <a className="cursor-pointer relative shrink-0 w-full" data-name="Social link → Social link" href="https://www.youtube.com/">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <DivFramerImmjyo4 />
          <IconWrapper7 />
        </div>
      </div>
    </a>
  );
}

function Line3() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />;
}

function Wrapper8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 opacity-90 right-0 top-[50.8px]" data-name="Wrapper">
      <SocialLinkSocialLink />
      <DivFramer4K2Plf />
      <SocialLinkSocialLink1 />
      <Line />
      <SocialLinkSocialLink2 />
      <Line1 />
      <SocialLinkSocialLink3 />
      <Line2 />
      <SocialLinkSocialLink4 />
      <Line3 />
    </div>
  );
}

function SocialLinksWrapper() {
  return (
    <div className="h-[283.8px] overflow-clip relative shrink-0 w-[387.34px]" data-name="Social links wrapper">
      <PFramerText50 />
      <Wrapper8 />
    </div>
  );
}

function Grid4X() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-[782.67px]" data-name="Grid 4x">
      <FooterLinksWrapper />
      <FooterLinksWrapper1 />
      <SocialLinksWrapper />
    </div>
  );
}

function Grid3X() {
  return (
    <div className="content-stretch flex gap-[36px] items-start justify-center min-h-[373.3299865722656px] overflow-clip relative shrink-0 w-full" data-name="Grid 3x">
      <Video />
      <Grid4X />
    </div>
  );
}

function Component31() {
  return (
    <div className="relative shrink-0 size-[200px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 200">
        <g id="Component 1">
          <path d={svgPaths.pb912980} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[200px]" data-name="Component 4">
      <Component31 />
    </div>
  );
}

function GkYmdCuSzDdEia8BAhhQ5VE7WEmSvg1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="GkYMDCuSZDdEia8bAhhQ5vE7wEM.svg">
      <Component30 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[200px]" data-name="Icon">
      <GkYmdCuSzDdEia8BAhhQ5VE7WEmSvg1 />
    </div>
  );
}

function Component32() {
  return <div className="h-[230.406px] shrink-0 w-full" data-name="Component 1" />;
}

function PFramerText56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[252.1px] text-white tracking-[-7.684px] uppercase w-full">
        <p className="leading-[230.531px] whitespace-pre-wrap">Newclear Digital</p>
      </div>
    </div>
  );
}

function ForeignobjectFramerFitText() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[0.01px] overflow-clip top-0 w-[983.97px]" data-name="foreignobject.framer-fit-text">
      <PFramerText56 />
    </div>
  );
}

function SvgFramer14Vkgty() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="svg.framer-14vkgty">
      <Component32 />
      <ForeignobjectFramerFitText />
    </div>
  );
}

function Logo2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Logo">
      <Icon1 />
      <SvgFramer14Vkgty />
    </div>
  );
}

function PFramerText57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Newclear Digital. All rights reserved.</p>
      </div>
    </div>
  );
}

function DivFramer1Wtix2R() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.framer-1wtix2r">
      <PFramerText57 />
    </div>
  );
}

function Copyright() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[373.33px]" data-name="Copyright">
      <DivFramer1Wtix2R />
    </div>
  );
}

function Component33() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Component 2">
      <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-center text-white tracking-[-0.32px] whitespace-nowrap" href="https://x.com/xmuhammadtalha">
        <p className="cursor-pointer leading-[24px]">Muhammad talha</p>
      </a>
    </div>
  );
}

function PFramerText58() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[13.6px] text-center tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">{`Made with 🩷 by `}</p>
      </div>
      <Component33 />
    </div>
  );
}

function DivFramer1Dd8U5R() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.framer-1dd8u5r">
      <PFramerText58 />
    </div>
  );
}

function TemplateOwner() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-[373.33px]" data-name="Template owner">
      <DivFramer1Dd8U5R />
    </div>
  );
}

function Component34() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Component 2">
      <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white tracking-[-0.32px] whitespace-nowrap" href="https://x.com/xmuhammadtalha">
        <p className="cursor-pointer leading-[24px] text-[14.4px]" role="link" tabIndex="0">
          Framer
        </p>
      </a>
    </div>
  );
}

function PFramerText59() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[15.1px] text-center tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">{`Built in `}</p>
      </div>
      <Component34 />
    </div>
  );
}

function DivFramerZ4Gtlr() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-z4gtlr">
      <PFramerText59 />
    </div>
  );
}

function MadeInFramer() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 w-[373.34px]" data-name="Made in framer">
      <DivFramerZ4Gtlr />
    </div>
  );
}

function Grid6X2() {
  return (
    <div className="content-stretch flex gap-[36px] items-start justify-center overflow-clip pt-[22px] relative shrink-0 w-full" data-name="Grid 6x">
      <Copyright />
      <TemplateOwner />
      <MadeInFramer />
      <div aria-hidden="true" className="absolute border-[#444] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Wrapper9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full" data-name="Wrapper">
      <Logo2 />
      <Grid6X2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]" data-name="Container">
      <Grid3X />
      <Wrapper9 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-black content-stretch flex items-center justify-center left-0 overflow-clip pb-[32px] pt-[100px] right-0 top-[4034.81px]" data-name="Footer">
      <Container4 />
    </div>
  );
}

function EndOfBodyStart() {
  return (
    <div className="bg-black h-[4912.55px] min-h-[1200px] relative shrink-0 w-full" data-name="End of bodyStart">
      <HeroSection />
      <HowWeWorkDesktop />
      <div className="-translate-x-1/2 absolute left-1/2 size-[0.01px] top-[2834.81px]" data-name="div.framer-1idk2qn" />
      <DivFramer18Y2YvdContainer />
      <Footer />
    </div>
  );
}

function FramerLogo() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Framer Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFramerLogo} />
      </div>
    </div>
  );
}

function SpanTyol4W() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.59px] relative shrink-0" data-name="span.tyol4w7">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
        <p className="leading-[15.6px]">Edit Page</p>
      </div>
    </div>
  );
}

function PS7Fryoi() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[20.05px] pr-[20.06px] relative shrink-0" data-name="p.s7fryoi">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[18.2px] not-italic relative shrink-0 text-[#999] text-[13px] text-center whitespace-nowrap">
        <p className="mb-0">Edit the page directly</p>
        <p className="mb-0">in the browser, without</p>
        <p>opening the app.</p>
      </div>
    </div>
  );
}

function DivS1N8L1X3() {
  return (
    <div className="content-stretch flex flex-col gap-[5.01px] items-center justify-center relative shrink-0" data-name="div.s1n8l1x5">
      <SpanTyol4W />
      <PS7Fryoi />
    </div>
  );
}

function DivS1N8L1X2() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center justify-center p-[10px] relative shrink-0" data-name="div.s1n8l1x5">
      <FramerLogo />
      <DivS1N8L1X3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[20%]" data-name="Group">
      <div className="absolute inset-[-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
          <g id="Group">
            <path d="M0.75 0.75L6.75 6.75" id="Vector" stroke="var(--stroke-0, #999999)" strokeLinecap="round" strokeWidth="1.5" />
            <path d="M0.75 6.75L6.75 0.75" id="Vector_2" stroke="var(--stroke-0, #999999)" strokeLinecap="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component36() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Component 1">
      <Group />
    </div>
  );
}

function Component35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start p-[15px] right-0 top-0" data-name="Component 4">
      <Component36 />
    </div>
  );
}

function ButtonB1Rdbf0O() {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="button.b1rdbf0o">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-px px-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal]">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="div">
      <ButtonB1Rdbf0O />
    </div>
  );
}

function ButtonB1Rdbf0O1() {
  return (
    <div className="bg-white h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="button.b1rdbf0o">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-px px-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[13px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Continue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="div">
      <ButtonB1Rdbf0O1 />
    </div>
  );
}

function DivS1N8L1X4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="div.s1n8l1x5">
      <Div />
      <Div1 />
    </div>
  );
}

function DivS1N8L1X1() {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(17,17,17,0.9)] content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip p-[10px] relative rounded-[18px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1),0px_10px_20px_0px_rgba(0,0,0,0.2)] shrink-0 w-[220px]" data-name="div.s1n8l1x5">
      <DivS1N8L1X2 />
      <Component35 />
      <DivS1N8L1X4 />
    </div>
  );
}

function DivS1N8L1X() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.7)] content-stretch flex flex-col h-[1200px] items-center justify-center left-0 top-0 w-[1920px]" data-name="div.s1n8l1x5">
      <DivS1N8L1X1 />
    </div>
  );
}

function BodyX2DBody() {
  return (
    <div className="h-[1200px] min-h-[1200px] relative shrink-0 w-full" data-name="body#__x2d_body">
      <DivS1N8L1X />
    </div>
  );
}

function IframeFramerEditorbar() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1200px] items-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-1px] mask-size-[1921px_1201px] top-0 w-[1920px]" data-name="iframe#__framer-editorbar" style={{ maskImage: `url('${imgIframeFramerEditorbar}')` }}>
      <BodyX2DBody />
    </div>
  );
}

function IframeFramerEditorbarMaskGroup() {
  return (
    <div className="absolute h-[1200px] left-0 top-0 w-[1920px]" data-name="iframe#__framer-editorbar:mask-group">
      <IframeFramerEditorbar />
    </div>
  );
}

export default function Component1920WLight() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="1920w light" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <DivFramer186EzfnContainer />
      <DivFramerBadgeContainer />
      <DivFramerEditorbarContainer />
      <EndOfBodyStart />
      <IframeFramerEditorbarMaskGroup />
    </div>
  );
}