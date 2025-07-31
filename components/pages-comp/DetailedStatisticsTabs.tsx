import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
  rotateInterval?: number;
}

const isPureNumber = (val: string | number): boolean => {
    if (typeof val === 'number') return true;
    if (typeof val === 'string') {
      const trimmed = val.trim();
      return /^[0-9]+(\.[0-9]+)?$/.test(trimmed);
    }
    return false;
  };
  

const DetailedStatisticsTabs: React.FC<Props> = ({ sections, rotateInterval = 8000 }) => {
  const [activeTab, setActiveTab] = useState(0);

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


        

        {/* Tab Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {sections[activeTab].data.map((item, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-2xl shadow-md text-center bg-gradient-to-br from-[#edf6ff] via-white to-[#fef2fb]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
              >
               {item.icon && (
  <div className="mb-4 flex justify-center">
    <div className={`${item.colorClass ?? ''} text-2xl`}>
      {item.icon}
    </div>
  </div>
)}
                {isPureNumber(item.value) ? (
  <AnimatedCounter value={Number(item.value)} />
) : (
  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.value}</h3>
)}                <p className="text-gray-600 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DetailedStatisticsTabs;

// ✅ Number ticker animation
const AnimatedCounter: React.FC<{ value: string | number }> = ({ value }) => {
    const [display, setDisplay] = useState<number>(0);
  
    const numericValue = typeof value === 'number' ? value : Number(value);
    const isPureNumber =
      typeof value === 'number' ||
      (typeof value === 'string' && /^[0-9]+(\.[0-9]+)?$/.test(value.trim()));
  
    useEffect(() => {
      if (!isPureNumber) return;
  
      const duration = 1000;
      const frameRate = 30;
      const totalFrames = Math.round(duration / (1000 / frameRate));
      let frame = 0;
  
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        setDisplay(Math.floor(progress * numericValue));
  
        if (frame === totalFrames) {
          clearInterval(counter);
          setDisplay(numericValue);
        }
      }, 1000 / frameRate);
  
      return () => clearInterval(counter);
    }, [numericValue, isPureNumber]);
  
    return (
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        {isPureNumber ? display.toLocaleString() : String(value)}
      </h3>
    );
  };
  
  