import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ cartItemsCount }) {
    const logoURL = 'https://bookstore-product-images.s3.us-east-1.amazonaws.com/bookStoreLogo.png';
    const isLoggedIn = !!localStorage.getItem('token');
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoURL} alt="Haven of Pages Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li>
            <Link to="/wishlist" className="icon-link">
                <FaHeart className="navbar-icon" />
            </Link>
        </li>
        <li>
          <Link to="/cart" className="icon-link">
            <FaShoppingCart className="navbar-icon" />
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}</Link>
        </li>
        {isLoggedIn ? (
          <li><Link to="/profile">Profile</Link></li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;