import { CartService } from "@/api/cart";
import { WishListService } from "@/api/wishList";
import { useAppDispatch } from "@/app/hooks";
import { fetchCartCount } from "@/app/slices/cartSlice";
import { fetchWishListCount } from "@/app/slices/wishlistSlice";
import { showSuccess } from "@/service";
import { apiErrorHandler } from "@/utils/functions";

export default function useHandler() {
  const dispatch = useAppDispatch();
  const { data, error, isLoading, mutate } =
    WishListService.useGetWishListApi();

  async function handleRemoveItem(productId: string) {
    try {
      await WishListService.removeItemFromWishList(productId);
      dispatch(fetchWishListCount());
      mutate();
    } catch (error) {
      apiErrorHandler(error);
    }
  }

  async function handleAddToCart(productId: string) {
    try {
      await CartService.addItemToCart(productId, 1);
      dispatch(fetchCartCount());
      showSuccess("Product is added to your cart.");
    } catch (error) {
      apiErrorHandler(error);
    }
  }

  return {
    data,
    error,
    isLoading,
    onRemoveItem: handleRemoveItem,
    onAddToCart: handleAddToCart,
  };
}
