'use client';

import React from 'react';
import { motion } from 'motion/react';
import { NavbarAnimated } from '../../components/NavbarAnimated';
import { Footer } from '../../components/Footer';
import { heroAnimation, viewport, scrollFadeIn } from '../../lib/animations';

export default function ContactUsPage() {
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
                  <img alt="Silhouette of a filmmaker with camera on tripod in dimly lit alley with dramatic orange lighting" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F034782943c0a8b7c7fd2455a1e51d707289a39ec.jpeg%3Fwidth=1280&amp;height=1280?generation=1768843023470915&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]" />
                </div>
                <div aria-label="Overlay" className="size-full overflow-clip absolute left-[0%] top-[0%] bg-black z-[1] shrink-[0] opacity-[0.3]"></div>
                <div aria-label="Container" className="items-center flex grow h-min justify-center overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 z-[2] shrink-[0]">
                  <div aria-label="Wrapper" className="items-center flex flex-col grow h-min justify-center overflow-clip relative w-px basis-0 gap-[24px] max-w-[790px] shrink-[0]">
                    <div aria-label="Section tag" className="relative shrink-[0]">
                      <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                        <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                          <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Get in touch</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start relative w-full shrink-[0]">
                      <h1 className="font-medium text-center text-white text-[56px] tracking-[-1.68px] leading-[67.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Let's Create Something Extraordinary</h1>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.9]">
                      <p className="font-medium text-center text-[rgb(221,_221,_221)] text-[20px] tracking-[-0.4px] leading-[28px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Ready to bring your vision to life? Reach out to discuss your project and see how we can help you achieve your goals.</p>
                    </div>
                  </div>
                </div>
              </motion.header>

              {/* Contact Form Section */}
              <motion.section
                aria-label="Contact form"
                className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={scrollFadeIn}
              >
                <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[800px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
                  <div className="flex flex-col justify-start relative w-full gap-[32px] shrink-[0]">
                    <div className="flex flex-col justify-start relative w-full gap-[16px] shrink-[0]">
                      <div aria-label="Section tag" className="relative shrink-[0]">
                        <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                          <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                            <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Contact Information</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                        <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>How to Reach Us</h2>
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col justify-start relative w-full gap-[24px] shrink-[0]">
                      <div className="flex flex-col justify-start relative w-full bg-[rgb(36,_36,_36)] gap-[16px] p-6 shrink-[0]">
                        <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                          <p className="font-medium text-left uppercase text-white text-[14px] tracking-[-0.14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Email</p>
                        </div>
                        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.9]">
                          <a href="mailto:hello@flixen.studio" className="font-medium text-[rgb(253,_197,_0)] text-[24px] tracking-[-0.48px] leading-[33.6px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif"}}>hello@flixen.studio</a>
                        </div>
                      </div>

                      <div className="flex flex-col justify-start relative w-full bg-[rgb(36,_36,_36)] gap-[16px] p-6 shrink-[0]">
                        <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                          <p className="font-medium text-left uppercase text-white text-[14px] tracking-[-0.14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Phone</p>
                        </div>
                        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.9]">
                          <a href="tel:+1234567890" className="font-medium text-[rgb(253,_197,_0)] text-[24px] tracking-[-0.48px] leading-[33.6px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif"}}>+1 (234) 567-890</a>
                        </div>
                      </div>

                      <div className="flex flex-col justify-start relative w-full bg-[rgb(36,_36,_36)] gap-[16px] p-6 shrink-[0]">
                        <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                          <p className="font-medium text-left uppercase text-white text-[14px] tracking-[-0.14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Office Hours</p>
                        </div>
                        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.8]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] tracking-[-0.36px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Monday – Friday: 9:00 AM – 6:00 PM<br />Saturday – Sunday: Closed</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Response Note */}
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.7]">
                      <p className="font-medium text-center text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>We typically respond within 24 hours during business days. For urgent inquiries, please call us directly.</p>
                    </div>
                  </div>
                </div>
              </motion.section>
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
