// data/seoData.ts
import { SEOData } from '../utils/seo';

export const seoDataByRoute: Record<string, SEOData> = {
  '/': {
    title: 'Praveen Manchi - UX/UI Designer | Portfolio',
    description: 'Explore my portfolio showcasing innovative UX/UI design solutions in AI, IoT, and emerging technologies. View case studies, design process, and creative work.',
    keywords: 'UX Design, UI Design, Product Design, Web Development, AI, IoT, UX Engineer, Portfolio, Praveen Manchi',
    ogImage: 'https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/home-og.png',
    ogUrl: 'https://www.praveenmanchi.art/',
    type: 'website'
  },
  '/aboutme': {
    title: 'About Me - Praveen Manchi | UX/UI Designer',
    description: 'Learn about my journey as a UX/UI designer, my skills, experience, and passion for creating user-centered solutions. Discover my background and approach to design.',
    keywords: 'About Praveen Manchi, UX Designer Background, UI Designer Experience, Design Skills, User Experience',
    ogImage: 'https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/about-og.png',
    ogUrl: 'https://www.praveenmanchi.art/aboutme',
    type: 'profile'
  },
  '/casestudies': {
    title: 'Case Studies - UX/UI Design Projects | Praveen Manchi',
    description: 'Explore detailed case studies of my UX/UI design projects, showcasing problem-solving, design thinking processes, and real-world solutions for digital products.',
    keywords: 'UX Case Studies, UI Design Projects, Design Process, User Research, Product Design, Design Portfolio',
    ogImage: 'https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/casestudies-og.png',
    ogUrl: 'https://www.praveenmanchi.art/casestudies',
    type: 'website'
  },
  '/blog': {
    title: 'Design Blog - UX/UI Insights | Praveen Manchi',
    description: 'Read my thoughts on UX/UI design, emerging technologies, design industry insights, and best practices. Stay updated with the latest in user experience design.',
    keywords: 'UX Blog, Design Articles, UI Design Tips, Design Insights, Technology Blog, User Experience Writing',
    ogImage: 'https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/blog-og.png',
    ogUrl: 'https://www.praveenmanchi.art/blog',
    type: 'blog'
  },
  '/contact': {
    title: 'Contact Praveen Manchi - UX/UI Designer for Hire',
    description: 'Get in touch with me for design projects, collaborations, consulting, or just to say hello. Available for freelance and full-time opportunities.',
    keywords: 'Contact Praveen Manchi, Hire UX Designer, Design Collaboration, Get in Touch, UX Consultant',
    ogImage: 'https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/contact-og.png',
    ogUrl: 'https://www.praveenmanchi.art/contact',
    type: 'website'
  },
  '/photography': {
    title: 'Photography Portfolio - Visual Arts | Praveen Manchi',
    description: 'Explore my photography work and visual storytelling beyond design. Discover creative perspectives through the lens of a designer.',
    keywords: 'Photography, Visual Arts, Creative Work, Praveen Manchi Photos, Visual Storytelling',
    ogImage: 'https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/photography-og.png',
    ogUrl: 'https://www.praveenmanchi.art/photography',
    type: 'website'
  },
  '/designprocess': {
    title: 'My Design Process - UX Methodology | Praveen Manchi',
    description: 'Learn about my design methodology, approach to problem-solving, and creative process. Understand how I transform ideas into user-centered solutions.',
    keywords: 'Design Process, UX Methodology, Design Thinking, User-Centered Design, Design Framework',
    ogImage: 'https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/process-og.png',
    ogUrl: 'https://www.praveenmanchi.art/designprocess',
    type: 'article'
  },
  // Additional routes that redirect to case studies - give them unique content
  '/design-systems': {
    title: 'Design Systems - UX/UI Projects | Praveen Manchi',
    description: 'Explore my design system projects, component libraries, and scalable design solutions that maintain consistency across digital products.',
    keywords: 'Design Systems, Component Library, UI Components, Design Tokens, Scalable Design',
    ogImage: 'https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/design-systems-og.png',
    ogUrl: 'https://www.praveenmanchi.art/design-systems',
    type: 'website'
  },
  '/product-design': {
    title: 'Product Design Projects - UX/UI Solutions | Praveen Manchi',
    description: 'Discover my product design work, from conception to launch. See how I solve complex user problems through thoughtful design solutions.',
    keywords: 'Product Design, Digital Products, User Experience, Product Strategy, UX Solutions',
    ogImage: 'https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/product-design-og.png',
    ogUrl: 'https://www.praveenmanchi.art/product-design',
    type: 'website'
  },
  '/ux-research': {
    title: 'UX Research Projects - User Experience Studies | Praveen Manchi',
    description: 'Explore my UX research work, user studies, and data-driven design decisions that inform better user experiences.',
    keywords: 'UX Research, User Research, Usability Testing, User Studies, Research Methods',
    ogImage: 'https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/ux-research-og.png',
    ogUrl: 'https://www.praveenmanchi.art/ux-research',
    type: 'website'
  }
};

// Function to get SEO data for dynamic routes
export const getCaseStudySEO = (caseStudyTitle: string, caseStudyDescription: string, caseStudyId: string): SEOData => ({
  title: `${caseStudyTitle} - Case Study | Praveen Manchi`,
  description: caseStudyDescription || `Detailed case study of ${caseStudyTitle} - exploring the design process, challenges, and solutions.`,
  keywords: `${caseStudyTitle}, Case Study, UX Design, UI Design, Product Design, User Experience`,
  ogImage: `https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/casestudy-${caseStudyId}-og.png`,
  ogUrl: `https://www.praveenmanchi.art/casestudies/${caseStudyId}`,
  type: 'article'
});

// Function to get blog post SEO data
export const getBlogPostSEO = (postTitle: string, postDescription: string, postSlug: string): SEOData => ({
  title: `${postTitle} | Praveen Manchi Blog`,
  description: postDescription,
  keywords: `${postTitle}, UX Design, UI Design, Design Blog, User Experience`,
  ogImage: `https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/blog-${postSlug}-og.png`,
  ogUrl: `https://www.praveenmanchi.art/blog/${postSlug}`,
  type: 'article'
});