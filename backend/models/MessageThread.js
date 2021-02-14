const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageThread = new Schema({
  messages: [{ type: Schema.Types.ObjectId, ref: "messages" }]
});

mongoose.model("messageThreads", messageThread);
