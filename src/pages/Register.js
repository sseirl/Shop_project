import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pass) => {
    const hasNumber = /\d/;
    return pass.length >= 8 && hasNumber.test(pass);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters and contain a number");
      return;
    }

    try {
      // Проверяем, есть ли такой email
      const checkUser = await axios.get(
        `http://localhost:4000/users?email=${email}`
      );

      if (checkUser.data.length > 0) {
        setError("Email already registered");
        return;
      }

      // Создаем нового юзера с ID
      const newUser = {
        id: Date.now().toString(),
        email,
        password,
        role: "customer",
      };

      await axios.post("http://localhost:4000/users", newUser);


      localStorage.setItem("user", JSON.stringify(newUser));
      navigate("/products");
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleRegister}>
        <h2>Create Account</h2>

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password (8+ chars, 1 number)"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="auth-btn">
          Register
        </button>

        {error && <p className="auth-error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
