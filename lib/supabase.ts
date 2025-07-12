// Mock data structure to replace Supabase
export interface Gallery {
  id: string
  title: string
  description?: string
  image_url: string
  category: string
  created_at: string
}

export interface ContentSection {
  id: string
  section_name: string
  title: string
  content: string
  image_url?: string
  created_at?: string
  updated_at?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  image_url?: string
  author: string
  published?: boolean
  created_at?: string
  updated_at?: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  image_url?: string
  created_at?: string
  updated_at?: string
}

export interface HomeSection {
  id: string
  section_name: string
  title: string
  content: string
  image_url?: string
  button_text?: string
  button_url?: string
  order_index?: number
  is_active?: boolean
  created_at?: string
  updated_at?: string
}

export interface HomeSlider {
  id: string
  title: string
  subtitle?: string
  description: string
  image_url: string
  button_text?: string
  button_url?: string
  order_index?: number
  is_active?: boolean
  created_at?: string
  updated_at?: string
}

// Mock data
export const mockHomeSections: HomeSection[] = [
  {
    id: '1',
    section_name: 'hero_section',
    title: 'Karnataka Residential Educational Institutions Society',
    content: 'Promoting educational development of rural children across Karnataka through quality residential education for SC, ST and BC communities.',
    image_url: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1200',
    button_text: 'Learn About Our Schools',
    button_url: '/about',
    order_index: 1,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    section_name: 'about_preview',
    title: 'Empowering Rural Education Since 1999',
    content: 'The Government launched KREIS in October 1999 with the objective of promoting educational development of various classes of rural children in Karnataka. We operate 821 Morarji Desai, Kittur Rani Chennamma, Dr. B R Ambedkar, Atal Bihari Vajpayee, Smt. Indira Gandhi, and Masti Venkatesha Iyengar Residential Schools and Pre University colleges.',
    image_url: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
    // button_text: 'Our Mission',
    button_url: '/about',
    order_index: 2,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    section_name: 'achievements',
    title: 'Our Impact Across Karnataka',
    content: 'With 821 residential schools and colleges, we provide quality education to socially and educationally backward communities, helping them pursue higher studies and join the mainstream of society.',
    order_index: 3,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '4',
    section_name: 'facilities',
    title: 'Residential School Features',
    content: 'Our residential schools work in co-education from 6th to 10th grade with 250 students per school (50 per class). We ensure 50% seats are reserved for girls, promoting gender equality in education.',
    order_index: 3,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '5',
    section_name: 'school_facility',
    title: 'School Facility',
    content: 'Our residential schools are equipped with modern infrastructure, well-equipped laboratories, comfortable hostel facilities with nutritious canteen services, and spacious open-air auditoriums with playgrounds for comprehensive student development.',
    order_index: 4,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '6',
    section_name: 'achievements_activities',
    title: 'Achievements & Activities',
    content: 'Our students excel in academics with 95% pass rates, actively participate in co-curricular and cultural activities, engage in sports and physical development programs, and take leadership roles in social initiatives that benefit their communities.',
    order_index: 5,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

