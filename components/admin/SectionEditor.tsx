import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Save, ArrowLeft, Eye, Upload } from 'lucide-react';
import Link from 'next/link';

interface SectionEditorProps {
  sectionName: string;
}

interface SectionData {
  _id?: string;
  section_name: string;
  title: string;
  content: string;
  image_url?: string;
  button_text?: string;
  button_url?: string;
  order_index: number;
  is_active: boolean;
}

interface SliderData {
  _id?: string;
  title: string;
  subtitle?: string;
  description: string;
  image_url: string;
  button_text?: string;
  button_url?: string;
  order_index: number;
  is_active: boolean;
}

const SectionEditor: React.FC<SectionEditorProps> = ({ sectionName }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isSlider, setIsSlider] = useState(false);
  
  // Section form state
  const [sectionData, setSectionData] = useState<SectionData>({
    section_name: sectionName || '',
    title: '',
    content: '',
    image_url: '',
    button_text: '',
    button_url: '',
    order_index: 0,
    is_active: true
  });

  // Slider form state
  const [sliderItems, setSliderItems] = useState<SliderData[]>([]);
  const [newSliderItem, setNewSliderItem] = useState<SliderData>({
    title: '',
    subtitle: '',
    description: '',
    image_url: '',
    button_text: '',
    button_url: '',
    order_index: 0,
    is_active: true
  });

  const sectionTypes = {
    'hero_section': {
      label: 'Hero Section',
      description: 'Main banner with background image and call-to-action',
      fields: ['title', 'content', 'image_url', 'button_text', 'button_url'],
      preview: 'Large banner with title, description, and button overlay on background image'
    },
    'about_preview': {
      label: 'About Preview',
      description: 'Two-column layout with image and content',
      fields: ['title', 'content', 'image_url', 'button_text', 'button_url'],
      preview: 'Left: Image, Right: Title, content text, and optional button'
    },
    'programs_highlight': {
      label: 'Programs Highlight',
      description: 'Featured programs section with cards',
      fields: ['title', 'content'],
      preview: 'Title, description, then 3-column grid of program cards with images'
    },
    'leadership': {
      label: 'Leadership Team',
      description: 'Leadership profiles with circular images',
      fields: ['title', 'content'],
      preview: 'Title, description, then row of circular profile images with names'
    },
    'achievements': {
      label: 'Statistics & Achievements',
      description: 'Statistics section with numbers and icons',
      fields: ['title', 'content'],
      preview: 'Title, description, then 4-column grid of number counters with icons'
    },
    'testimonials': {
      label: 'Student Testimonials',
      description: 'Student success stories and reviews',
      fields: ['title', 'content'],
      preview: 'Title, description, then 3-column grid of quote cards with student photos'
    },
    'facilities': {
      label: 'Campus Facilities',
      description: 'Campus facilities with image gallery',
      fields: ['title', 'content'],
      preview: 'Title, description, then 3-column grid of facility images with hover effects'
    },
    'news_events': {
      label: 'News & Events',
      description: 'Latest news and upcoming events',
      fields: ['title', 'content'],
      preview: 'Title, description, then 2-column layout: Latest News | Upcoming Events'
    },
    'contact_section': {
      label: 'Contact Section',
      description: 'Contact information and form',
      fields: ['title', 'content', 'button_text', 'button_url'],
      preview: 'Left: Title, content, contact info, button. Right: Contact form'
    },
    'school_facility': {
      label: 'School Facility',
      description: 'Infrastructure, laboratories, hostel & canteen, playground',
      fields: ['title', 'content'],
      preview: 'Four-column grid: Infrastructure, Laboratories, Hostel & Canteen, Playground with icons and descriptions'
    },
    'achievements_activities': {
      label: 'Achievements & Activities',
      description: 'Student achievements, academic results, sports, cultural activities',
      fields: ['title', 'content'],
      preview: 'Achievement statistics, activity categories in cards, and success stories highlight'
    },
    'slider': {
      label: 'Hero Slider',
      description: 'Main homepage slider with multiple slides',
      fields: ['title', 'subtitle', 'description', 'image_url', 'button_text', 'button_url'],
      preview: 'Full-screen background images with overlay text and navigation dots'
    }
  };

  useEffect(() => {
    if (sectionName) {
      if (sectionName === 'slider') {
        setIsSlider(true);
        fetchSliderData();
      } else {
        fetchSectionData();
      }
    }
  }, [sectionName]);

  const fetchSectionData = async () => {
    try {
      setLoading(true);
      
      const response = await fetch('/api/home-sections');
      if (response.ok) {
        const sections = await response.json();
        const section = sections.find((s: any) => s.section_name === sectionName);
        
        if (section) {
          setSectionData(section);
        } else {
          // New section - set default order_index
          setSectionData(prev => ({
            ...prev,
            order_index: sections.length + 1
          }));
        }
      }
    } catch (error) {
      console.error('Error fetching section data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSliderData = async () => {
    try {
      setLoading(true);
      
      const response = await fetch('/api/home-slider');
      if (response.ok) {
        const data = await response.json();
        setSliderItems(data);
        setNewSliderItem(prev => ({
          ...prev,
          order_index: data.length + 1
        }));
      }
    } catch (error) {
      console.error('Error fetching slider data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSection = async () => {
    try {
      setSaving(true);
      
      const method = sectionData._id ? 'PUT' : 'POST';
      const response = await fetch('/api/home-sections', {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sectionData),
      });

      if (response.ok) {
        router.push('/admin/home');
      }
    } catch (error) {
      console.error('Error saving section:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleAddSliderItem = async () => {
    try {
      setSaving(true);
      
      const response = await fetch('/api/home-slider', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSliderItem),
      });

      if (response.ok) {
        // Reset form and refresh data
        setNewSliderItem({
          title: '',
          subtitle: '',
          description: '',
          image_url: '',
          button_text: '',
          button_url: '',
          order_index: sliderItems.length + 1,
          is_active: true
        });
        
        await fetchSliderData();
      }
    } catch (error) {
      console.error('Error adding slider item:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteSliderItem = async (id: string) => {
    if (confirm('Are you sure you want to delete this slider item?')) {
      try {
        const response = await fetch(`/api/home-slider?id=${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          await fetchSliderData();
        }
      } catch (error) {
        console.error('Error deleting slider item:', error);
      }
    }
  };

  const sectionInfo = sectionTypes[sectionName as keyof typeof sectionTypes];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!sectionInfo) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Section Not Found</h2>
        <Link href="/admin/home" className="text-blue-600 hover:text-blue-800">
          ← Back to Home Management
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-4 mb-2">
            <Link
              href="/admin/home"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home Management
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{sectionInfo.label}</h1>
          <p className="text-gray-600 mt-1">{sectionInfo.description}</p>
          <div className="mt-2 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <Eye className="h-4 w-4 inline mr-1" />
              <strong>Preview:</strong> {sectionInfo.preview}
            </p>
          </div>
        </div>
        {!isSlider && (
          <button
            onClick={handleSaveSection}
            disabled={saving}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center disabled:opacity-50"
          >
            <Save className="h-4 w-4 mr-2" />
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        )}
      </div>

      {isSlider ? (
        /* Slider Editor */
        <div className="space-y-8">
          {/* Add New Slider Item */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Slide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                <input
                  type="text"
                  value={newSliderItem.title}
                  onChange={(e) => setNewSliderItem({ ...newSliderItem, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter slide title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input
                  type="text"
                  value={newSliderItem.subtitle}
                  onChange={(e) => setNewSliderItem({ ...newSliderItem, subtitle: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter subtitle (optional)"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea
                  value={newSliderItem.description}
                  onChange={(e) => setNewSliderItem({ ...newSliderItem, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter slide description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Background Image URL *</label>
                <input
                  type="url"
                  value={newSliderItem.image_url}
                  onChange={(e) => setNewSliderItem({ ...newSliderItem, image_url: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
                <input
                  type="text"
                  value={newSliderItem.button_text}
                  onChange={(e) => setNewSliderItem({ ...newSliderItem, button_text: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Learn More"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Button URL</label>
                <input
                  type="text"
                  value={newSliderItem.button_url}
                  onChange={(e) => setNewSliderItem({ ...newSliderItem, button_url: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="/about"
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="new-slider-active"
                checked={newSliderItem.is_active}
                onChange={(e) => setNewSliderItem({ ...newSliderItem, is_active: e.target.checked })}
                className="mr-2"
              />
              <label htmlFor="new-slider-active" className="text-sm font-medium text-gray-700">
                Active
              </label>
            </div>
            <button
              onClick={handleAddSliderItem}
              disabled={saving || !newSliderItem.title || !newSliderItem.description || !newSliderItem.image_url}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {saving ? 'Adding...' : 'Add Slide'}
            </button>
          </div>

          {/* Existing Slider Items */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Existing Slides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sliderItems.map((item) => (
                <div key={item._id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded ${
                        item.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {item.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                    <button
                      onClick={() => handleDeleteSliderItem(item._id!)}
                      className="w-full bg-red-600 text-white px-3 py-2 rounded text-sm hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Section Editor */
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Section Title *</label>
              <input
                type="text"
                value={sectionData.title}
                onChange={(e) => setSectionData({ ...sectionData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter section title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content *</label>
              <textarea
                value={sectionData.content}
                onChange={(e) => setSectionData({ ...sectionData, content: e.target.value })}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter section content"
              />
            </div>

            {sectionInfo.fields.includes('image_url') && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <input
                  type="url"
                  value={sectionData.image_url}
                  onChange={(e) => setSectionData({ ...sectionData, image_url: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
                {sectionData.image_url && (
                  <img
                    src={sectionData.image_url}
                    alt="Preview"
                    className="mt-2 w-32 h-20 object-cover rounded"
                  />
                )}
              </div>
            )}

            {sectionInfo.fields.includes('button_text') && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Button Text</label>
                  <input
                    type="text"
                    value={sectionData.button_text}
                    onChange={(e) => setSectionData({ ...sectionData, button_text: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Learn More"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Button URL</label>
                  <input
                    type="text"
                    value={sectionData.button_url}
                    onChange={(e) => setSectionData({ ...sectionData, button_url: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="/about"
                  />
                </div>
              </div>
            )}

            <div className="flex items-center">
              <input
                type="checkbox"
                id="section-active"
                checked={sectionData.is_active}
                onChange={(e) => setSectionData({ ...sectionData, is_active: e.target.checked })}
                className="mr-2"
              />
              <label htmlFor="section-active" className="text-sm font-medium text-gray-700">
                Section is active (visible on homepage)
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionEditor;