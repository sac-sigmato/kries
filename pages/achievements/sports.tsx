import React from 'react';
import Layout from '../../components/Layout';
import { Award, Trophy, Target, Users } from 'lucide-react';

const SportsAchievements: React.FC = () => {
  // Sample data for sports achievements
  const achievements = [
    {
      title: "State Level Kabaddi Championship",
      description: "Our school Kabaddi team won the State Level Championship, defeating 32 teams from across Karnataka. The team displayed exceptional teamwork and strategy throughout the tournament.",
      image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",
      year: "2023-24"
    },
    {
      title: "District Athletics Meet - 5 Gold Medals",
      description: "Our athletes secured 5 gold medals, 3 silver medals, and 4 bronze medals in various track and field events at the District Athletics Meet. Special mention to Arjun Singh who broke the district record in 800m race.",
      image: "https://images.pexels.com/photos/3621121/pexels-photo-3621121.jpeg?auto=compress&cs=tinysrgb&w=600",
      year: "2023-24"
    },
    {
      title: "Zonal Cricket Tournament Champions",
      description: "Our cricket team emerged as champions in the Zonal Cricket Tournament, winning all matches with commanding performances. Captain Rahul Kumar was named Player of the Tournament for his all-round performance.",
      image: "https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=600",
      year: "2023-24"
    },
    {
      title: "State Chess Championship - Individual Gold",
      description: "Priya Sharma from 10th grade won the gold medal in the State Chess Championship, qualifying for the National level competition. She remained undefeated throughout the tournament.",
      image: "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=600",
      year: "2023-24"
    }
  ];

  const sportsFacilities = [
    { name: "Cricket Ground", features: "Full-size cricket ground with practice nets" },
    { name: "Football Field", features: "Standard size football field with goalposts" },
    { name: "Basketball Court", features: "Concrete court with professional hoops" },
    { name: "Volleyball Court", features: "Two standard volleyball courts" },
    { name: "Kabaddi Court", features: "Regulation size kabaddi court" },
    { name: "Kho-Kho Ground", features: "Standard kho-kho playing area" },
    { name: "Athletics Track", features: "200m track for running events" },
    { name: "Indoor Games Room", features: "Facilities for chess, carrom, and table tennis" }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Sports & Physical Achievements</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Celebrating excellence in sports and physical activities, fostering teamwork, discipline, and healthy competition.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Trophy, number: "15+", label: "Championships Won" },
                { icon: Award, number: "50+", label: "Medals Secured" },
                { icon: Target, number: "8", label: "Sports Facilities" },
                { icon: Users, number: "100%", label: "Student Participation" }
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

        {/* Achievements Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Sports Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our students have excelled in various sports competitions at district, zonal, and state levels.
              </p>
            </div>
            
            <div className="space-y-16">
              {achievements.map((achievement, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {achievement.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="flex items-center">
                      <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-gray-700 font-medium">Championship Achievement</span>
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

        {/* Sports Facilities */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sports Facilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our school provides excellent sports facilities to nurture talent and promote physical fitness.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sportsFacilities.map((facility, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{facility.name}</h3>
                  <p className="text-gray-600 text-sm">{facility.features}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sports Calendar */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sports Calendar</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Upcoming sports events and competitions for the academic year.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Event</th>
                    <th className="py-3 px-6 text-left">Date</th>
                    <th className="py-3 px-6 text-left">Level</th>
                    <th className="py-3 px-6 text-left">Venue</th>
                    <th className="py-3 px-6 text-left">Participants</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { event: "Annual Sports Day", date: "December 15, 2024", level: "School", venue: "School Grounds", participants: "All Students" },
                    { event: "District Athletics Meet", date: "January 10-12, 2025", level: "District", venue: "District Stadium", participants: "Selected Athletes" },
                    { event: "Zonal Cricket Tournament", date: "February 5-10, 2025", level: "Zonal", venue: "Regional Sports Complex", participants: "School Cricket Team" },
                    { event: "State Kabaddi Championship", date: "March 15-20, 2025", level: "State", venue: "State Sports Arena", participants: "School Kabaddi Team" }
                  ].map((event, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium">{event.event}</td>
                      <td className="py-4 px-6">{event.date}</td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          event.level === 'School' ? 'bg-green-100 text-green-800' :
                          event.level === 'District' ? 'bg-yellow-100 text-yellow-800' :
                          event.level === 'Zonal' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {event.level}
                        </span>
                      </td>
                      <td className="py-4 px-6">{event.venue}</td>
                      <td className="py-4 px-6">{event.participants}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Sports Gallery */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Sports Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Moments captured from various sports events and achievements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3621121/pexels-photo-3621121.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3659353/pexels-photo-3659353.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3659365/pexels-photo-3659365.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3621102/pexels-photo-3621102.jpeg?auto=compress&cs=tinysrgb&w=600"
              ].map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={image} 
                    alt={`Sports moment ${index + 1}`} 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Full Gallery
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SportsAchievements;