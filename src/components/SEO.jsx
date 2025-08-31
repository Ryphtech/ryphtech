import { Helmet } from 'react-helmet-async';

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

  const metaTags = [
    // Basic meta tags
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { name: 'author', content: author },
    { name: 'robots', content: robots },
    
    // Open Graph tags
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: fullImageUrl },
    { property: 'og:url', content: fullUrl },
    { property: 'og:type', content: ogType },
    { property: 'og:site_name', content: siteName },
    { property: 'og:locale', content: 'en_US' },
    
    // Twitter Card tags
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: fullImageUrl },
  ];

  // Add optional Twitter tags
  if (twitterCreator) metaTags.push({ name: 'twitter:creator', content: twitterCreator });
  if (twitterSite) metaTags.push({ name: 'twitter:site', content: twitterSite });

  // Add article-specific meta tags
  if (type === 'article') {
    if (publishedTime) metaTags.push({ property: 'article:published_time', content: publishedTime });
    if (modifiedTime) metaTags.push({ property: 'article:modified_time', content: modifiedTime });
    if (section) metaTags.push({ property: 'article:section', content: section });
    if (author) metaTags.push({ property: 'article:author', content: author });
    tags.forEach(tag => metaTags.push({ property: 'article:tag', content: tag }));
  }

  // Add noindex/nofollow if specified
  if (noindex || nofollow) {
    const robotsValue = [];
    if (noindex) robotsValue.push('noindex');
    if (nofollow) robotsValue.push('nofollow');
    metaTags.push({ name: 'robots', content: robotsValue.join(', ') });
  }

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={canonical || fullUrl} />
      
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Default structured data for organization */}
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RyphTech",
            "url": siteUrl,
            "logo": `${siteUrl}/logo.png`,
            "description": "Modern web development and technology solutions",
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
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
