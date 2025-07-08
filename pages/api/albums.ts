import { NextApiRequest, NextApiResponse } from 'next';

// Mock data storage
let albums: any[] = [
  {
    _id: '1',
    name: 'Sports Day 2024',
    description: 'Annual sports day celebrations and competitions',
    cover_image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    item_count: 1,
    created_at: new Date().toISOString()
  },
  {
    _id: '2',
    name: 'School Facilities',
    description: 'Modern infrastructure and facilities at KREIS schools',
    cover_image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
    item_count: 1,
    created_at: new Date().toISOString()
  },
  {
    _id: '3',
    name: 'Cultural Events',
    description: 'Cultural programs and traditional performances',
    cover_image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
    item_count: 1,
    created_at: new Date().toISOString()
  },
  {
    _id: '4',
    name: 'Graduation 2024',
    description: 'Graduation ceremony and achievements',
    cover_image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
    item_count: 1,
    created_at: new Date().toISOString()
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        return res.status(200).json(albums);

      case 'POST':
        const newAlbum = {
          ...req.body,
          _id: Date.now().toString(),
          item_count: 0,
          created_at: new Date().toISOString()
        };
        albums.push(newAlbum);
        return res.status(201).json(newAlbum);

      case 'DELETE':
        const { id } = req.query;
        albums = albums.filter(album => album._id !== id);
        return res.status(200).json({ message: 'Album deleted successfully' });

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error: any) {
    console.error('Albums API error:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
}