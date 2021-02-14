const mongoose = require("mongoose");
const { Schema } = mongoose;

const errandStage = new Schema({
  number: Number,
  description: String
});

mongoose.model("errandStages", errandStage);
