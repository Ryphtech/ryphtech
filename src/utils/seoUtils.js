// SEO Utility Functions

// Generate structured data for different page types
export const generateStructuredData = (type, data) => {
  const baseUrl = 'https://ryphtech.com';
  
  switch (type) {
    case 'organization':
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RyphTech",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "description": "Modern web development and technology solutions",
        "foundingDate": "2023",
        "sameAs": [
          "https://twitter.com/ryphtech",
          "https://linkedin.com/company/ryphtech",
          "https://github.com/ryphtech"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-0123",
          "contactType": "customer service",
          "email": "contact@ryphtech.com"
        }
      };

    case 'website':
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "RyphTech",
        "url": baseUrl,
        "description": "Modern web development and technology solutions",
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      };

    case 'service':
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.name || "Technology Services",
        "provider": {
          "@type": "Organization",
          "name": "RyphTech"
        },
        "description": data.description || "Web development, mobile app development, and AI solutions",
        "serviceType": data.serviceTypes || ["Web Development", "Mobile App Development", "AI/ML Solutions"],
        "areaServed": "Worldwide"
      };

    case 'article':
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.title,
        "description": data.description,
        "image": data.image,
        "author": {
          "@type": "Organization",
          "name": "RyphTech"
        },
        "publisher": {
          "@type": "Organization",
          "name": "RyphTech",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
          }
        },
        "datePublished": data.publishedDate,
        "dateModified": data.modifiedDate || data.publishedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${baseUrl}${data.url}`
        }
      };

    case 'project':
      return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": data.title,
        "description": data.description,
        "image": data.image,
        "creator": {
          "@type": "Organization",
          "name": "RyphTech"
        },
        "dateCreated": data.createdDate,
        "url": `${baseUrl}${data.url}`,
        "genre": data.category || "Technology"
      };

    default:
      return null;
  }
};

// Generate meta keywords based on content
export const generateKeywords = (primaryKeywords, secondaryKeywords = []) => {
  const baseKeywords = [
    'RyphTech',
    'web development',
    'technology solutions',
    'software development'
  ];
  
  return [...baseKeywords, ...primaryKeywords, ...secondaryKeywords];
};

// Generate canonical URL
export const generateCanonicalUrl = (path) => {
  const baseUrl = 'https://ryphtech.com';
  return `${baseUrl}${path}`;
};

// Generate Open Graph image URL
export const generateOGImageUrl = (imagePath) => {
  const baseUrl = 'https://ryphtech.com';
  return imagePath ? `${baseUrl}${imagePath}` : `${baseUrl}/og-image.jpg`;
};

// Performance optimization utilities
export const preloadCriticalResources = () => {
  // Preload critical CSS and fonts
  const criticalResources = [
    '/src/index.css',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.includes('.css') ? 'style' : 'font';
    link.crossOrigin = resource.startsWith('http') ? 'anonymous' : '';
    document.head.appendChild(link);
  });
};

// Lazy loading utility for images
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// SEO-friendly URL generation
export const generateSEOFriendlyUrl = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Generate breadcrumb structured data
export const generateBreadcrumbData = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://ryphtech.com${crumb.url}`
    }))
  };
};

// Generate FAQ structured data
export const generateFAQData = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
