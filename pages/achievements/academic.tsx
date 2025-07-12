import React from 'react';
import Layout from '../../components/Layout';
import { Award, Star, TrendingUp, Users } from 'lucide-react';

const AcademicAchievements: React.FC = () => {
  // Sample data for academic achievements
  const achievements = [
    {
      title: "SSLC Results Excellence",
      description: "Our school achieved 98.5% pass rate in SSLC examinations 2023-24, with 35 students securing distinction and 12 students securing first class.",
      image: "/kreis-3.jpg",
      year: "2023-24"
    },
    {
      title: "State Science Exhibition First Prize",
      description: "Our students won the first prize in the State Level Science Exhibition for their innovative project on 'Sustainable Agriculture using IoT'.",
      image: "/Schoo-event1.jpeg",
      year: "2023-24"
    },
    {
      title: "Mathematics Olympiad Success",
      description: "Five students qualified for the National Mathematics Olympiad, with Rajesh Kumar securing a gold medal at the state level.",
      image: "/School_Prayer.jpeg",
      year: "2023-24"
    },
    {
      title: "100% JEE/NEET Qualification",
      description: "All 15 students who appeared for JEE/NEET entrance coaching qualified in the preliminary examinations, with 5 securing ranks under 5000.",
      image: "/Computer_Lab-1.jpeg",
      year: "2023-24"
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Academic Achievements</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Celebrating excellence in academics and recognizing our students' outstanding performances.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Star, number: "98.5%", label: "SSLC Pass Rate" },
                { icon: Award, number: "35", label: "Distinctions" },
                { icon: TrendingUp, number: "15", label: "Competitive Exam Qualifiers" },
                { icon: Users, number: "5", label: "State Rank Holders" }
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Academic Achievements</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our students consistently excel in academics, competitive exams, and knowledge-based competitions.
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
                      <Award className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="text-gray-700 font-medium">Outstanding Achievement</span>
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

        {/* SSLC Toppers Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">SSLC Toppers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recognizing our top performers in the SSLC examinations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Priya Sharma", marks: 625, percentage: 98.5, year: "2023-24", photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300" },
                { name: "Rajesh Kumar", marks: 620, percentage: 97.8, year: "2023-24", photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300" },
                { name: "Anita Reddy", marks: 618, percentage: 97.5, year: "2023-24", photo: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300" }
              ].map((topper, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="mb-4">
                    <img 
                      src={topper.photo} 
                      alt={topper.name} 
                      className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-100"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{topper.name}</h3>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                    {topper.percentage}%
                  </div>
                  <p className="text-gray-600">Total Marks: {topper.marks}/625</p>
                  <p className="text-gray-500 text-sm mt-2">Academic Year: {topper.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Year Results */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Year Results</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our consistent academic excellence over the years.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Academic Year</th>
                    <th className="py-3 px-6 text-left">Pass Percentage</th>
                    <th className="py-3 px-6 text-left">Distinction</th>
                    <th className="py-3 px-6 text-left">First Class</th>
                    <th className="py-3 px-6 text-left">Second Class</th>
                    <th className="py-3 px-6 text-left">School Rank in District</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { year: "2023-24", passPercentage: 98.5, distinction: 35, firstClass: 12, secondClass: 3, rank: 1 },
                    { year: "2022-23", passPercentage: 97.2, distinction: 32, firstClass: 15, secondClass: 3, rank: 2 },
                    { year: "2021-22", passPercentage: 96.8, distinction: 30, firstClass: 18, secondClass: 2, rank: 2 },
                    { year: "2020-21", passPercentage: 95.5, distinction: 28, firstClass: 20, secondClass: 2, rank: 3 },
                    { year: "2019-20", passPercentage: 94.8, distinction: 25, firstClass: 22, secondClass: 3, rank: 3 }
                  ].map((result, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium">{result.year}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${result.passPercentage}%` }}></div>
                          </div>
                          <span>{result.passPercentage}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">{result.distinction}</td>
                      <td className="py-4 px-6">{result.firstClass}</td>
                      <td className="py-4 px-6">{result.secondClass}</td>
                      <td className="py-4 px-6">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                          Rank {result.rank}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AcademicAchievements;