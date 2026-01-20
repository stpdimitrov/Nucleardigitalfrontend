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
} from '@/types';

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
    videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F64b0a1a53a864523488081e7312ff8fe5ffcdfc5.mp4?generation=1768843022678820&alt=media",
    service: "Video Production",
    date: "Nov 4, 2025",
  },
  {
    id: "project-2",
    slug: "pulse-drive",
    name: "Pulse Drive",
    videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F4baea21278109afdf6ad52b7f1bc92064c750bfc.mp4?generation=1768843022831653&alt=media",
    service: "Creative Direction",
    date: "Apr 10, 2025",
  },
  {
    id: "project-3",
    slug: "echo-frames",
    name: "Echo Frames",
    videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F7166c66f8f1b9ba340b0f978dd8b91a152a53f34.mp4?generation=1768843022674074&alt=media",
    service: "Video Production",
    date: "Aug 4, 2024",
  },
  {
    id: "project-4",
    slug: "waveline",
    name: "Waveline",
    videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fe5aaf449795958d028fcd4c74c04f17b42566998.mp4?generation=1768843022845391&alt=media",
    service: "Post-Production & Editing",
    date: "Dec 19, 2023",
  },
  {
    id: "project-5",
    slug: "noir-threads",
    name: "Noir Threads",
    videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F5cba97d1c8d90adbe24a83c6153eec57a5f594c1.mp4?generation=1768843022814400&alt=media",
    service: "Creative Direction",
    date: "Oct 18, 2022",
  },
  {
    id: "project-6",
    slug: "auralis",
    name: "Auralis",
    videoUrl: "https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2Fc56a53f96b5a5696fdb5c3660cf3328d3973d852.mp4?generation=1768843022788930&alt=media",
    service: "Video Production",
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
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp Inc.",
    quote: "Flixen transformed our brand story into a cinematic masterpiece. Their attention to detail and creative vision exceeded our expectations.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateLabs",
    quote: "Working with Flixen was seamless from start to finish. They understood our vision and delivered a product video that truly captures our innovation.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Emma Williams",
    role: "Brand Manager",
    company: "Lifestyle Co.",
    quote: "The team at Flixen is incredibly talented and professional. They brought our campaign to life with stunning visuals and compelling storytelling.",
    rating: 5,
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
