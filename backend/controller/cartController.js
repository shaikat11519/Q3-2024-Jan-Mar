const Cart = require("../models/Cart");

// Create cart
const createCart = async (req, res) => {
  try {
    const total= req.body.movies.length;
    const cart = await Cart.create({movies: req.body.movies, total: total});
    res.status(201).json({ success: true, data: cart });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get cart by ID
const getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id).populate("movies.movieId");
    res.status(200).json({ success: true, data: cart });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};

// Update cart
const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, data: cart });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete cart
const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
};


module.exports = {
  createCart, updateCart, deleteCart, getCartById
}