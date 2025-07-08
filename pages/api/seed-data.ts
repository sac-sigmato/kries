import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Mock seeding - data is already available in the mock files
    res.status(200).json({ 
      message: 'Mock data is already available',
      sections: 3,
      sliderItems: 2
    });
  } catch (error) {
    console.error('Seed data error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}