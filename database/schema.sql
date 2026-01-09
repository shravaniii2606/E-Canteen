-- database/schema.sql

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  student_id VARCHAR(50) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role VARCHAR(10) CHECK (role IN ('student', 'admin')) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price NUMERIC(6,2) NOT NULL,
  available BOOLEAN DEFAULT true
);
