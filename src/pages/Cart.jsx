import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../new RTK/slices/cart";

export default function Cart() {
  let { items } = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#fff", marginBottom: "30px" }}>Welcome To Your Cart Products</h1>

      {items.length === 0 ? (
        <p style={{ color: "teal", fontSize: "20px" }}>No items in cart</p>
      ) : (
        <div className="row align-items-center justify-content-center gap-2">
          {items.map((item) => (
            <div key={item.id} className="product position-relative col-12 col-md-6 col-lg-4">

              {/* Sale Badge */}
              {item.discountPercentage > 0 && (
                <p className="position-absolute top-0 end-0 bg-danger p-1 rounded text-white text-sm">
                  sale
                </p>
              )}

              {/* Image */}
              <div className="w-75">
                <img src={item.thumbnail} alt={item.title} className="img-fluid" />
              </div>

              {/* Title */}
              <h2>{item.title}</h2>

              {/* Category & Price */}
              <div className="categoryPriceAndcount">
                <p className="bg-success rounded p-1 text-white">{item.category}</p>
                <p className="text-success fw-bold">{item.price}$</p>
              </div>

              {/* Quantity Controls */}
              <div className="d-flex align-items-center justify-content-center gap-3">
                <button
                  className="btn btn-outline-warning"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
                <span style={{ color: "#333", fontWeight: "bold", fontSize: "18px" }}>
                  {item.quantity}
                </span>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  -
                </button>
              </div>

              {/* Remove Button */}
              <div className="w-100 d-flex align-items-center justify-content-center">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  remove From Cart
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
