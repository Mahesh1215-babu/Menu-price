export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  type: string;
  cuisine_primary: string;
  price_range: string;
  cover_image: string;
  logo: string;
  address: string;
  is_verified: boolean;
  created_at?: string;
}