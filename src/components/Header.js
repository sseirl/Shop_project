import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
      {user?.role === "admin" && (
        <Link to="/admin/products">Admin Panel</Link>
      )}

      {user?.role === "customer" && (
        <>
          <Link to="/products">Products</Link>
        </>
      )}

      {!user && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}

      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
};

export default Header;
