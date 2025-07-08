/*
  # Create Gallery, Events, and Results Tables

  1. New Tables
    - `gallery`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text, optional)
      - `image_url` (text)
      - `category` (text)
      - `album` (text, optional)
      - `tags` (text array)
      - `created_at` (timestamp)
    
    - `events`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `date` (timestamp)
      - `location` (text)
      - `image_url` (text, optional)
      - `category` (text)
      - `max_participants` (integer, optional)
      - `registration_required` (boolean)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `results`
      - `id` (uuid, primary key)
      - `student_name` (text)
      - `student_id` (text)
      - `class` (text)
      - `section` (text)
      - `exam_type` (text)
      - `subjects` (jsonb)
      - `total_marks` (integer)
      - `percentage` (decimal)
      - `grade` (text)
      - `rank` (integer, optional)
      - `academic_year` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage data
    - Add policies for public users to read data
*/

-- Create gallery table
CREATE TABLE IF NOT EXISTS gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text NOT NULL,
  category text NOT NULL,
  album text,
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  date timestamptz NOT NULL,
  location text NOT NULL,
  image_url text,
  category text NOT NULL DEFAULT 'academic',
  max_participants integer,
  registration_required boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create results table
CREATE TABLE IF NOT EXISTS results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  student_id text NOT NULL,
  class text NOT NULL,
  section text NOT NULL,
  exam_type text NOT NULL,
  subjects jsonb NOT NULL,
  total_marks integer NOT NULL,
  percentage decimal(5,2) NOT NULL,
  grade text NOT NULL,
  rank integer,
  academic_year text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE results ENABLE ROW LEVEL SECURITY;

-- Gallery policies
CREATE POLICY "Gallery items are publicly readable"
  ON gallery
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage gallery items"
  ON gallery
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Events policies
CREATE POLICY "Events are publicly readable"
  ON events
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage events"
  ON events
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Results policies
CREATE POLICY "Results are publicly readable"
  ON results
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage results"
  ON results
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS gallery_category_idx ON gallery(category);
CREATE INDEX IF NOT EXISTS gallery_album_idx ON gallery(album);
CREATE INDEX IF NOT EXISTS gallery_created_at_idx ON gallery(created_at DESC);

CREATE INDEX IF NOT EXISTS events_date_idx ON events(date);
CREATE INDEX IF NOT EXISTS events_category_idx ON events(category);
CREATE INDEX IF NOT EXISTS events_created_at_idx ON events(created_at DESC);

CREATE INDEX IF NOT EXISTS results_student_id_idx ON results(student_id);
CREATE INDEX IF NOT EXISTS results_class_idx ON results(class);
CREATE INDEX IF NOT EXISTS results_exam_type_idx ON results(exam_type);
CREATE INDEX IF NOT EXISTS results_academic_year_idx ON results(academic_year);
CREATE INDEX IF NOT EXISTS results_created_at_idx ON results(created_at DESC);

-- Create or update the update_updated_at_column function if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_proc WHERE proname = 'update_updated_at_column'
  ) THEN
    CREATE OR REPLACE FUNCTION update_updated_at_column()
    RETURNS TRIGGER AS $func$
    BEGIN
      NEW.updated_at = now();
      RETURN NEW;
    END;
    $func$ language 'plpgsql';
  END IF;
END $$;

-- Create triggers for updated_at columns
CREATE TRIGGER update_events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_results_updated_at
  BEFORE UPDATE ON results
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for gallery
INSERT INTO gallery (title, description, image_url, category, album, tags) VALUES
(
  'Annual Sports Day 2024',
  'Students participating in various sports activities during the annual sports day celebration.',
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
  'sports',
  'Sports Day 2024',
  ARRAY['sports', 'athletics', 'competition', 'students']
),
(
  'Science Laboratory',
  'Students conducting experiments in our well-equipped science laboratory.',
  'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
  'academics',
  'School Facilities',
  ARRAY['science', 'laboratory', 'experiments', 'learning']
),
(
  'Cultural Program Performance',
  'Students showcasing traditional dance during the annual cultural program.',
  'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
  'cultural',
  'Cultural Events',
  ARRAY['dance', 'culture', 'performance', 'tradition']
),
(
  'Graduation Ceremony 2024',
  'Students receiving their certificates during the graduation ceremony.',
  'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
  'graduation',
  'Graduation 2024',
  ARRAY['graduation', 'ceremony', 'achievement', 'celebration']
);

-- Insert sample data for events
INSERT INTO events (title, description, date, location, image_url, category, max_participants, registration_required) VALUES
(
  'Annual Sports Day',
  'Inter-house sports competition with various athletic events for all classes.',
  '2024-03-15T09:00:00Z',
  'School Playground',
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
  'sports',
  500,
  true
),
(
  'Science Exhibition',
  'Students showcase their innovative science projects and experiments.',
  '2024-03-20T10:00:00Z',
  'Science Laboratory',
  'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
  'academic',
  200,
  false
),
(
  'Cultural Festival',
  'Annual cultural festival featuring traditional dance, music, and drama performances.',
  '2024-04-05T16:00:00Z',
  'Main Auditorium',
  'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
  'cultural',
  300,
  false
);

-- Insert sample data for results
INSERT INTO results (student_name, student_id, class, section, exam_type, subjects, total_marks, percentage, grade, rank, academic_year) VALUES
(
  'Rajesh Kumar',
  'KREIS001',
  '10th',
  'A',
  'final_exam',
  '[
    {"subject": "Kannada", "marks_obtained": 85, "max_marks": 100, "grade": "A"},
    {"subject": "English", "marks_obtained": 78, "max_marks": 100, "grade": "B+"},
    {"subject": "Hindi", "marks_obtained": 82, "max_marks": 100, "grade": "A"},
    {"subject": "Mathematics", "marks_obtained": 92, "max_marks": 100, "grade": "A+"},
    {"subject": "Science", "marks_obtained": 88, "max_marks": 100, "grade": "A"},
    {"subject": "Social Science", "marks_obtained": 80, "max_marks": 100, "grade": "A"}
  ]'::jsonb,
  505,
  84.17,
  'A',
  1,
  '2023-24'
),
(
  'Priya Sharma',
  'KREIS002',
  '10th',
  'A',
  'final_exam',
  '[
    {"subject": "Kannada", "marks_obtained": 90, "max_marks": 100, "grade": "A+"},
    {"subject": "English", "marks_obtained": 85, "max_marks": 100, "grade": "A"},
    {"subject": "Hindi", "marks_obtained": 88, "max_marks": 100, "grade": "A"},
    {"subject": "Mathematics", "marks_obtained": 95, "max_marks": 100, "grade": "A+"},
    {"subject": "Science", "marks_obtained": 92, "max_marks": 100, "grade": "A+"},
    {"subject": "Social Science", "marks_obtained": 87, "max_marks": 100, "grade": "A"}
  ]'::jsonb,
  537,
  89.50,
  'A+',
  1,
  '2023-24'
);