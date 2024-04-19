const mongoose=require('mongoose');
const ProductSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
});
  const product= mongoose.model('product',ProductSchema);
  module.exports = product;
