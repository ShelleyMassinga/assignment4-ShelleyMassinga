const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = require('../client/public/products.json');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    return Product.insertMany(products);
  })
  .then(() => {
    console.log('Products imported successfully');
    mongoose.disconnect();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB or inserting data:', error);
  });
