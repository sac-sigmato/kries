'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const distinctionData = [
  { year: '2021-22', sats: '163 800 225', students: 31 },
  { year: '2022-23', sats: '198 784 193', students: 23 },
  { year: '2023-24', sats: '200 421 787', students: 10 },
  { year: '2024-25', sats: '200 421 787', students: 17 },
];

export default function SSLCDistinctionSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-700">
            SSLC Distinction Students
          </h2>
          <p className="mt-2 text-gray-600 text-sm">
            Recognizing our brightest students who achieved distinction scores across batches.
          </p>
        </div>

        {/* Bar Chart */}
        <div className="mb-10">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={distinctionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="students" fill="#ec4899" name="Distinction Students" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-xl rounded-xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-pink-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">S.NO</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">SATS Number</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Academic Year</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Distinction Count</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {distinctionData.map((row, index) => (
                <tr key={index} className="hover:bg-pink-50 transition">
                  <td className="px-6 py-4 text-sm text-gray-800 font-medium">{index + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.sats}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.year}</td>
                  <td className="px-6 py-4 text-sm font-bold text-pink-600">{row.students}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
