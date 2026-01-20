'use client';

// Navbar Component with Framer Motion enhancements
// CRITICAL: This maintains EXACT visual parity with the original
// Only adds smooth entrance animations - no layout/spacing changes

import { motion } from "motion/react";
import { slideInTop } from "@/lib/animations";

export function NavbarAnimated() {
  return (
    <motion.div 
      className="fixed w-full left-[50%] top-0 translate-x-[-50%] z-[10] shrink-[0]" 
      style={{"order":"-1000"}}
      initial="hidden"
      animate="visible"
      variants={slideInTop}
    >
      <nav aria-label="Navbar" className="items-center flex h-min justify-center overflow-clip relative w-full backdrop-blur-[20px] gap-[8px] pt-5 pr-0 pb-5 pl-0 translate-y-[-20px]">
        <div aria-label="Container" className="items-center flex grow h-min justify-between overflow-clip relative w-px basis-0 max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div aria-label="Logo" className="relative shrink-[0]">
            <motion.a 
              href="/" 
              aria-label="Logo" 
              className="items-center flex size-min justify-center relative text-[rgb(0,_0,_238)] gap-[4px]" 
              style={{"textDecoration":"rgb(0, 0, 238)"}}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div aria-label="Icon" className="relative w-[30px] h-[30px] shrink-[0]">
                <div className="absolute left-0 top-0 right-0 bottom-0">
                  <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fdf1ea35df7df9da91ef7b7004a32fec3b03a527c.svg%3Fwidth=42&amp;height=42?generation=1768843022438331&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_42_/_42]" />
                </div>
              </div>
              <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                <p className="font-medium uppercase text-white text-[24px] tracking-[-0.72px] leading-[24px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Flixen™</p>
              </div>
            </motion.a>
          </div>
          <div aria-label="Menu button" className="relative shrink-[0]">
            <motion.div 
              aria-label="Close" 
              className="items-center flex size-min justify-end relative gap-[4px]"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                <p className="font-medium uppercase text-white text-[16px] tracking-[-0.48px] leading-[19.2px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Menu</p>
              </div>
              <div aria-label="Icon" className="aspect-square relative w-6 bg-white shrink-[0]"></div>
            </motion.div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
