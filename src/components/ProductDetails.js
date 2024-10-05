import React from 'react'; 
import './ProductDetails.css';

function ProductDetails({ match, addToCart, addToWishlist }) { 
    // Fetch product details based on match.params.id 
    // For now, we'll use a placeholder 
    const product = { id: 1, name: 'Sample Book', description: 'A great book', price: 29.99 }; 
    
    return ( 
        <div> 
            <h1>{product.name}</h1> 
            <p>{product.description}</p> 
            <p>Price: ${product.price}</p> 
            <button onClick={() => addToCart(product)}>Add to Cart</button> 
            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button> 
        </div> 
    ); 
} 

export default ProductDetails; 