'use client';

import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer, staggerItem } from '../lib/animations';

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  gridColumns?: string;
}

export function SectionHeader({
  tag,
  title,
  description,
  buttonText,
  buttonHref,
  gridColumns = "repeat(2, minmax(50px, 1fr))"
}: SectionHeaderProps) {
  return (
    <motion.div
      aria-label="Grid 6x"
      className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[12px_8px] z-[4] shrink-[0]"
      style={{"gridTemplateColumns":gridColumns}}
      variants={staggerContainer}
    >
      <motion.div
        aria-label="Section tag"
        className="self-start justify-self-start relative w-fit"
        style={{"gridArea":"auto / 1 / auto / -1"}}
        variants={staggerItem}
      >
        <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
          <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
            <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{tag}</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        aria-label="Text wrapper"
        className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[8px]"
        variants={staggerItem}
      >
        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
          <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{title}</h2>
        </div>
        {description && (
          <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.7]">
            <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>{description}</p>
          </div>
        )}
      </motion.div>
      {buttonText && buttonHref && (
        <motion.div
          aria-label="Button"
          className="self-end justify-self-end relative w-fit"
          variants={staggerItem}
        >
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
        </motion.div>
      )}
    </motion.div>
  );
}