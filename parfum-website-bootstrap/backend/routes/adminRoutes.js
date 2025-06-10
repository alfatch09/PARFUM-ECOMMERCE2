import express from 'express';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get(
  '/dashboard',
  protect, // cek token dulu
  authorize('admin', 'owner'), // hanya admin & owner boleh akses
  (req, res) => {
    res.json({ message: 'Selamat datang di dashboard admin' });
  }
);

export default router;
