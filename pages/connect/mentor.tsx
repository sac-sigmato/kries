import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { UserCheck, Mail, Lock, Eye, EyeOff, Heart, Users, Award, BookOpen, Star, CheckCircle } from 'lucide-react';

const MentorConnect: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Registration form state
  const [regData, setRegData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    profession: '',
    company: '',
    experience: '',
    expertise: [] as string[],
    education: '',
    linkedin: '',
    availability: '',
    mentorshipAreas: [] as string[],
    motivation: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Mock login/registration logic - replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (isLogin) {
        alert('Mentor login functionality will be implemented soon!');
      } else {
        if (regData.password !== regData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        alert('Mentor application submitted successfully! We will review your application and contact you within 5 business days.');
      }
    } catch (error: any) {
      setError(error.message || 'Operation failed');
    } finally {
      setLoading(false);
    }
  };

  const mentorStats = [
    { icon: Users, number: "200+", label: "Active Mentors" },
    { icon: Heart, number: "1,500+", label: "Students Mentored" },
    { icon: Award, number: "95%", label: "Success Rate" },
    { icon: Star, number: "4.8/5", label: "Mentor Rating" }
  ];

  const expertiseOptions = [
    'Engineering & Technology',
    'Medicine & Healthcare',
    'Business & Management',
    'Finance & Banking',
    'Education & Research',
    'Government & Public Service',
    'Arts & Creative Fields',
    'Law & Legal Services',
    'Agriculture & Rural Development',
    'Social Work & NGO'
  ];

  const mentorshipAreaOptions = [
    'Career Guidance',
    'Academic Support',
    'Skill Development',
    'Interview Preparation',
    'Resume Building',
    'Higher Education Planning',
    'Entrepreneurship',
    'Personal Development',
    'Communication Skills',
    'Leadership Development'
  ];

  const mentorBenefits = [
    {
      icon: Heart,
      title: 'Make a Difference',
      description: 'Guide rural students and help them achieve their dreams and career aspirations.'
    },
    {
      icon: Users,
      title: 'Build Connections',
      description: 'Connect with like-minded professionals and expand your network while giving back.'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Receive recognition for your contributions and impact on student development.'
    },
    {
      icon: BookOpen,
      title: 'Personal Growth',
      description: 'Enhance your leadership and communication skills through mentoring experiences.'
    }
  ];

  const handleExpertiseChange = (area: string) => {
    const updatedAreas = regData.expertise.includes(area)
      ? regData.expertise.filter(a => a !== area)
      : [...regData.expertise, area];
    setRegData({ ...regData, expertise: updatedAreas });
  };

  const handleMentorshipAreaChange = (area: string) => {
    const updatedAreas = regData.mentorshipAreas.includes(area)
      ? regData.mentorshipAreas.filter(a => a !== area)
      : [...regData.mentorshipAreas, area];
    setRegData({ ...regData, mentorshipAreas: updatedAreas });
  };

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Heart className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Mentor Connect</h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Become a mentor and guide the next generation of leaders. Share your knowledge, experience, and wisdom to help rural students achieve their dreams.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {mentorStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Login/Registration Form */}
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="h-12 w-12 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {isLogin ? 'Mentor Login' : 'Become a Mentor'}
                </h2>
                <p className="text-gray-600 mt-2">
                  {isLogin ? 'Access your mentoring dashboard' : 'Join our community of mentors making a difference'}
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={regData.fullName}
                        onChange={(e) => setRegData({ ...regData, fullName: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={regData.phone}
                          onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Years of Experience *
                        </label>
                        <select
                          value={regData.experience}
                          onChange={(e) => setRegData({ ...regData, experience: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        >
                          <option value="">Select Experience</option>
                          <option value="1-3">1-3 years</option>
                          <option value="4-7">4-7 years</option>
                          <option value="8-15">8-15 years</option>
                          <option value="15+">15+ years</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Profession *
                        </label>
                        <input
                          type="text"
                          value={regData.profession}
                          onChange={(e) => setRegData({ ...regData, profession: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="e.g., Software Engineer"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company/Organization *
                        </label>
                        <input
                          type="text"
                          value={regData.company}
                          onChange={(e) => setRegData({ ...regData, company: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Educational Background *
                      </label>
                      <input
                        type="text"
                        value={regData.education}
                        onChange={(e) => setRegData({ ...regData, education: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="e.g., B.Tech Computer Science, IIT Delhi"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Areas of Expertise (Select multiple) *
                      </label>
                      <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-3">
                        {expertiseOptions.map((area) => (
                          <label key={area} className="flex items-center space-x-2 text-sm">
                            <input
                              type="checkbox"
                              checked={regData.expertise.includes(area)}
                              onChange={() => handleExpertiseChange(area)}
                              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                            />
                            <span>{area}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mentorship Areas (Select multiple) *
                      </label>
                      <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto border border-gray-300 rounded-lg p-3">
                        {mentorshipAreaOptions.map((area) => (
                          <label key={area} className="flex items-center space-x-2 text-sm">
                            <input
                              type="checkbox"
                              checked={regData.mentorshipAreas.includes(area)}
                              onChange={() => handleMentorshipAreaChange(area)}
                              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                            />
                            <span>{area}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          value={regData.linkedin}
                          onChange={(e) => setRegData({ ...regData, linkedin: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Availability *
                        </label>
                        <select
                          value={regData.availability}
                          onChange={(e) => setRegData({ ...regData, availability: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          required
                        >
                          <option value="">Select Availability</option>
                          <option value="1-2 hours/week">1-2 hours per week</option>
                          <option value="3-5 hours/week">3-5 hours per week</option>
                          <option value="5+ hours/week">5+ hours per week</option>
                          <option value="flexible">Flexible schedule</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Why do you want to become a mentor? *
                      </label>
                      <textarea
                        value={regData.motivation}
                        onChange={(e) => setRegData({ ...regData, motivation: e.target.value })}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Share your motivation for mentoring KREIS students..."
                        required
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={isLogin ? email : regData.email}
                      onChange={(e) => isLogin ? setEmail(e.target.value) : setRegData({ ...regData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={isLogin ? password : regData.password}
                      onChange={(e) => isLogin ? setPassword(e.target.value) : setRegData({ ...regData, password: e.target.value })}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="password"
                        value={regData.confirmPassword}
                        onChange={(e) => setRegData({ ...regData, confirmPassword: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (isLogin ? 'Signing in...' : 'Submitting...') : (isLogin ? 'Sign In' : 'Submit Mentor Application')}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  {isLogin ? "Want to become a mentor?" : "Already a mentor?"}{' '}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-purple-600 hover:text-purple-800 font-medium"
                  >
                    {isLogin ? 'Apply here' : 'Sign in here'}
                  </button>
                </p>
              </div>
            </div>

            {/* Mentor Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Become a Mentor?</h3>
                <div className="space-y-6">
                  {mentorBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <benefit.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mentoring Process */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Apply & Get Verified</h4>
                        <p className="text-gray-600 text-sm">Submit your application and complete our verification process.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Get Matched</h4>
                        <p className="text-gray-600 text-sm">We'll match you with students based on your expertise and their needs.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Start Mentoring</h4>
                        <p className="text-gray-600 text-sm">Begin your mentoring journey through our platform and make a difference.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mentor Requirements */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Mentor Requirements</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Minimum 3 years of professional experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Passion for helping students succeed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Commitment to regular mentoring sessions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Good communication skills</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Background verification clearance</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Questions About Mentoring?</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Mentor Coordinator:</strong> mentors@kreis.kar.nic.in</p>
                  <p><strong>Phone:</strong> +91 80 2234 5678</p>
                  <p><strong>Support Hours:</strong> Mon-Fri, 9 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MentorConnect;