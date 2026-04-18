import React from "react";
import ProductCard from "../Cards/ProductCard";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import useGetProducts from "../../hooks/products/useProducts";

export default function Products() {
  let { data: products, isLoading, isError, error } = useGetProducts();

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error?.message || "An error occurred"} />;
  if (!products?.length)
    return <p className="text-center">No products found</p>;

  return (
    <div className="row align-items-center justify-content-center gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
