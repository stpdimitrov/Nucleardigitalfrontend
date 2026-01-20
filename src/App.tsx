'use client';

import React from 'react';
import { motion } from "motion/react";
import { NavbarAnimated } from './components/NavbarAnimated';
import { ProjectCard } from './components/ProjectCard';
import { ServiceCard } from './components/ServiceCard';
import { PricingCard } from './components/PricingCard';
import { Footer } from './components/Footer';
import { projects, clientLogos, services, pricingPlans, whyChooseUsItems, processSteps, faqItems, testimonials } from './services/mock-data';
import { 
  heroAnimation, 
  staggerContainer, 
  staggerContainerFast, 
  staggerItem, 
  scrollFadeIn, 
  fadeInUp,
  viewport 
} from './lib/animations';


export default function App() {
  return ( <div className="text-black text-[16px] leading-[normal]" style={{"fontFamily":"\"Times New Roman\"","width":"1024px","transform":"scale(1)","margin":"auto"}}>
  <div className="bg-black text-[12px]" style={{"fontFamily":"sans-serif"}}>
    <div>
      <div className="items-center flex flex-col h-min justify-start overflow-clip relative bg-black gap-[0px] min-h-[640px]">
        <div className="fixed w-full left-[50%] top-0 translate-x-[-50%] z-[10] shrink-[0]" style={{"order":"-1000"}}>
          <nav aria-label="Navbar" className="items-center flex h-min justify-center overflow-clip relative w-full backdrop-blur-[20px] gap-[8px] pt-5 pr-0 pb-5 pl-0 translate-y-[-20px]">
            <div aria-label="Container" className="items-center flex grow h-min justify-between overflow-clip relative w-px basis-0 max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
              <div aria-label="Logo" className="relative shrink-[0]">
                <a href="https://primary-words-404174.framer.app/" aria-label="Logo" className="items-center flex size-min justify-center relative text-[rgb(0,_0,_238)] gap-[4px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
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
              <div aria-label="Menu button" className="relative shrink-[0]">
                <div aria-label="Close" className="items-center flex size-min justify-end relative gap-[4px]">
                  <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <p className="font-medium uppercase text-white text-[16px] tracking-[-0.48px] leading-[19.2px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Menu</p>
                  </div>
                  <div aria-label="Icon" className="aspect-square relative w-6 bg-white shrink-[0]"></div>
                </div>
              </div>
            </div>
          </nav>
        </div>
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
                    <a href="https://primary-words-404174.framer.app/contact-us" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
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
                </motion.div>
              </div>
              <motion.div aria-label="Grid 4x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[12px] z-[4] shrink-[0]" style={{"gridTemplateColumns":"repeat(2, minmax(50px, 1fr))"}} initial="hidden" whileInView="visible" viewport={viewport} variants={staggerContainerFast}>
                <motion.div aria-label="Client logo" className="self-start justify-self-start relative w-full" variants={staggerItem}>
                  <div aria-label="Client logo" className="items-center flex justify-center overflow-clip relative w-full h-[120px] bg-[rgb(36,_36,_36)] gap-[8px]">
                    <div aria-label="Logo" className="overflow-clip relative w-[140px] h-[52px] shrink-[0]">
                      <div className="absolute left-0 top-0 right-0 bottom-0">
                        <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Faa475ae7b3ce6f0265af828c69123f4ee331a8b7.svg%3Fwidth=103&amp;height=27?generation=1768843022445777&amp;alt=media" className="block size-full object-contain overflow-clip aspect-[auto_103_/_27]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div aria-label="Client logo" className="self-start justify-self-start relative w-full" variants={staggerItem}>
                  <div aria-label="Client logo" className="items-center flex justify-center overflow-clip relative w-full h-[120px] bg-[rgb(36,_36,_36)] gap-[8px]">
                    <div aria-label="Logo" className="overflow-clip relative w-[140px] h-[52px] shrink-[0]">
                      <div className="absolute left-0 top-0 right-0 bottom-0">
                        <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F54d554ef76931a754367f50ad0cbfb64058db66c.svg%3Fwidth=245&amp;height=41?generation=1768843022436901&amp;alt=media" className="block size-full object-contain overflow-clip aspect-[auto_245_/_41]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div aria-label="Client logo" className="self-start justify-self-start relative w-full" variants={staggerItem}>
                  <div aria-label="Client logo" className="items-center flex justify-center overflow-clip relative w-full h-[120px] bg-[rgb(36,_36,_36)] gap-[8px]">
                    <div aria-label="Logo" className="overflow-clip relative w-[140px] h-[52px] shrink-[0]">
                      <div className="absolute left-0 top-0 right-0 bottom-0">
                        <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F8bca30d4e162466aac4650551d3c9c51cafba5f8.svg%3Fwidth=223&amp;height=40?generation=1768843022403265&amp;alt=media" className="block size-full object-contain overflow-clip aspect-[auto_223_/_40]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div aria-label="Client logo" className="self-start justify-self-start relative w-full" variants={staggerItem}>
                  <div aria-label="Client logo" className="items-center flex justify-center overflow-clip relative w-full h-[120px] bg-[rgb(36,_36,_36)] gap-[8px]">
                    <div aria-label="Logo" className="overflow-clip relative w-[140px] h-[52px] shrink-[0]">
                      <div className="absolute left-0 top-0 right-0 bottom-0">
                        <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fd7824d1c7808ec9a1b3cc3150b9d773d09d69996.svg%3Fwidth=222&amp;height=40?generation=1768843022421450&amp;alt=media" className="block size-full object-contain overflow-clip aspect-[auto_222_/_40]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div aria-label="Client logo" className="self-start justify-self-start relative w-full" variants={staggerItem}>
                  <div aria-label="Client logo" className="items-center flex justify-center overflow-clip relative w-full h-[120px] bg-[rgb(36,_36,_36)] gap-[8px]">
                    <div aria-label="Logo" className="overflow-clip relative w-[140px] h-[52px] shrink-[0]">
                      <div className="absolute left-0 top-0 right-0 bottom-0">
                        <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F45abf7d594d7e70a510b6f4e4e7a468708e081ff.svg%3Fwidth=216&amp;height=40?generation=1768843022430922&amp;alt=media" className="block size-full object-contain overflow-clip aspect-[auto_216_/_40]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div aria-label="Client logo" className="self-start justify-self-start relative w-full" variants={staggerItem}>
                  <div aria-label="Client logo" className="items-center flex justify-center overflow-clip relative w-full h-[120px] bg-[rgb(36,_36,_36)] gap-[8px]">
                    <div aria-label="Logo" className="overflow-clip relative w-[140px] h-[52px] shrink-[0]">
                      <div className="absolute left-0 top-0 right-0 bottom-0">
                        <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F852ff016a44f4eedb1c0292e6cd078fb30b02432.svg%3Fwidth=214&amp;height=40?generation=1768843022414691&amp;alt=media" className="block size-full object-contain overflow-clip aspect-[auto_214_/_40]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div aria-label="Client logo" className="self-start justify-self-start relative w-full" variants={staggerItem}>
                  <div aria-label="Client logo" className="items-center flex justify-center overflow-clip relative w-full h-[120px] bg-[rgb(36,_36,_36)] gap-[8px]">
                    <div aria-label="Logo" className="overflow-clip relative w-[140px] h-[52px] shrink-[0]">
                      <div className="absolute left-0 top-0 right-0 bottom-0">
                        <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa2816dd6a0ede7ea3a884b8992f556a867a53348.svg%3Fwidth=221&amp;height=40?generation=1768843022614308&amp;alt=media" className="block size-full object-contain overflow-clip aspect-[auto_221_/_40]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div className="self-start justify-self-start relative w-full h-[120px]" variants={staggerItem}>
                  <div aria-label="Client logo" className="items-center flex size-full justify-center overflow-clip relative bg-[rgb(36,_36,_36)] gap-[8px]">
                    <div aria-label="Logo" className="overflow-clip relative w-[140px] h-[52px] shrink-[0]">
                      <div className="absolute left-0 top-0 right-0 bottom-0">
                        <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F475eb9652537fe79cd34840d13a78e9bd421f411.svg%3Fwidth=207&amp;height=40?generation=1768843022621850&amp;alt=media" className="block size-full object-contain overflow-clip aspect-[auto_207_/_40]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
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
                  <a href="https://primary-words-404174.framer.app/projects" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>All projects</p>
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
              <div aria-label="Projects wrapper" className="grid h-min justify-center relative w-full gap-[20px] shrink-[0]" style={{"gridTemplateColumns":"repeat(4, minmax(50px, 1fr))"}}>
                {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
                <div className="absolute left-[50%] bottom-[-50px]"></div>
              </div>
            </div>
          </section>
          <section aria-label="About us" className="items-center flex h-screen justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0">
            <div className="absolute left-0 top-0 right-0 bottom-0">
              <img alt="A person stands against a vibrant background of orange and yellow wavy patterns. They are wearing a dark coat, looking contemplative and thoughtful." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb78f23653961282fd6252e62cd8283d6c0057af5.jpeg%3Fwidth=1280&amp;height=1280?generation=1768843022673805&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]" />
            </div>
            <div aria-label="Overlay" className="size-full overflow-clip absolute left-[0%] top-[0%] bg-black z-[1] shrink-[0] opacity-[0.3]"></div>
            <div aria-label="Container" className="items-center flex grow h-min justify-center overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
              <motion.div 
                aria-label="Wrapper" 
                className="items-center flex flex-col grow h-min justify-center overflow-clip relative w-px basis-0 gap-[24px] max-w-[790px] z-[1] shrink-[0]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div aria-label="Logo" className="relative shrink-[0]">
                  <a href="https://primary-words-404174.framer.app/" aria-label="Logo" className="items-center flex size-min justify-center relative text-[rgb(0,_0,_238)] gap-[4px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
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
                  <h2 className="font-medium text-center text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>We’re a creative video agency turning ideas into cinematic stories that inspire, engage, &amp; elevate brands.</h2>
                </div>
                <div aria-label="Button wrapper" className="items-center flex h-min justify-center relative w-full gap-[8px] pt-2 pr-0 pb-0 pl-0 shrink-[0]">
                  <div aria-label="Button" className="relative shrink-[0]">
                    <a href="https://primary-words-404174.framer.app/about-us" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                      <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                        <p className="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>About us</p>
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
              </motion.div>
            </div>
          </section>
          <section aria-label="Services" className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0">
            <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
              <div aria-label="Grid 6x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[12px_8px] z-[4] shrink-[0]" style={{"gridTemplateColumns":"repeat(2, minmax(50px, 1fr))"}}>
                <div aria-label="Section tag" className="self-start justify-self-start relative w-fit" style={{"gridArea":"auto / 1 / auto / -1"}}>
                  <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                    <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Our services</p>
                    </div>
                  </div>
                </div>
                <div aria-label="Text wrapper" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[8px]">
                  <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                    <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>What We Offer</h2>
                  </div>
                  <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.7]">
                    <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>We create impactful videos that inspire audiences, tell stories, and elevate  your brand.</p>
                  </div>
                </div>
                <div aria-label="Button" className="self-end justify-self-end relative w-fit">
                  <a href="https://primary-words-404174.framer.app/contact-us" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
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
              <div aria-label="Services wrapper" className="items-center flex flex-col h-min justify-center relative w-full gap-[30px] shrink-[0]">
                <motion.div 
                  aria-label="Service card" 
                  className="relative w-full z-[4] shrink-[0]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div aria-label="1-desktop" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[8px]" style={{"gridTemplateColumns":"repeat(2, minmax(20px, 1fr))"}}>
                    <div className="self-start justify-self-start relative w-full h-[500px]">
                      <div className="absolute left-0 top-0 right-0 bottom-0">
                        <img alt="A person holding a camera is silhouetted against vivid orange stage lights. The scene conveys focus and creativity with a dramatic, moody atmosphere." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F2a4f85714c6a1888a8eba81b5a2e045a7662e6c4.jpeg%3Fscale-down-to=1024&amp;width=1280&amp;height=1280?generation=1768843022718083&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]" />
                      </div>
                    </div>
                    <div aria-label="Wrapper" className="items-start self-start flex flex-col size-full justify-between justify-self-start overflow-clip relative p-4">
                      <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative w-full gap-[10px] shrink-[0]">
                        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                          <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Video Production</h4>
                        </div>
                        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0] opacity-[0.6]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>We handle every stage from concept to filming, creating  visuals that capture emotion and inspire audiences.</p>
                        </div>
                      </div>
                      <div aria-label="Bottom wrapper" className="items-center flex flex-wrap h-min justify-start relative w-full gap-[8px] shrink-[0]">
                        <div aria-label="Service features" className="relative shrink-[0]">
                          <div aria-label="Service category tag" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] gap-[6px] pt-2 pr-[14px] pb-2 pl-[14px]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.8]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Commercials</p>
                            </div>
                          </div>
                        </div>
                        <div aria-label="Service features" className="relative shrink-[0]">
                          <div aria-label="Service category tag" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] gap-[6px] pt-2 pr-[14px] pb-2 pl-[14px]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.8]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Brand Films</p>
                            </div>
                          </div>
                        </div>
                        <div aria-label="Service features" className="relative shrink-[0]">
                          <div aria-label="Service category tag" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] gap-[6px] pt-2 pr-[14px] pb-2 pl-[14px]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.8]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Product Videos</p>
                            </div>
                          </div>
                        </div>
                        <div aria-label="Service features" className="relative shrink-[0]">
                          <div aria-label="Service category tag" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] gap-[6px] pt-2 pr-[14px] pb-2 pl-[14px]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.8]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Corporate Shoots</p>
                            </div>
                          </div>
                        </div>
                        <div aria-label="Service features" className="relative shrink-[0]">
                          <div aria-label="Service category tag" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] gap-[6px] pt-2 pr-[14px] pb-2 pl-[14px]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.8]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Event Coverage</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  aria-label="Service card" 
                  className="relative w-full z-[4] shrink-[0]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                  <div aria-label="2-desktop" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[8px]" style={{"gridTemplateColumns":"repeat(2, minmax(20px, 1fr))"}}>
                    <div className="self-start justify-self-start relative w-full h-[500px]" style={{"order":"1"}}>
                      <div className="absolute left-0 top-0 right-0 bottom-0">
                        <img alt="Film clapperboard in focus with glowing orange background, misty street, and silhouettes of people and lights; conveys mystery and anticipation." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F941a25305571242b0d4cd29c50b30ff8c1679012.jpeg%3Fscale-down-to=1024&amp;width=1280&amp;height=1280?generation=1768843022793407&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]" />
                      </div>
                    </div>
                    <div aria-label="Wrapper" className="items-start self-start flex flex-col size-full justify-between justify-self-start overflow-clip relative p-4">
                      <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative w-full gap-[10px] shrink-[0]">
                        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                          <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Creative Direction</h4>
                        </div>
                        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0] opacity-[0.6]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Our creative team transforms ideas into captivating visuals  through storytelling, strategy, and detailed direction.</p>
                        </div>
                      </div>
                      <div aria-label="Bottom wrapper" className="items-center flex flex-wrap h-min justify-start relative w-full gap-[8px] shrink-[0]">
                        <div aria-label="Service features" className="relative shrink-[0]">
                          <div aria-label="Service category tag" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] gap-[6px] pt-2 pr-[14px] pb-2 pl-[14px]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.8]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Concept Development</p>
                            </div>
                          </div>
                        </div>
                        <div aria-label="Service features" className="relative shrink-[0]">
                          <div aria-label="Service category tag" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] gap-[6px] pt-2 pr-[14px] pb-2 pl-[14px]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.8]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Scriptwriting</p>
                            </div>
                          </div>
                        </div>
                        <div aria-label="Service features" className="relative shrink-[0]">
                          <div aria-label="Service category tag" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] gap-[6px] pt-2 pr-[14px] pb-2 pl-[14px]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.8]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Storyboarding</p>
                            </div>
                          </div>
                        </div>
                        <div aria-label="Service features" className="relative shrink-[0]">
                          <div aria-label="Service category tag" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] gap-[6px] pt-2 pr-[14px] pb-2 pl-[14px]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.8]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Art Direction</p>
                            </div>
                          </div>
                        </div>
                        <div aria-label="Service features" className="relative shrink-[0]">
                          <div aria-label="Service category tag" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] gap-[6px] pt-2 pr-[14px] pb-2 pl-[14px]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.8]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Campaign Planning</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="relative w-full z-[4] shrink-[0]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                >
                  <div aria-label="1-desktop" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[8px]" style={{"gridTemplateColumns":"repeat(2, minmax(20px, 1fr))"}}>
                    <div className="self-start justify-self-start relative w-full h-[500px]">
                      <div className="absolute left-0 top-0 right-0 bottom-0">
                        <img alt="A film director sits in a chair facing a bustling, warmly lit night market scene. A camera setup is nearby, capturing the energetic atmosphere." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F2e73a2e347fdfc2dead945b6b6ad8ade80d0ba46.jpeg%3Fscale-down-to=1024&amp;width=1280&amp;height=1280?generation=1768843022784762&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]" />
                      </div>
                    </div>
                    <div aria-label="Wrapper" className="items-start self-start flex flex-col size-full justify-between justify-self-start overflow-clip relative p-4">
                      <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative w-full gap-[10px] shrink-[0]">
                        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                          <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Post-Production &amp; Editing</h4>
                        </div>
                        <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0] opacity-[0.6]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>We refine your footage with expert editing, sound design, and  color grading for cinematic perfection.</p>
                        </div>
                      </div>
                      <div aria-label="Bottom wrapper" className="items-center flex flex-wrap h-min justify-start relative w-full gap-[8px] shrink-[0]">
                        <div aria-label="Service features" className="relative shrink-[0]">
                          <div aria-label="Service category tag" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] gap-[6px] pt-2 pr-[14px] pb-2 pl-[14px]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.8]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Video Editing</p>
                            </div>
                          </div>
                        </div>
                        <div aria-label="Service features" className="relative shrink-[0]">
                          <div aria-label="Service category tag" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] gap-[6px] pt-2 pr-[14px] pb-2 pl-[14px]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.8]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Color Grading</p>
                            </div>
                          </div>
                        </div>
                        <div aria-label="Service features" className="relative shrink-[0]">
                          <div aria-label="Service category tag" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] gap-[6px] pt-2 pr-[14px] pb-2 pl-[14px]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.8]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Motion Graphics</p>
                            </div>
                          </div>
                        </div>
                        <div aria-label="Service features" className="relative shrink-[0]">
                          <div aria-label="Service category tag" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] gap-[6px] pt-2 pr-[14px] pb-2 pl-[14px]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.8]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Sound Design</p>
                            </div>
                          </div>
                        </div>
                        <div aria-label="Service features" className="relative shrink-[0]">
                          <div aria-label="Service category tag" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(36,_36,_36)] gap-[6px] pt-2 pr-[14px] pb-2 pl-[14px]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.8]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Visual Effects</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          <section aria-label="Why choose us" className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0">
            <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
              <div aria-label="Grid 6x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[12px_8px] z-[4] shrink-[0]" style={{"gridTemplateColumns":"repeat(2, minmax(50px, 1fr))"}}>
                <div aria-label="Section tag" className="self-start justify-self-start relative w-fit" style={{"gridArea":"auto / span 2"}}>
                  <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                    <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>why choose us</p>
                    </div>
                  </div>
                </div>
                <div aria-label="Text wrapper" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[8px]">
                  <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                    <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Why work with us</h2>
                  </div>
                  <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.7]">
                    <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>We combine creativity, strategy, and expertise to deliver videos that truly  inspire audiences.</p>
                  </div>
                </div>
                <div aria-label="Button" className="self-end justify-self-end relative w-fit">
                  <a href="https://primary-words-404174.framer.app/contact-us" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
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
              <div aria-label="Grid 6x" className="grid h-min justify-center relative w-full grid-rows-[repeat(1,min-content)] gap-[16px] shrink-[0]" style={{"gridTemplateColumns":"repeat(4, minmax(50px, 1fr))"}}>
                <div aria-label="Grid 3x" className="self-start grid h-min justify-center justify-self-start overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[16px]" style={{"gridTemplateColumns":"repeat(3, minmax(50px, 1fr))","gridArea":"auto / span 4"}}>
                  <motion.div 
                    aria-label="Logo card" 
                    className="items-center self-start flex justify-center justify-self-start overflow-clip relative w-full h-[350px] gap-[8px] p-[22px]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="absolute left-0 top-0 right-0 bottom-0">
                      <img alt="A person in a red turtleneck and round red sunglasses stands against a matching red background. The mood is bold and stylish, with vibrant red tones." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F64a3270e10de32f130e42361b20a73d502badbb2.jpeg%3Fscale-down-to=512&amp;width=1280&amp;height=1280?generation=1768843022915309&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]" />
                    </div>
                    <div aria-label="Logo" className="relative shrink-[0]">
                      <a href="https://primary-words-404174.framer.app/" aria-label="Logo" className="items-center flex size-min justify-center relative text-[rgb(0,_0,_238)] gap-[4px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
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
                  </motion.div>
                  <motion.div 
                    aria-label="Time card" 
                    className="items-center self-start flex flex-col justify-between justify-self-start overflow-clip relative w-full h-[350px] bg-[rgb(36,_36,_36)] p-6" 
                    style={{"gridArea":"auto / span 2"}}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  >
                    <div className="flex flex-col justify-start relative w-full shrink-[0]">
                      <h5 className="font-medium text-center text-white text-[30px] tracking-[-0.6px] leading-[31.5px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Fast Turnaround &amp; On-Time Delivery</h5>
                    </div>
                    <div aria-label="Clock" className="aspect-square absolute w-[400px] left-[50%] bottom-[-190px] translate-x-[-50%] z-[1] shrink-[0]">
                      <div className="items-center flex justify-center relative w-[400px] h-[400px] bg-[rgb(74,_74,_74)] border-white/30 border-[2px] rounded-[50%]">
                        <div className="absolute w-[3px] h-[35%] left-[50%] top-[50%] origin-[50%_100%] bg-[rgb(237,_237,_237)] translate-x-[-50%] translate-y-[-100%] rotate-[8.41667deg] z-[8] rounded-xs"></div>
                        <div className="absolute w-[2px] h-[40%] left-[50%] top-[50%] origin-[50%_100%] bg-[rgb(138,_138,_138)] translate-x-[-50%] translate-y-[-100%] rotate-101 z-[8] rounded-xs"></div>
                        <div className="absolute w-px h-[45%] left-[50%] top-[50%] origin-[50%_100%] bg-[rgb(255,_0,_0)] translate-x-[-50%] translate-y-[-100%] rotate-300 z-[8] rounded-xs"></div>
                        <div className="pointer-events-none absolute w-2 h-[26.6667px] left-[calc(50%+1.01534e-14px)] top-[calc(50%-165.818px)] bg-[rgb(138,_138,_138)] text-[rgb(138,_138,_138)] translate-x-[-50%] translate-y-[-50%] z-[1] rounded-sm" style={{"textDecoration":"rgb(138, 138, 138)"}}></div>
                        <div className="pointer-events-none absolute w-2 h-[26.6667px] left-[calc(50%+82.9091px)] top-[calc(50%-143.603px)] bg-[rgb(138,_138,_138)] text-[rgb(138,_138,_138)] translate-x-[-50%] translate-y-[-50%] rotate-30 z-[1] rounded-sm" style={{"textDecoration":"rgb(138, 138, 138)"}}></div>
                        <div className="pointer-events-none absolute w-2 h-[26.6667px] left-[calc(50%+143.603px)] top-[calc(50%-82.9091px)] bg-[rgb(138,_138,_138)] text-[rgb(138,_138,_138)] translate-x-[-50%] translate-y-[-50%] rotate-60 z-[1] rounded-sm" style={{"textDecoration":"rgb(138, 138, 138)"}}></div>
                        <div className="pointer-events-none absolute w-2 h-[26.6667px] left-[calc(50%+165.818px)] top-[50%] bg-[rgb(138,_138,_138)] text-[rgb(138,_138,_138)] translate-x-[-50%] translate-y-[-50%] rotate-90 z-[1] rounded-sm" style={{"textDecoration":"rgb(138, 138, 138)"}}></div>
                        <div className="pointer-events-none absolute w-2 h-[26.6667px] left-[calc(50%+143.603px)] top-[calc(50%+82.9091px)] bg-[rgb(138,_138,_138)] text-[rgb(138,_138,_138)] translate-x-[-50%] translate-y-[-50%] rotate-120 z-[1] rounded-sm" style={{"textDecoration":"rgb(138, 138, 138)"}}></div>
                        <div className="pointer-events-none absolute w-2 h-[26.6667px] left-[calc(50%+82.9091px)] top-[calc(50%+143.603px)] bg-[rgb(138,_138,_138)] text-[rgb(138,_138,_138)] translate-x-[-50%] translate-y-[-50%] rotate-150 z-[1] rounded-sm" style={{"textDecoration":"rgb(138, 138, 138)"}}></div>
                        <div className="pointer-events-none absolute w-2 h-[26.6667px] left-[calc(50%+1.01534e-14px)] top-[calc(50%+165.818px)] bg-[rgb(138,_138,_138)] text-[rgb(138,_138,_138)] translate-x-[-50%] translate-y-[-50%] rotate-180 z-[1] rounded-sm" style={{"textDecoration":"rgb(138, 138, 138)"}}></div>
                        <div className="pointer-events-none absolute w-2 h-[26.6667px] left-[calc(50%-82.9091px)] top-[calc(50%+143.603px)] bg-[rgb(138,_138,_138)] text-[rgb(138,_138,_138)] translate-x-[-50%] translate-y-[-50%] rotate-210 z-[1] rounded-sm" style={{"textDecoration":"rgb(138, 138, 138)"}}></div>
                        <div className="pointer-events-none absolute w-2 h-[26.6667px] left-[calc(50%-143.603px)] top-[calc(50%+82.9091px)] bg-[rgb(138,_138,_138)] text-[rgb(138,_138,_138)] translate-x-[-50%] translate-y-[-50%] rotate-240 z-[1] rounded-sm" style={{"textDecoration":"rgb(138, 138, 138)"}}></div>
                        <div className="pointer-events-none absolute w-2 h-[26.6667px] left-[calc(50%-165.818px)] top-[calc(50%+2.03069e-14px)] bg-[rgb(138,_138,_138)] text-[rgb(138,_138,_138)] translate-x-[-50%] translate-y-[-50%] rotate-270 z-[1] rounded-sm" style={{"textDecoration":"rgb(138, 138, 138)"}}></div>
                        <div className="pointer-events-none absolute w-2 h-[26.6667px] left-[calc(50%-143.603px)] top-[calc(50%-82.9091px)] bg-[rgb(138,_138,_138)] text-[rgb(138,_138,_138)] translate-x-[-50%] translate-y-[-50%] rotate-300 z-[1] rounded-sm" style={{"textDecoration":"rgb(138, 138, 138)"}}></div>
                        <div className="pointer-events-none absolute w-2 h-[26.6667px] left-[calc(50%-82.9091px)] top-[calc(50%-143.603px)] bg-[rgb(138,_138,_138)] text-[rgb(138,_138,_138)] translate-x-[-50%] translate-y-[-50%] rotate-330 z-[1] rounded-sm" style={{"textDecoration":"rgb(138, 138, 138)"}}></div>
                        <div className="absolute w-[6px] h-[6px] left-[50%] top-[50%] bg-[rgb(138,_138,_138)] translate-x-[-50%] translate-y-[-50%] z-[10] rounded-[50%]"></div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div 
                    aria-label="Card" 
                    className="items-end self-start flex justify-center justify-self-start overflow-clip relative w-full h-[350px] gap-[8px] p-[22px]" 
                    style={{"gridArea":"auto / span 2"}}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  >
                    <div className="absolute left-0 top-0 right-0 bottom-0">
                      <img alt="A black Leica camera with a textured body is dramatically lit in red, reflecting on a glossy surface. The red background adds a bold, intense mood." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F6a74218317bab3b9d86226f78c9ba136e7e3295e.jpeg%3Fscale-down-to=1024&amp;width=1280&amp;height=1152?generation=1768843022845456&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1152]" />
                    </div>
                    <div className="flex flex-col grow justify-start relative w-px basis-0 shrink-[0]">
                      <h5 className="font-medium text-white text-[30px] tracking-[-0.6px] leading-[31.5px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Shot with the &nbsp; best camera gear</h5>
                    </div>
                  </motion.div>
                  <motion.div 
                    aria-label="24/7 support" 
                    className="self-start justify-self-start relative w-full h-[349px]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  >
                    <div aria-label="Support card" className="items-start flex flex-col size-full justify-between overflow-clip relative bg-[rgb(36,_36,_36)] p-[14px]">
                      <div aria-label="BG Blur" className="overflow-hidden absolute w-full h-[100px] left-0 bottom-0 backdrop-blur-[20px] z-[3] shrink-[0]"></div>
                      <div aria-label="Profile image" className="overflow-clip absolute h-[91%] left-0 right-0 bottom-0 z-[2] shrink-[0]">
                        <div className="absolute left-0 top-0 right-0 bottom-0">
                          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fffc55ccfed2fddbf3312b5052ae7855ffa1394c1.png%3Fwidth=432&amp;height=577?generation=1768843022847170&amp;alt=media" className="block size-full object-contain object-bottom overflow-clip aspect-[auto_432_/_577]" />
                        </div>
                      </div>
                      <div aria-label="Ticker" className="absolute h-[142px] left-[-24px] top-[calc(49.8567%-71px)] right-[-24px] z-[1] shrink-[0]">
                        <section className="items-center flex size-full justify-items-center max-h-full max-w-full overflow-hidden p-[10px]">
                          <ul className="items-center flex size-full justify-items-center max-h-full max-w-full relative gap-[10px]">
                            <li className="list-none text-left">
                              <div aria-label="Text" className="items-center flex size-min justify-center overflow-clip relative text-left gap-[8px]">
                                <div className="flex flex-col justify-start overflow-hidden relative text-left whitespace-pre w-[278px] z-[0] shrink-[0] opacity-[0.4]">
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7a37438762ee40207857331dcb3a463caadefd53.svg?generation=1768843022884556&amp;alt=media" className="flex size-full" />
                                  <div className="flex flex-col justify-start overflow-hidden absolute text-left w-[278px] left-0 top-0 right-0 bottom-0 origin-[0px_0px] z-[0] shrink-[0] opacity-[0.4]">
                                    <p className="font-medium text-left text-white text-[117.355px] tracking-[11.7355px] leading-[140.826px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>24/7</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="list-none text-left">
                              <div aria-label="Text" className="items-center flex size-min justify-center overflow-clip relative text-left gap-[8px]">
                                <div className="flex flex-col justify-start overflow-hidden relative text-left whitespace-pre w-[278px] z-[0] shrink-[0] opacity-[0.4]">
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7a37438762ee40207857331dcb3a463caadefd53.svg?generation=1768843022884556&amp;alt=media" className="flex size-full" />
                                  <div className="flex flex-col justify-start overflow-hidden absolute text-left w-[278px] left-0 top-0 right-0 bottom-0 origin-[0px_0px] z-[0] shrink-[0] opacity-[0.4]">
                                    <p className="font-medium text-left text-white text-[117.355px] tracking-[11.7355px] leading-[140.826px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>24/7</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="list-none text-left">
                              <div aria-label="Text" className="items-center flex size-min justify-center overflow-clip relative text-left gap-[8px]">
                                <div className="flex flex-col justify-start overflow-hidden relative text-left whitespace-pre w-[278px] z-[0] shrink-[0] opacity-[0.4]">
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7a37438762ee40207857331dcb3a463caadefd53.svg?generation=1768843022884556&amp;alt=media" className="flex size-full" />
                                  <div className="flex flex-col justify-start overflow-hidden absolute text-left w-[278px] left-0 top-0 right-0 bottom-0 origin-[0px_0px] z-[0] shrink-[0] opacity-[0.4]">
                                    <p className="font-medium text-left text-white text-[117.355px] tracking-[11.7355px] leading-[140.826px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}></p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="list-none text-left">
                              <div aria-label="Text" className="items-center flex size-min justify-center overflow-clip relative text-left gap-[8px]">
                                <div className="flex flex-col justify-start overflow-hidden relative text-left whitespace-pre w-[278px] z-[0] shrink-[0] opacity-[0.4]">
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7a37438762ee40207857331dcb3a463caadefd53.svg?generation=1768843022884556&amp;alt=media" className="flex size-full" />
                                  <div className="flex flex-col justify-start overflow-hidden absolute text-left w-[278px] left-0 top-0 right-0 bottom-0 origin-[0px_0px] z-[0] shrink-[0] opacity-[0.4]">
                                    <p className="font-medium text-left text-white text-[117.355px] tracking-[11.7355px] leading-[140.826px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}></p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="list-none text-left">
                              <div aria-label="Text" className="items-center flex size-min justify-center overflow-clip relative text-left gap-[8px]">
                                <div className="flex flex-col justify-start overflow-hidden relative text-left whitespace-pre w-[278px] z-[0] shrink-[0] opacity-[0.4]">
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7a37438762ee40207857331dcb3a463caadefd53.svg?generation=1768843022884556&amp;alt=media" className="flex size-full" />
                                  <div className="flex flex-col justify-start overflow-hidden absolute text-left w-[278px] left-0 top-0 right-0 bottom-0 origin-[0px_0px] z-[0] shrink-[0] opacity-[0.4]">
                                    <p className="font-medium text-left text-white text-[117.355px] tracking-[11.7355px] leading-[140.826px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}></p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </section>
                      </div>
                      <div aria-label="Top wrapper" className="items-end flex h-min justify-end relative w-full gap-[8px] shrink-[0]">
                        <div aria-label="Status" className="items-center flex size-min justify-center relative gap-[6px] z-[1] shrink-[0]">
                          <div aria-label="Wrapper" className="items-center flex size-min justify-center overflow-clip relative bg-[rgba(26,_255,_0,_0.1)]/10 gap-[8px] p-1 shrink-[0] rounded-[62.4375rem]">
                            <div aria-label="Dot" className="overflow-clip relative w-[6px] h-[6px] bg-[rgb(26,_255,_0)] shrink-[0] rounded-[62.4375rem]"></div>
                          </div>
                          <div className="flex flex-col justify-start relative shrink-[0]">
                            <p className="font-medium text-[rgb(26,_255,_0)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(26, 255, 0)"}}>Online</p>
                          </div>
                        </div>
                      </div>
                      <div aria-label="Text wrapper" className="items-center flex flex-col h-min justify-center relative w-full gap-[2px] z-[5] shrink-[0]">
                        <div className="flex flex-col justify-start relative w-full shrink-[0]">
                          <p className="font-medium text-white text-[20px] leading-[30px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Emma Reed</p>
                        </div>
                        <div className="flex flex-col justify-start relative w-full shrink-[0] opacity-[0.6]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Client Support Manager</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div aria-label="Grid 1x" className="self-start grid size-full justify-center justify-self-start overflow-clip relative grid-rows-[repeat(2,min-content)] gap-[16px]" style={{"gridTemplateColumns":"repeat(2, minmax(50px, 1fr))","gridArea":"auto / span 4"}}>
                  <motion.div 
                    aria-label="CEO words" 
                    className="items-start self-start flex flex-col justify-end justify-self-start overflow-clip relative w-full h-[548px] gap-[8px] p-[22px]" 
                    style={{"gridArea":"auto / span 2"}}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                  >
                    <div className="absolute left-0 top-0 right-0 bottom-0">
                      <img alt="A smiling man with wavy hair and a beard, wearing a green jacket over a black shirt. He stands against a deep red background, conveying a warm, friendly tone." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F53ae0ce17770e0638f70ed2646413027c4db2917.jpeg%3Fwidth=453&amp;height=455?generation=1768843022937936&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_453_/_455]" />
                    </div>
                    <div aria-label="Overlay" className="size-full overflow-clip absolute left-0 top-0 z-[1] shrink-[0]" style={{"backgroundImage":"linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 83%)"}}></div>
                    <div aria-label="Text wrapper" className="items-start flex flex-col h-min justify-center relative w-full gap-[16px] z-[3] shrink-[0]">
                      <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[70%] shrink-[0]">
                        <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>“At Flixen™, our goal is simple — to turn ideas into visuals that move people. Every project is a  chance to tell a story worth remembering.”</p>
                      </div>
                      <div aria-label="Wrapper" className="items-center flex flex-col h-min justify-center relative w-full gap-[4px] shrink-[0]">
                        <div className="flex flex-col justify-start relative w-full shrink-[0]">
                          <p className="font-medium text-white text-[20px] leading-[30px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Dylan Cross</p>
                        </div>
                        <div className="flex flex-col justify-start relative w-full shrink-[0] opacity-[0.6]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>CEO &amp; Co-Founder</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div 
                    aria-label="Clients card" 
                    className="items-end self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full bg-[rgb(36,_36,_36)] gap-[8px] p-[22px]" 
                    style={{"gridArea":"auto / span 2"}}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                  >
                    <div aria-label="Text" className="items-start flex flex-col h-min justify-center relative w-full gap-[0px] z-[5] shrink-[0]">
                      <div aria-label="Number" className="relative shrink-[0]">
                        <div className="items-center flex font-medium justify-center text-white text-[32px] gap-[0px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>
                          <span className="block"></span>
                          <span className="block">10</span>
                          <span className="block">K+</span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start relative w-full shrink-[0] opacity-[0.6]">
                        <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Satisfied clients</p>
                      </div>
                    </div>
                    <div aria-label="Images wrapper" className="items-center flex h-min justify-start relative w-[172px] gap-[8px] shrink-[0]">
                      <div aria-label="Image 01" className="overflow-clip relative w-[42px] h-[42px] shrink-[0] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(176,_176,_176)] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                        <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                          <img alt="Smiling man wearing glasses and a casual blue shirt over a white t-shirt, standing in soft natural light with window shadows on a gray wall behind." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F523154952824a8251ffa08e582f0e8f2fed8eacb.png%3Fscale-down-to=512&amp;width=1200&amp;height=1200?generation=1768843022947976&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1200_/_1200] rounded-[62.4375rem]" />
                        </div>
                      </div>
                      <div aria-label="Image 02" className="overflow-clip absolute w-[42px] h-[42px] left-8 top-[calc(50%-21px)] z-[1] shrink-[0] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(176,_176,_176)] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                        <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                          <img alt="Smiling man with short hair and beard wearing a beige shirt stands against a softly lit gray background, casting gentle shadows. The mood is warm and joyful." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F5b2cc1f459451bb37dd41dcbb8ab81ded1b5532e.png%3Fscale-down-to=512&amp;width=1200&amp;height=1200?generation=1768843022952958&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1200_/_1200] rounded-[62.4375rem]" />
                        </div>
                      </div>
                      <div aria-label="Image 03" className="overflow-clip absolute w-[42px] h-[42px] left-16 top-[calc(50%-21px)] z-[1] shrink-[0] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(176,_176,_176)] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                        <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                          <img alt="Smiling person with short dark hair in a black shirt against a plain grey background. The expression conveys warmth and friendliness." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7d5b2a5776de4952d962e4a683cb95e774fd4420.png%3Fscale-down-to=512&amp;width=1200&amp;height=1200?generation=1768843022987619&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1200_/_1200] rounded-[62.4375rem]" />
                        </div>
                      </div>
                      <div aria-label="Image 04" className="overflow-clip absolute w-[42px] h-[42px] left-24 top-[calc(50%-21px)] z-[1] shrink-[0] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(176,_176,_176)] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                        <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                          <img alt="Smiling man with curly hair, wearing a blue cap, round glasses, and a light knit sweater. Neutral gray background, conveying warmth and friendliness." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa11d84ad5541de33429b6046ed7384a44d8f7be6.png%3Fscale-down-to=512&amp;width=1200&amp;height=1200?generation=1768843022999878&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1200_/_1200] rounded-[62.4375rem]" />
                        </div>
                      </div>
                      <div aria-label="Icon wrapper" className="items-center flex justify-center overflow-clip absolute w-[42px] h-[42px] left-32 top-[calc(50%-21px)] bg-black gap-[8px] z-[1] shrink-[0] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(176,_176,_176)] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                        <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-5 shrink-[0]">
                          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb8d899a877b5215e4c3f20b847b129279d6488d6.svg?generation=1768843023008233&amp;alt=media" className="block size-full" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          <div aria-label="How we work" className="relative w-full">
            <section aria-label="Desktop" className="items-center flex h-min justify-center overflow-clip relative w-full bg-black gap-[8px] pt-[72px] pr-0 pb-[72px] pl-0">
              <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
                <div aria-label="Grid 6x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[12px_8px] z-[4] shrink-[0]" style={{"gridTemplateColumns":"repeat(6, minmax(50px, 1fr))"}}>
                  <div aria-label="Section tag" className="self-start justify-self-start relative w-fit" style={{"gridArea":"auto / span 2"}}>
                    <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                      <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                        <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>How we work</p>
                      </div>
                    </div>
                  </div>
                  <div aria-label="Text wrapper" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[8px]" style={{"gridArea":"auto / span 2"}}>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                      <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Inside the  Process</h2>
                    </div>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.7]">
                      <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>From concept to screen, our process transforms  ideas into powerful visual stories that inspire.</p>
                    </div>
                  </div>
                  <div aria-label="Button" className="self-end justify-self-end relative w-fit" style={{"gridArea":"auto / span 2"}}>
                    <a href="https://primary-words-404174.framer.app/services" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                      <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                        <p className="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>what we do</p>
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
                <div aria-label="Content" className="relative w-full shrink-[0]">
                  <div aria-label="1-desktop" className="items-center flex flex-col h-min justify-center relative w-full gap-[24px]">
                    <div aria-label="Top tabs" className="grid h-min justify-center relative w-full grid-rows-[repeat(1,min-content)] gap-[14px] shrink-[0]" style={{"gridTemplateColumns":"repeat(6, minmax(50px, 1fr))"}}>
                      <div aria-label="Tab button" className="self-start justify-self-start relative w-full" style={{"gridArea":"auto / span 2"}}>
                        <div aria-label="Active" className="items-center flex h-min justify-center relative w-full gap-[8px] pt-0 pr-0 pb-3 pl-0 after:border-b after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-white after:content-[&quot;&quot;]">
                          <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-5 shrink-[0]">
                            <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F2d19a7558351148bb498cd608cda2251e2741011.svg?generation=1768843023016993&amp;alt=media" className="block size-full" />
                          </div>
                          <div aria-label="Description" className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                            <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Connect</p>
                          </div>
                        </div>
                      </div>
                      <div className="self-start justify-self-start relative w-full" style={{"gridArea":"auto / span 2"}}>
                        <div aria-label="Inactive" className="items-center flex h-min justify-center relative w-full gap-[8px] pt-0 pr-0 pb-3 pl-0 opacity-[0.6] after:border-b after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-white after:content-[&quot;&quot;]">
                          <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-5 shrink-[0]">
                            <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fc60ee956254c0dbc6acd89f56f96c0de1a1ff63b.svg?generation=1768843023018748&amp;alt=media" className="block size-full" />
                          </div>
                          <div aria-label="Description" className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                            <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Create</p>
                          </div>
                        </div>
                      </div>
                      <div aria-label="Tab button" className="self-start justify-self-start relative w-full" style={{"gridArea":"auto / span 2"}}>
                        <div aria-label="Inactive" className="items-center flex h-min justify-center relative w-full gap-[8px] pt-0 pr-0 pb-3 pl-0 opacity-[0.6] after:border-b after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-white after:content-[&quot;&quot;]">
                          <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-5 shrink-[0]">
                            <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fc60ee956254c0dbc6acd89f56f96c0de1a1ff63b.svg?generation=1768843023018748&amp;alt=media" className="block size-full" />
                          </div>
                          <div aria-label="Description" className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                            <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Launch</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <motion.div 
                      aria-label="Tab content" 
                      className="relative w-full shrink-[0]"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div aria-label="Desktop" className="grid h-min justify-center relative w-full grid-rows-[repeat(1,min-content)] bg-[rgb(36,_36,_36)] gap-[14px] p-5" style={{"gridTemplateColumns":"repeat(6, minmax(50px, 1fr))"}}>
                        <div aria-label="Cover image" className="self-start justify-self-start overflow-clip relative w-full h-[473px]" style={{"gridArea":"auto / span 4"}}>
                          <div className="absolute left-0 top-0 right-0 bottom-0">
                            <img alt="Two focused men in work aprons lean over large blueprints in a dimly lit workshop. A beam of light highlights the papers, creating a dramatic atmosphere." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe747046ede791a7e38de11e7a51b9725ed41b22d.jpeg%3Fwidth=1280&amp;height=1280?generation=1768843023060187&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]" />
                          </div>
                        </div>
                        <div aria-label="Wrapper" className="items-start self-start flex flex-col size-full justify-between justify-self-start overflow-clip relative" style={{"gridArea":"auto / span 2"}}>
                          <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-center relative w-full gap-[22px] shrink-[0]">
                            <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                              <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>001.</p>
                            </div>
                            <div aria-label="Text wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative w-full gap-[16px] shrink-[0]">
                              <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                                <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Connect</h2>
                              </div>
                              <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Start by sharing your vision and goals — we’ll  collaborate closely to plan a creative direction  perfectly suited to your brand.</p>
                              </div>
                            </div>
                          </div>
                          <div aria-label="Button" className="relative w-full shrink-[0]">
                            <a href="https://primary-words-404174.framer.app/contact-us" aria-label="Large" className="items-center flex h-min justify-between overflow-clip relative w-full bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] pt-2 pr-2 pb-2 pl-5 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
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
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section aria-label="Pricing" className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0">
            <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
              <div aria-label="Grid 6x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[12px_8px] z-[4] shrink-[0]" style={{"gridTemplateColumns":"repeat(2, minmax(50px, 1fr))"}}>
                <div aria-label="Section tag" className="self-start justify-self-start relative w-fit" style={{"gridArea":"auto / 1 / auto / -1"}}>
                  <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                    <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>pricing plan</p>
                    </div>
                  </div>
                </div>
                <div aria-label="Text" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[8px]">
                  <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                    <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Affordable Plans</h2>
                  </div>
                  <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.7]">
                    <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>We offer flexible pricing plans tailored to your goals, budget, and creative  needs.</p>
                  </div>
                </div>
                <div aria-label="Clients wrapper" className="items-center self-end flex h-min justify-start justify-self-end overflow-clip relative w-full gap-[8px] max-w-[200px]">
                  <div aria-label="Images wrapper" className="items-center flex h-min justify-start relative w-[101px] gap-[8px] shrink-[0]">
                    <div aria-label="Image 01" className="overflow-clip relative w-7 h-7 shrink-[0] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(176,_176,_176)] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                      <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                        <img alt="Smiling man wearing glasses and a casual blue shirt over a white t-shirt, standing in soft natural light with window shadows on a gray wall behind." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F523154952824a8251ffa08e582f0e8f2fed8eacb.png%3Fscale-down-to=512&amp;width=1200&amp;height=1200?generation=1768843022947976&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1200_/_1200] rounded-[62.4375rem]" />
                      </div>
                    </div>
                    <div aria-label="Image 02" className="overflow-clip absolute w-7 h-7 left-6 top-[calc(50%-14px)] z-[1] shrink-[0] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(176,_176,_176)] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                      <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                        <img alt="Smiling man with short hair and beard wearing a beige shirt stands against a softly lit gray background, casting gentle shadows. The mood is warm and joyful." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F5b2cc1f459451bb37dd41dcbb8ab81ded1b5532e.png%3Fscale-down-to=512&amp;width=1200&amp;height=1200?generation=1768843022952958&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1200_/_1200] rounded-[62.4375rem]" />
                      </div>
                    </div>
                    <div aria-label="Image 03" className="overflow-clip absolute w-7 h-7 left-12 top-[calc(50%-14px)] z-[1] shrink-[0] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(176,_176,_176)] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                      <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                        <img alt="Smiling person with short dark hair in a black shirt against a plain grey background. The expression conveys warmth and friendliness." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7d5b2a5776de4952d962e4a683cb95e774fd4420.png%3Fscale-down-to=512&amp;width=1200&amp;height=1200?generation=1768843022987619&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1200_/_1200] rounded-[62.4375rem]" />
                      </div>
                    </div>
                    <div aria-label="Icon wrapper" className="items-center flex justify-center overflow-clip absolute w-7 h-7 left-[72px] top-[calc(50%-14px)] bg-black gap-[8px] z-[1] shrink-[0] rounded-[62.4375rem] after:border after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(176,_176,_176)] after:content-[&quot;&quot;] after:rounded-[62.4375rem]">
                      <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-[14px] shrink-[0]">
                        <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F187f8114c905a95cec63cf690f36325b2f10c1da.svg?generation=1768843023090278&amp;alt=media" className="block size-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                    <p className="font-medium text-left text-[rgb(221,_221,_221)] text-[10px] tracking-[-0.2px] leading-[12px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}><span className="text-left text-white" style={{"textDecoration":"rgb(255, 255, 255)"}}>10K+</span> Peoples already  subscribed</p>
                  </div>
                </div>
              </div>
              <div aria-label="Grid 6x" className="grid h-min justify-center relative w-full grid-rows-[repeat(1,min-content)] gap-[14px] shrink-[0]" style={{"gridTemplateColumns":"repeat(2, minmax(50px, 1fr))"}}>
                <motion.div 
                  aria-label="Pricing card" 
                  className="self-start justify-self-start relative w-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div aria-label="Pricing card" className="items-start flex flex-col h-min justify-start overflow-clip relative w-full bg-[rgb(36,_36,_36)] gap-[28px] p-6">
                    <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start relative w-full gap-[8px] shrink-[0]">
                      <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.7]">
                        <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Starter Plan</p>
                      </div>
                      <div aria-label="Tag" className="items-center flex size-min justify-center absolute top-0 right-0 bg-[rgb(51,_51,_51)] gap-[8px] pt-1 pr-2 pb-1 pl-2 z-[1] shrink-[0]">
                        <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                          <p className="font-medium text-left uppercase text-white text-[10px] tracking-[-0.2px] leading-[12px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Popular</p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                        <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>$499</h2>
                      </div>
                      <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                        <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Perfect for small brands wanting professional videos that elevate  their online presence effortlessly.</p>
                      </div>
                    </div>
                    <div aria-label="Line" className="h-px overflow-clip relative w-full bg-[rgb(176,_176,_176)] shrink-[0] opacity-[0.3]"></div>
                    <div aria-label="Features wrapper" className="items-center flex flex-col h-min justify-center relative w-full gap-[12px] shrink-[0] opacity-[0.6]">
                      <div aria-label="Feature 01" className="items-center flex h-min justify-start overflow-clip relative w-full gap-[8px] shrink-[0]">
                        <div role="presentation" className="aspect-square overflow-hidden relative w-6 shrink-[0]">
                          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F75696743a725bbd573c36919bca8154e7333de4d.svg?generation=1768843023101372&amp;alt=media" className="block size-full" />
                        </div>
                        <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>2 video projects</p>
                        </div>
                      </div>
                      <div aria-label="Feature 02" className="items-center flex h-min justify-start overflow-clip relative w-full gap-[8px] shrink-[0]">
                        <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-6 shrink-[0]">
                          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7a3348d3bcc2eb04617ca15e92684e0ee5aa74c6.svg?generation=1768843023114661&amp;alt=media" className="block size-full" />
                        </div>
                        <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Basic editing included</p>
                        </div>
                      </div>
                      <div aria-label="Feature 03" className="items-center flex h-min justify-start overflow-clip relative w-full gap-[8px] shrink-[0]">
                        <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-6 shrink-[0]">
                          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Faaa59763df26859c41cf0155cced03930cbf1fef.svg?generation=1768843023109062&amp;alt=media" className="block size-full" />
                        </div>
                        <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>HD quality output</p>
                        </div>
                      </div>
                      <div aria-label="Feature 04" className="items-center flex h-min justify-start overflow-clip relative w-full gap-[8px] shrink-[0]">
                        <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-6 shrink-[0]">
                          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F88f68a954a06fc363943fc9dc2d0e68c779c8a53.svg?generation=1768843023132758&amp;alt=media" className="block size-full" />
                        </div>
                        <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>One revision per project</p>
                        </div>
                      </div>
                      <div aria-label="Feature 05" className="items-center flex h-min justify-start overflow-clip relative w-full gap-[8px] shrink-[0]">
                        <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-6 shrink-[0]">
                          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa907eccfc5f58e1e09751a8f2c991243175cf7d7.svg?generation=1768843023186840&amp;alt=media" className="block size-full" />
                        </div>
                        <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Email support</p>
                        </div>
                      </div>
                    </div>
                    <div aria-label="Button" className="relative w-full shrink-[0]">
                      <a href="https://primary-words-404174.framer.app/contact-us" aria-label="Large" className="items-center flex h-min justify-between overflow-clip relative w-full bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] pt-2 pr-2 pb-2 pl-5 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
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
                </motion.div>
                <motion.div 
                  aria-label="Pricing card" 
                  className="self-start justify-self-start relative w-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                  <div aria-label="Pricing card" className="items-start flex flex-col h-min justify-start overflow-clip relative w-full bg-[rgb(36,_36,_36)] gap-[28px] p-6">
                    <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start relative w-full gap-[8px] shrink-[0]">
                      <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.7]">
                        <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Pro Plan</p>
                      </div>
                      <div aria-label="Tag" className="items-center flex size-min justify-center absolute top-0 right-0 bg-[rgb(51,_51,_51)] gap-[8px] pt-1 pr-2 pb-1 pl-2 z-[1] shrink-[0]">
                        <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                          <p className="font-medium text-left uppercase text-white text-[10px] tracking-[-0.2px] leading-[12px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Best Value</p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                        <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>$999</h2>
                      </div>
                      <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                        <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Ideal for growing agencies needing consistent, high-quality video  content with fast delivery and priority support.</p>
                      </div>
                    </div>
                    <div aria-label="Line" className="h-px overflow-clip relative w-full bg-[rgb(176,_176,_176)] shrink-[0] opacity-[0.3]"></div>
                    <div aria-label="Features wrapper" className="items-center flex flex-col h-min justify-center relative w-full gap-[12px] shrink-[0] opacity-[0.6]">
                      <div aria-label="Feature 01" className="items-center flex h-min justify-start overflow-clip relative w-full gap-[8px] shrink-[0]">
                        <div role="presentation" className="aspect-square overflow-hidden relative w-6 shrink-[0]">
                          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F75696743a725bbd573c36919bca8154e7333de4d.svg?generation=1768843023101372&amp;alt=media" className="block size-full" />
                        </div>
                        <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>5 video projects</p>
                        </div>
                      </div>
                      <div aria-label="Feature 02" className="items-center flex h-min justify-start overflow-clip relative w-full gap-[8px] shrink-[0]">
                        <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-6 shrink-[0]">
                          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7a3348d3bcc2eb04617ca15e92684e0ee5aa74c6.svg?generation=1768843023114661&amp;alt=media" className="block size-full" />
                        </div>
                        <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Advanced editing &amp; color grading</p>
                        </div>
                      </div>
                      <div aria-label="Feature 03" className="items-center flex h-min justify-start overflow-clip relative w-full gap-[8px] shrink-[0]">
                        <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-6 shrink-[0]">
                          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Faaa59763df26859c41cf0155cced03930cbf1fef.svg?generation=1768843023109062&amp;alt=media" className="block size-full" />
                        </div>
                        <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>4K video quality</p>
                        </div>
                      </div>
                      <div aria-label="Feature 04" className="items-center flex h-min justify-start overflow-clip relative w-full gap-[8px] shrink-[0]">
                        <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-6 shrink-[0]">
                          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb1d6ddcf1bc3b51738ac9d95db5f6ceb9950ca29.svg?generation=1768843023182427&amp;alt=media" className="block size-full" />
                        </div>
                        <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Unlimited revisions</p>
                        </div>
                      </div>
                      <div aria-label="Feature 05" className="items-center flex h-min justify-start overflow-clip relative w-full gap-[8px] shrink-[0]">
                        <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-6 shrink-[0]">
                          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa907eccfc5f58e1e09751a8f2c991243175cf7d7.svg?generation=1768843023186840&amp;alt=media" className="block size-full" />
                        </div>
                        <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                          <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Priority 24/7 support</p>
                        </div>
                      </div>
                    </div>
                    <div aria-label="Button" className="relative w-full shrink-[0]">
                      <a href="https://primary-words-404174.framer.app/contact-us" aria-label="Large" className="items-center flex h-min justify-between overflow-clip relative w-full bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] pt-2 pr-2 pb-2 pl-5 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
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
                </motion.div>
                <div aria-label="Custom card" className="items-start self-start flex flex-col justify-between justify-self-start overflow-clip relative w-full h-[500px] bg-[rgb(36,_36,_36)] p-6">
                  <div aria-label="Wrapper" className="items-center flex flex-col h-min justify-center relative w-full gap-[28px] shrink-[0]">
                    <div aria-label="Content wrapper" className="items-start flex flex-col h-min justify-start relative w-full gap-[8px] shrink-[0]">
                      <div aria-label="Tag" className="items-center flex size-min justify-center absolute top-0 right-0 bg-[rgb(51,_51,_51)] gap-[8px] pt-1 pr-2 pb-1 pl-2 z-[1] shrink-[0]">
                        <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                          <p className="font-medium text-left uppercase text-white text-[10px] tracking-[-0.2px] leading-[12px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Custom</p>
                        </div>
                      </div>
                      <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                        <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Have a custom request?</p>
                      </div>
                    </div>
                    <div aria-label="Line" className="h-px overflow-clip relative w-full bg-[rgb(176,_176,_176)] shrink-[0] opacity-[0.3]"></div>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                      <h6 className="font-medium text-left text-white text-[28px] tracking-[-0.84px] leading-[29.4px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>We provide custom pricing plans  designed around your project goals,  timeline, &amp; budget.</h6>
                    </div>
                  </div>
                  <div aria-label="Button" className="relative w-full shrink-[0]">
                    <a href="https://primary-words-404174.framer.app/contact-us" aria-label="Large" className="items-center flex h-min justify-between overflow-clip relative w-full bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] pt-2 pr-2 pb-2 pl-5 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
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
              </div>
            </div>
          </section>
          <section aria-label="Testimonials" className="items-center flex h-min justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0">
            <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
              <div aria-label="Grid 6x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[12px_8px] z-[4] shrink-[0]" style={{"gridTemplateColumns":"repeat(2, minmax(50px, 1fr))"}}>
                <div aria-label="Section tag" className="self-start justify-self-start relative w-fit" style={{"gridArea":"auto / span 2"}}>
                  <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                    <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>testimonials</p>
                    </div>
                  </div>
                </div>
                <div aria-label="Text wrapper" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[8px]">
                  <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                    <h2 className="font-medium text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Our Happy Clients</h2>
                  </div>
                  <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.7]">
                    <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Hear from our amazing clients who trusted us to bring their creative  visions to life.</p>
                  </div>
                </div>
                <div aria-label="Button" className="self-end justify-self-end relative w-fit">
                  <a href="https://primary-words-404174.framer.app/services" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>What we do</p>
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
              <div aria-label="Wrapper" className="items-center flex flex-col h-min justify-center relative w-full gap-[20px] shrink-[0]">
                <div className="relative w-full shrink-[0]">
                  <div aria-label="1-desktop" className="grid h-min justify-center relative w-full grid-rows-[repeat(1,min-content)] bg-[rgb(36,_36,_36)] gap-[10px] p-2" style={{"gridTemplateColumns":"repeat(6, minmax(50px, 1fr))"}}>
                    <div aria-label="Profile image" className="self-start justify-self-start overflow-clip relative w-full h-[450px]" style={{"gridArea":"auto / span 2"}}>
                      <div className="absolute left-0 top-0 right-0 bottom-0">
                        <img alt="A woman with red hair wears a lavender coat and a white sweater, accessorized with a gray scarf. She has a calm expression against a neutral background." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F51cc56da63ad66f146a82f43174f16bf2a0beaa4.png%3Fwidth=902&amp;height=759?generation=1768843023195262&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_902_/_759]" />
                      </div>
                    </div>
                    <div aria-label="Grid 3x" className="self-start grid size-full justify-center justify-self-start relative grid-rows-[repeat(1,minmax(0px,1fr))] bg-black gap-[8px] p-4" style={{"gridTemplateColumns":"repeat(3, minmax(50px, 1fr))","gridArea":"auto / span 4"}}>
                      <div aria-label="Wrapper" className="items-start self-center flex flex-col size-full justify-between justify-self-start overflow-clip relative" style={{"gridArea":"auto / span 2"}}>
                        <div aria-label="Main" className="items-start flex flex-col h-min justify-center overflow-clip relative w-full gap-[20px] shrink-[0]">
                          <div aria-label="Numbers" className="items-start flex flex-col h-min justify-center relative w-full gap-[2px] shrink-[0]">
                            <div className="relative shrink-[0]">
                              <div className="items-center flex font-medium justify-center text-white text-[60px] gap-[4px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>
                                <span className="block"></span>
                                <span className="block">7</span>
                                <span className="block">x</span>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                              <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Faster Delivery</p>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0] opacity-[0.6]">
                            <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>"Flixen™ turned our concept into a cinematic  masterpiece. Their team’s creativity, precision, and  speed truly exceeded our expectations from start to  finish."</p>
                          </div>
                        </div>
                        <div aria-label="User info" className="items-start flex flex-col h-min justify-start overflow-clip relative w-full gap-[0px] shrink-[0]">
                          <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                            <p className="font-medium text-left text-white text-[22px] tracking-[-0.44px] leading-[30.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Olivia Bennett</p>
                          </div>
                          <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                            <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Marketing Director</p>
                          </div>
                        </div>
                      </div>
                      <div className="items-center self-end flex h-min justify-end justify-self-end overflow-clip relative w-full gap-[8px]">
                        <div aria-label="Slide Arrow" className="pointer-events-none relative shrink-[0]">
                          <div aria-label="In-active" className="items-center aspect-square flex justify-center overflow-clip pointer-events-none relative w-7 bg-[rgb(36,_36,_36)] gap-[8px] opacity-[0.6] rounded-[62.4375rem]">
                            <div aria-label="Arrow" className="aspect-square pointer-events-none relative w-4 bg-white shrink-[0]"></div>
                          </div>
                        </div>
                        <div aria-label="Slide Arrow" className="relative shrink-[0]">
                          <div aria-label="Active" className="items-center flex justify-center overflow-clip relative w-7 h-7 bg-[rgb(36,_36,_36)] gap-[8px] rounded-[62.4375rem]">
                            <div aria-label="Arrow" className="aspect-square relative w-4 bg-white shrink-[0]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div 
                  aria-label="Testimonials ticker" 
                  className="relative w-full h-[311px] shrink-[0]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <section className="items-center flex size-full justify-items-center max-h-full max-w-full overflow-hidden">
                    <ul className="items-start flex size-full max-h-full max-w-full relative left-[-2160px] gap-[10px] translate-x-[163.328px]" style={{"justifyItems":"flex-start"}}>
                      <li className="list-none text-left h-[334px]">
                        <div aria-label="Testimonial card" className="relative text-left h-[334px]">
                          <div aria-label="Testimonials card" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-[350px] bg-[rgb(36,_36,_36)] gap-[20px] pt-2 pr-2 pb-[14px] pl-2">
                            <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full bg-black gap-[36px] p-4 shrink-[0]">
                              <div aria-label="Numbers" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full gap-[4px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}></h4>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                              </div>
                            </div>
                            <div aria-label="User info" className="items-center flex h-min justify-center relative text-left w-full gap-[12px] shrink-[0]">
                              <div aria-label="User profile" className="overflow-clip relative text-left w-[54px] h-[54px] shrink-[0] rounded-[62.4375rem]">
                                <div className="absolute text-left left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img alt="A person with short, light brown hair wears a dark green blazer over a cream cable-knit turtleneck. The pose is calm against a neutral background." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3fe9acb4dceb3693b96c7b3cf85e6a3cd92409ef.png%3Fwidth=902&amp;height=925?generation=1768843023180045&amp;alt=media" className="block size-full object-cover overflow-clip text-left aspect-[auto_902_/_925] rounded-[62.4375rem]" />
                                </div>
                              </div>
                              <div aria-label="User Text" className="items-start flex flex-col grow h-min justify-start overflow-clip relative text-left w-px basis-0 gap-[0px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-none text-left h-[334px]">
                        <div aria-label="Testimonial card" className="relative text-left h-[334px]">
                          <div aria-label="Testimonials card" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-[350px] bg-[rgb(36,_36,_36)] gap-[20px] pt-2 pr-2 pb-[14px] pl-2">
                            <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full bg-black gap-[36px] p-4 shrink-[0]">
                              <div aria-label="Numbers" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full gap-[4px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}></h4>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                              </div>
                            </div>
                            <div aria-label="User info" className="items-center flex h-min justify-center relative text-left w-full gap-[12px] shrink-[0]">
                              <div aria-label="User profile" className="overflow-clip relative text-left w-[54px] h-[54px] shrink-[0] rounded-[62.4375rem]">
                                <div className="absolute text-left left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img alt="A person with short, red hair wears a tan coat and a white turtleneck, gazing confidently. The background is a neutral gray, creating a calm, professional tone." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9544cfcbf732477fa74cf91181a92d7e60aeedd8.png%3Fwidth=902&amp;height=903?generation=1768843023238720&amp;alt=media" className="block size-full object-cover overflow-clip text-left aspect-[auto_902_/_903] rounded-[62.4375rem]" />
                                </div>
                              </div>
                              <div aria-label="User Text" className="items-start flex flex-col grow h-min justify-start overflow-clip relative text-left w-px basis-0 gap-[0px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-none text-left h-[334px]">
                        <div aria-label="Testimonial card" className="relative text-left h-[334px]">
                          <div aria-label="Testimonials card" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-[350px] bg-[rgb(36,_36,_36)] gap-[20px] pt-2 pr-2 pb-[14px] pl-2">
                            <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full bg-black gap-[36px] p-4 shrink-[0]">
                              <div aria-label="Numbers" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full gap-[4px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}></h4>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                              </div>
                            </div>
                            <div aria-label="User info" className="items-center flex h-min justify-center relative text-left w-full gap-[12px] shrink-[0]">
                              <div aria-label="User profile" className="overflow-clip relative text-left w-[54px] h-[54px] shrink-[0] rounded-[62.4375rem]">
                                <div className="absolute text-left left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3e52ba550b71494e1ca84d2e1e01920c7968c1ae.png%3Fscale-down-to=512&amp;width=902&amp;height=771?generation=1768843023255229&amp;alt=media" className="block size-full object-cover overflow-clip text-left aspect-[auto_902_/_771] rounded-[62.4375rem]" />
                                </div>
                              </div>
                              <div aria-label="User Text" className="items-start flex flex-col grow h-min justify-start overflow-clip relative text-left w-px basis-0 gap-[0px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-none text-left h-[334px]">
                        <div aria-label="Testimonial card" className="relative text-left h-[334px]">
                          <div aria-label="Testimonials card" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-[350px] bg-[rgb(36,_36,_36)] gap-[20px] pt-2 pr-2 pb-[14px] pl-2">
                            <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full bg-black gap-[36px] p-4 shrink-[0]">
                              <div aria-label="Numbers" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full gap-[4px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}></h4>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                              </div>
                            </div>
                            <div aria-label="User info" className="items-center flex h-min justify-center relative text-left w-full gap-[12px] shrink-[0]">
                              <div aria-label="User profile" className="overflow-clip relative text-left w-[54px] h-[54px] shrink-[0] rounded-[62.4375rem]">
                                <div className="absolute text-left left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img alt="A person with short, light brown hair wears a dark green blazer over a cream cable-knit turtleneck. The pose is calm against a neutral background." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3fe9acb4dceb3693b96c7b3cf85e6a3cd92409ef.png%3Fwidth=902&amp;height=925?generation=1768843023180045&amp;alt=media" className="block size-full object-cover overflow-clip text-left aspect-[auto_902_/_925] rounded-[62.4375rem]" />
                                </div>
                              </div>
                              <div aria-label="User Text" className="items-start flex flex-col grow h-min justify-start overflow-clip relative text-left w-px basis-0 gap-[0px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-none text-left h-[334px]">
                        <div aria-label="Testimonial card" className="relative text-left h-[334px]">
                          <div aria-label="Testimonials card" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-[350px] bg-[rgb(36,_36,_36)] gap-[20px] pt-2 pr-2 pb-[14px] pl-2">
                            <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full bg-black gap-[36px] p-4 shrink-[0]">
                              <div aria-label="Numbers" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full gap-[4px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}></h4>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                              </div>
                            </div>
                            <div aria-label="User info" className="items-center flex h-min justify-center relative text-left w-full gap-[12px] shrink-[0]">
                              <div aria-label="User profile" className="overflow-clip relative text-left w-[54px] h-[54px] shrink-[0] rounded-[62.4375rem]">
                                <div className="absolute text-left left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img alt="A person with short, red hair wears a tan coat and a white turtleneck, gazing confidently. The background is a neutral gray, creating a calm, professional tone." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9544cfcbf732477fa74cf91181a92d7e60aeedd8.png%3Fwidth=902&amp;height=903?generation=1768843023238720&amp;alt=media" className="block size-full object-cover overflow-clip text-left aspect-[auto_902_/_903] rounded-[62.4375rem]" />
                                </div>
                              </div>
                              <div aria-label="User Text" className="items-start flex flex-col grow h-min justify-start overflow-clip relative text-left w-px basis-0 gap-[0px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-none text-left h-[334px]">
                        <div aria-label="Testimonial card" className="relative text-left h-[334px]">
                          <div aria-label="Testimonials card" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-[350px] bg-[rgb(36,_36,_36)] gap-[20px] pt-2 pr-2 pb-[14px] pl-2">
                            <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full bg-black gap-[36px] p-4 shrink-[0]">
                              <div aria-label="Numbers" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full gap-[4px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}></h4>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Working with Flixen™ was effortless. They  understood our vision instantly and delivered  visuals that elevated our brand story.</p>
                              </div>
                            </div>
                            <div aria-label="User info" className="items-center flex h-min justify-center relative text-left w-full gap-[12px] shrink-[0]">
                              <div aria-label="User profile" className="overflow-clip relative text-left w-[54px] h-[54px] shrink-[0] rounded-[62.4375rem]">
                                <div className="absolute text-left left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3e52ba550b71494e1ca84d2e1e01920c7968c1ae.png%3Fscale-down-to=512&amp;width=902&amp;height=771?generation=1768843023255229&amp;alt=media" className="block size-full object-cover overflow-clip text-left aspect-[auto_902_/_771] rounded-[62.4375rem]" />
                                </div>
                              </div>
                              <div aria-label="User Text" className="items-start flex flex-col grow h-min justify-start overflow-clip relative text-left w-px basis-0 gap-[0px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-none text-left h-[334px]">
                        <div aria-label="Testimonial card" className="relative text-left h-[334px]">
                          <div aria-label="Testimonials card" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-[350px] bg-[rgb(36,_36,_36)] gap-[20px] pt-2 pr-2 pb-[14px] pl-2">
                            <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full bg-black gap-[36px] p-4 shrink-[0]">
                              <div aria-label="Numbers" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full gap-[4px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>10x</h4>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Client Satisfaction</p>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>The Flixen™ team is reliable, fast, and detail- oriented. Every frame felt intentional and  beautifully crafted with creativity and care.</p>
                              </div>
                            </div>
                            <div aria-label="User info" className="items-center flex h-min justify-center relative text-left w-full gap-[12px] shrink-[0]">
                              <div aria-label="User profile" className="overflow-clip relative text-left w-[54px] h-[54px] shrink-[0] rounded-[62.4375rem]">
                                <div className="absolute text-left left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img alt="A person with short, light brown hair wears a dark green blazer over a cream cable-knit turtleneck. The pose is calm against a neutral background." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3fe9acb4dceb3693b96c7b3cf85e6a3cd92409ef.png%3Fwidth=902&amp;height=925?generation=1768843023180045&amp;alt=media" className="block size-full object-cover overflow-clip text-left aspect-[auto_902_/_925] rounded-[62.4375rem]" />
                                </div>
                              </div>
                              <div aria-label="User Text" className="items-start flex flex-col grow h-min justify-start overflow-clip relative text-left w-px basis-0 gap-[0px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Liam Carter</p>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>CEO, Nova Media</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-none text-left h-[334px]">
                        <div aria-label="Testimonial card" className="relative text-left h-[334px]">
                          <div aria-label="Testimonials card" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-[350px] bg-[rgb(36,_36,_36)] gap-[20px] pt-2 pr-2 pb-[14px] pl-2">
                            <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full bg-black gap-[36px] p-4 shrink-[0]">
                              <div aria-label="Numbers" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full gap-[4px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>3x</h4>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Engagement Boost</p>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Flixen™ brought our campaign to life with  storytelling and visuals that matched our  brand tone and expectations.</p>
                              </div>
                            </div>
                            <div aria-label="User info" className="items-center flex h-min justify-center relative text-left w-full gap-[12px] shrink-[0]">
                              <div aria-label="User profile" className="overflow-clip relative text-left w-[54px] h-[54px] shrink-[0] rounded-[62.4375rem]">
                                <div className="absolute text-left left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img alt="A person with short, red hair wears a tan coat and a white turtleneck, gazing confidently. The background is a neutral gray, creating a calm, professional tone." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9544cfcbf732477fa74cf91181a92d7e60aeedd8.png%3Fwidth=902&amp;height=903?generation=1768843023238720&amp;alt=media" className="block size-full object-cover overflow-clip text-left aspect-[auto_902_/_903] rounded-[62.4375rem]" />
                                </div>
                              </div>
                              <div aria-label="User Text" className="items-start flex flex-col grow h-min justify-start overflow-clip relative text-left w-px basis-0 gap-[0px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Sofia Lane</p>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Content Strategist</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-none text-left h-[334px]">
                        <div aria-label="Testimonial card" className="relative text-left h-[334px]">
                          <div aria-label="Testimonials card" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-[350px] bg-[rgb(36,_36,_36)] gap-[20px] pt-2 pr-2 pb-[14px] pl-2">
                            <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full bg-black gap-[36px] p-4 shrink-[0]">
                              <div aria-label="Numbers" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full gap-[4px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>5x</h4>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Brand Growth</p>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Working with Flixen™ was effortless. They  understood our vision instantly and delivered  visuals that elevated our brand story.</p>
                              </div>
                            </div>
                            <div aria-label="User info" className="items-center flex h-min justify-center relative text-left w-full gap-[12px] shrink-[0]">
                              <div aria-label="User profile" className="overflow-clip relative text-left w-[54px] h-[54px] shrink-[0] rounded-[62.4375rem]">
                                <div className="absolute text-left left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3e52ba550b71494e1ca84d2e1e01920c7968c1ae.png%3Fscale-down-to=512&amp;width=902&amp;height=771?generation=1768843023255229&amp;alt=media" className="block size-full object-cover overflow-clip text-left aspect-[auto_902_/_771] rounded-[62.4375rem]" />
                                </div>
                              </div>
                              <div aria-label="User Text" className="items-start flex flex-col grow h-min justify-start overflow-clip relative text-left w-px basis-0 gap-[0px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Ethan Ross</p>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Creative Producer</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-none text-left h-[334px]">
                        <div aria-label="Testimonial card" className="relative text-left h-[334px]">
                          <div aria-label="Testimonials card" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-[350px] bg-[rgb(36,_36,_36)] gap-[20px] pt-2 pr-2 pb-[14px] pl-2">
                            <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full bg-black gap-[36px] p-4 shrink-[0]">
                              <div aria-label="Numbers" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full gap-[4px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}></h4>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                              </div>
                            </div>
                            <div aria-label="User info" className="items-center flex h-min justify-center relative text-left w-full gap-[12px] shrink-[0]">
                              <div aria-label="User profile" className="overflow-clip relative text-left w-[54px] h-[54px] shrink-[0] rounded-[62.4375rem]">
                                <div className="absolute text-left left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img alt="A person with short, light brown hair wears a dark green blazer over a cream cable-knit turtleneck. The pose is calm against a neutral background." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3fe9acb4dceb3693b96c7b3cf85e6a3cd92409ef.png%3Fwidth=902&amp;height=925?generation=1768843023180045&amp;alt=media" className="block size-full object-cover overflow-clip text-left aspect-[auto_902_/_925] rounded-[62.4375rem]" />
                                </div>
                              </div>
                              <div aria-label="User Text" className="items-start flex flex-col grow h-min justify-start overflow-clip relative text-left w-px basis-0 gap-[0px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-none text-left h-[334px]">
                        <div aria-label="Testimonial card" className="relative text-left h-[334px]">
                          <div aria-label="Testimonials card" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-[350px] bg-[rgb(36,_36,_36)] gap-[20px] pt-2 pr-2 pb-[14px] pl-2">
                            <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full bg-black gap-[36px] p-4 shrink-[0]">
                              <div aria-label="Numbers" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full gap-[4px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}></h4>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                              </div>
                            </div>
                            <div aria-label="User info" className="items-center flex h-min justify-center relative text-left w-full gap-[12px] shrink-[0]">
                              <div aria-label="User profile" className="overflow-clip relative text-left w-[54px] h-[54px] shrink-[0] rounded-[62.4375rem]">
                                <div className="absolute text-left left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img alt="A person with short, red hair wears a tan coat and a white turtleneck, gazing confidently. The background is a neutral gray, creating a calm, professional tone." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F9544cfcbf732477fa74cf91181a92d7e60aeedd8.png%3Fwidth=902&amp;height=903?generation=1768843023238720&amp;alt=media" className="block size-full object-cover overflow-clip text-left aspect-[auto_902_/_903] rounded-[62.4375rem]" />
                                </div>
                              </div>
                              <div aria-label="User Text" className="items-start flex flex-col grow h-min justify-start overflow-clip relative text-left w-px basis-0 gap-[0px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-none text-left h-[334px]">
                        <div aria-label="Testimonial card" className="relative text-left h-[334px]">
                          <div aria-label="Testimonials card" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-[350px] bg-[rgb(36,_36,_36)] gap-[20px] pt-2 pr-2 pb-[14px] pl-2">
                            <div aria-label="Top wrapper" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full bg-black gap-[36px] p-4 shrink-[0]">
                              <div aria-label="Numbers" className="items-start flex flex-col h-min justify-start overflow-clip relative text-left w-full gap-[4px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <h4 className="font-medium text-white text-[32px] tracking-[-0.64px] leading-[44.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}></h4>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                              </div>
                            </div>
                            <div aria-label="User info" className="items-center flex h-min justify-center relative text-left w-full gap-[12px] shrink-[0]">
                              <div aria-label="User profile" className="overflow-clip relative text-left w-[54px] h-[54px] shrink-[0] rounded-[62.4375rem]">
                                <div className="absolute text-left left-0 top-0 right-0 bottom-0 rounded-[62.4375rem]">
                                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3e52ba550b71494e1ca84d2e1e01920c7968c1ae.png%3Fscale-down-to=512&amp;width=902&amp;height=771?generation=1768843023255229&amp;alt=media" className="block size-full object-cover overflow-clip text-left aspect-[auto_902_/_771] rounded-[62.4375rem]" />
                                </div>
                              </div>
                              <div aria-label="User Text" className="items-start flex flex-col grow h-min justify-start overflow-clip relative text-left w-px basis-0 gap-[0px] shrink-[0]">
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[18px] leading-[27px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                                <div className="flex flex-col justify-start relative text-left whitespace-pre-wrap w-full shrink-[0] opacity-[0.6]">
                                  <p className="font-medium text-[rgb(221,_221,_221)] text-[14px] leading-[19.6px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>
                </motion.div>
              </div>
            </div>
          </section>
          <div aria-label="FAQ" className="relative w-full">
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
                    <a href="https://primary-words-404174.framer.app/contact-us" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
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
                <div aria-label="Grid 3x" className="grid h-min justify-center relative w-full grid-rows-[repeat(1,min-content)] gap-[20px] shrink-[0]" style={{"gridTemplateColumns":"repeat(3, minmax(50px, 1fr))"}}>
                  <div aria-label="Cover image" className="self-start size-full justify-self-start overflow-clip relative">
                    <div className="absolute left-0 top-0 right-0 bottom-0">
                      <img alt="Silhouetted band members play instruments in a smoky warehouse, backlit by vibrant orange and teal lights, creating a moody, dramatic ambiance." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F2d3a81b8ccba0e26d61088a5aa4e7ee9ba77f6f4.jpeg%3Fscale-down-to=1024&amp;width=1280&amp;height=1280?generation=1768843023272576&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]" />
                    </div>
                  </div>
                  <motion.div 
                    aria-label="FAQ item" 
                    className="self-start justify-self-start relative w-full" 
                    style={{"gridArea":"auto / span 2"}}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div aria-label="1" className="items-center flex flex-col h-min justify-start overflow-clip relative w-full gap-[10px]">
                      <div aria-label="FAQ item" className="relative w-full shrink-[0]">
                        <div aria-label="Open" className="items-start flex flex-col h-min justify-center overflow-clip relative w-full bg-[rgb(36,_36,_36)] gap-[10px] p-5">
                          <div aria-label="Question" className="items-center flex h-min justify-between overflow-clip relative w-full shrink-[0]">
                            <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0]">
                              <p className="font-medium text-white text-[20px] leading-[30px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>How long does a typical video project take?</p>
                            </div>
                            <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-4 rotate-45 shrink-[0]">
                              <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7cc50ab84b3abc05e6ca2ba11d88a374140dc28b.svg?generation=1768843023256201&amp;alt=media" className="block size-full" />
                            </div>
                          </div>
                          <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0] opacity-[0.8]">
                            <p className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Most projects are completed within two to three weeks, depending on complexity  and client feedback timelines.</p>
                          </div>
                        </div>
                      </div>
                      <div aria-label="FAQ item" className="relative w-full shrink-[0]">
                        <div aria-label="Close" className="items-start flex flex-col h-min justify-center overflow-clip relative w-full bg-[rgb(36,_36,_36)] gap-[10px] p-5">
                          <div aria-label="Question" className="items-center flex h-min justify-between overflow-clip relative w-full shrink-[0]">
                            <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0]">
                              <p className="font-medium text-white text-[20px] leading-[30px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Do you handle both filming and editing?</p>
                            </div>
                            <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-4 shrink-[0]">
                              <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe0a254ded9296449fa5ae364d45ee8eccd31316f.svg?generation=1768843023361863&amp;alt=media" className="block size-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-label="FAQ item" className="relative w-full shrink-[0]">
                        <div aria-label="Close" className="items-start flex flex-col h-min justify-center overflow-clip relative w-full bg-[rgb(36,_36,_36)] gap-[10px] p-5">
                          <div aria-label="Question" className="items-center flex h-min justify-between overflow-clip relative w-full shrink-[0]">
                            <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0]">
                              <p className="font-medium text-white text-[20px] leading-[30px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Can I request revisions after delivery?</p>
                            </div>
                            <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-4 shrink-[0]">
                              <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe0a254ded9296449fa5ae364d45ee8eccd31316f.svg?generation=1768843023361863&amp;alt=media" className="block size-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-label="FAQ item" className="relative w-full shrink-[0]">
                        <div aria-label="Close" className="items-start flex flex-col h-min justify-center overflow-clip relative w-full bg-[rgb(36,_36,_36)] gap-[10px] p-5">
                          <div aria-label="Question" className="items-center flex h-min justify-between overflow-clip relative w-full shrink-[0]">
                            <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0]">
                              <p className="font-medium text-white text-[20px] leading-[30px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>What industries do you work with?</p>
                            </div>
                            <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-4 shrink-[0]">
                              <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe0a254ded9296449fa5ae364d45ee8eccd31316f.svg?generation=1768843023361863&amp;alt=media" className="block size-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-label="FAQ item" className="relative w-full shrink-[0]">
                        <div aria-label="Close" className="items-start flex flex-col h-min justify-center overflow-clip relative w-full bg-[rgb(36,_36,_36)] gap-[10px] p-5">
                          <div aria-label="Question" className="items-center flex h-min justify-between overflow-clip relative w-full shrink-[0]">
                            <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0]">
                              <p className="font-medium text-white text-[20px] leading-[30px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Do you provide custom pricing options?</p>
                            </div>
                            <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-4 shrink-[0]">
                              <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe0a254ded9296449fa5ae364d45ee8eccd31316f.svg?generation=1768843023361863&amp;alt=media" className="block size-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-label="FAQ item" className="relative w-full shrink-[0]">
                        <div aria-label="Close" className="items-start flex flex-col h-min justify-center overflow-clip relative w-full bg-[rgb(36,_36,_36)] gap-[10px] p-5">
                          <div aria-label="Question" className="items-center flex h-min justify-between overflow-clip relative w-full shrink-[0]">
                            <div className="flex flex-col justify-start relative whitespace-pre-wrap w-[90%] shrink-[0]">
                              <p className="font-medium text-white text-[20px] leading-[30px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>How can I get started with Flixen™?</p>
                            </div>
                            <div aria-label="Icon" role="presentation" className="aspect-square overflow-hidden relative w-4 shrink-[0]">
                              <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe0a254ded9296449fa5ae364d45ee8eccd31316f.svg?generation=1768843023361863&amp;alt=media" className="block size-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
          <div aria-label="Smooth scroll" className="relative">
            <div></div>
          </div>
          <div className="fixed right-5 bottom-[60px] z-[10]">
            <div aria-label="Variant 1" className="items-start flex flex-col justify-start overflow-hidden relative w-[464px] h-[436px] bg-[rgb(0,_7,_43)] gap-[10px] pt-5 pr-5 pb-[300px] pl-5 rounded-[1.25rem]">
              <div className="absolute w-[25px] h-[25px] top-[25px] right-5 z-[1] shrink-[0]">
                <div className="contents">
                  <div className="inline fill-none size-full overflow-hidden">
                    <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7afd09108a80c9ab17426dd091846a28a73bea51.svg?generation=1768843023293524&amp;alt=media" className="inline size-full" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start relative w-full shrink-[0]">
                <h5 className="font-semibold text-left text-white text-[24px] tracking-[-0.48px] leading-[33.6px]" style={{"fontFamily":"\"Inter Display\", \"Inter Display Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Access 1210+ Premium Framer Sections &amp; Components!</h5>
              </div>
              <div className="relative shrink-[0]">
                <a href="https://framify.design/" aria-label="Bottom" className="items-center flex flex-col size-min justify-center relative bg-white/5 text-[rgb(0,_0,_238)] gap-[10px] pt-4 pr-6 pb-4 pl-6 rounded-[7.375rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                  <div aria-label="Glow" className="overflow-hidden absolute left-0 top-0 right-0 bottom-0 blur-[15px] z-[0] shrink-[0] rounded-[4.5rem]" style={{"backgroundImage":"radial-gradient(25% 42.6926% at 74.3077% 69.4304%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)"}}></div>
                  <div aria-label="Stroke" className="overflow-hidden absolute left-0 top-0 right-0 bottom-0 z-[0] shrink-[0] rounded-[4.5rem]" style={{"backgroundImage":"radial-gradient(18.4526% 45.6129% at 74.3077% 69.4304%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)"}}></div>
                  <div aria-label="Fill" className="overflow-hidden absolute left-[2px] top-[2px] right-[2px] bottom-[2px] z-[0] shrink-[0] rounded-[7.125rem]" style={{"backgroundImage":"linear-gradient(115deg, rgb(99, 45, 233) 0%, rgb(9, 195, 246) 100%)"}}></div>
                  <div aria-label="Text" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <p className="font-medium text-white text-[16px] leading-[20.8px]" style={{"fontFamily":"Satoshi, \"Satoshi Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Explore Framify</p>
                  </div>
                </a>
              </div>
              <div aria-label="Content Wrap" className="items-center flex size-min justify-center absolute right-[25px] bottom-[25px] gap-[25px] z-[3] shrink-[0]">
                <div aria-label="Stats" className="items-start flex flex-col size-min justify-center relative gap-[0px] shrink-[0]">
                  <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <p className="font-medium text-white text-[20px] leading-[28px]" style={{"fontFamily":"\"Inter Display\", \"Inter Display Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>926+</p>
                  </div>
                  <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.9]">
                    <p className="text-white text-[16px] leading-[19.2px]" style={{"fontFamily":"Inter, \"Inter Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Sections</p>
                  </div>
                </div>
                <div aria-label="Stats" className="items-start flex flex-col size-min justify-center relative gap-[0px] shrink-[0]">
                  <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <p className="font-medium text-white text-[20px] leading-[28px]" style={{"fontFamily":"\"Inter Display\", \"Inter Display Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>100+</p>
                  </div>
                  <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.9]">
                    <p className="text-white text-[16px] leading-[19.2px]" style={{"fontFamily":"Inter, \"Inter Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Prebuilt Pages</p>
                  </div>
                </div>
                <div aria-label="Stats" className="items-start flex flex-col size-min justify-center relative gap-[0px] shrink-[0]">
                  <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <p className="font-medium text-white text-[20px] leading-[28px]" style={{"fontFamily":"\"Inter Display\", \"Inter Display Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>180+</p>
                  </div>
                  <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.9]">
                    <p className="text-white text-[16px] leading-[19.2px]" style={{"fontFamily":"Inter, \"Inter Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Components</p>
                  </div>
                </div>
                <div aria-label="Stats" className="items-start flex flex-col size-min justify-center relative gap-[0px] shrink-[0]">
                  <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                    <p className="font-medium text-white text-[20px] leading-[28px]" style={{"fontFamily":"\"Inter Display\", \"Inter Display Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>17+</p>
                  </div>
                  <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.9]">
                    <p className="text-white text-[16px] leading-[19.2px]" style={{"fontFamily":"Inter, \"Inter Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Templates</p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden absolute left-0 top-[133px] right-0 bottom-0 z-[2] shrink-[0]" style={{"backgroundImage":"linear-gradient(rgba(0, 7, 43, 0) 0%, rgb(0, 7, 43) 89.1892%)"}}></div>
              <div className="items-start flex size-min justify-center absolute left-5 bottom-[-246px] gap-[5px] z-[1] shrink-[0]">
                <div className="items-center flex flex-col h-min justify-center overflow-hidden relative w-[158px] gap-[5px] z-[1] shrink-[0]">
                  <a href="https://primary-words-404174.framer.app/" aria-label="Img" className="block overflow-hidden relative w-[158px] aspect-[2.06977_/_1] text-[rgb(0,_0,_238)] shrink-[0] rounded-[0.3125rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[0.3125rem]">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F0ab49023f6b6ed97790a4c26dee133cbb7dfc0fd.jpg%3Fscale-down-to=512&amp;width=1366&amp;height=660?generation=1768843023325466&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1366_/_660] rounded-[0.3125rem]" />
                    </div>
                  </a>
                  <a href="https://primary-words-404174.framer.app/" aria-label="Img" className="block overflow-hidden relative w-[158px] aspect-[1.05325_/_1] text-[rgb(0,_0,_238)] shrink-[0] rounded-[0.3125rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[0.3125rem]">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F3115f3cbf44d41e66d5baf5663d5637121c267a7.jpg%3Fscale-down-to=512&amp;width=1366&amp;height=1291?generation=1768843023359841&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1366_/_1291] rounded-[0.3125rem]" />
                    </div>
                  </a>
                  <a href="https://primary-words-404174.framer.app/" aria-label="Img" className="block overflow-hidden relative w-[158px] aspect-[2.73846_/_1] text-[rgb(0,_0,_238)] shrink-[0] rounded-[0.3125rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[0.3125rem]">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Ff5cfd7b92b25173c86189af52c8bfda02b8ff59a.jpg%3Fscale-down-to=512&amp;width=1365&amp;height=531?generation=1768843023335065&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1365_/_531] rounded-[0.3125rem]" />
                    </div>
                  </a>
                  <a href="https://primary-words-404174.framer.app/" aria-label="Img" className="block overflow-hidden relative w-[158px] aspect-[1.83505_/_1] text-[rgb(0,_0,_238)] shrink-[0] rounded-[0.3125rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[0.3125rem]">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F682aeaaab8d3c425885a99844d1ca5f38e8b4db8.jpg%3Fscale-down-to=512&amp;width=1365&amp;height=512?generation=1768843023344543&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1365_/_512] rounded-[0.3125rem]" />
                    </div>
                  </a>
                  <a href="https://primary-words-404174.framer.app/" aria-label="Img" className="block overflow-hidden relative w-[158px] aspect-[1.27143_/_1] text-[rgb(0,_0,_238)] shrink-[0] rounded-[0.3125rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[0.3125rem]">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F0e8c2607d202103a44b8cd01c2750670c7be767e.jpg%3Fscale-down-to=512&amp;width=1366&amp;height=1104?generation=1768843023399658&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1366_/_1104] rounded-[0.3125rem]" />
                    </div>
                  </a>
                </div>
                <div className="items-center flex flex-col h-min justify-center overflow-hidden relative w-[158px] gap-[5px] z-[1] shrink-[0]">
                  <a href="https://primary-words-404174.framer.app/" aria-label="Img" className="block overflow-hidden relative w-[158px] aspect-[1.95604_/_1] text-[rgb(0,_0,_238)] shrink-[0] rounded-[0.3125rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[0.3125rem]">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F185d967c284b00b7f7309aa2b768b0c81ea2848d.jpg%3Fscale-down-to=512&amp;width=1366&amp;height=718?generation=1768843023413605&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1366_/_718] rounded-[0.3125rem]" />
                    </div>
                  </a>
                  <a href="https://primary-words-404174.framer.app/" aria-label="Img" className="block overflow-hidden relative w-[158px] aspect-[1.7451_/_1] text-[rgb(0,_0,_238)] shrink-[0] rounded-[0.3125rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[0.3125rem]">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Faa286f9d1fd36ec79473c1df7336c459b060106c.jpg%3Fscale-down-to=512&amp;width=1366&amp;height=809?generation=1768843023435539&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1366_/_809] rounded-[0.3125rem]" />
                    </div>
                  </a>
                  <a href="https://primary-words-404174.framer.app/" aria-label="Img" className="block overflow-hidden relative w-[158px] aspect-[2.47222_/_1] text-[rgb(0,_0,_238)] shrink-[0] rounded-[0.3125rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[0.3125rem]">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fc300300b5dea9ff1e9795ba8cf991368dfdcd324.jpg%3Fscale-down-to=512&amp;width=1365&amp;height=535?generation=1768843023412520&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1365_/_535] rounded-[0.3125rem]" />
                    </div>
                  </a>
                  <a href="https://primary-words-404174.framer.app/" aria-label="Img" className="block overflow-hidden relative w-[158px] aspect-[2.47222_/_1] text-[rgb(0,_0,_238)] shrink-[0] rounded-[0.3125rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[0.3125rem]">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F451d77752ecd4f4876463e1e7e1e736dc20f575c.jpg%3Fscale-down-to=512&amp;width=1365&amp;height=542?generation=1768843023432336&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1365_/_542] rounded-[0.3125rem]" />
                    </div>
                  </a>
                  <a href="https://primary-words-404174.framer.app/" aria-label="Img" className="block overflow-hidden relative w-[158px] aspect-[1.69524_/_1] text-[rgb(0,_0,_238)] shrink-[0] rounded-[0.3125rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[0.3125rem]">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F352f1425b67d714be100d42253cf83cb3ed2c4c5.jpg%3Fscale-down-to=512&amp;width=1366&amp;height=816?generation=1768843023472022&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1366_/_816] rounded-[0.3125rem]" />
                    </div>
                  </a>
                </div>
                <div className="items-center flex flex-col h-min justify-center overflow-hidden relative w-[158px] gap-[5px] z-[1] shrink-[0]">
                  <a href="https://primary-words-404174.framer.app/" aria-label="Img" className="block overflow-hidden relative w-[158px] aspect-[1.83505_/_1] text-[rgb(0,_0,_238)] shrink-[0] rounded-[0.3125rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[0.3125rem]">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F682aeaaab8d3c425885a99844d1ca5f38e8b4db8.jpg%3Fscale-down-to=512&amp;width=1365&amp;height=512?generation=1768843023344543&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1365_/_512] rounded-[0.3125rem]" />
                    </div>
                  </a>
                  <a href="https://primary-words-404174.framer.app/" aria-label="Img" className="block overflow-hidden relative w-[158px] aspect-[2.73846_/_1] text-[rgb(0,_0,_238)] shrink-[0] rounded-[0.3125rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[0.3125rem]">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Ff5cfd7b92b25173c86189af52c8bfda02b8ff59a.jpg%3Fscale-down-to=512&amp;width=1365&amp;height=531?generation=1768843023335065&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1365_/_531] rounded-[0.3125rem]" />
                    </div>
                  </a>
                  <a href="https://primary-words-404174.framer.app/" aria-label="Img" className="block overflow-hidden relative w-[158px] aspect-[1.27143_/_1] text-[rgb(0,_0,_238)] shrink-[0] rounded-[0.3125rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                    <div className="absolute left-0 top-0 right-0 bottom-0 rounded-[0.3125rem]">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F0e8c2607d202103a44b8cd01c2750670c7be767e.jpg%3Fscale-down-to=512&amp;width=1366&amp;height=1104?generation=1768843023399658&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1366_/_1104] rounded-[0.3125rem]" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="grow relative w-0 h-0 bg-[position:0px_0px]"></div>
        <div className="h-screen relative w-full shrink-[0]" style={{"order":"1002"}}>
          <section aria-label="Desktop" className="items-center flex size-full justify-center overflow-clip relative gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0">
            <div className="absolute left-0 top-0 right-0 bottom-0">
              <img alt="Silhouette of a filmmaker with a camera on a tripod in a dimly lit alley, bathed in orange light and mist, creating a moody, cinematic atmosphere." src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F034782943c0a8b7c7fd2455a1e51d707289a39ec.jpeg%3Fwidth=1280&amp;height=1280?generation=1768843023470915&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_1280_/_1280]" />
            </div>
            <div aria-label="Overlay" className="size-full overflow-clip absolute left-[0%] top-[0%] bg-black z-[1] shrink-[0] opacity-[0.3]"></div>
            <div aria-label="Container" className="items-center flex grow h-min justify-center overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
              <motion.div 
                aria-label="Wrapper" 
                className="items-center flex flex-col grow h-min justify-center overflow-clip relative w-px basis-0 gap-[24px] max-w-[790px] z-[2] shrink-[0]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div aria-label="Section tag" className="relative shrink-[0]">
                  <div aria-label="Section tag" className="items-center flex size-min justify-center overflow-clip relative gap-[8px]">
                    <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="font-medium text-left uppercase text-white text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Lets work together</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start relative w-full shrink-[0]">
                  <h2 className="font-medium text-center text-white text-[44px] tracking-[-1.32px] leading-[46.2px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Ready to bring your vision to life? Let’s create stunning visuals that captivate, inspire, and deliver results.</h2>
                </div>
                <div aria-label="Button wrapper" className="items-center flex h-min justify-center relative w-full gap-[8px] pt-2 pr-0 pb-0 pl-0 shrink-[0]">
                  <div aria-label="Button" className="relative shrink-[0]">
                    <a href="https://primary-words-404174.framer.app/contact-us" aria-label="Small" className="items-center flex size-min justify-start overflow-clip relative bg-[rgb(253,_197,_0)] text-[rgb(0,_0,_238)] gap-[14px] pt-[6px] pr-[6px] pb-[6px] pl-4 rounded-[62.5rem]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                      <div aria-label="Description" className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                        <p className="font-medium text-left uppercase text-black text-[16px] tracking-[-0.16px] leading-[22.4px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>contact us</p>
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
              </motion.div>
            </div>
          </section>
        </div>
        <div className="relative w-full shrink-[0]" style={{"order":"1003"}}>
          <footer aria-label="Footer" className="items-center flex h-min justify-center overflow-clip relative w-full bg-black gap-[8px] pt-[100px] pr-0 pb-8 pl-0">
            <motion.div 
              aria-label="Container" 
              className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div aria-label="Grid 3x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[36px] z-[4] shrink-[0]" style={{"gridTemplateColumns":"repeat(3, minmax(50px, 1fr))"}}>
                <div aria-label="Video" className="self-start size-full justify-self-start relative">
                  <video src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F612d08e29da9284c877d475e2d74c21bf8099207.mp4?generation=1768843023558407&amp;alt=media" className="size-full object-cover overflow-clip"></video>
                </div>
                <div aria-label="Grid 4x" className="self-start grid h-min justify-center justify-self-start relative w-full grid-rows-[repeat(1,min-content)] gap-[8px]" style={{"gridTemplateColumns":"repeat(4, minmax(50px, 1fr))","gridArea":"auto / span 2"}}>
                  <div aria-label="Footer links wrapper" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[20px]">
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                      <p className="font-medium text-left text-white text-[22px] tracking-[-0.44px] leading-[30.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Main Pages</p>
                    </div>
                    <div aria-label="Wrapper" className="items-start flex flex-col h-min justify-center relative w-full gap-[12px] shrink-[0] opacity-[0.9]">
                      <div aria-label="Footer link" className="relative shrink-[0]">
                        <a href="https://primary-words-404174.framer.app/" aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Homepage</p>
                          </div>
                          <div className="flex flex-col justify-start absolute whitespace-pre left-[50%] bottom-[-20px] translate-x-[-50%] z-[1] shrink-[0]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Homepage</p>
                          </div>
                        </a>
                      </div>
                      <div aria-label="Footer link" className="relative shrink-[0]">
                        <a href="https://primary-words-404174.framer.app/about-us" aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>About us</p>
                          </div>
                          <div className="flex flex-col justify-start absolute whitespace-pre left-[50%] bottom-[-20px] translate-x-[-50%] z-[1] shrink-[0]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>About us</p>
                          </div>
                        </a>
                      </div>
                      <div aria-label="Footer link" className="relative shrink-[0]">
                        <a href="https://primary-words-404174.framer.app/contact-us" aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Contact us</p>
                          </div>
                          <div className="flex flex-col justify-start absolute whitespace-pre left-[50%] bottom-[-20px] translate-x-[-50%] z-[1] shrink-[0]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Contact us</p>
                          </div>
                        </a>
                      </div>
                      <div aria-label="Footer link" className="relative shrink-[0]">
                        <a href="https://primary-words-404174.framer.app/404" aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>404</p>
                          </div>
                          <div className="flex flex-col justify-start absolute whitespace-pre left-[50%] bottom-[-20px] translate-x-[-50%] z-[1] shrink-[0]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>404</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div aria-label="Footer links wrapper" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[20px]">
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                      <p className="font-medium text-left text-white text-[22px] tracking-[-0.44px] leading-[30.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>CMS Pages</p>
                    </div>
                    <div aria-label="Wrapper" className="items-start flex flex-col h-min justify-center relative w-full gap-[12px] shrink-[0] opacity-[0.9]">
                      <div aria-label="Footer link" className="relative shrink-[0]">
                        <a href="https://primary-words-404174.framer.app/services" aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Services</p>
                          </div>
                          <div className="flex flex-col justify-start absolute whitespace-pre left-[50%] bottom-[-20px] translate-x-[-50%] z-[1] shrink-[0]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Services</p>
                          </div>
                        </a>
                      </div>
                      <div aria-label="Footer link" className="relative shrink-[0]">
                        <a href="https://primary-words-404174.framer.app/projects" aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Projects</p>
                          </div>
                          <div className="flex flex-col justify-start absolute whitespace-pre left-[50%] bottom-[-20px] translate-x-[-50%] z-[1] shrink-[0]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Projects</p>
                          </div>
                        </a>
                      </div>
                      <div aria-label="Footer link" className="relative shrink-[0]">
                        <a href="https://primary-words-404174.framer.app/blogs" aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Blogs</p>
                          </div>
                          <div className="flex flex-col justify-start absolute whitespace-pre left-[50%] bottom-[-20px] translate-x-[-50%] z-[1] shrink-[0]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Blogs</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div aria-label="Social links wrapper" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[20px]" style={{"gridArea":"auto / span 2"}}>
                    <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                      <p className="font-medium text-left text-white text-[22px] tracking-[-0.44px] leading-[30.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Follow us on</p>
                    </div>
                    <div aria-label="Wrapper" className="items-start flex flex-col h-min justify-start relative w-full gap-[12px] shrink-[0] opacity-[0.9]">
                      <div aria-label="Social link" className="relative w-full shrink-[0]">
                        <a href="https://www.facebook.com/" aria-label="Social link" className="items-center flex h-min justify-between relative w-full text-[rgb(0,_0,_238)]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Facebook</p>
                          </div>
                          <div aria-label="Icon Wrapper" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0] opacity-[0.6]">
                            <div aria-label="Icon" className="aspect-square absolute w-5 left-[-20px] top-[50%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
                            <div aria-label="Icon" className="aspect-square relative w-5 bg-white shrink-[0]"></div>
                          </div>
                        </a>
                      </div>
                      <div className="h-px overflow-clip relative w-full bg-[rgb(68,_68,_68)] shrink-[0]"></div>
                      <div aria-label="Social link" className="relative w-full shrink-[0]">
                        <a href="https://www.instagram.com/" aria-label="Social link" className="items-center flex h-min justify-between relative w-full text-[rgb(0,_0,_238)]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Instagram</p>
                          </div>
                          <div aria-label="Icon Wrapper" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0] opacity-[0.6]">
                            <div aria-label="Icon" className="aspect-square absolute w-5 left-[-20px] top-[50%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
                            <div aria-label="Icon" className="aspect-square relative w-5 bg-white shrink-[0]"></div>
                          </div>
                        </a>
                      </div>
                      <div aria-label="Line" className="h-px overflow-clip relative w-full bg-[rgb(68,_68,_68)] shrink-[0]"></div>
                      <div aria-label="Social link" className="relative w-full shrink-[0]">
                        <a href="https://x.com/home" aria-label="Social link" className="items-center flex h-min justify-between relative w-full text-[rgb(0,_0,_238)]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>X-Twitter</p>
                          </div>
                          <div aria-label="Icon Wrapper" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0] opacity-[0.6]">
                            <div aria-label="Icon" className="aspect-square absolute w-5 left-[-20px] top-[50%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
                            <div aria-label="Icon" className="aspect-square relative w-5 bg-white shrink-[0]"></div>
                          </div>
                        </a>
                      </div>
                      <div aria-label="Line" className="h-px overflow-clip relative w-full bg-[rgb(68,_68,_68)] shrink-[0]"></div>
                      <div aria-label="Social link" className="relative w-full shrink-[0]">
                        <a href="https://dribbble.com/" aria-label="Social link" className="items-center flex h-min justify-between relative w-full text-[rgb(0,_0,_238)]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Dribbble</p>
                          </div>
                          <div aria-label="Icon Wrapper" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0] opacity-[0.6]">
                            <div aria-label="Icon" className="aspect-square absolute w-5 left-[-20px] top-[50%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
                            <div aria-label="Icon" className="aspect-square relative w-5 bg-white shrink-[0]"></div>
                          </div>
                        </a>
                      </div>
                      <div aria-label="Line" className="h-px overflow-clip relative w-full bg-[rgb(68,_68,_68)] shrink-[0]"></div>
                      <div aria-label="Social link" className="relative w-full shrink-[0]">
                        <a href="https://www.youtube.com/" aria-label="Social link" className="items-center flex h-min justify-between relative w-full text-[rgb(0,_0,_238)]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Youtube</p>
                          </div>
                          <div aria-label="Icon Wrapper" className="items-center flex size-min justify-center overflow-hidden relative gap-[8px] shrink-[0] opacity-[0.6]">
                            <div aria-label="Icon" className="aspect-square absolute w-5 left-[-20px] top-[50%] bg-white translate-y-[-50%] z-[1] shrink-[0]"></div>
                            <div aria-label="Icon" className="aspect-square relative w-5 bg-white shrink-[0]"></div>
                          </div>
                        </a>
                      </div>
                      <div aria-label="Line" className="h-px overflow-clip relative w-full bg-[rgb(68,_68,_68)] shrink-[0]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-label="Wrapper" className="items-center flex flex-col h-min justify-center relative w-full gap-[32px] shrink-[0]">
                <div aria-label="Logo" className="items-center flex h-min justify-center relative w-full gap-[8px] shrink-[0]">
                  <div aria-label="Icon" className="aspect-square relative w-[200px] shrink-[0]">
                    <div className="absolute left-0 top-0 right-0 bottom-0">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fdf1ea35df7df9da91ef7b7004a32fec3b03a527c.svg%3Fwidth=42&amp;height=42?generation=1768843022438331&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_42_/_42]" />
                    </div>
                  </div>
                  <div className="flex flex-col grow justify-start overflow-hidden relative whitespace-pre w-px basis-0 shrink-[0]">
                    <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe90c0b6198c4a04d7cdff16579b4a2e6ffcc4b31.svg?generation=1768843023516998&amp;alt=media" className="flex size-full" />
                    <div className="flex flex-col grow justify-start overflow-hidden absolute w-px left-0 top-0 right-0 bottom-0 origin-[0px_0px] basis-0 shrink-[0]" style={{"scale":"0.762"}}>
                      <p className="font-medium uppercase text-white text-[262.446px] tracking-[-7.87339px] leading-[236.202px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Flixen™</p>
                    </div>
                  </div>
                </div>
                <div aria-label="Grid 6x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[8px_36px] pt-[22px] pr-0 pb-0 pl-0 z-[4] shrink-[0] after:border-t after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(68,_68,_68)] after:content-[&quot;&quot;]" style={{"gridTemplateColumns":"repeat(6, minmax(50px, 1fr))"}}>
                  <div aria-label="Copyright" className="items-center self-start flex h-min justify-start justify-self-start overflow-clip relative w-full gap-[8px]" style={{"gridArea":"auto / span 2"}}>
                    <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                      <p className="font-medium text-left text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Flixen ™. All rights reserved.</p>
                    </div>
                  </div>
                  <div aria-label="Template owner" className="items-center self-start flex h-min justify-start justify-self-start overflow-clip relative w-full gap-[8px]" style={{"gridArea":"auto / span 2"}}>
                    <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                      <p className="font-medium text-center text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Made with 🩷 by <a href="https://x.com/xmuhammadtalha" className="text-center text-white" style={{"textDecoration":"rgb(255, 255, 255)"}}>Muhammad talha</a></p>
                    </div>
                  </div>
                  <div aria-label="Made in framer" className="items-center self-start flex h-min justify-end justify-self-start overflow-clip relative w-full gap-[8px]" style={{"gridArea":"auto / span 2"}}>
                    <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                      <p className="font-medium text-center text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>Built in <a href="https://framer.link/mudasir-hussain" className="text-center text-white" style={{"textDecoration":"rgb(255, 255, 255)"}}>Framer</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </footer>
        </div>
      </div>
      <div></div>
    </div>
    <div className="flex justify-end pointer-events-none fixed w-full bottom-0 p-5 z-[2147483647]">
      <a href="https://www.framer.com/" aria-label="Light" className="block relative w-[140px] h-[38px] text-[rgb(0,_0,_238)] gap-[10px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
        <div aria-label="Backdrop" className="bottom-px left-px overflow-hidden absolute right-px top-px bg-white shadow-[rgba(0,0,0,0.17)_0px_0.602187px_1.56569px_-1.5px,_rgba(0,0,0,0.14)_0px_2.28853px_5.95019px_-3px,_rgba(0,0,0,0.02)_0px_10px_26px_-4.5px] rounded-[0.625rem]"></div>
        <div aria-label="Content" className="items-center flex size-min justify-start absolute left-[50%] top-[50%] gap-[10px] translate-x-[-50%] translate-y-[-50%]">
          <div className="relative w-3 h-4 shrink-[0]">
            <div aria-label="Logo" className="absolute w-3 left-[50%] top-[-2px] aspect-[0.6_/_1] bg-black translate-x-[-50%]"></div>
          </div>
          <p className="absolute scale-[0.001_0.001]"></p>
          <div aria-label="Text" className="relative w-[97px] aspect-[9.7_/_1] bg-black shrink-[0]"></div>
        </div>
        <div aria-label="Bottom" className="pointer-events-none absolute left-0 top-0 right-0 bottom-0 shadow-[rgb(0,0,0)_0px_0px_0px_1px_inset] opacity-[0.06] rounded-[0.6875rem]"></div>
        <div aria-label="Border" className="pointer-events-none absolute left-0 top-0 right-0 bottom-0 shadow-[rgb(0,0,0)_0px_0px_0px_1px_inset] opacity-[0.04] rounded-[0.6875rem]"></div>
      </a>
    </div>
    <div className="items-center flex fixed w-max top-[305px] right-[10px] gap-[8px] z-[2147483647]">
      <span aria-label="Edit Framer Content" className="block font-medium h-fit pointer-events-none fixed w-max top-[3.5px] right-10 backdrop-blur-[10px] bg-[rgba(34,_34,_34,_0.8)]/80 shadow-[rgba(0,0,0,0.1)_0px_2px_4px_0px,_rgba(0,0,0,0.05)_0px_1px_0px_0px,_rgba(255,255,255,0.15)_0px_0px_0px_1px] text-white pt-1 pr-2 pb-1 pl-2 shrink-[0] opacity-[0] rounded-lg" style={{"fontFamily":"Inter, Inter-Regular, system-ui, Arial, sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Edit Content</span>
      <button className="items-center flex justify-center w-[30px] h-[30px] backdrop-blur-[10px] bg-[rgba(34,_34,_34,_0.8)]/80 shadow-[rgba(0,0,0,0.1)_0px_2px_4px_0px,_rgba(0,0,0,0.05)_0px_1px_0px_0px,_rgba(255,255,255,0.15)_0px_0px_0px_1px] text-white shrink-[0] rounded-[0.9375rem]" style={{"textDecoration":"rgb(255, 255, 255)"}}>
        <div className="fill-none overflow-hidden w-[14px] h-[14px]">
          <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Feee7ea03eebf0d92318013bb5966236b5c3f4e04.svg?generation=1763130270492733&amp;alt=media" className="block size-full" />
        </div>
      </button>
    </div>
    <div className="h-screen overflow-clip fixed w-screen left-0 top-0 z-[2147483646]" style={{"clipPath":"circle(1px at calc(100% - 20px) calc(50% + 4px))"}}>
      <div className="text-[16px]" style={{"fontFamily":"\"Times New Roman\""}}>
        <div className="overflow-hidden text-[12px] min-h-[640px]" style={{"fontFamily":"Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\""}}>
          <div role="presentation" className="flex">
            <div className="contents">
              <div className="items-center flex flex-col size-full justify-center absolute left-0 top-0 bg-black/70 gap-[10px]">
                <div className="items-center flex flex-col h-min justify-center w-[220px] backdrop-blur-[20px] bg-[rgba(17,_17,_17,_0.9)]/90 shadow-[rgba(255,255,255,0.1)_0px_0px_0px_1px,_rgba(0,0,0,0.2)_0px_10px_20px_0px] gap-[10px] p-[10px] z-[2147483647] shrink-[0] rounded-[1.125rem]">
                  <div className="items-stretch flex flex-col justify-start absolute top-0 right-0 text-[rgb(153,_153,_153)] gap-[10px] p-[15px] shrink-[0]" style={{"textDecoration":"rgb(153, 153, 153)"}}>
                    <div className="fill-none overflow-hidden w-[10px] h-[10px]">
                      <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fd6213320acb9fd6e6ea00fe056aa251840773353.svg?generation=1763130270489910&amp;alt=media" className="block size-full" />
                    </div>
                  </div>
                  <div className="items-center flex flex-col justify-center gap-[15px] p-[10px] shrink-[0]">
                    <img alt="Framer Logo" src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F996827c365f0e29e298290752f7125e20dfcaa88.png?generation=1762002597098169&amp;alt=media" className="block overflow-clip w-9 h-9 aspect-[auto_36_/_36]" />
                    <div className="items-center flex flex-col justify-center gap-[5px] shrink-[0]">
                      <span className="block font-semibold text-center whitespace-pre text-white text-[13px] leading-[15.6px]" style={{"textDecoration":"rgb(255, 255, 255)"}}>Edit Page</span>
                      <p className="text-center text-[rgb(153,_153,_153)] text-[13px] leading-[18.2px]" style={{"textDecoration":"rgb(153, 153, 153)"}}>Edit the page directly in the browser, without opening the app.</p>
                    </div>
                  </div>
                  <div className="items-stretch flex justify-start w-full gap-[10px] shrink-[0]">
                    <div className="w-full">
                      <button className="inline-block font-semibold relative text-center w-full h-[30px] bg-white/15 text-white text-[13px] pb-px pt-0 pr-2 pl-2 rounded-lg" style={{"textDecoration":"rgb(255, 255, 255)"}}>Learn More</button>
                    </div>
                    <div className="w-full">
                      <button className="inline-block font-semibold relative text-center w-full h-[30px] bg-white text-[rgb(34,_34,_34)] text-[13px] pb-px pt-0 pr-2 pl-2 rounded-lg" style={{"textDecoration":"rgb(34, 34, 34)"}}>Continue</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-screen overflow-clip pointer-events-none fixed w-screen left-0 top-0 opacity-[0]">
            <div className="bg-white text-[16px]" style={{"fontFamily":"\"Times New Roman\""}}>
              <div className="bg-white text-[12px]" style={{"fontFamily":"sans-serif"}}>
                <main></main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> );
}
