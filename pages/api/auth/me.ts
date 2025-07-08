import { NextApiRequest, NextApiResponse } from 'next'
import { getCurrentUser } from '../../../lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const user = await getCurrentUser()
    
    if (!user) {
      return res.status(401).json({ message: 'Not authenticated' })
    }

    res.status(200).json({ user })
  } catch (error: any) {
    console.error('Get user error:', error)
    res.status(500).json({ 
      message: error.message || 'Failed to get user' 
    })
  }
}