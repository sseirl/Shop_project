// src/components/Layout.js
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useCart } from "../context/CartContext";
import "./Layout.css";

export default function Layout({ children }) {
  const location = useLocation();
  const { message } = useCart();

  // скрываем хедер на login / register
  const hideHeader =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="layout-container">
      
      {/* Header отображается если не login/register */}
      {!hideHeader && <Header />}

      {/* уведомление корзины */}
      {message && <div className="cart-toast">{message}</div>}

      <main className="layout-content">{children}</main>

      <Footer />
    </div>
  );
}

