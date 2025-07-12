import React from 'react';
import Layout from '../../components/Layout';
import { CalendarDays, Download, Stethoscope, Bus, BookOpenCheck } from 'lucide-react';
import InternalPageHeader from '@/components/pages-comp/InternalPageHeader';

interface EventItem {
  title: string;
  description: string;
  image: string;
  date?: string;
  type?: 'exam' | 'trip' | 'health' | 'academic';
}

const calendarEvents: EventItem[] = [
  {
    title: 'Yearly Time Table',
    description:
      'Our yearly timetable provides a detailed overview of all academic activities, holidays, events, and assessments for each grade.',
    image:
      '/cl1.webp',
    date: 'April 2024 - March 2025',
    type: 'academic',
  },
  {
    title: 'Exam Schedules',
    description:
      'Examinations are important milestones in our academic journey. This section provides updated exam timetables for Unit Tests, Mid-Terms, and Annual Exams for all classes.',
    image:
      '/cl2.jpg',
    date: 'Sep 2024, Dec 2024, Mar 2025',
    type: 'exam',
  },
  {
    title: 'Periodic Health Checks',
    description:
      'The well-being of our students is our priority. We conduct regular health check-ups in partnership with qualified healthcare professionals.',
    image:
      '/cl3.jpg', date: 'Quarterly (June, Oct, Feb)',
    type: 'health',
  },
  {
    title: 'School Trips',
    description:
      'Our educational trips are thoughtfully planned to combine learning, exploration, and fun. These trips help students gain real-world knowledge and social skills.',
    image:
      '/cl4.jpg', date: 'July 2024 & Jan 2025',
    type: 'trip',
  },
];

const iconMap = {
  exam: <CalendarDays className="h-4 w-4 text-red-600" />,
  trip: <Bus className="h-4 w-4 text-yellow-600" />,
  health: <Stethoscope className="h-4 w-4 text-green-600" />,
  academic: <BookOpenCheck className="h-4 w-4 text-blue-600" />,
};

const CalendarOfEvents: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}


        <InternalPageHeader
          title="Calendar of Events"
          description="Stay informed about all important academic and co-curricular activities throughout the year."
          backgroundImageUrl="/g2.jpeg"
        />



        {/* <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Calendar of Events</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Stay informed about all important academic and co-curricular activities throughout the year.
            </p>
            <a
              href="/assets/academic-calendar-2024.pdf"
              target="_blank"
              className="inline-flex items-center mt-6 px-5 py-2 bg-white text-green-800 text-sm font-medium rounded shadow hover:bg-green-100"
            >
              <Download className="w-4 h-4 mr-2" /> Download Full Academic Calendar
            </a>
          </div>
        </section> */}

        {/* What's Next Banner */}
        <section className="bg-yellow-50 border-t border-b py-4 text-center text-sm text-yellow-900">
          <span>📅 Next Key Date: Mid-Term Exams begin Sep 15</span>
        </section>

        {/* Event Sections */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {calendarEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center space-x-2 mb-1 text-sm text-gray-500">
                      {event.type && iconMap[event.type]}
                      {event.date && <span>{event.date}</span>}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm flex-grow">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CalendarOfEvents;
