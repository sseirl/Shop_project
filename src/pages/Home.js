import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="login-card">
        <h1>Добро пожаловать!</h1>
        <p>Войдите в свой аккаунт, чтобы продолжить</p>

        <Link to="/login">
          <button className="login-btn">Войти</button>
        </Link>

        <p className="register-text">
          Еще нет аккаунта? <Link to="/register">Создать</Link>
        </p>
      </div>
    </div>
  );
}
