import SEO from '../components/SEO';
import {
  HeroSection,
  ServicesSection,
  StatsSection,
  TestimonialsSection,
  CTASection
} from '../components/home';


const Home = () => {

  return (
    <>
      <SEO
        title="RyphTech - Modern Web Development & Technology Solutions"
        description="RyphTech delivers cutting-edge web development, mobile apps, and AI solutions. Expert React, Next.js, and machine learning services for modern businesses."
        keywords={[
          'web development',
          'React development',
          'Next.js development',
          'mobile app development',
          'AI solutions',
          'machine learning',
          'software development',
          'technology consulting',
          'digital transformation',
          'custom software'
        ]}
        url="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "RyphTech",
          "url": "https://ryphtech.com",
          "description": "Modern web development and technology solutions",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://ryphtech.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      <div className="">
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
