import { CartService } from "@/api/cart";
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

  return {
    onAddToCart: handlerAddToCart,
  };
}
