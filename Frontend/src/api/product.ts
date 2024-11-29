import useSWR, { Fetcher } from "swr";

import { axiosClient } from "@/service";
import { IProductpiResponse } from "@/pages/HomePage";

const fetcher: Fetcher<
  IProductpiResponse,
  { url: string; limit: number; skip: number }
> = ({ url, limit, skip }: { url: string; limit: number; skip: number }) =>
  axiosClient
    .get(url, {
      params: {
        limit,
        skip,
      },
    })
    .then((response) => response.data);

const useFlashSaleApi = ({ skip, limit }: { skip: number; limit: number }) => {
  const { data, error, isLoading } = useSWR(
    [`${import.meta.env.VITE_BACKEND}/api/v1/product`, limit, skip],
    ([url, limit, skip]) => fetcher({ url, limit, skip })
  );

  return { data, error, isLoading };
};

export const ProductService = {
  useFlashSaleApi,
};