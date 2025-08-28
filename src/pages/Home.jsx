import { Globe, Smartphone, Brain, Star, Users, Award, CheckCircle } from 'lucide-react';
import HomeHero from '../sections/HomeHero';
import HomeServices from '../sections/HomeServices';
import HomeStats from '../sections/HomeStats';
import HomeTestimonials from '../sections/HomeTestimonials';
import HomeCta from '../sections/HomeCta';

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: ['React & Next.js', 'Node.js & Express', 'Database Design', 'API Development']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment']
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'AI-powered solutions and predictive analytics to transform your business.',
      features: ['Python & TensorFlow', 'Data Analysis', 'Model Training', 'AI Integration']
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Award },
    { number: '25+', label: 'Happy Clients', icon: Users },
    { number: '4.9', label: 'Client Rating', icon: Star },
    { number: '24/7', label: 'Support Available', icon: CheckCircle }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'RyphTech transformed our business with their innovative web solution. The team is professional, responsive, and delivers exceptional results.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, DataFlow Analytics',
      content: 'Their machine learning expertise helped us build a predictive analytics platform that increased our efficiency by 300%. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, MobileFirst',
      content: 'The mobile app they developed exceeded our expectations. Clean code, great UI/UX, and excellent performance across all devices.',
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      <HomeHero />

      <HomeServices services={services} />

      <HomeStats stats={stats} />

      <HomeTestimonials testimonials={testimonials} />

      <HomeCta />
    </div>
  );
};

export default Home;
