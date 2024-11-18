const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = require('../client/public/products.json');

console.log('Attempting to connect to MongoDB at:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('Connected to MongoDB successfully');
  try {
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert new products
    const result = await Product.insertMany(products);
    console.log(`Successfully inserted ${result.length} products`);
  } catch (error) {
    console.error('Error during database operations:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
})
.catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
  process.exit(1);
});