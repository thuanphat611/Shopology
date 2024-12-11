import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CartService } from "@/api/cart";
import { apiErrorHandler } from "@/utils/functions";
import { useAppDispatch } from "@/app/hooks";
import { fetchCartCount } from "@/app/slices/cartSlice";

import { ICartItem } from "./interfaces";
import { showError } from "@/service";

export default function useHandler() {
  const { data, error, isLoading, mutate } = CartService.useGetCartApi();
  const [chosenItems, setChosenItems] = useState<ICartItem[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (error) {
    navigate("/error");
    apiErrorHandler(error);
  }

  function handleCheckboxClick(
    e: ChangeEvent<HTMLInputElement>,
    product: ICartItem
  ) {
    if (e.target.checked) {
      setChosenItems((list) => [...list, product]);
    } else {
      setChosenItems((list) => list.filter((item) => item.id !== product.id));
    }
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

  function handleCheckOut() {
    if (chosenItems.length === 0) {
      showError("Please check the items that you want to buy.");
      return;
    }

    const chosenItemIds = chosenItems.map((item) => item.id);
    const chosenItemQuantity = chosenItems.map((item) => item.quantity);

    const url = `/check-out?ids=${chosenItemIds.join(
      ","
    )}&quantity=${chosenItemQuantity.join(",")}`;

    navigate(url);
  }

  return {
    data,
    error,
    isLoading,
    chosenItems,
    onRemoveItemFromCart: handleRemoveItemFromCart,
    onQuantityChange: handleQuantityChange,
    onCheckboxClick: handleCheckboxClick,
    onCheckOut: handleCheckOut,
  };
}
