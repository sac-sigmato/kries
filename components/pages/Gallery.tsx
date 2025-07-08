import React, { useState, useEffect } from 'react';
import { Search, Filter, X, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';

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

const Gallery: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState('');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [albumImages, setAlbumImages] = useState<GalleryItem[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'album'>('grid');

  const categories = [
    { value: '', label: 'All Categories' },
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

  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    const matchesAlbum = !selectedAlbum || item.album === selectedAlbum;
    return matchesSearch && matchesCategory && matchesAlbum;
  });

  const albums = [...new Set(galleryItems.map(item => item.album).filter(album => album))];

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

  const getCategoryLabel = (category: string) => {
    const categoryObj = categories.find(c => c.value === category);
    return categoryObj?.label || category;
  };

  const openImageModal = (item: GalleryItem) => {
    setSelectedImage(item);
    
    // If the image belongs to an album, get all images from that album
    if (item.album) {
      const albumImgs = galleryItems.filter(img => img.album === item.album);
      setAlbumImages(albumImgs);
      setCurrentImageIndex(albumImgs.findIndex(img => img.id === item.id));
    } else {
      setAlbumImages([item]);
      setCurrentImageIndex(0);
    }
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (albumImages.length <= 1) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : albumImages.length - 1;
    } else {
      newIndex = currentImageIndex < albumImages.length - 1 ? currentImageIndex + 1 : 0;
    }
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(albumImages[newIndex]);
  };

  const handleAlbumClick = (albumName: string) => {
    setSelectedAlbum(albumName);
    setViewMode('album');
  };

  const getAlbumCover = (albumName: string) => {
    const albumItems = galleryItems.filter(item => item.album === albumName);
    return albumItems[0]?.image_url || '';
  };

  const getAlbumItemCount = (albumName: string) => {
    return galleryItems.filter(item => item.album === albumName).length;
  };

  if (loading) {
    return (
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Explore life at KREIS through our photo gallery showcasing campus life, events, and achievements.
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore life at KREIS through our photo gallery showcasing campus life, events, and achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Albums Section */}
      {viewMode === 'grid' && albums.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Photo Albums</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {albums.map((album) => (
                <div
                  key={album}
                  className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                  onClick={() => handleAlbumClick(album)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={getAlbumCover(album)}
                      alt={album}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                      <ArrowRight className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                      {getAlbumItemCount(album)} photos
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-center">{album}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {viewMode === 'album' && selectedAlbum && (
              <button
                onClick={() => {
                  setViewMode('grid');
                  setSelectedAlbum('');
                }}
                className="flex items-center text-blue-600 hover:text-blue-800 mb-4 md:mb-0"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Albums
              </button>
            )}
            
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search photos..."
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
              {viewMode === 'grid' && (
                <select
                  value={selectedAlbum}
                  onChange={(e) => {
                    setSelectedAlbum(e.target.value);
                    if (e.target.value) {
                      setViewMode('album');
                    }
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Albums</option>
                  {albums.map((album) => (
                    <option key={album} value={album}>{album}</option>
                  ))}
                </select>
              )}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                  setSelectedAlbum('');
                  setViewMode('grid');
                }}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
          
          {viewMode === 'album' && selectedAlbum && (
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-gray-900">Album: {selectedAlbum}</h2>
              <p className="text-gray-600">{getAlbumItemCount(selectedAlbum)} photos</p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No photos found</h3>
              <p className="text-gray-600">
                {searchTerm || selectedCategory || selectedAlbum
                  ? 'Try adjusting your search criteria or filters.'
                  : 'Check back soon for new photos from KREIS schools.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                  onClick={() => openImageModal(item)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded ${getCategoryColor(item.category)}`}>
                        {getCategoryLabel(item.category)}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                    )}
                    {item.album && (
                      <p className="text-xs text-blue-600 mb-2">Album: {item.album}</p>
                    )}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {(Array.isArray(item.tags) ? item.tags : []).slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 px-2 py-1 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {(Array.isArray(item.tags) ? item.tags : []).length > 2 && (
                          <span className="text-xs text-gray-500">+{(Array.isArray(item.tags) ? item.tags : []).length - 2}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Image Modal with Navigation */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation arrows */}
            {albumImages.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-3"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-3"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            {/* Image counter */}
            {albumImages.length > 1 && (
              <div className="absolute top-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
                {currentImageIndex + 1} / {albumImages.length}
              </div>
            )}

            {/* Main image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.image_url}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain"
              />
              
              {/* Image details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedImage.title}</h3>
                {selectedImage.description && (
                  <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                )}
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>Category: {getCategoryLabel(selectedImage.category)}</span>
                  {selectedImage.album && <span>Album: {selectedImage.album}</span>}
                </div>
                {selectedImage.tags && selectedImage.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
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

            {/* Thumbnail navigation for album */}
            {albumImages.length > 1 && (
              <div className="mt-4 flex justify-center space-x-2 overflow-x-auto pb-2">
                {albumImages.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setSelectedImage(img);
                    }}
                    className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img.image_url}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;