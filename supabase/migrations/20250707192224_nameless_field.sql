/*
  # Add Food Quality & Transparency Table

  1. New Tables
    - `food_quality`
      - `id` (uuid, primary key)
      - `date` (date, required)
      - `meal_type` (text, required) - breakfast, lunch, dinner
      - `menu` (text, required)
      - `quality_rating` (integer) - 1-5 scale
      - `image_url` (text, optional)
      - `notes` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `food_quality` table
    - Add policy for authenticated users to manage all food quality entries
    - Add policy for public users to read food quality entries

  3. Indexes
    - Index on date for faster lookups
    - Index on meal_type for filtering
*/

-- Create food_quality table
CREATE TABLE IF NOT EXISTS food_quality (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  meal_type text NOT NULL,
  menu text NOT NULL,
  quality_rating integer,
  image_url text,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on the table
ALTER TABLE food_quality ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users to manage all food quality entries
CREATE POLICY "Authenticated users can manage food quality entries"
  ON food_quality
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policy for public users to read food quality entries
CREATE POLICY "Food quality entries are publicly readable"
  ON food_quality
  FOR SELECT
  TO public
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS food_quality_date_idx ON food_quality(date);
CREATE INDEX IF NOT EXISTS food_quality_meal_type_idx ON food_quality(meal_type);

-- Create trigger for updated_at column
CREATE TRIGGER update_food_quality_updated_at
  BEFORE UPDATE ON food_quality
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO food_quality (date, meal_type, menu, quality_rating, image_url, notes) VALUES
(CURRENT_DATE, 'breakfast', 'Idli, Sambar, Coconut Chutney, Boiled Egg, Milk', 5, 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600', 'Freshly prepared with high-quality ingredients'),
(CURRENT_DATE, 'lunch', 'Rice, Dal, Mixed Vegetable Curry, Curd, Pickle, Papad', 4, 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nutritionally balanced meal with fresh vegetables'),
(CURRENT_DATE, 'dinner', 'Chapati, Paneer Curry, Rice, Dal, Fruit, Milk', 5, 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600', 'Protein-rich dinner with seasonal fruits'),
(CURRENT_DATE - INTERVAL '1 day', 'breakfast', 'Upma, Chutney, Boiled Egg, Milk', 4, 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600', 'Served hot and fresh'),
(CURRENT_DATE - INTERVAL '1 day', 'lunch', 'Rice, Sambar, Vegetable, Buttermilk, Pickle', 5, 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600', 'Students enjoyed the meal'),
(CURRENT_DATE - INTERVAL '1 day', 'dinner', 'Pulao, Raita, Fruit, Milk', 4, 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600', 'Variety of seasonal vegetables in pulao');