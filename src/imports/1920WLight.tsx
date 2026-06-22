import svgPaths from "./svg-ozwd53yidp";
import imgYBaA0Py3XVvTEcxJPzZkcRyAqiMp4 from "figma:asset/262a52ac8c1d4fa93d205eacd5f450331210ebf1.png";
import imgKiZgWzIdjAcGt6GFw3CmPhgS9EsMp4 from "figma:asset/13c968482cb71bf8e8530e30a5d0e388f3ab0918.png";
import img6XXkSxSqpQwYbnyxXYiH4MZhhsMp4 from "figma:asset/ae9236dfa04f1363cae00c99c0d57867eda4b5e2.png";
import img6Ufcj6AySr6YsGefadzpBSvucMp4 from "figma:asset/152f7fd9f545db6d6107fa3cc0e2b0c5ff446ab6.png";
import imgLk6QtNu51U2ATqdoTmy29Pap6PYMp4 from "figma:asset/a9ebe3e96617aea8d988d0926f30f18f320f314b.png";
import imgWhds3Qs89AkEkanctDZlab6X5VIMp4 from "figma:asset/4d6e678a5d612d332f54e6895c943db08975c034.png";
import img1FFdJ8FtBxXjdztoyzMltU9Ob6CMp4 from "figma:asset/4b79ef46a31ce408aaaf7ef069ff63362b97ebf1.png";
import imgDesktop from "figma:asset/440a9540a3ca269479ea831effae21961445d048.png";
import imgVideo from "figma:asset/bc7fec3e75371ec886cf5202470bf399a7d51cc4.png";
import imgFramerLogo from "figma:asset/186186e8842153f2d8782124c4158b0abc2624c7.png";
import { imgBottom, imgBgBlur, imgBgBlur1, imgIframeFramerEditorbar } from "./svg-fkkd3";

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
        <g clipPath="url(#clip0_97_795)" id="Component 1">
          <path d={svgPaths.p29f9900} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_97_795">
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
    <a className="block cursor-pointer h-[38px] relative shrink-0 w-[140px]" data-name="Light" href="#">
      <Backdrop />
      <Content />
      <Bottom />
      <Border />
    </a>
  );
}

function DivFramerBadgeContainer() {
  return (
    <div className="absolute bottom-[2980.73px] content-stretch flex items-start justify-end left-0 p-[20px] w-[1920px]" data-name="div#__framer-badge-container">
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

function Description() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[392px]" data-name="Description">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.1px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">2020-2025</p>
      </div>
    </div>
  );
}

function H1FramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h1.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[57.3px] text-white tracking-[-1.8px] w-full">
        <p className="leading-[63px] whitespace-pre-wrap">Our projects</p>
      </div>
    </div>
  );
}

function PFramerText2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[27px] not-italic relative shrink-0 text-[#ddd] text-[16.3px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Showcasing our finest video projects crafted with `}</p>
        <p>{`creativity, passion, & cinematic excellence.`}</p>
      </div>
    </div>
  );
}

function TextWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[124.8px]" data-name="Text wrapper">
      <H1FramerText />
      <PFramerText2 />
    </div>
  );
}

function PFramerText3() {
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
      <PFramerText3 />
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
    <div className="content-stretch flex gap-[4px] h-[22.41px] items-center justify-end overflow-clip pb-px relative shrink-0" data-name="Scroll down → Scroll down">
      <DivFramer1Lpeffq />
      <IconMaskGroup1 />
    </div>
  );
}

function Grid6X() {
  return (
    <div className="content-stretch flex gap-[275.2px] items-end justify-center overflow-clip relative shrink-0 w-full" data-name="Grid 6x">
      <Description />
      <TextWrapper />
      <ScrollDownScrollDown />
    </div>
  );
}

function YBaA0Py3XVvTEcxJPzZkcRyAqiMp() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="yBaA0py3xVvTEcxJPzZKCRyAQI.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[183.38%] left-0 max-w-none top-[-41.69%] w-full" src={imgYBaA0Py3XVvTEcxJPzZkcRyAqiMp4} />
      </div>
    </div>
  );
}

function Video() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Video">
      <YBaA0Py3XVvTEcxJPzZkcRyAqiMp />
    </div>
  );
}

function BgBlur() {
  return <div className="absolute backdrop-blur-[5px] bottom-0 h-[296px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_296px] right-0" data-name="BG Blur" style={{ maskImage: `url('${imgBgBlur}')` }} />;
}

function BgBlurMaskGroup() {
  return (
    <div className="absolute bottom-0 h-[296px] left-0 right-0" data-name="BG Blur:mask-group">
      <BgBlur />
    </div>
  );
}

function H4FramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h4.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[34.3px] text-left text-white tracking-[-0.72px] w-full" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[50.4px] whitespace-pre-wrap">Lumen Brew</p>
      </div>
    </div>
  );
}

function DivFramer1F2Ur4N() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-1f2ur4n">
      <H4FramerText />
    </div>
  );
}

function PFramerText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="cursor-pointer flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] text-left tracking-[-0.32px] w-full whitespace-pre-wrap" role="link" tabIndex="0">
        <p className="mb-0">Created a cinematic video showcasing the warmth,</p>
        <p>craftsmanship, and storytelling behind Lumen Brew Coffee.</p>
      </div>
    </div>
  );
}

function DivFramer42Z() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[500px] opacity-70 relative shrink-0 w-[500px]" data-name="div.framer-42z002">
      <PFramerText4 />
    </div>
  );
}

function TextWrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Text wrapper">
      <DivFramer1F2Ur4N />
      <DivFramer42Z />
    </div>
  );
}

function PFramerText5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.8px] text-left whitespace-nowrap">
        <p className="leading-[19.6px]">Video Production</p>
      </div>
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText5 />
    </div>
  );
}

function BlogTag() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
      <Description1 />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ServiceProvided() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Service provided">
      <BlogTag />
    </div>
  );
}

function PFramerText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.1px] text-left whitespace-nowrap">
        <p className="leading-[19.6px]">Nov 4, 2025</p>
      </div>
    </div>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText6 />
    </div>
  );
}

function BlogTag1() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
      <Description2 />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Date">
      <BlogTag1 />
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Details">
      <ServiceProvided />
      <Date />
    </div>
  );
}

function TextWrapper1() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[22px] items-start justify-end left-0 overflow-clip pb-[28px] pt-[27px] px-[28px] right-0 to-black" data-name="Text wrapper">
      <TextWrapper2 />
      <Details />
    </div>
  );
}

function FeaturedProject() {
  return (
    <a className="block cursor-pointer flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Featured project" href="https://primary-words-404174.framer.app/projects/lumen-brew">
      <Video />
      <BgBlurMaskGroup />
      <TextWrapper1 />
    </a>
  );
}

function ProjectsWrapperFeaturedProject() {
  return (
    <div className="content-stretch flex flex-col h-[650px] items-start justify-center relative shrink-0 w-full" data-name="Projects wrapper → Featured project">
      <FeaturedProject />
    </div>
  );
}

function H6FramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h6.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[26.7px] text-white tracking-[-0.84px] w-full">
        <p className="leading-[29.4px] whitespace-pre-wrap">Search by filter</p>
      </div>
    </div>
  );
}

function DivFramerCpt70A() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[804px]" data-name="div.framer-cpt70a">
      <H6FramerText />
    </div>
  );
}

function PFramerText7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">All Projects</p>
      </div>
    </div>
  );
}

function Description3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText7 />
    </div>
  );
}

function Component12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p1f0e57c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component12 />
    </div>
  );
}

function IconMask2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component11 />
    </div>
  );
}

function IconMaskGroup2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
      <IconMask2 />
      <div className="-translate-y-1/2 absolute bg-white left-0 size-[20px] top-1/2" data-name="Icon" />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Text">
      <Description3 />
      <IconMaskGroup2 />
    </div>
  );
}

function Filter() {
  return (
    <div className="bg-[#242424] content-stretch flex flex-col items-start max-w-[380px] p-[14px] relative shrink-0 w-[380px]" data-name="Filter">
      <Text />
    </div>
  );
}

function TopWrapper() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Top wrapper">
      <DivFramerCpt70A />
      <Filter />
    </div>
  );
}

function KiZgWzIdjAcGt6GFw3CmPhgS9EsMp() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="KiZGWzIDJAcGT6gFW3CMPhgS9Es.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-7.29%] max-w-none top-0 w-[114.58%]" src={imgKiZgWzIdjAcGt6GFw3CmPhgS9EsMp4} />
      </div>
    </div>
  );
}

function Video1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Video">
      <KiZgWzIdjAcGt6GFw3CmPhgS9EsMp />
    </div>
  );
}

function BgBlurMaskGroup1() {
  return (
    <div className="absolute bottom-0 h-[175px] left-0 right-0" data-name="BG blur:mask-group">
      <div className="absolute backdrop-blur-[5px] bottom-0 h-[175px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_175px] right-0" data-name="BG blur" style={{ maskImage: `url('${imgBgBlur1}')` }} />
    </div>
  );
}

function H6FramerText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h6.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[26.4px] text-left text-white tracking-[-0.84px] w-full" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[29.4px] whitespace-pre-wrap">Pulse Drive</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <H6FramerText1 />
    </div>
  );
}

function PFramerText8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.7px] text-left whitespace-nowrap">
        <p className="leading-[19.6px]">Creative Direction</p>
      </div>
    </div>
  );
}

function Description4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText8 />
    </div>
  );
}

function BlogTag2() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
      <Description4 />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ServiceProvided1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Service provided">
      <BlogTag2 />
    </div>
  );
}

function PFramerText9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.1px] text-left whitespace-nowrap">
        <p className="leading-[19.6px]">Apr 10, 2025</p>
      </div>
    </div>
  );
}

function Description5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText9 />
    </div>
  );
}

function BlogTag3() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
      <Description5 />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Date1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Date">
      <BlogTag3 />
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Details">
      <ServiceProvided1 />
      <Date1 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col gap-[16px] items-start justify-center left-0 p-[20px] right-0" data-name="Text">
      <Heading />
      <Details1 />
    </div>
  );
}

function ProjectCardProjectCard() {
  return (
    <a className="absolute block h-[440px] left-0 right-[808px] top-0" data-name="Project card → Project card" href="https://primary-words-404174.framer.app/projects/pulse-drive">
      <Video1 />
      <BgBlurMaskGroup1 />
      <Text1 />
    </a>
  );
}

function Component6XXkSxSqpQwYbnyxXYiH4MZhhsMp() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="6xXKSxSqpQwYbnyxXYiH4mZhhs.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-7.29%] max-w-none top-0 w-[114.58%]" src={img6XXkSxSqpQwYbnyxXYiH4MZhhsMp4} />
      </div>
    </div>
  );
}

function Video2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Video">
      <Component6XXkSxSqpQwYbnyxXYiH4MZhhsMp />
    </div>
  );
}

function BgBlurMaskGroup2() {
  return (
    <div className="absolute bottom-0 h-[175px] left-0 right-0" data-name="BG blur:mask-group">
      <div className="absolute backdrop-blur-[5px] bottom-0 h-[175px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_175px] right-0" data-name="BG blur" style={{ maskImage: `url('${imgBgBlur1}')` }} />
    </div>
  );
}

function H6FramerText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h6.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[26.7px] text-left text-white tracking-[-0.84px] w-full" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[29.4px] whitespace-pre-wrap">Echo Frames</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <H6FramerText2 />
    </div>
  );
}

function PFramerText10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.8px] text-left whitespace-nowrap">
        <p className="leading-[19.6px]">Video Production</p>
      </div>
    </div>
  );
}

function Description6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText10 />
    </div>
  );
}

function BlogTag4() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
      <Description6 />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ServiceProvided2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Service provided">
      <BlogTag4 />
    </div>
  );
}

function PFramerText11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.1px] text-left whitespace-nowrap">
        <p className="leading-[19.6px]">Aug 4, 2024</p>
      </div>
    </div>
  );
}

function Description7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText11 />
    </div>
  );
}

function BlogTag5() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
      <Description7 />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Date2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Date">
      <BlogTag5 />
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Details">
      <ServiceProvided2 />
      <Date2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col gap-[16px] items-start justify-center left-0 p-[20px] right-0" data-name="Text">
      <Heading1 />
      <Details2 />
    </div>
  );
}

function ProjectCardProjectCard1() {
  return (
    <a className="absolute block h-[440px] left-[404px] right-[404px] top-0" data-name="Project card → Project card" href="https://primary-words-404174.framer.app/projects/echo-frames">
      <Video2 />
      <BgBlurMaskGroup2 />
      <Text2 />
    </a>
  );
}

function Component6Ufcj6AySr6YsGefadzpBSvucMp() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="6UFCJ6aySr6YsGefadzpBSvuc.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-7.29%] max-w-none top-0 w-[114.58%]" src={img6Ufcj6AySr6YsGefadzpBSvucMp4} />
      </div>
    </div>
  );
}

function Video3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Video">
      <Component6Ufcj6AySr6YsGefadzpBSvucMp />
    </div>
  );
}

function BgBlurMaskGroup3() {
  return (
    <div className="absolute bottom-0 h-[175px] left-0 right-0" data-name="BG blur:mask-group">
      <div className="absolute backdrop-blur-[5px] bottom-0 h-[175px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_175px] right-0" data-name="BG blur" style={{ maskImage: `url('${imgBgBlur1}')` }} />
    </div>
  );
}

function H6FramerText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h6.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[26.6px] text-left text-white tracking-[-0.84px] w-full" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[29.4px] whitespace-pre-wrap">Waveline</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <H6FramerText3 />
    </div>
  );
}

function PFramerText12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.7px] text-left whitespace-nowrap">
        <p className="leading-[19.6px]">{`Post-Production & Editing`}</p>
      </div>
    </div>
  );
}

function Description8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText12 />
    </div>
  );
}

function BlogTag6() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
      <Description8 />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ServiceProvided3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Service provided">
      <BlogTag6 />
    </div>
  );
}

function PFramerText13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[11.9px] text-left whitespace-nowrap">
        <p className="leading-[19.6px]">Dec 19, 2023</p>
      </div>
    </div>
  );
}

function Description9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText13 />
    </div>
  );
}

function BlogTag7() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
      <Description9 />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Date3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Date">
      <BlogTag7 />
    </div>
  );
}

function Details3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Details">
      <ServiceProvided3 />
      <Date3 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col gap-[16px] items-start justify-center left-0 p-[20px] right-0" data-name="Text">
      <Heading2 />
      <Details3 />
    </div>
  );
}

function ProjectCardProjectCard2() {
  return (
    <a className="absolute block h-[440px] left-[808px] right-0 top-0" data-name="Project card → Project card" href="https://primary-words-404174.framer.app/projects/waveline">
      <Video3 />
      <BgBlurMaskGroup3 />
      <Text3 />
    </a>
  );
}

function Lk6QtNu51U2ATqdoTmy29Pap6PYMp() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="LK6QTNu51u2ATqdoTmy29PAP6pY.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-7.29%] max-w-none top-0 w-[114.58%]" src={imgLk6QtNu51U2ATqdoTmy29Pap6PYMp4} />
      </div>
    </div>
  );
}

function Video4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Video">
      <Lk6QtNu51U2ATqdoTmy29Pap6PYMp />
    </div>
  );
}

function BgBlurMaskGroup4() {
  return (
    <div className="absolute bottom-0 h-[175px] left-0 right-0" data-name="BG blur:mask-group">
      <div className="absolute backdrop-blur-[5px] bottom-0 h-[175px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_175px] right-0" data-name="BG blur" style={{ maskImage: `url('${imgBgBlur1}')` }} />
    </div>
  );
}

function H6FramerText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h6.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[26.5px] text-left text-white tracking-[-0.84px] w-full" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[29.4px] whitespace-pre-wrap">Noir Threads</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <H6FramerText4 />
    </div>
  );
}

function PFramerText14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.7px] text-left whitespace-nowrap">
        <p className="leading-[19.6px]">Creative Direction</p>
      </div>
    </div>
  );
}

function Description10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText14 />
    </div>
  );
}

function BlogTag8() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
      <Description10 />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ServiceProvided4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Service provided">
      <BlogTag8 />
    </div>
  );
}

function PFramerText15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[11.9px] text-left whitespace-nowrap">
        <p className="leading-[19.6px]">Oct 18, 2022</p>
      </div>
    </div>
  );
}

function Description11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText15 />
    </div>
  );
}

function BlogTag9() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
      <Description11 />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Date4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Date">
      <BlogTag9 />
    </div>
  );
}

function Details4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Details">
      <ServiceProvided4 />
      <Date4 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col gap-[16px] items-start justify-center left-0 p-[20px] right-0" data-name="Text">
      <Heading3 />
      <Details4 />
    </div>
  );
}

function ProjectCardProjectCard3() {
  return (
    <a className="absolute block h-[440px] left-0 right-[808px] top-[460px]" data-name="Project card → Project card" href="https://primary-words-404174.framer.app/projects/noir-threads">
      <Video4 />
      <BgBlurMaskGroup4 />
      <Text4 />
    </a>
  );
}

function Whds3Qs89AkEkanctDZlab6X5VIMp() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="whds3Qs89akEkanctDZlab6x5vI.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-7.29%] max-w-none top-0 w-[114.58%]" src={imgWhds3Qs89AkEkanctDZlab6X5VIMp4} />
      </div>
    </div>
  );
}

function Video5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Video">
      <Whds3Qs89AkEkanctDZlab6X5VIMp />
    </div>
  );
}

function BgBlurMaskGroup5() {
  return (
    <div className="absolute bottom-0 h-[175px] left-0 right-0" data-name="BG blur:mask-group">
      <div className="absolute backdrop-blur-[5px] bottom-0 h-[175px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_175px] right-0" data-name="BG blur" style={{ maskImage: `url('${imgBgBlur1}')` }} />
    </div>
  );
}

function H6FramerText5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h6.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[26.5px] text-left text-white tracking-[-0.84px] w-full" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[29.4px] whitespace-pre-wrap">Auralis</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <H6FramerText5 />
    </div>
  );
}

function PFramerText16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.8px] text-left whitespace-nowrap">
        <p className="leading-[19.6px]">Video Production</p>
      </div>
    </div>
  );
}

function Description12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText16 />
    </div>
  );
}

function BlogTag10() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
      <Description12 />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ServiceProvided5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Service provided">
      <BlogTag10 />
    </div>
  );
}

function PFramerText17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12px] text-left whitespace-nowrap">
        <p className="leading-[19.6px]">Jun 22, 2021</p>
      </div>
    </div>
  );
}

function Description13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText17 />
    </div>
  );
}

function BlogTag11() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
      <Description13 />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Date5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Date">
      <BlogTag11 />
    </div>
  );
}

function Details5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Details">
      <ServiceProvided5 />
      <Date5 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col gap-[16px] items-start justify-center left-0 p-[20px] right-0" data-name="Text">
      <Heading4 />
      <Details5 />
    </div>
  );
}

function ProjectCardProjectCard4() {
  return (
    <a className="absolute block h-[440px] left-[404px] right-[404px] top-[460px]" data-name="Project card → Project card" href="https://primary-words-404174.framer.app/projects/auralis">
      <Video5 />
      <BgBlurMaskGroup5 />
      <Text5 />
    </a>
  );
}

function Component1FFdJ8FtBxXjdztoyzMltU9Ob6CMp() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="1fFdJ8FTBxXjdztoyzMltU9Ob6c.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-7.29%] max-w-none top-0 w-[114.58%]" src={img1FFdJ8FtBxXjdztoyzMltU9Ob6CMp4} />
      </div>
    </div>
  );
}

function Video6() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Video">
      <Component1FFdJ8FtBxXjdztoyzMltU9Ob6CMp />
    </div>
  );
}

function BgBlurMaskGroup6() {
  return (
    <div className="absolute bottom-0 h-[175px] left-0 right-0" data-name="BG blur:mask-group">
      <div className="absolute backdrop-blur-[5px] bottom-0 h-[175px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_175px] right-0" data-name="BG blur" style={{ maskImage: `url('${imgBgBlur1}')` }} />
    </div>
  );
}

function H6FramerText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h6.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[26.4px] text-left text-white tracking-[-0.84px] w-full" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[29.4px] whitespace-pre-wrap">Terra Glow</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
      <H6FramerText6 />
    </div>
  );
}

function PFramerText18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.7px] text-left whitespace-nowrap">
        <p className="leading-[19.6px]">{`Post-Production & Editing`}</p>
      </div>
    </div>
  );
}

function Description14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText18 />
    </div>
  );
}

function BlogTag12() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
      <Description14 />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ServiceProvided6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Service provided">
      <BlogTag12 />
    </div>
  );
}

function PFramerText19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.1px] text-left whitespace-nowrap">
        <p className="leading-[19.6px]">Mar 4, 2020</p>
      </div>
    </div>
  );
}

function Description15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText19 />
    </div>
  );
}

function BlogTag13() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
      <Description15 />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Date6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Date">
      <BlogTag13 />
    </div>
  );
}

function Details6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Details">
      <ServiceProvided6 />
      <Date6 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col gap-[16px] items-start justify-center left-0 p-[20px] right-0" data-name="Text">
      <Heading5 />
      <Details6 />
    </div>
  );
}

function ProjectCardProjectCard5() {
  return (
    <a className="absolute block h-[440px] left-[808px] right-0 top-[460px]" data-name="Project card → Project card" href="https://primary-words-404174.framer.app/projects/terra-glow">
      <Video6 />
      <BgBlurMaskGroup6 />
      <Text6 />
    </a>
  );
}

function ProjectsWrapper() {
  return (
    <div className="cursor-pointer h-[900px] relative shrink-0 w-full" data-name="Projects wrapper">
      <ProjectCardProjectCard />
      <ProjectCardProjectCard1 />
      <ProjectCardProjectCard2 />
      <ProjectCardProjectCard3 />
      <ProjectCardProjectCard4 />
      <ProjectCardProjectCard5 />
    </div>
  );
}

function ProjectsAll() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Projects → All">
      <TopWrapper />
      <ProjectsWrapper />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0" data-name="Container">
      <Grid6X />
      <ProjectsWrapperFeaturedProject />
      <ProjectsAll />
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

function Overlay() {
  return <div className="absolute bg-black inset-[0_0_0.02%_0] opacity-30" data-name="Overlay" />;
}

function PFramerText20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
        <p className="leading-[22.4px]">Lets work together</p>
      </div>
    </div>
  );
}

function Description16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText20 />
    </div>
  );
}

function SectionTag1() {
  return (
    <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0" data-name="Section tag">
      <Description16 />
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

function PFramerText21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[22.4px]">contact us</p>
      </div>
    </div>
  );
}

function Description17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText21 />
    </div>
  );
}

function Component14() {
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

function Component13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 4">
      <Component14 />
    </div>
  );
}

function IconMask3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]" data-name="Icon:mask">
      <Component13 />
    </div>
  );
}

function Icons() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="Icons">
      <IconMask3 />
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
      <Description17 />
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

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]" data-name="Container">
      <Wrapper />
    </div>
  );
}

function Desktop() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip pb-[463.18px] pt-[463.19px] relative shrink-0 w-full" data-name="Desktop">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[160%] left-0 max-w-none top-[-30%] w-full" src={imgDesktop} />
      </div>
      <Overlay />
      <Container2 />
    </div>
  );
}

function DivFramer18Y2YvdContainer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1200px] items-start justify-center left-0 right-0 top-[2103px]" data-name="div.framer-18y2yvd-container">
      <Desktop />
    </div>
  );
}

function Video7() {
  return (
    <div className="relative self-stretch shrink-0 w-[373.33px]" data-name="Video">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVideo} />
      </div>
    </div>
  );
}

function PFramerText22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-white tracking-[-0.44px] whitespace-nowrap">
        <p className="leading-[30.8px]">Main Pages</p>
      </div>
    </div>
  );
}

function PFramerText23() {
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
      <PFramerText23 />
    </div>
  );
}

function PFramerText24() {
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
      <PFramerText24 />
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

function PFramerText25() {
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
      <PFramerText25 />
    </div>
  );
}

function PFramerText26() {
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
      <PFramerText26 />
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

function PFramerText27() {
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
      <PFramerText27 />
    </div>
  );
}

function PFramerText28() {
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
      <PFramerText28 />
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

function PFramerText29() {
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
      <PFramerText29 />
    </div>
  );
}

function PFramerText30() {
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
      <PFramerText30 />
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

function Wrapper1() {
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
      <PFramerText22 />
      <Wrapper1 />
    </div>
  );
}

function PFramerText31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20.8px] text-white tracking-[-0.44px] whitespace-nowrap">
        <p className="leading-[30.8px]">CMS Pages</p>
      </div>
    </div>
  );
}

function PFramerText32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-left text-white tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px]">Services</p>
      </div>
    </div>
  );
}

function DivFramer11Bdfbn4() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-11bdfbn">
      <PFramerText32 />
    </div>
  );
}

function PFramerText33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-left text-white tracking-[-0.32px] w-full" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px] whitespace-pre-wrap">Services</p>
      </div>
    </div>
  );
}

function DivFramerD137Jy4() {
  return (
    <div className="absolute bottom-[-44px] content-stretch flex flex-col items-start left-0 right-0" data-name="div.framer-d137jy">
      <PFramerText33 />
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

function PFramerText34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-left text-white tracking-[-0.32px] whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px] text-[14.5px]">Projects</p>
      </div>
    </div>
  );
}

function DivFramer11Bdfbn5() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-11bdfbn">
      <PFramerText34 />
    </div>
  );
}

function PFramerText35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-left text-white tracking-[-0.32px] w-full" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[24px] text-[14.5px] whitespace-pre-wrap">Projects</p>
      </div>
    </div>
  );
}

function DivFramerD137Jy5() {
  return (
    <div className="absolute bottom-[-20px] content-stretch flex flex-col items-start left-0 right-0" data-name="div.framer-d137jy">
      <PFramerText35 />
    </div>
  );
}

function FooterLink11() {
  return (
    <a className="content-stretch cursor-pointer flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="Footer link" href="https://primary-words-404174.framer.app/projects">
      <DivFramer11Bdfbn5 />
      <DivFramerD137Jy5 />
    </a>
  );
}

function FooterLink10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Footer link">
      <FooterLink11 />
    </div>
  );
}

function PFramerText36() {
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
      <PFramerText36 />
    </div>
  );
}

function PFramerText37() {
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
      <PFramerText37 />
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

function Wrapper2() {
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
      <PFramerText31 />
      <Wrapper2 />
    </div>
  );
}

function PFramerText38() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20.8px] text-white tracking-[-0.44px] whitespace-nowrap">
        <p className="leading-[30.8px]">Follow us on</p>
      </div>
    </div>
  );
}

function PFramerText39() {
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
      <PFramerText39 />
    </div>
  );
}

function Component16() {
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

function Component15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component16 />
    </div>
  );
}

function IconMask4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component15 />
    </div>
  );
}

function IconMaskGroup3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
      <IconMask4 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 overflow-clip relative shrink-0" data-name="Icon Wrapper">
      <IconMaskGroup3 />
    </div>
  );
}

function SocialLinkSocialLink() {
  return (
    <a className="cursor-pointer relative shrink-0 w-full" data-name="Social link → Social link" href="https://www.facebook.com/">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <DivFramerImmjyo />
          <IconWrapper1 />
        </div>
      </div>
    </a>
  );
}

function DivFramer4K2Plf() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="div.framer-4k2plf" />;
}

function PFramerText40() {
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
      <PFramerText40 />
    </div>
  );
}

function Component18() {
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

function Component17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component18 />
    </div>
  );
}

function IconMask5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component17 />
    </div>
  );
}

function IconMaskGroup4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
      <IconMask5 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 overflow-clip relative shrink-0" data-name="Icon Wrapper">
      <IconMaskGroup4 />
    </div>
  );
}

function SocialLinkSocialLink1() {
  return (
    <a className="cursor-pointer relative shrink-0 w-full" data-name="Social link → Social link" href="https://www.instagram.com/">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <DivFramerImmjyo1 />
          <IconWrapper2 />
        </div>
      </div>
    </a>
  );
}

function Line() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />;
}

function PFramerText41() {
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
      <PFramerText41 />
    </div>
  );
}

function Component20() {
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

function Component19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component20 />
    </div>
  );
}

function IconMask6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component19 />
    </div>
  );
}

function IconMaskGroup5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
      <IconMask6 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 overflow-clip relative shrink-0" data-name="Icon Wrapper">
      <IconMaskGroup5 />
    </div>
  );
}

function SocialLinkSocialLink2() {
  return (
    <a className="cursor-pointer relative shrink-0 w-full" data-name="Social link → Social link" href="https://x.com/home">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <DivFramerImmjyo2 />
          <IconWrapper3 />
        </div>
      </div>
    </a>
  );
}

function Line1() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />;
}

function PFramerText42() {
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
      <PFramerText42 />
    </div>
  );
}

function Component22() {
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

function Component21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component22 />
    </div>
  );
}

function IconMask7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component21 />
    </div>
  );
}

function IconMaskGroup6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
      <IconMask7 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper4() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 overflow-clip relative shrink-0" data-name="Icon Wrapper">
      <IconMaskGroup6 />
    </div>
  );
}

function SocialLinkSocialLink3() {
  return (
    <a className="cursor-pointer relative shrink-0 w-full" data-name="Social link → Social link" href="https://dribbble.com/">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <DivFramerImmjyo3 />
          <IconWrapper4 />
        </div>
      </div>
    </a>
  );
}

function Line2() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />;
}

function PFramerText43() {
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
      <PFramerText43 />
    </div>
  );
}

function Component24() {
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

function Component23() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component24 />
    </div>
  );
}

function IconMask8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component23 />
    </div>
  );
}

function IconMaskGroup7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
      <IconMask8 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper5() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-60 overflow-clip relative shrink-0" data-name="Icon Wrapper">
      <IconMaskGroup7 />
    </div>
  );
}

function SocialLinkSocialLink4() {
  return (
    <a className="cursor-pointer relative shrink-0 w-full" data-name="Social link → Social link" href="https://www.youtube.com/">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <DivFramerImmjyo4 />
          <IconWrapper5 />
        </div>
      </div>
    </a>
  );
}

function Line3() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />;
}

function Wrapper3() {
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
      <PFramerText38 />
      <Wrapper3 />
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
      <Video7 />
      <Grid4X />
    </div>
  );
}

function Component26() {
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

function Component25() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[200px]" data-name="Component 4">
      <Component26 />
    </div>
  );
}

function GkYmdCuSzDdEia8BAhhQ5VE7WEmSvg1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="GkYMDCuSZDdEia8bAhhQ5vE7wEM.svg">
      <Component25 />
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

function Component27() {
  return <div className="h-[230.406px] shrink-0 w-full" data-name="Component 1" />;
}

function PFramerText44() {
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
      <PFramerText44 />
    </div>
  );
}

function SvgFramer14Vkgty() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="svg.framer-14vkgty">
      <Component27 />
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

function PFramerText45() {
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
      <PFramerText45 />
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

function Component28() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Component 2">
      <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-center text-white tracking-[-0.32px] whitespace-nowrap" href="https://x.com/xmuhammadtalha">
        <p className="cursor-pointer leading-[24px]">Muhammad talha</p>
      </a>
    </div>
  );
}

function PFramerText46() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[13.6px] text-center tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">{`Made with 🩷 by `}</p>
      </div>
      <Component28 />
    </div>
  );
}

function DivFramer1Dd8U5R() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.framer-1dd8u5r">
      <PFramerText46 />
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

function Component29() {
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

function PFramerText47() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[15.1px] text-center tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">{`Built in `}</p>
      </div>
      <Component29 />
    </div>
  );
}

function DivFramerZ4Gtlr() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-z4gtlr">
      <PFramerText47 />
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

function Grid6X1() {
  return (
    <div className="content-stretch flex gap-[36px] items-start justify-center overflow-clip pt-[22px] relative shrink-0 w-full" data-name="Grid 6x">
      <Copyright />
      <TemplateOwner />
      <MadeInFramer />
      <div aria-hidden="true" className="absolute border-[#444] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Wrapper4() {
  return (
    <div className="content-stretch flex flex-col gap-[31.99px] items-center justify-center relative shrink-0 w-full" data-name="Wrapper">
      <Logo2 />
      <Grid6X1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]" data-name="Container">
      <Grid3X />
      <Wrapper4 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-black content-stretch flex items-center justify-center left-0 overflow-clip pb-[32px] pt-[100px] right-0 top-[3303px]" data-name="Footer">
      <Container3 />
    </div>
  );
}

function EndOfBodyStart() {
  return (
    <div className="bg-black h-[4180.73px] min-h-[1200px] relative shrink-0 w-full" data-name="End of bodyStart">
      <HeroSection />
      <div className="-translate-x-1/2 absolute left-1/2 size-[0.01px] top-[2103px]" data-name="div.framer-1idk2qn" />
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

function Component31() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Component 1">
      <Group />
    </div>
  );
}

function Component30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start p-[15px] right-0 top-0" data-name="Component 4">
      <Component31 />
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
      <Component30 />
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