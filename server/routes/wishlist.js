const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const Product = require('../models/Product');
const mongoose = require('mongoose');

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('wishlist');
    console.log('Found user wishlist:', user.wishlist);
    res.json(user.wishlist || []);
  } catch (error) {
    console.error('Error in GET wishlist:', error);
    res.status(500).json({ message: 'Error fetching wishlist' });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const { productId } = req.body;
    console.log('Adding product to wishlist:', productId);

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const user = await User.findById(req.user._id);
    
    if (!user.wishlist.includes(productId)) {
      user.wishlist.push(productId);
      await user.save();
    }

    const updatedUser = await User.findById(user._id).populate('wishlist');
    console.log('Updated wishlist:', updatedUser.wishlist);
    res.json(updatedUser.wishlist);
  } catch (error) {
    console.error('Error in POST wishlist:', error);
    res.status(500).json({ message: 'Error adding to wishlist' });
  }
});

router.delete('/:productId', auth, async (req, res) => {
  try {
    const { productId } = req.params;
    console.log('Removing product from wishlist:', productId);

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    const user = await User.findById(req.user._id);
    user.wishlist = user.wishlist.filter(id => id.toString() !== productId);
    await user.save();

    const updatedUser = await User.findById(user._id).populate('wishlist');
    console.log('Updated wishlist after removal:', updatedUser.wishlist);
    res.json(updatedUser.wishlist);
  } catch (error) {
    console.error('Error in DELETE wishlist:', error);
    res.status(500).json({ message: 'Error removing from wishlist' });
  }
});

module.exports = router;