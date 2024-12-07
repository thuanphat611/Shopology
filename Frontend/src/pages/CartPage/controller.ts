import { CartService } from "@/api/cart";

export default function useHandler() {
  const { data, error, isLoading } = CartService.useGetCartApi();

  return { data, error, isLoading };
}
