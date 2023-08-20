// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  image: String,
  rating:String,
  reviews:String,
  featuredImage0:String,
  featuredImage1:String,
  featuredImage2:String,
  featuredImage3:String,
  featuredImage4:String,
  featuredTitle: String,
  featuredDescription:String,
  featuredPrice:String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
