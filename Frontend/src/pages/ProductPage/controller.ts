import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { ProductService } from "@/api";
import { CartService } from "@/api/cart";
import { WishListService } from "@/api/wishList";
import { showError, showSuccess } from "@/service";
import { useAppDispatch } from "@/app/hooks";
import { fetchCartCount } from "@/app/slices/cartSlice";
import { fetchWishListCount } from "@/app/slices/wishlistSlice";
import { apiErrorHandler } from "@/utils/functions";
import { CHECKOUT_KEY } from "@/utils/constants";

export default function useHandler() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState<number>(1);
  const [thumbnail, setThumbnail] = useState<string>("");
  const { id } = useParams();
  const { data, error, isLoading } = ProductService.useFindByIdApi(id!);

  useEffect(() => {
    const displayingImg = data?.images[0] ?? "";
    setThumbnail(displayingImg);
  }, [data]);

  if (error) {
    showError(error);
    navigate("/error");
  }

  async function handleAddToWishList(productId: string | undefined) {
    try {
      if (!productId) {
        return;
      }

      await WishListService.addItemToWishList(productId);
      dispatch(fetchWishListCount());
      showSuccess("Product is added to your wishlist.");
    } catch (error) {
      apiErrorHandler(error);
    }
  }

  async function handleAddToCart(productId: string | undefined) {
    try {
      if (!productId) {
        return;
      }

      await CartService.addItemToCart(productId, quantity);
      dispatch(fetchCartCount());
      showSuccess("Product is added to your cart.");
    } catch (error) {
      apiErrorHandler(error);
    }
  }

  function handleThumbnailChange(index: number) {
    const displayingImg = data?.images[index] ?? "";
    setThumbnail(displayingImg);
  }

  function handleIncreaseQuantity() {
    setQuantity((quantity) => quantity + 1);
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  }

  function handleBuyProduct() {
    localStorage.setItem(
      CHECKOUT_KEY,
      JSON.stringify([{ id: data?.id, quantity }])
    );

    navigate("/check-out");
  }

  return {
    thumbnail,
    quantity,
    data,
    isLoading,
    onIncreaseQuantity: handleIncreaseQuantity,
    onDecreaseQuantity: handleDecreaseQuantity,
    onThumbnailChange: handleThumbnailChange,
    onAddToWishList: handleAddToWishList,
    onAddToCart: handleAddToCart,
    onBuyProduct: handleBuyProduct,
  };
}
