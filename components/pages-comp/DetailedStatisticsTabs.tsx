import React, { useEffect, useState } from 'react';

type StatItem = {
  label: string;
  value: string;
  icon?: React.ReactNode;
  colorClass?: string;
};

interface StatGroup {
  title: string;
  data: StatItem[];
}

interface Props {
  sections: StatGroup[];
  rotateInterval?: number; // Optional: time in ms
}

const DetailedStatisticsTabs: React.FC<Props> = ({ sections, rotateInterval = 8000 }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % sections.length);
    }, rotateInterval);
    return () => clearInterval(interval);
  }, [sections.length, rotateInterval]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeTab === index
                  ? 'bg-[#4c4e8a] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {sections[activeTab].data.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-md text-center bg-gradient-to-br from-gray-50 via-white to-[#fef2fb]"
              >
              <div className={`${item.colorClass} mb-4 flex justify-center`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.value}</h3>
              <p className="text-gray-600 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedStatisticsTabs;
