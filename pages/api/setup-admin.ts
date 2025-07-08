import { NextApiRequest, NextApiResponse } from 'next';
import { createUser } from '../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Create default admin user
    const adminUser = await createUser('admin@educollege.edu', 'admin123', 'admin');
    
    res.status(200).json({ 
      message: 'Admin user created successfully',
      email: adminUser.email 
    });
  } catch (error: any) {
    if (error.message === 'User already exists') {
      return res.status(200).json({ message: 'Admin user already exists' });
    }
    
    console.error('Setup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}