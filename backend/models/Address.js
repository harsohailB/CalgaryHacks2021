const mongoose = require("mongoose");
const { Schema } = mongoose;

const address = new Schema({
    title: string,
    lat: Number,
    lon: Number
  });
  
  mongoose.model("addresses", address);