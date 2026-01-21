'use client';

import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="items-center contents h-min justify-start overflow-hidden relative bg-black gap-[0px] min-h-[640px]">
      <section aria-label="404 Not Found" className="items-center flex h-screen justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0">
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
            <h1 className="font-medium text-center text-white text-[56px] tracking-[-1.68px] leading-[67.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif"}}>404</h1>
          </div>
          <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
            <p className="font-medium text-center text-white text-[24px] tracking-[-0.48px] leading-[33.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>Page not found.</p>
          </div>
          <div aria-label="Button" className="relative shrink-[0]">
            <Link to="/" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
              <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                <p className="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>Go Home</p>
              </div>
              <div aria-label="Icon wrapper" className="items-center flex flex-col justify-center overflow-clip relative w-8 h-8 bg-black gap-[8px] shrink-[0] rounded-[62.5rem]">
                <div aria-label="Icons" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                  <div aria-label="Icon" className="aspect-square relative w-[15px] bg-white z-[1] shrink-[0]"></div>
                  <div aria-label="Icon" className="aspect-square absolute w-[15px] left-[-20px] top-[47%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
