import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true, min: 0 },
  countInStock: { type: Number, required: true, min: 0 },
  notes: { type: String }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);
export default Product;
