import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AdminProducts.css";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:4000/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:4000/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="admin-products">
      <div className="admin-header">
        <h2>Admin Product Panel</h2>
        <Link to="/admin/add-product" className="admin-add-btn">+ Add Product</Link>
      </div>

      <div className="admin-grid">
        {products.map((p) => (
          <div className="admin-card" key={p.id}>
            <img src={p.image} alt={p.title} />

            <h3>{p.title}</h3>
            <p className="price">${p.price}</p>

            <div className="admin-actions">
              <Link to={`/admin/edit-product/${p.id}`} className="edit-btn">
                Edit
              </Link>

              <button 
                className="delete-btn"
                onClick={() => deleteProduct(p.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;
