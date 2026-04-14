// Mock data for Flixen™ application
// CRITICAL: This data EXACTLY matches the static content in App.tsx
// DO NOT modify without ensuring 100% visual parity

import type {
  Project,
  ClientLogo,
  Service,
  ServiceFeature,
  WhyChooseUsItem,
  ProcessStep,
  PricingPlan,
  FAQ,
  Testimonial,
  NavLink,
  SocialLink,
  HeroContent,
  SiteSettings,
  HomepageData,
  ContactUsPageData,
  ContactHeroContent,
  ContactFormConfig,
  ContactFormField,
  ContactInfo,
  SocialMediaLink,
  ContactCardsContent,
  MapConfig,
} from '../types';

// ============================================
// SITE SETTINGS
// ============================================

export const siteSettings: SiteSettings = {
  siteName: "Flixen™",
  tagline: "Create cinematic visuals that captivate every audience",
  logoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fdf1ea35df7df9da91ef7b7004a32fec3b03a527c.svg%3Fwidth=42&height=42?generation=1768843022438331&alt=media",
  footerVideoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F612d08e29da9284c877d475e2d74c21bf8099207.mp4?generation=1768843023558407&alt=media",
  copyrightText: "Flixen ™. All rights reserved.",
  creditText: "Made with 🩷 by Muhammad talha",
  creditUrl: "https://x.com/xmuhammadtalha",
  builtWithText: "Built in Framer",
  builtWithUrl: "https://framer.link/mudasir-hussain",
};

// ============================================
// NAVIGATION
// ============================================

export const mainNavLinks: NavLink[] = [
  { id: "nav-home", label: "Homepage", href: "/" },
  { id: "nav-about", label: "About us", href: "/about-us" },
  { id: "nav-contact", label: "Contact us", href: "/contact-us" },
  { id: "nav-404", label: "404", href: "/404" },
];

export const cmsNavLinks: NavLink[] = [
  { id: "nav-services", label: "Services", href: "/services" },
  { id: "nav-projects", label: "Projects", href: "/projects" },
  { id: "nav-blogs", label: "Blogs", href: "/blogs" },
];

export const socialLinks: SocialLink[] = [
  { id: "social-facebook", platform: "Facebook", label: "Facebook", url: "https://www.facebook.com/" },
  { id: "social-instagram", platform: "Instagram", label: "Instagram", url: "https://www.instagram.com/" },
  { id: "social-twitter", platform: "X-Twitter", label: "X-Twitter", url: "https://x.com/home" },
  { id: "social-dribbble", platform: "Dribbble", label: "Dribbble", url: "https://dribbble.com/" },
  { id: "social-youtube", platform: "Youtube", label: "Youtube", url: "https://www.youtube.com/" },
];

// ============================================
// PROJECTS
// ============================================

export const projects: Project[] = [
  {
    id: "project-1",
    slug: "lumen-brew",
    name: "Lumen Brew",
    title: "Lumen Brew",
    description: "Created a cinematic video showcasing the warmth, craftsmanship, and storytelling behind Lumen Brew Coffee.",
    videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F64b0a1a53a864523488081e7312ff8fe5ffcdfc5.mp4?generation=1768843022678820&alt=media",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F64b0a1a53a864523488081e7312ff8fe5ffcdfc5.mp4?generation=1768843022678820&alt=media",
    service: "Video Production",
    category: "Video Production",
    date: "Nov 4, 2025",
    client: "Lumen Coffee Co.",
    overview: "Lumen Coffee Co. wanted to express the artistry and care that define their brewing process. We developed a concept centered on storytelling through motion — from the first bean roast to the final pour. Using natural light, close-up cinematography, and ambient soundscapes, the film communicates the brand's dedication to slow, thoughtful craftsmanship. Every detail, from color tone to pacing, was designed to evoke warmth, community, and authenticity. The video became the brand's core marketing asset, setting a new visual standard for their online and retail presence.",
    process: "Our process began with pre-production planning, where we storyboarded the visual flow and mood. Filming took place across two days in the café's ambient setting, capturing organic moments of coffee brewing, customer interactions, and brand lifestyle. During post-production, we emphasized cinematic tone and texture through color grading and sound design. The pacing was intentionally slow, mirroring the rhythm of artisanal brewing. Collaborating closely with the client ensured every visual aligned with their story — celebrating detail, patience, and authenticity. The result was a piece that felt as handcrafted as the coffee itself.",
    result: "The final film became a centerpiece for Lumen Coffee Co.'s online presence, featured across their website and social campaigns. The cinematic storytelling approach increased viewer engagement and helped strengthen the emotional connection with their audience. Sales rose following the campaign launch, and the brand received strong praise for its elevated visual identity. The video was later showcased in local creative exhibitions, highlighting its artistry and effectiveness in brand communication. Lumen Brew not only captured the beauty of the product but also redefined how handcrafted experiences could be told through motion.",
  },
  {
    id: "project-2",
    slug: "pulse-drive",
    name: "Pulse Drive",
    title: "Pulse Drive",
    description: "High-energy automotive campaign capturing speed, precision, and innovation.",
    videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F4baea21278109afdf6ad52b7f1bc92064c750bfc.mp4?generation=1768843022831653&alt=media",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F4baea21278109afdf6ad52b7f1bc92064c750bfc.mp4?generation=1768843022831653&alt=media",
    service: "Creative Direction",
    category: "Creative Direction",
    date: "Apr 10, 2025",
  },
  {
    id: "project-3",
    slug: "echo-frames",
    name: "Echo Frames",
    title: "Echo Frames",
    description: "Artistic exploration of movement and sound through visual storytelling.",
    videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7166c66f8f1b9ba340b0f978dd8b91a152a53f34.mp4?generation=1768843022674074&alt=media",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7166c66f8f1b9ba340b0f978dd8b91a152a53f34.mp4?generation=1768843022674074&alt=media",
    service: "Video Production",
    category: "Video Production",
    date: "Aug 4, 2024",
  },
  {
    id: "project-4",
    slug: "waveline",
    name: "Waveline",
    title: "Waveline",
    description: "Dynamic brand film showcasing fluid motion and modern aesthetics.",
    videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe5aaf449795958d028fcd4c74c04f17b42566998.mp4?generation=1768843022845391&alt=media",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe5aaf449795958d028fcd4c74c04f17b42566998.mp4?generation=1768843022845391&alt=media",
    service: "Post-Production & Editing",
    category: "Post-Production",
    date: "Dec 19, 2023",
  },
  {
    id: "project-5",
    slug: "noir-threads",
    name: "Noir Threads",
    title: "Noir Threads",
    description: "Fashion-forward cinematography blending elegance with bold creativity.",
    videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F5cba97d1c8d90adbe24a83c6153eec57a5f594c1.mp4?generation=1768843022814400&alt=media",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F5cba97d1c8d90adbe24a83c6153eec57a5f594c1.mp4?generation=1768843022814400&alt=media",
    service: "Creative Direction",
    category: "Creative Direction",
    date: "Oct 18, 2022",
  },
  {
    id: "project-6",
    slug: "auralis",
    name: "Auralis",
    title: "Auralis",
    description: "Ethereal visual journey combining light, color, and cinematic excellence.",
    videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fc56a53f96b5a5696fdb5c3660cf3328d3973d852.mp4?generation=1768843022788930&alt=media",
    image: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fc56a53f96b5a5696fdb5c3660cf3328d3973d852.mp4?generation=1768843022788930&alt=media",
    service: "Video Production",
    category: "Video Production",
    date: "Jun 22, 2021",
  },
];

// ============================================
// CLIENT LOGOS
// ============================================

export const clientLogos: ClientLogo[] = [
  {
    id: "client-1",
    name: "Client Logo 1",
    logoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Faa475ae7b3ce6f0265af828c69123f4ee331a8b7.svg%3Fwidth=103&height=27?generation=1768843022445777&alt=media",
    aspectRatio: "auto_103_/_27",
  },
  {
    id: "client-2",
    name: "Client Logo 2",
    logoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F54d554ef76931a754367f50ad0cbfb64058db66c.svg%3Fwidth=245&height=41?generation=1768843022436901&alt=media",
    aspectRatio: "auto_245_/_41",
  },
  {
    id: "client-3",
    name: "Client Logo 3",
    logoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F8bca30d4e162466aac4650551d3c9c51cafba5f8.svg%3Fwidth=223&height=40?generation=1768843022403265&alt=media",
    aspectRatio: "auto_223_/_40",
  },
  {
    id: "client-4",
    name: "Client Logo 4",
    logoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fd7824d1c7808ec9a1b3cc3150b9d773d09d69996.svg%3Fwidth=222&height=40?generation=1768843022421450&alt=media",
    aspectRatio: "auto_222_/_40",
  },
  {
    id: "client-5",
    name: "Client Logo 5",
    logoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F45abf7d594d7e70a510b6f4e4e7a468708e081ff.svg%3Fwidth=216&height=40?generation=1768843022430922&alt=media",
    aspectRatio: "auto_216_/_40",
  },
  {
    id: "client-6",
    name: "Client Logo 6",
    logoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F852ff016a44f4eedb1c0292e6cd078fb30b02432.svg%3Fwidth=214&height=40?generation=1768843022414691&alt=media",
    aspectRatio: "auto_214_/_40",
  },
  {
    id: "client-7",
    name: "Client Logo 7",
    logoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fa2816dd6a0ede7ea3a884b8992f556a867a53348.svg%3Fwidth=221&height=40?generation=1768843022614308&alt=media",
    aspectRatio: "auto_221_/_40",
  },
  {
    id: "client-8",
    name: "Client Logo 8",
    logoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F475eb9652537fe79cd34840d13a78e9bd421f411.svg%3Fwidth=207&height=40?generation=1768843022621850&alt=media",
    aspectRatio: "auto_207_/_40",
  },
];

// ============================================
// SERVICES
// ============================================

const videoProductionFeatures: ServiceFeature[] = [
  { id: "vp-1", name: "Commercials" },
  { id: "vp-2", name: "Brand Films" },
  { id: "vp-3", name: "Product Videos" },
  { id: "vp-4", name: "Corporate Shoots" },
  { id: "vp-5", name: "Event Coverage" },
];

const creativeDirectionFeatures: ServiceFeature[] = [
  { id: "cd-1", name: "Concept Development" },
  { id: "cd-2", name: "Scriptwriting" },
  { id: "cd-3", name: "Storyboarding" },
  { id: "cd-4", name: "Art Direction" },
  { id: "cd-5", name: "Campaign Planning" },
];

const postProductionFeatures: ServiceFeature[] = [
  { id: "pp-1", name: "Video Editing" },
  { id: "pp-2", name: "Color Grading" },
  { id: "pp-3", name: "Motion Graphics" },
  { id: "pp-4", name: "Sound Design" },
  { id: "pp-5", name: "Visual Effects" },
];

export const services: Service[] = [
  {
    id: "service-1",
    title: "Video Production",
    description: "We handle every stage from concept to filming, creating  visuals that capture emotion and inspire audiences.",
    videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F5e0f4c9c4b7be63e83a8e86c3f1f1ae9a84b3f49.mp4?generation=1768843022870330&alt=media",
    features: videoProductionFeatures,
  },
  {
    id: "service-2",
    title: "Creative Direction",
    description: "Our team brings bold ideas to life, shaping stories that resonate and campaigns that stand out in the market.",
    videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F10afc99bc25de72e6d8e3f5fa2a3f8af08befc3a.mp4?generation=1768843022839062&alt=media",
    features: creativeDirectionFeatures,
  },
  {
    id: "service-3",
    title: "Post-Production & Editing",
    description: "We refine raw footage into polished masterpieces, adding the finishing touches that make every frame unforgettable.",
    videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb88a7e2734745330d3a44aa73c74bb06cdb5c26c.mp4?generation=1768843022755903&alt=media",
    features: postProductionFeatures,
  },
];

// ============================================
// WHY CHOOSE US
// ============================================

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: "why-1",
    number: "01",
    title: "Cinematic Excellence",
    description: "We don't just record moments—we craft stories with depth, emotion, and stunning visuals that captivate audiences.",
  },
  {
    id: "why-2",
    number: "02",
    title: "End-to-End Service",
    description: "From initial concept to final edit, we manage every detail, ensuring a seamless, stress-free creative experience for you.",
  },
  {
    id: "why-3",
    number: "03",
    title: "Tailored Solutions",
    description: "Every project is unique. We customize our approach to match your brand's vision, audience, and goals perfectly.",
  },
  {
    id: "why-4",
    number: "04",
    title: "Cutting-Edge Technology",
    description: "We use state-of-the-art cameras, lighting, and editing software to deliver premium, industry-leading video quality.",
  },
  {
    id: "why-5",
    number: "05",
    title: "Creative Collaboration",
    description: "Our team works closely with you, valuing your input and vision to bring creative ideas to life together.",
  },
  {
    id: "why-6",
    number: "06",
    title: "Proven Track Record",
    description: "With years of experience and a portfolio of satisfied clients, we consistently deliver results that exceed expectations.",
  },
];

// ============================================
// PROCESS STEPS
// ============================================

export const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    iconUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F2d19a7558351148bb498cd608cda2251e2741011.svg?generation=1768843023016993&alt=media",
    title: "Connect",
    description: "We start by understanding your vision, goals, and project needs through a detailed consultation and creative discussion.",
  },
  {
    id: "step-2",
    iconUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fc60ee956254c0dbc6acd89f56f96c0de1a1ff63b.svg?generation=1768843023018748&alt=media",
    title: "Create",
    description: "Our team brings ideas to life with expert filming, storytelling, and meticulous attention to every creative detail and shot.",
  },
  {
    id: "step-3",
    iconUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fc60ee956254c0dbc6acd89f56f96c0de1a1ff63b.svg?generation=1768843023018748&alt=media",
    title: "Launch",
    description: "After final edits and your approval, we deliver stunning videos ready to inspire audiences and elevate your brand instantly.",
  },
];

// ============================================
// PRICING PLANS
// ============================================

export const pricingPlans: PricingPlan[] = [
  {
    id: "plan-1",
    name: "Starter Plan",
    price: "$1,500",
    period: "per project",
    description: "Perfect for small businesses and startups needing high-quality video content on a budget.",
    isPopular: true,
    features: [
      { id: "plan1-f1", text: "Up to 3 minutes of edited video", included: true },
      { id: "plan1-f2", text: "Basic color grading", included: true },
      { id: "plan1-f3", text: "Standard music library", included: true },
      { id: "plan1-f4", text: "1 round of revisions", included: true },
      { id: "plan1-f5", text: "2-week delivery", included: true },
      { id: "plan1-f6", text: "Motion graphics", included: false },
    ],
    ctaText: "Contact us",
    ctaUrl: "/contact-us",
  },
  {
    id: "plan-2",
    name: "Professional Plan",
    price: "$3,500",
    period: "per project",
    description: "Ideal for growing brands requiring premium cinematic quality and creative direction.",
    features: [
      { id: "plan2-f1", text: "Up to 5 minutes of edited video", included: true },
      { id: "plan2-f2", text: "Advanced color grading", included: true },
      { id: "plan2-f3", text: "Custom music & sound design", included: true },
      { id: "plan2-f4", text: "3 rounds of revisions", included: true },
      { id: "plan2-f5", text: "1-week delivery", included: true },
      { id: "plan2-f6", text: "Motion graphics & VFX", included: true },
    ],
    ctaText: "Contact us",
    ctaUrl: "/contact-us",
  },
  {
    id: "plan-3",
    name: "Enterprise Plan",
    price: "Custom",
    period: "tailored pricing",
    description: "Comprehensive solutions for large campaigns, including full production and post-production services.",
    features: [
      { id: "plan3-f1", text: "Unlimited video length", included: true },
      { id: "plan3-f2", text: "Full creative direction", included: true },
      { id: "plan3-f3", text: "Dedicated project manager", included: true },
      { id: "plan3-f4", text: "Unlimited revisions", included: true },
      { id: "plan3-f5", text: "Priority delivery", included: true },
      { id: "plan3-f6", text: "All advanced features", included: true },
    ],
    ctaText: "Contact us",
    ctaUrl: "/contact-us",
  },
];

// ============================================
// FAQ
// ============================================

export const faqItems: FAQ[] = [
  {
    id: "faq-1",
    question: "What types of video projects do you handle?",
    answer: "We handle a wide range of projects including commercials, brand films, product videos, corporate shoots, event coverage, and more. Our team is equipped to manage projects of all sizes and complexities.",
  },
  {
    id: "faq-2",
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Starter projects typically take 2 weeks, Professional projects 1 week, and Enterprise projects are custom-scheduled. We always work to meet your deadlines.",
  },
  {
    id: "faq-3",
    question: "Do you provide scriptwriting and creative direction?",
    answer: "Yes! Our Creative Direction service includes concept development, scriptwriting, storyboarding, art direction, and campaign planning. We work closely with you to bring your vision to life.",
  },
  {
    id: "faq-4",
    question: "What equipment do you use?",
    answer: "We use state-of-the-art professional cameras, lighting equipment, and editing software to ensure the highest quality results. Our gear includes cinema-grade cameras, professional lighting kits, and industry-standard post-production tools.",
  },
  {
    id: "faq-5",
    question: "How many revisions are included?",
    answer: "Our Starter Plan includes 1 round of revisions, Professional Plan includes 3 rounds, and Enterprise Plan includes unlimited revisions. Additional revisions beyond the plan limit can be arranged if needed.",
  },
  {
    id: "faq-6",
    question: "Can you work with our existing brand guidelines?",
    answer: "Absolutely! We specialize in creating content that aligns perfectly with your brand identity, guidelines, and vision. We'll work closely with your team to ensure consistency across all deliverables.",
  },
];

// ============================================
// TESTIMONIALS
// ============================================

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Liam Carter",
    role: "CEO, Nova Media",
    company: "Client Satisfaction",
    quote: "The Flixen™ team is reliable, fast, and detail-oriented. Every frame felt intentional and beautifully crafted with creativity and care.",
    rating: "10x",
    imageUrl: "figma:asset/7e73c7aabad20943e4272bca350bb8114758102b.png",
  },
  {
    id: "testimonial-2",
    name: "Sofia Lane",
    role: "Content Strategist",
    company: "Engagement Boost",
    quote: "Flixen™ brought our campaign to life with storytelling and visuals that matched our brand tone and expectations.",
    rating: "3x",
    imageUrl: "figma:asset/4b463d6fb2243401ecb681d36cb89dcaf0c09986.png",
  },
  {
    id: "testimonial-3",
    name: "Ethan Ross",
    role: "Creative Producer",
    company: "Brand Growth",
    quote: "Working with Flixen™ was effortless. They understood our vision instantly and delivered visuals that elevated our brand story.",
    rating: "5x",
    imageUrl: "figma:asset/92e2965cd21a86fe0952e28b698ba606d7a53405.png",
  },
];

// ============================================
// HERO CONTENT
// ============================================

export const heroContent: HeroContent = {
  title: "Create cinematic visuals that captivate every audience",
  imageUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F90322362c9ba13d2653aa3ef4d89e79643dc092d.png%3Fwidth=1536&height=1024?generation=1768843022421906&alt=media",
  videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fc9ff2d7236821117c4faa28f56d63a4f06c5b37d.mp4?generation=1768843022528431&alt=media",
};

// ============================================
// HOMEPAGE DATA
// ============================================

export const homepageData: HomepageData = {
  hero: heroContent,
  introduction: {
    title: "We craft cinematic visuals that inspire audiences, elevate storytelling,  and empower brands to create meaningful, lasting impressions  through seamless video production experiences.",
    description: "Contact us to start your next project",
  },
  clients: clientLogos,
  featuredProjects: projects,
  aboutUs: {
    title: "Bringing Stories to Life, Frame by Frame",
    description: "At Flixen, we believe every brand has a story worth telling. Our mission is to transform ideas into captivating visual narratives that resonate with audiences and leave lasting impressions. With a passion for cinematic excellence and years of expertise, we partner with businesses to create videos that inspire, engage, and elevate brands across industries.",
    imageUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fb78f23653961282fd6252e62cd8283d6c0057af5.jpeg%3Fwidth=1280&height=1280?generation=1768843022673805&alt=media",
    ctaText: "About us",
    ctaUrl: "/about-us",
  },
  services: services,
  whyChooseUs: whyChooseUsItems,
  process: {
    title: "How we work",
    description: "Our streamlined process ensures quality results",
    steps: processSteps,
  },
  pricing: {
    title: "Pricing plan",
    description: "Choose the perfect plan for your project needs",
    plans: pricingPlans,
  },
  faq: {
    title: "Frequently Asked Questions",
    items: faqItems,
  },
  testimonials: testimonials,
};

// ============================================
// CONTACT US PAGE DATA
// ============================================

export const contactUsPageData: ContactUsPageData = {
  id: "contact-us-page",
  hero: {
    id: "contact-hero",
    sectionTag: "CONTACT US",
    heading: "Let's Connect",
    description: [
      "Connect with our team for collaborations,",
      "inquiries, and creative opportunities."
    ],
    scrollDownText: "Scroll down",
    coverImage: "figma:asset/f0ab34e01eb7a68a97d2f698b486de3693299155.png",
    coverImageAlt: "Silhouette of a camera operator filming on a professional set"
  },
  form: {
    id: "contact-form",
    fields: [
      {
        id: "field-name",
        label: "Your name:",
        placeholder: "Jane Smith",
        type: "text",
        name: "name",
        required: true
      },
      {
        id: "field-email",
        label: "Email Address",
        placeholder: "testing@gmail.com",
        type: "email",
        name: "email",
        required: true
      },
      {
        id: "field-service",
        label: "Select Services",
        placeholder: "Select…",
        type: "select",
        name: "service",
        required: false,
        options: ["Video Production", "Creative Direction", "Post-Production & Editing"]
      },
      {
        id: "field-message",
        label: "Message",
        placeholder: "Write your message here...",
        type: "textarea",
        name: "message",
        required: true
      }
    ],
    submitButtonText: "SUBMIT"
  },
  map: {
    id: "contact-map",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.4326!2d-118.37!3d34.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA1JzI0LjAiTiAxMTjCsDIyJzEyLjAiVw!5e0!3m2!1sen!2sus!4v1234567890",
    height: "650px",
    title: "Office Location Map"
  },
  cards: {
    id: "contact-cards",
    contactCard: {
      title: "Contact us",
      contacts: [
        {
          id: "contact-phone",
          type: "phone",
          icon: "phone",
          label: "Phone",
          value: "+1 (310) 458-9274",
          href: undefined
        },
        {
          id: "contact-email",
          type: "email",
          icon: "email",
          label: "Email",
          value: "name@email.com",
          href: "mailto:name@email.com"
        },
        {
          id: "contact-location",
          type: "location",
          icon: "location",
          label: "Location",
          value: "Los Angeles, CA",
          href: "https://www.google.com/maps/search/92+Crescent+Avenue,+Los+Angeles,+CA/@34.0892625,-118.3685139,578m/data=!3m2!1e3!4b1"
        }
      ]
    },
    socialCard: {
      title: "Follow us on",
      links: [
        {
          id: "social-dribbble",
          platform: "Dribbble",
          url: "https://dribbble.com/"
        },
        {
          id: "social-twitter",
          platform: "Twitter-X",
          url: "https://x.com/home"
        },
        {
          id: "social-linkedin",
          platform: "Linkedin",
          url: "https://www.linkedin.com/"
        }
      ]
    },
    officeCard: {
      title: "Visit our Office",
      globeImage: "figma:asset/e55f19621fc993b2cbf97f430d52ffb48c20a89a.png",
      globeImageAlt: "Spinning globe illustration"
    }
  }
};