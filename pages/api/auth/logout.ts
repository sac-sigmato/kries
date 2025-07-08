import { NextApiRequest, NextApiResponse } from 'next'
import { signOut } from '../../../lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    await signOut()
    res.status(200).json({ message: 'Logout successful' })
  } catch (error: any) {
    console.error('Logout error:', error)
    res.status(500).json({ 
      message: error.message || 'Logout failed' 
    })
  }
}