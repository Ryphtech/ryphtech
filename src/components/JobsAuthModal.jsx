import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, EyeOff, Building2, GraduationCap, User, Mail, Lock, Phone, MapPin, Briefcase, Globe } from 'lucide-react';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

const JobsAuthModal = ({ isOpen, onClose, onAuth }) => {
  const [mode, setMode] = useState('login'); // 'login', 'register'
  const [userType, setUserType] = useState('student'); // 'student', 'company'
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: '',
    location: '',
    companyName: '',
    website: '',
    companyDescription: '',
    skills: '',
    experienceLevel: '',
    resumeUrl: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === 'register') {
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match');
          return;
        }

        const userData = {
          fullName: formData.fullName,
          userType: userType,
          phone: formData.phone,
          location: formData.location,
          companyName: userType === 'company' ? formData.companyName : null,
          website: userType === 'company' ? formData.website : null,
          companyDescription: userType === 'company' ? formData.companyDescription : null,
          skills: formData.skills ? formData.skills.split(',').map(s => s.trim()) : [],
          experienceLevel: userType === 'student' ? formData.experienceLevel : null,
          resumeUrl: userType === 'student' ? formData.resumeUrl : null
        };

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        onAuth(userType);
      } else {
        // Simulate login
        await new Promise(resolve => setTimeout(resolve, 1000));
        onAuth(userType);
      }
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      phone: '',
      location: '',
      companyName: '',
      website: '',
      companyDescription: '',
      skills: '',
      experienceLevel: '',
      resumeUrl: ''
    });
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    resetForm();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <BackgroundGradient className="p-8 bg-white dark:bg-dark-800 rounded-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {mode === 'login' ? 'Sign In' : 'Create Account'}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {mode === 'login' 
                    ? 'Welcome back! Sign in to your account' 
                    : 'Join RyphTech Jobs to get started'
                  }
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* User Type Selection */}
            {mode === 'register' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  I am a:
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setUserType('student')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      userType === 'student'
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <GraduationCap className={`w-8 h-8 mx-auto mb-2 ${
                      userType === 'student' ? 'text-primary-600' : 'text-gray-400'
                    }`} />
                    <p className={`font-medium ${
                      userType === 'student' ? 'text-primary-700 dark:text-primary-300' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      Student
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Find jobs & internships
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setUserType('company')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      userType === 'company'
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <Building2 className={`w-8 h-8 mx-auto mb-2 ${
                      userType === 'company' ? 'text-primary-600' : 'text-gray-400'
                    }`} />
                    <p className={`font-medium ${
                      userType === 'company' ? 'text-primary-700 dark:text-primary-300' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      Company
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Post jobs & hire talent
                    </p>
                  </button>
                </div>
              </div>
            )}

            {/* Auth Mode Toggle */}
            <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1 mb-6">
              <button
                onClick={() => switchMode('login')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  mode === 'login'
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => switchMode('register')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  mode === 'register'
                    ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required={mode === 'register'}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-12 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {mode === 'register' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required={mode === 'register'}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Confirm your password"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Additional Fields for Registration */}
              {mode === 'register' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Enter your location"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company-specific fields */}
                  {userType === 'company' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Company Name *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Enter company name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Website
                          </label>
                          <div className="relative">
                            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="url"
                              name="website"
                              value={formData.website}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              placeholder="https://company.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Phone
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              placeholder="Company phone number"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Company Description
                        </label>
                        <textarea
                          name="companyDescription"
                          value={formData.companyDescription}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Tell us about your company..."
                        />
                      </div>
                    </>
                  )}

                  {/* Student-specific fields */}
                  {userType === 'student' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Skills
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            name="skills"
                            value={formData.skills}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="React, JavaScript, Python (comma separated)"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Experience Level
                          </label>
                          <select
                            name="experienceLevel"
                            value={formData.experienceLevel}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="">Select experience level</option>
                            <option value="entry">Entry Level</option>
                            <option value="intern">Intern</option>
                            <option value="junior">Junior (1-2 years)</option>
                            <option value="mid">Mid Level (3-5 years)</option>
                            <option value="senior">Senior (5+ years)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Resume URL
                          </label>
                          <input
                            type="url"
                            name="resumeUrl"
                            value={formData.resumeUrl}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="https://example.com/resume.pdf"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <HoverBorderGradient
                  as="button"
                  type="submit"
                  disabled={loading}
                  containerClassName="w-full"
                  className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      {mode === 'login' ? 'Signing In...' : 'Creating Account...'}
                    </div>
                  ) : (
                    mode === 'login' ? 'Sign In' : 'Create Account'
                  )}
                </HoverBorderGradient>
              </div>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => switchMode(mode === 'login' ? 'register' : 'login')}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {mode === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </BackgroundGradient>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default JobsAuthModal;
