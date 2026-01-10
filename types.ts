export interface ServiceItem {
  name: string;
  price: string;
  duration: string;
  tag?: 'VIP Service' | 'Trending' | string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  image: string; // Placeholder or Real Asset URL
  items: ServiceItem[];
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio?: string;
  rating: number;
  reviewCount?: number;
  image: string;
}

export type Theme = 'day' | 'night';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}