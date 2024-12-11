import { useNavigate } from "react-router-dom";

import { CartService } from "@/api/cart";
import { apiErrorHandler } from "@/utils/functions";
import { useAppDispatch } from "@/app/hooks";
import { fetchCartCount } from "@/app/slices/cartSlice";

export default function useHandler() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data, error, isLoading, mutate } = CartService.useGetCartApi();

  if (error) {
    navigate("/error");
    apiErrorHandler(error);
  }

  async function handleRemoveItemFromCart(productId: string) {
    try {
      await CartService.removeItemFromCart(productId);
      dispatch(fetchCartCount());
      mutate();
    } catch (error) {
      apiErrorHandler(error);
    }
  }

  async function handleQuantityChange(productId: string, quantity: number) {
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
    onQuantityChange: handleQuantityChange,
  };
}
