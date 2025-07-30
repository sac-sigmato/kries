import React from 'react';

export type StatItem = {
  label: string;
  value: string;
  icon: React.ReactNode;
  colorClass: string;
};

interface StatisticsSectionProps {
  stats: StatItem[];
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({ stats }) => {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className={`${item.colorClass} mb-4 flex justify-center`}>
                {item.icon}
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">
                {item.value}
              </h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {stats.slice(4).map((item, i) => (
            <div
              key={i + 4}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className={`${item.colorClass} mb-4 flex justify-center`}>
                {item.icon}
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">
                {item.value}
              </h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
