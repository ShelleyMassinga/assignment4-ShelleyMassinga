import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 

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
            <h1>Our Books</h1> 
            {products.map(product => ( 
                <div key={product.id} className="product-item"> 
                    <h2>{product.name}</h2> 
                    <p>{product.description}</p> 
                    <p>Price: ${product.price}</p> 
                    <Link to={`/product/${product.id}`}>View Details</Link> 
                </div> 
            ))} 
        </div> 
    ); 
} 

export default ProductList;