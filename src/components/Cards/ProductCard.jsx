import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../new RTK/slices/cart";

export default function ProductCard({ product }) {
  let dispatch = useDispatch();

  return (
    <Link
      to={`/productDetails/${product.id}`}
      className="product position-relative col-12 col-md-6 col-lg-4"
    >
      <div className="w-75">
        <img src={product.thumbnail} alt="" className="img-fluid" />
      </div>
      <h2>{product.title}</h2>
      {product.discountPercentage && (
        <p className="position-absolute top-0 end-0 bg-danger p-1 rounded text-white text-sm">
          sale
        </p>
      )} 
      <div className="categoryPriceAndcount">
        <p className="bg-success rounded p-1 text-white">
          {product.category}
        </p>
        <p className="text-success fw-bold">{product.price}$</p>
      </div>
      <p className={`fw-bold ${product.stock > 20 ? "text-success" : "text-danger"}`}>
        ({product.stock}) item in stock
      </p>
      <div className="w-100 d-flex gap-3 align-items-center justify-content-center">
        <button
          className="btn btn-outline-success"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addToCart(product));
          }}
        >
          Add To Cart
        </button>
      </div>
    </Link>
  );
}
