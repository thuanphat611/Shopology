import { useNavigate } from "react-router-dom";
import { Form, FormProps } from "antd";

import { ProductService } from "@/api";
import { CHECKOUT_KEY } from "@/utils/constants";
import { showError, showSuccess } from "@/service";
import { CartService } from "@/api/cart";
import { useAppDispatch } from "@/app/hooks";
import { fetchCartCount } from "@/app/slices/cartSlice";

import { FieldType, ICheckoutItem } from "./interfaces";

export default function useHandler() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const chosenItems = localStorage.getItem(CHECKOUT_KEY);
  const itemList = chosenItems ? JSON.parse(chosenItems) : [];

  if (itemList.length === 0) {
    navigate("/error");
  }

  const ids = itemList.map((item: { id: string }) => item.id);

  const { data, error, isLoading } = ProductService.useCheckOutDataApi(ids);

  if (error) {
    navigate("error");
    showError(error);
  }

  const checkoutData = data?.itemList.map((fetchedData: ICheckoutItem) => {
    const item = itemList.filter(
      (item: { id: string }) => item.id == fetchedData.id
    );
    return {
      ...item[0],
      ...fetchedData,
    };
  });

  const handleFinish: FormProps<FieldType>["onFinish"] = async () => {
    for (const index in ids) {
      await CartService.removeItemFromCart(ids[index]);
    }
    localStorage.removeItem(CHECKOUT_KEY);

    dispatch(fetchCartCount());
    showSuccess("Order placed!");
    navigate("/home");
  };

  return {
    data: checkoutData,
    error,
    isLoading,
    form,
    onFinish: handleFinish,
  };
}
