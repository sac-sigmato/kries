import React from 'react';
import Layout from '../../components/Layout';

interface EventItem {
  title: string;
  description: string;
  image: string;
}

const calendarEvents: EventItem[] = [
  {
    title: "Yearly Time Table",
    description:
      "Our yearly timetable provides a detailed overview of all academic activities, holidays, events, and assessments for each grade.",
    image:
      "https://images.pexels.com/photos/3747444/pexels-photo-3747444.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Exam Schedules",
    description:
      "Examinations are important milestones in our academic journey. This section provides updated exam timetables for Unit Tests, Mid-Terms, and Annual Exams for all classes.",
    image:
      "https://images.pexels.com/photos/3747444/pexels-photo-3747444.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Periodic Health Checks",
    description:
      "The well-being of our students is our priority. We conduct regular health check-ups in partnership with qualified healthcare professionals.",
    image:
      "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "School Trips",
    description:
      "Our educational trips are thoughtfully planned to combine learning, exploration, and fun. These trips help students gain real-world knowledge and social skills.",
    image:
      "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const CalendarOfEvents: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Calendar of Events</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Stay informed about all important academic and co-curricular activities throughout the year.
            </p>
          </div>
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
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
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
