import React from 'react';
import './Cart.css';

function Cart({ cartItems, updateQuantity, removeFromCart, moveToWishlist }) {
    // Check if cartItems is undefined or null, use an empty array if it is
    const items = cartItems || [];
    
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h1>Cart</h1>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                items.map(item => (
                    <div key={item.id} className="cart-item">
                        <div className="cart-item-info">
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                        <div className="cart-item-actions">
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                            <button className="move-to-wishlist-btn" onClick={() => moveToWishlist(item)}>Move to Wishlist</button>
                        </div>
                    </div>
                ))
            )}
            <div className="cart-total">
                <p>Total: ${total.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Cart;