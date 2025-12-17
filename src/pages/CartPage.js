import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/cart.css";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />

            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>

            {/* ❌ УДАЛЕНИЕ */}
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              ✖ Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
