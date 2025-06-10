import express from 'express';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Cari user berdasarkan email
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: 'User tidak ditemukan' });

    // Cek kecocokan password
    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(401).json({ message: 'Password salah' });

    // Buat token JWT dengan payload id dan role
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Kirim token dan role ke client
    res.json({
      token,
      role: user.role,
      message: 'Login berhasil',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
});

// REGISTER
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Cek apakah email sudah terdaftar
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'Email sudah terdaftar' });

    // Buat user baru
    const newUser = new User({
      name,
      email,
      password,
      role: role || 'user', // Jika role tidak diberikan, default 'user'
    });

    // Simpan user ke database
    await newUser.save();

    // Buat token JWT untuk user baru
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Kirim response berhasil dengan token dan role
    res.status(201).json({
      message: 'Registrasi berhasil',
      token,
      role: newUser.role,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Registrasi gagal', error: err.message });
  }
});

export default router;
