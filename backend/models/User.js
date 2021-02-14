const mongoose = require("mongoose");
const { Schema } = mongoose;

const user = new Schema({
  id: String,
  name: String,
  age: Number,
  rating: Number,
  description: String
});

mongoose.model("users", user);
