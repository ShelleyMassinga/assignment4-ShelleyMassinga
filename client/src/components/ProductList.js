import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    let results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === 'lowToHigh') {
      results.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highToLow') {
      results.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(results);
  }, [searchTerm, sortOrder, products]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-list">
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="">Sort by price</option>
          <option value="lowToHigh">Lowest to Highest</option>
          <option value="highToLow">Highest to Lowest</option>
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product._id || product.id} className="product-item">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
            </div>
            <h2>{product.name}</h2>
            <p>{product.author}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <Link 
              to={`/product/${product._id || product.id}`} 
              className="view-details-btn"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;