'use client';

import React from 'react';
import { motion } from 'motion/react';
import { NavbarAnimated } from '../../components/NavbarAnimated';
import { WhyChooseUsSection } from '../../components/WhyChooseUsSection';
import { TestimonialsSection } from '../../components/TestimonialsSection';
import { CTASection } from '../../components/CTASection';
import { Footer } from '../../components/Footer';
import { whyChooseUsItems, testimonials, clientLogos } from '../../services/mock-data';
import { heroAnimation, viewport, scrollFadeIn, staggerContainerFast, staggerItem } from '../../lib/animations';

export default function AboutUsPage() {
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
                  <img alt="A person stands against a vibrant background of orange and yellow wavy patterns, looking contemplative and thoughtful" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb78f23653961282fd6252e62cd8283d6c0057af5.jpeg%3Fwidth=1280&amp;height=1280?generation=1768843022673805&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]" />
                </div>
                <div aria-label="Overlay" className="size-full overflow-clip absolute left-[0%] top-[0%] bg-black z-[1] shrink-[0] opacity-[0.3]"></div>
                <div aria-label="Container" className="items-center flex grow h-min justify-center overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 z-[2] shrink-[0]">
                  <div aria-label="Wrapper" className="items-center flex flex-col grow h-min justify-center overflow-clip relative w-px basis-0 gap-[24px] max-w-[790px] shrink-[0]">
                    <div aria-label="Logo" className="relative shrink-[0]">
                      <a href="/" aria-label="Logo" className="items-center flex size-min justify-center relative text-[rgb(0,_0,_238)] gap-[4px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                        <div aria-label="Icon" className="relative w-[30px] h-[30px] shrink-[0]">
                          <div className="absolute left-0 top-0 right-0 bottom-0">
                            <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fdf1ea35df7df9da91ef7b7004a32fec3b03a527c.svg%3Fwidth=42&amp;height=42?generation=1768843022438331&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_42_/_42]" />
                          </div>
                        </div>
                        <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                          <p className="font-medium uppercase text-white text-[24px] tracking-[-0.72px] leading-[24px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Flixen™</p>
                        </div>
                      </a>
                    </div>
                    <div className="flex flex-col justify-start relative w-full shrink-[0]">
                      <h1 className="font-medium text-center text-white text-[56px] tracking-[-1.68px] leading-[67.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>We're a creative video agency turning ideas into cinematic stories</h1>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.9]">
                      <p className="font-medium text-center text-[rgb(221,_221,_221)] text-[18px] tracking-[-0.36px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Founded with a passion for visual storytelling, Flixen™ has grown into a trusted partner for brands seeking to elevate their message through powerful video content.</p>
                    </div>
                  </div>
                </div>
              </motion.header>

              {/* Mission Section */}
              <motion.section
                aria-label="Our mission"
                className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={scrollFadeIn}
              >
                <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[48px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
                  <div className="flex flex-col justify-start relative w-full gap-[24px] shrink-[0]">
                    <div aria-label="Section tag" className="relative shrink-[0]">
                      <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                        <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                          <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Our mission</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                      <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Creating Impact Through Visual Excellence</h2>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.8]">
                      <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] tracking-[-0.36px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>We believe every brand has a unique story worth telling. Our mission is to transform those stories into compelling visual narratives that inspire action, build connections, and drive meaningful results. We combine creative excellence with strategic thinking to deliver videos that don't just look beautiful—they perform.</p>
                    </div>
                  </div>

                  {/* Client Logos */}
                  <motion.div
                    aria-label="Trusted by"
                    className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[12px] z-[4] shrink-[0]"
                    style={{"gridTemplateColumns":"repeat(2, minmax(50px, 1fr))"}}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                    variants={staggerContainerFast}
                  >
                    {clientLogos.slice(0, 6).map((logo) => (
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

              {/* Why Choose Us Section */}
              <WhyChooseUsSection items={whyChooseUsItems} />

              {/* Testimonials Section */}
              <TestimonialsSection testimonials={testimonials} />

              {/* CTA Section */}
              <CTASection
                tag="Join our clients"
                heading="Ready to create exceptional videos that elevate your brand? Let's collaborate."
                buttonText="Get in touch"
                buttonHref="/contact-us"
                backgroundImage="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F034782943c0a8b7c7fd2455a1e51d707289a39ec.jpeg%3Fwidth=1280&amp;height=1280?generation=1768843023470915&amp;alt=media"
                backgroundAlt="Silhouette of a filmmaker with camera equipment in dramatic lighting"
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
