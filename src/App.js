import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';

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