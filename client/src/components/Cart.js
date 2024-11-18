import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart({ cartItems, updateQuantity, removeFromCart, moveToWishlist }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
  }, [navigate]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item._id} className="cart-item">
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => updateQuantity(item._id || item.productId, item.quantity + 1)}>+</button>
                <button onClick={() => updateQuantity(item._id || item.productId, item.quantity - 1)}>-</button>
                <button 
                  className="remove-btn" 
                  onClick={() => removeFromCart(item._id || item.productId)}
                >
                  Remove
                </button>
                <button 
                  className="move-to-wishlist-btn" 
                  onClick={() => moveToWishlist(item)}
                >
                  Move to Wishlist
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: ${total.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;