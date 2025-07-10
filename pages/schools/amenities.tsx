import React from 'react';
import Layout from '../../components/Layout';
import { Package, Shirt, BookOpen, Briefcase, ShoppingBag } from 'lucide-react';

const Amenities: React.FC = () => {
  const amenities = [
    {
      title: "Uniforms",
      icon: Shirt,
      description: "Each student receives 2 sets of school uniforms annually, designed for comfort and durability. The uniforms include shirts, pants/skirts, ties, belts, and sweaters for winter.",
      image: "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Shoes & Socks",
      icon: Package,
      description: "Students are provided with 2 pairs of quality shoes and 3 pairs of socks each year. The shoes are designed for comfort during long school hours and various activities.",
      image: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Books & Stationery",
      icon: BookOpen,
      description: "Complete set of textbooks, notebooks, and essential stationery items including pens, pencils, erasers, rulers, and geometry boxes are provided to all students.",
      image: "https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "School Bags",
      icon: Briefcase,
      description: "Durable and ergonomically designed school bags are provided to all students, with compartments for books, water bottles, and other essentials.",
      image: "https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Toiletries",
      icon: ShoppingBag,
      description: "Basic toiletries including soap, shampoo, toothpaste, toothbrush, washing soap, and other personal hygiene items are regularly provided to residential students.",
      image: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Student Amenities</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We provide all essential items to ensure our students can focus on their education without any concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Amenities Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Student Support</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our residential schools provide all necessary items to students, ensuring they have everything they need for successful learning and comfortable living.
              </p>
            </div>
            
            <div className="space-y-16">
              {amenities.map((amenity, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <amenity.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{amenity.title}</h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {amenity.description}
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm text-gray-700">
                        <strong>Note:</strong> All items are provided free of cost to students as part of our commitment to ensuring equal access to quality education.
                      </p>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="rounded-lg shadow-xl w-full h-80 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Distribution Schedule */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Distribution Schedule</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Items are distributed to students according to a planned schedule throughout the academic year.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Item</th>
                    <th className="py-3 px-6 text-left">Distribution Time</th>
                    <th className="py-3 px-6 text-left">Quantity</th>
                    <th className="py-3 px-6 text-left">Replacement Policy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium">Uniforms</td>
                    <td className="py-4 px-6">Beginning of academic year (June)</td>
                    <td className="py-4 px-6">2 sets per student</td>
                    <td className="py-4 px-6">Damaged uniforms replaced on case-by-case basis</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium">Shoes & Socks</td>
                    <td className="py-4 px-6">Beginning of academic year (June)</td>
                    <td className="py-4 px-6">2 pairs of shoes, 3 pairs of socks</td>
                    <td className="py-4 px-6">Replaced if damaged before expected wear period</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium">Books & Stationery</td>
                    <td className="py-4 px-6">Beginning of each term</td>
                    <td className="py-4 px-6">Complete set as per curriculum</td>
                    <td className="py-4 px-6">Additional stationery provided as needed</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium">School Bags</td>
                    <td className="py-4 px-6">Beginning of academic year (June)</td>
                    <td className="py-4 px-6">1 bag per student</td>
                    <td className="py-4 px-6">Replaced every two years or if damaged</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium">Toiletries</td>
                    <td className="py-4 px-6">Monthly distribution</td>
                    <td className="py-4 px-6">Monthly supply as per requirement</td>
                    <td className="py-4 px-6">Additional items provided as needed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">100% Quality Assurance</h2>
              <p className="text-lg text-gray-600 mb-8">
                All items provided to students undergo strict quality checks to ensure durability, comfort, and suitability for daily use. We partner with reputable suppliers who meet our quality standards.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">Procurement Process</h3>
                  <p className="text-gray-600 text-sm">Transparent tendering process with quality specifications defined by expert committee</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">Quality Testing</h3>
                  <p className="text-gray-600 text-sm">Random sample testing of all items before distribution to ensure they meet quality standards</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-3">Feedback System</h3>
                  <p className="text-gray-600 text-sm">Regular feedback collected from students and staff to continuously improve the quality of items</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Amenities;