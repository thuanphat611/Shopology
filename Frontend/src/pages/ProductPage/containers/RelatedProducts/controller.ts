import { useNavigate } from "react-router-dom";

import { ProductService } from "@/api";
import { showError } from "@/service";

export default function useHandler(category: string) {
  const navigate = useNavigate();
  const { data, error, isLoading } =
    ProductService.useRelatedProductApi(category);

  if (error) {
    showError(error);
    navigate("/error");
  }

  return {
    data,
    error,
    isLoading,
  };
}
