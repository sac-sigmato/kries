import { NextApiRequest, NextApiResponse } from 'next';

// Mock data storage
let contactInfo: any[] = [
  {
    _id: '1',
    type: 'phone',
    label: 'Main Office',
    value: '+91 80 2234 5678',
    icon: 'phone',
    is_primary: true,
    is_active: true,
    order_index: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    _id: '2',
    type: 'email',
    label: 'General Inquiries',
    value: 'info@kreis.kar.nic.in',
    icon: 'mail',
    is_primary: true,
    is_active: true,
    order_index: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    _id: '3',
    type: 'address',
    label: 'Head Office',
    value: 'KREIS Bhavan, Bangalore, Karnataka 560001, India',
    icon: 'map-pin',
    is_primary: true,
    is_active: true,
    order_index: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    _id: '4',
    type: 'phone',
    label: 'Admissions Office',
    value: '+91 80 2234 5679',
    icon: 'phone',
    is_primary: false,
    is_active: true,
    order_index: 4,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    _id: '5',
    type: 'email',
    label: 'Admissions',
    value: 'admissions@kreis.kar.nic.in',
    icon: 'mail',
    is_primary: false,
    is_active: true,
    order_index: 5,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        const activeContacts = contactInfo
          .filter(contact => contact.is_active)
          .sort((a, b) => a.order_index - b.order_index);
        return res.status(200).json(activeContacts);

      case 'POST':
        const newContact = {
          ...req.body,
          _id: Date.now().toString(),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        contactInfo.push(newContact);
        return res.status(201).json(newContact);

      case 'PUT':
        const { id } = req.query;
        const contactIndex = contactInfo.findIndex(c => c._id === id);
        if (contactIndex === -1) {
          return res.status(404).json({ message: 'Contact info not found' });
        }
        contactInfo[contactIndex] = {
          ...contactInfo[contactIndex],
          ...req.body,
          updated_at: new Date().toISOString()
        };
        return res.status(200).json(contactInfo[contactIndex]);

      case 'DELETE':
        const { id: deleteId } = req.query;
        contactInfo = contactInfo.filter(c => c._id !== deleteId);
        return res.status(200).json({ message: 'Contact info deleted successfully' });

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error: any) {
    console.error('Contact info API error:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
}