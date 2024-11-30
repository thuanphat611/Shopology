import { ProductService } from "@/api";

export default function useHandler() {
  const { data, error, isLoading } = ProductService.useBestSellerApi();

  return {
    data,
    error,
    isLoading,
  };
}
