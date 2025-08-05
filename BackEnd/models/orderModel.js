const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  address: String,
  paymentOption: String,
  orderSummary: String,
  items: [
    {
      title: String,
      quantity: Number,
      price: Number
    }
  ],
  total: Number,
  placedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
