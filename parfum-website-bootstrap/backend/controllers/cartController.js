import Cart from '../models/cartModel.js';

// Get all carts (populate user and product details)
export const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find()
      .populate('userId', 'email name')          // populate user email & name
      .populate('productId', 'name brand price'); // populate product name, brand, price
    res.json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get cart by id
export const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id)
      .populate('userId', 'email name')
      .populate('productId', 'name brand price');
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new cart item
export const createCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const newCart = new Cart({
      userId,
      productId,
      quantity: quantity || 1,
    });
    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update cart item by id
export const updateCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.userId = userId ?? cart.userId;
    cart.productId = productId ?? cart.productId;
    cart.quantity = quantity ?? cart.quantity;

    const updatedCart = await cart.save();
    res.json(updatedCart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete cart item by id
export const deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    await cart.remove();
    res.json({ message: 'Cart deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
