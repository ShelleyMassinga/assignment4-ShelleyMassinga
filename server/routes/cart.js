const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('cart.product');
    const cartItems = user.cart.map(item => ({
      ...item.product.toObject(),
      quantity: item.quantity,
      _id: item._id 
    }));
    res.json(cartItems);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ message: 'Error fetching cart items' });
  }
});


router.post('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { productId, quantity = 1 } = req.body;

    const cartItemIndex = user.cart.findIndex(item => 
      item.product.toString() === productId
    );

    if (cartItemIndex > -1) {
      user.cart[cartItemIndex].quantity += quantity;
    } else {
      user.cart.push({ product: productId, quantity });
    }

    await user.save();
    res.json(user.cart);
  } catch (error) {
    res.status(500).json({ message: 'Error adding item to cart' });
  }
});


router.put('/:itemId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { quantity } = req.body;

    const cartItem = user.cart.id(req.params.itemId);
    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    if (quantity <= 0) {
      cartItem.remove();
    } else {
      cartItem.quantity = quantity;
    }

    await user.save();
    res.json(user.cart);
  } catch (error) {
    res.status(500).json({ message: 'Error updating cart item' });
  }
});


router.delete('/:itemId', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.cart = user.cart.filter(item => item._id.toString() !== req.params.itemId);
    await user.save();
    res.json(user.cart);
  } catch (error) {
    res.status(500).json({ message: 'Error removing item from cart' });
  }
});

module.exports = router;