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
      case "GET": {
        const { data: events, error } = await supabase
          .from("events")
          .select("*")
          .order("date", { ascending: true });

        if (error) {
          return res
            .status(500)
            .json({ message: "Failed to fetch events", error });
        }

        return res.status(200).json(events || []);
      }

      case "POST":
        const { data: newEvent, error: insertError } = await supabase
          .from("events")
          .insert([req.body])
          .select()
          .single();

        if (insertError) {
          console.error("Error creating event:", insertError);
          return res.status(500).json({ message: "Failed to create event" });
        }

        return res.status(201).json(newEvent);

      case "PUT":
        const { id } = req.query;

        if (!id) {
          return res.status(400).json({ message: "Event ID is required" });
        }

        const { data: updatedEvent, error: updateError } = await supabase
          .from("events")
          .update(req.body)
          .eq("id", id)
          .select()
          .single();

        if (updateError) {
          console.error("Error updating event:", updateError);
          return res.status(500).json({ message: "Failed to update event" });
        }

        if (!updatedEvent) {
          return res.status(404).json({ message: "Event not found" });
        }

        return res.status(200).json(updatedEvent);

      case "DELETE":
        const { id: deleteId } = req.query;

        if (!deleteId) {
          return res.status(400).json({ message: "Event ID is required" });
        }

        const { error: deleteError } = await supabase
          .from("events")
          .delete()
          .eq("id", deleteId);

        if (deleteError) {
          console.error("Error deleting event:", deleteError);
          return res.status(500).json({ message: "Failed to delete event" });
        }

        return res.status(200).json({ message: "Event deleted successfully" });

      default:
        return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error: any) {
    console.error('Events API error:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
}