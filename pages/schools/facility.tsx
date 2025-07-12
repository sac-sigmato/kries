import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { CheckCircle, BookOpen, Beaker, Laptop } from 'lucide-react';
import { Switch } from "@headlessui/react";
import classNames from "classnames";

const SchoolFacility: React.FC = () => {

  const [isCardView2, setIsCardView2] = useState(false);
  const facilities = [
    {
      title: "Infrastructure",
      description: "Modern buildings with well-ventilated classrooms, administrative blocks, and residential quarters designed for optimal learning environment.",
      image: "/School_Prayer.jpeg",
      icon: "🏢"
    },
    {
      title: "Laboratories",
      description: "Well-equipped science laboratories, computer labs, and language labs with modern equipment for hands-on learning experiences.",
      image: "/School-lap-1.jpg",
      icon: "🔬"
    },
    {
      title: "Classrooms & Library",
      description: "Spacious classrooms with modern teaching aids and well-stocked libraries with books in multiple languages, reference materials, and digital resources.",
      image: "/Computer_Lab-1.jpeg",
      icon: "📚"
    },
    {
      title: "Playground",
      description: "Spacious playgrounds for sports activities and open-air auditoriums for cultural events, assemblies, and community gatherings.",
      image: "/School-prayer-2.jpeg",
      icon: "🏟️"
    }
  ];


  // Facility Data
const facilityData = [
  {
    title: "1. Total Classrooms",
    details: "6",
  },
  {
    title: "2. Labs & Multipurpose Hall",
    details: [
      "Physics Lab - 1",
      "Chemistry Lab - 1",
      "Biology Lab - 1",
      "Computer Lab - 1",
      "STEM Lab - 1",
      "Multipurpose Hall - 1",
    ],
  },
  {
    title: "3. Total Computers",
    details: "25",
  },
  {
    title: "4. Total Library Books",
    details: "2500",
  },
  {
    title: "5. Sports Ground Facilities",
    details: [
      "Kho-Kho Court - 1",
      "Volleyball Court - 1",
      "Basketball Court - 1",
      "Long Jump Court - 1",
      "100m Running Track - 1",
      "Yoga & Karate Classes Available",
    ],
    full: true,
  },
];


  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
       



        <section className="relative bg-blue-800 text-white py-24 overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-40"
    style={{ backgroundImage: "url('/School-lap-1.jpg')" }} // ✅ replace with your image path
  ></div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">Infrastructure</h1>
    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
    Our state-of-the-art facilities provide an optimal environment for learning and development.    </p>
  </div>
</section>



        {/* Main Facilities Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive facilities to ensure a conducive learning environment for our students.
              </p>
            </div>
            
            <div className="space-y-20">
  {facilities.map((facility, index) => (
    <div
      key={index}
      className={`flex flex-col lg:flex-row ${
        index % 2 !== 0 ? "lg:flex-row-reverse" : ""
      } bg-white rounded-2xl shadow-lg overflow-hidden group`}
    >
      {/* Image */}
      <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
        <img
          src={facility.image}
          alt={facility.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text */}
      <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
        <div className="text-5xl mb-4">{facility.icon}</div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{facility.title}</h3>
        <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
          {facility.description}
        </p>
      </div>
    </div>
  ))}
</div>

          </div>
        </section>

        {/* Additional Facility Details */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Library Facilities</h4>
                <p className="text-gray-600 text-sm">Well-stocked libraries with books in multiple languages, reference materials, and digital resources for comprehensive learning.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Beaker className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Science Laboratories</h4>
                <p className="text-gray-600 text-sm">Fully equipped physics, chemistry, and biology labs with modern equipment for practical learning and experiments.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Laptop className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Computer Labs</h4>
                <p className="text-gray-600 text-sm">Modern computer labs with internet connectivity to develop digital literacy and technical skills among students.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Facility Table */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toggle Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Facility Checklist</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Table View</span>
            <Switch
              checked={isCardView2}
              onChange={setIsCardView2}
              className={classNames(
                "relative inline-flex h-6 w-11 items-center rounded-full transition",
                isCardView2 ? "bg-blue-600" : "bg-gray-300"
              )}
            >
              <span
                className={classNames(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition",
                  isCardView2 ? "translate-x-6" : "translate-x-1"
                )}
              />
            </Switch>
            <span className="text-sm text-gray-600">Card View</span>
          </div>
        </div>

        {/* Conditional Rendering */}
        {isCardView2 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilityData.map((item, idx) => (
              <div
                key={idx}
                className={classNames(
                  "bg-white rounded-2xl shadow p-6",
                  item.full ? "md:col-span-2" : ""
                )}
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                {Array.isArray(item.details) ? (
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-700">{item.details}</p>
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
                  <th className="px-4 py-2 border">Facility</th>
                  <th className="px-4 py-2 border">Details</th>
                </tr>
              </thead>
              <tbody>
                {facilityData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{idx + 1}</td>
                    <td className="px-4 py-2 border">{item.title}</td>
                    <td className="px-4 py-2 border">
                      {Array.isArray(item.details) ? (
                        <ul className="list-disc pl-5">
                          {item.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      ) : (
                        item.details
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
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Visit Our School</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience our world-class facilities firsthand. Schedule a visit to our campus today.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule a Visit
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SchoolFacility;