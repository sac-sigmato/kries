import React from 'react';
import Layout from '../../components/Layout';
import { BookOpen, Code, Briefcase, Users, Star } from 'lucide-react';

const StudentDevelopment: React.FC = () => {
  const programs = [
    {
      title: "English Training",
      description:
        "We believe that English is not just a subject—it’s a skill for life. Our structured English Training programme enhances communication abilities, vocabulary, grammar, and fluency through interactive sessions, storytelling, and language games.",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600",
      image: "/sc1.jpg"
    },
    {
      title: "Computer Training",
      description:
        "Our Computer Training module equips students with essential digital literacy and hands-on exposure to technology. Students learn typing, internet usage, MS Office, and gain confidence in using computers for real-world problem-solving.",
      icon: Code,
      color: "bg-green-100 text-green-600",
      image: "/cl.jpeg"
    },
    {
      title: "Career Guidance Sessions",
      description:
        "We organize regular Career Guidance Sessions led by experts, alumni, and counsellors to help students identify interests, strengths, and higher education opportunities through interactive talks and one-on-one mentoring.",
      icon: Briefcase,
      color: "bg-purple-100 text-purple-600",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Personality Development",
      description:
        "Our sessions foster leadership, public speaking, emotional intelligence, and time management. Group activities, workshops, and role plays help students grow into confident, well-rounded individuals.",
      icon: Users,
      color: "bg-orange-100 text-orange-600",
      image: "https://images.pexels.com/photos/6499174/pexels-photo-6499174.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Student Development Program</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Helping students grow academically, socially, and personally through innovative learning experiences.
            </p>
          </div>
        </section>

        {/* Program Overview Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer skill-based and personality-enriching programs to prepare students for future opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-shadow">
                  <div className="relative h-64">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className={`p-3 rounded-full ${program.color}`}>
                        <program.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
       
      </div>
    </Layout>
  );
};

export default StudentDevelopment;
