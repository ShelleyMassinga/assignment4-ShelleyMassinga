import React from 'react'; 

function Wishlist({ wishlistItems, removeFromWishlist, moveToCart }) { 
    return ( 
        <div> 
            <h1>Wishlist</h1> 
            <ul> {wishlistItems.map(item => ( 
                <li key={item.id}> 
                    {item.name} 
                    <button onClick={() => removeFromWishlist(item.id)}>Remove</button> 
                    <button onClick={() => moveToCart(item)}>Move to Cart</button> 
                </li> ))} 
            </ul> 
        </div> 
    ); 
} 

export default Wishlist;