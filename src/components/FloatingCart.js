import React from "react";
import { useCart } from "../context/CartContext";
import "./FloatingCart.css";

export default function FloatingCart() {
  const { cart } = useCart();

  const totalItems = cart.length;

  if (totalItems === 0) return null;

  return (
    <div className="floating-cart-container">
      <span className="floating-cart-icon">🛒</span>
      <span className="floating-cart-count">{totalItems}</span>
    </div>
  );
}
