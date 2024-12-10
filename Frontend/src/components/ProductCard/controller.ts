import { CartService } from "@/api/cart";
import { WishListService } from "@/api/wishList";
import { showSuccess } from "@/service";
import { apiErrorHandler } from "@/utils/functions";

export default function useHandler() {
  async function handlerAddToCart(productId: string) {
    try {
      await CartService.addItemToCart(productId, 1);
      showSuccess("Product is added to your cart.");
    } catch (error) {
      apiErrorHandler(error);
    }
  }

  async function handleAddToWishList(productId: string) {
    try {
      await WishListService.addItemToWishList(productId);
      showSuccess("Product is added to your wishlist.");
    } catch (error) {
      apiErrorHandler(error);
    }
  }

  return {
    onAddToCart: handlerAddToCart,
    onAddToWishList: handleAddToWishList,
  };
}
