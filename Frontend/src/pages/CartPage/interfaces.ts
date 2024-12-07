export interface ICartItem {
  quantity: number;
  addedDate: Date;
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
}

export interface ICartApiResponse {
  itemList: ICartItem[];
}
