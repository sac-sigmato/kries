import { NextApiRequest, NextApiResponse } from 'next';

// Mock data storage
let emailAlerts: any[] = [
  {
    _id: '1',
    title: 'Exam Schedule Update',
    message: 'Dear Students and Parents,\n\nThis is to inform you that the final examination schedule has been updated. Please check the notice board for the revised timetable.\n\nRegards,\nKREIS Administration',
    recipients: ['student1@example.com', 'parent1@example.com'],
    recipient_type: 'class',
    class_filter: '10th',
    section_filter: 'A',
    priority: 'high',
    status: 'sent',
    sent_count: 50,
    created_at: new Date().toISOString(),
    sent_at: new Date().toISOString()
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        return res.status(200).json(emailAlerts);

      case 'POST':
        const newAlert = {
          ...req.body,
          _id: Date.now().toString(),
          sent_count: 0,
          created_at: new Date().toISOString()
        };
        emailAlerts.push(newAlert);
        return res.status(201).json(newAlert);

      case 'PUT':
        const { id } = req.query;
        const alertIndex = emailAlerts.findIndex(a => a._id === id);
        if (alertIndex === -1) {
          return res.status(404).json({ message: 'Alert not found' });
        }
        emailAlerts[alertIndex] = {
          ...emailAlerts[alertIndex],
          ...req.body,
          updated_at: new Date().toISOString()
        };
        return res.status(200).json(emailAlerts[alertIndex]);

      case 'DELETE':
        const { id: deleteId } = req.query;
        emailAlerts = emailAlerts.filter(a => a._id !== deleteId);
        return res.status(200).json({ message: 'Alert deleted successfully' });

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error: any) {
    console.error('Email alerts API error:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
}