import useSWR, { Fetcher } from "swr";

import { axiosClient } from "@/service";
import { IWishListApiResponse } from "@/pages/WishListPage";
import { USER_KEY } from "@/utils/constants";

const userData = localStorage.getItem(USER_KEY);
const user = userData ? JSON.parse(userData) : null;

const fetcher: Fetcher<IWishListApiResponse, string> = (url: string) =>
  axiosClient.get(url).then((response) => response.data);

const useGetWishListApi = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `${import.meta.env.VITE_BACKEND}/api/v1/wish-list/${user.id}`,
    fetcher
  );

  return { data, error, isLoading, mutate };
};

const addItemToWishList = async (productId: string) => {
  if (!user) {
    window.location.href = "/login";
    return;
  }

  await axiosClient.post(
    `${import.meta.env.VITE_BACKEND}/api/v1/wish-list/${user.id}`,
    {
      productId,
    }
  );
};

const removeItemFromWishList = async (productId: string) => {
  if (!user) {
    window.location.href = "/login";
    return;
  }

  await axiosClient.delete(
    `${import.meta.env.VITE_BACKEND}/api/v1/wish-list/${
      user.id
    }/item/${productId}`
  );
};

const addAllToCart = async () => {
  if (!user) {
    window.location.href = "/login";
    return;
  }

  await axiosClient.post(
    `${import.meta.env.VITE_BACKEND}/api/v1/wish-list/${user.id}/add-all`
  );
};

export const WishListService = {
  useGetWishListApi,
  addItemToWishList,
  removeItemFromWishList,
  addAllToCart,
};
