const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  author: { type: String, required: true },
  ISBN: { type: String, required: true },
  Publisher: { type: String, required: true },
  Pages: { type: String, required: true },
  Language: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
