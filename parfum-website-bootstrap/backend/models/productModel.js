import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  countInStock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: false,
});

export default Product;
