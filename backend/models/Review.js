const mongoose = require("mongoose");
const { Schema } = mongoose;

const review = new Schema({
  postTime: Date,
  rating: Number,
  body: String
});

mongoose.model("reviews", review);
