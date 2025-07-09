-- 1. Create campus_stats table
CREATE TABLE IF NOT EXISTS campus_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  value text NOT NULL,
  label text NOT NULL,
  color_class text NOT NULL,
  svg_path text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- 2. Seed with default values if empty
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM campus_stats LIMIT 1) THEN
    INSERT INTO campus_stats (value, label, color_class, svg_path) VALUES
    ('0', 'of Campus', 'text-teal-500', 'M12 2C8.13 2 5 5.13 5 9...'),
    ('0', 'Students Studying', 'text-blue-500', 'M16 11c1.66 0 2.99-1.34...'),
    ('0', 'Education Heroes', 'text-teal-500', 'M12 17.27L18.18 21...'),
    ('0', 'Alumni Network', 'text-blue-500', 'M12 2C6.48 2 2 6.48...'),
    ('0', 'Free Education with Food & Lodging', 'text-yellow-500', 'M12 3L1 9l4 2.18...'),
    ('0', 'Passing Percentage', 'text-blue-500', 'M9 16.17L4.83 12...'),
    ('0', 'Girl Safe Environment', 'text-yellow-500', 'M12 1L3 5v6c0 5.55...'),
    ('0', 'CSR Projects Completed', 'text-teal-500', 'M16 13h-3V3h-2...');
  END IF;
END $$;
