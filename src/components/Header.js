import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-container">

        <div className="logo">
          <Link to="/products">RED•SHOP</Link>
        </div>

        <nav className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/support">Support</Link>
        </nav>

       <Link to="/cart" className="header-cart-btn">
  🛒 Cart
</Link>


        <div className="auth-buttons">
          <Link className="btn-login" to="/login">Login</Link>
          <Link className="btn-register" to="/register">Register</Link>
        </div>

      </div>
    </header>
  );
}
