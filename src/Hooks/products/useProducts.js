import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./productsFunctions";

export default function useGetProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}
