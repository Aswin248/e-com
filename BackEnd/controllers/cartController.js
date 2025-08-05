const Cart = require('../models/cartModel');

const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json(cart || { userId: req.params.userId, cartItems: [] });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cart' });
  }
};

const saveCart = async (req, res) => {
  const { userId, cartItems } = req.body;

  if (!userId || !Array.isArray(cartItems)) {
    return res.status(400).json({ message: 'Missing or invalid cart data' });
  }

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, cartItems });
    } else {
      cart.cartItems = cartItems; // Replace with latest from frontend
    }

    await cart.save();
    res.json({ message: 'Cart updated', cart });
  } catch (err) {
    res.status(500).json({ message: 'Failed to save cart' });
  }
};

const deleteCartItem = async (req, res) => {
  const { userId, itemId } = req.params;

  try {
    const updatedCart = await Cart.findOneAndUpdate(
      { userId },
      { $pull: { cartItems: { id: itemId } } },
      { new: true }
    );

    if (!updatedCart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json({ cartItems: updatedCart.cartItems });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete cart item' });
  }
};

module.exports = {
  getCart,
  saveCart,
  deleteCartItem,
};
