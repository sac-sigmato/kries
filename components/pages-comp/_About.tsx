import React from 'react';
import { useState, useEffect } from 'react';
import { Users, Award, Globe, BookOpen, CheckCircle, Calendar, MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

interface FacultyMember {
  id: number;
  name: string;
  position: string;
  department: string;
  qualification: string;
  experience: string;
  specialization: string;
  image_url?: string;
  image?: string;
  email?: string;
  phone?: string;
  achievements: string[];
  bio?: string;
}

const About: React.FC = () => {
  const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState('all');

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

  useEffect(() => {
    fetchFacultyMembers();
  }, []);

  const fetchFacultyMembers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/faculty');
      if (response.ok) {
        const data = await response.json();

        setFacultyMembers([
          {
            id: 1,
            name: "Dr. Bhaskar Babu G",
            position: "Director General",
            department: "administration",
            qualification: "Ph.D. in Education Administration",
            experience: "25 years",
            specialization: "Educational Leadership, Rural Education Policy",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/Principal-Photo-for-Principals-Message-1024x846.jpeg",
            email: "director@kreis.kar.nic.in",
            phone: "+91 80 2234 5678",
            achievements: [
              "Padma Shri Awardee",
              "National Education Excellence Award",
              "25+ Research Publications",
            ],
          },
          {
            id: 2,
            name: "Mr. Subramanyam S A",
            position: "Academic Director",
            department: "academics",
            qualification: "M.Ed., Ph.D. in Curriculum Development",
            experience: "20 years",
            specialization: "Curriculum Design, Teacher Training",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/20250619_1232_Raghavendras-School-Lecture_simple_compose_01jy3fshf1e4vb03asy97ss8dn.png?auto=compress&cs=tinysrgb&w=300",
            email: "academic@kreis.kar.nic.in",
            phone: "+91 80 2234 5679",
            achievements: [
              "Best Teacher Award",
              "Curriculum Innovation Award",
              "Educational Research Excellence",
            ],
          },
          {
            id: 3,
            name: "Mr. Ananda V",
            position: "Head of Science Department",
            department: "science",
            qualification: "M.Sc. Physics, Ph.D. in Science Education",
            experience: "18 years",
            specialization:
              "Physics, Science Methodology, Laboratory Management",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/profile-placeholder.jpg?auto=compress&cs=tinysrgb&w=300",
            email: "science@kreis.kar.nic.in",
            phone: "+91 80 2234 5680",
            achievements: [
              "Science Teacher Excellence Award",
              "Innovation in Science Teaching",
              "Student Mentorship Award",
            ],
          },
          {
            id: 4,
            name: "Mr. Raghavendra B",
            position: "Kannada Language Coordinator",
            department: "languages",
            qualification: "M.A. Kannada Literature, B.Ed.",
            experience: "15 years",
            specialization: "Kannada Literature, Language Pedagogy",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/20250619_1232_Raghavendras-School-Lecture_simple_compose_01jy3fshf2fahtbn2cxs30mq6d.png",
            email: "kannada@kreis.kar.nic.in",
            phone: "+91 80 2234 5681",
            achievements: [
              "State Language Teacher Award",
              "Cultural Heritage Promotion",
              "Literary Contribution Award",
            ],
          },
          {
            id: 5,
            name: "Mr.  Suresh Hegde",
            position: "Mathematics Coordinator",
            department: "science",
            qualification: "M.Sc. Mathematics, B.Ed.",
            experience: "16 years",
            specialization: "Advanced Mathematics, Problem Solving Techniques",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/profile-placeholder.jpg?auto=compress&cs=tinysrgb&w=300",
            email: "mathematics@kreis.kar.nic.in",
            phone: "+91 80 2234 5682",
            achievements: [
              "Mathematics Excellence Award",
              "Student Competition Mentor",
              "Innovative Teaching Methods",
            ],
          },
          {
            id: 6,
            name: "Dr. Rachani B G",
            position: "Student Counselor",
            department: "counseling",
            qualification: "M.A. Psychology, Ph.D. in Counseling Psychology",
            experience: "12 years",
            specialization: "Adolescent Psychology, Career Guidance",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/woman.jpg?auto=compress&cs=tinysrgb&w=300",
            email: "counseling@kreis.kar.nic.in",
            phone: "+91 80 2234 5683",
            achievements: [
              "Best Counselor Award",
              "Student Welfare Excellence",
              "Mental Health Advocacy",
            ],
          },
          {
            id: 7,
            name: "Dr. Shailaja",
            position: "Physical Education Director",
            department: "sports",
            qualification: "M.P.Ed., Sports Coaching Certification",
            experience: "14 years",
            specialization:
              "Sports Training, Physical Fitness, Athletic Development",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/woman.jpg?auto=compress&cs=tinysrgb&w=300",
            email: "sports@kreis.kar.nic.in",
            phone: "+91 80 2234 5684",
            achievements: [
              "State Sports Excellence Award",
              "Athletic Training Certification",
              "Youth Development Award",
            ],
          },
          {
            id: 8,
            name: "Mrs. Lakshmi Desai",
            position: "Social Science Coordinator",
            department: "social",
            qualification: "M.A. History, M.A. Political Science, B.Ed.",
            experience: "17 years",
            specialization:
              "Indian History, Civics, Social Studies Methodology",
            image:
              "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
            email: "socialscience@kreis.kar.nic.in",
            phone: "+91 80 2234 5685",
            achievements: [
              "History Teaching Excellence",
              "Social Awareness Programs",
              "Community Engagement Award",
            ],
          },
        ]);
      }
    } catch (error) {
      console.error('Error fetching faculty members:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredFaculty = facultyMembers.filter(member => {
    return selectedDepartment === 'all' || member.department === selectedDepartment;
  });

  const getDepartmentName = (departmentId: string) => {
    const dept = departments.find(d => d.id === departmentId);
    return dept?.name || departmentId;
  };
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About KREIS</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Karnataka Residential Educational Institutions Society (KREIS) -
              Empowering rural students through quality residential education
              since 1999.
            </p>
          </div>
        </div>
      </section>

      {/* About KREIS Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Government of Karnataka launched KREIS in October 1999 with
                the objective of promoting educational development of various
                classes of rural children in Karnataka. We operate 821 Morarji
                Desai, Kittur Rani Chennamma, Dr. B R Ambedkar, Atal Bihari
                Vajpayee, Smt. Indira Gandhi, and Masti Venkatesha Iyengar
                Residential Schools and Pre University colleges.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our residential schools work in co-education from 6th to 10th
                grade with 250 students per school (50 per class). We ensure 50%
                seats are reserved for girls, promoting gender equality in
                education.
              </p>
            </div>
            <div className="relative]">
              <img
                src="/about.jpeg"
                alt="Students in classroom"
                className="rounded-lg shadow-xl h-[350px] w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white p-3 rounded-full">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">25+</p>
                    <p className="text-gray-600">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To provide quality residential education to socially and
                educationally backward rural communities, helping them pursue
                higher studies and bringing them to the mainstream of society.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  <p className="text-gray-600">
                    Provide quality education to rural students
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  <p className="text-gray-600">
                    Ensure gender equality with 50% reservation for girls
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  <p className="text-gray-600">
                    Create opportunities for higher education
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  <p className="text-gray-600">
                    Develop well-rounded individuals through holistic education
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the premier educational institution network that
                transforms rural communities through education, creating leaders
                who contribute to society's progress and development.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3" />
                  <p className="text-gray-600">
                    Establish centers of educational excellence in rural areas
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3" />
                  <p className="text-gray-600">
                    Bridge the urban-rural education quality gap
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3" />
                  <p className="text-gray-600">
                    Foster innovation and critical thinking in students
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3" />
                  <p className="text-gray-600">
                    Create a sustainable model for rural education development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Over decades of excellence, we've built a legacy of success and
              achievement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                number: "821",
                label: "Residential Schools & Colleges",
              },
              { icon: Award, number: "250", label: "Students Per School" },
              { icon: Globe, number: "50%", label: "Seats Reserved for Girls" },
              { icon: BookOpen, number: "25+", label: "Years of Service" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-10 w-10" />
                </div>
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Schools Section */}
     

      {/* Leadership Team */}
    

      {/* History Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our founding to the present day, KREIS has continuously
              evolved to better serve rural students.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            <div className="space-y-12">
              {[
                {
                  year: "1999",
                  title: "Foundation of KREIS",
                  description:
                    "KREIS was established by the Government of Karnataka to promote educational development of rural children.",
                },
                {
                  year: "2005",
                  title: "Expansion Phase",
                  description:
                    "Expanded to 250 residential schools across Karnataka, reaching more rural communities.",
                },
                {
                  year: "2010",
                  title: "Introduction of PU Colleges",
                  description:
                    "Started Pre-University colleges to provide continued education for 10th grade graduates.",
                },
                {
                  year: "2015",
                  title: "Digital Learning Initiative",
                  description:
                    "Implemented digital classrooms and computer labs across all residential schools.",
                },
                {
                  year: "2020",
                  title: "Pandemic Response",
                  description:
                    "Successfully adapted to remote learning during COVID-19 while ensuring student welfare.",
                },
                {
                  year: "2024",
                  title: "Present Day",
                  description:
                    "Operating 821 residential institutions with a focus on quality education and student development.",
                },
              ].map((milestone, index) => (
                <div key={index} className="relative">
                  <div
                    className={`flex items-center justify-${
                      index % 2 === 0 ? "start" : "end"
                    } md:justify-center`}
                  >
                    <div
                      className={`md:w-1/2 ${
                        index % 2 === 0
                          ? "md:pr-12 text-right"
                          : "md:pl-12 text-left"
                      }`}
                    >
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold mb-3">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="h-6 w-6 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to education and student
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in all aspects of education, from teaching methods to infrastructure.",
                color: "bg-blue-100 text-blue-600",
              },
              {
                title: "Inclusivity",
                description:
                  "We ensure equal opportunities for all students regardless of their background or gender.",
                color: "bg-green-100 text-green-600",
              },
              {
                title: "Innovation",
                description:
                  "We embrace innovative teaching methods and technologies to enhance learning outcomes.",
                color: "bg-purple-100 text-purple-600",
              },
              {
                title: "Integrity",
                description:
                  "We uphold the highest standards of integrity and ethics in all our operations.",
                color: "bg-yellow-100 text-yellow-600",
              },
              {
                title: "Empowerment",
                description:
                  "We empower students with knowledge, skills, and values to succeed in life.",
                color: "bg-red-100 text-red-600",
              },
              {
                title: "Community",
                description:
                  "We foster a sense of community and belonging among students, staff, and stakeholders.",
                color: "bg-indigo-100 text-indigo-600",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 ${value.color}`}
                >
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Have questions about KREIS or interested in supporting our
                mission? We'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+91 80 2234 5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>info@kreis.kar.nic.in</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>KREIS Bhavan, Bangalore, Karnataka 560001, India</span>
                </div>
              </div>

              <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
                Contact Us
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;