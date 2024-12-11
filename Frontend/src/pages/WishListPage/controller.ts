import { WishListService } from "@/api/wishList";
import { showSuccess } from "@/service";
import { apiErrorHandler } from "@/utils/functions";

export default function useHandler() {
  async function handleAddAllToCart() {
    try {
      await WishListService.addAllToCart();
      showSuccess("Added all items to cart.");
    } catch (error) {
      apiErrorHandler(error);
    }
  }

  return {
    onAddAllToCart: handleAddAllToCart,
  };
}
