const Product = require('../models/productModel');

// ✅ CREATE product
exports.createProduct = async (req, res) => {
  try {
    console.log('📝 req.body:', req.body);
    console.log('🖼️ req.file:', req.file);

    const { product, description, price, id } = req.body;

    // ✅ Validate required fields (image comes from req.file)
    if (!product || !description || !price || !id) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // ✅ Image path (if file is uploaded)
    //const imageUrl = req.file ? `/static/images/${req.file.filename}` : '';
    const imageUrl = req.file ? `/images/${req.file.filename}` : '';

    const newProduct = new Product({
      product,
      description,
      price,
      id,
      image: imageUrl,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('❌ Error creating product:', error.message);
    res.status(500).json({ error: error.message });
  }
};

// ✅ GET all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ GET product by MongoDB _id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ UPDATE product by MongoDB _id
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ DELETE product by MongoDB _id
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
