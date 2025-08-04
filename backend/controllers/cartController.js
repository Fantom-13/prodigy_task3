const CartItem = require('../models/CartItem');

exports.getCart = async (req, res) => {
  const items = await CartItem.find().populate('productId');
  res.json(items);
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const item = new CartItem({ productId, quantity });
  await item.save();
  res.status(201).json(item);
};
