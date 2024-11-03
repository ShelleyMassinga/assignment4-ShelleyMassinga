const express = require('express');
const router = express.Router();

let wishlist = [];

// Get all wishlist items
router.get('/', (req, res) => {
  res.json(wishlist);
});

// Add an item to the wishlist
router.post('/', (req, res) => {
  const item = req.body;
  wishlist.push(item);
  res.json(wishlist);
});

// Remove an item from the wishlist
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  wishlist = wishlist.filter(item => item.id !== id);
  res.json(wishlist);
});

module.exports = router;
