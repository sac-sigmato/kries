import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, BookOpen, Award, Calendar, Star, TrendingUp, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface SectionProps {
  section: {
    id: string;
    section_name: string;
    title: string;
    content: string;
    image_url?: string;
    button_text?: string;
    button_url?: string;
  };
}

// Hero Section Component
export const HeroSection: React.FC<SectionProps> = ({ section }) => (
  <section className="relative h-screen overflow-hidden">
    <div
      className="h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${section.image_url || 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1200'})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{section.title}</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{section.content}</p>
          {section.button_text && section.button_url && (
            <Link
              href={section.button_url}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              {section.button_text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  </section>
);

// About Preview Section
export const AboutPreviewSection: React.FC<SectionProps> = ({ section }) => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {section.title}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {section.content}
          </p>
          {section.button_text && section.button_url && (
            <Link
              href={section.button_url}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              {section.button_text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          )}
        </div>
        <div className="relative">
          <img
            src={
              "https://getmycollege.in/wp-content/uploads/2025/06/School-Main-Block-Pic-2.png?auto=compress&cs=tinysrgb&w=800"
            }
            alt={section.title}
            className="rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">1,500+</p>
                <p className="text-gray-600">Happy Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Programs Highlight Section
export const ProgramsHighlightSection: React.FC<SectionProps> = ({ section }) => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{section.title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{section.content}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Computer Science",
            description: "Learn programming, algorithms, and software development",
            image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=400",
            duration: "4 Years",
            type: "Bachelor's"
          },
          {
            title: "Business Administration", 
            description: "Develop leadership skills and business acumen",
            image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400",
            duration: "4 Years",
            type: "Bachelor's"
          },
          {
            title: "Engineering",
            description: "Build the future with comprehensive engineering programs",
            image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400",
            duration: "4 Years", 
            type: "Bachelor's"
          }
        ].map((program, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="relative overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
                  {program.type}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{program.duration}</span>
                <Link href="/programs" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Leadership Section
export const LeadershipSection: React.FC<SectionProps> = ({ section }) => (
  <section className="py-20 bg-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{section.title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{section.content}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            name: "Dr. Sarah Mitchell",
            position: "President",
            image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
          },
          {
            name: "Prof. James Wilson", 
            position: "Vice President Academic",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
          },
          {
            name: "Dr. Maria Rodriguez",
            position: "Dean of Students", 
            image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300"
          },
          {
            name: "Dr. Michael Chen",
            position: "Research Director",
            image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300"
          }
        ].map((leader, index) => (
          <div key={index} className="text-center group">
            <div className="relative mb-4">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{leader.name}</h3>
            <p className="text-blue-600 font-medium text-sm">{leader.position}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Statistics Section
export const StatisticsSection: React.FC<SectionProps> = ({ section }) => (
  <section className="py-20 bg-blue-600 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.title}</h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">{section.content}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { icon: Users, number: "821", label: "Residential Schools & Colleges" },
          { icon: Award, number: "250", label: "Students Per School" },
          { icon: BookOpen, number: "50%", label: "Seats Reserved for Girls" },
          { icon: TrendingUp, number: "25+", label: "Years of Service" }
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="bg-white bg-opacity-20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <stat.icon className="h-10 w-10" />
            </div>
            <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
            <p className="text-blue-100">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Testimonials Section
export const TestimonialsSection: React.FC<SectionProps> = ({ section }) => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{section.title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{section.content}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Sarah Johnson",
            program: "Computer Science Graduate",
            image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
            quote: "The program prepared me perfectly for my career in tech. I landed my dream job right after graduation!",
            rating: 5
          },
          {
            name: "Michael Chen", 
            program: "Business Administration Graduate",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
            quote: "The faculty's real-world experience and networking opportunities were invaluable to my success.",
            rating: 5
          },
          {
            name: "Emily Rodriguez",
            program: "Engineering Graduate",
            image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200", 
            quote: "The hands-on approach and state-of-the-art facilities made learning engaging and effective.",
            rating: 5
          }
        ].map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.program}</p>
                <div className="flex mt-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Campus Facilities Section
export const CampusFacilitiesSection: React.FC<SectionProps> = ({ section }) => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {section.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {section.content}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Morarji Desai Residential Schools",
            description:
              "Co-education from 6th to 10th grade with 50 students per class",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/School-Lab-4.jpg?auto=compress&cs=tinysrgb&w=400",
          },
          {
            title: "Kittur Rani Chennamma Schools",
            description: "Quality education for SC, ST and BC rural students",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/School-Classroom-Pic.png?auto=compress&cs=tinysrgb&w=400",
          },
          {
            title: "Dr. B R Ambedkar Schools",
            description:
              "Empowering socially and educationally backward communities",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/Gallery-Pic-2.png?auto=compress&cs=tinysrgb&w=400",
          },
          {
            title: "Atal Bihari Vajpayee Schools",
            description:
              "Residential education modeled after Jawahar Navodaya Vidyalaya",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/School-Lab-3.jpg?auto=compress&cs=tinysrgb&w=400",
          },
          {
            title: "Smt. Indira Gandhi Schools",
            description:
              "50% seats reserved for girls promoting gender equality",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/School-Lab-2.jpg?auto=compress&cs=tinysrgb&w=400",
          },
          {
            title: "Pre University Colleges",
            description:
              "Continuing education beyond 10th grade for rural students",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/School-Lab-1.jpg?auto=compress&cs=tinysrgb&w=400",
          },
        ].map((facility, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {facility.title}
            </h3>
            <p className="text-gray-600 text-sm">{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// News & Events Section
export const NewsEventsSection: React.FC<SectionProps> = ({ section }) => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{section.title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{section.content}</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Latest News */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h3>
          <div className="space-y-6">
            {[
              {
                title: "New Research Center Opens",
                date: "March 15, 2024",
                excerpt: "State-of-the-art facility for AI and machine learning research"
              },
              {
                title: "Record Breaking Placement Season",
                date: "March 10, 2024", 
                excerpt: "98% of students placed with average package increase of 25%"
              },
              {
                title: "International Partnership Announced",
                date: "March 5, 2024",
                excerpt: "New collaboration with leading European universities"
              }
            ].map((news, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">{news.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{news.excerpt}</p>
                <p className="text-blue-600 text-xs font-medium">{news.date}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Upcoming Events */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
          <div className="space-y-6">
            {[
              {
                title: "Open House 2024",
                date: "March 25, 2024",
                time: "10:00 AM - 4:00 PM",
                location: "Main Campus"
              },
              {
                title: "Career Fair",
                date: "April 2, 2024",
                time: "9:00 AM - 3:00 PM", 
                location: "Student Center"
              },
              {
                title: "Tech Innovation Conference",
                date: "April 10, 2024",
                time: "1:00 PM - 6:00 PM",
                location: "Engineering Building"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
                <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Contact Section
export const ContactSection: React.FC<SectionProps> = ({ section }) => (
  <section className="py-20 bg-blue-600 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{section.title}</h2>
          <p className="text-xl text-blue-100 mb-8">{section.content}</p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3" />
              <span>info@educollege.edu</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3" />
              <span>123 Education Street, City, State 12345</span>
            </div>
          </div>
          
          {section.button_text && section.button_url && (
            <Link
              href={section.button_url}
              className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              {section.button_text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          )}
        </div>
        
        <div className="bg-white p-8 rounded-xl text-gray-900">
          <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

// Default Section (fallback)
export const DefaultSection: React.FC<SectionProps> = ({ section }) => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{section.title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{section.content}</p>
      </div>
      
      {section.image_url && (
        <div className="text-center mb-8">
          <img
            src={section.image_url}
            alt={section.title}
            className="mx-auto rounded-lg shadow-lg max-w-2xl w-full"
          />
        </div>
      )}
      
      {section.button_text && section.button_url && (
        <div className="text-center">
          <Link
            href={section.button_url}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            {section.button_text}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      )}
    </div>
  </section>
);

// School Facility Section
export const SchoolFacilitySection: React.FC<SectionProps> = ({ section }) => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {section.title}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {section.content}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Infrastructure",
            description:
              "Modern buildings with well-ventilated classrooms, administrative blocks, and residential quarters designed for optimal learning environment.",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/School-Main-Block-Pic-1-1024x768.png?auto=compress&cs=tinysrgb&w=400",
            icon: "🏢",
          },
          {
            title: "Laboratories",
            description:
              "Well-equipped science laboratories, computer labs, and language labs with modern equipment for hands-on learning experiences.",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/School-Lab-2.jpg?auto=compress&cs=tinysrgb&w=400",
            icon: "🔬",
          },
          {
            title: "Hostel & Canteen",
            description:
              "Comfortable residential facilities with nutritious meals, separate hostels for boys and girls with proper supervision and care.",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/School-Hostel-Canteen-Pic.jpg?auto=compress&cs=tinysrgb&w=400",
            icon: "🏠",
          },
          {
            title: "Open Air Auditorium & Playground",
            description:
              "Spacious playgrounds for sports activities and open-air auditoriums for cultural events, assemblies, and community gatherings.",
            image:
              "https://getmycollege.in/wp-content/uploads/2025/06/481123898_1158153019438079_2864866343096138457_n.jpg?auto=compress&cs=tinysrgb&w=400",
            icon: "🏟️",
          },
        ].map((facility, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded-full">
                <span className="text-2xl">{facility.icon}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {facility.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {facility.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Facility Details */}
      <div className="mt-16 bg-blue-50 rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Library Facilities
            </h4>
            <p className="text-gray-600 text-sm">
              Well-stocked libraries with books in multiple languages, reference
              materials, and digital resources for comprehensive learning.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏥</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Medical Facilities
            </h4>
            <p className="text-gray-600 text-sm">
              On-campus medical facilities with qualified staff to ensure
              student health and well-being at all times.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Security & Safety
            </h4>
            <p className="text-gray-600 text-sm">
              24/7 security arrangements with CCTV surveillance and safety
              protocols to ensure a secure learning environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Achievements & Activities Section
export const AchievementsActivitiesSection: React.FC<SectionProps> = ({ section }) => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{section.title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{section.content}</p>
      </div>
      
      {/* Main Achievement Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Student Achievements & Activities */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Student Achievements & Activities</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-full mt-1">
                <Star className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Academic Excellence</h4>
                <p className="text-gray-600 text-sm">Students consistently achieve high scores in state board examinations with many securing top ranks.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-600 p-2 rounded-full mt-1">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Leadership Development</h4>
                <p className="text-gray-600 text-sm">Student council activities, peer mentoring programs, and leadership workshops.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 text-purple-600 p-2 rounded-full mt-1">
                <BookOpen className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Scholarship Recipients</h4>
                <p className="text-gray-600 text-sm">Many students receive merit scholarships for higher education in prestigious institutions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <div className="bg-green-600 text-white p-3 rounded-full mr-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Academic Achievements</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-green-600">100%</span>
                <span className="text-green-600 text-sm font-medium">Pass Rate</span>
              </div>
              <p className="text-gray-600 text-sm">Overall pass percentage in SSLC examinations</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-blue-600">95%</span>
                <span className="text-blue-600 text-sm font-medium">Higher Education</span>
              </div>
              <p className="text-gray-600 text-sm">Students pursuing higher education after 10th grade</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-purple-600">17+</span>
                <span className="text-purple-600 text-sm font-medium">Distinctions</span>
              </div>
              <p className="text-gray-600 text-sm">Distinction from KRCRS, Balepura School</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Co-Curricular & Cultural Activities */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-center mb-6">
            <div className="bg-orange-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎭</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Co-Curricular & Cultural Activities</h3>
          </div>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              Annual cultural festivals and competitions
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              Drama, music, and dance performances
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              Art and craft exhibitions
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              Literary competitions and debates
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              Science exhibitions and projects
            </li>
          </ul>
        </div>

        {/* Sports & Physical Development */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-center mb-6">
            <div className="bg-red-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Sports & Physical Development</h3>
          </div>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              Inter-school sports competitions
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              Cricket, football, and volleyball teams
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              Athletics and track events
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              Yoga and physical fitness programs
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              State-level tournament participation
            </li>
          </ul>
        </div>

        {/* Social Initiatives & Leadership Activities */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="text-center mb-6">
            <div className="bg-teal-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Social Initiatives & Leadership</h3>
          </div>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
              Community service projects
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
              Environmental awareness campaigns
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
              Student government and councils
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
              Peer mentoring programs
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
              Social awareness workshops
            </li>
          </ul>
        </div>
      </div>

      {/* Success Stories Highlight */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Our students have gone on to achieve remarkable success in various fields, from engineering and medicine to civil services and entrepreneurship.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">150+</div>
            <div className="text-blue-200 text-sm">Engineering College Admissions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">75+</div>
            <div className="text-blue-200 text-sm">Medical College Admissions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">25+</div>
            <div className="text-blue-200 text-sm">Civil Services Selections</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);