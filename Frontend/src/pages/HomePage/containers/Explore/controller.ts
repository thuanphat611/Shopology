import { useState } from "react";

import { ProductService } from "@/api";

export default function useHandler() {
  const [page, setPage] = useState<number>(0);
  // TODO: adjust list limit base on screen size
  const limit = 8;

  const { data, error, isLoading } = ProductService.useExploreProductApi({
    limit,
    skip: page * limit,
  });

  const totalItem = data?.total ?? 0;

  function handleNextPageClick() {
    if (page < Math.ceil(totalItem / limit) - 1) {
      setPage((page) => page + 1);
    }
  }

  function handlePreviousPageClick() {
    if (page > 0) {
      setPage((page) => page - 1);
    }
  }

  return {
    data,
    error,
    isLoading,
    onNextPageClick: handleNextPageClick,
    onPreviousPageClick: handlePreviousPageClick,
  };
}
