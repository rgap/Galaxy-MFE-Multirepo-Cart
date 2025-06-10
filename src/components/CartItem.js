import React from "react";
import { useCart } from "../providers";

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="cart-item">
      <img src="https://cdn-icons-png.flaticon.com/512/3775/3775364.png" alt={item.name} className="cart-item-image" />

      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-price">${item.price}</p>

        <div className="cart-item-controls">
          <button className="quantity-button" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
            -
          </button>

          <span className="quantity-display">{item.quantity}</span>

          <button className="quantity-button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>

          <button className="remove-button" onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
