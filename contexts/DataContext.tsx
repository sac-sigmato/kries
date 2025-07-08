import React, { createContext, useContext, useState, useEffect } from 'react';

interface ContentSection {
  _id: string;
  section_name: string;
  title: string;
  content: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image_url?: string;
  author: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  category: string;
  created_at: string;
}

interface DataContextType {
  contentSections: ContentSection[];
  blogPosts: BlogPost[];
  events: Event[];
  gallery: GalleryItem[];
  loading: boolean;
  refreshData: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contentSections, setContentSections] = useState<ContentSection[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshData = async () => {
    setLoading(true);
    
    try {
      // Fetch blog posts from the API
      const blogsResponse = await fetch('/api/blogs');
      if (blogsResponse.ok) {
        const blogsData = await blogsResponse.json();
        setBlogPosts(blogsData);
      }
      
      // Fetch events from the API
      const eventsResponse = await fetch('/api/events');
      if (eventsResponse.ok) {
        const eventsData = await eventsResponse.json();
        setEvents(eventsData);
      }
      
      // Fetch gallery items from the API
      const galleryResponse = await fetch('/api/gallery');
      if (galleryResponse.ok) {
        const galleryData = await galleryResponse.json();
        setGallery(galleryData);
      }
      
      // For now, set empty array for content sections
      // This will be implemented with Supabase in future updates
      setContentSections([]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <DataContext.Provider value={{
      contentSections,
      blogPosts,
      events,
      gallery,
      loading,
      refreshData
    }}>
      {children}
    </DataContext.Provider>
  );
};