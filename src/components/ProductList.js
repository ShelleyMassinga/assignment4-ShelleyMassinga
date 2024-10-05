import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from your JSON file
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="product-list">
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.author}</p>
                        <p className="price">${product.price}</p>
                        <Link to={`/product/${product.id}`} className="view-details-btn">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;