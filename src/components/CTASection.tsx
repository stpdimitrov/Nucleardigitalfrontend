'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { scrollFadeIn, viewport } from '../lib/animations';
import svgPaths from '../imports/svg-hytnsfvgzh';

interface CTASectionProps {
  tag: string;
  heading: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage: string;
  backgroundAlt: string;
}

export function CTASection({
  tag,
  heading,
  buttonText,
  buttonHref,
  backgroundImage,
  backgroundAlt
}: CTASectionProps) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="div.framer-18y2yvd-container">
      <motion.div
        className="content-stretch flex items-center justify-center overflow-clip pb-[463.18px] pt-[463.19px] relative shrink-0 w-full"
        data-name="Desktop"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={scrollFadeIn}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt={backgroundAlt} className="absolute h-[160%] left-0 max-w-none top-[-30%] w-full" src={backgroundImage} />
        </div>
        <div className="content-stretch flex items-center justify-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]" data-name="Container">
          <div className="content-stretch flex flex-col gap-[22.9px] items-center justify-center max-w-[790px] overflow-clip relative shrink-0 w-[790px]" data-name="Wrapper">
            {/* Section Tag */}
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Section tag">
              <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0" data-name="Section tag">
                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                    <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                      <p className="leading-[22.4px]">{tag}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-sfb8j">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h2.framer-text">
                <div className="flex flex-col font-medium justify-center leading-[50.4px] not-italic relative shrink-0 text-[45.4px] text-center text-white tracking-[-1.44px]" style={{fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif'}}>
                  <h2 className="mb-0 whitespace-pre-wrap">{heading}</h2>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="content-stretch flex items-center justify-center pt-[9.1px] relative shrink-0 w-full" data-name="Button wrapper">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
                <Link to={buttonHref} className="bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center overflow-clip pl-[16px] pr-[6px] py-[6px] relative rounded-[1000px] shrink-0" data-name="Small">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}} role="link" tabIndex={0}>
                        <p className="cursor-pointer leading-[22.4px] text-[14.1px]">{buttonText}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-name="Icon wrapper">
                    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="Icons">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]" data-name="Icon:mask">
                        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 6">
                          <div className="relative shrink-0 size-[20px]" data-name="Component 1">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                              <g>
                                <path d={svgPaths.p3b6ad300} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2 flex items-center justify-center" data-name="Icon">
                        <ArrowRight className="w-full h-full text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}