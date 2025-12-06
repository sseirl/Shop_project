import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/products").then(res => {
      setProducts(res.data);
    });
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Products</h2>

      <input
        placeholder="Search product..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: 5, marginBottom: 20 }}
      />

      {filtered.map(p => (
        <div key={p.id} style={{ margin: 10, padding: 10, border: "1px solid #ccc" }}>
          <h3>{p.title}</h3>
          <p>${p.price}</p>
          <Link to={`/products/${p.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}
