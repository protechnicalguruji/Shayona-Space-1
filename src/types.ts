export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  type: 'Residential Plot' | 'Weekend Villa' | 'New Launch' | 'Resale Deal';
  status: 'Available' | 'Sold Out' | 'Coming Soon';
  image: string;
  description: string;
  amenities: string[];
};
