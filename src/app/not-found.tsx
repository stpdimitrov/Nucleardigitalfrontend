'use client';

import React from 'react';
import { motion } from 'motion/react';
import { NavbarAnimated } from '../components/NavbarAnimated';
import { Footer } from '../components/Footer';
import { heroAnimation } from '../lib/animations';

export default function NotFound() {
  return (
    <div className="text-black text-[16px] leading-[normal]" style={{"fontFamily":"\"Times New Roman\"","width":"1024px","transform":"scale(1)","margin":"auto"}}>
      <div className="bg-black text-[12px]" style={{"fontFamily":"sans-serif"}}>
        <div>
          <div className="items-center flex flex-col h-min justify-start overflow-clip relative bg-black gap-[0px] min-h-[640px]">
            <NavbarAnimated />
            
            <div className="items-center contents h-min justify-start overflow-hidden relative bg-black gap-[0px] min-h-[640px]">
              {/* 404 Section */}
              <motion.div
                aria-label="404"
                className="items-center flex flex-col h-screen justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-6 pl-0"
                initial="hidden"
                animate="visible"
                variants={heroAnimation}
              >
                <div className="absolute left-0 top-0 right-0 bottom-0">
                  <img alt="Moody cinematic scene with dramatic lighting" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F90322362c9ba13d2653aa3ef4d89e79643dc092d.png%3Fwidth=1536&amp;height=1024?generation=1768843022421906&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1536_/_1024]" />
                </div>
                <div aria-label="Overlay" className="size-full overflow-clip absolute left-[0%] top-[0%] bg-black z-[1] shrink-[0] opacity-[0.6]"></div>
                <div aria-label="Container" className="items-center flex grow h-min justify-center overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 z-[2] shrink-[0]">
                  <div aria-label="Wrapper" className="items-center flex flex-col grow h-min justify-center overflow-clip relative w-px basis-0 gap-[32px] max-w-[790px] shrink-[0]">
                    <div className="flex flex-col justify-start relative w-full shrink-[0]">
                      <h1 className="font-medium text-center text-white text-[120px] tracking-[-3.6px] leading-[120px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>404</h1>
                    </div>
                    <div className="flex flex-col justify-start relative w-full shrink-[0]">
                      <h2 className="font-medium text-center text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Page Not Found</h2>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.9]">
                      <p className="font-medium text-center text-[rgb(221,_221,_221)] text-[18px] tracking-[-0.36px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
                    </div>
                    <div aria-label="Button wrapper" className="items-center flex h-min justify-center relative w-full gap-[16px] pt-4 pr-0 pb-0 pl-0 shrink-[0]">
                      <div aria-label="Button" className="relative shrink-[0]">
                        <a href="/" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                            <p className="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>Go home</p>
                          </div>
                          <div aria-label="Icon wrapper" className="items-center flex flex-col justify-center overflow-clip relative w-8 h-8 bg-black gap-[8px] shrink-[0] rounded-[62.5rem]">
                            <div aria-label="Icons" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                              <div aria-label="Icon" className="aspect-square relative w-[15px] bg-white z-[1] shrink-[0]"></div>
                              <div aria-label="Icon" className="aspect-square absolute w-[15px] left-[-20px] top-[47%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div aria-label="Button" className="relative shrink-[0]">
                        <a href="/contact-us" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                            <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>Contact us</p>
                          </div>
                          <div aria-label="Icon wrapper" className="items-center flex flex-col justify-center overflow-clip relative w-8 h-8 bg-white gap-[8px] shrink-[0] rounded-[62.5rem]">
                            <div aria-label="Icons" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0]">
                              <div aria-label="Icon" className="aspect-square relative w-[15px] bg-black z-[1] shrink-[0]"></div>
                              <div aria-label="Icon" className="aspect-square absolute w-[15px] left-[-20px] top-[47%] bg-black translate-y-[-50%] z-[1] shrink-[0]"></div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
