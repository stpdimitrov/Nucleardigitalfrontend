'use client';

// Navbar Component with Framer Motion enhancements
// CRITICAL: This maintains EXACT visual parity with the original
// Only adds smooth entrance animations - no layout/spacing changes

import { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { Eye, EyeOff } from 'lucide-react';
import { slideInTop } from "@/lib/animations";
import { useCMSStore, SiteLogo, EditableText } from '../src/cms';

const navMenuLinks = [
  { id: 'nav-home', label: 'Home', href: '/' },
  { id: 'nav-about', label: 'About us', href: '/about-us' },
  { id: 'nav-services', label: 'Services', href: '/services' },
  { id: 'nav-projects', label: 'Projects', href: '/projects' },
  { id: 'nav-blogs', label: 'Blogs', href: '/blogs' },
  { id: 'nav-contact', label: 'Contact us', href: '/contact-us' },
];

export function NavbarAnimated() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isEditMode, getContent, updateContent, persistContent } = useCMSStore();

  return (
    <>
      <motion.div
        className="fixed w-full left-[50%] top-0 translate-x-[-50%] z-[200] shrink-[0]"
        style={{"order":"-1000"}}
        initial="hidden"
        animate="visible"
        variants={slideInTop}
      >
        <nav aria-label="Navbar" className="items-center flex h-[60px] justify-center overflow-visible relative w-full backdrop-blur-[20px] gap-[8px] px-0">
          <div aria-label="Container" className="items-center flex grow h-min justify-between overflow-clip relative w-px basis-0 max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
            <div aria-label="Logo" className="flex items-center shrink-[0]">
              <SiteLogo
                heightKey="site.logoHeightNavbar"
                defaultHeight={36}
                minHeight={16}
                maxHeight={100}
                defaultSiteName=""
                defaultLogoUrl=""
              />
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
                {navMenuLinks.map((link, index) => {
                  const pageHidden = getContent(`visibility.page.${link.id}`, 'false') === 'true';
                  if (!isEditMode && pageHidden) return null;
                  return (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-center gap-3 group/pagelink"
                    >
                      <Link
                        to={link.href}
                        onClick={(e) => {
                          if (isEditMode) { e.preventDefault(); return; }
                          setIsMenuOpen(false);
                        }}
                        className={`font-medium text-[48px] leading-[56px] tracking-[-1.44px] hover:text-white transition-colors block ${pageHidden ? 'text-[#555] line-through' : 'text-[#999]'}`}
                        style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                      >
                        <EditableText
                          contentKey={`navbar.link.${link.id}`}
                          defaultValue={link.label}
                          as="span"
                        />
                      </Link>
                      {isEditMode && (
                        <button
                          onClick={() => {
                            updateContent(`visibility.page.${link.id}`, pageHidden ? 'false' : 'true');
                            persistContent();
                          }}
                          className={`opacity-0 group-hover/pagelink:opacity-100 transition-opacity flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ${
                            pageHidden
                              ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                              : 'bg-white/10 text-white/50 hover:text-white hover:bg-white/20'
                          }`}
                        >
                          {pageHidden ? <Eye className="size-3" /> : <EyeOff className="size-3" />}
                          {pageHidden ? 'Show' : 'Hide'}
                        </button>
                      )}
                    </motion.div>
                  );
                })}
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
