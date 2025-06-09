import { Button } from 'common-components-react';
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
        <Button
          variant="danger"
          size="medium"
          onClick={() => removeItem(item.id)}
        >
          ✕
        </Button>
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
          <Button
            variant="outline"
            size="medium"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            -
          </Button>
          
          <span>{item.quantity}</span>
          
          <Button
            variant="outline"
            size="medium"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem; 