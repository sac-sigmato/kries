import React from 'react';

const facultyMembers = [
  {
    name: 'Bhaskar Babu G',
    designation: 'Principal',
    subject: '',
    qualification: 'M.Sc., M.Ed., MPhil',
    image: 'https://getmycollege.in/wp-content/uploads/2025/06/Principal-Photo-for-Principals-Message-1024x846.jpeg',
  },
  {
    name: 'Subramanyam S A',
    designation: 'Senior Teacher',
    subject: 'Social Science',
    qualification: 'M.A., B.Ed',
    image: '/f6.webp',
  },
  {
    name: 'Ananda V',
    designation: 'Senior Teacher',
    subject: 'Mathematics',
    qualification: 'M.Sc., B.Ed',
    image: '/f4.webp',
  },
  {
    name: 'Rachani B G',
    designation: 'Senior Teacher',
    subject: 'Science',
    qualification: 'M.Sc., B.Ed',
    image: '/f2.webp',
  },
  {
    name: 'Shailaja',
    designation: 'Teacher',
    subject: 'Computers',
    qualification: 'MCA',
    image: '/f3.webp',
  },
  {
    name: 'Madhavi',
    designation: 'Teacher',
    subject: 'Painting & Drawing',
    qualification: 'MVA',
    image: '/f11.webp',
  },
  {
    name: 'Vindyashree M H',
    designation: 'Computer Operator',
    subject: '',
    qualification: 'B.Sc.',
    image: '/f12.webp',
  },
  {
    name: 'Pushpa N M',
    designation: 'Care Taker / Nurse',
    subject: '',
    qualification: 'GNM',
    image: '/f13.webp',
  },
];

const Faculty: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
          <p className="text-blue-100 text-lg">
            Meet our dedicated school staff committed to academic excellence and student care.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">25+</h3>
            <p className="text-gray-600 mt-1">School Staff Members</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">8+</h3>
            <p className="text-gray-600 mt-1">Average Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">80%</h3>
            <p className="text-gray-600 mt-1">Post Graduate Qualified</p>
          </div>
        </div>
      </section>

      {/* Faculty Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-md transition-shadow overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 font-semibold">{member.designation}</p>
                  {member.subject && (
                    <p className="text-gray-600 mt-1 text-sm">
                      <span className="font-medium">Subject:</span> {member.subject}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm mt-2">
                    <span className="font-medium">Qualification:</span> {member.qualification}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
