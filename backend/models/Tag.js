const mongoose = require("mongoose");
const { Schema } = mongoose;

const tag = new Schema({
  slug: String,
  text: String
});

mongoose.model("tags", tag);
