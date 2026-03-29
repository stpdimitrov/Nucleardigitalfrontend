import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import svgPaths from '../imports/svg-c96gl1ahfs';
import { scrollFadeIn, viewport } from '../lib/animations';
import type { PricingPlan } from '@/types';
import imgSmilingManWearingGlasses from "figma:asset/ad8e44f82010d6d3555a4658497f155a131ede8e.png";
import imgSmilingManWithShortHair from "figma:asset/be285e0068bd5e11f8149ab60eed991f42ec0858.png";
import imgSmilingPersonWithShortDarkHair from "figma:asset/5d8ac90c565e0b90a30d781dbdcbf707c872b1ce.png";

interface PricingSectionProps {
  pricingPlans: PricingPlan[];
}

export function PricingSection({ pricingPlans }: PricingSectionProps) {
  return (
    <motion.section
      aria-label="Pricing"
      className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={scrollFadeIn}
    >
      <div aria-label="Container" className="content-stretch flex flex-col gap-[64px] items-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]">
        
        {/* Header Section */}
        <div className="h-[106.41px] overflow-clip relative shrink-0 w-full" data-name="Grid 6x">
          {/* Section Tag */}
          <div className="absolute content-stretch flex h-[22.41px] items-center justify-center left-0 overflow-clip pb-px top-0" data-name="Section tag → Section tag">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                  <p className="leading-[22.4px]">pricing plan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Wrapper */}
          <div className="absolute h-[106.41px] left-[400px] overflow-clip right-[400px] top-0" data-name="Text">
            <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="h2.framer-text">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[45.6px] text-white tracking-[-1.44px] whitespace-nowrap" style={{fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif'}}>
                <p className="leading-[50.4px]">Affordable Plans</p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-0 opacity-70 right-0 top-[58.41px]" data-name="p.framer-text">
              <div className="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                <p className="mb-0">{`We offer flexible pricing plans tailored to your goals, `}</p>
                <p>budget, and creative needs.</p>
              </div>
            </div>
          </div>

          {/* Clients Wrapper */}
          <div className="absolute content-stretch flex gap-[8px] items-center left-[992px] max-w-[200px] overflow-clip right-0 top-[78.41px]" data-name="Clients wrapper">
            <div className="content-stretch flex items-center relative shrink-0 w-[101px]" data-name="Images wrapper">
              <div className="overflow-clip relative rounded-[999px] shrink-0 size-[28px]" data-name="Image 01">
                <div className="absolute inset-0 rounded-[999px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSmilingManWearingGlasses} />
                  </div>
                </div>
                <div className="absolute border border-[#b0b0b0] border-solid inset-0 rounded-[999px]" data-name="::after" />
              </div>
              
              <div className="absolute left-[24px] overflow-clip rounded-[999px] size-[28px] top-0" data-name="Image 02">
                <div className="absolute inset-0 rounded-[999px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSmilingManWithShortHair} />
                  </div>
                </div>
                <div className="absolute border border-[#b0b0b0] border-solid left-0 rounded-[999px] size-[28px] top-0" data-name="::after" />
              </div>
              
              <div className="absolute left-[48px] overflow-clip rounded-[999px] size-[28px] top-0" data-name="Image 03">
                <div className="absolute inset-0 rounded-[999px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[999px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSmilingPersonWithShortDarkHair} />
                  </div>
                </div>
                <div className="absolute border border-[#b0b0b0] border-solid left-0 rounded-[999px] size-[28px] top-0" data-name="::after" />
              </div>
              
              <div className="absolute bg-black content-stretch flex items-center justify-center left-[72px] overflow-clip rounded-[999px] size-[28px] top-0" data-name="Icon wrapper">
                <div className="relative shrink-0 size-[14px]" data-name="Component 1">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <g>
                      <path d="M2.1875 7H11.8125" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
                      <path d="M7 2.1875V11.8125" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
                    </g>
                  </svg>
                </div>
                <div className="absolute left-0 rounded-[999px] size-[28px] top-0" data-name="::after">
                  <div aria-hidden="true" className="absolute border border-[#b0b0b0] border-solid inset-0 pointer-events-none rounded-[999px]" />
                </div>
              </div>
            </div>
            
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.framer-1gnekca">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[9.2px] tracking-[-0.2px] w-full whitespace-pre-wrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                  <p className="mb-0">
                    <span className="leading-[12px] text-white">10K+</span>
                    <span className="leading-[12px] text-[#ddd]">{` Peoples already `}</span>
                  </p>
                  <p className="leading-[12px] text-[#ddd]">subscribed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="content-stretch flex gap-[14px] items-start justify-center relative shrink-0 w-full" data-name="Grid 6x">
          
          {/* Card 1 - Starter Plan */}
          <div className="bg-[#242424] flex-[1_0_0] min-h-px min-w-px relative" data-name="Pricing card → Pricing card">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[28px] items-start p-[24px] relative w-full">
                
                {/* Top Wrapper */}
                <div className="h-[160.81px] relative shrink-0 w-full" data-name="Top wrapper">
                  <div className="absolute content-stretch flex flex-col items-start left-0 opacity-70 top-[-1px]" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[22.4px]">Starter Plan</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[29.4px]" data-name="h2.framer-text">
                    <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[44.4px] text-white tracking-[-1.44px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                      <p className="leading-[50.4px]">$499</p>
                    </div>
                  </div>
                  
                  <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-0 top-[88.81px]" data-name="p.framer-text">
                    <div className="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                      <p className="mb-0">{`Perfect for small brands wanting professional `}</p>
                      <p className="mb-0">{`videos that elevate their online presence `}</p>
                      <p>effortlessly.</p>
                    </div>
                  </div>
                  
                  <div className="absolute bg-[#333] content-stretch flex items-center justify-center px-[8px] py-[4px] right-[-0.92px] top-0" data-name="Tag">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10.7px] text-white tracking-[-0.24px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[14.4px]">Popular</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Line */}
                <div className="bg-[#b0b0b0] h-px opacity-30 shrink-0 w-full" data-name="Line" />

                {/* Features Wrapper */}
                <div className="content-stretch flex flex-col gap-[12px] items-center justify-center opacity-60 relative shrink-0 w-full" data-name="Features wrapper">
                  {/* Feature 01 */}
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Feature 01">
                    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g>
                          <path d={svgPaths.p3f4c7900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p4ddb00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M3 19.5H21" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[24px] whitespace-pre-wrap">2 video projects</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature 02 */}
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Feature 02">
                    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g>
                          <path d={svgPaths.p26a3a080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p15cabf0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M12.75 12L7.792 15.393" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M21.75 5.843L15.406 10.183" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M21.75 18.157L7.792 8.607" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[24px] whitespace-pre-wrap">Basic editing included</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature 03 */}
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Feature 03">
                    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g>
                          <path d={svgPaths.pbf27680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p1bf25b00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p170b82c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[24px] whitespace-pre-wrap">HD quality output</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature 04 */}
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Feature 04">
                    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g>
                          <path d={svgPaths.p115c8700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M14.25 3V8.25H19.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M12 11.25V17.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M9.75 15L12 17.25L14.25 15" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[24px] whitespace-pre-wrap">One revision per project</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature 05 */}
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Feature 05">
                    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g>
                          <path d={svgPaths.p182b6e00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p1b6384d0} fill="white" />
                          <path d={svgPaths.p310dbe80} fill="white" />
                          <path d={svgPaths.p20619900} fill="white" />
                        </g>
                      </svg>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[24px] whitespace-pre-wrap">Email support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <Link to="/contact-us" className="bg-[#fdc500] cursor-pointer relative rounded-[1000px] shrink-0 w-full hover:bg-[#fdd520] transition-colors" data-name="Button → Large">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-center justify-between pl-[20px] pr-[8px] py-[8px] relative w-full">
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
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 - Pro Plan */}
          <div className="bg-[#242424] flex-[1_0_0] min-h-px min-w-px relative" data-name="Pricing card → Pricing card">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[28px] items-start p-[24px] relative w-full">
                
                {/* Top Wrapper */}
                <div className="h-[160.81px] relative shrink-0 w-full" data-name="Top wrapper">
                  <div className="absolute content-stretch flex flex-col items-start left-0 opacity-70 top-[-1px]" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[22.4px]">Pro Plan</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[29.4px]" data-name="h2.framer-text">
                    <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[45.2px] text-white tracking-[-1.44px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                      <p className="leading-[50.4px]">$999</p>
                    </div>
                  </div>
                  
                  <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-0 top-[88.81px]" data-name="p.framer-text">
                    <div className="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                      <p className="mb-0">{`Ideal for growing agencies needing consistent, `}</p>
                      <p className="mb-0">{`high-quality video content with fast delivery and `}</p>
                      <p>priority support.</p>
                    </div>
                  </div>
                  
                  <div className="absolute bg-[#333] content-stretch flex items-center justify-center px-[8px] py-[4px] right-[-0.64px] top-0" data-name="Tag">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10.5px] text-white tracking-[-0.24px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[14.4px]">Best Value</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Line */}
                <div className="bg-[#b0b0b0] h-px opacity-30 shrink-0 w-full" data-name="Line" />

                {/* Features Wrapper */}
                <div className="content-stretch flex flex-col gap-[12px] items-center justify-center opacity-60 relative shrink-0 w-full" data-name="Features wrapper">
                  {/* Feature 01 */}
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Feature 01">
                    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g>
                          <path d={svgPaths.p3f4c7900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p4ddb00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M3 19.5H21" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[24px] whitespace-pre-wrap">5 video projects</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature 02 */}
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Feature 02">
                    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g>
                          <path d={svgPaths.p26a3a080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p15cabf0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M12.75 12L7.792 15.393" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M21.75 5.843L15.406 10.183" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M21.75 18.157L7.792 8.607" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[24px] whitespace-pre-wrap">Advanced editing & color grading</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature 03 */}
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Feature 03">
                    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g>
                          <path d={svgPaths.pbf27680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p1bf25b00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p170b82c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[24px] whitespace-pre-wrap">4K video quality</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature 04 */}
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Feature 04">
                    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g>
                          <path d={svgPaths.p115c8700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M14.25 3V8.25H19.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M12 11.25V17.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M9.75 15L12 17.25L14.25 15" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[24px] whitespace-pre-wrap">Unlimited revisions</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature 05 */}
                  <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="Feature 05">
                    <div className="relative shrink-0 size-[24px]" data-name="Component 1">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                        <g>
                          <path d={svgPaths.p182b6e00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p1b6384d0} fill="white" />
                          <path d={svgPaths.p310dbe80} fill="white" />
                          <path d={svgPaths.p20619900} fill="white" />
                        </g>
                      </svg>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[24px] whitespace-pre-wrap">Priority 24/7 support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <Link to="/contact-us" className="bg-[#fdc500] cursor-pointer relative rounded-[1000px] shrink-0 w-full hover:bg-[#fdd520] transition-colors" data-name="Button → Large">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-center justify-between pl-[20px] pr-[8px] py-[8px] relative w-full">
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
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 - Custom Request */}
          <div className="bg-[#242424] flex-[1_0_0] min-h-px min-w-px relative" data-name="Pricing card → Pricing card">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[28px] items-start p-[24px] relative w-full">
                
                {/* Top Wrapper */}
                <div className="h-[160.81px] relative shrink-0 w-full" data-name="Top wrapper">
                  <div className="absolute content-stretch flex flex-col items-start left-0 opacity-70 top-[-1px]" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.6px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[22.4px]">Have a custom request?</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute content-stretch flex flex-col items-start left-0 opacity-80 right-0 top-[29.4px]" data-name="h2.framer-text">
                    <div className="flex flex-col font-medium justify-center leading-[30px] not-italic relative shrink-0 text-[28.8px] text-white tracking-[-0.72px]" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                      <p className="mb-0">{`We provide custom pricing `}</p>
                      <p className="mb-0">{`plans designed around `}</p>
                      <p className="mb-0">{`your`}</p>
                      <p className="mb-0">{`project goals, timeline, & `}</p>
                      <p>budget.</p>
                    </div>
                  </div>
                  
                  <div className="absolute bg-[#333] content-stretch flex items-center justify-center px-[8px] py-[4px] right-[-1.4px] top-0" data-name="Tag">
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10.9px] text-white tracking-[-0.24px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[14.4px]">Custom</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Line */}
                <div className="bg-[#b0b0b0] h-px opacity-30 shrink-0 w-full" data-name="Line" />

                {/* Spacer for alignment */}
                <div className="h-[168px] w-full" />

                {/* Button */}
                <Link to="/contact-us" className="bg-[#fdc500] cursor-pointer relative rounded-[1000px] shrink-0 w-full hover:bg-[#fdd520] transition-colors" data-name="Button → Large">
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-center justify-between pl-[20px] pr-[8px] py-[8px] relative w-full">
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
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}