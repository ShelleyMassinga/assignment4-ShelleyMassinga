import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails({ addToCart, addToWishlist }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8080/api/products/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Product not found');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched product:', data);
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details">
        <div className="product-image">
          <img 
            src={product.image || '/api/placeholder/400/600'} 
            alt={product.name} 
            onError={(e) => {
              e.target.src = '/api/placeholder/400/600';
            }}
          />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="author">by {product.author}</p>
          <p className="price">${Number(product.price).toFixed(2)}</p>
          <p className="description">{product.description}</p>
          <div className="additional-details">
            <p><strong>ISBN:</strong> {product.ISBN}</p>
            <p><strong>Publisher:</strong> {product.Publisher}</p>
            <p><strong>Pages:</strong> {product.Pages}</p>
            <p><strong>Language:</strong> {product.Language}</p>
          </div>
        </div>
      </div>
      <div className="product-actions">
        <button 
          className="btn btn-primary" 
          onClick={() => {
            addToCart(product);
            navigate('/cart');
          }}
        >
          Add to Cart
        </button>
        <button className="btn btn-secondary" onClick={() => {addToWishlist(product); navigate('/wishlist');
          }}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;