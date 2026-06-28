CREATE TABLE IF NOT EXISTS about (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  eyebrow TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  values_title TEXT NOT NULL,
  values_json TEXT NOT NULL,
  mission_title TEXT NOT NULL,
  mission_description TEXT NOT NULL,
  is_active INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);