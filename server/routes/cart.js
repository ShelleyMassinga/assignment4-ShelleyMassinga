const express = require('express');
const router = express.Router();

let cart = [];

// Get all cart items
router.get('/', (req, res) => {
  res.json(cart);
});

// Add an item to the cart
router.post('/', (req, res) => {
  const item = req.body;
  cart.push(item);
  res.json(cart);
});

// Remove an item from the cart
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter(item => item.id !== id);
  res.json(cart);
});

module.exports = router;
