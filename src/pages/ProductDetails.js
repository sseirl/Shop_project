import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/productDetails.css";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`http://localhost:4000/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-details-container">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>

      <div className="product-info">
        <h1 className="pd-title">{product.title}</h1>
        <p className="pd-category">{product.category}</p>
        <p className="pd-price">${product.price}</p>
        <p className="pd-description">{product.description}</p>

        <div className="pd-buttons">
          <button className="btn-buy">Buy Now</button>

          <button
            className="btn-add"
            onClick={() => addToCart(product)}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
