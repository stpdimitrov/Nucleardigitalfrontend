'use client';

import { ArrowRight } from 'lucide-react';
import { LetsConnectSection } from '../components/LetsConnectSection';
import { HowWeWorkSection } from '../components/HowWeWorkSection';

export function ServicesPageNew() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-[1240px] mx-auto">
          {/* Section Tag */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center h-[22px] pb-px">
              <p className="font-medium uppercase text-white text-[14px] tracking-[-0.16px] leading-[22.4px]" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                our services
              </p>
            </div>
          </div>

          {/* Hero Text */}
          <div className="text-center mb-20">
            <h1 className="font-medium text-white text-[56.7px] leading-[63px] tracking-[-1.8px] mb-2" style={{fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif'}}>
              What We Offer
            </h1>
            <p className="font-medium text-[#ddd] text-[16.5px] leading-[27px] opacity-60 max-w-[600px] mx-auto text-center" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
              Delivering expert video production services that elevate brands and bring stories to life.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Production Card - Full height on left */}
            <div className="md:row-span-2">
              <div className="bg-[rgb(17,17,17)] rounded-[16px] overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-[500px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1614543608792-e9f1b007602f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBzdW5zZXQlMjBjbG91ZHMlMjBjYW1lcmElMjBmaWxtaW5nfGVufDF8fHx8MTc3MDU1MDY0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Video Production"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h4 className="font-medium text-white text-[28px] leading-[33.6px] tracking-[-0.48px] mb-3" style={{fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif'}}>
                    Video Production
                  </h4>
                  <p className="font-medium text-white text-[16px] leading-[24px] opacity-60 mb-6" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                    We handle every stage from concept to filming, creating visuals that capture emotion and inspire audiences.
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-[rgb(36,36,36)] px-4 py-2 rounded-full">
                      <p className="font-medium text-white text-[14px] leading-[21px] opacity-80" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        Commercials
                      </p>
                    </div>
                    <div className="bg-[rgb(36,36,36)] px-4 py-2 rounded-full">
                      <p className="font-medium text-white text-[14px] leading-[21px] opacity-80" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        Brand Films
                      </p>
                    </div>
                    <div className="bg-[rgb(36,36,36)] px-4 py-2 rounded-full">
                      <p className="font-medium text-white text-[14px] leading-[21px] opacity-80" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        Product Videos
                      </p>
                    </div>
                    <div className="bg-[rgb(36,36,36)] px-4 py-2 rounded-full">
                      <p className="font-medium text-white text-[14px] leading-[21px] opacity-80" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        Corporate Shoots
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Creative Direction Card - Top right */}
            <div>
              <div className="bg-[rgb(17,17,17)] rounded-[16px] overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-[280px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRmbGl4JTIwc3RvcmVmcm9udCUyMHByb2R1Y3Rpb24lMjBsaWdodHN8ZW58MXx8fHwxNzcwNTUwNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Creative Direction"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h4 className="font-medium text-white text-[24px] leading-[28.8px] tracking-[-0.48px] mb-2" style={{fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif'}}>
                    Creative Direction
                  </h4>
                  <p className="font-medium text-white text-[14px] leading-[21px] opacity-60 mb-4" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                    Strategic vision meets artistic execution in every project we undertake.
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-[rgb(36,36,36)] px-3 py-1.5 rounded-full">
                      <p className="font-medium text-white text-[12px] leading-[18px] opacity-80" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        Brand Strategy
                      </p>
                    </div>
                    <div className="bg-[rgb(36,36,36)] px-3 py-1.5 rounded-full">
                      <p className="font-medium text-white text-[12px] leading-[18px] opacity-80" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        Art Direction
                      </p>
                    </div>
                    <div className="bg-[rgb(36,36,36)] px-3 py-1.5 rounded-full">
                      <p className="font-medium text-white text-[12px] leading-[18px] opacity-80" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        Concept Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Post-Production & Editing Card - Bottom right */}
            <div>
              <div className="bg-[rgb(17,17,17)] rounded-[16px] overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-[280px] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1609095515245-f6b9d9c32d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBjaW5lbWElMjBwcm9kdWN0aW9uJTIwbmlnaHR8ZW58MXx8fHwxNzcwNTUwNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Post-Production & Editing"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h4 className="font-medium text-white text-[24px] leading-[28.8px] tracking-[-0.48px] mb-2" style={{fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif'}}>
                    Post-Production & Editing
                  </h4>
                  <p className="font-medium text-white text-[14px] leading-[21px] opacity-60 mb-4" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                    Polishing your content to perfection with expert editing and effects.
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-[rgb(36,36,36)] px-3 py-1.5 rounded-full">
                      <p className="font-medium text-white text-[12px] leading-[18px] opacity-80" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        Color Grading
                      </p>
                    </div>
                    <div className="bg-[rgb(36,36,36)] px-3 py-1.5 rounded-full">
                      <p className="font-medium text-white text-[12px] leading-[18px] opacity-80" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        VFX
                      </p>
                    </div>
                    <div className="bg-[rgb(36,36,36)] px-3 py-1.5 rounded-full">
                      <p className="font-medium text-white text-[12px] leading-[18px] opacity-80" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        Sound Design
                      </p>
                    </div>
                    <div className="bg-[rgb(36,36,36)] px-3 py-1.5 rounded-full">
                      <p className="font-medium text-white text-[12px] leading-[18px] opacity-80" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        Motion Graphics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the Process Section */}
      <HowWeWorkSection />

      {/* CTA Section - "Ready to bring your vision to life" */}
      <section className="w-full">
        <div className="relative w-full flex items-center justify-center overflow-clip py-[463.19px]">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img 
              alt="" 
              className="absolute h-[160%] left-0 max-w-none top-[-30%] w-full object-cover" 
              src="https://images.unsplash.com/photo-1579729056041-cd1e4a13a13f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjB0cmlwb2QlMjBwcm9kdWN0aW9uJTIwb3JhbmdlJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzcwNTUwNjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute bg-black inset-0 opacity-30" />
          
          {/* Container */}
          <div className="content-stretch flex items-center justify-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-[1240px]">
            {/* Wrapper */}
            <div className="content-stretch flex flex-col gap-[22.9px] items-center justify-center max-w-[790px] overflow-clip relative shrink-0 w-[790px]">
              {/* Section Tag */}
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="content-stretch flex h-[22.41px] items-center justify-center overflow-clip pb-px relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-white tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                        <p className="leading-[22.4px]">Lets work together</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Heading */}
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                  <div className="flex flex-col font-medium justify-center leading-[50.4px] not-italic relative shrink-0 text-[45.4px] text-center text-white tracking-[-1.44px] whitespace-nowrap" style={{fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif'}}>
                    <p className="mb-0">Ready to bring your vision to life?</p>
                    <p className="mb-0">Let's create stunning visuals that</p>
                    <p>captivate, inspire, and deliver results.</p>
                  </div>
                </div>
              </div>
              
              {/* Button Wrapper */}
              <div className="content-stretch flex items-center justify-center pt-[9.1px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0">
                  <a 
                    className="bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center overflow-clip pl-[16px] pr-[6px] py-[6px] relative rounded-[1000px] shrink-0 hover:bg-[#edb800] transition-colors" 
                    href="/contact-us"
                  >
                    {/* Description */}
                    <div className="content-stretch flex flex-col items-start relative shrink-0">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14.1px] text-black text-left tracking-[-0.16px] uppercase whitespace-nowrap" style={{fontFamily: '"Apfel Grotezk", "Apfel Grotezk Placeholder", sans-serif'}}>
                          <p className="leading-[22.4px]">contact us</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Icon Wrapper */}
                    <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]">
                      {/* Icons */}
                      <div className="overflow-clip relative shrink-0 size-[15px]">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15px] top-1/2 flex items-center justify-center">
                          <ArrowRight className="w-full h-full text-white" strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}