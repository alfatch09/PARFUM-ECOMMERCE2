const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
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

// GET product by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'ID produk tidak valid' });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Gagal mengambil produk' });
  }
});

// POST add new product
router.post('/', async (req, res) => {
  try {
    const { name, price, description, image, brand, countInStock, notes } = req.body;

    if (!name || !price || !image || !brand || countInStock == null) {
      return res.status(400).json({ message: 'Name, price, image, brand, dan countInStock harus diisi' });
    }

    if (price < 0 || countInStock < 0) {
      return res.status(400).json({ message: 'Price dan countInStock harus >= 0' });
    }

    const product = new Product({ name, price, description, image, brand, countInStock, notes });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Gagal menambahkan produk' });
  }
});

// DELETE product by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  // Validasi ID MongoDB
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'ID produk tidak valid' });
  }

  try {
    const deleted = await Product.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Produk tidak ditemukan' });
    }

    res.json({ message: 'Produk berhasil dihapus' });
  } catch (err) {
    console.error('Gagal menghapus produk:', err.message);
    res.status(500).json({ message: 'Gagal menghapus produk' });
  }
});

module.exports = router;
