import { NextApiRequest, NextApiResponse } from 'next'
import { mockHomeSections, HomeSection } from '../../lib/supabase'

// In-memory storage for demo purposes
let sections = [...mockHomeSections];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        const activeSections = sections
          .filter(section => section.is_active)
          .sort((a, b) => (a.order_index || 0) - (b.order_index || 0));
        return res.status(200).json(activeSections);

      case 'POST':
        const newSection: HomeSection = {
          ...req.body,
          id: Date.now().toString(),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        sections.push(newSection);
        return res.status(201).json(newSection);

      case 'PUT':
        const { id, ...updateData } = req.body;
        const sectionIndex = sections.findIndex(s => s.id === id);
        if (sectionIndex === -1) {
          return res.status(404).json({ message: 'Section not found' });
        }
        sections[sectionIndex] = {
          ...sections[sectionIndex],
          ...updateData,
          updated_at: new Date().toISOString()
        };
        return res.status(200).json(sections[sectionIndex]);

      case 'DELETE':
        const { id: deleteId } = req.query;
        sections = sections.filter(s => s.id !== deleteId);
        return res.status(200).json({ message: 'Section deleted successfully' });

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error: any) {
    console.error('Home sections API error:', error);
    res.status(500).json({ 
      message: error.message || 'Internal server error' 
    });
  }
}