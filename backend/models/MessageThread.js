const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageThread = new Schema({
  errand: { type: Schema.Types.ObjectId, ref: "errand" },
  messages: [{ type: Schema.Types.ObjectId, ref: "messages", autopopulate: "true" }]
});

messageThread.plugin(require('mongoose-autopopulate'));

mongoose.model("messagethreads", messageThread);
