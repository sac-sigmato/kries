import React from 'react';
import Layout from '../../components/Layout';
import { Heart, Globe, Users, Leaf } from 'lucide-react';

const SocialInitiatives: React.FC = () => {
  // Sample data for social initiatives
  const initiatives = [
    {
      title: "Village Cleanliness Drive",
      description: "Our students organized a cleanliness drive in the neighboring villages, cleaning public spaces and creating awareness about waste management and hygiene practices among villagers.",
      image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
      year: "2023-24"
    },
    {
      title: "Tree Plantation Campaign",
      description: "As part of our environmental awareness program, students planted over 500 saplings in the school campus and surrounding areas, contributing to a greener environment.",
      image: "https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg?auto=compress&cs=tinysrgb&w=600",
      year: "2023-24"
    },
    {
      title: "Digital Literacy for Village Elders",
      description: "Our students conducted digital literacy sessions for village elders, teaching them basic smartphone operations, digital payments, and how to access government services online.",
      image: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=600",
      year: "2023-24"
    },
    {
      title: "Health Awareness Camp",
      description: "In collaboration with local health authorities, our students organized a health awareness camp focusing on preventive healthcare, nutrition, and hygiene practices.",
      image: "https://images.pexels.com/photos/6098051/pexels-photo-6098051.jpeg?auto=compress&cs=tinysrgb&w=600",
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Leadership in Social Initiatives</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We believe in student-led social initiatives that empower them to identify community needs, plan interventions, and implement solutions. This approach not only benefits the community but also develops leadership, empathy, and problem-solving skills in our students.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our Social Service Club coordinates these activities with guidance from faculty mentors. Students are encouraged to propose new initiatives based on their observations and interactions with the community.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Join Our Initiatives</h3>
                  <p className="text-gray-700 mb-4">We welcome community members, parents, and alumni to participate in and support our social initiatives.</p>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Get Involved
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=600",
                  "https://images.pexels.com/photos/6098051/pexels-photo-6098051.jpeg?auto=compress&cs=tinysrgb&w=600"
                ].map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={image} 
                      alt={`Social initiative ${index + 1}`} 
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Testimonials</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                What community members say about our social initiatives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ramesh Patil",
                  role: "Village Head, Devanahalli",
                  testimonial: "The cleanliness drive organized by the school students has transformed our village. Their enthusiasm and dedication have inspired our community members to maintain cleanliness.",
                  image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
                },
                {
                  name: "Lakshmi Devi",
                  role: "Senior Citizen, Balepura",
                  testimonial: "At my age, I never thought I would learn to use a smartphone. Thanks to the digital literacy program by these young students, I can now video call my grandchildren and use digital payment apps.",
                  image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
                },
                {
                  name: "Dr. Suresh Kumar",
                  role: "Medical Officer, PHC Devanahalli",
                  testimonial: "The health awareness camp organized by the school was extremely effective. The students' creative approach to communicating health information made a significant impact on the community.",
                  image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-green-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SocialInitiatives;