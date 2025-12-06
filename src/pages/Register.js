import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";


const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Функция проверки пароля
  const validatePassword = (pass) => {
    const hasNumber = /\d/; // есть ли цифра
    return pass.length >= 8 && hasNumber.test(pass);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError("Пароль должен быть минимум 8 символов и содержать хотя бы одну цифру.");
      return;
    }

    try {
      const users = await axios.get("http://localhost:4000/users");

      const userExists = users.data.find((u) => u.email === email);
      if (userExists) {
        setError("Пользователь с такой почтой уже существует!");
        return;
      }

      await axios.post("http://localhost:4000/users", {
        email,
        password,
        role: "customer"
      });

      alert("Вы успешно зарегистрировались!");
      navigate("/login");

    } catch (error) {
      console.log(error);
      setError("Ошибка при регистрации. Попробуйте снова.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Регистрация</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleRegister}>

        <input
          type="email"
          placeholder="Введите почту"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Создать аккаунт</button>
      </form>
    </div>
  );
};

export default Register;
