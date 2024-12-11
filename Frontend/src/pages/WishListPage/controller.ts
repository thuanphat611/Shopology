import { WishListService } from "@/api/wishList";
import { useAppDispatch } from "@/app/hooks";
import { fetchCartCount } from "@/app/slices/cartSlice";
import { showSuccess } from "@/service";
import { apiErrorHandler } from "@/utils/functions";

export default function useHandler() {
  const dispatch = useAppDispatch();

  async function handleAddAllToCart() {
    try {
      await WishListService.addAllToCart();
      dispatch(fetchCartCount());
      showSuccess("Added all items to cart.");
    } catch (error) {
      apiErrorHandler(error);
    }
  }

  return {
    onAddAllToCart: handleAddAllToCart,
  };
}
