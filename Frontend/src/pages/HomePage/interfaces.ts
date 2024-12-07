import { IProduct } from "@/common/interfaces";

export interface IProductApiResponse {
  limit: number;
  skip: number;
  products: IProduct[];
  total: number;
}
