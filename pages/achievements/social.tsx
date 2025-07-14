import React from 'react';
import Layout from '../../components/Layout';
import { Heart, Globe, Users, Leaf } from 'lucide-react';

const SocialInitiatives: React.FC = () => {
  // Sample data for social initiatives
  const initiatives = [
    {
      title: "Village Cleanliness Drive",
      description: "Our students organized a cleanliness drive in the neighboring villages, cleaning public spaces and creating awareness about waste management and hygiene practices among villagers.",
      image: "/cs1.jpg",
      year: "2023-24"
    },
    {
      title: "Tree Plantation Campaign",
      description: "As part of our environmental awareness program, students planted over 500 saplings in the school campus and surrounding areas, contributing to a greener environment.",
      image: "/cs2.jpeg",
      year: "2023-24"
    },
    {
      title: "Digital Literacy for Village Elders",
      description: "Our students conducted digital literacy sessions for village elders, teaching them basic smartphone operations, digital payments, and how to access government services online.",
      image: "/cs3.jpg",
      year: "2023-24"
    },
    {
      title: "Health Awareness Camp",
      description: "In collaboration with local health authorities, our students organized a health awareness camp focusing on preventive healthcare, nutrition, and hygiene practices.",
      image: "/cs1.jpg",
      year: "2023-24"
    }
  ];

  const socialPrograms = [
    { name: "Environmental Conservation", description: "Tree plantation, water conservation, and waste management initiatives" },
    { name: "Community Service", description: "Village cleanliness drives, assistance to elderly, and community development activities" },
    { name: "Health & Hygiene", description: "Health awareness camps, hygiene education, and preventive healthcare programs" },
    { name: "Digital Literacy", description: "Teaching digital skills to village elders and underprivileged communities" },
    { name: "Educational Outreach", description: "Tutoring underprivileged children from neighboring communities" },
    { name: "Women Empowerment", description: "Awareness programs on women's rights, education, and career opportunities" },
    { name: "Rural Development", description: "Initiatives to address rural development challenges and improve village infrastructure" },
    { name: "Cultural Preservation", description: "Documentation and preservation of local cultural heritage and traditions" }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Social Initiative Activities</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Empowering our students to become responsible citizens through community service and social awareness.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Heart, number: "15+", label: "Social Initiatives" },
                { icon: Users, number: "1000+", label: "Community Members Impacted" },
                { icon: Leaf, number: "500+", label: "Trees Planted" },
                { icon: Globe, number: "8", label: "Villages Covered" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Initiatives Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Social Initiatives</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our students actively participate in various social initiatives to contribute to community development and social welfare.
              </p>
            </div>
            
            <div className="space-y-16">
              {initiatives.map((initiative, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {initiative.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {initiative.description}
                    </p>
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 text-red-500 mr-2" />
                      <span className="text-gray-700 font-medium">Community Impact Initiative</span>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="rounded-lg shadow-xl w-full h-80 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Programs */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Social Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We engage in various social programs to instill values of social responsibility and community service in our students.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialPrograms.map((program, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{program.name}</h3>
                  <p className="text-gray-600 text-sm">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Leadership */}
    

        {/* Testimonials */}
     
      </div>
    </Layout>
  );
};

export default SocialInitiatives;