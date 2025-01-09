/*
  # Initial Schema Setup for EG Business

  1. New Tables
    - users
      - Custom fields for the auth.users
    - products
      - Product listings with details
    - categories
      - Product categories
    - orders
      - Order tracking
    - order_items
      - Individual items in orders
    - vendor_profiles
      - Additional vendor information
    
  2. Security
    - Enable RLS on all tables
    - Add policies for data access
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom user profiles table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  role text NOT NULL CHECK (role IN ('consumer', 'farmer', 'vendor')),
  name text NOT NULL,
  phone text,
  address text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  vendor_id uuid REFERENCES users(id),
  category_id uuid REFERENCES categories(id),
  title text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  stock integer NOT NULL DEFAULT 0,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(id),
  status text NOT NULL DEFAULT 'pending',
  total_amount decimal(10,2) NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create order items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id uuid REFERENCES orders(id),
  product_id uuid REFERENCES products(id),
  quantity integer NOT NULL,
  price_at_time decimal(10,2) NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create vendor profiles table
CREATE TABLE IF NOT EXISTS vendor_profiles (
  id uuid PRIMARY KEY REFERENCES users(id),
  business_name text NOT NULL,
  business_description text,
  location_lat decimal(10,8),
  location_lng decimal(11,8),
  rating decimal(2,1),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Users can read their own data
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Anyone can read products
CREATE POLICY "Anyone can read products"
  ON products
  FOR SELECT
  TO authenticated
  USING (true);

-- Vendors can manage their own products
CREATE POLICY "Vendors can manage own products"
  ON products
  FOR ALL
  TO authenticated
  USING (auth.uid() = vendor_id);

-- Anyone can read categories
CREATE POLICY "Anyone can read categories"
  ON categories
  FOR SELECT
  TO authenticated
  USING (true);

-- Users can read their own orders
CREATE POLICY "Users can read own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Users can read their own order items
CREATE POLICY "Users can read own order items"
  ON order_items
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

-- Vendors can read their profile
CREATE POLICY "Vendors can read own profile"
  ON vendor_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);