export default function CustomerRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || user.role !== "customer") {
    return <h2>Please login as customer</h2>;
  }
  return children;
}
