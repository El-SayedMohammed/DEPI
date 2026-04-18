import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./new RTK/slices/products";
import cartReducer from "./new RTK/slices/cart";
import productDetailsReducer from "./new RTK/slices/productDetails";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    productDetails: productDetailsReducer,
  },
});
 