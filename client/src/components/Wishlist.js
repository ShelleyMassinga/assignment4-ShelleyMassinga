import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Wishlist.css';

function Wishlist({ wishlistItems, removeFromWishlist, moveToCart }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
  }, [navigate]);

  
  return (
    <div className="wishlist">
      <h1>Wishlist</h1>
      {!wishlistItems || wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlistItems.map(item => (
          <div key={item._id} className="wishlist-item">
            <div className="wishlist-item-info">
              <h3>{item.name}</h3>
              <p>by {item.author}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
            <div className="wishlist-item-actions">
              <button 
                className="remove-btn" 
                onClick={() => removeFromWishlist(item._id || item.productId)}
              >
                Remove
              </button>
              <button 
                className="move-to-cart-btn" 
                onClick={() => moveToCart(item)}
              >
                Move to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;