import imgFramerLogo from "figma:asset/186186e8842153f2d8782124c4158b0abc2624c7.png";
import { imgIframeFramerEditorbar } from "./svg-knmv7";

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

function Component() {
  return (
    <div className="overflow-clip relative shrink-0 size-[10px]" data-name="Component 1">
      <Group />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start p-[15px] right-0 top-0" data-name="Component 4">
      <Component />
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
      <Component1 />
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

export default function IframeFramerEditorbarMaskGroup() {
  return (
    <div className="relative size-full" data-name="iframe#__framer-editorbar:mask-group">
      <IframeFramerEditorbar />
    </div>
  );
}