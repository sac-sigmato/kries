import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Edit, Eye, EyeOff, Plus, Trash2 } from 'lucide-react';

interface HomeSection {
  _id: string;
  section_name: string;
  title: string;
  content: string;
  image_url?: string;
  button_text?: string;
  button_url?: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface SliderItem {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  image_url: string;
  button_text?: string;
  button_url?: string;
  order_index: number;
  is_active: boolean;
}

const AdminHome: React.FC = () => {
  const [sections, setSections] = useState<HomeSection[]>([]);
  const [sliderItems, setSliderItems] = useState<SliderItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Predefined sections with their display names and descriptions
  const sectionTypes = [
    { 
      name: 'hero_section', 
      label: 'Hero Section', 
      description: 'Main banner with background image and call-to-action',
      preview: 'Large banner with title, description, and button'
    },
    { 
      name: 'about_preview', 
      label: 'About Preview', 
      description: 'Two-column layout with image and content',
      preview: 'Side-by-side image and text layout'
    },
    { 
      name: 'programs_highlight', 
      label: 'Programs Highlight', 
      description: 'Featured programs section with cards',
      preview: 'Grid of program cards with images'
    },
    { 
      name: 'leadership', 
      label: 'Leadership Team', 
      description: 'Leadership profiles with circular images',
      preview: 'Circular profile images in a row'
    },
    { 
      name: 'achievements', 
      label: 'Statistics & Achievements', 
      description: 'Statistics section with numbers and icons',
      preview: 'Number counters with icons'
    },
    { 
      name: 'testimonials', 
      label: 'Student Testimonials', 
      description: 'Student success stories and reviews',
      preview: 'Quote cards with student photos'
    },
    { 
      name: 'facilities', 
      label: 'Campus Facilities', 
      description: 'Campus facilities with image gallery',
      preview: 'Grid of facility images'
    },
    { 
      name: 'news_events', 
      label: 'News & Events', 
      description: 'Latest news and upcoming events',
      preview: 'Two-column news and events layout'
    },
    { 
      name: 'contact_section', 
      label: 'Contact Section', 
      description: 'Contact information and form',
      preview: 'Contact form with info sidebar'
    },
    { 
      name: 'school_facility', 
      label: 'School Facility', 
      description: 'Infrastructure, laboratories, hostel & canteen, playground',
      preview: 'Four-column grid showing facility categories with icons'
    },
    { 
      name: 'achievements_activities', 
      label: 'Achievements & Activities', 
      description: 'Student achievements, academic results, sports, cultural activities',
      preview: 'Achievement stats with activity categories in cards'
    }
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      const [sectionsResponse, sliderResponse] = await Promise.all([
        fetch('/api/home-sections'),
        fetch('/api/home-slider')
      ]);

      if (sectionsResponse.ok) {
        const sectionsData = await sectionsResponse.json();
        setSections(sectionsData);
      }

      if (sliderResponse.ok) {
        const sliderData = await sliderResponse.json();
        setSliderItems(sliderData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleActive = async (sectionId: string, isActive: boolean) => {
    try {
      const response = await fetch('/api/home-sections', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: sectionId,
          is_active: !isActive
        }),
      });

      if (response.ok) {
        await fetchData();
      }
    } catch (error) {
      console.error('Error toggling section:', error);
    }
  };

  const handleDeleteSection = async (sectionId: string) => {
    if (confirm('Are you sure you want to delete this section?')) {
      try {
        const response = await fetch(`/api/home-sections?id=${sectionId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          await fetchData();
        }
      } catch (error) {
        console.error('Error deleting section:', error);
      }
    }
  };

  const getSectionTypeInfo = (sectionName: string) => {
    return sectionTypes.find(type => type.name === sectionName) || {
      name: sectionName,
      label: sectionName.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: 'Custom section',
      preview: 'Custom section layout'
    };
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Home Page Management</h1>
        <p className="text-gray-600 mt-2">Manage your homepage sections and slider content</p>
      </div>

      {/* Hero Slider Management */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Hero Slider</h2>
            <p className="text-gray-600">Manage the main slider on your homepage</p>
          </div>
          <Link
            href="/admin/sections/slider"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <Edit className="h-4 w-4 mr-2" />
            Edit Slider
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sliderItems.map((slider) => (
            <div key={slider._id} className="border border-gray-200 rounded-lg overflow-hidden">
              {slider.image_url && (
                <img
                  src={slider.image_url}
                  alt={slider.title}
                  className="w-full h-32 object-cover"
                />
              )}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 truncate">{slider.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded ${
                    slider.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {slider.is_active ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{slider.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Homepage Sections */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Homepage Sections</h2>
            <p className="text-gray-600">Click "Edit" to modify each section's content and design</p>
          </div>
        </div>

        <div className="space-y-4">
          {sections.map((section) => {
            const sectionInfo = getSectionTypeInfo(section.section_name);
            
            return (
              <div key={section._id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{sectionInfo.label}</h3>
                      <p className="text-sm text-gray-500">{sectionInfo.description}</p>
                      <p className="text-xs text-blue-600 mt-1">{sectionInfo.preview}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded ${
                      section.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {section.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleToggleActive(section._id, section.is_active)}
                      className="text-gray-600 hover:text-gray-800"
                      title={section.is_active ? 'Hide section' : 'Show section'}
                    >
                      {section.is_active ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </button>
                    <Link
                      href={`/admin/sections/${section.section_name}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteSection(section._id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{section.title}</h4>
                    <p className="text-gray-600 text-sm line-clamp-3">{section.content}</p>
                  </div>
                  <div>
                    {section.image_url && (
                      <img
                        src={section.image_url}
                        alt={section.title}
                        className="w-full h-24 object-cover rounded"
                      />
                    )}
                    {section.button_text && (
                      <div className="mt-2 text-sm text-gray-500">
                        Button: {section.button_text} → {section.button_url}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Available Section Types */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Section Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sectionTypes.map((sectionType) => {
              const existingSection = sections.find(s => s.section_name === sectionType.name);
              
              return (
                <div key={sectionType.name} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">{sectionType.label}</h4>
                  <p className="text-sm text-gray-600 mb-3">{sectionType.description}</p>
                  <p className="text-xs text-blue-600 mb-3">{sectionType.preview}</p>
                  
                  {existingSection ? (
                    <Link
                      href={`/admin/sections/${sectionType.name}`}
                      className="w-full bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      <Edit className="h-3 w-3 mr-1" />
                      Edit Existing
                    </Link>
                  ) : (
                    <Link
                      href={`/admin/sections/${sectionType.name}`}
                      className="w-full bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Create Section
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;