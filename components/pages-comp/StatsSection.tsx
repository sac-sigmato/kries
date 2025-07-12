import React, { useEffect, useState } from 'react';
import { Users, Award, TrendingUp, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const yearlyStats = {
  '2021-22': { pass: '100%', distinction: 31 },
  '2022-23': { pass: '100%', distinction: 23 },
  '2023-24': { pass: '100%', distinction: 10 },
  '2024-25': { pass: '100%', distinction: 17 },
};

const examCounts = { CET: 20, NEET: 3 };
const totalStudents = 205;
const years = Object.keys(yearlyStats) as Array<keyof typeof yearlyStats>;

const StatsSection: React.FC = () => {
  const [yearIndex, setYearIndex] = useState(0);
  const currentYear = years[yearIndex];
  const { pass, distinction } = yearlyStats[currentYear];

  useEffect(() => {
    const interval = setInterval(() => {
      setYearIndex((prev) => (prev + 1) % years.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const summaryCards = [
    {
      icon: Users,
      label: 'Total Students',
      value: totalStudents.toString(),
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: TrendingUp,
      label: `SSLC Pass (${currentYear})`,
      value: pass,
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Star,
      label: `Distinctions (${currentYear})`,
      value: distinction.toString(),
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: Award,
      label: 'CET & NEET Qualifiers',
      value: `${examCounts.CET} CET / ${examCounts.NEET} NEET`,
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {summaryCards.map(({ icon: Icon, label, value, color }, index) => (
            <div key={index} className="text-center">
              <motion.div
                className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${color}`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Icon className="h-7 w-7" />
              </motion.div>
              <AnimatePresence mode="wait">
                <motion.h3
                  key={`${label}-${value}`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl font-bold text-gray-900 mb-1"
                >
                  {value}
                </motion.h3>
              </AnimatePresence>
              <p className="text-gray-600 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
