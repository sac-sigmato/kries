import React from 'react';
import Layout from '../../components/Layout';
import { CheckCircle, BookOpen, Beaker, Laptop } from 'lucide-react';

const SchoolFacility: React.FC = () => {
  const facilities = [
    {
      title: "Infrastructure",
      description: "Modern buildings with well-ventilated classrooms, administrative blocks, and residential quarters designed for optimal learning environment.",
      image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: "🏢"
    },
    {
      title: "Laboratories",
      description: "Well-equipped science laboratories, computer labs, and language labs with modern equipment for hands-on learning experiences.",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: "🔬"
    },
    {
      title: "Classrooms & Library",
      description: "Spacious classrooms with modern teaching aids and well-stocked libraries with books in multiple languages, reference materials, and digital resources.",
      image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: "📚"
    },
    {
      title: "Playground",
      description: "Spacious playgrounds for sports activities and open-air auditoriums for cultural events, assemblies, and community gatherings.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: "🏟️"
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Infrastructure</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our state-of-the-art facilities provide an optimal environment for learning and development.
              </p>
            </div>
          </div>
        </section>

        {/* Main Facilities Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive facilities to ensure a conducive learning environment for our students.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded-full">
                      <span className="text-2xl">{facility.icon}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{facility.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Facility Details */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Library Facilities</h4>
                <p className="text-gray-600 text-sm">Well-stocked libraries with books in multiple languages, reference materials, and digital resources for comprehensive learning.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Beaker className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Science Laboratories</h4>
                <p className="text-gray-600 text-sm">Fully equipped physics, chemistry, and biology labs with modern equipment for practical learning and experiments.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Laptop className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Computer Labs</h4>
                <p className="text-gray-600 text-sm">Modern computer labs with internet connectivity to develop digital literacy and technical skills among students.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Facility Table */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Facility Details</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Description</th>
                    <th className="py-3 px-6 text-left">Unit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6">Classroom</td>
                    <td className="py-4 px-6">10 rooms (40 students capacity each)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6">Library</td>
                    <td className="py-4 px-6">1 (10,000+ books, digital resources)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6">Laboratories</td>
                    <td className="py-4 px-6">3 (Physics, Chemistry, Biology)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6">Playground</td>
                    <td className="py-4 px-6">2 acres (sports facilities for cricket, football, volleyball)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Visit Our School</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience our world-class facilities firsthand. Schedule a visit to our campus today.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule a Visit
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SchoolFacility;