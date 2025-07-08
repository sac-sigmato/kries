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
        const { department } = req.query;
        let query = supabase
          .from('faculty_members')
          .select('*')
          .order('order_index', { ascending: true });
        
        // Filter by department if provided
        if (department) {
          query = query.eq('department', department);
        }
        
        // For public access, only show active faculty members
        if (!req.headers.authorization) {
          query = query.eq('is_active', true);
        }
        
        const { data: facultyMembers, error: fetchError } = await query;

        if (fetchError) {
          console.error('Error fetching faculty members:', fetchError);
          return res.status(500).json({ message: 'Failed to fetch faculty members' });
        }

        return res.status(200).json(facultyMembers || []);

      case 'POST':
        const { data: newFaculty, error: insertError } = await supabase
          .from('faculty_members')
          .insert([req.body])
          .select()
          .single();

        if (insertError) {
          console.error('Error creating faculty member:', insertError);
          return res.status(500).json({ message: 'Failed to create faculty member' });
        }

        return res.status(201).json(newFaculty);

      case 'PUT':
        const { id } = req.query;
        
        if (!id) {
          return res.status(400).json({ message: 'Faculty member ID is required' });
        }

        const { data: updatedFaculty, error: updateError } = await supabase
          .from('faculty_members')
          .update(req.body)
          .eq('id', id)
          .select()
          .single();

        if (updateError) {
          console.error('Error updating faculty member:', updateError);
          return res.status(500).json({ message: 'Failed to update faculty member' });
        }

        if (!updatedFaculty) {
          return res.status(404).json({ message: 'Faculty member not found' });
        }

        return res.status(200).json(updatedFaculty);

      case 'DELETE':
        const { id: deleteId } = req.query;
        
        if (!deleteId) {
          return res.status(400).json({ message: 'Faculty member ID is required' });
        }

        const { error: deleteError } = await supabase
          .from('faculty_members')
          .delete()
          .eq('id', deleteId);

        if (deleteError) {
          console.error('Error deleting faculty member:', deleteError);
          return res.status(500).json({ message: 'Failed to delete faculty member' });
        }

        return res.status(200).json({ message: 'Faculty member deleted successfully' });

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error: any) {
    console.error('Faculty API error:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
}