import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  let { items } = useSelector((state) => state.cart);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/cart">Cart-{items.length}</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}
