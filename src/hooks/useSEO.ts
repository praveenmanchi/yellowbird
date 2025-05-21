// hooks/useSEO.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateMetaTags, SEOData, addStructuredData, personalStructuredData, websiteStructuredData } from '../utils/seo';
import { seoDataByRoute } from '../data/seoData';

interface UseSEOOptions {
  customSEO?: Partial<SEOData>;
  structuredData?: any;
  addPersonalData?: boolean;
  addWebsiteData?: boolean;
}

export const useSEO = (options: UseSEOOptions = {}) => {
  const location = useLocation();
  const { 
    customSEO, 
    structuredData, 
    addPersonalData = false, 
    addWebsiteData = false 
  } = options;

  useEffect(() => {
    // Get base SEO data for current route
    const routeSEO = seoDataByRoute[location.pathname];
    
    if (!routeSEO) {
      console.warn(`No SEO data found for route: ${location.pathname}`);
      return;
    }

    // Merge with custom SEO data
    const finalSEO: SEOData = { ...routeSEO, ...customSEO };
    
    // Update meta tags
    updateMetaTags(finalSEO);

    // Handle structured data
    let finalStructuredData = null;

    if (structuredData) {
      finalStructuredData = structuredData;
    } else if (addPersonalData) {
      finalStructuredData = personalStructuredData;
    } else if (addWebsiteData) {
      finalStructuredData = websiteStructuredData;
    }

    if (finalStructuredData) {
      addStructuredData(finalStructuredData);
    }

    // Clean up function to prevent memory leaks
    return () => {
      // Optional: Remove structured data when component unmounts
      // Usually not necessary as the data will be replaced by the next component
    };
  }, [location.pathname, customSEO, structuredData, addPersonalData, addWebsiteData]);
};

// Specialized hooks for common use cases
export const usePageSEO = (customSEO?: Partial<SEOData>) => {
  useSEO({ customSEO, addWebsiteData: true });
};

export const useProfileSEO = (customSEO?: Partial<SEOData>) => {
  useSEO({ customSEO, addPersonalData: true });
};

export const useArticleSEO = (customSEO?: Partial<SEOData>, articleData?: any) => {
  const structuredData = articleData ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.description,
    "author": {
      "@type": "Person",
      "name": "Praveen Manchi"
    },
    "publisher": {
      "@type": "Person",
      "name": "Praveen Manchi"
    },
    "datePublished": articleData.publishDate,
    "dateModified": articleData.modifiedDate || articleData.publishDate,
    "image": articleData.image,
    "url": articleData.url
  } : null;

  useSEO({ customSEO, structuredData });
};