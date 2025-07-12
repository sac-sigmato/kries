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

const sslcData = [
  { year: '2021-22', sats: '018 867 827', percentage: 100 },
  { year: '2022-23', sats: '060 044 491', percentage: 100 },
  { year: '2023-24', sats: '091 833 947', percentage: 100 },
  { year: '2024-25', sats: '101 987 527', percentage: 100 },
];

export default function SSLCPassSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800">SSLC Pass Percentage</h2>
          <p className="mt-2 text-gray-600 text-sm">
            100% success rate across academic years – celebrating our top-performing batches.
          </p>
        </div>

        {/* Chart */}
        <div className="mb-10">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sslcData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[90, 100]} tickFormatter={(tick) => `${tick}%`} />
              <Tooltip formatter={(val) => `${val}%`} />
              <Legend />
              <Bar dataKey="percentage" fill="#3b82f6" name="Pass %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-xl rounded-xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">S.NO</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">SATS Number</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Academic Year</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Percentage</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {sslcData.map((row, i) => (
                <tr key={i} className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 text-sm text-gray-800 font-medium">{i + 1}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.sats}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.year}</td>
                  <td className="px-6 py-4 text-sm font-bold text-green-600">{row.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
