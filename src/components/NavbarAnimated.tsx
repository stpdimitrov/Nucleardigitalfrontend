'use client';

// Navbar Component with Framer Motion enhancements
// CRITICAL: This maintains EXACT visual parity with the original
// Only adds smooth entrance animations - no layout/spacing changes

import { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { slideInTop } from "@/lib/animations";
import { useCMSStore, EditableText } from '../src/cms';
import { siteSettings, mainNavLinks, cmsNavLinks } from '../services/mock-data';

const navMenuLinks = [
  { id: 'nav-home', label: 'Home', href: '/' },
  { id: 'nav-about', label: mainNavLinks[1].label, href: mainNavLinks[1].href },
  { id: cmsNavLinks[0].id, label: cmsNavLinks[0].label, href: cmsNavLinks[0].href },
  { id: cmsNavLinks[1].id, label: cmsNavLinks[1].label, href: cmsNavLinks[1].href },
  { id: cmsNavLinks[2].id, label: cmsNavLinks[2].label, href: cmsNavLinks[2].href },
  { id: 'nav-contact', label: mainNavLinks[2].label, href: mainNavLinks[2].href },
];

export function NavbarAnimated() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isEditMode, getContent, updateContent, persistContent } = useCMSStore();
  const logoUrl = getContent('site.logoUrl', siteSettings.logoUrl);
  const logoHeight = parseInt(getContent('site.logoHeightNavbar', '30'), 10);

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
                <div aria-label="Icon" className="relative w-auto shrink-[0]" style={{ height: logoHeight }}>
                  <img src={logoUrl} className="h-full w-auto object-contain" alt="Logo" />
                </div>
                <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <EditableText
                    contentKey="navbar.siteName"
                    defaultValue={siteSettings.siteName}
                    as="p"
                    className="font-medium uppercase text-white text-[24px] tracking-[-0.72px] leading-[24px]"
                    style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}
                  />
                </div>
              </Link>
              {isEditMode && (
                <div className="absolute top-full left-0 mt-2 z-[9999] flex items-center gap-1.5 rounded-lg bg-black/80 border border-white/10 px-2 py-1 backdrop-blur-sm whitespace-nowrap">
                  <span className="text-[10px] text-white/40 uppercase tracking-wide">Size</span>
                  <input
                    type="range"
                    min={16}
                    max={60}
                    value={logoHeight}
                    onChange={(e) => updateContent('site.logoHeightNavbar', e.target.value)}
                    onMouseUp={() => persistContent()}
                    onTouchEnd={() => persistContent()}
                    className="w-16 accent-[#0099FF]"
                  />
                  <span className="text-[10px] text-white w-6 text-right">{logoHeight}</span>
                </div>
              )}
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
                {navMenuLinks.map((link, index) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={(e) => {
                        if (isEditMode) { e.preventDefault(); return; }
                        setIsMenuOpen(false);
                      }}
                      className="font-medium text-[#999] text-[48px] leading-[56px] tracking-[-1.44px] hover:text-white transition-colors block"
                      style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                    >
                      <EditableText
                        contentKey={`navbar.link.${link.id}`}
                        defaultValue={link.label}
                        as="span"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-between items-center px-8 pb-8 text-white text-[12px]"
              >
                <EditableText
                  contentKey="navbar.footerCopyright"
                  defaultValue="© 2025 Flixen™"
                  as="span"
                />
                <EditableText
                  contentKey="navbar.footerCredit"
                  defaultValue="Made with ❤️ by Muhammad talha"
                  as="span"
                />
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
