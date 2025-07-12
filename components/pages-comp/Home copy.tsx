import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, Users, BookOpen, Award, Calendar } from 'lucide-react';
import {
  HeroSection,
  AboutPreviewSection,
  ProgramsHighlightSection,
  LeadershipSection,
  StatisticsSection,
  TestimonialsSection,
  CampusFacilitiesSection,
  NewsEventsSection,
  ContactSection,
  DefaultSection,
  SchoolFacilitySection,
  AchievementsActivitiesSection
} from '../HomeSections';

const Home: React.FC = () => {
  const [sliderItems, setSliderItems] = useState<any[]>([]);
  const [sections, setSections] = useState<any[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetchHomeData();
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
  }, [sliderItems.length]);

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (sliderItems.length > 1) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [sliderItems.length, nextSlide]);

  const fetchHomeData = async () => {
    try {
      const [sliderResponse, sectionsResponse] = await Promise.all([
        fetch('/api/home-slider'),
        fetch('/api/home-sections')
      ]);

      if (sliderResponse.ok) {
        const sliderData = await sliderResponse.json();
        setSliderItems(sliderData);
      }

      if (sectionsResponse.ok) {
        const sectionsData = await sectionsResponse.json();
        setSections(sectionsData);
      }
    } catch (error) {
      console.error('Error fetching home data:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderSection = (section: any) => {
    switch (section.section_name) {
      case 'hero_section':
        return <HeroSection key={section._id} section={section} />;
      case 'about_preview':
        return <AboutPreviewSection key={section._id} section={section} />;
      case 'programs_highlight':
        return <ProgramsHighlightSection key={section._id} section={section} />;
      case 'leadership':
        return <LeadershipSection key={section._id} section={section} />;
      case 'achievements':
        return <StatisticsSection key={section._id} section={section} />;
      case 'testimonials':
        return <TestimonialsSection key={section._id} section={section} />;
      case 'facilities':
        return <CampusFacilitiesSection key={section._id} section={section} />;
      case 'news_events':
        return <NewsEventsSection key={section._id} section={section} />;
      case 'contact_section':
        return <ContactSection key={section._id} section={section} />;
      case 'school_facility':
        return <SchoolFacilitySection key={section._id} section={section} />;
      case 'achievements_activities':
        return <AchievementsActivitiesSection key={section._id} section={section} />;
      default:
        return <DefaultSection key={section._id} section={section} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        {sliderItems.length > 0 ? (
          <div className="relative h-full">
            {sliderItems.map((slide, index) => (
              <div
                key={slide._id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div
                  className="h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image_url})` }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  <div className="relative h-full flex items-center justify-center text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                      {slide.subtitle && (
                        <p className="text-xl text-blue-200 mb-4">{slide.subtitle}</p>
                      )}
                      <h1 className="text-4xl md:text-6xl font-bold mb-6">{slide.title}</h1>
                      <p className="text-xl mb-8 max-w-3xl mx-auto">{slide.description}</p>
                      {slide.button_text && slide.button_url && (
                        <Link
                          href={slide.button_url}
                          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                        >
                          {slide.button_text}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Slider Indicators */}
            {sliderItems.length > 1 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {sliderItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          // Fallback hero section
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    Karnataka Residential Educational 
                    <span className="text-blue-300"> Institutions Society</span>
                  </h1>
                  <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                    Promoting educational development of rural children across Karnataka through 
                    quality residential education for SC, ST and BC communities since 1999.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/about"
                      className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center group"
                    >
                      About KREIS
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/admissions"
                      className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
                    >
                      School Admissions
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Students studying"
                    className="rounded-lg shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-600 text-white p-3 rounded-full">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">10,000+</p>
                       <p className="text-gray-600">Rural Students</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Campus Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-teal-500 mb-4 flex justify-center">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">15 Acre</h3>
              <p className="text-gray-600">of Campus</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-500 mb-4 flex justify-center">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Students Studying</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-teal-500 mb-4 flex justify-center">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">35+</h3>
              <p className="text-gray-600">Education Heroes</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-500 mb-4 flex justify-center">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Alumni Network</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-yellow-500 mb-4 flex justify-center">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Free Education with Food & Lodging</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-500 mb-4 flex justify-center">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">91%</h3>
              <p className="text-gray-600">Passing Percentage</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-yellow-500 mb-4 flex justify-center">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Girl Safe Environment</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-teal-500 mb-4 flex justify-center">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"/>
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">4+</h3>
              <p className="text-gray-600">CSR Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {sections.map((section) => renderSection(section))}

      {/* Fallback sections if no sections are configured */}
      {sections.length === 0 && (
        <>
          {/* Features Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose KREIS Schools?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We provide quality residential education specifically designed for rural SC, ST and BC students across Karnataka.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Residential Education</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Co-educational residential schools from 6th to 10th grade, modeled after Jawahar Navodaya Vidyalaya system.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-green-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Rural Focus</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Specifically designed for socially and educationally backward rural communities across Karnataka.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Gender Equality</h3>
                  <p className="text-gray-600 leading-relaxed">
                    50% seats reserved for girls in all our schools, promoting gender equality in rural education.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join KREIS Schools
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Empowering rural students through quality residential education. Join our mission to bring rural children to the mainstream of society.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/admissions"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  School Admissions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Contact KREIS
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
      
      {/* Food Quality & Transparency Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Food Quality & Transparency</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Social Welfare Department of Karnataka is taking a bold step towards transparency, accountability, and social audit by ensuring meal quality and hostels is closely monitored. This initiative enhances public trust and provides real-time insights into student nutrition, ensuring that meals served in residential schools and hostels meet the highest standards of quality and hygiene.
              </p>
              <a 
                href="https://x.com/kreiskrcrs661" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
              >
                Follow our Food Transparency Updates
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 flex items-center">
                    <div className="flex animate-scroll space-x-4 whitespace-nowrap px-4">
                      {[
                        "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600",
                        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                      ].map((img, index) => (
                        <img 
                          key={index}
                          src={img} 
                          alt={`Food quality ${index + 1}`} 
                          className="h-80 w-80 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;