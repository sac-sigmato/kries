import React from 'react';
import Layout from '../../../components/Layout';

interface AchievementItem {
  heading: string;
  photo: string;
  description: string;
}

const achievements = {
  academic: {
    title: 'Academic Achievements',
    items: [
      {
        heading: 'District Topper Award',
        photo: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Our students secured top ranks in the district SSLC exams with outstanding academic performance in all subjects.'
      },
      {
        heading: 'Science Olympiad Success',
        photo: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Three of our students qualified for the national-level Science Olympiad, showcasing excellence in STEM education.'
      }
    ]
  },
  sports: {
    title: 'Sports & Physical Achievements',
    items: [
      {
        heading: 'State-Level Kabaddi Champions',
        photo: 'https://images.pexels.com/photos/1406768/pexels-photo-1406768.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Our kabaddi team won the gold medal at the state-level tournament with excellent teamwork and sportsmanship.'
      },
      {
        heading: 'Yoga Competition Winner',
        photo: 'https://images.pexels.com/photos/3822195/pexels-photo-3822195.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Student participation in national yoga championships helped boost physical fitness and mindfulness.'
      }
    ]
  },
  cultural: {
    title: 'Co-Curricular & Cultural Achievements',
    items: [
      {
        heading: 'District Level Dance Competition',
        photo: 'https://images.pexels.com/photos/287742/pexels-photo-287742.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Our students performed Bharatanatyam and folk dance and secured the first place in district cultural events.'
      },
      {
        heading: 'Inter-school Art Exhibition',
        photo: 'https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Painting and drawing students showcased creative talent in a prestigious inter-school exhibition.'
      }
    ]
  },
  social: {
    title: 'Social Initiative Activities',
    items: [
      {
        heading: 'Clean Campus Drive',
        photo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Students led a cleanliness drive to maintain hygiene and environmental awareness within the school.'
      },
      {
        heading: 'Community Awareness Campaign',
        photo: 'https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'An outreach program was organized to educate rural communities about health and hygiene practices.'
      }
    ]
  }
};

const Section = ({ title, items }: { title: string; items: AchievementItem[] }) => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full"
          >
            <img
              src={item.photo}
              alt={item.heading}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.heading}</h3>
              <p className="text-gray-600 text-sm flex-grow">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Achievements: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Achievements & Activities
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover our students’ academic excellence, sporting success, cultural achievements, and community contributions.
            </p>
          </div>
        </section>

        {/* Section Blocks */}
        <Section title={achievements.academic.title} items={achievements.academic.items} />
        <Section title={achievements.sports.title} items={achievements.sports.items} />
        <Section title={achievements.cultural.title} items={achievements.cultural.items} />
        <Section title={achievements.social.title} items={achievements.social.items} />
      </div>
    </Layout>
  );
};

export default Achievements;
