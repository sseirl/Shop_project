import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditProduct.css";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    category: "",
    inStock: true,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      const res = await axios.get(`http://localhost:4000/products/${id}`);
      setProduct(res.data);
      setLoading(false);
    };

    loadProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:4000/products/${id}`, product);

    navigate("/admin/products");
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="edit-product-container">
      <form className="edit-card" onSubmit={handleSave}>
        <h2>Edit Product</h2>

        <label>Title</label>
        <input name="title" value={product.title} onChange={handleChange} />

        <label>Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />

        <label>Image URL</label>
        <input name="image" value={product.image} onChange={handleChange} />

        <label>Description</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
        />

        <label>Category</label>
        <input name="category" value={product.category} onChange={handleChange} />

        <label>In Stock</label>
        <select
          name="inStock"
          value={product.inStock}
          onChange={handleChange}
        >
          <option value={true}>Available</option>
          <option value={false}>Out of stock</option>
        </select>

        <button className="save-btn" type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;
