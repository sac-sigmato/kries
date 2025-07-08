import React from 'react';
import Layout from '../../components/Layout';
import { BookOpen, Code, Briefcase, Users, Award, Star } from 'lucide-react';

const StudentDevelopment: React.FC = () => {
  // Sample data for development programs
  const programs = [
    {
      title: "Academic Excellence Program",
      description: "A structured program to help students excel in academics through personalized learning plans, remedial classes, and advanced learning opportunities.",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600",
      image: "https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Skill Development Initiative",
      description: "Equipping students with 21st-century skills including digital literacy, coding, financial literacy, and communication skills.",
      icon: Code,
      color: "bg-green-100 text-green-600",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Career Guidance & Counseling",
      description: "Professional guidance to help students explore career options, prepare for competitive exams, and make informed decisions about higher education.",
      icon: Briefcase,
      color: "bg-purple-100 text-purple-600",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Leadership & Life Skills",
      description: "Developing essential life skills, leadership qualities, and emotional intelligence through workshops, activities, and real-world projects.",
      icon: Users,
      color: "bg-orange-100 text-orange-600",
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Student Development Program</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Comprehensive programs designed to nurture well-rounded individuals prepared for future success.
              </p>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in holistic development that goes beyond academics to prepare students for real-world challenges and opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
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
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">All grades (6th-10th)</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Gallery */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visual glimpses of our student development activities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                "https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
              ].map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={image} 
                    alt={`Development program ${index + 1}`} 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-full ${program.color} mr-4`}>
                      <program.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Program Overview</h4>
                      <p className="text-gray-600 mb-6">{program.description}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Components</h4>
                      <ul className="space-y-2 mb-6">
                        {[1, 2, 3, 4].map((item) => (
                          <li key={item} className="flex items-start">
                            <Star className="h-5 w-5 text-yellow-500 mt-0.5 mr-2" />
                            <span className="text-gray-600">
                              {index === 0 && item === 1 && "Personalized learning plans based on student's strengths and areas for improvement"}
                              {index === 0 && item === 2 && "Regular assessments and feedback to track progress"}
                              {index === 0 && item === 3 && "Remedial classes for students needing additional support"}
                              {index === 0 && item === 4 && "Advanced learning opportunities for high-performing students"}
                              
                              {index === 1 && item === 1 && "Digital literacy and basic programming skills"}
                              {index === 1 && item === 2 && "Financial literacy and entrepreneurship basics"}
                              {index === 1 && item === 3 && "Communication and presentation skills"}
                              {index === 1 && item === 4 && "Critical thinking and problem-solving workshops"}
                              
                              {index === 2 && item === 1 && "One-on-one career counseling sessions"}
                              {index === 2 && item === 2 && "Career exploration workshops and field trips"}
                              {index === 2 && item === 3 && "Preparation for competitive exams"}
                              {index === 2 && item === 4 && "Higher education guidance and scholarship information"}
                              
                              {index === 3 && item === 1 && "Leadership development through student council and committees"}
                              {index === 3 && item === 2 && "Emotional intelligence and conflict resolution training"}
                              {index === 3 && item === 3 && "Time management and goal setting workshops"}
                              {index === 3 && item === 4 && "Team building and collaborative project work"}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Expected Outcomes</h4>
                      <p className="text-gray-600">
                        {index === 0 && "Improved academic performance, higher test scores, and better conceptual understanding of subjects."}
                        {index === 1 && "Acquisition of practical skills relevant for future education and employment opportunities."}
                        {index === 2 && "Informed career choices, better preparation for higher education, and increased success in competitive exams."}
                        {index === 3 && "Development of leadership qualities, improved emotional intelligence, and better interpersonal skills."}
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Program Details</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-medium text-gray-900">Throughout academic year</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Eligibility</p>
                          <p className="font-medium text-gray-900">All students (Grades 6-10)</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Schedule</p>
                          <p className="font-medium text-gray-900">Integrated with regular curriculum</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Facilitators</p>
                          <p className="font-medium text-gray-900">Specialized faculty & external experts</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Assessment</p>
                          <p className="font-medium text-gray-900">Continuous evaluation & feedback</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How our development programs have transformed students' lives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya Sharma",
                  program: "Academic Excellence Program",
                  story: "From struggling with mathematics to securing 95% in SSLC, Priya's journey showcases the impact of personalized learning plans and dedicated mentoring.",
                  outcome: "Currently pursuing Science at a prestigious PU College",
                  image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
                },
                {
                  name: "Rajesh Kumar",
                  program: "Skill Development Initiative",
                  story: "Rajesh discovered his passion for programming through our coding workshops. He developed a mobile app that helps farmers access market prices.",
                  outcome: "Selected for a national-level innovation competition",
                  image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
                },
                {
                  name: "Anita Reddy",
                  program: "Leadership & Life Skills",
                  story: "As a shy student, Anita found her voice through our leadership program. She led a successful community service project that impacted over 200 villagers.",
                  outcome: "Elected as School Student Council President",
                  image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300"
                }
              ].map((story, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{story.name}</h4>
                      <p className="text-blue-600 text-sm">{story.program}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{story.story}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 text-sm font-medium">Outcome: {story.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StudentDevelopment;