import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, Users, Mail, Phone, MapPin, Search, Filter } from 'lucide-react';

const Faculty: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'administration', name: 'Administration' },
    { id: 'academics', name: 'Academic Affairs' },
    { id: 'science', name: 'Science & Mathematics' },
    { id: 'languages', name: 'Languages' },
    { id: 'social', name: 'Social Sciences' },
    { id: 'arts', name: 'Arts & Culture' },
    { id: 'sports', name: 'Physical Education' },
    { id: 'counseling', name: 'Student Counseling' },
  ];

  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      position: 'Director General',
      department: 'administration',
      qualification: 'Ph.D. in Education Administration',
      experience: '25 years',
      specialization: 'Educational Leadership, Rural Education Policy',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'director@kreis.kar.nic.in',
      phone: '+91 80 2234 5678',
      achievements: ['Padma Shri Awardee', 'National Education Excellence Award', '25+ Research Publications']
    },
    {
      id: 2,
      name: 'Prof. Sunita Sharma',
      position: 'Academic Director',
      department: 'academics',
      qualification: 'M.Ed., Ph.D. in Curriculum Development',
      experience: '20 years',
      specialization: 'Curriculum Design, Teacher Training',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'academic@kreis.kar.nic.in',
      phone: '+91 80 2234 5679',
      achievements: ['Best Teacher Award', 'Curriculum Innovation Award', 'Educational Research Excellence']
    },
    {
      id: 3,
      name: 'Dr. Manjunath Gowda',
      position: 'Head of Science Department',
      department: 'science',
      qualification: 'M.Sc. Physics, Ph.D. in Science Education',
      experience: '18 years',
      specialization: 'Physics, Science Methodology, Laboratory Management',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'science@kreis.kar.nic.in',
      phone: '+91 80 2234 5680',
      achievements: ['Science Teacher Excellence Award', 'Innovation in Science Teaching', 'Student Mentorship Award']
    },
    {
      id: 4,
      name: 'Mrs. Kavitha Reddy',
      position: 'Kannada Language Coordinator',
      department: 'languages',
      qualification: 'M.A. Kannada Literature, B.Ed.',
      experience: '15 years',
      specialization: 'Kannada Literature, Language Pedagogy',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'kannada@kreis.kar.nic.in',
      phone: '+91 80 2234 5681',
      achievements: ['State Language Teacher Award', 'Cultural Heritage Promotion', 'Literary Contribution Award']
    },
    {
      id: 5,
      name: 'Mr. Suresh Babu',
      position: 'Mathematics Coordinator',
      department: 'science',
      qualification: 'M.Sc. Mathematics, B.Ed.',
      experience: '16 years',
      specialization: 'Advanced Mathematics, Problem Solving Techniques',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'mathematics@kreis.kar.nic.in',
      phone: '+91 80 2234 5682',
      achievements: ['Mathematics Excellence Award', 'Student Competition Mentor', 'Innovative Teaching Methods']
    },
    {
      id: 6,
      name: 'Dr. Priya Nair',
      position: 'Student Counselor',
      department: 'counseling',
      qualification: 'M.A. Psychology, Ph.D. in Counseling Psychology',
      experience: '12 years',
      specialization: 'Adolescent Psychology, Career Guidance',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'counseling@kreis.kar.nic.in',
      phone: '+91 80 2234 5683',
      achievements: ['Best Counselor Award', 'Student Welfare Excellence', 'Mental Health Advocacy']
    },
    {
      id: 7,
      name: 'Mr. Ravi Kumar',
      position: 'Physical Education Director',
      department: 'sports',
      qualification: 'M.P.Ed., Sports Coaching Certification',
      experience: '14 years',
      specialization: 'Sports Training, Physical Fitness, Athletic Development',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'sports@kreis.kar.nic.in',
      phone: '+91 80 2234 5684',
      achievements: ['State Sports Excellence Award', 'Athletic Training Certification', 'Youth Development Award']
    },
    {
      id: 8,
      name: 'Mrs. Lakshmi Devi',
      position: 'Social Science Coordinator',
      department: 'social',
      qualification: 'M.A. History, M.A. Political Science, B.Ed.',
      experience: '17 years',
      specialization: 'Indian History, Civics, Social Studies Methodology',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'socialscience@kreis.kar.nic.in',
      phone: '+91 80 2234 5685',
      achievements: ['History Teaching Excellence', 'Social Awareness Programs', 'Community Engagement Award']
    }
  ];

  const filteredFaculty = facultyMembers.filter(member => {
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const getDepartmentColor = (department: string) => {
    const colors = {
      administration: 'bg-blue-100 text-blue-800',
      academics: 'bg-green-100 text-green-800',
      science: 'bg-purple-100 text-purple-800',
      languages: 'bg-yellow-100 text-yellow-800',
      social: 'bg-red-100 text-red-800',
      arts: 'bg-pink-100 text-pink-800',
      sports: 'bg-orange-100 text-orange-800',
      counseling: 'bg-indigo-100 text-indigo-800'
    };
    return colors[department as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getDepartmentName = (department: string) => {
    const dept = departments.find(d => d.id === department);
    return dept?.name || department;
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Faculty</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet our dedicated team of educators committed to excellence in rural education and student development.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "500+", label: "Qualified Teachers" },
              { icon: GraduationCap, number: "15+", label: "Average Experience" },
              { icon: Award, number: "95%", label: "Post Graduate Qualified" },
              { icon: BookOpen, number: "50+", label: "Research Publications" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search faculty members..."
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {departments.map((department) => (
                  <option key={department.id} value={department.id}>
                    {department.name}
                  </option>
                ))}
              </select>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('all');
                }}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaculty.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No faculty members found</h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFaculty.map((member) => (
                <div key={member.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded ${getDepartmentColor(member.department)}`}>
                        {getDepartmentName(member.department)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.qualification}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        <span>{member.experience} experience</span>
                      </div>
                      <div className="flex items-start text-sm text-gray-600">
                        <BookOpen className="h-4 w-4 mr-2 mt-0.5" />
                        <span>{member.specialization}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Achievements:</h4>
                      <div className="space-y-1">
                        {member.achievements.slice(0, 2).map((achievement, index) => (
                          <div key={index} className="flex items-center text-xs text-gray-600">
                            <Award className="h-3 w-3 mr-2 text-yellow-500" />
                            {achievement}
                          </div>
                        ))}
                        {member.achievements.length > 2 && (
                          <p className="text-xs text-gray-500">+{member.achievements.length - 2} more</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-4 w-4 mr-2" />
                        <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        <a href={`tel:${member.phone}`} className="hover:text-blue-600 transition-colors">
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Teaching Community
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Be part of our mission to transform rural education. We're always looking for passionate educators to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Faculty Development Programs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;