import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout";
import FloatingCart from "./components/FloatingCart";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";

import About from "./pages/About";
import Support from "./pages/Support";

import AdminProducts from "./admin/AdminProducts";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";

import PrivateAdmin from "./routes/PrivateAdmin";
import PrivateCustomer from "./routes/PrivateCustomer";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>

        <Layout>
          <Routes>

            {/* Главная */}
            <Route path="/" element={<Home />} />

            {/* Аутентификация */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Страницы About / Support */}
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />

            {/* Продукты — только клиент */}
            <Route
              path="/products"
              element={
                <PrivateCustomer>
                  <Products />
                </PrivateCustomer>
              }
            />

            <Route
              path="/products/:id"
              element={
                <PrivateCustomer>
                  <ProductDetails />
                </PrivateCustomer>
              }
            />

            {/* Корзина */}
            <Route
              path="/cart"
              element={
                <PrivateCustomer>
                  <CartPage />
                </PrivateCustomer>
              }
            />

            {/* Админ — список товаров */}
            <Route
              path="/admin/products"
              element={
                <PrivateAdmin>
                  <AdminProducts />
                </PrivateAdmin>
              }
            />

            {/* Админ — добавить товар */}
            <Route
              path="/admin/add-product"
              element={
                <PrivateAdmin>
                  <AddProduct />
                </PrivateAdmin>
              }
            />

            {/* Админ — изменить товар */}
            <Route
              path="/admin/edit-product/:id"
              element={
                <PrivateAdmin>
                  <EditProduct />
                </PrivateAdmin>
              }
            />

          </Routes>
        </Layout>

        {/* Плавающая корзина */}
        <FloatingCart />

      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
