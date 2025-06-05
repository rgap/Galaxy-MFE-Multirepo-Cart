import React from 'react';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { items } = useCart();

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Shopping Cart</h1>
      
      {items.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '4px'
        }}>
          <h2>Your cart is empty</h2>
          <p>Add some items to your cart to see them here.</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 300px',
          gap: '2rem',
          alignItems: 'start'
        }}>
          <div>
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div>
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage; 