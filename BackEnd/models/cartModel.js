const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  id: String,
  title: String,
  img: String,
  price: Number,
  quantity: Number,
});

const cartSchema = new mongoose.Schema({
  userId: String,
  cartItems: [cartItemSchema],
});

module.exports = mongoose.model('Cart', cartSchema);
