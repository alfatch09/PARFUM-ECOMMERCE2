const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Konfigurasi storage untuk menyimpan file ke folder public/assets
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets'); // Pastikan folder ini ada
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}${ext}`;
    cb(null, filename);
  },
});

// Validasi dan batasan upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Max 5MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('File harus berupa gambar (jpeg, jpg, png, webp)'));
    }
  },
});

// Route POST /api/upload
router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Tidak ada file yang diupload' });
  }

  // Kembalikan nama file untuk digunakan frontend
  res.json({ filename: req.file.filename });
});

module.exports = router;
