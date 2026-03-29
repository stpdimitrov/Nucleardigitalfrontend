import { Link } from 'react-router';
import { EditableText } from './EditableText';
import { EditableLink } from './EditableLink';
import svgPaths from "../../imports/svg-oba3n6vetg";

// Arrow icon component for the Contact Us button
function Component44() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Component 1">
          <path d={svgPaths.pb055200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Component43() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15px]" data-name="Component 4">
      <Component44 />
    </div>
  );
}

function IconMask3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[15px]" data-name="Icon:mask">
      <Component43 />
    </div>
  );
}

function Icons1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="Icons">
      <IconMask3 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-1/2 size-[15px] top-1/2" data-name="Icon" />
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[1000px] shrink-0 size-[32px]" data-name="Icon wrapper">
      <Icons1 />
    </div>
  );
}

export function EditableAwardsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1240px] overflow-clip px-[24px] relative shrink-0 w-full" data-name="Container">
      {/* Header Section */}
      <div className="flex items-start justify-between relative w-full" data-name="Grid 6x">
        {/* Left: Section Tag */}
        <div className="flex flex-col items-start" data-name="Section tag">
          <EditableText
            contentKey="about.awards.sectionTag"
            defaultValue="<p class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[22.4px] text-[14px] text-white tracking-[-0.16px] uppercase'>AWARDS & RECOGNITIONS</p>"
            as="div"
            className=""
          />
        </div>

        {/* Center: Title and Description */}
        <div className="flex flex-col items-start gap-[8px] flex-1 px-[60px]" data-name="Text">
          <EditableText
            contentKey="about.awards.title"
            defaultValue="<h2 class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[50.4px] text-[45px] text-white tracking-[-1.44px]'>Our Achievements</h2>"
            as="div"
            className=""
          />
          <EditableText
            contentKey="about.awards.description"
            defaultValue="<p class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[24px] opacity-70 text-[#ddd] text-[14px] tracking-[-0.32px]'>Proudly recognized for creativity, innovation, and excellence in delivering outstanding video experiences.</p>"
            as="div"
            className=""
            multiline
          />
        </div>

        {/* Right: Contact Button */}
        <EditableLink
          contentKey="about.awards.contactLink"
          defaultValue="/contact-us"
          className="bg-[#fdc500] content-stretch cursor-pointer flex gap-[14px] items-center overflow-clip pl-[16px] pr-[6px] py-[6px] rounded-[1000px] shrink-0"
          data-name="Button → Small"
        >
          <EditableText
            contentKey="about.awards.contactButtonText"
            defaultValue="<p class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[22.4px] text-[14px] text-black tracking-[-0.16px] uppercase'>CONTACT US</p>"
            as="div"
            className=""
          />
          <IconWrapper2 />
        </EditableLink>
      </div>

      {/* Awards Table */}
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Wrapper">
        {/* Table Header */}
        <div className="content-stretch flex gap-[32px] items-start justify-start border-b border-solid border-[#444] pb-[22px] relative shrink-0 w-full" data-name="Grid 6x">
          <div className="flex-[0_0_280px]">
            <EditableText
              contentKey="about.awards.table.header.col1"
              defaultValue="<p class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]'>Awwwards:</p>"
              as="div"
              className=""
            />
          </div>
          <div className="flex-[1_1_0]">
            <EditableText
              contentKey="about.awards.table.header.col2"
              defaultValue="<p class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]'>Description:</p>"
              as="div"
              className=""
            />
          </div>
          <div className="flex-[0_0_100px] text-right">
            <EditableText
              contentKey="about.awards.table.header.col3"
              defaultValue="<p class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]'>Year:</p>"
              as="div"
              className=""
            />
          </div>
        </div>

        {/* Award Row 1 */}
        <div className="content-stretch flex gap-[32px] items-start justify-start border-b border-solid border-[rgba(255,255,255,0.3)] py-[32px] relative shrink-0 w-full" data-name="Awards → Desktop">
          <div className="flex-[0_0_280px]">
            <EditableText
              contentKey="about.awards.award1.title"
              defaultValue="<h3 class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[30.8px] text-[21px] text-white tracking-[-0.44px]'>Best Creative Video Agency</h3>"
              as="div"
              className=""
            />
          </div>
          <div className="flex-[1_1_0] opacity-80">
            <EditableText
              contentKey="about.awards.award1.description"
              defaultValue="<p class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]'>Recognized for producing visually stunning, story-driven videos that inspire audiences and set new creative standards in modern cinematic production.</p>"
              as="div"
              className=""
              multiline
            />
          </div>
          <div className="flex-[0_0_100px] text-right">
            <EditableText
              contentKey="about.awards.award1.year"
              defaultValue="<p class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]'>2025</p>"
              as="div"
              className=""
            />
          </div>
        </div>

        {/* Award Row 2 */}
        <div className="content-stretch flex gap-[32px] items-start justify-start border-b border-solid border-[rgba(255,255,255,0.3)] py-[32px] relative shrink-0 w-full" data-name="Awards → Desktop">
          <div className="flex-[0_0_280px]">
            <EditableText
              contentKey="about.awards.award2.title"
              defaultValue="<h3 class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[30.8px] text-[21px] text-white tracking-[-0.44px]'>Excellence in Cinematic Production</h3>"
              as="div"
              className=""
            />
          </div>
          <div className="flex-[1_1_0] opacity-80">
            <EditableText
              contentKey="about.awards.award2.description"
              defaultValue="<p class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]'>Awarded for exceptional craftsmanship, direction, and storytelling that blend creativity and precision to deliver unforgettable cinematic brand experiences.</p>"
              as="div"
              className=""
              multiline
            />
          </div>
          <div className="flex-[0_0_100px] text-right">
            <EditableText
              contentKey="about.awards.award2.year"
              defaultValue="<p class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]'>2024</p>"
              as="div"
              className=""
            />
          </div>
        </div>

        {/* Award Row 3 */}
        <div className="content-stretch flex gap-[32px] items-start justify-start border-b border-solid border-[rgba(255,255,255,0.3)] py-[32px] relative shrink-0 w-full" data-name="Awards → Desktop">
          <div className="flex-[0_0_280px]">
            <EditableText
              contentKey="about.awards.award3.title"
              defaultValue="<h3 class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[30.8px] text-[21px] text-white tracking-[-0.44px]'>Innovation in Visual Storytelling</h3>"
              as="div"
              className=""
            />
          </div>
          <div className="flex-[1_1_0] opacity-80">
            <EditableText
              contentKey="about.awards.award3.description"
              defaultValue="<p class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]'>Honored for redefining visual storytelling through innovative ideas, artistic direction, and emotional depth that connect audiences with every frame.</p>"
              as="div"
              className=""
              multiline
            />
          </div>
          <div className="flex-[0_0_100px] text-right">
            <EditableText
              contentKey="about.awards.award3.year"
              defaultValue="<p class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]'>2023</p>"
              as="div"
              className=""
            />
          </div>
        </div>

        {/* Award Row 4 */}
        <div className="content-stretch flex gap-[32px] items-start justify-start border-b border-solid border-[rgba(255,255,255,0.3)] py-[32px] relative shrink-0 w-full" data-name="Awards → Desktop">
          <div className="flex-[0_0_280px]">
            <EditableText
              contentKey="about.awards.award4.title"
              defaultValue="<h3 class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[30.8px] text-[21px] text-white tracking-[-0.44px]'>Outstanding Brand Film Award</h3>"
              as="div"
              className=""
            />
          </div>
          <div className="flex-[1_1_0] opacity-80">
            <EditableText
              contentKey="about.awards.award4.description"
              defaultValue="<p class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]'>Celebrated for creating meaningful brand films that combine authenticity, creativity, and emotion to elevate brand presence and audience connection.</p>"
              as="div"
              className=""
              multiline
            />
          </div>
          <div className="flex-[0_0_100px] text-right">
            <EditableText
              contentKey="about.awards.award4.year"
              defaultValue="<p class='font-[&quot;Inter:Medium&quot;,sans-serif] font-medium leading-[24px] text-[#ddd] text-[14px] tracking-[-0.32px]'>2022</p>"
              as="div"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}