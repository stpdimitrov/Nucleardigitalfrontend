'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { scrollFadeIn, staggerContainer, staggerItem, viewport } from '../lib/animations';
import type { FAQ } from '@/types';

interface FAQSectionProps {
  faqs: FAQ[];
  coverImageUrl?: string;
  coverImageAlt?: string;
}

export function FAQSection({ faqs, coverImageUrl, coverImageAlt }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <motion.div aria-label="FAQ" className="relative w-full"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={scrollFadeIn}
    >
      <section aria-label="Desktop" className="items-center flex h-min justify-center overflow-clip relative w-full bg-black gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0">
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div aria-label="Grid 6x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[12px_8px] z-[4] shrink-[0]" style={{"gridTemplateColumns":"repeat(6, minmax(50px, 1fr))"}}>
            <div aria-label="Section tag" className="self-start justify-self-start relative w-fit" style={{"gridArea":"auto / span 2"}}>
              <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>FAQ</p>
                </div>
              </div>
            </div>
            <div aria-label="Text" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[8px]" style={{"gridArea":"auto / span 2"}}>
              <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Got Questions?</h2>
              </div>
              <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.7]">
                <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Find clear answers to common questions about  our services, process, and how we bring your  ideas to life.</p>
              </div>
            </div>
            <div aria-label="Button" className="self-end justify-self-end relative w-fit" style={{"gridArea":"auto / span 2"}}>
              <a href="/contact-us" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <p className="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>Contact us</p>
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
          <motion.div
            aria-label="Grid 3x"
            className="grid h-min justify-center relative w-full grid-rows-[repeat(1,min-content)] gap-[20px] shrink-[0]"
            style={{"gridTemplateColumns":"repeat(3, minmax(50px, 1fr))"}}
            variants={staggerContainer}
          >
            {coverImageUrl && (
              <motion.div aria-label="Cover image" className="self-start size-full justify-self-start overflow-clip relative" variants={staggerItem}>
                <div className="absolute left-0 top-0 right-0 bottom-0">
                  <img alt={coverImageAlt || "FAQ cover image"} src={coverImageUrl} className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]" />
                </div>
              </motion.div>
            )}
            <div aria-label="FAQ item" className="self-start justify-self-start relative w-full" style={{"gridArea":coverImageUrl ? "auto / span 2" : "auto / span 3"}}>
              <div aria-label="1" className="items-center flex flex-col h-min justify-start overflow-clip relative w-full gap-[10px]">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    aria-label="FAQ item"
                    className="relative w-full shrink-[0]"
                    variants={staggerItem}
                  >
                    <div
                      aria-label={openIndex === index ? "Open" : "Close"}
                      className="items-start flex flex-col h-min justify-center overflow-clip relative w-full bg-[rgb(36,_36,_36)] gap-[10px] p-5 cursor-pointer"
                      onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    >
                      <div aria-label="Question" className="items-center flex h-min justify-between overflow-clip relative w-full shrink-[0]">
                        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0]">
                          <p className="font-medium text-white text-[20px] leading-[30px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{faq.question}</p>
                        </div>
                        <div aria-label="Icon" role="presentation" className={`aspect-square overflow-hidden relative w-4 shrink-[0] transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                          <img src={openIndex === index ? "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7cc50ab84b3abc05e6ca2ba11d88a374140dc28b.svg?generation=1768843023256201&amp;alt=media" : "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe0a254ded9296449fa5ae364d45ee8eccd31316f.svg?generation=1768843023361863&amp;alt=media"} className="block size-full" />
                        </div>
                      </div>
                      {openIndex === index && (
                        <motion.div
                          className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0] opacity-[0.8]"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 0.8, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>{faq.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
