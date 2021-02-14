const mongoose = require("mongoose");
const { Schema } = mongoose;

const address = new Schema({
  title: String,
  lat: Number,
  lon: Number
});

mongoose.model("addresses", address);