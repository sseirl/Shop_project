export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((c, i) => (
        <div key={i}>
          <h3>{c.title}</h3>
          <p>${c.price}</p>
        </div>
      ))}
    </div>
  );
}

