import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [p, setP] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/products/${id}`).then(res => {
      setP(res.data);
    });
  }, [id]);

  if (!p) return "Loading...";

  return (
    <div>
      <h2>{p.title}</h2>
      <p>{p.description}</p>
      <p>${p.price}</p>

      <button onClick={() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(p);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Added to cart!");
      }}>
        Add to Cart
      </button>
    </div>
  );
}

