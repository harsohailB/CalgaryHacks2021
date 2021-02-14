const mongoose = require("mongoose");
const { Schema } = mongoose;

const message = new Schema({
  text: String,
  author: { type: Schema.Types.ObjectId, ref: "users", autopopulate: "true" }
});

message.plugin(require('mongoose-autopopulate'));

mongoose.model("messages", message);
