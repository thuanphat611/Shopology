export interface IWishListItem {
  addedDate: Date;
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
}

export interface IWishListApiResponse {
  itemList: IWishListItem[];
}
