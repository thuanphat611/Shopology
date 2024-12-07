import useSWR, { Fetcher } from "swr";

import { axiosClient } from "@/service";
import { ICartApiResponse } from "@/pages/CartPage";
import { USER_KEY } from "@/utils/constants";

const userData = localStorage.getItem(USER_KEY);
const user = userData ? JSON.parse(userData) : null;

const fetcher: Fetcher<ICartApiResponse, string> = (url: string) =>
  axiosClient.get(url).then((response) => response.data);

const useGetCartApi = () => {
  const { data, error, isLoading } = useSWR(
    `${import.meta.env.VITE_BACKEND}/api/v1/cart/${user.id}`,
    fetcher
  );

  return { data, error, isLoading };
};

const addItemToCart = async (productId: string, quantity: number) => {
  if (!user) {
    window.location.href = "/login";
    return;
  }

  await axiosClient.post(
    `${import.meta.env.VITE_BACKEND}/api/v1/cart/${user.id}`,
    {
      productId,
      quantity,
    }
  );
};

export const CartService = {
  useGetCartApi,
  addItemToCart,
};
