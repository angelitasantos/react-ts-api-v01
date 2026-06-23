CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  role_name TEXT NOT NULL DEFAULT 'admin',

  is_active INTEGER NOT NULL DEFAULT 1,

  must_change_password INTEGER NOT NULL DEFAULT 0,

  last_login_at TEXT,
  password_changed_at TEXT,

  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

  created_by INTEGER,
  updated_by INTEGER,

  FOREIGN KEY (created_by) REFERENCES users(id),
  FOREIGN KEY (updated_by) REFERENCES users(id)
);