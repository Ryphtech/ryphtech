import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  Building2, 
  GraduationCap, 
  ArrowRight, 
  Star,
  CheckCircle,
  Clock,
  MapPin,
  DollarSign,
  Search,
  Filter,
  Plus,
  Eye,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Award,
  Globe,
  Calendar,
  BookOpen,
  ChevronRight,
  Play
} from 'lucide-react';
import JobsLayout from '../components/JobsLayout';
import SEO from '../components/SEO';

const Jobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [stats, setStats] = useState({
    totalJobs: 0,
    activeCompanies: 0,
    successfulPlacements: 0,
    studentConnections: 0
  });

  useEffect(() => {
    // Simulate loading featured jobs
    const mockJobs = [
      {
        id: 1,
        title: "Frontend Developer",
        company: "TechCorp Solutions",
        location: "Remote",
        type: "Full-time",
        salary: "$60,000 - $80,000",
        description: "Join our team to build amazing web applications using React and modern technologies.",
        skills: ["React", "JavaScript", "CSS", "HTML"],
        posted: "2 days ago",
        applicants: 24,
        featured: true
      },
      {
        id: 2,
        title: "Backend Developer",
        company: "InnovateLab",
        location: "New York, NY",
        type: "Full-time",
        salary: "$70,000 - $90,000",
        description: "Work on scalable backend systems and APIs using Node.js and cloud technologies.",
        skills: ["Node.js", "Python", "AWS", "Database"],
        posted: "1 week ago",
        applicants: 18,
        featured: true
      },
      {
        id: 3,
        title: "UI/UX Designer",
        company: "DesignStudio Pro",
        location: "San Francisco, CA",
        type: "Contract",
        salary: "$50,000 - $70,000",
        description: "Create beautiful and intuitive user experiences for our digital products.",
        skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
        posted: "3 days ago",
        applicants: 31,
        featured: true
      },
      {
        id: 4,
        title: "Data Scientist",
        company: "Analytics Inc",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$80,000 - $120,000",
        description: "Analyze complex data sets and build machine learning models for business insights.",
        skills: ["Python", "Machine Learning", "SQL", "Statistics"],
        posted: "5 days ago",
        applicants: 12,
        featured: false
      },
      {
        id: 5,
        title: "Marketing Intern",
        company: "Growth Co",
        location: "Chicago, IL",
        type: "Internship",
        salary: "$15 - $20/hour",
        description: "Support marketing campaigns and learn digital marketing strategies.",
        skills: ["Marketing", "Social Media", "Analytics", "Content Creation"],
        posted: "1 day ago",
        applicants: 45,
        featured: false
      },
      {
        id: 6,
        title: "DevOps Engineer",
        company: "CloudTech",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$90,000 - $130,000",
        description: "Manage cloud infrastructure and deployment pipelines for scalable applications.",
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
        posted: "4 days ago",
        applicants: 8,
        featured: false
      }
    ];

    setFeaturedJobs(mockJobs);
    setStats({
      totalJobs: 156,
      activeCompanies: 89,
      successfulPlacements: 234,
      studentConnections: 1200
    });
  }, []);

  const jobStats = [
    { number: '156+', label: 'Active Jobs', icon: Briefcase, color: 'text-blue-600' },
    { number: '89+', label: 'Partner Companies', icon: Building2, color: 'text-green-600' },
    { number: '234+', label: 'Successful Placements', icon: Award, color: 'text-purple-600' },
    { number: '1.2K+', label: 'Student Connections', icon: Users, color: 'text-orange-600' }
  ];

  const features = [
    {
      icon: Building2,
      title: 'For Companies',
      description: 'Post job opportunities and connect with talented students',
      features: ['Easy job posting', 'Student matching', 'Application management', 'Direct communication'],
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      icon: GraduationCap,
      title: 'For Students',
      description: 'Find internships and job opportunities from top companies',
      features: ['Job discovery', 'Skill matching', 'Application tracking', 'Career guidance'],
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Your data is protected with enterprise-grade security'
    },
    {
      icon: Zap,
      title: 'Fast Matching',
      description: 'AI-powered job matching for better results'
    },
    {
      icon: Target,
      title: 'Precise Targeting',
      description: 'Find the right candidates or opportunities quickly'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with companies and students worldwide'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'TechCorp',
      content: 'JobsPortal helped me find my dream job. The platform is intuitive and the matching is spot-on.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      role: 'HR Director',
      company: 'InnovateLab',
      content: 'We\'ve hired 15 amazing students through this platform. The quality of candidates is outstanding.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Intern',
      company: 'Growth Co',
      content: 'The internship I found here launched my career. Highly recommend to all students.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <JobsLayout>
      <SEO
        title="JobsPortal - Professional Career Platform"
        description="Connect with top companies and find your next career opportunity. Professional job portal for students and companies."
        keywords={[
          'jobs',
          'careers',
          'internships',
          'student jobs',
          'company jobs',
          'job portal',
          'career opportunities',
          'employment',
          'hiring',
          'recruitment'
        ]}
        url="/jobs"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "JobsPortal",
          "description": "Professional career platform connecting students with companies",
          "url": "https://ryphtech.com/jobs"
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 1,200+ Students & 89+ Companies
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your Next
              <span className="text-blue-600 block">Career Opportunity</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with top companies and discover internships, jobs, and career opportunities 
              tailored to your skills and aspirations.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full sm:w-48 pl-12 pr-4 py-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search Jobs
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              {jobStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform makes it easy for students and companies to connect and find the perfect match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className={`p-8 rounded-2xl border-2 ${feature.color}`}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mr-4`}>
                      <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {feature.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Jobs
            </h2>
            <p className="text-xl text-gray-600">
              Discover exciting opportunities from top companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJobs.slice(0, 6).map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 font-medium">{job.company}</p>
                  </div>
                  {job.featured && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    Posted {job.posted}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      +{job.skills.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {job.applicants} applicants
                  </span>
                  <Link 
                    to="/jobs/dashboard" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/jobs/dashboard" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Jobs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose JobsPortal?
            </h2>
            <p className="text-xl text-gray-600">
              We provide the tools and platform you need to succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students and companies already using JobsPortal 
            to connect and build successful careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/jobs/dashboard" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/jobs/dashboard" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse Jobs
              <Eye className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </JobsLayout>
  );
};

export default Jobs;