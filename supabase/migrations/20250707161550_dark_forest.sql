/*
  # Create blog posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `slug` (text, unique, required)
      - `content` (text, required)
      - `excerpt` (text, required)
      - `image_url` (text, optional)
      - `author` (text, required)
      - `published` (boolean, default false)
      - `category` (text, default 'news')
      - `tags` (text array, default empty)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for authenticated users to manage all blog posts
    - Add policy for public users to read published blog posts only

  3. Indexes
    - Index on slug for faster lookups
    - Index on published status for filtering
    - Index on category for filtering

  4. Triggers
    - Auto-update updated_at timestamp on row updates
*/

-- Create blog_posts table if it doesn't exist
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  image_url text,
  author text NOT NULL,
  published boolean DEFAULT false,
  category text NOT NULL DEFAULT 'news',
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS if not already enabled
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE tablename = 'blog_posts' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Drop existing policies if they exist and recreate them
DO $$
BEGIN
  -- Drop existing policies
  DROP POLICY IF EXISTS "Authenticated users can manage blog posts" ON blog_posts;
  DROP POLICY IF EXISTS "Published blog posts are publicly readable" ON blog_posts;
  DROP POLICY IF EXISTS "Authenticated users can manage all blog posts" ON blog_posts;
  DROP POLICY IF EXISTS "Authenticated users can read all blog posts" ON blog_posts;
  DROP POLICY IF EXISTS "Authenticated users can insert blog posts" ON blog_posts;
  DROP POLICY IF EXISTS "Authenticated users can update blog posts" ON blog_posts;
  DROP POLICY IF EXISTS "Authenticated users can delete blog posts" ON blog_posts;
END $$;

-- Create policies for authenticated users to manage all blog posts
CREATE POLICY "Authenticated users can read all blog posts"
  ON blog_posts
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);

-- Create policy for public users to read published blog posts only
CREATE POLICY "Published blog posts are publicly readable"
  ON blog_posts
  FOR SELECT
  TO public
  USING (published = true);

-- Create indexes if they don't exist
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS blog_posts_published_idx ON blog_posts(published);
CREATE INDEX IF NOT EXISTS blog_posts_category_idx ON blog_posts(category);
CREATE INDEX IF NOT EXISTS blog_posts_created_at_idx ON blog_posts(created_at DESC);

-- Create or replace function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop existing trigger if it exists and create new one
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample blog posts only if table is empty
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM blog_posts LIMIT 1) THEN
    INSERT INTO blog_posts (title, slug, content, excerpt, image_url, author, published, category, tags) VALUES
    (
      'KREIS Schools Excel in State Board Examinations',
      'kreis-schools-excel-state-board-examinations',
      'We are proud to announce that students from KREIS residential schools have achieved outstanding results in the recent state board examinations. With an overall pass percentage of 95%, our students have once again proven their dedication and hard work.

The results reflect the quality education provided in our residential schools across Karnataka. Special congratulations to all students who secured distinction and first class marks.

We thank our dedicated teachers, supportive parents, and the students themselves for this remarkable achievement.',
      'KREIS residential schools achieve 95% pass rate in state board examinations, showcasing excellence in rural education.',
      'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600',
      'KREIS Administration',
      true,
      'achievements',
      ARRAY['results', 'examinations', 'achievements', 'students']
    ),
    (
      'New Infrastructure Development at KREIS Schools',
      'new-infrastructure-development-kreis-schools',
      'KREIS is committed to providing world-class infrastructure for our students. This year, we have completed several infrastructure projects across our residential schools.

New facilities include:
- Modern science laboratories
- Computer labs with latest technology
- Upgraded hostel facilities
- Sports complexes
- Digital classrooms

These developments ensure that our rural students have access to the same quality facilities as their urban counterparts.',
      'KREIS invests in modern infrastructure to enhance learning experience for rural students across Karnataka.',
      'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      'Infrastructure Team',
      true,
      'news',
      ARRAY['infrastructure', 'development', 'facilities', 'modernization']
    );
  END IF;
END $$;