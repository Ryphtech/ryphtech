import { useEffect } from 'react';

const SEO = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  canonical,
  noindex = false,
  nofollow = false,
  robots = 'index, follow',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterCreator,
  twitterSite,
}) => {
  const siteName = 'RyphTech';
  const siteUrl = 'https://ryphtech.com'; // Replace with your actual domain
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImageUrl = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}/og-image.jpg`;

  useEffect(() => {
    // Set document title
    if (title) {
      document.title = title;
    }

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: fullImageUrl },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: ogType },
      { property: 'og:site_name', content: siteName },
      { property: 'og:locale', content: 'en_US' },
    ];

    // Set Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: fullImageUrl },
    ];

    if (twitterCreator) twitterTags.push({ name: 'twitter:creator', content: twitterCreator });
    if (twitterSite) twitterTags.push({ name: 'twitter:site', content: twitterSite });

    // Update or create meta tags
    const allTags = [...ogTags, ...twitterTags];
    allTags.forEach(tag => {
      const selector = tag.property ? `meta[property="${tag.property}"]` : `meta[name="${tag.name}"]`;
      let metaTag = document.querySelector(selector);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (tag.property) metaTag.setAttribute('property', tag.property);
        if (tag.name) metaTag.setAttribute('name', tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });

    // Set canonical URL
    if (canonical || fullUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical || fullUrl;
    }

    // Add structured data if provided
    if (structuredData) {
      let script = document.querySelector('script[data-seo-structured-data]');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-structured-data', 'true');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Reset title to default when component unmounts
      document.title = 'RyphTech - Modern Web Development & Technology Solutions';
    };
  }, [
    title,
    description,
    fullImageUrl,
    fullUrl,
    ogType,
    twitterCard,
    twitterCreator,
    twitterSite,
    canonical,
    structuredData
  ]);

  return null; // This component doesn't render anything
};

export default SEO;
