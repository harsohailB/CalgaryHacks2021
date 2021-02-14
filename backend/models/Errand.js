const mongoose = require("mongoose");
const { Schema } = mongoose;

const errand = new Schema({
  name: String,
  description: String,
  postTime: Date,
  expiryTime: Date,
  poster: { type: Schema.Types.ObjectId, ref: "users" },
  quester: { type: Schema.Types.ObjectId, ref: "users" },
  review: { type: Schema.Types.ObjectId, ref: "reviews" },
  messageThread: { type: Schema.Types.ObjectId, ref: "messageThreads" },
});

mongoose.model("errands", errand);
