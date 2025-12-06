import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/products").then(res => {
      setProducts(res.data);
    });
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:4000/products/${id}`).then(() => {
      setProducts(products.filter(p => p.id !== id));
    });
  };

  return (
    <div>
      <h2>Manage Products</h2>
      {products.map(p => (
        <div key={p.id}>
          {p.title} - ${p.price}
          <button onClick={() => deleteProduct(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
