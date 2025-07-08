import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { Award, Trophy, Music, Heart } from 'lucide-react';

const AchievementsActivities: React.FC = () => {
  const achievementCategories = [
    {
      title: "Academic Achievements",
      description: "Excellence in academics, competitive exams, and knowledge-based competitions",
      icon: Award,
      color: "bg-blue-100 text-blue-600",
      link: "/achievements/academic",
      image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Sports & Physical Achievements",
      description: "Championships, medals, and recognition in various sports and physical activities",
      icon: Trophy,
      color: "bg-green-100 text-green-600",
      link: "/achievements/sports",
      image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Cultural Achievements",
      description: "Excellence in performing arts, visual arts, and cultural competitions",
      icon: Music,
      color: "bg-purple-100 text-purple-600",
      link: "/achievements/cultural",
      image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Social Initiatives",
      description: "Community service, environmental conservation, and social awareness activities",
      icon: Heart,
      color: "bg-red-100 text-red-600",
      link: "/achievements/social",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Achievements & Activities</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Celebrating excellence in academics, sports, cultural activities, and social initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievement Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our diverse achievements and activities across various domains.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievementCategories.map((category, index) => (
                <Link key={index} href={category.link}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer h-full">
                    <div className="relative">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <div className={`p-3 rounded-full ${category.color}`}>
                          <category.icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
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

        {/* Recent Highlights */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Highlights</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Some of our most notable recent achievements across all categories.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "SSLC Results Excellence",
                  category: "Academic",
                  description: "98.5% pass rate with 35 distinctions in SSLC examinations 2023-24",
                  icon: Award,
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  title: "State Kabaddi Champions",
                  category: "Sports",
                  description: "School Kabaddi team won the State Championship defeating 32 teams",
                  icon: Trophy,
                  color: "bg-green-100 text-green-600"
                },
                {
                  title: "Folk Dance Competition Winners",
                  category: "Cultural",
                  description: "First prize at State Level Cultural Festival for traditional folk dance",
                  icon: Music,
                  color: "bg-purple-100 text-purple-600"
                },
                {
                  title: "Village Cleanliness Drive",
                  category: "Social",
                  description: "Transformed neighboring villages through student-led cleanliness initiative",
                  icon: Heart,
                  color: "bg-red-100 text-red-600"
                },
                {
                  title: "Mathematics Olympiad Success",
                  category: "Academic",
                  description: "Five students qualified for National Mathematics Olympiad",
                  icon: Award,
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  title: "District Athletics - 5 Gold Medals",
                  category: "Sports",
                  description: "Students won 5 gold medals in various track and field events",
                  icon: Trophy,
                  color: "bg-green-100 text-green-600"
                }
              ].map((highlight, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-full ${highlight.color} mr-3`}>
                      <highlight.icon className="h-5 w-5" />
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${highlight.color}`}>
                      {highlight.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Explore Our Achievements</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover the full range of our students' accomplishments in various fields.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {achievementCategories.map((category, index) => (
                <Link key={index} href={category.link}>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
                    <category.icon className="h-5 w-5 mr-2" />
                    {category.title}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AchievementsActivities;