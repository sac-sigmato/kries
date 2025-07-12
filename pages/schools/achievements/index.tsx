import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import InternalPageHeader from '@/components/pages-comp/InternalPageHeader';

const categoryCards = [
  {
    key: 'academic',
    title: 'Academic Achievements',
    description:
      'Explore our students’ academic excellence in district, state, and national exams.',
    photo:
      '/a1.jpg'
  },
  {
    key: 'sports',
    title: 'Sports & Physical Achievements',
    description:
      'Learn about our victories in kabaddi, yoga, and other physical competitions.',
    photo:
      '/Yoga_1.jpeg'
  },
  {
    key: 'cultural',
    title: 'Co-Curricular & Cultural Achievements',
    description:
      'From dance and art to literature – explore our students’ creative journey.',
    photo:
      '/Schoo-event1.jpeg'
  },
  {
    key: 'social',
    title: 'Social Initiative Activities',
    description:
      'See how students lead social change through community and environmental projects.',
    photo:
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const Achievements: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero */}


        <InternalPageHeader
          title="Achievements & Activities"
          description="Discover our students’ academic excellence, sporting success, cultural achievements, and community contributions."
          backgroundImageUrl="/g2.jpeg"
        />

        {/* Four Cards */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categoryCards.map((card) => (
                <Link key={card.key} href={`/achievements/${card.key}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer overflow-hidden">
                    <img
                      src={card.photo}
                      alt={card.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{card.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Achievements;
