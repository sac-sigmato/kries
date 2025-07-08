import { NextApiRequest, NextApiResponse } from 'next'
import { mockSliderItems, HomeSlider } from '../../lib/supabase'

// In-memory storage for demo purposes
let sliderItems = [...mockSliderItems];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        const activeSlides = sliderItems
          .filter(slide => slide.is_active)
          .sort((a, b) => (a.order_index || 0) - (b.order_index || 0));
        return res.status(200).json(activeSlides);

      case 'POST':
        const newSlide: HomeSlider = {
          ...req.body,
          id: Date.now().toString(),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        sliderItems.push(newSlide);
        return res.status(201).json(newSlide);

      case 'PUT':
        const { id, ...updateData } = req.body;
        const slideIndex = sliderItems.findIndex(s => s.id === id);
        if (slideIndex === -1) {
          return res.status(404).json({ message: 'Slide not found' });
        }
        sliderItems[slideIndex] = {
          ...sliderItems[slideIndex],
          ...updateData,
          updated_at: new Date().toISOString()
        };
        return res.status(200).json(sliderItems[slideIndex]);

      case 'DELETE':
        const { id: deleteId } = req.query;
        sliderItems = sliderItems.filter(s => s.id !== deleteId);
        return res.status(200).json({ message: 'Slide deleted successfully' });

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error: any) {
    console.error('Home slider API error:', error);
    res.status(500).json({ 
      message: error.message || 'Internal server error' 
    });
  }
}