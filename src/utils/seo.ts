// utils/seo.ts
export interface SEOData {
    title: string;
    description: string;
    keywords: string;
    ogImage?: string;
    ogUrl: string;
    type?: string;
  }
  
  export const updateMetaTags = (seoData: SEOData) => {
    // Update title
    document.title = seoData.title;
    
    // Update meta tags
    const metaTags = [
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords },
      { property: 'og:title', content: seoData.title },
      { property: 'og:description', content: seoData.description },
      { property: 'og:url', content: seoData.ogUrl },
      { property: 'og:type', content: seoData.type || 'website' },
      { name: 'twitter:title', content: seoData.title },
      { name: 'twitter:description', content: seoData.description },
    ];
  
    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    });
  
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.setAttribute('href', seoData.ogUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', seoData.ogUrl);
      document.head.appendChild(canonical);
    }
  
    // Update OG image if provided
    if (seoData.ogImage) {
      const ogImage = document.querySelector('meta[property="og:image"]') as HTMLMetaElement;
      const twitterImage = document.querySelector('meta[name="twitter:image"]') as HTMLMetaElement;
      
      if (ogImage) {
        ogImage.setAttribute('content', seoData.ogImage);
      } else {
        const newOgImage = document.createElement('meta');
        newOgImage.setAttribute('property', 'og:image');
        newOgImage.setAttribute('content', seoData.ogImage);
        document.head.appendChild(newOgImage);
      }
      
      if (twitterImage) {
        twitterImage.setAttribute('content', seoData.ogImage);
      } else {
        const newTwitterImage = document.createElement('meta');
        newTwitterImage.setAttribute('name', 'twitter:image');
        newTwitterImage.setAttribute('content', seoData.ogImage);
        document.head.appendChild(newTwitterImage);
      }
    }
  };
  
  // Structured Data helpers
  export const addStructuredData = (data: any) => {
    // Remove existing structured data
    const existing = document.querySelector('script[type="application/ld+json"]');
    if (existing) {
      existing.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };
  
  export const personalStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Praveen Manchi",
    "jobTitle": "UX/UI Designer",
    "url": "https://www.praveenmanchi.art",
    "description": "UX/UI Designer specializing in AI, IoT, and emerging technologies",
    "image": "https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/home-og.png",
    "alumniOf": {
      "@type": "Organization",
      "name": "Your University" // Replace with your actual education
    },
    "knowsAbout": ["UX Design", "UI Design", "Product Design", "Web Development", "AI", "IoT"],
    "sameAs": [
      // Add your social media URLs here
      // "https://linkedin.com/in/yourprofile",
      // "https://twitter.com/yourhandle",
      // "https://dribbble.com/yourprofile"
    ]
  };
  
  export const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Praveen Manchi Portfolio",
    "url": "https://www.praveenmanchi.art",
    "description": "Portfolio showcasing innovative UX/UI design solutions",
    "author": {
      "@type": "Person",
      "name": "Praveen Manchi"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.praveenmanchi.art/casestudies?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };