import { NextApiRequest, NextApiResponse } from 'next';

// Mock student data
const students = [
  {
    _id: '1',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@student.kreis.edu',
    class: '10th',
    section: 'A',
    parent_email: 'rajesh.parent@gmail.com'
  },
  {
    _id: '2',
    name: 'Priya Sharma',
    email: 'priya.sharma@student.kreis.edu',
    class: '10th',
    section: 'A',
    parent_email: 'priya.parent@gmail.com'
  },
  {
    _id: '3',
    name: 'Arjun Patel',
    email: 'arjun.patel@student.kreis.edu',
    class: '9th',
    section: 'B',
    parent_email: 'arjun.parent@gmail.com'
  },
  {
    _id: '4',
    name: 'Sneha Reddy',
    email: 'sneha.reddy@student.kreis.edu',
    class: '8th',
    section: 'A',
    parent_email: 'sneha.parent@gmail.com'
  },
  {
    _id: '5',
    name: 'Vikram Singh',
    email: 'vikram.singh@student.kreis.edu',
    class: '7th',
    section: 'C',
    parent_email: 'vikram.parent@gmail.com'
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        return res.status(200).json(students);

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error: any) {
    console.error('Students API error:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
}