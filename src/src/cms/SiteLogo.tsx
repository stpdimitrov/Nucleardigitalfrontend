// Shared site logo component — used in navbar, footer, and inline sections.
// All instances share the same CMS keys for image, name, and size.

import { useCMSStore } from './cmsStore';
import { EditableText } from './EditableText';

interface SiteLogoProps {
  /** CMS key for height. Defaults to 'site.logoHeightNavbar' */
  heightKey?: string;
  defaultHeight?: number;
  minHeight?: number;
  maxHeight?: number;
  /** Wrap in an anchor? Pass href to enable. */
  href?: string;
  defaultLogoUrl?: string;
  defaultSiteName?: string;
}

export function SiteLogo({
  heightKey = 'site.logoHeightNavbar',
  defaultHeight = 36,
  minHeight = 16,
  maxHeight = 100,
  href = '/',
  defaultLogoUrl = 'https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fdf1ea35df7df9da91ef7b7004a32fec3b03a527c.svg%3Fwidth=42&height=42?generation=1768843022438331&alt=media',
  defaultSiteName = 'Nuclear Digital',
}: SiteLogoProps) {
  const { isEditMode, getContent, updateContent, persistContent } = useCMSStore();
  const logoUrl = getContent('site.logoUrl', defaultLogoUrl);
  const logoHeight = parseInt(getContent(heightKey, String(defaultHeight)), 10);
  const fontSize = Math.round(logoHeight * 0.4);

  const logoMark = (
    <div className="flex items-center gap-[4px]">
      <div className="relative shrink-0" style={{ width: logoHeight, height: logoHeight }}>
        <div className="absolute inset-0">
          <img src={logoUrl} className="w-full h-full object-contain" alt="Logo" />
        </div>
      </div>
      <div className="flex flex-col justify-start relative whitespace-pre shrink-[0]">
        <EditableText
          contentKey="navbar.siteName"
          defaultValue={defaultSiteName}
          as="p"
          className="font-medium uppercase text-white tracking-[-0.72px]"
          style={{
            fontFamily: 'Ronzino, "Ronzino Placeholder", sans-serif',
            fontSize,
            lineHeight: `${fontSize}px`,
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="flex items-center gap-2 shrink-0">
      {href ? (
        <a href={href} aria-label="Logo" className="flex items-center">
          {logoMark}
        </a>
      ) : (
        logoMark
      )}

      {isEditMode && (
        <div className="flex items-center gap-1.5 rounded-lg bg-black/80 border border-white/10 px-2 py-1 backdrop-blur-sm whitespace-nowrap shrink-0">
          <span className="text-[10px] text-white/40 uppercase tracking-wide">Size</span>
          <input
            type="range"
            min={minHeight}
            max={maxHeight}
            value={logoHeight}
            onChange={(e) => updateContent(heightKey, e.target.value)}
            onMouseUp={() => persistContent()}
            onTouchEnd={() => persistContent()}
            className="w-16 accent-[#0099FF]"
          />
          <span className="text-[10px] text-white w-6 text-right">{logoHeight}</span>
        </div>
      )}
    </div>
  );
}
