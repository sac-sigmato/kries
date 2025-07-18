import { NextApiRequest, NextApiResponse } from 'next';
import { supabase, isSupabaseConfigured } from '../../lib/supabase-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
        const { data: results, error: fetchError } = await supabase
          .from('results')
          .select('*')
          .order('created_at', { ascending: false });

        if (fetchError) {
          console.error('Error fetching results:', fetchError);
          return res.status(500).json({ message: 'Failed to fetch results' });
        }

        return res.status(200).json(results || []);

      case 'POST':
        const { data: newResult, error: insertError } = await supabase
          .from('results')
          .insert([req.body])
          .select()
          .single();

        if (insertError) {
          console.error('Error creating result:', insertError);
          return res.status(500).json({ message: 'Failed to create result' });
        }

       // ✅ Email Notification (if email is present in payload)
  if (newResult.email) {
    try {
      const { Resend } = await import('resend');
      const resend = new Resend("re_SUwH5UtS_MPyDv5vux4xS31SJSvFjLNwt");

      await resend.emails.send({
        from: 'KRC School <no-reply@kreis.school>',
        to: "nuthan.raghunath@sigmato.com",
        subject: '🎓 Your Result has been Published!',
        html: `
          <h2>Dear ${newResult.student_name},</h2>
          <p>Your result for <strong>${newResult.exam_type.replace(/_/g, ' ')}</strong> (${newResult.academic_year}) has been published.</p>
          <p><strong>Percentage:</strong> ${newResult.percentage}%<br/><strong>Grade:</strong> ${newResult.grade}</p>
          <p>Student ID: ${newResult.student_id}</p>
          <br/>
          <p>Regards,<br/>Kittur Rani Chennamma School</p>
        `,
      });
    } catch (err) {
      console.error('Failed to send result email:', err);
      // Continue without throwing; don't block result creation
    }
  }

  return res.status(201).json(newResult);

      case 'PUT':
        const { id } = req.query;
        
        if (!id) {
          return res.status(400).json({ message: 'Result ID is required' });
        }

        const { data: updatedResult, error: updateError } = await supabase
          .from('results')
          .update(req.body)
          .eq('id', id)
          .select()
          .single();

        if (updateError) {
          console.error('Error updating result:', updateError);
          return res.status(500).json({ message: 'Failed to update result' });
        }

        if (!updatedResult) {
          return res.status(404).json({ message: 'Result not found' });
        }

        return res.status(200).json(updatedResult);

      case 'DELETE':
        const { id: deleteId } = req.query;
        
        if (!deleteId) {
          return res.status(400).json({ message: 'Result ID is required' });
        }

        const { error: deleteError } = await supabase
          .from('results')
          .delete()
          .eq('id', deleteId);

        if (deleteError) {
          console.error('Error deleting result:', deleteError);
          return res.status(500).json({ message: 'Failed to delete result' });
        }

        return res.status(200).json({ message: 'Result deleted successfully' });

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error: any) {
    console.error('Results API error:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
}