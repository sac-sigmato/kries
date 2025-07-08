import React from 'react';
import Layout from '../../components/Layout';
import { Music, Award, Users, Calendar } from 'lucide-react';

const CulturalAchievements: React.FC = () => {
  // Sample data for cultural achievements
  const achievements = [
    {
      title: "State Level Folk Dance Competition - First Prize",
      description: "Our school's folk dance team won the first prize at the State Level Cultural Festival with their mesmerizing performance of traditional Karnataka folk dance forms.",
      image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600",
      year: "2023-24"
    },
    {
      title: "Interschool Music Competition - Vocal & Instrumental",
      description: "Our students secured top positions in both vocal and instrumental categories at the Interschool Music Competition, showcasing their exceptional talent and dedication.",
      image: "https://images.pexels.com/photos/7097455/pexels-photo-7097455.jpeg?auto=compress&cs=tinysrgb&w=600",
      year: "2023-24"
    },
    {
      title: "District Level Drama Competition - Best Performance",
      description: "The school drama team received the 'Best Performance' award at the District Level Drama Competition for their thought-provoking play on social issues.",
      image: "https://images.pexels.com/photos/11323132/pexels-photo-11323132.jpeg?auto=compress&cs=tinysrgb&w=600",
      year: "2023-24"
    },
    {
      title: "National Level Art Exhibition - Special Recognition",
      description: "Five students from our school received special recognition at the National Level Art Exhibition for their creative and innovative artwork representing rural Karnataka.",
      image: "https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&w=600",
      year: "2023-24"
    }
  ];

  const culturalActivities = [
    { name: "Classical Dance", description: "Training in Bharatanatyam, Kathak, and other classical dance forms" },
    { name: "Folk Dance", description: "Traditional Karnataka folk dance forms including Dollu Kunitha and Yakshagana" },
    { name: "Music", description: "Vocal and instrumental music training in both classical and contemporary styles" },
    { name: "Drama & Theatre", description: "Theatre arts, script writing, and performance techniques" },
    { name: "Visual Arts", description: "Drawing, painting, sculpture, and other visual art forms" },
    { name: "Literary Arts", description: "Creative writing, poetry, debate, and public speaking" },
    { name: "Handicrafts", description: "Traditional crafts and artisanal skills" },
    { name: "Cultural Festivals", description: "Celebration of various cultural and traditional festivals" }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Cultural Achievements</h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Celebrating artistic excellence and cultural heritage through various performing and visual arts.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Award, number: "25+", label: "Awards Won" },
                { icon: Music, number: "8", label: "Cultural Activities" },
                { icon: Users, number: "150+", label: "Student Participants" },
                { icon: Calendar, number: "12", label: "Annual Events" }
              ].map((stat, index) => (
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

        {/* Achievements Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Cultural Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our students have excelled in various cultural competitions and events at district, state, and national levels.
              </p>
            </div>
            
            <div className="space-y-16">
              {achievements.map((achievement, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                    <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {achievement.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-gray-700 font-medium">Award-Winning Performance</span>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="rounded-lg shadow-xl w-full h-80 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Activities */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cultural Activities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a wide range of cultural activities to nurture artistic talents and preserve cultural heritage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {culturalActivities.map((activity, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.name}</h3>
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Annual Cultural Festival */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Annual Cultural Festival</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our school hosts an annual cultural festival 'Kala Utsav' that showcases the diverse talents of our students. The three-day event features performances in dance, music, drama, and various other art forms.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The festival also includes art exhibitions, literary competitions, and cultural workshops conducted by renowned artists and experts. It provides a platform for students to express their creativity and gain exposure to various art forms.
                </p>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Upcoming Festival</h3>
                  <p className="text-gray-700"><strong>Dates:</strong> December 10-12, 2024</p>
                  <p className="text-gray-700"><strong>Theme:</strong> "Unity in Diversity: Celebrating India's Cultural Heritage"</p>
                  <p className="text-gray-700"><strong>Chief Guest:</strong> Renowned Classical Dancer (To be announced)</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/7097455/pexels-photo-7097455.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/11323132/pexels-photo-11323132.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&w=600"
                ].map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={image} 
                      alt={`Cultural festival moment ${index + 1}`} 
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Gallery */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cultural Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Moments captured from various cultural events and performances.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/7097455/pexels-photo-7097455.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/11323132/pexels-photo-11323132.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/7551435/pexels-photo-7551435.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/7551651/pexels-photo-7551651.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/7551652/pexels-photo-7551652.jpeg?auto=compress&cs=tinysrgb&w=600"
              ].map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={image} 
                    alt={`Cultural moment ${index + 1}`} 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                View Full Gallery
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CulturalAchievements;