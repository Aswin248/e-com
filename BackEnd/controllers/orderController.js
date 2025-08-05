const Order = require('../models/orderModel');

// POST /order
exports.placeOrder = async (req, res) => {
  try {
    const { userId, address, paymentOption, orderSummary, items, total } = req.body;

    if (!userId || !items || items.length === 0 || !total) {
      return res.status(400).json({ error: 'Missing required order data' });
    }

    const newOrder = new Order({
      userId,
      address,
      paymentOption,
      orderSummary,
      items,
      total
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Failed to place order' });
  }
};

// GET /order/:userId
exports.getOrdersByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.find({ userId }).sort({ placedAt:  1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};
