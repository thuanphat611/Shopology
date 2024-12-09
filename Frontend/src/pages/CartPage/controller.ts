import { useNavigate } from "react-router-dom";

import { CartService } from "@/api/cart";
import { apiErrorHandler } from "@/utils/functions";

export default function useHandler() {
  const navigate = useNavigate();
  const { data, error, isLoading, mutate } = CartService.useGetCartApi();

  if (error) {
    navigate("/error");
    apiErrorHandler(error);
  }

  async function handleRemoveItemFromCart(productId: string) {
    try {
      await CartService.removeItemFromCart(productId);
      mutate();
    } catch (error) {
      apiErrorHandler(error);
    }
  }

  async function handleQuantityChane(productId: string, quantity: number) {
    try {
      await CartService.changeItemQuantity(productId, quantity);
      mutate();
    } catch {
      apiErrorHandler(error);
    }
  }

  return {
    data,
    error,
    isLoading,
    onRemoveItemFromCart: handleRemoveItemFromCart,
    onQuantityChane: handleQuantityChane,
  };
}
