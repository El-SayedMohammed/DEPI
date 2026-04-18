import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { useDispatch } from "react-redux";
import { addToCart } from "../../new RTK/slices/cart";
import useGetProduct from "../../Hooks/useGetProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductDetailsCard() {
  const { id } = useParams();
  const dispatch = useDispatch();

  let { data: product, isLoading, isError, error } = useGetProduct(id);

  const originalPrice = product
    ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
    : null;

  if (isLoading) return <Loading />;
  if (isError)
    return <Error message={error?.message || "Failed to load product"} />;
  if (!product) return null;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden w-50">
        {/* Discount Badge */}
        <div className="position-relative">
          {product.discountPercentage > 0 && (
            <span
              className="badge bg-danger position-absolute top-0 start-0 m-3 shadow-sm"
              style={{ zIndex: 1 }}
            >
              {product.discountPercentage}% OFF
            </span>
          )}

          {/* React Slick Carousel */}
          <Slider {...sliderSettings}>
            {product.images?.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`${product.title} - ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Product Info */}
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span
              className="text-uppercase fw-bold text-secondary"
              style={{ fontSize: "13px" }}
            >
              {product.category}
            </span>
            <span className="text-muted" style={{ fontSize: "13px" }}>
              {product.brand}
            </span>
          </div>

          <h5 className="fw-bold text-center">{product.title}</h5>

          <p className="text-muted text-center" style={{ fontSize: "14px" }}>
            {product.description}
          </p>

          {/* Rating */}
          <div className="d-flex align-items-center gap-1 mb-2">
            <span style={{ color: "gold" }}>⭐</span>
            <span className="fw-bold">{product.rating}</span>
            <span className="text-muted" style={{ fontSize: "13px" }}>
              ({product.reviews?.length || 0} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="text-success fw-bold" style={{ fontSize: "22px" }}>
              ${product.price}
            </span>
            <span
              className="text-muted text-decoration-line-through"
              style={{ fontSize: "14px" }}
            >
              ${originalPrice}
            </span>
          </div>

          {/* Stock */}
          <p className="text-success" style={{ fontSize: "14px" }}>
            In Stock ({product.stock})
          </p>
        </div>

        {/* Add To Cart Button */}
        <div className="p-3 pt-0">
          <button
            className="btn btn-success w-100 fw-bold border-0 py-2 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "teal" }}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              dispatch(addToCart(product));
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
