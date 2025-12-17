import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `http://localhost:4000/users?email=${email}`
      );

      if (res.data.length === 0) {
        setError("User not found");
        return;
      }

      const user = res.data[0];

      if (user.password !== password) {
        setError("Wrong password");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "admin") navigate("/admin/products");
      else navigate("/products");
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleLogin}>
        
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="auth-btn">Login</button>

        <p className="switch-auth">
          Don't have an account?
          <Link to="/Register"> Register</Link>
        </p>

        {error && <p className="auth-error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
