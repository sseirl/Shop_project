import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
        setError("Такого пользователя не существует!");
        return;
      }

      const user = res.data[0];

      if (user.password !== password) {
        setError("Неверный пароль!");
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
      <form className="auth-form" onSubmit={handleLogin}>
        
        <h2>Войти</h2>

        <input
          type="email"
          placeholder="Ведите почту"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Пароль"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Войти</button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
