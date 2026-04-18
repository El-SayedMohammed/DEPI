import { useQuery } from "@tanstack/react-query";
import { getProduct } from "./productsFunctions";

export default function useGetProduct(id) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    enabled: !!id,
    staleTime: 10000,
  });
}
