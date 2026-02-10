'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import svgPaths from "../imports/svg-awqwrfynnl";
import imgCoverImageConnect from "figma:asset/64551b4f8a24e6e0541fe588b92468f0e00c3a5e.png";

interface Tab {
  id: string;
  icon: string;
  title: string;
  step: string;
  heading: string;
  description: string;
  coverImage: string;
  buttonText: string;
  buttonHref: string;
}

const tabs: Tab[] = [
  {
    id: 'connect',
    icon: 'lightning',
    title: 'Connect',
    step: '001.',
    heading: 'Connect',
    description: "Start by sharing your vision and goals — we'll collaborate closely to plan a creative direction perfectly suited to your brand.",
    coverImage: imgCoverImageConnect,
    buttonText: 'Contact us',
    buttonHref: '/contact-us'
  },
  {
    id: 'create',
    icon: 'lightning',
    title: 'Create',
    step: '002.',
    heading: 'Create',
    description: "Our team brings your story to life through expert filming, directing, and production—capturing every detail with precision and creativity.",
    coverImage: imgCoverImageConnect, // Using same image, replace if different
    buttonText: 'Our Services',
    buttonHref: '/services'
  },
  {
    id: 'launch',
    icon: 'lightning',
    title: 'Launch',
    step: '003.',
    heading: 'Launch',
    description: "We finalize every element through editing, color grading, and sound design—then deliver your polished video ready to captivate your audience.",
    coverImage: imgCoverImageConnect, // Using same image, replace if different
    buttonText: 'View Projects',
    buttonHref: '/projects'
  }
];

export function HowWeWorkSection() {
  const [activeTab, setActiveTab] = useState('connect');
  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section aria-label="How we work" className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0 bg-black">
      <div aria-label="Container" className="content-stretch flex flex-col gap-[62.99px] items-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]">
        
        {/* Header Section */}
        <div className="h-[106.41px] overflow-clip relative shrink-0 w-full" data-name="Grid 6x">
          {/* Section Tag */}
          <div className="absolute content-stretch flex h-[22.41px] items-center justify-center left-0 overflow-clip pb-px top-0" data-name="Section tag">
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                  <p className="leading-[22.4px]">How we work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Wrapper */}
          <div className="absolute h-[106.41px] left-[400px] overflow-clip right-[400px] top-0" data-name="Text wrapper">
            <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[45.4px] text-white tracking-[-1.44px] whitespace-nowrap" style={{fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif'}}>
                <p className="leading-[50.4px]">Inside the Process</p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-0 opacity-70 right-0 top-[58.4px]">
              <div className="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                <p className="mb-0">{`From concept to screen, our process transforms ideas into `}</p>
                <p>powerful visual stories that inspire.</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <Link to="/services" className="absolute bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center left-[1035.39px] overflow-clip pl-[16px] pr-[6px] py-[6px] rounded-[1000px] top-[62.4px]">
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.6px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                  <p className="cursor-pointer leading-[22.4px]">what we do</p>
                </div>
              </div>
            </div>
            <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]">
              <div className="overflow-clip relative shrink-0 size-[15px]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]">
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]">
                    <div className="relative shrink-0 size-[15px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                        <g>
                          <path d={svgPaths.pb055200} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2 flex items-center justify-center">
                  <ArrowRight className="w-full h-full text-white" strokeWidth={2} />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Content Section with Tabs */}
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
          
          {/* Top Tabs */}
          <div className="content-stretch flex gap-[14px] items-start justify-center relative shrink-0 w-full" data-name="Top tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px pb-[12px] relative transition-opacity duration-200 ${
                  activeTab === tab.id ? '' : 'opacity-60 hover:opacity-80'
                }`}
              >
                <div className="relative shrink-0 size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      {activeTab === tab.id && (
                        <path d={svgPaths.p318b9b80} fill="white" />
                      )}
                      <path d={svgPaths.p318b9b80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                      <p className="leading-[22.4px] whitespace-pre-wrap">{tab.title}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-[1px_0_0_0]">
                  <div aria-hidden="true" className="absolute border-b border-solid border-white inset-0 pointer-events-none" />
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-[#242424] relative shrink-0 w-full">
              <div className="flex flex-row justify-center size-full">
                <div className="content-stretch flex gap-[14px] items-start justify-center p-[20px] relative w-full">
                  
                  {/* Cover Image */}
                  <div className="h-[473px] overflow-clip relative shrink-0 w-[763.33px]" data-name="Cover image">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                      <img alt="" className="absolute h-[161.38%] left-0 max-w-none top-[-30.69%] w-full" src={currentTab.coverImage} />
                    </div>
                  </div>

                  {/* Content Wrapper */}
                  <div className="overflow-clip relative self-stretch shrink-0 w-[374.66px]">
                    
                    {/* Top Content */}
                    <div className="absolute content-stretch flex flex-col gap-[22px] items-start justify-center left-0 right-0 top-[-1px]">
                      {/* Step Number */}
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase w-full" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                            <p className="leading-[22.4px] whitespace-pre-wrap">{currentTab.step}</p>
                          </div>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="h-[138.41px] overflow-clip relative shrink-0 w-full">
                        <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]">
                          <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[45.2px] text-white tracking-[-1.44px] whitespace-nowrap" style={{fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif'}}>
                            <p className="leading-[50.4px]">{currentTab.heading}</p>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col items-start left-0 opacity-60 right-0 top-[66.4px]">
                          <div className="flex flex-col font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px]" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                            <p className="whitespace-pre-wrap">{currentTab.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <Link to={currentTab.buttonHref} className="absolute bg-[#fdc500] content-stretch cursor-pointer flex items-center justify-between left-0 overflow-clip pl-[20px] pr-[8.01px] py-[8px] right-0 rounded-[1000px] top-[425px] hover:bg-[#fdd520] transition-colors">
                      <div className="content-stretch flex flex-col items-start relative shrink-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                            <p className="cursor-pointer leading-[22.4px]">{currentTab.buttonText}</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]">
                        <div className="overflow-clip relative shrink-0 size-[15px]">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]">
                            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]">
                              <div className="relative shrink-0 size-[15px]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                                  <g>
                                    <path d={svgPaths.pb055200} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2 flex items-center justify-center">
                            <ArrowRight className="w-full h-full text-white" strokeWidth={2} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
