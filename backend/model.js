// model.js
const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  avatar: String,
  rating: Number,
  noOfSea: Number,
  noOfEps: Number,
  ott: String,
  mainImage: String,
  mainInfo: String,
  trailer: String,
  id: Number, // Keep id as a Number
});

const webseries = mongoose.model("Webseries", schema);
module.exports = webseries;
