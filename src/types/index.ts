export type UserRole = 'consumer' | 'farmer' | 'vendor';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  created_at: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  vendor_id: string;
  stock: number;
  created_at: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}