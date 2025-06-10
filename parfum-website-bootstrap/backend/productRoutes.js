const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Gagal mengambil produk' });
  }
});

// POST add new product
router.post('/', async (req, res) => {
  try {
    const { name, price, description, image, brand, countInStock, notes } = req.body;

    // Validasi wajib
    if (!name || !price || !image || !brand || countInStock == null) {
      return res.status(400).json({ message: 'Name, price, image, brand, dan countInStock harus diisi' });
    }

    // Validasi angka >= 0
    if (price < 0 || countInStock < 0) {
      return res.status(400).json({ message: 'Price dan countInStock harus >= 0' });
    }

    // Buat objek produk baru sesuai schema
    const product = new Product({
      name,
      price,
      description,
      image,
      brand,
      countInStock,
      notes,
    });

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Gagal menambahkan produk' });
  }
});

module.exports = router;
