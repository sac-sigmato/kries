import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { BookOpen, Home, Package, Users, Award } from 'lucide-react';

const SchoolsIndex: React.FC = () => {
  const schoolSections = [
    {
      title: "School Facility",
      description: "Explore our modern infrastructure, classrooms, laboratories, and playgrounds designed for optimal learning.",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600",
      link: "/schools/facility",
      image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Hostel & Canteen",
      description: "Learn about our comfortable residential facilities and nutritious meal services for students.",
      icon: Home,
      color: "bg-green-100 text-green-600",
      link: "/schools/hostel",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Student Amenities",
      description: "Discover the comprehensive amenities we provide including uniforms, books, and personal care items.",
      icon: Package,
      color: "bg-purple-100 text-purple-600",
      link: "/schools/amenities",
      image: "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Academic Insights",
      description: "View our student statistics, academic performance, and educational achievements.",
      icon: Users,
      color: "bg-yellow-100 text-yellow-600",
      link: "/schools/statistics",
      image: "https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Student Development",
      description: "Learn about our comprehensive programs for holistic student development and growth.",
      icon: Award,
      color: "bg-red-100 text-red-600",
      link: "/schools/development",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our School</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Explore our facilities, programs, and resources designed to provide quality education in a nurturing environment.
              </p>
            </div>
          </div>
        </section>

        {/* School Sections */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our School</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn about the various aspects of our school that contribute to a comprehensive educational experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {schoolSections.map((section, index) => (
                <Link key={index} href={section.link}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer h-full">
                    <div className="relative">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <div className={`p-3 rounded-full ${section.color}`}>
                          <section.icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                      <p className="text-gray-600 mb-4">{section.description}</p>
                      <button className={`px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors inline-flex items-center`}>
                        Explore
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* School Overview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our School</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Kittur Rani Chennamma Residential School in Balepura, Devanahalli provides quality education to rural students in a nurturing residential environment. Our school follows the Karnataka State Board curriculum and offers comprehensive facilities for holistic student development.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  With a focus on academic excellence, character building, and skill development, we prepare students not just for examinations but for life's challenges. Our dedicated faculty ensures personalized attention to each student's needs and potential.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Quality education for rural students</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Comfortable residential facilities</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Comprehensive development programs</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Dedicated and experienced faculty</p>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="School building"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Visit Our School</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience our facilities and programs firsthand. Schedule a visit to our campus today.
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

export default SchoolsIndex;