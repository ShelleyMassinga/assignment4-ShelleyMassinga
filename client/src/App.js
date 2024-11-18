import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  
  useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    fetchCart();
    fetchWishlist();
  }
}, []);

  const fetchCart = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch('http://localhost:8080/api/cart', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setCart(data);
        localStorage.setItem('cart', JSON.stringify(data));
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
      
    }
  };

  const fetchWishlist = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;
  
    try {
      console.log('Fetching wishlist...');
      const response = await fetch('http://localhost:8080/api/wishlist', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch wishlist');
      }
      
      const data = await response.json();
      console.log('Fetched wishlist data:', data);
      setWishlist(data);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };

  const addToCart = async (product) => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ productId: product._id, quantity: 1 })
      });

      if (response.ok) {
        fetchCart();
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const addToWishlist = async (product) => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ productId: product._id })
      });

      if (response.ok) {
        fetchWishlist();
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  const removeFromCart = async (productId) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch(`http://localhost:8080/api/cart/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        fetchCart();
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const removeFromWishlist = async (productId) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch(`http://localhost:8080/api/wishlist/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        fetchWishlist();
      }
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  const updateCartQuantity = async (productId, newQuantity) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch(`http://localhost:8080/api/cart/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ quantity: newQuantity })
      });

      if (response.ok) {
        fetchCart();
      }
    } catch (error) {
      console.error('Error updating cart quantity:', error);
    }
  };

  const moveToWishlist = async (product) => {
    const token = localStorage.getItem('token');
    if (!token) return;
  
    try {
      const productId = product.product?._id || product._id;
      console.log('Moving product to wishlist, ID:', productId);
  
      const cartResponse = await fetch(`http://localhost:8080/api/cart/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (!cartResponse.ok) {
        throw new Error('Failed to remove from cart');
      }
  
      const wishlistResponse = await fetch('http://localhost:8080/api/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ productId })
      });
  
      if (!wishlistResponse.ok) {
        throw new Error('Failed to add to wishlist');
      }
  
      
      await fetchCart();
      await fetchWishlist();
    } catch (error) {
      console.error('Error moving to wishlist:', error, 'Product:', product);
    }
  };
  
  const moveToCart = async (product) => {
    const token = localStorage.getItem('token');
    if (!token) return;
  
    try {
      await addToCart(product);
      await removeFromWishlist(product._id);
      await fetchCart();
      await fetchWishlist();
    } catch (error) {
      console.error('Error moving to cart:', error);
    }
  };
  const cartItemsCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <Router>
      <div className="App">
        <Navbar cartItemsCount={cartItemsCount} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<ProductList />} />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} addToWishlist={addToWishlist} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cart}
                updateQuantity={updateCartQuantity}
                removeFromCart={removeFromCart}
                moveToWishlist={moveToWishlist}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlistItems={wishlist}
                removeFromWishlist={removeFromWishlist}
                moveToCart={moveToCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;