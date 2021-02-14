const mongoose = require("mongoose");
const { Schema } = mongoose;

const tag = new Schema({
  id: String,
  text: String
});

mongoose.model("tags", tag);
