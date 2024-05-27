// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Middleware to update the 'updatedAt' field before saving
productSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
