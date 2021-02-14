const mongoose = require("mongoose");
const { Schema } = mongoose;

const errand = new Schema({
  name: String,
  description: String,
  postTime: Date,
  expiryTime: Date,
  startTime: Date,
  endTime: Date,
  poster: { type: Schema.Types.ObjectId, ref: "users" },
  quester: { type: Schema.Types.ObjectId, ref: "users" },
  review: { type: Schema.Types.ObjectId, ref: "reviews" },
  messageThread: { type: Schema.Types.ObjectId, ref: "messageThreads" },
  status: { type: String, enum: ['AVAILABLE', 'ACCEPTED', 'IN_PROGRESS', 'COMPLETED'] }
});

mongoose.model("errands", errand);
