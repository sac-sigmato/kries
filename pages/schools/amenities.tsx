import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Package, Shirt, BookOpen, Briefcase, ShoppingBag } from 'lucide-react';
import { Switch } from "@headlessui/react";
import classNames from "classnames";

const Amenities: React.FC = () => {

  const [isCardView, setIsCardView] = useState(false);
  


  // Data source
const cardData = [
  {
    title: "1. Uniforms",
    items: "2 pairs of blue uniform & 1 pair of white uniform (Yearly once)",
  },
  {
    title: "2. Shoes & Socks",
    items: "1 pair black shoes, 1 pair white shoes & 4 pairs of socks",
  },
  {
    title: "3. Text Books",
    items: "1 set of textbooks for all subjects (Yearly once)",
  },
  {
    title: "4. Notebooks & Stationery",
    items: [
      "12 x 200 pages long notebooks",
      "12 x 100 pages king size notebooks",
      "1 each: 200 pages 4-line, 3-line, 2-line notebooks",
      "1 x 100 pages English cursive notebook",
      "1 x 100 pages graph book",
      "1 geometry box, 1 sketch pen, 1 set color pencils",
      "12 blue pens, 12 red pens, 12 pencils",
      "2 erasers, 2 sharpeners",
      "25 blue refills, 10 red refills",
      "1 set of name labels, 5 sets brown wrappers",
      "10 files, 1 school bag, 1 aluminium trunk",
    ],
  },
  {
    title: "5. Toiletries (Monthly)",
    items: [
      "Mysore sandal soap - 1",
      "Mysore detergent soap - 2",
      "Mysore talcum powder - 1",
      "Toothbrush & toothpaste - 1 each",
      "Coconut oil box - 1",
      "Whisper sanitary napkins for girls - 1 (Monthly)",
    ],
    full: true,
  },
];





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


   
            <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toggle Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Student Supply Distribution List</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Table View</span>
            <Switch
              checked={isCardView}
              onChange={setIsCardView}
              className={classNames(
                "relative inline-flex h-6 w-11 items-center rounded-full transition",
                isCardView ? "bg-blue-600" : "bg-gray-300"
              )}
            >
              <span
                className={classNames(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition",
                  isCardView ? "translate-x-6" : "translate-x-1"
                )}
              />
            </Switch>
            <span className="text-sm text-gray-600">Card View</span>
          </div>
        </div>

        {/* Conditional Rendering */}
        {isCardView ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card View Blocks (Same as before) */}
            {cardData.map((section, idx) => (
              <div
                key={idx}
                className={classNames(
                  "bg-white rounded-2xl shadow p-6",
                  section.full ? "md:col-span-2" : ""
                )}
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{section.title}</h3>
                {Array.isArray(section.items) ? (
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{section.items}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-auto bg-white rounded-2xl shadow p-4">
            <table className="min-w-full text-sm text-left text-gray-700 border">
              <thead className="bg-blue-100 text-gray-800">
                <tr>
                  <th className="px-4 py-2 border">Sl. No</th>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border">Details</th>
                </tr>
              </thead>
              <tbody>
                {cardData.map((section, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{idx + 1}</td>
                    <td className="px-4 py-2 border">{section.title}</td>
                    <td className="px-4 py-2 border">
                      {Array.isArray(section.items) ? (
                        <ul className="list-disc pl-5">
                          {section.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        section.items
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  

 

            
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