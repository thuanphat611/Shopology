import { IProduct } from "@/common/interfaces";

export interface IProductpiResponse {
  limit: number;
  skip: number;
  products: IProduct[];
  total: number;
}
