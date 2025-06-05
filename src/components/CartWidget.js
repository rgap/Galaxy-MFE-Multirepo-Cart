import React from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const CartWidget = () => {
  const { items } = useCart();

  return (
    <div style={{
      padding: '1rem',
      backgroundColor: 'white',
      borderLeft: '1px solid #ddd',
      height: '100vh',
      width: '100%',
      maxWidth: '400px',
      overflowY: 'auto'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>Shopping Cart</h2>
      
      {items.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px'
        }}>
          <p>Your cart is empty</p>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            Add some items to your cart to see them here.
          </p>
        </div>
      ) : (
        <>
          <div style={{ marginBottom: '1rem' }}>
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <CartSummary />
        </>
      )}
    </div>
  );
};

export default CartWidget; 