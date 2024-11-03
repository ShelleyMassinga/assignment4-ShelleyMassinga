import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails({ addToCart, addToWishlist }) {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                const selectedProduct = data.find(p => p.id === parseInt(id));
                setProduct(selectedProduct);
            })
            .catch(error => console.error('Error fetching product details:', error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-details-container">
            <div className="product-details">
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                    <h1>{product.name}</h1>
                    <p className="author">by {product.author}</p>
                    <p className="price">${product.price.toFixed(2)}</p>
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
                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                <button className="btn btn-secondary" onClick={() => addToWishlist(product)}>Add to Wishlist</button>
            </div>
        </div>
    );
}

export default ProductDetails;