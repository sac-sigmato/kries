import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  image_url: string;
  album: string;
}

const Gallery: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [albumImages, setAlbumImages] = useState<GalleryItem[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const data: GalleryItem[] = [
      // 1. Independence Day
      { id: '1', title: 'Flag Hoisting', image_url: '/ind1.jpeg', album: 'Independence Day' },
      { id: '2', title: 'Cultural Dance', image_url: '/Computer_Lab-1.jpeg', album: 'Independence Day' },
      
      // 2. Sports Day
      { id: '3', title: 'Relay Race', image_url: '/ind2.jpg', album: 'Sports Day' },
      { id: '4', title: 'Tug of War', image_url: '/School_Prayer.jpeg', album: 'Sports Day' },

      // 3. Science Fair
      { id: '5', title: 'Robotics Demo', image_url: '/kreis-3.jpg', album: 'Science Fair' },
      { id: '6', title: 'Physics Project', image_url: '/gp1.jpeg', album: 'Science Fair' },

      // 4. Cultural Fest
      { id: '7', title: 'Group Dance', image_url: '/g2.jpeg', album: 'Cultural Fest' },
      { id: '8', title: 'Classical Singing', image_url: '/ind2.jpg', album: 'Cultural Fest' },

      // 5. Annual Day
      { id: '9', title: 'Principal Speech', image_url: '/STEM-Lab-1.jpeg', album: 'Annual Day' },
      { id: '10', title: 'Prize Distribution', image_url: '/School_Prayer.jpeg', album: 'Annual Day' },

      // 6. Environmental Drive
      { id: '11', title: 'Sapling Plantation', image_url: '/kreis-6.webp', album: 'Environmental Drive' },
      { id: '12', title: 'Clean Campus Drive', image_url: '/gpp3.jpg', album: 'Environmental Drive' },

      // 7. Hostel Life
      { id: '13', title: 'Common Study Area', image_url: '/gpp5.jpg', album: 'Hostel Life' },
      { id: '14', title: 'Evening Routine', image_url: '/st1.jpeg', album: 'Hostel Life' },

      // 8. STEM Lab
      { id: '15', title: 'STEM Setup', image_url: '/gpp8.jpeg', album: 'STEM Lab' },
      { id: '16', title: 'Electronics Bench', image_url: '/gpp13.jpeg', album: 'STEM Lab' },
    ];

    setGalleryItems(data);
  }, []);

  const albums = [...new Set(galleryItems.map((item) => item.album).filter(Boolean))];

  const openAlbum = (album: string) => {
    const images = galleryItems.filter((item) => item.album === album);
    setAlbumImages(images);
    setCurrentImageIndex(0);
    setSelectedAlbum(album);
  };

  const closeModal = () => {
    setSelectedAlbum(null);
    setAlbumImages([]);
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (!albumImages.length) return;
    setCurrentImageIndex((prevIndex) =>
      direction === 'prev'
        ? (prevIndex - 1 + albumImages.length) % albumImages.length
        : (prevIndex + 1) % albumImages.length
    );
  };

  const getAlbumCover = (album: string) => {
    const item = galleryItems.find((i) => i.album === album);
    return item?.image_url || '';
  };

  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">School Gallery</h1>
        <p className="text-blue-100 max-w-xl mx-auto">Explore album-wise highlights and photo collections</p>
      </section>

      <section className="py-12 max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {albums.map((album) => (
          <div
            key={album}
            className="bg-white rounded-lg shadow hover:shadow-lg cursor-pointer transition overflow-hidden"
            onClick={() => openAlbum(album)}
          >
            <img
              src={getAlbumCover(album)}
              alt={album}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800">{album}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {selectedAlbum && albumImages.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[999] flex items-center justify-center">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image and navigation */}
            <div className="relative flex justify-center items-center bg-black">
              <img
                src={albumImages[currentImageIndex].image_url}
                alt={albumImages[currentImageIndex].title}
                className="max-h-[70vh] object-contain mx-auto"
              />

              {albumImages.length > 1 && (
                <>
                  <button
                    onClick={() => navigate('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => navigate('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {albumImages[currentImageIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
