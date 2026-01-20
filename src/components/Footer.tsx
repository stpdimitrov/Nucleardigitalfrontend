// Footer Component - Extracted from shared footer across all pages
// CRITICAL: This returns the EXACT JSX structure from the original
// DO NOT modify class names, inline styles, or structure
// Source: App.tsx lines ~2024-2217

export function Footer() {
  return (
    <div className="relative w-full shrink-[0]" style={{"order":"1003"}}>
      <footer aria-label="Footer" className="items-center flex h-min justify-center overflow-clip relative w-full bg-black gap-[8px] pt-[100px] pr-0 pb-8 pl-0">
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div aria-label="Grid 3x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[36px] z-[4] shrink-[0]" style={{"gridTemplateColumns":"repeat(3, minmax(50px, 1fr))"}}>
            <div aria-label="Video" className="self-start size-full justify-self-start relative">
              <video src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F612d08e29da9284c877d475e2d74c21bf8099207.mp4?generation=1768843023558407&alt=media" className="size-full object-cover overflow-clip"></video>
            </div>
            <div aria-label="Grid 4x" className="self-start grid h-min justify-center justify-self-start relative w-full grid-rows-[repeat(1,min-content)] gap-[8px]" style={{"gridTemplateColumns":"repeat(4, minmax(50px, 1fr))","gridArea":"auto / span 2"}}>
              <div aria-label="Footer links wrapper" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[20px]">
                <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                  <p className="font-medium text-left text-white text-[22px] tracking-[-0.44px] leading-[30.8px]" style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Main Pages</p>
                </div>
                <div aria-label="Wrapper" className="items-start flex flex-col h-min justify-center relative w-full gap-[12px] shrink-[0] opacity-[0.9]">
                  <div aria-label="Footer link" className="relative shrink-[0]">
                    <a href="/" aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                      <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                        <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Homepage</p>
                      </div>
                      <div className="flex flex-col justify-start absolute whitespace-pre left-[50%] bottom-[-20px] translate-x-[-50%] z-[1] shrink-[0]">
                        <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Homepage</p>
                      </div>
                    </a>
                  </div>
                  <div aria-label="Footer link" className="relative shrink-[0]">
                    <a href="/about-us" aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                      <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                        <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>About us</p>
                      </div>
                      <div className="flex flex-col justify-start absolute whitespace-pre left-[50%] bottom-[-20px] translate-x-[-50%] z-[1] shrink-[0]">
                        <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>About us</p>
                      </div>
                    </a>
                  </div>
                  <div aria-label="Footer link" className="relative shrink-[0]">
                    <a href="/contact-us" aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                      <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                        <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Contact us</p>
                      </div>
                      <div className="flex flex-col justify-start absolute whitespace-pre left-[50%] bottom-[-20px] translate-x-[-50%] z-[1] shrink-[0]">
                        <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Contact us</p>
                      </div>
                    </a>
                  </div>
                  <div aria-label="Footer link" className="relative shrink-[0]">
                    <a href="/404" aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
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
                    <a href="/services" aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                      <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                        <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Services</p>
                      </div>
                      <div className="flex flex-col justify-start absolute whitespace-pre left-[50%] bottom-[-20px] translate-x-[-50%] z-[1] shrink-[0]">
                        <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Services</p>
                      </div>
                    </a>
                  </div>
                  <div aria-label="Footer link" className="relative shrink-[0]">
                    <a href="/projects" aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                      <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                        <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Projects</p>
                      </div>
                      <div className="flex flex-col justify-start absolute whitespace-pre left-[50%] bottom-[-20px] translate-x-[-50%] z-[1] shrink-[0]">
                        <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>Projects</p>
                      </div>
                    </a>
                  </div>
                  <div aria-label="Footer link" className="relative shrink-[0]">
                    <a href="/blogs" aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
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
        </div>
      </footer>
    </div>
  );
}
