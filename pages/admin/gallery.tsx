import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import ProtectedRoute from '../../components/ProtectedRoute';
import { Image, Plus, Trash2, Upload, FolderPlus, Eye, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  category: string;
  album: string;
  tags: string[];
  created_at: string;
}

interface Album {
  id: string;
  name: string;
  description?: string;
  cover_image?: string;
  item_count: number;
  created_at: string;
}

const AdminGalleryPage: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [showImageForm, setShowImageForm] = useState(false);
  const [showAlbumForm, setShowAlbumForm] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const [imageFormData, setImageFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    category: 'events',
    album: '',
    tags: ''
  });

  const [albumFormData, setAlbumFormData] = useState({
    name: '',
    description: '',
    cover_image: ''
  });

  const categories = [
    { value: 'events', label: 'School Events' },
    { value: 'campus', label: 'Campus Life' },
    { value: 'sports', label: 'Sports Activities' },
    { value: 'cultural', label: 'Cultural Programs' },
    { value: 'academics', label: 'Academic Activities' },
    { value: 'graduation', label: 'Graduation Ceremonies' },
    { value: 'facilities', label: 'School Facilities' },
    { value: 'achievements', label: 'Achievements' }
  ];

  useEffect(() => {
    fetchGalleryItems();
    fetchAlbums();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/gallery');
      if (response.ok) {
        const data = await response.json();
        setGalleryItems(data);
      }
    } catch (error) {
      console.error('Error fetching gallery items:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAlbums = async () => {
    try {
      const response = await fetch('/api/albums');
      if (response.ok) {
        const data = await response.json();
        setAlbums(data);
      }
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  const handleImageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const imageData = {
        ...imageFormData,
        tags: imageFormData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      };

      const response = await fetch('/api/gallery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(imageData),
      });

      if (response.ok) {
        await fetchGalleryItems();
        await fetchAlbums(); // Refresh albums to update item counts
        resetImageForm();
      }
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  const handleAlbumSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/albums', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(albumFormData),
      });

      if (response.ok) {
        await fetchAlbums();
        resetAlbumForm();
      }
    } catch (error) {
      console.error('Error saving album:', error);
    }
  };

  const handleDeleteImage = async (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      try {
        const response = await fetch(`/api/gallery?id=${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          await fetchGalleryItems();
        }
      } catch (error) {
        console.error('Error deleting image:', error);
      }
    }
  };

  const handleDeleteAlbum = async (id: string) => {
    if (confirm('Are you sure you want to delete this album? All images in this album will also be deleted.')) {
      try {
        const response = await fetch(`/api/albums?id=${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          await fetchAlbums();
          await fetchGalleryItems();
        }
      } catch (error) {
        console.error('Error deleting album:', error);
      }
    }
  };

  const resetImageForm = () => {
    setImageFormData({
      title: '',
      description: '',
      image_url: '',
      category: 'events',
      album: '',
      tags: ''
    });
    setShowImageForm(false);
  };

  const resetAlbumForm = () => {
    setAlbumFormData({
      name: '',
      description: '',
      cover_image: ''
    });
    setShowAlbumForm(false);
  };

  const filteredItems = galleryItems.filter(item => {
    const matchesAlbum = !selectedAlbum || item.album === selectedAlbum;
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesAlbum && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      events: 'bg-blue-100 text-blue-800',
      campus: 'bg-green-100 text-green-800',
      sports: 'bg-red-100 text-red-800',
      cultural: 'bg-purple-100 text-purple-800',
      academics: 'bg-yellow-100 text-yellow-800',
      graduation: 'bg-indigo-100 text-indigo-800',
      facilities: 'bg-gray-100 text-gray-800',
      achievements: 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gallery Management</h1>
              <p className="text-gray-600 mt-2">Manage school photos, albums, and image collections</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowAlbumForm(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                <FolderPlus className="h-4 w-4 mr-2" />
                New Album
              </button>
              <button
                onClick={() => setShowImageForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Image
              </button>
            </div>
          </div>

          {/* Albums Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Albums</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {albums.map((album) => (
                <div key={album._id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  {album.cover_image && (
                    <img
                      src={album.cover_image}
                      alt={album.name}
                      className="w-full h-32 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{album.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{album.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{album.item_count} photos</span>
                      <button
                        onClick={() => handleDeleteAlbum(album._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Album</label>
                <select
                  value={selectedAlbum}
                  onChange={(e) => setSelectedAlbum(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Albums</option>
                  {albums.map((album) => (
                    <option key={album._id} value={album.name}>{album.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>{category.label}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSelectedAlbum('');
                    setSelectedCategory('');
                  }}
                  className="w-full bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Album Form */}
          {showAlbumForm && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Create New Album</h2>
                <button
                  onClick={resetAlbumForm}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleAlbumSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Album Name *</label>
                  <input
                    type="text"
                    value={albumFormData.name}
                    onChange={(e) => setAlbumFormData({ ...albumFormData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={albumFormData.description}
                    onChange={(e) => setAlbumFormData({ ...albumFormData, description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image URL</label>
                  <input
                    type="url"
                    value={albumFormData.cover_image}
                    onChange={(e) => setAlbumFormData({ ...albumFormData, cover_image: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Create Album
                  </button>
                  <button
                    type="button"
                    onClick={resetAlbumForm}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Image Form */}
          {showImageForm && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Add New Image</h2>
                <button
                  onClick={resetImageForm}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleImageSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image Title *</label>
                  <input
                    type="text"
                    value={imageFormData.title}
                    onChange={(e) => setImageFormData({ ...imageFormData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={imageFormData.description}
                    onChange={(e) => setImageFormData({ ...imageFormData, description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image URL *</label>
                  <input
                    type="url"
                    value={imageFormData.image_url}
                    onChange={(e) => setImageFormData({ ...imageFormData, image_url: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                    <select
                      value={imageFormData.category}
                      onChange={(e) => setImageFormData({ ...imageFormData, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Album</label>
                    <select
                      value={imageFormData.album}
                      onChange={(e) => setImageFormData({ ...imageFormData, album: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">No Album</option>
                      {albums.map((album) => (
                        <option key={album._id} value={album.name}>{album.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                  <input
                    type="text"
                    value={imageFormData.tags}
                    onChange={(e) => setImageFormData({ ...imageFormData, tags: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tag1, tag2, tag3"
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Add Image
                  </button>
                  <button
                    type="button"
                    onClick={resetImageForm}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative group">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                    <button
                      onClick={() => setSelectedImage(item)}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Eye className="h-8 w-8" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${getCategoryColor(item.category)}`}>
                      {categories.find(c => c.value === item.category)?.label || item.category}
                    </span>
                    <button
                      onClick={() => handleDeleteImage(item._id)}
                      onClick={() => handleDeleteImage(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                  {item.album && (
                    <p className="text-xs text-blue-600 mb-2">Album: {item.album}</p>
                  )}
                  {item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {(Array.isArray(item.tags) ? item.tags : []).slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {(Array.isArray(item.tags) ? item.tags : []).length > 3 && (
                        <span className="text-xs text-gray-500">+{(Array.isArray(item.tags) ? item.tags : []).length - 3}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No images found</h3>
              <p className="text-gray-600">Add your first image to get started.</p>
            </div>
          )}

          {/* Image Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto">
                <div className="flex items-center justify-between p-4 border-b">
                  <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="p-4">
                  <img
                    src={selectedImage.image_url}
                    alt={selectedImage.title}
                    className="w-full max-h-96 object-contain mb-4"
                  />
                  <div className="space-y-2">
                    <p className="text-gray-600">{selectedImage.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Category: {categories.find(c => c.value === selectedImage.category)?.label}</span>
                      {selectedImage.album && <span>Album: {selectedImage.album}</span>}
                    </div>
                    {selectedImage.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {(Array.isArray(selectedImage.tags) ? selectedImage.tags : []).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 px-2 py-1 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default AdminGalleryPage;