import { NextApiRequest, NextApiResponse } from 'next';
import { supabase, isSupabaseConfigured } from '../../lib/supabase-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Check if Supabase is properly configured
  if (!isSupabaseConfigured()) {
    return res.status(500).json({ 
      message: 'Supabase is not properly configured. Please check your environment variables.',
      error: 'Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY'
    });
  }

  try {
    switch (req.method) {
      case 'GET':
        try {
          const { data: blogs, error: fetchError } = await supabase
            .from('blog_posts')
            .select('*')
            .order('created_at', { ascending: false });

          if (fetchError) {
            console.error('Error fetching blogs:', fetchError);
            return res.status(500).json({ 
              message: 'Failed to fetch blogs',
              error: fetchError.message,
              details: fetchError
            });
          }

          return res.status(200).json(blogs || []);
        } catch (networkError) {
          console.error('Network error fetching blogs:', networkError);
          return res.status(500).json({ 
            message: 'Network error connecting to database',
            error: networkError instanceof Error ? networkError.message : 'Unknown network error'
          });
        }

      case 'POST':
        const { data: newBlog, error: insertError } = await supabase
          .from('blog_posts')
          .insert([req.body])
          .select()
          .single();

        if (insertError) {
          console.error('Error creating blog:', insertError);
          return res.status(500).json({ message: 'Failed to create blog' });
        }

        return res.status(201).json(newBlog);

      case 'PUT':
        const { id } = req.query;
        
        if (!id) {
          return res.status(400).json({ message: 'Blog ID is required' });
        }

        const { data: updatedBlog, error: updateError } = await supabase
          .from('blog_posts')
          .update(req.body)
          .eq('id', id)
          .select()
          .single();

        if (updateError) {
          console.error('Error updating blog:', updateError);
          return res.status(500).json({ message: 'Failed to update blog' });
        }

        if (!updatedBlog) {
          return res.status(404).json({ message: 'Blog not found' });
        }

        return res.status(200).json(updatedBlog);

      case 'DELETE':
        const { id: deleteId } = req.query;
        
        if (!deleteId) {
          return res.status(400).json({ message: 'Blog ID is required' });
        }

        const { error: deleteError } = await supabase
          .from('blog_posts')
          .delete()
          .eq('id', deleteId);

        if (deleteError) {
          console.error('Error deleting blog:', deleteError);
          return res.status(500).json({ message: 'Failed to delete blog' });
        }

        return res.status(200).json({ message: 'Blog deleted successfully' });

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error: any) {
    console.error('Blogs API error:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
}