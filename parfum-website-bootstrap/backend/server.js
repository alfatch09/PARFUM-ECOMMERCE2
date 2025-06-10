import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';

import connectDB from './config/db.js';

import cartRoutes from './routes/cartRoutes.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Untuk __dirname di ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Static folder untuk akses gambar
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// Setup multer storage & upload middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets'); // Pastikan folder ini sudah ada
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}${ext}`;
    cb(null, filename);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // max 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('File harus berupa gambar (jpeg, jpg, png, webp)'));
    }
  }
});

// Route upload gambar
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Tidak ada file yang diupload' });
  }
  res.json({ filename: req.file.filename });
});

// Routes lain
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Middleware penangkap error multer dan error lain
app.use((err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof multer.MulterError) {
    // Error dari multer, misal file terlalu besar
    return res.status(400).json({ message: err.message });
  } else if (err) {
    // Error lain
    return res.status(400).json({ message: err.message });
  }

  next();
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const cors = require('cors');
app.use(cors());

app.use('/assets', express.static('public/assets'));
