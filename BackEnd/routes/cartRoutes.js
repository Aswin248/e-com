const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// GET /cart/:userId
router.get('/:userId', cartController.getCart);

// POST /cart
router.post('/', cartController.saveCart);

// DELETE /cart/:userId/:itemId
router.delete('/:userId/:itemId', cartController.deleteCartItem);



module.exports = router;
