import { CartService } from "@/api/cart";
import { WishListService } from "@/api/wishList";
import { showSuccess } from "@/service";
import { apiErrorHandler } from "@/utils/functions";

export default function useHandler() {
  const { data, error, isLoading, mutate } =
    WishListService.useGetWishListApi();

  async function handleRemoveItem(productId: string) {
    try {
      await WishListService.removeItemFromWishList(productId);
      mutate();
    } catch (error) {
      apiErrorHandler(error);
    }
  }

  async function handlerAddToCart(productId: string) {
    try {
      await CartService.addItemToCart(productId, 1);
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
    onAddToCart: handlerAddToCart,
  };
}
