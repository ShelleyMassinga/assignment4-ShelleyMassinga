const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const mongoose = require('mongoose');


router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let product;

    
    if (mongoose.Types.ObjectId.isValid(id)) {
      product = await Product.findById(id);
    }

    if (!product) {
      product = await Product.findOne({ id: parseInt(id) });
    }

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Error fetching product details' });
  }
});

module.exports = router;