import React from 'react';

const sslcToppers = [
  {
    year: '2021-22',
    students: [
      { sats: '018867827', name: 'PRUTHVI K', marks: 622, percentage: 99.52 },
      { name: 'MOHITHA N', marks: 614, percentage: 98.24 },
      { name: 'GANAVI S', marks: 608, percentage: 97.28 },
    ],
  },
  {
    year: '2022-23',
    students: [
      { sats: '060044491', name: 'KEERTHANA M', marks: 585, percentage: 93.6 },
      { name: 'KAVYA N', marks: 576, percentage: 92.16 },
      { name: 'KANCHANA B M', marks: 566, percentage: 90.56 },
    ],
  },
  {
    year: '2023-24',
    students: [
      { sats: '091833947', name: 'POOJA B S', marks: 594, percentage: 95.04 },
      { name: 'RAMYA', marks: 576, percentage: 92.16 },
      { name: 'PAVANI P', marks: 564, percentage: 90.24 },
    ],
  },
  {
    year: '2024-25',
    students: [
      { sats: '091833947', name: 'REKHA', marks: 614, percentage: 98.24 },
      { name: 'CHETHANA K', marks: 609, percentage: 97.44 },
      { name: 'NAVYASHREE P N', marks: 585, percentage: 93.6 },
    ],
  },
];

const SSLCToppersSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">SSLC Toppers</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {sslcToppers.map((batch, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Academic Year: {batch.year}
              </h3>
              <table className="w-full text-sm text-left text-gray-700">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="pb-1">S.No</th>
                    <th className="pb-1">Name</th>
                    <th className="pb-1">SATS</th>
                    <th className="pb-1">Marks</th>
                    <th className="pb-1">%</th>
                  </tr>
                </thead>
                <tbody>
                  {batch.students.map((student, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-1">{idx + 1}</td>
                      <td className="py-1 font-medium">{student.name}</td>
                      <td className="py-1 text-xs text-gray-500">{student.sats || '-'}</td>
                      <td className="py-1">{student.marks}</td>
                      <td className="py-1">{student.percentage}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SSLCToppersSection;
