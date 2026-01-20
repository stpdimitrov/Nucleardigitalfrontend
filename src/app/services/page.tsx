'use client';

import React from 'react';
import { motion } from 'motion/react';
import { NavbarAnimated } from '../../components/NavbarAnimated';
import { ServicesSection } from '../../components/ServicesSection';
import { CTASection } from '../../components/CTASection';
import { Footer } from '../../components/Footer';
import { services } from '../../services/mock-data';
import { heroAnimation, viewport, scrollFadeIn } from '../../lib/animations';

export default function ServicesPage() {
  return (
    <div className="text-black text-[16px] leading-[normal]" style={{"fontFamily":"\"Times New Roman\"","width":"1024px","transform":"scale(1)","margin":"auto"}}>
      <div className="bg-black text-[12px]" style={{"fontFamily":"sans-serif"}}>
        <div>
          <div className="items-center flex flex-col h-min justify-start overflow-clip relative bg-black gap-[0px] min-h-[640px]">
            <NavbarAnimated />
            
            <div className="items-center contents h-min justify-start overflow-hidden relative bg-black gap-[0px] min-h-[640px]">
              {/* Hero Section */}
              <motion.header
                aria-label="Hero section"
                className="items-center flex flex-col h-screen justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-6 pl-0"
                initial="hidden"
                animate="visible"
                variants={heroAnimation}
              >
                <div className="absolute left-0 top-0 right-0 bottom-0">
                  <img alt="Film production equipment with dramatic lighting on set, creating a professional cinematic atmosphere" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F941a25305571242b0d4cd29c50b30ff8c1679012.jpeg%3Fscale-down-to=1024&amp;width=1280&amp;height=1280?generation=1768843022793407&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]" />
                </div>
                <div aria-label="Overlay" className="size-full overflow-clip absolute left-[0%] top-[0%] bg-black z-[1] shrink-[0] opacity-[0.4]"></div>
                <div aria-label="Container" className="items-center flex grow h-min justify-center overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 z-[2] shrink-[0]">
                  <div aria-label="Wrapper" className="items-center flex flex-col grow h-min justify-center overflow-clip relative w-px basis-0 gap-[24px] max-w-[790px] shrink-[0]">
                    <div className="flex flex-col justify-start relative w-full shrink-[0]">
                      <h1 className="font-medium text-center text-white text-[56px] tracking-[-1.68px] leading-[67.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Our Services</h1>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.9]">
                      <p className="font-medium text-center text-[rgb(221,_221,_221)] text-[20px] tracking-[-0.4px] leading-[28px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>From concept to creation, we deliver comprehensive video production services tailored to bring your vision to life.</p>
                    </div>
                  </div>
                </div>
              </motion.header>

              {/* Services Section */}
              <ServicesSection services={services} />

              {/* What We Offer Details Section */}
              <motion.section
                aria-label="Service details"
                className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={scrollFadeIn}
              >
                <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
                  <div className="flex flex-col justify-start relative w-full gap-[32px] shrink-[0]">
                    <div aria-label="Section tag" className="relative shrink-[0]">
                      <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                        <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                          <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Why choose our services</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                      <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Excellence in Every Frame</h2>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.8]">
                      <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] tracking-[-0.36px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>We combine creative storytelling with technical expertise to deliver videos that don't just look good—they perform. Every project is crafted with attention to detail, strategic thinking, and a commitment to exceeding expectations.</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* CTA Section */}
              <CTASection
                tag="Ready to start"
                heading="Let's create something extraordinary together. Get in touch to discuss your next video project."
                buttonText="Contact us"
                buttonHref="/contact-us"
                backgroundImage="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F2a4f85714c6a1888a8eba81b5a2e045a7662e6c4.jpeg%3Fscale-down-to=1024&amp;width=1280&amp;height=1280?generation=1768843022718083&amp;alt=media"
                backgroundAlt="Person holding camera with dramatic orange lighting creating professional atmosphere"
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
