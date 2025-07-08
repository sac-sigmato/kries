import React, { useState } from 'react';
import { Clock, Users, Award, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';

const Schools: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Schools' },
    { id: 'morarji', name: 'Morarji Desai Schools' },
    { id: 'kittur', name: 'Kittur Rani Chennamma Schools' },
    { id: 'ambedkar', name: 'Dr. B R Ambedkar Schools' },
    { id: 'vajpayee', name: 'Atal Bihari Vajpayee Schools' },
    { id: 'indira', name: 'Smt. Indira Gandhi Schools' },
    { id: 'pu', name: 'Pre University Colleges' },
  ];

  const schools = [
    {
      id: 1,
      name: 'Morarji Desai Residential Schools',
      category: 'morarji',
      type: 'Co-educational Residential School',
      grades: '6th to 10th',
      students: '250 per school',
      description: 'Co-education from 6th to 10th grade with 50 students per class, providing quality residential education for rural students.',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: ['Co-educational', 'Residential Facility', '50 students per class', 'Rural Focus'],
      facilities: ['Modern Classrooms', 'Science Labs', 'Computer Labs', 'Library', 'Sports Ground', 'Hostel']
    },
    {
      id: 2,
      name: 'Kittur Rani Chennamma Schools',
      category: 'kittur',
      type: 'Residential School for SC/ST/BC',
      grades: '6th to 10th',
      students: '250 per school',
      description: 'Quality education for SC, ST and BC rural students with focus on bringing them to mainstream society.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: ['SC/ST/BC Focus', 'Social Empowerment', 'Quality Education', 'Rural Development'],
      facilities: ['Well-equipped Labs', 'Digital Classrooms', 'Hostel Facility', 'Nutritious Meals', 'Medical Care']
    },
    {
      id: 3,
      name: 'Dr. B R Ambedkar Schools',
      category: 'ambedkar',
      type: 'Empowerment Schools',
      grades: '6th to 10th',
      students: '250 per school',
      description: 'Empowering socially and educationally backward communities through quality residential education.',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: ['Social Justice', 'Educational Empowerment', 'Backward Communities', 'Holistic Development'],
      facilities: ['Modern Infrastructure', 'Skill Development', 'Career Guidance', 'Personality Development']
    },
    {
      id: 4,
      name: 'Atal Bihari Vajpayee Schools',
      category: 'vajpayee',
      type: 'Excellence in Education',
      grades: '6th to 10th',
      students: '250 per school',
      description: 'Residential education modeled after Jawahar Navodaya Vidyalaya system for academic excellence.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: ['Navodaya Model', 'Academic Excellence', 'Leadership Development', 'Innovation Focus'],
      facilities: ['Advanced Labs', 'Technology Integration', 'Research Facilities', 'Innovation Centers']
    },
    {
      id: 5,
      name: 'Smt. Indira Gandhi Schools',
      category: 'indira',
      type: 'Gender Equality Focus',
      grades: '6th to 10th',
      students: '250 per school (50% girls)',
      description: '50% seats reserved for girls promoting gender equality in education and women empowerment.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: ['50% Girls Reservation', 'Women Empowerment', 'Gender Equality', 'Leadership Training'],
      facilities: ['Safe Environment', 'Girls Hostel', 'Women Faculty', 'Life Skills Training', 'Self Defense']
    },
    {
      id: 6,
      name: 'Pre University Colleges',
      category: 'pu',
      type: 'Higher Secondary Education',
      grades: '11th to 12th (PUC)',
      students: 'Varies by college',
      description: 'Continuing education beyond 10th grade for rural students to pursue higher studies.',
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
      highlights: ['Higher Education', 'Stream Selection', 'Career Preparation', 'University Readiness'],
      facilities: ['Stream-wise Labs', 'Career Counseling', 'Competitive Exam Prep', 'University Partnerships']
    }
  ];

  const filteredSchools = selectedCategory === 'all' 
    ? schools 
    : schools.filter(school => school.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Schools</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our network of residential schools designed to empower rural students across Karnataka.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "821", label: "Residential Schools & Colleges" },
              { icon: Award, number: "250", label: "Students Per School" },
              { icon: Users, number: "50%", label: "Seats Reserved for Girls" },
              { icon: Clock, number: "25+", label: "Years of Service" }
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

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSchools.map((school) => (
              <div key={school.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
                      {school.type}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {school.students}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{school.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{school.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {school.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Facilities:</h4>
                    <div className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                      {school.facilities.map((facility, index) => (
                        <div key={index} className="flex items-center">
                          <ChevronRight className="h-3 w-3 mr-1 text-blue-500" />
                          {facility}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Learn More
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                      Contact School
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Admissions?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Contact us to learn more about admission procedures and requirements for KREIS schools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">+91 80 2234 5678</p>
            </div>
            
            <div>
              <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">admissions@kreis.kar.nic.in</p>
            </div>
            
            <div>
              <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">KREIS Bhavan, Bangalore</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Apply for Admission
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schools;