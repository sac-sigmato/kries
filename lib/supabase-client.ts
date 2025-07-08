import { createClient } from '@supabase/supabase-js'

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in your .env file')
}

// Client-side Supabase client
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
)

// Server-side Supabase client for API routes
export const supabaseServer = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
)

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return !!(supabaseUrl && supabaseAnonKey)
}

// Test connection function
export const testSupabaseConnection = async () => {
  try {
    // Simple health check that doesn't require any specific table
    const { data, error } = await supabaseServer
      .from('home_slider')
      .select('id')
      .limit(1)
    
    if (error) {
      console.error('Supabase connection test failed:', error)
      return false
    }
    
    return true
  } catch (err) {
    console.error('Supabase connection test error:', err)
    return false
  }
}

// Database types based on your schema
export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  image_url?: string
  author: string
  published: boolean
  category: string
  tags: string[]
  created_at: string
  updated_at: string
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  image_url?: string
  category: string
  max_participants?: number
  registration_required: boolean
  created_at: string
  updated_at: string
}

export interface GalleryItem {
  id: string
  title: string
  description?: string
  image_url: string
  category: string
  album?: string
  tags: string[]
  created_at: string
}

export interface Result {
  id: string
  student_name: string
  student_id: string
  class: string
  section: string
  exam_type: string
  subjects: {
    subject: string
    marks_obtained: number
    max_marks: number
    grade: string
  }[]
  total_marks: number
  percentage: number
  grade: string
  rank?: number
  academic_year: string
  created_at: string
  updated_at: string
}

export interface HomeSection {
  id: string
  section_name: string
  title: string
  content: string
  image_url?: string
  button_text?: string
  button_url?: string
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface HomeSlider {
  id: string
  title: string
  subtitle?: string
  description: string
  image_url: string
  button_text?: string
  button_url?: string
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface ContentSection {
  id: string
  section_name: string
  title: string
  content: string
  image_url?: string
  created_at: string
  updated_at: string
}

export interface FoodQuality {
  id: string
  date: string
  meal_type: string
  menu: string
  quality_rating?: number
  image_url?: string
  notes?: string
  created_at: string
  updated_at: string
}

export interface FacultyMember {
  id: string
  name: string
  position: string
  department: string
  qualification: string
  experience: string
  specialization: string
  image_url?: string
  email?: string
  phone?: string
  achievements?: string[]
  bio?: string
  order_index?: number
  is_active?: boolean
  created_at?: string
  updated_at?: string
}