import React, { useState, useEffect } from 'react';
import AdminLayout from '../../../components/admin-comp/AdminLayout';
import ProtectedRoute from '../../../components/ProtectedRoute';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const AboutCMSPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // This would typically come from an API call to get the about page content
  const [formData, setFormData] = useState({
    title: 'About KREIS',
    content: 'The Government of Karnataka launched KREIS in October 1999 with the objective of promoting educational development of various classes of rural children in Karnataka. We operate 821 Morarji Desai, Kittur Rani Chennamma, Dr. B R Ambedkar, Atal Bihari Vajpayee, Smt. Indira Gandhi, and Masti Venkatesha Iyengar Residential Schools and Pre University colleges.',
    mission: 'To provide quality residential education to socially and educationally backward rural communities, helping them pursue higher studies and bringing them to the mainstream of society.',
    vision: 'To be the premier educational institution network that transforms rural communities through education, creating leaders who contribute to society\'s progress and development.',
    image_url: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800'
  });

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSaving(true);
      
      // Simulate API call to save data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('About page content saved successfully!');
    } catch (error) {
      console.error('Error saving about page content:', error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <AdminLayout>
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </AdminLayout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <Link
                  href="/admin/cms"
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to CMS
                </Link>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">About Page Content</h1>
            </div>
            <button
              onClick={handleSubmit}
              disabled={saving}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center disabled:opacity-50"
            >
              <Save className="h-4 w-4 mr-2" />
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Main Content</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Page Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Main Content</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image URL</label>
                  <input
                    type="url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {formData.image_url && (
                    <div className="mt-2">
                      <img 
                        src={formData.image_url} 
                        alt="Preview" 
                        className="h-40 object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Mission & Vision</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mission Statement</label>
                  <textarea
                    value={formData.mission}
                    onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vision Statement</label>
                  <textarea
                    value={formData.vision}
                    onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Faculty Section</h2>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Manage faculty members from the dedicated Faculty Management section.
                </p>
                
                <Link
                  href="/admin/cms/faculty"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Manage Faculty
                </Link>
              </div>
            </div>
          </form>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default AboutCMSPage;