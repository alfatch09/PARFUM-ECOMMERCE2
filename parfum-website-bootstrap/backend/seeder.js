import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const products = [
  {
    name: 'Dior Sauvage',
    brand: 'Dior',
    price: 1250000,
    description: 'A fresh and spicy fragrance for men.',
    notes: 'Bergamot, Pepper, Ambroxan',
    image: 'src/assets/fanny.jpg'
  },
  {
    name: 'Chanel No. 5',
    brand: 'Chanel',
    price: 1450000,
    description: 'The legendary women\'s fragrance.',
    notes: 'Aldehydes, Jasmine, Sandalwood',
    image: 'https://example.com/chanel-no5.jpg'
  },
  {
    name: 'YSL Libre',
    brand: 'Yves Saint Laurent',
    price: 1350000,
    description: 'Floral lavender perfume for bold women.',
    notes: 'Lavender, Orange Blossom, Musk',
    image: 'https://example.com/ysl-libre.jpg'
  }
];

const importData = async () => {
  try {
    await Product.deleteMany();
    const inserted = await Product.insertMany(products);
    console.log('Sample products inserted:', inserted);
    process.exit();
  } catch (err) {
    console.error('Error seeding data:', err.message);
    process.exit(1);
  }
};

importData();
