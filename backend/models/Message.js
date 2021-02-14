const mongoose = require("mongoose");
const { Schema } = mongoose;

const message = new Schema({
  text: String,
  author: { type: Schema.Types.ObjectId, ref: "users" },
  time: Date
});

mongoose.model("messages", message);
