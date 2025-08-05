const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  product: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  id: { type: String, required: true, unique: true },

  image: { type: String, default: '' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
