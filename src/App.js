import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import AdminProducts from "./admin/AdminProducts";

import PrivateAdmin from "./routes/PrivateAdmin";
import PrivateCustomer from "./routes/PrivateCustomer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Доступно только кастомеру */}
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

        {/* Доступно только админу */}
        <Route
          path="/admin/products"
          element={
            <PrivateAdmin>
              <AdminProducts />
            </PrivateAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
