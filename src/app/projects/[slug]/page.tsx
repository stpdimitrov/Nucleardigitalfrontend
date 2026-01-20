'use client';

import React from 'react';
import { motion } from 'motion/react';
import { NavbarAnimated } from '../../../components/NavbarAnimated';
import { CTASection } from '../../../components/CTASection';
import { Footer } from '../../../components/Footer';
import { projects } from '../../../services/mock-data';
import { heroAnimation, viewport, scrollFadeIn } from '../../../lib/animations';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  // Find the project by slug
  const project = projects.find(p => p.slug === params.slug);

  // If project not found, show a message
  if (!project) {
    return (
      <div className="text-black text-[16px] leading-[normal]" style={{"fontFamily":"\"Times New Roman\"","width":"1024px","transform":"scale(1)","margin":"auto"}}>
        <div className="bg-black text-[12px]" style={{"fontFamily":"sans-serif"}}>
          <div>
            <div className="items-center flex flex-col h-min justify-start overflow-clip relative bg-black gap-[0px] min-h-[640px]">
              <NavbarAnimated />
              <div className="items-center flex flex-col h-screen justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-6 pl-0">
                <div className="items-center flex flex-col grow h-min justify-center overflow-clip relative w-full gap-[24px] max-w-[790px] z-[1] shrink-[0]">
                  <div className="flex flex-col justify-start relative w-full shrink-[0]">
                    <h1 className="font-medium text-center text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Project Not Found</h1>
                  </div>
                  <div aria-label="Button" className="relative shrink-[0]">
                    <a href="/projects" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                      <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                        <p className="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>View all projects</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative w-full shrink-[0]" style={{"order":"1003"}}>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-black text-[16px] leading-[normal]" style={{"fontFamily":"\"Times New Roman\"","width":"1024px","transform":"scale(1)","margin":"auto"}}>
      <div className="bg-black text-[12px]" style={{"fontFamily":"sans-serif"}}>
        <div>
          <div className="items-center flex flex-col h-min justify-start overflow-clip relative bg-black gap-[0px] min-h-[640px]">
            <NavbarAnimated />
            
            <div className="items-center contents h-min justify-start overflow-hidden relative bg-black gap-[0px] min-h-[640px]">
              {/* Hero Section with Project Video */}
              <motion.header
                aria-label="Project hero"
                className="items-center flex flex-col h-screen justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-6 pl-0"
                initial="hidden"
                animate="visible"
                variants={heroAnimation}
              >
                <div className="absolute left-0 top-0 right-0 bottom-0">
                  <video src={project.videoUrl} className="size-full object-cover overflow-clip" autoPlay muted loop playsInline></video>
                </div>
                <div aria-label="Overlay" className="size-full overflow-clip absolute left-[0%] top-[0%] bg-black z-[1] shrink-[0] opacity-[0.4]"></div>
                <div aria-label="Container" className="items-center flex grow h-min justify-center overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 z-[2] shrink-[0]">
                  <div aria-label="Wrapper" className="items-center flex flex-col grow h-min justify-center overflow-clip relative w-px basis-0 gap-[24px] max-w-[790px] shrink-[0]">
                    <div aria-label="Section tag" className="relative shrink-[0]">
                      <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                        <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                          <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{project.service}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start relative w-full shrink-[0]">
                      <h1 className="font-medium text-center text-white text-[56px] tracking-[-1.68px] leading-[67.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{project.name}</h1>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.9]">
                      <p className="font-medium text-center text-[rgb(221,_221,_221)] text-[18px] tracking-[-0.36px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>{project.date}</p>
                    </div>
                  </div>
                </div>
              </motion.header>

              {/* Project Details Section */}
              <motion.section
                aria-label="Project details"
                className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={scrollFadeIn}
              >
                <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[800px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
                  <div className="flex flex-col justify-start relative w-full gap-[32px] shrink-[0]">
                    <div aria-label="Section tag" className="relative shrink-[0]">
                      <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                        <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                          <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Project overview</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                      <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>About This Project</h2>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.8]">
                      <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] tracking-[-0.36px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>This {project.service.toLowerCase()} project showcases our commitment to cinematic storytelling and visual excellence. Through careful planning, creative direction, and technical expertise, we delivered a compelling narrative that resonates with audiences and achieves our client's objectives.</p>
                    </div>
                  </div>

                  {/* Project Info Grid */}
                  <div className="grid h-min justify-center relative w-full grid-rows-[repeat(1,min-content)] gap-[16px] shrink-[0]" style={{"gridTemplateColumns":"repeat(2, minmax(50px, 1fr))"}}>
                    <div className="flex flex-col justify-start relative w-full bg-[rgb(36,_36,_36)] gap-[12px] p-6 shrink-[0]">
                      <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                        <p className="font-medium text-left uppercase text-white text-[14px] tracking-[-0.14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Service</p>
                      </div>
                      <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.9]">
                        <p className="font-medium text-[rgb(221,_221,_221)] text-[20px] tracking-[-0.4px] leading-[28px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>{project.service}</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start relative w-full bg-[rgb(36,_36,_36)] gap-[12px] p-6 shrink-[0]">
                      <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                        <p className="font-medium text-left uppercase text-white text-[14px] tracking-[-0.14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Completed</p>
                      </div>
                      <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.9]">
                        <p className="font-medium text-[rgb(221,_221,_221)] text-[20px] tracking-[-0.4px] leading-[28px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>{project.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Back Button */}
                  <div aria-label="Button" className="relative shrink-[0]">
                    <a href="/projects" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                      <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                        <p className="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>View all projects</p>
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
              </motion.section>

              {/* CTA Section */}
              <CTASection
                tag="Start your project"
                heading="Inspired by what you see? Let's create something amazing for your brand."
                buttonText="Get started"
                buttonHref="/contact-us"
                backgroundImage="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F034782943c0a8b7c7fd2455a1e51d707289a39ec.jpeg%3Fwidth=1280&amp;height=1280?generation=1768843023470915&amp;alt=media"
                backgroundAlt="Cinematic production scene with professional equipment"
              />
            </div>

            {/* Footer */}
            <div className="relative w-full shrink-[0]" style={{"order":"1003"}}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
