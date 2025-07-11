import React from 'react';
import Layout from '../../components/Layout';
import { Users, Award, TrendingUp, BookOpen, Star } from 'lucide-react';

const StudentStatistics: React.FC = () => {
  // Sample data for academic insights
  const academicData = {
    totalStudents: 250,
    classDistribution : [
      { class: "6th", students: 50, boys: 25, girls: 25, url: "/6th Grade.pdf" },
      { class: "7th", students: 50, boys: 25, girls: 25, url: "/7th Grade.pdf" },
      { class: "8th", students: 50, boys: 25, girls: 25, url: "/8th Grade.pdf" },
      { class: "9th", students: 50, boys: 25, girls: 25, url: "/9th Grade.pdf" },
      { class: "10th", students: 50, boys: 25, girls: 25, url: "/10th Grade.pdf" }
    ],
    sslcResults: [
      { year: "2023-24", passPercentage: 98.5, distinction: 35, firstClass: 12, secondClass: 3 },
      { year: "2022-23", passPercentage: 97.2, distinction: 32, firstClass: 15, secondClass: 3 },
      { year: "2021-22", passPercentage: 96.8, distinction: 30, firstClass: 18, secondClass: 2 }
    ],
    toppers: [
      { name: "Priya Sharma", marks: 625, percentage: 98.5, year: "2023-24", photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Rajesh Kumar", marks: 620, percentage: 97.8, year: "2023-24", photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Anita Reddy", marks: 618, percentage: 97.5, year: "2023-24", photo: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300" }
    ],
    competitiveExams: [
      { name: "Suresh Kumar", exam: "JEE Mains", rank: 1245, year: "2023", photo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Meena Devi", exam: "NEET", rank: 2356, year: "2023", photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300" },
      { name: "Arjun Patel", exam: "NTSE", status: "Selected", year: "2023", photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300" }
    ]
  };

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Academic Insights</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Explore our school's academic performance, student demographics, and achievements.
              </p>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Users, number: academicData.totalStudents, label: "Total Students" },
                { icon: Award, number: "100%", label: "Attendance" },
                { icon: TrendingUp, number: `${academicData.sslcResults[0].passPercentage}%`, label: "SSLC Pass Rate" },
                { icon: Star, number: academicData.sslcResults[0].distinction, label: "Distinctions" }
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

        {/* Student Distribution Table */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Student Distribution</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Class</th>
                    <th className="py-3 px-6 text-left">Total Students</th>
                   
                  
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {academicData.classDistribution.map((classData, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-medium">{classData.class}</td>
                      <td className="py-4 px-6">
                        <a href={classData.url} target='_blank' className="text-blue-600 hover:text-blue-800 font-medium">
                          {classData.students}
                        </a>
                      </td>
                     
                     
                     
                    </tr>
                  ))}
                  <tr className="bg-gray-50 font-semibold">
                    <td className="py-4 px-6">Total</td>
                    <td className="py-4 px-6">{academicData.totalStudents}</td>
                   
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SSLC Toppers */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">SSLC Toppers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {academicData.toppers.map((topper, index) => (
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

        {/* SSLC Results Trends */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">SSLC Results Trends</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Academic Year</th>
                    <th className="py-3 px-6 text-left">Pass Percentage</th>
                    <th className="py-3 px-6 text-left">Distinction</th>
                   
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {academicData.sslcResults.map((result, index) => (
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
                     
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Passing Percentage Trend</h3>
              <div className="h-64 flex items-end space-x-12 justify-center">
                {academicData.sslcResults.map((result, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative">
                      <div 
                        className="bg-blue-600 w-16 rounded-t-lg" 
                        style={{ height: `${result.passPercentage * 2}px` }}
                      ></div>
                      <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                        {result.passPercentage}%
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-medium">{result.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Exam Achievements */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Achievements in Competitive Exams</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {academicData.competitiveExams.map((student, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={student.photo} 
                        alt={student.name} 
                        className="w-16 h-16 object-cover rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{student.name}</h3>
                        <p className="text-blue-600 text-sm">{student.year}</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-700"><strong>Exam:</strong> {student.exam}</p>
                      <p className="text-gray-700">
                        <strong>{student.rank ? 'Rank:' : 'Status:'}</strong> 
                        {student.rank ? ` ${student.rank}` : ` ${student.status}`}
                      </p>
                    </div>
                    <p className="mt-4 text-gray-600 text-sm">
                      {student.name} has made our school proud with this outstanding achievement in {student.exam}.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View More Achievements
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StudentStatistics;