import { useState, useEffect } from 'react';
import { 
  Building2, 
  GraduationCap, 
  User, 
  LogOut, 
  Plus, 
  Search, 
  Filter,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Users,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Mail,
  Phone,
  Calendar,
  Star,
  TrendingUp,
  BarChart3,
  FileText,
  Settings,
  Bell,
  ChevronDown,
  Download,
  Upload,
  ArrowRight,
  CheckCircle2,
  XCircle as XCircleIcon
} from 'lucide-react';
import { useJobsAuth } from '../contexts/JobsAuthContext';
import JobsAuthModal from '../components/JobsAuthModal';
import JobsLayout from '../components/JobsLayout';
import SEO from '../components/SEO';

const JobsDashboard = () => {
  const { user, userType, isAuthenticated, signOut, loading } = useJobsAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Mock data
  useEffect(() => {
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
        posted: "2024-01-15",
        applicants: 24,
        status: "active"
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
        posted: "2024-01-10",
        applicants: 18,
        status: "active"
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
        posted: "2024-01-12",
        applicants: 31,
        status: "active"
      }
    ];

    const mockApplications = [
      {
        id: 1,
        jobTitle: "Frontend Developer",
        company: "TechCorp Solutions",
        applicantName: "John Doe",
        email: "john@email.com",
        phone: "+1-234-567-8900",
        status: "pending",
        appliedDate: "2024-01-16",
        resume: "resume.pdf"
      },
      {
        id: 2,
        jobTitle: "Backend Developer",
        company: "InnovateLab",
        applicantName: "Jane Smith",
        email: "jane@email.com",
        phone: "+1-234-567-8901",
        status: "reviewed",
        appliedDate: "2024-01-14",
        resume: "resume.pdf"
      }
    ];

    setJobs(mockJobs);
    setApplications(mockApplications);
  }, []);

  const handleAuth = (type) => {
    setShowAuthModal(false);
    // User is now authenticated via context
  };

  const handleLogout = () => {
    signOut();
    setActiveTab('overview');
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || job.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const stats = {
    totalJobs: jobs.length,
    activeJobs: jobs.filter(job => job.status === 'active').length,
    totalApplications: applications.length,
    pendingApplications: applications.filter(app => app.status === 'pending').length
  };

  if (loading) {
    return (
      <JobsLayout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </JobsLayout>
    );
  }

  if (!isAuthenticated) {
    return (
      <JobsLayout>
        <SEO
          title="Jobs Dashboard - JobsPortal"
          description="Access your jobs dashboard to post jobs or find opportunities"
          url="/jobs/dashboard"
        />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-blue-600">JobsPortal</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Choose your role to get started with our professional job platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 cursor-pointer border-2 border-transparent hover:border-blue-200"
                onClick={() => handleAuth('company')}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Building2 className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">I'm a Company</h3>
                  <p className="text-gray-600 mb-6">
                    Post job opportunities and find talented students
                  </p>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Post job listings
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Manage applications
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Connect with students
                    </li>
                  </ul>
                </div>
              </div>

              <div 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 cursor-pointer border-2 border-transparent hover:border-green-200"
                onClick={() => handleAuth('student')}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">I'm a Student</h3>
                  <p className="text-gray-600 mb-6">
                    Find internships and job opportunities
                  </p>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Browse job listings
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Apply to positions
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      Track applications
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button 
                onClick={() => setShowAuthModal(true)}
                className="text-blue-600 hover:text-blue-700 font-medium text-lg"
              >
                Already have an account? Sign in
              </button>
            </div>
          </div>

          <JobsAuthModal 
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            onAuth={handleAuth}
          />
        </div>
      </JobsLayout>
    );
  }

  return (
    <JobsLayout>
      <SEO
        title={`${userType === 'company' ? 'Company' : 'Student'} Dashboard - JobsPortal`}
        description={`Manage your ${userType === 'company' ? 'job postings and applications' : 'job applications and opportunities'}`}
        url="/jobs/dashboard"
      />
      
      <div className="bg-gray-50 min-h-screen">
        {/* Dashboard Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {userType === 'company' ? 'Company' : 'Student'} Dashboard
                </h1>
                <p className="text-gray-600 mt-1">
                  Welcome back! Manage your {userType === 'company' ? 'job postings' : 'job applications'}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-medium text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">{userType === 'company' ? 'Recruiter' : 'Job Seeker'}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:block">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Tabs */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
            <div className="flex flex-wrap">
              {userType === 'company' ? (
                <>
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'overview' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('jobs')}
                    className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'jobs' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Briefcase className="w-4 h-4 mr-2" />
                    My Jobs
                  </button>
                  <button
                    onClick={() => setActiveTab('applications')}
                    className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'applications' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Applications
                  </button>
                  <button
                    onClick={() => setActiveTab('post')}
                    className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'post' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Post New Job
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'overview' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('jobs')}
                    className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'jobs' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Browse Jobs
                  </button>
                  <button
                    onClick={() => setActiveTab('applications')}
                    className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === 'applications' 
                        ? 'border-blue-500 text-blue-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    My Applications
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Jobs</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalJobs}</p>
                    </div>
                    <Briefcase className="w-8 h-8 text-blue-600" />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.activeJobs}</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Applications</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalApplications}</p>
                    </div>
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pending</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.pendingApplications}</p>
                    </div>
                    <Clock className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {applications.slice(0, 3).map((app) => (
                      <div key={app.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{app.applicantName}</p>
                            <p className="text-sm text-gray-600">Applied for {app.jobTitle}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          app.status === 'pending' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {app.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Jobs Tab */}
          {activeTab === 'jobs' && (
            <div className="space-y-6">
              {/* Search and Filter */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
              </div>

              {/* Jobs List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
                        <p className="text-gray-600 font-medium">{job.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {job.type}
                      </span>
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
                        Posted {new Date(job.posted).toLocaleDateString()}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.slice(0, 3).map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{job.applicants} applicants</span>
                      {userType === 'company' ? (
                        <div className="flex gap-2">
                          <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium">
                          Apply Now
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applications Tab */}
          {activeTab === 'applications' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  {userType === 'company' ? 'Job Applications' : 'My Applications'}
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {applications.map((app) => (
                    <div key={app.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900">{app.jobTitle}</h4>
                          <p className="text-sm text-gray-600">{app.company}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          app.status === 'pending' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : app.status === 'reviewed'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {app.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <User className="w-4 h-4 mr-2" />
                          {app.applicantName}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="w-4 h-4 mr-2" />
                          {app.email}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="w-4 h-4 mr-2" />
                          {app.phone}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          Applied {new Date(app.appliedDate).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <a 
                          href={`/resumes/${app.resume}`} 
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          View Resume
                        </a>
                        {userType === 'company' && (
                          <div className="flex gap-2">
                            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium">
                              Accept
                            </button>
                            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium">
                              Reject
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Post Job Tab (Company only) */}
          {activeTab === 'post' && userType === 'company' && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Post a New Job</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Frontend Developer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., Remote, New York, NY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., $60,000 - $80,000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe the role, responsibilities, and requirements..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Required Skills</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., React, JavaScript, CSS (comma separated)"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Post Job
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </JobsLayout>
  );
};

export default JobsDashboard;