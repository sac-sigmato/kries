import React from 'react';
import Layout from '../../components/Layout';
import { Users, Award, TrendingUp, Star } from 'lucide-react';
import SSLCToppersSection from '@/components/pages-comp/SSLCToppers';
import SSLCPassSection from '@/components/pages-comp/SSLCPassSection';
import SSLCDistinctionSection from '@/components/pages-comp/SSLCDistinctionSection';
import NeetCetRankSection from '@/components/pages-comp/NeetCetRankSection';
import StudentList from '@/components/pages-comp/StudentList';
import StatsSection from '@/components/pages-comp/StatsSection';
import InternalPageHeader from '@/components/pages-comp/InternalPageHeader';

const StudentStatistics: React.FC = () => {
  const totalStudents = 205;

  const sslcPassByYear = {
    '2021-22': 1,
    '2022-23': 1,
    '2023-24': 1,
    '2024-25': 1,
  };

  const distinctionsByYear = {
    '2021-22': 31,
    '2022-23': 23,
    '2023-24': 10,
    '2024-25': 17,
  };

  const examCounts = {
    CET: 20,
    NEET: 3,
  };

  const summaryCards = [
    { icon: Users, label: 'Total Students', value: totalStudents },
    { icon: TrendingUp, label: 'SSLC Pass (2023-24)', value: `${sslcPassByYear['2023-24']} (100%)` },
    { icon: Star, label: 'Distinctions (2023-24)', value: distinctionsByYear['2023-24'] },
    { icon: Award, label: 'CET & NEET Qualifiers', value: `${examCounts.CET} CET / ${examCounts.NEET} NEET` },
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <InternalPageHeader
          title="Academic Insights"
          description="Explore our school's academic performance, student demographics, and achievements."
          backgroundImageUrl="/g2.jpeg"
        />

        {/* Updated Key Statistics */}
        <StatsSection />


        {/* Keep all below sections as is */}
        <StudentList />

        {/* SSLC Toppers */}
        <SSLCToppersSection />

        <SSLCPassSection />

        <SSLCDistinctionSection />

        <NeetCetRankSection />
      </div>
    </Layout>
  );
};

export default StudentStatistics;
