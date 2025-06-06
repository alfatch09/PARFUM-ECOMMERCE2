// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil produk' });
  }
});

module.exports = router;
