export interface ICheckoutItem {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;

  quantity?: number;
}

export interface FieldType {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  phone: string;
  email: string;

  optionalAddress?: string;
}
