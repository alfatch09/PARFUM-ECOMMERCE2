import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController.js';

const router = express.Router();

// GET semua produk
router.get('/', getAllProducts);

// GET produk by ID
router.get('/:id', getProductById);

// POST tambah produk baru
router.post('/', createProduct);

// PUT update produk by ID
router.put('/:id', updateProduct);

// DELETE hapus produk by ID
router.delete('/:id', deleteProduct);

export default router;
