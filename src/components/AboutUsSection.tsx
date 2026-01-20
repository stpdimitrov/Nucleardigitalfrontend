'use client';

import React from 'react';
import { motion } from 'motion/react';
import { scrollFadeIn, viewport } from '../lib/animations';

interface AboutUsSectionProps {
  backgroundImage: string;
  backgroundAlt: string;
  heading: string;
  buttonText: string;
  buttonHref: string;
  showLogo?: boolean;
}

export function AboutUsSection({
  backgroundImage,
  backgroundAlt,
  heading,
  buttonText,
  buttonHref,
  showLogo = true
}: AboutUsSectionProps) {
  return (
    <motion.section
      aria-label="About us"
      className="items-center flex h-screen justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={scrollFadeIn}
    >
      <div className="absolute left-0 top-0 right-0 bottom-0">
        <img alt={backgroundAlt} src={backgroundImage} className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]" />
      </div>
      <div aria-label="Overlay" className="size-full overflow-clip absolute left-[0%] top-[0%] bg-black z-[1] shrink-[0] opacity-[0.3]"></div>
      <div aria-label="Container" className="items-center flex grow h-min justify-center overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
        <div aria-label="Wrapper" className="items-center flex flex-col grow h-min justify-center overflow-clip relative w-px basis-0 gap-[24px] max-w-[790px] z-[1] shrink-[0]">
          {showLogo && (
            <div aria-label="Logo" className="relative shrink-[0]">
              <a href="/" aria-label="Logo" className="items-center flex size-min justify-center relative text-[rgb(0,_0,_238)] gap-[4px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                <div aria-label="Icon" className="relative w-[30px] h-[30px] shrink-[0]">
                  <div className="absolute left-0 top-0 right-0 bottom-0">
                    <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fdf1ea35df7df9da91ef7b7004a32fec3b03a527c.svg%3Fwidth=42&amp;height=42?generation=1768843022438331&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_42_/_42]" />
                  </div>
                </div>
                <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <p className="font-medium uppercase text-white text-[24px] tracking-[-0.72px] leading-[24px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Flixen™</p>
                </div>
              </a>
            </div>
          )}
          <div className="flex flex-col justify-start relative w-full shrink-[0]">
            <h2 className="font-medium text-center text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{heading}</h2>
          </div>
          <div aria-label="Button wrapper" className="items-center flex h-min justify-center relative w-full gap-[8px] pt-2 pr-0 pb-0 pl-0 shrink-[0]">
            <div aria-label="Button" className="relative shrink-[0]">
              <a href={buttonHref} aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <p className="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>{buttonText}</p>
                </div>
                <div aria-label="Icon wrapper" className="items-center flex flex-col justify-center overflow-clip relative w-8 h-8 bg-black gap-[8px] shrink-[0] rounded-[62.5rem]">
                  <div aria-label="Icons" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                    <div aria-label="Icon" className="aspect-square relative w-[15px] bg-white z-[1] shrink-[0]"></div>
                    <div aria-label="Icon" className="aspect-square absolute w-[15px] left-[-20px] top-[47%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
