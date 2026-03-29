import React from 'react';
import { useParams, Link } from 'react-router';
import svgPaths from "../imports/svg-lcn8oo4q1c";
import svgPathsDetails from "../imports/svg-k2fmqh99j6";
import imgYBaA0Py3XVvTEcxJPzZkcRyAqiMp4 from "figma:asset/262a52ac8c1d4fa93d205eacd5f450331210ebf1.png";
import imgStwjz8NPvdLrtlUtZSa1Q2TiWj4Mp4 from "figma:asset/4226d314ffe705a0bd7b293b43a3a0233bfac3f1.png";
import imgFj77GdLzfqxchf7V1Avap8QMp4 from "figma:asset/7b2cdb7620ebd863cc75638869331737f67c2115.png";
import imgRfuIrDwIjOsmiTbC2G0Wk58YoMp4 from "figma:asset/81d39f462dbcc34c57d5d24f3d6e4a87db3b19f2.png";
import imgDesktop from "figma:asset/440a9540a3ca269479ea831effae21961445d048.png";
import { EditableCTASection } from '../src/cms';

export function ProjectDetailPage() {
  const { slug } = useParams();

  return (
    <div className="w-full bg-black relative">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-end justify-center pb-24">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            alt="" 
            className="absolute h-full left-0 w-full object-cover" 
            src={imgYBaA0Py3XVvTEcxJPzZkcRyAqiMp4} 
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-10" />
        
        {/* Content */}
        <div className="relative z-20 w-full max-w-[1920px] px-[340px] pb-6">
          <div className="w-full max-w-[1240px] mx-auto px-6">
            <div className="flex items-end justify-between w-full">
              {/* Title and Description */}
              <div className="flex flex-col gap-2 max-w-[600px]">
                <h1 className="font-['Inter:Medium',sans-serif] font-medium text-[57px] text-white tracking-[-1.8px] leading-[63px]">
                  Lumen Brew
                </h1>
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[#ddd] text-[16.2px] leading-[27px] opacity-70">
                  Created a cinematic video showcasing the warmth, craftsmanship, and storytelling behind Lumen Brew Coffee.
                </p>
              </div>
              
              {/* Right side - Scroll Down and Made in Framer */}
              <div className="flex flex-col items-end gap-4">
                {/* Scroll Down */}
                <div className="flex items-center gap-1">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-white text-[14.1px] tracking-[-0.16px] uppercase leading-[22.4px]">
                    Scroll down
                  </p>
                  <div className="w-[18px] h-[18px] relative">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p8871c00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                
                {/* Made in Framer Badge */}
                <a 
                  href="https://framer.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded-full px-4 py-2 flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-black text-[12px] leading-[16px]">
                    Made in Framer
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section - Exact Figma Copy */}
      <div className="w-full flex items-center justify-center px-[340px] py-[100px] relative z-10" data-name="Details">
        <div className="flex flex-col gap-[64px] items-center w-full max-w-[1240px] px-[24px]" data-name="Container">
          
          {/* Grid 2x - Description and Details */}
          <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Grid 2x">
            <div className="flex-[1_0_0] min-h-px min-w-px self-stretch" data-name="Spacer" />
            
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[26px] items-start min-h-px min-w-px overflow-clip relative" data-name="Text wrapper">
              {/* Description */}
              <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="p.framer-text">
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] w-full whitespace-pre-wrap">
                  <p className="mb-0">Lumen Brew was a collaboration focused on capturing the soul of handcrafted</p>
                  <p className="mb-0">coffee. Our goal was to create a cinematic visual that reflected the brand's</p>
                  <p className="mb-0">passion for quality, craftsmanship, and community. Through artistic lighting,</p>
                  <p className="mb-0">natural textures, and storytelling-driven shots, we brought the brewing</p>
                  <p>process to life, connecting every frame to the brand's authentic identity.</p>
                </div>
              </div>
              
              {/* Details */}
              <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Details">
                {/* Project Name */}
                <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Project Name">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-80 relative" data-name="Description">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] w-full">
                      <p className="leading-[24px] whitespace-pre-wrap">Project Name</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Description">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] w-full">
                      <p className="leading-[24px] whitespace-pre-wrap">Lumen Brew</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />
                
                {/* Date */}
                <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Date">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-80 relative" data-name="Description">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] w-full">
                      <p className="leading-[24px] whitespace-pre-wrap">Date</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Description">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[13.8px] tracking-[-0.32px] w-full">
                      <p className="leading-[24px] whitespace-pre-wrap">Nov 4, 2025</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />
                
                {/* Service Provided */}
                <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Service provided">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-80 relative" data-name="Description">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] w-full">
                      <p className="leading-[24px] whitespace-pre-wrap">Service Provided</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Description">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] w-full">
                      <p className="leading-[24px] whitespace-pre-wrap">Video Production</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#444] h-px shrink-0 w-full" data-name="Line" />
                
                {/* Client */}
                <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Client">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px opacity-80 relative" data-name="Description">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] w-full">
                      <p className="leading-[24px] whitespace-pre-wrap">Client</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Description">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.5px] tracking-[-0.32px] w-full">
                      <p className="leading-[24px] whitespace-pre-wrap">Lumen Coffee Co.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid 2x - Video Grid */}
          <div className="content-stretch flex gap-[20px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Grid 2x">
            <div className="content-stretch flex flex-[1_0_0] flex-col h-[450px] items-start justify-center min-h-px min-w-px relative overflow-hidden" data-name="Video">
              <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="STWJZ8NPvdLRTLUtZSa1q2TIWj4.mp4">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[130.22%] left-0 max-w-none top-[-15.11%] w-full object-cover" src={imgStwjz8NPvdLrtlUtZSa1Q2TiWj4Mp4} />
                </div>
              </div>
            </div>
            
            <div className="content-stretch flex flex-[1_0_0] flex-col h-[450px] items-start justify-center min-h-px min-w-px relative overflow-hidden" data-name="Video">
              <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="FJ77GdLZFQXCHF7v1Avap8Q.mp4">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[130.22%] left-0 max-w-none top-[-15.11%] w-full object-cover" src={imgFj77GdLzfqxchf7V1Avap8QMp4} />
                </div>
              </div>
            </div>
          </div>

          {/* Details - Three sections */}
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Details">
            {/* Project Overview */}
            <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip pb-[22px] relative shrink-0 w-full" data-name="Grid 6x">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[392px]" data-name="Tag">
                <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0" data-name="Section tag">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
                        <p className="leading-[22.4px]">Project overview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[792px]" data-name="Text">
                <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="div.framer-q36vzr">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.3px] tracking-[-0.32px] w-full whitespace-pre-wrap">
                      <p className="mb-0">Lumen Coffee Co. wanted to express the artistry and care that define their brewing process. We developed a concept</p>
                      <p className="mb-0">centered on storytelling through motion — from the first bean roast to the final pour. Using natural light, close-</p>
                      <p className="mb-0">up cinematography, and ambient soundscapes, the film communicates the brand's dedication to slow, thoughtful</p>
                      <p className="mb-0">craftsmanship. Every detail, from color tone to pacing, was designed to evoke warmth, community, and authenticity.</p>
                      <p>The video became the brand's core marketing asset, setting a new visual standard for their online and retail presence.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div aria-hidden="true" className="absolute border-[#444] border-b border-solid inset-0 pointer-events-none" />
            </div>

            {/* Project Process */}
            <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip py-[22px] relative shrink-0 w-full" data-name="Grid 6x">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[392px]" data-name="Tag">
                <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0" data-name="Section tag">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.5px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
                        <p className="leading-[22.4px]">project process</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[792px]" data-name="Text">
                <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="div.framer-vwj05">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] w-full whitespace-pre-wrap">
                      <p className="mb-0">Our process began with pre-production planning, where we storyboarded the visual flow and mood. Filming</p>
                      <p className="mb-0">took place across two days in the café's ambient setting, capturing organic moments of coffee brewing,</p>
                      <p className="mb-0">customer interactions, and brand lifestyle. During post-production, we emphasized cinematic tone and</p>
                      <p className="mb-0">texture through color grading and sound design. The pacing was intentionally slow, mirroring the rhythm</p>
                      <p className="mb-0">of artisanal brewing. Collaborating closely with the client ensured every visual aligned with their story —</p>
                      <p>celebrating detail, patience, and authenticity. The result was a piece that felt as handcrafted as the coffee itself.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div aria-hidden="true" className="absolute border-[#444] border-b border-solid inset-0 pointer-events-none" />
            </div>

            {/* Final Result */}
            <div className="content-stretch flex gap-[8px] items-start justify-center overflow-clip pt-[22px] relative shrink-0 w-full" data-name="Grid 6x">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[392px]" data-name="Tag">
                <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0" data-name="Section tag">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
                        <p className="leading-[22.4px]">final result</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[792px]" data-name="Text">
                <div className="content-stretch flex flex-col items-start opacity-70 relative shrink-0 w-full" data-name="div.framer-1k601lw">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.6px] tracking-[-0.32px] w-full whitespace-pre-wrap">
                      <p className="mb-0">The final film became a centerpiece for Lumen Coffee Co.'s online presence, featured across their website</p>
                      <p className="mb-0">and social campaigns. The cinematic storytelling approach increased viewer engagement and helped</p>
                      <p className="mb-0">strengthen the emotional connection with their audience. Sales rose following the campaign launch, and the</p>
                      <p className="mb-0">brand received strong praise for its elevated visual identity. The video was later showcased in local creative</p>
                      <p className="mb-0">exhibitions, highlighting its artistry and effectiveness in brand communication. Lumen Brew not only captured</p>
                      <p>the beauty of the product but also redefined how handcrafted experiences could be told through motion.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Results Video */}
          <div className="content-stretch flex flex-col h-[700px] items-start justify-center relative shrink-0 w-full overflow-hidden" data-name="Final results video">
            <div className="flex-[1_0_0] min-h-px min-w-px relative w-full overflow-hidden" data-name="rfuIRDwIjOSMITbC2G0WK58Yo.mp4">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-full left-0 top-0 w-full object-cover" src={imgRfuIrDwIjOsmiTbC2G0Wk58YoMp4} />
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="content-stretch cursor-pointer flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Wrapper">
            {/* Previous Button */}
            <a className="bg-[#242424] content-stretch flex gap-[14px] items-start justify-center overflow-clip p-[14px] relative shrink-0" data-name="Previous Project → Previous button" href="/projects">
              <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Icon wrapper">
                <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
                      <div className="relative shrink-0 size-[20px]" data-name="Component 1">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPathsDetails.p47d8a00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
                </div>
              </div>
              
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12.6px] text-left text-white tracking-[-0.14px] uppercase whitespace-nowrap">
                    <p className="cursor-pointer leading-[19.6px]">Previous Project</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Next Button */}
            <a className="bg-[#242424] block h-[50.41px] overflow-clip relative shrink-0 w-[207.09px]" data-name="Next Project → Next button" href="/projects">
              <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-17.04px)] top-[13px]" data-name="Description">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15.1px] text-left text-white tracking-[-0.32px] uppercase whitespace-nowrap">
                    <p className="cursor-pointer leading-[22.4px]">Next Project</p>
                  </div>
                </div>
              </div>
              
              <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+79.54px)] overflow-clip top-[14px]" data-name="Icon wrapper">
                <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[20px]" data-name="Icon:mask">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="Component 4">
                      <div className="relative shrink-0 size-[20px]" data-name="Component 1">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path d={svgPathsDetails.p3b6ad300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[20px] top-1/2" data-name="Icon" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <EditableCTASection contentKey="projectDetail.cta" />
    </div>
  );
}