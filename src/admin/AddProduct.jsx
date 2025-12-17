import React, { useState } from "react";
import axios from "axios";
import "../styles/adminAdd.css";

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now().toString(),
      title,
      price: parseFloat(price),
      image,
      description,
      category,
      stock: true
    };

    try {
      await axios.post("http://localhost:4000/products", newProduct);
      setMessage("Product added successfully!");
      
      setTitle("");
      setPrice("");
      setImage("");
      setDescription("");
      setCategory("");
      
    } catch (error) {
      setMessage("Error adding product");
    }
  };

  return (
    <div className="add-container">
      <form className="add-card" onSubmit={handleAdd}>
        <h2>Add New Product</h2>

        <input
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <textarea
          placeholder="Description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Add Product</button>

        {message && <p className="add-message">{message}</p>}
      </form>
    </div>
  );
}
