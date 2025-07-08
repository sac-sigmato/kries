import React from 'react';
import Layout from '../../components/Layout';
import { GraduationCap, Users, Award, TrendingUp, MapPin, Briefcase, Heart, Star } from 'lucide-react';

const AlumniConnect: React.FC = () => {
  const alumniStats = [
    { icon: Users, number: "5,000+", label: "Alumni Worldwide" },
    { icon: Briefcase, number: "85%", label: "Employment Rate" },
    { icon: Award, number: "200+", label: "Industry Leaders" },
    { icon: Heart, number: "50+", label: "Mentors Active" }
  ];

  const featuredAlumni = [
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
      specialization: "Physics, Science Methodology, Laboratory Management",
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
      specialization: "Sports Training, Physical Fitness, Athletic Development",
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
      specialization: "Indian History, Civics, Social Studies Methodology",
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
  ];

  const benefits = [
    {
      icon: Users,
      title: "Network & Connect",
      description: "Connect with fellow alumni across the globe and build meaningful professional relationships."
    },
    {
      icon: Heart,
      title: "Mentor Students",
      description: "Guide current students and help them navigate their career paths with your experience."
    },
    {
      icon: Award,
      title: "Give Back",
      description: "Contribute to scholarships, infrastructure development, and other initiatives."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Access exclusive job opportunities and professional development resources."
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Users className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Alumni Connect</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Join our vibrant community of KREIS alumni making a difference worldwide. Connect, mentor, and give back to your alma mater.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Join Alumni Network
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Update Your Profile
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {alumniStats.map((stat, index) => (
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

        {/* Featured Alumni Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Alumni
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet some of our distinguished alumni who are making a significant impact in their respective fields.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredAlumni.map((alumni, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Class of 2025
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{alumni.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3"></p>
                    <p className="text-gray-600 text-sm mb-3"></p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                     Bengaluru
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Join Alumni Connect?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the benefits of staying connected with your alma mater and fellow alumni.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Read inspiring stories from our alumni who have achieved remarkable success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredAlumni.slice(0, 3).map((alumni, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{alumni.name}</h4>
                      <p className="text-blue-600 text-sm">Class of 2025</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "KREIS gave me the foundation to dream big and achieve my goals. The values and education I received shaped my entire career journey."
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of KREIS alumni worldwide and be part of our growing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Register Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AlumniConnect;