import { Navigate } from "react-router-dom";

const PrivateCustomer = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.role !== "customer") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateCustomer;
