import svgPaths from "./svg-lcn8oo4q1c";
import imgYBaA0Py3XVvTEcxJPzZkcRyAqiMp4 from "figma:asset/262a52ac8c1d4fa93d205eacd5f450331210ebf1.png";
import imgStwjz8NPvdLrtlUtZSa1Q2TiWj4Mp4 from "figma:asset/4226d314ffe705a0bd7b293b43a3a0233bfac3f1.png";
import imgFj77GdLzfqxchf7V1Avap8QMp4 from "figma:asset/7b2cdb7620ebd863cc75638869331737f67c2115.png";
import imgRfuIrDwIjOsmiTbC2G0Wk58YoMp4 from "figma:asset/81d39f462dbcc34c57d5d24f3d6e4a87db3b19f2.png";
import imgDesktop from "figma:asset/440a9540a3ca269479ea831effae21961445d048.png";
import imgVideo from "figma:asset/bc7fec3e75371ec886cf5202470bf399a7d51cc4.png";
import imgFramerLogo from "figma:asset/186186e8842153f2d8782124c4158b0abc2624c7.png";
import { imgBottom, imgIframeFramerEditorbar } from "./svg-zsbiq";

function Backdrop() {
  return <div className="absolute bg-white inset-px rounded-[10px] shadow-[0px_0.602px_1.566px_-1.5px_rgba(0,0,0,0.17),0px_2.289px_5.95px_-3px_rgba(0,0,0,0.14),0px_10px_26px_-4.5px_rgba(0,0,0,0.02)]" data-name="Backdrop" />;
}

function Component() {
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

function Component3() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-center justify-center overflow-clip relative shrink-0 w-[12px]" data-name="Component 4">
      <Component />
    </div>
  );
}

function LogoMask() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-0 w-[12px]" data-name="Logo:mask">
      <Component3 />
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

function Component1() {
  return (
    <div className="h-[10px] relative shrink-0 w-[97px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 10">
        <g clipPath="url(#clip0_133_643)" id="Component 1">
          <path d={svgPaths.p29f9900} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_133_643">
            <rect fill="white" height="10" width="97" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col h-[10px] items-center justify-center overflow-clip relative shrink-0 w-[97px]" data-name="Component 4">
      <Component1 />
    </div>
  );
}

function TextMask() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2 w-[97px]" data-name="Text:mask">
      <Component4 />
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

function Light() {
  return (
    <a className="block cursor-pointer h-[38px] relative shrink-0 w-[140px]" data-name="Light" href="#">
      <Backdrop />
      <Content />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0%] mask-size-[100%_100%] opacity-6 rounded-[11px]" data-name="Bottom" style={{ maskImage: `url('${imgBottom}')` }}>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_black]" />
      </div>
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 opacity-4 rounded-[11px]" data-name="Border">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_black]" />
      </div>
    </a>
  );
}

function DivFramerBadgeContainer() {
  return (
    <div className="absolute bottom-[4547.14px] content-stretch flex items-start justify-end left-0 p-[20px] w-[1920px]" data-name="div#__framer-badge-container">
      <Light />
    </div>
  );
}

function EditFramerContent() {
  return (
    <div className="absolute backdrop-blur-[5px] bg-[rgba(34,34,34,0.8)] content-stretch flex flex-col items-start opacity-0 px-[8px] py-[4px] right-[37.64px] rounded-[8px] top-[3.5px]" data-name="Edit Framer Content">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(255,255,255,0.15)]" data-name="Edit Framer Content:shadow" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Edit Content</p>
      </div>
    </div>
  );
}

function Component2() {
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
    <div className="backdrop-blur-[5px] bg-[rgba(34,34,34,0.8)] content-stretch flex items-center justify-center relative rounded-[15px] shrink-0 size-[30px]" data-name="button#__framer-editorbar-button">
      <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(255,255,255,0.15)] size-[30px] top-1/2" data-name="button#__framer-editorbar-button:shadow" />
      <Component2 />
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

function YBaA0Py3XVvTEcxJPzZkcRyAqiMp() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="yBaA0py3xVvTEcxJPzZKCRyAQI.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[160%] left-0 max-w-none top-[-30%] w-full" src={imgYBaA0Py3XVvTEcxJPzZkcRyAqiMp4} />
      </div>
    </div>
  );
}

function HeroVideo() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Hero video">
      <YBaA0Py3XVvTEcxJPzZkcRyAqiMp />
    </div>
  );
}

function Overlay() {
  return <div className="absolute bg-black inset-0 opacity-30" data-name="Overlay" />;
}

function H1FramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h1.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[57px] text-white tracking-[-1.8px] w-full">
        <p className="leading-[63px] whitespace-pre-wrap">Lumen Brew</p>
      </div>
    </div>
  );
}

function PFramerText() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[27px] not-italic relative shrink-0 text-[#ddd] text-[16.2px] w-full whitespace-pre-wrap">
        <p className="mb-0">Created a cinematic video showcasing the warmth, craf</p>
        <p>tsmanship, and storytelling behind Lumen Brew Coffee.</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start max-w-[600px] min-h-px min-w-px overflow-clip relative" data-name="Text">
      <H1FramerText />
      <PFramerText />
    </div>
  );
}

function PFramerText1() {
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
      <PFramerText1 />
    </div>
  );
}

function Component6() {
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

function Component5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="Component 4">
      <Component6 />
    </div>
  );
}

function IconMask() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start right-0 top-1/2 w-[18px]" data-name="Icon:mask">
      <Component5 />
    </div>
  );
}

function IconMaskGroup() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon:mask-group">
      <IconMask />
      <div className="-translate-y-1/2 absolute bg-white right-0 size-[18px] top-1/2" data-name="Icon" />
    </div>
  );
}

function ScrollDown1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[22.41px] items-center justify-end overflow-clip pb-px relative shrink-0" data-name="Scroll down">
      <DivFramer1Lpeffq />
      <IconMaskGroup />
    </div>
  );
}

function ScrollDown() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Scroll down">
      <ScrollDown1 />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-full" data-name="Wrapper">
      <Text />
      <ScrollDown />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] max-w-[1240px] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="flex flex-col justify-end max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end max-w-[inherit] px-[24px] relative size-full">
          <Wrapper />
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1200px] items-center justify-center left-0 overflow-clip pb-[24px] pt-[100px] px-[340px] right-0 top-0" data-name="Hero section">
      <HeroVideo />
      <Overlay />
      <Container />
    </div>
  );
}

function Spacer() {
  return <div className="flex-[1_0_0] min-h-px min-w-px self-stretch" data-name="Spacer" />;
}

function PFramerText2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] w-full whitespace-pre-wrap">
        <p className="mb-0">Lumen Brew was a collaboration focused on capturing the soul of handcrafted</p>
        <p className="mb-0">coffee. Our goal was to create a cinematic visual that reflected the brand’s</p>
        <p className="mb-0">passion for quality, craftsmanship, and community. Through artistic lighting,</p>
        <p className="mb-0">natural textures, and storytelling-driven shots, we brought the brewing</p>
        <p>process to life, connecting every frame to the brand’s authentic identity.</p>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-80 relative" data-name="Description">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Project Name</p>
      </div>
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Description">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Lumen Brew</p>
      </div>
    </div>
  );
}

function ProjectName() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Project Name">
      <Description />
      <Description1 />
    </div>
  );
}

function Line() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />;
}

function Description2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-80 relative" data-name="Description">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Date</p>
      </div>
    </div>
  );
}

function Description3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Description">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[13.8px] tracking-[-0.32px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Nov 4, 2025</p>
      </div>
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Date">
      <Description2 />
      <Description3 />
    </div>
  );
}

function Line1() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />;
}

function Description4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-80 relative" data-name="Description">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Service Provided</p>
      </div>
    </div>
  );
}

function Description5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Description">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Video Production</p>
      </div>
    </div>
  );
}

function ServiceProvided() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Service provided">
      <Description4 />
      <Description5 />
    </div>
  );
}

function Line2() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />;
}

function Description6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-80 relative" data-name="Description">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Client</p>
      </div>
    </div>
  );
}

function Description7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Description">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] w-full">
        <p className="leading-[24px] whitespace-pre-wrap">Lumen Coffee Co.</p>
      </div>
    </div>
  );
}

function Client() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Client">
      <Description6 />
      <Description7 />
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Details">
      <ProjectName />
      <Line />
      <Date />
      <Line1 />
      <ServiceProvided />
      <Line2 />
      <Client />
    </div>
  );
}

function TextWrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[26px] items-start min-h-px min-w-px overflow-clip relative" data-name="Text wrapper">
      <PFramerText2 />
      <Details1 />
    </div>
  );
}

function Grid2X() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Grid 2x">
      <Spacer />
      <TextWrapper />
    </div>
  );
}

function Stwjz8NPvdLrtlUtZSa1Q2TiWj4Mp() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="STWJZ8NPvdLRTLUtZSa1q2TIWj4.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.22%] left-0 max-w-none top-[-15.11%] w-full" src={imgStwjz8NPvdLrtlUtZSa1Q2TiWj4Mp4} />
      </div>
    </div>
  );
}

function Video() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[450px] items-start justify-center min-h-px min-w-px relative" data-name="Video">
      <Stwjz8NPvdLrtlUtZSa1Q2TiWj4Mp />
    </div>
  );
}

function Fj77GdLzfqxchf7V1Avap8QMp() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="FJ77GdLZFQXCHF7v1Avap8Q.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[130.22%] left-0 max-w-none top-[-15.11%] w-full" src={imgFj77GdLzfqxchf7V1Avap8QMp4} />
      </div>
    </div>
  );
}

function Video1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[450px] items-start justify-center min-h-px min-w-px relative" data-name="Video">
      <Fj77GdLzfqxchf7V1Avap8QMp />
    </div>
  );
}

function Grid2X1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Grid 2x">
      <Video />
      <Video1 />
    </div>
  );
}

function PFramerText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
        <p className="leading-[22.4px]">Project overview</p>
      </div>
    </div>
  );
}

function Description8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText3 />
    </div>
  );
}

function SectionTag() {
  return (
    <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0" data-name="Section tag">
      <Description8 />
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[392px]" data-name="Tag">
      <SectionTag />
    </div>
  );
}

function PFramerText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] w-full whitespace-pre-wrap">
        <p className="mb-0">Lumen Coffee Co. wanted to express the artistry and care that define their brewing process. We developed a concept</p>
        <p className="mb-0">centered on storytelling through motion — from the first bean roast to the final pour. Using natural light, close-</p>
        <p className="mb-0">up cinematography, and ambient soundscapes, the film communicates the brand’s dedication to slow, thoughtful</p>
        <p className="mb-0">craftsmanship. Every detail, from color tone to pacing, was designed to evoke warmth, community, and authenticity.</p>
        <p>The video became the brand’s core marketing asset, setting a new visual standard for their online and retail presence.</p>
      </div>
    </div>
  );
}

function DivFramerQ36Vzr() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="div.framer-q36vzr">
      <PFramerText4 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[792px]" data-name="Text">
      <DivFramerQ36Vzr />
    </div>
  );
}

function Grid6X() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip pb-[22px] relative shrink-0 w-full" data-name="Grid 6x">
      <Tag />
      <Text1 />
      <div aria-hidden="true" className="absolute border-[#444] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PFramerText5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.5px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
        <p className="leading-[22.4px]">project process</p>
      </div>
    </div>
  );
}

function Description9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText5 />
    </div>
  );
}

function SectionTag1() {
  return (
    <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0" data-name="Section tag">
      <Description9 />
    </div>
  );
}

function Tag1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[392px]" data-name="Tag">
      <SectionTag1 />
    </div>
  );
}

function PFramerText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] w-full whitespace-pre-wrap">
        <p className="mb-0">Our process began with pre-production planning, where we storyboarded the visual flow and mood. Filming</p>
        <p className="mb-0">took place across two days in the café’s ambient setting, capturing organic moments of coffee brewing,</p>
        <p className="mb-0">customer interactions, and brand lifestyle. During post-production, we emphasized cinematic tone and</p>
        <p className="mb-0">texture through color grading and sound design. The pacing was intentionally slow, mirroring the rhythm</p>
        <p className="mb-0">of artisanal brewing. Collaborating closely with the client ensured every visual aligned with their story —</p>
        <p>celebrating detail, patience, and authenticity. The result was a piece that felt as handcrafted as the coffee itself.</p>
      </div>
    </div>
  );
}

function DivFramerVwj() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="div.framer-vwj05">
      <PFramerText6 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[792px]" data-name="Text">
      <DivFramerVwj />
    </div>
  );
}

function Grid6X1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip py-[22px] relative shrink-0 w-full" data-name="Grid 6x">
      <Tag1 />
      <Text2 />
      <div aria-hidden="true" className="absolute border-[#444] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PFramerText7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
        <p className="leading-[22.4px]">final result</p>
      </div>
    </div>
  );
}

function Description10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText7 />
    </div>
  );
}

function SectionTag2() {
  return (
    <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0" data-name="Section tag">
      <Description10 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[392px]" data-name="Tag">
      <SectionTag2 />
    </div>
  );
}

function PFramerText8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] w-full whitespace-pre-wrap">
        <p className="mb-0">The final film became a centerpiece for Lumen Coffee Co.’s online presence, featured across their website</p>
        <p className="mb-0">and social campaigns. The cinematic storytelling approach increased viewer engagement and helped</p>
        <p className="mb-0">strengthen the emotional connection with their audience. Sales rose following the campaign launch, and the</p>
        <p className="mb-0">brand received strong praise for its elevated visual identity. The video was later showcased in local creative</p>
        <p className="mb-0">exhibitions, highlighting its artistry and effectiveness in brand communication. Lumen Brew not only captured</p>
        <p>the beauty of the product but also redefined how handcrafted experiences could be told through motion.</p>
      </div>
    </div>
  );
}

function DivFramer1K601Lw() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="div.framer-1k601lw">
      <PFramerText8 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[792px]" data-name="Text">
      <DivFramer1K601Lw />
    </div>
  );
}

function Grid6X2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip pt-[22px] relative shrink-0 w-full" data-name="Grid 6x">
      <Tag2 />
      <Text3 />
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Details">
      <Grid6X />
      <Grid6X1 />
      <Grid6X2 />
    </div>
  );
}

function RfuIrDwIjOsmiTbC2G0Wk58YoMp() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="rfuIRDwIjOSMITbC2G0WK58Yo.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[170.29%] left-0 max-w-none top-[-35.14%] w-full" src={imgRfuIrDwIjOsmiTbC2G0Wk58YoMp4} />
      </div>
    </div>
  );
}

function FinalResultsVideo() {
  return (
    <div className="content-stretch flex flex-col h-[700px] items-start justify-center relative shrink-0 w-full" data-name="Final results video">
      <RfuIrDwIjOsmiTbC2G0Wk58YoMp />
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d={svgPaths.p47d8a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component8 />
    </div>
  );
}

function IconMask1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component7 />
    </div>
  );
}

function IconMaskGroup1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
      <IconMask1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Icon wrapper">
      <IconMaskGroup1 />
    </div>
  );
}

function PFramerText9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12.6px] text-left text-white tracking-[-0.14px] uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[19.6px]">Previous Project</p>
      </div>
    </div>
  );
}

function Description11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText9 />
    </div>
  );
}

function PreviousProjectPreviousButton() {
  return (
    <a className="bg-[#242424] content-stretch flex gap-[14px] items-start justify-center overflow-clip p-[14px] relative shrink-0" data-name="Previous Project → Previous button" href="https://primary-words-404174.framer.app/projects/:Ni_8VCTNK">
      <IconWrapper />
      <Description11 />
    </a>
  );
}

function PFramerText10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15.1px] text-left text-white tracking-[-0.32px] uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[22.4px]">Previous Project</p>
      </div>
    </div>
  );
}

function Description12() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-17.04px)] top-[13px]" data-name="Description">
      <PFramerText10 />
    </div>
  );
}

function Component10() {
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

function Component9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component10 />
    </div>
  );
}

function IconMask2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component9 />
    </div>
  );
}

function IconMaskGroup2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
      <IconMask2 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+79.54px)] overflow-clip top-[14px]" data-name="Icon wrapper">
      <IconMaskGroup2 />
    </div>
  );
}

function NextProjectNextButton() {
  return (
    <a className="bg-[#242424] block h-[50.41px] overflow-clip relative shrink-0 w-[207.09px]" data-name="Next Project → Next button" href="https://primary-words-404174.framer.app/projects/pulse-drive">
      <Description12 />
      <IconWrapper1 />
    </a>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch cursor-pointer flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Wrapper">
      <PreviousProjectPreviousButton />
      <NextProjectNextButton />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1240px] min-w-[1240px] overflow-clip px-[24px] relative shrink-0" data-name="Container">
      <Grid2X />
      <Grid2X1 />
      <Details2 />
      <FinalResultsVideo />
      <Wrapper1 />
    </div>
  );
}

function Details() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 overflow-clip px-[340px] py-[100px] right-0 top-[1200px]" data-name="Details">
      <Container1 />
    </div>
  );
}

function Overlay1() {
  return <div className="absolute bg-black inset-[0_0_0.02%_0] opacity-30" data-name="Overlay" />;
}

function PFramerText11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
        <p className="leading-[22.4px]">Lets work together</p>
      </div>
    </div>
  );
}

function Description13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText11 />
    </div>
  );
}

function SectionTag4() {
  return (
    <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0" data-name="Section tag">
      <Description13 />
    </div>
  );
}

function SectionTag3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Section tag">
      <SectionTag4 />
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

function PFramerText12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[22.4px]">contact us</p>
      </div>
    </div>
  );
}

function Description14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
      <PFramerText12 />
    </div>
  );
}

function Component12() {
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

function Component11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 4">
      <Component12 />
    </div>
  );
}

function IconMask3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]" data-name="Icon:mask">
      <Component11 />
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

function IconWrapper2() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-name="Icon wrapper">
      <Icons />
    </div>
  );
}

function Small() {
  return (
    <a className="bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center overflow-clip pl-[16px] pr-[6px] py-[6px] relative rounded-[1000px] shrink-0" data-name="Small" href="https://primary-words-404174.framer.app/contact-us">
      <Description14 />
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

function Wrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[22.9px] items-center justify-center max-w-[790px] overflow-clip relative shrink-0 w-[790px]" data-name="Wrapper">
      <SectionTag3 />
      <DivFramerSfb8J />
      <ButtonWrapper />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]" data-name="Container">
      <Wrapper2 />
    </div>
  );
}

function Desktop() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip pb-[463.19px] pt-[463.18px] relative shrink-0 w-full" data-name="Desktop">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[160%] left-0 max-w-none top-[-30%] w-full" src={imgDesktop} />
      </div>
      <Overlay1 />
      <Container2 />
    </div>
  );
}

function DivFramer18Y2YvdContainer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1200px] items-start justify-center left-0 right-0 top-[3669.41px]" data-name="div.framer-18y2yvd-container">
      <Desktop />
    </div>
  );
}

function Video2() {
  return (
    <div className="relative self-stretch shrink-0 w-[373.33px]" data-name="Video">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVideo} />
      </div>
    </div>
  );
}

function PFramerText13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[21px] text-white tracking-[-0.44px] whitespace-nowrap">
        <p className="leading-[30.8px]">Main Pages</p>
      </div>
    </div>
  );
}

function PFramerText14() {
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
      <PFramerText14 />
    </div>
  );
}

function PFramerText15() {
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
      <PFramerText15 />
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

function PFramerText16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.32px] whitespace-nowrap" href="https://primary-words-404174.framer.app/about-us">
        <p className="cursor-pointer leading-[24px] text-[14.4px]">About us</p>
      </a>
    </div>
  );
}

function DivFramer11Bdfbn1() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-11bdfbn">
      <PFramerText16 />
    </div>
  );
}

function PFramerText17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.32px] w-full" href="https://primary-words-404174.framer.app/about-us">
        <p className="cursor-pointer leading-[24px] text-[14.4px] whitespace-pre-wrap">About us</p>
      </a>
    </div>
  );
}

function DivFramerD137Jy1() {
  return (
    <div className="absolute bottom-[-20px] content-stretch flex flex-col items-start left-0 right-0" data-name="div.framer-d137jy">
      <PFramerText17 />
    </div>
  );
}

function FooterLink3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="Footer link">
      <DivFramer11Bdfbn1 />
      <DivFramerD137Jy1 />
    </div>
  );
}

function FooterLink2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Footer link">
      <FooterLink3 />
    </div>
  );
}

function PFramerText18() {
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
      <PFramerText18 />
    </div>
  );
}

function PFramerText19() {
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
      <PFramerText19 />
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

function PFramerText20() {
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
      <PFramerText20 />
    </div>
  );
}

function PFramerText21() {
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
      <PFramerText21 />
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

function Wrapper3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start justify-center left-0 opacity-90 right-0 top-[50.79px]" data-name="Wrapper">
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
      <PFramerText13 />
      <Wrapper3 />
    </div>
  );
}

function PFramerText22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20.8px] text-white tracking-[-0.44px] whitespace-nowrap">
        <p className="leading-[30.8px]">CMS Pages</p>
      </div>
    </div>
  );
}

function PFramerText23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.32px] whitespace-nowrap" href="https://primary-words-404174.framer.app/services">
        <p className="cursor-pointer leading-[24px] text-[14.4px]">Services</p>
      </a>
    </div>
  );
}

function DivFramer11Bdfbn4() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0" data-name="div.framer-11bdfbn">
      <PFramerText23 />
    </div>
  );
}

function PFramerText24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.32px] w-full" href="https://primary-words-404174.framer.app/services">
        <p className="cursor-pointer leading-[24px] text-[14.4px] whitespace-pre-wrap">Services</p>
      </a>
    </div>
  );
}

function DivFramerD137Jy4() {
  return (
    <div className="absolute bottom-[-44px] content-stretch flex flex-col items-start left-0 right-0" data-name="div.framer-d137jy">
      <PFramerText24 />
    </div>
  );
}

function FooterLink9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="Footer link">
      <DivFramer11Bdfbn4 />
      <DivFramerD137Jy4 />
    </div>
  );
}

function FooterLink8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Footer link">
      <FooterLink9 />
    </div>
  );
}

function PFramerText25() {
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
      <PFramerText25 />
    </div>
  );
}

function PFramerText26() {
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
      <PFramerText26 />
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

function PFramerText27() {
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
      <PFramerText27 />
    </div>
  );
}

function PFramerText28() {
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
      <PFramerText28 />
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

function Wrapper4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start justify-center left-0 opacity-90 right-0 top-[50.79px]" data-name="Wrapper">
      <FooterLink8 />
      <FooterLink10 />
      <FooterLink12 />
    </div>
  );
}

function FooterLinksWrapper1() {
  return (
    <div className="h-[146.8px] overflow-clip relative shrink-0 w-[189.67px]" data-name="Footer links wrapper">
      <PFramerText22 />
      <Wrapper4 />
    </div>
  );
}

function PFramerText29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.8px] right-0 top-[-1px]" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20.8px] text-white tracking-[-0.44px] whitespace-nowrap">
        <p className="leading-[30.8px]">Follow us on</p>
      </div>
    </div>
  );
}

function PFramerText30() {
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
      <PFramerText30 />
    </div>
  );
}

function Component14() {
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

function Component13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component14 />
    </div>
  );
}

function IconMask4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component13 />
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

function IconWrapper3() {
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
          <IconWrapper3 />
        </div>
      </div>
    </a>
  );
}

function DivFramer4K2Plf() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="div.framer-4k2plf" />;
}

function PFramerText31() {
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
      <PFramerText31 />
    </div>
  );
}

function Component16() {
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

function Component15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component16 />
    </div>
  );
}

function IconMask5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component15 />
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

function IconWrapper4() {
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
          <IconWrapper4 />
        </div>
      </div>
    </a>
  );
}

function Line3() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />;
}

function PFramerText32() {
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
      <PFramerText32 />
    </div>
  );
}

function Component18() {
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

function Component17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component18 />
    </div>
  );
}

function IconMask6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component17 />
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

function IconWrapper5() {
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
          <IconWrapper5 />
        </div>
      </div>
    </a>
  );
}

function Line4() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />;
}

function PFramerText33() {
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
      <PFramerText33 />
    </div>
  );
}

function Component20() {
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

function Component19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component20 />
    </div>
  );
}

function IconMask7() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component19 />
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

function IconWrapper6() {
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
          <IconWrapper6 />
        </div>
      </div>
    </a>
  );
}

function Line5() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />;
}

function PFramerText34() {
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
      <PFramerText34 />
    </div>
  );
}

function Component22() {
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

function Component21() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
      <Component22 />
    </div>
  );
}

function IconMask8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
      <Component21 />
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

function IconWrapper7() {
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
          <IconWrapper7 />
        </div>
      </div>
    </a>
  );
}

function Line6() {
  return <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />;
}

function Wrapper5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-0 opacity-90 right-0 top-[50.79px]" data-name="Wrapper">
      <SocialLinkSocialLink />
      <DivFramer4K2Plf />
      <SocialLinkSocialLink1 />
      <Line3 />
      <SocialLinkSocialLink2 />
      <Line4 />
      <SocialLinkSocialLink3 />
      <Line5 />
      <SocialLinkSocialLink4 />
      <Line6 />
    </div>
  );
}

function SocialLinksWrapper() {
  return (
    <div className="h-[283.8px] overflow-clip relative shrink-0 w-[387.34px]" data-name="Social links wrapper">
      <PFramerText29 />
      <Wrapper5 />
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
      <Video2 />
      <Grid4X />
    </div>
  );
}

function Component24() {
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

function Component23() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[200px]" data-name="Component 4">
      <Component24 />
    </div>
  );
}

function GkYmdCuSzDdEia8BAhhQ5VE7WEmSvg() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="GkYMDCuSZDdEia8bAhhQ5vE7wEM.svg">
      <Component23 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[200px]" data-name="Icon">
      <GkYmdCuSzDdEia8BAhhQ5VE7WEmSvg />
    </div>
  );
}

function Component25() {
  return <div className="h-[230.406px] shrink-0 w-full" data-name="Component 1" />;
}

function PFramerText35() {
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
      <PFramerText35 />
    </div>
  );
}

function SvgFramer14Vkgty() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="svg.framer-14vkgty">
      <Component25 />
      <ForeignobjectFramerFitText />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Logo">
      <Icon />
      <SvgFramer14Vkgty />
    </div>
  );
}

function PFramerText36() {
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
      <PFramerText36 />
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

function Component26() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Component 2">
      <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.4px] text-center text-white tracking-[-0.32px] whitespace-nowrap" href="https://x.com/xmuhammadtalha">
        <p className="cursor-pointer leading-[24px]">Muhammad talha</p>
      </a>
    </div>
  );
}

function PFramerText37() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[13.6px] text-center tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">{`Made with 🩷 by `}</p>
      </div>
      <Component26 />
    </div>
  );
}

function DivFramer1Dd8U5R() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.framer-1dd8u5r">
      <PFramerText37 />
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

function Component27() {
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

function PFramerText38() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="p.framer-text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[15.1px] text-center tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[24px]">{`Built in `}</p>
      </div>
      <Component27 />
    </div>
  );
}

function DivFramerZ4Gtlr() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-z4gtlr">
      <PFramerText38 />
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

function Grid6X3() {
  return (
    <div className="content-stretch flex gap-[36px] items-start justify-center overflow-clip pt-[22px] relative shrink-0 w-full" data-name="Grid 6x">
      <Copyright />
      <TemplateOwner />
      <MadeInFramer />
      <div aria-hidden="true" className="absolute border-[#444] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Wrapper6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full" data-name="Wrapper">
      <Logo />
      <Grid6X3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[63.99px] items-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]" data-name="Container">
      <Grid3X />
      <Wrapper6 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-black content-stretch flex items-center justify-center left-0 overflow-clip pb-[32px] pt-[100px] right-0 top-[4869.41px]" data-name="Footer">
      <Container3 />
    </div>
  );
}

function EndOfBodyStart() {
  return (
    <div className="bg-black h-[5747.14px] min-h-[1200px] overflow-clip relative shrink-0 w-full" data-name="End of bodyStart">
      <HeroSection />
      <Details />
      <div className="-translate-x-1/2 absolute left-1/2 size-[0.01px] top-[3669.41px]" data-name="div.framer-1idk2qn" />
      <DivFramer18Y2YvdContainer />
      <Footer />
    </div>
  );
}

function Component29() {
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

function Component28() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[30px]" data-name="Component 4">
      <Component29 />
    </div>
  );
}

function GkYmdCuSzDdEia8BAhhQ5VE7WEmSvg1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="GkYMDCuSZDdEia8bAhhQ5vE7wEM.svg">
      <Component28 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Icon">
      <GkYmdCuSzDdEia8BAhhQ5VE7WEmSvg1 />
    </div>
  );
}

function PFramerText39() {
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
      <PFramerText39 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Logo">
      <Icon1 />
      <DivFramer10Eoqs />
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Logo">
      <Logo2 />
    </div>
  );
}

function PFramerText40() {
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
      <PFramerText40 />
    </div>
  );
}

function Component31() {
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

function Component30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="Component 4">
      <Component31 />
    </div>
  );
}

function IconMask9() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start right-0 top-1/2 w-[24px]" data-name="Icon:mask">
      <Component30 />
    </div>
  );
}

function IconMaskGroup8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon:mask-group">
      <IconMask9 />
      <div className="-translate-y-1/2 absolute bg-white right-0 size-[24px] top-1/2" data-name="Icon" />
    </div>
  );
}

function Close() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Close">
      <DivFramerI74O5W />
      <IconMaskGroup8 />
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

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]" data-name="Container">
      <Logo1 />
      <MenuButton />
    </div>
  );
}

function Navbar() {
  return (
    <div className="backdrop-blur-[10px] content-stretch flex items-center justify-center overflow-clip py-[20px] relative shrink-0 w-full" data-name="Navbar">
      <Container4 />
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

function Component33() {
  return (
    <div className="overflow-clip relative shrink-0 size-[10px]" data-name="Component 1">
      <Group />
    </div>
  );
}

function Component32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start p-[15px] right-0 top-0" data-name="Component 4">
      <Component33 />
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
    <div className="backdrop-blur-[10px] bg-[rgba(17,17,17,0.9)] content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-[18px] shrink-0 w-[220px]" data-name="div.s1n8l1x5">
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] bottom-0 left-1/2 rounded-[18px] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1),0px_10px_20px_0px_rgba(0,0,0,0.2)] top-0 w-[220px]" data-name="div.s1n8l1x5:shadow" />
      <DivS1N8L1X2 />
      <Component32 />
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
      <DivFramerBadgeContainer />
      <DivFramerEditorbarContainer />
      <EndOfBodyStart />
      <DivFramer186EzfnContainer />
      <IframeFramerEditorbarMaskGroup />
    </div>
  );
}