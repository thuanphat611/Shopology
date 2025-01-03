export interface IProduct {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  images: string[];

  returnPolicy?: string;
  shippingInformation?: string;
  weight?: number;
  tags?: string[];
  thumbnail?: string;
}
