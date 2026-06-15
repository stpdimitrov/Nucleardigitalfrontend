'use client';
import { Helmet } from 'react-helmet-async';
import { EditableText, EditableCTASection } from '../src/cms';

export function BlogsPage() {
  return (
    <div className="items-center contents h-min justify-start overflow-hidden relative bg-black gap-[0px] min-h-[640px]">
      <Helmet>
        <title>Blog | Nuclear Digital</title>
        <meta name="description" content="Insights, articles, and perspectives on software development, AI, and digital product design from the Nuclear Digital team." />
        <meta property="og:title" content="Blog | Nuclear Digital" />
        <meta property="og:description" content="Insights, articles, and perspectives on software development, AI, and digital product design from the Nuclear Digital team." />
        <meta property="og:url" content="https://www.newcleardigital.com/blogs" />
        <link rel="canonical" href="https://www.newcleardigital.com/blogs" />
      </Helmet>
      <section aria-label="Blogs" className="items-center flex h-screen justify-center overflow-clip relative w-full gap-[8px] pt-[100px] pr-0 pb-[100px] pl-0">
        <div aria-label="Container" className="items-center flex flex-col grow h-min justify-start overflow-clip relative w-px basis-0 gap-[64px] max-w-[1240px] pt-0 pr-6 pb-0 pl-6 shrink-[0]">
          <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
            <EditableText
              contentKey="blogs.heading"
              defaultValue="Blogs"
              as="h1"
              className="font-medium text-center text-white text-[56px] tracking-[-1.68px] leading-[67.2px]"
              style={{"fontFamily":"Ronzino, \"Ronzino Placeholder\", sans-serif"}}
            />
          </div>
          <div className="flex flex-col justify-start relative whitespace-pre-wrap w-full shrink-[0]">
            <EditableText
              contentKey="blogs.subtitle"
              defaultValue="Blogs page content coming soon."
              as="p"
              className="font-medium text-center text-white text-[24px] tracking-[-0.48px] leading-[33.6px]"
              style={{"fontFamily":"\"Apfel Grotezk\", \"Apfel Grotezk Placeholder\", sans-serif"}}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section - Lets work together */}
      <EditableCTASection contentKey="blogs.cta" />
    </div>
  );
}