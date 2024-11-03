import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        fetch('http://ec2-54-209-203-114.compute-1.amazonaws.com:8080/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

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
                    <div key={product.id} className="product-item">
                        <div className="product-image-container">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <h2>{product.name}</h2>
                        <p>{product.author}</p>
                        <p className="price">${product.price.toFixed(2)}</p>
                        <Link to={`/product/${product.id}`} className="view-details-btn">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;