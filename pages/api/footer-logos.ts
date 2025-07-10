import { NextApiRequest, NextApiResponse } from 'next';

// Mock data storage with sample logos
let footerLogos: any[] = [
  {
    _id: '1',
    name: 'Government of Karnataka',
    image_url: 'https://getmycollege.in/wp-content/uploads/2025/06/Meity_logo.png',
    website_url: 'https://www.karnataka.gov.in',
    description: 'Official website of Government of Karnataka',
    is_active: true,
    order_index: 1,
    created_at: new Date().toISOString()
  },
  {
    _id: '2',
    name: 'Ministry of Education',
    image_url: 'https://getmycollege.in/wp-content/uploads/2025/06/digital-india-logo.png',
    website_url: 'https://www.education.gov.in',
    description: 'Ministry of Education, Government of India',
    is_active: true,
    order_index: 2,
    created_at: new Date().toISOString()
  },
  {
    _id: '3',
    name: 'Sarva Shiksha Abhiyan',
    image_url: 'https://getmycollege.in/wp-content/uploads/2025/06/data-gov-logo.png',
    website_url: 'https://samagra.education.gov.in',
    description: 'Sarva Shiksha Abhiyan - Education for All',
    is_active: true,
    order_index: 3,
    created_at: new Date().toISOString()
  },
  {
    _id: '4',
    name: 'Digital India',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Government_of_India_logo.svg/200px-Government_of_India_logo.svg.png',
    website_url: 'https://digitalindia.gov.in',
    description: 'Digital India Initiative',
    is_active: true,
    order_index: 4,
    created_at: new Date().toISOString()
  },
  {
    _id: '5',
    name: 'Skill India',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/200px-Emblem_of_India.svg.png',
    website_url: 'https://www.skillindia.gov.in',
    description: 'Skill Development Initiative',
    is_active: true,
    order_index: 5,
    created_at: new Date().toISOString()
  },
  {
    _id: '6',
    name: 'Beti Bachao Beti Padhao',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Government_of_India_logo.svg/200px-Government_of_India_logo.svg.png',
    website_url: 'https://wcd.nic.in',
    description: 'Save the Girl Child, Educate the Girl Child',
    is_active: true,
    order_index: 6,
    created_at: new Date().toISOString()
  },
  {
    _id: '7',
    name: 'Swachh Bharat Mission',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/200px-Emblem_of_India.svg.png',
    website_url: 'https://swachhbharatmission.gov.in',
    description: 'Clean India Mission',
    is_active: true,
    order_index: 7,
    created_at: new Date().toISOString()
  },
  {
    _id: '8',
    name: 'Make in India',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Government_of_India_logo.svg/200px-Government_of_India_logo.svg.png',
    website_url: 'https://www.makeinindia.com',
    description: 'Make in India Initiative',
    is_active: true,
    order_index: 8,
    created_at: new Date().toISOString()
  },
  {
    _id: '9',
    name: 'Ayushman Bharat',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/200px-Emblem_of_India.svg.png',
    website_url: 'https://www.pmjay.gov.in',
    description: 'National Health Protection Scheme',
    is_active: true,
    order_index: 9,
    created_at: new Date().toISOString()
  },
  {
    _id: '10',
    name: 'Jan Aushadhi',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Government_of_India_logo.svg/200px-Government_of_India_logo.svg.png',
    website_url: 'https://janaushadhi.gov.in',
    description: 'Pradhan Mantri Bhartiya Janaushadhi Pariyojana',
    is_active: true,
    order_index: 10,
    created_at: new Date().toISOString()
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        const activeLogos = footerLogos
          .filter(logo => logo.is_active)
          .sort((a, b) => a.order_index - b.order_index);
        return res.status(200).json(activeLogos);

      case 'POST':
        const newLogo = {
          ...req.body,
          _id: Date.now().toString(),
          created_at: new Date().toISOString()
        };
        footerLogos.push(newLogo);
        return res.status(201).json(newLogo);

      case 'PUT':
        const { id } = req.query;
        const logoIndex = footerLogos.findIndex(l => l._id === id);
        if (logoIndex === -1) {
          return res.status(404).json({ message: 'Logo not found' });
        }
        footerLogos[logoIndex] = {
          ...footerLogos[logoIndex],
          ...req.body,
          updated_at: new Date().toISOString()
        };
        return res.status(200).json(footerLogos[logoIndex]);

      case 'DELETE':
        const { id: deleteId } = req.query;
        footerLogos = footerLogos.filter(l => l._id !== deleteId);
        return res.status(200).json({ message: 'Logo deleted successfully' });

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error: any) {
    console.error('Footer logos API error:', error);
    res.status(500).json({ message: error.message || 'Internal server error' });
  }
}