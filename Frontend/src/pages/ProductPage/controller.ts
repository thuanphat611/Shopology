import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { ProductService } from "@/api";

export default function useHandler() {
  const [quantity, setQuantity] = useState<number>(1);
  const [thumbnail, setThumbnail] = useState<string>("");
  const { id } = useParams();
  const { data, error, isLoading } = ProductService.useFindByIdApi(id!);

  useEffect(() => {
    const displayingImg = data?.images[0] ?? "";
    setThumbnail(displayingImg);
  }, [data]);

  function handleThumbnailChange(index: number) {
    const displayingImg = data?.images[index] ?? "";
    setThumbnail(displayingImg);
  }

  function handleIncreaseQuantity() {
    setQuantity((quantity) => quantity + 1);
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  }

  return {
    thumbnail,
    quantity,
    data,
    error,
    isLoading,
    onIncreaseQuantity: handleIncreaseQuantity,
    onDecreaseQuantity: handleDecreaseQuantity,
    onThumbnailChange: handleThumbnailChange,
  };
}
