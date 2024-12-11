import { ProductService } from "@/api";

export default function useHandler() {
  const { data, error, isLoading } = ProductService.useExploreProductApi({
    skip: 16,
    limit: 4,
  });

  return { data, error, isLoading };
}
