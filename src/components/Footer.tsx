// Footer Component
// Contains site footer with logo, navigation links, copyright

import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useCMSStore, EditableText, EditableImage } from '../src/cms';
import { SiteLogo } from '../src/cms/SiteLogo';

const mainNavLinks = [
  { id: 'nav-home', label: 'Home', href: '/' },
  { id: 'nav-about', label: 'About us', href: '/about-us' },
  { id: 'nav-contact', label: 'Contact us', href: '/contact-us' },
];

const cmsNavLinks = [
  { id: 'nav-services', label: 'Services', href: '/services' },
  { id: 'nav-projects', label: 'Projects', href: '/projects' },
  { id: 'nav-blogs', label: 'Blogs', href: '/blogs' },
];

const socialLinks: { id: string; label: string; url: string }[] = [
  { id: 'social-instagram', label: 'Instagram', url: '' },
  { id: 'social-twitter', label: 'X-Twitter', url: '' },
  { id: 'social-linkedin', label: 'LinkedIn', url: '' },
  { id: 'social-youtube', label: 'Youtube', url: '' },
];

export function Footer() {
  const { isEditMode, getContent, updateContent, persistContent } = useCMSStore();

  return (
    <div className="relative w-full shrink-[0]" style={{"order":"1003"}}>
      <footer aria-label="Footer" className="items-center flex h-min justify-center overflow-clip relative w-full bg-black gap-[8px] pt-[100px] pr-0 pb-8 pl-0">
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div aria-label="Grid 3x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[36px] z-[4] shrink-[0]" style={{"gridTemplateColumns":"repeat(3, minmax(50px, 1fr))"}}>
            <div aria-label="Video" className="self-start size-full justify-self-start relative">
              <EditableImage
                contentKey="footer.videoUrl"
                defaultSrc=""
                alt="Footer background video"
                className="size-full object-cover overflow-clip"
              />
            </div>
            <div aria-label="Grid 3x" className="self-start grid h-min justify-center justify-self-start relative w-full grid-rows-[repeat(1,min-content)] gap-[8px]" style={{"gridTemplateColumns":"repeat(3, minmax(50px, 1fr))","gridArea":"auto / span 2"}}>
              {/* Main Pages */}
              <div aria-label="Footer links wrapper" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[20px]">
                <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                  <EditableText
                    contentKey="footer.heading.mainPages"
                    defaultValue="Main Pages"
                    as="p"
                    className="font-medium text-left text-white text-[22px] tracking-[-0.44px] leading-[30.8px]"
                    style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}
                  />
                </div>
                <div aria-label="Wrapper" className="items-start flex flex-col h-min justify-center relative w-full gap-[12px] shrink-[0] opacity-[0.9]">
                  {mainNavLinks.map((link) => {
                    const label = getContent(`footer.link.${link.id}`, link.label);
                    return (
                      <div key={link.id} aria-label="Footer link" className="relative shrink-[0]">
                        <Link to={link.href} aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                            <EditableText
                              contentKey={`footer.link.${link.id}`}
                              defaultValue={link.label}
                              as="p"
                              className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]"
                              style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}
                            />
                          </div>
                          <div className="flex flex-col justify-start absolute whitespace-pre left-[50%] bottom-[-20px] translate-x-[-50%] z-[1] shrink-[0]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{label}</p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CMS Pages */}
              <div aria-label="Footer links wrapper" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[20px]">
                <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                  <EditableText
                    contentKey="footer.heading.cmsPages"
                    defaultValue="CMS Pages"
                    as="p"
                    className="font-medium text-left text-white text-[22px] tracking-[-0.44px] leading-[30.8px]"
                    style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}
                  />
                </div>
                <div aria-label="Wrapper" className="items-start flex flex-col h-min justify-center relative w-full gap-[12px] shrink-[0] opacity-[0.9]">
                  {cmsNavLinks.map((link) => {
                    const label = getContent(`footer.link.${link.id}`, link.label);
                    return (
                      <div key={link.id} aria-label="Footer link" className="relative shrink-[0]">
                        <Link to={link.href} aria-label="Footer link" className="items-center flex flex-col size-min justify-center overflow-clip relative text-[rgb(0,_0,_238)] gap-[8px]" style={{"textDecoration":"rgb(0, 0, 238)"}}>
                          <div className="flex flex-col justify-start relative whitespace-pre shrink-[0] opacity-[0.6]">
                            <EditableText
                              contentKey={`footer.link.${link.id}`}
                              defaultValue={link.label}
                              as="p"
                              className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]"
                              style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}
                            />
                          </div>
                          <div className="flex flex-col justify-start absolute whitespace-pre left-[50%] bottom-[-20px] translate-x-[-50%] z-[1] shrink-[0]">
                            <p className="font-medium text-white text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}>{label}</p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div aria-label="Social links wrapper" className="items-start self-start flex flex-col h-min justify-start justify-self-start overflow-clip relative w-full gap-[20px]">
                <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
                  <EditableText
                    contentKey="footer.heading.social"
                    defaultValue="Follow us on"
                    as="p"
                    className="font-medium text-left text-white text-[22px] tracking-[-0.44px] leading-[30.8px]"
                    style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}
                  />
                </div>
                <div aria-label="Wrapper" className="items-start flex flex-col h-min justify-start relative w-full gap-[12px] shrink-[0] opacity-[0.9]">
                  {socialLinks.map((social) => {
                    const label = getContent(`footer.social.${social.id}`, social.label);
                    const url = getContent(`footer.socialUrl.${social.id}`, social.url);
                    return (
                      <div key={social.id} className="w-full">
                        <a
                          href={url}
                          aria-label="Social link"
                          className="flex items-center justify-between w-full py-[12px] group"
                        >
                          <EditableText
                            contentKey={`footer.social.${social.id}`}
                            defaultValue={social.label}
                            as="p"
                            className="font-medium text-white/60 text-[16px] tracking-[-0.32px] leading-[24px] group-hover:text-white transition-colors"
                            style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                          />
                          <ArrowRight className="size-4 text-white/60 group-hover:text-white transition-colors shrink-0" />
                        </a>
                        {isEditMode && (
                          <input
                            key={`url-${social.id}`}
                            type="text"
                            defaultValue={url}
                            onBlur={(e) => {
                              updateContent(`footer.socialUrl.${social.id}`, e.target.value);
                              persistContent();
                            }}
                            className="mb-1 w-full rounded bg-white/10 px-2 py-1 text-xs text-white/60 outline-none focus:bg-white/15 focus:text-white border border-white/10 placeholder:text-white/30"
                            placeholder="Social URL..."
                          />
                        )}
                        <div className="h-px w-full bg-[rgb(68,_68,_68)]" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div aria-label="Wrapper" className="items-center flex flex-col h-min justify-center relative w-full gap-[32px] shrink-[0]">
            <div aria-label="Logo" className="items-center flex h-min justify-center relative w-full gap-[8px] shrink-[0]">
              <SiteLogo
                heightKey="site.logoHeightFooter"
                defaultHeight={48}
                minHeight={24}
                maxHeight={120}
                defaultSiteName=""
                defaultLogoUrl=""
              />
              <div className="flex flex-col grow justify-start overflow-hidden relative whitespace-pre w-px basis-0 shrink-[0]">
                <div className="flex flex-col grow justify-start overflow-hidden absolute w-px left-0 top-0 right-0 bottom-0 origin-[0px_0px] basis-0 shrink-[0]" style={{"scale":"0.762"}}>
                  <EditableText
                    contentKey="footer.brandName"
                    defaultValue=""
                    as="p"
                    className="font-medium uppercase text-white text-[262.446px] tracking-[-7.87339px] leading-[236.202px]"
                    style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif","textDecoration":"rgb(255, 255, 255)"}}
                  />
                </div>
              </div>
            </div>
            <div aria-label="Grid 6x" className="grid h-min justify-center overflow-clip relative w-full grid-rows-[repeat(1,min-content)] gap-[8px_36px] pt-[22px] pr-0 pb-0 pl-0 z-[4] shrink-[0] after:border-t after:size-full after:pointer-events-none after:absolute after:left-0 after:top-0 after:border-[rgb(68,_68,_68)] after:content-[&quot;&quot;]" style={{"gridTemplateColumns":"repeat(6, minmax(50px, 1fr))"}}>
              <div aria-label="Copyright" className="items-center self-start flex h-min justify-start justify-self-start overflow-clip relative w-full gap-[8px]" style={{"gridArea":"auto / span 2"}}>
                <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                  <EditableText
                    contentKey="footer.copyright"
                    defaultValue=""
                    as="p"
                    className="font-medium text-left text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]"
                    style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}
                  />
                </div>
              </div>
              <div aria-label="Template owner" className="items-center self-start flex h-min justify-start justify-self-start overflow-clip relative w-full gap-[8px]" style={{"gridArea":"auto / span 2"}}>
                <div className="flex flex-col grow justify-start relative whitespace-pre-wrap w-px basis-0 shrink-[0]">
                  <p className="font-medium text-center text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]" style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif","textDecoration":"rgb(221, 221, 221)"}}>
                    <EditableText
                      contentKey="footer.creditPrefix"
                      defaultValue=""
                      as="span"
                      className="font-medium text-[rgb(221,_221,_221)] text-[16px] tracking-[-0.32px] leading-[24px]"
                      style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                    />{' '}
                    <a href={getContent('footer.creditUrl', '')} className="text-center text-white" style={{"textDecoration":"rgb(255, 255, 255)"}}>
                      <EditableText
                        contentKey="footer.creditName"
                        defaultValue=""
                        as="span"
                        className="text-white"
                        style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
                      />
                    </a>
                  </p>
                  {isEditMode && (
                    <input
                      type="text"
                      defaultValue={getContent('footer.creditUrl', '')}
                      onBlur={(e) => {
                        updateContent('footer.creditUrl', e.target.value);
                        persistContent();
                      }}
                      className="mt-1 w-full rounded bg-white/10 px-2 py-1 text-xs text-white/60 outline-none focus:bg-white/15 focus:text-white border border-white/10 placeholder:text-white/30"
                      placeholder="Credit URL..."
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
