import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, Search, Filter } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image_url?: string;
  category: string;
  max_participants?: number;
  registration_required: boolean;
  created_at: string;
  updated_at: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showPastEvents, setShowPastEvents] = useState(false);

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'academic', label: 'Academic' },
    { value: 'sports', label: 'Sports' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'admission', label: 'Admission' },
    { value: 'examination', label: 'Examination' },
    { value: 'celebration', label: 'Celebration' },
    { value: 'workshop', label: 'Workshop' },
    { value: 'meeting', label: 'Meeting' }
  ];

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/events');
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || event.category === selectedCategory;
    
    const eventDate = new Date(event.date);
    const now = new Date();
    const isPastEvent = eventDate < now;
    
    const matchesTimeFilter = showPastEvents ? isPastEvent : !isPastEvent;
    
    return matchesSearch && matchesCategory && matchesTimeFilter;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      academic: 'bg-blue-100 text-blue-800',
      sports: 'bg-green-100 text-green-800',
      cultural: 'bg-purple-100 text-purple-800',
      admission: 'bg-orange-100 text-orange-800',
      examination: 'bg-red-100 text-red-800',
      celebration: 'bg-yellow-100 text-yellow-800',
      workshop: 'bg-indigo-100 text-indigo-800',
      meeting: 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryLabel = (category: string) => {
    const categoryObj = categories.find(c => c.value === category);
    return categoryObj?.label || category;
  };

  const isEventUpcoming = (dateString: string) => {
    return new Date(dateString) > new Date();
  };

  if (loading) {
    return (
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Events</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Join us for exciting events that connect our community and enhance your college experience.
              </p>
            </div>
          </div>
        </section>

        {/* Loading */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Events</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join us for exciting events that connect our community and enhance your college experience.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search events..."
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setShowPastEvents(!showPastEvents)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  showPastEvents
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                }`}
              >
                {showPastEvents ? 'Show Upcoming' : 'Show Past Events'}
              </button>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No events found</h3>
              <p className="text-gray-600">
                {searchTerm || selectedCategory
                  ? 'Try adjusting your search criteria or filters.'
                  : showPastEvents
                  ? 'No past events to display.'
                  : 'No upcoming events scheduled at the moment. Check back soon!'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  {event.image_url && (
                    <div className="relative overflow-hidden">
                      <img
                        src={event.image_url}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${getCategoryColor(event.category)}`}>
                          {getCategoryLabel(event.category)}
                        </span>
                      </div>
                      {!isEventUpcoming(event.date) && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-gray-600 text-white px-2 py-1 text-xs font-semibold rounded">
                            Past Event
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      {!event.image_url && (
                        <span className={`px-2 py-1 text-xs font-semibold rounded ${getCategoryColor(event.category)}`}>
                          {getCategoryLabel(event.category)}
                        </span>
                      )}
                      {event.registration_required && (
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 text-xs font-semibold rounded">
                          Registration Required
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-2" />
                        {formatTime(event.date)}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      {event.max_participants && (
                        <div className="flex items-center text-gray-500 text-sm">
                          <Users className="h-4 w-4 mr-2" />
                          Max {event.max_participants} participants
                        </div>
                      )}
                    </div>
                    
                    {isEventUpcoming(event.date) && (
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        {event.registration_required ? 'Register Now' : 'Learn More'}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;