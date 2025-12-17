import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/products.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const { addToCart } = useCart(); // ✅ добавили корзину

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const filtered = products
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (category === "all" ? true : p.category === category));

  return (
    <div className="products-container">

      {/* 🔍 ПОИСК + ФИЛЬТР */}
      <div className="products-topbar">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="category-select"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All categories</option>
          <option value="electronics">Electronics</option>
          <option value="shoes">Shoes</option>
          <option value="clothes">Clothes</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      {/* 🛍️ СЕТКА ПРОДУКТОВ */}
      <div className="products-grid">
        {filtered.map((item) => (
          <div className="product-card" key={item.id}>
            <Link to={`/products/${item.id}`}>
              <img src={item.image} alt="" className="product-img" />
            </Link>

            <div className="product-info">
              <h3>{item.title}</h3>
              <p className="price">${item.price}</p>
            </div>

            <div className="product-actions">
              <Link to={`/products/${item.id}`} className="btn details-btn">
                Details
              </Link>

              {/* ✅ РАБОЧАЯ Add to Cart */}
              <button
                className="btn add-btn"
                onClick={() => addToCart(item)}
              >
                🛒 Add to Cart
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
