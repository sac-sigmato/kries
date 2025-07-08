/*
  # Create faculty members table

  1. New Tables
    - `faculty_members`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `position` (text, required)
      - `department` (text, required)
      - `qualification` (text, required)
      - `experience` (text, required)
      - `specialization` (text, required)
      - `image_url` (text, optional)
      - `email` (text, optional)
      - `phone` (text, optional)
      - `achievements` (text array, default empty)
      - `bio` (text, optional)
      - `order_index` (integer, default 0)
      - `is_active` (boolean, default true)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `faculty_members` table
    - Add policy for authenticated users to manage all faculty members
    - Add policy for public users to read only active faculty members

  3. Indexes
    - Index on department for filtering
    - Index on is_active for filtering
    - Index on order_index for sorting
*/

-- Create faculty_members table
CREATE TABLE IF NOT EXISTS faculty_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  position text NOT NULL,
  department text NOT NULL,
  qualification text NOT NULL,
  experience text NOT NULL,
  specialization text NOT NULL,
  image_url text,
  email text,
  phone text,
  achievements text[] DEFAULT '{}',
  bio text,
  order_index integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on the table
ALTER TABLE faculty_members ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users to manage all faculty entries
CREATE POLICY "Authenticated users can manage faculty members"
  ON faculty_members
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policy for public users to read active faculty entries
CREATE POLICY "Active faculty members are publicly readable"
  ON faculty_members
  FOR SELECT
  TO public
  USING (is_active = true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS faculty_members_department_idx ON faculty_members(department);
CREATE INDEX IF NOT EXISTS faculty_members_is_active_idx ON faculty_members(is_active);
CREATE INDEX IF NOT EXISTS faculty_members_order_idx ON faculty_members(order_index);

-- Create trigger for updated_at column
CREATE TRIGGER update_faculty_members_updated_at
  BEFORE UPDATE ON faculty_members
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO faculty_members (name, position, department, qualification, experience, specialization, image_url, email, phone, achievements, bio, order_index) VALUES
(
  'Dr. Rajesh Kumar',
  'Director General',
  'administration',
  'Ph.D. in Education Administration',
  '25 years',
  'Educational Leadership, Rural Education Policy',
  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
  'director@kreis.kar.nic.in',
  '+91 80 2234 5678',
  ARRAY['Padma Shri Awardee', 'National Education Excellence Award', '25+ Research Publications'],
  'Dr. Rajesh Kumar has dedicated his career to improving educational opportunities for rural students. With over 25 years of experience in educational administration, he has implemented numerous successful programs that have transformed the lives of thousands of students.',
  1
),
(
  'Prof. Sunita Sharma',
  'Academic Director',
  'academics',
  'M.Ed., Ph.D. in Curriculum Development',
  '20 years',
  'Curriculum Design, Teacher Training',
  'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
  'academic@kreis.kar.nic.in',
  '+91 80 2234 5679',
  ARRAY['Best Teacher Award', 'Curriculum Innovation Award', 'Educational Research Excellence'],
  'Prof. Sunita Sharma is an expert in curriculum development and teacher training. Her innovative approaches to education have significantly improved teaching methodologies across KREIS schools.',
  2
),
(
  'Dr. Manjunath Gowda',
  'Head of Science Department',
  'science',
  'M.Sc. Physics, Ph.D. in Science Education',
  '18 years',
  'Physics, Science Methodology, Laboratory Management',
  'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
  'science@kreis.kar.nic.in',
  '+91 80 2234 5680',
  ARRAY['Science Teacher Excellence Award', 'Innovation in Science Teaching', 'Student Mentorship Award'],
  'Dr. Manjunath Gowda has revolutionized science education in KREIS schools by implementing practical, hands-on learning approaches. His methods have resulted in increased student interest and improved performance in science subjects.',
  3
),
(
  'Mrs. Kavitha Reddy',
  'Kannada Language Coordinator',
  'languages',
  'M.A. Kannada Literature, B.Ed.',
  '15 years',
  'Kannada Literature, Language Pedagogy',
  'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
  'kannada@kreis.kar.nic.in',
  '+91 80 2234 5681',
  ARRAY['State Language Teacher Award', 'Cultural Heritage Promotion', 'Literary Contribution Award'],
  'Mrs. Kavitha Reddy is dedicated to preserving and promoting Kannada language and culture. Her innovative teaching methods have made Kannada learning engaging and relevant for students.',
  4
);