import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseServer, isSupabaseConfigured } from '../../lib/supabase-client';

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
          const { data: galleryItems, error: fetchError } = await supabaseServer
            .from('gallery')
            .select('*')
            .order('created_at', { ascending: false });

          if (fetchError) {
            console.error('Error fetching gallery items:', fetchError);
            return res.status(500).json({ 
              message: 'Failed to fetch gallery items',
              error: fetchError.message,
              details: fetchError
            });
          }

          return res.status(200).json(galleryItems || []);
        } catch (networkError) {
          console.error('Network error fetching gallery items:', networkError);
          return res.status(500).json({ 
            message: 'Network error connecting to database',
            error: networkError instanceof Error ? networkError.message : 'Unknown network error'
          });
        }

      case 'POST':
        try {
          const { data: newItem, error: insertError } = await supabaseServer
            .from('gallery')
            .insert([req.body])
            .select()
            .single();

          if (insertError) {
            console.error('Error creating gallery item:', insertError);
            return res.status(500).json({ 
              message: 'Failed to create gallery item',
              error: insertError.message 
            });
          }

          return res.status(201).json(newItem);
        } catch (error) {
          console.error('Error in POST request:', error);
          return res.status(500).json({ 
            message: 'Failed to create gallery item',
            error: error instanceof Error ? error.message : 'Unknown error'
          });
        }

      case 'PUT':
        try {
          const { id } = req.query;
          
          if (!id) {
            return res.status(400).json({ message: 'Gallery item ID is required' });
          }

          const { data: updatedItem, error: updateError } = await supabaseServer
            .from('gallery')
            .update(req.body)
            .eq('id', id)
            .select()
            .single();

          if (updateError) {
            console.error('Error updating gallery item:', updateError);
            return res.status(500).json({ 
              message: 'Failed to update gallery item',
              error: updateError.message 
            });
          }

          if (!updatedItem) {
            return res.status(404).json({ message: 'Gallery item not found' });
          }

          return res.status(200).json(updatedItem);
        } catch (error) {
          console.error('Error in PUT request:', error);
          return res.status(500).json({ 
            message: 'Failed to update gallery item',
            error: error instanceof Error ? error.message : 'Unknown error'
          });
        }

      case 'DELETE':
        try {
          const { id: deleteId } = req.query;
          
          if (!deleteId) {
            return res.status(400).json({ message: 'Gallery item ID is required' });
          }

          const { error: deleteError } = await supabaseServer
            .from('gallery')
            .delete()
            .eq('id', deleteId);

          if (deleteError) {
            console.error('Error deleting gallery item:', deleteError);
            return res.status(500).json({ 
              message: 'Failed to delete gallery item',
              error: deleteError.message 
            });
          }

          return res.status(200).json({ message: 'Gallery item deleted successfully' });
        } catch (error) {
          console.error('Error in DELETE request:', error);
          return res.status(500).json({ 
            message: 'Failed to delete gallery item',
            error: error instanceof Error ? error.message : 'Unknown error'
          });
        }

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error: any) {
    console.error('Gallery API error:', error);
    res.status(500).json({ 
      message: error.message || 'Internal server error',
      error: 'Unexpected error occurred'
    });
  }
}