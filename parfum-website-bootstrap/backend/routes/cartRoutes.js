import express from 'express';
import {
  getAllCarts,
  createCart,
  deleteCart,
  updateCart
} from '../controllers/cartController.js';


const router = express.Router();

// GET semua cart
router.get('/', getAllCarts);

// POST tambah produk ke cart
router.post('/', createCart);

// PUT update jumlah produk dalam cart
router.put('/:id', updateCart);

// DELETE hapus produk dari cart
router.delete('/:id', deleteCart);


export default router;
