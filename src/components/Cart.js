import React from 'react'; 
import './Cart.css';

function Cart({ cartItems, updateQuantity, removeFromCart, moveToWishlist }) { 
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0); 
    
    return ( 
        <div> 
            <h1>Cart</h1> 
            <ul> 
                {cartItems.map(item => ( 
                    <li key={item.id}> 
                        {item.name} - Quantity: {item.quantity} 
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button> 
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button> 
                        <button onClick={() => removeFromCart(item.id)}>Remove</button> 
                        <button onClick={() => moveToWishlist(item)}>Move to Wishlist</button> 
                    </li> 
                ))} 
            </ul> 
            <p>Total: ${total.toFixed(2)}</p> 
        </div> 
    ); 
} 

export default Cart; 