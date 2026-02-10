'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import svgPaths from '../imports/svg-wsrl3dqnlx';
import imgDivFramer1Nvv2Kh from "figma:asset/0b0d785bcc2b969d32d4abfd5dcf158daee3d0e5.png";
import imgDivFramer1Nvv2Kh1 from "figma:asset/c5fc99d18d1985fc95e2c95ecf962959031a52b9.png";
import imgDivFramer1Nvv2Kh2 from "figma:asset/e3ea1e166e4ed8fea98f471c9d4a0c1cf5ee347c.png";
import type { Service } from '@/types';
import { scrollFadeIn, viewport } from '../lib/animations';

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  console.log('ServicesSection rendering with', services.length, 'services');
  
  return (
    <motion.section
      aria-label="Services"
      className="content-stretch flex items-center justify-center px-[24px] py-[100px] relative w-full"
      data-name="Services"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={scrollFadeIn}
    >
      <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1240px] overflow-visible relative shrink-0 w-full" data-name="Container">
        {/* Grid 6x - Header Section */}
        <div className="flex flex-col gap-[8px] relative shrink-0 w-full" data-name="Grid 6x">
          <div className="content-stretch flex h-[22.41px] items-center justify-start overflow-visible pb-px" data-name="Section tag → Section tag">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.3px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                  <p className="leading-[22.4px]">Our services</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-end justify-between gap-[32px] w-full" data-name="Title and button row">
            <div className="flex flex-col gap-[8px] flex-1 min-w-0" data-name="Text wrapper">
              <div className="content-stretch flex flex-col items-start" data-name="h2.framer-text">
                <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[45.2px] text-white tracking-[-1.44px]" style={{fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif'}}>
                  <p className="leading-[50.4px]">What We Offer</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start opacity-70 max-w-[440px]" data-name="p.framer-text">
                <div className="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px]" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                  <p className="mb-0">{`We create impactful videos that inspire audiences, tell `}</p>
                  <p>stories, and elevate your brand.</p>
                </div>
              </div>
            </div>
            
            <Link to="/contact-us" className="bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center overflow-visible pl-[16px] pr-[6px] py-[6px] rounded-[1000px] shrink-0" data-name="Button → Small">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}} role="link" tabIndex={0}>
                    <p className="cursor-pointer leading-[22.4px]">Contact us</p>
                  </div>
                </div>
              </div>
              <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-name="Icon wrapper">
                <div className="overflow-clip relative shrink-0 size-[15px]" data-name="Icons">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]" data-name="Icon:mask">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 5">
                      <div className="relative shrink-0 size-[15px]" data-name="Component 1">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                          <g>
                            <path d={svgPaths.pb055200} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
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

        {/* Services Wrapper */}
        <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative shrink-0 w-full" data-name="Services wrapper">
          {/* Service Card 1 - Video Production */}
          <div className="content-stretch flex gap-[8px] items-start justify-center overflow-visible relative shrink-0 w-full" data-name="Service card → 1-desktop">
            <div className="h-[500px] relative shrink-0 w-[592px]" data-name="div.framer-1nvv2kh">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[118.4%] left-0 max-w-none top-[-9.2%] w-full" src={imgDivFramer1Nvv2Kh} />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-between overflow-visible p-[16px] relative self-stretch shrink-0" data-name="Wrapper">
              <div className="flex flex-col gap-[8px] w-full" data-name="Top wrapper">
                <div className="content-stretch flex flex-col items-start" data-name="h4.framer-text">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[34.2px] text-white tracking-[-0.72px]" style={{fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif'}}>
                    <p className="leading-[50.4px]">Video Production</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start opacity-60 max-w-[90%]" data-name="div.framer-11rxj8d">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                    <div className="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                      <p className="mb-0">{`We handle every stage from concept to filming, creating visuals that capture `}</p>
                      <p>emotion and inspire audiences.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-[8px] w-full" data-name="Bottom wrapper">
                <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[24px]">Commercials</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[24px]">Brand Films</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[24px]">Product Videos</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[24px]">Corporate Shoots</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[24px]">Event Coverage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Card 2 - Creative Direction */}
          <div className="content-stretch flex gap-[8px] items-start justify-center overflow-visible relative shrink-0 w-full" data-name="Service card → 2-desktop">
            <div className="content-stretch flex flex-col items-start justify-between overflow-visible p-[16px] relative self-stretch shrink-0" data-name="Wrapper">
              <div className="flex flex-col gap-[8px] w-full" data-name="Top wrapper">
                <div className="content-stretch flex flex-col items-start" data-name="h4.framer-text">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[34.2px] text-white tracking-[-0.72px]" style={{fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif'}}>
                    <p className="leading-[50.4px]">Creative Direction</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start opacity-60 max-w-[90%]" data-name="div.framer-11rxj8d">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                    <div className="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                      <p className="mb-0">{`Our creative team transforms ideas into captivating visuals through `}</p>
                      <p>storytelling, strategy, and detailed direction.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-[8px] w-full" data-name="Bottom wrapper">
                <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[24px]">Concept Development</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[24px]">Scriptwriting</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[24px]">Storyboarding</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[24px]">Art Direction</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[24px]">Campaign Planning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[500px] relative shrink-0 w-[592px]" data-name="div.framer-1nvv2kh">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[118.4%] left-0 max-w-none top-[-9.2%] w-full" src={imgDivFramer1Nvv2Kh1} />
              </div>
            </div>
          </div>

          {/* Service Card 3 - Post-Production & Editing */}
          <div className="content-stretch flex gap-[8px] items-start justify-center overflow-visible relative shrink-0 w-full" data-name="1-desktop">
            <div className="h-[500px] relative shrink-0 w-[592px]" data-name="div.framer-1nvv2kh">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[118.4%] left-0 max-w-none top-[-9.2%] w-full" src={imgDivFramer1Nvv2Kh2} />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-between overflow-visible p-[16px] relative self-stretch shrink-0" data-name="Wrapper">
              <div className="flex flex-col gap-[8px] w-full" data-name="Top wrapper">
                <div className="content-stretch flex flex-col items-start" data-name="h4.framer-text">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[34.5px] text-white tracking-[-0.72px]" style={{fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif'}}>
                    <p className="leading-[50.4px]">{`Post-Production & Editing`}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start opacity-60 max-w-[90%]" data-name="div.framer-11rxj8d">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                    <div className="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                      <p className="mb-0">{`We refine your footage with expert editing, sound design, and color grading `}</p>
                      <p>for cinematic perfection.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-[8px] w-full" data-name="Bottom wrapper">
                <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[24px]">Video Editing</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[24px]">Color Grading</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[24px]">Motion Graphics</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[24px]">Sound Design</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#242424] content-stretch flex items-center overflow-clip px-[14px] py-[8px] relative shrink-0" data-name="Service category tag">
                  <div className="content-stretch flex flex-col items-start opacity-80 relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.1px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[24px]">Visual Effects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}