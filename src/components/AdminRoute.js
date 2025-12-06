export default function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || user.role !== "admin") {
    return <h2>Access Denied</h2>;
  }
  return children;
}
