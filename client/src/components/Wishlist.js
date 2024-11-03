import React from 'react';
import './Wishlist.css';

function Wishlist({ wishlistItems, removeFromWishlist, moveToCart }) {
    return (
        <div className="wishlist">
            <h1>Wishlist</h1>
            {wishlistItems.map(item => (
                <div key={item.id} className="wishlist-item">
                    <div className="wishlist-item-info">
                        <h3>{item.name}</h3>
                        <p>by {item.author}</p>
                        <p>Price: ${item.price.toFixed(2)}</p>
                    </div>
                    <div className="wishlist-item-actions">
                        <button className="remove-btn" onClick={() => removeFromWishlist(item.id)}>Remove</button>
                        <button className="move-to-cart-btn" onClick={() => moveToCart(item)}>Move to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Wishlist;