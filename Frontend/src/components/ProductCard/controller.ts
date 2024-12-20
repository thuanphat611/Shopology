import { CartService } from "@/api/cart";
import { WishListService } from "@/api/wishList";
import { useAppDispatch } from "@/app/hooks";
import { fetchCartCount } from "@/app/slices/cartSlice";
import { fetchWishListCount } from "@/app/slices/wishlistSlice";
import { showSuccess } from "@/service";
import { apiErrorHandler } from "@/utils/functions";

export default function useHandler() {
  const dispatch = useAppDispatch();

  async function handleAddToCart(productId: string) {
    try {
      await CartService.addItemToCart(productId, 1);
      dispatch(fetchCartCount());
      showSuccess("Product is added to your cart.");
    } catch (error) {
      apiErrorHandler(error);
    }
  }

  async function handleAddToWishList(productId: string) {
    try {
      await WishListService.addItemToWishList(productId);
      dispatch(fetchWishListCount());
      showSuccess("Product is added to your wishlist.");
    } catch (error) {
      apiErrorHandler(error);
    }
  }

  return {
    onAddToCart: handleAddToCart,
    onAddToWishList: handleAddToWishList,
  };
}
