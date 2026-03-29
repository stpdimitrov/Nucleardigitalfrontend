// Navbar Component
// Contains site navigation and logo
// Source: App.tsx lines ~39-156

import { useState } from 'react';
import { Link } from 'react-router';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed w-full left-[50%] top-0 translate-x-[-50%] z-[10] shrink-[0]" style={{"order":"-1000"}}>
        <nav aria-label="Navbar" className="items-center flex h-min justify-center overflow-clip relative w-full backdrop-blur-[20px] gap-[8px] pt-5 pr-0 pb-5 pl-0 translate-y-[-20px]">
          <div aria-label="Container" className="items-center flex grow h-min justify-between overflow-clip relative w-px basis-0 max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
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
            <div aria-label="Menu button" className="relative shrink-[0]">
              <button 
                onClick={() => setIsMenuOpen(true)}
                aria-label="Close" 
                className="items-center flex size-min justify-end relative gap-[4px] cursor-pointer bg-transparent border-none"
              >
                <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
                  <p className="font-medium uppercase text-white text-[16px] tracking-[-0.48px] leading-[19.2px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Menu</p>
                </div>
                <div aria-label="Icon" className="aspect-square relative w-6 bg-white shrink-[0]"></div>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col">
          {/* Close Button */}
          <div className="absolute top-8 right-6">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 cursor-pointer bg-transparent border-none text-white"
            >
              <span className="font-medium uppercase text-[16px] tracking-[-0.48px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}>Close</span>
              <span className="text-[24px]">×</span>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col justify-center items-start pl-[88px] h-full gap-[24px]">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-[#999] text-[80px] leading-[88px] tracking-[-2.4px] hover:text-white transition-colors"
              style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
            >
              Home
            </Link>
            <Link 
              to="/about-us" 
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-[#999] text-[80px] leading-[88px] tracking-[-2.4px] hover:text-white transition-colors"
              style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
            >
              About us
            </Link>
            <Link 
              to="/services" 
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-[#999] text-[80px] leading-[88px] tracking-[-2.4px] hover:text-white transition-colors"
              style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
            >
              Services
            </Link>
            <Link 
              to="/projects" 
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-[#999] text-[80px] leading-[88px] tracking-[-2.4px] hover:text-white transition-colors"
              style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
            >
              Projects
            </Link>
            <Link 
              to="/blogs" 
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-[#999] text-[80px] leading-[88px] tracking-[-2.4px] hover:text-white transition-colors"
              style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
            >
              Blogs
            </Link>
            <Link 
              to="/contact-us" 
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-[#999] text-[80px] leading-[88px] tracking-[-2.4px] hover:text-white transition-colors"
              style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}