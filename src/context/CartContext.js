import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  // ➕ Добавить товар
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);

    setMessage("✔ Successfully added to cart!");
    setTimeout(() => setMessage(""), 2000);
  };

  // ❌ Удалить товар по ID
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, message }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext); // ← правильное имя контекста
}
