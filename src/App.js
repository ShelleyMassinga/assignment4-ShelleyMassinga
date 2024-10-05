// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import ProductList from './components/ProductList'; 
import ProductDetails from './components/ProductDetails'; 
import Cart from './components/Cart'; 
import Wishlist from './components/Wishlist'; 

function App() { 
  const [cart, setCart] = useState([]); 
  const [wishlist, setWishlist] = useState([]); 
  
  const addToCart = (product) => { 
    setCart([...cart, product]); 
  }; 
  
  const addToWishlist = (product) => { 
    setWishlist([...wishlist, product]); 
  }; 
  
  return ( 
    <Router> 
      <div className="App"> 
        <Navbar /> 
        <Switch> 
          <Route exact path="/" component={ProductList} /> 
          <Route 
            path="/product/:id" 
            render={(props) => ( 
              <ProductDetails {...props} addToCart={addToCart} addToWishlist={addToWishlist} /> 
            )} 
          /> 
          <Route 
            path="/cart" 
            render={(props) => ( 
              <Cart {...props} cart={cart} setCart={setCart} /> 
            )} 
          /> 
          <Route 
            path="/wishlist" 
            render={(props) => ( 
              <Wishlist {...props} wishlist={wishlist} setWishlist={setWishlist} /> 
            )} 
          /> 
        </Switch> 
      </div> 
    </Router> 
  ); 
} 

export default App;