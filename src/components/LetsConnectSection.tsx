import React from 'react';
import svgPaths from '../imports/svg-caky0u7ahw';

export function LetsConnectSection() {
  return (
    <section aria-label="Contact hero" className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0">
      <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[0px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
        
        {/* Grid 6x - Section Tag + Text + Scroll Down */}
        <div className="h-[125px] overflow-clip relative shrink-0 w-full" data-name="Grid 6x">
          {/* Section Tag */}
          <div className="absolute content-stretch flex flex-col items-start left-0 right-[800px] top-0" data-name="Section tag">
            <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                    <p className="leading-[22.4px]">contact us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text - Heading + Description */}
          <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[400px] overflow-clip right-[400px] top-0" data-name="Text">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[57px] text-white tracking-[-1.8px] w-full" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                <p className="leading-[63px] whitespace-pre-wrap">Let's Connect</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full">
              <div className="flex flex-col font-medium justify-center leading-[27px] not-italic relative shrink-0 text-[#ddd] text-[16.3px] w-full whitespace-pre-wrap" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                <p className="mb-0">{`Connect with our team for collaborations, `}</p>
                <p>inquiries, and creative opportunities.</p>
              </div>
            </div>
          </div>

          {/* Scroll Down */}
          <div className="absolute content-stretch flex gap-[4px] h-[22.41px] items-center justify-end left-[1067.17px] overflow-clip pb-px top-[102.59px]" data-name="Scroll down">
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>
                  <p className="leading-[22.4px]">Scroll down</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[18px]">
              <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start right-0 top-1/2 w-[18px]">
                <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]">
                  <div className="relative shrink-0 size-[18px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <g>
                        <path d={svgPaths.p8871c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute bg-white right-0 size-[18px] top-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
