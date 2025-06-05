import React from 'react';
import { useCart } from '../hooks/useCart';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '0.75rem',
      margin: '0.5rem 0',
      backgroundColor: '#f8f9fa',
      borderRadius: '4px',
      fontSize: '0.9rem'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        marginBottom: '0.5rem'
      }}>
        <h4 style={{ margin: 0, fontSize: '1rem' }}>{item.name}</h4>
        <button
          onClick={() => removeItem(item.id)}
          style={{
            background: 'none',
            border: 'none',
            color: '#dc3545',
            cursor: 'pointer',
            padding: '0',
            fontSize: '0.8rem'
          }}
        >
          ✕
        </button>
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ color: '#666' }}>${item.price}</span>
        
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            style={{
              padding: '0.25rem 0.5rem',
              border: '1px solid #ddd',
              backgroundColor: '#fff',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            -
          </button>
          
          <span>{item.quantity}</span>
          
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            style={{
              padding: '0.25rem 0.5rem',
              border: '1px solid #ddd',
              backgroundColor: '#fff',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem; 