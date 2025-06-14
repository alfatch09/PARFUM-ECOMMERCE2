import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Fungsi untuk membuat token JWT
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// REGISTER USER
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Cek apakah email sudah terdaftar
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email sudah terdaftar' });
    }

    // Hash password sebelum disimpan
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat user baru
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || 'user',
    });

    res.status(201).json({ message: 'Registrasi berhasil', user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    }});
  } catch (error) {
    console.error('[REGISTER ERROR]', error);
    res.status(500).json({ message: 'Registrasi gagal', error: error.message });
  }
};

// LOGIN USER
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('[LOGIN INPUT]', { email, password });

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      console.log('[LOGIN ERROR] User not found');
      return res.status(401).json({ message: 'Email tidak terdaftar' });
    }

    // Bandingkan password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('[PASSWORD CHECK]', {
      inputPassword: password,
      hashedPassword: user.password,
      isMatch
    });

    if (!isMatch) {
      return res.status(401).json({ message: 'Password salah' });
    }

    // Login sukses
    const token = generateToken(user.id, user.role);
    console.log('[LOGIN SUCCESS]', { email: user.email, role: user.role });

    res.status(200).json({
      message: 'Login berhasil!',
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error) {
    console.error('[LOGIN ERROR]', error);
    res.status(500).json({ message: 'Login gagal', error: error.message });
  }
};
