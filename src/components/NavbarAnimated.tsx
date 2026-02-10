'use client';

// Navbar Component with Framer Motion enhancements
// CRITICAL: This maintains EXACT visual parity with the original
// Only adds smooth entrance animations - no layout/spacing changes

import { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { slideInTop } from "@/lib/animations";

export function NavbarAnimated() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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
              <Link 
                to="/" 
                aria-label="Logo" 
                className="items-center flex size-min justify-center relative text-[rgb(0,_0,_238)] gap-[4px]" 
                style={{"textDecoration":"rgb(0, 0, 238)"}}
              >
                <div aria-label="Icon" className="relative w-[30px] h-[30px] shrink-[0]">
                  <div className="absolute left-0 top-0 right-0 bottom-0">
                    <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fdf1ea35df7df9da91ef7b7004a32fec3b03a527c.svg%3Fwidth=42&amp;height=42?generation=1768843022438331&amp;alt=media" className="block size-full object-cover overflow-clip aspect-[auto_42_/_42]" />
                  </div>
                </div>
                <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <p className="font-medium uppercase text-white text-[24px] tracking-[-0.72px] leading-[24px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Flixen™</p>
                </div>
              </Link>
            </div>
            <div aria-label="Menu button" className="relative shrink-[0]">
              <motion.button
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu" 
                className="items-center flex size-min justify-end relative gap-[4px] cursor-pointer bg-transparent border-none"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <p className="font-medium uppercase text-white text-[16px] tracking-[-0.48px] leading-[19.2px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Menu</p>
                </div>
                <div aria-label="Icon" className="aspect-square relative w-6 shrink-[0] flex flex-col justify-center gap-[4px]">
                  <div className="w-full h-[2px] bg-white"></div>
                  <div className="w-full h-[2px] bg-white"></div>
                </div>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Right Side Menu Panel */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="fixed right-0 top-0 bottom-0 w-[40%] bg-black z-[100] flex flex-col justify-between"
            >
              {/* Close Button */}
              <div className="absolute top-8 right-6 z-10">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 cursor-pointer bg-transparent border-none text-white"
                >
                  <span className="font-medium uppercase text-[16px] tracking-[-0.48px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>Close</span>
                  <span className="text-[32px] leading-[24px]">×</span>
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col justify-center h-full pl-[88px] gap-[16px]">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link 
                    to="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className="font-medium text-[#999] text-[48px] leading-[56px] tracking-[-1.44px] hover:text-white transition-colors block"
                    style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                  >
                    Home
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <Link 
                    to="/about-us" 
                    onClick={() => setIsMenuOpen(false)}
                    className="font-medium text-[#999] text-[48px] leading-[56px] tracking-[-1.44px] hover:text-white transition-colors block"
                    style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                  >
                    About us
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link 
                    to="/services" 
                    onClick={() => setIsMenuOpen(false)}
                    className="font-medium text-[#999] text-[48px] leading-[56px] tracking-[-1.44px] hover:text-white transition-colors block"
                    style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                  >
                    Services
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <Link 
                    to="/projects" 
                    onClick={() => setIsMenuOpen(false)}
                    className="font-medium text-[#999] text-[48px] leading-[56px] tracking-[-1.44px] hover:text-white transition-colors block"
                    style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                  >
                    Projects
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link 
                    to="/blogs" 
                    onClick={() => setIsMenuOpen(false)}
                    className="font-medium text-[#999] text-[48px] leading-[56px] tracking-[-1.44px] hover:text-white transition-colors block"
                    style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                  >
                    Blogs
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  <Link 
                    to="/contact-us" 
                    onClick={() => setIsMenuOpen(false)}
                    className="font-medium text-[#999] text-[48px] leading-[56px] tracking-[-1.44px] hover:text-white transition-colors block"
                    style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                  >
                    Contact us
                  </Link>
                </motion.div>
              </div>

              {/* Footer */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-between items-center px-8 pb-8 text-white text-[12px]"
              >
                <span>© 2025 Flixen™</span>
                <span>Made with ❤️ by Muhammad talha</span>
              </motion.div>
            </motion.div>

            {/* Overlay to darken left side */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black z-[99]"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}