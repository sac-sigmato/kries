import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import ProtectedRoute from '../../components/ProtectedRoute';
import { Settings, Phone, Mail, MapPin, Globe, Plus, Edit, Trash2, Save, Upload, Eye } from 'lucide-react';

interface ContactInfo {
  _id: string;
  type: 'phone' | 'email' | 'address' | 'website' | 'social';
  label: string;
  value: string;
  icon: string;
  is_primary: boolean;
  is_active: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
}

interface Logo {
  _id: string;
  name: string;
  image_url: string;
  website_url?: string;
  description?: string;
  is_active: boolean;
  order_index: number;
  created_at: string;
}

const AdminSettingsPage: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [logos, setLogos] = useState<Logo[]>([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showLogoForm, setShowLogoForm] = useState(false);
  const [editingContact, setEditingContact] = useState<ContactInfo | null>(null);
  const [editingLogo, setEditingLogo] = useState<Logo | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'contact' | 'logos'>('contact');

  const [contactFormData, setContactFormData] = useState({
    type: 'phone' as 'phone' | 'email' | 'address' | 'website' | 'social',
    label: '',
    value: '',
    icon: 'phone',
    is_primary: false,
    is_active: true,
    order_index: 0
  });

  const [logoFormData, setLogoFormData] = useState({
    name: '',
    image_url: '',
    website_url: '',
    description: '',
    is_active: true,
    order_index: 0
  });

  const contactTypes = [
    { value: 'phone', label: 'Phone Number', icon: 'phone' },
    { value: 'email', label: 'Email Address', icon: 'mail' },
    { value: 'address', label: 'Physical Address', icon: 'map-pin' },
    { value: 'website', label: 'Website URL', icon: 'globe' },
    { value: 'social', label: 'Social Media', icon: 'share-2' }
  ];

  const iconOptions = [
    'phone', 'mail', 'map-pin', 'globe', 'facebook', 'twitter', 'instagram', 
    'linkedin', 'youtube', 'share-2', 'building', 'clock', 'users'
  ];

  useEffect(() => {
    fetchContactInfo();
    fetchLogos();
  }, []);

  const fetchContactInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/contact-info');
      if (response.ok) {
        const data = await response.json();
        setContactInfo(data);
      }
    } catch (error) {
      console.error('Error fetching contact info:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLogos = async () => {
    try {
      const response = await fetch('/api/footer-logos');
      if (response.ok) {
        const data = await response.json();
        setLogos(data);
      }
    } catch (error) {
      console.error('Error fetching logos:', error);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingContact ? 'PUT' : 'POST';
      const url = editingContact ? `/api/contact-info?id=${editingContact._id}` : '/api/contact-info';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactFormData),
      });

      if (response.ok) {
        await fetchContactInfo();
        resetContactForm();
      }
    } catch (error) {
      console.error('Error saving contact info:', error);
    }
  };

  const handleLogoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingLogo ? 'PUT' : 'POST';
      const url = editingLogo ? `/api/footer-logos?id=${editingLogo._id}` : '/api/footer-logos';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logoFormData),
      });

      if (response.ok) {
        await fetchLogos();
        resetLogoForm();
      }
    } catch (error) {
      console.error('Error saving logo:', error);
    }
  };

  const handleEditContact = (contact: ContactInfo) => {
    setEditingContact(contact);
    setContactFormData({
      type: contact.type,
      label: contact.label,
      value: contact.value,
      icon: contact.icon,
      is_primary: contact.is_primary,
      is_active: contact.is_active,
      order_index: contact.order_index
    });
    setShowContactForm(true);
  };

  const handleEditLogo = (logo: Logo) => {
    setEditingLogo(logo);
    setLogoFormData({
      name: logo.name,
      image_url: logo.image_url,
      website_url: logo.website_url || '',
      description: logo.description || '',
      is_active: logo.is_active,
      order_index: logo.order_index
    });
    setShowLogoForm(true);
  };

  const handleDeleteContact = async (id: string) => {
    if (confirm('Are you sure you want to delete this contact information?')) {
      try {
        const response = await fetch(`/api/contact-info?id=${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          await fetchContactInfo();
        }
      } catch (error) {
        console.error('Error deleting contact info:', error);
      }
    }
  };

  const handleDeleteLogo = async (id: string) => {
    if (confirm('Are you sure you want to delete this logo?')) {
      try {
        const response = await fetch(`/api/footer-logos?id=${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          await fetchLogos();
        }
      } catch (error) {
        console.error('Error deleting logo:', error);
      }
    }
  };

  const handleToggleContactActive = async (id: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/contact-info?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ is_active: !isActive }),
      });

      if (response.ok) {
        await fetchContactInfo();
      }
    } catch (error) {
      console.error('Error toggling contact status:', error);
    }
  };

  const handleToggleLogoActive = async (id: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/footer-logos?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ is_active: !isActive }),
      });

      if (response.ok) {
        await fetchLogos();
      }
    } catch (error) {
      console.error('Error toggling logo status:', error);
    }
  };

  const resetContactForm = () => {
    setContactFormData({
      type: 'phone',
      label: '',
      value: '',
      icon: 'phone',
      is_primary: false,
      is_active: true,
      order_index: contactInfo.length
    });
    setEditingContact(null);
    setShowContactForm(false);
  };

  const resetLogoForm = () => {
    setLogoFormData({
      name: '',
      image_url: '',
      website_url: '',
      description: '',
      is_active: true,
      order_index: logos.length
    });
    setEditingLogo(null);
    setShowLogoForm(false);
  };

  const getContactIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      phone: <Phone className="h-4 w-4" />,
      mail: <Mail className="h-4 w-4" />,
      'map-pin': <MapPin className="h-4 w-4" />,
      globe: <Globe className="h-4 w-4" />,
      settings: <Settings className="h-4 w-4" />
    };
    return iconMap[iconName] || <Phone className="h-4 w-4" />;
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
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-2">Manage contact information and footer logos</p>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'contact'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Contact Information
                </button>
                <button
                  onClick={() => setActiveTab('logos')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'logos'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Footer Logos
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'contact' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Contact Info
                    </button>
                  </div>

                  {/* Contact Form */}
                  {showContactForm && (
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {editingContact ? 'Edit Contact Information' : 'Add Contact Information'}
                        </h3>
                        <button
                          onClick={resetContactForm}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          ×
                        </button>
                      </div>
                      
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Type *</label>
                            <select
                              value={contactFormData.type}
                              onChange={(e) => {
                                const type = e.target.value as any;
                                const defaultIcon = contactTypes.find(t => t.value === type)?.icon || 'phone';
                                setContactFormData({ 
                                  ...contactFormData, 
                                  type,
                                  icon: defaultIcon
                                });
                              }}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            >
                              {contactTypes.map((type) => (
                                <option key={type.value} value={type.value}>
                                  {type.label}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Label *</label>
                            <input
                              type="text"
                              value={contactFormData.label}
                              onChange={(e) => setContactFormData({ ...contactFormData, label: e.target.value })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="e.g., Main Office, Principal's Office"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Value *</label>
                          <input
                            type="text"
                            value={contactFormData.value}
                            onChange={(e) => setContactFormData({ ...contactFormData, value: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter phone, email, address, or URL"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Icon</label>
                            <select
                              value={contactFormData.icon}
                              onChange={(e) => setContactFormData({ ...contactFormData, icon: e.target.value })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              {iconOptions.map((icon) => (
                                <option key={icon} value={icon}>
                                  {icon.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Order</label>
                            <input
                              type="number"
                              value={contactFormData.order_index}
                              onChange={(e) => setContactFormData({ ...contactFormData, order_index: parseInt(e.target.value) || 0 })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              min="0"
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="is_primary"
                              checked={contactFormData.is_primary}
                              onChange={(e) => setContactFormData({ ...contactFormData, is_primary: e.target.checked })}
                              className="mr-2"
                            />
                            <label htmlFor="is_primary" className="text-sm font-medium text-gray-700">
                              Primary Contact
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="is_active"
                              checked={contactFormData.is_active}
                              onChange={(e) => setContactFormData({ ...contactFormData, is_active: e.target.checked })}
                              className="mr-2"
                            />
                            <label htmlFor="is_active" className="text-sm font-medium text-gray-700">
                              Active
                            </label>
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                          >
                            <Save className="h-4 w-4 mr-2" />
                            {editingContact ? 'Update' : 'Save'}
                          </button>
                          <button
                            type="button"
                            onClick={resetContactForm}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Contact List */}
                  <div className="space-y-4">
                    {contactInfo.map((contact) => (
                      <div key={contact._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              {getContactIcon(contact.icon)}
                              <div>
                                <div className="flex items-center space-x-2">
                                  <h3 className="font-semibold text-gray-900">{contact.label}</h3>
                                  {contact.is_primary && (
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs font-semibold rounded">
                                      Primary
                                    </span>
                                  )}
                                  <span className={`px-2 py-1 text-xs font-semibold rounded ${
                                    contact.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                  }`}>
                                    {contact.is_active ? 'Active' : 'Inactive'}
                                  </span>
                                </div>
                                <p className="text-gray-600">{contact.value}</p>
                                <p className="text-xs text-gray-500 capitalize">{contact.type}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleToggleContactActive(contact._id, contact.is_active)}
                              className="text-blue-600 hover:text-blue-900"
                              title={contact.is_active ? 'Deactivate' : 'Activate'}
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleEditContact(contact)}
                              className="text-indigo-600 hover:text-indigo-900"
                              title="Edit"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteContact(contact._id)}
                              className="text-red-600 hover:text-red-900"
                              title="Delete"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {contactInfo.length === 0 && (
                    <div className="text-center py-12">
                      <Phone className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No contact information found</h3>
                      <p className="text-gray-600">Add your first contact information to get started.</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'logos' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Footer Logos</h2>
                    <button
                      onClick={() => setShowLogoForm(true)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Logo
                    </button>
                  </div>

                  {/* Logo Form */}
                  {showLogoForm && (
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {editingLogo ? 'Edit Logo' : 'Add Logo'}
                        </h3>
                        <button
                          onClick={resetLogoForm}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          ×
                        </button>
                      </div>
                      
                      <form onSubmit={handleLogoSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name *</label>
                            <input
                              type="text"
                              value={logoFormData.name}
                              onChange={(e) => setLogoFormData({ ...logoFormData, name: e.target.value })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="e.g., Government of Karnataka"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Order</label>
                            <input
                              type="number"
                              value={logoFormData.order_index}
                              onChange={(e) => setLogoFormData({ ...logoFormData, order_index: parseInt(e.target.value) || 0 })}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              min="0"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Logo Image URL *</label>
                          <input
                            type="url"
                            value={logoFormData.image_url}
                            onChange={(e) => setLogoFormData({ ...logoFormData, image_url: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="https://example.com/logo.png"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                          <input
                            type="url"
                            value={logoFormData.website_url}
                            onChange={(e) => setLogoFormData({ ...logoFormData, website_url: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="https://example.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                          <textarea
                            value={logoFormData.description}
                            onChange={(e) => setLogoFormData({ ...logoFormData, description: e.target.value })}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Brief description of the organization"
                          />
                        </div>

                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="logo_active"
                            checked={logoFormData.is_active}
                            onChange={(e) => setLogoFormData({ ...logoFormData, is_active: e.target.checked })}
                            className="mr-2"
                          />
                          <label htmlFor="logo_active" className="text-sm font-medium text-gray-700">
                            Active
                          </label>
                        </div>

                        <div className="flex space-x-4">
                          <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                          >
                            <Save className="h-4 w-4 mr-2" />
                            {editingLogo ? 'Update' : 'Save'}
                          </button>
                          <button
                            type="button"
                            onClick={resetLogoForm}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Logo Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {logos.map((logo) => (
                      <div key={logo._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="text-center mb-4">
                          <img
                            src={logo.image_url}
                            alt={logo.name}
                            className="w-20 h-20 object-contain mx-auto mb-2"
                          />
                          <h3 className="font-semibold text-gray-900 text-sm">{logo.name}</h3>
                          {logo.description && (
                            <p className="text-xs text-gray-600 mt-1 line-clamp-2">{logo.description}</p>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`px-2 py-1 text-xs font-semibold rounded ${
                            logo.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {logo.is_active ? 'Active' : 'Inactive'}
                          </span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleToggleLogoActive(logo._id, logo.is_active)}
                              className="text-blue-600 hover:text-blue-900"
                              title={logo.is_active ? 'Deactivate' : 'Activate'}
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleEditLogo(logo)}
                              className="text-indigo-600 hover:text-indigo-900"
                              title="Edit"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteLogo(logo._id)}
                              className="text-red-600 hover:text-red-900"
                              title="Delete"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {logos.length === 0 && (
                    <div className="text-center py-12">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No logos found</h3>
                      <p className="text-gray-600">Add your first logo to get started.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default AdminSettingsPage;