// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Define only the route — logic is handled in the controller
router.post('/login', authController.loginUser);

module.exports = router;
