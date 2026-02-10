import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import svgPaths from '../imports/svg-ozwd53yidp';
import { projects } from '../services/mock-data';
import { imgBgBlur, imgBgBlur1 } from '../imports/svg-fkkd3';
import { LetsConnectSection } from '../components/LetsConnectSection';

export function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All Projects');
  
  // Featured project is the first one
  const featuredProject = projects[0];
  
  // Grid projects are the rest
  const gridProjects = projects.slice(1);

  return (
    <div className="items-center contents h-min justify-start overflow-hidden relative bg-black gap-[0px] min-h-[640px]">
      {/* Hero Section */}
      <section aria-label="Hero" className="items-center flex h-min justify-center overflow-clip relative w-full bg-black pt-[100px] pr-0 pb-[64px] pl-0">
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          {/* Grid 6x - Hero Content */}
          <div className="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-full" data-name="Grid 6x">
            {/* Description - Year */}
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Description">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.1px] tracking-[-0.32px] whitespace-nowrap">
                <p className="leading-[24px]">2020-2025</p>
              </div>
            </div>

            {/* Text Wrapper - Main Heading */}
            <div className="content-stretch flex flex-col gap-[8px] items-center overflow-clip relative shrink-0 max-w-[600px]" data-name="Text wrapper">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="h1.framer-text">
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[57.3px] text-white tracking-[-1.8px] w-full text-center">
                  <p className="leading-[63px] whitespace-pre-wrap">Our projects</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center opacity-60 relative shrink-0 w-full" data-name="p.framer-text">
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[27px] not-italic relative shrink-0 text-[#ddd] text-[16.3px] w-full text-center whitespace-pre-wrap">
                  <p className="mb-0">{`Showcasing our finest video projects crafted with `}</p>
                  <p>{`creativity, passion, & cinematic excellence.`}</p>
                </div>
              </div>
            </div>

            {/* Scroll Down */}
            <div className="content-stretch flex gap-[4px] h-[22.41px] items-center justify-end overflow-clip pb-px relative shrink-0" data-name="Scroll down → Scroll down">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-1lpeffq">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap">
                    <p className="leading-[22.4px]">Scroll down</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 size-[18px]" data-name="Icon:mask-group">
                <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start right-0 top-1/2 w-[18px]" data-name="Icon:mask">
                  <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="Component 4">
                    <div className="relative shrink-0 size-[18px]" data-name="Component 1">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g id="Component 1">
                          <path d={svgPaths.p8871c00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="-translate-y-1/2 absolute bg-white right-0 size-[18px] top-1/2" data-name="Icon" />
              </div>
            </div>
          </div>

          {/* Featured Project */}
          <div className="content-stretch flex flex-col h-[650px] items-start justify-center relative shrink-0 w-full" data-name="Projects wrapper → Featured project">
            <Link 
              to={`/projects/${featuredProject.slug}`}
              className="block cursor-pointer flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" 
              data-name="Featured project"
            >
              {/* Video/Image */}
              <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Video">
                <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="absolute h-[183.38%] left-0 max-w-none top-[-41.69%] w-full object-cover"
                      src={featuredProject.videoUrl}
                    />
                  </div>
                </div>
              </div>

              {/* BG Blur */}
              <div className="absolute bottom-0 h-[296px] left-0 right-0" data-name="BG Blur:mask-group">
                <div 
                  className="absolute backdrop-blur-[5px] bottom-0 h-[296px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_296px] right-0" 
                  data-name="BG Blur" 
                  style={{ maskImage: `url('${imgBgBlur}')` }} 
                />
              </div>

              {/* Text Wrapper */}
              <div className="absolute bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[rgba(0,0,0,0)] gap-[22px] items-start justify-end left-0 overflow-clip pb-[28px] pt-[27px] px-[28px] right-0 to-black" data-name="Text wrapper">
                {/* Heading and Description */}
                <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Text wrapper">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h4.framer-text">
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[34.3px] text-left text-white tracking-[-0.72px] w-full" role="link" tabIndex={0}>
                        <p className="cursor-pointer leading-[50.4px] whitespace-pre-wrap">{featuredProject.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start max-w-[500px] opacity-70 relative shrink-0 w-[500px]">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                      <div className="cursor-pointer flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[#ddd] text-[14.4px] text-left tracking-[-0.32px] w-full whitespace-pre-wrap" role="link" tabIndex={0}>
                        <p className="mb-0">Created a cinematic video showcasing the warmth,</p>
                        <p>craftsmanship, and storytelling behind {featuredProject.name}.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details - Tags */}
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Details">
                  {/* Service Provided */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Service provided">
                    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
                      <div className="content-stretch flex flex-col items-start relative shrink-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.8px] text-left whitespace-nowrap">
                            <p className="leading-[19.6px]">{featuredProject.service}</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Date">
                    <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
                      <div className="content-stretch flex flex-col items-start relative shrink-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.1px] text-left whitespace-nowrap">
                            <p className="leading-[19.6px]">{featuredProject.date}</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section aria-label="Projects Grid" className="items-center flex h-min justify-center overflow-clip relative w-full bg-black pt-[64px] pr-0 pb-[100px] pl-0">
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[32px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          {/* Top Wrapper - Filter */}
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Top wrapper">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[804px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h6.framer-text">
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[26.7px] text-white tracking-[-0.84px] w-full">
                  <p className="leading-[29.4px] whitespace-pre-wrap">Search by filter</p>
                </div>
              </div>
            </div>

            {/* Filter Dropdown */}
            <div className="bg-[#242424] content-stretch flex flex-col items-start max-w-[380px] p-[14px] relative shrink-0 w-[380px]" data-name="Filter">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full cursor-pointer" data-name="Text">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
                      <p className="leading-[24px]">{selectedFilter}</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[20px]" data-name="Icon:mask-group">
                  <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-1/2 w-[20px]">
                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]">
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Component 1">
                            <path d={svgPaths.p1f0e57c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="-translate-y-1/2 absolute bg-white left-0 size-[20px] top-1/2" data-name="Icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="relative shrink-0 w-full h-[908px]">
            {/* First Row */}
            <div className="absolute left-0 top-0 right-[808px] h-[440px]">
              <ProjectCard project={gridProjects[0]} />
            </div>
            <div className="absolute left-[416px] top-0 right-[392px] h-[440px]">
              <ProjectCard project={gridProjects[1]} />
            </div>
            <div className="absolute right-0 top-0 w-[384px] h-[440px]">
              <ProjectCard project={gridProjects[2]} />
            </div>

            {/* Second Row */}
            <div className="absolute left-0 bottom-0 right-[808px] h-[440px]">
              <ProjectCard project={gridProjects[3]} />
            </div>
            <div className="absolute left-[416px] bottom-0 right-[392px] h-[440px]">
              <ProjectCard project={gridProjects[4]} />
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <LetsConnectSection />
    </div>
  );
}

interface ProjectCardProps {
  project: {
    id: string;
    slug: string;
    name: string;
    videoUrl: string;
    service: string;
    date: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      to={`/projects/${project.slug}`}
      className="absolute block inset-0" 
      data-name="Project card → Project card"
    >
      {/* Video */}
      <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Video">
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute h-full left-[-7.29%] max-w-none top-0 w-[114.58%] object-cover"
              src={project.videoUrl}
            />
          </div>
        </div>
      </div>

      {/* BG Blur */}
      <div className="absolute bottom-0 h-[175px] left-0 right-0" data-name="BG blur:mask-group">
        <div 
          className="absolute backdrop-blur-[5px] bottom-0 h-[175px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[384px_175px] right-0" 
          data-name="BG blur" 
          style={{ maskImage: `url('${imgBgBlur1}')` }} 
        />
      </div>

      {/* Text */}
      <div className="absolute bottom-[-1px] content-stretch flex flex-col gap-[16px] items-start justify-center left-0 p-[20px] right-0" data-name="Text">
        {/* Heading */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h6.framer-text">
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[26.4px] text-left text-white tracking-[-0.84px] w-full" role="link" tabIndex={0}>
              <p className="cursor-pointer leading-[29.4px] whitespace-pre-wrap">{project.name}</p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Details">
          {/* Service */}
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.7px] text-left whitespace-nowrap">
                    <p className="leading-[19.6px]">{project.service}</p>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
            </div>
          </div>

          {/* Date */}
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="backdrop-blur-[5px] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative shrink-0" data-name="Blog tag">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ddd] text-[12.1px] text-left whitespace-nowrap">
                    <p className="leading-[19.6px]">{project.date}</p>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}