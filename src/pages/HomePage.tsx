'use client';

import React from 'react';
import { motion } from "motion/react";
import { Link } from 'react-router-dom';
import { ProjectCard } from '../components/ProjectCard';
import { AboutUsSection } from '../components/AboutUsSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { CTASection } from '../components/CTASection';
import { ServicesSection } from '../components/ServicesSection';
import { PricingSection } from '../components/PricingSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { projects, clientLogos, services, pricingPlans, faqItems, testimonials, whyChooseUsItems } from '../services/mock-data';
import { 
  heroAnimation, 
  staggerContainerFast, 
  staggerItem, 
  scrollFadeIn, 
  viewport 
} from '../lib/animations';

export function HomePage() {
  return (
    <div className="items-center contents h-min justify-start overflow-hidden relative bg-black gap-[0px] min-h-[640px]">
      <motion.header aria-label="Hero section" className="items-center flex flex-col h-screen justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-6 pl-0" initial="hidden" animate="visible" variants={heroAnimation}>
        <div className="absolute left-0 top-0 right-0 bottom-0">
          <img alt="Silhouette of a person with a camera walking towards vibrant orange light under dim blue streetlights on a misty road at night. Mysterious and atmospheric." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F90322362c9ba13d2653aa3ef4d89e79643dc092d.png%3Fwidth=1536&amp;height=1024?generation=1768843022421906&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1536_/_1024]" />
        </div>
        <div aria-label="Container" className="items-start flex flex-col grow h-px justify-end overflow-clip relative w-full basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div aria-label="Top wrapper" className="items-center flex h-min justify-start relative w-full gap-[8px] shrink-[0]">
            <div className="flex flex-col grow justify-start relative w-px basis-0 max-w-[600px] shrink-[0]">
              <h1 className="font-medium text-white text-[56px] tracking-[-1.68px] leading-[67.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>
                <span className="inline-block" style={{"textDecoration":"rgb(255, 255, 255)"}}>Create cinematic visuals that captivate every audience</span>
              </h1>
            </div>
          </div>
          <div aria-label="Bottom wrapper" className="items-end flex h-min justify-between overflow-clip relative w-full shrink-[0]">
            <div aria-label="Scroll down" className="relative shrink-[0]">
              <div aria-label="Scroll down" className="items-center flex size-min justify-end overflow-hidden relative gap-[4px]">
                <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Scroll down</p>
                </div>
                <div aria-label="Icon" className="aspect-square relative w-[18px] bg-white z-[1] shrink-[0]"></div>
              </div>
            </div>
            <div aria-label="Hero video" className="relative shrink-[0]">
              <div aria-label="Video Pause" className="overflow-hidden relative w-[250px] h-[200px]">
                <div aria-label="Video Button" className="absolute left-4 bottom-4 z-[3]">
                  <div aria-label="Play" className="items-center flex justify-center overflow-hidden relative w-8 h-8 backdrop-blur-[25px] bg-white/7 gap-[4px] rounded-[62.5rem]">
                    <div aria-label="Icon" className="relative w-5 h-5 shrink-[0]">
                      <div className="contents">
                        <div className="inline-block size-full overflow-hidden text-white fill-white" style={{"textDecoration":"rgb(255, 255, 255)"}}>
                          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F6119109a2a77414c2fb8f621fa18aaed3e52019f.svg?generation=1768843022434339&amp;alt=media" className="inline-block size-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-label="Video" className="absolute left-0 top-0 right-0 bottom-0">
                  <video src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fc9ff2d7236821117c4faa28f56d63a4f06c5b37d.mp4?generation=1768843022528431&amp;alt=media" className="size-full object-cover overflow-clip"></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
      <motion.section aria-label="Introduction" className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0" initial="hidden" whileInView="visible" viewport={viewport} variants={scrollFadeIn}>
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div aria-label="Grid 3x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[24px_8px] z-[4] shrink-[0]" style={{"gridTemplateColumns":"repeat(1, minmax(50px, 1fr))"}}>
            <motion.div aria-label="Section tag" className="self-start justify-self-start relative w-fit" variants={staggerItem}>
              <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Introduction</p>
                </div>
              </div>
            </motion.div>
            <motion.div aria-label="Text wrapper" className="items-start self-start flex flex-col h-min justify-center justify-self-start relative w-full gap-[28px]" style={{"gridArea":"auto / span 1"}} variants={staggerItem}>
              <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>We craft cinematic visuals that inspire audiences, elevate storytelling,  and empower brands to create meaningful, lasting impressions  through seamless video production experiences.</h4>
              </div>
              <div aria-label="Button" className="relative shrink-[0]">
                <Link to="/contact-us" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                  <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <p className="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>Contact us</p>
                  </div>
                  <div aria-label="Icon wrapper" className="items-center flex flex-col justify-center overflow-clip relative w-8 h-8 bg-black gap-[8px] shrink-[0] rounded-[62.5rem]">
                    <div aria-label="Icons" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                      <div aria-label="Icon" className="aspect-square relative w-[15px] bg-white z-[1] shrink-[0]"></div>
                      <div aria-label="Icon" className="aspect-square absolute w-[15px] left-[-20px] top-[47%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div aria-label="Grid 4x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[12px] z-[4] shrink-[0]" style={{"gridTemplateColumns":"repeat(2, minmax(50px, 1fr))"}} initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainerFast}>
            {clientLogos.map((logo) => (
              <motion.div key={logo.id} aria-label="Client logo" className="self-start justify-self-start relative w-full" variants={staggerItem}>
                <div aria-label="Client logo" className="items-center flex justify-center overflow-clip relative w-full h-[120px] bg-[rgb(36,_36,_36)] gap-[8px]">
                  <div aria-label="Logo" className="overflow-clip relative w-[140px] h-[52px] shrink-[0]">
                    <div className="absolute left-0 top-0 right-0 bottom-0">
                      <img src={logo.logoUrl} className={`block size-full object-contain overflow-clip aspect-[${logo.aspectRatio}]`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      <section aria-label="Featured work" className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0">
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div aria-label="Grid 6x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[12px_8px] z-[4] shrink-[0]" style={{"gridTemplateColumns":"repeat(2, minmax(50px, 1fr))"}}>
            <div aria-label="Section tag" className="self-start justify-self-start relative w-fit" style={{"gridArea":"auto / 1 / auto / -1"}}>
              <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Featured work</p>
                </div>
              </div>
            </div>
            <div aria-label="Text" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[8px]">
              <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Our Best Creations</h2>
              </div>
              <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.8]">
                <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Discover our finest projects showcasing creativity, storytelling, and  cinematic excellence.</p>
              </div>
            </div>
            <div aria-label="Button" className="self-end justify-self-end relative w-fit">
              <Link to="/projects" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <p className="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>All projects</p>
                </div>
                <div aria-label="Icon wrapper" className="items-center flex flex-col justify-center overflow-clip relative w-8 h-8 bg-black gap-[8px] shrink-[0] rounded-[62.5rem]">
                  <div aria-label="Icons" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                    <div aria-label="Icon" className="aspect-square relative w-[15px] bg-white z-[1] shrink-[0]"></div>
                    <div aria-label="Icon" className="aspect-square absolute w-[15px] left-[-20px] top-[47%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div aria-label="Projects wrapper" className="grid h-min justify-center relative w-full gap-[20px] shrink-[0]" style={{"gridTemplateColumns":"repeat(4, minmax(50px, 1fr))"}}>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
            <div className="absolute left-[50%] bottom-[-50px]"></div>
          </div>
        </div>
      </section>

      <AboutUsSection
        backgroundImage="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb78f23653961282fd6252e62cd8283d6c0057af5.jpeg%3Fwidth=1280&amp;height=1280?generation=1768843022673805&amp;alt=media"
        backgroundAlt="A person stands against a vibrant background of orange and yellow wavy patterns. They are wearing a dark coat, looking contemplative and thoughtful."
        heading="We're a creative video agency turning ideas into cinematic stories that inspire, engage, & elevate brands."
        buttonText="About us"
        buttonHref="/about-us"
      />

      <WhyChooseUsSection items={whyChooseUsItems} />

      <CTASection
        tag="Lets work together"
        heading="Ready to bring your vision to life? Let's create stunning visuals that captivate, inspire, and deliver results."
        buttonText="contact us"
        buttonHref="/contact-us"
        backgroundImage="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F034782943c0a8b7c7fd2455a1e51d707289a39ec.jpeg%3Fwidth=1280&amp;height=1280?generation=1768843023470915&amp;alt=media"
        backgroundAlt="Silhouette of a filmmaker with a camera on a tripod in a dimly lit alley, bathed in orange light and mist, creating a moody, cinematic atmosphere."
      />

      <ServicesSection services={services} />

      <PricingSection pricingPlans={pricingPlans} />

      <TestimonialsSection testimonials={testimonials} />

      <FAQSection
        faqs={faqItems}
        coverImageUrl="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F2d3a81b8ccba0e26d61088a5aa4e7ee9ba77f6f4.jpeg%3Fscale-down-to=1024&amp;width=1280&amp;height=1280?generation=1768843023272576&amp;alt=media"
        coverImageAlt="Silhouetted band members play instruments in a smoky warehouse, backlit by vibrant orange and teal lights, creating a moody, dramatic ambiance."
      />
    </div>
  );
}
