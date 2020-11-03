require('../index');
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  id: Number,
  name: String,
  address: String,
  price: Number,
  imageUrl: String,
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
