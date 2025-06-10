import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./providers";

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route index element={<CartPage />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
