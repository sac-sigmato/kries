'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#3b82f6', '#f97316']; // NEET Blue, CET Orange

const rankHolders = [
  { sats: '163 800 225', name: 'PRUTHVI', exam: 'NEET', year: '2021-22' },
  { sats: '198 784 193', name: 'BHAVYA R', exam: 'NEET', year: '' },
  { sats: '200 421 787', name: 'LIKITHA K', exam: 'NEET', year: '' },
  { sats: '200 064 742', name: 'LAVANYA H N', exam: 'CET', year: '' },
  { sats: '197 459 668', name: 'MEGHANA', exam: 'CET', year: '' },
  { sats: '199 697 209', name: 'NETHRAVATHI K', exam: 'CET', year: '' },
  { sats: '148 146 343', name: 'NETHRAVATHI M', exam: 'CET', year: '' },
  { sats: '201 910 636', name: 'NITHYASHREE M', exam: 'CET', year: '' },
  { sats: '197 459 668', name: 'BRUNDA N', exam: 'CET', year: '2022-23' },
  { sats: '199 697 209', name: 'GANASHREE N', exam: 'CET', year: '' },
  { sats: '148 146 343', name: 'GANAVI G', exam: 'CET', year: '' },
  { sats: '201 910 636', name: 'KANCHANA B M', exam: 'CET', year: '' },
  { sats: '197 459 668', name: 'LAVANYA N K', exam: 'CET', year: '' },
  { sats: '199 697 209', name: 'LEKHANA M', exam: 'CET', year: '' },
  { sats: '148 146 343', name: 'LIKITHA', exam: 'CET', year: '' },
  { sats: '201 910 636', name: 'NANDITHA R', exam: 'CET', year: '' },
  { sats: '197 459 668', name: 'NANDUSHREE D', exam: 'CET', year: '' },
  { sats: '199 697 209', name: 'PREKSHITHA', exam: 'CET', year: '' },
  { sats: '148 146 343', name: 'RAMYA N', exam: 'CET', year: '' },
  { sats: '201 910 636', name: 'RANJITHA', exam: 'CET', year: '' },
  { sats: '199 697 209', name: 'SHASHIREKHA G', exam: 'CET', year: '' },
  { sats: '148 146 343', name: 'VANITHA K', exam: 'CET', year: '' },
  { sats: '201 910 636', name: 'VARSHINI N', exam: 'CET', year: '' },
];

const pieData = [
  { name: 'NEET', value: rankHolders.filter((r) => r.exam === 'NEET').length },
  { name: 'CET', value: rankHolders.filter((r) => r.exam === 'CET').length },
];

export default function NeetCetRankSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-700">NEET / CET Rank Holders</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Celebrating academic excellence of our students in competitive exams
          </p>
        </div>

        {/* Pie Chart */}
        <div className="flex justify-center mb-12">
          <ResponsiveContainer width={320} height={240}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="min-w-full text-sm text-left divide-y divide-gray-200">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="px-4 py-3 font-semibold">S.NO</th>
                <th className="px-4 py-3 font-semibold">SATS Number</th>
                <th className="px-4 py-3 font-semibold">Student Name</th>
                <th className="px-4 py-3 font-semibold">Exam</th>
                <th className="px-4 py-3 font-semibold">Academic Year</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rankHolders.map((r, i) => (
                <tr key={i} className="hover:bg-blue-50 transition">
                  <td className="px-4 py-2 font-medium text-gray-800">{i + 1}</td>
                  <td className="px-4 py-2 text-gray-700">{r.sats}</td>
                  <td className="px-4 py-2 text-gray-700">{r.name}</td>
                  <td className="px-4 py-2 text-sm font-semibold text-blue-600">{r.exam}</td>
                  <td className="px-4 py-2 text-gray-600">{r.year || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
