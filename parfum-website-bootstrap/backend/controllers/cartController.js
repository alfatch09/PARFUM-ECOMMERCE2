import Cart from '../models/cartModel.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';

export const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.findAll({
      include: [
        { model: User, attributes: ['name', 'email'] },
        { model: Product, attributes: ['name', 'brand', 'price'] }
      ]
    });
    res.json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ['name', 'email'] },
        { model: Product, attributes: ['name', 'brand', 'price'] }
      ]
    });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const newCart = await Cart.create({
      userId,
      productId,
      quantity: quantity || 1,
    });
    res.status(201).json(newCart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    await cart.update({
      userId,
      productId,
      quantity
    });

    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    await cart.destroy();
    res.json({ message: 'Cart deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
