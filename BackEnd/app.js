const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
 const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());



// Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/userdb', {
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));


app.use('/cart', cartRoutes);

app.use('/users', userRoutes);

app.use('/products', productRoutes);

app.use('/order', orderRoutes);


app.use('/images', express.static(path.join(__dirname, 'static/images')));

app.use('/auth', authRoutes);


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
// app.listen(3000, () => {
//   console.log('🚀 Server running at http://localhost:3000');

